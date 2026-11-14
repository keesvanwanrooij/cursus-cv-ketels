/* ==========================================================================
   normen-gas.js - normpagina's voor gas: NEN 1078, NEN 8078 en NPR 3378
   Publieke uitlegpagina's onder /normen/. Sjabloon en regels: project/docs/10-NORMPAGINAS.md.
   Geschreven op basis van project/docs/feiten/20-normen-gas.md (voorvoegsel NOG, controle
   6 november 2026), met hergebruik van NRM (04-rookgas-en-luchttoevoer.md), INS (05), LEI (11),
   IBS (13), EXA (01).
   Regels voor deze tekst: de normteksten zijn auteursrechtelijk beschermd en niet overgenomen.
   Er staat alleen wat een norm regelt, in eigen woorden, en getallen die uit een vrij toegankelijke
   bron komen (NEN-productpagina, NEN-nieuws, IPLO, Staatscourant, certificatieschema). Geen C- of
   X-feiten. De stand van Bijlage II (welke uitgave de wet aanwijst) is bevestigd tot en met
   Stcrt. 2026, 24248 en NRM-25 (toestand 27-08-2026); NOG-21 zegt wat niet vast te stellen was.
   Geen backticks of dollar-accolade in de tekst, geen em-dash of en-dash, geen | in een tabelcel.
   ========================================================================== */

