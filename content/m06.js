/* ==========================================================================
   m06.js - Module 6: Regeling en tapwater
   Geschreven op basis van project/docs/feiten/03-ketel-hydrauliek-regeling.md (REG, TAP, KET, HYD)
   en project/docs/feiten/07-regeling-en-tapwater.md (RGL, nieuw onderzoek voor deze module).
   Merkspecifieke instelwaarden (stooklijnschaal, drempels, parameters) staan als voorbeeld met
   merk en model erbij: ze verschillen per toestel, dus altijd de handleiding van het toestel volgen.
   ========================================================================== */

CURSUS.addModule({
  id: 'm06',
  nr: 6,
  deel: 1,
  titel: 'Regeling en tapwater',
  ondertitel: 'Het gedrag van de installatie bepaalt comfort en rendement.',
  niveau: 'Gemiddeld',
  studietijd: 6,
  intro: 'De regeling en het tapwater: thermostaten, OpenTherm, weersafhankelijk regelen, combi en boiler, CW-klassen en legionella. Het gedrag van de installatie bepaalt comfort, rendement en veel klachten.',
  inleiding: [
    'Een ketel die perfect is afgesteld, kan alsnog klachten geven als de regeling niet klopt: een huis dat niet warm wordt, een ketel die de hele tijd aan- en uitslaat, of te koud of juist gevaarlijk heet tapwater. In deze module ga je van de thermostaat aan de muur naar de kraan in de badkamer: hoe een thermostaat de ketel aanstuurt, hoe een weersafhankelijke regeling de aanvoertemperatuur aanpast aan het weer, wat een zoneregeling hydraulisch met de installatie doet, hoe een combiketel zich verhoudt tot een voorraadvat, en hoe je veilig en legionellavrij tapwater levert.',
    'Net als in module 5 geldt: instelwaarden, parameters en drempels verschillen per merk en model. Wat hier als voorbeeld staat (Remeha, Intergas, ATAG, Vaillant) is precies dat, een voorbeeld. Voor het toestel waaraan je werkt geldt de handleiding van dat toestel.'
  ],
  leerdoelen: [
    'Aan/uit, modulerend en OpenTherm regelen uit elkaar houden',
    'Weersafhankelijk regelen en de stooklijn uitleggen',
    'Uitleggen wat slimme thermostaten en zoneregeling met de ketel doen',
    'Combi en voorraadvat vergelijken en CW-klassen begrijpen',
    'De risico\'s van tapwater herkennen'
  ],
  examen: [
    {
      vraag: `Een ketel is aangesloten op een gewone aan/uit-thermostaat. Wat gebeurt er zodra die thermostaat een warmtevraag geeft?`,
      opties: [
        `De ketel warmt het cv-water op tot de vaste, op de ketel zelf ingestelde temperatuur, ongeacht hoeveel warmte de woning op dat moment echt nodig heeft`,
        `De ketel vraagt de thermostaat om de gewenste aanvoertemperatuur door te geven en moduleert daarnaar`,
        `De ketel schakelt bij elke warmtevraag automatisch over naar tapwaterbedrijf, ongeacht of er een kraan open staat, en negeert daarbij de cv-vraag volledig`,
        `De ketel gaat in vergrendeling omdat er geen OpenTherm-signaal is`
      ],
      goed: 0,
      uitleg: `Bij een klassieke aan/uit-aansluiting kent de ketel alleen "wel of geen warmtevraag": hij warmt op tot de temperatuur die op de ketel zelf is ingesteld. Pas een OpenTherm-thermostaat kan doorgeven welke temperatuur precies nodig is.`
    },
    {
      vraag: `Wat is het functionele verschil dat OpenTherm toevoegt ten opzichte van een aan/uit-aansluiting?`,
      opties: [
        `OpenTherm maakt de ketel geschikt voor tapwater, aan/uit niet`,
        `OpenTherm werkt alleen met een buitenvoeler, aan/uit nooit`,
        `OpenTherm vervangt de noodzaak van een gasblok volledig, waardoor er nooit meer een aparte gasafsluiting of drukregeling nodig zou zijn`,
        `OpenTherm laat de thermostaat doorgeven wanneer en hoe ver de ketel moet bijstellen, in plaats van steeds dezelfde vaste temperatuur te regelen`
      ],
      goed: 3,
      uitleg: `Volgens de uitleg van Google Nest geeft een OpenTherm-thermostaat door wanneer en hoeveel de ketel de aanvoertemperatuur moet bijstellen. Een aan/uit-systeem kent alleen twee standen: wel of geen warmtevraag, altijd naar dezelfde ingestelde temperatuur.`
    },
    {
      vraag: `Een Remeha Calenta 25s heeft een minimale belasting van 5,2 kW. De warmtevraag van de woning is op een milde dag 3 kW. Wat doet de ketel?`,
      opties: [
        `Hij moduleert soepel door naar 3 kW`,
        `Hij schakelt over op de laagste stand van de pomp en blijft doorbranden`,
        `Hij slaat aan en uit (pendelt), omdat hij niet onder zijn minimale belasting kan moduleren`,
        `Hij geeft een storing omdat de warmtevraag te laag is voor de ingestelde minimale belasting van dit specifieke toestel`
      ],
      goed: 2,
      uitleg: `Onder de minimale belasting kan een ketel niet verder terugregelen. Hij levert dan meer warmte dan gevraagd, slaat af zodra de temperatuur is bereikt en start later weer: dat is pendelen. Het is geen storing.`
    },
    {
      vraag: `Een Vaillant ecoTEC plus VHR heeft stooklijn 0,4 ingesteld voor een gewenste kamertemperatuur van 20 graden. Volgens het rekenvoorbeeld uit de handleiding regelt het toestel bij een buitentemperatuur van -15 graden op welke aanvoertemperatuur?`,
      opties: [`20 graden`, `40 graden`, `65 graden`, `90 graden`],
      goed: 1,
      uitleg: `Vaillant noemt dit rekenvoorbeeld letterlijk in de handleiding: stooklijn 0,4 en gewenste kamertemperatuur 20 graden geeft bij -15 graden buiten een aanvoertemperatuur van 40 graden. Een andere stooklijnwaarde of een ander merk geeft een andere uitkomst.`
    },
    {
      vraag: `Een ATAG i-Serie heeft geen buitenvoeler aangesloten. Wat is daarvan het gevolg, naast dat de regeling niet weersafhankelijk kan werken?`,
      opties: [
        `De ketel kan geen tapwater meer leveren`,
        `De vorstbeveiliging van de cv-installatie is niet actief`,
        `De ketel kan niet meer moduleren, ook niet op basis van de kamertemperatuur`,
        `De ketel schakelt automatisch naar de fabrieksinstelling van 90 graden`
      ],
      goed: 1,
      uitleg: `Volgens de handleiding is de vorstbeveiliging van het verwarmingssysteem bij de ATAG i-Serie alleen actief als er een buitenvoeler is aangesloten. Modulatie op basis van de aanvoertemperatuur blijft wel mogelijk, ook zonder buitenvoeler.`
    },
    {
      vraag: `Milieu Centraal adviseert bij een cv-ketel met gewone radiatoren 's nachts te verlagen naar ongeveer 15 graden. Wat is de genoemde reden?`,
      opties: [
        `Een lagere temperatuur beschermt de warmtewisselaar tegen slijtage`,
        `Het kost minder energie om 's ochtends weer op te stoken dan om de hele nacht door te stoken op de ingestelde temperatuur`,
        `Boven 15 graden zou de ketel 's nachts moeten pendelen`,
        `Onder 15 graden schakelt de vorstbeveiliging in`
      ],
      goed: 1,
      uitleg: `Milieu Centraal noemt expliciet dat opnieuw opstoken minder energie kost dan de hele nacht doorstoken. Bij een warmtepomp geldt een ander advies (1 tot 2 graden lager, of niet verlagen), omdat opwarmen daar langer duurt en minder efficient is.`
    },
    {
      vraag: `Een woning heeft veel kleine zones met thermostatische radiatorkranen. Op een milde dag sluiten bijna alle kranen tegelijk. Wat is het risico zonder een bypass of bypass-functie?`,
      opties: [
        `De ketel krijgt te veel gas en gaat in storing wegens overdruk in het gasblok`,
        `Het tapwater wordt te heet omdat de driewegklep vastloopt`,
        `De CW-klasse van de ketel daalt automatisch, ongeacht wat er met de kranen gebeurt`,
        `De pomp kan het water niet meer rondpompen, waardoor de ketel de opgewekte warmte niet kwijt kan en kan gaan pendelen of in storing vallen`
      ],
      goed: 3,
      uitleg: `Sluiten (bijna) alle kranen tegelijk, dan kan de pomp onvoldoende debiet leveren. Een automatische bypassklep of een ingebouwde bypass-functie (zoals bij de Vaillant ecoTEC plus) houdt dan een minimale circulatie in stand.`
    },
    {
      vraag: `Resideo (Honeywell Home) noemt een oplossing tegen pendelen van de ketel bij zoneregeling in het voor- en naseizoen. Welke?`,
      opties: [
        `Een grotere ketel plaatsen`,
        `Alle zones samenvoegen tot een enkel circuit zonder aparte kleppen of eigen thermostaten, zodat er nooit meer een individuele kamertemperatuur per ruimte geregeld kan worden`,
        `Een modulerende aansturing van de zoneregeling via OpenTherm, zodat de ketel op laag vermogen kan doorbranden in plaats van steeds aan en uit te schakelen`,
        `De thermostatische radiatorkranen vervangen door handbediende kranen`
      ],
      goed: 2,
      uitleg: `Resideo noemt overcapaciteit in het voor- en naseizoen als oorzaak van pendelen en modulerende aansturing via OpenTherm als oplossing: de ketel kan dan zijn vermogen aanpassen in plaats van alleen aan of uit te gaan.`
    },
    {
      vraag: `Een Intergas Kombi Kompakt HRE (combiketel) heeft een cv-vraag lopen. Er wordt een warmwaterkraan opengedraaid en de stromingssensor meet meer dan 1,5 l/min. Wat gebeurt er?`,
      opties: [
        `De cv-vraag en de tapwatervraag worden gelijktijdig uitgevoerd via de platenwarmtewisselaar`,
        `De cv-vraag wordt onderbroken, want de warmwatervoorziening heeft voorrang op de verwarming`,
        `De tapwatervraag wordt genegeerd totdat de cv-vraag klaar is`,
        `De ketel gaat in storing omdat er twee vragen tegelijk zijn`
      ],
      goed: 1,
      uitleg: `Bij deze combiketel heeft warm tapwater voorrang: zodra de stromingssensor een tapvraag boven de drempel detecteert, wordt een lopende cv-vraag onderbroken. Cv en tapwater kunnen bij dit toestel niet gelijktijdig werken.`
    },
    {
      vraag: `Een Remeha Calenta soloketel (alleen cv) is aangesloten op een indirect gestookte boiler. Er is gelijktijdig een warmtevraag van de boiler en van de cv. Wat bepaalt de boilervoorkeurschakeling?`,
      opties: [
        `De cv krijgt altijd voorrang, want die staat langer aan`,
        `De boiler krijgt voorrang: de driewegklep stuurt eerst het water naar de boiler`,
        `Beide vragen worden gelijktijdig met halve capaciteit uitgevoerd`,
        `De boiler wordt genegeerd tot de cv-vraag stopt`
      ],
      goed: 1,
      uitleg: `Remeha noemt dit een boilervoorkeurschakeling: bij gelijktijdige vraag krijgt de boiler voorrang boven de cv. Dat is hetzelfde principe als bij een combiketel, nu uitgevoerd met een driewegklep naar een los voorraadvat.`
    },
    {
      vraag: `Volgens de BRL Gaskeur CW van Kiwa hoort bij CW4 een tapdebiet van minstens 7,5 l/min bij 60 graden. Wat betekent een hogere CW-klasse concreet?`,
      opties: [
        `Het toestel heeft een hoger cv-vermogen`,
        `Het toestel heeft een lagere gasvoordruk nodig`,
        `Het toestel is per definitie een voorraadvat in plaats van een combiketel`,
        `Het toestel kan meer warm water per minuut leveren en dus meerdere tappunten beter gelijktijdig bedienen`
      ],
      goed: 3,
      uitleg: `De CW-klasse zegt iets over het tapdebiet bij een bepaalde temperatuur, dus over comfort bij gelijktijdig tappen (bijvoorbeeld douche en keuken). Het zegt niets over het cv-vermogen of de voordruk.`
    },
    {
      vraag: `Een woninginstallatie zonder circulatie levert tapwater vanuit een collectieve ketel. Welke minimale temperatuur moet volgens het Waterwerkblad aan het tappunt worden gehaald?`,
      opties: [`45 graden`, `50 graden`, `55 graden`, `65 graden`],
      goed: 2,
      uitleg: `Voor een woninginstallatie zonder circulatie geldt een minimum van 55 graden aan het tappunt. Met circulatie, of bij een collectief leidingnet, geldt een strenger minimum van 60 graden.`
    },
    {
      vraag: `Een installatie levert warm water van 62 graden aan het tappunt. Wat is volgens het Waterwerkblad het aandachtspunt hierbij, en wat is de aanbevolen maatregel?`,
      opties: [
        `62 graden is te laag tegen legionella, verhoog naar minstens 65 graden`,
        `62 graden kan verbrandingsgevaar geven bij risicogroepen zoals kinderen en ouderen; een thermostatische mengkraan met temperatuurbegrenzing voorkomt dit`,
        `62 graden is precies de wettelijke grens, geen maatregel nodig`,
        `62 graden is alleen een probleem bij een combiketel, niet bij een voorraadvat`
      ],
      goed: 1,
      uitleg: `Het Waterwerkblad noemt expliciet dat 60 graden of hoger verbrandingsgevaar kan geven bij risicogroepen en adviseert een thermostatische mengkraan met temperatuurbegrenzing, die jaarlijks gecontroleerd moet worden.`
    },
    {
      vraag: `Een gewone eengezinswoning valt volgens het Drinkwaterbesluit niet onder de "prioritaire instellingen". Wat betekent dat voor de verantwoordelijkheid van de monteur?`,
      opties: [
        `De monteur hoeft zich helemaal niet aan legionellaregels te houden in een woning`,
        `De monteur moet in elke woning een BRL 6010-risicoanalyse laten uitvoeren`,
        `De monteur mag de temperatuur zelf vrij kiezen omdat een woning geen prioritaire instelling is`,
        `De monteur volgt nog steeds NEN 1006 en de Waterwerkbladen (temperatuur, thermische desinfectie), maar de zwaardere Drinkwaterbesluit-verplichtingen (risicoanalyse, beheersplan) gelden alleen voor de aangewezen prioritaire installaties zoals ziekenhuizen en hotels`
      ],
      goed: 3,
      uitleg: `Een gewone woning staat niet op de lijst van prioritaire instellingen uit het Drinkwaterbesluit, dus de zware risicoanalyse- en beheersplanverplichting geldt daar niet. De basisregels uit NEN 1006 en de Waterwerkbladen (temperatuur, thermische desinfectie) blijven wel gelden.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 6.1 */
{
  id: 'm06l01',
  nr: '6.1',
  titel: 'Thermostaten: aan/uit, modulerend en OpenTherm',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de regelvormen uit elkaar houden en uitleggen wat OpenTherm de ketel vertelt en wat modulatie met het rendement doet.',
  videos: [
    { taal: 'nl', titel: 'CV ketel en Thermostaat: wie is de baas? (Ketel Klets)', yt: 'D7OdBLGUyFo', duur: '±7 min, 2022' },
    { taal: 'nl', titel: 'Uitleg over een aan/uit en modulerende thermostaat (John Visser cv-optimalisatie)', yt: 'tULzyv3OOTw', duur: '±2 min, 2020' },
    { taal: 'en', titel: 'What is OpenTherm, what makes a smart thermostat smart? (Hydroheat)', yt: '1kHzX5Ebm_k', duur: '±12 min, 2020' }
  ],
  tekst: `
## Wie vertelt de ketel wat hij moet doen?

Een ketel doet niets uit zichzelf: hij wacht op een signaal van de thermostaat. Dat signaal kan drie vormen hebben, en het verschil bepaalt hoe zuinig en hoe rustig de installatie draait.

Bij een **aan/uit-thermostaat** is er maar een schakelaar: contact dicht is warmtevraag, contact open is geen warmtevraag. De ketel kent geen "een beetje warmte" of "veel warmte": zodra er een vraag is, warmt hij het cv-water op tot de temperatuur die op de ketel zelf staat ingesteld, ongeacht hoeveel warmte de woning op dat moment echt nodig heeft.

Bij **modulerend regelen** past de ketel zijn vermogen aan de warmtevraag aan, bijvoorbeeld via een 0 tot 10 V-signaal of via een eigen bus van de fabrikant (Remeha R-bus, Vaillant eBUS, Nefit/Bosch EMS). Deze protocollen zijn niet uitwisselbaar met een thermostaat van een ander merk zonder adapter.

**OpenTherm** is geen merk maar een open protocol: een taal waarin een compatibele thermostaat en een compatibele ketel met elkaar praten. Een OpenTherm-thermostaat geeft door wanneer en hoe ver de ketel de aanvoertemperatuur moet aanpassen, in plaats van steeds naar dezelfde vaste temperatuur te regelen. Zo kan bijvoorbeeld een Google Nest-thermostaat via OpenTherm zowel de tapwater- als de cv-temperatuur van de ketel regelen, op basis van gegevens als de gemeten binnentemperatuur, de buitentemperatuur en het aantal mensen in huis.

!!! kern OpenTherm is een taal, geen merk
Een OpenTherm-ketel en een OpenTherm-thermostaat kunnen met elkaar praten omdat ze hetzelfde protocol spreken, niet omdat ze van hetzelfde merk zijn. Een ketel met een eigen bus (R-bus, eBUS, EMS) spreekt die taal niet zonder adapter: controleer dit voor je een nieuwe thermostaat aansluit.
!!!

## Het bericht achter de knop: hoe OpenTherm technisch werkt

Een OpenTherm-bericht is een pakketje van 32 bits, met een start- en een stopbit eromheen: een pariteitsbit, het berichttype, een data-ID die aangeeft waar het bericht over gaat, en een datawaarde van 16 bits. Elke seconde moet de thermostaat (de "master") minstens een keer met de ketel (de "slave") communiceren.

Elke data-ID heeft een vaste betekenis. Een paar voorbeelden uit de specificatie:

| Data-ID | Betekenis |
|---|---|
| 1 | Gewenste aanvoertemperatuur (control setpoint) |
| 17 | Relatief modulatieniveau (%) |
| 18 | Cv-waterdruk (bar) |
| 25 | Ketelwatertemperatuur (aanvoer) |
| 27 | Buitentemperatuur |
| 28 | Retourwatertemperatuur |

Temperaturen worden verstuurd in een vast-kommaformaat: het hoge byte is het aantal hele graden, het lage byte is een fractie van 1/256 graad. Zo kun je uit twee bytes precies berekenen welke temperatuur is bedoeld.

## Rekenvoorbeeld: een OpenTherm-temperatuurbericht decoderen

Een OpenTherm-bericht voor data-ID 25 (aanvoertemperatuur) bevat de bytes 0x14 (hoog) en 0x80 (laag). Wat is de aanvoertemperatuur?

1. Het hoge byte 0x14 is 20 in decimaal: dat zijn de hele graden.
2. Het lage byte 0x80 is 128 in decimaal: dat is de fractie, 128 / 256 = 0,5 graad.
3. Samen: 20 + 0,5 = 20,5 graden Celsius.

Zo'n bericht zie je nooit rechtstreeks als monteur, maar het verklaart waarom een OpenTherm-thermostaat op tiende graden nauwkeurig met de ketel kan communiceren.

## Wat modulatie met het rendement doet

Modulatie is niet alleen comfort, het raakt ook direct het rendement. Een HR-ketel condenseert meer waterdamp uit het rookgas naarmate de retourtemperatuur lager is. Een weersafhankelijke of modulerende regeling houdt de aanvoer- en dus de retourtemperatuur bij mild weer laag, in plaats van steeds op de vaste, hoge waarde van een handbediende thermostaat. Milieu Centraal noemt voor een modulerende slimme thermostaat een besparing van ongeveer 3% op de verwarmingskosten ten opzichte van een gewone aan/uit-thermostaat: de ketel brandt minder hard zodra er minder warmte nodig is, in plaats van steeds vol vermogen te leveren tot de temperatuur is bereikt.

Modulatie heeft wel een ondergrens. Een Remeha Calenta 25s heeft een minimale belasting van 5,2 kW. Is de warmtevraag van de woning lager, bijvoorbeeld 3 kW op een milde dag, dan kan de ketel niet verder terugregelen: hij slaat aan en uit. Dat heet pendelen en is geen storing, het is de ketel die zijn ondergrens heeft bereikt. Hoe je dat herkent en wat je eraan doet bij zoneregeling, lees je in [les 6.3](les:m06l03).

## Praktijkgeval: "mijn slimme thermostaat doet niks"

Een klant heeft zelf een OpenTherm-thermostaat gekocht en aangesloten op een ketel met een eigen bus (bijvoorbeeld Vaillant eBUS). De thermostaat schakelt aan en uit, maar moduleert niet: hij "praat" niet dezelfde taal als de ketel verwacht, of de ketel staat nog op aan/uit-aansturing ingesteld. Voor je een dergelijke storing zoekt in de elektronica, controleer je eerst of het protocol van de thermostaat en van de ketel bij elkaar passen, en of de klemmen zijn aangesloten zoals de handleiding van de ketel voorschrijft (zie ook [les 5.1 tot 5.3](les:m05l03) voor hoe je een storing systematisch ordent per stroom).
`,
  checklist: [
    'Ik kan aan/uit, modulerend en OpenTherm-regelen van elkaar onderscheiden',
    'Ik weet dat OpenTherm een protocol is, geen merk, en dat sommige fabrikanten een eigen bus gebruiken',
    'Ik kan uitleggen waarom een lagere retourtemperatuur het rendement verhoogt',
    'Ik controleer bij een nieuwe thermostaat altijd of het protocol bij de ketel past voordat ik hem aansluit',
    'Ik herken pendelen als een ketel onder zijn minimale belasting komt, niet als storing'
  ],
  quiz: [
    {
      vraag: `Wat gebeurt er bij een aan/uit-thermostaat zodra er een warmtevraag is?`,
      opties: [
        `De ketel vraagt de thermostaat om de gewenste temperatuur`,
        `De ketel warmt op tot de vaste, op de ketel zelf ingestelde temperatuur, ongeacht de werkelijke warmtebehoefte`,
        `De ketel moduleert automatisch naar de laagste stand die nog toereikend is`,
        `De ketel schakelt bij elke warmtevraag eerst automatisch over naar tapwaterbedrijf, ook als er geen kraan open staat`
      ],
      goed: 1,
      uitleg: `Een aan/uit-thermostaat kent alleen "wel of geen vraag". De ketel warmt dan op tot de temperatuur die op de ketel zelf is ingesteld: hij weet niet hoeveel warmte er werkelijk nodig is.`
    },
    {
      vraag: `Wat geeft een OpenTherm-thermostaat aan de ketel door, in tegenstelling tot een aan/uit-thermostaat?`,
      opties: [
        `Alleen of het toestel op dat moment gas mag verbruiken, zonder dat er een concrete temperatuurwaarde wordt doorgegeven`,
        `Wanneer en hoe ver de ketel de aanvoertemperatuur moet aanpassen, op basis van de werkelijke warmtebehoefte`,
        `De gasvoordruk die het toestel nodig heeft`,
        `Het model van de ketel`
      ],
      goed: 1,
      uitleg: `OpenTherm laat de thermostaat doorgeven hoe de ketel moet moduleren: welke aanvoertemperatuur nodig is, op basis van bijvoorbeeld de binnentemperatuur en de buitentemperatuur.`
    },
    {
      vraag: `Een OpenTherm-bericht voor de aanvoertemperatuur bevat de bytes 0x16 (hoog) en 0x00 (laag). Welke temperatuur betekent dat?`,
      opties: [`16,0 graden`, `22,0 graden`, `1,6 graden`, `160 graden`],
      goed: 1,
      uitleg: `0x16 is 22 in decimaal (1 x 16 + 6), dat zijn de hele graden. De fractie is 0x00 / 256 = 0. Samen: 22,0 graden. Verwar het hexadecimale getal niet met het decimale getal dat er toevallig op lijkt (16,0).`
    },
    {
      vraag: `Een Remeha Calenta 25s heeft een minimale belasting van 5,2 kW. De warmtevraag van de woning zakt op een milde dag naar 3 kW. Wat gebeurt er?`,
      opties: [
        `De ketel moduleert soepel door naar 3 kW`,
        `De ketel gaat in storing`,
        `De ketel pendelt: hij slaat aan en uit omdat hij niet onder zijn minimale belasting kan moduleren`,
        `De ketel schakelt naar tapwaterbedrijf`
      ],
      goed: 2,
      uitleg: `Onder de minimale belasting kan de ketel niet verder terugregelen. Hij levert dan meer warmte dan gevraagd, schakelt uit en start later weer: dat is pendelen, geen storing.`
    },
    {
      vraag: `Welke data-ID staat in de OpenTherm-specificatie voor de buitentemperatuur?`,
      opties: [`Data-ID 17`, `Data-ID 18`, `Data-ID 25`, `Data-ID 27`],
      goed: 3,
      uitleg: `Data-ID 27 is de buitentemperatuur. Data-ID 17 is het modulatieniveau, 18 de cv-waterdruk en 25 de ketelwatertemperatuur (aanvoer).`
    },
    {
      vraag: `Waarom bespaart een modulerende slimme thermostaat volgens Milieu Centraal gemiddeld ongeveer 3% op de verwarmingskosten ten opzichte van een gewone thermostaat?`,
      opties: [
        `Hij verlaagt automatisch de warmwatertemperatuur`,
        `De ketel brandt minder hard zodra er minder warmte nodig is, in plaats van steeds vol vermogen te leveren tot de temperatuur is bereikt`,
        `Hij schakelt de ketel 's nachts helemaal uit`,
        `Hij verkort de opwarmtijd van de woning`
      ],
      goed: 1,
      uitleg: `Modulerend aansturen betekent dat de ketel zijn vermogen aanpast aan de werkelijke warmtevraag. Dat scheelt onnodig vol vermogen leveren en dus gas, wat Milieu Centraal vertaalt naar ongeveer 3% besparing.`
    }
  ],
  kaarten: [
    { voor: `Wat is OpenTherm?`, achter: `Een open communicatieprotocol waarmee een compatibele thermostaat en ketel gegevens uitwisselen, geen merk.` },
    { voor: `Wat doet een ketel bij een warmtevraag van een aan/uit-thermostaat?`, achter: `Hij warmt altijd op tot de vaste, op de ketel ingestelde temperatuur, ongeacht de werkelijke warmtebehoefte.` },
    { voor: `Uit hoeveel bits bestaat een OpenTherm-bericht (exclusief start- en stopbit)?`, achter: `32 bits: pariteitsbit, berichttype, spare, data-ID en een datawaarde van 16 bits.` },
    { voor: `Welke data-ID hoort bij de buitentemperatuur in OpenTherm?`, achter: `Data-ID 27.` },
    { voor: `Wat gebeurt er als de warmtevraag onder de minimale belasting van de ketel komt?`, achter: `De ketel pendelt: hij slaat aan en uit. Geen storing, wel de ondergrens van modulatie.` },
    { voor: `Welk modulatiebereik heeft de Remeha Calenta 25s (voorbeeld)?`, achter: `5,2 tot 25,0 kW (onderwaarde), ongeveer 1 op 4,8.` },
    { voor: `Welke eigen bus-protocollen gebruiken Vaillant en Remeha naast OpenTherm?`, achter: `Vaillant eBUS, Remeha R-bus (en Nefit/Bosch EMS). Niet uitwisselbaar met OpenTherm zonder adapter.` },
    { voor: `Hoeveel bespaart een modulerende slimme thermostaat ongeveer op verwarmingskosten volgens Milieu Centraal?`, achter: `Ongeveer 3% ten opzichte van een gewone aan/uit-thermostaat.` }
  ],
  bronnen: ['RGL-01', 'RGL-02', 'RGL-03', 'RGL-04', 'REG-01', 'REG-02', 'REG-03', 'REG-05', 'REG-07', 'REG-11', 'KET-15', 'KET-21', 'REG-19']
},

