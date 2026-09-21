/* ==========================================================================
   m18.js - Module 18: Examen en beroepspraktijk
   Lessen 18.1 t/m 18.6 zijn volledig geschreven op basis van
   project/docs/feiten/01-wet-en-certificering.md (WET-, EXA-),
   project/docs/feiten/05-installeren-meten-onderhoud-storingen.md (INS-, MET-, KLA-),
   project/docs/feiten/06-arbo-en-veilig-werken.md (ARB-) en
   project/docs/feiten/19-examen-en-beroepspraktijk.md (BPR-, nieuw voor deze module).
   Bouwt voort op les 1.3 (profielen, examen, verlenging): geen herhaling van die basis.
   ========================================================================== */

CURSUS.addModule({
  id: 'm18',
  nr: 18,
  deel: 2,
  titel: 'Examen en beroepspraktijk',
  ondertitel: 'Van voorbereiding naar topmonteur.',
  niveau: 'Gevorderd',
  studietijd: 7,
  intro: 'Voorbereiding op het theorie- en praktijkexamen, plus klantcommunicatie, administratie, werkvoorbereiding en een leerplan voor na het examen. Let op: deze cursus geeft zelf geen diploma en geen Bewijs van Vakmanschap CO.',
  leerdoelen: [
    'Het theorie-examen doelgericht aanpakken',
    'Het praktijkexamen voorbereiden',
    'Helder en professioneel met klanten communiceren, ook onder druk',
    'Werkbonnen en administratie bijhouden en je aansprakelijkheid begrijpen',
    'Een werkdag voorbereiden en plannen',
    'Een leerplan opstellen om na het examen door te groeien'
  ],
  examen: [
    {
      vraag: `Waarom kan het zijn dat je alle toetsvragen in deze cursus goed beantwoordt, en toch nog geen Bewijs van Vakmanschap CO hebt?`,
      opties: [
        `Omdat de cursus een andere cesuur gebruikt dan de echte toets`,
        `Omdat opleiden en examineren gescheiden zijn`,
        `Omdat de toetsvragen in de cursus over andere onderwerpen gaan dan de toetsmatrijs`,
        `Omdat je ook een mbo-diploma installatietechniek nodig hebt`
      ],
      goed: 1,
      uitleg: `Deze cursus is een voorbereiding, geen examen: opleiden en examineren zijn wettelijk en organisatorisch gescheiden. De cesuur is niet de reden, de cursus volgt juist de negen onderwerpen van de toetsmatrijs, en een mbo-diploma is niet verplicht (het geeft in een aantal gevallen alleen gelijkstelling).`
    },
    {
      vraag: `Welke twee examenonderwerpen wegen het zwaarst in de toetsmatrijs voor het dubbele profiel WI+SO?`,
      opties: [
        `Signaleren en melden, en de CO-melder`,
        `Algemene basiskennis, en rookgasafvoer in gestapelde bouw`,
        `Onderhoud van toestellen en rookgasafvoer, en de opstellingsruimte`,
        `Installeren van het toestel, en rookgasafvoerleidingen aanleggen`
      ],
      goed: 2,
      uitleg: `Onderhoud (8 tot 12 vragen) en de opstellingsruimte (7 tot 9 vragen) wegen het zwaarst. De andere combinaties tellen samen minder vragen.`
    },
    {
      vraag: `Het dubbele profiel Eerste Monteur WI+SO doet zowel een installatie- als een onderhoudsopdracht in het praktijkexamen. Hoeveel tijd staat daarvoor ongeveer?`,
      opties: [
        `Een dagdeel van 2 uur`,
        `Een dagdeel van 4 uur`,
        `Een hele dag (2 keer 4 uur maximaal)`,
        `Een week, verspreid over meerdere examendagen`
      ],
      goed: 2,
      uitleg: `Voor het gecombineerde profiel staat ongeveer een dag (twee dagdelen van maximaal 4 uur) gepland: een opdracht per tak van het vak. Een enkel dagdeel geldt voor een los profiel, een examenweek bestaat niet.`
    },
    {
      vraag: `Tijdens het eindgesprek (methode START) krijg je een casus van een onveilige situatie voorgelegd waarbij de "klant" aandringt om het toestel toch te gebruiken. Wat verwacht de toetsmatrijs van je?`,
      opties: [
        `Dat je meegaat met de klant om het gesprek soepel te laten verlopen`,
        `Dat je de beslissing aan de assessor overlaat, want die speelt de klant`,
        `Dat je onder druk toch een veilige beslissing neemt`,
        `Dat je het gesprek beeindigt zodra de klant aandringt`
      ],
      goed: 2,
      uitleg: `De toetsmatrijs verwacht dat je onder druk een veilige beslissing volhoudt. Meegaan, de beslissing doorschuiven of het gesprek afkappen zijn geen van drieen wat er wordt gevraagd.`
    },
    {
      vraag: `Je rondt op 1 juni 2025 een CO-project af. Tot welke datum bewaar je het projectdossier volgens BRL 6000-25 minstens?`,
      opties: [`1 juni 2027`, `1 juni 2030`, `1 juni 2032`, `1 juni 2035`],
      goed: 3,
      uitleg: `Het projectdossier moet minstens 10 jaar na afronding worden bewaard: 1 juni 2025 plus 10 jaar is 1 juni 2035. De andere datums zijn te kort.`
    },
    {
      vraag: `Een klant spreekt na een fout tijdens het werk het installatiebedrijf aan, niet de monteur persoonlijk. Welke twee wetsartikelen verklaren dat samen?`,
      opties: [
        `Art. 7:661 BW (werknemer) en art. 6:170 BW (werkgever aansprakelijk)`,
        `Art. 6:74 BW (wanprestatie) en art. 6:89 BW (klachtplicht)`,
        `Art. 7:17 BW (non-conformiteit) en art. 7:23 BW (klachttermijn consumentenkoop)`,
        `Art. 6:45 Bbl (certificeringsplicht) en art. 6:46 Bbl (meldplicht)`
      ],
      goed: 0,
      uitleg: `Art. 7:661 BW beschermt de werknemer tegen aansprakelijkheid voor een gewone fout, en art. 6:170 BW maakt de werkgever risicoaansprakelijk tegenover de derde. De andere combinaties gaan over andere onderwerpen: wanprestatie en klachtplicht, garantie bij consumentenkoop, en de CO-certificeringsplicht zelf.`
    },
    {
      vraag: `Waarom kan een assessor tijdens het praktijkexamen vragen naar de kalibratiestatus van je meetinstrument?`,
      opties: [
        `Omdat een niet-gekalibreerd instrument elke meting die je daarna doet, ondermijnt`,
        `Omdat kalibratie wettelijk om de zes maanden verplicht is`,
        `Omdat de assessor de meetwaarde anders niet mag beoordelen`,
        `Omdat een gekalibreerd instrument automatisch een hogere score geeft`
      ],
      goed: 0,
      uitleg: `Zonder gekalibreerd instrument is niet te vertrouwen wat je meet, en dus ook niet de beslissing die je erop baseert. Er is geen vaste wettelijke termijn van zes maanden, de assessor mag de meetwaarde wel beoordelen los van kalibratie, en kalibratie geeft geen automatische scoreverhoging.`
    },
    {
      vraag: `Je bent het niet eens met de uitslag van je theorietoets Vakmanschap CO, en een klant is het niet eens met uitgevoerd installatiewerk bij hem thuis. Waar dienen jij en die klant elk een klacht in?`,
      opties: [
        `Beide keren bij de Geschillencommissie Installerende Bedrijven`,
        `Bij Vakmanschap Techniek voor de toets, bij de Geschillencommissie voor het werk`,
        `Beide keren bij InstallQ`,
        `Bij de gemeente voor de toets, en bij de certificerende instelling voor het werk`
      ],
      goed: 1,
      uitleg: `Een klacht over de toets gaat naar Vakmanschap Techniek (het examenreglement), een klacht van een klant over installatiewerk kan (bij een Techniek Nederland-lid) naar de Geschillencommissie Installerende Bedrijven. De andere combinaties verwarren de routes.`
    },
    {
      vraag: `Een eigenaar wil na een afkeuring niet meewerken aan herstel. Wie kan hem daartoe dwingen?`,
      opties: [
        `Het installatiebedrijf zelf, via een aangetekende brief`,
        `De certificerende instelling van het bedrijf`,
        `De gemeente, als bevoegd gezag`,
        `De TloKB, als stelseltoezichthouder`
      ],
      goed: 2,
      uitleg: `Alleen de gemeente (bevoegd gezag) kan herstel afdwingen. Het bedrijf zelf kan alleen adviseren en niet in bedrijf stellen, de certificerende instelling houdt toezicht op het bedrijf en niet op de eigenaar, en de TloKB handhaaft niet zelf op zulke situaties.`
    },
    {
      vraag: `Wat hebben "de zorg van een goed opdrachtnemer" (art. 7:401 BW) en "het bedrijf draagt de verantwoordelijkheid bij inbedrijfstelling" met elkaar te maken?`,
      opties: [
        `Niets, het zijn twee losse regelingen uit verschillende wetten`,
        `Beide leggen de norm bij het bedrijf, niet bij de monteur zelf`,
        `Het eerste geldt voor de klant, het tweede voor de monteur`,
        `Het eerste is alleen van toepassing bij een schriftelijke overeenkomst`
      ],
      goed: 1,
      uitleg: `Beide regelingen leggen de norm bij het bedrijf dat het werk uitvoert: het moet zich gedragen als een redelijk bekwame vakgenoot, en het draagt de verantwoordelijkheid voor de veiligheid van de hele installatie bij inbedrijfstelling.`
    },
    {
      vraag: `Waarom moet je bij het leren met de toetsmatrijs van 2019 toch voorzichtig zijn?`,
      opties: [
        `Omdat de matrijs inmiddels officieel is ingetrokken`,
        `Omdat het de enige matrijs is, maar de site zelf geen aantallen bevestigt`,
        `Omdat de matrijs alleen voor het enkele profiel geldt, niet voor het dubbele profiel`,
        `Omdat de matrijs alleen praktijkvragen bevat, geen theorievragen`
      ],
      goed: 1,
      uitleg: `De matrijs van 2019 is de enige gepubliceerde bron (gecontroleerd op 20 september 2026), maar de site van Vakmanschap Techniek zelf bevestigt de aantallen niet. Ze is niet ingetrokken, geldt wel voor alle profielen inclusief het dubbele profiel, en gaat over de theorietoets, niet over praktijkvragen.`
    },
    {
      vraag: `Je gebruikt een meetinstrument waarvan de kalibratie is verlopen, maar de meetwaarde valt toevallig binnen de norm en je keurt de installatie goed. Wat is daarvan het gevolg voor je vastlegging?`,
      opties: [
        `Geen gevolg, zolang de meetwaarde binnen de norm valt`,
        `De registratie is minder betrouwbaar: je kunt niet aantonen dat de meting klopte`,
        `Het gevolg geldt alleen voor het meetinstrument, niet voor de goedkeuring zelf`,
        `De klant moet dit zelf controleren voordat hij tekent`
      ],
      goed: 1,
      uitleg: `Een verlopen kalibratie ondermijnt de betrouwbaarheid van de meting en daarmee van de vastlegging en de goedkeuring die erop is gebaseerd. Of de waarde toevallig binnen de norm valt, verandert dat niet, en het raakt wel degelijk de goedkeuring zelf, niet alleen het instrument.`
    },
    {
      vraag: `Je zakt voor het praktijkexamen. Wat is de juiste vervolgstap?`,
      opties: [
        `Wachten op een automatische herkansing na drie maanden`,
        `Het volledige theorie-traject opnieuw doen, want dat is ook verlopen`,
        `Een nieuw praktijkexamen boeken en betalen, eventueel na extra oefenen op de onvoldoende punten`,
        `Overstappen naar een lager profiel, want dat heeft minder examenonderdelen`
      ],
      goed: 2,
      uitleg: `Het resultaat is bindend; je boekt en betaalt een nieuw praktijkexamen. Er is geen automatische herkansing, de al gehaalde theorietoets blijft geldig, en overstappen naar een lager profiel is geen examentechnische oplossing voor een onvoldoende.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 18.1 */
{
  id: 'm18l01',
  nr: '18.1',
  titel: 'Het theorie-examen aanpakken',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt het theorie-examen doelgericht voorbereiden: je kent de vorm, de vraagverdeling voor je profiel, de cesuur en de herkansingsregels.',
  videos: [
    { taal: 'nl', titel: `Werken met het CO certificaat (Techniek Nederland)`, yt: '4ADZbfGLuzQ', duur: `±2 min, 2023` },
    { taal: 'nl', titel: `Examentraining CO vakmanschap (Studium)`, yt: 'Dz1e6_qSR6E', duur: `±1 min, 2021` },
    { taal: 'en', titel: `How to start your ACS gas assessment (Pass Your Gas, VK, ter vergelijking met de theorietoets)`, yt: '5KDEtTvchzM', duur: `±12 min, 2021` }
  ],
  tekst: `
## Wat het theorie-examen van je vraagt

Het theorie-examen Vakmanschap CO maak je digitaal, op een moment en plek die je zelf kiest. De toets duurt ongeveer anderhalf uur en moet in een keer worden afgemaakt: halverwege stoppen telt als afgerond. Je krijgt direct de uitslag.

Voor het dubbele profiel dat jij volgt (Werktuigkundige Installatie en Service en Onderhoud) telt de toets 40 vragen als monteur of 55 vragen als eerste monteur, verdeeld over negen onderwerpen. De slaagnorm is 70%.

| Onderwerp | Vragen (monteur) | Vragen (eerste monteur) |
|---|---|---|
| 1 Algemene basiskennis | 5 | 7 |
| 2 Signaleren en melden onveilige situatie CO | 3 | 3 |
| 3 Opstellingsruimte ontwerpen en beoordelen | 7 | 9 |
| 4 Rookgasafvoerleidingen aanleggen | 7 | 5 |
| 5 Rookgasafvoer in gestapelde bouw | - | 5 |
| 6 Rookgasafvoer controleren en adviseren | 3 | 6 |
| 7 Gasverbrandingstoestel installeren | 5 | 6 |
| 8 Onderhoud toestellen en rookgasafvoer | 8 | 12 |
| 9 CO-melder adviseren, plaatsen, controleren | 2 | 2 |
| **Totaal** | **40** | **55** |

!!! kern Leer naar de toetsmatrijs, niet naar je gevoel
Onderhoud (8 tot 12 vragen) en opstellingsruimte (7 tot 9 vragen) wegen het zwaarst. Besteed je leertijd in die verhouding: een onderwerp met 2 vragen (de CO-melder) verdient minder uren dan een onderwerp met 12.
!!!

## Hoeveel vragen moet je goed hebben?

Rekenvoorbeeld: bij het profiel Eerste Monteur WI+SO (55 vragen, cesuur 70%) is 70% van 55 gelijk aan 38,5 vragen. De toetsmatrijs zegt niet hoe er wordt afgerond, dus reken voor de zekerheid met 39 vragen goed als ondergrens, niet met 38.

## Vraagvormen en valkuilen

De officiele bronnen noemen geen vraagvorm voor de initiele theorietoets. Reken op een praktijkgerichte insteek: een gemeten waarde of een situatie, waarbij je moet beoordelen wat die betekent, niet alleen een definitie opnoemen. Drie valkuilen die voor deze cursus ook golden:

- Een waarde uit een handleiding (een instelwaarde, een storingscode) als algemene regel gebruiken. Op de toets telt de regel uit wet, schema of norm, niet het merk dat jij toevallig kent.
- De grenzen voor CO in de opstellingsruimte (5 en 20 ppm) verwisselen met de grens voor CO in het rookgas (50, 200 of 400 ppm, afhankelijk van het toestel). Dat zijn twee verschillende metingen met twee verschillende doelen.
- Denken dat een norm (NEN, NPR) op de toets letterlijk wordt geciteerd. Normen zijn auteursrechtelijk beschermd: de toets vraagt of je weet wat een norm regelt en waar je hem raadpleegt, niet de normtekst zelf.

## Is de toetsmatrijs nog actueel?

De enige gepubliceerde toetsmatrijs voor de initiele theorietoets is van 15 juli 2019. Op 20 september 2026 stond op de website van de Vakbekwaamheidscommissie nog steeds geen nieuwere versie: alleen de matrijs voor de verlengingstoets is recenter (14 november 2025). Dat betekent niet dat de aantallen zeker kloppen voor jouw toets: de toetsmatrijs is de enige openbare bron, en de site van Vakmanschap Techniek zelf noemt geen aantallen. Vraag bij twijfel de helpdesk van Vakmanschap Techniek.

## Als je zakt

Ben je het niet eens met de uitslag, dan kun je eerst een klacht indienen en, als je het daarna nog oneens bent, in beroep gaan bij de onafhankelijke beroepscommissie uit het examenreglement. Dat verandert niets aan de kernregel: ben je gezakt, dan doe je een nieuwe, betaalde poging. Er is geen minimale wachttijd of maximumaantal pogingen in de officiele bronnen gevonden.

## Wat deze cursus wel en niet is

Deze cursus bereidt je voor, maar is geen vervanging van het examen: je haalt hier geen diploma en geen Bewijs van Vakmanschap CO. Dat haal je alleen bij een door InstallQ geaccrediteerde exameninstelling.
`,
  checklist: [
    `Ik weet hoeveel vragen mijn profiel telt en welke onderwerpen het zwaarst wegen`,
    `Ik heb de gratis zelftest gehaald voordat ik de echte toets boek`,
    `Ik reken de cesuur uit voor mijn eigen profiel in plaats van "70% klinkt wel genoeg" aan te nemen`,
    `Ik weet dat een gezakte toets een nieuwe, betaalde poging vraagt, ook als ik eerst nog een klacht of beroep indien over de uitslag`,
    `Ik weet dat deze cursus geen diploma en geen Bewijs van Vakmanschap CO oplevert`
  ],
  quiz: [
    {
      vraag: `Hoeveel vragen telt de theorietoets voor het profiel Eerste Monteur Werktuigkundige Installatie & Service en Onderhoud?`,
      opties: [`30 vragen`, `40 vragen`, `45 vragen`, `55 vragen`],
      goed: 3,
      uitleg: `55 vragen bij cesuur 70%. 40 is voor de monteur (niet eerste monteur) van het gecombineerde profiel; 30 en 45 zijn de aantallen bij de losse profielen (installatie of service, niet gecombineerd).`
    },
    {
      vraag: `Een klant vraagt waarom zijn ketel niet meer aan mag. Welke opbouw van het gesprek werkt het beste? (Dit gaat over les 18.3, maar de vaardigheid start met kennis van de norm.)`,
      opties: [
        `Eerst de wetsartikelen noemen, dan de meetwaarde, dan het vervolg`,
        `Eerst zeggen dat het niet anders kan, dan uitleggen wat je hebt gedaan`,
        `Eerst het vervolg aankondigen, daarna pas de reden als de klant ernaar vraagt`,
        `Eerst het feit benoemen (wat je meet of ziet), dan de reden, dan het vervolg`
      ],
      goed: 3,
      uitleg: `Feit, reden, vervolg, in die volgorde, sluit aan bij wat een klant nodig heeft om het te begrijpen. Beginnen met wetsartikelen is niet concreet, "het kan niet anders" zonder uitleg roept weerstand op, en de reden pas geven als erom gevraagd wordt werkt averechts.`
    },
    {
      vraag: `Bij het profiel Eerste Monteur WI+SO (55 vragen, cesuur 70%) is 70% van 55 gelijk aan 38,5. Wat is de veiligste aanname voor het minimum aantal goede antwoorden, omdat de afrondingsregel niet is gepubliceerd?`,
      opties: [
        `37 vragen goed, want afronden naar onder is gebruikelijk`,
        `38 vragen goed, want dat ligt het dichtst bij 38,5`,
        `39 vragen goed, want bij onduidelijke afronding ga je uit van de hogere grens`,
        `40 vragen goed, om ruim boven de norm te zitten`
      ],
      goed: 2,
      uitleg: `Zonder gepubliceerde afrondingsregel ga je voor de zekerheid uit van de hogere grens (39), niet van naar onder afronden (37 of 38). 40 is meer dan nodig om als leerdoel na te streven.`
    },
    {
      vraag: `Wat is een reeel risico bij het leren voor de theorietoets vanuit een fabrikanthandleiding die je toevallig goed kent?`,
      opties: [
        `Je leert een instelwaarde die alleen voor dat merk en model geldt als algemene regel`,
        `Je besteedt te veel tijd aan rookgasafvoer, een onderwerp dat op de toets weinig telt`,
        `Je vergeet dat de zelftest een andere cesuur heeft dan de echte toets`,
        `Je verwart de meldgrens van 20 ppm met de grens voor inbedrijfstelling van 5 ppm`
      ],
      goed: 0,
      uitleg: `Het risico van een handleiding is dat een merkspecifieke waarde je algemene kennis vervangt. Rookgasafvoer telt juist relatief zwaar, de zelftest gebruikt dezelfde cesuur van 70% als de echte toets, en de 5- en 20 ppm-grens door elkaar halen is een ander, apart risico dan het leren uit een handleiding.`
    },
    {
      vraag: `Wat gebeurt er als je voor de theorietoets zakt?`,
      opties: [
        `Je krijgt automatisch binnen een maand een herkansing zonder extra kosten`,
        `Je moet sowieso een nieuwe, betaalde poging doen, ook als je eerst een klacht of beroep indient`,
        `Je hoeft niets te doen: de uitslag wordt na verloop van tijd automatisch bijgesteld`,
        `Je krijgt een vrijstelling voor het onderdeel waar je net onder de norm zat`
      ],
      goed: 1,
      uitleg: `Zakken betekent een nieuwe, betaalde poging, ook als je het niet eens bent met de uitslag: een klacht en eventueel daarna beroep bij de beroepscommissie kunnen die uitslag heroverwegen, maar vervangen de herkansing niet. Geen van de bronnen noemt een gratis herkansing, een automatische bijstelling zonder actie, of een deelvrijstelling.`
    },
    {
      vraag: `Waarom kan deze cursus je geen Bewijs van Vakmanschap CO geven, ook niet als je alle toetsvragen in de lessen goed maakt?`,
      opties: [
        `Omdat de cursus niet alle negen examenonderwerpen behandelt`,
        `Omdat opleiden en examineren wettelijk en organisatorisch gescheiden zijn`,
        `Omdat de toetsvragen in deze cursus makkelijker zijn dan de echte toets`,
        `Omdat het Bewijs alleen aan mbo-studenten met een erkend diploma wordt afgegeven`
      ],
      goed: 1,
      uitleg: `Vakmanschap Techniek is de exameninstelling; een opleider zoals deze cursus bereidt voor maar mag zelf geen examens afnemen, tenzij daarvoor door InstallQ geaccrediteerd. De cursus behandelt juist alle negen onderwerpen, de moeilijkheidsgraad is niet de reden, en het Bewijs is niet aan een mbo-diploma gebonden.`
    }
  ],
  kaarten: [
    { voor: `Hoeveel vragen telt de theorietoets voor de Eerste Monteur WI+SO?`, achter: `55 vragen, cesuur 70%. De monteur (niet eerste monteur) van dit dubbele profiel heeft 40 vragen.` },
    { voor: `Welke twee onderwerpen wegen het zwaarst in de toetsmatrijs?`, achter: `Onderhoud van toestellen en rookgasafvoer (8 tot 12 vragen) en de opstellingsruimte (7 tot 9 vragen).` },
    { voor: `Hoe lang duurt de theorietoets en waar maak je hem?`, achter: `Ongeveer anderhalf uur, digitaal, op een zelfgekozen plek en moment, in een keer af te maken.` },
    { voor: `Wat kun je doen als je zakt voor de theorietoets?`, achter: `Een nieuwe, betaalde poging doen. Tegen de uitslag kun je wel een klacht en daarna beroep indienen, maar dat vervangt de herkansing niet.` },
    { voor: `Is de toetsmatrijs van 2019 nog de actuele bron?`, achter: `Het is de enige gepubliceerde matrijs (gecontroleerd 20-9-2026); de site zelf noemt geen aantallen. Vraag bij twijfel de helpdesk.` },
    { voor: `Wat is het risico van leren uit een fabrikanthandleiding voor de theorietoets?`, achter: `Je onthoudt een merkspecifieke waarde als algemene regel, terwijl de toets de regel uit wet, schema of norm vraagt.` },
    { voor: `Geeft deze cursus een Bewijs van Vakmanschap CO?`, achter: `Nee. Opleiden en examineren zijn gescheiden; het Bewijs komt alleen van een door InstallQ geaccrediteerde exameninstelling.` }
  ],
  bronnen: ['EXA-14', 'EXA-15', 'EXA-16', 'EXA-17', 'EXA-20', 'EXA-21', 'EXA-43', 'WET-43', 'WET-44', 'WET-45', 'BPR-23']
},

/* ------------------------------------------------------------------ 18.2 */
{
  id: 'm18l02',
  nr: '18.2',
  titel: 'Het praktijkexamen voorbereiden',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt het praktijkexamen voorbereiden: je weet wat je moet laten zien, hoe de beoordeling werkt en welke fouten je moet vermijden.',
  videos: [
    { taal: 'nl', titel: `Vakmanschap CO: mag een cv-ketel zo worden opgeleverd? (Klimaat Techniek Nederland)`, yt: '67t8BWTh34s', duur: `±1 min, 2026` },
    { taal: 'nl', titel: `CO-certificering webinar deel 3: aan welke eisen moeten monteurs voldoen? (Install-TV)`, yt: 'SkBpRLeJckE', duur: `±4 min, 2021` },
    { taal: 'en', titel: `ACS gas assessment: what's involved (Tomkat Gas Training, VK, ter vergelijking met het praktijkexamen)`, yt: 'Z1P32wBKCIo', duur: `±26 min, 2020` }
  ],
  tekst: `
## Wat het praktijkexamen van je vraagt

Het praktijkexamen bestaat uit drie onderdelen: voorbereiding, werkuitvoering en nazorg. Voor het dubbele profiel duurt het ongeveer een dag (twee dagdelen van maximaal 4 uur), met een installatie-opdracht en een onderhoudsopdracht. Voor een enkel profiel is het een dagdeel van maximaal 4 uur. Je krijgt een zo concreet mogelijke feitelijke werksituatie: een echte opstelling, een echt merk en model, een klacht zoals een klant hem zou formuleren.

De assessor speelt de klant. Dat is geen bijzaak: je moet net zo werken als op een echte klus. Vraag naar bijzonderheden, raadpleeg de fabrikantvoorschriften, leg vast wat je meet en doet, adviseer over de installatie en over een CO-melder, en laat de klant (de assessor) aftekenen.

!!! kern De assessor beoordeelt gedrag, niet alleen het resultaat
Tijdens de uitvoering observeert de assessor je gedrag en handelen (de richtlijnen noemen dit de methode "WAKKER"). Een goed werkend toestel opleveren is niet genoeg als je onderweg belangrijke controles overslaat of niet kunt uitleggen waarom je iets deed.
!!!

## Het eindgesprek

Het examen sluit af met een eindgesprek volgens de methode "START": een concrete casus van een onveilige situatie (aan de hand van een film of foto) en een paar vooraf vastgestelde theorievragen. Signaleren en melden van een onveilige situatie is dus geen apart hoofdstuk maar een verplicht onderdeel van het hele examen, ook van dit gesprek.

## Hardop werken en een afkeuring verantwoorden

De officiele toetsmatrijs formuleert het leerdoel voor de eerste monteur zo: je kunt "zelfs onder druk van de consument altijd zorgen voor een veilige gebruikssituatie ook al betekent dat voor de consument een impopulaire maatregel." Op het examen is de "consument" de assessor, die je bewust onder druk kan zetten. Verwacht wordt dat je:

- de meetwaarde of de bevinding hardop benoemt in plaats van iets stilzwijgend te doen;
- de regel of norm noemt waarop je je beslissing baseert;
- vasthoudt aan een veilige beslissing, ook als de "klant" tegenwerpt dat het toestel toch al jaren zo werkt.

## Praktijkgeval

Tijdens de onderhoudsopdracht meet je in de opstellingsruimte 14 ppm CO. De assessor (in de rol van klant) zegt: "Vorige keer was het ook wat hoog en toen mocht het toestel toch aan blijven." Wat doe je?

Je stelt het toestel niet in bedrijf voordat je de oorzaak hebt gevonden en weggenomen: 14 ppm ligt tussen 5 en 20 ppm, dus onderzoek is verplicht voordat je opnieuw in bedrijf stelt. Je legt uit welke grens je hanteert en waarom, en je informeert de klant. Dat het toestel "vorige keer" ook aanbleef, is geen argument: elke meting staat op zichzelf.

## Wat je meeneemt

Je brengt je eigen, goedgekeurde meetinstrumenten en gereedschap mee; de praktijklocatie levert de opstelling en de materialen. Zorg dat je meetinstrumenten een geldige kalibratie hebben: een assessor kan daarnaar vragen, en een niet-gekalibreerd instrument ondermijnt elke meting die je daarna doet.

## Veelgemaakte fouten

- Alleen het toestel beoordelen en de rest van de installatie (luchttoevoer, rookgasafvoer, opstellingsruimte) overslaan.
- Wel goed meten, maar de bevindingen niet benoemen: de assessor kan alleen beoordelen wat hij ziet en hoort.
- Toegeven aan de "klant" die haast heeft of het toestel toch wil aanhouden.
- Vergeten de klant te laten aftekenen of te adviseren over een CO-melder.

## Resultaat

Het resultaat van het praktijkexamen is bindend. Zak je voor een onderdeel, dan boek en betaal je binnen 10 werkdagen herexamen voor dat onderdeel (bij meerdere onvoldoende onderdelen gebeurt dat op dezelfde dag); verzetten van de examendatum zelf kan alleen in overleg met de praktijkorganisatie.
`,
  checklist: [
    `Ik weet uit welke drie onderdelen het praktijkexamen bestaat`,
    `Ik benoem mijn bevindingen en de regel waarop ik mijn beslissing baseer, hardop`,
    `Ik houd een veilige beslissing vast, ook als de "klant" tegenwerpt`,
    `Ik controleer voor het examen of mijn meetinstrumenten gekalibreerd zijn`,
    `Ik weet dat het resultaat bindend is en dat herexamen voor het onvoldoende onderdeel opnieuw wordt betaald`
  ],
  quiz: [
    {
      vraag: `Wat observeert de assessor tijdens de werkuitvoering van het praktijkexamen, naast het eindresultaat?`,
      opties: [
        `Hoe snel je de opdracht afrondt in vergelijking met andere kandidaten`,
        `Of je dezelfde volgorde volgt als in de officiele instructiefilm`,
        `Je gedrag en handelen tijdens de uitvoering (methode WAKKER)`,
        `Alleen of het toestel na afloop goed functioneert`
      ],
      goed: 2,
      uitleg: `De assessor observeert gedrag en handelen (WAKKER), niet alleen of het toestel achteraf werkt. Snelheid ten opzichte van andere kandidaten en het volgen van een instructiefilm zijn geen genoemd beoordelingscriterium.`
    },
    {
      vraag: `Waarmee sluit het praktijkexamen af?`,
      opties: [
        `Met een eindgesprek volgens de methode START, met een casus en theorievragen`,
        `Met een schriftelijke toets van dertig meerkeuzevragen`,
        `Met een beoordeling door twee onafhankelijke assessoren tegelijk`,
        `Met het invullen van een tevredenheidsformulier door de klant`
      ],
      goed: 0,
      uitleg: `Het eindgesprek volgt de methode START, met een concrete casus van een onveilige situatie en enkele vooraf vastgestelde theorievragen. Een schriftelijke toets, een tweede assessor of een tevredenheidsformulier horen niet bij de afsluiting van dit examen.`
    },
    {
      vraag: `Tijdens het examen meet je een CO-waarde in de opstellingsruimte van 14 ppm. De assessor (als klant) dringt aan dat het toestel toch aan mag blijven, want dat mocht "vorige keer ook". Wat is de juiste reactie?`,
      opties: [
        `Meegaan met de klant, want 14 ppm ligt onder de wettelijke meldgrens van 20 ppm`,
        `Alleen de gemeente inschakelen, want daar ligt de bevoegdheid tot afdwingen`,
        `Het gesprek beeindigen, want de mening van "vorige keer" is niet ter zake`,
        `Het toestel niet in bedrijf stellen voordat de oorzaak is gevonden en weggenomen`
      ],
      goed: 3,
      uitleg: `Tussen 5 en 20 ppm geldt: nader onderzoek, oorzaak wegnemen en de opdrachtgever informeren, voordat je (opnieuw) in bedrijf stelt. Onder de meldgrens blijven betekent niet dat je zonder onderzoek verder mag, de gemeente komt pas in beeld als de klant echt niet meewerkt, en het gesprek afkappen is geen vakinhoudelijke reactie op de meting.`
    },
    {
      vraag: `Wat brengt de kandidaat zelf mee naar het praktijkexamen?`,
      opties: [
        `Alle montagematerialen voor de opdracht`,
        `Een eigen assessor die de beoordeling controleert`,
        `De eigen, goedgekeurde meetinstrumenten en gereedschappen`,
        `Een schriftelijk verslag van de laatst uitgevoerde klus bij een andere klant`
      ],
      goed: 2,
      uitleg: `De kandidaat brengt zelf de meetinstrumenten en gereedschappen mee; de praktijklocatie levert de opstelling en montagematerialen. Een eigen assessor of een verslag van een eerdere klus horen niet bij het examen.`
    },
    {
      vraag: `Je doet het praktijkexamen voor het dubbele profiel (installatie- en onderhoudsopdracht) en haalt alleen de onderhoudsopdracht niet. Wat is de juiste vervolgstap?`,
      opties: [
        `Je boekt en betaalt herexamen voor alleen de onderhoudsopdracht`,
        `Je moet het hele praktijkexamen, beide opdrachten, opnieuw boeken en betalen`,
        `De assessor mag de uitslag op verzoek herzien binnen twee weken`,
        `Je theorietoets vervalt ook en moet opnieuw worden gedaan`
      ],
      goed: 0,
      uitleg: `Herexamen kan per onderdeel: bij een deels onvoldoende resultaat boek en betaal je binnen 10 werkdagen alleen voor het onvoldoende onderdeel, niet voor het al behaalde onderdeel. Er is geen herzieningstermijn voor de assessor, en de al gehaalde theorietoets blijft geldig.`
    }
  ],
  kaarten: [
    { voor: `Uit welke drie onderdelen bestaat het praktijkexamen?`, achter: `Voorbereiding, werkuitvoering en nazorg, afgesloten met een eindgesprek.` },
    { voor: `Wat is de methode "WAKKER" bij het praktijkexamen?`, achter: `De manier waarop de assessor je gedrag en handelen tijdens de uitvoering observeert.` },
    { voor: `Wat is de methode "START" bij het praktijkexamen?`, achter: `De opzet van het eindgesprek: een casus van een onveilige situatie en enkele theorievragen.` },
    { voor: `Wie speelt de klant tijdens het praktijkexamen?`, achter: `De assessor.` },
    { voor: `Wat verwacht de toetsmatrijs van je als de "klant" tegenwerpt bij een afkeuring?`, achter: `Dat je onder druk toch een veilige beslissing neemt, ook als dat voor de klant een impopulaire maatregel is.` },
    { voor: `Wat breng je zelf mee naar het praktijkexamen?`, achter: `Je eigen, goedgekeurde en gekalibreerde meetinstrumenten en gereedschappen.` },
    { voor: `Wat gebeurt er als je zakt voor het praktijkexamen?`, achter: `Je boekt en betaalt binnen 10 werkdagen herexamen voor het onvoldoende onderdeel; het resultaat is bindend.` }
  ],
  bronnen: ['EXA-22', 'EXA-23', 'EXA-24', 'EXA-25', 'EXA-26', 'EXA-27', 'EXA-28', 'EXA-30', 'WET-44', 'KLA-10', 'BPR-21', 'BPR-22']
},

/* ------------------------------------------------------------------ 18.3 */
{
  id: 'm18l03',
  nr: '18.3',
  titel: 'Klantcommunicatie en moeilijke gesprekken',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt een afkeuring, een offerte of een slecht bericht helder en respectvol uitleggen aan een klant, ook onder druk.',
  videos: [
    { taal: 'nl', titel: `Het slecht nieuwsgesprek (Bureau Orlemans & Orlemans)`, yt: '7EGtRiz18AU', duur: `±2 min, 2021` },
    { taal: 'nl', titel: `Cv-monteurs razend druk: 'ik moet gewoon nee verkopen' (Omroep Gelderland)`, yt: 'bd93N7G3AiE', duur: `±2 min, 2022` },
    { taal: 'en', titel: `4 Keys to Delivering Bad News to Customers (Myra Golden)`, yt: 'QEnvHY2MTVM', duur: `±6 min, 2021` }
  ],
  tekst: `
## Een afkeuring uitleggen

Een installatie afkeuren of een toestel niet in bedrijf stellen is een van de minder leuke kanten van het vak, en tegelijk een kerncompetentie: de officiele toetsmatrijs verwacht van een (eerste) monteur dat hij "zelfs onder druk van de consument altijd zorgt voor een veilige gebruikssituatie ook al betekent dat voor de consument een impopulaire maatregel." Dat lukt beter met een vaste opbouw dan met improviseren.

Een aanpak die in de praktijk werkt:

1. Benoem het feit: wat je hebt gemeten of gezien, in gewone taal ("ik meet 14 ppm koolmonoxide in deze ruimte").
2. Leg de reden uit: waarom dat een probleem is, niet alleen een regelnummer ("dat is te veel om dit toestel gewoon te laten draaien zonder de oorzaak te vinden").
3. Geef het vervolg: wat je nu doet en wat de klant kan verwachten.
4. Laat ruimte voor vragen, en leg vast wat je hebt gezegd en gedaan (zie les 18.4).

!!! kern Het waarom overtuigt, het bevel niet
"Het mag niet" roept weerstand op. "Ik meet dit, en daarom mag het pas weer aan als..." legt de klant uit wat je ziet en waarom dat telt. Dezelfde boodschap, een heel ander gesprek.
!!!

## Verwachtingen managen

Klanten vragen vaak niet naar de wettelijke term maar naar iets concreets: "kan het nog vandaag?", "moet dat echt?", "wat kost dat?". Wees concreet terug: noem de garantietermijn die geldt, het onderhoudsinterval, en wanneer je terugkomt. Een klant die vooraf weet waar hij aan toe is, klaagt minder snel achteraf: hoe duidelijker je nu communiceert, hoe minder discussie er later is over wat er precies is afgesproken.

## Als de klant wil doorwerken

Soms wil een klant het toestel toch laten draaien, "want het is buiten koud" of "de vorige monteur zei dat het wel kon". Jij mag een installatie niet in bedrijf stellen als er ontoelaatbare hoeveelheden CO vrijkomen, en alleen de gemeente kan een eigenaar dwingen tot herstel als hij niet wil meewerken.

!!! gevaar Onder druk toch in bedrijf stellen kan iemand het leven kosten
Een installatie die je zelf als onveilig hebt beoordeeld, stel je niet in bedrijf, wat de klant ook zegt of hoe vervelend het gesprek ook wordt. Leg uit wat je hebt gemeten, meld het volgens de regels (les 1.6) en laat de beslissing over herstel aan de klant zelf: hij kan het laten herstellen, of de gemeente kan hem daartoe dwingen. Toegeven aan druk is geen optie.
!!!

## Slecht nieuws brengen

Een offerte die hoger uitvalt, een reparatie die niet meer rendabel is, een toestel dat echt aan vervanging toe is: ook dat is slecht nieuws. Breng het zonder omwegen, maar met de reden erbij: "de warmtewisselaar lekt, en dat is met dit merk en deze leeftijd niet meer te repareren voor een bedrag dat de moeite waard is" werkt beter dan een ontwijkend "dat wordt een dure klus".

## Praktijkgeval

Een klant belt geirriteerd: de vorige monteur (van een ander bedrijf) zei dat de ketel "gewoon goed was", en nu kom jij en zeg je dat de opstellingsruimte niet voldoet. De klant vraagt: "wie heeft er nou gelijk?"

Je legt uit dat je verantwoordelijk bent voor de veiligheid van de hele installatie op het moment dat jij hem beoordeelt of in bedrijf stelt, ook als een ander bedrijf hem eerder heeft gecontroleerd. Je benoemt wat je concreet ziet (bijvoorbeeld: te weinig ventilatieopening voor dit type toestel), niet wie er "gelijk" heeft, en legt uit wat er nu moet gebeuren voordat het toestel weer aan mag.

## Als het toch een klacht wordt

Werkt het bedrijf volgens de AVIC-voorwaarden en is de klant een consument, dan kan die na een onopgeloste klacht naar de Geschillencommissie Installerende Bedrijven, mits het bedrijf lid is van Techniek Nederland. Weten dat die route bestaat, en een klant daar rustig naar verwijzen, voorkomt dat een gesprek verhardt tot een welles-nietes.
`,
  checklist: [
    `Ik benoem eerst het feit, dan de reden, dan het vervolg, in die volgorde`,
    `Ik leg uit waarom een beslissing veilig moet zijn, in plaats van alleen "het mag niet" te zeggen`,
    `Ik stel een als onveilig beoordeelde installatie nooit in bedrijf, ook niet onder druk`,
    `Ik noem concrete termijnen (garantie, onderhoud, planning) in plaats van vage toezeggingen`,
    `Ik weet dat een klant bij een lid van Techniek Nederland naar de Geschillencommissie kan`
  ],
  quiz: [
    {
      vraag: `Welk leerdoel formuleert de officiele toetsmatrijs voor een (eerste) monteur bij het omgaan met klantdruk?`,
      opties: [
        `Dat hij zelfs onder druk van de klant een veilige gebruikssituatie blijft waarborgen`,
        `Dat hij een impopulaire maatregel vermijdt als de klant boos wordt`,
        `Dat hij altijd een compromis zoekt tussen veiligheid en de wens van de klant`,
        `Dat hij de beslissing aan een collega overlaat als de klant moeilijk doet`
      ],
      goed: 0,
      uitleg: `De toetsmatrijs verwacht dat je onder druk vasthoudt aan een veilige situatie, ook als dat een impopulaire maatregel is voor de klant. Een compromis over veiligheid, de maatregel vermijden of de beslissing doorschuiven staan daar niet.`
    },
    {
      vraag: `Een klant vraagt waarom zijn ketel niet meer aan mag. Welke opbouw van het gesprek werkt het beste?`,
      opties: [
        `Eerst de wetsartikelen noemen, dan de meetwaarde, dan het vervolg`,
        `Eerst zeggen dat het niet anders kan, dan uitleggen wat je hebt gedaan`,
        `Eerst het vervolg aankondigen, daarna pas de reden als de klant ernaar vraagt`,
        `Eerst het feit benoemen (wat je meet of ziet), dan de reden, dan het vervolg`
      ],
      goed: 3,
      uitleg: `Feit, reden, vervolg, in die volgorde, sluit aan bij wat een klant nodig heeft om het te begrijpen en te accepteren. Beginnen met wetsartikelen is niet concreet, "het kan niet anders" zonder uitleg roept weerstand op, en de reden pas geven als erom gevraagd wordt werkt averechts.`
    },
    {
      vraag: `Een klant wil dat je het toestel toch aanlaat, ondanks een door jou gemeten te hoge CO-waarde, "want het is buiten koud". Wat doe je?`,
      opties: [
        `Het toestel voorlopig aanlaten en over een week terugkomen om opnieuw te meten`,
        `De keuze aan de klant laten, want het is zijn eigendom en zijn risico`,
        `Het toestel niet in bedrijf stellen, uitleggen waarom, en de vervolgstappen bespreken`,
        `Alleen de thermostaat lager zetten zodat het toestel minder hard werkt`
      ],
      goed: 2,
      uitleg: `Je stelt een installatie met een te hoge CO-waarde niet in bedrijf, wat de klant ook wil: alleen de gemeente kan een eigenaar dwingen tot herstel. Aanlaten en later meten, de keuze aan de klant laten, of alleen de thermostaat verlagen nemen het risico niet weg.`
    },
    {
      vraag: `Wat is het verschil tussen "het mag niet" en "ik meet dit, en daarom mag het pas weer aan als..." als reactie op een afkeuring?`,
      opties: [
        `Geen verschil, het is dezelfde boodschap in andere woorden`,
        `De tweede vorm benoemt de waarneming en de voorwaarde, en overtuigt daardoor beter`,
        `De eerste vorm is juridisch sterker, de tweede is alleen aardiger`,
        `De tweede vorm is een belofte die je juridisch moet nakomen, de eerste niet`
      ],
      goed: 1,
      uitleg: `Door de meting en de voorwaarde te benoemen, begrijpt de klant waarom de maatregel nodig is, wat overtuigender werkt dan een kaal verbod. De juridische status van de boodschap verandert niet door de formulering, en het is wel degelijk een ander gesprek, geen kale herformulering.`
    },
    {
      vraag: `Een klant van een bedrijf dat lid is van Techniek Nederland en de AVIC hanteert, is niet tevreden na een klacht bij het bedrijf zelf. Waar kan hij terecht voor een bindende uitspraak?`,
      opties: [
        `Bij InstallQ, want die accrediteert het bedrijf`,
        `Bij de gemeente, want die is bevoegd gezag voor het CO-stelsel`,
        `Bij de certificerende instelling van het bedrijf`,
        `Bij de Geschillencommissie Installerende Bedrijven`
      ],
      goed: 3,
      uitleg: `De Geschillencommissie Installerende Bedrijven geeft een bindende uitspraak voor consumenten met een klacht over een lid van Techniek Nederland. InstallQ en de certificerende instelling behandelen klachten over het certificaat, niet een consumentengeschil, en de gemeente is bevoegd gezag voor het CO-stelsel, niet voor consumentengeschillen.`
    },
    {
      vraag: `Waarom is het verstandig om een klant vooraf concrete termijnen te noemen (garantie, onderhoud, planning) in plaats van vage toezeggingen?`,
      opties: [
        `Omdat een vage toezegging wettelijk nooit bindend is`,
        `Omdat de Geschillencommissie alleen klachten met een exacte datum behandelt`,
        `Omdat concrete afspraken discussie achteraf verkleinen over wat er precies is afgesproken`,
        `Omdat een klant wettelijk verplicht is om binnen een week te reageren op een vage toezegging`
      ],
      goed: 2,
      uitleg: `Duidelijke, concrete afspraken laten later minder ruimte voor onenigheid over wat er is beloofd. Een vage toezegging kan wel degelijk bindend zijn, de Geschillencommissie eist geen exacte datum, en er bestaat geen wettelijke reactietermijn van een week voor de klant.`
    }
  ],
  kaarten: [
    { voor: `Wat verwacht de toetsmatrijs van je als een klant druk uitoefent bij een afkeuring?`, achter: `Dat je altijd een veilige gebruikssituatie waarborgt, ook als dat voor de klant een impopulaire maatregel is.` },
    { voor: `In welke volgorde breng je een afkeuring het beste over?`, achter: `Feit (wat je meet of ziet), reden (waarom dat een probleem is), vervolg (wat er nu gebeurt).` },
    { voor: `Mag je een installatie in bedrijf stellen als de klant erop aandringt, ondanks een te hoge CO-waarde?`, achter: `Nee. Alleen de gemeente kan een eigenaar dwingen tot herstel; jij stelt niet in bedrijf bij onveiligheid.` },
    { voor: `Waarom werkt "ik meet dit, en daarom..." beter dan "het mag niet"?`, achter: `Het benoemt de waarneming en de voorwaarde, en legt uit waarom de maatregel nodig is, wat overtuigt in plaats van weerstand op te roepen.` },
    { voor: `Waar kan een consument terecht met een bindende klacht over een lid van Techniek Nederland?`, achter: `Bij de Geschillencommissie Installerende Bedrijven, na eerst zelf bij het bedrijf te hebben geklaagd.` },
    { voor: `Waarom noem je een klant concrete termijnen in plaats van vage toezeggingen?`, achter: `Concrete afspraken verkleinen discussie achteraf over wat er precies is afgesproken.` },
    { voor: `Wat doe je als een andere monteur eerder zei dat een installatie "gewoon goed" was?`, achter: `Je beoordeelt zelf wat je nu ziet en meet: je bent zelf verantwoordelijk zodra jij de installatie beoordeelt of in bedrijf stelt.` }
  ],
  bronnen: ['KLA-07', 'KLA-08', 'KLA-09', 'KLA-10', 'WET-30', 'WET-40', 'WET-48', 'WET-49', 'BPR-05', 'BPR-08', 'BPR-14', 'BPR-22']
},

/* ------------------------------------------------------------------ 18.4 */
{
  id: 'm18l04',
  nr: '18.4',
  titel: 'Administratie, werkbonnen en aansprakelijkheid',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt werkbonnen en meetgegevens vastleggen, weet welke bewaartermijnen gelden en begrijpt waarom aantoonbaar werken jou en je bedrijf beschermt.',
  videos: [
    { taal: 'nl', titel: `Schade verhalen op de werknemer, mag dat? (RWV Advocaten)`, yt: 'FfxIgV6GfAk', duur: `±3 min, 2024` },
    { taal: 'nl', titel: `Stappenplan administratie bijhouden voor ondernemers (Ondernemersplein)`, yt: '8N45YjZHxD0', duur: `±4 min, 2025` },
    { taal: 'en', titel: `How to Create and Use Job Sheets on Gas Engineer Software (Gas Engineer Software, VK)`, yt: 'VM7itYAXKfk', duur: `±3 min, 2025` }
  ],
  tekst: `
## Wat je vastlegt, en waarom

Van elke controle leg je vast: wat je hebt gecontroleerd en op welke eisen, wie het deed en wanneer, met welk instrument, en het resultaat. Bij een afwijking leg je ook vast wat je daarmee hebt gedaan. Dat is geen bureaucratie voor de vorm: het is de enige manier waarop jij (of je bedrijf) achteraf kunt aantonen dat er zorgvuldig is gewerkt, en de enige manier waarop een certificerende instelling je werk kan controleren.

Een werkbon bevat in de praktijk minimaal: je bedrijfsgegevens, de klantgegevens, de datum, een concrete omschrijving van wat je hebt gedaan, gebruikte materialen, gewerkte uren, en de handtekening van de klant voor akkoord. Bij CO-werk komen daar de eisen van BRL 6000-25 nog bovenop, zoals de meetwaarden en of je een CO-melder hebt geadviseerd.

!!! kern Een handtekening is meer dan een formaliteit
Een handtekening (ook digitaal) op een werkbon levert dwingend bewijs op dat de klant akkoord ging met wat erop staat. Laat een klant dus altijd voor akkoord tekenen op uren, materiaal en advies, niet alleen mondeling bevestigen.
!!!

## Hoe lang je bewaart

| Wat | Bewaartermijn |
|---|---|
| Fiscale basisadministratie | 7 jaar (vanaf 1 januari volgend op het boekjaar) |
| Gegevens over onroerende zaken | 10 jaar |
| Projectdossier CO-certificaathouder | minstens 10 jaar na afronding van het project |

## Rekenvoorbeeld

Je rondt op 15 maart 2026 een installatieproject af. Tot wanneer moet je het projectdossier volgens BRL 6000-25 bewaren, en tot wanneer je fiscale administratie over dat boekjaar?

Het projectdossier bewaar je minstens tot 15 maart 2036 (10 jaar na afronding). De fiscale bewaarplicht loopt vanaf 1 januari 2027 (het jaar na boekjaar 2026) tot 1 januari 2034: 7 jaar. Het projectdossier moet dus langer bewaard blijven dan de fiscale basisadministratie.

Persoonsgegevens van de klant vallen daarnaast onder de AVG: je bewaart ze niet langer dan nodig voor het doel waarvoor je ze hebt verzameld, met dien verstande dat een andere bewaarplicht (fiscaal, of het projectdossier) voorrang heeft als die een langere termijn eist.

## Wie is aansprakelijk: jij of het bedrijf?

Maak jij tijdens je werk een gewone fout, dan is dat volgens de wet voor risico van het bedrijf, niet van jou persoonlijk: een werknemer is tegenover de werkgever niet aansprakelijk voor schade tijdens het werk, tenzij er opzet of bewuste roekeloosheid in het spel is. Van die regel afwijken mag alleen schriftelijk, en alleen als jij daarvoor verzekerd bent. Tegenover een klant (een derde) geldt hetzelfde principe omgekeerd: het bedrijf is risicoaansprakelijk voor een fout die jij tijdens je werk maakt, ook als jij een instructie hebt overtreden.

Dat betekent niet dat er niets van je gevraagd wordt: je moet handelen zoals een redelijk bekwame vakgenoot in dezelfde situatie zou doen. Doe je dat niet en levert het bedrijf daardoor niet wat is afgesproken, dan kan de klant het bedrijf aanspreken op wanprestatie.

## Garantie: drie lagen

Een klant kan met drie verschillende soorten garantie te maken krijgen, en het is aan jou om ze niet door elkaar te laten lopen in een gesprek:

1. De fabrieksgarantie: aan voorwaarden gebonden (spoelen, waterkwaliteit, jaarlijks onderhoud), en verschillend per merk.
2. De garantie van het installatiebedrijf zelf, bijvoorbeeld volgens de AVIC-voorwaarden als het bedrijf lid is van Techniek Nederland.
3. De wettelijke garantie (non-conformiteit): bij een consument mag een geleverde installatie doen wat je op grond van de overeenkomst mocht verwachten, en de eerste zes maanden na aflevering wordt een gebrek vermoed er al bij aflevering te zijn geweest.

## Verzekering

Een bedrijfsaansprakelijkheidsverzekering is voor een installatiebedrijf niet wettelijk verplicht, maar wordt in de praktijk vaak gevraagd door opdrachtgevers, banken of VvE's. Dat is geen certificeringseis: het Bewijs van Vakmanschap CO en BRL 6000-25 zeggen er niets over.
`,
  checklist: [
    `Ik leg van elke controle vast wat, hoe, wanneer, met welk instrument en met welk resultaat`,
    `Ik laat een klant altijd voor akkoord tekenen, niet alleen mondeling bevestigen`,
    `Ik weet welke bewaartermijn voor welk document geldt`,
    `Ik weet dat een gewone fout tijdens mijn werk voor risico van het bedrijf is, geen opzet of roekeloosheid`,
    `Ik houd fabrieksgarantie, bedrijfsgarantie en wettelijke garantie uit elkaar in een klantgesprek`
  ],
  quiz: [
    {
      vraag: `Hoe lang moet een projectdossier van een CO-certificaathouder minstens worden bewaard?`,
      opties: [`2 jaar na afronding van het project, net als bij een gewone garantie`, `5 jaar na afronding van het project`, `7 jaar na afronding van het project`, `10 jaar na afronding van het project`],
      goed: 3,
      uitleg: `BRL 6000-25 eist minstens 10 jaar na afronding van het project. 7 jaar is de fiscale basisbewaarplicht voor de rest van je administratie, niet voor het projectdossier; 2 en 5 jaar zijn geen bewaartermijn uit de bronnen.`
    },
    {
      vraag: `Wat betekent een handtekening van de klant op een werkbon juridisch?`,
      opties: [
        `Alleen dat de klant de bon heeft ontvangen, niet dat hij akkoord ging`,
        `Dwingend bewijs dat de klant akkoord ging met de inhoud van de bon`,
        `Niets, want alleen een handgeschreven handtekening is rechtsgeldig`,
        `Dat de klant afstand doet van zijn recht om later te klagen`
      ],
      goed: 1,
      uitleg: `Een handtekening (ook digitaal) levert dwingend bewijs op van akkoord met de inhoud. Ontvangst zonder akkoord is een andere handeling, een digitale handtekening is even rechtsgeldig als een handgeschreven, en tekenen doet geen afstand van het recht om later, binnen bekwame tijd, te klagen over een gebrek.`
    },
    {
      vraag: `Je maakt tijdens een normale klus een fout die schade veroorzaakt, zonder opzet of roekeloosheid. Wie draagt daarvoor het risico tegenover je werkgever?`,
      opties: [
        `Het bedrijf, want een gewone fout is voor risico van de werkgever`,
        `Jij persoonlijk, want je hebt de fout gemaakt`,
        `Jij en het bedrijf, ieder voor de helft`,
        `De klant, want hij heeft de schade geleden`
      ],
      goed: 0,
      uitleg: `Zonder opzet of bewuste roekeloosheid is een werknemer niet aansprakelijk tegenover de werkgever voor schade tijdens het werk: dat risico ligt bij het bedrijf. Een vaste verdeling van 50/50 bestaat niet in de wet, de klant draagt geen risico voor een fout van de monteur, en alleen bij opzet of bewuste roekeloosheid verschuift dat naar de werknemer.`
    },
    {
      vraag: `Wat is het verschil tussen fabrieksgarantie en de wettelijke garantie (non-conformiteit) bij een consument?`,
      opties: [
        `Er is geen verschil, het is twee namen voor dezelfde regeling`,
        `De wettelijke garantie geldt alleen als er geen fabrieksgarantie is afgesproken`,
        `Fabrieksgarantie is altijd langer dan de wettelijke garantie`,
        `Fabrieksgarantie is aan merkvoorwaarden gebonden; de wettelijke garantie geldt los daarvan en is van dwingend recht`
      ],
      goed: 3,
      uitleg: `Fabrieksgarantie is aan voorwaarden van de fabrikant gebonden en verschilt per merk; de wettelijke garantie (non-conformiteit) is een aparte, dwingendrechtelijke regeling die een bedrijf niet kan wegcontracteren bij een consument. De twee bestaan naast elkaar, en de duur van een fabrieksgarantie is niet altijd langer.`
    },
    {
      vraag: `Wat staat er minimaal op een werkbon voor CO-werk, boven op de algemene branchepraktijk (bedrijfsgegevens, klantgegevens, datum, omschrijving, materiaal, uren, handtekening)?`,
      opties: [
        `De meetwaarden en of een CO-melder is geadviseerd`,
        `Een kopie van het paspoort van de klant`,
        `Het BSN-nummer van de monteur die het werk uitvoerde`,
        `Een verklaring dat het bedrijf een AVB-verzekering heeft`
      ],
      goed: 0,
      uitleg: `BRL 6000-25 eist onder meer vastlegging van meetwaarden en of een CO-melder is geadviseerd. Een paspoortkopie of BSN horen niet bij een werkbon (en zijn AVG-gevoelig), en een verklaring over een verzekering is geen schema-eis.`
    },
    {
      vraag: `Is een bedrijfsaansprakelijkheidsverzekering (AVB) wettelijk verplicht voor een CO-certificaathouder?`,
      opties: [
        `Ja, het is een eis van BRL 6000-25`,
        `Ja, het staat in art. 6.45 Bbl als voorwaarde voor certificering`,
        `Nee, maar opdrachtgevers, banken of VvE's vragen er in de praktijk vaak om`,
        `Nee, en geen enkele partij vraagt er ooit om`
      ],
      goed: 2,
      uitleg: `Een AVB is niet wettelijk verplicht en geen eis van BRL 6000-25 of het Bbl, maar wordt in de praktijk vaak wel gevraagd door opdrachtgevers, banken of VvE's.`
    }
  ],
  kaarten: [
    { voor: `Hoe lang bewaar je een projectdossier van CO-werk minstens?`, achter: `10 jaar na afronding van het project (BRL 6000-25), langer dan de fiscale basisbewaarplicht van 7 jaar.` },
    { voor: `Wat levert een handtekening van de klant op een werkbon juridisch op?`, achter: `Dwingend bewijs dat de klant akkoord ging met de inhoud; een digitale handtekening telt net zo goed.` },
    { voor: `Wie draagt het risico voor een gewone fout die jij tijdens je werk maakt?`, achter: `Het bedrijf, tenzij er opzet of bewuste roekeloosheid in het spel is.` },
    { voor: `Wat verandert er als jij een instructie overtreedt en daardoor een fout maakt bij een klant?`, achter: `Niets aan de aansprakelijkheid van het bedrijf tegenover de klant: die blijft ook dan risicoaansprakelijk.` },
    { voor: `Noem drie lagen garantie die een klant kan hebben.`, achter: `Fabrieksgarantie, de garantie van het installatiebedrijf (bijvoorbeeld via AVIC), en de wettelijke garantie (non-conformiteit).` },
    { voor: `Is een AVB-verzekering een certificeringseis voor CO-werk?`, achter: `Nee. Niet wettelijk verplicht en geen eis van BRL 6000-25, wel vaak gevraagd door opdrachtgevers.` },
    { voor: `Wat komt er bij een CO-werkbon bovenop de algemene branchepraktijk?`, achter: `De meetwaarden en of je een CO-melder hebt geadviseerd (BRL 6000-25).` }
  ],
  bronnen: ['KLA-01', 'WET-55', 'WET-40', 'KLA-11', 'KLA-12', 'BPR-01', 'BPR-02', 'BPR-03', 'BPR-04', 'BPR-06', 'BPR-07', 'BPR-12', 'BPR-14', 'BPR-15', 'BPR-16', 'BPR-17', 'BPR-18']
},

/* ------------------------------------------------------------------ 18.5 */
{
  id: 'm18l05',
  nr: '18.5',
  titel: 'Werkvoorbereiding, planning en gereedschap',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt een werkdag voorbereiden en weet welk gereedschap, welke meetapparatuur en welke documentatie je meeneemt.',
  videos: [
    { taal: 'nl', titel: `Installatie gereedschap (Egbert Hulzebus)`, yt: 'BRJ7ubz4L-0', duur: `±2 min, 2020` },
    { taal: 'nl', titel: `Werkvoorbereider installatietechniek (Wat Wil Je Later Worden)`, yt: 'o3-rpfnWD3w', duur: `±3 min, 2015` },
    { taal: 'en', titel: `Roy's Tools: Gas Engineer Tool Box (Allen Hart, VK)`, yt: 'h9narApKMrw', duur: `±7 min, 2021` }
  ],
  tekst: `
## Een werkdag voorbereiden

Voor je op pad gaat, neem je de opdracht door: wat is de klacht (in de woorden van de klant), welk merk en model staat er, welke voorgeschiedenis is bekend, en welke materialen en onderdelen heb je waarschijnlijk nodig? BRL 6000-25 verwacht van een certificaathouder dat binnenkomende materialen worden gecontroleerd op de gestelde eisen (ingangscontrole) en dat ook de opslag van materiaal op de werklocatie wordt beoordeeld. Leg vast wie dat deed, bijvoorbeeld op de werkbon.

!!! kern Voorbereiding voorkomt een tweede rit
Een niet gecontroleerde voorraad of een vergeten onderdeel kost je een tweede rit en de klant een tweede wachtdag. Neem de klacht, het merk, het model en de meest waarschijnlijke oorzaken door voordat je vertrekt, niet onderweg.
!!!

## Gereedschap en meetapparatuur

Voor CO-werk gelden concrete eisen aan je meetapparatuur: voor het meten van CO, O2 en rookgastemperatuur in het rookgas, en voor verschildruk en trek, moet je apparatuur voldoen aan EN 50379 deel 2. Denk ook aan een gaslekzoeker of lekzoekspray, en aan je legitimatiebewijs (met bedrijfsnaam, je naam en pasfoto, het CO-VRIJ-beeldmerk en de uitgiftedatum, of het Vakpaspoort).

## Kalibratie

Elk meetinstrument waarvan de uitkomst bepaalt of je goed- of afkeurt, moet gekalibreerd zijn, met de kalibratiestatus zichtbaar op het instrument. De wet en de BRL leggen geen vaste kalibratiefrequentie vast: dat bepaalt en registreert het bedrijf zelf. Een fabrikant kan wel een concreet advies geven.

## Rekenvoorbeeld

Je koopt op 1 maart 2025 een rookgasanalyser. De fabrikant adviseert jaarlijkse kalibratie om de opgegeven nauwkeurigheid te houden. Wanneer zet je de eerste kalibratie in je overzicht, en wat noteer je op de sticker van het instrument?

Je plant de eerste kalibratie op of voor 1 maart 2026, en zet op de sticker de kalibratiedatum en de volgende uiterste datum. Dat overzicht (welk instrument, welke frequentie, wanneer voor het laatst gekalibreerd) houd je zelf bij: er is geen vaste wettelijke termijn die je daarvan ontslaat.

## Voorraad en onderdelen

Houd rekening met beperkte onderdelenbeschikbaarheid, vooral bij een oudere ketel: er is geen betrouwbare bron gevonden die een vaste minimumtermijn voor onderdelenbeschikbaarheid na verkoop garandeert. Vraag bij twijfel bij de fabrikant of onderdelen voor het specifieke model nog leverbaar zijn, in plaats van op een vast aantal jaren te rekenen.

## Fysieke belasting

Een cv-ketel, boiler of gasfles til je niet zomaar: de praktijkrichtlijn voor tillen (A-blad Lichamelijke belasting) noemt bij incidenteel tillen een maximum van 23 kg, en bij vaker dan twaalf keer per dienst tillen 12 kg. Onder minder gunstige omstandigheden (draaien, bukken, een trap op) ligt de veilige last lager. Persoonlijke beschermingsmiddelen die je nodig hebt, zijn voor rekening van de werkgever; als zzp'er ben je daar zelf verantwoordelijk voor.
`,
  checklist: [
    `Ik neem de klacht, het merk en model door voordat ik vertrek`,
    `Ik controleer bij binnenkomst van materiaal of het aan de gestelde eisen voldoet`,
    `Ik weet welke meetapparatuur aan EN 50379 deel 2 moet voldoen`,
    `Ik houd een overzicht bij van mijn meetinstrumenten en hun kalibratiedatum`,
    `Ik vraag bij een oudere ketel na of onderdelen nog leverbaar zijn, in plaats van dat aan te nemen`
  ],
  quiz: [
    {
      vraag: `Aan welke norm moet je meetapparatuur voor CO, O2 en rookgastemperatuur voldoen volgens BRL 6000-25?`,
      opties: [`NEN 1078 (gasleiding nieuwbouw)`, `EN 50379 deel 2`, `NPR 3378 (praktijkrichtlijn)`, `NEN 8078 (gasleiding bestaande bouw)`],
      goed: 1,
      uitleg: `BRL 6000-25 eist EN 50379 deel 2 voor deze metingen (en voor verschildruk en trek). NEN 1078 en NEN 8078 gaan over het gasleidingwerk, NPR 3378 over onder meer beugeling en opstelling.`
    },
    {
      vraag: `Wie bepaalt de kalibratiefrequentie van je meetinstrumenten?`,
      opties: [
        `Een vaste wettelijke termijn van een jaar`,
        `De certificerende instelling, per instrument apart`,
        `Het bedrijf zelf, en het houdt daarvan een overzicht bij`,
        `De fabrikant van het toestel dat je onderhoudt, niet van het meetinstrument`
      ],
      goed: 2,
      uitleg: `BRL 6000-25 legt geen vaste frequentie vast; het bedrijf bepaalt en registreert die zelf, eventueel op advies van de fabrikant van het meetinstrument. Een vaste wettelijke termijn, een per-instrument beslissing door de certificerende instelling of de fabrikant van het te onderhouden toestel zijn niet de bron van de kalibratiefrequentie.`
    },
    {
      vraag: `Wat verwacht BRL 6000-25 van je bij materiaal dat je binnenkrijgt voor een installatie?`,
      opties: [
        `Niets specifiek, dat is de verantwoordelijkheid van de leverancier`,
        `Alleen een visuele controle op transportschade, verder niets`,
        `Een melding aan de certificerende instelling voor elke levering`,
        `Een ingangscontrole: beoordelen of het voldoet`
      ],
      goed: 3,
      uitleg: `Een ingangscontrole, met vastlegging van wie het beoordeelde, is de verwachte praktijk. De verantwoordelijkheid ligt niet alleen bij de leverancier, een controle beperkt tot transportschade is te smal, en een melding aan de certificerende instelling per levering is niet vereist.`
    },
    {
      vraag: `Wat is een betrouwbare aanpak als je twijfelt of onderdelen voor een oudere ketel nog leverbaar zijn?`,
      opties: [
        `Uitgaan van een vaste termijn van 10 jaar, want dat is de norm`,
        `Navragen bij de fabrikant, want een vaste termijn niet vaststaat`,
        `Aannemen dat onderdelen altijd nog te vinden zijn via een tussenhandelaar`,
        `De klant vragen zelf op internet te zoeken naar het onderdeel`
      ],
      goed: 1,
      uitleg: `Er is geen betrouwbare bron voor een vaste minimumtermijn: navragen bij de fabrikant is de betrouwbare aanpak. Uitgaan van 10 jaar als vaste norm is niet onderbouwd, en aannames over een tussenhandelaar of de klant zelf laten zoeken zijn geen vakinhoudelijke oplossing.`
    },
    {
      vraag: `Wat noemt de praktijkrichtlijn voor tillen als maximum bij incidenteel tillen onder gunstige omstandigheden?`,
      opties: [`12 kg`, `15 kg`, `18 kg`, `23 kg`],
      goed: 3,
      uitleg: `Het A-blad Lichamelijke belasting noemt 23 kg bij incidenteel tillen. 12 kg geldt bij meer dan twaalf keer per dienst tillen, 15 kg bij dragen op heuphoogte; 18 kg staat niet in de richtlijn.`
    }
  ],
  kaarten: [
    { voor: `Aan welke norm moet CO/O2/rookgastemperatuur-meetapparatuur voldoen?`, achter: `EN 50379 deel 2 (BRL 6000-25).` },
    { voor: `Wie bepaalt hoe vaak je meetinstrumenten kalibreert?`, achter: `Het bedrijf zelf; er is geen vaste wettelijke termijn, wel kan de fabrikant van het instrument een advies geven.` },
    { voor: `Wat is een ingangscontrole?`, achter: `Beoordelen of binnengekomen materiaal aan de gestelde eisen voldoet, met vastlegging van wie dat deed.` },
    { voor: `Wat staat er op een legitimatiebewijs van een certificaathouder?`, achter: `Bedrijfsnaam, naam en pasfoto van de medewerker, het CO-VRIJ-beeldmerk en de uitgiftedatum (of het Vakpaspoort).` },
    { voor: `Hoe ga je om met twijfel over onderdelenbeschikbaarheid bij een oude ketel?`, achter: `Navragen bij de fabrikant: een vaste minimumtermijn is niet betrouwbaar vastgesteld.` },
    { voor: `Wat is het maximum bij incidenteel tillen volgens de praktijkrichtlijn?`, achter: `23 kg onder gunstige omstandigheden; lager bij vaker tillen, draaien, bukken of lang dragen.` },
    { voor: `Wie betaalt verplichte persoonlijke beschermingsmiddelen?`, achter: `De werkgever; als zzp'er ben je daar zelf verantwoordelijk voor.` }
  ],
  bronnen: ['WET-56', 'WET-57', 'WET-58', 'MET-01', 'MET-03', 'MET-04', 'MET-05', 'INS-32', 'ARB-23', 'ARB-24', 'ARB-25', 'ARB-26', 'BPR-19']
},

/* ------------------------------------------------------------------ 18.6 */
{
  id: 'm18l06',
  nr: '18.6',
  titel: 'Je leerplan als topmonteur',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt een leerplan opstellen om na het examen door te groeien, en weet wat deze cursus wel en niet is.',
  videos: [
    { taal: 'nl', titel: `Teaser Vakmanschap Inregelen (Vakmanschap Techniek)`, yt: 'rpR3IGpl1hc', duur: `±1 min, 2020` },
    { taal: 'nl', titel: `Monteur warmtepomp (NVKL)`, yt: 'EZVnHITc0Sg', duur: `±2 min, 2024` },
    { taal: 'en', titel: `Developing your career as an engineer at Baxi (Baxi)`, yt: '_wa3wBCb6T4', duur: `±2 min, 2026` }
  ],
  tekst: `
## Wat deze cursus wel en niet is

Deze cursus geeft je geen diploma en geen Bewijs van Vakmanschap CO: dat haal je alleen bij een door InstallQ geaccrediteerde exameninstelling, na een theorietoets en een praktijkexamen. Wat de cursus wel doet: je een compleet beeld geven van de negen examenonderwerpen, de fysische en juridische achtergrond erbij, en de onderdelen die het examen niet toetst maar die het verschil maken tussen een monteur die slaagt en een monteur die tot de top 1% van het vak behoort.

!!! kern Weten waar je bevoegdheid ophoudt, is ook vakbekwaamheid
Een topmonteur kent niet alleen zijn eigen vak, maar ook de grens van zijn eigen bevoegdheid: wanneer je een fabrikant belt, wanneer je een expert inschakelt, en wanneer je iets aan een ander vakgebied (elektrotechniek, asbest, leidingwerk) overlaat.
!!!

## Na het Bewijs: verlengen en bijblijven

Het Bewijs van Vakmanschap CO is vijf jaar geldig. Zet de einddatum in je agenda en begin uiterlijk zes maanden ervoor met de verlengingsroute (de module Basiskennis Opfrisser en een theorietoets). Is het bewijs eenmaal verlopen, dan moet je het hele initiele traject opnieuw doen: theorietoets en praktijkexamen.

Het CO-stelsel staat niet stil. Sinds 2025 en 2026 zijn er wijzigingsbladen op de certificatieschema's aangewezen, en er is een wijziging van de meldplicht in voorbereiding (minder verplichte meldingen aan het bevoegd gezag, maar wel een verplichte melding van de achterliggende oorzaak). Blijf dit soort ontwikkelingen volgen via je certificerende instelling of InstallQ: de cursus zelf wordt niet automatisch bijgewerkt.

## Vervolgopleidingen

Deze cursus behandelt het fundament: warmte en hydraulica, de ketel als keten, regeling en afgifte, rookgasafvoer, installeren, meten, onderhoud en storingzoeken. Er zijn onderwerpen waar opleiders apart voor opleiden en die niet in deze cursus zitten:

- Vakmanschap Inregelen (waterzijdig inregelen): deze cursus legt het principe uit (module 14), maar niet de volledige vakbekwaamheid.
- Vakmanschap Afgiftesystemen en Warmtepompen: relevant nu hybride en warmtepompsystemen steeds vaker naast of in plaats van de cv-ketel komen (module 17).

## Generieke veiligheidscertificering

Naast het Bewijs van Vakmanschap CO bestaat VCA (Veiligheid, Gezondheid en Milieu Checklist Aannemers): geen wettelijke plicht, maar in de praktijk vaak een eis van een opdrachtgever om op locatie te mogen werken, los van je CO-certificering. B-VCA is het basisniveau voor uitvoerende medewerkers.

## Praktijkgeval: een leerplan in stappen

Een realistisch leerplan voor de eerste jaren in het vak ziet er ongeveer zo uit:

1. Nu tot het examen: deze cursus afronden, de gratis zelftest halen, dan de theorietoets en het praktijkexamen boeken.
2. Eerste jaren na het Bewijs: ervaring opbouwen onder begeleiding van een gecertificeerde monteur (deze cursus vervangt dat niet), en de zwaarste examenonderwerpen (onderhoud, opstellingsruimte, rookgasafvoer) in de praktijk laten landen.
3. Rond het derde tot vierde jaar: overwegen of een vervolgopleiding (inregelen, warmtepompen) bij je loopbaan past.
4. Zes maanden voor de einddatum van het Bewijs: de verlengingsroute plannen.

## Blijven leren zonder een cursus

Niet elk nieuw inzicht komt uit een cursus. Vraag bij storingen die je niet meteen snapt door naar het waarom, niet alleen naar de oplossing; lees een fabrikanthandleiding ook als het toestel het (nog) goed doet; en volg het jaarverslag van de TloKB of nieuws van Techniek Nederland om te weten wat er in het stelsel verandert.
`,
  checklist: [
    `Ik weet dat deze cursus geen diploma en geen Bewijs van Vakmanschap CO oplevert`,
    `Ik heb de einddatum van mijn Bewijs (zodra ik het heb) in mijn agenda staan, met een herinnering zes maanden ervoor`,
    `Ik weet welke vervolgopleidingen bij mijn vak passen en waarom`,
    `Ik ken het verschil tussen het Bewijs van Vakmanschap CO en VCA`,
    `Ik heb een idee van mijn eigen leerplan voor de eerste jaren na het examen`
  ],
  quiz: [
    {
      vraag: `Wat levert deze cursus je op, en wat niet?`,
      opties: [
        `Voorbereiding op het examen, maar geen diploma of Bewijs`,
        `Een diploma, maar geen Bewijs van Vakmanschap CO`,
        `Een volledig Bewijs van Vakmanschap CO na het afronden van alle modules`,
        `Een vrijstelling voor het theorie-examen als je alle toetsvragen goed hebt`
      ],
      goed: 0,
      uitleg: `De cursus bereidt voor, maar geeft zelf geen diploma en geen Bewijs: dat komt alleen van een door InstallQ geaccrediteerde exameninstelling. Een diploma zonder Bewijs, een Bewijs na de modules of een vrijstelling bestaan niet.`
    },
    {
      vraag: `Wanneer begin je met de verlengingsroute voor het Bewijs van Vakmanschap CO?`,
      opties: [
        `Uiterlijk zes maanden voor de einddatum`,
        `Pas nadat het Bewijs is verlopen`,
        `Precies op de vervaldatum zelf`,
        `Een jaar na het behalen van het Bewijs, standaard`
      ],
      goed: 0,
      uitleg: `Verlengen kan vanaf zes maanden voor de einddatum; wachten tot na de vervaldatum betekent het hele initiele traject opnieuw doen, en er is geen vaste "een jaar na behalen"-regel of verplichting om precies op de vervaldatum te handelen.`
    },
    {
      vraag: `Wat is het verschil tussen het Bewijs van Vakmanschap CO en VCA?`,
      opties: [
        `Geen verschil, VCA is de nieuwe naam voor het Bewijs`,
        `VCA vervangt het Bewijs zodra een bedrijf VCA-gecertificeerd is`,
        `VCA is alleen voor eerste monteurs, het Bewijs alleen voor monteurs`,
        `Het Bewijs is wettelijk verplicht voor CO-werk, VCA is een generieke, niet-wettelijke veiligheidseis die een opdrachtgever kan stellen`
      ],
      goed: 3,
      uitleg: `Het Bewijs is wettelijk vereist voor werk aan gasverbrandingsinstallaties; VCA is een apart, niet-wettelijk verplicht veiligheidsmanagementsysteem dat een opdrachtgever naast de CO-certificering kan eisen. VCA vervangt het Bewijs niet en is niet gekoppeld aan het monteurs- of eerste-monteurniveau.`
    },
    {
      vraag: `Waarom is "weten waar je bevoegdheid ophoudt" onderdeel van vakbekwaamheid?`,
      opties: [
        `Omdat een topmonteur nooit iets aan een ander overlaat`,
        `Omdat de wet een monteur verplicht om altijd zelf alles op te lossen`,
        `Omdat je daardoor op tijd een fabrikant, expert of ander vakgebied inschakelt in plaats van door te werken buiten je kennis`,
        `Omdat een opdrachtgever dat wettelijk moet vastleggen in een contract`
      ],
      goed: 2,
      uitleg: `Weten wanneer je een fabrikant, expert of een ander vakgebied (zoals elektrotechniek of asbest) inschakelt, voorkomt dat je buiten je eigen kennis en bevoegdheid werkt. Een topmonteur weet juist wel wanneer hij iets overlaat, er is geen wettelijke plicht om alles zelf op te lossen, en dit is geen contractuele verplichting van de opdrachtgever.`
    },
    {
      vraag: `Welke twee vervolgopleidingen noemt de examenmatrix als aanvulling boven deze cursus, passend bij de ontwikkeling naar hybride systemen en waterzijdig inregelen?`,
      opties: [
        `VCA en BHV`,
        `Vakmanschap Inregelen en Vakmanschap Afgiftesystemen en Warmtepompen`,
        `Elektrotechniek niveau 2 en niveau 3`,
        `Basiskennis Opfrisser en de theorietoets voor de verlenging van het Bewijs`
      ],
      goed: 1,
      uitleg: `De examenmatrix noemt Vakmanschap Inregelen en Vakmanschap Afgiftesystemen en Warmtepompen als vervolgopleidingen die passen bij inregelen en de opkomst van hybride en warmtepompsystemen. VCA/BHV zijn generieke veiligheidscertificeringen, elektrotechniek hoort bij het zusterproject, en Basiskennis Opfrisser is onderdeel van de verlenging van het Bewijs zelf.`
    }
  ],
  kaarten: [
    { voor: `Geeft deze cursus een diploma of Bewijs van Vakmanschap CO?`, achter: `Nee, geen van beide. Alleen een door InstallQ geaccrediteerde exameninstelling geeft het Bewijs af.` },
    { voor: `Wanneer begin je met verlengen van het Bewijs?`, achter: `Uiterlijk zes maanden voor de einddatum, met de module Basiskennis Opfrisser en een theorietoets.` },
    { voor: `Wat is het verschil tussen het Bewijs van Vakmanschap CO en VCA?`, achter: `Het Bewijs is wettelijk verplicht voor CO-werk; VCA is een generieke, niet-wettelijke veiligheidseis die een opdrachtgever kan stellen.` },
    { voor: `Welke twee vervolgopleidingen sluiten aan op hybride en waterzijdig inregelen?`, achter: `Vakmanschap Inregelen en Vakmanschap Afgiftesystemen en Warmtepompen.` },
    { voor: `Wat gebeurt er als je Bewijs verloopt zonder tijdig te verlengen?`, achter: `Je moet het hele initiele traject opnieuw doen: theorietoets en praktijkexamen.` },
    { voor: `Wat verandert er in het CO-stelsel dat je zelf moet bijhouden?`, achter: `Wijzigingsbladen op de certificatieschema's en een voorgenomen wijziging van de meldplicht; de cursus wordt niet automatisch bijgewerkt.` },
    { voor: `Wat is een teken van vakbekwaamheid naast technische kennis?`, achter: `Weten waar je eigen bevoegdheid ophoudt en op tijd een fabrikant, expert of ander vakgebied inschakelen.` }
  ],
  bronnen: ['EXA-09', 'EXA-31', 'EXA-36', 'EXA-40', 'WET-52', 'WET-53', 'WET-65', 'WET-67', 'ARB-29', 'ARB-30', 'ARB-31']
}

  ]
});
