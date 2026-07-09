# One-off: remove the photo background, crop to upper body, flip to face right.
# Run: python3 scripts/cutout.py  ->  public/sodiq-cutout-v2.png
from rembg import remove, new_session
from PIL import Image, ImageFilter

SRC = "/Users/sodiqolatunde/Downloads/drive-download-20260709T110550Z-2-001/7sm54n.jpg"

# upper-body crop (head -> hips) from the 3024x3024 source
box = (820, 110, 2200, 1835)
crop = Image.open(SRC).convert("RGB").crop(box)

# isnet-general-use gives the cleanest matte for this shot
cut = remove(crop, session=new_session("isnet-general-use"))


def clean_alpha(rgba):
    """Kill the semi-transparent halo, erode ~2px, feather for antialias."""
    r, g, b, a = rgba.split()
    a = a.point(lambda v: 0 if v < 170 else v)
    a = a.filter(ImageFilter.MinFilter(5))
    a = a.filter(ImageFilter.GaussianBlur(0.7))
    return Image.merge("RGBA", (r, g, b, a))


cut = clean_alpha(cut)

# face right (into the "An Engineer and Founder" text)
cut = cut.transpose(Image.FLIP_LEFT_RIGHT)

# resize down for the web
w = 1000
cut = cut.resize((w, round(cut.height * w / cut.width)), Image.LANCZOS)

cut.save("public/sodiq-cutout-v2.png")
print(f"OK public/sodiq-cutout-v2.png {cut.width}x{cut.height}")
