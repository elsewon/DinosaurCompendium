# -*- coding: utf-8 -*-
"""메신저 미리보기(og:image)용 카드 이미지를 만든다.

    python3 tools/build-og.py           카드를 만든다. 표지는 없을 때만 그림을 받아 만든다
    python3 tools/build-og.py --cover   표지 그림을 다시 받아 표지를 새로 만든다

티니핑 도감의 tools/build-og.py 를 옮겼다. 공룡 그림(images/<id>.webp)은 배경이 투명해서
og:image 로 바로 쓰면 투명한 곳이 검게 나오는 앱이 있다(티니핑 도감에서 PNG 로 겪은 일).
그래서 사이트와 같은 바탕 위에 그림을 얹은 1200x630 JPEG 를 images/og/ 에 만든다.

  images/og/<id>.jpg   개별 공룡 — 위에 그림, 아래에 이름·시대·먹이 태그와 학명·그림 출처
  images/og/site.jpg   표지 — 목록·이름 맞추기·인기 차트가 함께 쓴다

바탕·글자·태그 색은 css/styles.css 의 :root · body · .tag 규칙을 옮긴 것이다.
사이트의 색을 바꾸면 여기도 같이 맞춘다.

■ 카드 짜임
티니핑 도감은 왼쪽에 정사각 그림, 오른쪽에 이름을 둔다. 공룡 그림은 옆으로 길어(가로:세로
1.25~4.3, 가운데값 2.6) 정사각 칸에 넣으면 작아진다. 그래서 그림을 위에 넓게 깔고(발끝을 같은
바닥선에 맞춘다) 이름과 태그를 아래에 둔다 — 목록 카드의 짜임(그림 아래 이름·학명·태그)과 같다.
이름은 태그 몫을 뺀 폭에 들어갈 때까지 줄인다. 304종 중 280종이 92px 그대로이고,
가장 긴 미크로파키케팔로사우루스가 68px 이다.

■ 그림 출처를 카드 안에 적는다
그림은 모두 TotalDino 의 복원도다(CC BY 4.0 · CC BY-SA 4.0 · CC0). 카드만 따로 퍼져도 누구의
그림인지 알 수 있게 작가·라이선스·출처를 카드에 적는다(SOURCES.md). 그림은 투명 여백만 잘라
크기를 줄여 얹을 뿐 고치지 않는다 — 좌우로 뒤집는 것도 고치는 일이라 하지 않는다.

■ 표지는 그리지 않고 있는 그림을 쓴다
처음에는 TotalDino 그림 여러 장을 한쪽으로 함께 걸어가는 무리로 세워 표지를 그렸는데, 그리지 말고
쓸 만한 그림을 찾기로 했다. TotalDino 는 공룡을 한 마리씩만 그려(324장) 여럿이 함께 나오는 그림이
없다. 위키미디어 공용에서 자유 라이선스이고 「부정확」 표시가 없는 복원도 가운데, 사냥·싸움이 없는
밝은 그림을 추려 Durbed 의 「Hell Creek dinosaurs and pterosaurs」(CC BY-SA 3.0)를 골랐다.
티라노사우루스·트리케라톱스·안킬로사우루스처럼 아이들이 아는 공룡이 흰 바탕에 모여 있어, 바탕 없이
공룡만 그린 이 도감의 그림과 결이 맞는다.
그림은 고치지 않고 크기만 줄여 흰 바탕 가운데에 두고, 아래 여백에 출처를 적는다. 원본의 가장자리도
순수한 흰색이라 덧댄 여백과 이음매가 없다. 원본은 저장소에 두지 않고 표지를 만들 때만 받는다.

■ 바뀐 카드만 쓴다
이 저장소는 아이클라우드 드라이브 안에 있어 같은 내용을 매번 다시 쓰지 않는다 — 만든 JPEG 를
있는 파일과 견주어 다를 때만 쓴다. 명단에서 빠진 공룡의 카드는 지운다.

og:image 는 절대 주소여야 한다. 배포 주소가 바뀌면 tools/build-pages.mjs 의 BASE 와
index.html · quiz.html · rank.html 의 og 태그를 함께 고친다.
"""
import io
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "images")
OUT_DIR = os.path.join(IMG, "og")

