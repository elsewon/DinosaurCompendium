#!/usr/bin/env node
/* ===== data/dinosaurs.js 빌드 =====
 *
 *   roster.js    (수록할 공룡 명단)             ← 권위 있는 명단
 * + fetched.json (node tools/fetch.mjs 결과)   ← 이름·그림·시기·식성
 * + names-ko.js  (우리가 붙인 한국어 이름)       ← 위키데이터·위키백과에 이름이 없을 때
 * + details.js   (손으로 고친 값)               ← 있으면 덮어쓴다
 * → data/dinosaurs.js
 *
 * 실행: node tools/build-data.mjs     (네트워크를 쓰지 않는다)
 *
 * 싣는 차례는 유명한 차례다 — 그 공룡이 실린 위키(대개 언어별 위키백과) 수가 많은 것부터.
 * 티라노사우루스·트리케라톱스가 맨 앞에 서고, 지난해 이름이 붙은 공룡은 뒤로 간다.
 * 아이가 아는 공룡부터 보게 하려는 것이다. 수가 같으면 가나다 차례.
 *
 * 그 차례의 앞 50종에 famous 표시를 단다(details.js 에서 famous 로 더한 것도). 이름 맞추기의
 * 쉬움·보통은 이 「유명한 공룡」만, 어려움은 모든 공룡을 낸다.
 * 유명한 공룡은 앞에 모은다 — details.js 에서 더한 것(둘리사우루스)은 위키 수로는 뒤쪽이지만
 * 앞 50종 바로 뒤에 선다. 그래야 목록의 앞쪽이 곧 유명한 공룡이다.
 */
import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "data/dinosaurs.js");
const FAMOUS_COUNT = 50;          // 「유명한 공룡」 — 실린 위키 수로 앞 50종

function loadWindowFile(rel) {
  const win = {};
  new Function("window", fs.readFileSync(path.join(ROOT, rel), "utf8"))(win);
  return win;
}
const ROSTER = loadWindowFile("tools/roster.js").ROSTER.map((r) => (typeof r === "string" ? r : r.genus));
const DETAILS = loadWindowFile("tools/details.js").DETAILS || {};
const NAMES_KO = loadWindowFile("tools/names-ko.js").NAMES_KO || {};
const { epochs, dinosaurs: FETCHED } = JSON.parse(fs.readFileSync(path.join(ROOT, "tools/fetched.json"), "utf8"));

/* 시기 이름 — 백만 년 전 숫자로 PBDB 구간표(ICS)에서 세(世)를 찾는다 */
const EPOCH_KO = {
  "Early Triassic": ["트라이아스기", "전기"], "Middle Triassic": ["트라이아스기", "중기"], "Late Triassic": ["트라이아스기", "후기"],
  "Early Jurassic": ["쥐라기", "전기"], "Middle Jurassic": ["쥐라기", "중기"], "Late Jurassic": ["쥐라기", "후기"],
  "Early Cretaceous": ["백악기", "전기"], "Late Cretaceous": ["백악기", "후기"],
};
function epochAt(ma, side) {
  // 시작은 그 구간 안쪽(경계보다 조금 앞), 끝은 경계보다 조금 뒤로 본다.
  // 그래야 6,600만 년 전에 끝난 공룡이 신생대로 잡히지 않는다.
  const t = side === "start" ? ma - 0.001 : ma + 0.001;
  const hit = Object.entries(epochs).find(([, v]) => v.eag >= t && t > v.lag);
  return hit && EPOCH_KO[hit[0]];
}
function periodName({ start, end }) {
  const a = epochAt(start, "start"), b = epochAt(end, "end");
  if (!a || !b) return null;
  if (a.join() === b.join()) return `${a[0]} ${a[1]}`;
  if (a[0] === b[0]) return `${a[0]} ${a[1]}~${b[1]}`;
  return `${a[0]} ${a[1]} ~ ${b[0]} ${b[1]}`;
}

/* 식성 — PBDB 값을 아이들이 아는 세 갈래로 묶는다 */
function dietKo(pbdb) {
  if (!pbdb) return null;
  if (/omnivore/.test(pbdb)) return "잡식";
  if (/carnivore|piscivore|insectivore/.test(pbdb)) return "육식";
  if (/herbivore|granivore|browser|grazer|frugivore/.test(pbdb)) return "초식";
  return null;
}
/* PBDB 에 식성이 없으면 TotalDino 가 그림을 넣어 둔 무리로 짐작한다. 수각류 가운데 풀을 먹은
   무리(테리지노사우루스류 등)는 PBDB 에 식성이 있어 여기까지 오지 않는다. 큰 무리(Dinosauria)
   에만 든 것은 짐작할 수 없어 details.js 에 적는다. */
const CLADE_DIET = {
  Sauropoda: "초식", Thyreophora: "초식", Ceratopsia: "초식", Hadrosauridae: "초식", Pachycephalosauria: "초식",
  Theropoda: "육식", Tyrannosauroidea: "육식", Dromaeosauridae: "육식", Ceratosauria: "육식", Troodontidae: "육식",
  Carcharodontosauridae: "육식", Metriacanthosauridae: "육식", Spinosauridae: "육식",
  Oviraptorosauria: "잡식",
};

