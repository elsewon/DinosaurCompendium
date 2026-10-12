/* ===== 들은 말 → 공룡 이름 =====
   목록의 말해서 찾기(js/list.js)와 이름 맞추기의 말해서 맞히기(js/quiz.js)가 쓴다.
   티니핑 도감의 js/hear.js 를 옮겼다.
   그 두 페이지만 싣는다 — js/util.js 에 두면 개별 페이지 수백 장이 쓰지도 않을 표를 싣는다.
   data/dinosaurs.js 와 js/util.js(getAll) 뒤에 실어야 한다. */

/* ===== 들은 말 고치기 =====
 * 공룡 이름은 사전에 없는 말이 많아 인식기가 제 나름대로 아는 낱말로 바꿔 놓는다.
 *
 * 손으로 고른 표를 두지 않는다. 모든 이름을 규칙으로 훑어 "비슷하게 들리는 열쇠"를
 * 만들어 두고, 들은 말의 열쇠가 그 중 하나와 같으면 진짜 이름으로 바꾼다.
 * 공룡이 늘어도 표를 손볼 일이 없다.
 *
 * 열쇠는 한글을 자모로 풀어 "귀로 잘 안 갈리는 것끼리" 한 자리에 모은 것이다.
 *   된소리·거센소리를 예사소리로   ㄲㅋ→ㄱ  ㄸㅌ→ㄷ  ㅃㅍ→ㅂ  ㅆ→ㅅ  ㅉㅊ→ㅈ
 *   비슷한 홀소리를 한 자리로      ㅒㅔㅖ→ㅐ  ㅑ→ㅏ  ㅕ→ㅓ  ㅛ→ㅗ  ㅠ→ㅜ  ㅡ→ㅜ
 *   받침은 실제 소리대로 중화      ㅅㅆㅈㅊㅌㅎ→ㄷ  ㅋㄲ→ㄱ  ㅍ→ㅂ …
 * 띄어쓰기는 무시한다.
 *
 * ㅡ→ㅜ 는 티니핑 도감에 없던 것이다. 인식기는 「사우루스」 를 「사우르스」 로 자주 받아 적는데,
 * 거의 모든 공룡 이름이 「~사우루스」 라 이 하나로 못 찾는 이름이 많았다. 304종과 별명을 이렇게
 * 접어도 열쇠가 겹치는 이름이 없는 것을 확인했다.
 *
 * 별명(aliases — 「티렉스」·「벨로시랩터」)도 열쇠를 만들어 그 공룡의 이름으로 바꾼다.
 * 아이들은 책과 영화에서 들은 별명으로 부르기 때문이다(tools/details.js). */
const CHO = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const JUNG = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
const JONG = " ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ";
const FOLD = {
  ㄲ: "ㄱ", ㅋ: "ㄱ", ㄸ: "ㄷ", ㅌ: "ㄷ", ㅃ: "ㅂ", ㅍ: "ㅂ", ㅆ: "ㅅ", ㅉ: "ㅈ", ㅊ: "ㅈ",
  ㅒ: "ㅐ", ㅔ: "ㅐ", ㅖ: "ㅐ", ㅑ: "ㅏ", ㅕ: "ㅓ", ㅛ: "ㅗ", ㅠ: "ㅜ", ㅡ: "ㅜ",
  ㅙ: "ㅚ", ㅞ: "ㅚ", ㅢ: "ㅣ",
};
/* 받침은 초성과 접는 방향이 다르다 — 소리가 일곱으로 중화된다 */
const FOLD_JONG = {
  ㄲ: "ㄱ", ㅋ: "ㄱ", ㄳ: "ㄱ", ㄺ: "ㄱ",
  ㅅ: "ㄷ", ㅆ: "ㄷ", ㅈ: "ㄷ", ㅊ: "ㄷ", ㅌ: "ㄷ", ㅎ: "ㄷ",
  ㅍ: "ㅂ", ㅄ: "ㅂ", ㄿ: "ㅂ",
  ㄼ: "ㄹ", ㄽ: "ㄹ", ㄾ: "ㄹ", ㅀ: "ㄹ", ㄵ: "ㄴ", ㄶ: "ㄴ", ㄻ: "ㅁ",
};

