#!/usr/bin/env node
/* ===== 공룡 자료 수집 =====
 *
 *   tools/roster.js 의 명단마다 네 곳에서 자료를 모읍니다.
 *     위키미디어 공용  그림(TotalDino)의 주소·작가·라이선스, 그림이 든 분류(무리)
 *     위키데이터       한국어 이름, 위키백과 문서 제목, 몇 개 언어 위키백과에 실렸는지(유명한 정도)
 *     영어 위키백과    살았던 시기(백만 년 전) — 정보상자의 fossil_range
 *     PBDB            식성, 지질 시대 구간표, (위키백과에 없을 때) 살았던 시기
 *   → tools/fetched.json
 *
 * 그림 파일은 여기서 받지 않습니다 — tools/make-images.py 가 받아 WebP 로 바꿉니다.
 *
 * 실행: node tools/fetch.mjs     (Node 18+, 외부 패키지 불필요)
 *       node tools/fetch.mjs --ranges
 *         살았던 시기(range · rangePbdb)만 다시 받고 나머지 값은 fetched.json 그대로 둡니다.
 *         시기를 읽는 법을 고쳤을 때 씁니다 — 전부 다시 받으면 위키데이터의 실린 위키 수가 바뀌어
 *         싣는 차례와 「유명한 공룡」 이 함께 흔들릴 수 있습니다.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "tools/fetched.json");
/* 위키미디어는 정해 둔 폭(… 960, 1280 …)의 썸네일만 만든다. 1024 를 달라고 해도 1280 짜리 파일을
   주면서 폭은 1024 라고 적어 보냈다(2026년 10월). 처음부터 1280 을 달라고 해 적힌 값과 파일을 맞춘다. */
const IMAGE_WIDTH = 1280;
const UA = "DinosaurCompendium/0.1 (non-commercial kids' encyclopedia)";

function loadWindowFile(rel) {
  const win = {};
  new Function("window", fs.readFileSync(path.join(ROOT, rel), "utf8"))(win);
  return win;
}
const ROSTER = loadWindowFile("tools/roster.js").ROSTER
  .map((r) => (typeof r === "string" ? { genus: r } : r))
  .map((r) => ({ ...r, file: r.file || `${r.genus} TD.png` }));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* 위키미디어는 요청이 몰리면 429 를 돌려준다. Retry-After 만큼 기다렸다 다시 묻는다. */
async function get(url) {
  for (let attempt = 1; attempt <= 6; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.ok) return res.json();
    if (res.status !== 429 && res.status < 500) throw new Error(`${res.status} ${url}`);
    const wait = Number(res.headers.get("retry-after")) || 10 * attempt;
    console.warn(`  (${res.status}, ${wait}초 기다림)`);
    await sleep(wait * 1000);
  }
  throw new Error(`계속 실패: ${url}`);
}

const api = (base, params) =>
  get(base + "?" + new URLSearchParams({ ...params, format: "json", formatversion: "2" }));

const chunks = (arr, n) => Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));
const plain = (html) => (html || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const firstHref = (html) => {
  const m = (html || "").match(/href="([^"]+)"/);
  return m ? (m[1].startsWith("//") ? "https:" + m[1] : m[1]) : null;
};

/* ---------- 위키미디어 공용: 그림과 라이선스 ----------
 * clade 는 TotalDino 가 그림을 넣어 둔 무리 분류다 (「Tyrannosauroidea paleo-illustrations by
 * TotalDino」 → Tyrannosauroidea). PBDB 에 식성이 없을 때 무리로 짐작하는 데 쓴다. */
async function fetchImages() {
  const out = {};
  for (const batch of chunks(ROSTER, 50)) {
    const d = await api("https://commons.wikimedia.org/w/api.php", {
      action: "query", prop: "imageinfo", titles: batch.map((r) => "File:" + r.file).join("|"),
      iiprop: "url|extmetadata|sha1", iiurlwidth: IMAGE_WIDTH,
      iiextmetadatafilter: "Artist|LicenseShortName|LicenseUrl|Categories",
    });
    // API 는 제목의 '_' 를 공백으로 바꿔 돌려준다
    const byTitle = new Map(d.query.pages.map((p) => [p.title, p]));
    for (const r of batch) {
      const p = byTitle.get("File:" + r.file.replace(/_/g, " "));
      const ii = p && p.imageinfo && p.imageinfo[0];
      if (!ii) continue;
      const em = ii.extmetadata;
      const cats = (em.Categories && em.Categories.value) || "";
      const clade = (cats.match(/([A-Za-z]+) paleo-illustrations by TotalDino/) || [])[1] || null;
      out[r.genus] = {
        file: r.file,
        page: ii.descriptionurl,
        artist: plain(em.Artist && em.Artist.value),
        artistUrl: firstHref(em.Artist && em.Artist.value),
        license: em.LicenseShortName && em.LicenseShortName.value,
        licenseUrl: (em.LicenseUrl && em.LicenseUrl.value) || null,   // CC0·퍼블릭 도메인은 비어 있을 수 있다
        inaccurate: /Inaccurate|Obsolete/.test(cats),
        speculative: /Speculative/.test(cats),
        clade,
        sha1: ii.sha1,
        thumbUrl: ii.thumburl,
        width: ii.thumbwidth, height: ii.thumbheight,
      };
    }
    await sleep(1500);
  }
  return out;
}