/* Feit-id's: NOG-01 t/m NOG-09, NRM-07, NRM-08, NRM-24, NRM-25, INS-11, INS-16, INS-12, LEI-05, EXA-19. */
CURSUS.addNorm({
  id: 'nen-1078',
  code: 'NEN 1078',
  volgorde: 10,
  domein: 'Gas',
  titel: 'NEN 1078: gasinstallaties in nieuwbouw',
  seoTitel: 'NEN 1078 uitgelegd voor de installateur',
  omschrijving: 'NEN 1078 uitgelegd: de eisen aan gasleidingen tot 500 mbar in nieuwbouw, welke uitgave de wet aanwijst (2018 of 2024) en wat je ermee doet.',
  kort: 'De eisen aan het gasleidingwerk tot en met 500 mbar in nieuwbouw. Wat hij regelt, welke uitgave geldt en wat je er in je werk mee doet.',
  versie: 'Nieuwste uitgave NEN 1078:2024; aangewezen door de Omgevingsregeling: NEN 1078:2018 (controle 6 november 2026)',
  tekst: `
NEN 1078 is de Nederlandse norm voor het gasleidingwerk in **nieuwbouw**, met een werkdruk tot en met 500 mbar. Hij geeft prestatie-eisen en beproevingsmethoden voor de gasleidingvoorziening. Het Bbl wijst hem aan voor nieuwe gebouwen, dus voor bestaande bouw kijk je in [NEN 8078](norm:nen-8078). De rookgasafvoer en de opstelruimte van een ketel staan er niet in, want de norm gaat over het gasleidingwerk.

## In het kort

| | NEN 1078 |
|---|---|
| Volledige titel | Voorziening voor gas met een werkdruk tot en met 500 mbar - Prestatie-eisen - Nieuwbouw |
| Wat hij regelt | Eisen en beproevingsmethoden voor een gebouwgebonden gasvoorziening, in een niet-industriële omgeving |
| Werkdruk | Tot en met 500 mbar (0,5 bar). Daarboven geldt voor nieuwbouw NEN-EN 15001-1 |
| Voor welk werk | Aanleg van gasleidingen in nieuwe gebouwen, inclusief de bepaling of de leiding gasdicht is |
| Bestaande bouw | Niet hier: dat is [NEN 8078](norm:nen-8078) |
| Nieuwste uitgave bij NEN | NEN 1078:2024 (1 februari 2024). NEN 1078:2018 is ingetrokken sinds 1 februari 2024 |
| Aangewezen door de wet | NEN 1078:2018 (Bijlage II van de Omgevingsregeling, laatst bevestigd in de wijziging van 1 juli 2026) |
| Gas | Aardgas, in de uitgave 2024 ook waterstof. Propaan en butaan komen terug in de samenhang met andere normen |

## Welke uitgave geldt: 2018 of 2024?

Hier zoeken de meeste installateurs op. Het antwoord is eigenlijk niet de nieuwste uitgave, ook al zou je dat wel verwachten.

!!! kern De wet noemt een vaste uitgave
Het Bbl verwijst naar NEN 1078. Welke uitgave daarmee bedoeld is, staat in Bijlage II van de Omgevingsregeling. Een nieuwe NEN-uitgave geldt dus niet vanzelf: pas als het ministerie Bijlage II wijzigt, is de nieuwe versie wettelijk van toepassing. Volgens de laatst gecontroleerde stand (Staatscourant van 1 juli 2026) noemt Bijlage II nog **NEN 1078:2018**. Dat is wel opvallend, want NEN geeft al sinds 1 februari 2024 NEN 1078:2024 uit en heeft de uitgave 2018 ingetrokken.
!!!

In december 2024 lag er een consultatieontwerp dat NEN 1078:2024 wilde aanwijzen. Dat die wijziging ook is vastgesteld, is bij het onderzoek niet gevonden. De regeling van 14 juni 2025 werkte twee andere normen bij en ook de wijziging van 1 juli 2026 liet NEN 1078 ongemoeid. De volledige actuele tekst van Bijlage II kon bij het onderzoek niet doorzocht worden. Dus controleer de actuele toestand op [wetten.overheid.nl](https://wetten.overheid.nl/BWBR0045528/) voor je er iets op bouwt, of vraag het je certificerende instelling. Hoe je in de praktijk met het verschil omgaat, staat verderop.

## Wat de norm regelt

NEN zet geen inhoudsopgave op de productpagina. Daarom staat hieronder alleen wat NEN zelf over de norm meldt:

- **Prestatie-eisen en beproevingsmethoden** voor een gebouwgebonden gasvoorziening tot en met 500 mbar. Het zijn eisen aan de uitkomst: de leiding moet veilig en gasdicht zijn. Een montagehandleiding is het dus niet.
- **De bepaling van de gasdichtheid.** De norm zegt dat de leiding beproefd moet worden en hoe dat in grote lijnen gaat. De uitwerking met drukken, tijden en apparatuur staat in de praktijkrichtlijn [NPR 3378](norm:npr-3378), deel 1.
- **Geluid.** De uitgave 2024 verwijst voor geluid naar de eisen in het Bbl. De eisen aan de gassnelheid uit de uitgave 2018 zijn in 2024 vervallen.
- **Waterstof.** Het ministerie van BZK heeft gevraagd om waterstof op te nemen. Daarom staat in NEN 1078:2024 ook waterstof, met een nominale werkdruk van 200 mbar en een plek in de dichtheidsbeproeving.
- **Samenhang met andere normen.** Een figuur laat zien hoe NEN 1078 samenhangt met andere normen, ook voor propaan en butaan.

!!! kern Wat NEN 1078 niet regelt
De rookgasafvoer, de verbrandingslucht, de opstelruimte en de brandveiligheid van de afvoer staan in andere normen. Daarvoor kijk je in [NEN 2757](norm:nen-2757), [NEN 1087](norm:nen-1087) en de overige regels in het [Bouwbesluit en Bbl](norm:bouwbesluit). Zoek je op "NEN 1078 opstelruimte", dan zit je dus in de verkeerde norm. Dat is een veelgemaakte fout.
!!!

## Wanneer heb je NEN 1078 nodig

- Je legt in een **nieuwbouwwoning** een gasleiding naar de plek van de ketel en je moet kunnen aantonen dat die voldoet.
- Je werkt aan een nieuw te bouwen gebouw met gasaansluiting. De aannemer of bouwkundige vraagt waaraan de leiding moet voldoen.
- Je leest een certificatieschema voor installaties in woningen. BRL 6000-04 verwijst voor de gasleiding tot en met 0,5 bar naar NEN 1078 bij nieuwbouw of NEN 8078 bij bestaande bouw.
- Je bereidt je voor op het examen. De toetsmatrijzen van Vakmanschap CO noemen NEN 1078 als kennisbron.

Het gewone werk van een cv-monteur is een ketel vervangen in een bestaande woning. Dan gaat het meestal over [NEN 8078](norm:nen-8078). NEN 1078 komt pas in beeld bij een volledig nieuwe installatie in een nieuw gebouw.

## Verhouding met andere normen en de wet

- **Bbl en Omgevingsregeling.** Voor nieuwbouw zegt het Bbl in artikel 4.200 dat een gasvoorziening tot en met 0,5 bar aan NEN 1078 voldoet. Zit je boven 0,5 en onder 40 bar, dan geldt NEN-EN 15001-1. Boven 40 bar stelt het Bbl geen eisen. Zie ook [Bouwbesluit en Bbl](norm:bouwbesluit).
- **NEN 8078.** Dezelfde titel en werkdruk, maar dan voor bestaande bouw. Zie [NEN 1078 en NEN 8078 naast elkaar](norm:nen-8078).
- **NPR 3378.** De praktijkrichtlijn is de leidraad bij NEN 1078. Hij laat zien hoe je de eisen in de praktijk invult en hoe je de dichtheid bepaalt. Een NPR is wel geen wet. Zie [NPR 3378](norm:npr-3378).
- **NEN 2768.** Sluit je in nieuwbouw aan op het gasnet, dan moeten de leidingdoorvoeren en de mantelbuis aan NEN 2768 voldoen. Die norm gaat over meterruimten en de bouwkundige voorzieningen die erbij horen.
- **Materialen.** Buizen, fittingen en afdichtingsmiddel voor gas moeten Kiwa Gastec QA-gekeurd zijn. Dat staat los van de norm zelf.

## Wat het in de praktijk betekent

1. **Werk met de uitgave waar je opdrachtgever of certificerende instelling om vraagt.** Wettelijk is dat nu 2018. Wil je toch de nieuwe tekst gebruiken, leg dat dan met hen vast.
2. **Beproef altijd voor je het toestel aansluit.** Het certificatieschema schrijft een dichtheidsbeproeving voor als je een gasverbrandingstoestel installeert of vervangt. Hoe je dat doet, staat in [les 13.3](les:m13l03).
3. **Neem geen getallen uit je hoofd of van een forum.** Over de toegestane drukdaling bij een nieuwe leiding gaan tegenstrijdige waarden rond. Lees de proefwaarden gewoon in NPR 3378-1 zelf.
4. **Verwar de normen niet.** NEN 1078 en NEN 8078 gaan over het gasleidingwerk. NEN 1006 gaat over drinkwater en NEN 1010 over elektra.
5. **Bij een gedeeltelijke verbouw.** Volgens IPLO valt gedeeltelijk vernieuwen in het algemeen onder het rechtens verkregen niveau, met bestaande bouw als ondergrens. Volledig vernieuwen valt onder de nieuwbouwregels. Welke norm voor jouw klus geldt, bepaal je met je certificerende instelling of het bevoegd gezag.

## Waar vind je de norm

Je koopt de norm in de NEN-shop of je raadpleegt hem in NEN Connect. Volgens IPLO zijn alle bouwnormen sinds 17 november 2025 gratis in te zien via NEN Connect. Kijk wel even op de NEN-site of je daar een account voor nodig hebt. Veel bedrijven hebben een abonnement. Bij je opleider of werkgever zit hij vaak in het pakket Gasinstallaties. Deze pagina vervangt de norm niet en is geen officiële bron. Wat wettelijk geldt, lees je in de Omgevingsregeling en in de norm zelf.
`,
  faq: [
    { vraag: 'Wat is NEN 1078?', antwoord: 'Het is de norm met prestatie-eisen en beproevingsmethoden voor een gebouwgebonden gasvoorziening met een werkdruk tot en met 500 mbar in nieuwbouw. Het Bbl verwijst ernaar voor nieuwe gebouwen.' },
    { vraag: 'Wat is het verschil tussen NEN 1078 en NEN 8078?', antwoord: 'NEN 1078 geldt voor nieuwbouw en NEN 8078 voor bestaande bouw. Verder hebben ze dezelfde titel en werkdruk, tot en met 500 mbar. Het Bbl wijst per situatie de ene of de andere aan.' },
    { vraag: 'Welke uitgave van NEN 1078 geldt: 2018 of 2024?', antwoord: 'Wettelijk telt de uitgave die de Omgevingsregeling aanwijst. Volgens de laatst gecontroleerde stand (juli 2026) was dat nog de uitgave 2018, ook al heeft NEN in 2024 een nieuwe uitgave gepubliceerd. Kijk voor de actuele stand in Bijlage II op wetten.overheid.nl.' },
    { vraag: 'Is NEN 1078 geschikt voor waterstof?', antwoord: 'In de uitgave 2024 staat waterstof erin, met een nominale werkdruk van 200 mbar en een plek in de dichtheidsbeproeving. Of die uitgave wettelijk is aangewezen, is een ander punt. Zie daarvoor de vraag over de uitgave.' },
    { vraag: 'Bij welke druk geldt NEN 1078?', antwoord: 'Tot en met 500 mbar (0,5 bar). Zit je in nieuwbouw boven 0,5 en onder 40 bar, dan wijst het Bbl NEN-EN 15001-1 aan.' },
    { vraag: 'Regelt NEN 1078 de rookgasafvoer of de opstelruimte van een ketel?', antwoord: 'Nee, NEN 1078 gaat over het gasleidingwerk. De rookgasafvoer en de verbrandingslucht staan onder meer in NEN 2757 en NEN 1087. De rest staat in het Bbl.' },
    { vraag: 'Waar kan ik NEN 1078 inzien?', antwoord: 'In de NEN-shop of in NEN Connect. Volgens IPLO zijn alle bouwnormen sinds 17 november 2025 gratis in te zien via NEN Connect. De voorwaarden, zoals een account, staan op de NEN-site.' },
    { vraag: 'Moet ik NEN 1078 kennen voor het examen Vakmanschap CO?', antwoord: 'De toetsmatrijzen noemen NEN 1078 en NEN 8078 als kennisbronnen. Als cv-monteur moet je vooral weten welke norm waarvoor dient en waar de dichtheidsbeproeving staat.' }
  ],
  lessen: ['m01l05', 'm12l04', 'm12l05', 'm13l03', 'm10l02'],
  gerelateerd: ['nen-8078', 'npr-3378', 'bouwbesluit', 'nen-2757'],
  bronnen: ['NOG-01', 'NOG-02', 'NOG-03', 'NOG-04', 'NOG-05', 'NOG-06', 'NOG-07', 'NOG-08', 'NOG-09', 'NOG-15', 'NOG-16', 'NOG-17', 'NOG-18', 'NOG-19', 'NOG-20', 'NRM-07', 'NRM-24', 'INS-11', 'INS-12', 'LEI-05', 'EXA-19']
});

