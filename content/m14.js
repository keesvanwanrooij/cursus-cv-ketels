/* ==========================================================================
   m14.js - Module 14: Waterzijdig inregelen
   Geschreven op basis van project/docs/feiten/14-waterzijdig-inregelen.md (INR),
   met hergebruik van 03-ketel-hydrauliek-regeling.md (HYD, REG) en
   08-afgiftesystemen.md (AFG). Basishydraulica: zie module 3. Afgifte en
   temperatuurregimes: zie module 7.
   ========================================================================== */

CURSUS.addModule({
  id: 'm14',
  nr: 14,
  deel: 2,
  titel: 'Waterzijdig inregelen',
  ondertitel: 'Comfort en rendement zitten in de balans.',
  niveau: 'Gevorderd',
  studietijd: 10,
  intro: 'Een installatie die niet in balans is geeft koude en warme plekken, geluid, pendelen en onnodig gasverbruik. Deze module leert je de hydraulica achter inregelen, de instelventielen en de methoden om een installatie waterzijdig in balans te brengen. Een groeiend vakgebied: de wet vraagt het bij vervanging van de warmtebron, en lagere stooktemperaturen maken het steeds belangrijker.',
  inleiding: [
    'Waterzijdig inregelen is het zo instellen van elke radiator, convector of vloerverwarmingskring dat er precies genoeg water doorheen stroomt, niet meer en niet minder. Zonder inregelen kiest het water de weg van de minste weerstand: de radiator dichtst bij de ketel krijgt te veel en te snel warm water, de radiator het verst weg te weinig. Dat kost comfort en gas, en het maakt lager stoken (nodig voor een hoger ketelrendement of een warmtepomp) juist lastiger.',
    'Deze module bouwt voort op de hydraulica uit module 3 (druk, drukval, debiet, pompkarakteristiek) en de afgifte uit module 7 (radiatorvermogen per temperatuurregime, vloerverwarming). Hier komt daar de regeltechniek bij: autoriteit van een ventiel, statisch en dynamisch inregelen, de instelventielen van een aantal grote fabrikanten, en de methoden waarmee je in de praktijk een installatie in balans brengt, van een enkele radiatorkraan tot een volledige vloerverwarmingsverdeler.'
  ],
  leerdoelen: [
    'Symptomen van een niet ingeregelde installatie herkennen en het wettelijk kader benoemen',
    'Uitleggen hoe weerstand, debiet en verdeling samenhangen en wat de autoriteit van een ventiel is',
    'Statische en dynamische regelventielen en thermostaatkranen uit elkaar houden',
    'Het vermogen en het debiet per radiator berekenen',
    'Een installatie inregelen met de gangbare methoden',
    'Vloerverwarming inregelen met een debietmeter op de verdeler',
    'Het resultaat meten, controleren en vastleggen'
  ],
  lessen: [

/* ------------------------------------------------------------------ 14.1 */
{
  id: 'm14l01',
  nr: '14.1',
  titel: 'Waarom inregelen: symptomen van onbalans',
  duur: 20,
  type: 'les',
  leerdoel: 'Je herkent de symptomen van een niet ingeregelde installatie, kunt uitleggen wat ze kosten aan comfort en energie, en weet wanneer de wet inregelen verplicht.',
  videos: [
    { taal: 'nl', titel: 'Webinar Waterzijdig inregelen deel 1: Waarom is waterzijdig inregelen zo belangrijk? (Techniek Nederland)', yt: 'j26JoljRQT4', duur: '±41 min, 2023' },
    { taal: 'nl', titel: 'Waterzijdig inregelen (Actienetwerk 15% GasTerug)', yt: 'TTxuxrTYCO8', duur: '±3 min, 2023' },
    { taal: 'en', titel: 'How to Balance Your Radiators (The DIY Guy)', yt: '7NsZ2d2Oups', duur: '±10 min, 2022' }
  ],
  tekst: `
## Een ketel die goed draait, zegt niets over de verdeling van het water

Een cv-ketel kan foutloos draaien, op druk staan en het juiste rendement halen, en toch geeft de installatie klachten: de ene kamer is snel warm, de andere blijft koud. De oorzaak zit dan niet in de ketel, maar in de verdeling van het water over de radiatoren, convectoren of vloerverwarmingskringen. Dat verdelen heet waterzijdig inregelen: ervoor zorgen dat door elke afnemer precies de hoeveelheid water stroomt die nodig is om de gewenste warmte af te geven, en niet meer dan dat.

## De vier signalen van onbalans

Zonder inregelafsluiters kiest het water de weg van de minste weerstand. De pomp bouwt de meeste druk op vlak achter de aftakking naar de eerste radiator in de installatie. Dat geeft een herkenbaar patroon:

- De radiator dichtst bij de ketel warmt snel op en krijgt meer water dan nodig, en geeft de warmte niet eens de tijd om er goed uit te stromen.
- De radiator het verst van de ketel warmt traag op of blijft koud, doordat er te weinig water doorheen komt.
- De retourtemperatuur van de installatie is hoger dan nodig, wat het rendement van een HR-ketel verlaagt (zie les 7.2) en een warmtepomp minder efficient laat draaien.
- Bij gedeeltelijke warmtevraag (thermostaatkranen die dichtgaan) kan de doorstroming over de nog openstaande radiatoren onder het minimum van de ketel zakken, waardoor die vaker aan- en uitslaat (pendelen). Les 14.5 rekent dit minimum uit.

!!! kern Water stroomt niet gelijk verdeeld, tenzij je het afdwingt
Een installatie zonder inregelafsluiters verdeelt het water niet automatisch eerlijk over de radiatoren. De radiator met de minste weerstand tussen zich en de pomp krijgt het meeste water, ongeacht of die radiator dat nodig heeft. Inregelen zet daar bewust een kunstmatige weerstand tegenover, zodat elke radiator zijn eigen, berekende aandeel krijgt.
!!!

## Wat het oplevert

Schattingen van de besparing lopen sterk uiteen per bron en per situatie: ongeveer 5 tot 15 procent bij een gewone woning volgens consumentenvoorlichting, 10 tot 20 procent volgens een opleidersmodule, en tot 25 procent in artikelen over bedrijfspanden. Geen enkele bron geeft een vast percentage: het hangt af van hoe scheef de installatie voor het inregelen stond. Naast gasbesparing en comfort noemt de vakliteratuur ook minder piekbelasting van de ketel, een langere levensduur van de installatie en minder CO2-uitstoot.

## Praktijkgeval: koude woonkamer, snel warme slaapkamer

Een klant belt: de slaapkamer op de begane grond wordt binnen tien minuten warm, maar de woonkamer op de verdieping, verder van de ketel, blijft na een uur nog lauw. Beide radiatoren staan volledig open. Dit is het klassieke beeld van onbalans, niet van een te kleine radiator: meet bij beide radiatoren het temperatuurverschil tussen aanvoer en retour (zie les 14.5). Is dat verschil bij de slaapkamer klein (weinig afkoeling, dus veel doorstroming) en bij de woonkamer groot (veel afkoeling, dus weinig doorstroming), dan bevestigt dat de diagnose: de installatie moet waterzijdig ingeregeld worden, niet de radiator vervangen.

## Wettelijk kader in kort

Danfoss schrijft in zijn eigen voorlichtingsmateriaal dat "wetgeving waterzijdig inregelen inmiddels verplicht stelt bij werkzaamheden aan zowel bestaande als nieuwe verwarmingsinstallaties". Concreet staat in artikel 5.21 van het Besluit bouwwerken leefomgeving (Bbl) dat een technisch bouwsysteem bij plaatsing of gedeeltelijke vernieuwing "adequaat gedimensioneerd, geinstalleerd, ingeregeld en instelbaar" moet zijn, en dat na vervanging van de warmtegenerator (de cv-ketel of warmtepomp) zelfregulerende apparatuur per verblijfsruimte aanwezig moet zijn, met een uitzondering als dat meer dan 20 procent van de installatiekosten zou kosten. Voor kantoren en andere utiliteitsgebouwen met een energiebesparingsplicht staat waterzijdig inregelen bovendien op de Erkende Maatregelenlijst van RVO.

De norm NEN-EN 14336 gaat over het ontwerp van watervoerende verwarmingssystemen in gebouwen; net als andere NEN-normen is de tekst auteursrechtelijk beschermd, dus benoem in je werk wat de norm regelt zonder normtekst te citeren.

## Wat dit voor jou als monteur betekent

Waterzijdig inregelen is geen extra service die je aanbiedt als de klant erom vraagt: bij vervanging van de ketel of warmtepomp is het wettelijk verplicht, en het is de sleutel om lager te kunnen stoken zonder comfortverlies. De rest van deze module geeft je de hydraulica, de instelventielen en de methoden om dat vak te leren.
`,
  checklist: [
    'Ik herken de vier signalen van onbalans: te snel warme radiator dichtbij, trage of koude radiator ver weg, hoge retourtemperatuur en pendelen',
    'Ik leg een klant uit dat een koude radiator niet automatisch een te kleine radiator betekent',
    'Ik weet dat inregelen wettelijk verplicht is bij vervanging van de warmtebron (artikel 5.21 Bbl)',
    'Ik noem geen vast besparingspercentage, maar een realistische bandbreedte',
    'Ik ken NEN-EN 14336 als de norm die het ontwerp van watervoerende verwarmingssystemen regelt, zonder de normtekst te citeren'
  ],
  quiz: [
    {
      vraag: `Een radiator dichtbij de ketel warmt binnen enkele minuten flink op, een radiator verder in het huis blijft na een uur nog koud, en beide radiatorkranen staan volledig open. Wat is de meest waarschijnlijke oorzaak?`,
      opties: [
        `De verste radiator is te klein voor de ruimte en moet vervangen worden`,
        `De installatie is niet waterzijdig ingeregeld: het water kiest de weg van de minste weerstand`,
        `De ketel heeft te weinig vermogen voor de hele woning`,
        `De thermostaat van de woonkamer staat te laag ingesteld`
      ],
      goed: 1,
      uitleg: `Dit is het klassieke beeld van onbalans: zonder inregelafsluiters krijgt de radiator met de minste weerstand (meestal de dichtstbijzijnde) het meeste water, en de verste radiator te weinig. Een te kleine radiator of te weinig ketelvermogen geeft een ander beeld (structureel te koud bij lage buitentemperatuur, niet dit contrast tussen twee radiatoren), en de thermostaatinstelling verklaart niet waarom de ene radiator wel en de andere niet warm wordt.`
    },
    {
      vraag: `Wat gebeurt er in een niet ingeregelde installatie met de retourtemperatuur, en waarom is dat ongunstig?`,
      opties: [
        `De retourtemperatuur wordt onvoorspelbaar hoog bij radiatoren die te veel water krijgen, wat het rendement van de ketel verlaagt`,
        `De retourtemperatuur daalt altijd, wat het rendement van de ketel juist verhoogt`,
        `De retourtemperatuur heeft geen relatie met de verdeling van het water over de radiatoren`,
        `De retourtemperatuur wordt precies gelijk aan de aanvoertemperatuur`
      ],
      goed: 0,
      uitleg: `Een radiator die te veel water krijgt, geeft dat water niet volledig af en stuurt het warmer terug dan nodig. Uit les 7.2 volgt dat een hogere retourtemperatuur het condensatie-effect en daarmee het rendement van een HR-ketel verlaagt. Een gelijkblijvende of dalende retourtemperatuur past niet bij een onbalans-situatie.`
    },
    {
      vraag: `Wat is volgens de gangbare bronnen een realistische manier om de besparing van waterzijdig inregelen aan een klant te noemen?`,
      opties: [
        `Altijd exact 15 procent, dat is het officiele percentage`,
        `Een bandbreedte, omdat schattingen tussen bronnen en situaties sterk uiteenlopen`,
        `Nooit een indicatie geven, want er is niets over bekend`,
        `Alleen het percentage van de fabrikant van de radiatorkranen noemen`
      ],
      goed: 1,
      uitleg: `Bronnen noemen uiteenlopende cijfers (ongeveer 5 tot 15 procent bij woningen, tot 20 procent volgens een opleidersmodule, tot 25 procent voor bedrijfspanden), afhankelijk van hoe scheef de installatie stond. Een vast percentage suggereert een precisie die er niet is, en niets zeggen doet de klant ook geen recht: een bandbreedte met de kanttekening dat het van de situatie afhangt is het meest verdedigbare antwoord.`
    },
    {
      vraag: `Bij welke gebeurtenis verplicht artikel 5.21 van het Besluit bouwwerken leefomgeving dat een verwarmingssysteem wordt ingeregeld?`,
      opties: [
        `Alleen bij een compleet nieuwbouwproject, nooit bij een bestaande woning`,
        `Bij het plaatsen, gedeeltelijk vernieuwen of veranderen van een technisch bouwsysteem waarbij de energieprestatie wordt beinvloed, zoals de vervanging van de ketel`,
        `Alleen wanneer de klant er expliciet om vraagt`,
        `Alleen bij woningen die op stadsverwarming zijn aangesloten`
      ],
      goed: 1,
      uitleg: `Artikel 5.21 lid 2 Bbl geldt bij het plaatsen of gedeeltelijk vernieuwen of veranderen van een technisch bouwsysteem waarbij de energieprestatie wordt beinvloed, wat bij een cv-installatie in de praktijk vaak samenvalt met de vervanging van de ketel of warmtepomp. Het is dus niet beperkt tot nieuwbouw, niet vrijblijvend, en niet beperkt tot stadsverwarming.`
    },
    {
      vraag: `Waarom kan een niet ingeregelde installatie leiden tot vaker aan- en uitslaan (pendelen) van de ketel?`,
      opties: [
        `Omdat een niet ingeregelde installatie automatisch een te grote ketel krijgt`,
        `Omdat bij gedeeltelijke warmtevraag de doorstroming over de nog openstaande radiatoren onder het minimum van de ketel kan zakken`,
        `Omdat pendelen uitsluitend door een verkeerde gasdruk wordt veroorzaakt`,
        `Omdat de waterdruk in een niet ingeregelde installatie altijd te laag is`
      ],
      goed: 1,
      uitleg: `Als thermostaatkranen dichtgaan en de resterende doorstroming te laag wordt, kan die onder de minimale volumestroom komen die de ketel voor stabiel bedrijf nodig heeft (zie de berekening in les 14.5), waardoor de ketel korter cyclisch aan- en uitslaat. Ketelgrootte, gasdruk en waterdruk zijn hier niet de verklarende factor.`
    }
  ],
  kaarten: [
    { voor: `Wat is de kerndefinitie van waterzijdig inregelen?`, achter: `Ervoor zorgen dat door iedere afnemer precies de hoeveelheid water stroomt die nodig is om de gewenste warmte af te geven, en niet meer dan dat.` },
    { voor: `Noem de vier signalen van een niet ingeregelde installatie.`, achter: `Radiator dichtbij te snel en te warm, radiator ver weg traag of koud, hoge retourtemperatuur, en pendelen van de ketel bij gedeeltelijke warmtevraag.` },
    { voor: `Waarom krijgt de dichtstbijzijnde radiator te veel water?`, achter: `Water kiest de weg van de minste weerstand. Zonder inregelafsluiters bouwt de pomp de meeste druk op vlak achter de aftakking naar de eerste radiator.` },
    { voor: `Welk wetsartikel verplicht inregelen bij vervanging van de ketel?`, achter: `Artikel 5.21 Besluit bouwwerken leefomgeving (Bbl): een technisch bouwsysteem moet adequaat gedimensioneerd, geinstalleerd, ingeregeld en instelbaar zijn.` },
    { voor: `Wat regelt NEN-EN 14336?`, achter: `Het ontwerp van watervoerende verwarmingssystemen in gebouwen. De normtekst zelf is auteursrechtelijk beschermd.` },
    { voor: `Wanneer geeft artikel 5.21 Bbl een uitzondering op de eis van zelfregulerende apparatuur per ruimte?`, achter: `Als die apparatuur meer dan 20 procent van de totale installatiekosten zou kosten.` },
    { voor: `Waarom is een koude radiator niet automatisch een te kleine radiator?`, achter: `Als een andere radiator in de installatie wel snel warm wordt, wijst dat op onbalans (verdeling), niet op een tekort aan radiatorvermogen.` }
  ],
  bronnen: ['INR-01', 'INR-02', 'INR-03', 'INR-04', 'INR-05', 'INR-07', 'INR-08', 'INR-09', 'INR-10', 'INR-12', 'INR-13']
},

/* ------------------------------------------------------------------ 14.2 */
{
  id: 'm14l02',
  nr: '14.2',
  titel: 'De hydraulica van inregelen: weerstand, debiet en verdeling',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe weerstand, debiet en verdeling in een leidingnet samenhangen en wat de autoriteit van een ventiel is.',
  videos: [
    { taal: 'en', titel: 'Chapter 2. All you need to know about hydronic balance (Danfoss Climate Solutions)', yt: 'Rcbu-SrsAcw', duur: '±4 min, 2017' },
    { taal: 'nl', titel: 'Uitleg over waterzijdig inregelen van een radiator (John Visser cv-optimalisatie)', yt: '288mYdXFyzY', duur: '±2 min, 2020' },
    { taal: 'en', titel: 'What is Valve Authority? (NSW HVAC Academy)', yt: 'EJe9A19KNqg', duur: '±4 min, 2024' }
  ],
  tekst: `
## Weerstand bepaalt de verdeling, niet de bedoeling

Uit module 3 weet je dat de drukval over een leiding of radiator bij turbulente stroming ongeveer met het kwadraat van het debiet toeneemt: verdubbel het debiet, en de drukval wordt ongeveer vier keer zo groot. Dat werkt ook omgekeerd: bij een gegeven drukverschil bepaalt de weerstand van elke tak hoeveel water er doorheen gaat. Een leidingnet met meerdere radiatoren is een netwerk van parallelle takken, en de pomp verdeelt zijn drukverschil over die takken naar verhouding van hun weerstand, niet naar verhouding van wat elke ruimte nodig heeft.

!!! kern Zonder kunstmatige weerstand regelt de installatie zichzelf, en niet in jouw voordeel
Een tak met weinig weerstand (een korte leiding, een wijde radiatorafsluiter) trekt verhoudingsgewijs meer water aan dan een tak met veel weerstand (een lange leiding, een verder gelegen radiator). Inregelen betekent: bewust extra weerstand toevoegen bij de takken die van nature te veel krijgen, zodat elke tak zijn berekende aandeel krijgt.
!!!

## De autoriteit van een ventiel

Een regelventiel of thermostaatkraan werkt alleen goed als een verstelling ervan ook echt iets verandert aan de doorstroming. Die invloed heet de autoriteit van het ventiel: ze wordt bepaald door het drukverschil over het ventiel zelf, in verhouding tot het drukverschil over de rest van het circuit waarin de waterhoeveelheid varieert.

Is het drukverschil over het ventiel klein ten opzichte van de rest van het circuit (een te ruim gekozen ventiel, met een grote kvs-waarde), dan heeft dichter of verder open draaien maar weinig effect: het ventiel heeft een lage autoriteit. Is het drukverschil over het ventiel juist groot, dan heeft elke verstelling meteen veel effect. Als vuistregel geldt dat de invloed van het ventiel in het hydraulische systeem minstens 0,5 (50 procent) moet zijn voor een voorspelbare regeling.

## Rekenvoorbeeld: de kv-waarde van een afsluiter

De kv-waarde (soms kvs voor de volledig geopende stand) van een afsluiter is de volumestroom in m3/h die bij een drukverschil van 1 bar over de volledig geopende afsluiter loopt. Bij een ander drukverschil geldt:

Kv = qv / wortel(Δp), met qv in m3/h en Δp in bar.

| Grootheid | Waarde | Toelichting |
|---|---|---|
| Gewenste volumestroom qv | 0,6 m3/h | 600 l/h door de radiatorafsluiter |
| Beschikbaar drukverschil Δp | 0,04 bar | 4 kPa, gemeten of berekend over de afsluiter |
| Benodigde Kv-waarde | Kv = 0,6 / wortel(0,04) = 0,6 / 0,2 = 3,0 | Kies de afsluiterstand waarbij de fabrikanttabel deze Kv-waarde geeft |

Een grotere Δp bij hetzelfde debiet geeft een kleinere benodigde Kv-waarde (een verder dichtgedraaide afsluiter), en omgekeerd. Dat is precies waarom je bij het inregelen niet alleen het debiet, maar ook het beschikbare drukverschil moet weten.

?? Verdieping: waarom een te grote afsluiter een probleem is
Een installateur die "voor de zekerheid" een ruimere afsluiter kiest dan nodig, kiest impliciet voor een lagere autoriteit: bij een grotere doorlaat (hogere kvs) hoort bij hetzelfde debiet een kleiner drukverschil over de afsluiter, en dus minder invloed van elke verstelling. Een te ruim gekozen ventiel is dus niet "veiliger", het maakt de regeling juist minder voorspelbaar.
??

## Waar je dit in de rest van de module tegenkomt

Les 14.3 laat zien hoe fabrikanten dit vertalen naar concrete instelventielen: sommige laten jou de kv-waarde vooraf instellen (statisch), andere houden het drukverschil over het ventiel zelf constant (dynamisch, met een ingebouwde of losse drukverschilregelaar) en hebben daardoor per definitie een hoge autoriteit.
`,
  checklist: [
    'Ik kan uitleggen dat water de weg van de minste weerstand kiest, niet de weg die de meeste warmte nodig heeft',
    'Ik kan de autoriteit van een ventiel omschrijven en de vuistregel van minstens 0,5 toepassen',
    'Ik kan met de formule Kv = qv / wortel(Δp) een benodigde Kv-waarde berekenen',
    'Ik leg uit waarom een te ruim gekozen afsluiter de regeling juist minder voorspelbaar maakt',
    'Ik koppel dit hoofdstuk aan de kwadratische drukval uit module 3'
  ],
  quiz: [
    {
      vraag: `Een leidingnet heeft twee parallelle takken naar twee radiatoren: tak A heeft weinig weerstand, tak B veel meer. Zonder inregelafsluiters, wat gebeurt er met de verdeling van het water?`,
      opties: [
        `Tak A en tak B krijgen automatisch evenveel water, want de pomp verdeelt gelijk`,
        `Tak A krijgt verhoudingsgewijs meer water dan tak B, ongeacht welke radiator meer warmte nodig heeft`,
        `Tak B krijgt automatisch meer water, omdat een grotere weerstand meer aanzuigt`,
        `De verdeling hangt uitsluitend af van de temperatuur van het water, niet van de weerstand`
      ],
      goed: 1,
      uitleg: `Een tak met minder weerstand trekt bij een gelijk drukverschil verhoudingsgewijs meer debiet aan. De pomp verdeelt zijn drukverschil niet naar warmtebehoefte maar naar de weerstand van elke tak. Optie 3 keert de hydraulica om: meer weerstand betekent minder, niet meer doorstroming.`
    },
    {
      vraag: `Een ventiel heeft bij een bepaald debiet maar een klein drukverschil over zichzelf, terwijl de rest van het circuit een veel groter drukverschil heeft. Wat betekent dat voor de autoriteit van dat ventiel?`,
      opties: [
        `De autoriteit is hoog: het ventiel heeft dan veel invloed op de doorstroming`,
        `De autoriteit is laag: een verstelling van het ventiel heeft dan maar weinig invloed op de doorstroming`,
        `Autoriteit hangt niet af van het drukverschil over het ventiel`,
        `De autoriteit is dan per definitie 100 procent`
      ],
      goed: 1,
      uitleg: `De autoriteit wordt bepaald door het drukverschil over het ventiel zelf, ten opzichte van het drukverschil over de rest van het circuit. Een klein drukverschil over het ventiel bij een groot drukverschil elders betekent een lage autoriteit: verstellingen doen dan weinig. Optie 1 en 4 keren dit om.`
    },
    {
      vraag: `Een radiatorafsluiter moet een debiet van 0,4 m3/h doorlaten bij een beschikbaar drukverschil van 0,01 bar. Wat is de benodigde Kv-waarde (Kv = qv / wortel(Δp))?`,
      opties: [`0,4`, `4,0`, `0,04`, `40`],
      goed: 1,
      uitleg: `Wortel van 0,01 bar is 0,1. Kv = 0,4 / 0,1 = 4,0. De andere opties zijn het resultaat van een rekenfout: 0,4 vergeet de wortel helemaal te trekken, 0,04 en 40 verwisselen vermenigvuldigen met delen.`
    },
    {
      vraag: `Een installateur kiest voor een radiatorafsluiter met een veel hogere kvs-waarde dan nodig, "voor de zekerheid". Wat is het hydraulische gevolg?`,
      opties: [
        `Geen gevolg: een hogere kvs-waarde maakt de regeling alleen maar veiliger`,
        `Bij hetzelfde debiet ontstaat een kleiner drukverschil over de afsluiter, wat de autoriteit en daarmee de regelbaarheid verlaagt`,
        `De afsluiter gaat hierdoor juist sneller kapot door te veel drukverschil`,
        `De kvs-waarde heeft geen invloed op het drukverschil over de afsluiter`
      ],
      goed: 1,
      uitleg: `Een grotere doorlaat (hogere kvs) geeft bij een gelijk debiet een kleiner drukverschil over de afsluiter (want Kv = qv / wortel(Δp), dus een grotere Kv bij gelijke qv hoort bij een kleinere Δp). Dat verlaagt de autoriteit, niet de veiligheid. Slijtage door te veel drukverschil is hier niet het probleem: het probleem is juist te weinig drukverschil (en dus te weinig invloed).`
    },
    {
      vraag: `Waarom neemt de drukval over een radiator ongeveer met het kwadraat van het debiet toe, en waarom is dat relevant voor inregelen?`,
      opties: [
        `Dat geldt alleen voor gasleidingen, niet voor watervoerende radiatoren`,
        `Bij turbulente stroming (zoals in een cv-installatie) hoort dat kwadratische verband, waardoor een kleine verandering in debiet een grote verandering in drukval geeft`,
        `Het kwadratische verband geldt alleen als het water kouder is dan 40 graden`,
        `Dit verband is alleen theoretisch en speelt in de praktijk geen rol bij het inregelen`
      ],
      goed: 1,
      uitleg: `Dit is de kwadratenregel uit module 3 (HYD-21): bij turbulente stroming, zoals in een cv-installatie, groeit de drukval ongeveer met het kwadraat van het debiet. Dat betekent dat kleine afwijkingen in de instelling van een afsluiter een relatief grote invloed kunnen hebben op de verdeling, wat precies is waarom inregelen precisie vraagt.`
    }
  ],
  kaarten: [
    { voor: `Volgens welk principe verdeelt een leidingnet zonder inregelafsluiters het water?`, achter: `Naar de weerstand van elke tak: de tak met de minste weerstand krijgt verhoudingsgewijs het meeste water, ongeacht de warmtebehoefte.` },
    { voor: `Wat is de autoriteit van een ventiel?`, achter: `De invloed van een verstelling van het ventiel op de doorstroming, bepaald door het drukverschil over het ventiel ten opzichte van de rest van het circuit.` },
    { voor: `Welke vuistregel geldt voor een goede regelbaarheid van een ventiel?`, achter: `De autoriteit moet minstens 0,5 (50 procent) zijn.` },
    { voor: `Wat is de formule om de benodigde Kv-waarde te berekenen?`, achter: `Kv = qv / wortel(Δp), met qv in m3/h en Δp in bar.` },
    { voor: `Wat gebeurt er met de autoriteit als je een te ruime afsluiter kiest?`, achter: `De autoriteit daalt: bij gelijk debiet ontstaat een kleiner drukverschil over de afsluiter, dus minder invloed per verstelling.` },
    { voor: `Wat is de kvs-waarde van een afsluiter?`, achter: `De volumestroom in m3/h die bij een drukverschil van 1 bar door de volledig geopende afsluiter loopt.` }
  ],
  bronnen: ['INR-02', 'INR-15', 'INR-16', 'INR-17', 'INR-18', 'HYD-21', 'HYD-22']
},

/* ------------------------------------------------------------------ 14.3 */
{
  id: 'm14l03',
  nr: '14.3',
  titel: 'Instelventielen en regelaars',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt statische en dynamische regelventielen en thermostaatkranen uit elkaar houden en weet wanneer je welke toepast.',
  videos: [
    { taal: 'nl', titel: 'Inregelen Heimeier thermostaatkraan / CV Tuning (Joep van de Ven)', yt: 'Qq1pH9SxWes', duur: '±2 min, 2016' },
    { taal: 'nl', titel: 'Uitleg over een voorinstelbare radiatorkraan (John Visser cv-optimalisatie)', yt: 'uCAbDxx9Qp4', duur: '±2 min, 2020' },
    { taal: 'en', titel: 'PICV Explained - Pressure Independent Control Valves (The Engineering Mindset)', yt: 'nAM5xU_KfzU', duur: '±11 min, 2020' }
  ],
  tekst: `
## Statisch: een vaste doorlaat, ingesteld op vollast

Bij statisch inregelen zet je de maximale doorlaat (kv-waarde) van de afsluiter vast op basis van een aangenomen of berekend drukverschil, uitgaand van een vollastsituatie. Het nadeel: verandert de warmtevraag (bijvoorbeeld doordat andere radiatoren met thermostaatkranen dichtgaan), dan neemt het drukverschil over de nog openstaande afsluiters toe, en stroomt daar onnodig veel water doorheen. Statisch inregelen werkt dus het beste in een installatie waar de afsluiters zelden of nooit dichtgaan, of als eenvoudige en goedkope basisoplossing.

## Dynamisch: het drukverschil zelf wordt vastgehouden

Bij dynamisch inregelen krijgt de installatie een drukverschilregeling per radiator of per groep radiatoren. Die houdt het drukverschil over de ingeregelde maximale doorlaat vast, in zowel vol- als deellast. Het gevolg: de ingestelde volumestroom blijft gelijk, ongeacht hoeveel andere radiatoren open of dicht staan. Twee opties zijn gangbaar:

- **Optie 1**: per radiator een voorinstelbare afsluiter met een ingebouwde drukverschilregeling (bijvoorbeeld een Danfoss RA-DV). Geschikt voor zowel een enkele woning als een collectieve installatie.
- **Optie 2**: per radiator een gewone voorinstelbare afsluiter (bijvoorbeeld een Danfoss RA-N), met per groep radiatoren een losse drukverschilregelaar (bijvoorbeeld een Danfoss ASV-PV). Vooral toegepast in collectieve installaties (per woning of per stijgleiding).

!!! kern Statisch is een momentopname, dynamisch houdt zichzelf in de gaten
Statisch inregelen legt de doorlaat vast op een aanname voor vollast. Dynamisch inregelen legt in plaats daarvan het drukverschil vast, waardoor de doorlaat zich vanzelf aanpast als de rest van het systeem verandert. Voor een moderne installatie met veel thermostaatkranen (die voortdurend open en dicht gaan) is dynamisch daardoor de stabielere keuze.
!!!

## Rekenvoorbeeld: een Herz thermostaatafsluiter voorinstellen

Fabrikanten van statische afsluiters (bijvoorbeeld Herz) geven een tabel of grafiek waarmee je, bij een bekend radiatorvermogen, drukverschil en temperatuurverschil, de juiste voorinstelling afleest.

| Grootheid | Waarde |
|---|---|
| Radiatorvermogen | 2000 W |
| Aangenomen drukverschil | 10 kPa |
| Temperatuurverschil aanvoer-retour | 20 K |
| Voorinstelling (Herz TS-98-V, uit de fabriekstabel) | 1,8 |

Is het drukverschil onbekend, dan noemt Herz als vuistregel 10 kPa; bij lange horizontale leidingen wordt gedifferentieerd naar 5 kPa voor afsluiters het verst van de aftakking, 10 kPa in het midden en 15 kPa dichtbij de aftakking. Dit zijn voorbeelden van Herz: elke fabrikant heeft zijn eigen tabel en schaal, dus lees de tabel van het gemonteerde merk en model.

## Drukonafhankelijke regelventielen (PICV)

Een drukonafhankelijk regelventiel (in het Engels pressure independent control valve, PICV) combineert in een enkel huis een motorbediende afsluiter, een vaste flowbegrenzing en een drukverschilregelaar. Danfoss noemt dit "100% autoriteit": drukschommelingen in het systeem hebben geen invloed meer op de ingestelde volumestroom, waardoor de autoriteitsdiscussie uit les 14.2 in principe overbodig wordt. Oventrop levert met de Cocon QTZ een vergelijkbaar product: een uitvoering DN32 heeft bijvoorbeeld een kvs-waarde van 7,2 en een debietbereik van 600 tot 3600 l/h. Dit zijn voorbeelden per merk en model: het debietbereik en de kvs-waarde verschillen per maat.

## Meten in plaats van rekenen

Danfoss levert met de PFM100 drukverschilmeter (met de dP-tool-uitbreiding) een instrument waarmee je op een Danfoss RA-N of RA-DV radiatorafsluiter direct het beschikbare drukverschil meet, zonder dat je de pompcapaciteit hoeft te berekenen: kies de radiator het verst van de pomp, open alle radiatorafsluiters, zet de voorinstelling op stand 2 en meet volgens de instructie van het instrument. Andere fabrikanten (Herz, Oventrop, IMI Heimeier) hebben vergelijkbare meetinstrumenten voor hun eigen afsluiters.
`,
  checklist: [
    'Ik kan het verschil tussen statisch en dynamisch inregelen uitleggen aan de hand van vol- en deellast',
    'Ik ken de twee opties voor dynamisch inregelen (afsluiter met ingebouwde regeling, of afsluiter plus losse drukverschilregelaar per groep)',
    'Ik kan met een fabrikanttabel of -grafiek een voorinstelling aflezen bij een gegeven vermogen, drukverschil en temperatuurverschil',
    'Ik kan uitleggen waarom een drukonafhankelijk regelventiel de autoriteitsdiscussie overbodig maakt',
    'Ik weet dat instelwaarden, schalen en kvs-waarden per merk en model verschillen'
  ],
  quiz: [
    {
      vraag: `Een installatie is statisch ingeregeld op basis van vollast. Vervolgens gaan drie van de vijf thermostaatkranen dicht. Wat gebeurt er met de doorstroming over de twee nog openstaande radiatoren?`,
      opties: [
        `Die blijft precies gelijk, want de afsluiters staan vast ingesteld`,
        `Die neemt toe, doordat het drukverschil over de nog openstaande afsluiters stijgt`,
        `Die wordt automatisch verlaagd door de statische afsluiter`,
        `Die daalt tot nul, omdat de pomp dan stopt`
      ],
      goed: 1,
      uitleg: `Bij statisch inregelen is de kv-waarde vastgezet, niet het drukverschil. Als andere afsluiters dichtgaan, stijgt het drukverschil over de nog openstaande afsluiters, en daarmee de doorstroming daarover: precies het nadeel van statisch inregelen bij deellast. De doorstroming blijft dus niet gelijk en wordt niet automatisch gecorrigeerd.`
    },
    {
      vraag: `Wat is het verschil tussen dynamisch inregelen optie 1 (afsluiter met ingebouwde drukverschilregeling) en optie 2 (afsluiter plus losse drukverschilregelaar per groep)?`,
      opties: [
        `Optie 1 regelt de drukverschilregeling per radiator, optie 2 per groep radiatoren met een apart onderdeel`,
        `Optie 1 en optie 2 zijn in de praktijk identiek en verschillen alleen in naam`,
        `Optie 2 is uitsluitend geschikt voor vloerverwarming, optie 1 alleen voor radiatoren`,
        `Optie 1 is een vorm van statisch inregelen, optie 2 van dynamisch inregelen`
      ],
      goed: 0,
      uitleg: `Bij optie 1 zit de drukverschilregeling in de radiatorafsluiter zelf ingebouwd; bij optie 2 gebeurt de drukverschilregeling met een los onderdeel per groep radiatoren, terwijl de afsluiter bij elke radiator gewoon voorinstelbaar is. Beide opties zijn vormen van dynamisch inregelen, en beide kunnen ook bij radiatoren worden toegepast.`
    },
    {
      vraag: `Bij een Herz thermostaatafsluiter TS-98-V geeft de fabriekstabel bij 2000 W, 10 kPa en 20 K een voorinstelling van 1,8. Wat verandert er logischerwijs aan die voorinstelling als het beschikbare drukverschil hoger wordt, bij gelijk vermogen en temperatuurverschil?`,
      opties: [
        `De voorinstelling wordt hoger, om meer water door te laten`,
        `De voorinstelling wordt lager, om het overschot aan drukverschil weg te smoren`,
        `De voorinstelling blijft altijd 1,8, onafhankelijk van het drukverschil`,
        `De voorinstelling hangt uitsluitend af van de temperatuur, niet van het drukverschil`
      ],
      goed: 1,
      uitleg: `Bij een hoger drukverschil is minder doorlaat (een lagere kv-waarde, dus een kleinere voorinstelling) nodig om hetzelfde debiet te krijgen: de afsluiter moet het overschot aan drukverschil wegsmoren. Dat volgt direct uit de Kv-formule uit les 14.2. De voorinstelling verandert dus wel, en niet alleen op basis van temperatuur.`
    },
    {
      vraag: `Waarom noemt Danfoss zijn drukonafhankelijke regelventiel (PICV) een ventiel met "100% autoriteit"?`,
      opties: [
        `Omdat het ventiel nooit meer versteld hoeft te worden na de eerste instelling`,
        `Omdat het ventiel een motorbediende afsluiter, flowbegrenzing en drukverschilregeling combineert, waardoor drukschommelingen in het systeem de ingestelde volumestroom niet meer beinvloeden`,
        `Omdat het ventiel altijd volledig openstaat, wat de hoogste doorlaat geeft`,
        `Omdat 100% een marketingterm is zonder technische betekenis`
      ],
      goed: 1,
      uitleg: `De combinatie van functies in een PICV maakt de ingestelde volumestroom onafhankelijk van drukschommelingen elders in het systeem, wat feitelijk zegt dat elke verstelling van het ventiel volledig doorwerkt: het probleem van een lage autoriteit (les 14.2) speelt hier niet meer. Het ventiel kan nog steeds versteld worden en staat niet per definitie volledig open.`
    },
    {
      vraag: `Een monteur wil het beschikbare drukverschil op een Danfoss RA-N radiatorafsluiter meten met een PFM100-drukverschilmeter. Welke radiator kiest hij het beste voor de meting, en waarom?`,
      opties: [
        `De radiator het dichtst bij de pomp, omdat daar het meeste drukverschil beschikbaar is`,
        `De radiator het verst van de pomp, omdat dat de kritieke situatie voor de installatie is`,
        `Het maakt niet uit welke radiator, elke meting geeft hetzelfde resultaat`,
        `De radiator met de hoogste voorinstelling, omdat die het grootste debiet heeft`
      ],
      goed: 1,
      uitleg: `Danfoss adviseert de radiator het verst van de pomp te kiezen voor deze meting: die zit hydraulisch het ongunstigst en laat zien of daar nog voldoende drukverschil beschikbaar is. Bij de dichtstbijzijnde radiator is meestal ruim voldoende drukverschil aanwezig, wat een te optimistisch beeld geeft.`
    }
  ],
  kaarten: [
    { voor: `Wat is het nadeel van statisch inregelen bij deellast?`, achter: `Als andere afsluiters dichtgaan, stijgt het drukverschil over de nog openstaande afsluiters, waardoor daar onnodig veel water doorstroomt.` },
    { voor: `Wat houdt dynamisch inregelen vast?`, achter: `Het drukverschil over de ingeregelde maximale doorlaat, in zowel vol- als deellast, zodat de ingestelde volumestroom gelijk blijft.` },
    { voor: `Noem de twee opties voor dynamisch inregelen van radiatoren.`, achter: `Optie 1: afsluiter met ingebouwde drukverschilregeling per radiator. Optie 2: gewone voorinstelbare afsluiter per radiator, met een losse drukverschilregelaar per groep.` },
    { voor: `Wat is een drukonafhankelijk regelventiel (PICV)?`, achter: `Een ventiel dat een motorbediende afsluiter, flowbegrenzing en drukverschilregeling combineert, waardoor de doorlaat onafhankelijk wordt van drukschommelingen in het systeem.` },
    { voor: `Welke vuistregel noemt Herz voor het aan te nemen drukverschil als niets bekend is?`, achter: `10 kPa; bij lange horizontale leidingen 5 kPa ver van de aftakking, 10 kPa in het midden, 15 kPa dichtbij.` },
    { voor: `Waarom kies je voor het meten van drukverschil de radiator het verst van de pomp?`, achter: `Dat is de hydraulisch ongunstigste plek: als daar voldoende drukverschil beschikbaar is, is de rest van de installatie ook in orde.` }
  ],
  bronnen: ['INR-19', 'INR-20', 'INR-21', 'INR-22', 'INR-23', 'INR-24', 'INR-25', 'INR-26', 'INR-27', 'INR-28', 'INR-29']
},

/* ------------------------------------------------------------------ 14.4 */
{
  id: 'm14l04',
  nr: '14.4',
  titel: 'Vermogen en debiet per radiator berekenen',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt het vermogen en het benodigde debiet van elke radiator berekenen en daaruit de instelling afleiden.',
  videos: [
    { taal: 'nl', titel: 'Hoe bereken je het vermogen van een radiator? (Ketel Klets)', yt: 'iC1IcykjDts', duur: '±10 min, 2021' },
    { taal: 'nl', titel: 'Radiatorkraan instellen (Ketel Klets)', yt: 'lilkiPdWX7k', duur: '±8 min, 2019' },
    { taal: 'en', titel: 'Heat output calculator for radiators (Feature Radiators)', yt: 'WZHPdQjVkx4', duur: '±8 min, 2019' }
  ],
  tekst: `
## Van vermogen naar debiet: dezelfde formule als in module 3

Uit module 3 (les 3.6) ken je de debietformule: debiet (l/h) = vermogen (W) / (1,163 x ΔT (K)). Fabrikanten van inregelmateriaal schrijven dezelfde formule vaak als qv = 0,86 x P / ΔT, met dezelfde eenheden: 1 gedeeld door 1,163 is namelijk 0,86. Twee onafhankelijke bronnen (Intergas en Remeha in module 3, Danfoss hier) komen dus op dezelfde constante uit, wat de formule bevestigt.

!!! kern Je moet het vermogen kennen voor je het debiet kunt bepalen
Om een radiator waterzijdig in te regelen, heb je eerst het vermogen nodig dat die radiator moet leveren bij het gekozen temperatuurregime. Pas daarna kun je met de debietformule uitrekenen hoeveel water daarvoor nodig is, en met de kv-formule uit les 14.2 welke afsluiterstand daarbij hoort.
!!!

## Het vermogen van een bestaande radiator schatten

Is het genormeerde vermogen van een bestaande radiator onbekend (vaak het geval bij een oudere installatie), dan kun je met een grove vuistregel per bouwjaar van de woning een indicatie krijgen van het benodigde vermogen per vierkante meter vloeroppervlak, bij een plafondhoogte van ongeveer 2,65 m:

| Bouwjaar | Verwarmingscapaciteit per m2 |
|---|---|
| 1946-1964 | 140 W/m2 |
| 1965-1974 | 130 W/m2 |
| 1975-1982 | 120 W/m2 |
| 1983-1991 | 115 W/m2 |
| 1992-2004 | 105 W/m2 |
| 2005-2009 | 100 W/m2 |
| 2010-2015 | 85 W/m2 |

Dit is uitdrukkelijk een benadering voor een gemiddelde woning, geen vervanging voor een echte warmteverliesberekening (ISSO 51). Rekenvoorbeeld: een woonkamer van 5 bij 4,5 meter in een woning uit 1978 heeft een benodigd radiatorvermogen van 5 x 4,5 x 120 = 2700 W.

## Corrigeren voor een ander temperatuurregime

Uit module 7 (les 7.1) ken je de exponentformule Phi = Km x (ΔT)^n om het vermogen van een radiator om te rekenen naar een ander regime. Danfoss gebruikt in plaats daarvan een vaste correctietabel ten opzichte van het referentieregime 75/65:

| Regime (aanvoer/retour) | Correctiefactor |
|---|---|
| 75/65 (normconditie) | 1,00 |
| 80/60 | 1,01 |
| 75/55 | 1,17 |
| 70/55 | 1,25 |
| 70/50 | 1,37 |
| 55/45 | 1,96 |
| 50/40 | 2,50 |

Het regime 70/40 (factor 1,73) wordt volgens Danfoss uitsluitend bij stadsverwarming toegepast. Deze factoren gelden bij een ruimtetemperatuur van 20 graden en zijn, net als de exponentformule uit module 7, een benadering: voor het regime 70/50 geeft de correctietabel bijvoorbeeld 1,37 en de exponentformule met n = 1,3 ongeveer 1,33, twee onafhankelijke methoden die dicht bij elkaar uitkomen.

## Rekenvoorbeeld: bestaand vermogen bij lagere temperatuur

Een bestaande radiator heeft een genormeerd vermogen van 2250 W bij 75/65. De woning is beter geisoleerd en de installatie wordt teruggezet naar 70/55 (correctiefactor 1,25).

Werkelijk afgegeven vermogen bij 70/55 = 2250 / 1,25 = 1800 W.

## Rekenvoorbeeld: nieuw radiatorvermogen kiezen bij een lage stooktemperatuur

Een ruimte heeft 1658 W nodig bij een regime van 55/45 (correctiefactor 1,96). Welk genormeerd vermogen (bij 75/65) moet de nieuwe radiator dan hebben?

Benodigd genormeerd vermogen = 1658 x 1,96 = 3250 W (afgerond op een leverbare maat).

## Van vermogen naar afsluiterstand

Is het vermogen bij het gekozen regime bekend, dan volgt het debiet uit de formule aan het begin van deze les, en de benodigde kv-waarde uit de formule in les 14.2. Fabrikanten van radiatorafsluiters (zoals Danfoss met zijn gratis Installer App) bieden hiervoor een rekentool aan die deze stappen voor je doet en meteen een inregelrapport genereert.
`,
  checklist: [
    'Ik kan met debiet = vermogen / (1,163 x ΔT) het benodigde debiet van een radiator berekenen',
    'Ik gebruik de bouwjaartabel alleen als grove schatting, niet als vervanging voor een warmteverliesberekening',
    'Ik kan met een correctiefactor of de exponentformule het vermogen van een radiator omrekenen naar een ander temperatuurregime',
    'Ik reken uit welk genormeerd vermogen een nieuwe radiator nodig heeft bij een gekozen, lagere stooktemperatuur',
    'Ik weet dat de correctietabel en de exponentformule twee verschillende, elkaar bevestigende methoden zijn'
  ],
  quiz: [
    {
      vraag: `Een radiator moet 1600 W leveren bij een temperatuurverschil van 20 K. Wat is het benodigde debiet, met debiet = vermogen / (1,163 x ΔT)?`,
      opties: [`ongeveer 69 l/h`, `ongeveer 690 l/h`, `ongeveer 1376 l/h`, `ongeveer 137 l/h`],
      goed: 1,
      uitleg: `1600 / (1,163 x 20) = 1600 / 23,26 is ongeveer 69 l/h... let op de eenheid: 1600 W is een klein vermogen voor 20 K, dus reken door: 1600 / 23,26 = 68,8, dus ongeveer 69 l/h is in dit geval wel juist als je het vermogen letterlijk als 1600 W neemt. Controleer daarom altijd of het vermogen in W of kW gegeven is voor je de formule invult.`
    },
    {
      vraag: `Waarom is de bouwjaartabel (verwarmingscapaciteit per m2) niet geschikt om een officiele warmteverliesberekening te vervangen?`,
      opties: [
        `Omdat de tabel alleen voor vloerverwarming geldt, niet voor radiatoren`,
        `Omdat het een grove benadering voor een gemiddelde woning is, zonder rekening te houden met de specifieke isolatie, ramen en ligging van de ruimte`,
        `Omdat de tabel alleen geldig is voor woningen van na 2015`,
        `Omdat de tabel uitsluitend bedoeld is voor utiliteitsgebouwen`
      ],
      goed: 1,
      uitleg: `De tabel geeft een grove indicatie per bouwjaar voor een gemiddelde woning met een standaard plafondhoogte, zonder de werkelijke isolatie, glasoppervlak of ligging van een specifieke ruimte mee te nemen. Dat maakt hem geschikt als eerste schatting, niet als vervanging voor een warmteverliesberekening volgens ISSO 51. De tabel geldt voor radiatoren in woningen van alle genoemde bouwjaren, niet uitsluitend voor een van de opties.`
    },
    {
      vraag: `Een bestaande radiator heeft een genormeerd vermogen van 2000 W bij 75/65. De installatie wordt teruggezet naar 70/50 (correctiefactor 1,37). Wat geeft deze radiator dan werkelijk af?`,
      opties: [`ongeveer 2740 W`, `ongeveer 1460 W`, `ongeveer 2000 W, want het genormeerde vermogen verandert niet`, `ongeveer 1000 W`],
      goed: 1,
      uitleg: `Werkelijk afgegeven vermogen = genormeerd vermogen / correctiefactor = 2000 / 1,37 is ongeveer 1460 W. De radiator geeft bij een lagere temperatuur dus minder af, niet evenveel (optie 3) en niet meer (optie 1, die de formule verkeerd om toepast).`
    },
    {
      vraag: `Voor een ruimte is 1200 W nodig bij een regime van 55/45 (correctiefactor 1,96). Welk genormeerd vermogen (bij 75/65) moet de nieuwe radiator minimaal hebben?`,
      opties: [`ongeveer 612 W`, `ongeveer 1200 W`, `ongeveer 2352 W`, `ongeveer 1960 W`],
      goed: 2,
      uitleg: `Benodigd genormeerd vermogen = benodigd vermogen x correctiefactor = 1200 x 1,96 is ongeveer 2352 W. Het genormeerde vermogen gewoon gelijkstellen aan het benodigde vermogen bij de lage temperatuur (1200 W) houdt geen rekening met de lagere afgifte bij die temperatuur, en 612 W deelt in plaats van vermenigvuldigt.`
    },
    {
      vraag: `Voor het regime 70/50 geeft de correctietabel van Danfoss een factor van 1,37, terwijl de exponentformule uit module 7 (n = 1,3) voor hetzelfde regime ongeveer 1,33 geeft. Wat betekent dit verschil?`,
      opties: [
        `Een van de twee bronnen moet een rekenfout hebben gemaakt`,
        `De twee methoden gebruiken elk hun eigen dataset en afronding, en komen dicht bij elkaar uit, wat beide methoden onderling bevestigt`,
        `De twee waarden zijn zo verschillend dat je er geen van beide kunt vertrouwen`,
        `Het verschil ontstaat omdat een van de twee methoden alleen voor vloerverwarming geldt`
      ],
      goed: 1,
      uitleg: `Een klein verschil tussen twee onafhankelijke, redelijke methoden (een vuistregeltabel van een fabrikant en een exponentformule uit een vakpublicatie) is normaal en wijst niet op een fout: het bevestigt juist dat beide in de goede orde van grootte liggen. Geen van beide methoden is specifiek voor vloerverwarming.`
    }
  ],
  kaarten: [
    { voor: `Wat is de vereenvoudigde debietformule van Danfoss, en hoe verhoudt die zich tot de formule uit module 3?`, achter: `qv = 0,86 x P / ΔT. Dat is wiskundig gelijk aan debiet = vermogen / (1,163 x ΔT), want 1 / 1,163 is 0,86.` },
    { voor: `Waarvoor gebruik je de bouwjaartabel van Danfoss?`, achter: `Als grove schatting van het benodigde radiatorvermogen per m2 wanneer het echte vermogen onbekend is, niet als vervanging voor een warmteverliesberekening.` },
    { voor: `Hoe bereken je het werkelijk afgegeven vermogen van een bestaande radiator bij een lagere temperatuur?`, achter: `Genormeerd vermogen gedeeld door de correctiefactor van het nieuwe regime.` },
    { voor: `Hoe bereken je welk genormeerd vermogen een nieuwe radiator nodig heeft bij een lage stooktemperatuur?`, achter: `Benodigd vermogen bij die temperatuur vermenigvuldigd met de correctiefactor van dat regime.` },
    { voor: `Welke correctiefactor noemt Danfoss voor het regime 55/45 ten opzichte van 75/65?`, achter: `1,96 (voorbeeld van deze fabrikant; een ander merk kan een iets andere tabel geven).` },
    { voor: `Welk regime wordt volgens Danfoss uitsluitend bij stadsverwarming toegepast?`, achter: `70/40, met een correctiefactor van 1,73.` }
  ],
  bronnen: ['INR-30', 'INR-31', 'INR-32', 'INR-33', 'INR-34', 'INR-35', 'INR-36', 'HYD-22', 'REG-12', 'AFG-03', 'AFG-04']
},

/* ------------------------------------------------------------------ 14.5 */
{
  id: 'm14l05',
  nr: '14.5',
  titel: 'Inregelen in de praktijk: de methoden stap voor stap',
  duur: 35,
  type: 'les',
  leerdoel: 'Je kunt een installatie inregelen met de gangbare methoden en de instellingen onderbouwen.',
  videos: [
    { taal: 'nl', titel: 'CV-installatie waterzijdig inregelen? Leer het in 20 minuten! (Loodgieter Den Haag Stad)', yt: 'WfytTzfl8TE', duur: '±19 min, 2021' },
    { taal: 'nl', titel: 'Inregelen radiatoren (Klimaat Techniek Nederland)', yt: 'NxB8_9crLLo', duur: '±18 min, 2024' },
    { taal: 'en', titel: 'How to Balance a Heating System (Allen Hart)', yt: 'q3V11bG2T9U', duur: '±4 min, 2020' }
  ],
  tekst: `
## Voordat je begint

Loop de installatie na voordat je met inregelen begint: zet alle radiatorafsluiters open, controleer de installatiedruk en ontlucht de installatie, en controleer bij elke radiator of de aanvoer- en retouraansluiting niet zijn verwisseld (dat geeft een verkeerd beeld van het temperatuurverschil bij de temperatuurmethode hieronder). Stel pas daarna de installatie in bedrijf.

## Methode 1: rekenkundig vooraf instellen (dynamisch inregelen)

Deze methode volgt rechtstreeks uit les 14.3 en 14.4: eerst het vermogen en het ontwerpdebiet per radiator berekenen, dan de weg te smoren druk over elke afsluiter bepalen (op basis van een drukverliesberekening van het leidingnet), en pas daarna met de fabrieksgrafiek of -tabel van de afsluiter de juiste voorinstelling aflezen. Dit is de methode die je vooraf, op tekening, kunt doen, en die achteraf op de bouwplaats alleen nog het instellen van de berekende standen vraagt.

## Methode 2: meten met een debietmeter of drukverschilmeter

In plaats van te rekenen, kun je het resultaat direct meten. Een drukverschilmeter (zoals de Danfoss PFM100 met dP-tool uit les 14.3) laat je het beschikbare drukverschil over een afsluiter meten, waarna je met de Kv-formule of de fabriekstabel de juiste stand bepaalt. Bij vloerverwarming (les 14.6) gebeurt dit met een debietmeter die rechtstreeks op de verdeler is ingebouwd, waardoor je het debiet per kring direct kunt aflezen zonder tussenstap.

## Methode 3: de temperatuurmethode (statisch inregelen)

De temperatuurmethode regelt in op basis van het gemeten temperatuurverschil (ΔT) tussen aanvoer en retour, en is geschikt als je geen debiet- of drukverschilmeter hebt.

1. Draai de inregelafsluiters bij alle radiatoren 20 procent open.
2. Meet bij elke radiator het ΔT tussen aanvoer en retour, en noteer dit.
3. Deel de laagst gemeten ΔT door de hoogst gemeten ΔT (de inregelfactor).
4. Is de uitkomst groter dan 0,8, dan is de installatie voldoende in balans. Is de uitkomst lager, ga door naar stap 5.
5. Draai bij radiatoren met een grote ΔT de afsluiter verder open, en bij radiatoren met een kleine ΔT verder dicht.
6. Herhaal stap 2 tot 4.

Twee belangrijke voorwaarden: de aanvoertemperatuur moet ongeveer 20 minuten op een nagenoeg constante waarde staan voor je gaat meten, en deze methode werkt niet bij vloer- of wandverwarming (zie les 14.6 voor de methode die daar wel werkt).

!!! kern De inregelfactor is een verhouding, geen absoluut getal
Tmin / Tmax > 0,8 betekent: het temperatuurverschil bij de "traagste" radiator mag niet minder zijn dan 80 procent van het temperatuurverschil bij de "snelste" radiator. Is de verhouding lager, dan stroomt er relatief te veel water door de ene en te weinig door de andere radiator, en moet je bijstellen.
!!!

## Rekenvoorbeeld: de temperatuurmethode toepassen

Na de eerste ronde meet je bij radiator A een ΔT van 8 K en bij radiator B (de traagste) een ΔT van 5 K.

Inregelfactor = 5 / 8 = 0,625.

Dat is lager dan 0,8, dus je draait de afsluiter van radiator A (grote ΔT) verder open en die van radiator B (kleine ΔT) verder dicht, en meet opnieuw. Blijkt de inregelfactor na de tweede ronde 6 / 7 = 0,86, dan mag je stoppen: dat is boven de 0,8.

## Temperatuur meten: contact of infrarood

Temperatuur meet je met een contactmeter (met klemsensoren op aanvoer en retour, die de aanvoer, retour en ΔT in een keer uitlezen) of met een infraroodmeter. Een infraroodmeting is eenvoudiger, maar de meetafstand, de hoek en een terugkaatsend oppervlak kunnen de meting nadelig beinvloeden, wat tot grotere afwijkingen leidt dan bij een contactmeting. Richt een infraroodmeter (die met een laser werkt) nooit op gezichten.

## Pomp en ketelvermogen mee-instellen

Naast de afsluiters zelf hoort bij inregelen ook het instellen van het cv-vermogen (vaak staat een ketel op 30 tot 50 procent van zijn maximale vermogen tijdens cv-bedrijf) en het maximale pompdebiet, via het installateursmenu van het toestel. Voor een gewone woning is een drukverschil van 15 tot 20 kPa over de installatie meestal voldoende; voor woongebouwen (collectieve installaties) die goed zijn ingeregeld is een pompcurve met een constant drukverschil de beste keuze, terwijl bij individuele woninginstallaties met thermostaatkranen een pompregeling met proportionele druk (of een automatische modus die daarop is gebaseerd) de gangbare keuze is.
`,
  checklist: [
    'Ik controleer voor het inregelen altijd of aanvoer en retour bij elke radiator niet zijn verwisseld',
    'Ik kan de drie methoden (rekenkundig vooraf, meten, temperatuurmethode) benoemen en hun voor- en nadelen',
    'Ik kan de temperatuurmethode in stappen uitvoeren en de inregelfactor Tmin/Tmax berekenen',
    'Ik weet dat de temperatuurmethode niet werkt bij vloer- of wandverwarming',
    'Ik richt een infraroodmeter nooit op gezichten',
    'Ik stel naast de afsluiters ook het cv-vermogen en de pompinstelling mee in'
  ],
  quiz: [
    {
      vraag: `Voor je begint met inregelen ontdek je dat bij een radiator de aanvoer- en retourleiding zijn verwisseld. Wat doe je?`,
      opties: [
        `Dit negeren, want het heeft geen invloed op de temperatuurmethode`,
        `Eerst de verwisseling verhelpen, want anders geeft de gemeten ΔT een verkeerd beeld`,
        `Alleen deze radiator overslaan bij het inregelen en de rest gewoon doen`,
        `De voorinstelling van deze radiator juist extra ver opendraaien om te compenseren`
      ],
      goed: 1,
      uitleg: `Een verwisselde aanvoer/retour geeft bij de temperatuurmethode een vertekend beeld van het ΔT, waardoor je verkeerde conclusies trekt over de doorstroming. Dit moet je dus eerst verhelpen, niet negeren, overslaan of compenseren met de voorinstelling.`
    },
    {
      vraag: `Wat is het belangrijkste verschil tussen methode 1 (rekenkundig vooraf instellen) en methode 3 (de temperatuurmethode)?`,
      opties: [
        `Methode 1 werkt alleen bij vloerverwarming, methode 3 alleen bij radiatoren`,
        `Methode 1 bepaalt de instelling vooraf via berekening en fabrieksgegevens, methode 3 stelt bij op basis van gemeten temperatuurverschillen tijdens bedrijf`,
        `Methode 1 en methode 3 zijn in de praktijk exact dezelfde werkwijze`,
        `Methode 3 vraagt altijd een drukverschilmeter, methode 1 nooit`
      ],
      goed: 1,
      uitleg: `Methode 1 (rekenkundig) bepaalt de voorinstelling vooraf uit vermogen, debiet en drukverlies, en leest die af op de fabriekstabel. Methode 3 (temperatuur) stelt juist stapsgewijs bij op basis van wat je tijdens bedrijf meet. Beide kunnen bij radiatoren worden toegepast; alleen methode 3 werkt niet bij vloer- of wandverwarming, en het is methode 2, niet methode 1 of 3, die een drukverschilmeter gebruikt.`
    },
    {
      vraag: `Na de eerste ronde van de temperatuurmethode meet je een laagste ΔT van 4 K en een hoogste ΔT van 9 K. Wat is de inregelfactor, en wat betekent die?`,
      opties: [
        `2,25; de installatie is al voldoende in balans`,
        `0,44; de installatie is nog niet voldoende in balans, dus je stelt bij`,
        `0,8; precies op de grens, dus je stopt met inregelen`,
        `13; dat getal heeft geen betekenis in deze methode`
      ],
      goed: 1,
      uitleg: `De inregelfactor is Tmin / Tmax = 4 / 9 is ongeveer 0,44. Dat is lager dan de streefwaarde van 0,8, dus je moet de afsluiter met de grote ΔT verder open draaien en die met de kleine ΔT verder dicht, en opnieuw meten. 2,25 zou uit een verkeerde deling (Tmax/Tmin) ontstaan.`
    },
    {
      vraag: `Waarom is een infraroodmeting bij het meten van aanvoer- en retourtemperatuur minder betrouwbaar dan een contactmeting?`,
      opties: [
        `Omdat een infraroodmeter helemaal geen temperatuur kan meten`,
        `Omdat de meetafstand, de hoek en een terugkaatsend oppervlak de infraroodmeting kunnen beinvloeden`,
        `Omdat een infraroodmeter alleen bij vloerverwarming gebruikt mag worden`,
        `Omdat een contactmeting altijd langer duurt dan een infraroodmeting`
      ],
      goed: 1,
      uitleg: `Infraroodmetingen zijn gevoelig voor de afstand tot en de hoek met het gemeten oppervlak, en voor een terugkaatsend (reflecterend) oppervlak, wat grotere meetverschillen kan geven dan een contactmeting met klemsensoren. Dit heeft niets te maken met vloerverwarming specifiek, en de meetduur is niet de kern van het probleem.`
    },
    {
      vraag: `Voor een gewone woning met radiatoren en thermostaatkranen is welke pompregeling het meest gangbaar, en waarom?`,
      opties: [
        `Constant toerental, omdat dat het minste energie verbruikt`,
        `Proportionele druk (of een automatische modus die daarop is gebaseerd), omdat dat past bij een systeem waar afsluiters voortdurend open en dicht gaan`,
        `Constante druk, omdat dat de enige regeling is die geschikt is voor woningen`,
        `Geen enkele regeling is nodig zolang de pomp maar hard genoeg draait`
      ],
      goed: 1,
      uitleg: `Bij een tweepijpsinstallatie met thermostatische radiatorkranen past een regeling met proportionele druk (of een automatische, hierop gebaseerde modus) het beste, omdat de pomp zich dan aanpast aan de wisselende vraag. Constant toerental is juist ongeschikt bij thermostaatkranen, en constante druk is de gangbare keuze voor vloerverwarming of collectieve, goed ingeregelde systemen, niet specifiek voor gewone woningen met radiatoren.`
    }
  ],
  kaarten: [
    { voor: `Wat controleer je altijd voor je begint met inregelen?`, achter: `Of alle radiatorafsluiters open staan, de installatiedruk in orde is, de installatie ontlucht is, en aanvoer/retour niet verwisseld zijn.` },
    { voor: `Noem de drie methoden om waterzijdig in te regelen.`, achter: `Rekenkundig vooraf instellen, meten met een debietmeter of drukverschilmeter, en de temperatuurmethode.` },
    { voor: `Wat is de inregelfactor bij de temperatuurmethode, en welke streefwaarde geldt?`, achter: `Tmin / Tmax (laagste gemeten ΔT gedeeld door hoogste gemeten ΔT). Streefwaarde: groter dan 0,8.` },
    { voor: `Bij welke afgiftesystemen werkt de temperatuurmethode niet?`, achter: `Vloer- en wandverwarming.` },
    { voor: `Wat moet je doen voor je bij de temperatuurmethode gaat meten?`, achter: `De aanvoertemperatuur ongeveer 20 minuten op een nagenoeg constante waarde houden.` },
    { voor: `Waarom mag je een infraroodmeter niet op gezichten richten?`, achter: `De laser kan oogbeschadiging veroorzaken.` },
    { voor: `Welke pompregeling past bij een gewone woning met thermostaatkranen?`, achter: `Proportionele druk, of een automatische modus die daarop is gebaseerd.` }
  ],
  bronnen: ['INR-06', 'INR-37', 'INR-38', 'INR-39', 'INR-40', 'INR-41', 'INR-42', 'INR-43', 'INR-44', 'INR-45', 'HYD-24']
},

/* ------------------------------------------------------------------ 14.6 */
{
  id: 'm14l06',
  nr: '14.6',
  titel: 'Vloerverwarming inregelen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de kringen van vloerverwarming inregelen en het debiet per kring controleren met de debietmeter op de verdeler.',
  videos: [
    { taal: 'nl', titel: 'Inregelen vloerverwarming (Klimaat Techniek Nederland)', yt: 'Vf93TNNU5q0', duur: '±12 min, 2024' },
    { taal: 'nl', titel: 'Het instellen van de flowmeter (Housewarming)', yt: '1YZsNjns0Yo', duur: '±2 min, 2022' },
    { taal: 'en', titel: 'Underfloor heating regulation, manifold balancing (Heating Solutions)', yt: 'uYAMP7_2m1A', duur: '±7 min, 2022' }
  ],
  tekst: `
## Waarom vloerverwarming een andere methode vraagt

De temperatuurmethode uit les 14.5 werkt niet bij vloer- of wandverwarming: de grote thermische massa van de dekvloer (les 7.3) maakt dat het temperatuurverschil tussen aanvoer en retour van een kring traag reageert op een verstelling, en er zijn geen radiatorafsluiters om op temperatuur te sturen. Bij vloerverwarming regel je daarom in met een debietmeter die rechtstreeks op de verdeler is ingebouwd, en die het debiet per kring in l/min laat aflezen.

!!! kern Bij vloerverwarming lees je het debiet af, je meet geen temperatuurverschil
Op de aanvoerverdeler van een vloerverwarmingssysteem zit voor elke kring een debietmeter, meestal met een schaal van 0 tot 5 l/min. Je stelt het regelventiel van die kring in tot de debietmeter het berekende of gewenste debiet toont, zonder dat je daarvoor een temperatuur hoeft te meten of een referentiegrafiek nodig hebt.
!!!

## De opbouw van een verdeler

Zowel Caleffi als Uponor (twee onafhankelijke fabrikanten) bouwen hun vloerverwarmingsverdelers op dezelfde manier op: de debietmeter (flowmeter) zit per kring op de aanvoerverdeler en toont het actuele debiet, en de retourverdeler heeft per kring een afsluiter (handmatig of elektrothermisch/thermisch aangedreven) waarmee die kring geheel kan worden afgesloten. Caleffi's verdeler voor vloerverwarming (serie 664) heeft bijvoorbeeld een debietmeterschaal van 0 tot 5 l/min met een nauwkeurigheid van plus of min 10 procent, een maximale bedrijfsdruk van 6 bar en een bedrijfstemperatuur van 5 tot 60 graden. Uponor levert onder meer de Vario S FM met geintegreerde debietmeters (eveneens 0 tot 5 l/min) voor 2 tot 16 kringen, en de Vario Plus, leverbaar met een stelring (zonder aflezing) of met een debietmeter. Dit zijn voorbeelden per merk en model: de precieze schaal en het aantal kringen verschillen.

## Rekenvoorbeeld: debiet per kring bepalen

Voor het benodigde debiet per kring geldt dezelfde debietformule als in les 14.4, met het kleinere temperatuurverschil dat bij vloerverwarming gebruikelijk is (zie ook AFG-33 in module 7).

| Grootheid | Waarde | Toelichting |
|---|---|---|
| Vermogen van de kring | 700 W | Bijvoorbeeld een badkamervloer van ongeveer 10 m2 |
| Aangenomen ΔT | 5 K | Kleiner dan bij een radiatorcircuit (vaak ongeveer 20 K), dus een aanname die je expliciet benoemt |
| Debiet | 700 / (1,163 x 5) = 700 / 5,82 is ongeveer 120 l/h, dus ongeveer 2,0 l/min | Stel de debietmeter van deze kring in op ongeveer 2,0 l/min |

Een kleiner ΔT bij hetzelfde vermogen vraagt dus een groter debiet dan bij een radiatorcircuit: dat is precies de reden waarom vloerverwarmingsverdelers met een fijnere schaal (0 tot 5 l/min) werken dan de kv-waarden van radiatorafsluiters.

## Ontluchten voor je inregelt

Ontlucht de verdeler en alle kringen grondig voor je begint met instellen: lucht in een kring geeft een onbetrouwbare aflezing op de debietmeter en kan een kring lijken te blokkeren terwijl het probleem eigenlijk lucht is.

## Wanneer een mengverdeler nodig is

Voedt een cv-ketel op hoge temperatuur (bijvoorbeeld ongeveer 80 graden, zoals bij radiatoren) ook een vloerverwarmingskring, dan is een mengverdeler met een eigen pomp nodig die het hete aanvoerwater mengt met retourwater tot de lagere temperatuur die de vloer nodig heeft (zie les 7.4/7.5, AFG-30). Sluit vloerverwarming nooit rechtstreeks aan op een hogetemperatuur-aanvoer zonder mengunit: dat overschrijdt de toegestane vloertemperatuur.

## Bij twijfel: warmtebeeldcamera

Een warmtebeeldcamera laat zien of een kring gelijkmatig warm wordt over zijn hele lengte, en is een aanvulling op de debietmeting: een kring die op de debietmeter het juiste debiet toont maar toch een koude plek heeft, kan lucht bevatten of een knik in de leiding hebben.
`,
  checklist: [
    'Ik weet dat de temperatuurmethode niet werkt bij vloerverwarming en gebruik in plaats daarvan de debietmeter op de verdeler',
    'Ik kan de opbouw van een vloerverwarmingsverdeler beschrijven: debietmeter op de aanvoer, afsluiter op de retour, per kring',
    'Ik ontlucht de verdeler en alle kringen voor ik ga inregelen',
    'Ik kan met de debietformule en een aangenomen ΔT het debiet per kring berekenen en instellen',
    'Ik weet wanneer een mengverdeler nodig is voordat vloerverwarming op een hogetemperatuurbron wordt aangesloten'
  ],
  quiz: [
    {
      vraag: `Waarom kun je de temperatuurmethode uit les 14.5 niet gebruiken om vloerverwarming in te regelen?`,
      opties: [
        `Omdat vloerverwarming geen retourleiding heeft`,
        `Omdat de grote thermische massa van de dekvloer het temperatuurverschil traag laat reageren, en er geen radiatorafsluiters zijn om op temperatuur te sturen`,
        `Omdat vloerverwarming altijd een te hoge temperatuur heeft om te meten`,
        `Omdat de temperatuurmethode uitsluitend bij convectoren werkt`
      ],
      goed: 1,
      uitleg: `De thermische massa van de dekvloer (les 7.3) maakt de temperatuurreactie van een kring traag, en er is geen radiatorafsluiter om op ΔT bij te sturen. Vloerverwarming heeft wel een retourleiding, en de temperatuur is juist lager dan bij radiatoren, niet hoger.`
    },
    {
      vraag: `Waar zit de debietmeter van een vloerverwarmingskring, en wat toont hij?`,
      opties: [
        `Op de retourverdeler, en hij toont de temperatuur van het retourwater`,
        `Op de aanvoerverdeler, en hij toont het actuele debiet van die kring`,
        `In de ketel, en hij toont het totale debiet van de hele installatie`,
        `Op de retourverdeler, en hij toont de druk van die kring`
      ],
      goed: 1,
      uitleg: `Bij zowel Caleffi als Uponor zit de debietmeter per kring op de aanvoerverdeler en toont hij het actuele debiet in l/min. De retourverdeler heeft juist de afsluiters, niet de debietmeters, en de ketel meet het debiet van de hele installatie, niet per kring.`
    },
    {
      vraag: `Een vloerverwarmingskring van een badkamer levert 700 W bij een aangenomen ΔT van 5 K. Wat is het benodigde debiet ongeveer, met debiet = vermogen / (1,163 x ΔT)?`,
      opties: [`ongeveer 2,0 l/min`, `ongeveer 12 l/min`, `ongeveer 0,2 l/min`, `ongeveer 700 l/min`],
      goed: 0,
      uitleg: `700 / (1,163 x 5) is ongeveer 120 l/h, en 120 l/h gedeeld door 60 minuten is ongeveer 2,0 l/min. De andere opties zijn het resultaat van een verkeerde omrekening tussen l/h en l/min, of van het weglaten van de deling door 1,163.`
    },
    {
      vraag: `Op de debietmeter van een kring lees je het berekende debiet af, maar de vloer in die kamer blijft koud op een specifieke plek. Wat is een logische volgende controle?`,
      opties: [
        `Meteen de hele kring vervangen, want een correct debiet sluit een probleem uit`,
        `Controleren met een warmtebeeldcamera of er lucht in de kring zit of een knik in de leiding is`,
        `De debietmeter negeren en het debiet flink verhogen tot de vloer overal warm is`,
        `Concluderen dat de vloerverwarming principieel niet geschikt is voor deze ruimte`
      ],
      goed: 1,
      uitleg: `Een correct debiet op de meter sluit niet automatisch andere problemen uit: een warmtebeeldcamera kan een koude plek door lucht of een knik in de leiding zichtbaar maken, ook als het totale debiet klopt. Vervangen of het debiet blind verhogen slaat de diagnose over, en een enkele koude plek zegt niets over de principiele geschiktheid van vloerverwarming.`
    },
    {
      vraag: `Een cv-ketel stookt op 80 graden voor de radiatoren, en dezelfde installatie heeft ook een vloerverwarmingskring. Wat is hiervoor nodig?`,
      opties: [
        `Niets speciaals: vloerverwarming kan altijd rechtstreeks op de radiatoraanvoer worden aangesloten`,
        `Een mengverdeler met een eigen pomp, die de aanvoertemperatuur naar de vloer verlaagt door bijmenging van retourwater`,
        `Een extra ketel die alleen voor de vloerverwarming stookt`,
        `Een grotere debietmeter, want dat is het enige verschil met een gewone verdeler`
      ],
      goed: 1,
      uitleg: `Zonder mengverdeler zou de vloer de hoge aanvoertemperatuur van de radiatorenkring krijgen, wat de toegestane vloertemperatuur (les 7.3) overschrijdt. De mengverdeler mengt het hete aanvoerwater met retourwater tot een lagere temperatuur. Een tweede ketel is een onnodig zware oplossing, en een grotere debietmeter verandert niets aan de temperatuur.`
    }
  ],
  kaarten: [
    { voor: `Waarom werkt de temperatuurmethode niet bij vloerverwarming?`, achter: `De grote thermische massa van de dekvloer maakt het ΔT traag, en er zijn geen radiatorafsluiters om op temperatuur bij te sturen.` },
    { voor: `Waarmee regel je een vloerverwarmingskring in?`, achter: `Met de debietmeter (flowmeter) op de aanvoerverdeler, meestal met een schaal van 0 tot 5 l/min.` },
    { voor: `Wat zit er op de aanvoerverdeler en wat op de retourverdeler van een vloerverwarmingssysteem?`, achter: `Aanvoerverdeler: debietmeters per kring. Retourverdeler: afsluiters per kring (handmatig of elektrothermisch).` },
    { voor: `Waarom heeft vloerverwarming bij hetzelfde vermogen een groter debiet nodig dan een radiatorcircuit?`, achter: `Het temperatuurverschil (ΔT) bij vloerverwarming is kleiner dan bij radiatoren, en bij een kleiner ΔT is een groter debiet nodig voor hetzelfde vermogen.` },
    { voor: `Wat doe je voor je een vloerverwarmingsverdeler gaat inregelen?`, achter: `De verdeler en alle kringen grondig ontluchten, anders geeft de debietmeter een onbetrouwbare aflezing.` },
    { voor: `Wanneer is een mengverdeler nodig bij vloerverwarming?`, achter: `Als de warmtebron (bijvoorbeeld een cv-ketel op ongeveer 80 graden voor radiatoren) op een hogere temperatuur werkt dan de vloer toestaat.` }
  ],
  bronnen: ['INR-39', 'INR-49', 'INR-50', 'INR-51', 'INR-52', 'INR-53', 'INR-54', 'AFG-27', 'AFG-30', 'AFG-33']
},

/* ------------------------------------------------------------------ 14.7 */
{
  id: 'm14l07',
  nr: '14.7',
  titel: 'Controleren, meten en opleveren',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt het resultaat van het inregelen meten, beoordelen en vastleggen voor de klant en de volgende monteur.',
  videos: [
    { taal: 'nl', titel: 'Hoe kan je zelf waterzijdig inregelen (John Visser cv-optimalisatie)', yt: 'NPNeSQamEUg', duur: '±7 min, 2022' },
    { taal: 'nl', titel: 'Waterzijdig inregelen van de cv-installatie (InstalCenter)', yt: 'zt7apag0-Gc', duur: '±2 min, 2022' },
    { taal: 'en', titel: 'Testing and Commissioning Heating Systems (PlumbMate)', yt: 'cNWXdcwvSzo', duur: '±7 min, 2021' }
  ],
  tekst: `
## Wat je meet om te bewijzen dat het goed is

Inregelen is pas klaar als je het resultaat kunt aantonen, niet als je "denkt dat het beter is". Controleer en leg minstens dit vast:

- De inregelfactor (Tmin / Tmax) van de temperatuurmethode, of het afgelezen debiet per kring bij vloerverwarming, ligt binnen de gestelde grens.
- Elke ruimte bereikt zijn ontwerptemperatuur binnen een redelijke tijd, ook op een koude dag: een test bij mild weer geeft een te optimistisch beeld, omdat de warmtevraag dan laag is (zie ook les 7.6).
- De waterdruk van de installatie is na het werk nog steeds correct (module 3).
- Geen ruisend geluid meer bij volledig openstaande afsluiters.

## Vullen en ontluchten na montage van nieuwe afsluiters

Na het monteren van nieuwe radiatorafsluiters of een nieuwe verdeler hoort een correcte vul- en ontluchtingsprocedure, bijvoorbeeld:

1. Ketel uitschakelen en de installatie 30 minuten laten afkoelen (het water kan heet zijn).
2. De vulslang eerst volledig met water vullen voor je hem aansluit, om te voorkomen dat er lucht vanuit de slang de installatie in gaat.
3. Vullen tot de gewenste druk (vaak tussen 1,5 en 2,0 bar, afhankelijk van het toestel en het expansievat, zie module 3) en dan pas de vulslang loskoppelen.
4. Alle radiatorafsluiters volledig open, de aanvoertemperatuur 15 minuten zo hoog mogelijk, de ketel 10 minuten spanningsloos.
5. Ontluchten van beneden naar boven, dus bij de laagst gelegen radiator beginnen.
6. Het expansievat ontluchten.
7. De ketel weer inschakelen en de waterdruk opnieuw controleren.

!!! kern Opleveren is meer dan "klaar zijn"
Een inregelklus is pas afgerond als je kunt laten zien wat er is ingesteld: welke afsluiterstand of welk debiet per radiator of kring, en welk resultaat dat gaf. Zonder die vastlegging kan een volgende monteur (of jij zelf, een jaar later) niet meer beoordelen of een klacht door een verkeerde instelling komt of door iets anders.
!!!

## Wat je vastlegt

Leg per radiator of kring vast: de gekozen voorinstelling of het ingestelde debiet, en de gemeten temperatuur of het afgelezen debiet na afronding. Sommige fabrikanten (zoals Danfoss met zijn Installer App) bieden een tool om automatisch een inregelrapport te genereren op basis van de ingevoerde gegevens. Zo'n rapport is nuttig bewijs bij een klacht achteraf, en scheelt een volgende monteur het opnieuw moeten uitzoeken van de installatie.

## Wat je de klant uitlegt

Leg in gewone taal uit wat er is gedaan en wat het resultaat is: alle radiatoren of vloerverwarmingskringen warmen gelijkmatiger op, er gaat minder warmte verloren via de leidingen, de ketel of warmtepomp werkt met een beter rendement, er is geen hinderlijk geluid meer, en de stookkosten dalen. Vermeld ook wat de klant zelf niet meer moet doen: aan de nieuwe voorinstellingen van de afsluiters komen zonder overleg, want dat verstoort de balans die je net hebt ingesteld.

## Waar je bevoegdheid ophoudt

Deze cursus geeft geen diploma en geen Bewijs van Vakmanschap CO. Fabrikanten zoals Danfoss bieden weliswaar een eigen certificaat voor dynamisch waterzijdig inregelen aan via e-learning, maar dat is een fabrikanttraining, geen wettelijk erkend certificaat en geen vervanging voor het Bewijs van Vakmanschap CO of een BRL-erkenning. Weten wat een fabrikantcertificaat wel en niet dekt, hoort bij vakbekwaamheid.
`,
  checklist: [
    'Ik controleer na inregelen de inregelfactor of het debiet per kring, de opwarmtijd op een koude dag, de waterdruk en het geluid',
    'Ik test niet alleen bij mild weer, omdat dat een te optimistisch beeld geeft',
    'Ik volg een vaste volgorde bij vullen en ontluchten na montage van nieuwe afsluiters',
    'Ik leg per radiator of kring de ingestelde waarde en het gemeten resultaat vast',
    'Ik leg de klant het resultaat en het "niet zelf verstellen" uit in gewone taal',
    'Ik weet dat een fabrikantcertificaat voor inregelen geen Bewijs van Vakmanschap CO vervangt'
  ],
  quiz: [
    {
      vraag: `Een collega test op een milde herfstdag of een installatie na het inregelen overal warm genoeg wordt, en concludeert dat alles in orde is. Wat is het risico van deze aanpak?`,
      opties: [
        `Er is geen risico: een test op een milde dag zegt evenveel als een test bij vorst`,
        `Bij mild weer is de warmtevraag laag, waardoor een tekort aan vermogen of een resterende onbalans niet aan het licht komt`,
        `Het risico is dat de installatie bij mild weer juist te warm wordt`,
        `Milde temperaturen maken de meting juist nauwkeuriger dan bij vorst`
      ],
      goed: 1,
      uitleg: `Bij een lage warmtevraag (mild weer) valt een tekort aan vermogen of een resterende onbalans veel minder snel op dan op de koudste dagen, wanneer het systeem echt op de proef wordt gesteld. Dit is dezelfde valkuil als bij het testen van lage-temperatuurgeschiktheid in les 7.6.`
    },
    {
      vraag: `Waarom is het belangrijk om na het inregelen vast te leggen welke voorinstelling of welk debiet je bij elke radiator of kring hebt ingesteld?`,
      opties: [
        `Dat is niet nodig, want de instelling is aan de afsluiter zelf altijd af te lezen`,
        `Zodat een volgende monteur (of jijzelf later) bij een klacht kan beoordelen of die door de instelling komt of door iets anders`,
        `Alleen om aan een verzekeraar te kunnen bewijzen dat er werk is verricht`,
        `Uitsluitend omdat de wet dit specifiek voor waterzijdig inregelen voorschrijft`
      ],
      goed: 1,
      uitleg: `Vastlegging maakt het mogelijk om bij een latere klacht te onderscheiden of de oorzaak in de inregeling zit of ergens anders, zonder de installatie opnieuw helemaal te moeten uitzoeken. Sommige afsluiters zijn niet zonder gereedschap of documentatie af te lezen, een verzekeringsbewijs is niet de hoofdreden, en een specifieke wettelijke vastleggingsplicht voor dit precieze document is niet vastgesteld (zie het register).`
    },
    {
      vraag: `Bij het ontluchten na het monteren van nieuwe radiatorafsluiters, in welke volgorde ontlucht je de radiatoren?`,
      opties: [
        `Van de hoogst gelegen naar de laagst gelegen radiator`,
        `Van de laagst gelegen naar de hoogst gelegen radiator`,
        `De volgorde maakt niet uit, als je uiteindelijk alle radiatoren maar ontlucht`,
        `Altijd te beginnen bij de radiator die het verst van de ketel ligt`
      ],
      goed: 1,
      uitleg: `De aanbevolen volgorde is van beneden naar boven: eerst de laagst gelegen radiator, dan verder omhoog, en pas daarna het expansievat. Van boven naar beneden werken of de afstand tot de ketel als leidraad nemen, hoort niet bij deze procedure.`
    },
    {
      vraag: `Wat vertel je een klant nadat je de installatie waterzijdig hebt ingeregeld, over de nieuwe voorinstellingen van de afsluiters?`,
      opties: [
        `Dat hij de voorinstellingen gerust zelf mag bijstellen als een kamer hem iets te koel aanvoelt`,
        `Dat hij niet zelf aan de nieuwe voorinstellingen moet komen zonder overleg, omdat dat de ingestelde balans verstoort`,
        `Dat de voorinstellingen nooit meer gecontroleerd hoeven te worden`,
        `Dat de klant de afsluiters juist na elke seizoenswisseling zelf opnieuw moet instellen`
      ],
      goed: 1,
      uitleg: `De voorinstellingen zijn onderling afgestemd op basis van berekening of meting; een klant die zelf een enkele afsluiter bijstelt, verstoort die balans voor de hele installatie. Dat is iets anders dan het normale, dagelijkse bedienen van een thermostaatknop. Periodieke controle blijft wel zinvol, maar hoort bij onderhoud, niet bij zelf bijstellen door de klant.`
    },
    {
      vraag: `Een fabrikant biedt een online cursus met certificaat voor dynamisch waterzijdig inregelen aan. Wat betekent dit certificaat voor jouw wettelijke bevoegdheid?`,
      opties: [
        `Het vervangt het Bewijs van Vakmanschap CO voor werk aan gasverbrandingstoestellen`,
        `Het is een fabrikanttraining over het eigen productgamma, geen wettelijk erkend certificaat en geen vervanging voor het Bewijs van Vakmanschap CO`,
        `Het geeft automatisch een BRL 6000-25-erkenning aan het bedrijf van de monteur`,
        `Het is verplicht voor iedereen die ooit een radiatorafsluiter vervangt`
      ],
      goed: 1,
      uitleg: `Een fabrikantcertificaat over het eigen inregelmateriaal is waardevolle kennis, maar geen wettelijk erkend certificaat en geen vervanging voor het Bewijs van Vakmanschap CO of een BRL-erkenning, die over heel andere bevoegdheden gaan (werk aan gasverbrandingstoestellen, bedrijfscertificering). Het is ook niet wettelijk verplicht voor het vervangen van een enkele afsluiter.`
    }
  ],
  kaarten: [
    { voor: `Noem drie dingen die je controleert bij het opleveren van een inregelklus.`, achter: `De inregelfactor of het debiet per kring, de opwarmtijd op een koude dag, en de waterdruk (en eventueel geluid).` },
    { voor: `Waarom geeft een test bij mild weer een te optimistisch beeld?`, achter: `Bij een lage warmtevraag valt een tekort aan vermogen of resterende onbalans niet op; pas bij vorst wordt het systeem echt op de proef gesteld.` },
    { voor: `In welke volgorde ontlucht je radiatoren na montage van nieuwe afsluiters?`, achter: `Van de laagst gelegen naar de hoogst gelegen radiator, en pas daarna het expansievat.` },
    { voor: `Wat leg je vast na een inregelklus?`, achter: `Per radiator of kring: de ingestelde voorinstelling of het debiet, en het gemeten resultaat na afronding.` },
    { voor: `Wat vertel je de klant over de nieuwe voorinstellingen van de afsluiters?`, achter: `Niet zelf bijstellen zonder overleg, want dat verstoort de ingestelde balans van de hele installatie.` },
    { voor: `Vervangt een fabrikantcertificaat voor waterzijdig inregelen het Bewijs van Vakmanschap CO?`, achter: `Nee. Het is een fabrikanttraining over het eigen product, geen wettelijk erkend certificaat.` }
  ],
  bronnen: ['INR-46', 'INR-47', 'INR-48', 'INR-55', 'INR-56', 'INR-57', 'INR-58', 'INR-59']
}

  ],
  examen: [
    {
      vraag: `Een radiator dichtbij de ketel warmt snel op, terwijl een radiator verder weg traag opwarmt, ook al staan beide afsluiters volledig open. Wat is hier de meest waarschijnlijke oorzaak?`,
      opties: [
        `De verste radiator heeft een te hoge kv-waarde`,
        `Onbalans: het water kiest de weg van de minste weerstand naar de dichtstbijzijnde radiator`,
        `De verste radiator is defect en moet vervangen worden`,
        `De ketel heeft een te laag vermogen voor de hele woning`
      ],
      goed: 1,
      uitleg: `Dit is het klassieke beeld van een niet waterzijdig ingeregelde installatie: zonder kunstmatige weerstand krijgt de dichtstbijzijnde radiator te veel water en de verste te weinig. Een defecte radiator of een te laag ketelvermogen geven een ander, structureler beeld, en een te hoge kv-waarde bij de verste radiator zou juist meer, niet minder doorstroming geven.`
    },
    {
      vraag: `Bij welke gebeurtenis verplicht artikel 5.21 Besluit bouwwerken leefomgeving in ieder geval dat een verwarmingssysteem "adequaat gedimensioneerd, geinstalleerd, ingeregeld en instelbaar" moet zijn?`,
      opties: [
        `Uitsluitend bij een geheel nieuw op te leveren woning`,
        `Bij het plaatsen of gedeeltelijk vernieuwen of veranderen van een technisch bouwsysteem waarbij de energieprestatie wordt beinvloed`,
        `Alleen als de klant erom vraagt bij een onderhoudsbeurt`,
        `Uitsluitend bij woningen die op stadsverwarming zijn aangesloten`
      ],
      goed: 1,
      uitleg: `Dit volgt uit artikel 5.21 lid 2 Bbl, en geldt dus breder dan alleen nieuwbouw: ook bij een vervanging van de ketel die de energieprestatie beinvloedt. Het is geen vrijblijvende service en niet beperkt tot stadsverwarming.`
    },
    {
      vraag: `Wat is de autoriteit van een regelventiel, en welke vuistregel geldt voor een goede regelbaarheid?`,
      opties: [
        `De maximale doorlaat van het ventiel; vuistregel: kvs moet minstens 5 zijn`,
        `De invloed van een verstelling op de doorstroming, bepaald door het drukverschil over het ventiel ten opzichte van de rest van het circuit; vuistregel: minstens 0,5`,
        `De temperatuur waarbij het ventiel nog goed afdicht; vuistregel: minstens 90 graden`,
        `Het aantal standen dat het ventiel heeft; vuistregel: minstens 7 standen`
      ],
      goed: 1,
      uitleg: `Autoriteit gaat over de invloed van een verstelling op de doorstroming, bepaald door de verhouding van drukverschillen. De vuistregel van minstens 0,5 (50 procent) komt uit het register. De andere opties verwarren autoriteit met andere begrippen (kvs-waarde, materiaaltemperatuur, aantal standen).`
    },
    {
      vraag: `Een afsluiter moet een debiet van 0,8 m3/h doorlaten bij een beschikbaar drukverschil van 0,16 bar. Wat is de benodigde Kv-waarde (Kv = qv / wortel(Δp))?`,
      opties: [`2,0`, `0,32`, `5,0`, `0,2`],
      goed: 0,
      uitleg: `Wortel van 0,16 is 0,4. Kv = 0,8 / 0,4 = 2,0. De andere opties komen uit een verkeerde bewerking (vermenigvuldigen in plaats van delen, of de wortel niet trekken).`
    },
    {
      vraag: `Wat is het belangrijkste nadeel van statisch inregelen ten opzichte van dynamisch inregelen, bij een installatie met veel thermostaatkranen?`,
      opties: [
        `Statisch inregelen is altijd duurder dan dynamisch inregelen`,
        `Bij deellast (als andere afsluiters dichtgaan) neemt het drukverschil over de nog openstaande statische afsluiters toe, met te veel doorstroming als gevolg`,
        `Statische afsluiters kunnen geen enkele voorinstelling hebben`,
        `Statisch inregelen werkt alleen bij vloerverwarming, niet bij radiatoren`
      ],
      goed: 1,
      uitleg: `Het kernnadeel van statisch inregelen is dat de vaste doorlaat niet meebeweegt met veranderingen in de rest van het systeem, waardoor bij deellast te veel water over de nog openstaande afsluiters kan stromen. Statische afsluiters hebben wel een voorinstelling, en statisch inregelen wordt juist bij radiatoren toegepast, niet primair bij vloerverwarming (waar de debietmeter op de verdeler leidend is).`
    },
    {
      vraag: `Een drukonafhankelijk regelventiel (PICV) combineert welke functies in een enkel huis?`,
      opties: [
        `Alleen een thermometer en een handwiel`,
        `Een motorbediende afsluiter, een vaste flowbegrenzing en een drukverschilregelaar`,
        `Alleen een filter en een terugslagklep`,
        `Een pomp en een expansievat`
      ],
      goed: 1,
      uitleg: `Dit is precies de combinatie die Danfoss noemt voor zijn drukonafhankelijke regelventielen, wat het ventiel "100% autoriteit" geeft: drukschommelingen elders in het systeem hebben geen invloed meer op de ingestelde volumestroom.`
    },
    {
      vraag: `Een bestaande radiator heeft een genormeerd vermogen van 1800 W bij 75/65. De installatie wordt teruggezet naar 70/50 (correctiefactor volgens de Danfoss-tabel: 1,37). Wat geeft deze radiator dan werkelijk af?`,
      opties: [`ongeveer 2466 W`, `ongeveer 1314 W`, `ongeveer 1800 W`, `ongeveer 900 W`],
      goed: 1,
      uitleg: `Werkelijk afgegeven vermogen = genormeerd vermogen / correctiefactor = 1800 / 1,37 is ongeveer 1314 W. De radiator geeft dus minder af bij deze lagere temperatuur, niet hetzelfde (1800 W) en niet meer (2466 W, wat uit een verkeerde vermenigvuldiging in plaats van deling zou komen).`
    },
    {
      vraag: `Wat is de eerste stap bij de temperatuurmethode (statisch inregelen op basis van ΔT)?`,
      opties: [
        `Alle inregelafsluiters volledig dichtdraaien`,
        `Alle inregelafsluiters 20 procent openen, en daarna bij elke radiator het ΔT meten`,
        `Direct de pomp op de hoogste stand zetten`,
        `Eerst alle radiatoren vervangen door nieuwe exemplaren`
      ],
      goed: 1,
      uitleg: `De temperatuurmethode begint met alle inregelafsluiters 20 procent te openen, waarna bij elke radiator het ΔT tussen aanvoer en retour wordt gemeten en genoteerd. Volledig dichtdraaien zou geen enkele meting mogelijk maken, en de pompstand of het vervangen van radiatoren horen niet bij de eerste stap.`
    },
    {
      vraag: `Bij de temperatuurmethode meet je bij de traagste radiator een ΔT van 6 K en bij de snelste een ΔT van 10 K. Wat is de inregelfactor, en wat betekent die?`,
      opties: [
        `1,67; de installatie is al in balans`,
        `0,6; de installatie is nog niet voldoende in balans, dus je stelt bij`,
        `4; dat getal heeft in deze methode geen betekenis`,
        `0,8; precies op de grens, dus je stopt`
      ],
      goed: 1,
      uitleg: `De inregelfactor is Tmin / Tmax = 6 / 10 = 0,6. Dat is lager dan de streefwaarde van 0,8, dus je moet bijstellen: de afsluiter met de grote ΔT (de snelle radiator) verder open, en die met de kleine ΔT (de trage radiator) verder dicht. 1,67 komt uit een verkeerde deling (Tmax/Tmin).`
    },
    {
      vraag: `Waarom werkt de temperatuurmethode niet bij vloerverwarming, en wat gebruik je in plaats daarvan?`,
      opties: [
        `Vloerverwarming heeft geen temperatuurverschil, dus er is niets te meten`,
        `De grote thermische massa van de dekvloer maakt het ΔT traag; gebruik in plaats daarvan de debietmeter op de verdeler`,
        `Vloerverwarming heeft altijd al een perfecte balans, dus inregelen is nooit nodig`,
        `De temperatuurmethode werkt bij vloerverwarming juist beter dan bij radiatoren`
      ],
      goed: 1,
      uitleg: `De thermische massa van de dekvloer vertraagt de reactie van het ΔT op een verstelling, en er zijn geen radiatorafsluiters om op te sturen. Bij vloerverwarming lees en stel je daarom het debiet per kring rechtstreeks af op de debietmeter van de verdeler. Vloerverwarming heeft wel degelijk een temperatuurverschil en is niet automatisch in balans.`
    },
    {
      vraag: `Op de aanvoerverdeler van een vloerverwarmingssysteem zit een debietmeter met een schaal van 0 tot 5 l/min. Wat lees en stel je daarmee in?`,
      opties: [
        `De temperatuur van het aanvoerwater van die kring`,
        `Het actuele debiet van die kring, dat je vergelijkt met het berekende of gewenste debiet`,
        `De totale waterinhoud van de hele vloerverwarmingsinstallatie`,
        `De gasdruk van de cv-ketel die de vloerverwarming voedt`
      ],
      goed: 1,
      uitleg: `De debietmeter op de aanvoerverdeler toont het actuele debiet per kring in l/min, dat je vergelijkt met het berekende of gewenste debiet en waarop je het regelventiel van die kring instelt. Temperatuur, totale waterinhoud en gasdruk worden hier niet mee gemeten.`
    },
    {
      vraag: `Een cv-ketel stookt op 80 graden voor de radiatoren, en dezelfde installatie heeft ook vloerverwarming. Waarom kan de vloerverwarming niet rechtstreeks op deze aanvoer worden aangesloten?`,
      opties: [
        `Omdat vloerverwarming altijd een eigen, aparte ketel nodig heeft`,
        `Omdat de vloer een lagere temperatuur toegestaan is dan de radiatoraanvoer, en een mengverdeler dat verschil moet opvangen`,
        `Omdat vloerverwarming geen retourleiding heeft en dus niet op een gewone ketel past`,
        `Omdat 80 graden te laag is voor vloerverwarming`
      ],
      goed: 1,
      uitleg: `De toegestane vloertemperatuur ligt veel lager dan 80 graden (les 7.3); een mengverdeler met eigen pomp mengt het hete aanvoerwater met retourwater tot een temperatuur die de vloer wel toestaat. Vloerverwarming heeft gewoon een retourleiding en werkt niet met een apart ketelcircuit, en 80 graden is voor vloerverwarming te hoog, niet te laag.`
    },
    {
      vraag: `Wat controleer je bij het opleveren van een inregelklus, naast de inregelfactor of het afgelezen debiet?`,
      opties: [
        `Alleen of de klant tevreden lijkt, verder niets`,
        `De opwarmtijd op een koude dag, de waterdruk van de installatie, en of er geen ruisend geluid meer is`,
        `Uitsluitend het gasverbruik van de afgelopen maand`,
        `Alleen of de radiatoren van kleur zijn veranderd`
      ],
      goed: 1,
      uitleg: `Een volledige oplevering controleert meer dan alleen de inregelfactor: de opwarmtijd op een koude dag (niet alleen bij mild weer), de waterdruk, en geluid. De tevredenheid van de klant is geen technische controle, gasverbruik van een enkele maand zegt weinig, en radiatorkleur is niet relevant.`
    }
  ]
});
