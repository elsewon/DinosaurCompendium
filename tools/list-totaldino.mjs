#!/usr/bin/env node
/* ===== TotalDino 가 그린 공룡 찾기 =====
 *
 * 위키미디어 공용의 「Category:Dinosauria paleo-illustrations by TotalDino」(하위 분류 포함)를
 * 훑어, 명단(tools/roster.js)에 없는 공룡과 명단에 있지만 그림이 사라진 공룡을 알려 준다.
 * TotalDino 는 지금도 새 그림을 올리므로, 가끔 돌려 새로 그린 공룡을 찾는 데 쓴다.
 *
 *   node tools/list-totaldino.mjs           찾기만 한다
 *   node tools/list-totaldino.mjs --write   명단에 없는 공룡을 roster.js 에 더한다
 *
 * 공룡이 아닌 그림(익룡·모사사우루스 등)은 TotalDino 가 Dinosauria 분류 밖에 두므로 걸리지 않는다.
 * 위키미디어 공용에서 '부정확' 표시(Inaccurate·Obsolete paleoart)가 붙은 그림은 더하지 않는다.
 * 분류 안에 다른 작가의 그림(「… UDL.png」 — UnexpectedDinoLesson)이 섞여 있어 작가 칸도 본다.
 * 이 도감은 그림 풍을 맞추려고 TotalDino 그림만 쓴다(SOURCES.md).
 *
 * 갓 올린 그림은 아직 분류가 없어 분류만 훑으면 놓친다(2026년 10월에 6종을 놓쳤다). 그래서 작가 이름으로도
 * 찾아 **분류 없는 TotalDino 그림**을 따로 알려 준다. 공룡이 아닌 그림(익룡 등)일 수도 있어 저절로 더하지
 * 않는다 — 영어 위키백과 등으로 공룡인지 보고 roster.js 에 손으로 넣는다.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ROSTER_PATH = path.join(ROOT, "tools/roster.js");
const ROOT_CAT = "Category:Dinosauria paleo-illustrations by TotalDino";
const UA = "DinosaurCompendium/0.1 (non-commercial kids' encyclopedia)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(params) {
  const url = "https://commons.wikimedia.org/w/api.php?" +
    new URLSearchParams({ ...params, format: "json", formatversion: "2" });
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

/* 분류를 하위 분류까지 훑어 파일마다 { title, inaccurate, other } 를 모은다 (other = 다른 작가) */
async function walk() {
  const files = new Map();
  const seen = new Set();
  const queue = [ROOT_CAT];
  while (queue.length) {
    const cat = queue.shift();
    if (seen.has(cat)) continue;
    seen.add(cat);
    let cont = {};
    for (;;) {
      const d = await api({
        action: "query", generator: "categorymembers", gcmtitle: cat, gcmtype: "file|subcat", gcmlimit: "50",
        prop: "imageinfo", iiprop: "extmetadata", iiextmetadatafilter: "Categories|Artist", ...cont,
      });
      for (const p of (d.query && d.query.pages) || []) {
        if (p.ns === 14) { queue.push(p.title); continue; }
        const em = (p.imageinfo || [{}])[0].extmetadata || {};
        files.set(p.title, {
          title: p.title,
          inaccurate: /Inaccurate|Obsolete/.test((em.Categories && em.Categories.value) || ""),
          other: !/TotalDino/.test((em.Artist && em.Artist.value) || ""),
        });
      }
      if (!d.continue) break;
      cont = d.continue;
      await sleep(1500);
    }
    await sleep(1500);
  }
  return [...files.values()];
}

/* 「File:Spinosaurus TD.png」 → Spinosaurus. 파일 이름의 첫 낱말이 속 이름이다. */
function genusOf(title) {
  const m = title.match(/^File:([A-Z][a-z]+)\b/);
  return m ? m[1] : null;
}

function loadRoster() {
  const win = {};
  new Function("window", fs.readFileSync(ROSTER_PATH, "utf8"))(win);
  return win.ROSTER.map((r) => (typeof r === "string" ? { genus: r } : r));
}

