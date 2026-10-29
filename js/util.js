/* ===== 공룡 도감 — 공용 유틸 ===== */
/* 데이터는 data/dinosaurs.js 가 window.DINOSAURS 배열로 주입한다.
   (file:// 로 직접 열어도 동작하도록 fetch 대신 <script> 로딩 사용)
   티니핑 도감의 js/util.js 를 바탕으로 한다 — 읽어 주기·알림·랜덤은 거기서 다듬은 그대로다. */

const DATA = (window.DINOSAURS || []).slice();
const BY_ID = Object.fromEntries(DATA.map((d) => [d.id, d]));

function getAll() { return DATA; }
function getById(id) { return BY_ID[id] || null; }

/* 시대(기)와 식성 — 필터 칩과 태그가 쓴다. 데이터에 있는 것만 오래된 차례로 */
const ERAS = ["트라이아스기", "쥐라기", "백악기"];
const DIETS = ["초식", "육식", "잡식"];
function eraOf(d) { return ERAS.find((e) => (d.period || "").startsWith(e)) || null; }
function uniqueEras() { const s = new Set(DATA.map(eraOf)); return ERAS.filter((e) => s.has(e)); }
function uniqueDiets() { const s = new Set(DATA.map((d) => d.diet)); return DIETS.filter((x) => s.has(x)); }

/* 태그 둘 — 시대와 식성. 목록 카드·개별 페이지·정답 행이 같은 것을 쓴다.
   색은 무리마다 다른 계열이다(css 의 .tag.era-* · .tag.diet-*). */
function tagsHTML(d) {
  return `<span class="tag era-${eraOf(d) || "etc"}">${d.period || ""}</span>` +
    `<span class="tag diet-${d.diet || "etc"}">${d.diet || ""}</span>`;
}

/* ===== 살았던 때 =====
   range 는 백만 년 전 숫자다(data/dinosaurs.js). 아이에게는 「6,900만 년 전」처럼
   만·억 단위로 읽어 준다. 1억을 넘으면 「1억 5,560만」. */
function man(ma) {
  const n = Math.round(ma * 100);                     // 만 년 단위
  const eok = Math.floor(n / 10000), rest = n % 10000;
  if (!eok) return n.toLocaleString("ko-KR") + "만";
  return eok + "억" + (rest ? " " + rest.toLocaleString("ko-KR") + "만" : "");
}
/* 시작과 끝이 같은 범위 — 위키백과 정보상자에 값이 하나뿐인 공룡({{fossil_range|73}})이다.
   「1억 620만 년 전부터 1억 620만 년 전까지」 처럼 같은 말을 되풀이하지 않고 한 때로 적는다. */
const onePoint = (r) => man(r.start) === man(r.end);
/* 「6,900만~6,600만 년 전」 — 짧게 적는 자리(카드 밑, 정답 행)용 */
function rangeShort(r) {
  if (!r) return "";
  return onePoint(r) ? `${man(r.start)} 년 전` : `${man(r.start)}~${man(r.end)} 년 전`;
}
/* 「약 6,900만 년 전부터 6,600만 년 전까지」 — 문장으로 읽어 주는 자리용. 한 때면 「약 1억 620만 년 전에」.
   부르는 쪽이 뒤에 「살았어요」 를 붙인다. 물결(~)을 쓰지 않는다 — 음성 합성기가 기호 이름을 그대로 읽어 버린다. */
function rangeSentence(r) {
  if (!r) return "";
  return onePoint(r) ? `약 ${man(r.start)} 년 전에` : `약 ${man(r.start)} 년 전부터 ${man(r.end)} 년 전까지`;
}

/* 그림 주소. 목록처럼 작게 여럿 보이는 곳은 가로 480px WebP 썸네일을, 개별 페이지·퀴즈처럼
   크게 보이는 곳은 가로 1280px WebP 를 쓴다 (size 는 호출부가 넘기는 표시 폭).
   ?v=<그림 해시> — 그림을 고쳐 배포했을 때 브라우저가 캐시된 옛 그림을 계속 보여 주는 것을
   막는다. 그림이 그대로면 해시도 그대로라 캐시가 유지된다.
   퀴즈가 다음 문제의 그림을 미리 받아 둘 때도 이 주소를 써야 캐시가 맞는다. */
