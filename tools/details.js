/* ===== 손으로 고친 값 =====
 *
 * 자동으로 모은 값(tools/fetched.json)이 틀렸거나 비었을 때 여기서 덮어씁니다.
 * 키는 속 이름이고, 적은 칸만 덮어씁니다. 고친 근거를 주석으로 꼭 남깁니다.
 *
 * 덮어쓸 수 있는 칸: nameKo, diet, range({ start, end } 백만 년 전)
 * 더할 수 있는 칸: aliases — 아이들이 실제로 부르는 별명. 검색(글자·말)이 이 이름으로도 찾는다.
 *                famous — true 면 위키 수와 상관없이 「유명한 공룡」에 넣는다(이름 맞추기의 쉬움·보통).
 */

/* PBDB 에 식성이 없는 초기 용각형류. TotalDino 도 큰 무리(Dinosauria)에만 넣어 두어 무리로
   짐작할 수 없다. 영어 위키백과 첫머리로 용각형류임을 확인했다 — 목이 긴 초식 공룡의 조상 무리다. */
const EARLY_SAUROPODOMORPHS = ["Aardonyx", "Ahvaytum", "Huayracursor", "Lishulong", "Massospondylus",
  "Musango", "Musankwa", "Qianlong", "Wudingloong", "Xiangyunloong"];

window.DETAILS = {
  ...Object.fromEntries(EARLY_SAUROPODOMORPHS.map((g) => [g, { diet: "초식" }])),

  /* 별명 — 책·영화·장난감에서 굳어진 부름말. 공식 이름과 달라 이름으로는 못 찾는다. */
  Tyrannosaurus: { aliases: ["티렉스", "티라노"] },
  Velociraptor: { aliases: ["벨로시랩터", "랩터"] },     // 영화 「쥬라기 공원」 의 영어식 발음
  Deinonychus: { aliases: ["디노니쿠스"] },
  Triceratops: { aliases: ["트리세라톱스"] },           // 영어식 발음
  Archaeopteryx: { aliases: ["아르케옵테릭스", "아르카이옵테릭스"] },   // 이름은 「시조새」

  Doolysaurus: {
    // 한국 공룡이고 아기공룡 둘리에서 이름을 땄다. 2026년에 이름이 붙어 실린 위키 수로는 하위권이지만
    // 한국 아이들은 아는 공룡이라 「유명한 공룡」에 넣는다.
    famous: true,
    // PBDB 는 초식으로 적지만, 이는 상위 분류에서 물려받은 기본값이다.
    // 기재 논문(Jung et al. 2026)은 화석과 함께 나온 위석 40~50개를 근거로
    // 잡식 또는 기회주의적 식성이었을 수 있다고 본다.
    diet: "잡식",
  },
  Australovenator: {
    // 위키데이터의 한국어 이름이 「드워프알로사우어」 — 영어 별명(dwarf allosaur)을 옮긴 것이다.
    // 한국어 위키백과 문서 제목을 쓴다.
    nameKo: "아우스트랄로베나토르",
  },
  Yantaloong: {
    // PBDB 에 아직 없고, 위키미디어 공용에서도 무리 분류가 붙기 전이다(2026년 10월).
    // 영어 위키백과: 중기 쥐라기의 진용각류(eusauropod) — 목이 긴 초식 공룡이다.
    diet: "초식",
  },
  Paulodon: {
    // 영어 위키백과에 문서가 없고(이구아노돈 문서로 넘어간다) PBDB 에도 새 이름이 없다.
    // 옛 이름 Iguanodon galvensis 의 PBDB 기록: 바렘절(1억 2,577만~1억 2,140만 년 전).
    range: { start: 125.77, end: 121.4 },
  },
};