const files = await walk();
const byGenus = new Map();
for (const f of files) {
  const g = genusOf(f.title);
  if (!g || f.inaccurate || f.other) continue;
  const list = byGenus.get(g) || [];
  list.push(f.title.slice(5));
  byGenus.set(g, list);
}
/* 한 속에 그림이 둘 이상이면 「<속> TD.png」 를 먼저 고른다 */
const pick = (g, list) => list.find((f) => f === `${g} TD.png`) || list.sort()[0];

/* 작가 이름으로 찾아, TotalDino 의 어느 분류에도 들지 않은 그림을 모은다 */
async function uncategorized() {
  const out = [];
  let cont = {};
  for (;;) {
    const d = await api({
      action: "query", generator: "search", gsrsearch: '"TotalDino"', gsrnamespace: "6", gsrlimit: "50",
      prop: "imageinfo", iiprop: "extmetadata", iiextmetadatafilter: "Categories|Artist", ...cont,
    });
    for (const p of (d.query && d.query.pages) || []) {
      const em = (p.imageinfo || [{}])[0].extmetadata || {};
      if (!/TotalDino/.test((em.Artist && em.Artist.value) || "")) continue;
      if (/paleo-illustrations by TotalDino/i.test((em.Categories && em.Categories.value) || "")) continue;
      out.push(p.title.slice(5));
    }
    if (!d.continue) break;
    cont = d.continue;
    await sleep(1500);
  }
  return out.sort();
}

const roster = loadRoster();
const inRoster = new Set(roster.map((r) => r.genus));
const fresh = [...byGenus.keys()].filter((g) => !inRoster.has(g)).sort();
const gone = roster.filter((r) => !byGenus.has(r.genus)).map((r) => r.genus);
const skipped = files.filter((f) => f.inaccurate).map((f) => f.title.slice(5));
const others = files.filter((f) => f.other).map((f) => f.title.slice(5));

console.log(`분류 안의 그림 ${files.length}장 → 속 ${byGenus.size}개 ('부정확' 표시 ${skipped.length}장, 다른 작가 ${others.length}장 뺌)`);
console.log(`명단에 없는 공룡 ${fresh.length}종${fresh.length ? ": " + fresh.join(", ") : ""}`);
if (gone.length) console.log(`명단에 있지만 그림을 못 찾은 공룡: ${gone.join(", ")}`);
if (skipped.length) console.log(`'부정확' 표시로 뺀 그림: ${skipped.join(", ")}`);
if (others.length) console.log(`다른 작가라 뺀 그림: ${others.join(", ")}`);
const loose = (await uncategorized()).filter((f) => !roster.some((r) => f.startsWith(r.genus + " ")));
if (loose.length) console.log(`분류 없는 TotalDino 그림 (공룡인지 보고 roster.js 에 손으로): ${loose.join(", ")}`);

if (process.argv.includes("--write") && fresh.length) {
  /* 명단을 알파벳 차례로 다시 쓴다. 파일 이름이 규칙(「<속> TD.png」)과 다르면 { genus, file } 로. */
  const all = [...roster, ...fresh.map((g) => ({ genus: g }))]
    .map((r) => {
      const file = r.file || pick(r.genus, byGenus.get(r.genus) || [`${r.genus} TD.png`]);
      return file === `${r.genus} TD.png` ? { genus: r.genus } : { genus: r.genus, file };
    })
    .sort((a, b) => a.genus.localeCompare(b.genus));
  const text = fs.readFileSync(ROSTER_PATH, "utf8");
  const head = text.slice(0, text.indexOf("window.ROSTER"));
  const body = all.map((r) => r.file
    ? `  { genus: ${JSON.stringify(r.genus)}, file: ${JSON.stringify(r.file)} },`
    : `  ${JSON.stringify(r.genus)},`).join("\n");
  fs.writeFileSync(ROSTER_PATH, `${head}window.ROSTER = [\n${body}\n];\n`);
  console.log(`roster.js 에 ${fresh.length}종을 더했다 (전체 ${all.length}종, 알파벳 차례)`);
}
