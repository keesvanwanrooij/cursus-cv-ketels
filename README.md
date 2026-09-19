# Cursus CV-ketels: gratis online cursus voor de cv-ketel monteur

**Een gratis online zelfstudiecursus voor de cv-monteur, in het Nederlands.**
Van de wet en het CO-stelsel tot gas en verbranding, de werking van de HR-ketel, rookgasafvoer, meten,
installeren, onderhoud en storingzoeken. Met toetsvragen, flashcards en een storingzoeker, als voorbereiding
op het theorie- en praktijkexamen Vakmanschap CO.

Geen account, geen betaalmuur, geen tracking. Werkt in de browser en is offline te installeren als app op telefoon en laptop.

> Status: in opbouw. Elke les wordt pas toegevoegd als de feiten zijn nagelopen bij officiele bronnen en fabrikantdocumentatie.

---

## Wat je leert

Een leerlijn van 19 modules en 121 lessen (ongeveer 148 uur), opgebouwd van fundament naar vakmanschap.

**Deel I, kennis en fundament, in volgorde:**

1. Het vak, de wet en het CO-stelsel
2. Warmte, energie en vermogen
3. Water, druk en hydrauliek
4. Gas, verbranding en koolmonoxide
5. De HR-ketel van binnen
6. Regeling en tapwater
7. Afgiftesystemen
8. Rookgasafvoer en luchttoevoer
9. Elektrisch werken aan een cv-ketel

**Deel II, vakmanschap in de praktijk:**

10. Meten en analyseren
11. Ontwerpen en dimensioneren
12. Leidingwerk en verbindingen
13. Installeren en inbedrijfstellen
14. Waterzijdig inregelen
15. Onderhoud
16. Storingzoeken en reparatie
17. Merken, documentatie en hybride
18. Examen en beroepspraktijk

Elke les heeft een concreet leerdoel, uitleg met het waarom erachter, toetsvragen met uitleg en flashcards.
Elke module sluit af met een module-examen. Daarnaast:

- **Storingzoeker:** praktijkcasussen waarin je zelf kiest welke controles je doet, je diagnose stelt en ziet hoe een
  ervaren monteur het zou aanpakken.
- **Flashcards met herhaalschema:** kaarten komen terug op het moment dat je ze dreigt te vergeten.
- **Naslag:** formules, waarden en spiekbriefjes voor op de werkvloer.

## Hoe het werkt

- **In de browser:** open de site, of dubbelklik lokaal op `index.html`. Geen installatie, geen server nodig.
- **Als app:** op Android verschijnt een installatieknop. Eenmaal geinstalleerd werken tekst, toetsen en flashcards ook zonder internet.
- **Voortgang** wordt automatisch bijgehouden in je browser, met export en import als back-up naar een JSON-bestand.
- **Licht en donker thema**, om te wisselen bovenin.

## Zelf hosten of aanpassen

De hele cursus is een statische site: vanilla HTML, CSS en JavaScript, geen dependencies en geen build-stap om te draaien.
Clone de repo en open `index.html`, of fork hem en pas de lesinhoud aan in `content/`. Verspreid je een aangepaste versie,
dan geldt de copyleft-verplichting uit de licentiesectie hieronder.

De site is voorgerenderd voor zoekmachines: elke les, module en casus heeft een eigen schone URL met echte HTML.
Na een wijziging in `content/`, `js/` of `index.html` bouw je die pagina's opnieuw (Node.js nodig, geen dependencies):

```bash
node tools/build-seo.js      # controleren en voorrenderen
node tools/check.js          # alleen de inhoud controleren
node tools/dev.js            # lokale server met automatisch herbouwen op http://localhost:8124/
```

Draai je de cursus op een eigen domein, gebruik dan `node tools/build-seo.js --site=https://jouwdomein.nl --base=/`.

## Belangrijk

Deze cursus is zelfstudie en levert **geen erkend diploma en geen Bewijs van Vakmanschap CO**. Werken aan
gasverbrandingstoestellen valt in Nederland onder wettelijke certificeringseisen. Gebruik deze cursus om te begrijpen wat je
doet en om je op het examen voor te bereiden, niet als vervanging van een erkende opleiding, de fabrikantdocumentatie of een
ervaren, gecertificeerde monteur naast je. De inhoud verwijst naar wet, certificatieschema's en normen zonder de bron te
vervangen: bij twijfel is de actuele bron leidend.

## Meer van dezelfde maker

[Cursus Elektrotechniek](https://keesvanwanrooij.github.io/cursus-elektrotechniek/): gratis basiscursus elektrotechniek voor beginners.

## Licentie

Vrijgegeven onder de [GNU General Public License v3.0](LICENSE).

Iedereen, ook bedrijven, mag deze code en cursus gebruiken, kopieren en aanpassen. De voorwaarde is copyleft: verspreid je een
versie (aangepast of niet, ook als onderdeel van een groter product), dan moet die verspreide versie **ook onder de GPLv3 staan**,
met de broncode erbij. Zelf gebruiken, leren, of intern aanpassen mag altijd, zonder enige verplichting.
