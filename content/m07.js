/* ==========================================================================
   m07.js - Module 7: Afgiftesystemen
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
   ========================================================================== */

CURSUS.addModule({
  id: 'm07',
  nr: 7,
  deel: 1,
  titel: 'Afgiftesystemen',
  ondertitel: 'Wat de ketel levert, moet de afgifte kwijt kunnen.',
  niveau: 'Gemiddeld',
  studietijd: 8,
  intro: 'Radiatoren, convectoren en vloerverwarming: hoe ze warmte afgeven, welke temperatuur ze nodig hebben en hoe je ze combineert met een ketel of warmtepomp. Zo beoordeel en optimaliseer je een afgiftesysteem dat past bij de warmtebron.',
  leerdoelen: [
    'Radiatoren en convectoren beoordelen op vermogen en temperatuurregime',
    'Uitleggen waarom een lagere aanvoertemperatuur het rendement van de ketel verhoogt',
    'De opbouw en werking van vloerverwarming beschrijven',
    'De verdeler, regeling en aanvoertemperatuur van vloerverwarming beoordelen',
    'Afgiftesystemen combineren en koppelen aan de warmtebron',
    'Een afgiftesysteem beoordelen en optimaliseren'
  ],
  examen: [
    {
      vraag: `Een radiator heeft een genormeerd vermogen van 2000 W bij het referentieregime 75/65/20. Wat is ongeveer het vermogen bij regime 70/50/20 (delta T 40 K), met exponent n = 1,3?`,
      opties: [`1500 W`, `2000 W`, `1600 W`, `1040 W`],
      goed: 0,
      uitleg: `(40/50)^1,3 is ongeveer 0,75, dus 2000 x 0,75 is ongeveer 1500 W. Aannemen dat het vermogen niet verandert (2000 W) klopt niet, en de andere twee opties horen bij een verkeerde exponent of een rekenfout.`
    },
    {
      vraag: `Waarom is het referentieregime van een radiator vastgelegd op 75/65/20 met een overtemperatuur van 50 K?`,
      opties: [
        `Omdat elke radiator in de praktijk altijd op precies die temperatuur wordt gestookt`,
        `Om radiatoren van verschillende merken te kunnen vergelijken`,
        `Omdat een radiator bij een lagere temperatuur onherstelbaar beschadigd zou raken`,
        `Omdat de wet dit regime voor elk verwarmingstoestel verplicht voorschrijft`
      ],
      goed: 1,
      uitleg: `Een vast referentieregime maakt het mogelijk om het genormeerde vermogen van verschillende radiatoren onderling te vergelijken. In de praktijk wordt juist vaak op een andere, vaak lagere temperatuur gestookt (dat is precies het onderwerp van deze module), en het is geen wettelijke verplichting voor elk toestel.`
    },
    {
      vraag: `Een Remeha Calenta 25s levert bij een nominale belasting van 25,0 kW (Hi) 24,8 kW bij regime 80/60 en 25,5 kW bij regime 50/30. Wat verklaart dit verschil?`,
      opties: [
        `Bij 50/30 verbruikt de ketel merkbaar meer gas per geleverde kWh`,
        `Bij 80/60 draait de ventilator van de ketel duidelijk harder`,
        `Bij 50/30 ligt de retourtemperatuur ver onder het condensatiepunt`,
        `Het verschil komt uitsluitend door een meetfout in de fabrieksgegevens`
      ],
      goed: 2,
      uitleg: `Een lagere retourtemperatuur laat meer waterdamp condenseren, wat de latente warmte aan het cv-water toevoegt en het rendement op onderwaarde boven 100 procent kan brengen. Gasverbruik per kWh, ventilatortoerental en een meetfout zijn hier niet de verklaring.`
    },
    {
      vraag: `Bij lage temperatuur (aanvoer onder 45 graden) geeft een radiator bij gelijke afmeting ongeveer hoeveel keer minder vermogen dan bij hoge temperatuur, volgens Buildwise?`,
      opties: [`1,5 keer minder`, `2 keer minder`, `10 keer minder`, `3 keer minder`],
      goed: 3,
      uitleg: `Buildwise noemt ongeveer 3 keer minder vermogen bij gelijke afmeting. Dat is een vuistregel, geen exacte waarde voor elk regime: gebruik de exponentformule voor een preciezere berekening.`
    },
    {
      vraag: `Wat is het verschil tussen een LT-radiator (bijvoorbeeld Jaga Strada Hybrid) en een LT-convector met ventilator (bijvoorbeeld Jaga Mini Canal Hybrid)?`,
      opties: [
        `Alleen de LT-convector heeft een ventilator`,
        `Een LT-radiator heeft juist wel een ventilator, een LT-convector niet`,
        `Er bestaat geen echt verschil tussen deze twee productnamen`,
        `Een LT-convector werkt uitsluitend bij een hoge aanvoertemperatuur`
      ],
      goed: 0,
      uitleg: `Een LT-radiator (voorbeeld Strada Hybrid) werkt zonder ventilator op lage temperatuur; een LT-convector met ventilator (voorbeeld Mini Canal Hybrid) gebruikt de ventilator juist om bij lage temperatuur veel meer warmte af te geven. De andere opties keren dit om of ontkennen het verschil onterecht.`
    },
    {
      vraag: `Wat is het verschil tussen een nat en een droog vloerverwarmingssysteem, en welk systeem past beter bij weinig inbouwhoogte op een houten vloer?`,
      opties: [
        `Een nat systeem, want dat is aanzienlijk lichter in gewicht`,
        `Een droog systeem: dat past al vanaf ongeveer 6 cm`,
        `Beide systemen vragen precies dezelfde inbouwhoogte`,
        `Een nat systeem is de enige mogelijkheid bij renovatie`
      ],
      goed: 1,
      uitleg: `Een droog systeem heeft een minimale inbouwhoogte van ongeveer 6 cm (tegenover 18 tot 20 cm bij een nat systeem) en is geschikt op een houten vloerconstructie. Een nat systeem is juist zwaarder en vraagt meer opbouwhoogte.`
    },
    {
      vraag: `Wat is de maximale oppervlaktetemperatuur van vloerverwarming in de verblijfszone, en waarom ligt die grens er?`,
      opties: [
        `Ongeveer 50 graden, gelijk aan de maximale aanvoertemperatuur van het water`,
        `Er bestaat geen maximale temperatuur voor een afgewerkte vloer`,
        `Ongeveer 29 graden, vanwege comfort en de vloerafwerking`,
        `Ongeveer 60 graden, gelijk aan de temperatuur van warm tapwater`
      ],
      goed: 2,
      uitleg: `De grens van ongeveer 29 graden in de verblijfszone houdt rekening met comfort voor de huid en met de vloerafwerking. De maximale aanvoertemperatuur van het water (bijvoorbeeld 50 graden bij een Rehau-voorbeeld) is een andere, hogere grens die niet gelijk is aan de oppervlaktetemperatuur.`
    },
    {
      vraag: `Waarom is een mengverdeler met eigen pomp nodig als een cv-ketel op ongeveer 80 graden zowel radiatoren als vloerverwarming voedt?`,
      opties: [
        `Om het debiet naar de radiatoren flink extra te verhogen`,
        `Om de druk in de gehele installatie te verlagen`,
        `Om de productie van warm tapwater te ondersteunen`,
        `Om het ketelwater te mengen tot een lagere temperatuur`
      ],
      goed: 3,
      uitleg: `De mengverdeler verlaagt de temperatuur van het aanvoerwater naar de vloerverwarming door het te mengen met retourwater. Debietverhoging naar radiatoren, drukverlaging in het geheel en tapwaterproductie zijn geen functies van deze mengverdeler.`
    },
    {
      vraag: `Een vloerverwarmingskring levert 800 W bij een aangenomen delta T van 5 K. Wat is het benodigde debiet ongeveer, met de formule debiet = vermogen / (1,163 x delta T)?`,
      opties: [`137 l/h`, `34 l/h`, `800 l/h`, `4000 l/h`],
      goed: 0,
      uitleg: `800 / (1,163 x 5) is ongeveer 137 l/h. 34 l/h zou horen bij een delta T van 20 K (zoals bij een radiatorcircuit), en de andere twee opties zijn geen zinnige uitkomst van deze formule.`
    },
    {
      vraag: `Een driewegklepset (voorbeeld Intergas) splitst een installatie in een hogetemperatuurzone en een laagtemperatuurzone. Wat is de functie van de aanlegsensor op de laagtemperatuurzone?`,
      opties: [
        `Hij meet de gasdruk vlak voor de branderautomaat`,
        `Hij bewaakt de vloerverwarmingszone als beveiliging`,
        `Hij regelt de kamertemperatuur van de andere zone apart`,
        `Hij meet het debiet van elke radiator afzonderlijk`
      ],
      goed: 1,
      uitleg: `De aanlegsensor bewaakt de temperatuur van de laagtemperatuurzone (de vloerverwarming) en schakelt de brander uit als de veiligheidstemperatuur wordt overschreden. Gasdruk, kamertemperatuur van de andere zone en radiatordebiet zijn geen taken van deze sensor.`
    },
    {
      vraag: `Waarom is vloerverwarming volgens Vaillant het meest efficiënte afgiftesysteem voor een warmtepomp?`,
      opties: [
        `Vloerverwarming vraagt in de praktijk zelden enig onderhoud`,
        `Vloerverwarming heeft een hoger genormeerd vermogen dan elke radiator`,
        `Vloerverwarming vraagt maar een lage watertemperatuur`,
        `Vloerverwarming heeft nooit een mengverdeler nodig bij een warmtepomp`
      ],
      goed: 2,
      uitleg: `Een lage watertemperatuur laat de warmtepomp efficiënter werken (hogere COP). Onderhoud, vergelijking van genormeerd vermogen en het al dan niet nodig zijn van een mengverdeler zijn hier niet de verklaring: ook bij een warmtepomp kan een mengverdeler nodig zijn als niet de hele installatie op dezelfde lage temperatuur werkt.`
    },
    {
      vraag: `Wat is de eerste stap bij het beoordelen van een afgiftesysteem dat het bij een lagere temperatuur niet warm genoeg lijkt te krijgen?`,
      opties: [
        `Meteen alle radiatoren vervangen door nieuwe LT-radiatoren`,
        `Wachten tot de volgende storing en dan pas kijken`,
        `Direct de bestaande ketel vervangen door een warmtepomp`,
        `Eerst testen, dan pas oordelen`
      ],
      goed: 3,
      uitleg: `Een praktijktest op een koude dag, samen met het controleren van debiet, kranen en lucht in het systeem, geeft de basis voor een gerichte beoordeling. Meteen vervangen of wachten op een storing slaat de beoordeling over en kan tot onnodige kosten of onopgeloste klachten leiden.`
    },
    {
      vraag: `Waarom geeft een geschiktheidstest voor lage temperatuur die alleen bij mild weer wordt uitgevoerd een onbetrouwbaar beeld?`,
      opties: [
        `Klachten komen vooral naar voren op de koudste dagen`,
        `De ketel verbruikt bij mild weer merkbaar minder gas`,
        `De retourtemperatuur is bij mild weer niet goed meetbaar`,
        `Een test bij mild weer is volgens de wet niet geldig`
      ],
      goed: 0,
      uitleg: `Bij mild weer is de warmtevraag laag, waardoor een tekort aan vermogen niet aan het licht komt. Pas bij lage buitentemperaturen wordt het afgiftesysteem echt op de proef gesteld. De andere opties zijn geen juiste verklaring.`
    },
    {
      vraag: `Een ruimte krijgt bij regime 55/45/20 onvoldoende vermogen van de bestaande radiator, maar het tekort is klein. Wat is een logische, eenvoudige eerste maatregel voor je de radiator vervangt?`,
      opties: [
        `Direct de hele woning ombouwen naar vloerverwarming`,
        `Een ventilator aan de bestaande radiator toevoegen`,
        `De warmteverliesberekening van de ruimte gewoon negeren`,
        `De ruimte voortaan maar helemaal niet meer verwarmen`
      ],
      goed: 1,
      uitleg: `Een ventilator kan het vermogen van een bestaande radiator met ongeveer 25 procent verhogen, wat een klein tekort vaak al oplost, en is eenvoudiger dan de hele woning ombouwen. De berekening negeren of de ruimte niet meer verwarmen zijn geen oplossingen.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 7.1 */
{
  id: 'm07l01',
  nr: '7.1',
  titel: 'Radiatoren en convectoren',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt het vermogen van een radiator of convector bij een bepaald temperatuurregime beoordelen en uitleggen wat dat voor de ketel betekent.',
  videos: [
    { taal: 'nl', titel: 'Zijn jouw radiatoren geschikt voor lage temperatuur? (De Huizendokter)', yt: '6srGfaOKpuo', duur: '±11 min, 2024' },
    { taal: 'nl', titel: 'Alles over radiatoren berekenen (Ketel Klets)', yt: 'H4_ZQCjsMII', duur: '±10 min, 2021' },
    { taal: 'en', titel: 'How to Size Radiators for a Low Temperature Central Heating System (Allen Hart)', yt: 'fh_KDoj2Qm8', duur: '±15 min, 2022' }
  ],
  tekst: `
## Waarom een radiator een temperatuurregime nodig heeft

Een radiator geeft warmte af aan de lucht en aan de omgeving, en hoeveel dat is hangt sterk af van hoe warm het water is dat erdoorheen stroomt. Fabrikanten geven daarom niet een enkel vermogen op, maar een vermogen bij een **referentieregime**: aanvoer 75 graden, retour 65 graden, ruimtetemperatuur 20 graden. Dat schrijf je als 75/65/20. Het verschil tussen de gemiddelde watertemperatuur en de ruimte heet de overtemperatuur (delta T): bij dit regime is dat (75 + 65) / 2 - 20 = 50 K.

Werkt de installatie op een andere temperatuur, dan verandert het vermogen niet lineair mee. Het vermogen volgt de formule:

Phi = Km x (delta T)^n

Km is een constante die per radiator verschilt (afhankelijk van het type en de afmeting), en n is een exponent die voor een gewone paneelradiator met een convectieplaat (type 22) meestal tussen 1,30 en 1,35 ligt bij het normale debiet, en iets lager bij een verminderd debiet. Een radiator zonder convectieplaat (een kale ledenradiator) volgt de formule doorgaans nauwkeuriger; bij een radiator met convectieplaat kan de formule bij een laag debiet de werkelijke afgifte tot ongeveer 10 procent overschatten.

!!! kern Het vermogen daalt sneller dan de temperatuur
Een radiator die bij 75/65/20 zijn volle vermogen geeft, geeft bij een lagere temperatuur niet een beetje minder, maar veel minder. De exponent (ongeveer 1,3) maakt dat het vermogen sneller daalt dan het temperatuurverschil zelf. Dat is de reden waarom je een radiator niet zomaar op een lagere temperatuur kunt laten draaien zonder de afgifte te controleren.
!!!

## Rekenvoorbeeld: vermogen bij een ander regime

Een radiator heeft een genormeerd vermogen van 1800 W bij het referentieregime 75/65/20 (delta T 50 K). Met n = 1,3 reken je het vermogen bij een ander regime uit met (delta T_nieuw / 50)^1,3 keer het genormeerde vermogen.

| Regime | Delta T | Factor (delta T / 50)^1,3 | Vermogen |
|---|---|---|---|
| 75/65/20 (referentie) | 50 K | 1,00 | 1800 W |
| 70/50/20 | 40 K | 0,75 | ongeveer 1350 W |
| 55/45/20 | 30 K | 0,52 | ongeveer 930 W |
| 45/35/20 | 20 K | 0,30 | ongeveer 540 W |

Bij 45/35/20 levert deze radiator dus nog maar ongeveer 30 procent van zijn genormeerde vermogen. Wil je op die temperatuur stoken, dan moet de radiator van tevoren al groter zijn gekozen, of moet je vermogen bijzetten met een ventilator (zie hieronder) of vloerverwarming (les 7.3).

## Typen: paneelradiator, ledenradiator, convector en LT-radiator

Een **paneelradiator** is een platte, geperste stalen radiator, vaak met een of meer convectieplaten aan de achterkant die extra lucht langs het paneel laten stromen. Een **ledenradiator** is opgebouwd uit gietijzeren of stalen leden en heeft geen convectieplaat: hij straalt meer warmte uit en convecteert minder. Een **convector** bestaat uit een warmtewisselaar met lamellen in een ombouw, met veel oppervlak in weinig ruimte: bij dezelfde afmeting heeft een convector meestal meer vermogen dan een radiator, doordat de lamellen veel lucht laten passeren.

Een **LT-radiator** (lage temperatuur) is een radiator die zonder ventilator is ontworpen op een aanvoertemperatuur van ongeveer 35 tot 45 graden, met een warmtewisselaar die veel warmte uit weinig water haalt (Jaga noemt voor de Strada Hybrid ongeveer 90 procent minder waterinhoud dan een gewone paneelradiator). Een **LT-convector met ventilator** (Jaga noemt de Mini Canal Hybrid als voorbeeld) gebruikt een ingebouwde ventilator om bij lage temperatuur 3 tot 4 keer zoveel warmte af te geven als zonder ventilator.

## Waarom een ventilator helpt bij lage temperatuur

Bij een lage aanvoertemperatuur is het temperatuurverschil tussen de radiator en de lucht klein. Daardoor is de thermische trek (de natuurlijke opwaartse luchtstroming langs een warm oppervlak) gering, en convecteert een gewone radiator minder goed. Een ventilator dwingt lucht langs het warmteafgevend oppervlak en kan het vermogen van een bestaande radiator daardoor met ongeveer 25 procent verhogen; een nieuwe ventilatorunit kan tot 100 procent meer leveren dan een vergelijkbare radiator zonder ventilator. Dat maakt een ventilator een goedkoper alternatief voor het vervangen van een radiator, zie ook les 7.6.

?? Verdieping: aritmetisch of logaritmisch delta T?
Er zijn twee manieren om de overtemperatuur te berekenen: aritmetisch, als (aanvoer + retour) / 2 - ruimte, en logaritmisch, met een natuurlijke-logaritmeformule die rekening houdt met de afkoeling van het water langs de radiator. De aritmetische formule (die in dit lesmateriaal wordt gebruikt) is voldoende nauwkeurig zolang het temperatuurverschil tussen aanvoer en retour niet te groot is ten opzichte van het verschil met de ruimte. Bij een klein delta T, zoals bij vloerverwarming (les 7.3), is het verschil tussen de twee methodes klein.
??

## Wat dit betekent voor de ketel

Een radiator die op lage temperatuur te weinig vermogen geeft, dwingt de ketel niet harder te stoken dan nodig, maar dwingt de bewoner de aanvoertemperatuur weer omhoog te zetten, waardoor het rendementsvoordeel van een lagere temperatuur (les 7.2) verdwijnt. Andersom geldt: hoe beter de radiatoren of convectoren passen bij een lage temperatuur, hoe lager de ketel of warmtepomp kan stoken. Dat is het uitgangspunt van de rest van deze module.
`,
  checklist: [
    'Ik kan het vermogen van een radiator met de exponentformule omrekenen naar een ander temperatuurregime',
    'Ik weet dat het referentieregime 75/65/20 is, met een overtemperatuur van 50 K',
    'Ik herken dat een convector bij gelijke afmeting meer vermogen heeft dan een radiator',
    'Ik weet wanneer een ventilator een radiator of convector geschikt kan maken voor lage temperatuur',
    'Ik gebruik de exponentformule als schatting, niet als exacte waarde voor elk radiatortype'
  ],
  quiz: [
    {
      vraag: `Een radiator heeft een genormeerd vermogen van 1800 W bij het referentieregime. Bij regime 60/50/20 (delta T 35 K) is het vermogen met exponent n = 1,3 ongeveer:`,
      opties: [`1800 W (verandert niet)`, `1260 W (lineair met delta T)`, `1130 W (met de exponentformule)`, `882 W (kwadratisch met delta T)`],
      goed: 2,
      uitleg: `(35 / 50)^1,3 is ongeveer 0,63, dus 1800 x 0,63 is ongeveer 1130 W. Lineair rekenen (1260 W) onderschat de daling, kwadratisch rekenen (882 W) overschat hem, en aannemen dat het vermogen niet verandert (1800 W) klopt al helemaal niet.`
    },
    {
      vraag: `Waarom daalt het vermogen van een radiator sneller dan het temperatuurverschil zelf als je de aanvoertemperatuur verlaagt?`,
      opties: [
        `Omdat de radiator dan minder water bevat`,
        `Omdat de exponent in de vermogensformule groter is dan 1`,
        `Omdat de pomp minder hard moet werken bij een lagere temperatuur`,
        `Omdat de ketel het debiet dan automatisch verlaagt`
      ],
      goed: 1,
      uitleg: `De formule Phi = Km x (delta T)^n heeft een exponent n van ongeveer 1,3. Omdat n groter is dan 1, daalt het vermogen sneller dan delta T zelf: een halvering van delta T geeft dus minder dan de helft van het vermogen. Waterinhoud, pompwerking en debiet spelen hier geen rol in.`
    },
    {
      vraag: `Twee radiatoren hebben dezelfde buitenafmeting: een kale ledenradiator zonder convectieplaat en een paneelradiator met convectieplaat. Wat is het meest waarschijnlijke verschil in vermogen bij hetzelfde regime?`,
      opties: [
        `Ze hebben altijd precies hetzelfde vermogen bij gelijke afmeting`,
        `De ledenradiator heeft meer vermogen, omdat gietijzer beter warmte geleidt`,
        `De paneelradiator met convectieplaat heeft meestal meer vermogen, doordat de plaat extra lucht laat convecteren`,
        `Het vermogen hangt alleen af van het watervolume, niet van de vorm`
      ],
      goed: 2,
      uitleg: `Een convectieplaat vergroot het effectieve warmteafgevend oppervlak en verhoogt de luchtstroming langs de radiator, wat meer vermogen geeft bij gelijke buitenafmeting. Het materiaal van de radiator (gietijzer of staal) is hier niet de verklarende factor.`
    },
    {
      vraag: `Een convector en een paneelradiator hebben dezelfde buitenafmeting. Wat geldt meestal?`,
      opties: [
        `De convector heeft meestal meer vermogen dan de radiator`,
        `De radiator heeft meestal meer vermogen dan de convector`,
        `Ze hebben nooit een verschillend vermogen bij gelijke afmeting`,
        `Het vermogen van een convector hangt niet af van de watertemperatuur`
      ],
      goed: 0,
      uitleg: `Een convector heeft veel lamellenoppervlak in een compacte ombouw, waardoor hij bij dezelfde buitenafmeting meestal meer vermogen heeft dan een radiator. Ook een convector volgt overigens dezelfde temperatuurafhankelijkheid als een radiator: bij lage temperatuur daalt zijn vermogen net zo goed.`
    },
    {
      vraag: `Een Jaga LT-convector met ventilator (voorbeeld: Mini Canal Hybrid) geeft bij lage temperatuur ongeveer hoeveel keer zoveel warmte als zonder ventilator?`,
      opties: [`1,5 keer zoveel`, `2 keer zoveel`, `10 keer zoveel`, `3 tot 4 keer zoveel`],
      goed: 3,
      uitleg: `Jaga noemt voor dit model 3 tot 4 keer zoveel warmteafgifte met het ventilatorsysteem dan zonder. Dat is een voorbeeld van dit merk en model: een ander merk of model kan een andere verhouding hebben.`
    },
    {
      vraag: `Bij welke radiator wijkt de exponentformule (Phi = Km x delta T^n) volgens onderzoek het meest af van de werkelijke warmteafgifte?`,
      opties: [
        `Bij een kale ledenradiator zonder convectieplaat`,
        `Bij een paneelradiator met convectieplaat, vooral bij een laag waterdebiet`,
        `Bij elke radiator, ongeacht het debiet`,
        `Bij geen enkele radiator: de formule is altijd exact`
      ],
      goed: 1,
      uitleg: `Bij radiatoren met een convectieplaat wijkt de voorspelde warmteafgifte bij een laag debiet tot ongeveer 10 procent af van metingen, omdat de temperatuurverdeling in het water dan afwijkt van de aanname in de formule. Bij een radiator zonder convectieplaat blijft de formule betrouwbaarder.`
    }
  ],
  kaarten: [
    { voor: `Wat is het referentieregime voor het genormeerde vermogen van een radiator?`, achter: `Aanvoer 75, retour 65, ruimte 20 graden (75/65/20), met een overtemperatuur (delta T) van 50 K.` },
    { voor: `Met welke formule reken je het radiatorvermogen om naar een ander regime?`, achter: `Phi = Km x (delta T)^n. Km is een constante per radiator, n is een exponent (voor een paneelradiator met convectieplaat meestal 1,30 tot 1,35).` },
    { voor: `Een radiator geeft 1800 W bij 75/65/20. Ongeveer hoeveel geeft hij bij 45/35/20 (delta T 20 K)?`, achter: `Ongeveer 30 procent van 1800 W, dus ongeveer 540 W: (20/50)^1,3 is ongeveer 0,30.` },
    { voor: `Waarom heeft een convector meestal meer vermogen dan een radiator van dezelfde afmeting?`, achter: `Een convector heeft veel lamellenoppervlak in een compacte ombouw, wat meer lucht laat convecteren dan een gladde radiatorplaat.` },
    { voor: `Bij welke aanvoertemperatuur werkt een Jaga LT-radiator (voorbeeld Strada Hybrid)?`, achter: `Ongeveer 35 tot 45 graden, zonder ventilator. Voorbeeld van dit merk en model.` },
    { voor: `Hoeveel extra vermogen kan een ventilator een bestaande radiator geven bij lage temperatuur?`, achter: `Ongeveer 25 procent bij een bestaande radiator, tot 100 procent bij een nieuwe ventilatorunit (Buildwise).` },
    { voor: `Waarom convecteert een radiator minder goed bij lage temperatuur?`, achter: `De thermische trek (natuurlijke opwaartse luchtstroming) is bij een kleiner temperatuurverschil geringer.` },
    { voor: `Welke radiatoren en convectoren vallen buiten de EN 442-norm?`, achter: `Ventilator-ondersteunde radiatoren en convectoren, kanaalconvectoren en onafhankelijke verwarmingstoestellen.` }
  ],
  bronnen: ['AFG-01', 'AFG-02', 'AFG-03', 'AFG-04', 'AFG-06', 'AFG-07', 'AFG-08', 'AFG-09', 'AFG-10', 'AFG-11']
},

/* ------------------------------------------------------------------ 7.2 */
{
  id: 'm07l02',
  nr: '7.2',
  titel: 'Lage temperatuur en het rendement van de ketel',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen waarom een lagere aanvoer- en retourtemperatuur het rendement van een HR-ketel verhoogt en wat dat vraagt van de afgifte.',
  videos: [
    { taal: 'nl', titel: 'Waarom je je cv-ketel niet zomaar lager kan zetten (NU.nl)', yt: 'cIj3NEbL-FE', duur: '±2 min, 2023' },
    { taal: 'nl', titel: 'Hoe werkt een condensatieketel? Werking en voordelen (Renovatie-Gids)', yt: 'CbFBUIzaUms', duur: '±2 min, 2020' },
    { taal: 'en', titel: 'How a Condensing Boiler Works (MEP Academy)', yt: 'oRr3q3IraRU', duur: '±9 min, 2022' }
  ],
  tekst: `
## Waarom een lagere retourtemperatuur meer rendement geeft

Een HR-ketel haalt zijn extra rendement uit condensatie: als de rookgassen onder het condensatiepunt komen, condenseert de waterdamp in de rookgassen en komt de vrijkomende warmte (de latente warmte) bij het cv-water terecht. Remeha noemt voor de Calenta een condensatiepunt van ongeveer 55 graden. Hoe lager de **retourtemperatuur** van het cv-water, hoe meer rookgas onder dat punt komt en hoe meer er condenseert.

!!! kern Niet de aanvoer, maar de retourtemperatuur bepaalt het rendement
Het is de temperatuur van het water dat terugkomt van de radiatoren of vloerverwarming naar de ketel die de condensatie bepaalt, niet de temperatuur die de ketel erin stuurt. Een installatie die met een hoge aanvoer maar een lage retour werkt (een groot delta T) condenseert dus ook al goed. Een lagere aanvoer helpt vooral omdat de retour dan vaak ook lager wordt.
!!!

## Rekenvoorbeeld: rendement bij twee regimes

Remeha noemt voor de Calenta 25s bij een nominale belasting van 25,0 kW (op onderwaarde, Hi) een geleverd vermogen van 24,8 kW bij regime 80/60 en 25,5 kW bij regime 50/30.

| Regime | Geleverd vermogen | Rendement op onderwaarde |
|---|---|---|
| 80/60 | 24,8 kW | 24,8 / 25,0 = 99,2 % |
| 50/30 | 25,5 kW | 25,5 / 25,0 = 102,0 % |

Het verschil van bijna 3 procentpunt komt volledig door de retourtemperatuur: bij 30 graden retour ligt de rookgastemperatuur ver onder het condensatiepunt van ongeveer 55 graden, bij 60 graden retour condenseert er veel minder.

## Wat nodig is om met 55/45 of 45/35 te stoken

Lager stoken levert dus rendement op, maar de afgifte moet dat kunnen bijbenen. Uit les 7.1 volgt dat een radiator bij een lager regime veel minder vermogen geeft: bij lage temperatuur (aanvoer onder 45 graden, volgens Buildwise) geeft een radiator bij gelijke afmeting ongeveer 3 keer minder vermogen dan bij hoge temperatuur. Om op 55/45 of 45/35 te stoken heb je dus of een groter afgiftesysteem (grotere of extra radiatoren, of vloerverwarming, zie les 7.3), of een radiator of convector die daarvoor is ontworpen (een LT-radiator of een ventilatorunit, les 7.1).

Milieu Centraal noemt ter vergelijking voor de opwarming van cv-water door een warmtepomp een maximale temperatuur van ongeveer 55 graden, tegenover ongeveer 75 graden bij een klassieke cv-ketel op hoge temperatuur. Vaillant noemt voor zijn hogetemperatuurwarmtepomp aroTHERM plus een aanvoertemperatuur tot 75 graden mogelijk, maar met de kanttekening dat het rendement (de COP) daalt naarmate de aanvoertemperatuur hoger is. Vaillant beschrijft ook een eenvoudige praktijktest: op een koude dag alle radiatorkranen volledig open zetten, de aanvoertemperatuur via de stooklijn stapsgewijs verlagen, en controleren of de woning warm blijft bij een aanvoertemperatuur van 55 graden of lager. Is dat het geval, dan werken de bestaande radiatoren economisch efficiënt met een warmtepomp op die temperatuur.

## Gevolgen voor het benodigde oppervlak

Hoe lager je wilt stoken, hoe groter het afgiftesysteem moet zijn om hetzelfde vermogen te leveren. Dat raakt ook de hydraulica uit module 3: bij een kleiner temperatuurverschil tussen aanvoer en retour is voor hetzelfde vermogen een groter debiet nodig (zie de debietformule in [les 3.6](les:m03l06)). Een radiatorcircuit is bijvoorbeeld vaak ontworpen op een delta T van ongeveer 20 K; vloerverwarming werkt met een veel kleiner delta T (les 7.4) en dus met een ander debiet per vermogen.

?? Verdieping: waarom stijgt het rendement niet onbeperkt door?
Onder het condensatiepunt condenseert er steeds meer waterdamp naarmate de retourtemperatuur daalt, maar de winst wordt kleiner naarmate je al lager zit: het grootste deel van de winst komt bij de eerste stap onder het condensatiepunt. Reken daarom niet automatisch met "hoe lager, hoe evenredig meer rendement": het is een dalende meeropbrengst, geen rechte lijn.
??
`,
  checklist: [
    'Ik kan uitleggen dat de retourtemperatuur, niet de aanvoertemperatuur, het condensatie-effect bepaalt',
    'Ik kan met een voorbeeld het rendementsverschil tussen twee regimes berekenen uit geleverd vermogen en nominale belasting',
    'Ik weet dat een lagere temperatuur een groter of beter afgiftesysteem vraagt',
    'Ik ken de vierstappentest om te beoordelen of bestaande radiatoren op lage temperatuur kunnen werken',
    'Ik leg uit dat een groter delta T bij hetzelfde vermogen een kleiner debiet geeft, en omgekeerd'
  ],
  quiz: [
    {
      vraag: `Een HR-ketel condenseert meer waterdamp uit de rookgassen naarmate:`,
      opties: [
        `de retourtemperatuur lager is`,
        `de aanvoertemperatuur hoger is`,
        `het debiet lager is`,
        `de ketel meer vermogen levert`
      ],
      goed: 0,
      uitleg: `De retourtemperatuur bepaalt hoe ver de rookgastemperatuur onder het condensatiepunt (ongeveer 55 graden bij de Remeha Calenta) komt. Aanvoertemperatuur, debiet en geleverd vermogen zijn niet de bepalende factor voor condensatie.`
    },
    {
      vraag: `Een ketel met een nominale belasting van 30,0 kW (Hi) levert bij regime 45/30 een vermogen van 30,6 kW. Wat is het rendement op onderwaarde bij dit regime?`,
      opties: [`98,0 %`, `100,0 %`, `102,0 %`, `106,0 %`],
      goed: 2,
      uitleg: `30,6 / 30,0 = 1,02, dus 102,0 procent. Een rendement boven 100 procent op onderwaarde is normaal bij een HR-ketel die condenseert: de latente warmte uit de waterdamp komt erbij.`
    },
    {
      vraag: `Waarom kun je de aanvoertemperatuur van een ketel niet zomaar verlagen zonder de afgifte te controleren?`,
      opties: [
        `Omdat de ketel dan in storing valt zodra de aanvoer onder 60 graden komt`,
        `Omdat radiatoren bij een lagere temperatuur veel minder vermogen geven, waardoor de woning kouder kan blijven`,
        `Omdat een lagere aanvoertemperatuur het condenswater laat bevriezen in de sifon`,
        `Omdat de pomp dan buiten zijn werkgebied komt en kapot kan raken`
      ],
      goed: 1,
      uitleg: `Uit les 7.1: het vermogen van een radiator daalt sterker dan het temperatuurverschil. Bij een te lage aanvoer geeft de radiator te weinig warmte en blijft de woning koud. De andere opties zijn niet de reden waarom je dit eerst moet controleren.`
    },
    {
      vraag: `Vaillant noemt een vierstappentest om te beoordelen of bestaande radiatoren geschikt zijn voor een warmtepomp. Bij welke aanvoertemperatuur is de woning volgens die test voldoende warm voor een economisch efficiënte werking?`,
      opties: [`45 graden of lager`, `50 graden of lager`, `55 graden of lager`, `65 graden of lager`],
      goed: 2,
      uitleg: `Vaillant noemt 55 graden of lager als grens in zijn fabrikantadvies. Dat is een merkspecifieke grens: andere bronnen (zoals de Milieu Centraal Verwarmingstest) gebruiken een andere testtemperatuur van 50 graden voor een bredere doelgroep.`
    },
    {
      vraag: `Een installatie stookt op regime 45/35/20 in plaats van 75/65/20. Wat is het gevolg voor het benodigde debiet bij hetzelfde vermogen?`,
      opties: [
        `Het debiet moet lager zijn, omdat het water minder snel afkoelt`,
        `Het debiet verandert niet, want dat hangt alleen af van de pompinstelling`,
        `Het debiet wordt onbepaald zonder de retourtemperatuur te meten`,
        `Het debiet moet hoger zijn, omdat het temperatuurverschil tussen aanvoer en retour kleiner is`
      ],
      goed: 3,
      uitleg: `Uit de debietformule (vermogen gedeeld door 1,163 keer delta T) volgt dat een kleiner delta T bij hetzelfde vermogen een groter debiet vraagt. De pompinstelling is het gevolg van die eis, niet de oorzaak.`
    },
    {
      vraag: `Waarom levert de eerste stap onder het condensatiepunt meestal de grootste rendementswinst op, en de volgende stappen steeds minder?`,
      opties: [
        `Omdat de ketel bij een lagere retour minder gas verbruikt per graad`,
        `Omdat de meeropbrengst van verder dalende retourtemperatuur afneemt naarmate je al lager zit`,
        `Omdat de ketel onder een bepaalde temperatuur automatisch uitschakelt`,
        `Omdat het rendement lineair blijft stijgen, zonder afvlakking`
      ],
      goed: 1,
      uitleg: `De relatie tussen retourtemperatuur en rendement is geen rechte lijn: de grootste winst zit in de eerste stap onder het condensatiepunt, en elke volgende stap levert minder extra rendement op. Lineair blijven denken (optie 4) klopt dus niet.`
    }
  ],
  kaarten: [
    { voor: `Welke temperatuur bepaalt vooral het condensatie-effect van een HR-ketel?`, achter: `De retourtemperatuur, niet de aanvoertemperatuur. Hoe lager de retour, hoe meer waterdamp condenseert.` },
    { voor: `Remeha Calenta 25s: 24,8 kW bij 80/60 en 25,5 kW bij 50/30, bij een nominale belasting van 25,0 kW. Wat is het rendement bij elk regime?`, achter: `99,2 procent bij 80/60 en 102,0 procent bij 50/30 (op onderwaarde).` },
    { voor: `Wat kost lager stoken je in het afgiftesysteem?`, achter: `Een radiator geeft bij lagere temperatuur veel minder vermogen (les 7.1), dus is een groter afgiftesysteem of een geschikte radiator, convector of vloerverwarming nodig.` },
    { voor: `Wat noemt Vaillant als grens voor economisch efficiënt werken van een warmtepomp op bestaande radiatoren?`, achter: `Een aanvoertemperatuur van 55 graden of lager (fabrikantadvies, model aroTHERM plus haalt met lager rendement ook meer).` },
    { voor: `Wat gebeurt er met het benodigde debiet als delta T kleiner wordt bij gelijk vermogen?`, achter: `Het debiet moet groter worden: debiet = vermogen / (1,163 x delta T).` },
    { voor: `Bij welke temperatuur ligt het condensatiepunt volgens Remeha voor de Calenta?`, achter: `Ongeveer 55 graden (voorbeeld van dit merk en model).` },
    { voor: `Waarom vlakt de rendementswinst af naarmate de retourtemperatuur verder daalt?`, achter: `De eerste stap onder het condensatiepunt geeft de meeste extra condensatie; elke volgende stap levert minder extra winst op.` }
  ],
  bronnen: ['KET-21', 'REG-19', 'AFG-09', 'AFG-14', 'AFG-15', 'AFG-16']
},

/* ------------------------------------------------------------------ 7.3 */
{
  id: 'm07l03',
  nr: '7.3',
  titel: 'Vloerverwarming: opbouw en werking',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de opbouw van een vloerverwarmingssysteem beschrijven en uitleggen waarom het met een lage temperatuur werkt.',
  videos: [
    { taal: 'nl', titel: 'Hoe werkt vloerverwarming? (Vloerverwarming Cuijk)', yt: 'AhzHZ_KLg_E', duur: '±1 min, 2025' },
    { taal: 'nl', titel: 'Installatiestappen droogbouw vloerverwarming (Technea)', yt: 'Ji8oPA_lMkU', duur: '±3 min, 2021' },
    { taal: 'en', titel: 'Underfloor Heating Installation: Which System Heats Your Home Faster (Skill Builder)', yt: 'sJI5szeWEBA', duur: '±7 min, 2024' }
  ],
  tekst: `
## Waarom vloerverwarming met een lage temperatuur toe kan

Een radiator geeft zijn warmte af via een klein, warm oppervlak. Vloerverwarming doet het omgekeerde: de hele vloer van een ruimte is het warmteafgevend oppervlak, en dat oppervlak is vaak tientallen vierkante meters groot. Doordat het oppervlak zo groot is, hoeft het maar weinig warmer te zijn dan de ruimte om toch genoeg vermogen te leveren. Dat is de kernreden waarom vloerverwarming van nature geschikt is voor lage temperatuur, terwijl een radiator daarvoor eerst groter gemaakt moet worden (les 7.1).

!!! kern Groot en koel oppervlak in plaats van klein en heet
Hoeveel warmte een vloer afgeeft, hangt af van het temperatuurverschil tussen het water in de buizen en de ruimte, en van de warmteweerstand van de opbouw ertussen (isolatie, dekvloer, vloerafwerking). Een dikkere of beter isolerende laag tussen buis en oppervlak geeft minder warmteafgifte bij hetzelfde watertemperatuur: de opbouw bepaalt dus mee hoeveel vermogen je uit een vloer krijgt.
!!!

## Opbouw: nat systeem en droog systeem

Bij een **nat systeem** liggen de buizen rechtstreeks in een cement- of anhydrietdekvloer, op een isolatielaag. De opbouwhoogte (isolatie plus dekvloer) ligt gewoonlijk tussen 18 en 20 cm. De grote hoeveelheid dekvloer geeft de installatie veel thermische massa: hij warmt langzaam op, maar houdt de warmte ook lang vast en koelt langzaam af.

Bij een **droog systeem** liggen de buizen in voorgevormde isolatieplaten (bijvoorbeeld van piepschuim of polystyreen) die de warmte naar de vloerafwerking geleiden, zonder dikke dekvloer. De minimale inbouwhoogte is ongeveer 6 cm. Met minder massa warmt een droog systeem sneller op en reageert het sneller op een veranderende warmtevraag, maar het houdt de warmte ook minder lang vast.

| | Nat systeem | Droog systeem |
|---|---|---|
| Opbouwhoogte | ongeveer 18 tot 20 cm | vanaf ongeveer 6 cm |
| Thermische massa | groot (dekvloer) | klein (isolatieplaten) |
| Opwarming en reactie | langzamer | sneller |
| Typische toepassing | nieuwbouw, renovatie met voldoende hoogte | renovatie met weinig inbouwhoogte, ook op een houten vloerconstructie |

## Praktijkgeval: welk systeem past in deze renovatie?

Een woonkamer wordt gerenoveerd. Tussen de bestaande vloer en de gewenste vloerafwerking is maar 7 cm ruimte beschikbaar, en de vloer is een houten vloerconstructie.

Een nat systeem vraagt 18 tot 20 cm en past hier niet, en een dikke, natte dekvloer is ook geen goede combinatie met een houten vloerconstructie (extra gewicht, vocht tijdens het drogen). Een droog systeem met een minimale inbouwhoogte van ongeveer 6 cm past wel binnen de beschikbare 7 cm en is bovendien geschikt op een houten ondergrond. In dit geval is een droog systeem dus de logische keuze, niet omdat het per definitie beter is, maar omdat het bij de beschikbare hoogte en de constructie past.

## Maximale vloertemperatuur

De temperatuur van het water in de buis is niet de temperatuur die je onder je voeten voelt: de opbouw (isolatie, dekvloer, afwerking) verlaagt de temperatuur naar het oppervlak. De maximale oppervlaktetemperatuur van de vloer is begrensd op ongeveer 29 graden in de verblijfszone en ongeveer 35 graden in de randzone (waar meer warmteafgifte nodig is, bijvoorbeeld langs een grote raampartij). Die grens is er niet toevallig: bij een hogere vloertemperatuur kan langdurig contact onprettig worden voor de huid, en niet elke vloerafwerking verdraagt een hogere temperatuur zonder te kromtrekken of te verkleuren.

## ISSO 49 en de link met EN 1264

ISSO-publicatie 49 is de Nederlandse richtlijn voor het ontwerpen van vloerverwarming en vloerkoeling. De herziene uitgave sluit aan bij de Europese norm EN 1264 (van kracht sinds 2021) en bevat een bijlage met rekenvoorbeelden om het systeemvermogen te bepalen. ISSO 49 gaat ervan uit dat een goed geïsoleerde woning vaak voldoende heeft aan vloerverwarming, zonder aanvullende wandverwarming.

?? Verdieping: wat bepaalt de warmteafgifte per vierkante meter?
De opwarmtijd en de warmteafgifte per vierkante meter hangen af van de buisafstand (hoe dichter de buizen bij elkaar liggen, hoe gelijkmatiger en hoger de afgifte), de aanvoertemperatuur, en de warmteweerstand van de vloerafwerking. Een dikke tapijtlaag isoleert bijvoorbeeld meer dan tegels, en vraagt dus een hogere watertemperatuur voor hetzelfde vermogen, tot de grens van de maximale vloertemperatuur hierboven. Voor de exacte getallen bij een specifiek systeem gebruik je de tabel van de fabrikant van dat systeem, niet een algemene vuistregel: die tabellen verschillen per merk, buisafstand en vloerafwerking.
??
`,
  checklist: [
    'Ik kan uitleggen waarom een groot oppervlak lage temperatuur mogelijk maakt',
    'Ik kan het verschil tussen een nat en een droog systeem beschrijven, met opbouwhoogte en traagheid',
    'Ik kan bij een gegeven inbouwhoogte en ondergrond beoordelen welk systeem past',
    'Ik weet dat de maximale vloertemperatuur ongeveer 29 graden is in de verblijfszone en ongeveer 35 graden in de randzone',
    'Ik weet dat ISSO 49 de Nederlandse richtlijn is die aansluit bij EN 1264'
  ],
  quiz: [
    {
      vraag: `Waarom kan vloerverwarming met een veel lagere aanvoertemperatuur werken dan een radiator?`,
      opties: [
        `Omdat de vloer een veel groter oppervlak heeft`,
        `Omdat het water in de vloer duidelijk sneller stroomt dan in een radiator`,
        `Omdat vloerverwarming geen retourwater heeft`,
        `Omdat de dekvloer het water extra opwarmt`
      ],
      goed: 0,
      uitleg: `Een groot oppervlak hoeft maar weinig warmer te zijn dan de ruimte om voldoende vermogen te leveren. Snelheid van het water, het al dan niet hebben van retourwater en opwarming door de dekvloer zijn hier niet de verklaring.`
    },
    {
      vraag: `Wat is een kenmerkend verschil tussen een nat en een droog vloerverwarmingssysteem?`,
      opties: [
        `Een nat systeem heeft altijd meer vermogen dan een droog systeem`,
        `Een droog systeem heeft juist een grotere thermische massa en warmt merkbaar langzamer op`,
        `Een nat systeem heeft meer massa en warmt dus langzamer op`,
        `Een droog systeem kan niet op een houten vloerconstructie worden toegepast`
      ],
      goed: 2,
      uitleg: `De dekvloer van een nat systeem geeft veel thermische massa, waardoor het systeem langzamer opwarmt en afkoelt. Een droog systeem heeft minder massa en reageert sneller, en is juist wel geschikt op een houten vloerconstructie.`
    },
    {
      vraag: `Een badkamer wordt verbouwd met maar 6,5 cm ruimte tussen de bestaande vloer en de tegelafwerking. Welk systeem past hier het best?`,
      opties: [
        `Een nat systeem, want dat is in alle gevallen beter geïsoleerd dan droog`,
        `Een droog systeem: dat kan al vanaf ongeveer 6 cm`,
        `Geen van beide: vloerverwarming past nooit in minder dan 10 cm`,
        `Een nat systeem zonder isolatielaag om hoogte te besparen`
      ],
      goed: 1,
      uitleg: `Een droog systeem heeft een minimale inbouwhoogte van ongeveer 6 cm en past hier net. Een nat systeem vraagt 18 tot 20 cm en past niet. Een isolatielaag weglaten bij een nat systeem is geen oplossing: dan verdwijnt warmte naar de constructie onder de vloer.`
    },
    {
      vraag: `Wat is de maximale oppervlaktetemperatuur van vloerverwarming in de gewone verblijfszone van een woonkamer?`,
      opties: [`24 graden`, `35 graden`, `40 graden`, `29 graden`],
      goed: 3,
      uitleg: `De grens voor de verblijfszone ligt op ongeveer 29 graden. 35 graden is de grens voor de randzone, waar meer warmteafgifte nodig is, bijvoorbeeld bij een grote glaspartij. 24 en 40 graden horen niet bij deze norm.`
    },
    {
      vraag: `Wat regelt ISSO-publicatie 49 in Nederland?`,
      opties: [
        `De keuring van gasverbrandingstoestellen`,
        `Het ontwerp van vloerverwarming, aansluitend bij EN 1264`,
        `De maximale gasdruk in een woninginstallatie`,
        `De certificering van monteurs voor werken aan gasverbrandingstoestellen`
      ],
      goed: 1,
      uitleg: `ISSO 49 is de Nederlandse ontwerprichtlijn voor vloerverwarming en -koeling en sluit aan bij EN 1264. Gaskeuring, gasdruk en monteurscertificering staan in andere delen van deze cursus (module 1 en 8).`
    },
    {
      vraag: `Een vloerafwerking met een dikke tapijtlaag isoleert meer dan tegels. Wat betekent dat voor de benodigde watertemperatuur bij hetzelfde vermogen?`,
      opties: [
        `De watertemperatuur kan lager zijn dan bij tegels`,
        `De watertemperatuur maakt bij tapijt eigenlijk helemaal niets uit`,
        `De watertemperatuur moet hoger zijn, tot de toegestane grens`,
        `Tapijt kan nooit met vloerverwarming worden gecombineerd`
      ],
      goed: 2,
      uitleg: `Een beter isolerende vloerafwerking heeft meer warmteweerstand, dus is bij hetzelfde vermogen een hogere watertemperatuur nodig, zolang die binnen de toegestane grens blijft. Tapijt is dus niet uitgesloten, maar vraagt wel meer aandacht bij het ontwerp.`
    }
  ],
  kaarten: [
    { voor: `Waarom werkt vloerverwarming van nature op lage temperatuur?`, achter: `Omdat de hele vloer het warmteafgevend oppervlak is: een groot oppervlak hoeft maar weinig warmer te zijn dan de ruimte.` },
    { voor: `Hoe zit een nat vloerverwarmingssysteem in elkaar?`, achter: `Buizen rechtstreeks in een cement- of anhydrietdekvloer op een isolatielaag, opbouwhoogte ongeveer 18 tot 20 cm.` },
    { voor: `Hoe zit een droog vloerverwarmingssysteem in elkaar?`, achter: `Buizen in voorgevormde isolatieplaten zonder dikke dekvloer, minimale inbouwhoogte ongeveer 6 cm, warmt sneller op.` },
    { voor: `Welk systeem past beter op een houten vloerconstructie met weinig inbouwhoogte?`, achter: `Een droog systeem: minder gewicht, geen droogtijd voor natte dekvloer, geschikt vanaf ongeveer 6 cm.` },
    { voor: `Wat is de maximale vloertemperatuur in de verblijfszone en in de randzone?`, achter: `Ongeveer 29 graden in de verblijfszone, ongeveer 35 graden in de randzone.` },
    { voor: `Wat regelt ISSO 49?`, achter: `Het Nederlandse ontwerp van vloerverwarming en vloerkoeling, aansluitend bij EN 1264.` },
    { voor: `Wat bepaalt de warmteafgifte per vierkante meter van een vloer?`, achter: `De buisafstand, de aanvoertemperatuur en de warmteweerstand van de vloerafwerking. Gebruik voor exacte getallen de fabrikanttabel van het gekozen systeem.` }
  ],
  bronnen: ['AFG-19', 'AFG-20', 'AFG-21', 'AFG-22', 'AFG-23', 'AFG-24', 'AFG-25', 'REG-16']
},

/* ------------------------------------------------------------------ 7.4 */
{
  id: 'm07l04',
  nr: '7.4',
  titel: 'Vloerverwarming: verdeler, regeling en aanvoertemperatuur',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de verdeler, de kamerregeling en de aanvoertemperatuur van vloerverwarming beoordelen en instellen.',
  videos: [
    { taal: 'nl', titel: 'Uitleg over een mengverdeler van de vloerverwarming (John Visser cv-optimalisatie)', yt: 'hRa7i5tBgSA', duur: '±2 min, 2020' },
    { taal: 'nl', titel: 'Inregelen vloerverwarming (Klimaat Techniek Nederland)', yt: 'Vf93TNNU5q0', duur: '±12 min, 2024' },
    { taal: 'en', titel: 'Your Underfloor Heating Could Be Better, Here Is How (Urban Plumbers)', yt: 'LL6YhT_HkIY', duur: '±12 min, 2024' }
  ],
  tekst: `
## Wat de verdeler doet

De **verdeler** van een vloerverwarmingssysteem verdeelt het aangevoerde water gericht over de aangesloten kringen (de afzonderlijke buiscircuits die elk een deel van de vloer verwarmen). Op de aanvoerbalk zitten debietmeters waarmee de installateur het debiet per kring instelt, afhankelijk van het vermogen dat die kring moet leveren en het gewenste temperatuurverschil tussen aanvoer en retour. Sommige verdelers doen dat automatisch: de Rehau Easyflow-verdeler heeft bijvoorbeeld zelfregelende inserts die de balancering tussen kringen zelf uitvoeren, in plaats van dat de installateur elke kring met de hand instelt.

Verdelers verschillen ook in schaal en uitvoering. Rehau levert onder meer de HKV-D-verdeler voor maximaal 12 groepen met flowmeter, de modulaire 3001 ESP-verdeler met optionele automatische flowregeling, en de RAUTHERM SPEED HKV-D P: een pomploze verdeler met insteekfittingen die door zijn compacte bouw ongeveer 15 cm inbouwhoogte bespaart. Dit zijn voorbeelden van dit merk: andere fabrikanten hebben vergelijkbare, maar niet identieke producten.

!!! kern De verdeler verdeelt, de mengunit verlaagt de temperatuur
Een verdeler op zichzelf verandert de watertemperatuur niet: hij verdeelt alleen het debiet over de kringen. Het verlagen van de temperatuur naar het niveau dat de vloer nodig heeft, is de taak van de mengklep of mengverdeler.
!!!

## Mengklep en pompgroep: van ketelwater naar vloertemperatuur

Een cv-ketel werkt vaak op een hogere temperatuur (Rehau noemt als voorbeeld ongeveer 80 graden) dan een vloer verdraagt. Daarom is bij een hogetemperatuurbron een **mengverdeler met een eigen pomp** nodig: die mengt het hete aanvoerwater met retourwater van de vloerverwarming tot de lagere temperatuur die de vloer nodig heeft. Rehau noemt voor een van zijn verdelersystemen een maximale aanvoertemperatuur naar de vloer van niet hoger dan 50 graden, vanwege de constructie van het systeem.

Let op het verschil tussen twee grenzen die makkelijk worden verward: de maximale **aanvoertemperatuur van het water** naar de vloer (een grens die per fabrikant en systeem verschilt, hier 50 graden als voorbeeld) is niet hetzelfde als de maximale **oppervlaktetemperatuur van de afgewerkte vloer** (ongeveer 29 graden in de verblijfszone, les 7.3). Het watertemperatuur ligt hoger dan de vloertemperatuur die je voelt, omdat de opbouw (dekvloer, afwerking) de temperatuur naar het oppervlak verlaagt.

!!! kern Een falende mengklep kan de vloer beschadigen
Blijft de mengklep in de verkeerde stand hangen of valt de aansturing uit, dan kan de volledige, hogere ketelaanvoertemperatuur in de vloercircuits terechtkomen in plaats van de gemengde, lagere temperatuur. Dat kan de vloerafwerking beschadigen (kromtrekken, verkleuren) en de oppervlaktetemperatuur boven de veilige grens van ongeveer 29 tot 35 graden brengen (les 7.3), wat op de huid onprettig kan aanvoelen bij langdurig contact. Merk je dat een vloer duidelijk warmer aanvoelt dan gebruikelijk, controleer dan eerst de mengklep en de aanvoertemperatuur voor je verder werkt.
!!!

Uponor levert bijvoorbeeld pompgroepen (voorbeeld: Fluvia Move) met een driewegmengklep met 230 V-motoraandrijving en een geregelde circulatiepomp, die de aanvoertemperatuur naar de vloerverwarming weersafhankelijk regelen: bij een lagere buitentemperatuur mengt de klep een iets hogere aanvoertemperatuur bij.

## Kamerregeling

Naast de aanvoertemperatuur kan elke ruimte een eigen kamerregeling krijgen. Uponor T-Push-12-pompgroepen hebben bijvoorbeeld een ingebouwde ruimtetemperatuurregeling voor kleine systemen en renovaties, uitbreidbaar met een kamerthermostaat per ruimte. Rehau-verdelers zijn standaard uitgerust met een pompgroep, een thermostaatknop met sensor en een balanceerventiel of een terugslagklep tussen aanvoer en retour; er zijn ook varianten met een thermostaatventiel en een zonemotor waarmee een kring per ruimte apart aan en uit kan worden gezet. Welke uitvoering nodig is, hangt af van of elke ruimte een eigen kamerthermostaat krijgt of dat de hele vloer als één zone wordt geregeld.

## Kringlengtes en debiet per kring

Bij vloerverwarming is het temperatuurverschil tussen aanvoer en retour per kring meestal klein: kleiner dan bij een radiatorcircuit, dat vaak op ongeveer 20 K wordt ontworpen ([les 3.6](les:m03l06)). Met de debietformule (debiet in l/h is vermogen in W gedeeld door 1,163 keer delta T in K) geeft een klein delta T bij een gelijk vermogen een groter benodigd debiet dan bij een radiatorcircuit.

Rekenvoorbeeld: een kring verwarmt een ruimte van ongeveer 15 m2 met een geschat vermogen van 750 W. Neem als aanname een delta T van 5 K (een typische, kleinere waarde voor vloerverwarming; controleer bij een echt ontwerp altijd de opgave van de fabrikant van het gekozen systeem):

Debiet = 750 / (1,163 x 5) = ongeveer 129 l/h

Vergelijk dat met een radiatorcircuit van hetzelfde vermogen op een delta T van 20 K: 750 / (1,163 x 20) = ongeveer 32 l/h. Bij hetzelfde vermogen vraagt de vloerverwarmingskring dus ongeveer vier keer zoveel debiet als het radiatorcircuit, precies omdat het delta T vier keer zo klein is.

Sluit je een vloerverwarmingsverdeler met een eigen pomp aan op de ketel, zorg dan voor een hydraulisch neutrale aansluiting: is die er niet, dan kan er ongewenste circulatie over het ketelcircuit ontstaan, ook als er geen warmtevraag is. Het daadwerkelijk instellen van het debiet per kring (inregelen) hoort bij het onderwerp van [module 14](module:m14): hier gaat het om wat de verdeler en de kring zijn, niet om de inregelprocedure zelf.
`,
  checklist: [
    'Ik kan uitleggen wat een verdeler doet en waarom hij de watertemperatuur niet zelf verandert',
    'Ik ken het verschil tussen de aanvoertemperatuur van het water en de oppervlaktetemperatuur van de vloer',
    'Ik herken wanneer een mengverdeler met pomp nodig is',
    'Ik kan met de debietformule het benodigde debiet van een vloerverwarmingskring schatten bij een gegeven aanname voor delta T',
    'Ik weet dat een vloerverwarmingsverdeler met eigen pomp hydraulisch neutraal moet worden aangesloten'
  ],
  quiz: [
    {
      vraag: `Wat is de functie van de verdeler van een vloerverwarmingssysteem?`,
      opties: [
        `Hij verlaagt de watertemperatuur naar het niveau dat de vloer nodig heeft`,
        `Hij verdeelt het aangevoerde water gericht over de aangesloten kringen`,
        `Hij regelt de kamertemperatuur rechtstreeks zonder thermostaat`,
        `Hij verhoogt de druk in het vloerverwarmingscircuit`
      ],
      goed: 1,
      uitleg: `De verdeler verdeelt het debiet over de kringen; het verlagen van de temperatuur is de taak van de mengklep of mengverdeler, niet van de verdeler zelf. Kamerregeling en drukverhoging zijn functies van andere onderdelen.`
    },
    {
      vraag: `Een cv-ketel werkt op ongeveer 80 graden aanvoer voor de radiatoren. Wat is er nodig om dezelfde ketel ook een vloerverwarmingscircuit te laten voeden?`,
      opties: [
        `Niets extra's: vloerverwarming kan altijd rechtstreeks op de ketelaanvoer worden aangesloten`,
        `Een grotere verdeler met meer groepen`,
        `Een tweede, aparte ketel die alleen voor de vloerverwarming werkt`,
        `Een mengverdeler met pomp die de temperatuur verlaagt`
      ],
      goed: 3,
      uitleg: `Zonder mengunit komt de volledige, te hoge ketelaanvoertemperatuur in de vloer terecht. Een grotere verdeler of een tweede ketel lossen het temperatuurverschil niet op; een mengverdeler met pomp doet dat wel.`
    },
    {
      vraag: `Wat is het verschil tussen de maximale aanvoertemperatuur van het water naar de vloer (een fabrikant noemt als voorbeeld 50 graden) en de maximale oppervlaktetemperatuur van de afgewerkte vloer?`,
      opties: [
        `Er is geen verschil: beide grenzen zijn altijd gelijk`,
        `De oppervlaktetemperatuur van de vloer ligt in werkelijkheid hoger dan de aanvoertemperatuur van het water`,
        `De aanvoertemperatuur van het water ligt hoger dan de oppervlaktetemperatuur`,
        `De aanvoertemperatuur geldt alleen voor droge systemen, de oppervlaktetemperatuur alleen voor natte systemen`
      ],
      goed: 2,
      uitleg: `Het water dat de verdeler in gaat, is warmer dan wat je op de afgewerkte vloer voelt: isolatie, dekvloer en afwerking verlagen de temperatuur op weg naar het oppervlak. Dit zijn twee verschillende grenzen die je niet mag verwisselen.`
    },
    {
      vraag: `Wat kan er gebeuren als een mengklep in een vloerverwarmingssysteem vastloopt in de verkeerde stand?`,
      opties: [
        `De vloer kan te heet worden, met kans op schade`,
        `De pomp brandt dan onmiddellijk door`,
        `De ketel komt dan vrijwel altijd automatisch in storing terecht`,
        `De druk in het systeem wordt dan te laag`
      ],
      goed: 0,
      uitleg: `Zonder correcte menging krijgt de vloer de hoge ketelaanvoertemperatuur, wat de vloerafwerking kan beschadigen en de oppervlaktetemperatuur boven de veilige grens kan brengen. Dat de pomp doorbrandt, de ketel automatisch stopt of de druk daalt, volgt hier niet automatisch uit.`
    },
    {
      vraag: `Een vloerverwarmingskring levert 600 W bij een aangenomen delta T van 5 K. Wat is het benodigde debiet ongeveer?`,
      opties: [`26 l/h`, `103 l/h`, `52 l/h`, `600 l/h`],
      goed: 1,
      uitleg: `Debiet = 600 / (1,163 x 5) is ongeveer 103 l/h. 26 l/h hoort bij een delta T van 20 K (zoals bij een radiatorcircuit), 52 l/h is de helft daarvan en klopt niet met de formule, en 600 l/h is het vermogen zelf, geen debiet.`
    },
    {
      vraag: `Waarom vraagt een vloerverwarmingskring bij hetzelfde vermogen meestal een groter debiet dan een radiatorcircuit?`,
      opties: [
        `Omdat vloerverwarmingsbuizen een grotere diameter hebben`,
        `Omdat vloerverwarming altijd op een hogere temperatuur werkt dan radiatoren`,
        `Omdat de pomp van een vloerverwarmingsverdeler altijd zwakker is`,
        `Omdat het temperatuurverschil bij vloerverwarming meestal kleiner is`
      ],
      goed: 3,
      uitleg: `Bij een kleiner delta T is voor hetzelfde vermogen meer debiet nodig, volgens de debietformule. Buisdiameter, pompsterkte en de aanname dat vloerverwarming op hogere temperatuur werkt (het is juist andersom) zijn hier niet de verklaring.`
    }
  ],
  kaarten: [
    { voor: `Wat doet de verdeler van een vloerverwarmingssysteem?`, achter: `Hij verdeelt het aangevoerde water gericht over de aangesloten kringen, met debietmeters per kring.` },
    { voor: `Wanneer is een mengverdeler met eigen pomp nodig?`, achter: `Als de warmtebron (bijvoorbeeld een cv-ketel op ongeveer 80 graden) op een hogere temperatuur werkt dan de vloer verdraagt.` },
    { voor: `Wat is het verschil tussen de aanvoertemperatuur van het water en de oppervlaktetemperatuur van de vloer?`, achter: `De aanvoertemperatuur van het water ligt hoger; de opbouw (isolatie, dekvloer, afwerking) verlaagt de temperatuur naar het oppervlak.` },
    { voor: `Wat kan er misgaan als een mengklep in een vloerverwarmingssysteem vastloopt?`, achter: `De volledige, hogere ketelaanvoertemperatuur kan in de vloer komen, met kans op schade aan de afwerking en een te hoge oppervlaktetemperatuur.` },
    { voor: `Hoe regelt de Uponor Fluvia Move de aanvoertemperatuur?`, achter: `Met een driewegmengklep met 230 V-motoraandrijving en een geregelde circulatiepomp, weersafhankelijk gestuurd.` },
    { voor: `Bereken het debiet van een kring die 900 W levert bij een aangenomen delta T van 5 K.`, achter: `900 / (1,163 x 5) is ongeveer 155 l/h.` },
    { voor: `Waarom moet een vloerverwarmingsverdeler met eigen pomp hydraulisch neutraal op de ketel worden aangesloten?`, achter: `Anders kan er ongewenste circulatie over het ketelcircuit ontstaan, ook zonder warmtevraag.` }
  ],
  bronnen: ['AFG-26', 'AFG-27', 'AFG-28', 'AFG-29', 'AFG-30', 'AFG-31', 'AFG-32', 'AFG-33', 'AFG-45', 'HYD-25', 'REG-16']
},