/* ---------- 위키데이터: 한국어 이름, 문서 제목, 유명한 정도 ----------
 * 먼저 영어 위키백과 문서 제목(= 속 이름)으로 항목을 찾는다. 그 제목이 동음이의 문서이거나
 * 다른 것을 가리키면(예: Tawa 는 공룡이 아닌 문서) 설명문으로 걸러 내고, 학명(P225)으로 다시
 * 찾는다. 설명문을 보는 것은 항목 전체(claims)를 받으면 유명한 공룡은 한 마리에 수백 KB 라서다.
 *
 * sitelinks 는 그 항목이 실린 위키(대개 언어별 위키백과) 수다. 티라노사우루스는 100 개가 넘고
 * 지난해 이름이 붙은 공룡은 한두 개다 — 목록을 유명한 차례로 늘어놓는 데 쓴다. */
const LOOKS_LIKE_DINO = /dinosaur|saur|theropod|ornithischian|ornithopod|ceratops|ceratopsian|ankylos|stegos|hadros|sauropod|titanosaur|avialan|paravian|bird|reptile|archosaur|fossil/i;
const NOT_TAXON = /disambiguation|Wikimedia|family name|given name|surname|river|village|city|mountain|deity|god|album|film|software/i;

function entityInfo(e) {
  const desc = (e.descriptions && e.descriptions.en && e.descriptions.en.value) || "";
  const links = e.sitelinks || {};
  return {
    wikidata: e.id,
    nameKo: e.labels && e.labels.ko ? e.labels.ko.value : null,
    kowiki: links.kowiki ? links.kowiki.title : null,
    enwiki: links.enwiki ? links.enwiki.title : null,
    sitelinks: Object.keys(links).length,
    desc,
  };
}

async function fetchWikidata() {
  const out = {};
  for (const batch of chunks(ROSTER, 50)) {
    const d = await api("https://www.wikidata.org/w/api.php", {
      action: "wbgetentities", sites: "enwiki", titles: batch.map((r) => r.genus).join("|"),
      props: "labels|descriptions|sitelinks", languages: "ko|en",
    });
    for (const e of Object.values(d.entities)) {
      if (e.missing !== undefined) continue;
      const info = entityInfo(e);
      const genus = batch.map((r) => r.genus).find((g) => info.enwiki === g);
      if (genus && LOOKS_LIKE_DINO.test(info.desc) && !NOT_TAXON.test(info.desc)) out[genus] = info;
    }
    await sleep(1500);
  }
  // 못 찾은 것은 학명(P225)으로 — 같은 학명이 여럿이면 공룡처럼 보이는 설명문을 고른다
  for (const { genus } of ROSTER.filter((r) => !out[r.genus])) {
    const s = await api("https://www.wikidata.org/w/api.php", {
      action: "query", list: "search", srsearch: `haswbstatement:P225=${genus}`, srlimit: "10",
    });
    const ids = s.query.search.map((x) => x.title);
    if (ids.length) {
      const d = await api("https://www.wikidata.org/w/api.php", {
        action: "wbgetentities", ids: ids.join("|"), props: "labels|descriptions|sitelinks", languages: "ko|en",
      });
      // 공룡처럼 보이는 것 가운데 위키에 가장 많이 실린 것을 고른다. 같은 학명으로 데이터베이스용
      // 항목이 따로 있기도 해서(발라우르: 실린 곳 1개짜리) 첫 번째를 고르면 엉뚱한 것이 걸렸다.
      const cands = Object.values(d.entities).map(entityInfo)
        .filter((c) => LOOKS_LIKE_DINO.test(c.desc) && !NOT_TAXON.test(c.desc))
        .sort((a, b) => b.sitelinks - a.sitelinks);
      const best = cands[0] || (ids.length === 1 ? entityInfo(Object.values(d.entities)[0]) : null);
      if (best) out[genus] = best;
    }
    await sleep(1000);
  }
  return out;
}