function imageSrc(d, size, prefix) {
  const dir = prefix || "";
  const v = d.imgv ? "?v=" + d.imgv : "";
  return (size && size <= 300
    ? dir + "images/thumb/" + d.id + ".webp"
    : dir + "images/" + d.id + ".webp") + v;
}

/* 그림 마크업. width·height 를 적어 두어 그림이 내려오기 전에도 자리를 잡는다(화면이 튀지 않게).
 * eager 를 주면 곧바로 받는다. 목록처럼 여럿이 깔리는 곳은 lazy 로 두어 보이는 것부터
 * 받지만, 퀴즈의 큰 그림 한 장은 곧바로 받아야 한다 — lazy 로 두면 사파리가 스크롤
 * 같은 계기가 있을 때까지 미루기도 해서, 카운트다운이 그림을 기다리는 동안 몇 초씩
 * 비었다(티니핑 도감에서 겪은 일). */
function imageMarkup(d, size, prefix, eager) {
  const im = d.image || {};
  const dims = im.width && im.height ? ` width="${im.width}" height="${im.height}"` : "";
  return `<img src="${imageSrc(d, size, prefix)}" alt="${d.nameKo}"${dims}` +
    ` loading="${eager ? "eager" : "lazy"}"${eager ? ' fetchpriority="high"' : ""}>`;
}

/* URL 쿼리 파라미터 */
function qparam(name) {
  return new URLSearchParams(location.search).get(name);
}

/* ===== 개별 페이지 주소 =====
   개별 페이지는 p/<id>.html 로 미리 만들어 둔 정적 파일이다
   (node tools/build-pages.mjs). 목록·퀴즈가 있는 루트에서는 "p/<id>.html" 로,
   개별 페이지끼리는 같은 폴더라 파일 이름만으로 가리킨다.
   폴더(p/<id>/index.html)가 아니라 파일 하나로 두는 이유: file:// 로 열었을 때
   폴더 주소를 누르면 사파리가 파인더를 열어 버린다. */
function inDinoPage() {
  return /\/p\/[^/]+\.html$/.test(location.pathname);
}
function currentDinoId() {
  const m = location.pathname.match(/\/p\/([^/]+)\.html$/);
  return m ? decodeURIComponent(m[1]) : null;
}
function dinoHref(id) {
  return (inDinoPage() ? "" : "p/") + encodeURIComponent(id) + ".html";
}

/* ===== 아무 공룡 보기 =====
   상단 바의 🎲 버튼. 모든 페이지가 util.js 를 쓰므로 여기 한 곳에 둔다.
   개별 페이지는 데이터 전체를 싣지 않으므로 id 목록만 담은 data/dino-ids.js 를 쓴다.
   목록·퀴즈는 전체 데이터가 있어 거기서 뽑는다. */
function gotoRandomDinosaur() {
  const ids = window.DINO_IDS || getAll().map((d) => d.id);
  if (!ids.length) return;
  // 개별 페이지에서 눌렀을 때 지금 보고 있는 공룡이 또 나오지 않도록 뺀다
  const current = currentDinoId();
  const pool = ids.length > 1 ? ids.filter((x) => x !== current) : ids;
  location.href = dinoHref(pool[Math.floor(Math.random() * pool.length)]);
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-random]");
  if (!el) return;
  e.preventDefault();
  gotoRandomDinosaur();
});

/* ===== 짧은 알림 =====
   누른 버튼 바로 아래에 잠깐 떴다 사라지는 말풍선. 좋아요(js/page.js)와 말해서 찾기·맞히기의
   마이크(js/list.js · js/quiz.js)가 쓴다. */
let toastTimer = null;
function showToast(msg, anchor) {
  let box = document.querySelector(".toast");
  if (!box) {
    box = document.createElement("div");
    box.className = "toast";
    box.setAttribute("role", "status");
    document.body.appendChild(box);
  }
  box.textContent = msg;

  // 누른 버튼 바로 아래·오른쪽 끝에 맞춰 띄운다. 버튼을 주지 않으면 헤더 오른쪽 끝의
  // 티니핑 도감 링크 아래(공유 버튼이 있던 자리), 그것도 없으면 화면 오른쪽 위
  const btn = anchor || document.querySelector(".sibling");
  const r = btn ? btn.getBoundingClientRect() : null;
  box.style.top = (r ? r.bottom + 10 : 70) + "px";
  box.style.right = Math.max(12, r ? window.innerWidth - r.right : 20) + "px";

  // 방금 붙인 요소는 한 프레임 뒤에 클래스를 줘야 전환 효과가 살아난다
  requestAnimationFrame(() => box.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => box.classList.remove("show"), 2000);
}

