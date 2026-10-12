/* ===== 목록 페이지: 검색 + 시대/먹이/유명한 공룡/좋아요 필터 ===== */
/* 검색·필터 상태는 URL 에 담는다.
   그래야 개별 페이지에 다녀와도 목록이 그대로 유지되고, 링크 공유도 된다. */
const params = new URLSearchParams(location.search);
const state = {
  q: params.get("q") || "",
  era: params.get("era") || null,
  diet: params.get("diet") || null,
  famous: params.get("famous") === "1",
  liked: params.get("liked") === "1",
};

/* 현재 상태를 주소창에 반영 (뒤로가기 기록은 늘리지 않는다) */
function syncURL() {
  const p = new URLSearchParams();
  if (state.q) p.set("q", state.q);
  if (state.era) p.set("era", state.era);
  if (state.diet) p.set("diet", state.diet);
  if (state.famous) p.set("famous", "1");
  if (state.liked) p.set("liked", "1");
  const qs = p.toString();
  history.replaceState(null, "", qs ? "?" + qs : location.pathname);
}

/* 칩 한 무리를 만든다. 같은 칩을 다시 누르면 끈다. */
function chipGroup(boxId, values, key) {
  const box = document.getElementById(boxId);
  values.forEach((v) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.textContent = v;
    b.dataset[key] = v;
    b.onclick = () => {
      state[key] = state[key] === v ? null : v;
      syncChips(); render();
    };
    box.appendChild(b);
  });
}

function syncChips() {
  document.querySelectorAll("[data-era]").forEach((el) => el.classList.toggle("active", el.dataset.era === state.era));
  document.querySelectorAll("[data-diet]").forEach((el) => el.classList.toggle("active", el.dataset.diet === state.diet));
  document.querySelectorAll("[data-famous]").forEach((el) => el.classList.toggle("active", state.famous));
  document.querySelectorAll("[data-liked]").forEach((el) => el.classList.toggle("active", state.liked));
}

/* 유명한 공룡 칩은 시대·먹이와 달리 데이터에서 만들지 않는다 (값이 하나뿐이라 index.html 에
   그대로 적혀 있다). 누르면 켜고 끈다. 유명한 공룡은 data 의 famous — 실린 위키 수로 앞 50종과
   둘리사우루스이고, 목록이 이미 그 차례라 켜면 앞쪽 51종만 남는다. */
document.querySelectorAll("[data-famous]").forEach((el) => {
  el.addEventListener("click", () => {
    state.famous = !state.famous;
    syncChips(); render();
  });
});

/* 좋아요 칩 — 켜면 이 기기에서 좋아요를 누른 공룡만 보인다. 티니핑 도감과 같다.
   좋아요는 개별 페이지가 localStorage 에 남긴다(js/page.js 의 'dino-liked-<id>'). 서버에 묻지 않으므로
   기기마다 다르다. 다만 좋아요 버튼은 통계 서버가 켜져 있어야 나타나므로(js/stats.js 의 STATS_API),
   서버도 없고 이 기기에서 누른 것도 없으면 칩을 감춘다 — 늘 빈 목록만 내는 칩이 남지 않게. */
const LIKE_PREFIX = "dino-liked-";

function likedIds() {
  const out = new Set();
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(LIKE_PREFIX) && localStorage.getItem(k) === "1") {
        out.add(k.slice(LIKE_PREFIX.length));
      }
    }
  } catch { /* 사파리 비공개 모드 등에서 막히면 빈 채로 둔다 */ }
  return out;
}
let liked = likedIds();

if (!(typeof STATS_API === "string" && STATS_API) && !liked.size) {
  state.liked = false;           // 주소에 liked=1 이 남아 있어도 걸지 않는다
  document.getElementById("likeFilters").hidden = true;
}
document.querySelectorAll("[data-liked]").forEach((el) => {
  el.addEventListener("click", () => {
    state.liked = !state.liked;
    syncChips(); render();
  });
});

/* 검색 대상과 우선순위 — 한국어 이름 → 별명 → 학명 → 시대 → 먹이.
 * 앞에 적은 밭에서 걸린 것이 앞에 선다. 별명(「티렉스」·「벨로시랩터」)은 아이들이 실제로 부르는
 * 이름이라 이름 바로 다음이다. 학명은 소문자로 견주므로 "tyranno" 처럼 쳐도 걸린다.
 * 시대·먹이는 필터 칩으로도 고를 수 있지만, 마이크에 「백악기」·「초식」 이라고 말하는 아이도
 * 있어 검색에도 넣는다.
 * 한 글자로 찾을 때는 짧은 밭(이름·별명)만 본다 — 학명까지 보면 "a" 하나로 거의 모두가
 * 남아 걸러 주는 것이 없다. */