/* Feit-id's: NOG-10 t/m NOG-15, NOG-13, NOG-16, NRM-07, NRM-08, INS-20, INS-13, NOG-36, LEI-05, WET-22, NOG-37. */
CURSUS.addNorm({
  id: 'nen-8078',
  code: 'NEN 8078',
  volgorde: 20,
  domein: 'Gas',
  titel: 'NEN 8078: gasinstallaties in bestaande bouw',
  seoTitel: 'NEN 8078 uitgelegd en het verschil met NEN 1078',
  omschrijving: 'NEN 8078 uitgelegd: de eisen aan gasleidingen tot 500 mbar in bestaande bouw, het verschil met NEN 1078 en wat je doet als je een ketel vervangt.',
  kort: 'De norm voor het gasleidingwerk tot en met 500 mbar in bestaande bouw. Wat het verschil is met NEN 1078 en wat je doet als je een ketel vervangt.',
  versie: 'Nieuwste uitgave NEN 8078:2023+C1:2026; aangewezen door de Omgevingsregeling: NEN 8078:2018 + A1:2018 (controle 6 november 2026)',
  tekst: `
NEN 8078 is de norm voor het gasleidingwerk in **bestaande bouw**, met een werkdruk tot en met 500 mbar. Hij geeft prestatie-eisen en beproevingsmethoden voor een gebouwgebonden gasvoorziening. Het is eigenlijk het broertje van [NEN 1078](norm:nen-1078), dat voor nieuwbouw geldt. Als cv-monteur kom je NEN 8078 vaker tegen, want je werkt meestal in bestaande woningen.

## In het kort

| | NEN 8078 |
|---|---|
| Volledige titel | Voorziening voor gas met een werkdruk tot en met 500 mbar - Prestatie-eisen - Bestaande bouw |
| Wat hij regelt | Eisen en beproevingsmethoden voor een gebouwgebonden gasvoorziening in bestaande gebouwen |
| Werkdruk | Tot en met 500 mbar. Daarboven (0,5 tot 40 bar) wijst het Bbl voor bestaande bouw NEN 2078 aan |
| Voor welk werk | Het beoordelen en beproeven van een bestaande gasleiding en het aanpassen daarvan |
| Nieuwste uitgave bij NEN | NEN 8078:2023+C1:2026 (1 mei 2026), met een correctie op NEN 8078:2023 |
| Aangewezen door de wet | NEN 8078:2018 + A1:2018 (Bijlage II van de Omgevingsregeling, laatst bevestigd in de wijziging van 1 juli 2026) |
| Nieuwbouw | Niet hier: dat is [NEN 1078](norm:nen-1078) |

## NEN 1078 en NEN 8078: het verschil

De twee normen hebben dezelfde titel en dezelfde grens voor de werkdruk. Het verschil zit in het soort gebouw, en daarmee in het niveau van de eisen.

| | NEN 1078 | NEN 8078 |
|---|---|---|
| Gebouw | Nieuwbouw | Bestaande bouw |
| Bbl-artikel | Artikel 4.200 | Artikel 3.107 |
| Hoofdstuk van het Bbl | Hoofdstuk 4 (nieuwbouw) | Hoofdstuk 3 (bestaande bouw) |
| Boven 0,5 bar | NEN-EN 15001-1 | NEN 2078 |
| Waterstof | Opgenomen in de uitgave 2024 | Niet genoemd in het NEN-bericht over de uitgave 2023 |
| Aangewezen uitgave | 2018 | 2018 + A1:2018 |

## Welke uitgave geldt?

!!! kern Wettelijk telt de aangewezen uitgave
NEN gaf NEN 8078:2023 uit op 1 augustus 2023 en daarna de gecorrigeerde NEN 8078:2023+C1:2026 op 1 mei 2026. Maar volgens de laatst gecontroleerde stand (Staatscourant van 1 juli 2026) wijst de Omgevingsregeling nog NEN 8078:2018 + A1:2018 aan. Een nieuwe NEN-uitgave geldt pas wettelijk als Bijlage II gewijzigd wordt.
!!!

Die laatste bevestiging komt uit de wijziging van de Omgevingsregeling die op 1 juli 2026 in de Staatscourant stond. Die wijziging ging over andere onderdelen van de bijlagen en liet NEN 8078 ongemoeid. De volledige actuele tekst van Bijlage II kon bij het onderzoek niet doorzocht worden. Controleer de stand dus zelf op [wetten.overheid.nl](https://wetten.overheid.nl/BWBR0045528/) of vraag het je certificerende instelling. Let ook op dat de NEN-shop de uitgave 2018 inmiddels als ingetrokken toont, terwijl de wet er nog naar verwijst.

## Wat de norm regelt

Ook voor NEN 8078 zet NEN geen inhoudsopgave op de productpagina. Dit is wat NEN meldt:

- **Eisen en beproevingsmethoden** voor een gebouwgebonden gasvoorziening in bestaande bouw tot en met 500 mbar.
- **De bepaling van de gasdichtheid.** In de uitgave 2023 is aangepast hoe je de gasdichtheid bepaalt. Om het eenvoudiger te maken is een tabel (A.1) vervallen.
- **Een grenswaarde voor het lekverlies.** NEN meldt dat het lekverlies niet groter mag zijn dan 5 dm3 per uur. Maar dat staat in de uitgave 2023 en niet in de uitgave 2018 die de wet nu aanwijst. Gebruik het getal dus niet als proefwaarde zonder de norm en je certificerende instelling te raadplegen. Hoe je het lekverlies meet, staat in [NPR 3378](norm:npr-3378), deel 1.
- **Samenhang met andere normen**, ook voor propaan en butaan, en bijgewerkte normatieve verwijzingen.

De rookgasafvoer, de verbrandingslucht en de opstelruimte regelt NEN 8078 niet. Die staan in [NEN 8757](norm:nen-2757), NEN 8087 en het [Bbl](norm:bouwbesluit). Zoeken op "NEN 8078 opstelruimte" is dus een bekende fout.

## Wanneer gebruik je NEN 8078

- Je **vervangt een ketel** in een bestaande woning en beproeft daarbij de gasleiding.
- Je **verlegt of verlengt** een stuk gasleiding naar de nieuwe plek van het toestel.
- Je **beoordeelt** een bestaande leiding op dichtheid, op bescherming tegen beschadiging en corrosie en op de juiste bevestiging.

!!! kern Een bestaande leiding wordt op werkdruk beproefd
Installeer of vervang je een gasverbrandingstoestel, dan schrijft het certificatieschema een dichtheidsbeproeving van de gasleiding voor. Een bestaande leiding krijgt daarbij geen drukstoot. Ze wordt uitsluitend op werkdruk beproefd. De volledige werkwijze staat in [les 13.3](les:m13l03).
!!!

## Verhouding met andere normen en de wet

- **Nieuwbouw of bestaand?** Een nieuw gebouw valt onder [NEN 1078](norm:nen-1078), een bestaand gebouw onder NEN 8078. Voor verbouw zegt IPLO het zo. Vernieuw je een installatie volledig, dan gelden de nieuwbouwregels (art. 5.4 lid 3 Bbl). Vernieuw je haar gedeeltelijk, dan geldt het rechtens verkregen niveau met bestaande bouw als ondergrens. IPLO noemt gas daarbij niet bij naam, dus laat een twijfelgeval beoordelen.
- **Certificering.** De certificeringsplicht van het Bbl (artikel 6.45) geldt voor gasverbrandingstoestellen met hun afvoer en luchttoevoer. Volgens IPLO valt werk aan de gasleiding daar niet onder, maar het moet wel aan de regels voldoen. BRL 6000-04 is het schema voor gasinstallaties in woningen en verwijst naar NEN 1078 en NEN 8078.
- **NPR 3378.** De praktijkrichtlijn is de leidraad bij NEN 8078. Zie [NPR 3378](norm:npr-3378).
- **Aansluitleiding.** De bouwkundige kant van de meterruimte staat in NEN 2768, niet in NEN 8078.

## Praktijk en veelgemaakte fouten

1. **De verkeerde norm noemen.** Pas je "NEN 1078" toe op een bestaande woning, of noem je "NEN 8078" voor de opstelruimte, dan zijn dat twee verschillende fouten. Het gebouw bepaalt de norm. Het onderwerp bepaalt het hoofdstuk van het Bbl.
2. **Een bestaande leiding met een drukstoot beproeven.** Volgens het certificatieschema hoort dat niet bij een bestaande installatie. Volg de fabrikant en [les 13.3](les:m13l03).
3. **De uitgave verwarren.** Op de NEN-site zie je 2023 en 2026, maar de wet noemt 2018. Weet dus welke je gebruikt en waarom.
4. **Niet vastleggen.** Zet de beproeving en de uitkomst in je werkbon of rapport. Dat vraagt het certificatieschema ook van je.

## Waar vind je de norm

Bij NEN, in de shop en in NEN Connect. Volgens IPLO zijn alle bouwnormen sinds 17 november 2025 gratis in te zien via NEN Connect. De voorwaarden staan op de NEN-site. Deze pagina is geen officiële bron en vervangt de norm niet.
`,
  faq: [
    { vraag: 'Wat is NEN 8078?', antwoord: 'Het is de norm met prestatie-eisen en beproevingsmethoden voor een gebouwgebonden gasvoorziening met een werkdruk tot en met 500 mbar in bestaande bouw. Het Bbl wijst hem daarvoor aan in artikel 3.107.' },
    { vraag: 'Wat is het verschil tussen NEN 1078 en NEN 8078?', antwoord: 'NEN 1078 geldt voor nieuwbouw en NEN 8078 voor bestaande bouw, allebei met een werkdruk tot en met 500 mbar. Boven 0,5 bar wijst het Bbl voor nieuwbouw NEN-EN 15001-1 aan en voor bestaande bouw NEN 2078.' },
    { vraag: 'Welke norm geldt als je een cv-ketel vervangt?', antwoord: 'In een bestaande woning gaat het om NEN 8078. Als je het toestel vervangt, moet de gasleiding op dichtheid beproefd worden. Een bestaande leiding beproef je op werkdruk. Twijfel je of het nieuwbouw of verbouw is, vraag het dan je certificerende instelling.' },
    { vraag: 'Welke uitgave van NEN 8078 geldt?', antwoord: 'Wettelijk telt de aangewezen uitgave. Volgens de laatst gecontroleerde stand (juli 2026) wees de Omgevingsregeling nog NEN 8078:2018 + A1:2018 aan, terwijl NEN inmiddels NEN 8078:2023+C1:2026 uitgeeft.' },
    { vraag: 'Wat is het maximale lekverlies volgens NEN 8078?', antwoord: 'NEN meldt voor de uitgave 2023 een grenswaarde van 5 dm3 per uur voor het lekverlies. Hoe je dat meet, staat in NPR 3378-1. Lees de procedure daar voor je gaat beproeven.' },
    { vraag: 'Regelt NEN 8078 de opstelruimte van een ketel?', antwoord: 'Nee, NEN 8078 gaat over het gasleidingwerk. De opstelruimte en de rookgasafvoer staan elders, onder meer in het Bbl, NEN 8757 en NEN 8087.' },
    { vraag: 'Mag een niet-gecertificeerd bedrijf aan een gasleiding werken?', antwoord: 'Werk aan gasleidingen valt volgens IPLO niet onder de certificeringsplicht voor gasverbrandingsinstallaties. Het moet wel aan de regels voldoen. Aan het toestel zelf mag alleen een gecertificeerd bedrijf werken.' }
  ],
  lessen: ['m13l03', 'm13l02', 'm12l04', 'm12l05', 'm19l07', 'm01l05'],
  gerelateerd: ['nen-1078', 'npr-3378', 'bouwbesluit', 'nen-2757'],
  bronnen: ['NOG-10', 'NOG-11', 'NOG-12', 'NOG-13', 'NOG-14', 'NOG-15', 'NOG-16', 'NOG-17', 'NOG-19', 'NOG-20', 'NOG-36', 'NOG-37', 'NRM-07', 'NRM-08', 'INS-20', 'INS-13', 'LEI-05']
});