W, H = 1200, 630           # og 표준 비율 (1.91:1)
FONT = "/System/Library/Fonts/AppleSDGothicNeo.ttc"
BOLD, SEMI, MED = 6, 4, 2  # .ttc 안의 굵기 인덱스

# css/styles.css 의 :root
BG = (247, 245, 236)          # --bg
GREEN_SOFT = (220, 241, 226)  # --green-soft
AMBER_SOFT = (251, 236, 210)  # --amber-soft
GREEN_INK = (31, 122, 71)     # --green-ink
INK = (38, 51, 40)            # --ink
INK_SOFT = (95, 107, 97)      # --ink-soft

ERAS = ["트라이아스기", "쥐라기", "백악기"]   # js/util.js 의 ERAS
# css/styles.css 의 .tag.era-* · .tag.diet-* (배경색, 글자색). None 은 .tag 기본값
TAG_STYLE = {
    "트라이아스기": ((235, 224, 209), (107, 74, 43)),
    "쥐라기": ((212, 235, 247), (13, 91, 130)),
    "백악기": ((246, 234, 191), (110, 84, 0)),
    "육식": ((251, 217, 212), (160, 40, 28)),
    "초식": ((215, 239, 221), (27, 106, 54)),
    "잡식": ((236, 225, 246), (106, 61, 144)),
    None: ((238, 234, 224), INK_SOFT),
}

# 표지 그림 (위키미디어 공용). 원본은 3404px 이라 공용이 줄여 주는 정해진 폭 가운데 하나로 받는다
COVER_FILE = "Hell Creek dinosaurs and pterosaurs by durbed.jpg"
COVER_ARTIST, COVER_LICENSE = "Durbed", "CC BY-SA 3.0"
COVER_WIDTH = 1920
COVER_ART_H = 590             # 그림 높이 — 아래 40px 에 출처를 적는다
UA = "DinosaurCompendium/0.1 (non-commercial kids' encyclopedia)"
FILE_PATH = "https://commons.wikimedia.org/wiki/Special:FilePath/"

# 개별 카드의 자리
PAD = 60                      # 좌우 바깥 여백
ART_TOP, ART_BOTTOM = 38, 404 # 그림 칸 (가로는 PAD 안쪽 전부). 발끝을 ART_BOTTOM 에 맞춘다
ROW1 = 482                    # 이름 · 태그 줄의 가운데
ROW2 = 568                    # 학명 · 그림 출처 줄의 가운데
NAME_MAX, NAME_MIN = 92, 44
CHIP = 34                     # 태그 글자 크기
NAME_CHIP_GAP = 36


def font(size, face=BOLD):
    return ImageFont.truetype(FONT, size, index=face)


def load_data():
    """data/dinosaurs.js 는 window.DINOSAURS = [...] 형태라 node 로 읽는다."""
    js = "global.window={};require('./data/dinosaurs.js');" \
         "process.stdout.write(JSON.stringify(window.DINOSAURS));"
    return json.loads(subprocess.check_output(["node", "-e", js], cwd=ROOT))


def _radial(img, color, cx, cy, rx, ry, stop):
    """CSS 의 radial-gradient(<rx>px <ry>px at cx cy, color, transparent <stop>) 한 층."""
    px = bytearray(W * H)
    for y in range(H):
        dy2 = ((y - cy) / ry) ** 2
        row = y * W
        for x in range(W):
            t = (((x - cx) / rx) ** 2 + dy2) ** 0.5
            if t < stop:
                px[row + x] = int(255 * (1 - t / stop))
    mask = Image.new("L", (W, H))
    mask.frombytes(bytes(px))
    img.paste(Image.new("RGB", (W, H), color), (0, 0), mask)


_BG_CACHE = None


