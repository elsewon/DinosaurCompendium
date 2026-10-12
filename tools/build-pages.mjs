#!/usr/bin/env node
/* ===== 개별 공룡 페이지 생성 =====
 *
 *   node tools/build-pages.mjs
 *
 * 공룡 한 마리당 완성된 정적 페이지를 p/<id>.html 로 만든다 (티니핑 도감과 같은 방식).
 * 내용을 빌드 때 미리 그려 두므로 페이지가 자체 완결한다 — 한 마리를 보려고 전체 데이터를
 * 받지 않고, 자바스크립트를 실행하지 않는 메신저 미리보기에도 내용이 보인다.
 *
 * 머리말·꼬리말은 index.html 에서 그대로 떼어다 쓴다 (같은 내용을 여러 번 적지 않으려고).
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = path.join(ROOT, "p");
const UP = "../";                 // p/<id>.html 에서 루트로 올라가는 길이
/* og 태그·canonical 은 절대 주소여야 한다. 배포 주소가 바뀌면 여기와 index.html · quiz.html ·
   rank.html 의 og 태그를 함께 고친다 (메신저 미리보기 카드는 tools/build-og.py). */
const BASE = "https://elsewon.github.io/DinosaurCompendium";

/* ── 데이터 ───────────────────────────────────────────── */
globalThis.window = {};
await import(path.join(ROOT, "data/dinosaurs.js"));
const DATA = globalThis.window.DINOSAURS || [];

/* ── util.js 재사용 ───────────────────────────────────────
   그림 태그·태그칩·연대 글은 목록·퀴즈와 똑같이 보여야 하므로 같은 함수를 그대로 불러 쓴다
   (여기서 다시 구현하면 언젠가 어긋난다). */
const sandbox = {
  window: { DINOSAURS: DATA },
  document: { addEventListener() {} },
  location: { pathname: "/", search: "", href: "/" },
  navigator: {},
};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, "js/util.js"), "utf8"), sandbox);
const { imageMarkup, speakBtnHTML, speakBlockBtnHTML, tagsHTML, rangeSentence } = sandbox;

/* ── index.html 의 머리말·꼬리말 ──────────────────────────── */
const indexHtml = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

/** 루트 기준 상대 경로를 p/ 기준으로 바꾼다 (외부 링크·앵커는 그대로) */
function reroot(html) {
  return html.replace(/(href|src)="([^"]*)"/g, (m, attr, url) =>
    /^(https?:|mailto:|#|data:|\/)/.test(url) ? m : `${attr}="${UP}${url}"`);
}
function section(tag) {
  const m = indexHtml.match(new RegExp(`  <${tag}[\\s\\S]*?</${tag}>`));
  if (!m) throw new Error(`index.html 에서 <${tag}> 를 찾지 못했습니다`);
  return reroot(m[0]);
}
const HEADER = section("header");
const FOOTER = section("footer");