/* Feit-id's: NOG-22 t/m NOG-31, NOG-35, NOG-26, NOG-27, NRM-18, NRM-21, INS-33, IBS-09, INS-13, IBS-04. */
CURSUS.addNorm({
  id: 'npr-3378',
  code: 'NPR 3378',
  volgorde: 30,
  domein: 'Gas',
  titel: 'NPR 3378: praktijkrichtlijn voor gasinstallaties en rookgasafvoer',
  seoTitel: 'NPR 3378 uitgelegd: de delen en de gasdichtheid',
  omschrijving: 'NPR 3378 uitgelegd voor cv-monteurs: welke delen er zijn, wat NPR 3378-1 over de gasdichtheid zegt en of een praktijkrichtlijn verplicht is.',
  kort: 'De praktijkrichtlijn bij NEN 1078, NEN 8078 en de rookgasnormen. Welke delen er zijn en wat je er in je werk mee doet.',
  versie: 'NPR 3378-1:2026 (1 juli 2026) is de nieuwste uitgave van deel 1; een NPR wordt niet aangewezen in Bijlage II (controle 6 november 2026)',
  tekst: `
NPR 3378 is de Nederlandse **praktijkrichtlijn** voor gasinstallaties. Hij legt uit hoe je de prestatie-eisen van [NEN 1078](norm:nen-1078), [NEN 8078](norm:nen-8078) en de rookgasnormen in de praktijk invult. Dat gaat over de gasleiding, de toestellen, de afvoersystemen en de uitmondingen. Een NPR is geen wet maar een leidraad.

## In het kort

| | NPR 3378 |
|---|---|
| Wat het is | Praktijkrichtlijn gasinstallaties, opgedeeld in delen (secties) |
| Secties | Opzet, gasleidingen, gastoestellen, afvoersystemen, uitmondingen, diversen |
| Status | Leidraad, geen wettelijke eis. Het Bbl verwijst er niet naar |
| Wat het toevoegt | Praktische voorbeelden en toelichting bij de normen, die vooral eisen en bepalingsmethoden bevatten |
| Gasdichtheid | Deel 1: bepaling van de gasdichtheid van de gasinstallatie, leidraad bij NEN 1078 en NEN 8078 |
| Nieuwste deel 1 | NPR 3378-1:2026 (1 juli 2026), vervangt NPR 3378-1:2020 |
| Raadplegen | NEN Connect ("Werken met NPR 3378") |

## Is NPR 3378 verplicht?

!!! kern Een leidraad, maar wel de standaard in de praktijk
Het Bbl verwijst niet naar NPR 3378 en een NPR staat ook niet in Bijlage II van de Omgevingsregeling. Juridisch is het dus een praktijkrichtlijn zonder wettelijke status. Maar in de certificatieschema's staat wel dat je wordt geacht aan de eis te voldoen als je volgens NPR 3378 werkt, bijvoorbeeld voor de gasdichtheid. Dat staat in BRL 6000-25 van InstallQ en in BRL K25000 van Kiwa. In de praktijk volg je de NPR dus, tenzij je kunt aantonen dat je op een andere manier ook voldoet.
!!!

Dat is het grote verschil met de NEN-normen. [NEN 1078](norm:nen-1078) en [NEN 8078](norm:nen-8078) worden door het Bbl en de Omgevingsregeling aangewezen, NPR 3378 niet. De volgorde van gezag staat in [les 1.5](les:m01l05): wet, certificatieschema, fabrikant, norm en daarna richtlijnen.

## De delen van NPR 3378

De NPR bestaat uit veel delen. In de tabel staat per groep waar ze over gaan, op basis van wat NEN en de normcommissie melden. Uitgavejaren veranderen vaak, dus kijk altijd op NEN Connect welke uitgave actueel is.

| Groep | Delen | Waar het over gaat |
|---|---|---|
| Opzet | -0 | Definities en uitleg over keurmerken en prestatieverklaringen |
| Gasleidingen | -1 | Bepalen van de sterkte en dichtheid van gasleidingen en van de gasdichtheid van de installatie |
| | -3 | Dimensioneren van gasleiding met de grafiekmethode voor aardgas, propaan en waterstof (uitgave 2025, vervangt ook deel 4) |
| | -5 | Aanleg van gasleidingen in het algemeen, met bijlage voor propaan en butaan |
| | -6, -7 | Bovengrondse en in de grond gelegde leidingen |
| | -8 | Doorvoer van gasleidingen door wanden en vloeren |
| | -10 | Flexibele leidingsystemen |
| | -11 | Aansluitleidingen en aansluitkranen |
| | -12 | Lasverbindingen in koolstofstalen gasleidingen tot 500 mbar |
| | -13 | Inbedrijfstelling, bedrijfsvoering, onderhoud en buitengebruikstelling tot 500 mbar |
| Toestellen | -20 tot -23 | Onder meer opstelplaatsen en stookruimten voor gastoestellen (-22) |
| Afvoersystemen | -40 tot -48 | Aansluiten van toestellen op afvoer, onder meer deel -45 (vervangen van toestellen), -46 (condenserende type C) en -48 (renovatie in gestapelde bouw) |
| Uitmondingen | -60 | Goede werking, hinder en verdunning van uitmondingen |
| Diversen | -80 | Toesteltypen (de A, B en C uit EN 1749) |

De delen over afvoer en uitmondingen horen bij de rookgasnormen, zie [NEN 2757](norm:nen-2757). In de cursus staat de uitleg van deel 45 en 46 in module 8.

## NPR 3378-1: de gasdichtheid

Voor een cv-monteur is dit het belangrijkste deel. Het heet "Bepaling van de gasdichtheid van de gasinstallatie" en het is de leidraad bij NEN 1078 en NEN 8078.

- **Wat het beschrijft:** hoe je de sterkte en de dichtheid van gasleidingen bepaalt, en ook de dichtheid van de hele gasinstallatie. NEN 1078 en NEN 8078 gaan alleen over de leiding.
- **Waarom het ertoe doet:** het certificatieschema eist een dichtheidsbeproeving als je een toestel installeert of vervangt. Het zegt ook dat je aan de gasdichtheidseis van het Bbl voldoet als je NPR 3378-1 volgt. Zie [les 13.3](les:m13l03).
- **Nieuwe uitgave:** NPR 3378-1:2026 kwam uit op 1 juli 2026. Hij vervangt de uitgave 2020, die sinds die datum is ingetrokken. NEN meldt wel dat de nieuwe uitgave voor de proef nog verwijst naar paragraaf 5.2.2 van NEN 1078:2018 en NEN 8078+A1:2018.

!!! kern Neem geen proefwaarden uit je hoofd
De proefdrukken, de tijden en de toegestane drukdaling staan in NPR 3378-1. In handleidingen, white papers en op forums vind je waarden uit de uitgave 2020 of uit andere bronnen. Over de toegestane daling bij een nieuwe leiding gaan ook tegenstrijdige getallen rond. Lees dus de actuele uitgave. En test nooit met een proefdruk die het aangesloten toestel niet aankan.
!!!

## Andere delen die je tegenkomt

- **Deel 3** (2025) is het eerste deel met een dimensioneringsmethode voor waterstof naast aardgas en propaan. Er staat ook een rekenmethode in.
- **Deel 5** (aanleg) is in 2022 verruimd. Er kwamen onder meer propaan en butaan bij, tanks en middendruk boven 500 mbar, overdrukbeveiliging en ventilatie van ruimten met gasleidingen.
- **Deel 13** gaat over inbedrijfstelling, onderhoud en buitengebruikstelling tot 500 mbar.
- **Deel 45** geeft richtlijnen voor het vervangen van toestellen en het werken aan bestaande afvoeren. Daarbij komen ook de gevolgen voor ventilatie en infiltratie aan bod.

## Wat het in de praktijk betekent

1. **Werk volgens de NPR en leg het vast.** Volg je het deel, dan word je binnen het certificatieschema geacht aan de eis te voldoen. Noteer wel welk deel en welke uitgave je gebruikte.
2. **De fabrikant gaat vaak voor.** Bij een afvoer gaan de aanwijzingen van de fabrikant van het afvoersysteem boven de NPR.
3. **Een NPR vervangt de norm niet.** De eis staat in het Bbl en in de aangewezen NEN-norm. De NPR vertelt hoe je eraan voldoet.
4. **Vraag welke uitgave je werkgever verwacht.** Delen verschijnen op verschillende momenten en NEN trekt oudere uitgaven in.

## Waar vind je de NPR

NEN heeft "Werken met NPR 3378" sinds medio 2023 ondergebracht in NEN Connect, met een gratis proefabonnement. Veel bedrijven en opleiders hebben een licentie. Deze pagina legt de richtlijn uit, maar vervangt hem niet.
`,
  faq: [
    { vraag: 'Wat is NPR 3378?', antwoord: 'Het is de Praktijkrichtlijn gasinstallaties van NEN, opgedeeld in delen over gasleidingen, toestellen, afvoersystemen en uitmondingen. Hij geeft praktische voorbeelden en toelichting bij NEN 1078, NEN 8078 en de rookgasnormen.' },
    { vraag: 'Is NPR 3378 verplicht?', antwoord: 'Nee, een NPR is geen wet en het Bbl verwijst er niet naar. Maar volgens de certificatieschema\'s BRL 6000-25 en BRL K25000 word je wel geacht aan de eis te voldoen als je volgens NPR 3378 werkt.' },
    { vraag: 'Wat is NPR 3378-1 en waar gaat het over?', antwoord: 'Deel 1 beschrijft hoe je de sterkte en de dichtheid van gasleidingen bepaalt, en de gasdichtheid van de installatie. Het is de leidraad bij NEN 1078 en NEN 8078.' },
    { vraag: 'Is NPR 3378-1 gewijzigd?', antwoord: 'Ja. NPR 3378-1:2026 kwam uit op 1 juli 2026 en vervangt de uitgave 2020, die sinds die datum is ingetrokken.' },
    { vraag: 'Wat is het verschil tussen NEN 1078 en NPR 3378?', antwoord: 'NEN 1078 bevat prestatie-eisen en beproevingsmethoden. Het Bbl wijst hem aan voor nieuwbouw. NPR 3378 is een praktijkrichtlijn die uitlegt hoe je daaraan voldoet, maar hij is niet aangewezen.' },
    { vraag: 'Welke delen heeft NPR 3378?', antwoord: 'Onder meer deel 0 (algemeen), 1 tot 14 (gasleidingen), 20 tot 23 (toestellen en opstelplaatsen), 40 tot 48 (afvoersystemen), 60 (uitmondingen) en 80 (toesteltypen). Niet elk deel is even actueel, dus controleer de uitgave op NEN Connect.' },
    { vraag: 'Staat in NPR 3378 hoe lang ik een gasleiding moet afpersen?', antwoord: 'De procedure staat in deel 1. Maar de waarden verschillen per uitgave en per situatie, dus neem ze niet uit je hoofd. Lees de actuele uitgave en de les over gasdichtheid in deze cursus.' },
    { vraag: 'Is NPR 3378 ook geschikt voor waterstof?', antwoord: 'Deel 3 (2025) bevat als eerste deel een dimensioneringsmethode voor gasleidingen met waterstof. Of andere delen waterstof behandelen, is niet vastgesteld.' }
  ],
  lessen: ['m13l03', 'm01l05', 'm13l02', 'm08l09', 'm08l08'],
  gerelateerd: ['nen-1078', 'nen-8078', 'nen-2757', 'bouwbesluit'],
  bronnen: ['NOG-22', 'NOG-23', 'NOG-24', 'NOG-25', 'NOG-26', 'NOG-27', 'NOG-28', 'NOG-29', 'NOG-30', 'NOG-31', 'NOG-32', 'NOG-35', 'NRM-18', 'NRM-20', 'NRM-21', 'INS-33', 'IBS-09', 'INS-13']
});

