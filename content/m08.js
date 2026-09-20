/* ==========================================================================
   m08.js - Module 8: Rookgasafvoer en luchttoevoer
   Alle lessen zijn geschreven op basis van project/docs/feiten/04-rookgas-en-luchttoevoer.md
   (met 01 voor CO-grenzen en certificering, 02 voor verbranding en 05 voor meten en onderhoud).
   Typedefinities (A, B, C) komen uit CEN/TR 1749:2014; EN 1749:2020 zelf is niet gelezen.
   ========================================================================== */

CURSUS.addModule({
  id: 'm08',
  nr: 8,
  deel: 1,
  titel: 'Rookgasafvoer en luchttoevoer',
  ondertitel: 'Waar de meeste CO-incidenten ontstaan.',
  niveau: 'Gevorderd',
  studietijd: 11,
  kritiek: true,
  intro: 'Rookgasafvoer en luchttoevoer zijn de plek waar CO-incidenten ontstaan. Deze module gaat over toesteltypen, aansluitwijzen, materialen, monteren, uitmonding, opstellingsruimte en het beoordelen van bestaande afvoeren.',
  inleiding: [
    'Rookgasafvoer en luchttoevoer zijn waar het misgaat. In 2025 meldden certificaathouders 106 keer een (bijna-)ongeval met CO boven 20 ppm, en de rookgasafvoer was daarbij met 35 meldingen de meest genoemde oorzaak. De Onderzoeksraad voor Veiligheid concludeerde in 2015 dat de meeste CO-ongevallen met cv-installaties gebeurden met moderne en goed onderhouden installaties. Een ketel die goed brandt is dus nog geen veilige installatie.',
    'Deze module volgt de weg van de lucht: van de indeling in open en gesloten toestellen en de aansluitwijzen, via materiaal en montage, naar de uitmonding, de opstellingsruimte en de ventilatie, tot collectieve afvoeren en het beoordelen van een bestaande afvoer. Het Bbl stelt prestatie-eisen en de details staan per fabrikant en per systeem in de voorschriften. Waar een waarde per fabrikant verschilt, staat dat erbij. Het is ook de examenkern: opstellingsruimte, afvoer aanleggen, controleren en gestapelde bouw komen in de toetsmatrijs Vakmanschap CO hier samen.'
  ],
  leerdoelen: [
    'Open en gesloten toestellen uit elkaar houden en de aansluitwijzen benoemen',
    'Materiaal en temperatuurklasse van een afvoer bij het toestel kiezen',
    'Een afvoer correct monteren met afschot, beugels en dilatatie',
    'Uitmonding, verdunning en rookgasrecirculatie beoordelen',
    'Opstellingsruimte en ventilatie beoordelen',
    'Een collectieve afvoer (CLV) begrijpen en veilig aansluiten',
    'Een bestaande afvoer beoordelen en een afkeuring onderbouwen'
  ],
  examen: [
    {
      vraag: `In een bestaande woning zit in de keuken een open keukengeiser zonder afvoer van 10 kW. Wat klopt volgens het Bbl?`,
      opties: [
        `Open toestellen zijn sinds 2023 verboden, dus de geiser moet weg`,
        `De plicht tot rookgasafvoer en verbrandingsluchtvoorziening geldt niet voor een open kook- of warmwatertoestel tot 15 kW in een verblijfsruimte, maar de ventilatieregels wel`,
        `Het mag alleen als het toestel een type C-toestel is`,
        `Het mag overal in de woning, ook in de badruimte`
      ],
      goed: 1,
      uitleg: `Bbl art. 3.75 lid 1 ontheft bestaande bouw van de plicht tot rookgasafvoer en verbrandingsluchtvoorziening voor een verblijfsruimte met open kook- of warmwatertoestellen tot 15 kW per toestel, zoals een keukengeiser. De ventilatieregels blijven wel gelden. Een algemeen verbod sinds 2023 is niet aangetoond: 1 april 2023 is de datum van de certificeringsplicht. In een toilet- of badruimte mag een open toestel nooit. Omdat een afvoerloos toestel zijn rookgas in de ruimte afgeeft, adviseer je bovendien een CO-melder als er geen is.`
    },
    {
      vraag: `Je monteert een toestel met een concentrische dakdoorvoer. De ventilator zit in de luchttoevoer en lucht en rookgas komen in hetzelfde drukgebied uit. Welke aanduiding hoort hierbij?`,
      opties: [`C13`, `C43`, `C53`, `C33`],
      goed: 3,
      uitleg: `C3 is een verticale uitmonding (dak) waarvan de openingen concentrisch of dicht bij elkaar liggen, dus in hetzelfde drukgebied. Het laatste cijfer 3 zegt dat de ventilator in de luchttoevoer zit. C13 is de horizontale gevelvariant, C43 hoort bij een collectief CLV-systeem en C53 heeft aparte uitmondingen die in verschillende drukgebieden mogen liggen.`
    },
    {
      vraag: `Een toestel is met de rookgasleiding aangesloten op een gemeenschappelijk rookgaskanaal met natuurlijke trek door het dak. De verbrandingslucht komt via een eigen leiding van buiten de gevel. Welk type is dit?`,
      opties: [
        `C83, een half CLV-systeem`,
        `C43, een CLV-systeem met twee kanalen`,
        `C93, met lucht uit een bestaand kanaal in het gebouw`,
        `C53, met verschillende drukgebieden`
      ],
      goed: 0,
      uitleg: `C8 is aangesloten op een enkelvoudig of gemeenschappelijk afvoerkanaal met natuurlijke trek en heeft een aparte luchttoevoer van buiten het gebouw: het half CLV-systeem. Bij C43 zijn zowel lucht als rookgas gemeenschappelijk. Bij C93 komt de lucht juist uit een bestaand verticaal kanaal in het gebouw. C53 heeft afzonderlijke leidingen en uitmondingen per toestel.`
    },
    {
      vraag: `Een collega zegt dat EN 14471 voorschrijft dat kunststof afvoer met 3 graden afschot wordt gelegd en dat je materialen niet mag mengen. Wat is juist?`,
      opties: [
        `Dat klopt: EN 14471 is de installatienorm voor rookgasafvoer`,
        `Dat klopt, en het staat ook als eis in art. 4.136 van het Bbl`,
        `Onjuist: EN 14471 is een productnorm voor systeemschoorstenen met kunststof binnenbuis, afschot en mengen staan in de voorschriften van fabrikant en Rogafa`,
        `Onjuist: afschot en mengen zijn nergens voorgeschreven`
      ],
      goed: 2,
      uitleg: `EN 14471 is een productnorm. Het Bbl stelt prestatie-eisen en schrijft geen afschot of mengverbod voor. Die eisen staan in de voorschriften van de afvoerfabrikant en Rogafa, en de BRL 6000-25 eist dat je het afvoersysteem plaatst volgens de voorschriften van de fabrikant van het afvoersysteem én van het toestel. Ze zijn dus wel voorgeschreven, alleen niet door die norm of door het Bbl.`
    },
    {
      vraag: `Je legt een horizontaal deel kunststof afvoer van 1,6 m. Het voorschrift vraagt 50 mm per meter afschot. Wat is het minimale hoogteverschil en waar ligt het laagste punt?`,
      opties: [
        `80 mm, het laagste punt bij de uitmonding`,
        `80 mm, het laagste punt bij het toestel`,
        `8 mm, het laagste punt bij het toestel`,
        `50 mm in totaal, het laagste punt bij het toestel`
      ],
      goed: 1,
      uitleg: `1,6 m x 50 mm/m = 80 mm. Het afschot loopt naar het toestel, zodat condens kan terugstromen. 8 mm is een kommafout, en 50 mm is de waarde per meter en niet het totaal.`
    },
    {
      vraag: `Je controleert een afvoer die een ander bedrijf monteerde. Een kunststof verbinding is met siliconenkit afgedicht en een horizontaal deel is om de 1,5 m gebeugeld. Wat is de juiste conclusie?`,
      opties: [
        `Alleen het kitten is een afwijking, 1,5 m horizontaal is normaal`,
        `Alleen de beugelafstand is een afwijking, extra kit is extra veilig`,
        `Beide wijken af: kitten is verboden en de beugelafstand is horizontaal maximaal 1 m volgens Rogafa en Ubbink (controleer het voorschrift van het systeem)`,
        `Geen van beide, want het Bbl schrijft dit niet voor`
      ],
      goed: 2,
      uitleg: `Kunststof afvoer wordt met steekverbindingen en afdichtringen gemaakt en het is verboden verbindingen te kitten, schuimen of plakken. De maximale beugelafstand is horizontaal 1 m en verticaal 2 m volgens de voorschriften van Rogafa en Ubbink. Dat het Bbl dit niet voorschrijft, betekent niet dat het niet hoeft: de BRL 6000-25 eist werken volgens de fabrikantvoorschriften.`
    },
    {
      vraag: `Bij een concentrisch systeem meet je met gesloten mantel 4,0 procent CO2 op het meetpunt van de verbrandingsluchttoevoer. Buiten is het windstil. Wat is de meest waarschijnlijke conclusie?`,
      opties: [
        `Interne lekkage van het systeem: nader onderzoek is nodig`,
        `Normaal, want in de luchttoevoer zit altijd wat rookgas`,
        `Een meetfout, want de luchttoevoer bevat nooit CO2`,
        `Alleen een probleem als het toestel ook een storing geeft`
      ],
      goed: 0,
      uitleg: `Op de luchttoevoer hoort de CO2-waarde gelijk te zijn aan die van de buitenlucht. Door winddruk rond de uitmondingskap is tot circa 1 procent CO2 toelaatbaar. Veel hogere waarden wijzen op interne lekkage en vragen nader onderzoek. Buitenlucht bevat circa 0,04 procent CO2, dus 4,0 procent is honderd keer zoveel. Wacht niet op een storing: een toestel hoeft bij lekkage geen storing te geven.`
    },
    {
      vraag: `Je vervangt een ketel en de uitmonding van de afvoer blijft op precies dezelfde plaats. Welke uitspraak klopt?`,
      opties: [
        `De uitmonding moet alsnog minimaal 1 m en 2 m van de perceelsgrens liggen, want bij elke vervanging gelden de nieuwbouweisen`,
        `De plaatseisen gelden altijd, maar alleen voor de luchttoevoer`,
        `Voor een vervanging gelden geen eisen meer aan de afvoer`,
        `De plaatseis voor de uitmonding geldt dan niet, maar de conditie van de bestaande afvoer moet je wel beoordelen`
      ],
      goed: 3,
      uitleg: `Volgens art. 5.16 Bbl gelden bij verbouw de prestatieniveaus van art. 4.138 en 4.141 voor een nieuw geïnstalleerde afvoer, behalve bij vervanging van een bestaande voorziening waarbij de plaats van de uitmonding niet wijzigt. Dat neemt niet weg dat BRL 6000-25 bij toestelvervanging vraagt het bestaande afvoersysteem gelijktijdig te vervangen, tenzij het grondig is gecontroleerd en als goed is beoordeeld (les 8.9).`
    },
    {
      vraag: `Je moet beoordelen of een ketel in een gesloten kast mag hangen en hoe groot de openingen in de kast moeten zijn. Waar vind je de bruikbare minimummaten?`,
      opties: [
        `In art. 4.176 van het Bbl, dat een vaste rooster-oppervlakte noemt`,
        `In NEN 8078, de norm voor de opstelruimte en de bijbehorende ventilatieopeningen van een ketel`,
        `In de installatiehandleiding van dat toestel, want de maten zijn per fabrikant en toestel`,
        `In NEN 3028, want die is in het Bbl als opstelnorm aangewezen`
      ],
      goed: 2,
      uitleg: `Het Bbl noemt geen vaste maten of volume voor een ketelruimte, alleen dat de afmetingen zijn afgestemd op het toestel. NEN 8078 gaat over het gasleidingwerk en niet over de opstelruimte. NEN 3028 wordt niet in het Bbl of de Omgevingsregeling aangewezen en NEN 3028:2022 is ingetrokken. Minimummaten en openingen voor een kast staan in de installatiehandleiding: voor één Remeha-model is dat 150 cm², en dat getal geldt dus niet algemeen.`
    },
    {
      vraag: `Welke uitspraak over de opstelplaats van een cv-ketel in nieuwbouw klopt?`,
      opties: [
        `Het Bbl schrijft een minimumvolume van 10 m³ voor`,
        `Het Bbl vraagt een opstelplaats met afmetingen die zijn afgestemd op het toestel, zonder vaste maten`,
        `Het Bbl schrijft 60 cm vrije ruimte voor de ketel voor`,
        `Het Bbl stelt alleen eisen aan de opstelplaats als het toestel open is en op een afvoer naar buiten is aangesloten`
      ],
      goed: 1,
      uitleg: `Art. 4.176 en 4.177 Bbl vragen een opstelplaats voor een verwarmingstoestel en een warmwatertoestel met afmetingen die zijn afgestemd op het toestel. Vaste maten kent het Bbl alleen voor aanrecht en kooktoestel. Een volume van 10 m³ komt uit een oudere praktijkrichtlijn voor open toestellen in een badkamer (niet wettelijk), en 60 cm vrij is nergens als algemene eis gevonden: de vrije ruimte staat op de maattekening van elk toestel.`
    },
    {
      vraag: `Een klant in een kierdichte woning heeft een nieuwe krachtige afzuigkap gekregen. Je meet in de opstellingsruimte van zijn open toestel (type B) 12 ppm CO. Wat doe je?`,
      opties: [
        `Nader onderzoek, onder meer naar onderdruk door de ventilatieapparatuur, de oorzaak wegnemen voor je (opnieuw) in bedrijf stelt en de opdrachtgever informeren`,
        `Direct melden aan de gemeente, want er is een overschrijding`,
        `In bedrijf stellen: 12 ppm is onder de 20 ppm en dus goed`,
        `Alleen de klant vragen de afzuigkap niet meer te gebruiken en dit noteren op de werkbon`
      ],
      goed: 0,
      uitleg: `Tussen 5 en 20 ppm in de opstellingsruimte volgt nader onderzoek, wordt de oorzaak weggenomen en de opdrachtgever geïnformeerd. Bij open toestellen vraagt BRL 6000-25 in dat geval onderdruk door ventilatieapparatuur te controleren. De meldplicht van art. 6.46 Bbl geldt pas boven 20 ppm. Alleen noteren lost de oorzaak niet op, en bij een open toestel zonder CO-melder adviseer je er een.`
    },
    {
      vraag: `Welke uitspraak over de capaciteit van de verbrandingsluchttoevoer voor een toestel tot 130 kW klopt?`,
      opties: [
        `Het Bbl schrijft een rooster van 140 cm² voor, ongeacht het vermogen van het toestel en ongeacht de ligging van de opstelruimte of de ventilatie van de woning`,
        `Het Bbl schrijft voor elk toestel een rooster van 150 cm² voor`,
        `Het Bbl schrijft 120 cm² voor, rechtstreeks van buiten`,
        `De capaciteit wordt bepaald volgens NEN 1087 (nieuwbouw) of NEN 8087 (bestaande bouw) en is minimaal de benodigde capaciteit volgens de toestelspecificaties`
      ],
      goed: 3,
      uitleg: `De wet noemt geen vast getal: de benodigde hoeveelheid lucht komt uit de toestelspecificaties. 140 cm² is in geen enkele geraadpleegde bron gevonden, 150 cm² is een fabrikantvoorschrift voor de kastventilatie van één toestel, en 120 cm² is in een BZK-handreiking uit 2014 een risicofactor voor open toestellen en geen norm.`
    },
    {
      vraag: `Je vervangt een defect toestel dat is aangesloten op een bestaand collectief systeem (CLV) van een appartementengebouw. Wat is de regel volgens BRL 6000-25 voor het nieuwe toestel?`,
      opties: [
        `Elk HR-toestel met CE-markering mag, want de fabrikant is verantwoordelijk`,
        `Alleen een toestel van hetzelfde merk, want elk merk heeft een eigen koppeling op het CLV`,
        `Exact hetzelfde type, omdat het werkingsprincipe van het CLV niet mag veranderen`,
        `Een toestel met een ander werkingsprincipe, als de fabrikant dat toestaat`
      ],
      goed: 2,
      uitleg: `Bijlage 5 van BRL 6000-25 eist dat een bestaand toestel op een CLV alleen wordt vervangen door exact hetzelfde type, bijvoorbeeld HR door HR, omdat het werkingsprincipe van het CLV niet mag veranderen. Het merk is niet de eis: bij een overdruk-CLV kunnen sinds januari 2017 meerdere merken op één systeem, mits toestellen en systeem aan het voorschrift voldoen.`
    },
    {
      vraag: `Je doet onderhoud aan een toestel op een concentrisch CLV-systeem. Welke metingen horen daar volgens BRL 6000-25 bij, naast de gewone onderhoudsmetingen?`,
      opties: [
        `CO in de omgevingslucht van de opstellingsruimte en een recirculatiemeting (CO2) op de luchttoevoer`,
        `Alleen een gasdrukmeting op de aansluiting, want de afvoer en de luchttoevoer horen bij het gebouw en niet bij het toestel`,
        `Een trekmeting in de trekonderbreker en een controle van de trek in het verticale kanaal`,
        `Niets extra: het CLV is een zaak van de VvE en de eigenaar van het gebouw`
      ],
      goed: 0,
      uitleg: `Bij onderhoud aan een toestel op een CLV hoort een CO-meting van de omgevingslucht in de opstellingsruimte, en bij een concentrisch systeem een recirculatiemeting. Een C(10)3-systeem heeft geen trekonderbreker. Dat het CLV bij het gebouw hoort, ontslaat je niet van het beoordelen van de veiligheid van het toestel dat je onderhoudt.`
    },
    {
      vraag: `Je vervangt een afvoergebonden toestel. De bestaande afvoer is 8 jaar oud en ziet er van buiten goed uit. Wat is de regel volgens BRL 6000-25?`,
      opties: [
        `Laten zitten: hij is jonger dan 15 jaar`,
        `Gelijktijdig vervangen, tenzij het systeem grondig is gecontroleerd en als goed is beoordeeld (verwachte resterende levensduur minimaal 15 jaar)`,
        `Alleen vervangen als er corrosie zichtbaar is`,
        `Altijd laten zitten als het nieuwe toestel van dezelfde fabrikant is`
      ],
      goed: 1,
      uitleg: `De 15 jaar gaat over de verwachte resterende levensduur na een grondige controle, niet over de leeftijd. Zonder die beoordeling vervang je de afvoer gelijktijdig met het toestel. De buitenkant zegt weinig over de binnenkant, en fabrikanten kunnen de veilige werking niet langer dan een ketelleven garanderen.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 8.1 */
{
  id: 'm08l01',
  nr: '8.1',
  titel: 'Toesteltypen: open en gesloten',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt open (B) en gesloten (C) toestellen uit elkaar houden en uitleggen wat dat betekent voor lucht en afvoer.',
  videos: [
    { taal: 'nl', titel: 'Een veilige rookgasafvoer, deel 1: introductie (Ubbink, via Installatie.nl)', yt: 'HYFTkH2KEYY', duur: '±1 min, 2019' },
    { taal: 'nl', titel: 'Hoe werkt een HR-ketel? Veiligheidsmaatregelen uitgelegd (Van Gemert Installatiegroep, bron Nefit)', yt: 'Cd5O2a4qabo', duur: '±6 min, 2018' },
    { taal: 'en', titel: 'Open flue system explained (Tomkat Gas Training, VK, ter vergelijking)', yt: 'NFVhVvMJ48M', duur: '±10 min, 2021' }
  ],
  tekst: `
## Drie letters: hoe komt de lucht binnen en het rookgas weg?

Elk gasverbrandingstoestel heeft lucht nodig en moet zijn rookgas kwijt. De indeling in A, B en C beschrijft hoe dat gebeurt. Ze komt uit EN 1749, een indelingsschema voor gastoestellen. Het is geen installatienorm en geen productnorm. De definities komen uit CEN/TR 1749:2014, de voorganger van NEN-EN 1749:2020 (waarvan de tekst voor deze cursus niet is nagelopen). De Nederlandse uitleg van de toestelaanduidingen staat in NPR 3378-80:2023.

| Type | Verbrandingslucht | Rookgas | Voorbeeld |
|---|---|---|---|
| A | Uit de ruimte | Komt in de ruimte, geen afvoer naar buiten | Afvoerloze keukengeiser |
| B (open toestel) | Rechtstreeks uit de opstelruimte | Via een afvoer naar buiten | Open toestel op een afvoer |
| C (gesloten toestel) | Van buiten, via een luchtleiding | Via een afvoer naar buiten | Moderne HR-ketel |

!!! kern Open betekent: lucht uit de ruimte
Bij een type B haalt het toestel zijn lucht uit de opstelruimte, dus alles wat die ruimte met lucht doet, raakt het toestel. Bij type C is het hele verbrandingscircuit (luchttoevoer, verbrandingskamer, warmtewisselaar en afvoer) afgesloten ten opzichte van de ruimte. Bij een werkend type C-toestel moet de mantel dan ook gesloten zijn: bij een Nefit-toestel is de mantel gasdicht en een deel van de luchttoevoer.
!!!

## De cijfers erachter

Het laatste cijfer zegt waar de ventilator zit:

- 1: natuurlijke trek, geen ventilator
- 2: ventilator na de verbrandingskamer en warmtewisselaar, dus in de rookgasstroom
- 3: ventilator voor de verbrandingskamer, dus in de luchttoevoer
- 4: alleen bij type B met trekonderbreker: ventilator na verbrandingskamer én trekonderbreker

Moderne Nederlandse HR-toestellen hebben de ventilator in de luchttoevoer en eindigen dus op 3. Bij type B zegt het eerste cijfer of er een trekonderbreker is: B1 en B4 hebben er een, B2, B3 en B5 niet. Een B11 is een open toestel met trekonderbreker en natuurlijke trek, en een B11BS heeft daarbij een bewaking die reageert op blokkade of verstopping van de afvoer. Een B23 heeft geen trekonderbreker en een ventilator voor de verbrandingskamer, en B23P is bedoeld voor een afvoer die op overdruk werkt. B33 komt zelden voor. Welke types een toestel toelaat, staat in de installatiehandleiding.

## Wat mag nog? Het verhaal van 2023

Je hoort soms dat open toestellen sinds 2023 verboden zijn. Dat is niet aangetoond. Dit staat wel in het Bbl en de regelgeving:

- **Nieuwbouw:** elke ruimte met een verbrandingstoestel moet voorzieningen hebben voor rookgasafvoer en verbrandingslucht. Alleen een kooktoestel tot en met 15 kW in een verblijfsruimte blijft buiten beschouwing (art. 4.135 lid 1). Een afvoerloze keukengeiser (type A) mag er dus niet zijn.
- **Bestaande bouw:** die plicht geldt niet voor een verblijfsruimte met open kook- of warmwatertoestellen tot en met 15 kW per toestel, zoals een keukengeiser (art. 3.75 lid 1). De ventilatieregels gelden wel.
- **Toilet- en badruimte:** een open verbrandingstoestel mag daar niet staan, in nieuwbouw en in bestaande bouw (art. 4.135 lid 2 en art. 3.75 lid 2). Voor gesloten toestellen geldt dat niet.
- **Ecodesign:** sinds 26 september 2015 geldt voor cv-ketels tot 70 kW een minimum voor de seizoensgebonden ruimteverwarmingsefficiëntie (86 procent). Conventionele en VR-ketels worden in de praktijk niet meer verkocht en geplaatst, behalve in gestapelde woningen met een bouwkundig collectief kanaal.
- **1 april 2023:** dit is de datum waarop de certificeringsplicht verplicht werd, dus geen verbod op open toestellen. Een streven om open toestellen uit te faseren was een beleidsdoel uit een BZK-handreiking, geen wet.

Toch verdienen gesloten toestellen volgens fabrikanten altijd de voorkeur: het rookgasafvoersysteem staat dan alleen met de buitenlucht in verbinding en bij onregelmatigheden belasten verbrandingsproducten het binnenklimaat niet. Dat is een fabrikantadvies en geen Bbl-eis. Open toestellen zijn bovendien gevoelig voor onderdruk door een afzuigkap of mechanische ventilatie (les 8.7).

## Waarom het type ertoe doet in je werk

Je legt de toestelindeling A, B of C vast bij het afmelden van je werk. Ze bepaalt ook welke CO-grens in het verbrandingsgas geldt als de fabrikant geen maximum noemt: 50 ppm voor open afvoerloos (A), 200 ppm voor open afvoergebonden (B) en 400 ppm voor gesloten (C). De fabrikantgrens gaat voor. Hoe je meet en beoordeelt, komt in module 10 aan bod.
`,
  checklist: [
    'Ik kan A, B en C uitleggen aan de hand van de bron van de verbrandingslucht en de plek van het rookgas',
    'Ik weet wat het laatste cijfer van een typeaanduiding zegt over de ventilator',
    'Ik weet dat "open toestellen zijn verboden sinds 2023" niet aangetoond is en kan zeggen wat wel geldt',
    'Ik weet dat een open toestel niet in een toilet- of badruimte mag staan'
  ],
  quiz: [
    {
      vraag: `Een toestel haalt zijn verbrandingslucht uit de opstelruimte en voert het rookgas via een afvoer naar buiten. Welk type is dit?`,
      opties: [`Type A`, `Type B`, `Type C`, `Type C met natuurlijke trek`],
      goed: 1,
      uitleg: `Lucht uit de opstelruimte met een afvoer naar buiten is een open toestel: type B. Type A voert geen rookgas af naar buiten en type C haalt zijn lucht van buiten via een afgesloten circuit.`
    },
    {
      vraag: `Een toestel heeft de aanduiding C13. Wat zegt het laatste cijfer?`,
      opties: [
        `Dat het toestel natuurlijke trek heeft`,
        `Dat er een trekonderbreker zit`,
        `Dat de ventilator stroomafwaarts in het rookgas zit`,
        `Dat de ventilator in de luchttoevoer zit`
      ],
      goed: 3,
      uitleg: `Het laatste cijfer geeft de ventilator aan: 1 is natuurlijke trek, 2 een ventilator in de rookgasstroom en 3 een ventilator in de luchttoevoer. Moderne Nederlandse HR-toestellen eindigen op 3.`
    },
    {
      vraag: `Een collega zegt: "Open toestellen zijn sinds 2023 verboden." Wat klopt?`,
      opties: [
        `Dat is niet aangetoond: 1 april 2023 is de datum van de certificeringsplicht, en het Bbl verbiedt een open toestel wel in een toilet- of badruimte`,
        `Dat klopt, het staat in het Bbl`,
        `Dat klopt, maar alleen voor toestellen zonder trekonderbreker`,
        `Dat klopt alleen voor toestellen boven 15 kW`
      ],
      goed: 0,
      uitleg: `In de Bbl-tekst is geen algemeen verbod op open toestellen in bestaande bouw gevonden. 1 april 2023 is het einde van de overgangsperiode van het certificeringsstelsel. Wat wel geldt: afvoerloze open toestellen zijn in nieuwbouw niet toegestaan (behalve een kooktoestel tot 15 kW) en open toestellen mogen niet in een toilet- of badruimte.`
    },
    {
      vraag: `Wat is EN 1749?`,
      opties: [
        `Een installatienorm voor rookgasafvoer met eisen aan afschot, beugelafstand en materiaal`,
        `Een productnorm voor cv-ketels`,
        `Een indelingsschema voor gastoestellen naar de wijze van luchttoevoer en rookgasafvoer`,
        `Een norm voor de brandveiligheid van de opstelruimte`
      ],
      goed: 2,
      uitleg: `EN 1749 deelt gastoestellen in typen in (A, B, C). Het is zelf geen installatienorm en geen productnorm. De Nederlandse uitleg staat in NPR 3378-80:2023.`
    },
    {
      vraag: `Wat is het verschil tussen een B11 en een B11BS?`,
      opties: [
        `Een B11BS heeft een ventilator in de luchttoevoer, een B11 werkt alleen op natuurlijke trek`,
        `Een B11BS is een gesloten toestel`,
        `Een B11BS heeft geen trekonderbreker`,
        `Een B11BS heeft een bewaking die reageert op blokkade of verstopping van de afvoer`
      ],
      goed: 3,
      uitleg: `Beide zijn open toestellen met trekonderbreker en natuurlijke trek. Het toevoegsel BS staat voor een bewaking die reageert op blokkade of verstopping van het afvoersysteem. Een ventilator zou het laatste cijfer veranderen.`
    }
  ],
  kaarten: [
    { voor: `Wat is het verschil tussen type B en type C?`, achter: `Type B haalt zijn lucht uit de opstelruimte (open toestel). Type C heeft een afgesloten verbrandingscircuit met lucht van buiten (gesloten toestel).` },
    { voor: `Wat is een type A-toestel?`, achter: `Een toestel zonder aansluiting op een afvoer naar buiten, waarvan de verbrandingsproducten in de ruimte komen, bijvoorbeeld een afvoerloze keukengeiser.` },
    { voor: `Wat zegt het laatste cijfer van een typeaanduiding zoals C13?`, achter: `Waar de ventilator zit: 1 geen ventilator (natuurlijke trek), 2 in de rookgasstroom, 3 in de luchttoevoer.` },
    { voor: `Waar staat 1 april 2023 voor?`, achter: `Het einde van de overgangsperiode van de certificeringsplicht voor werk aan gasverbrandingstoestellen. Het is geen verbod op open toestellen.` },
    { voor: `Waar mag een open verbrandingstoestel volgens het Bbl niet staan?`, achter: `In een toilet- of badruimte, in nieuwbouw (art. 4.135 lid 2) en in bestaande bouw (art. 3.75 lid 2).` },
    { voor: `Welke CO-grens in het verbrandingsgas geldt als de fabrikant geen maximum noemt?`, achter: `50 ppm bij open afvoerloos (A), 200 ppm bij open afvoergebonden (B), 400 ppm bij gesloten (C). De fabrikantgrens gaat voor.` }
  ],
  bronnen: ['RGA-01', 'RGA-02', 'RGA-03', 'RGA-04', 'RGA-05', 'RGA-06', 'RGA-07', 'RGA-08', 'RGA-09', 'RGA-21', 'RGA-35', 'RGA-36', 'RGA-37', 'RGA-39', 'RGA-40', 'RGA-41', 'RGA-42', 'WET-54', 'WET-81', 'WET-86', 'CO-40']
},

/* ------------------------------------------------------------------ 8.2 */
{
  id: 'm08l02',
  nr: '8.2',
  titel: 'Aansluitwijzen: van C13 tot C93',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de aansluitwijzen van gesloten toestellen herkennen en per type uitleggen hoe lucht en rookgas lopen.',
  videos: [
    { taal: 'nl', titel: 'Montagevideo concentrisch verlengsysteem push-fit (Ubbink Nederland)', yt: 'ypFsNopZSiU', duur: '±3 min, 2022' },
    { taal: 'nl', titel: 'Gasgeiser met concentrische rookgasafvoer (Homekeur, bouwkundige keuring)', yt: 'hEQoS4qzw4o', duur: '±2 min, 2023' },
    { taal: 'en', titel: 'How to extend a coaxial flue terminal (ATI)', yt: 'nw-fU06YuQs', duur: '±1 min, 2019' }
  ],
  tekst: `
## Het eerste cijfer: hoe is de uitmonding opgebouwd?

Bij een gesloten toestel (type C) zegt het eerste cijfer hoe lucht en rookgas naar buiten en naar binnen worden geleid. Het laatste cijfer is, net als in les 8.1, de plek van de ventilator: 1 natuurlijke trek, 2 ventilator in het rookgas, 3 ventilator in de luchttoevoer. Bij moderne Nederlandse HR-toestellen is dat meestal een 3.

Een begrip dat je steeds nodig hebt is het **drukgebied**. Wind drukt niet overal even hard tegen een gebouw. Liggen de lucht- en rookgasopening concentrisch of dicht genoeg bij elkaar, dan staan ze onder gelijke winddruk: de wind verstoort het verschil tussen lucht en rookgas dan niet. Mogen ze in verschillende drukgebieden liggen, dan kan dat verschil wel veranderen.

## De aansluitwijzen op een rij

| Type | Uitmonding | Lucht en rookgas | Kort |
|---|---|---|---|
| C13 | Horizontaal (gevel) | Concentrisch of dicht bij elkaar, gelijke winddruk | Geveldoorvoer |
| C33 | Verticaal (dak) | Concentrisch of dicht bij elkaar, hetzelfde drukgebied | Dakdoorvoer |
| C43 | Gemeenschappelijk systeem van het gebouw | Twee kanalen (lucht en rookgas) naar een uitmonding met concentrische of dicht bij elkaar liggende openingen | CLV, zie les 8.8 |
| C53 | Afzonderlijke uitmondingen | Afzonderlijke leidingen, mogen in verschillende drukgebieden uitmonden | Gescheiden aansluiting |
| C63 | Apart goedgekeurd systeem | Toestel wordt zonder afvoermateriaal geleverd | Vrij verkrijgbaar systeem |
| C83 | Gemeenschappelijk rookgaskanaal, natuurlijke trek | Lucht individueel van buiten het gebouw | Half CLV |
| C93 | Verticale uitmonding | Rookgasleiding naar de uitmonding, luchtleiding op een bestaand verticaal kanaal (schacht) | Bestaande schacht |

!!! kern C33 is niet C53
C33 is een verticale dakuitmonding waarbij lucht en rookgas in hetzelfde drukgebied liggen. Gescheiden leidingen die in verschillende drukgebieden mogen uitmonden zijn C53. "C33 is gescheiden door dak of gevel" is een veelgemaakte fout. Ook C4 is geen "gedeelde schoorsteen": het is het collectieve CLV-systeem dat bij het gebouw hoort en niet bij het toestel.
!!!

## Wat je in de praktijk moet weten

- **C13 en C33** zijn twee individuele aansluitwijzen: door de gevel en door het dak. Ze bestaan concentrisch (buis in buis) en parallel (twee buizen naast elkaar, dicht bij elkaar). Rogafa (Nederlandse fabrikanten van rookgasafvoer) adviseert concentrisch als standaard: bij lekkage van de rookgaspijp komt het rookgas dan in de luchttoevoer van het toestel in plaats van in de leefomgeving. Dat is een fabrikantclaim over het concept, geen garantie dat elke lekkage een storing geeft.
- **C53** heeft een fabrikanteis die je in de handleiding moet nalopen. Nefit noemt bijvoorbeeld dat de rookgas- en luchttoevoeropening niet op tegenover elkaar liggende gevels mogen zitten.
- **C63** betekent dat het toestel zonder afvoermateriaal komt. Het materiaal moet aan de voorwaarden van toestel- en systeemfabrikant voldoen, bijvoorbeeld maximaal 10 procent recirculatie en geen uitmondingen op tegenover elkaar liggende gevels (voorbeeld: Remeha Calora Tower 35S, 2021). Dit verschilt per fabrikant.
- **C83** komt bij een half CLV: gemeenschappelijk rookgaskanaal met een uitmonding via het dak, lucht via een gevelrooster of schacht. Hoort bij les 8.8.
- **C93** gebruikt een bestaande schacht of omkokerd kanaal voor de lucht. De minimale schachtafmetingen staan per systeem in de handleiding (voorbeeld: Remeha Calenta, 2017).
- **C2 en C7** zijn verouderd en worden in nieuwe Europese toestelnormen niet meer verwacht. Gebruik ze niet als actuele types.
- **C13R:** de extra letter R betekent dat een C1-toestel zowel met een horizontale gevel-uitmonding als met een horizontale uitmonding op een dak mag worden aangesloten.

## Zo herken je het bij een klant

1. Twee buizen of één concentrische buis door de gevel, op één punt: C13 (bij ventilator in de luchttoevoer).
2. Hetzelfde door het dak: C33.
3. Lucht en rookgas apart, elk naar hun eigen uitmonding: C53.
4. Rookgas in een gemeenschappelijk kanaal, lucht via de gevel: C83.
5. Lucht uit een bestaande schacht: C93.
6. Toestel zonder afvoermateriaal geleverd: C63, dus zoek het goedgekeurde systeem erbij.
7. Gemeenschappelijke kanalen voor lucht en rookgas in het gebouw: C4 of C(10), zie les 8.8.

Welke aansluitwijzen een toestel toelaat, staat in de installatiehandleiding.
`,
  checklist: [
    'Ik kan uitleggen wat een drukgebied is en waarom bij C1 en C3 de openingen bij elkaar liggen',
    'Ik weet dat C33 een verticale dakuitmonding in hetzelfde drukgebied is en C53 gescheiden uitmondingen in verschillende drukgebieden',
    'Ik weet dat C4 een CLV-systeem is en geen gedeelde schoorsteen',
    'Ik ken C63, C83 en C93 en weet dat de exacte eisen per fabrikant en toestel verschillen'
  ],
  quiz: [
    {
      vraag: `Wat kenmerkt een C33-aansluiting?`,
      opties: [
        `Lucht via de gevel en rookgas via het dak, in verschillende drukgebieden, met afzonderlijke leidingen voor elk`,
        `Een verticale uitmonding (dak) waarbij lucht en rookgas concentrisch of dicht bij elkaar in hetzelfde drukgebied liggen`,
        `Een aansluiting op een collectief CLV-systeem met een gemeenschappelijk kanaal voor lucht en rookgas`,
        `Een horizontale uitmonding door de gevel waarbij lucht en rookgas concentrisch of dicht bij elkaar in gelijke winddruk liggen`
      ],
      goed: 1,
      uitleg: `C3 is een verticale uitmonding met lucht en rookgas in hetzelfde drukgebied, en het cijfer 3 zegt dat de ventilator in de luchttoevoer zit. De omschrijving "gescheiden door dak of gevel" hoort bij C53, en een horizontale gevel-uitmonding is C13.`
    },
    {
      vraag: `Een toestel is aangesloten met afzonderlijke leidingen op afzonderlijke uitmondingen voor lucht en rookgas, die in verschillende drukgebieden mogen liggen. Welk type is dit?`,
      opties: [`C13`, `C33`, `C43`, `C53`],
      goed: 3,
      uitleg: `Afzonderlijke leidingen naar afzonderlijke uitmondingen, met toestemming voor verschillende drukgebieden, is C5. Bij C13 en C33 liggen lucht en rookgas in hetzelfde drukgebied, bij C43 gaat het om een gemeenschappelijk systeem van het gebouw.`
    },
    {
      vraag: `Iemand noemt C43 "een gedeelde schoorsteen". Wat is juist?`,
      opties: [
        `C4 is een aansluiting op een gemeenschappelijk systeem met twee kanalen (lucht en rookgas) dat bij het gebouw hoort: een CLV`,
        `Dat klopt, C4 is een schoorsteen voor meerdere toestellen`,
        `C4 is een toestel zonder ventilator`,
        `C4 is een toestel dat zijn lucht uit de zolder haalt`
      ],
      goed: 0,
      uitleg: `C4 is een type C-toestel op een gemeenschappelijk leidingsysteem voor meer dan één toestel, met een kanaal voor lucht en een voor rookgas. Het systeem hoort bij het gebouw en niet bij het toestel. Type C7 (lucht van de zolder, afvoer boven het dak met trekonderbreker) is verouderd.`
    },
    {
      vraag: `Een toestel wordt geleverd zonder afvoermateriaal en is bedoeld voor een apart goedgekeurd luchttoevoer- en afvoersysteem. Wat betekent dat voor jou?`,
      opties: [
        `Je mag elk vrij verkrijgbaar afvoermateriaal gebruiken dat past`,
        `Het toestel is een type B en heeft geen luchttoevoer nodig`,
        `Het is een C63 en het materiaal moet aan de eisen van toestel- en systeemfabrikant voldoen, bijvoorbeeld een maximaal toegestane recirculatie`,
        `Het toestel mag alleen op een collectief systeem`
      ],
      goed: 2,
      uitleg: `C6 is bedoeld voor een apart goedgekeurd en apart in de handel gebracht systeem. Fabrikanten stellen aanvullende eisen, zoals een maximale recirculatie van 10 procent en geen uitmondingen op tegenover elkaar liggende gevels (voorbeeld Remeha Calora Tower 35S). Dat verschilt per fabrikant.`
    },
    {
      vraag: `Waarom liggen bij C13 en C33 de lucht- en rookgasopening concentrisch of dicht bij elkaar?`,
      opties: [
        `Omdat het er netter uitziet en er minder gaten in de gevel of het dak nodig zijn`,
        `Zodat ze onder gelijke winddruk staan en de wind het verschil tussen lucht en rookgas niet verstoort`,
        `Omdat het rookgas zo de luchttoevoer opwarmt`,
        `Omdat de wet een maximale afstand van 1 m tussen beide openingen voorschrijft, gemeten van hart tot hart`
      ],
      goed: 1,
      uitleg: `De definitie van C1 en C3 vraagt openingen die concentrisch zijn of dicht genoeg bij elkaar liggen om onder gelijke winddruk te staan. Een maximale afstand van 1 m staat daar niet bij.`
    },
    {
      vraag: `Een toestel is aangesloten op een gemeenschappelijk rookgaskanaal met natuurlijke trek. De lucht komt via een eigen leiding van buiten. Welke aanduiding past?`,
      opties: [`C43`, `C93`, `C83`, `C53`],
      goed: 2,
      uitleg: `C8 is het half CLV-systeem: rookgas gemeenschappelijk met natuurlijke trek, lucht individueel van buiten. Bij C93 komt de lucht juist uit een bestaand verticaal kanaal in het gebouw.`
    }
  ],
  kaarten: [
    { voor: `Wat is C33?`, achter: `Een verticale dakuitmonding waarbij lucht en rookgas concentrisch of dicht bij elkaar in hetzelfde drukgebied liggen, met de ventilator in de luchttoevoer.` },
    { voor: `Wat is C53?`, achter: `Afzonderlijke leidingen naar afzonderlijke uitmondingen voor lucht en rookgas, die in verschillende drukgebieden mogen liggen.` },
    { voor: `Wat is C13?`, achter: `Een horizontale (gevel) uitmonding met lucht en rookgas dicht bij elkaar in gelijke winddruk, met de ventilator in de luchttoevoer.` },
    { voor: `Wat is C43 en wat is het niet?`, achter: `Aansluiting op een gemeenschappelijk CLV-systeem met twee kanalen dat bij het gebouw hoort. Het is geen gedeelde schoorsteen.` },
    { voor: `Wat is C83?`, achter: `Rookgas via een gemeenschappelijk kanaal met natuurlijke trek, lucht individueel van buiten het gebouw: het half CLV-systeem.` },
    { voor: `Wat is C93?`, achter: `Rookgas naar een verticale uitmonding, lucht uit een bestaand verticaal kanaal (schacht) in het gebouw, uitmonding in hetzelfde drukgebied.` },
    { voor: `Wat betekent C63?`, achter: `Het toestel wordt zonder afvoermateriaal geleverd en is bedoeld voor een apart goedgekeurd systeem. Eisen verschillen per fabrikant.` }
  ],
  bronnen: ['RGA-04', 'RGA-05', 'RGA-10', 'RGA-11', 'RGA-12', 'RGA-13', 'RGA-14', 'RGA-15', 'RGA-16', 'RGA-17', 'RGA-20', 'RGA-21', 'RGA-23', 'RGA-52', 'RGA-58', 'LUC-09']
},

/* ------------------------------------------------------------------ 8.3 */
{
  id: 'm08l03',
  nr: '8.3',
  titel: 'Materialen, temperatuurklassen en condens',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt het materiaal en de temperatuurklasse van een afvoer bij het toestel kiezen en uitleggen waarom mengen van systemen niet mag.',
  videos: [
    { taal: 'nl', titel: 'Een veilige rookgasafvoer, deel 2: materialen niet mengen (Ubbink, via Installatie.nl)', yt: 'BiTZTKOI1io', duur: '±1 min, 2019' },
    { taal: 'nl', titel: 'Montagefilm starre kunststof rookgasafvoer Safe-PP (Burgerhout, via JTCA)', yt: '7_QMBcwe0xo', duur: '±2 min, 2015' },
    { taal: 'en', titel: 'Centrotherm InnoFlue boiler and water heater vent pipe (Ask the Builder)', yt: 'H3I3sxgS6Xo', duur: '±2 min, 2019' }
  ],
  tekst: `
## Waarom een HR-afvoer nat is

Een HR-toestel koelt zijn rookgas sterk af. Het dauwpunt van het rookgas van aardgas ligt rond 54 tot 56 °C bij een gangbare luchtovermaat (circa 57 °C bij lambda 1,1). Komt het rookgas daaronder, dan condenseert er water in de afvoer. Dat condensaat is zuur, en daarom moet de afvoer van een condenserend toestel bestand zijn tegen natte rookgassen: weerstandsklasse W. Ook de condens die het toestel zelf maakt, moet weg kunnen: hoe die condensafvoer bij een toestel is aangesloten, staat in de handleiding van dat toestel.

Twee eisen bepalen de keuze van het materiaal: de **temperatuur** van het rookgas en de **condens**.

## Welke materialen mogen?

Volgens fabrikanten zijn voor condenserende toestellen kunststof (T120), roestvast staal en dikwandig aluminium toegestaan, mits CE-gekeurd en geschikt voor HR-toestellen. Wat je per materiaal moet weten:

| Materiaal | Voorwaarde | Let op |
|---|---|---|
| Kunststof (PP, PPs) | Bedoeld voor een rookgastemperatuur tot 120 °C (T120) | PPs is de brandvertragende variant. Wanneer die verplicht is, volgt uit het fabrikantvoorschrift en de brandeisen |
| Roestvast staal (RVS) | Metalen afvoer is in het Rogafa-voorschrift bedoeld voor 200 °C. Gastec QA-keur KE83-5 | Geen mix met andere materialen |
| Dikwandig aluminium | Gastec QA-keur KE83-3 | Dunwandig aluminium gaat door corrosie lekken |

Een fabrikant schrijft bovendien voor dat aluminium alleen mag zonder contact met het bouwkundige deel van het kanaal, en dat condens uit een kunststof of RVS-deel niet ongehinderd in een aluminium deel mag terugstromen (Remeha Calenta, 2017). Dat is een productspecifiek voorbeeld.

!!! kern Niet mengen
In de aansluitleiding mag je componenten van verschillende materialen of fabricaten niet mengen, behalve waar de fabrikant van het systeem dat toelaat. Bij enkelwandig metaal is er een uitzondering voor componenten met Gastec QA-keur KE83-3 en KE83-5. Bij concentrische systemen geldt het verbod zonder die uitzondering. Koppel- en verbindingsmethoden verschillen per fabrikant, en een pijp van de een past niet altijd goed in een mof van de ander.
!!!

## Temperatuurklasse en het label

Een kunststof afvoer met CE-markering volgens EN 14471 draagt een aanduiding met klassen. Neem als voorbeeld het label van een Ubbink-systeem (Rolux PP T120): de aanduiding begint met **T120 H1 O W 2 O20 I** en gaat daarna verder met meer klassen die je in de productdocumentatie leest.

| Code | Betekenis |
|---|---|
| T120 | Voor toestellen met maximaal 120 °C rookgastemperatuur |
| H1 | Maximaal 5000 Pa overdruk |
| O | Niet roetbrandbestendig |
| W | Geschikt voor natte en droge rookgassen |
| 2 | Vloeibare of gasvormige brandstof |
| O20 | Minimaal 20 mm afstand tot brandbaar materiaal |
| I | Binnen gebouwen |

De klassen van schoorstenen zijn gedefinieerd in EN 1443 (temperatuur, druk N, P of H, condens W of D, corrosie en roetbrand). Voor de rookdoorlatendheid volstaat volgens de IPLO voor nieuwbouw een CE-markering klasse N1 of P1 volgens EN 1443, om aan art. 4.141 Bbl te voldoen.

De NPR 3378-46 (2016) geldt voor een enkelvoudig afvoersysteem van metaal of kunststof voor een condenserend type C-toestel met ingebouwde ventilator tot 130 kW bovenwaarde in woningen, voor toestellen met een temperatuurklasse van ten hoogste T120. De productnormen zijn EN 14471 (kunststof binnenbuis), EN 1856-1 en -2 (metaal) en EN 13384 (berekening). Installatie-eisen als "geen mengen" en "3 graden afschot" zijn geen eisen uit EN 14471: die staan in de voorschriften van fabrikant en Rogafa.

## Praktijkgeval: oude afvoer, nieuwe ketel

Een klant heeft een oud toestel met natuurlijke trek op een bouwkundig kanaal, en wil een HR-ketel. Wat je weet:

- Een HR-toestel geeft afgekoeld, condenserend rookgas af. Een bouwkundig collectief kanaal met natuurlijke trek (een shunt) is niet geschikt voor condenserende rookgassen.
- Directe aansluiting van de rookgasafvoer op bouwkundige kanalen is volgens fabrikanten niet toegestaan vanwege condensatie. In een bestaand kanaal komt een luchtdichte, dikwandige starre aluminium of RVS voering of een buigbare kunststof of RVS voering, die inspecteerbaar moet zijn.
- Bij een VR-toestel dat door een HR-toestel wordt vervangen, moet het afvoersysteem volgens Ubbink altijd worden vervangen (les 8.9).
`,
  checklist: [
    'Ik kan uitleggen waarom een afvoer van een condenserend toestel bestand moet zijn tegen natte rookgassen',
    'Ik weet dat T120 een maximale rookgastemperatuur van 120 °C betekent en kan de letters van het label uitleggen',
    'Ik weet dat dunwandig aluminium niet mag en dat materialen niet gemengd mogen worden zonder toestemming van de systeemfabrikant',
    'Ik weet dat EN 14471 een productnorm is en dat afschot en mengverbod uit voorschriften komen'
  ],
  quiz: [
    {
      vraag: `Waarom moet de afvoer van een HR-toestel bestand zijn tegen natte rookgassen?`,
      opties: [
        `Het rookgas is zo heet dat het metaal aantast`,
        `Het rookgas koelt onder het dauwpunt af (circa 54 tot 56 °C bij gangbare instelling), waardoor zuur condensaat ontstaat`,
        `Omdat er water in de luchttoevoer komt`,
        `Omdat het rookgas van een HR-toestel meer roet bevat`
      ],
      goed: 1,
      uitleg: `HR-toestellen koelen hun rookgas sterk af. Onder het dauwpunt condenseert waterdamp en het condensaat is zuur, dus de afvoer heeft weerstandsklasse W nodig. Het rookgas is juist sterk afgekoeld, en roet is hier niet aan de orde.`
    },
    {
      vraag: `Welke uitspraak over aluminium rookgasafvoer voor HR-toestellen klopt?`,
      opties: [
        `Dunwandig aluminium is prima zolang het CE-gemarkeerd is, want aluminium roest niet zoals staal`,
        `Aluminium mag niet in een HR-afvoer, omdat het rookgas van een HR-toestel te heet is`,
        `Aluminium moet dikwandig zijn: condensaat tast aluminium aan en dunwandig aluminium gaat door corrosie lekken`,
        `Aluminium is alleen toegestaan bij een gevelafvoer en niet bij een afvoer door het dak of in een schacht of kanaal`
      ],
      goed: 2,
      uitleg: `Dikwandig aluminium is een toegestaan materiaal, dunwandig niet. Ook dan zijn er fabrikantvoorwaarden, zoals geen contact met het bouwkundige deel van het kanaal.`
    },
    {
      vraag: `Een klant heeft een bestaand bouwkundig kanaal en wil een HR-ketel direct met de rookgasafvoer in dat kanaal laten uitkomen. Wat is je antwoord?`,
      opties: [
        `Dat mag als het kanaal droog is`,
        `Dat mag alleen als het kanaal van beton is`,
        `Dat mag als je de aansluiting kit`,
        `Nee: directe aansluiting op bouwkundige kanalen is vanwege condensatie niet toegestaan, er komt een inspecteerbare luchtdichte voering in`
      ],
      goed: 3,
      uitleg: `Fabrikanten staan directe aansluiting op bouwkundige kanalen niet toe vanwege condensatie. In het kanaal komt een luchtdichte, dikwandige starre aluminium of RVS voering of een buigbare kunststof of RVS voering. Kitten van verbindingen is bij kunststof afvoer bovendien verboden.`
    },
    {
      vraag: `Je hebt een kunststof rookgaspijp van fabrikant A en een bocht van fabrikant B, beide CE-gekeurd en T120. Mag je ze combineren?`,
      opties: [
        `Alleen als de fabrikant van het systeem dat toelaat. Bij concentrische systemen geldt het verbod zonder de KE83-uitzondering`,
        `Ja, want beide zijn CE-gekeurd en T120, dus ze zijn technisch gelijkwaardig en zonder toestemming van de fabrikant uitwisselbaar`,
        `Ja, als je de afdichtring extra insmeert met vaseline, want dat dicht de verbinding beter af`,
        `Alleen als beide onderdelen dezelfde kleur hebben, want de kleur laat zien dat ze bij elkaar horen`
      ],
      goed: 0,
      uitleg: `Componenten van verschillende fabricaten mengen mag alleen als de systeemfabrikant dat toelaat, en bij concentrische systemen geldt het verbod zonder de uitzondering voor enkelwandig metaal (KE83). Vaseline is voor afdichtringen bovendien nooit toegestaan (les 8.4). Dezelfde temperatuurklasse zegt niets over de pasvorm van de verbinding.`
    },
    {
      vraag: `Wat betekent T120 op het label van een kunststof afvoer volgens EN 14471?`,
      opties: [
        `Dat de afvoer bij een brand minimaal 120 minuten brandwerend is`,
        `Dat de afvoer 120 Pa overdruk aankan`,
        `Dat de afvoer voor toestellen met maximaal 120 °C rookgastemperatuur is`,
        `Dat de afvoer minimaal 120 mm afstand tot brandbaar materiaal nodig heeft`
      ],
      goed: 2,
      uitleg: `T120 is de temperatuurklasse: voor toestellen met maximaal 120 °C rookgastemperatuur. De maximale overdruk staat in de klasse H1 (5000 Pa) en de afstand tot brandbaar materiaal in de klasse O20 (minimaal 20 mm).`
    }
  ],
  kaarten: [
    { voor: `Waarom condenseert het rookgas in de afvoer van een HR-toestel?`, achter: `Het rookgas koelt onder het dauwpunt (circa 54 tot 56 °C bij gangbare instelling). Het condensaat is zuur, dus de afvoer moet bestand zijn tegen natte rookgassen (klasse W).` },
    { voor: `Wat betekent T120?`, achter: `Temperatuurklasse: voor toestellen met maximaal 120 °C rookgastemperatuur. Kunststof afvoer is hiervoor bedoeld.` },
    { voor: `Welke materialen zijn volgens fabrikanten toegestaan voor rookgasafvoer van condenserende toestellen?`, achter: `Kunststof (T120), roestvast staal en dikwandig aluminium, mits CE-gekeurd en geschikt voor HR-toestellen.` },
    { voor: `Waarom mag dunwandig aluminium niet?`, achter: `Condensaat tast aluminium aan, en dunwandige aluminium afvoeren kunnen door corrosie gaan lekken.` },
    { voor: `Mag je materialen of fabricaten in een afvoer mengen?`, achter: `Alleen als de systeemfabrikant dat toelaat. Bij concentrische systemen geldt het verbod zonder de uitzondering voor enkelwandig metaal (KE83). Koppelmethoden verschillen per fabrikant.` },
    { voor: `Is EN 14471 een installatienorm?`, achter: `Nee, het is een productnorm voor systeemschoorstenen met kunststof binnenbuis. Mengverbod en afschot staan in voorschriften van fabrikant en Rogafa.` },
    { voor: `Wat is de voorwaarde voor een afvoer in een bestaand bouwkundig kanaal?`, achter: `Niet direct aansluiten: er komt een luchtdichte, inspecteerbare voering van dikwandig aluminium, RVS of buigbare kunststof.` }
  ],
  bronnen: ['RGA-30', 'RGA-43', 'RGA-44', 'RGA-45', 'RGA-46', 'RGA-47', 'RGA-48', 'RGA-49', 'RGA-53', 'RGA-66', 'RGA-81', 'VER-16', 'VER-21', 'VER-23', 'NRM-19', 'NRM-22', 'NRM-23', 'OPS-14']
},

/* ------------------------------------------------------------------ 8.4 */
{
  id: 'm08l04',
  nr: '8.4',
  titel: 'Monteren: afschot, beugelen en dilatatie',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt een afvoer volgens de fabrikantinstructies monteren met correct afschot, beugels en ruimte voor uitzetting.',
  videos: [
    { taal: 'nl', titel: 'Een veilige rookgasafvoer, deel 3: afschot (Ubbink Nederland)', yt: 'sbpzTM1UioU', duur: '±1 min, 2019' },
    { taal: 'nl', titel: 'Rolux kunststof beugel 80 PP: altijd beugelen om de mof (Ubbink International)', yt: 'XZi0XRsbMwk', duur: '±1 min, 2013' },
    { taal: 'en', titel: 'How do I measure and fit the flue correctly? (Ideal Heating)', yt: 'mss_D8_6LZY', duur: '±2 min, 2022' }
  ],
  tekst: `
## Wat staat waar?

Het Bbl stelt prestatie-eisen aan de rookgasafvoer en schrijft geen afschot, beugelafstand, insteekdiepte of dilatatie voor. Die staan in de voorschriften van de fabrikant en in NPR 3378. BRL 6000-25 eist dat je het afvoersysteem plaatst volgens de voorschriften van de fabrikant van het afvoersysteem én van het toestel (zie [les 1.5](les:m01l05)). De waarden hieronder (Rogafa, Ubbink) verschillen per fabrikant en per systeem: lees altijd het voorschrift van het systeem dat je monteert.

## Afschot: naar het toestel

Horizontale rookgasleidingen liggen met een afschot van 3 graden, dus **50 mm per meter**, naar het toestel toe. Dan kan condens terugstromen naar het toestel in plaats van in de leiding te blijven staan. Rekenvoorbeeld: een horizontaal deel van 1,8 m geeft 1,8 x 50 = 90 mm hoogteverschil, met het laagste punt bij het toestel. Rekenkundig is 3 graden circa 52 mm per meter (één Ubbink-document noemt 5,6 cm, wat niet klopt): houd 50 mm per meter als minimum aan.

## Beugelen

| Wat | Regel (Rogafa, Ubbink) |
|---|---|
| Horizontale en niet-verticale leidingen | Maximaal 1 m tussen beugels |
| Verticale leidingen | Maximaal 2 m, gelijkmatig verdeeld |
| Eerste beugel | Maximaal 0,5 m van het toestel. Elk systeem heeft minstens een beugel |
| Elke bocht en verlengbuis | Fixerend beugelen op of nabij de mof. Uitzondering: een kort toestelaansluitstuk waarbij beide verlengbuizen rond de eerste bocht korter zijn dan 0,25 m |
| Laatste element voor de doorvoer of schacht | Altijd beugelen |
| Element langer dan 1 m (horizontaal) of 2 m (verticaal) | Schuivende beugel(s) tussen twee moffen (Ubbink) |
| Vrijstaand deel langer dan 1,5 m, zoals een dakdoorvoer | Zekeren tegen wind en sneeuw (Ubbink) |
| Kunststof luchttoevoer naast een metalen rookgasleiding | Minimaal 35 mm afstand (Rogafa) |

Oudere documentatie noemt nog 2 m horizontaal: achterhaald. Bij trekvaste verbindingen volg je het productvoorschrift.

## Verbinden en insteken

Kunststof rookgasafvoer wordt gemaakt met steekverbindingen met afdichtringen. Verbindingen kitten, schuimen of plakken (bijvoorbeeld met PUR of siliconen) is verboden, en ze worden niet geschroefd of geparkerd. De metalen buitenpijp van een concentrisch systeem mag wel geschroefd of geparkerd worden. Verder:

- De minimale insteeklengte van moffen en spie-einden is 40 mm na montage. Bij aansluiting op een schacht steken de stompen na het plaatsen van brandmanchetten minimaal 50 mm vrij in. De aansluiting op het toestel zelf kan een andere insteekdiepte hebben: bij een Remeha Calenta is dat 30 mm.
- Smeer afdichtringen alleen in met het door de fabrikant voorgeschreven middel of met water of maximaal 1 procent zeepoplossing, nooit met vet, vaseline of olie.
- Zaag haaks, schuin de rand af (afschuinen) en ontbraam, zodat je de afdichtring niet beschadigt.

## Dilatatie: uitzetting

Een warme afvoer zet uit. Zit een leiding klem, dan bouwt zich spanning op in de verbindingen. Ubbink schrijft voor de pijpen maximaal in elkaar te schuiven en voor het beugelen 10 mm terug te trekken (10 mm is voldoende voor buizen tot 2 m, en de insteekdiepte blijft minimaal 40 mm). In de herziene Rogafa-checklists (november 2024) staat die regel niet meer, maar wel een maximale beugelafstand, minimaal 40 mm insteeklengte en de eis **monteer spanningsvrij**. Of de 10 mm-regel is vervallen, is niet vastgesteld. Volg daarom het voorschrift van de fabrikant van het systeem dat je monteert, en monteer altijd spanningsvrij.

## Condens onder overdruk

Werkt de afvoer op overdruk, dan is een sifon nodig met een waterslot dat groter is dan de maximaal optredende druk. Condensleidingen hebben een doorsnede van minimaal 13 mm en zijn tegen vorst beschermd. De sifon moet bereikbaar zijn voor reiniging en inspectie (Ubbink PP T120).

!!! kern Controleer na de montage, en leg het vast
Loop na de montage elke verbinding na: zit de afdichtring erin en op de juiste plek, is er geen kit of lijm gebruikt, liggen afschot en beugels goed en zit de leiding spanningsvrij? Ontbreekt een afdichtring, dan breng je alsnog een originele ring van de juiste maat aan. Typische fouten: mengen van fabricaten, ontbrekende of beschadigde ringen, te weinig of verkeerd geplaatste beugels, ontbrekend of omgekeerd afschot, kitten of plakken. Het opleveringsrapport van BRL 6000-25 vraagt naar plakken, kitten, lijmen, schroeven, beugeling en lekkage.
!!!
`,
  checklist: [
    'Ik leg horizontale rookgasleidingen af met het afschot uit het voorschrift van het systeem (Rogafa en Ubbink: minimaal 50 mm per meter) naar het toestel',
    'Ik ken de beugelafstanden (horizontaal 1 m, verticaal 2 m) en weet dat ze per systeem uit het voorschrift komen',
    'Ik weet dat kitten, plakken en schuimen van kunststof verbindingen verboden is en welk smeermiddel wel mag',
    'Ik monteer spanningsvrij en volg voor dilatatie het voorschrift van de fabrikant',
    'Ik controleer na de montage afdichtringen, afschot, beugels en insteeklengte'
  ],
  quiz: [
    {
      vraag: `Waarom moet een horizontale rookgasleiding afschot naar het toestel hebben?`,
      opties: [`Zodat condens kan terugstromen naar het toestel`, `Omdat het Bbl 3 graden voorschrijft`, `Zodat de leiding minder uitzet`, `Zodat het rookgas sneller en met minder weerstand naar buiten stroomt`],
      goed: 0,
      uitleg: `Het afschot van 3 graden (50 mm per meter) loopt naar het toestel, zodat condens kan terugstromen. Het percentage komt uit fabrikant- en Rogafa-voorschriften, niet uit het Bbl. Het afschot heeft niets met uitzetting of stroomsnelheid te maken.`
    },
    {
      vraag: `Wat is de maximale beugelafstand voor een horizontale rookgasleiding volgens Rogafa en Ubbink?`,
      opties: [`2 m`, `0,5 m`, `1 m`, `1,5 m`],
      goed: 2,
      uitleg: `Horizontaal maximaal 1 m en verticaal maximaal 2 m. Een oudere fabrikantdocumentatie noemt nog 2 m voor horizontale leidingen: dat is achterhaald. De waarde geldt per systeem, dus controleer het voorschrift van het systeem dat je monteert.`
    },
    {
      vraag: `Een kunststof verbinding lijkt licht te lekken. Een collega wil hem met siliconenkit dichtzetten. Wat doe je?`,
      opties: [`Dat mag alleen bij het toestelaansluitstuk`, `Nee: kitten, schuimen of plakken van verbindingen is verboden. Controleer of de afdichtring aanwezig en goed geplaatst is en herstel de verbinding volgens het voorschrift`, `Dat mag als de kit zuurvrij is`, `Dat mag als je er ook een beugel bij plaatst`],
      goed: 1,
      uitleg: `Kunststof afvoer wordt met steekverbindingen en afdichtringen gemaakt. Kitten is verboden, en een ontbrekende ring breng je alsnog aan met een originele ring van de juiste maat. Een lekkende verbinding op overdruk is een direct risico.`
    },
    {
      vraag: `Waarmee mag je een afdichtring van een kunststof afvoer insmeren?`,
      opties: [
        `Met het door de fabrikant voorgeschreven middel, of met water of maximaal 1 procent zeepoplossing`,
        `Met vaseline, dat is glad en veilig en tast de rubberen afdichtring niet aan zolang je het dun aanbrengt`,
        `Met motorolie, want die blijft langer glad dan water of zeep`,
        `Met zuurvrije vaseline, want die tast het rubber van de ring niet aan`
      ],
      goed: 0,
      uitleg: `Alleen het voorgeschreven middel (bijvoorbeeld Centrocerin bij Ubbink), water of maximaal 1 procent zeepoplossing. Vet, vaseline, zuurvrije vaseline en olie zijn nooit toegestaan.`
    },
    {
      vraag: `Wat is de minimale insteeklengte van een mof na montage volgens Rogafa en Ubbink, en wat geldt op het toestel zelf?`,
      opties: [`40 mm overal, ook op het toestel`, `10 mm na montage, en op het toestel ook 10 mm, want de dilatatie vraagt om ruimte`, `40 mm na montage, en op het toestel de waarde uit de handleiding (bij een Remeha Calenta 30 mm)`, `50 mm overal, zowel bij de moffen in de leiding als bij de aansluiting op het toestel en op de schacht`],
      goed: 2,
      uitleg: `40 mm na montage voor moffen en spie-einden, 50 mm vrij bij aansluiting op een schacht na het plaatsen van brandmanchetten. De aansluiting op het toestel kan afwijken: bij een Remeha Calenta is dat 30 mm. Daarom lees je altijd ook de handleiding van het toestel.`
    },
    {
      vraag: `Een Ubbink-voorschrift zegt dat je kunststof pijpen 10 mm terugtrekt voor het beugelen, de herziene Rogafa-checklist van 2024 noemt dat niet. Wat doe je?`,
      opties: [
        `Je volgt het voorschrift van de fabrikant van het systeem dat je monteert en monteert in elk geval spanningsvrij`,
        `Het Rogafa-document gaat voor, dus je trekt niet terug`,
        `Je trekt altijd 10 mm terug, bij elk systeem`,
        `Je kiest zelf een waarde van 5 mm`
      ],
      goed: 0,
      uitleg: `Of de regel is vervallen of alleen niet in de checklist staat, is niet vastgesteld. De BRL 6000-25 eist dat je de voorschriften van de fabrikant van het afvoersysteem volgt. Spanningsvrij monteren komt in de herziene checklist wel voor.`
    }
  ],
  kaarten: [
    { voor: `Welk afschot noemen Rogafa en Ubbink voor een horizontale rookgasleiding en waarheen?`, achter: `3 graden, dus minimaal 50 mm per meter, naar het toestel, zodat condens kan terugstromen. Controleer het voorschrift van het systeem.` },
    { voor: `Wat zijn de maximale beugelafstanden volgens Rogafa en Ubbink?`, achter: `Horizontaal 1 m, verticaal 2 m (gelijkmatig verdeeld), eerste beugel maximaal 0,5 m van het toestel. Per systeem controleren.` },
    { voor: `Mag je een kunststof rookgasverbinding kitten of plakken?`, achter: `Nee. Kitten, schuimen en plakken zijn verboden. De verbinding is een steekverbinding met afdichtring.` },
    { voor: `Waarmee smeer je een afdichtring in?`, achter: `Met het voorgeschreven middel of water of maximaal 1 procent zeepoplossing. Nooit met vet, vaseline of olie.` },
    { voor: `Wat is de minimale insteeklengte van moffen en spie-einden na montage?`, achter: `40 mm. Op het toestel zelf kan de handleiding iets anders noemen (Remeha Calenta: 30 mm).` },
    { voor: `Waar staan afschot, beugelafstand en insteekdiepte van een afvoer?`, achter: `In de voorschriften van de fabrikant en NPR 3378. Het Bbl stelt alleen prestatie-eisen.` },
    { voor: `Wat is de instructie voor dilatatie in de herziene Rogafa-checklists?`, achter: `Monteer spanningsvrij. De oudere regel om 10 mm terug te trekken staat in Ubbink-instructies; volg het voorschrift van het systeem.` }
  ],
  bronnen: ['NRM-21', 'INS-33', 'INS-58', 'RGA-50', 'RGA-51', 'RGA-54', 'RGA-55', 'RGA-56', 'RGA-57', 'RGA-59', 'RGA-60', 'RGA-62', 'RGA-63', 'RGA-64', 'RGA-83', 'RGA-84']
},

/* ------------------------------------------------------------------ 8.5 */
{
  id: 'm08l05',
  nr: '8.5',
  titel: 'Uitmonding, verdunning en rookgasrecirculatie',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt beoordelen of een uitmonding goed zit, de verdunning van rookgas begrijpen en herkennen wanneer rookgas opnieuw wordt aangezogen.',
  videos: [
    { taal: 'nl', titel: 'Montagevideo dakdoorvoer tegen recirculatie van rookgassen (Ubbink Nederland)', yt: 'nnMpundA40A', duur: '±4 min, 2022' },
    { taal: 'en', titel: 'Flue guard requirements: afstanden en hoogtes per type (Universal Skills, VK)', yt: 'hpcD-uGhatg', duur: '±3 min, 2022' },
    { taal: 'en', titel: 'Can a boiler flue plume management kit fix an illegal terminal position? (Tomkat Gas Training, VK)', yt: 'b9qmeWNGP2s', duur: '±16 min, 2025' }
  ],
  tekst: `
## Waar mag een uitmonding zitten?

Drie bronnen bepalen dat, in deze volgorde van gezag: het Bbl (wettelijke prestatie-eisen), de fabrikant van toestel en afvoer, en NPR 3378-60:2022 (een leidraad bij NEN 2757-1 en -2 over goede werking, hinder en verdunning van uitmondingen). De cijfers van de NPR staan achter een betaalmuur en zijn in deze cursus niet overgenomen: hinderafstanden en verdunningsafstanden zoek je op bij de fabrikant en in NPR 3378-60.

Wat het Bbl voor **nieuwbouw** vraagt (art. 4.138 en 4.139):

| Onderwerp | Waarde |
|---|---|
| Uitmonding niet boven het dakvlak: afstand tot de perceelsgrens, gemeten langszij aan de uitwendige scheidingsconstructie | Minimaal 1 m |
| Idem, gemeten loodrecht daarop | Minimaal 2 m |
| Uitmonding boven een constructieonderdeel of aansluitend terrein | Minimaal 0,3 m boven de bovenzijde, tegen afsluiting door vuil of sneeuw |
| Verbrandingsluchtopening boven een constructieonderdeel of terrein | Ook minimaal 0,3 m |
| Instroomopening voor verbrandingslucht: afstand tot de perceelsgrens, loodrecht (niet voor een opening in een dak) | Minimaal 2 m |
| Verdunningsfactor van rookgas van gasgestookte toestellen bij de instroomopening van een voorziening voor luchtverversing | Niet groter dan 0,01 |

Grenst het perceel aan een openbare weg, water of groen, dan meet je tot het hart daarvan. Voorzieningen buiten het perceel tellen bij de verdunningsbepaling niet mee. Voor niet-gasgestookte toestellen is de grens 0,0015. Bij **verbouw** gelden de plaatseisen voor een nieuw geïnstalleerde afvoer, behalve bij vervanging van een bestaande voorziening waarbij de plaats van de uitmonding niet wijzigt (art. 5.16). In bestaande bouw zonder wijziging is er geen plaatseis voor de uitmonding.

## Wat is verdunning?

Rookgas verlaat de uitmonding en mengt met buitenlucht. De verdunningsfactor (bepaald volgens NEN 2757) is een maat voor hoeveel rookgas er nog overblijft op de plek van een opening waardoor lucht het gebouw in kan. Hoe lager de factor, hoe sterker het rookgas verdund is. Zo voorkomt het Bbl dat een uitmonding rookgas naar een ventilatieopening brengt. Een fabrikant noemt daarnaast 0,5 m tot dakranden en gebouwhoeken, en NPR 3378-60 (herzien) staat een uitmonding onder een doorlopend balkon niet meer toe voor nieuwe of gewijzigde systemen (bron: vakblad Installatie.nl). Die 0,5 m is geen wettelijke afstand en de balkonregel staat in een NPR, niet in het Bbl.

Een HR-toestel geeft sterk afgekoelde rookgassen af. Bij een geveldoorvoer zie je daardoor een rookpluim. Denk bij de plek ook aan hinder, en houd bij een C53 de openingen niet op tegenover elkaar liggende gevels (fabrikanteis).

!!! kern Verdunning beschermt de lucht die het gebouw in gaat
De uitmonding mag geen rookgas naar een opening brengen waardoor lucht het gebouw inkomt. De wet drukt dat uit in een verdunningsfactor van maximaal 0,01 bij gas. Afstanden en berekeningen: NPR 3378-60 en de fabrikant.
!!!

## Rookgasrecirculatie: rookgas dat weer wordt aangezogen

Bij recirculatie komt rookgas via de luchttoevoer weer het toestel in. Bij een concentrisch systeem kan dat door winddruk rond de uitmondingskap gebeuren, of door een interne lekkage in het systeem. Je controleert het zo:

1. Meet met gesloten mantel de CO2-concentratie op het meetpunt van de verbrandingsluchttoevoer van het toestel.
2. Vergelijk met de buitenluchtwaarde (buitenlucht bevat circa 0,04 procent CO2).
3. Een goed werkend systeem geeft de buitenluchtwaarde. Door winddruk zijn waarden tot circa 1 procent CO2 toelaatbaar. Veel hogere waarden wijzen op interne lekkage en vragen nader onderzoek.

Volg voor de meetprocedure de voorschriften van toestel- en afvoerfabrikant. Fabrikanten laten bij storingen met vlamverlies (ionisatiefout) of een recirculatiebeveiliging de luchttoevoer en rookgasafvoer controleren op verstopping en recirculatie. Dat symptoom is toestelspecifiek en de oorzaak is niet altijd recirculatie. Een lekkende of ontbrekende afdichtring is een mogelijke oorzaak van interne lekkage (les 8.4).

## Voorbeeldcasus

Een concentrisch C13-toestel geeft af en toe een ionisatiefout (vlamverlies). Je meet met gesloten mantel 0,9 procent CO2 op de luchttoevoer (verzonnen getal). Dat past bij winddruk en wijst niet op interne lekkage. Zoek de oorzaak van het vlamverlies elders, bijvoorbeeld een verstopping. Meet je 4 procent, dan is er interne lekkage: nader onderzoek naar het systeem, bijvoorbeeld naar de afdichtingen.
`,
  checklist: [
    'Ik weet dat het Bbl voor de uitmonding 1 m, 2 m en 0,3 m en een verdunningsfactor van 0,01 noemt, en waar hinderafstanden staan',
    'Ik kan uitleggen wat verdunning is en waarom een uitmonding geen rookgas naar een ventilatieopening mag brengen',
    'Ik weet hoe ik recirculatie controleer: CO2 op de luchttoevoer, gesloten mantel, tot circa 1 procent door wind toelaatbaar',
    'Ik weet dat de plaatseis bij vervanging op dezelfde plaats niet geldt, maar dat de conditie van de afvoer wel telt'
  ],
  quiz: [
    {
      vraag: `Hoe hoog moet een uitmonding volgens het Bbl minimaal boven een constructieonderdeel of het aansluitende terrein liggen?`,
      opties: [`0,3 m`, `0,5 m`, `1 m`, `2 m`],
      goed: 0,
      uitleg: `Art. 4.138 lid 6 Bbl vraagt minimaal 0,3 m boven de bovenzijde, om afsluiting door vuil of sneeuw te voorkomen. Een fabrikant noemt 0,5 m tot dakranden en gebouwhoeken: dat is een fabrikantvoorschrift en geen Bbl-afstand.`
    },
    {
      vraag: `Wat is de maximale verdunningsfactor van rookgas van een gasgestookt toestel bij de instroomopening van een voorziening voor luchtverversing?`,
      opties: [`0,0015`, `0,1`, `1`, `0,01`],
      goed: 3,
      uitleg: `Volgens art. 4.138 Bbl is dat 0,01 voor gasgestookte toestellen. 0,0015 geldt voor niet-gasgestookte toestellen. Hoe lager de factor, hoe sterker het rookgas verdund is.`
    },
    {
      vraag: `Bij een concentrisch systeem meet je met gesloten mantel 0,8 procent CO2 op het meetpunt van de verbrandingsluchttoevoer. Wat is de conclusie?`,
      opties: [
        `Interne lekkage van het systeem`,
        `Past bij een geringe aanzuiging door winddruk en is toelaatbaar (tot circa 1 procent)`,
        `Een defecte sensor van de analyser`,
        `Het toestel moet direct buiten bedrijf`
      ],
      goed: 1,
      uitleg: `Op de luchttoevoer hoort de CO2-waarde gelijk te zijn aan die van de buitenlucht (circa 0,04 procent). Door winddruk rond de uitmondingskap is tot circa 1 procent toelaatbaar. Veel hogere waarden wijzen op interne lekkage.`
    },
    {
      vraag: `Het perceel van een woning grenst aan een openbare weg. Waar meet je de afstand van een nieuwe geveluitmonding tot de perceelsgrens?`,
      opties: [
        `Tot de rand van het trottoir`,
        `Tot de gevel aan de overkant`,
        `Tot het hart van de weg`,
        `Tot de kadastrale grens van de buurman`
      ],
      goed: 2,
      uitleg: `Grenst het perceel aan een openbare weg, water of groen, dan wordt volgens art. 4.138 lid 5 Bbl gemeten tot het hart daarvan.`
    },
    {
      vraag: `Waar vind je hinderafstanden en verdunningsafstanden van een uitmonding?`,
      opties: [
        `In NEN 8078`,
        `In de voorschriften van de fabrikant en in NPR 3378-60, en niet in een vaste waarde die je uit je hoofd weet`,
        `In NEN 1006`,
        `In de Omgevingsregeling als vaste tabel`
      ],
      goed: 1,
      uitleg: `NPR 3378-60:2022 is de leidraad bij NEN 2757 over hinder en verdunning van uitmondingen. NEN 8078 gaat over het gasleidingwerk en NEN 1006 over drinkwater.`
    }
  ],
  kaarten: [
    { voor: `Welke afstanden noemt het Bbl voor een uitmonding niet boven het dakvlak tot de perceelsgrens (nieuwbouw)?`, achter: `Minimaal 1 m langszij aan de uitwendige scheidingsconstructie en minimaal 2 m loodrecht daarop.` },
    { voor: `Hoe hoog boven een constructieonderdeel of terrein ligt een uitmonding volgens het Bbl?`, achter: `Minimaal 0,3 m, om afsluiting door vuil of sneeuw te voorkomen (art. 4.138 lid 6).` },
    { voor: `Wat is de maximale verdunningsfactor bij gasgestookte toestellen volgens het Bbl?`, achter: `0,01 bij de instroomopening van een voorziening voor luchtverversing (0,0015 voor niet-gasgestookte toestellen).` },
    { voor: `Wat is rookgasrecirculatie?`, achter: `Rookgas dat via de luchttoevoer weer het toestel in komt, door winddruk rond de kap of door interne lekkage.` },
    { voor: `Hoe controleer je recirculatie bij een concentrisch systeem?`, achter: `CO2 meten op het meetpunt van de verbrandingsluchttoevoer met gesloten mantel: gelijk aan de buitenluchtwaarde, tot circa 1 procent toelaatbaar door wind.` },
    { voor: `Geldt bij vervanging van een ketel met ongewijzigde uitmonding de plaatseis van het Bbl?`, achter: `Nee (art. 5.16), maar de conditie van de bestaande afvoer moet je wel beoordelen.` }
  ],
  bronnen: ['RGA-66', 'RGA-67', 'RGA-68', 'RGA-69', 'RGA-70', 'RGA-71', 'RGA-72', 'RGA-73', 'RGA-74', 'RGA-77', 'RGA-78', 'RGA-13', 'VER-02', 'CO-47', 'MET-19']
},

/* ------------------------------------------------------------------ 8.6 */
{
  id: 'm08l06',
  nr: '8.6',
  titel: 'Opstellingsruimte: eisen aan de ruimte',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt beoordelen of een opstellingsruimte geschikt is voor een gasverbrandingstoestel en je oordeel onderbouwen.',
  videos: [
    { taal: 'nl', titel: 'Bijzondere technische ruimte met een cv-ketel (Installatie.nl)', yt: 'mbCFMDWqgG0', duur: '±3 min, 2021' },
    { taal: 'nl', titel: 'Onveilige cv-ketelsituatie ontdekt op zolder (Homekeur, bouwkundige keuring)', yt: 'rpghgQZhwcM', duur: '±3 min, 2026' },
    { taal: 'en', titel: 'Ventilation for room-sealed gas appliances (Allen Hart / Viva Training Academy, VK)', yt: 'U-rUMoH-FsA', duur: '±12 min, 2020' }
  ],
  tekst: `
## Wat de wet vraagt en wat niet

De opstellingsruimte weegt zwaar in de toetsmatrijs Vakmanschap CO. Begin bij wat vaststaat:

- **Nieuwbouw:** een woonfunctie heeft een opstelplaats voor een verwarmingstoestel en een opstelplaats voor een warmwatertoestel, met afmetingen die zijn afgestemd op het te plaatsen toestel (Bbl art. 4.176 en 4.177). Het Bbl geeft geen vaste maten of volume voor een cv-ketelruimte. Alleen aanrecht (1,5 x 0,6 m) en kooktoestel (0,6 x 0,6 m) hebben maten (art. 4.178).
- **Bestaande bouw:** in de gelezen artikelen (art. 3.95 en 3.96) stelt het Bbl alleen eisen aan de opstelplaats voor aanrecht en kooktoestel, niet aan een opstelplaats voor een verwarmings- of warmwatertoestel.
- **Brandveilige opstelling:** die staat in NEN 3028 en NPR 3378-22, maar NEN 3028 wordt niet in het Bbl of de Omgevingsregeling aangewezen, en NEN 3028:2022 is sinds 11 maart 2026 ingetrokken (of er een opvolger is, is niet geverifieerd). NPR 3378-22:2023 beschrijft waaraan de opstelling van gastoestellen behoort te voldoen.
- **Afvoer:** de rookgasafvoervoorziening moet brandveilig zijn (NEN 6062 nieuwbouw, NEN 8062 bestaande bouw). In bestaande bouw moet materiaal van de afvoer en in de nabijheid waar meer dan 90 °C kan optreden brandklasse A1 hebben of onbrandbaar zijn.

!!! kern Welke norm hoort hier niet
NEN 1078 en NEN 8078 gaan over het gasleidingwerk, dus niet over de opstelruimte. NEN 1006 gaat over drinkwater. NEN 2767 gaat over conditiemeting van gebouwen en installatiedelen en is geen gas- of afvoernorm. Voor de opstellingsruimte zoek je in Bbl art. 4.176 tot 4.178, NPR 3378-22:2023 en het voorschrift van de fabrikant.
!!!

## Wat de fabrikant vraagt

Een groot deel van wat je aan een opstellingsruimte beoordeelt, komt uit de handleiding van het toestel. Dat zijn voorbeelden en de waarden verschillen per model:

| Onderwerp | Wat fabrikanten zeggen |
|---|---|
| Vorst | Een vorstvrije ruimte, zonder temperatuurwaarde. Interne vorstbeveiliging: bij één Nefit-model schakelt de pomp in onder 7 °C cv-water. Een algemene "5 °C"-eis is niet gevonden |
| Vrije ruimte | Staat op de maattekening van elk toestel. Een algemene "60 cm vrij"-eis is niet gevonden |
| Wand en opslag | Stevige wand die het gewicht van de met water gevulde ketel draagt. Geen brandbare producten of stoffen in of bij de ketel, ook niet tijdelijk (Remeha Calenta) |
| Gesloten kast | De door de fabrikant aangegeven minimummaten en openingen tegen gasophoping en verwarming van de kast. Voor de Remeha Calenta is dat S1 + S2 = 150 cm². Dat is kastventilatie voor dat toestel, geen algemene norm en geen eis voor verbrandingslucht |
| Badkamer | Een gesloten toestel kan volgens Remeha Calenta in een badkamer bij beveiligingsindex IP X4D (zones 2 en 3), met een vaste voeding en een aangesloten luchttoevoerleiding. Een open toestel mag er wettelijk niet staan |
| Kruipruimte, zolder | Geen algemene wettelijke eis gevonden: gebruik het voorschrift van de fabrikant |
Een oudere praktijkrichtlijn (BZK-handreiking, 2014) zegt dat een open toestel niet hoort te hangen in een badkamer of in een ruimte kleiner dan 10 m³. Dat is niet verplicht en niet opnieuw bij NPR 3378-22:2023 gecontroleerd. Wettelijk geldt het verbod op een open toestel in een toilet- of badruimte.

## Zo beoordeel je een opstellingsruimte

Deze werkvolgorde gebruikt de rubrieken van het opleveringsrapport van BRL 6000-25:

1. Meet vóór je werkzaamheden CO in de opstellingsruimte: circa 1,7 m hoog en circa 1 m van het toestel. De waarde op het instrument is leidend. Onder 5 ppm mag je in bedrijf stellen, 5 tot 20 ppm vraagt nader onderzoek en informeren van de opdrachtgever, boven 20 ppm geldt de meldplicht.
2. Bepaal het type toestel (les 8.1) en de manier van luchttoevoer en afvoer.
3. Controleer de montage en de bouwkundige startsituatie, en of de capaciteit van de luchttoevoer voldoet volgens de voorschriften van de fabrikant (les 8.7).
4. Controleer of onderdruk door ventilatie de afvoer kan verstoren en, bij B11, de trek. Bij open toestellen volgt de onderdrukcontrole alleen bij CO tussen 5 en 20 ppm (les 8.7) en de trekcontrole bij B11 alleen bij CO boven 20 ppm.
5. Kijk naar brandveiligheid: brandbare stoffen, afstand tot brandbaar materiaal en de afvoer.
6. Vergelijk met de handleiding: vorst, vrije ruimte, wand, kastopeningen.

## Praktijkgeval

Je vervangt een open geiser die in de badruimte van een bestaande woning hangt. Dat mag niet (art. 3.75 lid 2 Bbl). Je adviseert een gesloten toestel dat volgens de fabrikant in de badruimte mag, of een andere plek.
`,
  checklist: [
    'Ik weet dat het Bbl geen vaste maten of volume voor een cv-ketelruimte geeft en dat de maten uit de handleiding komen',
    'Ik weet welke normen niet over opstellingsruimte gaan (NEN 1078, NEN 8078, NEN 1006)',
    'Ik meet CO in de opstellingsruimte voor mijn werk en ken de drie stappen 5 en 20 ppm',
    'Ik weet dat 60 cm vrij, 5 °C vorstvrij en 140 of 150 cm² geen algemene eisen zijn',
    'Ik weet dat een open toestel niet in een toilet- of badruimte mag'
  ],
  quiz: [
    {
      vraag: `Een collega zegt dat de ketel altijd 60 cm vrije ruimte aan de voorzijde nodig heeft. Wat is de beste reactie?`,
      opties: [
        `Dat klopt, het staat in het Bbl`,
        `Dat klopt, het staat in NEN 8078`,
        `Een algemene eis van 60 cm is niet gevonden: de vrije ruimte staat op de maattekening van elk toestel`,
        `Dat klopt alleen voor combiketels`
      ],
      goed: 2,
      uitleg: `Het Bbl bevat geen maat voor vrije ruimte. Fabrikanten geven toestelspecifieke maten. Een getal dat je uit je hoofd noemt, is geen bron.`
    },
    {
      vraag: `Waar staan de eisen aan de opstelplaats van een verwarmingstoestel in nieuwbouw?`,
      opties: [
        `In Bbl art. 4.176 en 4.177, met NPR 3378-22 voor de opstelling`,
        `In NEN 8078, de norm die de opstelplaats van gastoestellen regelt`,
        `In NEN 1078, de norm die de opstelplaats van nieuwbouw regelt`,
        `In NEN 1006, de norm die de ventilatie van de opstelplaats regelt`
      ],
      goed: 0,
      uitleg: `"NEN 8078 opstelruimte" is een bekende fout: NEN 1078 en NEN 8078 zijn de prestatie-eisen voor een gasvoorziening tot en met 500 mbar. De opstelplaats in nieuwbouw staat in Bbl art. 4.176 tot 4.178, en NPR 3378-22:2023 beschrijft de opstelling van gastoestellen.`
    },
    {
      vraag: `Een ketel hangt in een gesloten kast. Voor een Remeha Calenta staat 150 cm² als minimale doorsnede van de kastopeningen. Wat betekent dat voor jouw kast met een ander toestel?`,
      opties: [
        `Ook 150 cm², want dat is de norm`,
        `Niets algemeens: het is kastventilatie voor dat toestel, dus lees de handleiding van het toestel dat je plaatst`,
        `Altijd minimaal 140 cm²`,
        `Geen openingen nodig`
      ],
      goed: 1,
      uitleg: `150 cm² is een fabrikantvoorschrift voor dat model tegen gasophoping en verwarming van de kast. Het is geen algemene norm en geen eis voor verbrandingslucht. Een getal van 140 cm² is in geen enkele bron gevonden.`
    },
    {
      vraag: `Een open geiser hangt in de badruimte van een bestaande woning. Wat klopt?`,
      opties: [
        `Dat is toegestaan als er minimaal twee deuren tussen de geiser en de douche zitten en de ruimte groter is dan 10 m³`,
        `Dat is toegestaan zolang de geiser onder 15 kW blijft, want dan geldt de vrijstelling ook in de badruimte`,
        `Dat mag niet: een open verbrandingstoestel mag niet in een toilet- of badruimte, ook niet in bestaande bouw`,
        `Dat is alleen toegestaan als de ruimte groter is dan 10 m³`
      ],
      goed: 2,
      uitleg: `Art. 3.75 lid 2 Bbl verbiedt een open verbrandingstoestel in een toilet- of badruimte, zowel in bestaande bouw als in nieuwbouw. De regels over twee deuren en 10 m³ komen uit een oudere niet-verplichte praktijkrichtlijn en maken het niet toegestaan.`
    },
    {
      vraag: `Wat zegt een fabrikant over de temperatuur van een ruimte met een ketel?`,
      opties: [
        `De ruimte moet altijd minimaal 5 °C zijn, want bij een lagere temperatuur schakelt de vorstbeveiliging van de ketel niet meer in`,
        `De ruimte moet vorstvrij zijn, zonder temperatuurwaarde, en het toestel heeft een interne vorstbeveiliging`,
        `De ruimte mag alleen boven 15 °C zijn`,
        `Een ketel mag nooit in een ruimte zonder verwarming, want dan bevriest het condens in de afvoer`
      ],
      goed: 1,
      uitleg: `De gelezen handleidingen eisen een vorstvrije ruimte zonder temperatuurwaarde. Bij één Nefit-model schakelt de pomp in bij cv-water onder 7 °C. Een algemene "5 °C"-eis is niet gevonden.`
    },
    {
      vraag: `Je meet vóór je werk in de opstellingsruimte 7 ppm CO. Wat is de eerste conclusie?`,
      opties: [
        `Je mag in bedrijf stellen, want 7 ppm ligt onder de meldgrens van 20 ppm`,
        `Er is een meldplicht aan de bewoner, de eigenaar, de gemeente en de certificerende instelling`,
        `Je hoeft niets te doen, want een CO-melder gaat pas af bij circa 50 ppm en 7 ppm is dus veilig`,
        `Nader onderzoek naar de oorzaak, die je wegneemt, en de opdrachtgever informeren`
      ],
      goed: 3,
      uitleg: `Tussen 5 en 20 ppm volgt nader onderzoek, wordt de oorzaak weggenomen en de opdrachtgever geïnformeerd. Onder 5 ppm mag in bedrijf worden gesteld, boven 20 ppm geldt de meldplicht van art. 6.46 Bbl.`
    }
  ],
  kaarten: [
    { voor: `Welke maten noemt het Bbl voor de opstelplaats van een cv-ketel in nieuwbouw?`, achter: `Geen vaste maten: de afmetingen moeten zijn afgestemd op het te plaatsen toestel (art. 4.176 en 4.177).` },
    { voor: `Regelt NEN 8078 de opstellingsruimte?`, achter: `Nee, NEN 1078 en NEN 8078 regelen het gasleidingwerk tot en met 500 mbar. Zie Bbl art. 4.176 tot 4.178 en NPR 3378-22:2023.` },
    { voor: `Is 60 cm vrije ruimte of 5 °C vorstvrij een algemene eis?`, achter: `Nee, niet gevonden. Vrije ruimte staat op de maattekening van het toestel, en fabrikanten eisen een vorstvrije ruimte zonder temperatuurwaarde.` },
    { voor: `Waar komt 150 cm² kastopening vandaan?`, achter: `Een fabrikantvoorschrift (Remeha Calenta in een gesloten kast): kastventilatie voor dat toestel. Geen algemene norm en geen eis voor verbrandingslucht.` },
    { voor: `Mag een open verbrandingstoestel in een toilet- of badruimte?`, achter: `Nee, in nieuwbouw (art. 4.135 lid 2) en in bestaande bouw (art. 3.75 lid 2). Een gesloten toestel kan volgens de fabrikant wel.` },
    { voor: `Waar meet je CO in de opstellingsruimte?`, achter: `Circa 1,7 m hoog en circa 1 m van het toestel, voor de werkzaamheden.` },
    { voor: `Welke CO-grenzen gelden in de opstellingsruimte?`, achter: `Onder 5 ppm mag je in bedrijf stellen, 5 tot 20 ppm vraagt nader onderzoek en informeren van de opdrachtgever, boven 20 ppm geldt de meldplicht.` }
  ],
  bronnen: ['OPS-01', 'OPS-02', 'OPS-03', 'OPS-04', 'OPS-05', 'OPS-06', 'OPS-07', 'OPS-12', 'OPS-13', 'NRM-07', 'NRM-10', 'NRM-12', 'NRM-13', 'NRM-16', 'NRM-18', 'RGA-37', 'LUC-04', 'LUC-08', 'WET-44', 'CO-36', 'MET-20', 'INS-34', 'INS-58']
},

/* ------------------------------------------------------------------ 8.7 */
{
  id: 'm08l07',
  nr: '8.7',
  titel: 'Verbrandingslucht en ventilatie: afzuiging, onderdruk en terugslag',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe ventilatie, afzuiging en onderdruk de verbrandingslucht en de afvoer van een toestel beïnvloeden.',
  videos: [
    { taal: 'nl', titel: 'Waarschuwing koolmonoxide: onderhoud je cv-ketel (Loodgieter Den Haag Stad)', yt: 'WGoi5dhNrio', duur: '±3 min, 2024' },
    { taal: 'en', titel: 'Flue flow test and spillage on an open flue boiler (Tomkat Gas Training, VK)', yt: 'W7bN3OJqS4E', duur: '±12 min, 2023' },
    { taal: 'en', titel: 'How air pressure in a house can cause backdraft (Home Performance / Building Performance Center)', yt: '6hdQmsPtFTI', duur: '±8 min, 2022' }
  ],
  tekst: `
## Wat de wet vraagt van de verbrandingslucht

Voor toestellen tot 130 kW moet de voorziening voor de toevoer van verbrandingslucht een capaciteit hebben van minimaal de volgens de toestelspecificaties benodigde capaciteit, bepaald volgens NEN 1087 (nieuwbouw) of NEN 8087 (bestaande bouw). Boven 130 kW is de eis dat de verbranding doeltreffend kan plaatsvinden. Het Bbl noemt dus geen getal: de benodigde hoeveelheid lucht komt uit de specificaties van het toestel. Ook de richting is voorgeschreven: de luchtstroom loopt van de toevoervoorziening naar het toestel.

In een verblijfsruimte met een opstelplaats voor een kooktoestel of een open verbrandingstoestel voor warm water is een voorziening voor luchtverversing van minimaal 21 dm³/s vereist (bestaande bouw, uitgezonderd kook- of warmwatertoestellen boven 15 kW en gesloten warmwatertoestellen). In nieuwbouw geldt 21 dm³/s voor een verblijfsgebied of verblijfsruimte met een opstelplaats voor een kooktoestel.

## Open en gesloten: wie is gevoelig?

- Bij een **open toestel** komt de verbrandingslucht uit de opstelruimte. De luchttoevoeropening van het toestel mag niet worden afgesloten en de noodzakelijke verbrandingsluchtopeningen van de ruimte mogen niet worden verkleind of afgesloten.
- Bij een **gesloten toestel** komt de lucht via een luchttoevoerleiding. Die leiding moet luchtdicht zijn om aanzuiging van valse lucht te voorkomen. Vermijd verbrandingslucht in de nabijheid van een buitenlamp, vanwege aanzuiging van insecten.

## Afzuiging, onderdruk en terugslag

Een afzuigkap of mechanische ventilatie voert lucht uit de woning af. Komt er niet genoeg lucht binnen, zoals in een kierdichte woning, dan ontstaat onderdruk. Open toestellen reageren daar gevoelig op: de rookgassen van een open toestel op een afvoer kunnen dan alsnog de woning worden ingezogen. Rookgas dat zo de ruimte in stroomt in plaats van naar buiten, noemen we terugslag. Een B11BS heeft een bewaking die op blokkade of verstopping van de afvoer reageert (les 8.1).

!!! kern Bij een open toestel is de hele woning je afvoer
Een open toestel trekt zijn lucht en levert zijn rookgas via dezelfde woning. Verandert er iets aan de ventilatie of afzuiging (nieuwe kap, mechanische ventilatie, kierdichting), dan verandert de druk in de woning en dus de werking van je afvoer. De BRL 6000-25 vraagt bij open toestellen onderdruk als gevolg van ventilatieapparatuur te controleren als de CO-waarde in de opstellingsruimte tussen 5 en 20 ppm ligt. Voor kierdichtheid kun je bijlage C van NPR 3378-45 volgen.
!!!

Bij een gesloten toestel op een overdruk-CLV zijn ontbrekende terugslagkleppen een genoemd risico (les 8.8). Verschildruk en trek meet je met apparatuur volgens EN 50379 deel 2.

## Vervuilde lucht

De verbrandingslucht moet vrij zijn van chloor- en fluorverbindingen. Die zijn uitermate corrosief en zitten in spuitbussen, verf, oplosmiddelen, reinigingsmiddelen, waspoeder, wasmiddelen, lijm en pekel. Er mag geen lucht worden aangezogen via ruimten waar deze producten worden gebruikt, zoals een kapsalon, een stomerij, industriële ruimten of ruimten met koelinstallaties. Bij corrosie hierdoor vervalt de garantie. Fabrikanten (ATAG, Vaillant) verbieden sprays, chloorhoudende reinigingsmiddelen, oplosmiddelen en verf in de omgeving van het toestel.

## Getallen die je zult horen

| Bewering | Wat we weten |
|---|---|
| "140 cm² ventilatierooster voor de opstelruimte" | In geen enkele geraadpleegde bron gevonden |
| "150 cm²" | Een fabrikantvoorschrift voor de kastventilatie van één model, geen algemene eis (les 8.6) |
| "120 cm² luchttoevoer" | Een risicofactor voor open toestellen in een BZK-handreiking uit 2014, geen norm |

## Praktijkgeval (verzonnen getallen)

Een klant heeft in een kierdichte woning een nieuwe, krachtige afzuigkap laten plaatsen en klaagt over hoofdpijn en misselijkheid. Je meet in de opstellingsruimte van het open toestel 12 ppm CO. Dat is tussen 5 en 20 ppm: je onderzoekt de oorzaak, waaronder onderdruk door de afzuigkap, neemt die weg voor je in bedrijf stelt, en je informeert de klant. Tot de oorzaak is weggenomen blijft het toestel uit. Is er geen CO-melder, dan adviseer je er een (open toestel zonder melder).

!!! gevaar Boven 20 ppm: stop en meld
Meet je in de opstellingsruimte meer dan 20 ppm CO, dan stel je het toestel niet in bedrijf of neem je het buiten bedrijf, en geldt de meldplicht van art. 6.46 Bbl aan bewoner, eigenaar, gemeente en certificerende instelling. Bij acuut gevaar bel je 112 (zie [les 1.6](les:m01l06)).
!!!
`,
  checklist: [
    'Ik weet dat het Bbl voor verbrandingslucht geen vast getal noemt: de capaciteit volgt uit de toestelspecificaties, bepaald volgens NEN 1087 of NEN 8087',
    'Ik kan uitleggen waarom een afzuigkap in een kierdichte woning een open toestel kan laten terugslaan',
    'Ik weet dat ik bij open toestellen tussen 5 en 20 ppm CO onderdruk door ventilatie controleer',
    'Ik weet dat ik verbrandingslucht niet mag aanzuigen via ruimten met chloor- of fluorverbindingen',
    'Ik weet dat 140, 150 en 120 cm² geen algemene eisen zijn'
  ],
  quiz: [
    {
      vraag: `Een klant met een open toestel in een kierdichte woning krijgt een krachtige afzuigkap. Wat is het risico?`,
      opties: [
        `Het toestel krijgt te veel lucht en gaat te heet branden`,
        `Onderdruk in de woning, waardoor rookgassen van het open toestel de woning in kunnen worden gezogen`,
        `De afvoer van het toestel gaat sneller condenseren`,
        `Er is geen risico, want de kap voert alleen kookdampen af en heeft geen invloed op de luchtdruk in de woning`
      ],
      goed: 1,
      uitleg: `Open toestellen zijn gevoelig voor onderdruk door een afzuigkap of mechanische ventilatie, vooral in kierdichte woningen. De rookgassen kunnen dan alsnog de woning in worden gezogen.`
    },
    {
      vraag: `Een klant wil het ventilatierooster bij zijn open toestel dichtplakken vanwege de tocht. Wat zeg je?`,
      opties: [
        `Dat mag als het rooster klein is, want een open toestel haalt voldoende lucht uit de rest van de woning`,
        `Dat mag als hij een CO-melder plaatst, want die waarschuwt als er te weinig lucht is`,
        `Dat mag in de winter, zolang hij het rooster in de zomer weer vrijmaakt en de woning goed ventileert`,
        `Nee: de noodzakelijke verbrandingsluchtopeningen mogen niet worden verkleind of afgesloten`
      ],
      goed: 3,
      uitleg: `Een open toestel haalt zijn lucht uit de ruimte, dus de verbrandingsluchtopeningen mogen niet worden verkleind of afgesloten. Een CO-melder is een advies en geen vervanging van luchttoevoer.`
    },
    {
      vraag: `In welke richting moet de luchtstroom van de verbrandingsluchtvoorziening lopen volgens het Bbl?`,
      opties: [
        `Van het toestel naar de toevoervoorziening`,
        `Dat maakt niet uit als de capaciteit maar voldoende is`,
        `Van de toevoervoorziening naar het toestel`,
        `Van de opstelruimte naar de afvoer`
      ],
      goed: 2,
      uitleg: `Art. 4.137 lid 3 en art. 3.77 lid 3 Bbl vragen dat de richting van de luchtstroming van de toevoervoorziening naar het toestel loopt.`
    },
    {
      vraag: `Waarom mag een gesloten toestel geen lucht aanzuigen via een kapsalon of een ruimte met spuitbussen?`,
      opties: [
        `Omdat de lucht daar te warm is`,
        `Omdat de lucht chloor- en fluorverbindingen kan bevatten die het toestel corrosief aantasten, waarbij de garantie vervalt`,
        `Omdat daar te weinig zuurstof zit`,
        `Omdat het Bbl dat verbiedt met een vaste afstand`
      ],
      goed: 1,
      uitleg: `Chloor- en fluorverbindingen zitten in onder meer spuitbussen, verf, oplosmiddelen en reinigingsmiddelen en zijn uitermate corrosief. Bij corrosie hierdoor vervalt de garantie. Een vaste afstand noemt het Bbl niet.`
    },
    {
      vraag: `Waarom moet bij een gesloten toestel de luchttoevoerleiding luchtdicht zijn?`,
      opties: [
        `Om aanzuiging van valse lucht te voorkomen`,
        `Omdat de leiding ook rookgas afvoert`,
        `Omdat het toestel dan geen ventilator nodig heeft`,
        `Omdat het toestel dan meer vermogen levert`
      ],
      goed: 0,
      uitleg: `Een lekkende luchttoevoerleiding zuigt valse lucht aan. Luchtdichtheid van de toevoer is dus ook bij een gesloten toestel een montagepunt (les 8.4).`
    }
  ],
  kaarten: [
    { voor: `Welk getal noemt het Bbl voor de capaciteit van de verbrandingsluchttoevoer tot 130 kW?`, achter: `Geen: minimaal de volgens de toestelspecificaties benodigde capaciteit, bepaald volgens NEN 1087 (nieuwbouw) of NEN 8087 (bestaande bouw).` },
    { voor: `In welke richting loopt de verbrandingslucht volgens het Bbl?`, achter: `Van de toevoervoorziening naar het toestel.` },
    { voor: `Waarom is een open toestel gevoelig voor een afzuigkap?`, achter: `De kap veroorzaakt onderdruk in de woning, waardoor rookgassen van het open toestel de woning in kunnen worden gezogen.` },
    { voor: `Wat vraagt de BRL 6000-25 bij open toestellen als ruimte-CO tussen 5 en 20 ppm ligt?`, achter: `Onderdruk als gevolg van ventilatieapparatuur controleren (naast nader onderzoek en de opdrachtgever informeren).` },
    { voor: `Welke stoffen mogen niet in de verbrandingslucht komen?`, achter: `Chloor- en fluorverbindingen uit spuitbussen, verf, oplosmiddelen, reinigingsmiddelen, waspoeder en lijm, bijvoorbeeld uit een kapsalon of stomerij.` },
    { voor: `Is 140 cm² een algemene eis voor het ventilatierooster van een opstelruimte?`, achter: `Nee, dit getal is in geen enkele bron gevonden. Ook 150 cm² is een fabrikantvoorschrift voor één model.` }
  ],
  bronnen: ['LUC-01', 'LUC-02', 'LUC-04', 'LUC-05', 'LUC-06', 'LUC-07', 'LUC-08', 'RGA-07', 'RGA-28', 'RGA-41', 'OPS-06', 'OPS-08', 'OPS-09', 'NRM-11', 'MET-01', 'MET-20', 'ONT-14', 'WET-42', 'WET-44', 'WET-48', 'WET-61']
},

/* ------------------------------------------------------------------ 8.8 */
{
  id: 'm08l08',
  nr: '8.8',
  titel: 'Collectieve afvoer (CLV) en gestapelde bouw',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe een collectief lucht- en rookgassysteem werkt, waarom het extra risico\'s heeft en waarop je let als je er een toestel op aansluit.',
  videos: [
    { taal: 'nl', titel: 'CLV-kanalen controleren in een appartementengebouw (IJmond Content)', yt: 'Q0D_UnR6VWs', duur: '±6 min, 2019' },
    { taal: 'nl', titel: 'Podcast: rookgasafvoerkanalen in gestapelde bouw (VvE Belang)', yt: 'z7kFhwIHx08', duur: '±55 min, 2021' },
    { taal: 'en', titel: 'Vertex flue, SE-duct en U-duct: specialistische en gedeelde afvoersystemen (Tomkat Gas Training, VK)', yt: 'fvfAPT7rE9U', duur: '±13 min, 2022' }
  ],
  tekst: `
## Wat is een CLV?

Een CLV is een collectief systeem waarin elk toestel via een eigen aansluiting is aangesloten op een gemeenschappelijk gecombineerd luchttoevoer- en rookgasafvoerkanaal. De gangbare uitschrijving is Combinatie Luchttoevoer en Verbrandingsgasafvoer. CLV is geen wettelijk gedefinieerde term. Het systeem hoort bij het gebouw en niet bij het toestel.

## De soorten op een rij

| Systeem | Type | Werking | Let op |
|---|---|---|---|
| Onderdruk-CLV | C4 (bijvoorbeeld C43) | Thermische trek, natuurlijke trek in het verticale deel | Historisch type. Volgens het Rogafa/VFK-voorschrift niet geschikt voor moderne HR-toestellen, terwijl BRL 6000-25 bijlage 5 HR-toestellen van type C42 en C43 als vervangingstype op een bestaand CLV noemt (zie hieronder). Vervang dus alleen door exact hetzelfde type |
| Half CLV | C83 | Gemeenschappelijke rookgasafvoer door een schacht, lucht individueel via gevelrooster of schacht | Rookgaszijdig natuurlijke trek |
| Overdruk-CLV | C(10), met ventilator in de luchttoevoer C(10)3 | Ventilatoren in de toestellen persen rookgas en lucht door de kanalen (overdruk in het afvoerkanaal) | Sinds 2004 op de markt |
| Shuntkanaal | Bouwkundig collectief kanaal met natuurlijke trek | Collectieve afvoer, geen CLV | Niet geschikt voor condenserende rookgassen |

Een overdruk-CLV werd aanvankelijk per fabrikant beoordeeld, waarbij het mengen van fabricaten niet was toegestaan. Sinds januari 2017 kunnen dankzij de C(10)-toepassing meerdere merken op één systeem, mits toestellen en systeem aan het voorschrift voldoen. Bij een C(10)3-CLV zijn de gemeenschappelijke kanalen concentrisch met CE-markering, zonder trekonderbreker en met een condensafvoervoorziening onderaan het rookgaskanaal (Rogafa/VFK, een industriedocument en geen wet).

## Waarom heeft een CLV extra risico's?

Fouten in het ene toestel raken de andere woningen:

- **Overdruk-CLV:** lekkende aansluitingen, ontbrekende terugslagkleppen, corrosiegaten in de leiding, en het aansluiten van een open toestel zonder ventilator en zonder terugslagklep.
- **Onderdruk-CLV:** recirculatie via de drukvereffeningsopening bij oudere systemen en een ontbrekende of niet werkende condensopvang onderaan.
- **Shunt:** een HR-toestel met ventilator kan rookgas bij boven- of benedenburen naar binnen blazen.
- **Uitmonding:** verstopping door vogelnestjes of vuil, en een uitmonding die door dakopbouwen of nieuwe hogere bebouwing niet meer in het vrije uitmondingsgebied uitkomt (minder kritisch bij gesloten toestellen onder overdruk).

!!! kern Sluit nooit een toestel aan op iets wat je niet kent
Een bestaand toestel op een CLV vervang je alleen door exact hetzelfde type (bijlage 5 van BRL 6000-25 noemt bijvoorbeeld HR door HR van type C42, C43, C62, C63, C(10)2 of C(10)3), omdat het werkingsprincipe van het CLV niet mag veranderen. Het systeem staat bij het gebouw en jij stelt het toestel in bedrijf: je bent verantwoordelijk voor de veiligheid van de gehele installatie.
!!!

## Wat je doet als je op een CLV werkt

1. **Geschiktheidsverklaring:** is er geen geschiktheidsverklaring van het CLV-systeem, dan adviseer je CO-melders in de opstelruimten van de toestellen (BRL 6000-25 par. 5.2.11), en bij twijfel over de kwaliteit nader onderzoek.
2. **Type:** bepaal het systeem (C4, C8, C(10), shunt) en vervang alleen door hetzelfde type.
3. **Meten:** meet CO in de omgevingslucht van de opstellingsruimte. Bij een concentrisch systeem hoort daar een recirculatiemeting bij: CO2 op de verbrandingsluchttoevoer met gesloten mantel (les 8.5).
4. **Condensafvoer:** een CLV moet een condensafvoer hebben die toegankelijk is voor inspectie en onderhoud. Het condensaat uit het gemeenschappelijke kanaal mag niet via een van de aangesloten toestellen worden afgevoerd.
5. **Terugslag:** bij een overdruk-CLV laat een fabrikant (Intergas) de rookgasklep bij elk onderhoud controleren.

Voor tijdelijk doorgebruik van een bestaand CLV bij gedeeltelijke vervanging gelden strikte voorwaarden (NPR 3378-45:2022 bijlage D, en NPR 3378-48:2025 voor renovatie in gestapelde bouw). Haal termijn en voorwaarden uit de actuele tekst en niet uit je hoofd.

## Certificering

BRL 6000-25 kent twee deelgebieden: (1) toestellen met individuele luchttoevoer en rookgasafvoer, en (2) collectieve luchttoevoer- en rookgasafvoervoorzieningen (CLV). Deelgebied 1 wordt altijd gecombineerd met in bedrijf stellen. Voor een certificaat alleen voor deelgebied 2 gelden geen wettelijke vakbekwaamheidseisen en geen afmeldplicht. Het advies om CO-melders te plaatsen bij een CLV zonder geschiktheidsverklaring hoort bij een installateur met een certificaat voor deelgebied 1 (BRL 6000-25 par. 5.2.11).
`,
  checklist: [
    'Ik kan uitleggen wat een CLV is en dat het bij het gebouw hoort en niet bij het toestel',
    'Ik kan onderdruk-CLV (C4), half CLV (C83), overdruk-CLV (C(10)) en shunt uit elkaar houden',
    'Ik vervang een toestel op een CLV alleen door exact hetzelfde type',
    'Ik adviseer CO-melders als er geen geschiktheidsverklaring van het CLV is',
    'Ik meet bij onderhoud CO in de ruimte en bij concentrisch CLV ook recirculatie'
  ],
  quiz: [
    {
      vraag: `Een collega noemt C4 "een gedeelde schoorsteen". Wat is C4?`,
      opties: [`Een gemeenschappelijke schoorsteen voor meerdere open toestellen zonder eigen luchttoevoer voor elk toestel`, `Een toestel zonder afvoer naar buiten dat zijn rookgas in de opstellingsruimte afgeeft`, `Een individuele dakdoorvoer met concentrische lucht- en rookgasopening voor één toestel`, `Een aansluiting op een gemeenschappelijk CLV-systeem met twee kanalen, dat bij het gebouw hoort`],
      goed: 3,
      uitleg: `C4 is een type C-toestel op een gemeenschappelijk leidingsysteem voor meer dan één toestel met twee kanalen. Het systeem hoort bij het gebouw. Een gedeelde schoorsteen is het niet.`
    },
    {
      vraag: `Van een CLV waarop je werkt is geen geschiktheidsverklaring aanwezig. Wat moet je als installateur volgens BRL 6000-25 adviseren?`,
      opties: [`Het CLV zelf certificeren`, `Niets: de VvE is verantwoordelijk voor het CLV en jij alleen voor je eigen toestel`, `CO-melders adviseren in de opstelruimten van de toestellen`, `De toestellen altijd buiten bedrijf stellen tot er een geschiktheidsverklaring is`],
      goed: 2,
      uitleg: `Zonder geschiktheidsverklaring adviseer je CO-melders in de opstelruimten (par. 5.2.11). Het is een advies en geen plicht om ze te plaatsen. Buiten bedrijf stellen is aan de orde bij ontoelaatbare hoeveelheden CO.`
    },
    {
      vraag: `Wat kenmerkt een half CLV (C83)?`,
      opties: [
        `Twee gemeenschappelijke kanalen, een voor de lucht en een voor het rookgas, die concentrisch boven het dak uitmonden`,
        `Een gemeenschappelijke rookgasafvoer door een schacht met individuele luchttoevoer via gevelrooster of schacht`,
        `Alleen een gemeenschappelijke luchttoevoer`,
        `Een toestel zonder ventilator`
      ],
      goed: 1,
      uitleg: `Bij een half CLV is alleen het rookgaskanaal gemeenschappelijk. De lucht komt individueel van buiten het gebouw. Bij een volledig CLV zijn zowel lucht als rookgas gemeenschappelijk.`
    },
    {
      vraag: `Een HR-toestel met ventilator is aangesloten op een collectief bouwkundig kanaal met natuurlijke trek (shunt). Wat is het risico?`,
      opties: [`Het kanaal gaat sneller roesten`, `Geen risico, want de ventilator zorgt voor voldoende trek`, `Het toestel krijgt te weinig gas`, `Rookgassen kunnen bij boven- of benedenburen naar binnen worden geblazen, en een shunt is niet geschikt voor condenserende rookgassen`],
      goed: 3,
      uitleg: `Een ventilator in een toestel kan rookgas in een kanaal met natuurlijke trek zo sterk voortstuwen dat het bij buren naar binnen komt. Een shuntkanaal is bovendien niet geschikt voor condenserende rookgassen.`
    },
    {
      vraag: `Mag het condensaat uit het gemeenschappelijke kanaal van een CLV via een van de aangesloten toestellen worden afgevoerd?`,
      opties: [`Alleen bij een half CLV`, `Nee: het CLV heeft een eigen condensafvoer die toegankelijk is voor inspectie en onderhoud`, `Ja, via het toestel op de laagste verdieping, want daar loopt het condensaat vanzelf naartoe`, `Ja, als de sifon groot genoeg is`],
      goed: 1,
      uitleg: `Een CLV-systeem moet een toegankelijke condensafvoer hebben en het condensaat mag niet via een van de aangesloten toestellen worden afgevoerd.`
    },
    {
      vraag: `Wat is het verschil tussen een certificaat voor deelgebied 1 en deelgebied 2 van BRL 6000-25?`,
      opties: [
        `Deelgebied 1 is voor toestellen met individuele luchttoevoer en rookgasafvoer en wordt altijd gecombineerd met in bedrijf stellen, deelgebied 2 is voor collectieve voorzieningen (CLV)`,
        `Deelgebied 1 is voor nieuwbouw en deelgebied 2 voor bestaande bouw`,
        `Deelgebied 1 is voor open toestellen en deelgebied 2 voor gesloten`,
        `Er is geen verschil`
      ],
      goed: 0,
      uitleg: `BRL 6000-25 kent deelgebied 1 (toestellen met individuele luchttoevoer en rookgasafvoer) en deelgebied 2 (collectieve luchttoevoer- en rookgasafvoervoorzieningen, CLV). Deelgebied 1 is altijd gecombineerd met in bedrijf stellen.`
    }
  ],
  kaarten: [
    { voor: `Waar staat CLV voor?`, achter: `Combinatie Luchttoevoer en Verbrandingsgasafvoer: een collectief systeem voor gestapelde bouw. Het is geen wettelijk gedefinieerde term.` },
    { voor: `Wat is het verschil tussen onderdruk-CLV en overdruk-CLV?`, achter: `Onderdruk-CLV (C4) werkt op thermische trek. Overdruk-CLV (C(10)) werkt met ventilatoren in de toestellen en overdruk in het afvoerkanaal.` },
    { voor: `Mag je een toestel op een CLV vervangen door een ander type?`, achter: `Nee: alleen door exact hetzelfde type (bijvoorbeeld HR door HR), omdat het werkingsprincipe niet mag veranderen (BRL 6000-25 bijlage 5).` },
    { voor: `Wat adviseer je bij een CLV zonder geschiktheidsverklaring?`, achter: `CO-melders in de opstelruimten van de toestellen.` },
    { voor: `Wat is het risico van een HR-toestel met ventilator op een shuntkanaal?`, achter: `Rookgas kan bij boven- of benedenburen naar binnen worden geblazen, en een shunt is niet geschikt voor condenserende rookgassen.` },
    { voor: `Welke metingen horen bij onderhoud aan een toestel op een concentrisch CLV?`, achter: `CO in de omgevingslucht van de opstellingsruimte en een recirculatiemeting (CO2 op de verbrandingsluchttoevoer).` },
    { voor: `Waar mag het condensaat van een CLV niet langs?`, achter: `Niet via een van de aangesloten toestellen: het CLV heeft een eigen, toegankelijke condensafvoer.` }
  ],
  bronnen: ['WET-27', 'WET-40', 'WET-61', 'RGA-12', 'RGA-15', 'RGA-16', 'RGA-18', 'RGA-22', 'RGA-23', 'RGA-24', 'RGA-25', 'RGA-26', 'RGA-28', 'RGA-29', 'RGA-30', 'RGA-31', 'RGA-32', 'RGA-33', 'RGA-34', 'RGA-77', 'RGA-79', 'INS-37', 'ONT-20']
},

/* ------------------------------------------------------------------ 8.9 */
{
  id: 'm08l09',
  nr: '8.9',
  titel: 'Een bestaande afvoer beoordelen',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt een bestaande afvoer stap voor stap beoordelen en een afkeuring onderbouwen en vastleggen.',
  videos: [
    { taal: 'nl', titel: 'Een veilige rookgasafvoer, deel 5: afvoer meevervangen bij ketelvervanging (Ubbink, via Installatie.nl)', yt: 'Ttjv3p117us', duur: '±1 min, 2020' },
    { taal: 'nl', titel: 'Rookgasafvoer fout aangelegd: levensgevaar (Loodgieter Den Haag Stad)', yt: 'LSNUdg6FteY', duur: '±6 min, 2025' },
    { taal: 'en', titel: 'Dangerous boiler flues: what trainee gas engineers must check when inspecting (Tomkat Gas Training, VK)', yt: 'qUUksVg6Mx8', duur: '±3 min, 2021' }
  ],
  tekst: `
## Waarom je dit elke keer doet

Bij onderhoud en bij vervanging van een toestel beoordeel je ook de afvoer en de luchttoevoer. BRL 6000-25 laat je bij twijfel over de kwaliteit van de rookgasafvoer nader onderzoek adviseren, en de controlelijst voor onderhoud noemt de rookgasafvoer, de luchttoevoer en de rookgas- en luchttransportbeveiliging.

## De volgorde

1. **Meet eerst CO in de opstellingsruimte** (circa 1,7 m hoog, circa 1 m van het toestel). Onder 5 ppm ga je door, 5 tot 20 ppm vraagt onderzoek en informeren, boven 20 ppm meld je.
2. **Bepaal het systeem:** open of gesloten (les 8.1), aansluitwijze (les 8.2), individueel of collectief (les 8.8). Zoek de voorschriften van toestel én afvoer op.
3. **Materiaal en klasse:** is het materiaal geschikt voor het toestel (les 8.3)? Dunwandig aluminium, directe aansluiting op een bouwkundig kanaal, gemengde fabricaten?
4. **Montage:** afschot, beugels, insteek, afdichtringen, geen kit of lijm (les 8.4).
5. **Uitmonding en lucht:** vrij van vuil en nesten, plaats en hoogte (les 8.5). Bij een concentrisch systeem: recirculatiemeting.
6. **Ruimte en ventilatie:** onderdruk, afgesloten roosters, vervuilde lucht (lessen 8.6 en 8.7).
7. **Brandveiligheid:** afstand tot brandbaar materiaal en de afvoer zelf (bestaande bouw: brandklasse A1 of onbrandbaar waar meer dan 90 °C kan optreden).
8. **Meten bij werking:** CO in het verbrandingsgas tegen de fabrikantgrens (ontbreekt die: 50, 200 of 400 ppm voor A, B en C) en trek of verschildruk waar het type dat vraagt.
9. **Conclusie en vastleggen:** goedkeuren, advies of afkeuren, met de gemeten waarden.

## Wat je ziet en wat je doet

| Waarneming | Waarom het een probleem is | Wat je doet |
|---|---|---|
| Dunwandige aluminium afvoer op een HR-toestel | Condensaat tast aluminium aan, lekkage door corrosie | Nader onderzoek, vervanging adviseren |
| Ontbrekende of beschadigde afdichtring | Overdrukafvoeren moeten luchtdicht zijn, ringen kunnen door veroudering lekken | Originele ring van de juiste maat aanbrengen |
| Verbinding met siliconenkit of PUR | Verboden bij kunststof afvoer | Herstellen volgens het voorschrift van het systeem |
| Omgekeerd of ontbrekend afschot | Condens kan niet terugstromen | Corrigeren |
| Verschillende fabricaten of materialen gemengd | Mag alleen als de systeemfabrikant het toelaat | Herstellen of fabrikantverklaring vragen |
| CO2 op de luchttoevoer van een concentrisch systeem ver boven circa 1 procent | Interne lekkage, recirculatie | Nader onderzoek |
## Ketelvervanging en de bestaande afvoer

Bij vervanging van een afvoergebonden toestel moet het bestaande rookgasafvoersysteem gelijktijdig worden vervangen (BRL 6000-25 par. 5.2.13). Het systeem mag alleen blijven als het grondig is gecontroleerd en als "goed" is beoordeeld: een verwachte resterende levensduur van minimaal 15 jaar (beoordeling volgens bijlage B van NPR 3378). De BRL noemt ook een gebruiksperiode van 5 jaar met een nieuwe controle uiterlijk 10 jaar later. Die formulering is niet volledig eenduidig: leg vast op welke basis je besluit. Ubbink laat de afvoer vernieuwen tenzij je aantoont dat hij nog minimaal 15 jaar meegaat of de fabrikant de bestaande onderdelen compatibel verklaart, en bij VR naar HR altijd. Bij strijd geldt de BRL.

## Afkeuren en vastleggen

- Komen bij gebruik ontoelaatbare hoeveelheden CO vrij, dan mag je het toestel niet in bedrijf stellen en neem je het buiten bedrijf (een taak voor een VP).
- Boven 20 ppm CO in de ruimte geldt de meldplicht van art. 6.46 Bbl. Werkt de eigenaar niet mee aan herstel, dan stel je de installatie niet in bedrijf. Alleen de gemeente kan herstel afdwingen.
- Kun je niet bewijzen dat de installatie aan alle eisen voldoet, bijvoorbeeld de kwaliteit van de rookgasafvoer, dan adviseer je nader onderzoek en een CO-melder.
- Leg waarden en conclusie vast in het opleveringsrapport van BRL 6000-25 (afwijkingen en genomen maatregel). Zie [les 1.6](les:m01l06) voor melden en vastleggen.

!!! kern Zonder vastlegging heb je het niet gedaan
Een afkeuring die je niet kunt onderbouwen met een gemeten waarde, een waarneming en het voorschrift waarnaar je verwijst, is een mening. Noteer wat je zag, mat, gebruikte en adviseerde. Een conditiescore volgens NEN 2767 is een beheermethode en geen bewijs van een veilige afvoer. Voor een camera-inspectie is voor deze cursus geen norm voor methode of frequentie gevonden bij individuele afvoeren.
!!!
`,
  checklist: [
    'Ik begin een afvoerbeoordeling met een CO-meting in de opstellingsruimte',
    'Ik loop systeem, materiaal, montage, uitmonding, ruimte, brandveiligheid en metingen langs',
    'Ik weet dat bij vervanging van een afvoergebonden toestel de afvoer wordt vervangen tenzij hij grondig is gecontroleerd en "goed" is bevonden',
    'Ik onderbouw een afkeuring met waarde, waarneming en bron en leg die vast'
  ],
  quiz: [
    {
      vraag: `Je vervangt een VR-toestel door een HR-toestel. De bestaande afvoer ziet er goed uit. Wat is de regel?`,
      opties: [
        `Laten zitten, want het ziet er van buiten goed uit en er is geen lekkage zichtbaar`,
        `Het afvoersysteem moet volgens Ubbink altijd worden vervangen`,
        `Laten zitten als hij minder dan 15 jaar oud is, want dan is de resterende levensduur voldoende`,
        `Alleen vervangen als de klant erom vraagt`
      ],
      goed: 1,
      uitleg: `Bij een VR-toestel dat door een HR-toestel wordt vervangen, moet het afvoersysteem volgens Ubbink altijd worden vervangen: het rookgas van een HR-toestel condenseert en de afvoer moet daarvoor geschikt zijn. Uiterlijk zegt daarover niets.`
    },
    {
      vraag: `Bij een inspectie zie je dat een afdichtring in een kunststof rookgasverbinding ontbreekt. Wat doe je?`,
      opties: [
        `Niets, het lekt maar een beetje en een verbinding op overdruk hoeft niet volkomen dicht te zijn`,
        `Je zet de verbinding dicht met zuurvrije siliconenkit en controleert of hij niet meer lekt`,
        `Je plakt de verbinding met tape`,
        `Je brengt alsnog een originele ring van de juiste maat aan`
      ],
      goed: 3,
      uitleg: `Een ontbrekende afdichtring moet alsnog met een originele ring van de juiste maat worden aangebracht. Kitten en plakken zijn verboden, en overdrukafvoeren moeten luchtdicht zijn.`
    },
    {
      vraag: `Tijdens een inspectie meet je in de opstellingsruimte 12 ppm CO. Wat is de eerste conclusie?`,
      opties: [
        `Meldplicht, want het is boven 5 ppm`,
        `Geen actie, want het is onder 20 ppm`,
        `Nader onderzoek, de oorzaak wegnemen voor je (opnieuw) in bedrijf stelt en de opdrachtgever informeren`,
        `Direct 112 bellen`
      ],
      goed: 2,
      uitleg: `Tussen 5 en 20 ppm volgt nader onderzoek. De meldplicht geldt boven 20 ppm, en 112 bel je bij acuut gevaar of een ernstig vergiftigde bewoner.`
    },
    {
      vraag: `Je kunt niet aantonen dat de rookgasafvoer nog voldoet, maar er is ook geen aantoonbaar defect. Wat adviseer je volgens BRL 6000-25?`,
      opties: [
        `Nader onderzoek naar de afvoer en een CO-melder`,
        `Niets, zolang er geen defect is`,
        `Alleen een CO-melder op de gang`,
        `De afvoer zelf repareren zonder de klant te informeren`
      ],
      goed: 0,
      uitleg: `De BRL laat de installateur bij twijfel over de kwaliteit van de rookgasafvoer nader onderzoek adviseren, en een CO-melder als niet kan worden bewezen dat de installatie aan alle eisen voldoet.`
    },
    {
      vraag: `Een collega onderbouwt een goedgekeurde afvoer met een conditiescore volgens NEN 2767. Wat klopt?`,
      opties: [
        `NEN 2767 is de norm voor rookgasafvoer`,
        `NEN 2767 is een beheermethode voor conditiemeting van gebouwen en geen bewijs van een veilige afvoer`,
        `NEN 2767 is de norm voor het gasleidingwerk`,
        `NEN 2767 is de norm voor verbrandingslucht`
      ],
      goed: 1,
      uitleg: `NEN 2767 gaat over conditiemeting van gebouwen en installatiedelen en is geen gas- of afvoernorm. Het Bbl of de Omgevingsregeling wijst hem niet aan.`
    },
    {
      vraag: `De eigenaar wil een afgekeurde installatie niet laten herstellen. Wat doe je?`,
      opties: [
        `Je stelt hem toch in bedrijf, want de klant is koning`,
        `Je voert het herstel zelf uit zonder opdracht`,
        `Je meldt het aan de netbeheerder en stelt de installatie pas in bedrijf zodra die het herstel heeft goedgekeurd`,
        `Je stelt de installatie niet in bedrijf en legt vast wat je vond. Alleen de gemeente kan herstel afdwingen`
      ],
      goed: 3,
      uitleg: `Als een eigenaar niet wil of kan meewerken aan herstel, stelt de installateur de installatie niet in bedrijf. Een plicht om de netbeheerder te informeren is in wet en schema's niet gevonden.`
    }
  ],
  kaarten: [
    { voor: `Met welke meting begin je een afvoerbeoordeling?`, achter: `Met CO in de opstellingsruimte, circa 1,7 m hoog en circa 1 m van het toestel, voor de werkzaamheden.` },
    { voor: `Wat is de regel voor de bestaande afvoer bij vervanging van een afvoergebonden toestel?`, achter: `Gelijktijdig vervangen, tenzij grondig gecontroleerd en als goed beoordeeld (verwachte resterende levensduur minimaal 15 jaar, BRL 6000-25).` },
    { voor: `Wat is de regel bij vervanging van een VR-toestel door een HR-toestel?`, achter: `Het afvoersysteem moet volgens Ubbink altijd worden vervangen.` },
    { voor: `Wat doe je als een afdichtring in een kunststof afvoer ontbreekt?`, achter: `Alsnog een originele ring van de juiste maat aanbrengen. Kitten of plakken is verboden.` },
    { voor: `Wat adviseer je als je niet kunt bewijzen dat de rookgasafvoer voldoet?`, achter: `Nader onderzoek en een CO-melder.` },
    { voor: `Wat doe je als de eigenaar herstel weigert?`, achter: `De installatie niet in bedrijf stellen en vastleggen. Alleen de gemeente kan herstel afdwingen.` }
  ],
  bronnen: ['WET-42', 'WET-44', 'WET-48', 'WET-49', 'WET-61', 'INS-36', 'INS-58', 'RGA-47', 'RGA-49', 'RGA-50', 'RGA-53', 'RGA-57', 'RGA-59', 'RGA-60', 'RGA-77', 'RGA-80', 'RGA-81', 'RGA-83', 'RGA-84', 'OPS-13', 'ONT-07', 'KLA-05', 'NRM-13', 'MET-14', 'MET-20', 'CO-40']
}

  ]
});
