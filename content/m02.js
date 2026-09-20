/* ==========================================================================
   m02.js - Module 2: Warmte, energie en vermogen
   Lessen 2.1 t/m 2.5 zijn volledig geschreven op basis van
   project/docs/feiten/02-gas-verbranding-co.md (GAS, VER, REN),
   03-ketel-hydrauliek-regeling.md (KET, HYD, REG, TAP), 04 (LUC-06) en 05 (INS-27).
   Rekenvoorbeelden gebruiken de aannames uit het register: c water = 4,19 kJ/(kg K) = 1,163 Wh/(kg K),
   1 liter = 1 kg, Hs = 9,769 kWh/m3(n) en Hi = 8,792 kWh/m3(n). Fabrikantwaarden zijn voorbeelden per model.
   ========================================================================== */

CURSUS.addModule({
  id: 'm02',
  nr: 2,
  deel: 1,
  titel: 'Warmte, energie en vermogen',
  ondertitel: 'De natuurkunde onder elke cv-installatie.',
  niveau: 'Fundamenteel',
  studietijd: 6,
  intro: 'De natuurkunde achter elke cv-installatie: warmte, vermogen, energie en rendement. Zonder dit fundament blijft storingzoeken gokken en kloppen je gasverbruiksberekeningen niet.',
  inleiding: [
    `Vrijwel alles wat een cv-ketel doet, is warmte verplaatsen: van het gas naar het rookgas, van het rookgas naar het water, van het water naar de kamer. Wie de natuurkunde daarachter begrijpt, hoeft geen storingen te raden. Je rekent na wat er zou moeten gebeuren en vergelijkt dat met wat je meet.`,
    `Deze module geeft je het rekengereedschap: Q = m × c × ΔT voor warmte en debiet, kW en kWh voor vermogen en energie, m³ gas voor het verbruik, U × A × ΔT voor warmteverlies en Hs en Hi voor het rendement. Alle rekenvoorbeelden zijn met eenheden uitgewerkt en steunen op gecontroleerde bronnen of op aannames die erbij staan. Waarden uit fabrikanthandleidingen zijn voorbeelden voor dat model en verschillen per toestel.`
  ],
  leerdoelen: [
    'Warmte, vermogen en energie uit elkaar houden en met elkaar in verband brengen',
    'Uit vermogen en bedrijfsduur het gasverbruik en de energiekosten berekenen',
    'De drie vormen van warmteoverdracht herkennen in een installatie',
    'Het warmteverlies van een woning in grote lijnen inschatten',
    'Rendement en verliezen van een ketel beoordelen'
  ],
  examen: [
    {
      vraag: `Een boiler van 150 liter wordt in 30 minuten van 20 naar 60 °C verwarmd. Welk vermogen is daarvoor gemiddeld ongeveer nodig, en past dat binnen het modulatiebereik van een Remeha Calenta 25s (5,2 tot 25,0 kW, Hi)?`,
      opties: [`Ongeveer 28 kW, dat ligt boven het maximum van 25,0 kW`, `Ongeveer 3,5 kW, dat ligt onder het minimum van 5,2 kW`, `Ongeveer 14,0 kW, dat past binnen het bereik van 5,2 tot 25,0 kW`, `Ongeveer 7,0 kW, en dat is de energie zonder rekening te houden met de tijd`],
      goed: 2,
      uitleg: `ΔT = 60 - 20 = 40 K, dus Q = 150 × 1,163 × 40 = 6978 Wh, ongeveer 6,98 kWh. Vermogen = energie / tijd = 6,98 / 0,5 = ongeveer 14,0 kW, en dat past binnen het modulatiebereik van de Calenta 25s. 28 kW krijg je als je met een kwartier in plaats van een half uur rekent. 3,5 kW ontstaat als je de energie met de tijd vermenigvuldigt in plaats van deelt. 7,0 kW is de energie zelf: zonder te delen door de tijd is dat geen vermogen.`
    },
    {
      vraag: `Een ketel levert 18 kW aan het cv-water bij ΔT = 15 K, dus een debiet van ongeveer 1032 l/h. Een monteur verhoogt de pompstand tot het debiet verdubbelt naar ongeveer 2064 l/h, bij gelijk vermogen. Wat gebeurt er met ΔT en met de drukval in het leidingnet (turbulente stroming)?`,
      opties: [`ΔT verdubbelt naar 30 K en de drukval wordt ongeveer tweemaal zo groot`, `ΔT blijft 15 K en de drukval wordt ongeveer achtmaal zo groot`, `ΔT halveert naar 7,5 K, maar de drukval blijft ongeveer gelijk`, `ΔT halveert naar 7,5 K en de drukval wordt ongeveer viermaal zo groot`],
      goed: 3,
      uitleg: `Bij gelijk vermogen is het debiet omgekeerd evenredig met ΔT: verdubbel je het debiet, dan halveert ΔT naar ongeveer 7,5 K. Bij turbulente stroming neemt de drukval ongeveer kwadratisch toe met het debiet, dus een verdubbeling geeft ongeveer viermaal zoveel drukval. ΔT blijft niet gelijk en de drukval loopt niet lineair op: de pomp moet dan veel harder werken voor een klein voordeel in afgifte.`
    },
    {
      vraag: `Een woning heeft op een koude dag 10 uur lang gemiddeld 4,5 kW warmte nodig. De ketel heeft in dat bedrijfspunt een rendement van 89,3% op de bovenwaarde. Hoeveel gas gaat er door de meter (neem m³(n) aan)?`,
      opties: [`Ongeveer 0,52 m³(n)`, `Ongeveer 4,6 m³(n)`, `Ongeveer 5,7 m³(n)`, `Ongeveer 5,2 m³(n)`],
      goed: 3,
      uitleg: `De nuttige warmte is 4,5 kW × 10 h = 45 kWh. Gas: 45 / (0,893 × 9,769) = 5,2 m³(n), want een rendement op Hs hoort bij 9,769 kWh/m³. 0,52 m³ is het verbruik per uur in plaats van over 10 uur. 4,6 m³ krijg je als je het rendement vergeet (45 / 9,769). 5,7 m³ ontstaat als je het Hs-rendement met de Hi-waarde combineert (45 / (0,893 × 8,792)).`
    },
    {
      vraag: `Een ketel levert 17,8 kW nuttig vermogen met een rendement van 99,1% op de onderwaarde. Welk ingangsvermogen (op Hi) neemt hij dan aan gas op?`,
      opties: [`Ongeveer 18,0 kW`, `Ongeveer 17,6 kW`, `Ongeveer 19,9 kW`, `Ongeveer 2,04 kW`],
      goed: 0,
      uitleg: `Rendement = nuttig vermogen / ingangsvermogen, dus het ingangsvermogen is 17,8 / 0,991 = 18,0 kW (Hi). 17,6 kW krijg je als je vermenigvuldigt in plaats van deelt. 19,9 kW is het ingangsvermogen op Hs (17,8 / 0,893): een ander getal voor dezelfde ketel. 2,04 is het gasverbruik in m³(n)/h en dus geen vermogen.`
    },
    {
      vraag: `Op een jaarafrekening staat 1500 m³ gas (neem aan: m³(n)). De ketel had gemiddeld een rendement van 92% op de bovenwaarde. Hoeveel nuttige warmte is er ongeveer geleverd?`,
      opties: [`Ongeveer 12.130 kWh`, `Ongeveer 13.480 kWh`, `Ongeveer 14.650 kWh`, `Ongeveer 15.930 kWh`],
      goed: 1,
      uitleg: `Energie in het gas op Hs: 1500 × 9,769 = 14.654 kWh. Nuttig: 14.654 × 0,92 = 13.480 kWh. 14.650 kWh is de energie in het gas, zonder het rendement. 15.930 kWh krijg je door te delen door 0,92 in plaats van te vermenigvuldigen. 12.130 kWh combineert de Hi-waarde (8,792) met een Hs-rendement: dat mag niet, want de basis moet gelijk zijn.`
    },
    {
      vraag: `Een radiator is gedimensioneerd op 1400 W bij regime 70/50 °C in een kamer van 20 °C (dus ΔT = 40 K, exponent n = 1,3). Een monteur verlaagt de aanvoer naar 55 °C (retour 45 °C, dus ΔT = 30 K) om de retour onder het dauwpunt te krijgen. De woning vraagt op dat moment nog 1000 W. Levert de radiator dat nog?`,
      opties: [`Ja, want het vermogen bij ΔT = 30 K is ongeveer 1050 W`, `Nee, want het vermogen bij ΔT = 30 K is nog maar ongeveer 963 W`, `Nee, want het vermogen bij ΔT = 30 K is nog maar ongeveer 788 W`, `Ja, een lagere aanvoertemperatuur geeft juist meer vermogen aan de radiator`],
      goed: 1,
      uitleg: `Q = 1400 × (30 / 40)^1,3 = ongeveer 963 W, dus minder dan de gevraagde 1000 W: de radiator schiet net tekort. 1050 W is de evenredige berekening (30/40 × 1400) zonder de exponent, die het vermogen sneller laat dalen dan het temperatuurverschil. 788 W ontstaat als je in het kwadraat rekent ((30/40)^2) in plaats van tot de macht 1,3. Een lagere aanvoertemperatuur verlaagt het vermogen van de radiator juist, al kan het het rendement van de ketel verbeteren.`
    },
    {
      vraag: `Een installatie met ruim bemeten radiatoren draait op 75/65 °C en houdt de woning warm. Een monteur zet de aanvoer op 55 °C (retour ongeveer 45 °C) en de woning blijft warm. Wat is het gevolg voor het rendement van de HR-ketel?`,
      opties: [`Het rendement daalt, want bij een lagere aanvoer levert de brander minder vermogen`, `Het rendement stijgt: de retour komt onder het dauwpunt en er condenseert waterdamp`, `Het rendement stijgt: het metaal van de warmtewisselaar geleidt beter bij lage temperatuur`, `Er verandert niets: het rendement hangt alleen af van de gasafstelling en de luchtovermaat`],
      goed: 1,
      uitleg: `Bij 65 °C retour is er nauwelijks condensatie, bij 45 °C wel: de condensatiewarmte (ongeveer 10% van Hs) komt dan bij het water terecht en het rendement op Hi kan boven 100% uitkomen. Minder branderbelasting is niet de reden: het gaat om de retourtemperatuur ten opzichte van het dauwpunt. De wisselaar geleidt niet beter en de gasafstelling is niet de enige factor.`
    },
    {
      vraag: `Een gevel bestaat uit 40 m² muur (U = 0,4 W/(m² K)) en 6 m² glas (U = 1,1 W/(m² K)). Binnen is het 20 °C, buiten -10 °C. Hoe groot is het transmissieverlies van deze gevel?`,
      opties: [`Ongeveer 23 W`, `Ongeveer 480 W`, `Ongeveer 680 W`, `Ongeveer 1035 W`],
      goed: 2,
      uitleg: `ΔT = 20 - (-10) = 30 K. Muur: 40 × 0,4 × 30 = 480 W. Glas: 6 × 1,1 × 30 = 198 W. Samen 678 W. 23 W krijg je als je het temperatuurverschil vergeet. 480 W is alleen de muur: het glas telt ook mee. 1035 W ontstaat als je de U-waarden middelt (0,75) en met 46 m² rekent: het glas verliest per m² veel meer dan de muur, dus gemiddelden geven een verkeerd beeld.`
    },
    {
      vraag: `Een woning verliest 250 W per K temperatuurverschil. De ketel heeft een minimale belasting van 5,2 kW. Bij welke buitentemperatuur (binnen 20 °C) is de warmtevraag precies gelijk aan dat minimum?`,
      opties: [`Ongeveer -0,8 °C`, `Ongeveer -10 °C`, `Ongeveer 20,8 °C`, `Ongeveer 10 °C`],
      goed: 0,
      uitleg: `De warmtevraag is 250 × ΔT. Gelijk aan 5200 W bij ΔT = 5200 / 250 = 20,8 K, dus buiten 20 - 20,8 = -0,8 °C. Kouder dan dat ligt de vraag boven het minimum, warmer dan dat gaat de ketel takten. -10 °C is de ontwerpdag, niet dit omslagpunt. 20,8 is een temperatuurverschil in K en geen buitentemperatuur.`
    },
    {
      vraag: `Een fabrikant geeft voor een HR-ketel 98% rendement op de bovenwaarde bij deellast. Wat is dat ongeveer op de onderwaarde, en kan dat?`,
      opties: [`Ongeveer 88%: je vermenigvuldigt met 0,902 en zo'n waarde is normaal voor een HR-ketel`, `Ongeveer 98%, want de basis (Hs of Hi) maakt voor de ketel zelf geen verschil uit`, `Ongeveer 109%, maar dat kan niet: een rendement boven 100% zou energie uit het niets maken`, `Ongeveer 109%, en dat kan: de condensatiewarmte wordt benut, maar telt niet mee in Hi`],
      goed: 3,
      uitleg: `Rendement op Hi = rendement op Hs / 0,902 = 98 / 0,902 = ongeveer 109%. Dat kan bij een condenserende ketel: de condensatiewarmte (circa 11% van Hi) zit niet in de Hi-noemer maar wordt wel benut. 88% krijg je door te vermenigvuldigen in plaats van te delen. 98% negeert het verschil in referentie. Op Hs kan het rendement niet boven 100% komen, op Hi tot ongeveer 110,9%.`
    },
    {
      vraag: `Een Remeha Avanta 24c haalt bij laaglast en 60 °C retour 84,9% op de bovenwaarde en bij deellast en 30 °C retour 97,9%. Wat is de belangrijkste verklaring voor die 13 procentpunt?`,
      opties: [`Bij 30 °C retour condenseert de waterdamp en wordt de condensatiewarmte benut, bij 60 °C retour niet`, `De pomp verbruikt bij een hoge retourtemperatuur meer stroom en dat drukt het gasrendement`, `Bij 60 °C retour heeft het gas een lagere calorische waarde, waardoor er minder warmte vrijkomt`, `Bij 30 °C retour brandt de brander met meer luchtovermaat en verbrandt hij het gas beter`],
      goed: 0,
      uitleg: `De retourtemperatuur bepaalt of het rookgas onder het dauwpunt (54 tot 56 °C) komt. Bij 60 °C blijft de waterdamp damp en gaat de condensatiewarmte, tot ongeveer 10% van Hs, met het rookgas mee. Bij 30 °C wordt die warmte benut. De calorische waarde van het gas hangt niet van de retour af, en pompverbruik telt niet mee in het rendement op gas.`
    },
    {
      vraag: `Welke situatie geeft bij een HR-ketel de meeste niet-benutte condensatiewarmte?`,
      opties: [`Een lage retourtemperatuur (bijvoorbeeld 35 °C) door ruime radiatoren`, `Een lage aanvoertemperatuur (bijvoorbeeld 45 °C) bij goede isolatie`, `Een hoge retourtemperatuur boven het dauwpunt, bijvoorbeeld 65 °C`, `Een grote ΔT van 40 K tussen aanvoer en retour, bijvoorbeeld 80/40 °C`],
      goed: 2,
      uitleg: `Condensatie begint pas als het rookgas onder het dauwpunt (circa 54 tot 56 °C) komt, en het rookgas kan niet kouder worden dan de retour. Bij 65 °C retour gaat de condensatiewarmte dus verloren. In de andere situaties komt de retour onder het dauwpunt: ruim bemeten radiatoren en een lage aanvoer geven een lage retour, en bij 80/40 °C is de retour 40 °C. Kijk dus altijd naar de retourtemperatuur zelf.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 2.1 */
{
  id: 'm02l01',
  nr: '2.1',
  titel: 'Temperatuur, warmte en soortelijke warmte',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt het verschil tussen temperatuur en warmte uitleggen en met Q = m × c × ΔT de warmte of het debiet van water berekenen.',
  videos: [
    { taal: 'nl', titel: 'Soortelijke warmte (Meneer Wietsma Natuurkunde)', yt: 'Jnr_Yi2jYZ4', duur: '±7 min, 2016' },
    { taal: 'nl', titel: 'Soortelijke warmte: Q = c x m x ΔT (WATT!? Natuurkunde)', yt: 'C40Po-3d70M', duur: '±4 min, 2016' },
    { taal: 'en', titel: 'Specific heat capacity (FuseSchool)', yt: 'TqJFIBODrjM', duur: '±3 min, 2018' }
  ],
  tekst: `
## Temperatuur en warmte zijn twee verschillende dingen

Een thermometer meet temperatuur: hoe warm iets is. Warmte is energie: de hoeveelheid die in een stof zit of van de ene plek naar de andere stroomt. Een bad van 150 liter op 40 °C bevat veel meer warmte dan een waterkoker met 1 liter kokend water, terwijl de waterkoker een veel hogere temperatuur heeft. Wat telt, is hoeveel stof je hebt en hoeveel graden je die hebt verwarmd.

In een cv-installatie komen ze steeds samen voor. De ketel levert warmte (in kWh of MJ), het cv-water heeft een temperatuur (in °C) en tussen aanvoer en retour zit een temperatuurverschil (in K). Wie ze door elkaar haalt, rekent fout.

| Grootheid | Symbool | Eenheid | Voorbeeld |
|---|---|---|---|
| Temperatuur | T | °C of K | aanvoer 70 °C |
| Temperatuurverschil | ΔT | K | 70 °C min 50 °C is 20 K |
| Warmte (energie) | Q | J, kJ, MJ of kWh | 8,1 kWh |
| Massa | m | kg | 100 liter water is ongeveer 100 kg |
| Soortelijke warmte | c | kJ/(kg K) of Wh/(kg K) | water: 4,19 kJ/(kg K) |
| Vermogen | P | W of kW | 20 kW |

Een verschil van 1 K is even groot als een verschil van 1 °C. Alleen het nulpunt van de schaal ligt anders: 0 °C is 273,15 K.

## Hoeveel warmte kost het om water op te warmen?

De soortelijke warmte c is de energie die je nodig hebt om 1 kg van een stof 1 K warmer te maken. Voor water rekenen we met c = 4,19 kJ/(kg K), dat is 1,163 Wh/(kg K), en met 1 liter = 1 kg. Dat zijn aannames: bij 70 tot 80 °C zit je er ongeveer 2 tot 3% naast, omdat warm water iets lichter is dan koud. Voor storingzoeken en advies is dat ruim goed genoeg.

!!! kern Q = m × c × ΔT
De warmte om water op te warmen is massa × soortelijke warmte × temperatuurstijging. Reken je met 1,163 Wh/(kg K), dan komt er meteen Wh uit: 1 liter water 1 K opwarmen kost ongeveer 1,16 Wh.
!!!

### Rekenvoorbeeld: een installatie van 100 liter opwarmen

Een cv-installatie met 100 liter water gaat van 10 naar 80 °C.

- Massa: 100 liter is ongeveer 100 kg. Temperatuurstijging: 80 - 10 = 70 K.
- Q = 100 kg × 1,163 Wh/(kg K) × 70 K = 8141 Wh, dus ongeveer 8,1 kWh.
- Controle in kJ: 100 × 4,19 × 70 = 29.330 kJ = 29,3 MJ, en 29,3 MJ / 3,6 MJ per kWh = 8,1 kWh.

Volgens Flamco zet water bij zo'n opwarming ongeveer 3% uit: circa 3 liter extra volume, dat het expansievat moet opvangen (daarover gaat les 3.3).

## Van warmte naar vermogen: het debiet van het cv-water

Vermogen is warmte per tijd. Deel je Q = m × c × ΔT door de tijd, dan krijg je de formule waarmee je in de praktijk het meest rekent: hoeveel water er per uur langs moet komen om een bepaald vermogen te transporteren.

!!! kern Debiet uit vermogen en ΔT
Debiet (l/h) = vermogen (W) / (1,163 × ΔT in K). Bij gelijk vermogen is het debiet omgekeerd evenredig met ΔT: een grotere spreiding tussen aanvoer en retour betekent minder water.
!!!

Voorbeeld: 20 kW bij ΔT = 20 K geeft 20.000 / (1,163 × 20) = 860 l/h. Bij ΔT = 30 K is het ongeveer 570 l/h. Welke ΔT bij jouw toestel hoort, zoek je in de handleiding op. Voorbeelden, per model verschillend: Remeha noemt bij de Calenta 20 K voor het restopvoerhoogte-diagram, en Intergas vraagt bij het inregelen van de Kombi Kompakt HRE een temperatuurverschil tussen aanvoer en retour van ongeveer 20 graden. Een lage retourtemperatuur is gunstig voor het rendement, want dan gaat de ketel condenseren (les 2.5).

## Tapwater: waarom een combiketel veel vermogen nodig heeft

Voor tapwater geldt dezelfde rekensom. De Gaskeur CW-eisen gaan uit van koud water van 10 °C en warm water van 60 °C, dus 50 K. Een toestel van klasse CW4 moet minstens 7,5 l/min van 60 °C leveren.

- 7,5 l/min is 450 l/h.
- P = 450 l/h × 1,163 Wh/(l K) × 50 K = 26.168 W, dus ongeveer 26 kW in het water.

Voor de douche is het water minder heet: 12,5 l/min van 40 °C komt volgens dezelfde tabel overeen met die 7,5 l/min van 60 °C. Dat klopt: 12,5 × 30 K = 375 en 7,5 × 50 K = 375. Er gaat evenveel warmte in het water, want het bijgemengde koude water hoeft niet verwarmd te worden.

## Warmte die je niet aan de temperatuur ziet

Niet alle warmte zie je terug op een thermometer. Als waterdamp in het rookgas condenseert, komt er warmte vrij zonder dat de temperatuur verandert: latente warmte. Een HR-ketel benut die. Remeha noemt voor de Calenta ongeveer 55 °C als grens waaronder de waterdamp condenseert. De condensatiewarmte gaat dan naar het cv-water en is ongeveer 10% van de verbrandingswarmte (les 2.5).
`,
  checklist: [
    'Ik kan uitleggen waarom temperatuur en warmte twee verschillende grootheden zijn',
    'Ik reken met Q = m × c × ΔT en houd de eenheden (kJ, kWh, K) uit elkaar',
    'Ik kan uit vermogen en ΔT het debiet van het cv-water berekenen',
    'Ik weet dat c = 4,19 kJ/(kg K) en 1 liter = 1 kg aannames zijn met een kleine afwijking bij warm water'
  ],
  quiz: [
    {
      vraag: `Een boiler van 200 liter wordt van 15 naar 60 °C verwarmd (reken met 1,163 Wh/(kg K) en 1 liter = 1 kg). Hoeveel energie is daarvoor nodig?`,
      opties: [`Ongeveer 9,0 kWh`, `Ongeveer 10,5 kWh`, `Ongeveer 14,0 kWh`, `Ongeveer 37,7 kWh`],
      goed: 1,
      uitleg: `De temperatuurstijging is 60 - 15 = 45 K, dus Q = 200 × 1,163 × 45 = 10.467 Wh, ongeveer 10,5 kWh. 14,0 kWh volgt uit rekenen met 60 K: de eindtemperatuur in plaats van het verschil. 9,0 kWh krijg je als je de soortelijke warmte vergeet (200 × 45). 37,7 komt uit 200 × 4,19 × 45 = 37.710 kJ, en dat zijn kilojoules: delen door 3600 geeft weer 10,5 kWh.`
    },
    {
      vraag: `Een bad van 150 liter wordt van 10 naar 40 °C verwarmd. Een waterkoker verwarmt 1 liter van 10 naar 100 °C. Welke van de twee neemt de meeste warmte op?`,
      opties: [`De waterkoker, want het water wordt 90 K warmer in plaats van 30 K`, `Ze nemen evenveel warmte op, want in beide gevallen is het gewoon water`, `Het bad, want 150 kg × 30 K is 50 keer zoveel als 1 kg × 90 K`, `Dat is niet te zeggen zonder de soortelijke warmte van het water te weten`],
      goed: 2,
      uitleg: `Warmte is m × c × ΔT en c is voor beide gelijk. Bad: 150 kg × 30 K = 4500 kg K. Waterkoker: 1 kg × 90 K = 90 kg K. Het bad neemt dus 50 keer zoveel warmte op. De hoogste temperatuur zegt niets over de hoeveelheid warmte: dat is de denkfout die temperatuur en warmte door elkaar haalt. De soortelijke warmte is voor beide gelijk, dus de vergelijking is wel te maken.`
    },
    {
      vraag: `Een ketel levert 15 kW aan het cv-water. De aanvoer is 65 °C en de retour 40 °C. Hoe groot is het debiet ongeveer?`,
      opties: [`Ongeveer 516 l/h`, `Ongeveer 198 l/h`, `Ongeveer 600 l/h`, `Ongeveer 12.900 l/h`],
      goed: 0,
      uitleg: `ΔT = 65 - 40 = 25 K. Debiet = 15.000 W / (1,163 × 25) = 516 l/h. 198 l/h ontstaat als je de aanvoertemperatuur (65) als ΔT gebruikt. 600 l/h krijg je als je de factor 1,163 vergeet (15.000 / 25). 12.900 l/h krijg je als je niet deelt door ΔT.`
    },
    {
      vraag: `Waarom vraagt 12,5 l/min douchewater van 40 °C evenveel ketelvermogen als 7,5 l/min van 60 °C (koud water 10 °C)?`,
      opties: [`Omdat water van 40 °C en water van 60 °C dezelfde soortelijke warmte heeft`, `Omdat een hoger debiet altijd evenredig meer vermogen kost, ongeacht de temperatuur`, `Het klopt niet: water van 40 °C vraagt minder vermogen, want het is minder warm`, `Omdat de warmte per minuut gelijk is: 12,5 × 30 K en 7,5 × 50 K zijn allebei 375`],
      goed: 3,
      uitleg: `Het vermogen hangt af van hoeveel water je hoeveel graden opwarmt. Voor de douche wordt 7,5 l/min van 10 naar 60 °C verwarmd (50 K) en daar wordt koud water bijgemengd tot 12,5 l/min van 40 °C. Nagerekend: 12,5 × 30 = 375 en 7,5 × 50 = 375 (l K per minuut), samen ongeveer 26 kW. Wie alleen naar de temperatuur kijkt (40 is lager dan 60), vergeet dat het debiet groter is.`
    },
    {
      vraag: `Een ketel levert constant 20 kW aan het cv-water bij een debiet van 860 l/h (ΔT = 20 K). Door een te lage pompstand halveert het debiet naar 430 l/h. Wat gebeurt er met ΔT als het vermogen gelijk blijft?`,
      opties: [`ΔT halveert naar 10 K, want met minder water valt er minder op te warmen`, `ΔT verdubbelt naar 40 K, want het vermogen gaat in half zoveel water`, `ΔT blijft 20 K, want een gelijk vermogen geeft altijd dezelfde spreiding`, `ΔT stijgt met 50% naar 30 K, want het debiet is met de helft gedaald`],
      goed: 1,
      uitleg: `Uit debiet = vermogen / (1,163 × ΔT) volgt ΔT = vermogen / (1,163 × debiet): halveer je het debiet, dan verdubbelt ΔT. Het vermogen blijft alleen gelijk als het water meer opwarmt. In een echte ketel moduleert de regeling terug als de aanvoer zijn setpunt bereikt, maar de formule laat zien waarom te weinig doorstroming een grote spreiding tussen aanvoer en retour geeft.`
    }
  ],
  kaarten: [
    { voor: `Wat is het verschil tussen temperatuur en warmte?`, achter: `Temperatuur zegt hoe warm iets is (°C of K). Warmte is energie (J, kWh) en hangt af van massa, soortelijke warmte en temperatuurverschil.` },
    { voor: `Met welke formule bereken je de warmte om water op te warmen?`, achter: `Q = m × c × ΔT. Voor water: c = 4,19 kJ/(kg K) = 1,163 Wh/(kg K), met 1 liter = 1 kg (aanname, ongeveer 2 tot 3% afwijking bij 70 tot 80 °C).` },
    { voor: `Hoeveel warmte kost het om 100 liter water van 10 naar 80 °C te verwarmen?`, achter: `Ongeveer 8,1 kWh (100 × 1,163 × 70 = 8141 Wh).` },
    { voor: `Hoe bereken je het debiet van het cv-water uit vermogen en ΔT?`, achter: `Debiet (l/h) = vermogen (W) / (1,163 × ΔT). Bijvoorbeeld 20 kW bij ΔT = 20 K geeft ongeveer 860 l/h.` },
    { voor: `Wat gebeurt er bij gelijk vermogen met het debiet als ΔT tussen aanvoer en retour groter wordt?`, achter: `Het debiet wordt kleiner: debiet en ΔT zijn omgekeerd evenredig.` },
    { voor: `Is een temperatuurverschil van 1 K groter dan een verschil van 1 °C?`, achter: `Nee, ze zijn even groot. Alleen het nulpunt verschilt: 0 °C is 273,15 K.` },
    { voor: `Wat is latente warmte bij een HR-ketel?`, achter: `Warmte die vrijkomt als waterdamp in het rookgas condenseert, zonder dat de temperatuur verandert. Ongeveer 10% van de verbrandingswarmte (Hs).` }
  ],
  bronnen: ['HYD-22', 'HYD-23', 'HYD-01', 'REN-20', 'REN-11', 'REN-13', 'REN-04', 'KET-21', 'KET-28', 'GAS-04']
},

/* ------------------------------------------------------------------ 2.2 */
{
  id: 'm02l02',
  nr: '2.2',
  titel: 'Vermogen en energie: kW, kWh en m³ gas',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt vermogen en energie uit elkaar houden en uit vermogen en rendement het gasverbruik in m³ en de energie in kWh berekenen.',
  videos: [
    { taal: 'nl', titel: 'Wat is een kWh: stroom en gas in kWh (Ketel Klets)', yt: 'eW--k9y2m3w', duur: '±7 min, 2022' },
    { taal: 'nl', titel: 'Een kW omrekenen naar kWh (Ketel Klets)', yt: '--a_QRwGk3g', duur: '±8 min, 2021' },
    { taal: 'en', titel: 'What is a kWh: kilowatt hour explained (The Engineering Mindset)', yt: 'SMPhh8gT_1E', duur: '±6 min, 2017' }
  ],
  tekst: `
## Vermogen is de snelheid, energie is de afstand

Kilowatt (kW) en kilowattuur (kWh) worden voortdurend door elkaar gehaald. Denk aan een auto: kW is de snelheid op je teller, kWh is de afgelegde afstand. Vermogen is energie per tijd, energie is wat je in een bepaalde tijd hebt geleverd of verbruikt. Een toestel van 24 kW dat een uur op vol vermogen draait, levert 24 kWh. Een half uur is 12 kWh. Om tussen eenheden te wisselen onthoud je: 1 kWh = 3,6 MJ.

!!! kern Vermogen × tijd = energie
P (kW) × t (h) = E (kWh). Een ketel verbruikt dus geen kW maar kWh. En hij draait zelden op vol vermogen: een Remeha Calenta 25s moduleert bijvoorbeeld tussen 5,2 en 25,0 kW (Hi), per model verschillend. Voor de energie heb je het gemiddelde vermogen of het gemeten verbruik nodig, niet het maximumvermogen.
!!!

## Van kWh naar m³ gas

Een gasrekening werkt in m³, een ketel in kW. De energie zit in het gas: 1 m³(n) Nederlands aardgas bevat ongeveer 35,17 MJ op bovenwaarde (Hs) en 31,65 MJ op onderwaarde (Hi). Delen door 3,6 geeft kWh. Wat Hs en Hi precies zijn, leer je in les 2.5. Hier hoef je alleen te weten dat het twee referenties zijn en dat je bij het rekenen bij een van de twee blijft.

| Hoeveelheid aardgas | Bovenwaarde (Hs) | Onderwaarde (Hi) |
|---|---|---|
| 1 m³(n) in MJ | 35,17 | 31,65 |
| 1 m³(n) in kWh | 9,769 | 8,792 |
| 1000 m³(n) in kWh | 9769 | 8792 |

Dit zijn gemiddelden. De Hs-waarde is die van Groningen-equivalent gas, de Hi-waarde komt uit de Nederlandse energiedragerlijst (januari 2026). De werkelijke energie per m³ verschilt per gaskwaliteit: G-gas bevat ongeveer 14% stikstof dat niet brandt, en daarom levert een m³ ervan minder energie dan een m³ buitenlands H-gas.

## Gasverbruik uitrekenen

Uit het nuttige vermogen en het rendement volgt het gasverbruik:

V (m³(n)/h) = P / (η × calorische waarde)

Hierin is P het nuttige vermogen in kW en η het rendement als fractie (dus 0,893 en niet 89,3). Neem bij een rendement op Hi de waarde 8,792 kWh/m³ en bij een rendement op Hs de waarde 9,769 kWh/m³. Mix je die, dan maak je een fout van ongeveer 10%.

### Rekenvoorbeeld

Een Remeha Avanta 24c levert bij 80/60 °C een nuttig vermogen van 17,8 kW met 99,1% rendement op Hi, dat is 89,3% op Hs (uit de handleiding, per model verschillend).

- Op Hi: V = 17,8 / (0,991 × 8,792) = 2,04 m³(n)/h
- Op Hs: V = 17,8 / (0,893 × 9,769) = 2,04 m³(n)/h

Beide routes geven hetzelfde antwoord, en dat is een handige controle op je rekenwerk. In 3 uur is dat ongeveer 6,1 m³(n). Reken je met EUR 1,00 per m³ (een rond getal voor het voorbeeld, geen actueel tarief), dan kost dat ongeveer EUR 6,10.

Ook het maximum kun je toetsen. Een ketel die 24 kW aan gas opneemt (op Hi), gebruikt 24 / 8,792 = 2,7 m³(n)/h. Een gasmeter G4, de standaard huisaansluiting, kan volgens Enexis maximaal 6 m³ per uur doorlaten.

## Wat is een m³ eigenlijk?

Een m³ gas is geen vaste hoeveelheid, want gas zet uit als het warmer wordt. Daarom is 1 m³(n) gedefinieerd als het volume bij 0 °C (273,15 K) en 101,325 kPa. Hetzelfde gas neemt bij 15 °C (288,15 K) en dezelfde druk 288,15 / 273,15 = 1,055 keer zoveel ruimte in: ruim 5% meer m³ voor dezelfde energie.

Welke referentie de m³ op een gasrekening heeft (0 °C, 15 °C of de omstandigheden bij de meter), is in deze cursus niet vastgesteld. Reken voor een schatting met de m³(n)-waarden hierboven, houd rekening met een marge van ongeveer 5% en vraag het de netbeheerder of leverancier als het ertoe doet. Kijk bij een gasverbruik uit een fabrikanthandleiding ook altijd welke referentie erbij staat.
`,
  checklist: [
    'Ik kan het verschil tussen kW en kWh uitleggen en kWh omrekenen naar MJ',
    'Ik reken gasverbruik uit met V = P / (η × calorische waarde) en houd Hi en Hs op dezelfde basis',
    'Ik weet ongeveer hoeveel energie een m³(n) aardgas bevat en dat dat een gemiddelde is',
    'Ik weet dat een m³ zonder referentie (0 °C, 15 °C of meterconditie) geen vaste hoeveelheid gas is'
  ],
  quiz: [
    {
      vraag: `Een ketel draait 30 minuten op een constant vermogen van 24 kW. Hoeveel energie levert hij in die tijd?`,
      opties: [`12 kWh`, `24 kWh`, `720 kWh`, `43,2 kWh`],
      goed: 0,
      uitleg: `Energie = vermogen × tijd = 24 kW × 0,5 h = 12 kWh. 24 kWh zou een volledig uur zijn. 720 kWh krijg je als je 24 met 30 minuten vermenigvuldigt zonder om te rekenen naar uren. 43,2 is de uitkomst in MJ (12 kWh × 3,6 MJ/kWh) en dus geen kWh.`
    },
    {
      vraag: `Een monteur berekent het gasverbruik van een ketel met 17,8 kW nuttig vermogen en 89,3% rendement op de bovenwaarde als 17,8 / (0,893 × 8,792) = 2,27 m³(n)/h. Wat is er mis?`,
      opties: [`Niets: 2,27 m³(n)/h is een goede schatting van het verbruik bij dit vermogen`, `Het nuttig vermogen had in MJ in plaats van in kW ingevuld moeten worden`, `Hij combineert een Hs-rendement met de Hi-waarde: met Hs is het 2,04 m³(n)/h`, `Het rendement had als percentage (89,3) ingevuld moeten worden, niet als fractie`],
      goed: 2,
      uitleg: `Rendement en calorische waarde moeten op dezelfde basis staan. 89,3% is een rendement op Hs, dus het hoort bij 9,769 kWh/m³: 17,8 / (0,893 × 9,769) = 2,04 m³(n)/h. Met 8,792 kWh/m³ (Hi) had het rendement op Hi moeten zijn (99,1%) en geeft dezelfde ketel ook 2,04. De gemixte berekening geeft ongeveer 11% te veel gas. Het rendement gaat als fractie (0,893) in de formule, niet als 89,3.`
    },
    {
      vraag: `Op een jaarafrekening staat 1200 m³ gas. Neem aan dat het gaat om m³(n). Hoeveel energie is dat op onderwaarde (Hi)?`,
      opties: [`Ongeveer 136 kWh`, `Ongeveer 10.550 kWh`, `Ongeveer 11.720 kWh`, `Ongeveer 333 kWh`],
      goed: 1,
      uitleg: `Op Hi bevat 1 m³(n) 8,792 kWh, dus 1200 × 8,792 = 10.550 kWh. 11.720 kWh is de uitkomst op Hs (1200 × 9,769): dezelfde hoeveelheid gas met de andere referentie. 136 kWh krijg je door te delen in plaats van te vermenigvuldigen. 333 kWh volgt uit 1200 / 3,6: dat is een omrekening tussen MJ en kWh die hier niet aan de orde is.`
    },
    {
      vraag: `Waarom bevat een m³ Nederlands G-gas minder energie dan een m³ buitenlands H-gas?`,
      opties: [`G-gas wordt warmer geleverd en zet daardoor meer uit`, `H-gas wordt onder een hogere druk in de leiding geleverd`, `G-gas bevat ongeveer 14% waterdamp, dat niet meebrandt`, `G-gas bevat ongeveer 14% stikstof, dat niet meebrandt`],
      goed: 3,
      uitleg: `G-gas bevat ongeveer 14% stikstof. Dat brandt niet en levert dus geen energie, waardoor de energie per m³ lager is dan bij H-gas. Daarom is de kWh de eerlijke maat om energie te vergelijken en niet de m³. Temperatuur en druk veranderen alleen het volume: bij een vaste referentie (m³(n)) zegt de samenstelling alles.`
    },
    {
      vraag: `Een hoeveelheid gas neemt bij 15 °C en 101,325 kPa een volume in van 100 m³. Hoeveel is dat volume bij 0 °C en dezelfde druk?`,
      opties: [`Ongeveer 105,5 m³, want bij 0 °C is er meer volume nodig dan bij 15 °C`, `Ongeveer 94,8 m³, want het volume is evenredig met de temperatuur in K`, `100 m³, want de hoeveelheid gas verandert niet als de temperatuur daalt`, `Ongeveer 85 m³, want 15 K temperatuurverschil is 15% minder volume`],
      goed: 1,
      uitleg: `Bij gelijke druk is het volume evenredig met de temperatuur in kelvin: 100 × 273,15 / 288,15 = 94,8 m³. 105,5 m³ is de verkeerde richting. 100 m³ klopt niet: de hoeveelheid gas verandert niet, maar het volume wel, en daarom noem je bij een m³ altijd de referentie. 85 m³ ontstaat als je 15 K als 15% neemt. Wat de m³ op je gasrekening is, is in deze cursus niet vastgesteld.`
    }
  ],
  kaarten: [
    { voor: `Wat is het verschil tussen kW en kWh?`, achter: `kW is vermogen (energie per tijd), kWh is energie. 24 kW gedurende 1 uur is 24 kWh. 1 kWh = 3,6 MJ.` },
    { voor: `Hoeveel energie zit in 1 m³(n) Nederlands aardgas?`, achter: `Ongeveer 9,769 kWh op bovenwaarde (35,17 MJ) en 8,792 kWh op onderwaarde (31,65 MJ). Gemiddelde waarden.` },
    { voor: `Met welke formule bereken je het gasverbruik in m³(n) per uur?`, achter: `V = P / (η × calorische waarde), met P het nuttige vermogen in kW. Hi-rendement met 8,792 kWh/m³, Hs-rendement met 9,769 kWh/m³.` },
    { voor: `Wat gaat er mis als je een Hs-rendement met de Hi-waarde van gas combineert?`, achter: `Je maakt ongeveer 10% fout. Rendement en calorische waarde moeten op dezelfde basis (Hs of Hi) staan.` },
    { voor: `Welke omstandigheden horen bij 1 m³(n) gas?`, achter: `Een volume gas bij 273,15 K (0 °C) en 101,325 kPa.` },
    { voor: `Wat weet je van een gasvolume in m³ zonder referentietemperatuur?`, achter: `Het is geen vaste hoeveelheid: 100 m³ bij 15 °C is ongeveer 94,8 m³ bij 0 °C. Wat de m³ op de rekening precies is, is niet vastgesteld.` },
    { voor: `Een ketel levert 17,8 kW nuttig bij 99,1% op Hi. Hoeveel gas per uur?`, achter: `Ongeveer 2,04 m³(n)/h (voorbeeld Remeha Avanta 24c bij 80/60, per model verschillend).` },
    { voor: `Hoeveel m³ per uur kan een gasmeter G4 maximaal doorlaten?`, achter: `6 m³ per uur (G6: 10 m³ per uur), volgens Enexis. G4 is de standaard huisaansluiting.` }
  ],
  bronnen: ['REN-20', 'REN-21', 'REN-22', 'REN-23', 'REN-25', 'GAS-02', 'GAS-04', 'GAS-08', 'GAS-09', 'KET-15', 'INS-27']
},

/* ------------------------------------------------------------------ 2.3 */
{
  id: 'm02l03',
  nr: '2.3',
  titel: 'Warmteoverdracht: geleiding, stroming en straling',
  duur: 20,
  type: 'les',
  leerdoel: 'Je herkent geleiding, stroming en straling in een cv-installatie en weet welke invloed elk heeft op comfort en rendement.',
  videos: [
    { taal: 'nl', titel: 'Warmtetransport: geleiding, stroming en straling (Meneer Wietsma Natuurkunde)', yt: 'DpgOe1v25O0', duur: '±7 min, 2016' },
    { taal: 'nl', titel: 'De drie vormen van warmteoverdracht (De Huizendokter)', yt: 'IhxY5XxGec0', duur: '±6 min, 2023' },
    { taal: 'en', titel: 'Conduction, convection and radiation explained (Cognito)', yt: 'rUnABMRPzvg', duur: '±5 min, 2025' }
  ],
  tekst: `
## Drie manieren waarop warmte zich verplaatst

Warmte gaat altijd van warm naar koud. Dat gebeurt op drie manieren, en in een cv-installatie zie je ze alle drie, achter elkaar.

| Vorm | Wat gebeurt er | Waar in de installatie |
|---|---|---|
| Geleiding | Warmte gaat door een vaste stof, van deeltje naar deeltje | Door de wand van de warmtewisselaar, de leiding en de radiator |
| Stroming (convectie) | Een stromende vloeistof of gas neemt de warmte mee | Rookgas langs de wisselaar, cv-water door de leidingen, kamerlucht langs de radiator |
| Straling | Warmte gaat als straling door de ruimte, zonder stof ertussen | Van radiator en vloer naar wanden en mensen |

In een HR-ketel loopt de keten zo: het rookgas stroomt langs de wisselaar, de warmte gaat door het metaal (geleiding), het water voert die warmte af naar de radiatoren en daar komt ze in de kamer via langsstromende lucht en straling.

!!! kern Elke schakel in de keten telt mee
De warmte moet een hele keten door: vlam, rookgas, metaal, water, radiator, kamerlucht. Elke schakel is een weerstand. Een laagje kalk of magnetiet in de wisselaar, te weinig doorstroming of een radiator die te klein is voor de gevraagde temperatuur maakt de keten slechter, en dat merk je terug in comfort en rendement.
!!!

## Geleiding: door het metaal

Metalen geleiden warmte goed, en daarom is een warmtewisselaar van metaal. Fabrikanten kiezen verschillende materialen: aluminium (Remeha Calenta Ace), roestvast staal (ATAG) en bij de Intergas Kombi Kompakt HRE een aluminium wisselaar met twee gescheiden koperen circuits voor cv en tapwater. Afzettingen geleiden warmte slechter dan het metaal en werken als een extra weerstand. Bij kalk in de tapwaterwisselaar spelen onder meer de waterhardheid en de ingestelde tapwatertemperatuur een rol (Remeha, Vaillant). In het cv-water speelt magnetiet: Vaillant en ATAG adviseren spoelen en een filter of magnetietafscheider.

## Stroming: het cv-water en de pomp

In de installatie zorgt de pomp voor gedwongen stroming. Debiet en ΔT hangen samen (les 2.1): bij gelijk vermogen betekent minder debiet een groter ΔT. Te weinig doorstroming laat radiatoren niet goed warm worden, te veel geeft stromingsgeluid. Remeha laat daarom bij stromingsgeluid de maximale pompsnelheid verlagen en bij onvoldoende doorstroming de minimale pompsnelheid verhogen (installateursparameters van de Calenta). Het debiet opvoeren kost bovendien veel: verdubbel je het debiet in een gelijkblijvend leidingnet, dan wordt de drukval ongeveer viermaal zo groot (bij turbulente stroming).

## Straling en de afgifte in de kamer

Een radiator geeft warmte af aan de lucht die erlangs stroomt en door straling aan wanden en mensen. Hoeveel, hangt sterk af van het temperatuurverschil tussen radiator en kamer. De fabrikant geeft het vermogen bij een genormaliseerd temperatuurverschil van 50 K, en je rekent het om met

Q = Q50 × (ΔT / 50)^n

Hierin is n een exponent die de fabrikant opgeeft en die gemiddeld ongeveer 1,3 is (per radiator verschillend). Meestal is ΔT hier het verschil tussen de gemiddelde watertemperatuur en de kamertemperatuur. Controleer welke definitie de fabrikant gebruikt.

### Rekenvoorbeeld: een radiator op lage temperatuur

Een radiator geeft 1000 W bij ΔT = 50 K (een getal voor het voorbeeld). De gemiddelde watertemperatuur is 50 °C en de kamer 20 °C, dus ΔT = 30 K. Met n = 1,3 is Q = 1000 × (30 / 50)^1,3 = 1000 × 0,515 = ongeveer 515 W. Dat is ongeveer de helft, niet de 600 W van een evenredige berekening. Wil je dezelfde warmte met een lagere temperatuur, dan heb je meer of grotere radiatoren nodig, of een woning die minder warmte verliest (les 2.4).

Vloerverwarming laat hetzelfde principe zien. De vloer mag in de verblijfszone volgens EN 1264 maximaal 29 °C worden (35 °C in de randzone), dus het temperatuurverschil met de kamer is klein. Dat wordt gecompenseerd door het oppervlak: de hele vloer geeft warmte af, en daarom kan vloerverwarming met een lage watertemperatuur werken.

## Warmteoverdracht en rendement

Hoe lager de retourtemperatuur, hoe meer warmte je uit het rookgas haalt. Onder het dauwpunt van het rookgas, dat bij gangbare instelling rond 54 tot 56 °C ligt, condenseert waterdamp en komt er extra warmte vrij. Voorbeeld uit de handleiding van de Remeha Calenta 25s: bij 25,0 kW belasting (Hi) is het nuttige vermogen 24,8 kW bij 80/60 °C en 25,5 kW bij 50/30 °C. Dat is ongeveer 99% en 102% op onderwaarde: hoe dat boven 100% kan, leer je in les 2.5.
`,
  checklist: [
    'Ik herken geleiding, stroming en straling in de keten vlam, wisselaar, water, radiator en kamer',
    'Ik weet dat het radiatorvermogen sneller dan evenredig met ΔT afneemt (Q = Q50 × (ΔT / 50)^n) en dat de fabrikant n opgeeft',
    'Ik kan uitleggen waarom een lage retourtemperatuur condensatie en extra warmte oplevert',
    'Ik weet dat te weinig doorstroming radiatoren koud laat en te veel doorstroming geluid en drukval geeft'
  ],
  quiz: [
    {
      vraag: `In een HR-ketel stroomt heet rookgas langs de warmtewisselaar en stroomt water aan de andere kant van het metaal. Welk mechanisme brengt de warmte door de metalen wand zelf?`,
      opties: [`Straling van het hete rookgas door het metaal heen`, `Stroming (convectie) van water door het metaal`, `Geleiding van deeltje naar deeltje in het metaal`, `Condensatie van waterdamp tegen het metaal`],
      goed: 2,
      uitleg: `Door een vaste wand gaat warmte door geleiding. Stroming zorgt voor de aanvoer en afvoer van warmte langs beide kanten van de wand, maar niet door het metaal zelf. Condensatie is een verandering van toestand van het rookgas en geen manier van warmtetransport door de wand.`
    },
    {
      vraag: `De fabrikant geeft een radiator 1200 W bij ΔT = 50 K en een exponent n = 1,3. Wat is het vermogen bij ΔT = 30 K?`,
      opties: [`Ongeveer 620 W`, `Ongeveer 720 W`, `Ongeveer 1200 W`, `Ongeveer 2330 W`],
      goed: 0,
      uitleg: `Q = 1200 × (30 / 50)^1,3 = 1200 × 0,515 = ongeveer 620 W. 720 W is de evenredige berekening (30 / 50 × 1200): omdat n groter is dan 1, daalt het vermogen sneller dan het temperatuurverschil. 1200 W gaat ervan uit dat de temperatuur niet uitmaakt. 2330 W komt uit de omgekeerde breuk (50 / 30).`
    },
    {
      vraag: `Vloerverwarming werkt met een vloeroppervlak van maximaal 29 °C in de verblijfszone, en levert toch voldoende warmte. Waarom?`,
      opties: [`Het water in de vloer stroomt veel sneller dan in een radiator`, `De vloer geeft per m² veel meer warmte af dan een radiator`, `De ketel draait bij vloerverwarming altijd op vol vermogen`, `Het afgiftevlak is heel groot: de hele vloer geeft warmte af`],
      goed: 3,
      uitleg: `De vloer is maar enkele graden warmer dan de kamer, dus per m² is de afgifte beperkt. Dat wordt gecompenseerd door de grote oppervlakte: de hele vloer geeft warmte af. Het gaat om oppervlak en temperatuurverschil, niet om de snelheid van het water of het vermogen van de ketel.`
    },
    {
      vraag: `Een Remeha Calenta 25s heeft bij een belasting van 25,0 kW (Hi) een nuttig vermogen van 24,8 kW bij 80/60 en 25,5 kW bij 50/30. Wat verklaart de 0,7 kW extra bij 50/30?`,
      opties: [`De pomp draait bij 50/30 harder en geeft daardoor extra warmte af aan het water`, `Bij de lage retour condenseert waterdamp uit het rookgas en komt condensatiewarmte vrij`, `De brander gaat bij lage temperaturen harder branden en levert daardoor meer warmte`, `De thermostaat vraagt bij 50/30 om meer vermogen, waardoor de ketel meer gas verbruikt`],
      goed: 1,
      uitleg: `De belasting is in beide gevallen 25,0 kW. Het extra vermogen komt uit het rookgas: onder het dauwpunt (bij gangbare instelling circa 54 tot 56 °C) condenseert waterdamp en de condensatiewarmte gaat naar het water. Op onderwaarde is dat ongeveer 99% tegen 102%. Pomp, brander en thermostaat veranderen de belasting niet.`
    },
    {
      vraag: `Een collega wil een radiator beter laten afgeven en verhoogt het debiet van 300 naar 600 l/h. Wat gebeurt er ongeveer met de drukval van het leidingnet (turbulente stroming)?`,
      opties: [`Ze wordt ongeveer tweemaal zo groot`, `Ze blijft ongeveer even groot als nu`, `Ze wordt ongeveer viermaal zo groot`, `Ze wordt ongeveer achtmaal zo groot`],
      goed: 2,
      uitleg: `Bij een gelijkblijvend leidingnet neemt de drukval ongeveer met het kwadraat van het debiet toe: verdubbeling geeft ongeveer viermaal zoveel drukval. Een verdubbeling zou bij een lineair verband horen en achtmaal zoveel bij een derde macht. Het debiet opvoeren kost dus veel pompopvoerhoogte.`
    }
  ],
  kaarten: [
    { voor: `Welke drie vormen van warmteoverdracht zijn er?`, achter: `Geleiding (door een vaste stof), stroming of convectie (met een bewegende vloeistof of gas) en straling (zonder stof ertussen).` },
    { voor: `Hoe komt de warmte van het rookgas in het cv-water van een HR-ketel?`, achter: `Rookgas stroomt langs de wisselaar, de warmte gaat door geleiding door het metaal en het water stroomt de warmte af (stroming).` },
    { voor: `Hoe reken je het vermogen van een radiator om naar een ander temperatuurverschil?`, achter: `Q = Q50 × (ΔT / 50)^n, met Q50 het vermogen bij ΔT = 50 K en n de exponent van de fabrikant (gemiddeld ongeveer 1,3).` },
    { voor: `Een radiator geeft 1000 W bij ΔT = 50 K, met n = 1,3. Wat geeft hij bij ΔT = 30 K?`, achter: `Ongeveer 515 W: de helft en niet 600 W, omdat het vermogen sneller daalt dan het temperatuurverschil.` },
    { voor: `Waarom levert een HR-ketel bij een lage retourtemperatuur meer warmte aan het water?`, achter: `Onder het dauwpunt van het rookgas (circa 54 tot 56 °C) condenseert waterdamp en komt condensatiewarmte vrij.` },
    { voor: `Hoe warm mag de vloer van vloerverwarming in de verblijfszone maximaal worden?`, achter: `29 °C (35 °C in de randzone), volgens EN 1264.` },
    { voor: `Wat gebeurt er ongeveer met de drukval als je het debiet in een leidingnet verdubbelt?`, achter: `Hij wordt ongeveer viermaal zo groot (turbulente stroming).` }
  ],
  bronnen: ['KET-17', 'KET-18', 'KET-19', 'KET-21', 'TAP-13', 'HYD-30', 'HYD-21', 'HYD-22', 'HYD-24', 'HYD-36', 'REG-12', 'REG-16', 'REG-19', 'VER-16']
},

/* ------------------------------------------------------------------ 2.4 */
{
  id: 'm02l04',
  nr: '2.4',
  titel: 'Warmteverlies van een woning',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen waar het warmteverlies van een woning vandaan komt en het benodigde ketelvermogen in grote lijnen beoordelen.',
  videos: [
    { taal: 'nl', titel: 'Wat is een warmteverliesberekening (Peter Luteijn)', yt: 'l6VwsGKM8AQ', duur: '±2 min, 2023' },
    { taal: 'nl', titel: 'Warmteverliesberekening: transmissie uitgelegd (Leever Installatie adviseurs)', yt: 'isoz1fh-rIs', duur: '±1 min, 2020' },
    { taal: 'en', titel: 'U-values explained (SURE Insulation)', yt: 'YZ4pmMneLOo', duur: '±11 min, 2020' }
  ],
  tekst: `
## Waar raakt een woning warmte kwijt?

Een woning is een emmer met gaten: zolang het binnen warmer is dan buiten, stroomt er warmte naar buiten. De ketel en de radiatoren moeten precies dat verlies aanvullen: wie het kent, weet welk vermogen nodig is. In Nederland rekent men woningen door met ISSO 51, een methode die op de Europese norm NEN-EN 12831 is gebaseerd. Die telt het warmteverlies op uit vier posten:

| Post | Wat gaat er verloren |
|---|---|
| Transmissie | Warmte die door gevel, dak, vloer, ramen en deuren naar buiten gaat |
| Ventilatie | Warme lucht die bewust wordt afgevoerd en vervangen door koude buitenlucht |
| Opwarmen | Extra vermogen om een afgekoelde woning weer op temperatuur te brengen |
| Systeem | Verlies van het verwarmingssysteem zelf |

Infiltratie is het onbedoelde broertje van ventilatie: koude buitenlucht die door kieren en naden naar binnen komt. De methode rekent dit onder het ventilatieverlies (buitenluchttoetreding). In beide gevallen moet koude lucht worden verwarmd: hoe groter de luchtstroom en het temperatuurverschil, hoe groter het verlies.

## Transmissieverlies: Q = U × A × ΔT

De U-waarde (in W/(m² K)) zegt hoeveel vermogen er per m² door een constructie gaat bij 1 K temperatuurverschil. Hoe beter de isolatie (hoe hoger de warmteweerstand R in m² K/W), hoe lager de U-waarde. Voor een constructiedeel geldt

Q = U × A × ΔT

met A het oppervlak in m² en ΔT het verschil tussen binnen- en buitentemperatuur in K.

!!! kern Het verlies is evenredig met U, A en ΔT
Halveer je de U-waarde (dikker isoleren), het oppervlak of het temperatuurverschil, dan halveert het verlies.
!!!

### Rekenvoorbeeld

100 m² gevel met U = 0,4 W/(m² K). Binnen is het 20 °C, buiten -10 °C, dus ΔT = 20 - (-10) = 30 K.

- Q = 100 m² × 0,4 W/(m² K) × 30 K = 1200 W.
- Na dikker isoleren tot U = 0,2 W/(m² K) is het 600 W.

Alleen transmissie: koudebruggen, ventilatie en opwarmen zitten er niet in.

?? Verdieping: welke buitentemperatuur gebruik je?
Een installatie wordt berekend op de koudste dag die je nog wilt opvangen. ISSO 51 (uitgave 2017) rekent met -10 °C, met een correctie voor de traagheid van het gebouw waardoor een goed geïsoleerd gebouw tussen -6 en -10 °C uitkomt. Een nieuwere uitgave (2023) is niet nagelopen. Gebruik voor een echte berekening de actuele methode, geen vuistregel.
??

## Van warmteverlies naar ketelvermogen

Het verlies volgt het temperatuurverschil, dat per dag verschilt. De ketel moet de koudste dag aankunnen, maar zit de rest van het jaar ver onder dat vermogen: dat wringt bij een te groot toestel.

### Rekenvoorbeeld: waarom een te grote ketel gaat takten

Stel dat een woning 200 W per K temperatuurverschil verliest (transmissie en ventilatie samen, een aangenomen getal).

- Op de ontwerpdag (ΔT = 30 K): 200 × 30 = 6000 W = 6 kW.
- Bij 5 °C buiten (ΔT = 15 K): 200 × 15 = 3000 W = 3 kW.

Een Remeha Calenta 25s (een ketel alleen voor verwarming) heeft een minimale belasting van 5,2 kW en kan niet verder terug moduleren (voorbeeld, per model verschillend). Bij 3 kW vraag slaat hij aan en uit: taktend bedrijf. Aan blijven op de kleinste stand kan pas vanaf een vraag van 5,2 kW, dus vanaf ΔT = 5200 / 200 = 26 K. Bij 20 °C binnen is dat buiten -6 °C of kouder. Extra vermogen is dus geen gratis marge: het maakt pendelen waarschijnlijker. Kijk daarom ook naar de kleinste stand van een ketel.

## Isolatie, aanvoertemperatuur en rendement

Minder warmteverlies betekent dat de radiatoren minder hoeven af te geven, en dan mag het water koeler. Stel dat een radiator bij ΔT = 50 K (gemiddeld 70 °C water, 20 °C kamer) de volle warmtevraag dekt en dat het verlies door isolatie halveert. Met n = 1,3 uit les 2.3 volstaat dan ΔT = 50 × 0,5^(1/1,3) = 29 K, dus een gemiddelde watertemperatuur van ongeveer 49 °C. De retour ligt daar nog onder en dus onder het dauwpunt van het rookgas (54 tot 56 °C): de ketel gaat condenseren en het rendement stijgt.

!!! gevaar Warmte sparen door ventilatie dicht te zetten
Bij een open opstelling mag de luchttoevoeropening van het toestel niet worden afgesloten en mogen de nodige verbrandingsluchtopeningen van de opstelruimte niet worden verkleind of afgesloten (fabrikantvoorschrift, bijvoorbeeld Remeha). Verminder warmteverlies door kieren te dichten en beter te isoleren, niet door ventilatieopeningen dicht te plakken. Zie je dat verbrandingsluchtopeningen zijn dichtgezet of verkleind, leg dat dan uit aan de klant, laat de openingen herstellen en meet CO in de opstellingsruimte: bij waarden vanaf 5 ppm handel je volgens [les 1.6](les:m01l06).
!!!
`,
  checklist: [
    'Ik kan de posten van het warmteverlies noemen: transmissie, ventilatie en infiltratie, opwarmen en systeem',
    'Ik reken transmissieverlies uit met Q = U × A × ΔT en let op de eenheden',
    'Ik kan uitleggen waarom een te groot ketelvermogen tot takten leidt',
    'Ik weet dat ventilatie en verbrandingsluchtopeningen nooit een middel zijn om warmte te sparen'
  ],
  quiz: [
    {
      vraag: `Een dak van 60 m² heeft een U-waarde van 0,3 W/(m² K). Binnen is het 20 °C en buiten -10 °C. Hoe groot is het transmissieverlies van het dak?`,
      opties: [`Ongeveer 18 W`, `Ongeveer 540 W`, `Ongeveer 1800 W`, `Ongeveer 5400 W`],
      goed: 1,
      uitleg: `ΔT = 20 - (-10) = 30 K. Q = U × A × ΔT = 0,3 × 60 × 30 = 540 W. 18 W krijg je als je het temperatuurverschil vergeet (0,3 × 60). 1800 W ontstaat als je de U-waarde vergeet (60 × 30). 5400 W krijg je als je U als 3,0 leest: let op de komma.`
    },
    {
      vraag: `De buitentemperatuur stijgt van -10 naar 0 °C, terwijl het binnen 20 °C blijft. Wat gebeurt er met het transmissieverlies van een woning (alles verder gelijk)?`,
      opties: [`Het halveert, want ΔT gaat van 30 K naar 15 K`, `Het blijft gelijk: alleen U en A bepalen het verlies`, `Het daalt met 10%, want de temperatuur stijgt met 10 K`, `Het daalt met een derde: ΔT gaat van 30 naar 20 K`],
      goed: 3,
      uitleg: `Het verlies is evenredig met ΔT. ΔT gaat van 30 K (20 - (-10)) naar 20 K (20 - 0): dat is tweederde van het oude verlies, dus een daling met een derde. Halveren zou horen bij ΔT = 15 K. Dat alleen U en A meetellen is onjuist: het temperatuurverschil staat in de formule.`
    },
    {
      vraag: `Een woning verliest 200 W per K temperatuurverschil. De ketel heeft een minimale belasting van 5,2 kW. Het is 20 °C binnen en 5 °C buiten. Wat gebeurt er?`,
      opties: [`De vraag is 3 kW, lager dan het minimum: de ketel gaat aan en uit`, `De ketel draait continu op minimaal vermogen en levert dus 5,2 kW`, `De vraag is 6 kW en de ketel moet op vol vermogen blijven draaien`, `De ketel schakelt uit en start pas weer als het buiten kouder wordt`],
      goed: 0,
      uitleg: `ΔT = 15 K, dus de warmtevraag is 200 × 15 = 3000 W = 3 kW. Dat is minder dan het minimum van 5,2 kW, dus de ketel kan niet zo laag moduleren en pendelt. Continu 5,2 kW zou meer leveren dan de vraag, daarom schakelt hij tussendoor uit. 6 kW is de vraag op de ontwerpdag (ΔT = 30 K), niet bij 5 °C buiten.`
    },
    {
      vraag: `Welke maatregel verlaagt het infiltratieverlies van een woning?`,
      opties: [`Een extra dikke isolatielaag in het dak en op de zoldervloer aanbrengen`, `Een hogere aanvoertemperatuur en een hogere pompstand instellen`, `Kieren en naden rond kozijnen, deuren en leidingdoorvoeren dichten`, `Ventilatieroosters in de opstelruimte van een open toestel dichtplakken`],
      goed: 2,
      uitleg: `Infiltratie is onbedoelde luchttoetreding door kieren en naden, dus die beperk je door kieren en naden te dichten. Dakisolatie verlaagt het transmissieverlies, niet de luchtverversing. Een hogere aanvoertemperatuur verandert de luchtstroom niet. Ventilatieroosters bij een open toestel dichtplakken is levensgevaarlijk: de verbrandingsluchtopeningen mogen niet worden verkleind of afgesloten.`
    },
    {
      vraag: `Waarom rekent een warmteverliesberekening voor een woning met een ontwerpbuitentemperatuur (in ISSO 51, uitgave 2017, -10 °C) en niet met de gemiddelde jaartemperatuur?`,
      opties: [`Omdat het jaarlijkse gasverbruik door de koudste dag wordt bepaald`, `Omdat de installatie ook op de koudste dag de kamers warm moet houden`, `Omdat de U-waarde van de muren bij -10 °C een stuk slechter wordt`, `Omdat de ketel de meeste dagen van het jaar op maximaal vermogen draait`],
      goed: 1,
      uitleg: `Het verlies is evenredig met ΔT en dus het grootst op de koudste dag. Ketel en radiatoren moeten die dag kunnen dekken, dus reken je met die ontwerpsituatie. Het jaarverbruik hangt van alle dagen af, niet van een dag. De ketel draait de meeste dagen ver onder zijn maximum, zoals het voorbeeld van het takten laat zien.`
    }
  ],
  kaarten: [
    { voor: `Met welke formule bereken je het transmissieverlies van een constructiedeel?`, achter: `Q = U × A × ΔT, met U in W/(m² K), A in m² en ΔT in K. Het resultaat is in W.` },
    { voor: `Uit welke posten bestaat het warmteverlies volgens de ISSO 51-methode?`, achter: `Transmissie, ventilatie (buitenluchttoetreding), opwarmen en systeemverliezen. De methode is gebaseerd op NEN-EN 12831.` },
    { voor: `Wat is het verschil tussen ventilatie en infiltratie?`, achter: `Ventilatie is bedoelde luchtverversing (roosters, mechanische afvoer), infiltratie is onbedoelde luchttoetreding door kieren en naden.` },
    { voor: `100 m² gevel, U = 0,4 W/(m² K), binnen 20 °C, buiten -10 °C. Transmissieverlies?`, achter: `100 × 0,4 × 30 = 1200 W (alleen transmissie, zonder koudebruggen, ventilatie en opwarmen).` },
    { voor: `Wat gebeurt er met het warmteverlies als het temperatuurverschil tussen binnen en buiten halveert?`, achter: `Het halveert ook: het verlies is evenredig met ΔT.` },
    { voor: `Welke ontwerpbuitentemperatuur gebruikt ISSO 51 (uitgave 2017)?`, achter: `-10 °C, gecorrigeerd voor de tijdconstante van het gebouw (goed geïsoleerd: tussen -6 en -10 °C). Een uitgave 2023 bestaat en is niet nagelopen.` },
    { voor: `Waarom gaat een te grote cv-ketel takten?`, achter: `Zodra de warmtevraag lager is dan de minimale belasting (Remeha Calenta 25s: 5,2 kW) kan de ketel niet verder terug en schakelt hij aan en uit.` }
  ],
  bronnen: ['REG-22', 'REG-20', 'REG-12', 'REG-11', 'KET-15', 'TAP-01', 'VER-16', 'LUC-06']
},

/* ------------------------------------------------------------------ 2.5 */
{
  id: 'm02l05',
  nr: '2.5',
  titel: 'Rendement en verliezen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe het rendement van een ketel is opgebouwd en waarom Hs en Hi twee verschillende referenties zijn.',
  videos: [
    { taal: 'nl', titel: 'Hoe werkt een HR-ketel (Van Gemert Installatiegroep)', yt: 'Cd5O2a4qabo', duur: '±6 min, 2018' },
    { taal: 'nl', titel: 'CV-ketel aanvoertemperatuur verlagen of niet (Ketel Klets)', yt: 'jRFdlFYO90A', duur: '±6 min, 2022' },
    { taal: 'en', titel: 'How a condensing boiler works (MEP Academy)', yt: 'oRr3q3IraRU', duur: '±9 min, 2022' }
  ],
  tekst: `
## Rendement: wat je eruit haalt, gedeeld door wat je erin stopt

Het rendement η van een ketel is de nuttig afgegeven warmte gedeeld door de energie in het gas dat je erin stopt. Zonder context zegt het weinig: je moet weten op welke calorische waarde het is gebaseerd (Hs of Hi), bij welk vermogen (vol- of deellast) en bij welke watertemperaturen.

## Bovenwaarde en onderwaarde

Bij verbranding van aardgas ontstaat waterdamp. Als die damp condenseert, komt er warmte vrij. Of je die condensatiewarmte meetelt in de energie-inhoud van het gas, bepaalt of je Hs of Hi gebruikt.

- De **bovenwaarde (Hs)** gaat ervan uit dat het verbrandingswater volledig condenseert: de condensatiewarmte telt mee.
- De **onderwaarde (Hi)** gaat ervan uit dat het water damp blijft: de condensatiewarmte telt niet mee.

Voor Nederlands aardgas is Hs = 35,17 MJ/m³(n) = 9,769 kWh/m³(n) en Hi = 31,65 MJ/m³(n) = 8,792 kWh/m³(n). Kiwa noemt voor aardgas (G25) een verhouding Hi/Hs van 0,902. Met de gemiddelden hierboven kom je op 31,65 / 35,17 = 0,900. Het verschil is klein: voor omrekeningen tussen Hs en Hi rekenen we in de cursus met de normwaarde 0,902. De condensatiewarmte is dus (35,17 - 31,65) / 35,17 = 10,0% van Hs, oftewel 11,1% van Hi.

!!! kern Zelfde ketel, twee rendementen
Het rendement op Hi is ongeveer 11% hoger dan dat op Hs (delen door 0,902). Op bovenwaarde kan een ketel niet boven 100% komen, op onderwaarde wel, tot 1 / 0,902 = 110,9%. Een rendement boven 100% op Hi is geen perpetuum mobile: de condensatiewarmte wordt wel benut, maar staat niet in de noemer.
!!!

## HR107: 107% waarvan?

Hier gaat het vaak mis. HR107 betekent 107% rendement op de onderwaarde (Hi), niet op de bovenwaarde. Op bovenwaarde is dat 96,5% (96,5 / 0,902 = 107,0). Dat is de deellasteis van het huidige Gaskeur HR-label: bij 30% van de grootste nominale belasting minstens 96,5% Hs. De naam HR107 kennen we uit secundaire bronnen als oude labelnaam, de 96,5% Hs staat in de BRL Gaskeur HR zelf. In Europa en in Gaskeur is het Hs-rendement de standaard, het Hi-rendement is de oude Nederlandse uitdrukking. Zie je "107%" in een folder, lees dan "Hi".

## Rekenvoorbeeld: wat de retourtemperatuur doet

Rendementen uit de handleiding van de Remeha Avanta 24c (een voorbeeld, per model verschilt het):

| Bedrijfspunt | Rendement Hs | Rendement Hi |
|---|---|---|
| Vollast, 80/60 °C | 89,3% | 99,1% |
| Vollast, 50/30 °C | 94,0% | 104,4% |
| Laaglast, retour 60 °C | 84,9% | 94,3% |
| Deellast (Gaskeur HR-methode), retour 30 °C | 97,9% | 108,7% |

In elke rij is het rendement op Hs ongeveer 0,90 keer dat op Hi. Van 30 naar 60 °C retour daalt het Hs-rendement met 13 procentpunt. Wat dat voor het gasverbruik betekent, zie je bij 1000 kWh nuttige warmte:

- Bij 80/60 (89,3% Hs): 1000 / 0,893 = 1120 kWh Hs, dus 1120 / 9,769 = 114,6 m³(n).
- Bij 50/30 (94,0% Hs): 1000 / 0,940 = 1064 kWh Hs, dus 1064 / 9,769 = 108,9 m³(n).

Dat scheelt 5,7 m³(n), ongeveer 5%, alleen door lagere temperaturen.

## Waar blijft de rest? De verliezen

Het rendement is nooit 100% op Hs. Het verlies zit in drie posten:

1. **Niet benutte condensatiewarmte.** Bij een hoge retourtemperatuur blijft de waterdamp damp en verdwijnt de condensatiewarmte met het rookgas: tot ongeveer 10% van Hs. Condensatie begint pas onder het dauwpunt, bij gangbare luchtovermaat (lambda 1,2 tot 1,3) rond 54 tot 56 °C.
2. **Voelbare rookgaswarmte.** Het rookgas verlaat de ketel warmer dan de kamer. Hoe hoger de rookgastemperatuur en hoe meer luchtovermaat, hoe meer warmte er verloren gaat. Bij de Avanta 24c ligt de rookgastemperatuur tussen 30 en 80 °C. Een lage waarde kan alleen bij een koude retour, want het rookgas koelt niet af tot onder de temperatuur van het water.
3. **Stilstandsverlies van de behuizing.** De ketel is warmer dan zijn omgeving en geeft warmte af: 48 W bij 30 K en 79 W bij 50 K temperatuurverschil met de omgeving (Avanta). Dat is ongeveer 1,6 W per K: hetzelfde principe als het transmissieverlies uit les 2.4.

Hoe groot het voelbare rookgasverlies precies is, is hier niet doorgerekend. Onvolledige verbranding is een vierde verlies: CO is onverbrand brandstof en er komt minder warmte vrij.

!!! gevaar Rendement is nooit een reden om buiten de afstelwaarden te gaan
Minder lucht geeft minder rookgasverlies, maar bij te weinig lucht of een gekoelde vlam ontstaat koolmonoxide (CO), en dat is levensgevaarlijk. Stel een ketel alleen af binnen de waarden van de fabrikant voor dat model en meet de CO. Meer over verbranding en CO volgt in module 4.
!!!
`,
  checklist: [
    'Ik kan uitleggen wat Hs en Hi zijn en waarom een rendement op Hi hoger uitkomt dan op Hs',
    'Ik reken een rendement om met Hi/Hs = 0,902 en weet dat HR107 107% op Hi is, dus 96,5% op Hs',
    'Ik noem bij een rendement altijd de basis (Hs of Hi), de belasting en de temperaturen',
    'Ik kan de drie belangrijkste verliesposten van een HR-ketel noemen',
    'Ik weet dat rendement nooit een reden is om buiten de afstelwaarden van de fabrikant te gaan'
  ],
  quiz: [
    {
      vraag: `Een folder noemt een ketel "HR107". Hoe lees je dat?`,
      opties: [`107% rendement op de bovenwaarde (Hs), dus nog hoger op de onderwaarde`, `107% rendement op de onderwaarde (Hi), dus 96,5% op de bovenwaarde`, `Dat de ketel kortstondig 107% van zijn nominale vermogen kan leveren`, `Een nominaal vermogen van 107 kW, geschikt voor grote gebouwen`],
      goed: 1,
      uitleg: `HR107 is een rendement op de onderwaarde (Hi). Op bovenwaarde is dat 107 × 0,902 = 96,5%, de deellasteis van het huidige HR-label. Een rendement van 107% op de bovenwaarde is onmogelijk: op Hs kan een ketel niet boven 100% komen, omdat de condensatiewarmte daar al in de noemer zit.`
    },
    {
      vraag: `Volgens de handleiding haalt een ketel bij deellast en 30 °C retour 108,7% rendement op Hi. Hoeveel is dat ongeveer op Hs?`,
      opties: [`Ongeveer 98%, want je vermenigvuldigt met 0,902`, `108,7%, want de basis (Hs of Hi) maakt geen verschil`, `Ongeveer 120%, want je vermenigvuldigt met 1,1`, `100%, want op Hs is het rendement altijd precies 100%`],
      goed: 0,
      uitleg: `Rendement op Hs = rendement op Hi × 0,902 = 108,7 × 0,902 = ongeveer 98%. Het is dezelfde ketel met dezelfde nuttige warmte, gedeeld door een grotere energie-inhoud. 120% komt uit de verkeerde richting (× 1,1). 100% klopt niet: op Hs kan het rendement niet boven 100% komen, maar het is niet per se 100%.`
    },
    {
      vraag: `Een ketel (voorbeeld Remeha Avanta 24c, per model verschillend) haalt bij vollast en 50/30 °C 94,0% op Hs. Hoeveel gas heeft hij nodig voor 1000 kWh nuttige warmte?`,
      opties: [`Ongeveer 102 m³(n)`, `Ongeveer 121 m³(n)`, `Ongeveer 109 m³(n)`, `Ongeveer 1064 m³(n)`],
      goed: 2,
      uitleg: `1000 kWh / 0,940 = 1064 kWh op Hs, gedeeld door 9,769 kWh/m³ is 108,9 m³(n). 102 m³ krijg je als je het rendement vergeet (1000 / 9,769). 121 m³ ontstaat als je een Hs-rendement combineert met de Hi-waarde (1000 / (0,94 × 8,792)). 1064 is de energie in kWh, nog niet omgerekend naar m³.`
    },
    {
      vraag: `Welke uitspraak over de rookgastemperatuur van een HR-ketel klopt?`,
      opties: [`De rookgastemperatuur is een vaste eigenschap van het type ketel`, `Een warme retour geeft meer condensatie en dus een lagere rookgastemperatuur`, `Een hogere rookgastemperatuur betekent meer nuttige warmte voor het water`, `Het rookgas kan niet kouder worden dan het water dat het verwarmt`],
      goed: 3,
      uitleg: `Het rookgas geeft warmte af aan het water en kan daardoor niet kouder worden dan de retour. Een lage rookgastemperatuur (bij de Avanta 24c tussen 30 en 80 °C) vraagt dus een koude retour, en die geeft ook condensatie. Een warme retour geeft juist weinig condensatie. Een hogere rookgastemperatuur is warmte die met het rookgas de schoorsteen in gaat: verlies en geen extra nuttige warmte.`
    },
    {
      vraag: `Een collega stelt een ketel met minder lucht af, omdat het rookgasverlies dan kleiner wordt. Wat is het grote bezwaar?`,
      opties: [`Het rendement daalt altijd, want minder lucht betekent minder vermogen`, `Bij te weinig lucht ontstaat koolmonoxide en komt er minder warmte vrij`, `Het rookgas wordt te koud en de ketel condenseert dan niet meer`, `De warmtewisselaar raakt daardoor sneller verstopt en gaat eerder stuk`],
      goed: 1,
      uitleg: `Bij onvolledige verbranding door te weinig lucht (of een gekoelde vlam) ontstaat CO, en er komt minder warmte vrij dan bij volledige verbranding. CO is levensgevaarlijk: stel af binnen de waarden van de fabrikant voor dat model. Dat het rendement altijd daalt is te stellig en niet het hoofdpunt: het gaat om het veiligheidsrisico.`
    }
  ],
  kaarten: [
    { voor: `Wat is het verschil tussen Hs en Hi?`, achter: `Hs (bovenwaarde) gaat uit van volledig condenserend verbrandingswater, Hi (onderwaarde) van waterdamp die damp blijft. Aardgas: 35,17 en 31,65 MJ/m³(n).` },
    { voor: `Wat is de verhouding Hi/Hs voor aardgas?`, achter: `0,902 volgens Kiwa (G25). Met de gemiddelden 31,65 / 35,17 = 0,900. Voor omrekeningen gebruiken we in de cursus 0,902.` },
    { voor: `Wat is het maximale rendement van een ketel op Hs en op Hi?`, achter: `Op Hs 100%, op Hi ongeveer 110,9% (1 / 0,902), omdat de condensatiewarmte (circa 11% van Hi) niet in de noemer staat.` },
    { voor: `Wat betekent HR107?`, achter: `107% rendement op de onderwaarde (Hi), gelijk aan 96,5% op de bovenwaarde: de deellasteis van het huidige Gaskeur HR-label.` },
    { voor: `Wat gebeurt er met het rendement als de retourtemperatuur daalt (voorbeeld Remeha Avanta 24c)?`, achter: `Het stijgt: vollast 89,3% Hs bij 80/60 tegen 94,0% Hs bij 50/30 (op Hi 99,1% en 104,4%), door meer condensatie. Per model verschillend.` },
    { voor: `Welke drie verliesposten heeft een HR-ketel?`, achter: `Niet benutte condensatiewarmte (tot circa 10% van Hs), voelbare rookgaswarmte en stilstandsverlies van de behuizing (Avanta: 48 W bij 30 K, 79 W bij 50 K).` },
    { voor: `Onder welke temperatuur condenseert het rookgas van een HR-ketel?`, achter: `Onder het dauwpunt, bij gangbare luchtovermaat (lambda 1,2 tot 1,3) circa 54 tot 56 °C. De retour moet dus daaronder liggen.` }
  ],
  bronnen: ['GAS-08', 'GAS-09', 'GAS-10', 'REN-01', 'REN-02', 'REN-03', 'REN-04', 'REN-05', 'REN-06', 'REN-08', 'REN-09', 'REN-10', 'VER-13', 'VER-16']
}

  ]
});