/* ------------------------------------------------------------------ 6.2 */
{
  id: 'm06l02',
  nr: '6.2',
  titel: 'Weersafhankelijk regelen en de stooklijn',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe een weersafhankelijke regeling werkt, hoe je de stooklijn instelt en wat nachtverlaging doet met de retourtemperatuur.',
  videos: [
    { taal: 'nl', titel: 'Hoe werkt een stooklijn? Remeha Tzerra Ace (Ketel Klets)', yt: 'A9JHHdahyE4', duur: '±4 min, 2021' },
    { taal: 'nl', titel: 'Weersafhankelijke regeling, hoe werkt dit? (TV Emiel)', yt: 'cUYXi7A1XL8', duur: '±3 min, 2021' },
    { taal: 'en', titel: 'What is boiler weather compensation? (Baxi)', yt: 'GmEWiv1SuVI', duur: '±3 min, 2024' }
  ],
  tekst: `
## Wat een buitenvoeler toevoegt

Zonder buitenvoeler regelt een ketel op een vaste, door jou of de bewoner ingestelde aanvoertemperatuur: die verandert niet vanzelf als het buiten warmer of kouder wordt. Sluit je een buitenvoeler aan, dan kan de regeling weersafhankelijk gaan werken: ze meet de buitentemperatuur en de aanvoerwatertemperatuur, en berekent daaruit het vermogen dat nodig is. Het gevolg is dat de ketel langer en op een lager niveau in bedrijf is, in plaats van kort en op hoog vermogen: precies het soort modulerend gedrag dat je in [les 6.1](les:m06l01) al zag, maar dan aangestuurd door het weer in plaats van door de kamertemperatuur alleen.

Bij Intergas bepaalt bij een aan/uit-thermostaat de in de branderautomaat geprogrammeerde stooklijn de gewenste aanvoertemperatuur, met de op het display ingestelde temperatuur als maximum. Bij een OpenTherm-thermostaat neemt de thermostaat die rol over. Bij Remeha regelt de Calenta met een buitensensor bij een aan/uit-thermostaat via een interne, instelbare stooklijn.

## De stooklijn: van buitentemperatuur naar aanvoertemperatuur

De stooklijn is de rekenregel die de gemeten buitentemperatuur omzet naar een gewenste aanvoertemperatuur. Hoe fabrikanten dat instelbaar maken, verschilt.

Intergas werkt met vier hoekpunten: een fabrieksinstelling van Tmax CV 80 graden, Tmin CV 25 graden, Tmin buiten -7 graden en Tmax buiten 25 graden. Dat betekent: bij -7 graden buiten of kouder regelt de ketel op 80 graden aanvoer, bij 25 graden buiten of warmer op 25 graden aanvoer, en daartussenin loopt de lijn recht op.

Vaillant werkt bij de ecoTEC plus VHR met een dimensieloos stooklijngetal tussen 0,1 en 4,0 (in stappen van 0,05), gekoppeld aan een gewenste kamertemperatuur.

!!! kern De stooklijn is een instelling, geen vast recept
Precies zoals bij de gas-luchtverhouding in [les 5.2](les:m05l02) geldt: er bestaat geen "juiste" stooklijnwaarde in het algemeen. De juiste stooklijn hangt af van het merk toestel, de isolatie van de woning en het afgiftesysteem (radiatoren of vloerverwarming). Stel bij, meet het effect en pas opnieuw aan, in plaats van een vast getal uit je hoofd te gebruiken.
!!!

## Rekenvoorbeeld: de stooklijn van een Vaillant ecoTEC plus VHR

De handleiding van de Vaillant ecoTEC plus VHR geeft dit voorbeeld: met stooklijn 0,4 ingesteld voor een gewenste kamertemperatuur van 20 graden, regelt het toestel bij een buitentemperatuur van -15 graden op een aanvoertemperatuur van 40 graden.

| Grootheid | Waarde | Toelichting |
|---|---|---|
| Ingestelde stooklijn | 0,4 | Bepaalt de helling van de lijn |
| Gewenste kamertemperatuur | 20 graden | Instelling van de gebruiker |
| Buitentemperatuur | -15 graden | Gemeten door de buitenvoeler |
| Berekende aanvoertemperatuur | 40 graden | Resultaat van de stooklijnberekening |

Wordt de gewenste kamertemperatuur bijgesteld naar 21 graden, dan verschuift de hele stooklijn evenwijdig mee: bij dezelfde buitentemperatuur van -15 graden regelt het toestel dan op een iets hogere aanvoertemperatuur dan 40 graden. Dit is een voorbeeld van een merk en model: bij een ander toestel hoort een andere schaal en dus een ander getal bij dezelfde situatie.

## Nachtverlaging en de invloed op de retourtemperatuur

Nachtverlaging betekent de kamertemperatuur 's nachts of bij afwezigheid tijdelijk lager instellen. Milieu Centraal adviseert bij een cv-ketel met gewone radiatoren de thermostaat te verlagen naar ongeveer 15 graden, met als reden dat het minder energie kost om 's ochtends weer op te stoken dan om de hele nacht door te stoken op de hoge, ingestelde temperatuur.

Een lagere ingestelde temperatuur betekent ook een lagere aanvoer- en dus een lagere retourtemperatuur (zie de stooklijn hierboven: minder warmtevraag geeft een lagere berekende aanvoertemperatuur). Dat is aantrekkelijk voor het rendement: hoe lager de retourtemperatuur, hoe meer waterdamp een HR-ketel uit het rookgas kan laten condenseren. Voor een warmtepomp of een aansluiting op een warmtenet geldt een ander advies: daar is maar 1 tot 2 graden lager verstandig, of helemaal niet verlagen, omdat opwarmen daar langer duurt en minder efficient is dan de temperatuur constant houden.

## Praktijkgeval: "'s ochtends duurt het te lang voor het warm is"

Een bewoner klaagt dat de woning 's ochtends na de nachtverlaging te langzaam opwarmt. Voor je de stooklijn zomaar steiler zet, controleer je eerst het afgiftesysteem: bij vloerverwarming ligt de aanvoertemperatuur en dus het beschikbare vermogen veel lager dan bij radiatoren, en de vloer heeft door zijn massa meer tijd nodig om op te warmen. Een kleinere nachtverlaging (bijvoorbeeld 2 graden in plaats van 5) geeft dan vaak een beter resultaat dan een agressievere stooklijn, die het rendement bij mild weer juist verslechtert. Zie ook [les 3.6](les:m03l06) voor de relatie tussen delta T, debiet en afgifte.
`,
  checklist: [
    'Ik kan uitleggen wat een buitenvoeler toevoegt aan de regeling',
    'Ik kan een stooklijn lezen: welke aanvoertemperatuur hoort bij welke buitentemperatuur',
    'Ik weet dat de stooklijnschaal per merk verschilt en zoek de waarden op in de handleiding',
    'Ik kan uitleggen waarom nachtverlaging de retourtemperatuur en dus het rendement beinvloedt',
    'Ik controleer bij een klacht over langzame opwarming eerst het afgiftesysteem voor ik de stooklijn aanpas'
  ],
  quiz: [
    {
      vraag: `Wat verandert er in het gedrag van de ketel als je een buitenvoeler aansluit en de regeling weersafhankelijk laat werken?`,
      opties: [
        `De ketel schakelt alleen nog aan en uit, nooit meer modulerend`,
        `De ketel levert vanaf dat moment alleen nog tapwater en stopt met cv-verwarming, ongeacht de warmtevraag`,
        `De ketel is langer en op een lager niveau in bedrijf, in plaats van kort en op hoog vermogen`,
        `De ketel negeert de kamerthermostaat volledig zodra de buitenvoeler is aangesloten`
      ],
      goed: 2,
      uitleg: `Volgens de fabrikant zorgt een weersafhankelijke regeling ervoor dat de ketel zijn vermogen afstemt op de berekende behoefte: langer en op een lager niveau in bedrijf, in plaats van kort en hard.`
    },
    {
      vraag: `Intergas werkt met een fabrieksinstelling Tmax CV 80 graden bij Tmin buiten -7 graden, en Tmin CV 25 graden bij Tmax buiten 25 graden. Op welke aanvoertemperatuur regelt de ketel bij een buitentemperatuur van -10 graden?`,
      opties: [`25 graden, want -10 ligt onder de laagste ingestelde buitentemperatuur`, `80 graden, want -10 graden ligt onder de -7 graden ondergrens van de lijn`, `Ergens tussen 25 en 80 graden, recht evenredig met de buitentemperatuur`, `90 graden, het toestel schakelt naar de maximale bedrijfstemperatuur`],
      goed: 1,
      uitleg: `Onder de ingestelde Tmin buiten (-7 graden) regelt de ketel op de maximale stooklijnwaarde, hier 80 graden: de lijn loopt niet door onder het laagste ingestelde punt. Bij -10 graden buiten geldt dus nog steeds 80 graden aanvoer.`
    },
    {
      vraag: `Bij de Vaillant ecoTEC plus VHR geeft stooklijn 0,4 bij een gewenste kamertemperatuur van 20 graden en -15 graden buiten een aanvoertemperatuur van 40 graden. Wat gebeurt er als de gewenste kamertemperatuur naar 21 graden wordt bijgesteld?`,
      opties: [
        `De stooklijn verandert niet, alleen het setpoint van de thermostaat wijzigt`,
        `De hele stooklijn verschuift evenwijdig, waardoor bij dezelfde buitentemperatuur een iets hogere aanvoertemperatuur wordt berekend`,
        `De ketel schakelt over naar een vaste temperatuur van 21 graden`,
        `De stooklijnwaarde zelf (0,4) wordt door het toestel automatisch verhoogd naar 0,5, onafhankelijk van de ingestelde kamertemperatuur`
      ],
      goed: 1,
      uitleg: `Volgens de handleiding verschuift de stooklijn parallel als de gewenste kamertemperatuur wijzigt. De hellingswaarde (0,4) blijft gelijk, maar de bijbehorende aanvoertemperatuur bij elke buitentemperatuur verandert mee.`
    },
    {
      vraag: `Waarom adviseert Milieu Centraal bij een cv-ketel met radiatoren 's nachts te verlagen naar ongeveer 15 graden?`,
      opties: [
        `Om de warmtewisselaar te beschermen tegen te hoge temperaturen`,
        `Omdat het minder energie kost om 's ochtends weer op te stoken dan de hele nacht door te stoken op de ingestelde temperatuur`,
        `Om legionellagroei in het cv-water te voorkomen`,
        `Omdat de stooklijn dat wettelijk verplicht volgens een landelijke richtlijn die voor elke woning met een cv-ketel zou gelden, ongeacht het bouwjaar`
      ],
      goed: 1,
      uitleg: `Milieu Centraal noemt expliciet dat opnieuw opstoken minder energie kost dan de hele nacht doorstoken. Bij vloerverwarming of een warmtepomp ligt dat anders vanwege de trage opwarming.`
    },
    {
      vraag: `Hoe hangt nachtverlaging samen met het rendement van een HR-ketel?`,
      opties: [
        `Nachtverlaging heeft geen invloed op de retourtemperatuur`,
        `Een lagere ingestelde temperatuur geeft via de stooklijn een lagere retourtemperatuur, waardoor de ketel meer kan condenseren`,
        `Nachtverlaging verhoogt de retourtemperatuur, wat het rendement verbetert`,
        `Nachtverlaging werkt uitsluitend bij een aan/uit-thermostaat en heeft geen enkel effect bij een modulerende regeling`
      ],
      goed: 1,
      uitleg: `Minder warmtevraag geeft via de stooklijn een lagere berekende aanvoertemperatuur en dus een lagere retourtemperatuur. Een lagere retourtemperatuur laat een HR-ketel meer condenseren en dus zuiniger draaien.`
    },
    {
      vraag: `Een bewoner met vloerverwarming klaagt dat de woning na nachtverlaging 's ochtends te langzaam opwarmt. Wat is de beste eerste stap?`,
      opties: [
        `Direct de stooklijn veel steiler instellen`,
        `De nachtverlaging kleiner maken (bijvoorbeeld 2 in plaats van 5 graden) in plaats van meteen de stooklijn aan te passen, vanwege de lagere aanvoertemperatuur en grotere massa van vloerverwarming`,
        `De buitenvoeler verwijderen`,
        `De ketel op de maximale aanvoertemperatuur laten regelen, altijd`,
        `Overschakelen naar een aan/uit-thermostaat`
      ],
      goed: 1,
      uitleg: `Vloerverwarming heeft een lagere aanvoertemperatuur en meer thermische massa dan radiatoren, dus een kleinere nachtverlaging is vaak effectiever dan de stooklijn steiler zetten, wat het rendement bij mild weer juist verslechtert.`
    }
  ],
  kaarten: [
    { voor: `Wat doet een buitenvoeler voor de regeling van een ketel?`, achter: `Hij meet de buitentemperatuur, waardoor de regeling weersafhankelijk kan werken en de ketel langer en op lager niveau draait.` },
    { voor: `Welke vier hoekpunten gebruikt Intergas voor de fabrieksinstelling van de stooklijn (voorbeeld)?`, achter: `Tmax CV 80 graden, Tmin CV 25 graden, Tmin buiten -7 graden, Tmax buiten 25 graden.` },
    { voor: `Op welke schaal stelt Vaillant de stooklijn in bij de ecoTEC plus VHR?`, achter: `Van 0,1 tot 4,0, in stappen van 0,05, gekoppeld aan een gewenste kamertemperatuur.` },
    { voor: `Wat gebeurt er met de stooklijn als je de gewenste kamertemperatuur bijstelt?`, achter: `De hele lijn verschuift evenwijdig mee (parallel).` },
    { voor: `Naar welke temperatuur adviseert Milieu Centraal 's nachts te verlagen bij radiatoren, en waarom?`, achter: `Ongeveer 15 graden: opnieuw opstoken kost minder energie dan de hele nacht doorstoken.` },
    { voor: `Waarom is nachtverlaging bij een warmtepomp anders dan bij een cv-ketel?`, achter: `Opwarmen duurt langer en is minder efficient, dus wordt maar 1 tot 2 graden lager geadviseerd, of niet verlagen.` },
    { voor: `Waarom is een lagere retourtemperatuur gunstig voor het rendement?`, achter: `Een HR-ketel kan dan meer waterdamp uit het rookgas laten condenseren.` },
    { voor: `Wat is een betere eerste stap bij trage ochtendopwarming met vloerverwarming: stooklijn steiler of nachtverlaging kleiner?`, achter: `Nachtverlaging kleiner maken, vanwege de lage aanvoertemperatuur en trage massa van vloerverwarming.` }
  ],
  bronnen: ['RGL-05', 'RGL-06', 'RGL-07', 'RGL-08', 'RGL-09', 'REG-08', 'REG-09', 'REG-19', 'KET-21', 'REG-16']
},

