#!/usr/bin/env python3
"""TotalDino 그림을 받아 WebP 두 벌로 만든다.

  images/<id>.webp        개별 페이지·퀴즈용 (가로 1280px, 품질 90)
  images/thumb/<id>.webp  목록 카드용 (가로 480px, 품질 86)

tools/fetched.json 의 주소(위키미디어 공용이 가로 1280px 로 줄여 준 PNG)를 받아 바꾼다.
크기를 줄이고 형식을 바꾸는 것 말고는 손대지 않는다. 투명 배경은 그대로 남는다.

원본은 투명한데 위키미디어가 줄여 준 그림에서만 투명이 빠져 흰 바탕이 된 것이 있다(2026년 10월
304종 중 29종 — 에드몬토사우루스·토르보사우루스 등). 원본 PNG 의 짜임(청크)은 투명이 잘 남는 그림과
같아 까닭은 모른다. 그런 그림은 원본(가로 3,000px 안팎)을 받아 같은 크기로 직접 줄인다. 원본은 몇 배
무거워서 모두 원본에서 줄이지 않고, 줄여 준 그림에 투명한 곳이 없을 때만 받는다.

왜 PNG 가 아니라 WebP 인가: 10종일 때 PNG 3.7MB 가 WebP 0.57MB 로 6.5배 줄었고, 두 배로
키워 봐도 차이가 보이지 않았다. 300종이면 PNG 로 100MB 를 훌쩍 넘어 저장소와 폰이 모두 무겁다.

원본(sha1)과 폭이 그대로이고 두 파일이 다 있으며 투명한 곳이 있으면 건너뛴다(tools/images.json 에
적어 둔다). 아이클라우드에서 같은 파일을 매번 다시 쓰지 않으려는 것이다. 투명하지 않은 파일은 위의
흰 바탕 그림이므로 다시 만든다. 명단에서 빠진 공룡의 그림은 지운다.

사용법: python3 tools/make-images.py
"""
import io, json, os, sys, time, urllib.error, urllib.parse, urllib.request
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
IMG = os.path.join(ROOT, "images")
THUMB = os.path.join(IMG, "thumb")
MANIFEST = os.path.join(ROOT, "tools", "images.json")
THUMB_WIDTH = 480
UA = "DinosaurCompendium/0.1 (non-commercial kids' encyclopedia)"
# 파일 이름으로 원본을 받는 주소 — 실제 파일 주소로 넘겨 준다(urllib 이 따라간다)
FILE_PATH = "https://commons.wikimedia.org/wiki/Special:FilePath/"


def download(url):
    """위키미디어는 요청이 몰리면 429 를 돌려준다. Retry-After 만큼 기다렸다 다시 받는다."""
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


def save_if_changed(path, data):
    """내용이 같으면 쓰지 않는다 (수정 시각을 건드리지 않게)"""
    try:
        with open(path, "rb") as f:
            if f.read() == data:
                return
    except FileNotFoundError:
        pass
    with open(path, "wb") as f:
        f.write(data)


def webp(im, **kw):
    b = io.BytesIO()
    im.save(b, "WEBP", method=6, **kw)
    return b.getvalue()


def transparent(im):
    """투명한 곳이 한 군데라도 있나 (RGBA 그림)"""
    return im.getchannel("A").getextrema()[0] < 255


def transparent_file(path):
    """만들어 둔 WebP 에 투명한 곳이 있나. WebP 는 투명한 곳이 없으면 알파 없이 저장되므로
    띠만 보면 된다 — 머리만 읽고 그림은 풀지 않아 304장을 다 봐도 금방이다."""
    with Image.open(path) as f:
        return "A" in f.getbands()


def source(im):
    """가로 1280px RGBA 그림. 위키미디어가 줄여 준 것을 쓰고, 투명이 빠졌으면 원본을 받아 그 크기로
    직접 줄인다(맨 위 설명). 줄이기는 LANCZOS — Pillow 는 RGBA 를 줄일 때 알파를 곱해 두고 줄이므로
    투명한 가장자리에 검은 테가 끼지 않는다."""
    small = Image.open(io.BytesIO(download(im["thumbUrl"]))).convert("RGBA")
    if transparent(small):
        return small
    name = urllib.parse.quote(im["file"].replace(" ", "_"))
    orig = Image.open(io.BytesIO(download(FILE_PATH + name))).convert("RGBA")
    if not transparent(orig):
        print(f"  ! 원본도 투명하지 않다: {im['file']}", flush=True)
        return small
    print(f"  {im['file']}: 줄여 준 그림에 투명이 없어 원본에서 줄인다", flush=True)
    return orig.resize(small.size, Image.LANCZOS)


fetched = json.load(open(os.path.join(ROOT, "tools", "fetched.json")))["dinosaurs"]
wanted = {g.lower(): d["image"] for g, d in fetched.items() if d.get("image")}
try:
    manifest = json.load(open(MANIFEST))
except FileNotFoundError:
    manifest = {}

os.makedirs(THUMB, exist_ok=True)
made = 0
def done(i, im):
    files = [os.path.join(IMG, i + ".webp"), os.path.join(THUMB, i + ".webp")]
    return (manifest.get(i) == {"sha1": im["sha1"], "width": im["width"]}
            and all(os.path.exists(f) and transparent_file(f) for f in files))


todo = [(i, im) for i, im in sorted(wanted.items()) if not done(i, im)]
print(f"그림 {len(wanted)}종 중 새로 만들 것 {len(todo)}종", flush=True)
for n, (i, im) in enumerate(todo, 1):
    src = source(im)
    save_if_changed(os.path.join(IMG, i + ".webp"), webp(src, quality=90, alpha_quality=100))
    t = src.resize((THUMB_WIDTH, round(src.height * THUMB_WIDTH / src.width)), Image.LANCZOS) \
        if src.width > THUMB_WIDTH else src
    save_if_changed(os.path.join(THUMB, i + ".webp"), webp(t, quality=86))
    manifest[i] = {"sha1": im["sha1"], "width": im["width"]}
    made += 1
    if n % 20 == 0 or n == len(todo):
        # 중간에 멈춰도 이어서 할 수 있게 틈틈이 적어 둔다
        with open(MANIFEST, "w") as f:
            json.dump(dict(sorted(manifest.items())), f, indent=1)
            f.write("\n")
        print(f"  {n}/{len(todo)}", flush=True)
    time.sleep(1.5)

# 명단에서 빠진 공룡의 그림을 지운다
removed = []
for folder in (IMG, THUMB):
    for f in os.listdir(folder):
        if f.endswith(".webp") and f[:-5] not in wanted:
            os.remove(os.path.join(folder, f))
            removed.append(f)
manifest = {k: v for k, v in manifest.items() if k in wanted}
text = json.dumps(dict(sorted(manifest.items())), indent=1) + "\n"
try:
    old = open(MANIFEST).read()
except FileNotFoundError:
    old = None
if old != text:
    with open(MANIFEST, "w") as f:
        f.write(text)

size = lambda d: sum(os.path.getsize(os.path.join(d, f)) for f in os.listdir(d) if f.endswith(".webp")) / 1024 / 1024
print(f"새로 만듦 {made}종 → images/ {size(IMG):.1f}MB · images/thumb/ {size(THUMB):.1f}MB"
      + (f" · 지움 {len(removed)}개" if removed else ""))