/* 한국어 이름 — 위키데이터 → 한국어 위키백과 문서 제목 → 우리가 붙인 표기(names-ko.js).
   문서 제목의 괄호(「켄트로사우루스 (검룡)」)는 같은 이름의 다른 문서와 가르려는 것이라 뗀다. */
function nameKo(genus, f) {
  return (DETAILS[genus] && DETAILS[genus].nameKo)
    || f.nameKo
    || (f.kowiki ? f.kowiki.replace(/\s*\(.*\)$/, "") : null)
    || NAMES_KO[genus]
    || null;
}

const imgv = (file) => crypto.createHash("sha1").update(fs.readFileSync(file)).digest("hex").slice(0, 8);

const list = [];
const problems = [];
for (const genus of ROSTER) {
  const f = FETCHED[genus];
  if (!f) { problems.push(`${genus}: fetched.json 에 없음 — node tools/fetch.mjs 를 먼저 돌리세요`); continue; }
  const det = DETAILS[genus] || {};
  const id = genus.toLowerCase();
  const webp = path.join(ROOT, "images", id + ".webp");
  const im = f.image;
  if (!im || !fs.existsSync(webp)) { problems.push(`${genus}: 그림 없음 — 싣지 않는다`); continue; }
  const range = det.range || f.range || f.rangePbdb || null;
  const row = {
    id,
    genus,
    nameKo: nameKo(genus, f),
    ...(det.aliases ? { aliases: det.aliases } : {}),  // 별명 (검색용)
    range,                                            // 백만 년 전 { start, end }
    period: range ? periodName(range) : null,
    diet: det.diet || dietKo(f.dietPbdb) || CLADE_DIET[im.clade] || null,
    sitelinks: f.sitelinks || 0,                      // 실린 위키 수 — 유명한 정도
    _famous: !!det.famous,
    wikidata: f.wikidata || null,
    kowiki: f.kowiki || null,
    image: {
      width: im.width, height: im.height,
      artist: im.artist, artistUrl: im.artistUrl,
      license: im.license, licenseUrl: im.licenseUrl,
      page: im.page,
      speculative: im.speculative,
    },
    imgv: imgv(webp),
  };
  for (const k of ["nameKo", "period", "diet"]) if (!row[k]) problems.push(`${genus}: ${k} 없음`);
  list.push(row);
}

list.sort((a, b) => b.sitelinks - a.sitelinks || String(a.nameKo).localeCompare(String(b.nameKo), "ko"));
/* 유명한 공룡 표시 — 차례의 앞 FAMOUS_COUNT 종과 details.js 에서 더한 것. 아닌 것에는 칸을 두지 않는다.
   표시가 붙은 것을 앞에 모은다. 무리 안의 차례는 위키 수 그대로라(filter 는 차례를 흩뜨리지 않는다)
   details.js 에서 더한 것은 앞 50종의 끝(토르보사우루스) 바로 뒤에 선다. */
const marked = list.map(({ _famous, ...d }, i) => (i < FAMOUS_COUNT || _famous ? { ...d, famous: true } : d));
const rows = [...marked.filter((d) => d.famous), ...marked.filter((d) => !d.famous)];

const header = `/* ===== 공룡 데이터 (자동 생성) =====
 * 생성: node tools/build-data.mjs
 * 원본: tools/roster.js (명단) + tools/fetched.json (수집 결과) + tools/names-ko.js (우리가 붙인 이름)
 *       + tools/details.js (손으로 고친 값)
 * ⚠️ 이 파일을 직접 고치지 마세요. 원본을 고친 뒤 다시 빌드하세요.
 *
 * 차례: 유명한 공룡(famous) 먼저, 무리마다 유명한 차례 (sitelinks = 그 공룡이 실린 위키 수, 많은 것부터)
 * famous: 유명한 공룡 — 앞 ${FAMOUS_COUNT}종과 tools/details.js 에서 더한 것 (이름 맞추기의 쉬움·보통이 낸다)
 * range: 살았던 시기, 백만 년 전 { start, end } (영어 위키백과 정보상자, 없으면 PBDB)
 * period: range 로 계산한 시대 이름 · diet: 초식 | 육식 | 잡식 (details.js > PBDB > TotalDino 의 무리)
 * 그림: images/<id>.webp (상세·퀴즈) · images/thumb/<id>.webp (목록) — 출처는 image 칸, 기준은 SOURCES.md
 */
`;
const out = header + "window.DINOSAURS = " + JSON.stringify(rows, null, 2) + ";\n";
fs.mkdirSync(path.dirname(OUT), { recursive: true });
// 내용이 같으면 쓰지 않는다 (아이클라우드가 같은 파일을 다시 올리지 않게)
const changed = !fs.existsSync(OUT) || fs.readFileSync(OUT, "utf8") !== out;
if (changed) fs.writeFileSync(OUT, out);
console.log(`공룡 ${rows.length}종 (유명한 공룡 ${rows.filter((d) => d.famous).length}종) → data/dinosaurs.js ${changed ? "(새로 씀)" : "(그대로)"}`);
if (problems.length) console.warn("\n확인할 것:\n  " + problems.join("\n  "));