/* ------------------------------------------------------------------ 6.3 */
{
  id: 'm06l03',
  nr: '6.3',
  titel: 'Slimme thermostaten en zoneregeling',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen wat slimme thermostaten en zoneregeling met de ketel doen en welke hydraulische gevolgen dat heeft.',
  videos: [
    { taal: 'nl', titel: 'Welke slimme thermostaat is het beste voor mij? (ID.nl)', yt: '1z2sCRTEhgQ', duur: '±18 min, 2022' },
    { taal: 'nl', titel: 'Uitleg over een Plugwise zone-regeling (John Visser cv-optimalisatie)', yt: 'n7rKkH27DVY', duur: '±5 min, 2021' },
    { taal: 'en', titel: 'Zone Valve Wiring For Beginners (Jersey Mike HVAC, VK/VS-terminologie)', yt: 'jQklHi-nrYA', duur: '±6 min, 2022' }
  ],
  tekst: `
## Wat een slimme thermostaat toevoegt aan modulerend regelen

In [les 6.1](les:m06l01) zag je het verschil tussen aan/uit, modulerend en OpenTherm. Een slimme thermostaat bouwt daarop voort: hij is meestal via een app te bedienen, kan zelfprogrammerend zijn (het weekritme van de bewoner leren) en is soms uit te breiden met losse slimme radiatorknoppen op de radiatoren of te koppelen aan een slimme energiemeter. Niet elke slimme thermostaat werkt overigens even goed: de functies verschillen sterk per merk en model, dus een merk aanraden hoort niet bij het werk van een monteur, wel uitleggen wat de functies technisch betekenen.

## Zoneregeling: comfort met een hydraulische prijs

Zoneregeling betekent dat je zones of kamers apart van elkaar kunt verwarmen, in plaats van het hele huis te sturen op de temperatuur in de woonkamer alleen. Dat kan met een cv-ketel die dat ondersteunt en kleppen in de verwarmingsbuizen, in combinatie met een of meer extra thermostaten, of met een slimme thermostaat die is uitgebreid met slimme radiatorknoppen.

Comfort en energiebesparing zijn de voordelen, maar zoneregeling heeft ook een hydraulische keerzijde. Sluiten in veel zones tegelijk de kranen (bijvoorbeeld op een milde dag, of 's nachts in slaapkamers), dan daalt het totale debiet door de installatie sterk. Dat kan twee dingen doen:

- **Pendelen.** Fabrikant Resideo (Honeywell Home) noemt dat overcapaciteit tijdens het voor- en naseizoen ervoor kan zorgen dat de ketel gaat pendelen, omdat er te weinig warmtevraag overblijft. Een modulerende aansturing van de zoneregeling via OpenTherm biedt hier uitkomst: de ketel kan dan op laag vermogen doorbranden in plaats van steeds aan en uit te schakelen.
- **Te weinig debiet voor de pomp.** Sluiten bijna alle thermostatische radiatorkranen tegelijk, dan kan de pomp het water niet meer rondpompen: de ketel kan de opgewekte warmte niet meer kwijt. Intergas noemt in het installatievoorschrift bij vloerverwarmingszones expliciet: zorg voor een minimale watercirculatie en plaats eventueel een bypassventiel. Vaillant bouwt bij de ecoTEC plus VHR een instelbare bypass-functie in (parameter met standen als "zonder bypass" en "bypass"), die de warmteopwekker hydraulisch kan ontkoppelen van bijvoorbeeld een open verdeler of een buffer.

!!! kern Een bypass houdt de installatie draaiende, niet de bewoner warm
Een automatische bypassklep of een ingebouwde bypass-functie zorgt dat er altijd een minimum aan water blijft circuleren, ook als alle kranen dicht staan. Dat voorkomt dat de ketel tegen een (bijna) gesloten circuit aan pompt en in storing valt of gaat pendelen. Zonder minimale doorstroming leidt in [les 3.4](les:m03l04) al de pompkarakteristiek naar dit probleem: een pomp die tegen een steeds hogere weerstand werkt, levert steeds minder debiet.
!!!

## Rekenvoorbeeld: waarom sluiten alle kranen tegelijk een probleem is

Een installatie heeft 8 radiatoren met elk een thermostatische kraan. Op een zonnige middag hebben 7 van de 8 kamers hun ingestelde temperatuur al bereikt en sluiten hun kranen. Nog maar 1 radiator (bijvoorbeeld in een noordkamer) vraagt warmte. Het leidingnet naar die ene radiator moet dan bijna het volledige debiet van de pomp verwerken, wat kan leiden tot suizend water (te hoge stroomsnelheid, zie [les 3.6](les:m03l06)) of, in het ergste geval, dat ook die laatste kraan dichtklapt en de pomp tegen een vrijwel gesloten circuit werkt. Een bypass (los ventiel of ingebouwde functie) geeft de pomp dan altijd een uitweg.

## Praktijkgeval: geluidsklachten na installatie van slimme radiatorknoppen

Een klant heeft zelf slimme radiatorknoppen op alle radiatoren laten zetten en meldt een half jaar later "gesuis" in de leidingen en een ketel die vaker aan- en uitschakelt dan voorheen. Voor je een nieuwe pomp of een ander toerental instelt, controleer je eerst of er een bypass aanwezig is en of die goed functioneert: als de installatie voor de komst van de radiatorknoppen altijd voldoende open kranen had om te circuleren, en dat nu niet meer zo is, ligt de oorzaak vaak in de ontbrekende of verkeerd ingestelde bypass, niet in de pomp zelf.
`,
  checklist: [
    'Ik kan uitleggen wat een slimme thermostaat toevoegt aan modulerend regelen',
    'Ik kan uitleggen wat zoneregeling is en welke twee hydraulische risico\'s erbij horen',
    'Ik weet waarom een bypass nodig kan zijn bij veel gesloten thermostatische kranen tegelijk',
    'Ik controleer bij geluid of pendelen na een zoneregeling-installatie eerst de bypass voor ik de pomp vervang'
  ],
  quiz: [
    {
      vraag: `Wat voegt een slimme thermostaat toe ten opzichte van een gewone OpenTherm-thermostaat?`,
      opties: [
        `Hij maakt de ketel per definitie geschikt voor tapwater`,
        `Hij is via een app te bedienen en kan zelfprogrammerend zijn of worden uitgebreid met slimme radiatorknoppen`,
        `Hij vervangt de buitenvoeler`,
        `Hij verhoogt automatisch de CW-klasse van de ketel zodra er een internetverbinding tot stand komt, onafhankelijk van het werkelijke tapwaterverbruik`
      ],
      goed: 1,
      uitleg: `Een slimme thermostaat bouwt voort op modulerend/OpenTherm-regelen met extra functies: app-bediening, zelf leren, en uitbreiding met radiatorknoppen. De CW-klasse en de buitenvoeler zijn losse onderdelen van de installatie.`
    },
    {
      vraag: `Wat is zoneregeling?`,
      opties: [
        `Het apart van elkaar kunnen verwarmen van zones of kamers, in plaats van het hele huis op een enkele kamertemperatuur te sturen`,
        `Het automatisch wisselen tussen aardgas en een ander gas`,
        `Het verdelen van tapwater over meerdere badkamers`,
        `Het instellen van verschillende CW-klassen per verdieping`
      ],
      goed: 0,
      uitleg: `Zoneregeling verwarmt zones of kamers apart, met eigen thermostaten of radiatorknoppen, in plaats van de hele woning te sturen op de temperatuur in een enkele ruimte.`
    },
    {
      vraag: `Waarom kan een ketel volgens Resideo gaan pendelen bij zoneregeling in het voor- en naseizoen?`,
      opties: [
        `Omdat de ketel dan te veel gas krijgt`,
        `Omdat er dan overcapaciteit is: te weinig warmtevraag overblijft ten opzichte van het vermogen van de ketel`,
        `Omdat de thermostatische kranen dan allemaal wijd open staan`,
        `Omdat de buitenvoeler bij mild weer minder vaak wordt uitgelezen door de regeling en daardoor tijdelijk uitvalt`
      ],
      goed: 1,
      uitleg: `Bij weinig warmtevraag per zone kan de totale gevraagde warmte onder de minimale belasting van de ketel komen, waardoor hij pendelt. Modulerende aansturing via OpenTherm helpt dit te beperken.`
    },
    {
      vraag: `Wat gebeurt er hydraulisch als bijna alle thermostatische radiatorkranen in een installatie tegelijk sluiten, zonder bypass?`,
      opties: [
        `De ketel krijgt automatisch een hogere CW-klasse`,
        `De pomp kan het water niet meer voldoende rondpompen, waardoor de ketel de opgewekte warmte niet kwijt kan`,
        `Het tapwater wordt kouder`,
        `De gasvoordruk daalt tot onder de minimumwaarde`
      ],
      goed: 1,
      uitleg: `Sluiten (bijna) alle kranen, dan werkt de pomp tegen een vrijwel gesloten circuit en daalt het debiet sterk. Zonder bypass kan de ketel de warmte dan niet kwijt en kan hij pendelen of in storing vallen.`
    },
    {
      vraag: `Wat noemt Intergas als maatregel bij een vloerverwarmingszone in het installatievoorschrift van de Kombi Kompakt HRE?`,
      opties: [
        `Een tweede ketel plaatsen`,
        `Zorg voor een minimale watercirculatie en plaats eventueel een bypassventiel`,
        `De thermostatische kranen verwijderen`,
        `De stooklijn permanent op de maximale waarde zetten, ongeacht de buitentemperatuur of het type afgifte`
      ],
      goed: 1,
      uitleg: `Intergas noemt letterlijk het zorgen voor minimale watercirculatie en het eventueel plaatsen van een bypassventiel als de circulatie anders onvoldoende is.`
    },
    {
      vraag: `Een klant meldt gesuis in de leidingen en vaker pendelen nadat er slimme radiatorknoppen op alle radiatoren zijn geplaatst. Wat controleer je als eerste?`,
      opties: [
        `Meteen de pomp vervangen door een grotere`,
        `Of er een bypass aanwezig is en die goed functioneert, voordat je de pomp of het toerental aanpast`,
        `De CW-klasse van de ketel`,
        `De gasvoordruk van het toestel`
      ],
      goed: 1,
      uitleg: `Gesuis en pendelen na het plaatsen van veel extra kranen wijzen vaak op een ontbrekende of verkeerd werkende bypass, niet op een defecte pomp. Eerst de bypass controleren voorkomt onnodig onderdelen vervangen.`
    }
  ],
  kaarten: [
    { voor: `Wat kan een slimme thermostaat extra, naast modulerend regelen?`, achter: `App-bediening, zelf leren van het weekritme, uitbreiding met slimme radiatorknoppen of koppeling aan een slimme meter.` },
    { voor: `Wat is zoneregeling?`, achter: `Zones of kamers apart van elkaar verwarmen in plaats van het hele huis op een enkele kamertemperatuur.` },
    { voor: `Welke twee hydraulische risico's horen bij zoneregeling met veel kleine zones?`, achter: `Pendelen door te weinig warmtevraag (overcapaciteit) en te weinig debiet voor de pomp als bijna alle kranen sluiten.` },
    { voor: `Wat doet een automatische bypassklep?`, achter: `Ze houdt een minimale watercirculatie in stand als de kranen (bijna) allemaal dicht staan, zodat de ketel de warmte kwijt kan.` },
    { voor: `Wat noemt Intergas bij een vloerverwarmingszone met onvoldoende circulatie?`, achter: `Zorg voor minimale watercirculatie, plaats eventueel een bypassventiel.` },
    { voor: `Welke bypass-functie heeft de Vaillant ecoTEC plus VHR (voorbeeld)?`, achter: `Een instelbare parameter met standen als "zonder bypass" en "bypass", die de warmteopwekker hydraulisch kan ontkoppelen van bijvoorbeeld een buffer.` },
    { voor: `Wat is bij gesuis en pendelen na installatie van radiatorknoppen de eerste controle?`, achter: `Of er een bypass aanwezig is en die goed functioneert, voor je de pomp vervangt.` }
  ],
  bronnen: ['RGL-10', 'RGL-11', 'RGL-12', 'RGL-13', 'RGL-14', 'RGL-15', 'HYD-24', 'KET-24']
},