/* ------------------------------------------------------------------ 7.5 */
{
  id: 'm07l05',
  nr: '7.5',
  titel: 'Afgiftesystemen combineren en koppelen aan de warmtebron',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe je radiatoren en vloerverwarming combineert en wat ketel of warmtepomp daarvan verwacht.',
  videos: [
    { taal: 'nl', titel: 'Vloerverwarming bijplaatsen in een bestaand verwarmingssysteem (TV Emiel)', yt: 'DZJtQ5dTubo', duur: '±3 min, 2019' },
    { taal: 'nl', titel: 'Oude cv-radiatoren eruit, vloerverwarming en warmtepomp erin (Loodgieter Den Haag Stad)', yt: 'wYYcxoNhC-Q', duur: '±1 min, 2024' },
    { taal: 'en', titel: 'How to Combine Ground Source Heat Pumps with Underfloor Heating (Underfloor Heating Trade Supplies)', yt: '4-vp186h-j0', duur: '±4 min, 2024' }
  ],
  tekst: `
## Radiatoren en vloerverwarming op een ketel

Veel woningen hebben radiatoren op de verdieping en vloerverwarming in een aanbouw of begane grond, of krijgen vloerverwarming toegevoegd bij een verbouwing terwijl de bestaande radiatoren blijven staan. Dat kan op een ketel, maar niet zomaar op dezelfde leiding.

Intergas biedt hiervoor bijvoorbeeld een driewegklepset die de installatie opsplitst in een **hogetemperatuurzone** (de radiatoren, op de temperatuur die de ketel aanstuurt) en een **laagtemperatuurzone** (de vloerverwarming, op een lagere temperatuur). Een aanlegsensor bewaakt de laagtemperatuurzone en schakelt de brander uit als de veiligheidstemperatuur wordt overschreden.

!!! kern Twee temperaturen, twee zones, nooit rechtstreeks aftakken
Radiatoren en vloerverwarming vragen elk hun eigen temperatuur. Vloerverwarming rechtstreeks aftakken van de radiatoraanvoer, zonder mengunit, geeft een te hoge temperatuur in de vloer: dat overschrijdt zowel de constructiegrens van het vloersysteem als de toegestane oppervlaktetemperatuur (les 7.3 en 7.4).
!!!

## Mengen tegenover directe aansluiting

De radiatorzone kan rechtstreeks op de ketelaanvoer blijven werken (eventueel begrensd door de ketelinstelling of een stooklijn). De vloerverwarmingszone loopt altijd via een mengverdeler die de temperatuur omlaag mengt naar het niveau dat de vloer verdraagt (les 7.4). Er is dus geen keuze tussen mengen of direct aansluiten voor de vloerverwarming: mengen is de enige juiste optie zodra de warmtebron warmer werkt dan de vloer toestaat. Directe aansluiting is alleen mogelijk als de hele installatie al op de lage temperatuur van de vloerverwarming werkt, bijvoorbeeld bij een warmtepomp die overal laag genoeg stookt.

## Wat een warmtepomp of hybride systeem vraagt

Een warmtepomp levert het meeste rendement bij een lage aanvoertemperatuur: Vaillant noemt vloerverwarming het meest efficiënte afgiftesysteem, omdat daar maar ongeveer 35 graden watertemperatuur voor nodig is. Klassieke radiatoren die op hoge temperatuur zijn ontworpen, vragen een hogere aanvoertemperatuur dan optimaal is voor een warmtepomp: de warmtepomp moet dan harder werken, wat het rendement (de COP) verlaagt.

Bij een lagere aanvoertemperatuur moet ook het waterdebiet omhoog om hetzelfde vermogen te leveren (les 7.2 en 7.4), wat kan betekenen dat bestaande leidingdiameters te klein worden voor de nieuwe situatie. Dat is een reden om bij het combineren van systemen niet alleen naar de radiator of de vloer te kijken, maar naar de installatie als geheel: pomp, leidingen en debiet moeten meegroeien.

Vaillant noemt ventilo-convectoren als alternatief voor radiatoren bij een warmtepomp: die kunnen in de zomer ook actief koelen, wat een gewone radiator niet kan. Dat maakt ze een overweging bij een volledig elektrische warmtepomp, waar koeling soms gewenst is.

## Praktijkgeval: uitbreiding met vloerverwarming

Een woning heeft radiatoren op de bovenverdieping, aangesloten op een bestaande HR-ketel. Bij een aanbouw met vloerverwarming op de begane grond wordt gekozen voor een driewegklepset zoals bij Intergas: de radiatorzone blijft op de bestaande instelling werken, de nieuwe vloerverwarmingszone krijgt een eigen mengverdeler die de temperatuur naar het niveau van de vloer brengt, bewaakt door een aanlegsensor. Komt er later een hybride warmtepomp bij, dan verandert er niets aan deze zone-indeling: de warmtepomp of de ketel levert het water op de temperatuur die de radiatorzone nodig heeft, en de mengverdeler blijft de vloerverwarmingszone op zijn eigen, lagere temperatuur houden.

?? Verdieping: wat als de hele woning naar lage temperatuur overgaat?
Gaat de hele installatie (ook de radiatorzone) naar een temperatuur die de vloerverwarming ook aankan, dan kan de aparte laagtemperatuurzone met mengverdeler in principe vervallen: de hele installatie werkt dan op een temperatuur die overal past. Dat is precies wat een goed voorbereide overstap naar een volledig elektrische warmtepomp betekent: niet alleen de warmtebron vervangen, maar het hele afgiftesysteem laten passen bij één lage temperatuur.
??
`,
  checklist: [
    'Ik kan uitleggen waarom radiatoren en vloerverwarming op een ketel elk hun eigen temperatuurzone nodig hebben',
    'Ik weet dat vloerverwarming nooit rechtstreeks op een hetere radiatoraanvoer mag worden aangesloten zonder mengunit',
    'Ik kan uitleggen waarom vloerverwarming het meest efficiënte afgiftesysteem is voor een warmtepomp',
    'Ik weet dat een lagere aanvoertemperatuur ook meer debiet en dus mogelijk andere leidingen vraagt',
    'Ik kan een ventilo-convector als alternatief voor een radiator benoemen, met het voordeel van koeling in de zomer'
  ],
  quiz: [
    {
      vraag: `Waarom kan vloerverwarming niet zomaar worden aangesloten op de aanvoerleiding van bestaande radiatoren die op hoge temperatuur werken?`,
      opties: [
        `Omdat de hoge temperatuur de grens van de vloer overschrijdt`,
        `Omdat radiatoren en vloerverwarming een ander type water gebruiken`,
        `Omdat vloerverwarming altijd een eigen ketel nodig heeft`,
        `Omdat radiatoren en vloerverwarming nooit gelijktijdig warmtevraag mogen hebben van de ketel`
      ],
      goed: 0,
      uitleg: `Zonder menging krijgt de vloer een te hoge temperatuur, wat schade en een te hoge oppervlaktetemperatuur kan geven (les 7.3 en 7.4). Een apart watertype, een eigen ketel of een verbod op gelijktijdige warmtevraag zijn geen van alle de echte reden.`
    },
    {
      vraag: `Een driewegklepset (voorbeeld: Intergas) splitst een installatie in een hogetemperatuurzone en een laagtemperatuurzone. Welke onderdelen horen bij de laagtemperatuurzone?`,
      opties: [
        `De radiatoren, rechtstreeks op de ketelaanvoer`,
        `De vloerverwarming, bewaakt door een aanlegsensor`,
        `Alleen de warmwatervoorziening van de ketel`,
        `De gehele installatie, dus radiatoren en vloerverwarming precies samen`
      ],
      goed: 1,
      uitleg: `De laagtemperatuurzone is de vloerverwarming, bewaakt door een aanlegsensor die de brander uitschakelt bij overschrijding van de veiligheidstemperatuur. De radiatoren horen bij de hogetemperatuurzone, en warmwater en "de gehele installatie" zijn hier niet de laagtemperatuurzone.`
    },
    {
      vraag: `Waarom noemt Vaillant vloerverwarming het meest efficiënte afgiftesysteem voor een warmtepomp?`,
      opties: [
        `Omdat vloerverwarming minder onderhoud nodig heeft dan radiatoren`,
        `Omdat vloerverwarming een aanzienlijk hoger vermogen heeft dan elke gewone radiator`,
        `Omdat vloerverwarming voldoende heeft aan een lage watertemperatuur`,
        `Omdat vloerverwarming geen debiet nodig heeft`
      ],
      goed: 2,
      uitleg: `Vloerverwarming werkt met een lage watertemperatuur (Vaillant noemt ongeveer 35 graden), waardoor de warmtepomp minder hard hoeft te werken en efficiënter draait. Onderhoud, vergelijking van vermogen en het ontbreken van debiet zijn hier niet de verklaring.`
    },
    {
      vraag: `Wat gebeurt er met het benodigde debiet als een installatie overstapt naar een lagere aanvoertemperatuur, bij gelijk vermogen?`,
      opties: [
        `Het debiet daalt, omdat het water minder snel afkoelt`,
        `Het debiet blijft exact gelijk, want dat hangt alleen af van het vermogen van de ketel`,
        `Het debiet wordt onbepaald zonder de retourtemperatuur te meten`,
        `Het debiet stijgt, omdat het temperatuurverschil kleiner wordt`
      ],
      goed: 3,
      uitleg: `Bij een kleiner temperatuurverschil is voor hetzelfde vermogen meer debiet nodig (les 7.2 en 7.4). Dat kan betekenen dat bestaande leidingen te klein worden voor de nieuwe situatie. Alleen naar het ketelvermogen kijken is dus niet genoeg.`
    },
    {
      vraag: `Welk voordeel heeft een ventilo-convector ten opzichte van een gewone radiator bij een volledig elektrische warmtepomp?`,
      opties: [
        `Hij heeft nooit onderhoud nodig`,
        `Hij werkt zonder elektriciteit`,
        `Hij kan in de zomer ook actief koelen`,
        `Hij heeft geen aansluiting op de cv-installatie nodig`
      ],
      goed: 2,
      uitleg: `Een ventilo-convector kan in de zomer actief koelen, wat een gewone radiator niet kan. Hij heeft wel elektriciteit en een cv-aansluiting nodig, en onderhoud blijft ook bij dit type nodig.`
    },
    {
      vraag: `Een woning krijgt naast de bestaande radiatoren een nieuwe vloerverwarmingszone. Wat is de juiste volgorde van redeneren voor de aansluiting op de warmtebron?`,
      opties: [
        `Eerst de temperatuur per zone vaststellen, dan een mengverdeler plaatsen en bewaken`,
        `Eerst kijken welk merk mengverdeler het goedkoopst is, dan pas de temperaturen bepalen`,
        `De vloerverwarming voor het gemak altijd op dezelfde temperatuur als de radiatoren laten werken`,
        `Wachten tot er een storing optreedt en dan pas de zone-indeling aanpassen`
      ],
      goed: 0,
      uitleg: `Eerst de benodigde temperatuur per zone bepalen, dan de vloerverwarmingszone via een mengverdeler op zijn eigen, lagere temperatuur brengen en bewaken. Prijs vooraf laten bepalen, beide zones gelijk laten werken, of wachten op een storing zijn geen veilige of doordachte aanpak.`
    }
  ],
  kaarten: [
    { voor: `Waarom hebben radiatoren en vloerverwarming op een ketel elk hun eigen temperatuurzone nodig?`, achter: `Omdat ze elk een andere temperatuur nodig hebben; de vloer verdraagt de hoge radiatortemperatuur niet.` },
    { voor: `Hoe splitst een driewegklepset (voorbeeld Intergas) de installatie?`, achter: `In een hogetemperatuurzone (radiatoren) en een laagtemperatuurzone (vloerverwarming), bewaakt door een aanlegsensor.` },
    { voor: `Mag vloerverwarming rechtstreeks op een hete radiatoraanvoer worden aangesloten?`, achter: `Nee, alleen via een mengverdeler die de temperatuur omlaag mengt.` },
    { voor: `Waarom is vloerverwarming het meest efficiënte afgiftesysteem voor een warmtepomp?`, achter: `Omdat het maar een lage watertemperatuur nodig heeft (voorbeeld ongeveer 35 graden), wat het rendement (de COP) verhoogt.` },
    { voor: `Wat kost een klassieke radiator een warmtepomp bij hoge temperatuur?`, achter: `De warmtepomp moet harder werken om de hogere temperatuur te leveren, wat het rendement (de COP) verlaagt.` },
    { voor: `Wat kan een ventilo-convector die een gewone radiator niet kan?`, achter: `In de zomer actief koelen.` },
    { voor: `Wat verandert er aan debiet en leidingen als je naar lagere temperatuur overstapt?`, achter: `Het benodigde debiet stijgt bij gelijk vermogen, wat bestaande leidingen te klein kan maken.` }
  ],
  bronnen: ['REG-18', 'AFG-26', 'AFG-30', 'AFG-36', 'AFG-37', 'AFG-38', 'AFG-39', 'HYD-25']
},