def background():
    """css/styles.css 의 body 배경.

        radial-gradient(1200px 500px at 100% -10%, --amber-soft, transparent 60%),
        radial-gradient(1000px 500px at -10% 0%,  --green-soft, transparent 55%),
        --bg;

    CSS 는 먼저 적은 층이 위로 오므로 초록을 먼저 깔고 모래색을 덮는다. 모든 카드가 같은
    배경을 쓰니 한 번만 만들어 두고 복사해 쓴다."""
    global _BG_CACHE
    if _BG_CACHE is None:
        img = Image.new("RGB", (W, H), BG)
        _radial(img, GREEN_SOFT, -0.10 * W, 0.0 * H, 1000, 500, 0.55)
        _radial(img, AMBER_SOFT, 1.00 * W, -0.10 * H, 1200, 500, 0.60)
        _BG_CACHE = img
    return _BG_CACHE.copy().convert("RGBA")


def load_art(pid):
    """그림을 투명 여백 없이 읽는다."""
    art = Image.open(os.path.join(IMG, pid + ".webp")).convert("RGBA")
    box = art.getchannel("A").getbbox()
    return art.crop(box) if box else art


def scaled(art, w, h):
    return art.resize((max(1, round(w)), max(1, round(h))), Image.LANCZOS)


def era_of(d):
    return next((e for e in ERAS if (d.get("period") or "").startswith(e)), None)


def credit_text(licenses):
    """SOURCES.md 의 표시 형식 — 「그림: 작가 · 라이선스 · 위키미디어 공용」"""
    return "그림: TotalDino · " + " · ".join(licenses) + " · 위키미디어 공용"


def chips_width(items, size):
    f = font(size)
    px, gap = round(size * 0.8), round(size * 0.4)
    widths = [f.getbbox(t)[2] - f.getbbox(t)[0] + px * 2 for t, _ in items]
    return sum(widths) + gap * (len(items) - 1)