const SEARCH = [
  { key: "nameKo", short: true },
  { key: "aliases", short: true },
  { key: "genus" },
  { key: "period" },
  { key: "diet" },
];

/* 소문자로 바꾼 값을 밭마다 캐시해 둔다 — 글자를 칠 때마다 다시 바꾸지 않으려고 */
function field(d, key) {
  const c = "_lc_" + key;
  if (d[c] === undefined) d[c] = String(d[key] || "").toLowerCase();
  return d[c];
}

/* 몇 번째 밭에서 걸렸나. 어디에도 안 걸리면 -1 */
function hitRank(d, q) {
  const deep = q.length >= 2;
  for (let i = 0; i < SEARCH.length; i++) {
    if (!deep && !SEARCH[i].short) continue;
    if (field(d, SEARCH[i].key).includes(q)) return i;
  }
  return -1;
}

function matches(d) {
  if (state.famous && !d.famous) return false;
  if (state.liked && !liked.has(d.id)) return false;
  if (state.era && eraOf(d) !== state.era) return false;
  if (state.diet && d.diet !== state.diet) return false;
  if (state.q && hitRank(d, state.q.toLowerCase()) < 0) return false;
  return true;
}

function cardHTML(d) {
  // 카드 자체를 <a> 로 두면 이름 옆에 읽어 주기 버튼을 둘 수 없다 (링크 안의 버튼).
  // 카드를 <div> 로 두고 투명한 링크를 위에 겹쳐 깐다.
  return `<div class="card">
    <a class="card-hit" href="${dinoHref(d.id)}" aria-label="${d.nameKo} 자세히 보기"></a>
    <div class="thumb">${imageMarkup(d, 260)}</div>
    <div class="body">
      <div class="name-row">
        <div class="name">${d.nameKo}</div>
        ${speakBtnHTML(d.nameKo)}
      </div>
      <div class="latin">${d.genus}</div>
      <div class="tags">${tagsHTML(d)}</div>
    </div>
  </div>`;
}

function render() {
  syncURL();
  stopSpeaking();              // 카드가 통째로 바뀐다 — 읽던 이름의 버튼이 사라지므로 읽기도 멈춘다
  liked = likedIds();          // 개별 페이지에 다녀오는 사이에 늘었을 수 있다
  const list = getAll().filter(matches);

  /* 걸린 밭이 앞선 것을 앞에 놓는다. sort 는 같은 값끼리 차례를 흩뜨리지 않으므로
     각 무리 안의 순서는 데이터(명단) 그대로다. */
  if (state.q) {
    const q = state.q.toLowerCase();
    const r = new Map(list.map((d) => [d, hitRank(d, q)]));
    list.sort((a, b) => r.get(a) - r.get(b));
  }

  const grid = document.getElementById("grid");
  grid.innerHTML = list.length
    ? list.map(cardHTML).join("")
    : `<div class="empty" style="grid-column:1/-1">${
        state.liked && !liked.size
          ? "아직 좋아요를 누른 공룡이 없어요 ❤️"
          : "조건에 맞는 공룡이 없어요 🥲"}</div>`;
}

const searchEl = document.getElementById("search");
const clearEl = document.getElementById("clearSearch");

function syncClearBtn() {
  clearEl.hidden = searchEl.value.length === 0;
}

searchEl.addEventListener("input", (e) => {
  state.q = e.target.value.trim();
  syncClearBtn();
  render();
});

clearEl.addEventListener("click", () => {
  searchEl.value = "";
  state.q = "";
  syncClearBtn();
  render();
  searchEl.focus();
});

/* ===== 말해서 찾기 =====
 * 글을 못 읽는(또는 아직 자판이 서툰) 아이가 이름을 말해서 찾을 수 있게 한다. 티니핑 도감의
 * 것을 그대로 옮겼다. 브라우저의 음성 인식(Web Speech)을 쓴다 — https 와 마이크 허락이 필요하다.
 *
 * 말하는 도중의 중간 결과(interim)도 검색창에 바로 넣는다. 다 말할 때까지 아무 반응이 없으면
 * 아이는 안 되는 줄 알고 또 누른다. 목록도 그때그때 걸러진다.
 *
 * 음성 인식이 없는 브라우저(파이어폭스 등)에서는 버튼을 아예 감춘다 — 눌러도 아무 일이 없는
 * 버튼이 남는 편보다 낫다 (읽어 주기 버튼과 같은 판단). */