function sayKey(text) {
  let out = "";
  for (const ch of String(text).toLowerCase()) {
    const code = ch.charCodeAt(0) - 0xac00;
    if (code < 0 || code > 11171) {
      if (/[a-z0-9]/.test(ch)) out += ch;      // 학명으로 말하는 어른도 있으므로 남긴다
      continue;
    }
    const cho = CHO[Math.floor(code / 588)];
    const jung = JUNG[Math.floor((code % 588) / 28)];
    const jong = JONG[code % 28].trim();
    out += (FOLD[cho] || cho) + (FOLD[jung] || jung) + (jong ? FOLD_JONG[jong] || jong : "");
  }
  return out;
}

/* 이름인지 곧바로 가리려고 따로 담아 둔다 (말해서 찾기의 후보 고르기에 쓴다) */
const NAMES = new Set(getAll().map((d) => d.nameKo));

/* 열쇠 → 이름. 이름과 별명 모두 열쇠를 만든다. 두 이름이 같은 열쇠를 가지면 아무것도
   고르지 않고 null 을 넣어 둔다 — 어느 쪽인지 모르는데 하나를 골라 주면 엉뚱한 것을 찾게 된다. */
const NAME_BY_KEY = (() => {
  const m = new Map();
  const put = (said, name) => {
    const k = sayKey(said);
    m.set(k, m.has(k) && m.get(k) !== name ? null : name);
  };
  for (const d of getAll()) {
    put(d.nameKo, d.nameKo);
    (d.aliases || []).forEach((a) => put(a, d.nameKo));
  }
  return m;
})();

/* 들은 말을 이름으로 고친다. 못 고치면 들은 그대로 돌려준다 — 「백악기」·「초식」 처럼
   이름이 아닌 낱말로 찾는 길도 열어 두어야 한다. */
function fixHeard(text) {
  const key = sayKey(text);
  if (!key) return text;

  const exact = NAME_BY_KEY.get(key);
  if (exact) return exact;

  /* 말이 끊겼을 때 이어 준다. 두 글자(열쇠 4자) 이상이고 앞머리가 걸리는 이름이 딱
     하나일 때만 이어 준다. 「티라노」 는 티라노사우루스·티라노미무스 둘이라 그대로 둔다 —
     그래도 검색이 글자로 둘 다 찾아 준다. */
  if (key.length >= 4) {
    let only = null;
    for (const [k, name] of NAME_BY_KEY) {
      if (!name || !k.startsWith(key)) continue;
      if (only && only !== name) return text;   // 둘 이상이면 고르지 않는다
      only = name;
    }
    if (only) return only;
  }

  /* 가운데가 빠졌을 때 되살린다. 들은 열쇠의 낱자가 이름 열쇠에 **차례대로** 들어 있으면
     (부분열) 같은 이름으로 본다. 너무 헐겁지 않게, 들은 말이 세 음절 이상이고 이름이 그보다
     두 음절 넘게 길지 않을 때만. */
  const heard = syllables(text);
  if (heard >= 3 && !NAME_BY_KEY.has(key)) {
    let only = null;
    for (const [k, name] of NAME_BY_KEY) {
      if (!name) continue;
      const len = syllables(name);
      if (len < heard || len - heard > 2 || !subseq(key, k)) continue;
      if (only && only !== name) return text;   // 둘 이상이면 고르지 않는다
      only = name;
    }
    if (only) return only;
  }
  return text;
}

/* 한글 낱자만 센다 (사이 띄어쓰기·기호는 뺀다) */
function syllables(text) {
  let n = 0;
  for (const ch of String(text)) {
    const c = ch.charCodeAt(0) - 0xac00;
    if (c >= 0 && c <= 11171) n++;
  }
  return n;
}

/* a 의 글자가 b 안에 차례대로 다 나오나 */
function subseq(a, b) {
  let i = 0;
  for (const c of b) {
    if (c === a[i]) i++;
    if (i === a.length) return true;
  }
  return false;
}

/* 인식기는 문장 끝에 마침표를 붙이곤 한다 — 검색어에도 이름에도 군더더기다 */
function cleanHeard(s) {
  return String(s || "").replace(/[.。]\s*$/, "").trim();
}

/* 같은 이름으로 치나. 글자가 같거나 소리 열쇠가 같으면 같다고 본다 — 귀로 못 가르는 짝은 어느 쪽을
   말했든 맞힌 것이다. 지금 304종에는 열쇠가 겹치는 짝이 없지만(위), 공룡이 늘어 생기면 그대로 통한다. */
function sameName(a, b) {
  return !!a && !!b && (a === b || sayKey(a) === sayKey(b));
}