/* ---------- 영어 위키백과: 살았던 시기 ----------
 * 정보상자의 fossil_range 에 든 {{Fossil range|69|66}} 같은 틀에서 처음 두 값을 읽는다.
 * 값이 숫자면 백만 년 전, 지질 시대 이름(Cenomanian 등)이면 PBDB 구간표로 숫자로 바꾼다.
 * 값이 하나뿐이면({{fossil_range|73}}) 시작과 끝이 같다 — 화면은 「약 7,300만 년 전에」 로 적는다.
 *
 * 틀 이름은 여러 꼴로 적힌다 — Fossil range · fossil_range · fossilrange, 그리고 시대 이름에 링크를
 * 거는 갈래틀 fossil range/linked. 처음에는 「fossil range|」 꼴만 읽어서, 나머지로 적힌 14종이
 * 위키백과 정보상자가 있는데도 PBDB 의 넓은 범위로 떨어졌다(2026년 10월). 마소스폰딜루스는
 * {{fossil range/linked|Hettangian|Pliensbachian}}(쥐라기 전기)인데 PBDB 의 2억 3,700만 년 전부터를
 * 받아 트라이아스기 공룡이 되어 있었다.
 *
 * PBDB 의 출현 구간을 먼저 쓰지 않는 이유: 의심스러운 화석까지 그 속으로 잡혀 있어 범위가
 * 지나치게 넓다. 스테고사우루스가 백악기 후기까지, 스피노사우루스가 백악기 전기 초부터
 * 살았던 것으로 나온다. 위키백과 정보상자는 편집자들이 논문을 보고 다듬은 값이다. */