/* ------------------------------------------------------------------ 7.6 */
{
  id: 'm07l06',
  nr: '7.6',
  titel: 'Een afgiftesysteem beoordelen en optimaliseren',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt een bestaand afgiftesysteem beoordelen en gericht verbeteren voor meer comfort en een lager gasverbruik.',
  videos: [
    { taal: 'nl', titel: 'Is mijn woning geschikt voor een warmtepomp? De 50 graden test (Isoreno Warmtepompen)', yt: '2d4fQ1u9Mzs', duur: '±4 min, 2024' },
    { taal: 'nl', titel: 'Krijgt jouw huis het warm van 50 graden? (Milieu Centraal)', yt: 'tqsWo85deqg', duur: '±0,5 min, 2021' },
    { taal: 'en', titel: 'Should I Upgrade My Radiators for a Heat Pump? (Heat Geek)', yt: '9fcsgrrHSQ8', duur: '±7 min, 2022' }
  ],
  tekst: `
## Nagaan of het systeem bij een lagere temperatuur kan

Voor je radiatoren vervangt of vloerverwarming aanlegt, is het de moeite waard om eerst te testen wat het bestaande systeem al aankan. Milieu Centraal biedt daarvoor de **Verwarmingstest** aan: de bewoner zet de aanvoertemperatuur van de cv-ketel het hele stookseizoen op 50 graden en houdt dagelijks bij of de woonkamer 's ochtends op temperatuur komt. Blijft het huis warm genoeg, dan is de installatie waarschijnlijk geschikt voor lage temperatuur en een volledig elektrische of hybride warmtepomp. Wordt het bij een koude periode (Milieu Centraal noemt als voorbeeld -5 graden, 24 uur aanhoudend) niet warm genoeg, dan is een aparte berekening van het benodigde vermogen verstandiger dan alleen op de test te vertrouwen.

Vaillant beschrijft een vergelijkbare, snellere test: op een koude dag alle radiatorkranen volledig open zetten, de aanvoertemperatuur via de stooklijn stapsgewijs verlagen, en controleren of de woning warm blijft bij een aanvoertemperatuur van 55 graden of lager.

!!! kern Eerst een praktijktest, dan pas vervangen
Een praktijktest op een koude dag geeft in korte tijd een goed beeld van wat een bestaand afgiftesysteem al aankan, zonder dat je meteen een radiator vervangt. Vervang je op basis van een vermoeden, dan loop je het risico geld uit te geven aan iets dat niet nodig was, of juist te weinig te doen als het probleem ergens anders zit (zoals bij het debiet, zie hieronder).
!!!

## Wat je meet

Blijkt een ruimte bij een lagere temperatuur niet warm te worden, ga dan niet meteen uit van "de radiator is te klein". Onvoldoende debiet door een te hoge drukval bij een lager delta T (de drukval neemt kwadratisch toe met het debiet, [les 3.1](les:m03l01)) kan hetzelfde effect geven als een echt te kleine radiator. Controleer daarom eerst:

- of de radiatorkranen volledig open staan en niet gedeeltelijk dicht (bijvoorbeeld door een knop die per ongeluk is verdraaid);
- of de pompsnelheid voldoende is voor het gewenste debiet, en verhoog die zo nodig (zie de parameterinstelling in [les 3.4](les:m03l04));
- of er lucht in het systeem zit die de doorstroming van die ene radiator blokkeert;
- pas daarna, met het gemeten resultaat in de hand, of de radiator zelf te klein is voor het gewenste regime.

## Rekenvoorbeeld: is deze radiator groot genoeg bij een lagere temperatuur?

Een radiator heeft een genormeerd vermogen van 1500 W bij 75/65/20. De bewoner wil naar regime 55/45/20 (delta T 30 K). Met de exponentformule uit les 7.1 (n = 1,3):

Vermogen bij 55/45/20 = 1500 x (30 / 50)^1,3 = 1500 x 0,52 = ongeveer 780 W

De ruimte heeft volgens de warmteverliesberekening ongeveer 900 W nodig bij de laagste ontwerptemperatuur. Bij 780 W haalt deze radiator dat niet: er is een tekort van ongeveer 120 W. Mogelijke oplossingen, van eenvoudig naar ingrijpend: een ventilator toevoegen (kan een bestaande radiator ongeveer 25 procent meer vermogen geven, wat hier ruim voldoende is), de radiator vervangen door een groter model of een LT-radiator, of in deze ruimte alsnog op een iets hogere temperatuur stoken dan de rest van de woning.

## Veelgemaakte fouten

Een test alleen op een milde dag uitvoeren geeft een te optimistisch beeld: comfortklachten bij een lagere aanvoertemperatuur komen het scherpst naar voren op de koudste dagen van het jaar, niet bij 10 graden buiten. Beoordeel of vraag daarom altijd door naar het gedrag bij vorst, niet alleen naar het gevoel op een gewone dag.

Een andere veelgemaakte fout is een radiator vervangen zonder eerst het debiet te controleren: als de eigenlijke oorzaak een te lage pompsnelheid of een dichtstaande kraan is, verdwijnt de klacht niet met een nieuwe, grotere radiator, en heb je onnodig kosten gemaakt. Volg daarom de volgorde hierboven: eerst meten en de eenvoudige oorzaken uitsluiten, dan pas vervangen.

## Checklist voor de beoordeling

Een systematische beoordeling van een bestaand afgiftesysteem doorloopt: de gewenste aanvoertemperatuur (bijvoorbeeld met de Verwarmingstest of de vierstappentest), het type en de staat van elke radiator of vloerverwarmingskring, het debiet en de drukval per circuit, en de vraag of elke ruimte afzonderlijk voldoende vermogen krijgt bij de gewenste temperatuur. Het waterzijdig inregelen zelf, waarmee je het debiet definitief per kring afstelt, komt aan de orde in [module 14](module:m14): deze les gaat over de beoordeling die daaraan voorafgaat.
`,
  checklist: [
    'Ik kan de Verwarmingstest en de vierstappentest gebruiken om een bestaand afgiftesysteem op lage temperatuur te beoordelen',
    'Ik controleer debiet, kranen en lucht voor ik een radiator te klein verklaar',
    'Ik kan met de exponentformule berekenen of een radiator bij een lagere temperatuur nog genoeg vermogen geeft',
    'Ik ken de volgorde van maatregelen: eerst eenvoudige aanpassingen, dan pas vervangen',
    'Ik weet dat een test alleen bij mild weer een te optimistisch beeld geeft',
    'Ik weet dat het inregelen zelf in module 14 aan de orde komt, niet in deze les'
  ],
  quiz: [
    {
      vraag: `Waarom is het verstandig om eerst een praktijktest te doen voordat je een radiator vervangt of vloerverwarming aanlegt?`,
      opties: [
        `Omdat een test snel laat zien wat het systeem al aankan`,
        `Omdat een praktijktest wettelijk verplicht is voor elke verbouwing`,
        `Omdat een praktijktest de hele warmteverliesberekening in alle gevallen overbodig maakt`,
        `Omdat een praktijktest de enige manier is om de retourtemperatuur te meten`
      ],
      goed: 0,
      uitleg: `Een test zoals de Verwarmingstest of de vierstappentest geeft snel een praktische indicatie. Hij is niet wettelijk verplicht, maakt een berekening niet in alle gevallen overbodig (bij twijfel blijft rekenen nodig), en is niet de enige manier om de retourtemperatuur te meten.`
    },
    {
      vraag: `Een ruimte blijft koud bij een lagere aanvoertemperatuur. Wat controleer je als eerste, voordat je concludeert dat de radiator te klein is?`,
      opties: [
        `Meteen een grotere radiator bestellen`,
        `De kleur van de radiator, want een donkere radiator straalt merkbaar meer warmte uit`,
        `Of de kranen open staan en het debiet voldoende is`,
        `Of de bewoner de thermostaat wel op de juiste kamer heeft gezet`
      ],
      goed: 2,
      uitleg: `Onvoldoende debiet, een dichte kraan of lucht in het systeem kunnen hetzelfde effect geven als een te kleine radiator. Die controleer je eerst. De kleur van een radiator heeft geen relevant effect op dit probleem, en de thermostaatplaatsing is een ander onderwerp.`
    },
    {
      vraag: `Een radiator van 1500 W bij 75/65/20 wordt gebruikt op regime 55/45/20 (delta T 30 K, factor ongeveer 0,52). De ruimte heeft 900 W nodig. Klopt dat?`,
      opties: [
        `Ja, want 1500 W is ruim voldoende, ongeacht het regime`,
        `Ja, want bij een lagere temperatuur heeft een ruimte automatisch minder vermogen nodig`,
        `Nee, want bij 55/45/20 levert de radiator helemaal geen vermogen meer`,
        `Nee, de radiator levert dan ongeveer 780 W, wat minder is dan de benodigde 900 W`
      ],
      goed: 3,
      uitleg: `1500 x 0,52 is ongeveer 780 W, wat minder is dan de benodigde 900 W: een tekort van ongeveer 120 W. Het genormeerde vermogen van 1500 W geldt alleen bij het referentieregime, de warmtevraag van de ruimte verandert niet mee met het regime van de radiator, en bij 55/45/20 geeft de radiator wel degelijk nog vermogen.`
    },
    {
      vraag: `Bij het tekort uit de vorige vraag (ongeveer 120 W): wat is een logische, eenvoudige eerste maatregel?`,
      opties: [
        `Direct de hele installatie vervangen door vloerverwarming`,
        `Een ventilator aan de bestaande radiator toevoegen`,
        `De ruimte niet meer verwarmen`,
        `De warmteverliesberekening volledig negeren en de temperatuur toch fors verlagen`
      ],
      goed: 1,
      uitleg: `Een ventilator kan een bestaand tekort van ongeveer 120 W op 780 W ruimschoots opvangen (25 procent van 780 W is ongeveer 195 W) en is eenvoudiger dan de hele installatie vervangen. De ruimte niet meer verwarmen of de berekening negeren zijn geen oplossingen.`
    },
    {
      vraag: `Waarom geeft een geschiktheidstest die alleen op een milde dag wordt uitgevoerd een onbetrouwbaar beeld?`,
      opties: [
        `Omdat de ketel op milde dagen minder nauwkeurig regelt`,
        `Omdat een milde dag de retourtemperatuur volledig onmeetbaar en onbetrouwbaar zou maken`,
        `Comfortklachten komen het scherpst naar voren op de koudste dagen`,
        `Omdat de test dan wettelijk niet geldig is`
      ],
      goed: 2,
      uitleg: `Bij mild weer is er weinig warmtevraag, waardoor een tekort niet aan het licht komt. Pas bij lage buitentemperaturen wordt het afgiftesysteem echt op de proef gesteld. De andere opties zijn niet de verklaring.`
    },
    {
      vraag: `Waarom kan het vervangen van een radiator zonder eerst het debiet te controleren onnodige kosten geven?`,
      opties: [
        `Omdat de klacht kan blijven bestaan als de oorzaak elders zit`,
        `Omdat een nieuwe radiator vrijwel altijd duurder is dan het oorspronkelijke probleem ooit waard was`,
        `Omdat een nieuwe radiator wettelijk gekeurd moet worden`,
        `Omdat vervanging van een radiator altijd een nieuwe ketel vereist`
      ],
      goed: 0,
      uitleg: `Als de oorzaak in het debiet zit, verdwijnt de klacht niet met een nieuwe radiator: dan heb je vervangen zonder de oorzaak op te lossen. De andere opties beschrijven geen echte reden voor onnodige kosten in deze situatie.`
    }
  ],
  kaarten: [
    { voor: `Wat is de Verwarmingstest van Milieu Centraal?`, achter: `De aanvoertemperatuur van de cv-ketel het hele stookseizoen op 50 graden zetten en dagelijks bijhouden of het huis warm genoeg blijft.` },
    { voor: `Wat is de vierstappentest van Vaillant?`, achter: `Radiatorkranen volledig open, aanvoertemperatuur stapsgewijs verlagen via de stooklijn, controleren of de woning warm blijft bij 55 graden of lager.` },
    { voor: `Wat controleer je eerst als een ruimte koud blijft bij een lagere temperatuur, voor je de radiator te klein verklaart?`, achter: `Of de kranen open staan, het debiet voldoende is (pompsnelheid) en er geen lucht in het systeem zit.` },
    { voor: `Waarom kan onvoldoende debiet dezelfde klacht geven als een te kleine radiator?`, achter: `Beide geven te weinig warmteafgifte in die ruimte; alleen de oorzaak is anders.` },
    { voor: `Wat is de volgorde van maatregelen bij een tekort aan radiatorvermogen?`, achter: `Eerst eenvoudige aanpassingen (ventilator, debiet), dan pas vervangen door een grotere of LT-radiator.` },
    { voor: `Waarom geeft een test op een milde dag een te positief beeld?`, achter: `Comfortklachten bij lage temperatuur komen het scherpst naar voren op de koudste dagen, niet bij mild weer.` },
    { voor: `Wat hoort bij de beoordeling van een afgiftesysteem, en wat niet (dat komt in module 14)?`, achter: `Beoordelen (temperatuur, debiet, vermogen per ruimte) hoort hier. Het daadwerkelijke inregelen van het debiet per kring komt in module 14.` }
  ],
  bronnen: ['AFG-03', 'AFG-04', 'AFG-09', 'AFG-10', 'AFG-12', 'AFG-13', 'AFG-14', 'AFG-40', 'AFG-41', 'AFG-42', 'AFG-43', 'HYD-21', 'HYD-24']
}

  ]
});
