"""Genereert de PWA-iconen en de deelafbeelding uit code, geen externe SVG-rasterizer nodig.
Draait eenmalig; de output-PNG's worden gecommit, dit script hoeft niet
in de build-pipeline te zitten. Kleuren komen uit css/theme.css (thema Werkplaats)."""

from PIL import Image, ImageDraw, ImageFont
import os

HIER = os.path.dirname(os.path.abspath(__file__))
ACHTERGROND = (255, 176, 32, 255)   # --accent
INKT = (26, 18, 6, 255)             # --accent-ink
DONKER = (15, 18, 22, 255)          # --bg
TEKST = (231, 236, 243, 255)        # --text
GEDEMPT = (149, 163, 180, 255)      # --text-muted

SS = 4  # supersampling voor gladde randen


def bezier(p0, p1, p2, p3, n=24):
    pts = []
    for i in range(n + 1):
        t = i / n
        x = (1 - t) ** 3 * p0[0] + 3 * (1 - t) ** 2 * t * p1[0] + 3 * (1 - t) * t ** 2 * p2[0] + t ** 3 * p3[0]
        y = (1 - t) ** 3 * p0[1] + 3 * (1 - t) ** 2 * t * p1[1] + 3 * (1 - t) * t ** 2 * p2[1] + t ** 3 * p3[1]
        pts.append((x, y))
    return pts


def pad(start, *segmenten):
    """Bouwt een gevulde vorm uit kubische bezier-segmenten (elk: c1, c2, eind) op een 100x100 raster."""
    punten = [start]
    huidig = start
    for c1, c2, eind in segmenten:
        punten += bezier(huidig, c1, c2, eind)[1:]
        huidig = eind
    return punten


# Dezelfde vlam als het merkicoon in views.js en index.html
BUITEN = pad((50, 6),
             ((50, 6), (78, 30), (78, 58)),
             ((78, 76), (66, 92), (50, 92)),
             ((34, 92), (22, 76), (22, 58)),
             ((22, 46), (30, 38), (34, 30)),
             ((36, 40), (42, 44), (44, 44)),
             ((40, 30), (44, 16), (50, 6)))
BINNEN = pad((50, 52),
             ((50, 52), (62, 62), (62, 74)),
             ((62, 82), (57, 88), (50, 88)),
             ((43, 88), (38, 82), (38, 74)),
             ((38, 66), (44, 60), (50, 52)))


def teken_vlam(d, x0, y0, grootte, marge_pct):
    marge = grootte * marge_pct
    schaal = (grootte - 2 * marge) / 100.0
    d.polygon([(x0 + marge + x * schaal, y0 + marge + y * schaal) for x, y in BUITEN], fill=INKT)
    d.polygon([(x0 + marge + x * schaal, y0 + marge + y * schaal) for x, y in BINNEN], fill=ACHTERGROND)


def maak_icoon(grootte, afronding_pct, marge_pct, bestand):
    """grootte in px, afronding_pct = hoekradius als % van grootte,
    marge_pct = ruimte rond de vlam als % (groter = kleiner icoon, nodig voor maskable)."""
    g = grootte * SS
    img = Image.new("RGBA", (g, g), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, g - 1, g - 1], radius=int(g * afronding_pct), fill=ACHTERGROND)
    teken_vlam(d, 0, 0, g, marge_pct)
    img = img.resize((grootte, grootte), Image.LANCZOS)
    img.save(os.path.join(HIER, bestand))
    print(f"geschreven: {bestand} ({grootte}x{grootte})")


maak_icoon(192, 0.20, 0.14, "icon-192.png")
maak_icoon(512, 0.20, 0.14, "icon-512.png")
maak_icoon(512, 0.0, 0.22, "icon-maskable-512.png")   # meer marge, veilige zone voor Android-maskering
maak_icoon(180, 0.20, 0.14, "apple-touch-icon.png")
maak_icoon(32, 0.20, 0.10, "favicon-32.png")


def font(namen, grootte):
    for n in namen:
        try:
            return ImageFont.truetype(n, grootte)
        except OSError:
            pass
    return ImageFont.load_default()


def maak_og_image():
    """1200x630 deelafbeelding voor sociale media en zoekresultaten."""
    b, h = 1200, 630
    img = Image.new("RGBA", (b, h), DONKER)
    d = ImageDraw.Draw(img)
    vet = ["C:/Windows/Fonts/segoeuib.ttf", "DejaVuSans-Bold.ttf"]
    normaal = ["C:/Windows/Fonts/segoeui.ttf", "DejaVuSans.ttf"]

    d.rectangle([0, 0, 14, h], fill=ACHTERGROND)

    # icoontegel met supersampling
    tegel = 190
    t = tegel * SS
    icoon = Image.new("RGBA", (t, t), (0, 0, 0, 0))
    di = ImageDraw.Draw(icoon)
    di.rounded_rectangle([0, 0, t - 1, t - 1], radius=int(t * 0.2), fill=ACHTERGROND)
    teken_vlam(di, 0, 0, t, 0.14)
    icoon = icoon.resize((tegel, tegel), Image.LANCZOS)
    img.alpha_composite(icoon, (90, 90))

    d.text((90, 320), "Gratis cursus", font=font(vet, 96), fill=TEKST)
    d.text((90, 420), "cv-ketel monteur", font=font(vet, 96), fill=ACHTERGROND)
    d.text((90, 545), "Theorie  |  Praktijk  |  Voorbereiding Vakmanschap CO  |  Nederlands", font=font(normaal, 32), fill=GEDEMPT)

    img.convert("RGB").save(os.path.join(HIER, "..", "og-image.png"), optimize=True)
    print("geschreven: og-image.png (1200x630)")


maak_og_image()
print("klaar")