/* ------------------------------------------------------------------ 6.4 */
{
  id: 'm06l04',
  nr: '6.4',
  titel: 'Tapwater: combi, boiler en CW-klassen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt een combi en een voorraadvat vergelijken, de CW-klasse van een toestel uitleggen en de voorrangsschakeling herkennen.',
  videos: [
    { taal: 'nl', titel: 'Remeha Quinta Ace: aansturen indirect gestookte boiler (Remeha Servicetraining)', yt: 'fcIFCxwC_Fw', duur: '±8 min, 2022' },
    { taal: 'nl', titel: 'Zuinig warmwater: staat je cv-ketel in de comfortstand? (TV Emiel)', yt: 'PObfTadiMmQ', duur: '±3 min, 2022' },
    { taal: 'en', titel: 'Boiler types explained and what you need to know (Worcester Bosch, VK-terminologie)', yt: 'XLia8aO2kNk', duur: '±1 min, 2020' }
  ],
  tekst: `
## Combi tegenover boiler: twee manieren om tapwater te maken

Een combiketel maakt tapwater op het moment dat je de kraan opendraait: een ingebouwde platenwarmtewisselaar verwarmt het water direct, een tapsensor signaleert het openen van de kraan en de driewegklep schakelt naar de warmwaterstand. Niet elke ketel uit dezelfde serie doet dit: bij de Remeha Calenta maken de 25s en 35s alleen verwarming, tapwater loopt dan via een apart toestel, terwijl de 28c en 40c ook tapwater maken.

Het alternatief is een los voorraadvat of een indirect gestookte boiler: een ketel die alleen cv maakt, stuurt via een driewegklep (intern of extern) en een boilersensor een apart vat aan waarin een voorraad warm water wordt bewaard en op temperatuur gehouden. Zo'n boiler heeft als voordeel dat er een voorraad klaarstaat (handig bij groot, kortdurend verbruik zoals een bad), maar kost meer stilstandsverlies dan een combiketel die alleen verwarmt op het moment van tappen.

## Voorrang voor tapwater: de voorrangsschakeling

Zowel bij een combiketel als bij een boiler geldt hetzelfde principe: warm tapwater krijgt voorrang op de verwarming. Bij de Intergas Kombi Kompakt HRE (een combiketel met gescheiden cv- en warmwatercircuits) betekent dit concreet: zodra de stromingssensor een vraag naar warm tapwater van meer dan 1,5 l/min detecteert, wordt een lopende cv-vraag onderbroken. Cv en tapwater kunnen bij dit toestel niet gelijktijdig werken.

Bij een soloketel met een indirect gestookte boiler heet dit een boilervoorkeurschakeling: Remeha noemt dat de boiler voorrang krijgt bij gelijktijdige warmtevraag van boiler en cv, uitgevoerd via de driewegklep.

!!! kern Voorrang voor tapwater is geen storing
Merkt een bewoner dat de verwarming even "wacht" terwijl er een douche wordt genomen: dat is normaal gedrag, geen storing. De ketel kan op dat moment geen twee dingen tegelijk doen en kiest voor het tapwater, zodat niemand met koud water blijft staan.
!!!

## CW-klassen: wie bepaalt hoeveel warm water er komt

De Gaskeur CW-klasse (Kiwa, vastgelegd in de BRL Gaskeur CW) deelt toestellen in op basis van het tapdebiet bij 60 graden: CW1 is de laagste klasse (minstens 2,5 l/min), CW6 de hoogste (onder meer een bad van 200 liter in 10 minuten zonder gelijktijdig gebruik van een ander tappunt). Een Remeha Calenta 28c heeft bijvoorbeeld CW4, de 40c CW5.

Een hogere CW-klasse betekent niet automatisch "beter": het Waterwerkblad noemt bij de keuze van een warmtapwatertoestel ook de toestelwachttijd (maximaal 15 seconden volgens het werkblad), het drukverlies van het toestel bij de minimaal benodigde gebruiksdruk, en het jaargebruiksrendement op tapwater. Een groot toestel met een hoge CW-klasse dat zelden op vollast wordt gebruikt, is niet per se zuiniger dan een kleiner toestel dat goed bij het werkelijke verbruik past.

## Rekenvoorbeeld: gelijktijdig tappen

Volgens het Waterwerkblad reken je bij het ontwerp van een woninginstallatie met deze volumestromen warm tapwater (60 graden): een keuken of douche 5,0 l/min, een bad 6,0 l/min, een ander tappunt (bijvoorbeeld een wastafel) 2,5 l/min. Bij gelijktijdig gebruik van keuken en douche reken je met 7,5 l/min, en bij keuken, douche en bad samen met 12,5 l/min.

| Situatie | Volumestroom (60 graden) |
|---|---|
| Douche alleen | 5,0 l/min |
| Bad alleen | 6,0 l/min |
| Keuken + douche | 7,5 l/min |
| Keuken + douche + bad | 12,5 l/min |

Een toestel met CW4 (minstens 7,5 l/min bij 60 graden) is dus voldoende voor keuken plus douche tegelijk (7,5 l/min). Voor keuken, douche en bad samen (12,5 l/min) garandeert de CW-klasse op zich niet genoeg debiet: de Gaskeur CW-klasse en de Waterwerkblad-ontwerptabel gebruiken niet dezelfde debieten. Kijk bij twijfel naar het specifieke debiet warm water uit de fabrikantspecificatie van het toestel, niet alleen naar het CW-nummer.

## Praktijkgeval: eco- of comfortstand

Een combiketel kan voor de warmwaterproductie in de ecostand of de comfortstand staan. In de comfortstand houdt de ketel de warmwaterwisselaar continu op temperatuur, zodat er direct warm water komt (bijvoorbeeld handig in een kapperszaak). In de ecostand leert het toestel het gebruikspatroon en houdt de wisselaar 's nachts of bij langere afwezigheid niet warm. Een klacht als "het duurt langer voor het water warm is dan vroeger" kan dus simpelweg een verkeerd ingestelde stand zijn, in plaats van een defect: controleer eerst de instelling voor je onderdelen gaat vervangen.
`,
  checklist: [
    'Ik kan een combiketel en een boiler (voorraadvat) met elkaar vergelijken',
    'Ik weet dat warm tapwater voorrang heeft op cv, zowel bij een combi als bij een boiler',
    'Ik kan uitleggen waarop de CW-klasse van een toestel is gebaseerd',
    'Ik reken bij gelijktijdig tappen met de volumestromen uit het Waterwerkblad, niet uit mijn hoofd',
    'Ik controleer bij een klacht over trage warmwaterlevering eerst de eco/comfortstand'
  ],
  quiz: [
    {
      vraag: `Wat is het verschil tussen een combiketel en een indirect gestookte boiler voor tapwater?`,
      opties: [
        `Een combiketel maakt tapwater op het moment van tappen via een platenwarmtewisselaar, een boiler bewaart een voorraad warm water in een apart vat`,
        `Een boiler werkt alleen op elektriciteit, een combiketel alleen op gas`,
        `Een combiketel heeft volgens sommige installateurs altijd een hogere Gaskeur CW-klasse dan een indirect gestookte boiler, ongeacht het merk, model of vermogen van beide toestellen`,
        `Een boiler heeft geen driewegklep nodig`
      ],
      goed: 0,
      uitleg: `Een combiketel verwarmt tapwater direct bij het tappen via een platenwarmtewisselaar. Een boiler bewaart een voorraad warm water, aangestuurd door de ketel via een driewegklep en een boilersensor.`
    },
    {
      vraag: `Een Intergas Kombi Kompakt HRE heeft een lopende cv-vraag. Iemand draait een warmwaterkraan open en de stromingssensor meet meer dan 1,5 l/min. Wat gebeurt er?`,
      opties: [
        `Cv en tapwater lopen gelijktijdig door`,
        `De cv-vraag wordt onderbroken: warm tapwater heeft voorrang`,
        `Het tapwater wordt genegeerd tot de cv-vraag klaar is`,
        `De ketel gaat in storing`
      ],
      goed: 1,
      uitleg: `Bij deze combiketel heeft de warmwatervoorziening voorrang: een tapvraag boven de drempel onderbreekt een lopende cv-vraag. Cv en tapwater kunnen bij dit toestel niet gelijktijdig werken.`
    },
    {
      vraag: `Wat is een boilervoorkeurschakeling?`,
      opties: [
        `Een instelling die ervoor zorgt dat de boiler bij gelijktijdige warmtevraag van boiler en cv voorrang krijgt via de driewegklep`,
        `Een schakeling die de boiler altijd uitschakelt bij warmtevraag van de cv`,
        `Een schakeling die uitsluitend voorkomt bij toestellen met Gaskeur CW6 en nooit bij een lagere CW-klasse zoals CW3 of CW4, ongeacht of er een boiler is aangesloten`,
        `Een noodschakeling die de boiler bij storing loskoppelt`
      ],
      goed: 0,
      uitleg: `Remeha noemt dit letterlijk een boilervoorkeurschakeling: bij gelijktijdige vraag krijgt de boiler voorrang, aangestuurd via de driewegklep.`
    },
    {
      vraag: `Waarop is de Gaskeur CW-klasse van een toestel gebaseerd?`,
      opties: [
        `Het cv-vermogen van de ketel`,
        `Het tapdebiet dat het toestel bij 60 graden kan leveren`,
        `De gasvoordruk die het toestel nodig heeft`,
        `Het aantal jaren garantie op het toestel`
      ],
      goed: 1,
      uitleg: `De CW-klasse (Kiwa, BRL Gaskeur CW) is gebaseerd op het tapdebiet bij 60 graden: hoe hoger de klasse, hoe meer warm water het toestel per minuut kan leveren.`
    },
    {
      vraag: `Volgens het Waterwerkblad wordt bij het ontwerp gerekend met 5,0 l/min voor een douche en 6,0 l/min voor een bad (60 graden). Welk volumestroom hoort bij gelijktijdig gebruik van keuken, douche en bad samen?`,
      opties: [`7,5 l/min`, `10,0 l/min`, `12,5 l/min`, `18,5 l/min (som van alle drie)`],
      goed: 2,
      uitleg: `Het Waterwerkblad rekent voor keuken, douche en bad samen met 12,5 l/min, niet met de som van de losse waarden: bij gelijktijdig gebruik neemt het gemiddelde debiet per tappunt af.`
    },
    {
      vraag: `Een klant klaagt dat het warme water bij de keukenkraan langer op zich laat wachten dan vroeger, maar er is niets stuk. Wat controleer je als eerste?`,
      opties: [
        `Direct de platenwarmtewisselaar vervangen`,
        `Of het toestel in de eco- of de comfortstand staat, want in de ecostand houdt de ketel de wisselaar niet continu warm`,
        `De CW-klasse van het toestel verhogen`,
        `De gasvoordruk verlagen`
      ],
      goed: 1,
      uitleg: `In de ecostand houdt de ketel de warmwaterwisselaar niet continu warm, wat een langere wachttijd geeft. Dat is een instelling, geen defect: controleer dit voor je onderdelen vervangt.`
    }
  ],
  kaarten: [
    { voor: `Wat is het verschil tussen een combiketel en een boiler voor tapwater?`, achter: `Combi verwarmt direct bij het tappen (platenwarmtewisselaar), boiler bewaart een voorraad warm water in een apart vat.` },
    { voor: `Wat heeft voorrang: cv of warm tapwater?`, achter: `Warm tapwater, zowel bij een combiketel (via een stromingssensor en drempelwaarde) als bij een boiler (via een boilervoorkeurschakeling).` },
    { voor: `Waarop is de CW-klasse van een toestel gebaseerd?`, achter: `Het tapdebiet dat het toestel bij 60 graden kan leveren (Kiwa, BRL Gaskeur CW).` },
    { voor: `Welke drempelwaarde gebruikt een Intergas Kombi Kompakt HRE om een cv-vraag te onderbreken voor tapwater (voorbeeld)?`, achter: `Meer dan 1,5 l/min gemeten door de stromingssensor.` },
    { voor: `Welk volumestroom rekent het Waterwerkblad voor keuken, douche en bad samen (60 graden)?`, achter: `12,5 l/min, minder dan de som van de losse waarden.` },
    { voor: `Wat is het verschil tussen de eco- en de comfortstand van een combiketel?`, achter: `In de comfortstand houdt de ketel de warmwaterwisselaar continu warm, in de ecostand alleen op basis van het geleerde gebruikspatroon.` },
    { voor: `Waarom is een hogere CW-klasse niet automatisch "beter"?`, achter: `Toestelwachttijd, drukverlies en jaarrendement wegen ook mee: een toestel dat past bij het werkelijke verbruik is vaak zuiniger.` }
  ],
  bronnen: ['RGL-16', 'RGL-17', 'RGL-18', 'RGL-19', 'RGL-20', 'RGL-21', 'TAP-01', 'TAP-02', 'TAP-03', 'TAP-04', 'TAP-05', 'TAP-06']
},