def draw_chips(img, x, cy, items, size):
    """알약 모양 태그 — .tag { padding: 3px 9px; border-radius: 999px }. cy 에 세로 가운데를 맞춘다."""
    d = ImageDraw.Draw(img)
    f = font(size)
    px, py, gap = round(size * 0.8), round(size * 0.42), round(size * 0.4)
    ref = f.getbbox("가")
    h = ref[3] - ref[1] + py * 2
    top = round(cy - h / 2)
    for text, key in items:
        bg, fg = TAG_STYLE.get(key, TAG_STYLE[None])
        bb = f.getbbox(text)
        w = bb[2] - bb[0] + px * 2
        d.rounded_rectangle([x, top, x + w, top + h], radius=h // 2, fill=bg)
        d.text((x + px - bb[0], top + py - ref[1]), text, font=f, fill=fg)
        x += w + gap


def draw_oblique(img, x, cy, text, f, fill, slant=0.21):
    """학명은 기울여 쓴다. 이 글꼴에는 이탤릭이 없어, 브라우저가 font-style: italic 을
       흉내 내듯 글자를 비스듬히 민다(아래는 그대로, 위가 오른쪽으로)."""
    bb = f.getbbox(text)
    w, h = bb[2] + round(bb[3] * slant) + 8, bb[3] + 6
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ImageDraw.Draw(layer).text((0, 0), text, font=f, fill=fill)
    layer = layer.transform((w, h), Image.AFFINE, (1, slant, -slant * bb[3], 0, 1, 0), Image.BICUBIC)
    img.alpha_composite(layer, (round(x - bb[0]), round(cy - (bb[1] + bb[3]) / 2)))


def build_card(d):
    """개별 공룡 카드 — 위에 그림, 아래 첫 줄에 이름(왼쪽)과 태그(오른쪽),
       둘째 줄에 학명(왼쪽)과 그림 출처(오른쪽)."""
    img = background()

    art = load_art(d["id"])
    box_w, box_h = W - PAD * 2, ART_BOTTOM - ART_TOP
    s = min(box_w / art.width, box_h / art.height)
    art = scaled(art, art.width * s, art.height * s)
    img.alpha_composite(art, (PAD + (box_w - art.width) // 2, ART_BOTTOM - art.height))

    dr = ImageDraw.Draw(img)
    items = [(d["period"], era_of(d)), (d["diet"], d["diet"])]
    cw = chips_width(items, CHIP)
    avail = W - PAD * 2 - cw - NAME_CHIP_GAP
    name = d["nameKo"]
    size = NAME_MAX
    while size > NAME_MIN and font(size).getbbox(name)[2] - font(size).getbbox(name)[0] > avail:
        size -= 2
    f = font(size)
    nb = f.getbbox(name)
    dr.text((PAD - nb[0], ROW1 - (nb[1] + nb[3]) / 2), name, font=f, fill=INK)
    draw_chips(img, W - PAD - cw, ROW1, items, CHIP)

    draw_oblique(img, PAD, ROW2, d["genus"], font(34, SEMI), INK_SOFT + (255,))
    credit = credit_text([d["image"]["license"]])
    fc = font(21, MED)
    cb = fc.getbbox(credit)
    dr.text((W - PAD - cb[2], ROW2 - (cb[1] + cb[3]) / 2), credit, font=fc, fill=INK_SOFT)
    return img


def download(url):
    """위키미디어는 요청이 몰리면 429 를 돌려준다. Retry-After 만큼 기다렸다 다시 받는다
       (tools/make-images.py 와 같다)."""
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(1, 7):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code != 429 and e.code < 500:
                raise
            wait = int(e.headers.get("Retry-After") or 0) or 10 * attempt
            print(f"  ({e.code}, {wait}초 기다림)", flush=True)
            time.sleep(wait)
    raise RuntimeError("계속 실패: " + url)


def build_cover():
    """표지 — 받은 그림을 고치지 않고 크기만 줄여 흰 바탕 가운데에 두고, 아래 여백에 출처를 적는다."""
    url = FILE_PATH + urllib.parse.quote(COVER_FILE.replace(" ", "_")) + "?width=%d" % COVER_WIDTH
    art = Image.open(io.BytesIO(download(url))).convert("RGB")
    img = Image.new("RGB", (W, H), (255, 255, 255))
    w = round(art.width * COVER_ART_H / art.height)
    img.paste(scaled(art, w, COVER_ART_H), ((W - w) // 2, 0))

    credit = "그림: %s · %s · 위키미디어 공용" % (COVER_ARTIST, COVER_LICENSE)
    fc = font(17, MED)
    cb = fc.getbbox(credit)
    # 메신저가 위아래를 조금 잘라 보여 줘도 남도록 여백의 아래쪽이 아니라 위쪽에 둔다
    ImageDraw.Draw(img).text((W - 24 - cb[2], COVER_ART_H + 8 - cb[1]), credit, font=fc, fill=INK_SOFT)
    return img


def save_if_changed(img, path):
    """같은 내용이면 쓰지 않는다 — 아이클라우드가 같은 파일을 다시 올리지 않게."""
    buf = io.BytesIO()
    img.convert("RGB").save(buf, "JPEG", quality=88, optimize=True, progressive=True)
    data = buf.getvalue()
    if os.path.exists(path):
        with open(path, "rb") as f:
            if f.read() == data:
                return False
    with open(path, "wb") as f:
        f.write(data)
    return True


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    data = load_data()
    jobs = [(d["id"], lambda d=d: build_card(d)) for d in data]
    if "--cover" in sys.argv[1:] or not os.path.exists(os.path.join(OUT_DIR, "site.jpg")):
        jobs.append(("site", build_cover))

    written = 0
    for name, make in jobs:
        written += save_if_changed(make(), os.path.join(OUT_DIR, name + ".jpg"))

    keep = {d["id"] + ".jpg" for d in data} | {"site.jpg"}
    removed = [f for f in os.listdir(OUT_DIR) if f.endswith(".jpg") and f not in keep]
    for f in removed:
        os.remove(os.path.join(OUT_DIR, f))

    print("카드 %d장%s → images/og/ (새로 쓴 것 %d장, 그대로 둔 것 %d장%s)" % (
        len(data), " + 표지" if len(jobs) > len(data) else "", written, len(jobs) - written,
        ", 지운 것 %d장" % len(removed) if removed else ""))


if __name__ == "__main__":
    main()