/* ===== 통계 요청의 시간 제한 =====
   통계 서버(js/stats.js)가 느릴 때 「불러오는 중…」 인 채로 매달리지 않게 5초에서 끊는다.
   통계는 부가 기능이라 못 받아도 사이트는 그대로 동작한다(티니핑 도감과 같다).
   AbortSignal.timeout 이 없는 옛 브라우저는 타이머로 끊는다. */
function timeoutSignal(ms) {
  if (typeof AbortSignal !== "undefined" && AbortSignal.timeout) {
    return AbortSignal.timeout(ms);
  }
  const c = new AbortController();
  setTimeout(() => c.abort(), ms);
  return c.signal;
}

const STATS_TIMEOUT = 5000;

/* ===== 이름 읽어 주기 =====
   이름 옆 동그란 버튼. 한글을 아직 못 읽는 아이도 이름을 확인할 수 있게 브라우저 음성
   합성(Web Speech)으로 읽어 준다. 공룡 이름은 길고 낯설어 티니핑보다 더 쓸모가 있다.

   버튼을 <a>·<button> 안에 넣으면 안 된다 (누를 수 있는 것 안의 누를 수 있는 것).
   그래서 부르는 쪽은 언제나 이름 옆 '형제' 자리에 놓는다.
   아이콘은 이모지가 아니라 인라인 SVG 다 — currentColor 를 따라가고, 기기마다 모양이
   달라지지 않는다. 읽는 동안에는 테두리가 번진다 — css 의 audio-pulse. */
const SPEAK_ICON =
  '<svg class="speak-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
  ' stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<path d="M11.8 5 7.3 9H4.3v6h3L11.8 19z" fill="currentColor"/>' +
  '<path d="M15.3 9.2a4 4 0 0 1 0 5.6"/>' +
  '<path d="M18 6.6a8 8 0 0 1 0 10.8"/></svg>';