function parseFossilRange(wikitext, intervals) {
  const line = (wikitext.match(/\|\s*fossil_range\s*=([^\n]*)/) || [])[1];
  const tpl = line && line.match(/\{\{\s*(?:fossil[\s_]*range|geological[\s_]*range)(?:\/\w+)?\s*\|([^{}]*)/i);
  if (!tpl) return null;
  const args = tpl[1]
    .replace(/<ref[^>]*\/>|<ref[^>]*>.*?<\/ref>/g, "")
    .replace(/\[\[(?:[^\]|]*\|)?([^\]]*)\]\]/g, "$1")
    .split("|").map((s) => s.trim())
    .filter((s) => s && !/^\w+\s*=/.test(s));       // earliest=… 처럼 이름 붙은 인자는 뺀다
  const toMa = (v, edge) => {
    if (/^~?\d+(\.\d+)?$/.test(v)) return Number(v.replace("~", ""));
    const name = v.replace(/\(.*$/, "").trim();      // "Cenomanian (possible Albian records)"
    const iv = intervals[name] || intervals[name.split(/\s+/)[0]];
    return iv ? iv[edge] : null;
  };
  const start = toMa(args[0], "eag");
  const end = toMa(args[1] || args[0], "lag");
  // 거꾸로 적힌 범위(예: {{Fossil range|66|68}})는 바로잡는다
  return start == null || end == null ? null : { start: Math.max(start, end), end: Math.min(start, end) };
}

async function fetchRanges(intervals, wikidata) {
  const out = {};
  // 위키데이터가 알려 준 문서 제목을 쓴다 — 「Tawa (dinosaur)」 처럼 속 이름과 다를 수 있다
  const titleOf = new Map(ROSTER.map((r) => [r.genus, (wikidata[r.genus] && wikidata[r.genus].enwiki) || r.genus]));
  for (const batch of chunks(ROSTER, 50)) {
    const titles = batch.map((r) => titleOf.get(r.genus));
    const d = await api("https://en.wikipedia.org/w/api.php", {
      action: "query", prop: "revisions", rvprop: "content", rvslots: "main", rvsection: "0",
      titles: titles.join("|"), redirects: "1",
    });
    const norm = new Map((d.query.normalized || []).map((x) => [x.to, x.from]));
    const redirect = new Map((d.query.redirects || []).map((x) => [x.to, x.from]));
    for (const p of d.query.pages) {
      const range = p.revisions && parseFossilRange(p.revisions[0].slots.main.content, intervals);
      if (!range) continue;
      let t = redirect.get(p.title) || p.title;
      t = norm.get(t) || t;
      const r = batch.find((x) => titleOf.get(x.genus) === t);
      // 넘겨주기로 다른 속의 문서에 닿았으면 그 속의 시기다 — 쓰지 않는다. 파울로돈은 문서가 아직
      // 없어 이구아노돈 문서로 넘어가, 이구아노돈의 시기를 받아 왔다. 「Tawa (dinosaur)」 처럼
      // 속 이름으로 시작하는 문서만 그 공룡의 것으로 본다.
      if (r && p.title.startsWith(r.genus)) out[r.genus] = range;
    }
    await sleep(1500);
  }
  return out;
}

/* ---------- PBDB: 식성, 지질 시대 구간표, (위키백과에 없을 때) 시기 ---------- */
async function fetchIntervals() {
  const d = await get("https://paleobiodb.org/data1.2/intervals/list.json?scale_id=1");
  return Object.fromEntries(d.records.map((r) => [r.nam, { type: r.itp, eag: r.eag, lag: r.lag }]));
}

async function fetchPbdb() {
  const out = {};
  for (const batch of chunks(ROSTER, 50)) {
    const d = await get("https://paleobiodb.org/data1.2/taxa/list.json?show=app,ecospace&name="
      + batch.map((r) => r.genus).join(","));
    for (const r of d.records) {
      out[r.nam] = {
        diet: r.jdt || null,
        // 첫 출현 구간의 이른 끝 ~ 마지막 출현 구간의 늦은 끝. 위키백과 정보상자가 없을 때만 쓴다
        range: r.fea != null && r.lla != null ? { start: r.fea, end: r.lla } : null,
      };
    }
    await sleep(1000);
  }
  return out;
}

/* ---------- 실행 ---------- */
/* --ranges 면 살았던 시기만 다시 받는다(맨 위 설명). 그림·위키데이터 값·식성은 앞서 받아 둔
   fetched.json 의 것을 그대로 쓰고, 시기 두 칸(range · rangePbdb)만 갈아 끼운다. */
const ONLY_RANGES = process.argv.includes("--ranges");
const before = ONLY_RANGES ? JSON.parse(fs.readFileSync(OUT, "utf8")).dinosaurs : null;
if (ONLY_RANGES) {
  const missing = ROSTER.map((r) => r.genus).filter((g) => !before[g]);
  if (missing.length) {
    console.error(`fetched.json 에 없는 공룡이 있어 시기만 받을 수 없습니다: ${missing.join(", ")}\n` +
      "전부 다시 받으세요: node tools/fetch.mjs");
    process.exit(1);
  }
}

console.log(`명단 ${ROSTER.length}종${ONLY_RANGES ? " — 시기만 다시 받는다" : ""}`);
const intervals = await fetchIntervals();
let images, wikidata;
if (ONLY_RANGES) {
  images = Object.fromEntries(Object.entries(before).map(([g, d]) => [g, d.image]));
  wikidata = before;              // 위키백과 문서 제목(enwiki)도 여기에 있다
} else {
  console.log("  위키미디어 공용 …");
  images = await fetchImages();
  console.log("  위키데이터 …");
  wikidata = await fetchWikidata();
}
console.log("  영어 위키백과 …");
const ranges = await fetchRanges(intervals, wikidata);
console.log("  PBDB …");
const pbdb = await fetchPbdb();

const dinosaurs = {};
const problems = [];
for (const { genus, file } of ROSTER) {
  const im = images[genus];
  const wd = wikidata[genus] || {};
  const pb = pbdb[genus] || {};
  if (!im) problems.push(`${genus}: 공용에 그림이 없음 (${file})`);
  else if (!/TotalDino/.test(im.artist)) problems.push(`${genus}: TotalDino 그림이 아님 (${im.artist})`);
  else if (im.inaccurate) problems.push(`${genus}: '부정확' 표시된 그림`);
  if (!wd.wikidata) problems.push(`${genus}: 위키데이터 항목을 못 찾음`);
  if (!ranges[genus] && !pb.range) problems.push(`${genus}: 시기를 못 찾음 (위키백과·PBDB 둘 다)`);
  const imageOk = im && /TotalDino/.test(im.artist) && !im.inaccurate;
  // 시기만 받을 때는 앞서 받아 둔 항목을 그대로 펼친다 — 칸이 이미 있으니 아래 값만 바뀌고 차례는 그대로다
  const keep = ONLY_RANGES ? before[genus] : null;
  dinosaurs[genus] = {
    ...(keep || wd),
    image: keep ? keep.image : imageOk ? im : null,
    range: ranges[genus] || null,
    rangePbdb: ranges[genus] ? null : pb.range || null,
    dietPbdb: keep ? keep.dietPbdb : pb.diet || null,
  };
}

const epochs = Object.fromEntries(Object.entries(intervals).filter(([, v]) => v.type === "epoch"));
const json = JSON.stringify({ epochs, dinosaurs }, null, 1) + "\n";
const changed = !fs.existsSync(OUT) || fs.readFileSync(OUT, "utf8") !== json;
if (changed) fs.writeFileSync(OUT, json);

const count = (f) => Object.values(dinosaurs).filter(f).length;
console.log(`수집 결과 → tools/fetched.json ${changed ? "(새로 씀)" : "(그대로)"}`);
console.log(`  한국어 이름(위키데이터) ${count((d) => d.nameKo)} · 한국어 위키백과 ${count((d) => d.kowiki)} · ` +
  `시기 위키백과 ${count((d) => d.range)} / PBDB ${count((d) => d.rangePbdb)} · 식성 PBDB ${count((d) => d.dietPbdb)} (전체 ${ROSTER.length})`);
if (problems.length) console.warn("\n확인할 것:\n  " + problems.join("\n  "));