/* ------------------------------------------------------------------ 6.5 */
{
  id: 'm06l05',
  nr: '6.5',
  titel: 'Legionella en veilig tapwater',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kent de legionellarisico\'s en de verbrandingsgevaren van tapwater en weet hoe je een installatie daarop instelt.',
  videos: [
    { taal: 'nl', titel: 'How to: een thermostaat kalibreren voor de juiste douchetemperatuur (GROHE Nederland)', yt: 'erThRYo4h2w', duur: '±1 min, 2022' },
    { taal: 'nl', titel: 'Legionellabesmetting voorkomen in uw woning (Vivare Wonen)', yt: '22tn91-4iDI', duur: '±2 min, 2023' },
    { taal: 'en', titel: 'What Temperature Should Hot Water Be? Legionella explained (Heat Geek, VK)', yt: 'oJeyc_cGIMU', duur: '±14 min, 2022' }
  ],
  tekst: `
## Waar legionella groeit, en waarom 60 graden de norm is

Legionella is een bacterie die groeit bij watertemperaturen tussen ongeveer 25 en 50 graden; stilstaand water, een lange verblijftijd in de leiding en biofilm (een laagje aanslag waarin de bacterie voedsel en bescherming vindt) vergroten het risico. Daarom stelt het Waterwerkblad eisen die stilstand en de groeizone vermijden: elke leiding moet minstens eenmaal per week ververst of gebruikt worden, een leidingdeel dat dat niet is moet een terugstroombeveiliging krijgen, en een dode leiding of een dood eind mag niet voorkomen.

De temperatuureisen volgen uit diezelfde logica: hoe hoger de temperatuur boven de groeizone, hoe kleiner het risico. Bij een woninginstallatie zonder circulatie moet de temperatuur aan het tappunt bij normaal gebruik minstens 55 graden zijn; met circulatie, of bij een collectief leidingnet (bijvoorbeeld een appartementengebouw met een gezamenlijke ketel), geldt een strenger minimum van 60 graden, en bij circulatie ook in de retourleiding.

| Situatie | Minimale temperatuur aan het tappunt |
|---|---|
| Woning zonder circulatie | 55 graden |
| Woning met circulatie | 60 graden |
| Collectief leidingnet (zonder of met circulatie) | 60 graden |

Haalt een warmwatervoorraadtoestel (boiler) niet continu overal de vereiste temperatuur, dan moet het wekelijks thermisch worden gedesinfecteerd: kortstondig op een hogere temperatuur brengen om eventuele bacterien te doden. Incidentele pieken in het verbruik mogen de temperatuur tijdelijk laten zakken, mits die binnen 24 uur weer op de vereiste waarde is. Structureel lager instellen dan vereist is niet toegestaan, ook niet in combinatie met periodieke desinfectie.

## Wat wel en niet onder jouw verantwoordelijkheid valt

Niet elk gebouw valt onder dezelfde regels. Het Drinkwaterbesluit wijst "prioritaire instellingen" aan waarvoor een zwaarder regime geldt: onder meer ziekenhuizen en bepaalde zorginstellingen, hotels en andere logiesverblijven (met uitzondering van recreatiewoningen), asielzoekerscentra, gebouwen met een celfunctie, zwembaden en jachthavens. Daar is een risicoanalyse en een beheersplan verplicht, opgesteld door een daarvoor gecertificeerd bedrijf, en werkt ISSO-publicatie 55.1 de eisen verder uit.

!!! kern Een gewone woning is geen prioritaire instelling
Een gewone eengezinswoning of appartement staat niet op de lijst van prioritaire instellingen. Dat betekent niet dat legionella daar geen risico is: de basisregels uit NEN 1006 en de Waterwerkbladen (temperatuur, wekelijkse desinfectie als nodig, geen dode leidingen) gelden gewoon. Het betekent wel dat de zware verplichting tot een formele risicoanalyse en een beheersplan daar niet geldt. Weet dit onderscheid, zodat je een klant niet onnodig bang maakt voor iets dat wettelijk niet op hem van toepassing is, en niet onterecht denkt dat "gewoon een woning" betekent dat temperatuur er niet toe doet.
!!!

## Verbrandingsgevaar: dezelfde temperatuur, een ander risico

Hier ontstaat een spanningsveld: dezelfde hoge temperatuur die legionella tegengaat, kan verbranding veroorzaken. Het Waterwerkblad noemt expliciet dat het instellen van de warmwatertemperatuur op 60 graden of hoger verbrandingsgevaar kan geven bij risicogroepen: kinderen, ouderen, psychiatrische patienten en mensen met een lichamelijke of geestelijke beperking. Een kindveiligheidsorganisatie noemt als indicatie dat water van 55 graden bij een kind al binnen enkele tientallen seconden ernstige brandwonden kan veroorzaken; deze cijfers zijn niet met een tweede, onafhankelijke bron gecontroleerd, maar de kern (hoge temperatuur is voor kwetsbare mensen gevaarlijk) staat vast in het Waterwerkblad zelf.

!!! gevaar Heet tapwater kan direct verbranden
Water van 60 graden of hoger is nodig tegen legionella, maar kan bij aanraking al na korte tijd ernstige brandwonden veroorzaken, vooral bij kinderen en ouderen. Stel een toestel nooit hoger in dan nodig, en plaats bij risicogroepen altijd een thermostatische mengkraan met temperatuurbegrenzing tussen het toestel en het tappunt.
!!!

De oplossing is niet de temperatuur van het toestel zelf verlagen (dat vergroot het legionellarisico), maar een thermostatische mengkraan met temperatuurbegrenzing tussen het warmwatertoestel en het tappunt plaatsen. Zo blijft de temperatuur in de leiding en het voorraadvat hoog genoeg tegen legionella, terwijl het water dat uit de kraan komt begrensd is op een veilige temperatuur. Wordt zo'n mengkraan toegepast bij een niet-modulerend doorstroomtoestel, dan moet die volgens het Waterwerkblad voldoen aan de eisen van Kiwa-beoordelingsrichtlijn BRL-K610. De temperatuurbegrenzing van een mengkraan vraagt jaarlijkse controle: een kraan die vastloopt of verkeerd is afgesteld, beschermt niet meer.

## Rekenvoorbeeld: waarom "lager instellen" geen oplossing is

Een boiler staat op 65 graden. Een bewoner met jonge kinderen vraagt de temperatuur te verlagen naar 45 graden uit angst voor brandwonden. Wat gebeurt er dan met het legionellarisico? Bij 45 graden zit de boiler midden in de groeizone van 25 tot 50 graden: het risico op legionellagroei neemt juist toe in plaats van af. De juiste oplossing is de boiler op minstens 60 graden te laten staan (of, bij een woning zonder circulatie, minstens 55 graden) en een thermostatische mengkraan te plaatsen die het water vlak voor het tappunt afkoelt tot een veilige temperatuur, bijvoorbeeld rond 38 graden voor een gezin met kinderen.

## Praktijkgeval: renovatie van een badkamer met kinderen in huis

Bij een renovatie vraagt een klant met twee jonge kinderen om "gewoon veilig warm water". Je legt uit dat de boiler op minstens 60 graden blijft staan (tegen legionella), en dat je een thermostatische mengkraan met temperatuurbegrenzing plaatst bij de badkraan en de douche. Je wijst erop dat die begrenzing jaarlijks gecontroleerd moet worden, en dat dit geen vervanging is van gewoon toezicht: ook met een mengkraan test je bij een baby de temperatuur van het badwater altijd eerst met je elleboog of een badthermometer, zoals ook kindveiligheidsorganisaties adviseren.
`,
  checklist: [
    'Ik weet in welk temperatuurbereik legionella groeit en waarom stilstaand water een risico is',
    'Ik ken de minimale temperaturen aan het tappunt voor een woning zonder en met circulatie, en voor een collectief net',
    'Ik weet dat een gewone woning geen prioritaire instelling is, maar dat de basisregels wel gelden',
    'Ik kan uitleggen waarom lager instellen tegen verbranding het legionellarisico juist vergroot',
    'Ik pas bij verbrandingsgevaar een thermostatische mengkraan toe in plaats van de toesteltemperatuur te verlagen',
    'Ik weet dat de temperatuurbegrenzing van een mengkraan jaarlijkse controle nodig heeft'
  ],
  quiz: [
    {
      vraag: `In welk temperatuurbereik groeit legionella het best?`,
      opties: [`0 tot 20 graden`, `25 tot 50 graden`, `55 tot 70 graden`, `70 tot 90 graden`],
      goed: 1,
      uitleg: `Legionella groeit tussen ongeveer 25 en 50 graden. Daarom is de norm juist om ver boven die zone te blijven: minstens 55 of 60 graden aan het tappunt, afhankelijk van de installatie.`
    },
    {
      vraag: `Welke minimale temperatuur geldt aan het tappunt van een woninginstallatie zonder circulatie, bij gebruik conform de ontwerpcondities?`,
      opties: [`45 graden`, `50 graden`, `55 graden`, `60 graden`],
      goed: 2,
      uitleg: `Voor een woninginstallatie zonder circulatie geldt een minimum van 55 graden. Met circulatie, of bij een collectief leidingnet, geldt het strengere minimum van 60 graden.`
    },
    {
      vraag: `Waarom is een gewone woning geen "prioritaire instelling" volgens het Drinkwaterbesluit?`,
      opties: [
        `Omdat er in een woning geen legionellarisico bestaat`,
        `Omdat de zwaardere verplichting tot risicoanalyse en beheersplan is voorbehouden aan specifiek aangewezen locaties zoals ziekenhuizen, hotels en zwembaden`,
        `Omdat een woning altijd een eigen boiler heeft`,
        `Omdat de temperatuur in een woning wettelijk vrij te kiezen is`
      ],
      goed: 1,
      uitleg: `Het Drinkwaterbesluit wijst specifieke locaties aan (zorg, logies, zwembaden en dergelijke) waar een formele risicoanalyse en beheersplan verplicht zijn. Een gewone woning valt daar niet onder, maar de basisregels uit NEN 1006 en de Waterwerkbladen gelden er wel.`
    },
    {
      vraag: `Een bewoner met jonge kinderen wil de boiler van 65 naar 45 graden laten verlagen uit angst voor brandwonden. Wat is het juiste advies?`,
      opties: [
        `Prima idee, lager is altijd veiliger`,
        `Niet doen: bij 45 graden zit de boiler midden in de groeizone van legionella; beter is de boiler op minstens 60 graden te laten en een thermostatische mengkraan met temperatuurbegrenzing te plaatsen`,
        `Verlagen naar 45 graden mag, zolang er wekelijks thermisch wordt gedesinfecteerd op 45 graden`,
        `Verlagen naar 45 graden mag alleen bij een woning met circulatie`
      ],
      goed: 1,
      uitleg: `45 graden ligt midden in de groeizone (25 tot 50 graden) en vergroot het legionellarisico. De juiste oplossing is de toesteltemperatuur hoog houden en het verbrandingsgevaar apart oplossen met een mengkraan.`
    },
    {
      vraag: `Wat moet een thermostatische mengkraan bij een niet-modulerend doorstroomtoestel volgens het Waterwerkblad hebben?`,
      opties: [
        `Een CW6-classificatie`,
        `Een kwaliteitsverklaring volgens Kiwa-beoordelingsrichtlijn BRL-K610`,
        `Een OpenTherm-aansluiting`,
        `Een eigen driewegklep`
      ],
      goed: 1,
      uitleg: `Het Waterwerkblad eist dat zo'n mengkraan voldoet aan BRL-K610. CW-klasse, OpenTherm en een driewegklep hebben hier niets mee te maken.`
    },
    {
      vraag: `Hoe vaak moet de temperatuurbegrenzing van een thermostatische mengkraan bij risicogroepen worden gecontroleerd?`,
      opties: [`Nooit, eenmaal instellen is genoeg`, `Wekelijks`, `Jaarlijks`, `Alleen bij een storing`],
      goed: 2,
      uitleg: `Het Waterwerkblad noemt expliciet een jaarlijkse controle van de temperatuurbegrenzing: een vastgelopen of verkeerd afgestelde mengkraan beschermt niet meer, ook al lijkt hij intact.`
    }
  ],
  kaarten: [
    { voor: `In welk temperatuurbereik groeit legionella?`, achter: `Tussen ongeveer 25 en 50 graden. Stilstaand water en biofilm vergroten het risico.` },
    { voor: `Welke minimale tappunttemperatuur geldt bij een woning zonder circulatie?`, achter: `55 graden. Met circulatie of bij een collectief net: 60 graden.` },
    { voor: `Wat moet er gebeuren als een warmwatervoorraadtoestel (boiler) niet continu overal de vereiste temperatuur haalt?`, achter: `Wekelijks thermisch desinfecteren (kortstondig op hogere temperatuur brengen).` },
    { voor: `Wat is een prioritaire instelling volgens het Drinkwaterbesluit?`, achter: `Onder meer ziekenhuizen, zorginstellingen, hotels, zwembaden en jachthavens: daar zijn een risicoanalyse en beheersplan verplicht. Een gewone woning valt hier niet onder.` },
    { voor: `Waarom mag je de boiler niet zomaar verlagen tegen verbrandingsgevaar?`, achter: `Onder 50 graden vergroot je het legionellarisico. Los verbranding op met een thermostatische mengkraan, niet met een lagere toesteltemperatuur.` },
    { voor: `Aan welke eis moet een thermostatische mengkraan bij een niet-modulerend toestel voldoen?`, achter: `BRL-K610 (Kiwa-beoordelingsrichtlijn).` },
    { voor: `Hoe vaak moet de temperatuurbegrenzing van een mengkraan gecontroleerd worden?`, achter: `Jaarlijks.` },
    { voor: `Welke risicogroepen noemt het Waterwerkblad voor verbrandingsgevaar bij 60 graden of hoger?`, achter: `Kinderen, ouderen, psychiatrische patienten en mensen met een lichamelijke of geestelijke beperking.` }
  ],
  bronnen: ['RGL-22', 'RGL-23', 'RGL-24', 'RGL-25', 'RGL-26', 'RGL-27', 'RGL-28', 'RGL-29', 'RGL-30', 'RGL-31', 'RGL-32', 'TAP-07', 'TAP-08', 'TAP-09', 'TAP-10']
}

  ]
});