/* ----------------------------------------------------------------------------
   Overige gasnormen (geen eigen pagina, wel in de tabel op de hoofdpagina)
   ---------------------------------------------------------------------------- */

CURSUS.addNormOverig({
  code: 'NEN-EN 15001-1',
  titel: 'Gasinstallatieleidingen met bedrijfsdrukken boven 0,5 bar',
  wat: 'Functionele eisen voor ontwerp, aanleg en beproeving van gasleidingen boven 0,5 bar (industrieel) of boven 5 bar (niet-industrieel). Het Bbl wijst hem aan voor nieuwbouw tussen 0,5 en 40 bar. Uitgave 2023.',
  bronnen: ['NOG-40', 'NOG-06']
});

CURSUS.addNormOverig({
  code: 'NEN 2078',
  titel: 'Aardgasinstallaties voor grotere bijzondere installaties (GAVO 1987, deel 2)',
  wat: 'In bestaande bouw aangewezen voor een gasvoorziening met een werkdruk boven 0,5 en onder 40 bar. Niet van toepassing op huishoudelijke cv-ketels.',
  bronnen: ['NRM-09', 'NOG-14']
});

CURSUS.addNormOverig({
  code: 'NEN 2768',
  titel: 'Meterruimten en bijbehorende bouwkundige voorzieningen in woningen',
  wat: 'Eisen aan afmetingen en indeling van de meterruimte. Het Bbl noemt hem voor leidingdoorvoeren en mantelbuis bij een aansluiting op het gasnet in nieuwbouw. Uitgave 2016+A2:2022.',
  bronnen: ['NOG-41', 'NOG-09']
});

CURSUS.addNormOverig({
  code: 'NEN 3028',
  titel: 'Eisen voor verbrandingsinstallaties (opstelling)',
  wat: 'Ontwerp, aanleg en opstelling van verbrandingsinstallaties, inclusief opstellingsruimten. Niet aangewezen in Bbl of Omgevingsregeling; de uitgave 2022 is ingetrokken sinds 11 maart 2026. NPR 3378-22 was met deze norm in lijn gebracht.',
  bronnen: ['NRM-16']
});
