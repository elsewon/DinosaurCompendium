/* ===== 공룡 데이터 (자동 생성) =====
 * 생성: node tools/build-data.mjs
 * 원본: tools/roster.js (명단) + tools/fetched.json (수집 결과) + tools/names-ko.js (우리가 붙인 이름)
 *       + tools/details.js (손으로 고친 값)
 * ⚠️ 이 파일을 직접 고치지 마세요. 원본을 고친 뒤 다시 빌드하세요.
 *
 * 차례: 유명한 공룡(famous) 먼저, 무리마다 유명한 차례 (sitelinks = 그 공룡이 실린 위키 수, 많은 것부터)
 * famous: 유명한 공룡 — 앞 50종과 tools/details.js 에서 더한 것 (이름 맞추기의 쉬움·보통이 낸다)
 * range: 살았던 시기, 백만 년 전 { start, end } (영어 위키백과 정보상자, 없으면 PBDB)
 * period: range 로 계산한 시대 이름 · diet: 초식 | 육식 | 잡식 (details.js > PBDB > TotalDino 의 무리)
 * 그림: images/<id>.webp (상세·퀴즈) · images/thumb/<id>.webp (목록) — 출처는 image 칸, 기준은 SOURCES.md
 */
window.DINOSAURS = [
  {
    "id": "tyrannosaurus",
    "genus": "Tyrannosaurus",
    "nameKo": "티라노사우루스",
    "aliases": [
      "티렉스",
      "티라노"
    ],
    "range": {
      "start": 69,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 108,
    "wikidata": "Q14332",
    "kowiki": "티라노사우루스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tyrannosaurus_TD.png",
      "speculative": false
    },
    "imgv": "ffa381aa",
    "famous": true
  },
  {
    "id": "archaeopteryx",
    "genus": "Archaeopteryx",
    "nameKo": "시조새",
    "aliases": [
      "아르케옵테릭스",
      "아르카이옵테릭스"
    ],
    "range": {
      "start": 150.8,
      "end": 148.5
    },
    "period": "쥐라기 후기",
    "diet": "육식",
    "sitelinks": 93,
    "wikidata": "Q100196",
    "kowiki": "시조새",
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Archaeopteryx_TD.png",
      "speculative": false
    },
    "imgv": "c136f2fd",
    "famous": true
  },
  {
    "id": "triceratops",
    "genus": "Triceratops",
    "nameKo": "트리케라톱스",
    "aliases": [
      "트리세라톱스"
    ],
    "range": {
      "start": 69,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 81,
    "wikidata": "Q14384",
    "kowiki": "트리케라톱스",
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Triceratops_TD.png",
      "speculative": false
    },
    "imgv": "e2e9f8dd",
    "famous": true
  },
  {
    "id": "velociraptor",
    "genus": "Velociraptor",
    "nameKo": "벨로키랍토르",
    "aliases": [
      "벨로시랩터",
      "랩터"
    ],
    "range": {
      "start": 75,
      "end": 71
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 78,
    "wikidata": "Q14403",
    "kowiki": "벨로키랍토르",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Velociraptor_TD.png",
      "speculative": false
    },
    "imgv": "7f654118",
    "famous": true
  },
  {
    "id": "stegosaurus",
    "genus": "Stegosaurus",
    "nameKo": "스테고사우루스",
    "range": {
      "start": 155,
      "end": 145
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 78,
    "wikidata": "Q14388",
    "kowiki": "스테고사우루스",
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Stegosaurus_TD.png",
      "speculative": false
    },
    "imgv": "16c104cd",
    "famous": true
  },
  {
    "id": "spinosaurus",
    "genus": "Spinosaurus",
    "nameKo": "스피노사우루스",
    "range": {
      "start": 100.5,
      "end": 93.9
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 77,
    "wikidata": "Q130966",
    "kowiki": "스피노사우루스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Spinosaurus_TD.png",
      "speculative": false
    },
    "imgv": "6d030a4e",
    "famous": true
  },
  {
    "id": "diplodocus",
    "genus": "Diplodocus",
    "nameKo": "디플로도쿠스",
    "range": {
      "start": 152.07,
      "end": 149.1
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 76,
    "wikidata": "Q14330",
    "kowiki": "디플로도쿠스",
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Diplodocus_TD.png",
      "speculative": false
    },
    "imgv": "3f380988",
    "famous": true
  },
  {
    "id": "brachiosaurus",
    "genus": "Brachiosaurus",
    "nameKo": "브라키오사우루스",
    "range": {
      "start": 155.6,
      "end": 145.5
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 75,
    "wikidata": "Q14397",
    "kowiki": "브라키오사우루스",
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Brachiosaurus_TD.png",
      "speculative": false
    },
    "imgv": "8c3e5b90",
    "famous": true
  },
  {
    "id": "apatosaurus",
    "genus": "Apatosaurus",
    "nameKo": "아파토사우루스",
    "range": {
      "start": 152,
      "end": 151
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 74,
    "wikidata": "Q14326",
    "kowiki": "아파토사우루스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Apatosaurus_TD.png",
      "speculative": false
    },
    "imgv": "e186328d",
    "famous": true
  },
  {
    "id": "allosaurus",
    "genus": "Allosaurus",
    "nameKo": "알로사우루스",
    "range": {
      "start": 155,
      "end": 143.1
    },
    "period": "쥐라기 후기",
    "diet": "육식",
    "sitelinks": 69,
    "wikidata": "Q14400",
    "kowiki": "알로사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Allosaurus_TD.png",
      "speculative": false
    },
    "imgv": "8a9fe8c5",
    "famous": true
  },
  {
    "id": "iguanodon",
    "genus": "Iguanodon",
    "nameKo": "이구아노돈",
    "range": {
      "start": 126,
      "end": 122
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 68,
    "wikidata": "Q130980",
    "kowiki": "이구아노돈",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Iguanodon_TD.png",
      "speculative": false
    },
    "imgv": "5decd71b",
    "famous": true
  },
  {
    "id": "ankylosaurus",
    "genus": "Ankylosaurus",
    "nameKo": "안킬로사우루스",
    "range": {
      "start": 70,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 66,
    "wikidata": "Q40621",
    "kowiki": "안킬로사우루스",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ankylosaurus_TD.png",
      "speculative": false
    },
    "imgv": "cdf3bd97",
    "famous": true
  },
  {
    "id": "ceratosaurus",
    "genus": "Ceratosaurus",
    "nameKo": "케라토사우루스",
    "range": {
      "start": 154.8,
      "end": 143.1
    },
    "period": "쥐라기 후기",
    "diet": "육식",
    "sitelinks": 57,
    "wikidata": "Q130902",
    "kowiki": "케라토사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ceratosaurus_TD.png",
      "speculative": false
    },
    "imgv": "02bda1e2",
    "famous": true
  },
  {
    "id": "parasaurolophus",
    "genus": "Parasaurolophus",
    "nameKo": "파라사우롤로푸스",
    "range": {
      "start": 76.5,
      "end": 73
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 54,
    "wikidata": "Q203583",
    "kowiki": "파라사우롤로푸스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Parasaurolophus_TD.png",
      "speculative": false
    },
    "imgv": "3c79ad61",
    "famous": true
  },
  {
    "id": "argentinosaurus",
    "genus": "Argentinosaurus",
    "nameKo": "아르헨티노사우루스",
    "range": {
      "start": 106.2,
      "end": 106.2
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 53,
    "wikidata": "Q130859",
    "kowiki": "아르헨티노사우루스",
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Argentinosaurus_TD.png",
      "speculative": false
    },
    "imgv": "54f12076",
    "famous": true
  },
  {
    "id": "carnotaurus",
    "genus": "Carnotaurus",
    "nameKo": "카르노타우루스",
    "range": {
      "start": 69,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 53,
    "wikidata": "Q18510948",
    "kowiki": "카르노타우루스",
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Carnotaurus_TD.png",
      "speculative": false
    },
    "imgv": "bd33cb1f",
    "famous": true
  },
  {
    "id": "albertosaurus",
    "genus": "Albertosaurus",
    "nameKo": "알베르토사우루스",
    "range": {
      "start": 73,
      "end": 68
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 52,
    "wikidata": "Q40751",
    "kowiki": "알베르토사우루스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Albertosaurus_TD.png",
      "speculative": false
    },
    "imgv": "b97eee71",
    "famous": true
  },
  {
    "id": "compsognathus",
    "genus": "Compsognathus",
    "nameKo": "콤프소그나투스",
    "range": {
      "start": 150.8,
      "end": 145
    },
    "period": "쥐라기 후기",
    "diet": "육식",
    "sitelinks": 52,
    "wikidata": "Q130880",
    "kowiki": "콤프소그나투스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Compsognathus_TD.png",
      "speculative": false
    },
    "imgv": "16f40bfd",
    "famous": true
  },
  {
    "id": "giganotosaurus",
    "genus": "Giganotosaurus",
    "nameKo": "기가노토사우루스",
    "range": {
      "start": 111,
      "end": 106
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 50,
    "wikidata": "Q14438",
    "kowiki": "기가노토사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Giganotosaurus_TD.png",
      "speculative": false
    },
    "imgv": "bd9a6ea0",
    "famous": true
  },
  {
    "id": "deinonychus",
    "genus": "Deinonychus",
    "nameKo": "데이노니쿠스",
    "aliases": [
      "디노니쿠스"
    ],
    "range": {
      "start": 115,
      "end": 98
    },
    "period": "백악기 전기~후기",
    "diet": "육식",
    "sitelinks": 50,
    "wikidata": "Q14405",
    "kowiki": "데이노니쿠스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Deinonychus_TD.png",
      "speculative": false
    },
    "imgv": "a05e176d",
    "famous": true
  },
  {
    "id": "dilophosaurus",
    "genus": "Dilophosaurus",
    "nameKo": "딜로포사우루스",
    "range": {
      "start": 195.2,
      "end": 183.7
    },
    "period": "쥐라기 전기",
    "diet": "육식",
    "sitelinks": 50,
    "wikidata": "Q271710",
    "kowiki": "딜로포사우루스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Dilophosaurus_TD.png",
      "speculative": false
    },
    "imgv": "5a2a951d",
    "famous": true
  },
  {
    "id": "edmontosaurus",
    "genus": "Edmontosaurus",
    "nameKo": "에드몬토사우루스",
    "range": {
      "start": 73,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 50,
    "wikidata": "Q309466",
    "kowiki": "에드몬토사우루스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Edmontosaurus_TD.png",
      "speculative": false
    },
    "imgv": "1d7a566d",
    "famous": true
  },
  {
    "id": "pachycephalosaurus",
    "genus": "Pachycephalosaurus",
    "nameKo": "파키케팔로사우루스",
    "range": {
      "start": 70,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 50,
    "wikidata": "Q14455",
    "kowiki": "파키케팔로사우루스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Pachycephalosaurus_TD.png",
      "speculative": false
    },
    "imgv": "1ad4ea81",
    "famous": true
  },
  {
    "id": "acrocanthosaurus",
    "genus": "Acrocanthosaurus",
    "nameKo": "아크로칸토사우루스",
    "range": {
      "start": 125,
      "end": 99.6
    },
    "period": "백악기 전기~후기",
    "diet": "육식",
    "sitelinks": 49,
    "wikidata": "Q131021",
    "kowiki": "아크로칸토사우루스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Acrocanthosaurus_TD.png",
      "speculative": false
    },
    "imgv": "06fb0069",
    "famous": true
  },
  {
    "id": "carcharodontosaurus",
    "genus": "Carcharodontosaurus",
    "nameKo": "카르카로돈토사우루스",
    "range": {
      "start": 100,
      "end": 94
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 49,
    "wikidata": "Q14431",
    "kowiki": "카르카로돈토사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Carcharodontosaurus_TD.png",
      "speculative": false
    },
    "imgv": "8300329d",
    "famous": true
  },
  {
    "id": "massospondylus",
    "genus": "Massospondylus",
    "nameKo": "마소스폰딜루스",
    "range": {
      "start": 201.4,
      "end": 184.2
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 48,
    "wikidata": "Q191339",
    "kowiki": "마소스폰딜루스",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Massospondylus_TD.png",
      "speculative": false
    },
    "imgv": "0f9a14d8",
    "famous": true
  },
  {
    "id": "baryonyx",
    "genus": "Baryonyx",
    "nameKo": "바리오닉스",
    "range": {
      "start": 130,
      "end": 125
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 48,
    "wikidata": "Q131006",
    "kowiki": "바리오닉스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Baryonyx_TD.png",
      "speculative": false
    },
    "imgv": "a84371b8",
    "famous": true
  },
  {
    "id": "oviraptor",
    "genus": "Oviraptor",
    "nameKo": "오비랍토르",
    "range": {
      "start": 75,
      "end": 71
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 47,
    "wikidata": "Q131070",
    "kowiki": "오비랍토르",
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Oviraptor_TD.png",
      "speculative": false
    },
    "imgv": "2b6f8dbf",
    "famous": true
  },
  {
    "id": "coelophysis",
    "genus": "Coelophysis",
    "nameKo": "코엘로피시스",
    "range": {
      "start": 215,
      "end": 201.4
    },
    "period": "트라이아스기 후기",
    "diet": "육식",
    "sitelinks": 47,
    "wikidata": "Q309392",
    "kowiki": "코엘로피시스",
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Coelophysis_TD.png",
      "speculative": false
    },
    "imgv": "7f7e3f49",
    "famous": true
  },
  {
    "id": "tarbosaurus",
    "genus": "Tarbosaurus",
    "nameKo": "타르보사우루스",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 47,
    "wikidata": "Q2491",
    "kowiki": "타르보사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tarbosaurus_TD.png",
      "speculative": false
    },
    "imgv": "ace3da59",
    "famous": true
  },
  {
    "id": "plateosaurus",
    "genus": "Plateosaurus",
    "nameKo": "플라테오사우루스",
    "range": {
      "start": 227,
      "end": 204
    },
    "period": "트라이아스기 후기",
    "diet": "초식",
    "sitelinks": 47,
    "wikidata": "Q131046",
    "kowiki": "플라테오사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Plateosaurus_TD.png",
      "speculative": false
    },
    "imgv": "58bce92e",
    "famous": true
  },
  {
    "id": "megalosaurus",
    "genus": "Megalosaurus",
    "nameKo": "메갈로사우루스",
    "range": {
      "start": 166,
      "end": 165
    },
    "period": "쥐라기 중기",
    "diet": "육식",
    "sitelinks": 46,
    "wikidata": "Q131056",
    "kowiki": "메갈로사우루스",
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Megalosaurus_TD.png",
      "speculative": false
    },
    "imgv": "ba86b388",
    "famous": true
  },
  {
    "id": "styracosaurus",
    "genus": "Styracosaurus",
    "nameKo": "스티라코사우루스",
    "range": {
      "start": 75.5,
      "end": 74.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 46,
    "wikidata": "Q14483",
    "kowiki": "스티라코사우루스",
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Styracosaurus_TD.png",
      "speculative": false
    },
    "imgv": "766b8126",
    "famous": true
  },
  {
    "id": "euoplocephalus",
    "genus": "Euoplocephalus",
    "nameKo": "유오플로케팔루스",
    "range": {
      "start": 76.4,
      "end": 75.6
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 45,
    "wikidata": "Q130885",
    "kowiki": "에우오플로케팔루스",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Euoplocephalus_TD.png",
      "speculative": false
    },
    "imgv": "98aeccfb",
    "famous": true
  },
  {
    "id": "kentrosaurus",
    "genus": "Kentrosaurus",
    "nameKo": "켄트로사우루스",
    "range": {
      "start": 152,
      "end": 152
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 44,
    "wikidata": "Q131094",
    "kowiki": "켄트로사우루스 (검룡)",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Kentrosaurus_TD.png",
      "speculative": false
    },
    "imgv": "eef01b44",
    "famous": true
  },
  {
    "id": "corythosaurus",
    "genus": "Corythosaurus",
    "nameKo": "코리토사우루스",
    "range": {
      "start": 77,
      "end": 75.7
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 44,
    "wikidata": "Q131078",
    "kowiki": "코리토사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Corythosaurus_TD.png",
      "speculative": false
    },
    "imgv": "a986cb2d",
    "famous": true
  },
  {
    "id": "protoceratops",
    "genus": "Protoceratops",
    "nameKo": "프로토케라톱스",
    "range": {
      "start": 75,
      "end": 71
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 44,
    "wikidata": "Q14506",
    "kowiki": "프로토케라톱스",
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Protoceratops_TD.png",
      "speculative": false
    },
    "imgv": "64d6cd93",
    "famous": true
  },
  {
    "id": "herrerasaurus",
    "genus": "Herrerasaurus",
    "nameKo": "헤레라사우루스",
    "range": {
      "start": 231.4,
      "end": 228.91
    },
    "period": "트라이아스기 후기",
    "diet": "육식",
    "sitelinks": 44,
    "wikidata": "Q131014",
    "kowiki": "헤레라사우루스",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Herrerasaurus_TD.png",
      "speculative": false
    },
    "imgv": "e05e01f8",
    "famous": true
  },
  {
    "id": "mamenchisaurus",
    "genus": "Mamenchisaurus",
    "nameKo": "마멘키사우루스",
    "range": {
      "start": 161,
      "end": 114.4
    },
    "period": "쥐라기 후기 ~ 백악기 전기",
    "diet": "초식",
    "sitelinks": 43,
    "wikidata": "Q131038",
    "kowiki": "마멘키사우루스",
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Mamenchisaurus_TD.png",
      "speculative": false
    },
    "imgv": "9e70f661",
    "famous": true
  },
  {
    "id": "psittacosaurus",
    "genus": "Psittacosaurus",
    "nameKo": "프시타코사우루스",
    "range": {
      "start": 125,
      "end": 105
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 43,
    "wikidata": "Q132672",
    "kowiki": "프시타코사우루스",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Psittacosaurus_TD.png",
      "speculative": false
    },
    "imgv": "5ebe3063",
    "famous": true
  },
  {
    "id": "brontosaurus",
    "genus": "Brontosaurus",
    "nameKo": "브론토사우루스",
    "range": {
      "start": 156.3,
      "end": 146.8
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 42,
    "wikidata": "Q3222766",
    "kowiki": "브론토사우루스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Brontosaurus_TD.png",
      "speculative": false
    },
    "imgv": "f5c1944c",
    "famous": true
  },
  {
    "id": "ornithomimus",
    "genus": "Ornithomimus",
    "nameKo": "오르니토미무스",
    "range": {
      "start": 76.5,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 42,
    "wikidata": "Q131067",
    "kowiki": "오르니토미무스",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ornithomimus_TD.png",
      "speculative": false
    },
    "imgv": "a2c5f7a2",
    "famous": true
  },
  {
    "id": "camarasaurus",
    "genus": "Camarasaurus",
    "nameKo": "카마라사우루스",
    "range": {
      "start": 155,
      "end": 143
    },
    "period": "쥐라기 후기 ~ 백악기 전기",
    "diet": "초식",
    "sitelinks": 42,
    "wikidata": "Q14419",
    "kowiki": "카마라사우루스",
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Camarasaurus_TD.png",
      "speculative": false
    },
    "imgv": "a83cab60",
    "famous": true
  },
  {
    "id": "lambeosaurus",
    "genus": "Lambeosaurus",
    "nameKo": "람베오사우루스",
    "range": {
      "start": 76.47,
      "end": 74.44
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 41,
    "wikidata": "Q132683",
    "kowiki": "람베오사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Lambeosaurus_TD.png",
      "speculative": false
    },
    "imgv": "657ff068",
    "famous": true
  },
  {
    "id": "maiasaura",
    "genus": "Maiasaura",
    "nameKo": "마이아사우라",
    "range": {
      "start": 86.3,
      "end": 70.6
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 41,
    "wikidata": "Q132414",
    "kowiki": "마이아사우라",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Maiasaura_TD.png",
      "speculative": false
    },
    "imgv": "4554ca57",
    "famous": true
  },
  {
    "id": "camptosaurus",
    "genus": "Camptosaurus",
    "nameKo": "캄프토사우루스",
    "range": {
      "start": 156.3,
      "end": 146.8
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 41,
    "wikidata": "Q133203",
    "kowiki": "캄프토사우루스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Camptosaurus_TD.png",
      "speculative": false
    },
    "imgv": "6d32a645",
    "famous": true
  },
  {
    "id": "supersaurus",
    "genus": "Supersaurus",
    "nameKo": "슈퍼사우루스",
    "range": {
      "start": 153,
      "end": 145
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 40,
    "wikidata": "Q131177",
    "kowiki": "수페르사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Supersaurus_TD.png",
      "speculative": false
    },
    "imgv": "107d3df1",
    "famous": true
  },
  {
    "id": "torosaurus",
    "genus": "Torosaurus",
    "nameKo": "토로사우루스",
    "range": {
      "start": 68,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 39,
    "wikidata": "Q14491",
    "kowiki": "토로사우루스",
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Torosaurus_TD.png",
      "speculative": false
    },
    "imgv": "88bed714",
    "famous": true
  },
  {
    "id": "alamosaurus",
    "genus": "Alamosaurus",
    "nameKo": "알라모사우루스",
    "range": {
      "start": 68,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 38,
    "wikidata": "Q131583",
    "kowiki": "알라모사우루스",
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Alamosaurus_TD.png",
      "speculative": false
    },
    "imgv": "a77f77eb",
    "famous": true
  },
  {
    "id": "torvosaurus",
    "genus": "Torvosaurus",
    "nameKo": "토르보사우루스",
    "range": {
      "start": 165,
      "end": 146.5
    },
    "period": "쥐라기 중기~후기",
    "diet": "육식",
    "sitelinks": 38,
    "wikidata": "Q131537",
    "kowiki": "토르보사우루스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Torvosaurus_TD.png",
      "speculative": false
    },
    "imgv": "39500586",
    "famous": true
  },
  {
    "id": "doolysaurus",
    "genus": "Doolysaurus",
    "nameKo": "둘리사우루스",
    "range": {
      "start": 113,
      "end": 97
    },
    "period": "백악기 전기~후기",
    "diet": "잡식",
    "sitelinks": 9,
    "wikidata": "Q138722514",
    "kowiki": "둘리사우루스",
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Doolysaurus_TD.png",
      "speculative": true
    },
    "imgv": "8c5d62a6",
    "famous": true
  },
  {
    "id": "sauroposeidon",
    "genus": "Sauroposeidon",
    "nameKo": "사우로포세이돈",
    "range": {
      "start": 113,
      "end": 110
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 37,
    "wikidata": "Q131693",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 800,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Sauroposeidon_TD.png",
      "speculative": false
    },
    "imgv": "37a85eac"
  },
  {
    "id": "therizinosaurus",
    "genus": "Therizinosaurus",
    "nameKo": "테리지노사우루스",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 37,
    "wikidata": "Q131264",
    "kowiki": "테리지노사우루스",
    "image": {
      "width": 1280,
      "height": 815,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Therizinosaurus_TD.png",
      "speculative": false
    },
    "imgv": "bcfd3ce9"
  },
  {
    "id": "pachyrhinosaurus",
    "genus": "Pachyrhinosaurus",
    "nameKo": "파키리노사우루스",
    "range": {
      "start": 73.5,
      "end": 71
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 37,
    "wikidata": "Q131568",
    "kowiki": "파키리노사우루스",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Pachyrhinosaurus_TD.png",
      "speculative": false
    },
    "imgv": "b054db62"
  },
  {
    "id": "hesperornis",
    "genus": "Hesperornis",
    "nameKo": "헤스페로르니스",
    "range": {
      "start": 83.6,
      "end": 72
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 37,
    "wikidata": "Q733644",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Hesperornis_TD.png",
      "speculative": false
    },
    "imgv": "080ec7a6"
  },
  {
    "id": "deinocheirus",
    "genus": "Deinocheirus",
    "nameKo": "데이노케이루스",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 36,
    "wikidata": "Q131142",
    "kowiki": "데이노케이루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Deinocheirus_TD.png",
      "speculative": false
    },
    "imgv": "153ba3e4"
  },
  {
    "id": "saurolophus",
    "genus": "Saurolophus",
    "nameKo": "사우롤로푸스",
    "range": {
      "start": 71.5,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 36,
    "wikidata": "Q131096",
    "kowiki": "사우롤로푸스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Saurolophus_TD.png",
      "speculative": false
    },
    "imgv": "25392400"
  },
  {
    "id": "edmontonia",
    "genus": "Edmontonia",
    "nameKo": "에드몬토니아",
    "range": {
      "start": 76.5,
      "end": 69
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 36,
    "wikidata": "Q245262",
    "kowiki": "에드몬토니아",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Edmontonia_TD.png",
      "speculative": false
    },
    "imgv": "159d719a"
  },
  {
    "id": "cryolophosaurus",
    "genus": "Cryolophosaurus",
    "nameKo": "크리올로포사우루스",
    "range": {
      "start": 194.6,
      "end": 182
    },
    "period": "쥐라기 전기",
    "diet": "육식",
    "sitelinks": 36,
    "wikidata": "Q131166",
    "kowiki": "크리올로포사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Cryolophosaurus_TD.png",
      "speculative": false
    },
    "imgv": "06bec6e4"
  },
  {
    "id": "hypsilophodon",
    "genus": "Hypsilophodon",
    "nameKo": "힙실로포돈",
    "range": {
      "start": 130,
      "end": 125
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 36,
    "wikidata": "Q18510952",
    "kowiki": "힙실로포돈",
    "image": {
      "width": 1280,
      "height": 469,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Hypsilophodon_TD.png",
      "speculative": false
    },
    "imgv": "c50144a1"
  },
  {
    "id": "dromaeosaurus",
    "genus": "Dromaeosaurus",
    "nameKo": "드로마에오사우루스",
    "range": {
      "start": 83.6,
      "end": 68
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 35,
    "wikidata": "Q131082",
    "kowiki": "드로마에오사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Dromaeosaurus_TD.png",
      "speculative": false
    },
    "imgv": "0b7232de"
  },
  {
    "id": "achillobator",
    "genus": "Achillobator",
    "nameKo": "아킬로바토르",
    "range": {
      "start": 96,
      "end": 89
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 35,
    "wikidata": "Q132445",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Achillobator_TD.png",
      "speculative": false
    },
    "imgv": "06a6bed0"
  },
  {
    "id": "heterodontosaurus",
    "genus": "Heterodontosaurus",
    "nameKo": "헤테로돈토사우루스",
    "range": {
      "start": 200,
      "end": 190
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 35,
    "wikidata": "Q131188",
    "kowiki": "헤테로돈토사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Heterodontosaurus_TD.png",
      "speculative": false
    },
    "imgv": "a03420de"
  },
  {
    "id": "gigantoraptor",
    "genus": "Gigantoraptor",
    "nameKo": "기간토랍토르",
    "range": {
      "start": 95,
      "end": 80
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 34,
    "wikidata": "Q310496",
    "kowiki": "기간토랍토르",
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Gigantoraptor_TD.png",
      "speculative": false
    },
    "imgv": "a63822b7"
  },
  {
    "id": "giraffatitan",
    "genus": "Giraffatitan",
    "nameKo": "기라파티탄",
    "range": {
      "start": 150,
      "end": 145
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 34,
    "wikidata": "Q14410",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 815,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Giraffatitan_TD.png",
      "speculative": false
    },
    "imgv": "38895caa"
  },
  {
    "id": "scelidosaurus",
    "genus": "Scelidosaurus",
    "nameKo": "스켈리도사우루스",
    "range": {
      "start": 193,
      "end": 193
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 34,
    "wikidata": "Q18862",
    "kowiki": "스켈리도사우루스",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Scelidosaurus_TD.png",
      "speculative": false
    },
    "imgv": "76fc4e8d"
  },
  {
    "id": "barapasaurus",
    "genus": "Barapasaurus",
    "nameKo": "바라파사우루스",
    "range": {
      "start": 196,
      "end": 190
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 33,
    "wikidata": "Q131644",
    "kowiki": "바라파사우루스",
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Barapasaurus_TD.png",
      "speculative": false
    },
    "imgv": "9bee1d24"
  },
  {
    "id": "yutyrannus",
    "genus": "Yutyrannus",
    "nameKo": "유티라누스",
    "range": {
      "start": 125,
      "end": 125
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 33,
    "wikidata": "Q131710",
    "kowiki": "유티라누스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Yutyrannus_TD.png",
      "speculative": false
    },
    "imgv": "4b5d3980"
  },
  {
    "id": "huayangosaurus",
    "genus": "Huayangosaurus",
    "nameKo": "후양고사우루스",
    "range": {
      "start": 170.3,
      "end": 163.5
    },
    "period": "쥐라기 중기",
    "diet": "초식",
    "sitelinks": 33,
    "wikidata": "Q131648",
    "kowiki": "후양고사우루스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Huayangosaurus_TD.png",
      "speculative": false
    },
    "imgv": "f5a8d858"
  },
  {
    "id": "majungasaurus",
    "genus": "Majungasaurus",
    "nameKo": "마준가사우루스",
    "range": {
      "start": 70,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 32,
    "wikidata": "Q18511009",
    "kowiki": "마준가사우루스",
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Majungasaurus_TD.png",
      "speculative": false
    },
    "imgv": "034d8e36"
  },
  {
    "id": "mononykus",
    "genus": "Mononykus",
    "nameKo": "모노니쿠스",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 32,
    "wikidata": "Q131421",
    "kowiki": "모노니쿠스",
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Mononykus_TD.png",
      "speculative": false
    },
    "imgv": "4fee7067"
  },
  {
    "id": "saltasaurus",
    "genus": "Saltasaurus",
    "nameKo": "살타사우루스",
    "range": {
      "start": 70,
      "end": 68
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 32,
    "wikidata": "Q131111",
    "kowiki": "살타사우루스",
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Saltasaurus_TD.png",
      "speculative": false
    },
    "imgv": "6f4d5ca9"
  },
  {
    "id": "megaraptor",
    "genus": "Megaraptor",
    "nameKo": "메가랍토르",
    "range": {
      "start": 90,
      "end": 88
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 31,
    "wikidata": "Q131540",
    "kowiki": "메가랍토르",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Megaraptor_TD.png",
      "speculative": false
    },
    "imgv": "9742c0f5"
  },
  {
    "id": "nigersaurus",
    "genus": "Nigersaurus",
    "nameKo": "니게르사우루스",
    "range": {
      "start": 115,
      "end": 105
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 30,
    "wikidata": "Q131407",
    "kowiki": "니게르사우루스",
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Nigersaurus_TD.png",
      "speculative": false
    },
    "imgv": "c0f68967"
  },
  {
    "id": "dryosaurus",
    "genus": "Dryosaurus",
    "nameKo": "드리오사우루스",
    "range": {
      "start": 155,
      "end": 145
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 30,
    "wikidata": "Q131085",
    "kowiki": "드리오사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Dryosaurus_TD.png",
      "speculative": false
    },
    "imgv": "2e90506d"
  },
  {
    "id": "scutellosaurus",
    "genus": "Scutellosaurus",
    "nameKo": "스쿠텔로사우루스",
    "range": {
      "start": 196,
      "end": 196
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 30,
    "wikidata": "Q131646",
    "kowiki": "스쿠텔로사우루스",
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Scutellosaurus_TD.png",
      "speculative": false
    },
    "imgv": "5eb79f15"
  },
  {
    "id": "caudipteryx",
    "genus": "Caudipteryx",
    "nameKo": "카우디프테릭스",
    "range": {
      "start": 124.6,
      "end": 124.6
    },
    "period": "백악기 전기",
    "diet": "잡식",
    "sitelinks": 30,
    "wikidata": "Q131069",
    "kowiki": "카우딥테릭스",
    "image": {
      "width": 1280,
      "height": 768,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Caudipteryx_TD.png",
      "speculative": false
    },
    "imgv": "63ce6b01"
  },
  {
    "id": "tenontosaurus",
    "genus": "Tenontosaurus",
    "nameKo": "테논토사우루스",
    "range": {
      "start": 115,
      "end": 108
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 30,
    "wikidata": "Q131103",
    "kowiki": "테논토사우루스",
    "image": {
      "width": 1280,
      "height": 295,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tenontosaurus_TD.png",
      "speculative": false
    },
    "imgv": "18d45dbd"
  },
  {
    "id": "polacanthus",
    "genus": "Polacanthus",
    "nameKo": "폴라칸투스",
    "range": {
      "start": 130,
      "end": 125
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 30,
    "wikidata": "Q134162",
    "kowiki": "폴라칸투스",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Polacanthus_TD.png",
      "speculative": false
    },
    "imgv": "169a2a12"
  },
  {
    "id": "hadrosaurus",
    "genus": "Hadrosaurus",
    "nameKo": "하드로사우루스",
    "range": {
      "start": 83.6,
      "end": 77.9
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 30,
    "wikidata": "Q14511",
    "kowiki": "하드로사우루스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Hadrosaurus_TD.png",
      "speculative": false
    },
    "imgv": "aa6d6edf"
  },
  {
    "id": "gastonia",
    "genus": "Gastonia",
    "nameKo": "가스토니아",
    "range": {
      "start": 139,
      "end": 125.77
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 29,
    "wikidata": "Q134170",
    "kowiki": "가스토니아",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Gastonia_TD.png",
      "speculative": false
    },
    "imgv": "792fc27a"
  },
  {
    "id": "buitreraptor",
    "genus": "Buitreraptor",
    "nameKo": "부이트레랍토르",
    "range": {
      "start": 111,
      "end": 106
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 29,
    "wikidata": "Q133137",
    "kowiki": "부이트레랍토르",
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Buitreraptor_TD.png",
      "speculative": false
    },
    "imgv": "f9889a65"
  },
  {
    "id": "stegoceras",
    "genus": "Stegoceras",
    "nameKo": "스테고케라스",
    "range": {
      "start": 77.5,
      "end": 74
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 29,
    "wikidata": "Q134191",
    "kowiki": "스테고케라스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Stegoceras_TD.png",
      "speculative": false
    },
    "imgv": "7b833f54"
  },
  {
    "id": "nanotyrannus",
    "genus": "Nanotyrannus",
    "nameKo": "나노티라누스",
    "range": {
      "start": 67,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 28,
    "wikidata": "Q131673",
    "kowiki": "나노티라누스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Nanotyrannus_TD.png",
      "speculative": false
    },
    "imgv": "0ce0aa08"
  },
  {
    "id": "rajasaurus",
    "genus": "Rajasaurus",
    "nameKo": "라자사우루스",
    "range": {
      "start": 69,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 28,
    "wikidata": "Q31881",
    "kowiki": "라자사우루스",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Rajasaurus_TD.png",
      "speculative": false
    },
    "imgv": "682e6b5c"
  },
  {
    "id": "lythronax",
    "genus": "Lythronax",
    "nameKo": "리트로낙스",
    "range": {
      "start": 81.9,
      "end": 81.5
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 28,
    "wikidata": "Q15137014",
    "kowiki": "리트로낙스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Lythronax_TD.png",
      "speculative": false
    },
    "imgv": "56c001a5"
  },
  {
    "id": "muttaburrasaurus",
    "genus": "Muttaburrasaurus",
    "nameKo": "무타부라사우루스",
    "range": {
      "start": 113.2,
      "end": 93.9
    },
    "period": "백악기 전기~후기",
    "diet": "초식",
    "sitelinks": 28,
    "wikidata": "Q131170",
    "kowiki": "무타부라사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Muttaburrasaurus_TD.png",
      "speculative": false
    },
    "imgv": "41974276"
  },
  {
    "id": "abrosaurus",
    "genus": "Abrosaurus",
    "nameKo": "아브로사우루스",
    "range": {
      "start": 168,
      "end": 161
    },
    "period": "쥐라기 중기~후기",
    "diet": "초식",
    "sitelinks": 28,
    "wikidata": "Q131604",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Abrosaurus_TD.png",
      "speculative": false
    },
    "imgv": "6983719f"
  },
  {
    "id": "alxasaurus",
    "genus": "Alxasaurus",
    "nameKo": "알라샤사우루스",
    "range": {
      "start": 113,
      "end": 100.5
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 28,
    "wikidata": "Q311286",
    "kowiki": "알사사우루스",
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Alxasaurus_TD.png",
      "speculative": false
    },
    "imgv": "1718afd4"
  },
  {
    "id": "yangchuanosaurus",
    "genus": "Yangchuanosaurus",
    "nameKo": "양추아노사우루스",
    "range": {
      "start": 168.3,
      "end": 145
    },
    "period": "쥐라기 중기~후기",
    "diet": "육식",
    "sitelinks": 28,
    "wikidata": "Q131131",
    "kowiki": "양추아노사우루스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Yangchuanosaurus_TD.png",
      "speculative": false
    },
    "imgv": "c6b4444e"
  },
  {
    "id": "olorotitan",
    "genus": "Olorotitan",
    "nameKo": "올로로티탄",
    "range": {
      "start": 72,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 28,
    "wikidata": "Q132470",
    "kowiki": "올로로티탄",
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Olorotitan_TD.png",
      "speculative": false
    },
    "imgv": "6660719f"
  },
  {
    "id": "concavenator",
    "genus": "Concavenator",
    "nameKo": "콘카베나토르",
    "range": {
      "start": 125,
      "end": 125
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 28,
    "wikidata": "Q131715",
    "kowiki": "콘카베나토르",
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Concavenator_TD.png",
      "speculative": false
    },
    "imgv": "742efe42"
  },
  {
    "id": "guanlong",
    "genus": "Guanlong",
    "nameKo": "구안롱",
    "range": {
      "start": 160,
      "end": 160
    },
    "period": "쥐라기 후기",
    "diet": "육식",
    "sitelinks": 27,
    "wikidata": "Q131121",
    "kowiki": "구안롱",
    "image": {
      "width": 1280,
      "height": 533,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Guanlong_TD.png",
      "speculative": false
    },
    "imgv": "7a16e3ee"
  },
  {
    "id": "gryposaurus",
    "genus": "Gryposaurus",
    "nameKo": "그리포사우루스",
    "range": {
      "start": 80,
      "end": 75
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 27,
    "wikidata": "Q385949",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Gryposaurus_TD.png",
      "speculative": false
    },
    "imgv": "e12952a8"
  },
  {
    "id": "dacentrurus",
    "genus": "Dacentrurus",
    "nameKo": "다켄트루루스",
    "range": {
      "start": 154,
      "end": 140
    },
    "period": "쥐라기 후기 ~ 백악기 전기",
    "diet": "초식",
    "sitelinks": 27,
    "wikidata": "Q131760",
    "kowiki": "다켄트루루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Dacentrurus_TD.png",
      "speculative": false
    },
    "imgv": "0070df50"
  },
  {
    "id": "dryptosaurus",
    "genus": "Dryptosaurus",
    "nameKo": "드립토사우루스",
    "range": {
      "start": 67,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 27,
    "wikidata": "Q131634",
    "kowiki": "드립토사우루스",
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Dryptosaurus_TD.png",
      "speculative": false
    },
    "imgv": "53531e70"
  },
  {
    "id": "rapetosaurus",
    "genus": "Rapetosaurus",
    "nameKo": "라페토사우루스",
    "range": {
      "start": 70,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 27,
    "wikidata": "Q135300",
    "kowiki": "라페토사우루스",
    "image": {
      "width": 1280,
      "height": 815,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Rapetosaurus_TD.png",
      "speculative": false
    },
    "imgv": "e88e16ed"
  },
  {
    "id": "shuvuuia",
    "genus": "Shuvuuia",
    "nameKo": "슈부이아",
    "range": {
      "start": 75,
      "end": 75
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 27,
    "wikidata": "Q134230",
    "kowiki": "슈부이아",
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Shuvuuia_TD.png",
      "speculative": false
    },
    "imgv": "8a0c1fb8"
  },
  {
    "id": "australovenator",
    "genus": "Australovenator",
    "nameKo": "아우스트랄로베나토르",
    "range": {
      "start": 95,
      "end": 95
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 27,
    "wikidata": "Q131278",
    "kowiki": "아우스트랄로베나토르",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Australovenator_TD.png",
      "speculative": false
    },
    "imgv": "9a592492"
  },
  {
    "id": "europasaurus",
    "genus": "Europasaurus",
    "nameKo": "에우로파사우루스",
    "range": {
      "start": 154,
      "end": 151
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 27,
    "wikidata": "Q131712",
    "kowiki": "에우로파사우루스",
    "image": {
      "width": 1280,
      "height": 815,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Europasaurus_TD.png",
      "speculative": false
    },
    "imgv": "29155189"
  },
  {
    "id": "yi",
    "genus": "Yi",
    "nameKo": "이",
    "range": {
      "start": 160,
      "end": 157
    },
    "period": "쥐라기 후기",
    "diet": "육식",
    "sitelinks": 27,
    "wikidata": "Q19842095",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Yi_TD.png",
      "speculative": false
    },
    "imgv": "614247e9"
  },
  {
    "id": "citipati",
    "genus": "Citipati",
    "nameKo": "키티파티",
    "range": {
      "start": 75,
      "end": 71
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 27,
    "wikidata": "Q131735",
    "kowiki": "키티파티",
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Citipati_TD.png",
      "speculative": false
    },
    "imgv": "684f2740"
  },
  {
    "id": "nanuqsaurus",
    "genus": "Nanuqsaurus",
    "nameKo": "나누크사우루스",
    "range": {
      "start": 73,
      "end": 73
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 26,
    "wikidata": "Q15933442",
    "kowiki": "나누크사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Nanuqsaurus_TD.png",
      "speculative": false
    },
    "imgv": "421bce5a"
  },
  {
    "id": "micropachycephalosaurus",
    "genus": "Micropachycephalosaurus",
    "nameKo": "미크로파키케팔로사우루스",
    "range": {
      "start": 83.6,
      "end": 72.2
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 26,
    "wikidata": "Q131775",
    "kowiki": "미크로파키케팔로사우루스",
    "image": {
      "width": 1280,
      "height": 555,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Micropachycephalosaurus_TD.png",
      "speculative": false
    },
    "imgv": "b3b91d92"
  },
  {
    "id": "zalmoxes",
    "genus": "Zalmoxes",
    "nameKo": "잘목세스",
    "range": {
      "start": 70,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 26,
    "wikidata": "Q132538",
    "kowiki": "잘목세스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Zalmoxes_TD.png",
      "speculative": false
    },
    "imgv": "f163c587"
  },
  {
    "id": "pelecanimimus",
    "genus": "Pelecanimimus",
    "nameKo": "펠레카니미무스",
    "range": {
      "start": 125,
      "end": 125
    },
    "period": "백악기 전기",
    "diet": "잡식",
    "sitelinks": 26,
    "wikidata": "Q134151",
    "kowiki": "펠레카니미무스",
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Pelecanimimus_TD.png",
      "speculative": false
    },
    "imgv": "a4f0a027"
  },
  {
    "id": "brachytrachelopan",
    "genus": "Brachytrachelopan",
    "nameKo": "브라키트라켈로판",
    "range": {
      "start": 160,
      "end": 150
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 25,
    "wikidata": "Q131670",
    "kowiki": "브라키트라켈로판",
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Brachytrachelopan_TD.png",
      "speculative": false
    },
    "imgv": "866accbb"
  },
  {
    "id": "austroraptor",
    "genus": "Austroraptor",
    "nameKo": "아우스트로랍토르",
    "range": {
      "start": 76.5,
      "end": 68
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 25,
    "wikidata": "Q132257",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Austroraptor_TD.png",
      "speculative": false
    },
    "imgv": "8f2bf9a1"
  },
  {
    "id": "hylaeosaurus",
    "genus": "Hylaeosaurus",
    "nameKo": "힐라에오사우루스",
    "range": {
      "start": 140,
      "end": 136
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 25,
    "wikidata": "Q131770",
    "kowiki": "힐라에오사우루스",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Hylaeosaurus_TD.png",
      "speculative": false
    },
    "imgv": "6e2962ed"
  },
  {
    "id": "megapnosaurus",
    "genus": "Megapnosaurus",
    "nameKo": "메갑노사우루스",
    "range": {
      "start": 199,
      "end": 188
    },
    "period": "쥐라기 전기",
    "diet": "육식",
    "sitelinks": 24,
    "wikidata": "Q277277",
    "kowiki": "메갑노사우루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Megapnosaurus_TD.png",
      "speculative": false
    },
    "imgv": "d9e0a55a"
  },
  {
    "id": "borealopelta",
    "genus": "Borealopelta",
    "nameKo": "보레알로펠타",
    "range": {
      "start": 112,
      "end": 106
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 24,
    "wikidata": "Q29947914",
    "kowiki": "보레알로펠타",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Borealopelta_TD.png",
      "speculative": false
    },
    "imgv": "68271db8"
  },
  {
    "id": "astrodon",
    "genus": "Astrodon",
    "nameKo": "아스트로돈",
    "range": {
      "start": 112,
      "end": 112
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 24,
    "wikidata": "Q128194",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Astrodon_TD.png",
      "speculative": false
    },
    "imgv": "3d360085"
  },
  {
    "id": "isisaurus",
    "genus": "Isisaurus",
    "nameKo": "이시사우루스",
    "range": {
      "start": 70,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 24,
    "wikidata": "Q311505",
    "kowiki": "이시사우루스",
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Isisaurus_TD.png",
      "speculative": false
    },
    "imgv": "798041fd"
  },
  {
    "id": "tarchia",
    "genus": "Tarchia",
    "nameKo": "타르키아",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 24,
    "wikidata": "Q135304",
    "kowiki": "타르키아",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tarchia_TD.png",
      "speculative": false
    },
    "imgv": "9b14211c"
  },
  {
    "id": "prenocephale",
    "genus": "Prenocephale",
    "nameKo": "프레노케팔레",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 24,
    "wikidata": "Q134220",
    "kowiki": "프레노케팔레",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Prenocephale_TD.png",
      "speculative": false
    },
    "imgv": "9ffa3509"
  },
  {
    "id": "aardonyx",
    "genus": "Aardonyx",
    "nameKo": "아르도닉스",
    "range": {
      "start": 201.3,
      "end": 190.8
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 23,
    "wikidata": "Q131298",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Aardonyx_TD.png",
      "speculative": false
    },
    "imgv": "5ebb817f"
  },
  {
    "id": "arrhinoceratops",
    "genus": "Arrhinoceratops",
    "nameKo": "아르히노케라톱스",
    "range": {
      "start": 70.6,
      "end": 70
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 23,
    "wikidata": "Q131595",
    "kowiki": "아르히노케라톱스",
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Arrhinoceratops_TD.png",
      "speculative": false
    },
    "imgv": "3c09ceb5"
  },
  {
    "id": "atlasaurus",
    "genus": "Atlasaurus",
    "nameKo": "아틀라사우루스",
    "range": {
      "start": 167.7,
      "end": 164.7
    },
    "period": "쥐라기 중기",
    "diet": "초식",
    "sitelinks": 23,
    "wikidata": "Q2456661",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 896,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Atlasaurus_TD.png",
      "speculative": false
    },
    "imgv": "456102df"
  },
  {
    "id": "albertaceratops",
    "genus": "Albertaceratops",
    "nameKo": "알베르타케라톱스",
    "range": {
      "start": 77.5,
      "end": 77.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 23,
    "wikidata": "Q131573",
    "kowiki": "알베르타케라톱스",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Albertaceratops_TD.png",
      "speculative": false
    },
    "imgv": "12df26af"
  },
  {
    "id": "eotriceratops",
    "genus": "Eotriceratops",
    "nameKo": "에오트리케라톱스",
    "range": {
      "start": 68.8,
      "end": 68.8
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 23,
    "wikidata": "Q132611",
    "kowiki": "에오트리케라톱스",
    "image": {
      "width": 1280,
      "height": 597,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Eotriceratops_TD.png",
      "speculative": false
    },
    "imgv": "41e6048d"
  },
  {
    "id": "nasutoceratops",
    "genus": "Nasutoceratops",
    "nameKo": "나수토케라톱스",
    "range": {
      "start": 75.9,
      "end": 75.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 22,
    "wikidata": "Q3914791",
    "kowiki": "나수토케라톱스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Nasutoceratops_TD.png",
      "speculative": false
    },
    "imgv": "202e4cbf"
  },
  {
    "id": "sarcosaurus",
    "genus": "Sarcosaurus",
    "nameKo": "사르코사우루스",
    "range": {
      "start": 200,
      "end": 194
    },
    "period": "쥐라기 전기",
    "diet": "육식",
    "sitelinks": 22,
    "wikidata": "Q134634",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Sarcosaurus_TD.png",
      "speculative": false
    },
    "imgv": "4b52a35c"
  },
  {
    "id": "utahceratops",
    "genus": "Utahceratops",
    "nameKo": "우타케라톱스",
    "range": {
      "start": 76.4,
      "end": 75.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 22,
    "wikidata": "Q134308",
    "kowiki": "우타케라톱스",
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Utahceratops_TD.png",
      "speculative": false
    },
    "imgv": "2c359205"
  },
  {
    "id": "incisivosaurus",
    "genus": "Incisivosaurus",
    "nameKo": "인키시보사우루스",
    "range": {
      "start": 126,
      "end": 124
    },
    "period": "백악기 전기",
    "diet": "잡식",
    "sitelinks": 22,
    "wikidata": "Q131932",
    "kowiki": "인키시보사우루스",
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Incisivosaurus_TD.png",
      "speculative": false
    },
    "imgv": "7a039388"
  },
  {
    "id": "diabloceratops",
    "genus": "Diabloceratops",
    "nameKo": "디아블로케라톱스",
    "range": {
      "start": 81.4,
      "end": 81
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 21,
    "wikidata": "Q132291",
    "kowiki": "디아블로케라톱스",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Diabloceratops_TD.png",
      "speculative": false
    },
    "imgv": "7b833c01"
  },
  {
    "id": "rebbachisaurus",
    "genus": "Rebbachisaurus",
    "nameKo": "레바키사우루스",
    "range": {
      "start": 99,
      "end": 97
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 21,
    "wikidata": "Q133675",
    "kowiki": "레바키사우루스",
    "image": {
      "width": 1280,
      "height": 341,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Rebbachisaurus_TD.png",
      "speculative": false
    },
    "imgv": "46fbb86a"
  },
  {
    "id": "maraapunisaurus",
    "genus": "Maraapunisaurus",
    "nameKo": "마라아푸니사우루스",
    "range": {
      "start": 150,
      "end": 150
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 21,
    "wikidata": "Q57612918",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Maraapunisaurus_TD.png",
      "speculative": true
    },
    "imgv": "cdb5c3fa"
  },
  {
    "id": "appalachiosaurus",
    "genus": "Appalachiosaurus",
    "nameKo": "아팔라치오사우루스",
    "range": {
      "start": 82,
      "end": 77.9
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 21,
    "wikidata": "Q773996",
    "kowiki": "아팔라치오사우루스",
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Appalachiosaurus_TD.png",
      "speculative": false
    },
    "imgv": "fb0e873f"
  },
  {
    "id": "emausaurus",
    "genus": "Emausaurus",
    "nameKo": "에마우사우루스",
    "range": {
      "start": 183,
      "end": 182
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 21,
    "wikidata": "Q133065",
    "kowiki": "에마우사우루스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Emausaurus_TD.png",
      "speculative": false
    },
    "imgv": "3cdb1246"
  },
  {
    "id": "oryctodromeus",
    "genus": "Oryctodromeus",
    "nameKo": "오릭토드로메우스",
    "range": {
      "start": 105,
      "end": 96
    },
    "period": "백악기 전기~후기",
    "diet": "초식",
    "sitelinks": 21,
    "wikidata": "Q133146",
    "kowiki": "오릭토드로메우스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Oryctodromeus_TD.png",
      "speculative": false
    },
    "imgv": "12da7154"
  },
  {
    "id": "lusotitan",
    "genus": "Lusotitan",
    "nameKo": "루소티탄",
    "range": {
      "start": 152,
      "end": 152
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 20,
    "wikidata": "Q132526",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Lusotitan_TD.png",
      "speculative": false
    },
    "imgv": "1691c5ab"
  },
  {
    "id": "sinotyrannus",
    "genus": "Sinotyrannus",
    "nameKo": "시노티라누스",
    "range": {
      "start": 122,
      "end": 120
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 20,
    "wikidata": "Q1187687",
    "kowiki": "시노티라누스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Sinotyrannus_TD.png",
      "speculative": false
    },
    "imgv": "856e0e60"
  },
  {
    "id": "anchiornis",
    "genus": "Anchiornis",
    "nameKo": "안키오르니스",
    "range": {
      "start": 160.89,
      "end": 160.25
    },
    "period": "쥐라기 후기",
    "diet": "잡식",
    "sitelinks": 20,
    "wikidata": "Q18511041",
    "kowiki": "안키오르니스",
    "image": {
      "width": 1280,
      "height": 698,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Anchiornis_TD.png",
      "speculative": false
    },
    "imgv": "69801fbf"
  },
  {
    "id": "albertonykus",
    "genus": "Albertonykus",
    "nameKo": "알베르토니쿠스",
    "range": {
      "start": 68.5,
      "end": 68.5
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 20,
    "wikidata": "Q131750",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Albertonykus_TD.png",
      "speculative": false
    },
    "imgv": "a5adb9ba"
  },
  {
    "id": "ozraptor",
    "genus": "Ozraptor",
    "nameKo": "오즈랍토르",
    "range": {
      "start": 169,
      "end": 169
    },
    "period": "쥐라기 중기",
    "diet": "육식",
    "sitelinks": 20,
    "wikidata": "Q2147651",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ozraptor_TD.png",
      "speculative": true
    },
    "imgv": "f713fc72"
  },
  {
    "id": "chilesaurus",
    "genus": "Chilesaurus",
    "nameKo": "칠레사우루스",
    "range": {
      "start": 147,
      "end": 147
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 20,
    "wikidata": "Q19836626",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Chilesaurus_TD.png",
      "speculative": false
    },
    "imgv": "035bc12e"
  },
  {
    "id": "marshosaurus",
    "genus": "Marshosaurus",
    "nameKo": "마르소사우루스",
    "range": {
      "start": 155,
      "end": 152
    },
    "period": "쥐라기 후기",
    "diet": "육식",
    "sitelinks": 19,
    "wikidata": "Q136872",
    "kowiki": "마르쇼사우루스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Marshosaurus_TD.png",
      "speculative": false
    },
    "imgv": "65b7dafd"
  },
  {
    "id": "mantellisaurus",
    "genus": "Mantellisaurus",
    "nameKo": "만텔리사우루스",
    "range": {
      "start": 130,
      "end": 120
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 19,
    "wikidata": "Q783455",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Mantellisaurus_TD.png",
      "speculative": false
    },
    "imgv": "432f8d52"
  },
  {
    "id": "medusaceratops",
    "genus": "Medusaceratops",
    "nameKo": "메두사케라톱스",
    "range": {
      "start": 77.5,
      "end": 77.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 19,
    "wikidata": "Q2272018",
    "kowiki": "메두사케라톱스",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Medusaceratops_TD.png",
      "speculative": false
    },
    "imgv": "5b5e957f"
  },
  {
    "id": "stegouros",
    "genus": "Stegouros",
    "nameKo": "스테고우로스",
    "range": {
      "start": 74.9,
      "end": 71.7
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 19,
    "wikidata": "Q109887670",
    "kowiki": "스테고우로스",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Stegouros_TD.png",
      "speculative": false
    },
    "imgv": "e3aee596"
  },
  {
    "id": "sphaerotholus",
    "genus": "Sphaerotholus",
    "nameKo": "스파에로톨루스",
    "range": {
      "start": 76,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 19,
    "wikidata": "Q134104",
    "kowiki": "스파에로톨루스",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Sphaerotholus_TD.png",
      "speculative": false
    },
    "imgv": "f31d1f25"
  },
  {
    "id": "siats",
    "genus": "Siats",
    "nameKo": "시아츠",
    "range": {
      "start": 99,
      "end": 94.5
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 19,
    "wikidata": "Q15221367",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Siats_TD.png",
      "speculative": true
    },
    "imgv": "4b8fec0a"
  },
  {
    "id": "aletopelta",
    "genus": "Aletopelta",
    "nameKo": "알레토펠타",
    "range": {
      "start": 75.5,
      "end": 75.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 19,
    "wikidata": "Q134299",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Aletopelta_TD.png",
      "speculative": false
    },
    "imgv": "897cd84e"
  },
  {
    "id": "lanzhousaurus",
    "genus": "Lanzhousaurus",
    "nameKo": "란저우사우루스",
    "range": {
      "start": 130,
      "end": 130
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 18,
    "wikidata": "Q735082",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Lanzhousaurus_TD.png",
      "speculative": false
    },
    "imgv": "2a636a9e"
  },
  {
    "id": "albalophosaurus",
    "genus": "Albalophosaurus",
    "nameKo": "알발로포사우루스",
    "range": {
      "start": 137.05,
      "end": 125.77
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 18,
    "wikidata": "Q192389",
    "kowiki": "알발로포사우루스",
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Albalophosaurus_TD.png",
      "speculative": false
    },
    "imgv": "8ce820e1"
  },
  {
    "id": "lokiceratops",
    "genus": "Lokiceratops",
    "nameKo": "로키케라톱스",
    "range": {
      "start": 78.1,
      "end": 78.1
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 17,
    "wikidata": "Q126740374",
    "kowiki": "로키케라톱스",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Lokiceratops_TD.png",
      "speculative": false
    },
    "imgv": "83fcff74"
  },
  {
    "id": "auroraceratops",
    "genus": "Auroraceratops",
    "nameKo": "아우로라케라톱스",
    "range": {
      "start": 113.2,
      "end": 100.5
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 17,
    "wikidata": "Q133183",
    "kowiki": "아우로라케라톱스",
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Auroraceratops_TD.png",
      "speculative": false
    },
    "imgv": "fe4a3dd7"
  },
  {
    "id": "anzu",
    "genus": "Anzu",
    "nameKo": "안주",
    "range": {
      "start": 67.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 17,
    "wikidata": "Q15966623",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Anzu_TD.png",
      "speculative": false
    },
    "imgv": "8e20b967"
  },
  {
    "id": "eoabelisaurus",
    "genus": "Eoabelisaurus",
    "nameKo": "에오아벨리사우루스",
    "range": {
      "start": 179.17,
      "end": 178.07
    },
    "period": "쥐라기 전기",
    "diet": "육식",
    "sitelinks": 17,
    "wikidata": "Q135114",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Eoabelisaurus_TD.png",
      "speculative": false
    },
    "imgv": "9aeb37bc"
  },
  {
    "id": "yuxisaurus",
    "genus": "Yuxisaurus",
    "nameKo": "위시사우루스",
    "range": {
      "start": 199.5,
      "end": 174.7
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 17,
    "wikidata": "Q109997024",
    "kowiki": "위시사우루스",
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Yuxisaurus_TD.png",
      "speculative": false
    },
    "imgv": "2407f7da"
  },
  {
    "id": "jakapil",
    "genus": "Jakapil",
    "nameKo": "자카필",
    "range": {
      "start": 111,
      "end": 106
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 17,
    "wikidata": "Q113494797",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Jakapil_TD.png",
      "speculative": false
    },
    "imgv": "8ed32f6e"
  },
  {
    "id": "tethyshadros",
    "genus": "Tethyshadros",
    "nameKo": "테티스하드로스",
    "range": {
      "start": 81.5,
      "end": 80.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 17,
    "wikidata": "Q133402",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tethyshadros_TD.png",
      "speculative": false
    },
    "imgv": "51063e9e"
  },
  {
    "id": "gravitholus",
    "genus": "Gravitholus",
    "nameKo": "그라비톨루스",
    "range": {
      "start": 83.6,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 16,
    "wikidata": "Q134642",
    "kowiki": "그라비톨루스",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Gravitholus_TD.png",
      "speculative": false
    },
    "imgv": "2bed01c9"
  },
  {
    "id": "spicomellus",
    "genus": "Spicomellus",
    "nameKo": "스피코멜루스",
    "range": {
      "start": 168.2,
      "end": 165.3
    },
    "period": "쥐라기 중기",
    "diet": "초식",
    "sitelinks": 16,
    "wikidata": "Q108667860",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Spicomellus_TD.png",
      "speculative": false
    },
    "imgv": "644b7188"
  },
  {
    "id": "asiatyrannus",
    "genus": "Asiatyrannus",
    "nameKo": "아시아티라누스",
    "range": {
      "start": 66.7,
      "end": 66.7
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 16,
    "wikidata": "Q127826022",
    "kowiki": "아시아티라누스",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Asiatyrannus_TD.png",
      "speculative": false
    },
    "imgv": "2c1d5c10"
  },
  {
    "id": "zuul",
    "genus": "Zuul",
    "nameKo": "주울",
    "range": {
      "start": 75,
      "end": 75
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 16,
    "wikidata": "Q29890400",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Zuul_TD.png",
      "speculative": false
    },
    "imgv": "d845fca3"
  },
  {
    "id": "khankhuuluu",
    "genus": "Khankhuuluu",
    "nameKo": "칸쿨루",
    "range": {
      "start": 93.9,
      "end": 83.6
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 16,
    "wikidata": "Q134876964",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Khankhuuluu_TD.png",
      "speculative": false
    },
    "imgv": "d1ba11c3"
  },
  {
    "id": "kuru",
    "genus": "Kuru",
    "nameKo": "쿠루",
    "range": {
      "start": 72,
      "end": 71
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 16,
    "wikidata": "Q192413",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Kuru_TD.png",
      "speculative": false
    },
    "imgv": "4dd19288"
  },
  {
    "id": "stenonychosaurus",
    "genus": "Stenonychosaurus",
    "nameKo": "스테노니코사우루스",
    "range": {
      "start": 76,
      "end": 76
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 15,
    "wikidata": "Q3498371",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Stenonychosaurus_TD.png",
      "speculative": false
    },
    "imgv": "62ad9c81"
  },
  {
    "id": "spinops",
    "genus": "Spinops",
    "nameKo": "스피놉스",
    "range": {
      "start": 76.5,
      "end": 76.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 15,
    "wikidata": "Q764899",
    "kowiki": "스피놉스",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Spinops_TD.png",
      "speculative": false
    },
    "imgv": "ea660fbd"
  },
  {
    "id": "talenkauen",
    "genus": "Talenkauen",
    "nameKo": "탈렌카우엔",
    "range": {
      "start": 76,
      "end": 70
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 15,
    "wikidata": "Q220870",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Talenkauen_TD.png",
      "speculative": false
    },
    "imgv": "73c32e47"
  },
  {
    "id": "gideonmantellia",
    "genus": "Gideonmantellia",
    "nameKo": "기데온만텔리아",
    "range": {
      "start": 125.77,
      "end": 121.4
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 14,
    "wikidata": "Q2457727",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Gideonmantellia_TD.png",
      "speculative": false
    },
    "imgv": "9d318dc8"
  },
  {
    "id": "nagatitan",
    "genus": "Nagatitan",
    "nameKo": "나가티탄",
    "range": {
      "start": 121.4,
      "end": 100.5
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 14,
    "wikidata": "Q139792760",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Nagatitan_TD.png",
      "speculative": false
    },
    "imgv": "32afc22e"
  },
  {
    "id": "lingwulong",
    "genus": "Lingwulong",
    "nameKo": "링우롱",
    "range": {
      "start": 174.7,
      "end": 161.5
    },
    "period": "쥐라기 중기",
    "diet": "초식",
    "sitelinks": 14,
    "wikidata": "Q55741045",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 341,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Lingwulong_TD.png",
      "speculative": false
    },
    "imgv": "255aacfe"
  },
  {
    "id": "meraxes",
    "genus": "Meraxes",
    "nameKo": "메락세스",
    "range": {
      "start": 106.2,
      "end": 106.2
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 14,
    "wikidata": "Q112969374",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Meraxes_TD.png",
      "speculative": false
    },
    "imgv": "5f237dce"
  },
  {
    "id": "ahvaytum",
    "genus": "Ahvaytum",
    "nameKo": "아바이툼",
    "range": {
      "start": 230,
      "end": 230
    },
    "period": "트라이아스기 후기",
    "diet": "초식",
    "sitelinks": 14,
    "wikidata": "Q131701579",
    "kowiki": "아바이툼",
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ahvaytum_TD.png",
      "speculative": true
    },
    "imgv": "9c822918"
  },
  {
    "id": "equijubus",
    "genus": "Equijubus",
    "nameKo": "에퀴주부스",
    "range": {
      "start": 113.2,
      "end": 100.5
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 14,
    "wikidata": "Q941092",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Equijubus_TD.png",
      "speculative": false
    },
    "imgv": "5c53453d"
  },
  {
    "id": "tameryraptor",
    "genus": "Tameryraptor",
    "nameKo": "타메리랍토르",
    "range": {
      "start": 100.5,
      "end": 93.9
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 14,
    "wikidata": "Q131755747",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tameryraptor_TD.png",
      "speculative": false
    },
    "imgv": "7cd13446"
  },
  {
    "id": "newtonsaurus",
    "genus": "Newtonsaurus",
    "nameKo": "뉴턴사우루스",
    "range": {
      "start": 202,
      "end": 202
    },
    "period": "트라이아스기 후기",
    "diet": "육식",
    "sitelinks": 13,
    "wikidata": "Q995536",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Newtonsaurus_TD.png",
      "speculative": false
    },
    "imgv": "ba957bcf"
  },
  {
    "id": "machairoceratops",
    "genus": "Machairoceratops",
    "nameKo": "마카이로케라톱스",
    "range": {
      "start": 80.7,
      "end": 79.3
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 13,
    "wikidata": "Q24091673",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Machairoceratops_TD.png",
      "speculative": false
    },
    "imgv": "0ec2ebea"
  },
  {
    "id": "murusraptor",
    "genus": "Murusraptor",
    "nameKo": "무루스랍토르",
    "range": {
      "start": 88,
      "end": 86
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 13,
    "wikidata": "Q25963034",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Murusraptor_TD.png",
      "speculative": false
    },
    "imgv": "746a6dcc"
  },
  {
    "id": "bonapartenykus",
    "genus": "Bonapartenykus",
    "nameKo": "보나파르테니쿠스",
    "range": {
      "start": 83.6,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 13,
    "wikidata": "Q966510",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 815,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Bonapartenykus_TD.png",
      "speculative": false
    },
    "imgv": "0a4a3fb5"
  },
  {
    "id": "stellasaurus",
    "genus": "Stellasaurus",
    "nameKo": "스텔라사우루스",
    "range": {
      "start": 75.2,
      "end": 75.2
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 13,
    "wikidata": "Q92442315",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Stellasaurus_TD.png",
      "speculative": false
    },
    "imgv": "fad2f52f"
  },
  {
    "id": "albertadromeus",
    "genus": "Albertadromeus",
    "nameKo": "알베르타드로메우스",
    "range": {
      "start": 77,
      "end": 76
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 13,
    "wikidata": "Q12973101",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Albertadromeus_TD.png",
      "speculative": false
    },
    "imgv": "13d2e1cc"
  },
  {
    "id": "alpkarakush",
    "genus": "Alpkarakush",
    "nameKo": "알프카라쿠시",
    "range": {
      "start": 165.3,
      "end": 161.5
    },
    "period": "쥐라기 중기",
    "diet": "육식",
    "sitelinks": 13,
    "wikidata": "Q129426802",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Alpkarakush_TD.png",
      "speculative": false
    },
    "imgv": "5a16178c"
  },
  {
    "id": "zavacephale",
    "genus": "Zavacephale",
    "nameKo": "자바케팔레",
    "range": {
      "start": 121.4,
      "end": 100.5
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 13,
    "wikidata": "Q136311161",
    "kowiki": "자바케팔레",
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Zavacephale_TD.png",
      "speculative": false
    },
    "imgv": "5f13c295"
  },
  {
    "id": "pectinodon",
    "genus": "Pectinodon",
    "nameKo": "펙티노돈",
    "range": {
      "start": 67,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 13,
    "wikidata": "Q4037858",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Pectinodon_TD.png",
      "speculative": true
    },
    "imgv": "9427a4e7"
  },
  {
    "id": "haolong",
    "genus": "Haolong",
    "nameKo": "하오롱",
    "range": {
      "start": 125.46,
      "end": 125.46
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 13,
    "wikidata": "Q138027020",
    "kowiki": "하오롱",
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Haolong_TD.png",
      "speculative": false
    },
    "imgv": "40b752be"
  },
  {
    "id": "duonychus",
    "genus": "Duonychus",
    "nameKo": "두오니쿠스",
    "range": {
      "start": 96,
      "end": 90
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 12,
    "wikidata": "Q133538344",
    "kowiki": "두오니쿠스",
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Duonychus_TD.png",
      "speculative": false
    },
    "imgv": "77106c1f"
  },
  {
    "id": "mexidracon",
    "genus": "Mexidracon",
    "nameKo": "멕시드라콘",
    "range": {
      "start": 72.5,
      "end": 72.5
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 12,
    "wikidata": "Q131929780",
    "kowiki": "멕시드라콘",
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Mexidracon_TD.png",
      "speculative": false
    },
    "imgv": "309dcfd5"
  },
  {
    "id": "baiyinosaurus",
    "genus": "Baiyinosaurus",
    "nameKo": "바이이노사우루스",
    "range": {
      "start": 168.2,
      "end": 165.3
    },
    "period": "쥐라기 중기",
    "diet": "초식",
    "sitelinks": 12,
    "wikidata": "Q126965892",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Baiyinosaurus_TD.png",
      "speculative": false
    },
    "imgv": "89a1418c"
  },
  {
    "id": "albertavenator",
    "genus": "Albertavenator",
    "nameKo": "알베르타베나토르",
    "range": {
      "start": 71.5,
      "end": 71
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 12,
    "wikidata": "Q33106161",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Albertavenator_TD.png",
      "speculative": false
    },
    "imgv": "10fd68df"
  },
  {
    "id": "enigmacursor",
    "genus": "Enigmacursor",
    "nameKo": "에니그마쿠르소르",
    "range": {
      "start": 155,
      "end": 148
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 12,
    "wikidata": "Q135092049",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Enigmacursor_TD.png",
      "speculative": false
    },
    "imgv": "6c333eac"
  },
  {
    "id": "koshisaurus",
    "genus": "Koshisaurus",
    "nameKo": "코시사우루스",
    "range": {
      "start": 125,
      "end": 115
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 12,
    "wikidata": "Q18961256",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Koshisaurus_TD.png",
      "speculative": false
    },
    "imgv": "80f9d9cc"
  },
  {
    "id": "protathlitis",
    "genus": "Protathlitis",
    "nameKo": "프로타틀리티스",
    "range": {
      "start": 129.4,
      "end": 125
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 12,
    "wikidata": "Q118480866",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 429,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Protathlitis_TD.png",
      "speculative": false
    },
    "imgv": "7c0ad593"
  },
  {
    "id": "joaquinraptor",
    "genus": "Joaquinraptor",
    "nameKo": "호아킨랍토르",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 12,
    "wikidata": "Q136358533",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Joaquinraptor_TD.png",
      "speculative": false
    },
    "imgv": "56f75d8f"
  },
  {
    "id": "dasosaurus",
    "genus": "Dasosaurus",
    "nameKo": "다소사우루스",
    "range": {
      "start": 121.4,
      "end": 113.2
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 11,
    "wikidata": "Q138208958",
    "kowiki": "다소사우루스",
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Dasosaurus_TD.png",
      "speculative": false
    },
    "imgv": "6dbb3e49"
  },
  {
    "id": "vectaerovenator",
    "genus": "Vectaerovenator",
    "nameKo": "벡타에로베나토르",
    "range": {
      "start": 116,
      "end": 116
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 11,
    "wikidata": "Q24048659",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Vectaerovenator_TD.png",
      "speculative": false
    },
    "imgv": "cece52d2"
  },
  {
    "id": "bolong",
    "genus": "Bolong",
    "nameKo": "보롱",
    "range": {
      "start": 125.46,
      "end": 125.46
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 11,
    "wikidata": "Q1705570",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Bolong_TD.png",
      "speculative": false
    },
    "imgv": "babbbcbc"
  },
  {
    "id": "sasayamagnomus",
    "genus": "Sasayamagnomus",
    "nameKo": "사사야마그노무스",
    "range": {
      "start": 112.1,
      "end": 112.1
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 11,
    "wikidata": "Q130222784",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Sasayamagnomus_TD.png",
      "speculative": false
    },
    "imgv": "2952bed1"
  },
  {
    "id": "archaeocursor",
    "genus": "Archaeocursor",
    "nameKo": "아르카이오쿠르소르",
    "range": {
      "start": 199.5,
      "end": 184.2
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 11,
    "wikidata": "Q131480239",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Archaeocursor_TD.png",
      "speculative": false
    },
    "imgv": "6f94d70b"
  },
  {
    "id": "imperobator",
    "genus": "Imperobator",
    "nameKo": "임페로바토르",
    "range": {
      "start": 71,
      "end": 70
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 11,
    "wikidata": "Q63135067",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Imperobator_TD.png",
      "speculative": true
    },
    "imgv": "6f0fc9e0"
  },
  {
    "id": "yingshanosaurus",
    "genus": "Yingshanosaurus",
    "nameKo": "잉샤노사우루스",
    "range": {
      "start": 168.2,
      "end": 165.3
    },
    "period": "쥐라기 중기",
    "diet": "초식",
    "sitelinks": 11,
    "wikidata": "Q2870799",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Yingshanosaurus_TD.png",
      "speculative": false
    },
    "imgv": "525b1a62"
  },
  {
    "id": "caletodraco",
    "genus": "Caletodraco",
    "nameKo": "칼레토드라코",
    "range": {
      "start": 100.5,
      "end": 93.9
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 11,
    "wikidata": "Q129345055",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Caletodraco_TD.png",
      "speculative": false
    },
    "imgv": "c77c1d1a"
  },
  {
    "id": "tlatolophus",
    "genus": "Tlatolophus",
    "nameKo": "틀라톨로푸스",
    "range": {
      "start": 73,
      "end": 72.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 11,
    "wikidata": "Q106805159",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tlatolophus_TD.png",
      "speculative": false
    },
    "imgv": "6a6eb3c5"
  },
  {
    "id": "pulaosaurus",
    "genus": "Pulaosaurus",
    "nameKo": "푸라오사우루스",
    "range": {
      "start": 165.3,
      "end": 154.8
    },
    "period": "쥐라기 중기~후기",
    "diet": "초식",
    "sitelinks": 11,
    "wikidata": "Q135277762",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Pulaosaurus_TD.png",
      "speculative": false
    },
    "imgv": "5d980984"
  },
  {
    "id": "platytholus",
    "genus": "Platytholus",
    "nameKo": "플라티톨루스",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 11,
    "wikidata": "Q117708125",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Platytholus_TD.png",
      "speculative": false
    },
    "imgv": "25b03200"
  },
  {
    "id": "gonkoken",
    "genus": "Gonkoken",
    "nameKo": "곤코켄",
    "range": {
      "start": 71.7,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 10,
    "wikidata": "Q119585708",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 533,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Gonkoken_TD.png",
      "speculative": false
    },
    "imgv": "cebb8b2a"
  },
  {
    "id": "dornraptor",
    "genus": "Dornraptor",
    "nameKo": "도른랍토르",
    "range": {
      "start": 194,
      "end": 192
    },
    "period": "쥐라기 전기",
    "diet": "육식",
    "sitelinks": 10,
    "wikidata": "Q988566",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Dornraptor_TD.png",
      "speculative": true
    },
    "imgv": "153764d6"
  },
  {
    "id": "lishulong",
    "genus": "Lishulong",
    "nameKo": "리슈롱",
    "range": {
      "start": 199.5,
      "end": 174.7
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 10,
    "wikidata": "Q131429718",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Lishulong_TD.png",
      "speculative": false
    },
    "imgv": "9c7bf974"
  },
  {
    "id": "maleriraptor",
    "genus": "Maleriraptor",
    "nameKo": "말레리랍토르",
    "range": {
      "start": 227.3,
      "end": 205.7
    },
    "period": "트라이아스기 후기",
    "diet": "육식",
    "sitelinks": 10,
    "wikidata": "Q134384590",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Maleriraptor_TD.png",
      "speculative": false
    },
    "imgv": "2aa3ae83"
  },
  {
    "id": "minqaria",
    "genus": "Minqaria",
    "nameKo": "민카리아",
    "range": {
      "start": 68,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 10,
    "wikidata": "Q124534277",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 533,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Minqaria_TD.png",
      "speculative": false
    },
    "imgv": "3cd35946"
  },
  {
    "id": "yanbeilong",
    "genus": "Yanbeilong",
    "nameKo": "얀베이롱",
    "range": {
      "start": 113.2,
      "end": 100.5
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 10,
    "wikidata": "Q124395047",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Yanbeilong_TD.png",
      "speculative": true
    },
    "imgv": "c7c88d99"
  },
  {
    "id": "uriash",
    "genus": "Uriash",
    "nameKo": "우리아시",
    "range": {
      "start": 71,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 10,
    "wikidata": "Q132638672",
    "kowiki": "우리아시",
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Uriash_TD.png",
      "speculative": false
    },
    "imgv": "656aea56"
  },
  {
    "id": "yuanmouraptor",
    "genus": "Yuanmouraptor",
    "nameKo": "위안모우랍토르",
    "range": {
      "start": 174.7,
      "end": 168.2
    },
    "period": "쥐라기 중기",
    "diet": "육식",
    "sitelinks": 10,
    "wikidata": "Q15909169",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Yuanmouraptor_TD.png",
      "speculative": false
    },
    "imgv": "c7c9eba0"
  },
  {
    "id": "yuanyanglong",
    "genus": "Yuanyanglong",
    "nameKo": "위안양롱",
    "range": {
      "start": 121.4,
      "end": 100.5
    },
    "period": "백악기 전기",
    "diet": "잡식",
    "sitelinks": 10,
    "wikidata": "Q130638027",
    "kowiki": "위안양롱",
    "image": {
      "width": 1280,
      "height": 996,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Yuanyanglong_TD.png",
      "speculative": false
    },
    "imgv": "070ca6e7"
  },
  {
    "id": "igai",
    "genus": "Igai",
    "nameKo": "이가이",
    "range": {
      "start": 74,
      "end": 72
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 10,
    "wikidata": "Q120785882",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Igai_TD.png",
      "speculative": false
    },
    "imgv": "385c5cf1"
  },
  {
    "id": "iani",
    "genus": "Iani",
    "nameKo": "이아니",
    "range": {
      "start": 99.5,
      "end": 99.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 10,
    "wikidata": "Q119170922",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Iani_TD.png",
      "speculative": false
    },
    "imgv": "29cb3c63"
  },
  {
    "id": "dzharacursor",
    "genus": "Dzharacursor",
    "nameKo": "자라쿠르소르",
    "range": {
      "start": 93.9,
      "end": 89.8
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 10,
    "wikidata": "Q48785254",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Dzharacursor_TD.png",
      "speculative": false
    },
    "imgv": "8f1415d6"
  },
  {
    "id": "jaculinykus",
    "genus": "Jaculinykus",
    "nameKo": "자쿨리니쿠스",
    "range": {
      "start": 72,
      "end": 71
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 10,
    "wikidata": "Q123458061",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Jaculinykus_TD.png",
      "speculative": false
    },
    "imgv": "ad44e7fb"
  },
  {
    "id": "chucarosaurus",
    "genus": "Chucarosaurus",
    "nameKo": "추카로사우루스",
    "range": {
      "start": 106.2,
      "end": 106.2
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 10,
    "wikidata": "Q116621259",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Chucarosaurus_TD.png",
      "speculative": false
    },
    "imgv": "15232f61"
  },
  {
    "id": "koleken",
    "genus": "Koleken",
    "nameKo": "콜레켄",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 10,
    "wikidata": "Q126012874",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Koleken_TD.png",
      "speculative": false
    },
    "imgv": "0fc024d2"
  },
  {
    "id": "comptonatus",
    "genus": "Comptonatus",
    "nameKo": "콤프토나투스",
    "range": {
      "start": 125.77,
      "end": 113.2
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 10,
    "wikidata": "Q127324591",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Comptonatus_TD.png",
      "speculative": false
    },
    "imgv": "df660be9"
  },
  {
    "id": "tawa",
    "genus": "Tawa",
    "nameKo": "타와",
    "range": {
      "start": 227.3,
      "end": 205.7
    },
    "period": "트라이아스기 후기",
    "diet": "육식",
    "sitelinks": 10,
    "wikidata": "Q22113739",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tawa_TD.png",
      "speculative": false
    },
    "imgv": "f4cbeab3"
  },
  {
    "id": "tyrannomimus",
    "genus": "Tyrannomimus",
    "nameKo": "티라노미무스",
    "range": {
      "start": 121.4,
      "end": 113.2
    },
    "period": "백악기 전기",
    "diet": "잡식",
    "sitelinks": 10,
    "wikidata": "Q122323203",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tyrannomimus_TD.png",
      "speculative": false
    },
    "imgv": "9b343848"
  },
  {
    "id": "thyreosaurus",
    "genus": "Thyreosaurus",
    "nameKo": "티레오사우루스",
    "range": {
      "start": 168.2,
      "end": 165.3
    },
    "period": "쥐라기 중기",
    "diet": "초식",
    "sitelinks": 10,
    "wikidata": "Q125200697",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Thyreosaurus_TD.png",
      "speculative": false
    },
    "imgv": "e13fab9a"
  },
  {
    "id": "ferenceratops",
    "genus": "Ferenceratops",
    "nameKo": "페렌케라톱스",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 10,
    "wikidata": "Q137722535",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ferenceratops_TD.png",
      "speculative": false
    },
    "imgv": "70fee060"
  },
  {
    "id": "huadanosaurus",
    "genus": "Huadanosaurus",
    "nameKo": "후아다노사우루스",
    "range": {
      "start": 124.12,
      "end": 124.12
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 10,
    "wikidata": "Q132734216",
    "kowiki": "후아다노사우루스",
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Huadanosaurus_TD.png",
      "speculative": false
    },
    "imgv": "2e369fbc"
  },
  {
    "id": "garumbatitan",
    "genus": "Garumbatitan",
    "nameKo": "가룸바티탄",
    "range": {
      "start": 125.77,
      "end": 121.4
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q122849073",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Garumbatitan_TD.png",
      "speculative": false
    },
    "imgv": "540b48e1"
  },
  {
    "id": "navaornis",
    "genus": "Navaornis",
    "nameKo": "나바오르니스",
    "range": {
      "start": 85,
      "end": 75
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 9,
    "wikidata": "Q131169627",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Navaornis_TD.png",
      "speculative": false
    },
    "imgv": "734c704d"
  },
  {
    "id": "vectipelta",
    "genus": "Vectipelta",
    "nameKo": "벡티펠타",
    "range": {
      "start": 132.6,
      "end": 121.4
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q119535184",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Vectipelta_TD.png",
      "speculative": false
    },
    "imgv": "92717ac3"
  },
  {
    "id": "bicharracosaurus",
    "genus": "Bicharracosaurus",
    "nameKo": "비차라코사우루스",
    "range": {
      "start": 157.4,
      "end": 157.4
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q139386697",
    "kowiki": "비차라코사우루스",
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Bicharracosaurus_TD.png",
      "speculative": false
    },
    "imgv": "20caa321"
  },
  {
    "id": "ardetosaurus",
    "genus": "Ardetosaurus",
    "nameKo": "아르데토사우루스",
    "range": {
      "start": 150.4,
      "end": 149.2
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q130466945",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 341,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ardetosaurus_TD.png",
      "speculative": false
    },
    "imgv": "1ae8351c"
  },
  {
    "id": "emiliasaura",
    "genus": "Emiliasaura",
    "nameKo": "에밀리아사우라",
    "range": {
      "start": 137.05,
      "end": 132.6
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q130546572",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Emiliasaura_TD.png",
      "speculative": false
    },
    "imgv": "881e529b"
  },
  {
    "id": "oblitosaurus",
    "genus": "Oblitosaurus",
    "nameKo": "오블리토사우루스",
    "range": {
      "start": 154.8,
      "end": 143.1
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q120743561",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Oblitosaurus_TD.png",
      "speculative": false
    },
    "imgv": "27d1da6c"
  },
  {
    "id": "wudingloong",
    "genus": "Wudingloong",
    "nameKo": "우딩롱",
    "range": {
      "start": 200.17,
      "end": 200.17
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q135447161",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Wudingloong_TD.png",
      "speculative": false
    },
    "imgv": "9090803d"
  },
  {
    "id": "inawentu",
    "genus": "Inawentu",
    "nameKo": "이나웬투",
    "range": {
      "start": 85.7,
      "end": 83.6
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q123256184",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Inawentu_TD.png",
      "speculative": false
    },
    "imgv": "7cfcb900"
  },
  {
    "id": "istiorachis",
    "genus": "Istiorachis",
    "nameKo": "이스티오라키스",
    "range": {
      "start": 125.77,
      "end": 121.4
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q135922217",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Istiorachis_TD.png",
      "speculative": false
    },
    "imgv": "82aa6103"
  },
  {
    "id": "chadititan",
    "genus": "Chadititan",
    "nameKo": "차디티탄",
    "range": {
      "start": 83,
      "end": 74.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q133061987",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Chadititan_TD.png",
      "speculative": false
    },
    "imgv": "d9051119"
  },
  {
    "id": "coahuilasaurus",
    "genus": "Coahuilasaurus",
    "nameKo": "코아우일라사우루스",
    "range": {
      "start": 72.5,
      "end": 72.5
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q130215835",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Coahuilasaurus_TD.png",
      "speculative": false
    },
    "imgv": "7047e587"
  },
  {
    "id": "xenovenator",
    "genus": "Xenovenator",
    "nameKo": "크세노베나토르",
    "range": {
      "start": 74,
      "end": 72
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 9,
    "wikidata": "Q137738132",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Xenovenator_TD.png",
      "speculative": false
    },
    "imgv": "6388855e"
  },
  {
    "id": "titanomachya",
    "genus": "Titanomachya",
    "nameKo": "티타노마키아",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 9,
    "wikidata": "Q125421035",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Titanomachya_TD.png",
      "speculative": false
    },
    "imgv": "6aee243a"
  },
  {
    "id": "harenadraco",
    "genus": "Harenadraco",
    "nameKo": "하레나드라코",
    "range": {
      "start": 72,
      "end": 72
    },
    "period": "백악기 후기",
    "diet": "잡식",
    "sitelinks": 9,
    "wikidata": "Q127456847",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Harenadraco_TD.png",
      "speculative": false
    },
    "imgv": "bf9db883"
  },
  {
    "id": "gandititan",
    "genus": "Gandititan",
    "nameKo": "간디티탄",
    "range": {
      "start": 100.5,
      "end": 89.8
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q124309835",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Gandititan_TD.png",
      "speculative": false
    },
    "imgv": "aa487dbf"
  },
  {
    "id": "datai",
    "genus": "Datai",
    "nameKo": "다타이",
    "range": {
      "start": 96,
      "end": 90
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q124616010",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 295,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Datai_TD.png",
      "speculative": false
    },
    "imgv": "3adde74c"
  },
  {
    "id": "diuqin",
    "genus": "Diuqin",
    "nameKo": "디우킨",
    "range": {
      "start": 85.7,
      "end": 83.6
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 8,
    "wikidata": "Q126640833",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Diuqin_TD.png",
      "speculative": false
    },
    "imgv": "726a951c"
  },
  {
    "id": "malefica",
    "genus": "Malefica",
    "nameKo": "말레피카",
    "range": {
      "start": 81.5,
      "end": 76.9
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q115152776",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Malefica_TD.png",
      "speculative": false
    },
    "imgv": "f067313b"
  },
  {
    "id": "minimocursor",
    "genus": "Minimocursor",
    "nameKo": "미니모쿠르소르",
    "range": {
      "start": 149.2,
      "end": 143.1
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q120640987",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Minimocursor_TD.png",
      "speculative": false
    },
    "imgv": "0c27821f"
  },
  {
    "id": "vectidromeus",
    "genus": "Vectidromeus",
    "nameKo": "벡티드로메우스",
    "range": {
      "start": 125.77,
      "end": 121.4
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q122485311",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Vectidromeus_TD.png",
      "speculative": false
    },
    "imgv": "473f85fc"
  },
  {
    "id": "vectiraptor",
    "genus": "Vectiraptor",
    "nameKo": "벡티랍토르",
    "range": {
      "start": 125,
      "end": 125
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 8,
    "wikidata": "Q110181348",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Vectiraptor_TD.png",
      "speculative": false
    },
    "imgv": "9c0ac4c9"
  },
  {
    "id": "bustingorrytitan",
    "genus": "Bustingorrytitan",
    "nameKo": "부스팅고리티탄",
    "range": {
      "start": 106.2,
      "end": 106.2
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q123916346",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Bustingorrytitan_TD.png",
      "speculative": false
    },
    "imgv": "3651c673"
  },
  {
    "id": "brontotholus",
    "genus": "Brontotholus",
    "nameKo": "브론토톨루스",
    "range": {
      "start": 75.5,
      "end": 75.3
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q136465240",
    "kowiki": "브론토톨루스",
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Brontotholus_TD.png",
      "speculative": false
    },
    "imgv": "141d57e7"
  },
  {
    "id": "vitosaura",
    "genus": "Vitosaura",
    "nameKo": "비토사우라",
    "range": {
      "start": 83.6,
      "end": 72.2
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 8,
    "wikidata": "Q136424761",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Vitosaura_TD.png",
      "speculative": false
    },
    "imgv": "bb673da2"
  },
  {
    "id": "xiangyunloong",
    "genus": "Xiangyunloong",
    "nameKo": "시앙윈룽",
    "range": {
      "start": 201.4,
      "end": 199.5
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q138801488",
    "kowiki": "시앙윈룽",
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Xiangyunloong_TD.png",
      "speculative": false
    },
    "imgv": "126527da"
  },
  {
    "id": "astigmasaura",
    "genus": "Astigmasaura",
    "nameKo": "아스티그마사우라",
    "range": {
      "start": 106.2,
      "end": 106.2
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q134890097",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 341,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Astigmasaura_TD.png",
      "speculative": false
    },
    "imgv": "b859aaee"
  },
  {
    "id": "yantaloong",
    "genus": "Yantaloong",
    "nameKo": "얀타롱",
    "range": {
      "start": 174.7,
      "end": 161.5
    },
    "period": "쥐라기 중기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q138009332",
    "kowiki": "얀타룽",
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Yantaloong_TD.png",
      "speculative": false
    },
    "imgv": "1c189177"
  },
  {
    "id": "yeneen",
    "genus": "Yeneen",
    "nameKo": "예넨",
    "range": {
      "start": 85.7,
      "end": 83.6
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q137773014",
    "kowiki": "예넨",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Yeneen_TD.png",
      "speculative": false
    },
    "imgv": "4039fe32"
  },
  {
    "id": "obelignathus",
    "genus": "Obelignathus",
    "nameKo": "오벨리그나투스",
    "range": {
      "start": 83.6,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q134286469",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Obelignathus_TD.png",
      "speculative": false
    },
    "imgv": "2e4a288f"
  },
  {
    "id": "huayracursor",
    "genus": "Huayracursor",
    "nameKo": "와이라쿠르소르",
    "range": {
      "start": 237,
      "end": 227.3
    },
    "period": "트라이아스기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q136506586",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Huayracursor_TD.png",
      "speculative": false
    },
    "imgv": "8ff8c462"
  },
  {
    "id": "uragasaurus",
    "genus": "Uragasaurus",
    "nameKo": "우라가사우루스",
    "range": {
      "start": 161.5,
      "end": 143.1
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q140464483",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Uragasaurus_TD.png",
      "speculative": false
    },
    "imgv": "53f4c4c8"
  },
  {
    "id": "jinchuanloong",
    "genus": "Jinchuanloong",
    "nameKo": "진추안롱",
    "range": {
      "start": 168.2,
      "end": 165.3
    },
    "period": "쥐라기 중기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q134552006",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Jinchuanloong_TD.png",
      "speculative": false
    },
    "imgv": "9e0f1767"
  },
  {
    "id": "jingiella",
    "genus": "Jingiella",
    "nameKo": "징기엘라",
    "range": {
      "start": 154.8,
      "end": 149.2
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q124645616",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Jingiella_TD.png",
      "speculative": false
    },
    "imgv": "516c3646"
  },
  {
    "id": "tharosaurus",
    "genus": "Tharosaurus",
    "nameKo": "타로사우루스",
    "range": {
      "start": 168.3,
      "end": 166.1
    },
    "period": "쥐라기 중기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q121179093",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tharosaurus_TD.png",
      "speculative": false
    },
    "imgv": "b5b54ec2"
  },
  {
    "id": "taleta",
    "genus": "Taleta",
    "nameKo": "탈레타",
    "range": {
      "start": 67,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q134604041",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 533,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Taleta_TD.png",
      "speculative": false
    },
    "imgv": "b2f5e391"
  },
  {
    "id": "petrustitan",
    "genus": "Petrustitan",
    "nameKo": "페트루스티탄",
    "range": {
      "start": 71,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q132639258",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Petrustitan_TD.png",
      "speculative": false
    },
    "imgv": "97575b40"
  },
  {
    "id": "fona",
    "genus": "Fona",
    "nameKo": "포나",
    "range": {
      "start": 99.4,
      "end": 99.2
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q127278402",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 427,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Fona_TD.png",
      "speculative": false
    },
    "imgv": "598dd916"
  },
  {
    "id": "furcatoceratops",
    "genus": "Furcatoceratops",
    "nameKo": "푸르카토케라톱스",
    "range": {
      "start": 75.9,
      "end": 75.3
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q120763258",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Furcatoceratops_TD.png",
      "speculative": false
    },
    "imgv": "feeeaf0f"
  },
  {
    "id": "hesperonyx",
    "genus": "Hesperonyx",
    "nameKo": "헤스페로닉스",
    "range": {
      "start": 154.8,
      "end": 149.2
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q124975016",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Hesperonyx_TD.png",
      "speculative": false
    },
    "imgv": "52df0ff9"
  },
  {
    "id": "huaxiazhoulong",
    "genus": "Huaxiazhoulong",
    "nameKo": "후아시아저우롱",
    "range": {
      "start": 83.6,
      "end": 72.2
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 8,
    "wikidata": "Q131085603",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Huaxiazhoulong_TD.png",
      "speculative": false
    },
    "imgv": "a4896269"
  },
  {
    "id": "hypnovenator",
    "genus": "Hypnovenator",
    "nameKo": "힙노베나토르",
    "range": {
      "start": 112.1,
      "end": 106.4
    },
    "period": "백악기 전기",
    "diet": "잡식",
    "sitelinks": 8,
    "wikidata": "Q127801335",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Hypnovenator_TD.png",
      "speculative": false
    },
    "imgv": "3523e77f"
  },
  {
    "id": "gremlin",
    "genus": "Gremlin",
    "nameKo": "그렘린",
    "range": {
      "start": 77,
      "end": 77
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 7,
    "wikidata": "Q123478349",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "page": "https://commons.wikimedia.org/wiki/File:Gremlin_TD.png",
      "speculative": false
    },
    "imgv": "5e27a0e4"
  },
  {
    "id": "neobohaiornis",
    "genus": "Neobohaiornis",
    "nameKo": "네오보하이오르니스",
    "range": {
      "start": 119,
      "end": 119
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 7,
    "wikidata": "Q131582597",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Neobohaiornis_TD.png",
      "speculative": false
    },
    "imgv": "147a88e2"
  },
  {
    "id": "moros",
    "genus": "Moros",
    "nameKo": "모로스",
    "range": {
      "start": 100.5,
      "end": 93.9
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 7,
    "wikidata": "Q61806760",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Moros_TD.png",
      "speculative": false
    },
    "imgv": "bcf9eb56"
  },
  {
    "id": "musankwa",
    "genus": "Musankwa",
    "nameKo": "무산콰",
    "range": {
      "start": 227.3,
      "end": 205.7
    },
    "period": "트라이아스기 후기",
    "diet": "초식",
    "sitelinks": 7,
    "wikidata": "Q126193276",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Musankwa_TD.png",
      "speculative": false
    },
    "imgv": "2c60af31"
  },
  {
    "id": "migmanychion",
    "genus": "Migmanychion",
    "nameKo": "미그마니키온",
    "range": {
      "start": 121,
      "end": 121
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 7,
    "wikidata": "Q119111222",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Migmanychion_TD.png",
      "speculative": false
    },
    "imgv": "92573838"
  },
  {
    "id": "athenar",
    "genus": "Athenar",
    "nameKo": "아테나르",
    "range": {
      "start": 149.2,
      "end": 143.1
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 7,
    "wikidata": "Q136665482",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Athenar_TD.png",
      "speculative": false
    },
    "imgv": "f46c5dbf"
  },
  {
    "id": "udelartitan",
    "genus": "Udelartitan",
    "nameKo": "우델라르티탄",
    "range": {
      "start": 100.5,
      "end": 83.6
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 7,
    "wikidata": "Q125153642",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Udelartitan_TD.png",
      "speculative": false
    },
    "imgv": "3ea68650"
  },
  {
    "id": "chakisaurus",
    "genus": "Chakisaurus",
    "nameKo": "차키사우루스",
    "range": {
      "start": 106.2,
      "end": 106.2
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 7,
    "wikidata": "Q124813502",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 503,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Chakisaurus_TD.png",
      "speculative": false
    },
    "imgv": "25b1679a"
  },
  {
    "id": "changzhousaurus",
    "genus": "Changzhousaurus",
    "nameKo": "창저우사우루스",
    "range": {
      "start": 121.4,
      "end": 113.2
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 7,
    "wikidata": "Q140249157",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Changzhousaurus_TD.png",
      "speculative": false
    },
    "imgv": "473fc71d"
  },
  {
    "id": "kayrasaurus",
    "genus": "Kayrasaurus",
    "nameKo": "카이라사우루스",
    "range": {
      "start": 125.77,
      "end": 113.2
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 7,
    "wikidata": "Q141426753",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Kayrasaurus_TD.png",
      "speculative": false
    },
    "imgv": "8ae1493b"
  },
  {
    "id": "kank",
    "genus": "Kank",
    "nameKo": "칸크",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 7,
    "wikidata": "Q139979324",
    "kowiki": "칸크",
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Kank_TD.png",
      "speculative": false
    },
    "imgv": "ef5328b5"
  },
  {
    "id": "campananeyen",
    "genus": "Campananeyen",
    "nameKo": "캄파나네옌",
    "range": {
      "start": 111,
      "end": 106
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 7,
    "wikidata": "Q129069825",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Campananeyen_TD.png",
      "speculative": false
    },
    "imgv": "c4e18f36"
  },
  {
    "id": "kryptohadros",
    "genus": "Kryptohadros",
    "nameKo": "크립토하드로스",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 7,
    "wikidata": "Q138537431",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Kryptohadros_TD.png",
      "speculative": false
    },
    "imgv": "324f9304"
  },
  {
    "id": "tongnanlong",
    "genus": "Tongnanlong",
    "nameKo": "통난롱",
    "range": {
      "start": 145,
      "end": 145
    },
    "period": "쥐라기 후기",
    "diet": "초식",
    "sitelinks": 7,
    "wikidata": "Q135271277",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 815,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tongnanlong_TD.png",
      "speculative": false
    },
    "imgv": "b5b409de"
  },
  {
    "id": "tietasaura",
    "genus": "Tietasaura",
    "nameKo": "티에타사우라",
    "range": {
      "start": 137.05,
      "end": 125.77
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 7,
    "wikidata": "Q125447291",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tietasaura_TD.png",
      "speculative": false
    },
    "imgv": "d34f9b09"
  },
  {
    "id": "foskeia",
    "genus": "Foskeia",
    "nameKo": "포스케이아",
    "range": {
      "start": 125.77,
      "end": 113.2
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 7,
    "wikidata": "Q137994796",
    "kowiki": "포스케이아",
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Foskeia_TD.png",
      "speculative": false
    },
    "imgv": "15543bde"
  },
  {
    "id": "ptychotherates",
    "genus": "Ptychotherates",
    "nameKo": "프티코테라테스",
    "range": {
      "start": 227.3,
      "end": 201.4
    },
    "period": "트라이아스기 후기",
    "diet": "육식",
    "sitelinks": 7,
    "wikidata": "Q139345300",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ptychotherates_TD.png",
      "speculative": false
    },
    "imgv": "198d0708"
  },
  {
    "id": "gongshuilong",
    "genus": "Gongshuilong",
    "nameKo": "공슈이롱",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 6,
    "wikidata": "Q138837825",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Gongshuilong_TD.png",
      "speculative": false
    },
    "imgv": "673503f7"
  },
  {
    "id": "nipponopelta",
    "genus": "Nipponopelta",
    "nameKo": "니포노펠타",
    "range": {
      "start": 100.5,
      "end": 93.9
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 6,
    "wikidata": "Q141142350",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Nipponopelta_TD.png",
      "speculative": false
    },
    "imgv": "aa9f5cd1"
  },
  {
    "id": "dinevenator",
    "genus": "Dinevenator",
    "nameKo": "디네베나토르",
    "range": {
      "start": 75,
      "end": 73.5
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 6,
    "wikidata": "Q140835817",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Dinevenator_TD.png",
      "speculative": false
    },
    "imgv": "ddce774e"
  },
  {
    "id": "manipulonyx",
    "genus": "Manipulonyx",
    "nameKo": "마니풀로닉스",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 6,
    "wikidata": "Q137558023",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Manipulonyx_TD.png",
      "speculative": false
    },
    "imgv": "6bf70e17"
  },
  {
    "id": "musango",
    "genus": "Musango",
    "nameKo": "무상고",
    "range": {
      "start": 227.3,
      "end": 205.7
    },
    "period": "트라이아스기 후기",
    "diet": "초식",
    "sitelinks": 6,
    "wikidata": "Q140770613",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Musango_TD.png",
      "speculative": false
    },
    "imgv": "98a52971"
  },
  {
    "id": "shuilingornis",
    "genus": "Shuilingornis",
    "nameKo": "슈이링고르니스",
    "range": {
      "start": 121.4,
      "end": 113.2
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 6,
    "wikidata": "Q130360482",
    "kowiki": "슈이링고르니스",
    "image": {
      "width": 1280,
      "height": 1024,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Shuilingornis_TD.png",
      "speculative": false
    },
    "imgv": "f6346a3d"
  },
  {
    "id": "ceratocaudia",
    "genus": "Ceratocaudia",
    "nameKo": "케라토카우디아",
    "range": {
      "start": 170.9,
      "end": 168.2
    },
    "period": "쥐라기 중기",
    "diet": "초식",
    "sitelinks": 6,
    "wikidata": "Q140589467",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 747,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ceratocaudia_TD.png",
      "speculative": false
    },
    "imgv": "0217b8d8"
  },
  {
    "id": "qunkasaura",
    "genus": "Qunkasaura",
    "nameKo": "쿤카사우라",
    "range": {
      "start": 83.6,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 6,
    "wikidata": "Q130234520",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 896,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Qunkasaura_TD.png",
      "speculative": false
    },
    "imgv": "ef7d2f58"
  },
  {
    "id": "cryptarcus",
    "genus": "Cryptarcus",
    "nameKo": "크립타르쿠스",
    "range": {
      "start": 75,
      "end": 75
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 6,
    "wikidata": "Q138779970",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Cryptarcus_TD.png",
      "speculative": false
    },
    "imgv": "d6632076"
  },
  {
    "id": "phosphatotitan",
    "genus": "Phosphatotitan",
    "nameKo": "포스파토티탄",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 6,
    "wikidata": "Q139503153",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 689,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Phosphatotitan_TD.png",
      "speculative": false
    },
    "imgv": "0a12fe48"
  },
  {
    "id": "plesiolophus",
    "genus": "Plesiolophus",
    "nameKo": "플레시올로푸스",
    "range": {
      "start": 83.6,
      "end": 72.2
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 6,
    "wikidata": "Q140473390",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Plesiolophus_TD.png",
      "speculative": false
    },
    "imgv": "c9f25423"
  },
  {
    "id": "norellraptor",
    "genus": "Norellraptor",
    "nameKo": "노렐랍토르",
    "range": {
      "start": 125.77,
      "end": 113.2
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 5,
    "wikidata": "Q141603300",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Norellraptor_TD.png",
      "speculative": false
    },
    "imgv": "05f1ae16"
  },
  {
    "id": "mesetasaurus",
    "genus": "Mesetasaurus",
    "nameKo": "메세타사우루스",
    "range": {
      "start": 89.8,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 5,
    "wikidata": "Q140478895",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 640,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Mesetasaurus_TD.png",
      "speculative": false
    },
    "imgv": "2c33b6c1"
  },
  {
    "id": "cienciargentina",
    "genus": "Cienciargentina",
    "nameKo": "시엔시아르헨티나",
    "range": {
      "start": 106.2,
      "end": 106.2
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 5,
    "wikidata": "Q133844001",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 366,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Cienciargentina_TD.png",
      "speculative": false
    },
    "imgv": "c8e61cdd"
  },
  {
    "id": "ahshislesaurus",
    "genus": "Ahshislesaurus",
    "nameKo": "아시슬레사우루스",
    "range": {
      "start": 75.02,
      "end": 75.02
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 5,
    "wikidata": "Q136410994",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ahshislesaurus_TD.png",
      "speculative": false
    },
    "imgv": "6c585110"
  },
  {
    "id": "anteavis",
    "genus": "Anteavis",
    "nameKo": "안테아비스",
    "range": {
      "start": 231.4,
      "end": 225.9
    },
    "period": "트라이아스기 후기",
    "diet": "육식",
    "sitelinks": 5,
    "wikidata": "Q136499056",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 512,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Anteavis_TD.png",
      "speculative": false
    },
    "imgv": "e27e5862"
  },
  {
    "id": "ampelognathus",
    "genus": "Ampelognathus",
    "nameKo": "암펠로그나투스",
    "range": {
      "start": 96,
      "end": 96
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 5,
    "wikidata": "Q123035115",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ampelognathus_TD.png",
      "speculative": false
    },
    "imgv": "2f35b7d9"
  },
  {
    "id": "utetitan",
    "genus": "Utetitan",
    "nameKo": "우테티탄",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 5,
    "wikidata": "Q136460910",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 597,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Utetitan_TD.png",
      "speculative": false
    },
    "imgv": "86c3350d"
  },
  {
    "id": "qianlong",
    "genus": "Qianlong",
    "nameKo": "치안롱",
    "range": {
      "start": 199.5,
      "end": 192.9
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 5,
    "wikidata": "Q123012247",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Qianlong_TD.png",
      "speculative": false
    },
    "imgv": "59644e26"
  },
  {
    "id": "kunpengornis",
    "genus": "Kunpengornis",
    "nameKo": "쿤펭고르니스",
    "range": {
      "start": 121.4,
      "end": 113.2
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 5,
    "wikidata": "Q136378579",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 853,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Kunpengornis_TD.png",
      "speculative": false
    },
    "imgv": "81897b23"
  },
  {
    "id": "tromerosaurus",
    "genus": "Tromerosaurus",
    "nameKo": "트로메로사우루스",
    "range": {
      "start": 76.72,
      "end": 76.35
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 5,
    "wikidata": "Q141622283",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tromerosaurus_TD.png",
      "speculative": false
    },
    "imgv": "f6c0b8b7"
  },
  {
    "id": "huashanosaurus",
    "genus": "Huashanosaurus",
    "nameKo": "후아샤노사우루스",
    "range": {
      "start": 201.4,
      "end": 174.7
    },
    "period": "쥐라기 전기",
    "diet": "초식",
    "sitelinks": 5,
    "wikidata": "Q135979420",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 549,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Huashanosaurus_TD.png",
      "speculative": false
    },
    "imgv": "9f5f0f61"
  },
  {
    "id": "eopinacosaurus",
    "genus": "Eopinacosaurus",
    "nameKo": "에오피나코사우루스",
    "range": {
      "start": 75,
      "end": 71
    },
    "period": "백악기 후기",
    "diet": "초식",
    "sitelinks": 4,
    "wikidata": "Q139770360",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 394,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Eopinacosaurus_TD.png",
      "speculative": false
    },
    "imgv": "4d20cf74"
  },
  {
    "id": "paulodon",
    "genus": "Paulodon",
    "nameKo": "파울로돈",
    "range": {
      "start": 125.77,
      "end": 121.4
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 3,
    "wikidata": "Q137442744",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 457,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Paulodon_TD.png",
      "speculative": false
    },
    "imgv": "5b9e988d"
  },
  {
    "id": "balaur",
    "genus": "Balaur",
    "nameKo": "발라우르",
    "range": {
      "start": 72.2,
      "end": 66
    },
    "period": "백악기 후기",
    "diet": "육식",
    "sitelinks": 1,
    "wikidata": "Q18511081",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Balaur_TD.png",
      "speculative": false
    },
    "imgv": "9cc6db7f"
  },
  {
    "id": "jian",
    "genus": "Jian",
    "nameKo": "지안",
    "range": {
      "start": 121.4,
      "end": 113.2
    },
    "period": "백악기 전기",
    "diet": "육식",
    "sitelinks": 1,
    "wikidata": "Q140067630",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 591,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Jian_TD.png",
      "speculative": false
    },
    "imgv": "a09b3b31"
  },
  {
    "id": "cariocecus",
    "genus": "Cariocecus",
    "nameKo": "카리오케쿠스",
    "range": {
      "start": 125.77,
      "end": 121.4
    },
    "period": "백악기 전기",
    "diet": "초식",
    "sitelinks": 0,
    "wikidata": "Q136294404",
    "kowiki": null,
    "image": {
      "width": 1280,
      "height": 492,
      "artist": "TotalDino",
      "artistUrl": "https://commons.wikimedia.org/wiki/User:TotalDino",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Cariocecus_TD.png",
      "speculative": false
    },
    "imgv": "fbd3823a"
  }
];