const micEl = document.getElementById("micSearch");
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!Recognition) {
  micEl.hidden = true;
} else {
  let rec = null;

  const stopListening = () => {
    micEl.classList.remove("listening");
    rec = null;
  };

  const setQuery = (text) => {
    searchEl.value = text;
    state.q = text.trim();
    syncClearBtn();
    render();
  };

  micEl.addEventListener("click", () => {
    if (rec) { rec.stop(); return; }        // 듣는 중에 또 누르면 그만 듣는다

    rec = new Recognition();
    rec.lang = "ko-KR";
    rec.interimResults = true;
    rec.continuous = false;
    /* 인식기가 내놓는 후보를 셋까지 받는다. 공룡 이름은 사전에 없는 말이 많아 첫 후보가
       어긋나도, 뒤 후보가 이름으로 곧장 풀리는 일이 잦다. */
    rec.maxAlternatives = 3;

    rec.onresult = (e) => {
      /* 중간 결과까지 이어 붙인다 — 말하는 대로 검색창이 따라 찬다. 앞선 결과는 이미 굳은
         것이라 첫 후보만 쓰고, 마지막 결과에서만 후보를 견준다. 이름으로 딱 떨어지는 후보가
         있으면 그것을 쓰고, 없으면 첫 후보를 고쳐서 쓴다(js/hear.js). */
      let head = "";
      for (let i = 0; i < e.results.length - 1; i++) head += e.results[i][0].transcript;
      const last = e.results[e.results.length - 1];
      const clean = (t) => fixHeard(cleanHeard(t));

      let first = null;
      for (let i = 0; i < last.length; i++) {
        const guess = clean(head + last[i].transcript);
        if (first === null) first = guess;
        if (NAMES.has(guess)) { first = guess; break; }
      }
      setQuery(first || "");
    };
    rec.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        showToast("마이크를 쓸 수 없어요 🥲", micEl);
      } else if (e.error === "no-speech") {
        showToast("잘 못 들었어요. 다시 말해 볼까요? 🥲", micEl);
      }
      stopListening();
    };
    rec.onend = stopListening;

    micEl.classList.add("listening");
    try {
      rec.start();
    } catch {
      stopListening();          // 이미 듣고 있으면 start 가 던진다
    }
  });

  // 자판으로 치기 시작하면 듣기를 멈춘다 (둘이 같은 칸을 두고 다투지 않게)
  searchEl.addEventListener("input", () => { if (rec) rec.stop(); });

  /* 화면을 떠나면(카드를 눌러 개별 페이지로 가기·뒤로 가기) 듣기를 그 자리에서 접는다.
     stop() 은 듣던 것을 마저 풀어 내놓고서야 onend 를 부르는데, 그 사이 페이지가 얼어 붙으면
     (bfcache) '듣는 중' 표시를 안은 채 되살아난다. abort() 로 곧바로 끊고 표시도 여기서 지운다.
     처리기는 먼저 떼어 낸다 — 되살아난 뒤 새로 듣기 시작했을 때 옛 인식기의 onend 가 뒤늦게
     와서 새것을 끄면 안 된다. */
  window.addEventListener("pagehide", () => {
    if (!rec) return;
    const r = rec;
    r.onresult = r.onerror = r.onend = null;
    stopListening();
    try { r.abort(); } catch { /* 이미 끝난 인식기면 던질 수 있다 */ }
  });
}

// esc 로도 지우기
searchEl.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && searchEl.value) {
    e.preventDefault();
    clearEl.click();
  }
});

/* 스크롤 위치도 함께 되살린다 — 개별 페이지에 다녀와 뒤로 가기로 돌아왔을 때 */
/* 개별 페이지에서 좋아요를 누르고 뒤로 가기로 돌아오면 브라우저가 떠날 때의 목록을 그대로 되살린다
   (bfcache) — 좋아요 칩이 켜져 있으면 방금 누른 공룡이 빠진 채다. 그때는 다시 그린다. */
window.addEventListener("pageshow", (e) => {
  if (e.persisted && state.liked) render();
});

const SCROLL_KEY = "dino:list-scroll";
window.addEventListener("pagehide", () => {
  try {
    sessionStorage.setItem(SCROLL_KEY, JSON.stringify({ s: location.search, y: window.scrollY }));
  } catch { /* 저장이 막힌 브라우저면 되살리지 않는다 */ }
});

chipGroup("eraFilters", uniqueEras(), "era");
chipGroup("dietFilters", uniqueDiets(), "diet");
syncChips();                 // URL 에서 복원한 필터를 칩에 반영
searchEl.value = state.q;
syncClearBtn();
render();

try {
  const saved = JSON.parse(sessionStorage.getItem(SCROLL_KEY) || "null");
  if (saved && saved.s === location.search && saved.y > 0) {
    requestAnimationFrame(() => window.scrollTo(0, saved.y));
  }
} catch { /* 저장값이 깨졌거나 막혔으면 무시 */ }
