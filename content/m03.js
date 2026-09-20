/* ==========================================================================
   m03.js - Module 3: Water, druk en hydrauliek
   Lessen 3.1 t/m 3.6 zijn volledig geschreven op basis van
   project/docs/feiten/03-ketel-hydrauliek-regeling.md (HYD, KET, REG, TAP)
   en 05-installeren-meten-onderhoud-storingen.md (INS, STO, MRK, WET-23/24).
   Voordruk, vuldruk en pH zijn voorbeelden per fabrikant en model.
   ========================================================================== */

CURSUS.addModule({
  id: 'm03',
  nr: 3,
  deel: 1,
  titel: 'Water, druk en hydrauliek',
  ondertitel: 'Druk, stroming en de basis van diagnose.',
  niveau: 'Beginner',
  studietijd: 8,
  intro: 'Water, druk en stroming in een cv-installatie: van vuldruk en expansievat tot pompwerking en debiet. Drukverlies, lucht in het systeem en een verkeerd expansievat zijn klassieke storingsoorzaken, dus hier zit veel van je diagnosekracht.',
  inleiding: [
    'Een cv-installatie is een gesloten waterkring onder druk. Het water zet uit als het warm wordt, lucht en vuil veroorzaken storingen, en de pomp bepaalt samen met de weerstand van het leidingnet hoeveel water er stroomt. Wie begrijpt hoe druk, uitzetting, pomp en debiet samenwerken, weet bij een klacht meteen waar hij moet zoeken: lek, vat, pomp of water.',
    'Deze module loopt van de basis (druk en drukverschil) via vuldruk, expansievat en veiligheidsventiel naar de pomp, de waterkwaliteit en het berekenen van het overgedragen vermogen uit debiet en temperatuurverschil. Waarden uit handleidingen zijn voorbeelden per model: voordruk, vuldruk en pH verschillen per fabrikant. Je leert dus vooral de redenering en waar je het voorschrift opzoekt.'
  ],
  leerdoelen: [
    'Druk, drukverschil en stroming uit elkaar houden',
    'De juiste vuldruk en voordruk van het expansievat bepalen',
    'De werking van expansievat en veiligheidsventiel uitleggen en diagnosticeren',
    'Pompkarakteristiek en installatieweerstand aan elkaar koppelen',
    'Uit debiet en temperatuurverschil het overgedragen vermogen berekenen'
  ],
  examen: [
    {
      vraag: `Een ketel toont een waterdruk van 2,0 bar. Op de gasvoordrukmeetnippel van dezelfde ketel meet je 25 mbar. Welke bewering klopt?`,
      opties: [
        `De waterdruk is 8 keer zo hoog als de gasdruk`,
        `De waterdruk is 80 keer zo hoog als de gasdruk`,
        `De twee drukken zijn gelijk, want 25 mbar is 2,5 bar`,
        `De gasdruk is hoger dan de waterdruk`
      ],
      goed: 1,
      uitleg: `1 bar is 1000 mbar, dus 2,0 bar is 2000 mbar. Dat is 2000 / 25 = 80 keer zoveel. De gedachte dat 25 mbar gelijk is aan 2,5 bar is een verschuiving van een factor 100 die je nooit mag maken: water meet je in bar, gas in mbar.`
    },
    {
      vraag: `Een leidingnet heeft bij 300 l/h een drukval van 60 mbar. Het leidingnet blijft gelijk en de stroming is turbulent. Wat is de drukval ongeveer bij 900 l/h?`,
      opties: [`180 mbar`, `360 mbar`, `60 mbar`, `540 mbar`],
      goed: 3,
      uitleg: `Het debiet is 3 keer zo groot en de drukval volgt het kwadraat: 3 x 3 = 9 keer zoveel, dus 9 x 60 = 540 mbar. 180 mbar hoort bij een lineair verband, en dat past niet bij turbulente stroming.`
    },
    {
      vraag: `Het hoogste punt van een installatie ligt 12 m boven het aansluitpunt van het vat. Wat is de voordruk volgens de Flamco-formule (toeslag 0,2 bar, naar boven afronden op een veelvoud van 0,5 bar)?`,
      opties: [`1,5 bar`, `1,2 bar`, `2,0 bar`, `1,4 bar`],
      goed: 0,
      uitleg: `P_ST = 12 x 0,1 = 1,2 bar, plus 0,2 bar toeslag is 1,4 bar. Dat rond je naar boven af op een veelvoud van 0,5 bar: 1,5 bar. 1,4 bar is geen veelvoud van 0,5, en 1,2 bar vergeet de toeslag.`
    },
    {
      vraag: `Een extern vat heeft 1,5 bar voordruk. Vaillant vraagt een vuldruk van minstens 0,2 bar boven de tegendruk van het vat, en EN 12828 (via Flamco) noemt P0 + 0,3 bar. Welke vuldruk voldoet aan beide?`,
      opties: [`1,6 bar`, `1,7 bar`, `1,8 bar`, `1,5 bar`],
      goed: 2,
      uitleg: `Vaillant vraagt minstens 1,5 + 0,2 = 1,7 bar, EN 12828 vraagt 1,5 + 0,3 = 1,8 bar. Om aan allebei te voldoen, vul je tot minstens 1,8 bar. 1,7 bar voldoet alleen aan Vaillant. Controleer daarna wel of de handleiding van de ketel een bedrijfsvuldruk noemt waar 1,8 bar in past (bij Vaillant 1,0 tot 2,0 bar).`
    },
    {
      vraag: `Een installatie van 250 liter wordt van 10 naar 80 °C verwarmd (uitzetting ongeveer 3 %). De waterreserve is 6 liter, de voordruk 1,5 bar en de einddruk 2,7 bar (allebei overdruk). Hoeveel liter brutoinhoud heeft het vat minstens nodig?`,
      opties: [`ongeveer 23 liter`, `ongeveer 29 liter`, `ongeveer 13,5 liter`, `ongeveer 42 liter`],
      goed: 3,
      uitleg: `Ve = 250 x 0,03 = 7,5 liter. Absolute drukken: P0 = 2,5 bar en Pe = 3,7 bar, dus G = (3,7 - 2,5) / 3,7 = 0,32. V_bruto = (7,5 + 6) / 0,32 = 42 liter. 23 liter vergeet de waterreserve, 13,5 liter het nuttig effect, en 29 liter gebruikt het nuttig effect van 1,0 bar voordruk (0,46) in plaats van dat van 1,5 bar.`
    },
    {
      vraag: `Een klant meldt: koude installatie 1,2 bar, na opwarmen tot 80 °C stijgt de druk naar 2,9 bar, het veiligheidsventiel druppelt en de volgende ochtend staat de druk op 0,7 bar. Wat past bij de beschrijving van Flamco?`,
      opties: [
        `Een lek in een leiding onder de vloer verklaart zowel de druk tot 2,9 bar als de daling naar 0,7 bar, dus zoek eerst dat lek`,
        `Het vat vangt de uitzetting niet op: het ventiel blaast af en dat water ontbreekt bij afkoelen. Meet de voordruk en de vuldruk`,
        `Het ventiel opent te vroeg, want 2,9 bar ligt onder de 3 bar; vervang het ventiel en de klacht is opgelost`,
        `De pomp draait te hard en veroorzaakt de drukstijging; zet de pompstand lager en de druk normaliseert`
      ],
      goed: 1,
      uitleg: `Een lek geeft een gestage daling, geen stijging tot bijna 3 bar bij opwarmen. Hier bereikt de druk de openingsdruk van het ventiel, dus het ventiel doet zijn werk. Het afgeblazen water ontbreekt bij afkoelen, waardoor de druk onder de minimale waarde zakt. Alleen het ventiel vervangen laat de oorzaak bestaan.`
    },
    {
      vraag: `Een installatie van 6 m hoogte (hoogste punt boven het vat) heeft een vat waarvan je op het stikstofventiel 0,2 bar meet, bij een drukloos systeem met het vat afgesloten van de waterzijde. Wat concludeer je?`,
      opties: [
        `In orde: elke voordruk boven 0 bar is goed`,
        `Onbetrouwbaar: alleen de klop-test geeft zekerheid`,
        `Te laag: de berekende voordruk is 1,0 bar. Corrigeer het vat en vul daarna tot 1,3 bar`,
        `Te hoog: een voordruk moet altijd 0 bar zijn`
      ],
      goed: 2,
      uitleg: `Met Flamco: 6 x 0,1 = 0,6 bar, plus 0,2 bar toeslag is 0,8 bar, afgerond 1,0 bar. De meting is op de juiste manier gedaan, maar de waarde is te laag. Daarna vul je tot 1,0 + 0,3 = 1,3 bar. De klop-test is geen erkende methode en een voordruk van 0 bar past bij geen enkele installatie met hoogte.`
    },
    {
      vraag: `Bij 1000 l/h levert de pomp een restopvoerhoogte van 300 mbar. Het leidingnet heeft bij 1000 l/h een drukval van 200 mbar. Wat gebeurt er met het debiet?`,
      opties: [
        `Het debiet stijgt tot de drukval van het net gelijk is aan de opvoerhoogte: het werkpunt ligt boven 1000 l/h`,
        `Het debiet blijft 1000 l/h, want de pomp levert 300 mbar en dat is meer dan genoeg voor het leidingnet van 200 mbar`,
        `Het debiet daalt tot 500 l/h, want de pomp kan het overschot niet kwijt aan het net`,
        `Het debiet wordt nul, want een pomp die te sterk is voor het net slaat dicht`
      ],
      goed: 0,
      uitleg: `Er is bij 1000 l/h 100 mbar over. Dat overschot versnelt het water tot de drukval van het net (die met het debiet stijgt) gelijk is aan de opvoerhoogte van de pomp (die met het debiet daalt). Daar ligt het werkpunt. Het debiet blijft dus niet op 1000 l/h hangen.`
    },
    {
      vraag: `Bij 20 kW werkt een installatie met 570 l/h (ΔT 30 K). Je stelt de pomp zo in dat het debiet 860 l/h wordt (ΔT 20 K). Hoeveel keer zo groot wordt de drukval van het leidingnet ongeveer?`,
      opties: [`ongeveer 1,5 keer`, `ongeveer 2,3 keer`, `ongeveer 3,4 keer`, `ongeveer 1,0 keer`],
      goed: 1,
      uitleg: `De debietverhouding is 860 / 570 = 1,5. De drukval volgt het kwadraat: 1,5 x 1,5 = 2,3. 1,5 keer zou een lineair verband zijn en 3,4 keer een derde macht. Een groter debiet vraagt dus veel meer van de pomp dan het lijkt.`
    },
    {
      vraag: `Je vult een ATAG i-Serie op een installatie met een totaal vermogen van 24 kW en 600 liter waterinhoud. Het vulwater heeft een hardheid van 9 dH. Voldoet dat?`,
      opties: [
        `Ja: het venster is 1 tot 12 dH en 9 dH valt daar ruim binnen, dus vullen maar`,
        `Ja: bij een ATAG speelt hardheid geen rol zolang de pH tussen 6,0 en 8,5 blijft`,
        `Nee: de hardheid moet onder 1 dH zijn, dus je moet het vulwater eerst ontharden`,
        `Nee: bij 600 / 24 = 25 l/kW geldt 1 tot 7 dH, dus 9 dH is te hard`
      ],
      goed: 3,
      uitleg: `ATAG noemt 1 tot 12 dH voor een installatievolume onder 20 l/kW en 1 tot 7 dH vanaf 20 l/kW. Hier is het 25 l/kW, dus 1 tot 7 dH en 9 dH is te hard. Wie alleen naar het bekende venster van 1 tot 12 dH kijkt, mist de koppeling aan het installatievolume.`
    },
    {
      vraag: `De klant van een ATAG i-Serie wil de installatie vullen met demiwater, want dat is "het schoonste". Wat is de regel?`,
      opties: [
        `Dat mag: demiwater is het schoonst en bevat geen kalk, dus het is ideaal voor de warmtewisselaar`,
        `Dat mag als je de pH op 6,0 houdt, want dat is de ondergrens van het venster van ATAG`,
        `Dat mag niet: ATAG verbiedt demiwater als vulwater voor de i-Serie`,
        `Dat is verplicht bij hard water, om kalkaanslag in de warmtewisselaar te voorkomen`
      ],
      goed: 2,
      uitleg: `ATAG verbiedt grondwater, demiwater en gedestilleerd water als vulwater voor de i-Serie. Schoon in de zin van "zonder mineralen" is dus geen argument: het voorschrift van de fabrikant bepaalt. Bij andere merken kunnen de eisen anders zijn.`
    },
    {
      vraag: `Een installatie moet 15 kW afgeven met een ontwerp-ΔT van 20 K. De pomp levert in dit leidingnet maximaal 500 l/h. Wat is de situatie?`,
      opties: [
        `Dat lukt zonder gevolgen: ΔT blijft altijd 20 K`,
        `Er is 645 l/h nodig. Bij 500 l/h wordt ΔT ongeveer 26 K in plaats van 20 K`,
        `De pomp compenseert door de vuldruk te verhogen`,
        `De ketel kan dan geen 15 kW leveren, wat je niet kunt oplossen`
      ],
      goed: 1,
      uitleg: `Debiet nodig = 15.000 / (1,163 x 20) = 645 l/h. Bij 500 l/h is ΔT = 15.000 / (500 x 1,163) = 25,8 K, dus ongeveer 26 K. Het water neemt dan meer warmte per liter mee. Vuldruk verandert het debiet niet. Wil je terug naar 20 K, dan heb je meer debiet nodig: dat vraagt een hogere pompstand of minder weerstand (les 3.4).`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 3.1 */
{
  id: 'm03l01',
  nr: '3.1',
  titel: 'Druk, drukverschil en stroming',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt uitleggen wat druk en drukverschil zijn, drukeenheden omrekenen en zeggen waarom water alleen stroomt door een drukverschil.',
  videos: [
    { taal: 'nl', titel: 'Druk: pascal en bar uitgelegd (Natuurkunde van Helden)', yt: 'DeUnttPee48', duur: '±7 min, 2018' },
    { taal: 'nl', titel: 'De natuurkunde van een cv-installatie (WATT!? Natuurkunde)', yt: 'ZPdVxCmBMm4', duur: '±2 min, 2017' },
    { taal: 'en', titel: 'Flow and Pressure in Pipes Explained (Practical Engineering)', yt: 'ZQKpu-obzlU', duur: '±13 min, 2021' }
  ],
  tekst: `
## Wat is druk, en in welke eenheid?

Druk is kracht per oppervlak. De SI-eenheid is de pascal: 1 Pa is 1 newton per vierkante meter. Dat is heel weinig, dus in het vak gebruik je grotere eenheden.

| Eenheid | Gelijk aan | Waar je hem tegenkomt |
|---|---|---|
| 1 mbar | 100 Pa | gasdruk, drukval van ketel en radiatoren |
| 1 kPa | 10 mbar | sommige handleidingen geven gasdruk in kPa |
| 1 bar | 100 kPa = 1000 mbar | waterdruk, veiligheidsventiel |
| 1 m waterkolom | ongeveer 0,1 bar | hoogteverschil in de installatie |

Water meet je in bar, gas in mbar. Fabrikanten noemen als nominale aansluitdruk voor aardgas 25 mbar (G25.3) of 20 mbar (G20), bijvoorbeeld in de documenten van de Remeha Calenta Ace en de Intergas Kombi Kompakt HRE. Het veiligheidsventiel van een woninginstallatie opent meestal bij 3 bar. Dat is 3000 mbar, dus 120 keer zoveel als 25 mbar. Verwar de twee nooit: een fout van een factor 1000 in een eenheid is een gevaarlijke fout.

## Overdruk en absolute druk

De buitenlucht drukt zelf ook, ongeveer 1,0 bar. Een manometer toont meestal de **overdruk**: de druk boven de buitenlucht. In deze module is elke druk een overdruk, tenzij er absoluut bij staat. De formule voor het expansievat rekent wel met absolute druk: overdruk plus ongeveer 1,0 bar. Flamco rekent zo in zijn voorbeelden, met 1,0 bar als aanname voor de buitenlucht. Je ziet dat terug in les 3.3.

## Hoogte geeft druk

Water in een verticale leiding weegt en drukt op wat eronder zit. De druk door een waterkolom is p = ρ x g x h.

Voor 1 meter koud water (ρ = 1000 kg/m3, g = 9,81 m/s2):

p = 1000 x 9,81 x 1 = 9810 Pa = 98,1 mbar, dus ongeveer 0,1 bar.

Flamco rekent in zijn expansievatberekening met 0,1 bar per meter. Tien meter hoogteverschil is dus ongeveer 1 bar. Staat de manometer van de ketel op 1,6 bar (pomp uit) en zit een radiator 6 m hoger, dan staat daar ongeveer 1,6 - 0,6 = 1,0 bar. Die hoogte is de basis van les 3.2.

## Stroming: alleen door een drukverschil

!!! kern Een drukverschil zet water in beweging, druk alleen niet
Water stroomt alleen van een punt met hogere druk naar een punt met lagere druk. Twee punten op dezelfde hoogte met allebei 2,0 bar hebben geen stroming tussen zich, hoe hoog die druk ook is. De manometer laat zien hoeveel druk er staat, niet of het water stroomt.
!!!

In de installatie maakt de pomp het drukverschil. De weerstand van leidingen, radiatoren, kranen en de warmtewisselaar gebruikt dat drukverschil weer op. Die drukafname heet **drukval**. Bij turbulente stroming neemt de drukval ongeveer toe met het kwadraat van het debiet: verdubbel je het debiet, dan wordt de drukval ongeveer viermaal zo groot.

Stroming zie je dus niet aan de manometer. De Intergas Kombi Kompakt HRE heeft daarvoor een stromingssensor. De Remeha Calenta bewaakt de doorstroming via temperatuurmetingen. Als monteur meet je stroming meestal via het temperatuurverschil, zie les 3.6.

## Rekenvoorbeeld: eenheden en verhoudingen

Remeha geeft voor de Calenta 25s en 28c een restopvoerhoogte van 295 mbar bij een temperatuurverschil van 20 K. Dit is een voorbeeld: het verschilt per model. Omrekenen:

- 295 mbar x 100 Pa/mbar = 29.500 Pa = 29,5 kPa = 0,295 bar
- Als hoogte: 0,295 bar / 0,1 bar per m = 2,95 m, dus ongeveer 3 meter waterkolom

Wat restopvoerhoogte precies is, leer je in les 3.4.

Nog een voorbeeld met de kwadratenregel. Stel dat een radiatorcircuit bij 400 l/h een drukval van 30 mbar heeft (aanname). Bij 800 l/h is het debiet 2 keer zo groot, dus de drukval is 2 x 2 = 4 keer zo groot: 30 x 4 = 120 mbar. Een pomp die het circuit bij 800 l/h moet doorstromen, moet dus veel meer drukverschil leveren dan bij 400 l/h.
`,
  checklist: [
    'Ik reken bar, kPa, mbar en Pa om zonder te gokken',
    'Ik weet dat 1 meter hoogteverschil in water ongeveer 0,1 bar geeft',
    'Ik kan uitleggen waarom een manometer niet laat zien of water stroomt',
    'Ik weet dat de drukval ongeveer met het kwadraat van het debiet toeneemt',
    'Ik onderscheid overdruk en absolute druk'
  ],
  quiz: [
    {
      vraag: `Twee punten op dezelfde hoogte in een volledig gevuld leidingnet hebben allebei 2,0 bar. Wat betekent dat voor het water tussen die punten?`,
      opties: [
        `Het water stroomt van het ene naar het andere punt, want 2,0 bar is een hoge druk`,
        `Het water stroomt naar het punt dat het dichtst bij de ketel ligt`,
        `Er is geen drukverschil, dus er is geen stroming tussen die punten`,
        `Het water stroomt zolang de druk boven 1,0 bar blijft`
      ],
      goed: 2,
      uitleg: `Stroming vraagt een drukverschil. Hoe hoog de druk zelf is, maakt niet uit: gelijke druk op gelijke hoogte betekent geen stroming. De populaire fout is denken dat veel druk gelijkstaat aan veel stroming.`
    },
    {
      vraag: `Op de gasvoordrukmeetnippel meet je 25 mbar en op de waterzijde staat 1,5 bar. Hoeveel keer hoger is de waterdruk dan de gasdruk?`,
      opties: [`6 keer`, `60 keer`, `600 keer`, `1,5 keer`],
      goed: 1,
      uitleg: `1,5 bar is 1500 mbar. Dan is 1500 / 25 = 60. Wie 1 bar voor 10 mbar of 100 mbar aanziet, komt op 6 of 600 uit. Onthoud: 1 bar is 1000 mbar.`
    },
    {
      vraag: `De manometer op de ketel toont 1,6 bar (pomp uit, ketel en vat op dezelfde hoogte). Een radiator zit 6 m boven de ketel. Welke statische druk staat ongeveer bij die radiator?`,
      opties: [`2,2 bar`, `1,6 bar`, `0,6 bar`, `1,0 bar`],
      goed: 3,
      uitleg: `Elke meter hoogte kost ongeveer 0,1 bar: 6 m is 0,6 bar. Bij de radiator staat dus ongeveer 1,6 - 0,6 = 1,0 bar. 2,2 bar krijg je als je de hoogte optelt in plaats van aftrekt. 1,6 bar zou betekenen dat hoogte niets uitmaakt.`
    },
    {
      vraag: `Een radiatorcircuit heeft bij 500 l/h een drukval van 40 mbar. Het leidingnet blijft gelijk en de stroming is turbulent. Wat is de drukval ongeveer bij 1000 l/h?`,
      opties: [`160 mbar`, `80 mbar`, `320 mbar`, `40 mbar`],
      goed: 0,
      uitleg: `De drukval neemt toe met het kwadraat van het debiet. Het debiet is 2 keer zo groot, dus de drukval is 2 x 2 = 4 keer zo groot: 4 x 40 = 160 mbar. 80 mbar zou een lineair verband zijn, en dat klopt niet bij turbulente stroming.`
    },
    {
      vraag: `Een expansievat heeft 1,0 bar voordruk en 2,7 bar einddruk, allebei overdruk. Met welke waarden reken je in de formule voor het nuttig effect, als je 1,0 bar buitenlucht aanneemt?`,
      opties: [`1,0 bar en 2,7 bar`, `2,0 bar en 3,7 bar`, `0,0 bar en 1,7 bar`, `1,1 bar en 2,8 bar`],
      goed: 1,
      uitleg: `De gaswet van Boyle werkt met absolute druk. Je telt dus 1,0 bar op bij beide waarden: 2,0 bar en 3,7 bar. Flamco rekent zo. Rekenen met de overdrukken geeft een verkeerd nuttig effect.`
    }
  ],
  kaarten: [
    { voor: `Hoeveel kPa, mbar en Pa is 1 bar?`, achter: `100 kPa = 1000 mbar = 100.000 Pa.` },
    { voor: `Hoeveel druk geeft 1 meter hoogteverschil in water?`, achter: `Ongeveer 0,1 bar (Flamco rekent zo). Precies: 1000 x 9,81 x 1 = 9810 Pa.` },
    { voor: `Wanneer stroomt water door een leiding?`, achter: `Alleen als er een drukverschil is tussen begin en eind. Druk alleen zegt niets over stroming.` },
    { voor: `Wat gebeurt er met de drukval als het debiet verdubbelt (gelijk leidingnet, turbulent)?`, achter: `Die wordt ongeveer viermaal zo groot.` },
    { voor: `Wat is het verschil tussen overdruk en absolute druk?`, achter: `Overdruk is de druk boven de buitenlucht. Absoluut is overdruk plus ongeveer 1,0 bar. Het expansievat reken je in absolute druk.` },
    { voor: `Een manometer op de ketel staat op 1,8 bar. Zegt dat of het water stroomt?`, achter: `Nee. Een manometer toont druk, geen drukverschil of debiet. Stroming meet je via een debietsensor of het temperatuurverschil.` }
  ],
  bronnen: ['HYD-04', 'HYD-06', 'HYD-07', 'HYD-10', 'HYD-21', 'KET-27', 'INS-24', 'INS-25']
},

/* ------------------------------------------------------------------ 3.2 */
{
  id: 'm03l02',
  nr: '3.2',
  titel: 'Waterdruk in een cv-installatie',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uit de statische hoogte de voordruk van het vat en de vuldruk van de installatie bepalen en zeggen waarom fabrikanten daarin verschillen.',
  videos: [
    { taal: 'nl', titel: 'Werking van het Flexcon expansievat (Flamco)', yt: 'fiQtDufr-kQ', duur: '±4 min, 2011' },
    { taal: 'nl', titel: 'Een expansievat controleren en vervangen (John Visser cv-optimalisatie)', yt: 'NTfNujKsSDo', duur: '±7 min, 2020' },
    { taal: 'en', titel: 'Checking the Pre-Charge of an Expansion Vessel (Flamco Flexcontrol)', yt: 'KanqVBXFUOk', duur: '±3 min, 2017' }
  ],
  tekst: `
## Waarom je de hoogte van de installatie nodig hebt

In een gevulde installatie neemt de druk per meter hoogte met ongeveer 0,1 bar af (les 3.1). Onderin staat dus meer druk dan bovenin. Op het hoogste punt moet er nog overdruk zijn, anders trekt de installatie lucht aan. Daarom hangt de juiste druk af van de **statische hoogte**: het hoogteverschil tussen het aansluitpunt van het expansievat en het hoogste punt van de installatie.

## Van hoogte naar voordruk

Volgens Flamco, op basis van EN 12828, is de voordruk van het vat:

P0 = P_ST + P_D + P_Z (+ P_pomp)

- **P_ST** is de statische druk: 0,1 bar per meter hoogte.
- **P_D** is de dampdruk. In een woninginstallatie waarin het water onder het kookpunt blijft, laat je die weg. Flamco schrijft hem in zijn berekening niet uit.
- **P_Z** is een druktoeslag van minstens 0,2 bar.
- **P_pomp** telt alleen in bepaalde opstellingen mee. Kijk daarvoor in de berekening van de fabrikant.

De uitkomst rond je naar boven af op een veelvoud van 0,5 bar. Een vat op zolder ligt dicht bij het hoogste punt, dus P_ST is klein. Flamco geeft bij een zolderopstelling de voorkeur aan 0,5 bar voordruk.

!!! kern Voordruk en vuldruk zijn twee verschillende getallen
De voordruk is de gasdruk in het vat: je meet hem op het stikstofventiel, zonder waterdruk op het membraan (les 3.3). De vuldruk is de waterdruk waarmee je de koude installatie vult. Die ligt hoger dan de voordruk. Flamco noemt op basis van EN 12828 een vuldruk van P0 + 0,3 bar. Vaillant eist een vuldruk van minstens 0,2 bar boven de tegendruk van het membraanexpansievat. Onthoud dus niet "vuldruk is statische druk plus 0,2 of 0,3": dat slaat de voordruk over.
!!!

## Rekenvoorbeeld: hoogste punt 6 m boven het vat

1. P_ST = 6 m x 0,1 bar/m = 0,6 bar
2. P0 = 0,6 + 0,2 = 0,8 bar
3. Naar boven afronden op een veelvoud van 0,5 bar: voordruk = 1,0 bar
4. Vuldruk volgens Flamco en EN 12828: 1,0 + 0,3 = 1,3 bar
5. Vuldruk volgens Vaillant: minstens 1,0 + 0,2 = 1,2 bar, dus 1,3 bar voldoet ook

Controle: zitten ketel en vat op dezelfde hoogte en staat de manometer op 1,3 bar, dan staat op het hoogste punt (pomp uit) ongeveer 1,3 - 0,6 = 0,7 bar overdruk. Dat is positief, dus er wordt geen lucht aangetrokken. De einddruk bij opwarmen moet bovendien onder het veiligheidsventiel blijven, zie les 3.3.

## Fabrikanten verschillen

ATAG geeft voor de i-Serie een tabel met de voordruk bij de installatiehoogte boven het vat. Vergelijk die met de Flamco-berekening (toeslag 0,2 bar, afronden op 0,5 bar):

| Hoogte boven het vat | ATAG i-Serie | Flamco-berekening |
|---|---|---|
| 5 m | 0,5 bar | 0,5 + 0,2 = 0,7, dus 1,0 bar |
| 10 m | 1,0 bar | 1,0 + 0,2 = 1,2, dus 1,5 bar |
| 15 m | 1,5 bar | 1,5 + 0,2 = 1,7, dus 2,0 bar |

Beide komen uit een fabrikantbron en ze verschillen 0,5 bar. Er is dus niet een enkel juist getal: je volgt de tabel of berekening die bij jouw ketel en vat hoort.

Ook de werkbereiken van ketels verschillen. Dit zijn voorbeelden per model:

| Model | Waterdruk volgens de handleiding |
|---|---|
| Remeha Calenta | minimaal 0,8 bar (daaronder verschijnt een symbool), geadviseerde vuldruk 1,5 tot 2 bar, maximaal 3,0 bar |
| Remeha Tzerra Ace | minimaal 0,8 bar, geadviseerd 1,5 tot 2 bar, bijvullen tot 2 bar en na het ontluchten opnieuw controleren |
| Vaillant ecoTEC plus VHR | bedrijfsvuldruk 1,0 tot 2,0 bar, minimaal 0,80 bar houden, vuldruk minstens 0,2 bar boven de tegendruk van het vat |
| ATAG i-Serie | code 117 bij een druk boven 3 bar |

De vuldruk van 1,3 bar uit het rekenvoorbeeld hoort bij de vatberekening. Remeha adviseert voor de Calenta 1,5 tot 2 bar. Botsen de twee, dan loop je de berekening na en gok je niet.

## Bijvullen in de praktijk

Een bewoner mag zelf cv-water bijvullen, zie [les 1.2](les:m01l02). Je klant heeft dat dus vaak al gedaan voor je komt. Vraag daarom hoe vaak hij bijvult en hoeveel: een installatie die steeds druk verliest, heeft een oorzaak.
`,
  checklist: [
    'Ik kan de statische druk uit de hoogte berekenen (0,1 bar per meter)',
    'Ik kan met de Flamco-formule een voordruk bepalen en afronden op 0,5 bar',
    'Ik weet dat vuldruk boven de voordruk ligt en dat fabrikanten daar een eigen marge voor noemen',
    'Ik zoek voor het werkbereik de handleiding van de ketel op, met minimum en maximum'
  ],
  quiz: [
    {
      vraag: `Het hoogste punt van een installatie ligt 8 m boven het aansluitpunt van het vat. Wat is de voordruk volgens de Flamco-formule (toeslag 0,2 bar, naar boven afronden op 0,5 bar)?`,
      opties: [`0,8 bar`, `1,3 bar`, `1,0 bar`, `1,5 bar`],
      goed: 2,
      uitleg: `P_ST = 8 x 0,1 = 0,8 bar. Met de toeslag: 0,8 + 0,2 = 1,0 bar. Dat is al een veelvoud van 0,5, dus de voordruk is 1,0 bar. 0,8 bar vergeet de toeslag, 1,3 bar is de vuldruk (voordruk plus 0,3) en geen voordruk.`
    },
    {
      vraag: `Een vat heeft 1,0 bar voordruk. Een monteur vult de koude installatie tot 1,1 bar. Wat klopt?`,
      opties: [
        `Dat is goed: de vuldruk ligt boven de voordruk`,
        `Dat is te hoog: vuldruk en voordruk moeten gelijk zijn`,
        `Dat is goed: de ketel geeft pas onder 0,8 bar een waarschuwing`,
        `Dat is te laag: Vaillant vraagt minstens 1,2 bar en EN 12828 via Flamco 1,3 bar`
      ],
      goed: 3,
      uitleg: `De vuldruk moet een marge boven de voordruk hebben: Vaillant vraagt minstens 0,2 bar, Flamco op basis van EN 12828 0,3 bar. Met 1,1 bar zit het vat bij koude installatie bijna leeg en heeft het te weinig waterreserve. De 0,8 bar is de ondergrens van de ketel en zegt niets over wat het vat nodig heeft.`
    },
    {
      vraag: `De manometer op de ketel staat op 1,3 bar (pomp uit, ketel en vat op dezelfde hoogte). Een radiator zit 6 m boven de ketel. Welke overdruk staat er ongeveer bij die radiator?`,
      opties: [`0,7 bar`, `1,3 bar`, `1,9 bar`, `0,6 bar`],
      goed: 0,
      uitleg: `Elke meter hoogte kost ongeveer 0,1 bar: 6 m is 0,6 bar. Dus 1,3 - 0,6 = 0,7 bar. 1,9 bar krijg je door de hoogte op te tellen. 0,6 bar is alleen het hoogteverlies, niet de druk die overblijft.`
    },
    {
      vraag: `ATAG noemt bij 5 m een voordruk van 0,5 bar, terwijl de Flamco-berekening op 1,0 bar uitkomt. Hoe ga je daarmee om?`,
      opties: [
        `Een van de twee heeft een rekenfout gemaakt, dus je kiest de hoogste waarde om veilig te zijn`,
        `De fabrikanten hanteren een andere methode en toeslag, dus je volgt de tabel of berekening bij jouw ketel en vat`,
        `Flamco is een vatfabrikant en ATAG een ketelfabrikant, dus je volgt altijd de berekening van Flamco`,
        `Het verschil komt door het weer en de buitentemperatuur, want water zet in de winter anders uit`
      ],
      goed: 1,
      uitleg: `Beide waarden komen uit een fabrikantbron en zijn met een eigen methode bepaald: Flamco rekent met een toeslag van minstens 0,2 bar en rondt naar boven af op 0,5 bar, ATAG geeft een tabel. Er is geen algemeen juist getal. Rekenfout is dus een te snelle conclusie.`
    },
    {
      vraag: `Een klant meldt dat zijn Remeha Calenta een lagedrukwaarschuwing geeft bij 0,6 bar. Wat is een verstandige eerste stap?`,
      opties: [
        `Bijvullen tot 3 bar, want dan hoeft de klant nooit meer bij te vullen en blijft de druk hoog genoeg`,
        `Het veiligheidsventiel vervangen, want dat laat vermoedelijk druk weglopen zodra de installatie afkoelt`,
        `Bijvullen naar de geadviseerde 1,5 tot 2 bar, ontluchten, de druk opnieuw controleren en vragen hoe vaak het gebeurt`,
        `De voordruk van het vat naar 3 bar brengen, zodat het vat de druk beter vasthoudt bij afkoelen en bijvullen niet meer nodig is`
      ],
      goed: 2,
      uitleg: `Remeha noemt 0,8 bar als minimum en 1,5 tot 2 bar als geadviseerde vuldruk. De druk zakt na ontluchten vaak licht, dus controleer opnieuw. 3 bar is de maximale bedrijfsdruk en de openingsdruk van het ventiel: dan blaast de installatie bij opwarmen af. Vraag ook hoe vaak het gebeurt, want structureel drukverlies heeft een oorzaak.`
    }
  ],
  kaarten: [
    { voor: `Wat is de voordrukformule volgens Flamco (EN 12828)?`, achter: `P0 = P_ST + P_D + P_Z (+ P_pomp), met P_ST = 0,1 bar per meter en P_Z minstens 0,2 bar, naar boven afgerond op 0,5 bar.` },
    { voor: `Hoe groot is de koude vuldruk volgens EN 12828 (via Flamco)?`, achter: `P_ini = P0 + 0,3 bar.` },
    { voor: `Welke marge eist Vaillant tussen vuldruk en vat (ecoTEC plus VHR)?`, achter: `De vuldruk moet minstens 0,2 bar boven de tegendruk van het membraanexpansievat liggen.` },
    { voor: `Bereken de voordruk voor een hoogste punt 6 m boven het vat (Flamco).`, achter: `0,6 + 0,2 = 0,8 bar, afgerond 1,0 bar. De vuldruk is dan 1,0 + 0,3 = 1,3 bar.` },
    { voor: `Wat noemt ATAG voor de i-Serie als voordruk bij 5, 10 en 15 m hoogte?`, achter: `0,5 bar, 1,0 bar en 1,5 bar. Dat verschilt van de Flamco-berekening: per fabrikant.` },
    { voor: `Welke waterdrukken noemt Remeha voor de Calenta?`, achter: `Minimaal 0,8 bar, geadviseerde vuldruk 1,5 tot 2 bar, maximaal 3,0 bar. Voorbeeld: het verschilt per model.` },
    { voor: `Wat is het verschil tussen voordruk en vuldruk?`, achter: `Voordruk is de gasdruk in het vat zonder waterdruk. Vuldruk is de waterdruk in de koude installatie en ligt hoger.` }
  ],
  bronnen: ['WET-24', 'HYD-05', 'HYD-10', 'HYD-11', 'HYD-12', 'HYD-13', 'HYD-14', 'HYD-16', 'HYD-17', 'HYD-32', 'HYD-33', 'HYD-34', 'INS-42', 'INS-43', 'INS-44']
},

/* ------------------------------------------------------------------ 3.3 */
{
  id: 'm03l03',
  nr: '3.3',
  titel: 'Uitzetting, expansievat en veiligheidsventiel',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt uitleggen waarom een expansievat nodig is, hoe je de voordruk controleert en wat een afblazend veiligheidsventiel je vertelt.',
  videos: [
    { taal: 'nl', titel: 'Veiligheidsventiel Prescor: bescherming tegen overdruk (Flamco)', yt: 'cB8fmmuDO2g', duur: '±2 min, 2020' },
    { taal: 'nl', titel: 'Werking van een expansievat, kort uitgelegd (John Visser cv-optimalisatie)', yt: 'L9_t4M7SDuU', duur: '±1 min, 2020' },
    { taal: 'en', titel: 'How Expansion Vessels Work in Under 3 Minutes (Altecnic)', yt: '-qE8H3Lr0UE', duur: '±3 min, 2020' }
  ],
  tekst: `
## Water zet uit als het warm wordt

Een gesloten installatie zit vol water. Warmt dat op, dan zet het uit, en water laat zich vrijwel niet samendrukken. Zonder extra ruimte loopt de druk dan snel op. Flamco noemt voor 100 liter water dat van 10 naar 80 °C opwarmt een uitzetting van ongeveer 3 %, dus 3 liter. Uit de tabel van Flamco (ten opzichte van 4 °C):

| Watertemperatuur | Volumevermeerdering |
|---|---|
| 70 °C | 2,22 % |
| 80 °C | 2,82 % |
| 90 °C | 3,47 % |
| 100 °C | 4,16 % |

Rekenen vanaf 10 °C in plaats van 4 °C scheelt slechts 0,03 procentpunt.

## Hoe het membraanexpansievat werkt

In het vat scheidt een membraan de waterzijde van een gaskussen. Het gaskussen staat onder de **voordruk**. Zet het water uit, dan duwt het het membraan op en wordt het gas samengedrukt. Bij afkoelen duwt het gas het water terug. Dit volgt de wet van Boyle, met absolute druk: het nuttig effect is G = (Pe - P0) / Pe. De brutoinhoud van het vat is V_bruto = (Ve + Vwr) / G. Ve is de uitzetting en Vwr de **waterreserve**: water dat ook bij koude installatie in het vat blijft staan, zodat het vat bij afkoelen niet droog komt. Flamco rekent standaard 0,5 % van de inhoud met een minimum van 3 liter en adviseert in de praktijk minstens 6 liter. De waterreserve wordt bepaald door het verschil tussen vuldruk en voordruk.

!!! kern De voordruk is de sleutel, en je meet hem op het ventiel
Het vat werkt alleen goed als de voordruk klopt met de installatie en de vuldruk daarbij past. Voordruk meet je op het stikstofvulventiel, in onbelaste toestand (vat afgesloten van de waterzijde) en bij omgevingstemperatuur.
!!!

## Rekenvoorbeeld: installatie van 100 liter

Aannames: uitzetting 10 tot 80 °C, voordruk 1,0 bar, einddruk 2,7 bar (allebei overdruk), waterreserve 6 liter.

1. Uitzetting: Ve = 100 l x 0,03 = 3 l
2. Absolute drukken: P0 = 1,0 + 1,0 = 2,0 bar en Pe = 2,7 + 1,0 = 3,7 bar
3. Nuttig effect: G = (3,7 - 2,0) / 3,7 = 0,46
4. Brutoinhoud: V_bruto = (3 + 6) / 0,46 = 19,6 l
5. Je kiest het eerstvolgende vat uit de reeks van de fabrikant: hier 24 liter

Vatmaten verschillen per fabrikant. Met overdrukken in plaats van absolute drukken krijg je een te hoog nuttig effect en dus een te klein vat.

## De voordruk meten

1. Laat de installatie afkoelen en maak hem drukloos. Het water kan heet zijn.
2. Sluit het vat af van de waterzijde, zodat er geen waterdruk op het membraan staat.
3. Meet op het stikstofvulventiel van het vat.
4. Vergelijk met de berekende of voorgeschreven voordruk. Corrigeer volgens de instructie van de vatfabrikant en vul daarna de installatie tot de vuldruk.

Kloppen op het vat (boven hol, onder massief) is geen erkende methode. Meet de voordruk op het ventiel.

## Het veiligheidsventiel

Het veiligheidsventiel van een woninginstallatie opent meestal bij 3 bar. Remeha noemt voor de Calenta 3,0 bar als maximale waterbedrijfsdruk. Flamco rekent met een maximale einddruk van minstens 10 % onder de openingsdruk: bij 3 bar is dat 2,7 bar. In normaal bedrijf hoort het ventiel dus niet af te blazen. Doet het dat wel, dan is de druk tot ongeveer 3 bar gekomen en moet je uitzoeken waarom.

!!! gevaar Haal de beveiliging nooit weg
Sluit de afvoer van een druppelend of afblazend ventiel niet af en verwijder het ventiel niet. Het begrenst de druk op 3 bar, de maximale waterbedrijfsdruk van deze ketels. Zonder ventiel kan de druk verder oplopen dan de installatie aankan. Zoek de oorzaak van het afblazen.

Sluit het ventiel ook niet af van het toestel: tussen het toestel en het veiligheidsventiel mag geen afsluiter of vernauwing zitten. Intergas eist dat voor de Kombi Kompakt HRE en plaatst het ventiel binnen 500 mm van het toestel. Monteer je serviceafsluiters in de cv-leidingen, dan horen volgens Remeha (Calenta) de vul- en aftapkraan en het expansievat tussen de afsluiter en de ketel. Kunnen thermostaatkranen de aanvoer geheel van de retour afsluiten, dan schrijft Remeha een bypass voor of het expansievat in de aanvoerleiding. Dit zijn voorschriften van deze toestellen: lees altijd de handleiding van het toestel dat je voor je hebt.
!!!

## Druk stijgt of druk zakt: twee richtingen

Flamco beschrijft twee mogelijkheden. **Te veel water** in het systeem, of een te hoge vuldruk, laat de einddruk te snel oplopen: het ventiel opent onnodig en de ketel kan in storing vallen. ATAG meldt bij een druk boven 3 bar code 117. Ook een voordruk die ver onder de voorgeschreven waarde ligt kan hiertoe leiden, want dan zit er bij koude installatie al veel meer water in het vat dan de berekening aannam. **Te weinig water** laat het vat bij afkoelen droog staan: de druk valt weg, er kunnen onderdruk en luchtproblemen ontstaan en de pomp kan cavitereren.

Bij een zakkende druk noemt Vaillant voor F.022 onder meer te weinig water, een defecte druksensor of vulvoorziening, een defect intern expansievat en lucht in het product. Vervang niet op verdenking: lees de druk koud en warm af, meet de voordruk en kijk of het ventiel en de afvoer nat zijn. Op de storingzoeker-pagina staat een casus over een installatie waarvan de waterdruk elke week zakt, waarin je dit doorloopt.
`,
  checklist: [
    'Ik kan de uitzetting van een installatie berekenen met ongeveer 3 % voor 10 tot 80 °C',
    'Ik kan uitleggen wat voordruk, vuldruk, waterreserve en nuttig effect zijn',
    'Ik meet de voordruk op het ventiel, in onbelaste toestand en niet met een klop-test',
    'Ik weet dat een afblazend ventiel betekent dat de druk tot ongeveer 3 bar is gekomen',
    'Ik dop of vervang een veiligheidsventiel niet zonder eerst de oorzaak te vinden'
  ],
  quiz: [
    {
      vraag: `Een installatie bevat 150 liter water en wordt van 10 naar 80 °C verwarmd. Hoeveel liter zet het water ongeveer uit?`,
      opties: [`1,5 liter`, `4,5 liter`, `15 liter`, `45 liter`],
      goed: 1,
      uitleg: `Flamco noemt ongeveer 3 % voor 10 tot 80 °C: 150 x 0,03 = 4,5 liter (met 2,8 % is het 4,2 liter). 15 liter zou 10 % zijn en 1,5 liter 1 %. Een expansievat moet dus enkele liters kunnen opnemen, geen tientallen.`
    },
    {
      vraag: `Een vat heeft 1,0 bar voordruk en de einddruk is 2,7 bar (allebei overdruk). Hoe groot is het nuttig effect G?`,
      opties: [`0,63`, `0,37`, `0,27`, `0,46`],
      goed: 3,
      uitleg: `Je rekent met absolute druk: P0 = 2,0 bar en Pe = 3,7 bar. G = (3,7 - 2,0) / 3,7 = 0,46. Wie de overdrukken invult, krijgt een te hoge waarde. Het vat neemt dus maar 46 % van zijn inhoud aan water op.`
    },
    {
      vraag: `Een installatie heeft 200 liter inhoud. Aannames: uitzetting 3 %, waterreserve 6 liter, G = 0,46. Hoeveel liter brutoinhoud heeft het vat minstens nodig?`,
      opties: [`12 liter`, `13 liter`, `26 liter`, `9 liter`],
      goed: 2,
      uitleg: `Ve = 200 x 0,03 = 6 liter. V_bruto = (Ve + Vwr) / G = (6 + 6) / 0,46 = 26 liter. 12 liter vergeet het nuttig effect, 13 liter vergeet de waterreserve. Het echte vat kies je uit de reeks van de fabrikant, dus iets groter dan 26 liter.`
    },
    {
      vraag: `Hoe controleer je de voordruk van een expansievat?`,
      opties: [
        `Drukloos systeem, vat afgesloten van de waterzijde, meten op het stikstofvulventiel bij omgevingstemperatuur`,
        `Op het vat kloppen: boven hol en onder massief betekent dat het in orde is`,
        `De waterdruk op de manometer van de ketel aflezen als de ketel op 80 °C staat`,
        `Het vat laten leeglopen en het gewicht vergelijken met een nieuw vat`
      ],
      goed: 0,
      uitleg: `De voordruk is de gasdruk in onbelaste toestand en die meet je op het ventiel van de gaszijde. De klop-test is geen erkende methode. De manometer van de ketel toont de waterdruk, niet de gasdruk van het vat.`
    },
    {
      vraag: `Een klant heeft een druppelend veiligheidsventiel. Tijdens het opwarmen loopt de druk op van 1,3 naar 2,9 bar. Wat is de meest logische volgende stap?`,
      opties: [
        `Het ventiel vervangen: dat opent duidelijk te vroeg`,
        `De voordruk van het vat meten en de vuldruk controleren`,
        `De afvoer van het ventiel afdoppen zodat het niet meer druppelt`,
        `De vuldruk verhogen naar 3 bar`
      ],
      goed: 1,
      uitleg: `De druk komt echt bijna bij de 3 bar waarbij het ventiel opent. Het ventiel doet dus zijn werk en het probleem zit in de opvang van de uitzetting: voordruk en vuldruk meten. Alleen het ventiel vervangen lost dat niet op, en afdoppen haalt de beveiliging weg. Meer vuldruk maakt het erger.`
    },
    {
      vraag: `Wat is de waterreserve van een membraanexpansievat?`,
      opties: [
        `Het water dat bij het opwarmen extra uitzet`,
        `Water dat je in het vat bijvult om de voordruk te verhogen`,
        `Water dat ook bij koude installatie in het vat blijft, zodat het bij afkoelen niet droog komt te staan`,
        `Het water in de leidingen tussen ketel en vat`
      ],
      goed: 2,
      uitleg: `De waterreserve is het water dat bij koude vuldruk al in het vat zit. Het is niet de uitzetting: die komt erbovenop. Zonder waterreserve staat het vat bij afkoelen droog en valt de druk weg.`
    }
  ],
  kaarten: [
    { voor: `Hoeveel zet water uit van 10 naar 80 °C?`, achter: `Ongeveer 3 % (Flamco). Een installatie van 100 liter geeft dus ongeveer 3 liter extra volume.` },
    { voor: `Wat zijn het nuttig effect en de brutoinhoud van een membraanvat?`, achter: `Nuttig effect G = (Pe - P0) / Pe in absolute druk (Pe = einddruk, P0 = voordruk). Brutoinhoud V_bruto = (Ve + Vwr) / G (Ve = uitzetting, Vwr = waterreserve).` },
    { voor: `Hoe groot is de waterreserve volgens Flamco?`, achter: `Standaard 0,5 % van de installatie-inhoud met minimaal 3 liter. In de praktijk adviseert Flamco minstens 6 liter.` },
    { voor: `Hoe meet je de voordruk van een expansievat?`, achter: `Op het stikstofvulventiel, in onbelaste toestand (vat afgesloten van de waterzijde) en bij omgevingstemperatuur. De klop-test is geen erkende methode.` },
    { voor: `Bij welke druk opent het veiligheidsventiel en welke einddruk rekent Flamco?`, achter: `Meestal bij 3 bar. Flamco rekent een einddruk van minstens 10 % eronder: 2,7 bar.` },
    { voor: `Wat doet te veel water of een te hoge vuldruk met de druk?`, achter: `De einddruk loopt te snel op, het ventiel opent onnodig en de ketel kan in storing vallen.` },
    { voor: `Wat doet te weinig water in het vat?`, achter: `Het vat staat bij afkoelen droog: de druk valt weg, onderdruk en lucht ontstaan en de pomp kan cavitereren.` },
    { voor: `Waarom sluit je een druppelend veiligheidsventiel niet af?`, achter: `Het begrenst de druk op 3 bar. Zonder ventiel loopt de druk verder op. Zoek eerst de oorzaak van de te hoge druk.` }
  ],
  bronnen: ['HYD-01', 'HYD-02', 'HYD-03', 'HYD-04', 'HYD-05', 'HYD-06', 'HYD-07', 'HYD-08', 'HYD-09', 'HYD-10', 'HYD-12', 'HYD-15', 'HYD-17', 'INS-44', 'STO-12', 'MRK-01']
},

/* ------------------------------------------------------------------ 3.4 */
{
  id: 'm03l04',
  nr: '3.4',
  titel: 'De pomp: opvoerhoogte, weerstand en werkpunt',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe pompkarakteristiek en installatieweerstand samen het debiet bepalen en wat je bij te weinig of te veel doorstroming instelt.',
  videos: [
    { taal: 'nl', titel: 'Pompkarakteristiek uitgelegd (Willem van Treslong, MTE Rotterdam)', yt: 'iwAtPyvscuY', duur: '±11 min, 2021' },
    { taal: 'nl', titel: 'De pompgrafiek: theorie versus praktijk (Oveducon)', yt: 'ss0NVjK3GTg', duur: '±5 min, 2019' },
    { taal: 'en', titel: 'Pump Chart Basics Explained (The Engineering Mindset)', yt: 'U8iWNaDuUek', duur: '±13 min, 2020' }
  ],
  tekst: `
## Wat de pomp doet

De pomp zorgt voor stroming door een drukverschil te maken (les 3.1). Dat drukverschil heet de **opvoerhoogte** en druk je uit in mbar, kPa of meter waterkolom. De statische druk in de installatie volgt uit vuldruk en hoogte (les 3.2). De pomp draait daar alleen een drukverschil overheen, zodat het water rondgaat.

## Twee krommen en een snijpunt

- De **pompkarakteristiek** laat zien hoeveel opvoerhoogte de pomp levert bij een bepaald debiet. Bij een centrifugaalpomp daalt de opvoerhoogte als het debiet toeneemt. Remeha toont in de handleiding van de Calenta de pompkarakteristieken (H-Q). Een modulerende pomp heeft geen enkele kromme maar een reeks: bij elk toerental een andere.
- De **installatiekarakteristiek** laat zien hoeveel drukval het leidingnet, de radiatoren en de ketel veroorzaken bij een bepaald debiet. Bij een gelijkblijvend leidingnet neemt die drukval ongeveer toe met het kwadraat van het debiet (aanname: turbulente stroming).
- Het **werkpunt** ligt waar de twee krommen elkaar snijden. Daar levert de pomp precies de opvoerhoogte die het leidingnet opvreet.

Het begrip **restopvoerhoogte** hoort daarbij: de opvoerhoogte die overblijft voor het leidingnet en de radiatoren, nadat de weerstand van de ketel zelf is afgetrokken. Remeha noemt voor de Calenta 25s en 28c een restopvoerhoogte van 295 mbar bij een temperatuurverschil van 20 K. Dit is een voorbeeld, het verschilt per model.

!!! kern Pomp en installatie samen bepalen het debiet
Het debiet volgt uit het snijpunt van de pompkarakteristiek en de installatiekarakteristiek, niet uit de pomp alleen. Neemt de weerstand toe (kranen dicht, vervuiling), dan schuift het werkpunt naar een lager debiet. Zet je de pomp hoger of lager, dan verschuift de pompkromme en dus ook het werkpunt.
!!!

## Rekenvoorbeeld: waarom een groter temperatuurverschil de pomp ontlast

Een installatie van 20 kW heeft bij een temperatuurverschil (ΔT) van 20 K een debiet van ongeveer 860 l/h en bij 30 K ongeveer 570 l/h. Hoe je dat berekent, leer je in les 3.6. Stel dat het leidingnet bij 860 l/h een drukval van 80 mbar heeft (aanname). Bij 570 l/h geldt:

- debietverhouding: 570 / 860 = 0,66
- drukval: 80 mbar x 0,66 x 0,66 = 80 x 0,44 = ongeveer 35 mbar

Een derde minder debiet betekent dus meer dan de helft minder drukval. Welke ΔT bij jouw toestel hoort, zoek je in de handleiding op: Remeha noemt voor de Calenta een restopvoerhoogte bij 20 K.

## Wat je als monteur tegenkomt

- **Pompstand of pompsnelheid.** Bij de Intergas Kombi Kompakt HRE stel je de pompstand in op het gewenste maximale vermogen en de waterzijdige weerstand. Een te lage pompstand staat in de handleiding als een van de oorzaken van "CV komt niet op temperatuur", naast een te lage installatiedruk, te weinig open radiatoren (minimaal 2 of 3) en vervuiling.
- **Parameters.** Remeha laat bij stromingsgeluid de maximale pompsnelheid verlagen (na het ontluchten) en bij onvoldoende doorstroming van radiatoren de minimale pompsnelheid verhogen, via installateursparameters. De Calenta heeft een modulerende pomp die de besturing regelt op het temperatuurverschil tussen aanvoer en retour.
- **Bypass.** De Vaillant ecoTEC plus heeft een hoogefficiënte pomp en een overstroomklep (bypass). Werking en instelling staan per model in de handleiding.
- **Tweede pomp.** Intergas waarschuwt dat een vloerverwarmingsverdeler met eigen pomp die niet hydraulisch neutraal is aangesloten, ongewenste circulatie over het toestel kan veroorzaken. Oplossingen zijn indirect hydraulisch neutraal aansluiten of een elektrische afsluiter (tweewegklepset). Kies bij een elektrische afsluiter de positie zo dat het veiligheidsventiel en het expansievat niet van het toestel kunnen worden geïsoleerd, en verwijder bij een tweewegklep de interne terugslagklep in de retourbuis (Intergas Kombi Kompakt HRE).
- **Onderdruk.** Te weinig water of druk laat het vat droog staan en de pomp kan cavitereren (les 3.3).

Bij het plaatsen of vervangen van een toestel moet het afgiftesysteem waterzijdig worden ingeregeld en gedocumenteerd. Dat is een wettelijke verplichting, ook al eist de BRL dat niet zelf. Een pompstand die je op gevoel kiest, past daar niet bij.
`,
  checklist: [
    'Ik kan uitleggen wat een pompkarakteristiek en een installatiekarakteristiek zijn',
    'Ik weet dat het werkpunt op het snijpunt van de twee krommen ligt',
    'Ik weet dat de drukval ongeveer met het kwadraat van het debiet toeneemt',
    'Ik zoek pompstand en parameters op in de handleiding van het toestel',
    'Ik controleer bij te weinig doorstroming eerst ontluchting, open kranen en vervuiling'
  ],
  quiz: [
    {
      vraag: `Wat bepaalt het debiet in een cv-installatie?`,
      opties: [
        `Alleen het vermogen van de pomp`,
        `Alleen de stand van de radiatorkranen`,
        `Het snijpunt van de pompkarakteristiek en de installatiekarakteristiek`,
        `De ingestelde aanvoertemperatuur op de thermostaat`
      ],
      goed: 2,
      uitleg: `Het werkpunt ligt waar de opvoerhoogte van de pomp gelijk is aan de drukval van het leidingnet. De pomp alleen bepaalt het niet: bij meer weerstand levert dezelfde pomp minder debiet. De kranen zijn een deel van de weerstand, maar ook de pompkromme telt mee.`
    },
    {
      vraag: `Bij hetzelfde vermogen daalt het debiet van 860 naar 570 l/h doordat je op een groter temperatuurverschil werkt. Wat gebeurt er ongeveer met de drukval van het leidingnet?`,
      opties: [
        `Die blijft gelijk, want het leidingnet zelf verandert niet`,
        `Die daalt naar ongeveer twee derde, want het debiet daalt ook met een derde`,
        `Die daalt maar een paar procent, omdat de pomp dezelfde opvoerhoogte houdt`,
        `Die daalt naar ongeveer 0,44 keer, dus meer dan de helft`
      ],
      goed: 3,
      uitleg: `De drukval volgt het kwadraat van het debiet: (570 / 860)^2 = 0,66^2 = 0,44. Wie twee derde antwoordt, rekent lineair, maar dat past niet bij turbulente stroming.`
    },
    {
      vraag: `Na het ontluchten hoor je stromingsgeluid in de radiatoren van een Remeha Calenta. Welke aanpassing noemt Remeha?`,
      opties: [
        `De minimale pompsnelheid verhogen via de installateursparameters van de ketel`,
        `De maximale pompsnelheid verlagen via de installateursparameters`,
        `De vuldruk verhogen tot 3 bar, zodat het water rustiger door de leidingen stroomt`,
        `Het expansievat bijpompen tot de druk stabiel blijft`
      ],
      goed: 1,
      uitleg: `Remeha laat bij stromingsgeluid de maximale pompsnelheid verlagen, na het ontluchten. De minimale pompsnelheid verhoog je juist bij onvoldoende doorstroming. Meer vuldruk lost geen geluid op en 3 bar is de bovengrens.`
    },
    {
      vraag: `De ketel bereikt de ingestelde aanvoertemperatuur, maar de radiatoren op de bovenverdieping blijven lauw. Alles is ontlucht en de kranen staan open. Wat is een logische stap bij een Remeha Calenta?`,
      opties: [
        `De minimale pompsnelheid via de installateursparameters verhogen`,
        `De vuldruk verhogen naar 3 bar zodat er meer druk op de radiatoren staat`,
        `De maximale pompsnelheid verlagen`,
        `Het expansievat bijpompen`
      ],
      goed: 0,
      uitleg: `Remeha noemt voor onvoldoende doorstroming van radiatoren het verhogen van de minimale pompsnelheid. Meer vuldruk verandert het drukverschil dat de pomp maakt niet. Het verlagen van de maximale snelheid is de aanpak bij stromingsgeluid en verergert het lauwe probleem.`
    },
    {
      vraag: `Een vloerverwarmingsverdeler met eigen pomp is niet hydraulisch neutraal aangesloten. Wat kan er gebeuren en wat lost het op?`,
      opties: [
        `Het expansievat raakt leeg doordat de extra pomp water wegtrekt; je vult de installatie bij tot 2 bar en ontlucht opnieuw`,
        `De ketel krijgt te weinig gasdruk door de extra pomp; je verhoogt de gasvoordruk op het gasblok`,
        `Ongewenste circulatie over het toestel; je sluit indirect hydraulisch neutraal aan of plaatst een elektrische afsluiter`,
        `De vloerverwarming wordt te warm door de extra pomp; je verlaagt de vuldruk van de installatie`
      ],
      goed: 2,
      uitleg: `Intergas waarschuwt voor ongewenste circulatie over het toestel als een tweede pomp niet hydraulisch neutraal is aangesloten. Twee pompen in een net beïnvloeden elkaar. Vulling, gasdruk en vuldruk hebben er niets mee te maken.`
    }
  ],
  kaarten: [
    { voor: `Wat laat de pompkarakteristiek zien?`, achter: `De opvoerhoogte die de pomp levert bij een bepaald debiet (H-Q). Bij een centrifugaalpomp daalt die bij meer debiet.` },
    { voor: `Hoe verloopt de drukval van een leidingnet bij toenemend debiet?`, achter: `Ongeveer met het kwadraat van het debiet (turbulente stroming, gelijk leidingnet).` },
    { voor: `Waar ligt het werkpunt van de pomp?`, achter: `Op het snijpunt van de pompkarakteristiek en de installatiekarakteristiek.` },
    { voor: `Wat is restopvoerhoogte?`, achter: `De opvoerhoogte die overblijft voor leidingnet en radiatoren na aftrek van de weerstand van de ketel zelf.` },
    { voor: `Wat doet Remeha bij stromingsgeluid in de radiatoren (Calenta)?`, achter: `De maximale pompsnelheid verlagen via installateursparameters, na het ontluchten.` },
    { voor: `Wat doet Remeha bij onvoldoende doorstroming van radiatoren (Calenta)?`, achter: `De minimale pompsnelheid verhogen via installateursparameters.` },
    { voor: `Waarom kan een tweede pomp in het net problemen geven (Intergas)?`, achter: `Niet hydraulisch neutraal aangesloten kan ze ongewenste circulatie over het toestel veroorzaken.` }
  ],
  bronnen: ['KET-24', 'KET-25', 'KET-26', 'HYD-15', 'HYD-21', 'HYD-22', 'HYD-23', 'HYD-24', 'HYD-25', 'HYD-35', 'STO-10', 'INS-38']
},

/* ------------------------------------------------------------------ 3.5 */
{
  id: 'm03l05',
  nr: '3.5',
  titel: 'Waterkwaliteit, lucht en vuil',
  duur: 25,
  type: 'les',
  leerdoel: 'Je weet welke invloed waterkwaliteit, lucht en vuil op een ketel hebben, waarom fabrikanten eigen eisen stellen en in welke volgorde je spoelt, vult en ontlucht.',
  videos: [
    { taal: 'nl', titel: 'Automatische ontluchter voor cv-installaties: SpiroVent (Feenstra)', yt: 'L_67473W_-k', duur: '±1 min, 2015' },
    { taal: 'nl', titel: 'Vuilafscheider voor cv-installaties: SpiroTrap MB3 (Feenstra)', yt: 'nSscTM0Luqk', duur: '±1 min, 2015' },
    { taal: 'en', titel: 'Cleaning a Magnetic Filter for Central Heating Sludge (Mark Ballard, Professional Heating Engineer)', yt: 'dwbFx0wG3lk', duur: '±6 min, 2018' }
  ],
  tekst: `
## Het water is onderdeel van de installatie

Het cv-water raakt elke plek van de warmtewisselaar, de pomp en de radiatoren. Kalk, magnetiet (ijzeroxide uit staal) en lucht zorgen voor storingen en slijtage. Fabrikanten stellen daarom eisen aan het vulwater en verbinden er garantie aan: ATAG laat de garantie vervallen als de installatie niet is gespoeld of het vulwater buiten de specificatie valt.

## Er is geen algemeen pH-venster

Fabrikanten noemen verschillende grenzen. Dit zijn voorbeelden per model, geen algemene waarden:

| Model | pH | Andere eisen uit de handleiding |
|---|---|---|
| Remeha Calenta | 7 tot 9 onbehandeld, 7 tot 8,5 behandeld | hardheid 0,5 tot 20,0 dH, afhankelijk van het totaal opgestelde vermogen; geen chemische middelen zonder overleg met Remeha |
| ATAG i-Serie | 6,0 tot 8,5 | geleidbaarheid maximaal 2500 µS/cm bij 20 °C, ijzer maximaal 0,2 ppm, hardheid 1 tot 12 dH (onder 20 l/kW) of 1 tot 7 dH (vanaf 20 l/kW), maximaal 5 % bijvullen per jaar, geen grondwater, demi-water of gedestilleerd water |
| Vaillant ecoTEC plus VHR | 8,2 tot 10,0, gemeten in afgetapt water bij 25 °C | daarbuiten reinigen en conditioneren; hardheid van vul- en bijvulwater meten; conditioneren als de totale vul- en bijvulhoeveelheid het drievoudige van het nominale installatievolume overschrijdt |
| Nefit ProLine NxT | 7,0 tot 9,5 | oude uitgave uit 2014 |

Een pH van 7,2 is dus goed voor een Calenta en te laag voor een ecoTEC plus. Waarom de vensters verschillen, staat niet in de bronnen die deze cursus gebruikt.

!!! kern Het voorschrift van de fabrikant bepaalt, niet een vuistregel
Er is geen algemeen pH-venster voor cv-water. Zoek de eisen op bij het model dat je vult of onderhoudt en voeg geen chemische middelen toe zonder dat het voorschrift dat toestaat. Remeha eist overleg voordat je antivries, inhibitor of pH-middel toevoegt.
!!!

## Spoelen, vullen, ontluchten: de volgorde

1. **Spoelen voor het aansluiten.** Remeha eist dat een nieuwe ketel pas wordt aangesloten nadat de installatie is gereinigd en doorgespoeld met minimaal 3 keer de systeeminhoud. ATAG laat spoelen om magnetiet, fitproducten en snijolie te verwijderen en adviseert een filter.
2. **Vullen met geschikt water.** Meet de hardheid van vul- en bijvulwater (Vaillant) en houd je aan de eisen uit de tabel. Alle radiatorkranen staan open. Remeha laat de Calenta binnen 30 minuten vullen, omdat het ontluchtingsprogramma anders alsnog start.
3. **Ontluchten.** Ontlucht de hoogste radiator. Vaillant gebruikt daarvoor testprogramma P.000, de Calenta doorloopt een ontluchtingsprogramma van ongeveer 3 minuten.
4. **Druk opnieuw controleren.** Remeha vult de Tzerra Ace bij tot 2 bar en controleert na het ontluchten opnieuw.
5. **Vastleggen.** ATAG adviseert een logboek van watertype en toegevoegde middelen.

Een bewoner mag zelf ontluchten en bijvullen, zie [les 1.2](les:m01l02).

## Lucht en vuil als oorzaak

Lucht in de installatie neem je serieus. Flamco noemt onderdruk, luchtproblemen en een pomp die kan cavitereren bij te weinig water, en Vaillant noemt lucht in het product bij lage waterdruk (F.022). Vers water brengt bovendien zuurstof en kalk in het systeem, zegt ATAG.

Voor vuil geldt: controleer op magnetiet. Vaillant gebruikt daarvoor een magneetstaaf, laat reinigen en een magnetietafscheider inbouwen als er magnetiet wordt gevonden. Intergas noemt vervuiling van de wisselaar of installatie als een van de oorzaken van "CV komt niet op temperatuur". Op de tapwaterzijde hangt kalkafzetting af van de waterhardheid, het tapgedrag en de ingestelde temperatuur: Vaillant zegt dat een hogere temperatuur de kans op kalkuitval vergroot.

## Rekenvoorbeeld: hoeveel bijvullen is te veel?

ATAG noemt meer dan 5 % bijvullen per jaar een structureel probleem. Een installatie van 120 liter mag dus ongeveer 120 x 0,05 = 6 liter per jaar bijvullen. Vult een klant elke maand 2 liter bij, dan is dat 24 liter per jaar: 24 / 120 = 20 %, viermaal de grens. Rekent Vaillant de eerste vulling mee (de handleiding noemt de totale vul- en bijvulhoeveelheid), dan is het drievoudige van het installatievolume, 360 liter, na ongeveer 10 jaar bereikt: 120 + 10 x 24 = 360 liter. Structureel bijvullen is dus geen onderhoud maar een symptoom: zoek het lek of de drukoorzaak (les 3.3).
`,
  checklist: [
    'Ik weet dat er geen algemeen pH-venster bestaat en zoek de eisen per model op',
    'Ik spoel voor het aansluiten, vul met geschikt water en ontlucht daarna',
    'Ik controleer na het ontluchten de druk opnieuw',
    'Ik voeg zonder voorschrift geen chemische middelen toe',
    'Ik herken meer dan 5 % bijvullen per jaar als teken van een probleem'
  ],
  quiz: [
    {
      vraag: `Je meet in het afgetapte cv-water een pH van 7,2. Wat is de juiste conclusie?`,
      opties: [
        `Dat is altijd goed: neutraal water past bij elke ketel, dus je hoeft de handleiding niet te raadplegen`,
        `Dat hangt af van het model: goed voor een Remeha Calenta, te laag voor een Vaillant ecoTEC plus VHR`,
        `Dat is altijd te laag: cv-water moet basisch zijn, dus je voegt een pH-verhoger toe`,
        `Dat maakt niet uit zolang de hardheid klopt, want de pH speelt bij een ketel geen rol`
      ],
      goed: 1,
      uitleg: `Remeha noemt voor de Calenta 7 tot 9, Vaillant vraagt voor de ecoTEC plus VHR 8,2 tot 10,0. Dezelfde meting is dus goed bij het ene model en te laag bij het andere. Er is geen algemeen venster, dus ga altijd naar de handleiding.`
    },
    {
      vraag: `Bij een ATAG i-Serie met 150 liter installatie vult de klant 12 liter per jaar bij. Wat betekent dat?`,
      opties: [
        `Dat is normaal onderhoud: een installatie verliest altijd wat water en 12 liter per jaar is gewoon`,
        `Dat is te weinig: een installatie hoort regelmatig vers water te krijgen om corrosie tegen te gaan`,
        `Alleen het expansievat moet worden bijgepompt, want dat is de enige oorzaak van drukverlies`,
        `Dat is 8 %, meer dan 5 %: een structureel probleem, want vers water brengt zuurstof en kalk mee`
      ],
      goed: 3,
      uitleg: `5 % van 150 liter is 7,5 liter, en 12 liter is 12 / 150 = 8 %. ATAG noemt meer dan 5 % bijvullen per jaar een structureel probleem. Bijvullen als gewoon onderhoud zien, is de populaire fout.`
    },
    {
      vraag: `Welke volgorde klopt bij het in gebruik nemen van een nieuwe ketel op een bestaande installatie?`,
      opties: [
        `Spoelen, aansluiten, vullen met geschikt water, ontluchten, druk controleren`,
        `Ketel aansluiten, vullen, ontluchten, en pas daarna de installatie spoelen als er klachten zijn`,
        `Vullen, ontluchten, ketel aansluiten, en de druk verhogen tot 3 bar voor de zekerheid`,
        `Ontluchten, spoelen, vullen zonder de hardheid te meten, en de druk niet opnieuw controleren`
      ],
      goed: 0,
      uitleg: `Remeha en Vaillant laten eerst spoelen (Remeha minimaal 3 keer de systeeminhoud) voor je de ketel aansluit en vult, daarna ontlucht je en controleer je de druk. Achteraf spoelen betekent dat vuil door de nieuwe warmtewisselaar gaat.`
    },
    {
      vraag: `Een klant wil een inhibitor toevoegen aan het water van zijn Remeha Calenta. Wat is de regel?`,
      opties: [
        `Altijd toegestaan zolang de pH tussen 7 en 9 blijft`,
        `Alleen toegestaan met een magnetietafscheider`,
        `Alleen in overleg met Remeha: zonder overleg mag je geen chemische middelen toevoegen`,
        `Verplicht bij hard water`
      ],
      goed: 2,
      uitleg: `Remeha verbiedt antivries, inhibitoren en pH-middelen zonder overleg. Een goede pH-waarde is dus geen toestemming. Een afscheider is een mechanisch onderdeel en staat los van chemische middelen.`
    },
    {
      vraag: `Een installatie van 120 liter wordt elke maand 2 liter bijgevuld. Welke uitspraak klopt?`,
      opties: [
        `Dat is 20 % per jaar en dus meer dan de 5 % die ATAG als grens noemt`,
        `Dat is 2 % per jaar en dus prima, want 2 liter is weinig voor een installatie`,
        `Dat is 5 % per jaar, precies de grens, dus net nog toegestaan volgens ATAG`,
        `Dat is 10 % per jaar, dus vlak onder de grens die ATAG als structureel probleem noemt`
      ],
      goed: 0,
      uitleg: `2 liter x 12 = 24 liter per jaar. 24 / 120 = 0,20 = 20 %, viermaal de 5 % waar ATAG een structureel probleem noemt. Wie 2 liter met 2 % verwart, vergeet de tijdseenheid.`
    }
  ],
  kaarten: [
    { voor: `Welke pH eist Remeha voor het cv-water van de Calenta?`, achter: `7 tot 9 voor onbehandeld water en 7 tot 8,5 voor behandeld water. Voorbeeld: het verschilt per model.` },
    { voor: `Welke pH vraagt ATAG voor de i-Serie?`, achter: `6,0 tot 8,5, met maximaal 5 % bijvullen per jaar. Voorbeeld: het verschilt per model.` },
    { voor: `Welke pH-grenzen hanteert Vaillant bij de ecoTEC plus VHR?`, achter: `Onder 8,2 of boven 10,0 (afgetapt water bij 25 °C) reinigen en conditioneren. Voorbeeld: het verschilt per model.` },
    { voor: `Is er een algemeen pH-venster voor cv-water?`, achter: `Nee. Fabrikanten verschillen: altijd het voorschrift van het toestel volgen.` },
    { voor: `Hoeveel spoelt Remeha voor het aansluiten van een nieuwe ketel?`, achter: `Minimaal 3 keer de systeeminhoud (Calenta Ace).` },
    { voor: `Wat is de volgorde bij het in gebruik nemen van een nieuwe ketel?`, achter: `Spoelen, vullen met geschikt water, ontluchten, druk opnieuw controleren.` },
    { voor: `Wat is volgens ATAG te veel bijvullen?`, achter: `Meer dan 5 % van het installatievolume per jaar wijst op een structureel probleem.` },
    { voor: `Hoe controleert Vaillant op magnetiet?`, achter: `Met een magneetstaaf. Bij magnetiet: reinigen en een magnetietafscheider inbouwen.` }
  ],
  bronnen: ['WET-23', 'WET-24', 'HYD-15', 'HYD-18', 'HYD-26', 'HYD-27', 'HYD-28', 'HYD-30', 'HYD-31', 'INS-39', 'INS-40', 'INS-41', 'INS-42', 'INS-43', 'STO-10', 'STO-12', 'TAP-13']
},

/* ------------------------------------------------------------------ 3.6 */
{
  id: 'm03l06',
  nr: '3.6',
  titel: 'Delta T en debiet',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uit debiet en temperatuurverschil het overgedragen vermogen berekenen, en omgekeerd, en een installatie daarmee beoordelen.',
  videos: [
    { taal: 'nl', titel: 'Rekenen met warmte: vuistregels en rekenvoorbeelden (Harold Halewijn)', yt: 'PLLhbkXBQ04', duur: '±14 min, 2021' },
    { taal: 'nl', titel: 'Alles over radiatoren berekenen (Ketel Klets)', yt: 'H4_ZQCjsMII', duur: '±10 min, 2021' },
    { taal: 'en', titel: 'Mass Flow Rate Explained for Heating Engineers (Heat Geek)', yt: 'i2YSRlasgEQ', duur: '±10 min, 2020' }
  ],
  tekst: `
## Vermogen, debiet en temperatuurverschil horen bij elkaar

Het water neemt in de ketel warmte op en geeft die af in de radiatoren. Het temperatuurverschil tussen aanvoer en retour heet **ΔT** (delta T). Hoeveel vermogen het water transporteert, hangt af van het debiet en van ΔT: P = m x c x ΔT (voor de soortelijke warmte zie les 2.1). Voor water levert dat een handige formule:

!!! kern Debiet (l/h) = vermogen (W) / (1,163 x ΔT)
De 1,163 komt uit de soortelijke warmte van water: c = 4,19 kJ/(kg K) = 1,163 Wh/(kg K), met 1 liter water als 1 kg. Dat is een afronding: bij 70 tot 80 °C zit je er 2 tot 3 % naast. Ken je twee van de drie grootheden (vermogen, debiet, ΔT), dan kun je de derde berekenen.
!!!

In liters per minuut is dat: P (kW) ≈ 0,07 x debiet (l/min) x ΔT (K), want 1,163 x 60 / 1000 = 0,0698.

## Rekenvoorbeelden

**Debiet uit vermogen en ΔT.** Een ketel levert 20 kW.

- Bij ΔT = 20 K: 20.000 / (1,163 x 20) = 860 l/h
- Bij ΔT = 30 K: 20.000 / (1,163 x 30) = 573 l/h, ongeveer 570 l/h

**ΔT uit vermogen en debiet.** Intergas noemt bij de Kombi Kompakt HRE een minimale doorstroomhoeveelheid van 510 l/h bij 17,8 kW. Bij dat minimum is ΔT = 17.800 / (510 x 1,163) = 30 K. Ook de minimale doorstroomhoeveelheden van 155 tot 1150 l/h bij 5,4 tot 40,9 kW in dezelfde handleiding komen uit op ongeveer 30 K. Remeha noemt voor de Calenta een restopvoerhoogte bij 20 K. Welke ΔT bij jouw toestel hoort, zoek je in de handleiding op.

**Tapwater.** Een CW4-toestel moet volgens Kiwa minstens 7,5 l/min van 60 °C leveren, bij koud water van 10 °C (zo noemt Intergas het in zijn monobloc-handleiding). Het water warmt dus 50 K op: P = 0,07 x 7,5 x 50 = ongeveer 26 kW. Zo zie je dat tapwater veel vermogen vraagt, ook al is het debiet klein.

## Een installatie beoordelen met ΔT

Een ketel meet aanvoer en retour met sensoren en Remeha regelt de pomp van de Calenta op het temperatuurverschil. Hoe je de waarden bij jouw model uitleest, staat in de handleiding. Vervolgens vergelijk je ΔT met wat het toestel bij dat vermogen hoort.

| Wat je ziet (bij bekend vermogen) | Wat het betekent |
|---|---|
| ΔT veel groter dan het ontwerp, ketel warm, radiatoren lauw | te weinig debiet: pompstand te laag, kranen dicht, lucht of vuil |
| ΔT veel kleiner dan het ontwerp bij hoog vermogen | veel debiet: pompstand te hoog, mogelijk stromingsgeluid |

Let op: ΔT zegt alleen iets bij een bekend vermogen. Volgens de formule is ΔT = P / (debiet x 1,163): bij hetzelfde debiet geeft een lager vermogen (de ketel moduleert terug) een kleiner ΔT. Beoordeel dus bij vollast of bij een bekend vermogen, en noteer dat erbij.

Bij het plaatsen of vervangen van een toestel moet het afgiftesysteem waterzijdig worden ingeregeld en gedocumenteerd. ΔT en debiet zijn daar het gereedschap voor. In les 3.4 zag je welke instellingen (pompstand, parameters) je daarvoor hebt.

## ΔT en condensatie

Een lagere retourtemperatuur is gunstig voor een condenserende ketel. Het dauwpunt van het rookgas van aardgas ligt bij gangbare instelling rond 54 tot 56 °C (afgeleid, het hangt af van de luchtovermaat). Komt het retourwater daaronder, dan condenseert er waterdamp en wordt de condensatiewarmte benut. De Remeha Calenta 25s levert bij 25,0 kW (Hi) 24,8 kW bij regime 80/60 (aanvoer/retour in °C) en 25,5 kW bij 50/30: ongeveer 99 % tegenover 102 %.

Voorbeeld: bij een aanvoer van 70 °C is de retour 50 °C bij ΔT = 20 K en 40 °C bij ΔT = 30 K. In beide gevallen ligt de retour onder het dauwpunt, maar bij 40 °C condenseert er meer. Bij dezelfde aanvoertemperatuur geeft een groter ΔT dus niet alleen minder pompwerk (les 3.4), maar ook meer condensatie.
`,
  checklist: [
    'Ik kan uit vermogen en ΔT het debiet berekenen, en uit debiet en ΔT het vermogen',
    'Ik weet waar de 1,163 vandaan komt en dat het een afronding is',
    'Ik beoordeel ΔT alleen bij een bekend vermogen',
    'Ik weet dat een te groot ΔT bij vollast op te weinig debiet wijst',
    'Ik zoek de ΔT en de minimale doorstroming van het toestel op in de handleiding'
  ],
  quiz: [
    {
      vraag: `Een ketel levert 24 kW bij een ΔT van 20 K. Welk debiet hoort daarbij?`,
      opties: [`ongeveer 515 l/h`, `ongeveer 1030 l/h`, `ongeveer 2060 l/h`, `ongeveer 1 l/h`],
      goed: 1,
      uitleg: `Debiet = 24.000 / (1,163 x 20) = 1032 l/h. 515 l/h hoort bij een ΔT van 40 K en 2060 l/h bij 10 K. Wie het vermogen in kW invult (24 in plaats van 24.000), komt op ongeveer 1 l/h: reken in watt.`
    },
    {
      vraag: `Een ketel levert 12 kW bij een debiet van 600 l/h. Hoe groot is ΔT ongeveer?`,
      opties: [`ongeveer 7 K`, `ongeveer 34 K`, `ongeveer 51 K`, `ongeveer 17 K`],
      goed: 3,
      uitleg: `ΔT = 12.000 / (600 x 1,163) = 17,2 K. Controleer je antwoord door terug te rekenen: 600 l/h x 1,163 x 17,2 K is ongeveer 12.000 W. Wie het vermogen in kW invult (12 in plaats van 12.000), komt op een veel te klein getal.`
    },
    {
      vraag: `Een ketel draait op 20 kW. De aanvoer is 80 °C en de retour 45 °C. De fabrikant noemt een ontwerp-ΔT van 20 K. Wat is het meest waarschijnlijk?`,
      opties: [
        `Te weinig debiet: controleer pompstand, open kranen, lucht en vuil`,
        `Te veel debiet: de pompstand staat te hoog`,
        `Te weinig gasdruk`,
        `Het expansievat heeft een te lage voordruk`
      ],
      goed: 0,
      uitleg: `ΔT is 80 - 45 = 35 K, veel groter dan 20 K. Het debiet is dan 20.000 / (1,163 x 35) = 491 l/h, terwijl 860 l/h hoort bij 20 K. De pomp levert dus te weinig water door het net. Gasdruk en voordruk veranderen het debiet niet.`
    },
    {
      vraag: `Een klant klaagt over stromingsgeluid. Je leest een ΔT van 12 K af. Mag je nu concluderen dat er te veel debiet is?`,
      opties: [
        `Ja, een ΔT onder 20 K wijst altijd op te veel debiet`,
        `Nee, een ΔT van 12 K is voor elke ketel normaal`,
        `Niet zonder het vermogen te kennen: bij hetzelfde debiet geeft een lager vermogen een kleiner ΔT`,
        `Nee, ΔT zegt niets over het debiet`
      ],
      goed: 2,
      uitleg: `ΔT = P / (debiet x 1,163). Bij een laag vermogen (de ketel moduleert terug) hoort bij hetzelfde debiet een kleiner ΔT. Je moet dus ΔT bij bekend vermogen beoordelen, bij voorkeur bij vollast, en de ontwerp-ΔT van het toestel kennen. ΔT zegt wel iets over het debiet, maar alleen samen met het vermogen.`
    },
    {
      vraag: `Een toestel moet 7,5 l/min tapwater van 60 °C leveren, met koud water van 10 °C. Welk vermogen gaat naar het water, ongeveer?`,
      opties: [`ongeveer 2,6 kW`, `ongeveer 13 kW`, `ongeveer 26 kW`, `ongeveer 52 kW`],
      goed: 2,
      uitleg: `Het water warmt 50 K op: P = 0,07 x 7,5 x 50 = 26 kW. 13 kW hoort bij 25 K opwarming en 2,6 kW bij een tiende van het debiet. Je ziet dat tapwater veel vermogen vraagt.`
    },
    {
      vraag: `Bij een aanvoer van 70 °C werkt een installatie met ΔT 20 K (retour 50 °C) of ΔT 30 K (retour 40 °C). Het dauwpunt van het rookgas ligt rond 55 °C. Welke uitspraak klopt?`,
      opties: [
        `Alleen bij ΔT 30 K condenseert de ketel`,
        `Bij beide condenseert de ketel, bij de lagere retour van 40 °C meer`,
        `Bij beide condenseert de ketel niet, want de aanvoer is boven het dauwpunt`,
        `Het debiet maakt niets uit voor condensatie`
      ],
      goed: 1,
      uitleg: `Het retourwater bepaalt of de warmtewisselaar onder het dauwpunt komt. 50 en 40 °C liggen beide onder 55 °C. Hoe lager de retour, hoe meer waterdamp condenseert en hoe hoger het rendement op onderwaarde. De aanvoertemperatuur is niet de bepalende factor.`
    }
  ],
  kaarten: [
    { voor: `Welke formule geeft het debiet bij water?`, achter: `Debiet (l/h) = vermogen (W) / (1,163 x ΔT).` },
    { voor: `Welk debiet hoort bij 20 kW met ΔT 20 K en met ΔT 30 K?`, achter: `Ongeveer 860 l/h en ongeveer 570 l/h.` },
    { voor: `Waar komt de 1,163 in de formule vandaan?`, achter: `Uit de soortelijke warmte van water: 4,19 kJ/(kg K) = 1,163 Wh/(kg K), met 1 liter als 1 kg (fout ongeveer 2 tot 3 % bij 70 tot 80 °C).` },
    { voor: `Hoe reken je het vermogen uit een debiet in l/min?`, achter: `P (kW) ≈ 0,07 x debiet (l/min) x ΔT (K).` },
    { voor: `Intergas noemt bij de Kombi Kompakt HRE een minimale doorstroomhoeveelheid van 510 l/h bij 17,8 kW. Welk ΔT hoort daarbij?`, achter: `ΔT = 17.800 / (510 x 1,163) = 30 K. Bij minder debiet zou ΔT groter worden. Voorbeeld, model HRE: het verschilt per toestel.` },
    { voor: `Wat betekent een veel te groot ΔT bij vollast?`, achter: `Te weinig debiet: controleer pompstand, kranen, lucht en vuil.` },
    { voor: `Waarom beoordeel je ΔT alleen bij een bekend vermogen?`, achter: `Omdat ΔT = P / (debiet x 1,163): bij hetzelfde debiet geeft een lager vermogen een kleiner ΔT.` },
    { voor: `Welk vermogen gaat naar 7,5 l/min tapwater van 10 naar 60 °C?`, achter: `Ongeveer 26 kW (0,07 x 7,5 x 50).` }
  ],
  bronnen: ['HYD-22', 'HYD-23', 'HYD-24', 'KET-24', 'KET-29', 'REG-19', 'VER-16', 'TAP-04', 'INS-38', 'STO-10']
}

  ]
});