const escAttr = (s) => String(s || "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* 이름 읽어 주기 버튼. said 를 주면 이름 대신 그 글을 읽는다 — 인기 차트가 이름 앞에 순위를
   붙인다(js/rank.js). 버튼 이름(aria-label)은 그대로 이름이다. */
function speakBtnHTML(name, cls, said) {
  const n = escAttr(name);
  return `<button class="speak-btn${cls ? " " + cls : ""}" type="button" data-speak="${said ? escAttr(said) : n}"` +
    ` aria-label="${n} 이름 듣기" title="이름 듣기">${SPEAK_ICON}</button>`;
}

/* 글 덩어리를 읽어 주는 버튼. 칸 제목 옆에 들어간다. 글을 data-speak 에 옮겨 적지 않고
   값 없는 data-speak 로 표시만 해 두면, 누를 때 감싸고 있는 칸(.info-block)의 문단을 읽는다. */
function speakBlockBtnHTML(label) {
  const l = escAttr(label || "읽어 주기");
  return `<button class="speak-btn speak-block" type="button" data-speak` +
    ` aria-label="${l}" title="${l}">${SPEAK_ICON}</button>`;
}

/* 목록을 차례로 읽어 주는 버튼 (인기 차트의 순위 제목 옆). data-speak 를 달지 않는다 — 달면 아래
   처리기가 먼저 받아 제목 글을 읽어 버린다. 무엇을 읽을지는 부르는 쪽이 정해 speakSeries 에 넘긴다. */
function speakListBtnHTML(label) {
  const l = escAttr(label || "차례로 읽어 주기");
  return `<button class="speak-btn" type="button" aria-label="${l}" title="${l}">${SPEAK_ICON}</button>`;
}

/* 읽어 주기.
   - 읽는 중에 같은 버튼을 누르면 멈춘다.
   - 읽는 중에 다른 버튼을 누르면 읽던 것을 멈추고 새 글을 읽는다.
   seq 는 뒤늦게 도착한 신호를 걸러 내는 표. cancel() 이 뒤늦게 부르는 onend 나 시간으로
   걸어 둔 보험이, 이미 다음 이름을 읽는 중에 깨어나 남의 상태를 끄는 일을 막는다. */
let speakingBtn = null;
let speakSeq = 0;
let seriesId = 0;               // 이어 읽기 한 벌을 가리키는 표
let seriesTimer = null;
let seriesBtn = null;           // 이어 읽기를 켠 버튼 — 다 읽을 때까지 뛴다 (speakSeries)

function stopSpeaking() {
  speakSeq++;                     // 이 뒤에 오는 옛 신호는 모두 무시한다
  seriesId++;                     // 이어 읽기도 여기서 끊는다
  clearTimeout(seriesTimer);
  seriesTimer = null;
  if (seriesBtn) seriesBtn.classList.remove("speaking");
  seriesBtn = null;
  if (speakingBtn) speakingBtn.classList.remove("speaking");
  speakingBtn = null;
  try { window.speechSynthesis.cancel(); } catch { /* 못 멈춰도 표시는 되돌린다 */ }
}

/* 사파리는 cancel() 뒤 엔진이 멈춘 상태로 남아 다음 발화를 삼킬 때가 있다.
   speak 직후 resume() 을 한 번 불러 풀어 준다 (다른 브라우저에서는 하는 일이 없다). */
function pushUtterance(u) {
  const synth = window.speechSynthesis;
  synth.speak(u);
  try { synth.resume(); } catch { /* 없는 브라우저도 있다 */ }
}

/* 소리로 낼 글로 다듬는다. 물결(~)과 가운뎃점(·)은 엔진이 기호 이름을 읽거나 머뭇거리므로
   빈칸으로 바꾼다. 화면의 글은 그대로다. */
function forSpeech(text) {
  return String(text).replace(/[~·]/g, " ").replace(/\s+/g, " ").trim();
}

/* 한 낱말(또는 한 칸의 글)을 읽는다. 멈추는 일은 하지 않는다 — 이어 읽기가 제 차례를
   스스로 끊지 않도록, 멈출지는 부르는 쪽이 정한다. */
function speakOne(text, btn, onDone) {
  const synth = window.speechSynthesis;
  if (!synth || !text) return;

  const said = forSpeech(text);
  const u = new SpeechSynthesisUtterance(said);
  u.lang = "ko-KR";
  u.rate = 0.9;     // 아이가 따라 들을 수 있게 조금 천천히
  u.pitch = 1.15;
  const ko = (synth.getVoices() || []).find((v) => /^ko/i.test(v.lang || ""));
  if (ko) u.voice = ko;

  const token = ++speakSeq;
  let finished = false;
  const done = () => {
    // onend 와 아래 시간 보험이 둘 다 깨어날 수 있다. 한 번만 돌게 막아 두지 않으면
    // 이어 읽기가 한 칸씩 건너뛴다.
    if (finished || token !== speakSeq) return;
    finished = true;
    if (speakingBtn) speakingBtn.classList.remove("speaking");
    speakingBtn = null;
    if (onDone) onDone();
  };
  u.onend = done;
  u.onerror = done;
  // onend 를 주지 않는 브라우저가 있어 시간으로도 끈다. 글 길이에 맞춰 잡는다.
  setTimeout(done, Math.max(5000, said.length * 600));

  speakingBtn = btn || null;
  if (btn) btn.classList.add("speaking");
  pushUtterance(u);
}

function speakText(text, btn) {
  const synth = window.speechSynthesis;
  if (!synth || !text) return;
  const again = speakingBtn != null && speakingBtn === btn;
  // 보험이 먼저 깨어나 표시만 꺼진 뒤라도 겹쳐 읽지 않도록 실제 상태도 함께 본다.
  // 이어 읽기(speakSeries)는 이름과 이름 사이 쉬는 참에도 살아 있다(seriesTimer) — 그때는 읽는
  // 소리가 없어 멈추지 않으면, 새 글을 읽은 뒤 남은 이름을 마저 읽었다.
  if (speakingBtn || synth.speaking || seriesTimer) stopSpeaking();
  if (again) return;              // 같은 버튼을 다시 누른 것 = 멈추기
  speakOne(text, btn);
}

/* iOS 사파리는 첫 발화를 누른 흐름 안에서 해야 그 뒤의 발화를 허용한다. 선택지 이어 읽기와
   이름 맞추기의 정답 읽기는 첫 발화가 흐름 밖(텀 뒤·3초 뒤)이라, 누른 그 순간 소리 없는
   발화를 흘려 엔진을 깨워 둔다. 맥에는 이 제한이 없어 맥에서만 재 보면 놓친다. */
function primeSpeech() {
  const synth = window.speechSynthesis;
  if (!synth) return;
  try {
    const u = new SpeechSynthesisUtterance(" ");
    u.volume = 0;
    synth.speak(u);
  } catch { /* 못 깨워도 버튼 누르기는 그대로 된다 */ }
}

/* 이름 여럿을 텀을 두고 차례로 읽는다 (이름 맞추기의 선택지 셋, 인기 차트의 순위 목록).
   items 는 { text, btn } 목록 — btn 을 주면 읽는 동안 그 버튼이 펄스로 뛴다.
   쉬는 참이 있어야 아이가 방금 들은 이름을 그림과 맞춰 볼 틈이 생긴다.
   btn 은 이어 읽기를 켠 버튼이다 (인기 차트의 순위 제목 옆). 마지막 이름을 다 읽을 때까지 뛰고,
   그동안 다시 누르면 멈춘다 — speakText 의 "같은 버튼 = 멈추기" 와 같다. 그래서 마지막 이름이
   끝나면 텀을 더 두지 않고 곧바로 끝낸다 — 그 텀 동안 버튼이 더 뛰면, 다 읽은 줄 알고 다시 누른
   손이 처음부터 듣는 대신 멈추기를 누르게 된다(티니핑 도감과 같다). */
function speakSeries(items, btn, gap = 500) {
  const list = (items || []).filter((it) => it && it.text);
  if (!window.speechSynthesis || !list.length) return;
  const again = btn != null && btn === seriesBtn;
  stopSpeaking();
  if (again) return;              // 같은 버튼을 다시 누른 것 = 멈추기
  primeSpeech();                  // 흐름 안에서 미리 깨워 둔다 (iOS)
  const id = seriesId;            // stopSpeaking 이 올려 둔 이번 벌의 표
  seriesBtn = btn || null;
  if (seriesBtn) seriesBtn.classList.add("speaking");
  let i = 0;
  const step = () => {
    if (id !== seriesId) return;                            // 그새 멈췄다
    const it = list[i++];
    speakOne(it.text, it.btn, () => {
      if (id !== seriesId) return;
      if (i < list.length) { seriesTimer = setTimeout(step, gap); return; }
      // 다 읽었다 — 이어 읽기가 끝났다는 표시
      seriesTimer = null;
      if (seriesBtn) seriesBtn.classList.remove("speaking");
      seriesBtn = null;
    });
  };
  seriesTimer = setTimeout(step, gap);
}

/* 화면을 떠날 때 읽던 것을 멈춘다 — 크롬은 페이지가 바뀌어도 읽던 소리를 이어 간다.
   tools/build-pages.mjs 가 이 파일을 addEventListener 없는 가짜 window 로 싣는다
   (imageMarkup·speakBtnHTML 등만 쓰려고). 거기서 넘어지지 않게 있는지 보고 건다. */
if (typeof window.addEventListener === "function") {
  window.addEventListener("pagehide", stopSpeaking);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-speak]");
  if (!btn) return;
  e.preventDefault();
  /* 값이 없는 data-speak 는 "나를 감싼 칸을 읽어라"는 뜻이다. 칸(.info-block) 안의 문단을
     모두 이어 읽는다. 칸을 못 찾으면 감싼 요소의 글을 읽는다. */
  const box = btn.closest(".info-block");
  const ps = box ? [...box.querySelectorAll("p")] : [];
  const text = btn.dataset.speak
    || (ps.length ? ps.map((el) => el.textContent.trim()).filter(Boolean).join(" ")
                  : (btn.parentElement ? btn.parentElement.textContent.trim() : ""));
  speakText(text, btn);
});

/* 목소리를 낼 수 없는 브라우저에서는 버튼을 아예 감춘다 (css 의 .no-tts).
   페이지를 열 때 합성기를 미리 깨우지는 않는다 — 맥 사파리는 합성기가 이미 깨어 있는 상태에서
   만든 첫 AudioContext 에 큰 출력 버퍼를 줘서, 이름 맞추기의 비프가 화면보다 늦게 났다
   (티니핑 도감에서 찾은 원인). */
if (typeof document !== "undefined" && document.documentElement && !window.speechSynthesis) {
  document.documentElement.classList.add("no-tts");
}