/* ── 페이지 ──────────────────────────────────────────── */
const esc = (s) => String(s ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* 먹이 한 줄. 아이에게 읽어 주는 글이라 「~이에요」 로 맺는다.
   초식은 「풀」 이라 하지 않는다 — 풀이 퍼진 것은 공룡 시대 끝 무렵이다. */
const DIET_TEXT = {
  육식: "다른 동물을 잡아먹는 육식 공룡이에요.",
  초식: "나뭇잎 같은 식물을 먹는 초식 공룡이에요.",
  잡식: "식물도 먹고 작은 동물도 먹는 잡식 공룡이에요.",
};

/* 그림 출처 한 줄 — 작가·라이선스·원본을 저마다 링크로 (SOURCES.md 의 표시 형식) */
function creditHTML(im) {
  const link = (href, text) => href
    ? `<a href="${esc(href)}" rel="noopener" target="_blank">${esc(text)}</a>` : esc(text);
  return `${link(im.artistUrl, im.artist)} · ${link(im.licenseUrl, im.license)} · ${link(im.page, "위키미디어 공용")}`;
}

function page(d) {
  const title = `공룡 도감 - ${d.nameKo}`;
  const desc = `${d.nameKo}(${d.genus}) — ${d.period}에 살았던 ${d.diet} 공룡이에요.`;
  const url = `${BASE}/p/${encodeURIComponent(d.id)}.html`;
  const block = (head, body) => `<div class="info-block">\n          <h3>${head}</h3>\n          ${body}\n        </div>`;
  const im = d.image || {};

  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="공룡 도감">
  <meta property="og:locale" content="ko_KR">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${BASE}/images/og/${encodeURIComponent(d.id)}.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(d.nameKo)}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="canonical" href="${url}">
  <link rel="icon" type="image/svg+xml" href="${UP}images/favicon.svg">
  <link rel="stylesheet" href="${UP}css/styles.css">
</head>
<body>
${HEADER}

  <main class="wrap detail">
    <div class="detail-top">
      <!-- 목록 카드와 같은 짜임 — 그림 아래에 이름·학명·태그 -->
      <div class="detail-card">
        <div class="detail-image">${imageMarkup(d, 1280, UP, true)}</div>
        <div class="detail-head">
          <h1><span>${esc(d.nameKo)}</span>${speakBtnHTML(d.nameKo)}</h1>
          <div class="latin">${esc(d.genus)}</div>
          <div class="detail-tags">${tagsHTML(d)}</div>
        </div>
        <!-- 카드 맨 아래 띠 둘 — 인기 차트가 조회·좋아요를 나란히 세우듯 여기서도 같은 차례로
             쌓는다. 조회는 읽기만 하는 값이라 버튼이 아니고, 좋아요만 누른다.
             둘 다 숫자를 받아 온 뒤에 나타난다 (js/stats.js · js/page.js). -->
        <div class="view-bar" hidden>
          <span class="bar-icon" aria-hidden="true">🔎</span>
          <span class="bar-label">조회</span>
          <b data-view>0</b>
        </div>
        <button class="like-btn" type="button" data-like hidden aria-pressed="false">
          <span class="bar-icon like-heart" aria-hidden="true">❤️</span>
          <span class="bar-label">좋아요</span>
          <b class="like-count">0</b>
        </button>
      </div>
      <div class="detail-info">
        ${block(`🕰️ 살았던 때${speakBlockBtnHTML("살았던 때 읽어 주기")}`,
          `<p>${esc(d.period)}, ${esc(rangeSentence(d.range))} 살았어요.</p>`)}
        ${block(`🍽️ 먹이${speakBlockBtnHTML("먹이 읽어 주기")}`, `<p>${esc(DIET_TEXT[d.diet] || "")}</p>`)}
        ${block("🖼️ 그림", `<p>${creditHTML(im)}</p>` + (im.speculative
          ? `\n          <p class="note">화석이 적어서 많은 부분을 짐작해 그린 그림이에요.</p>` : ""))}
        ${d.kowiki ? block("📚 더 알아보기",
          `<p><a href="https://ko.wikipedia.org/wiki/${encodeURIComponent(d.kowiki.replace(/ /g, "_"))}" rel="noopener" target="_blank">위키백과: ${esc(d.kowiki)}</a></p>`) : ""}
      </div>
    </div>
  </main>

${FOOTER}

  <script src="${UP}data/dino-ids.js"></script>
  <script src="${UP}js/util.js"></script>
  <script src="${UP}js/stats.js"></script>
  <script src="${UP}js/page.js"></script>
</body>
</html>
`;
}

/* ── 쓰기 ──────────────────────────────────────────────
 * 폴더를 통째로 지우고 다시 쓰지 않는다. 이 저장소는 iCloud Drive 안에 있어, 지우고 같은
 * 이름으로 다시 만드는 사이 동기화가 끼면 아이클라우드가 양쪽을 다른 파일로 보고 충돌 사본을
 * 남긴다. 같은 이름에 덮어쓰고, 명단에서 빠진 것만 따로 지운다. 내용이 그대로인 파일은
 * 건드리지 않는다 — 손댄 시각만 바뀌어도 아이클라우드가 통째로 다시 올린다. */
function writeIfChanged(file, text) {
  let old = null;
  try { old = fs.readFileSync(file, "utf8"); } catch { /* 처음 만드는 파일 */ }
  if (old === text) return false;
  fs.writeFileSync(file, text, "utf8");
  return true;
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const keep = new Set(DATA.map((d) => `${d.id}.html`));
let written = 0;
for (const d of DATA) if (writeIfChanged(path.join(OUT_DIR, `${d.id}.html`), page(d))) written++;

/* 명단에서 빠진 것 정리 — 이름이 바뀌어 남은 옛 페이지, 아이클라우드 충돌 사본 등 */
const stale = fs.readdirSync(OUT_DIR).filter((f) => f.endsWith(".html") && !keep.has(f));
for (const f of stale) fs.rmSync(path.join(OUT_DIR, f));

/* 「아무 공룡」용 id 목록 — 개별 페이지는 데이터 전체를 싣지 않으므로 이것만 받는다 */
writeIfChanged(path.join(ROOT, "data/dino-ids.js"),
  "/* 자동 생성 (node tools/build-pages.mjs) — 「아무 공룡」에 쓰는 id 목록 */\n" +
  `window.DINO_IDS = ${JSON.stringify(DATA.map((d) => d.id))};\n`);

console.log(`개별 페이지 ${DATA.length}개 → p/<id>.html (새로 쓴 것 ${written}개, 그대로 둔 것 ${DATA.length - written}개)`);
if (stale.length) console.log(`명단에 없어 지운 것 ${stale.length}개: ${stale.join(", ")}`);
