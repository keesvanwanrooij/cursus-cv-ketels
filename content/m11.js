/* ==========================================================================
   m11.js - Module 11: Ontwerpen en dimensioneren
   Geschreven op basis van project/docs/feiten/17-ontwerpen-en-dimensioneren.md (DIM),
   met hergebruik van 03-ketel-hydrauliek-regeling.md (HYD, KET, REG),
   07-regeling-en-tapwater.md (RGL), 14-waterzijdig-inregelen.md (INR),
   04-rookgas-en-luchttoevoer.md (RGA), 05-installeren-meten-onderhoud-storingen.md (STO)
   en 01-wet-en-certificering.md (EXA). Warmteleer: module 2. Hydraulica: module 3.
   Afgifte: module 7. Rookgasafvoer: module 4/8. Inregelen: module 14.
   ========================================================================== */

CURSUS.addModule({
  id: 'm11',
  nr: 11,
  deel: 2,
  titel: 'Ontwerpen en dimensioneren',
  ondertitel: 'Van warmtebehoefte naar een installatie die past.',
  niveau: 'Gevorderd',
  studietijd: 9,
  intro: 'Hoe je van de warmtebehoefte van een woning komt tot een passende installatie: warmteverlies, ketelvermogen, leidingen, pomp, expansievat en afvoer. Ontwerpen is kiezen op basis van berekening, niet op gevoel.',
  leerdoelen: [
    'Het warmteverlies van een vertrek en een woning berekenen',
    'Het ketelvermogen kiezen, inclusief tapwater',
    'Leidingen dimensioneren op debiet, stroomsnelheid en drukverlies',
    'Pomp en expansievat kiezen op basis van berekening',
    'Controleren of afvoer en luchttoevoer binnen de toegestane lengte blijven',
    'Een compleet ontwerp uitwerken en onderbouwen'
  ],
  examen: [
    {
      vraag: `Welke ISSO-publicatie gebruik je voor de warmteverliesberekening van een gewone woning?`,
      opties: [`ISSO 53`, `ISSO 51`, `ISSO 57`, `NEN 5066`],
      goed: 1,
      uitleg: `ISSO 51 is bedoeld voor woningen en woongebouwen. ISSO 53 geldt voor utiliteitsgebouwen tot 4 m vertrekhoogte en ISSO 57 voor gebouwen met hogere ruimten: geen van beide is voor een woning. NEN 5066 is de ingetrokken voorganger van de huidige methode.`
    },
    {
      vraag: `Twee gevels hebben gelijk oppervlak en gelijk ΔT. Gevel A heeft Rc = 3,5 m2K/W, gevel B heeft Rc = 7,0 m2K/W. Hoe verhouden de transmissieverliezen zich ongeveer?`,
      opties: [
        `Gevel B verliest ongeveer twee keer zoveel warmte als gevel A`,
        `Gevel A verliest ongeveer vier keer zoveel warmte als gevel B`,
        `Gevel A verliest ongeveer twee keer zoveel warmte als gevel B`,
        `Beide gevels verliezen ongeveer evenveel, want oppervlak en ΔT zijn gelijk`
      ],
      goed: 2,
      uitleg: `U_A = 1 / 3,5 = 0,286 W/(m2K), U_B = 1 / 7,0 = 0,143 W/(m2K): U_A is twee keer zo groot als U_B, dus bij gelijk oppervlak en ΔT verliest gevel A ongeveer twee keer zoveel warmte als gevel B. De eerste optie draait de verhouding om, de tweede verdubbelt die nog eens onterecht, en "evenveel" gaat voorbij aan het verschil in Rc.`
    },
    {
      vraag: `Een verblijfsgebied van 25 m2 heeft volgens het Bbl een ventilatiecapaciteit van 0,9 dm3/s per m2 nodig. Wat is het benodigde debiet ongeveer in m3/h?`,
      opties: [`ongeveer 81 m3/h`, `ongeveer 22,5 m3/h`, `ongeveer 810 m3/h`, `ongeveer 2,25 m3/h`],
      goed: 0,
      uitleg: `25 x 0,9 = 22,5 dm3/s. Om naar m3/h te gaan vermenigvuldig je met 3,6: 22,5 x 3,6 = 81 m3/h. 22,5 m3/h verwart dm3/s met m3/h. 810 m3/h vermenigvuldigt met 36 in plaats van 3,6. 2,25 m3/h deelt in plaats van vermenigvuldigt.`
    },
    {
      vraag: `Een Remeha Calenta 25s heeft een modulatiebereik van 5,2 tot 25,0 kW. De warmtevraag van een woning is bij een buitentemperatuur van 5 °C nog maar 3,0 kW. Wat gebeurt er?`,
      opties: [
        `De ketel modulert probleemloos naar 3,0 kW, want dat ligt onder het maximum van 25,0 kW`,
        `De ketel schakelt automatisch over op een lager vermogensbereik van 1,0 tot 5,2 kW`,
        `De ketel blijft continu op 25,0 kW draaien tot de gevraagde temperatuur is bereikt`,
        `De ketel gaat pendelen, omdat 3,0 kW onder het minimum van 5,2 kW ligt`
      ],
      goed: 3,
      uitleg: `Het modulatiebereik heeft ook een ondergrens: onder 5,2 kW kan deze ketel niet stabiel doorbranden, dus schakelt hij aan en uit (pendelen). Dat het vermogen onder het maximum blijft is niet genoeg: het gaat om de ondergrens. Een ketel heeft geen los, lager tweede bereik en draait bij lage vraag niet continu op zijn maximum.`
    },
    {
      vraag: `Wat is het belangrijkste verschil tussen de Nederlandse CW-klasse en de Europese energielabel-capaciteitsklasse (tapprofiel) van een combiketel?`,
      opties: [
        `De CW-klasse is verplicht in heel Europa, de EU-klasse alleen in Nederland`,
        `De CW-klasse gaat over het gebruikscomfort (debiet), de EU-klasse vooral over het energieverbruik over de dag`,
        `De CW-klasse gaat over het cv-vermogen, de EU-klasse over het tapwatervermogen`,
        `Er is geen verschil: de CW-klasse is gewoon de Nederlandse naam voor de EU-klasse`
      ],
      goed: 1,
      uitleg: `De CW-klasse (CW3 tot CW6) drukt uit hoeveel warm water een ketel tegelijk kan leveren, de EU-capaciteitsklasse (3XS tot XXL) legt de nadruk op het energieverbruik van een genormeerd gebruikspatroon. Het is de CW-klasse die typisch Nederlands is, niet omgekeerd, en beide gaan over tapwater, niet over cv-vermogen.`
    },
    {
      vraag: `Bij het ontwerpen van een leidingnet bereken je met de kwadratenregel de drukval bij het ontwerp-debiet. Waarom heb je die uitkomst ook nodig om een pomp te kiezen, en niet alleen om een leidingdiameter te kiezen?`,
      opties: [
        `Omdat de kwadratenregel alleen geldt voor pompen en niet voor leidingdiameters`,
        `Omdat een pomp nooit een hogere drukval kan leveren dan een leiding op dat moment vraagt`,
        `Omdat de pomp gekozen wordt op de drukval die het net bij het ontwerp-debiet werkelijk vraagt, niet op een eerder gemeten of aangenomen debiet`,
        `Omdat de pompcurve per definitie gelijk is aan de installatiekarakteristiek, dus rekenen is niet meer nodig`
      ],
      goed: 2,
      uitleg: `Het werkpunt van een pomp (les 11.4) is het snijpunt met de installatiekarakteristiek van het net: om te controleren of een pomp een net aankan, vergelijk je de pompcurve met de drukval bij het gewenste debiet, en die drukval volgt (net als de diameterkeuze) uit de kwadratenregel. De regel geldt voor het net als geheel, niet uitsluitend voor pompen of leidingen apart; pompcurve en netcurve zijn twee verschillende lijnen die je laat kruisen, en een pomp kan wel degelijk meer leveren dan een net op een bepaald moment vraagt.`
    },
    {
      vraag: `Een circuit vraagt 4 kW bij een ontwerp-ΔT van 20 K. Welke koperbuis (binnendiameter uit de tekst) geeft de laagste stroomsnelheid?`,
      opties: [`28 mm (binnendiameter ongeveer 26 mm)`, `15 mm (binnendiameter ongeveer 13 mm)`, `18 mm (binnendiameter ongeveer 16 mm)`, `22 mm (binnendiameter ongeveer 20 mm)`],
      goed: 0,
      uitleg: `Bij een gelijk debiet geeft een grotere doorsnede een lagere stroomsnelheid, want v = Q / A en A groeit met het kwadraat van de diameter. 28 mm heeft de grootste binnendiameter van de vier, dus de laagste snelheid. De vraag test het inzicht in de relatie tussen diameter en snelheid, niet het debiet zelf.`
    },
    {
      vraag: `Waar ligt het werkpunt van een circulatiepomp in een leidingnet?`,
      opties: [
        `Altijd op het maximale debiet dat op het typeplaatje van de pomp staat`,
        `Op het punt waar de pomp de hoogste opvoerhoogte levert, ongeacht het net`,
        `Op het gemiddelde van het minimale en maximale debiet van de pomp`,
        `Op het snijpunt van de pompkarakteristiek en de installatiekarakteristiek (drukval van het net)`
      ],
      goed: 3,
      uitleg: `Het werkpunt is waar de dalende pompcurve (opvoerhoogte tegen debiet) de stijgende installatiekarakteristiek van het net kruist. Het maximale debiet op het typeplaatje is alleen het theoretische uiterste van de pomp zelf, niet het punt in een echt net, en het werkpunt is geen gemiddelde en geen vast maximum.`
    },
    {
      vraag: `Een installatie van 150 liter heeft een voordruk van 1,0 bar en een einddruk van 2,7 bar (allebei overdruk). Wat is het nuttig effect G, gerekend met absolute druk?`,
      opties: [`ongeveer 0,63`, `ongeveer 0,46`, `ongeveer 0,27`, `ongeveer 1,70`],
      goed: 1,
      uitleg: `Absolute drukken: P0 = 2,0 bar, Pe = 3,7 bar. G = (Pe - P0) / Pe = (3,7 - 2,0) / 3,7 = 0,46. Rekenen met de overdrukken zelf (1,0 en 2,7) geeft een te hoge waarde (0,63). 0,27 gebruikt de overdrukken verkeerd om, en 1,70 is alleen het drukverschil, geen verhouding.`
    },
    {
      vraag: `Wat is het gevolg als je bij het ontwerpen van een afvoersysteem alleen de rechte leidinglengte optelt en de bochten negeert?`,
      opties: [
        `Je overschat de werkelijke weerstand, wat aan de veilige kant is en geen probleem geeft`,
        `Bochten hebben geen invloed op de weerstand van een rookgasafvoersysteem, dus dat maakt niets uit`,
        `Je onderschat de werkelijke weerstand, waardoor het systeem in werkelijkheid dichter bij of over de toegestane grens zit`,
        `Het toestel corrigeert dit automatisch via de ventilatorregeling, dus het is voor het ontwerp verder geen aandachtspunt om rekening mee te houden`
      ],
      goed: 2,
      uitleg: `Elke bocht kost extra weerstand, uitgedrukt als een vervangende lengte die je bij de rechte lengte optelt. Sla je dat over, dan lijkt het systeem korter dan het in werkelijkheid is: dat is niet veilig maar juist een onderschatting. De ventilator van het toestel compenseert niet automatisch voor een fout ontwerp.`
    },
    {
      vraag: `Een monteur kiest voor een woning een expansievat en een leidingdiameter zonder eerst het warmteverlies te berekenen, "want de oude ketel deed het ook goed". Wat is het risico?`,
      opties: [
        `Het ketelvermogen, de leidingen, de pomp en het vat zijn dan niet op elkaar en op de werkelijke warmtevraag afgestemd`,
        `Er is geen risico: onderdelen van cv-installaties zijn universeel en passen altijd op elkaar`,
        `Het risico betreft alleen het comfort, nooit de veiligheid of het rendement van de installatie`,
        `Dit is toegestaan zolang de nieuwe ketel van hetzelfde merk is als de oude`
      ],
      goed: 0,
      uitleg: `Elke stap in het ontwerp (warmteverlies, ketelvermogen, leidingen, pomp, vat, afvoer) bouwt op de vorige voort. Zonder een berekend warmteverlies weet je niet of het gekozen vermogen, debiet en vat kloppen: dat raakt niet alleen comfort maar ook rendement (pendelen) en bij de afvoer ook veiligheid. Cv-onderdelen zijn niet zomaar uitwisselbaar en het merk van de oude ketel is niet relevant voor deze berekening.`
    },
    {
      vraag: `Een monteur berekent voor een woning per ongeluk een te laag warmteverlies. Welke gevolgen kan die fout doorwerken in de rest van het ontwerp?`,
      opties: [
        `Alleen gevolgen voor de lengte van de rookgasafvoer die naar het toestel loopt, verder staan alle andere onderdelen van het ontwerp daar in alle gevallen volledig los van`,
        `Geen gevolgen: de pomp en het expansievat corrigeren een verkeerd warmteverlies automatisch`,
        `Alleen gevolgen voor de gekozen CW-klasse van de ketel, verder geen gevolgen`,
        `Een te klein ketelvermogen, mogelijk te dunne leidingen en een te klein expansievat, want die volgen allemaal (direct of indirect) uit het warmteverlies`
      ],
      goed: 3,
      uitleg: `Het warmteverlies is de eerste stap waarop de andere stappen bouwen: het ketelvermogen (les 11.2) volgt direct uit het warmteverlies, en het debiet voor leidingen en pomp (les 11.3 en 11.4) volgt weer uit het gekozen vermogen. Een fout in de eerste stap werkt dus door. De afvoerlengte (les 11.5) hangt af van het gekozen toestel, niet rechtstreeks van het warmteverlies, dus dat is niet de enige plek waar het doorwerkt; niets in het ontwerp corrigeert dit automatisch, en de CW-klasse staat juist los van het cv-warmteverlies.`
    },
    {
      vraag: `Waarom controleer je bij een compleet ontwerp de keuzes steeds opnieuw als je er een aanpast, bijvoorbeeld een groter expansievat?`,
      opties: [
        `Dat is niet nodig: elk onderdeel van een cv-ontwerp staat, eenmaal gekozen aan het begin van het project, volledig los van alle andere onderdelen`,
        `Omdat de onderdelen van een ontwerp op elkaar zijn afgestemd: een wijziging in het een kan gevolgen hebben voor de rest`,
        `Alleen om esthetische reden, zodat alle onderdelen van hetzelfde merk zijn`,
        `Omdat de wet dat voorschrijft voor elke wijziging, ongeacht de technische samenhang`
      ],
      goed: 1,
      uitleg: `Een groter vat past bijvoorbeeld niet altijd op de bestaande leiding of aansluiting, en een gewijzigde installatie-inhoud kan ook de berekende vuldruk beinvloeden. De onderdelen van een ontwerp hangen samen: dat is precies waarom module 11 ze in deze volgorde behandelt. Merkgelijkheid en een wettelijke plicht per wijziging zijn hier niet de reden.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 11.1 */
{
  id: 'm11l01',
  nr: '11.1',
  titel: 'Warmteverlies berekenen',
  duur: 35,
  type: 'les',
  leerdoel: 'Je kunt het warmteverlies van een vertrek en een woning berekenen met een erkende methode en de uitkomst beoordelen.',
  videos: [
    { taal: 'nl', titel: 'Wat is een warmteverliesberekening? (Peter Luteijn)', yt: 'l6VwsGKM8AQ', duur: '±2 min, 2023' },
    { taal: 'nl', titel: 'Hoe maak je een goede warmteverliesberekening? (Peter Luteijn)', yt: '3_BgS8czjNk', duur: '±3 min, 2023' },
    { taal: 'en', titel: 'How to Calculate Heat-Loss (Verified by Expert Trades, VK)', yt: 'j1ucAkcgH7Q', duur: '±3 min, 2022' }
  ],
  tekst: `
## Waarom je eerst rekent, en niet schat

Elke keuze in deze module, van ketelvermogen tot leidingdiameter, begint bij een getal: het warmteverlies van de woning bij een koude dag. Kies je een ketel of een leiding op gevoel of op de oude installatie, dan weet je niet of de nieuwe keuze klopt. Het echte examen Vakmanschap CO weegt dit zwaar: "ontwerpen en beoordelen van de opstellingsruimte" is een van de negen onderwerpen van de toetsmatrijs, met 7 tot 9 vragen op een totaal van 30 tot 55.

De oude Nederlandse norm voor deze berekening, NEN 5066, is in 2004 ingetrokken en vervangen door de Europese norm NEN-EN 12831. Voor de praktijk werkt de installatiebranche met ISSO-publicaties die deze Europese norm uitwerken tot een bruikbare rekenmethode, met tabellen en vuistregels.

| Publicatie | Voor welk gebouw |
|---|---|
| ISSO 51 | Woningen en woongebouwen |
| ISSO 53 | Utiliteitsgebouwen met een vertrekhoogte tot 4 m |
| ISSO 57 | Gebouwen met hogere ruimten (industrie, hoge utiliteit), snelle schatting op basis van de hele gebouwschil |

Voor een woning gebruik je dus ISSO 51. Deze les laat de hoofdlijn van die methode zien, niet de volledige norm: die staat achter een betaalmuur en gaat verder dan wat een monteur dagelijks nodig heeft.

## Drie onderdelen die je optelt

Alle drie de ISSO-publicaties bouwen het warmteverlies op uit dezelfde bouwstenen:

- **Transmissieverlies**: warmte die door de gebouwschil (gevel, dak, vloer, glas) naar buiten lekt.
- **Ventilatieverlies**: warmte die verloren gaat aan de lucht die je ruimte in en uit gaat, via ventilatie of kierdichting.
- **Opwarmtoeslag**: extra vermogen om een ruimte na nachtverlaging of een onderbreking weer snel op temperatuur te krijgen. ISSO 51 baseert die toeslag alleen op het gebruiksoppervlak, niet op de isolatie.

!!! kern Warmteverlies is transmissie plus ventilatie, niet transmissie alleen
Een veelgemaakte fout is alleen de gevel, het dak en het glas doorrekenen en de ventilatie vergeten. In een goed geïsoleerde nieuwbouwwoning kan het ventilatieverlies groter zijn dan het transmissieverlies: zie het rekenvoorbeeld hieronder.
!!!

## Rc, U en de isolatie-eisen van vandaag

De Rc-waarde is de warmteweerstand van de constructie zelf, zonder de overgangsweerstanden aan binnen- en buitenzijde. De warmtedoorgangscoëfficiënt U, die je nodig hebt voor het transmissieverlies, is bij benadering het omgekeerde: U ongeveer 1 / Rc. Dat overschat U licht, omdat de overgangsweerstanden (samen ongeveer 0,17 m2K/W) erbij zouden moeten, maar bij een moderne Rc van 3,7 tot 6,3 is die afwijking klein genoeg voor een schatting.

Voor nieuwbouw stelt het Bbl (artikel 4.152) een minimale gemiddelde Rc van 4,7 m2K/W voor de gevel, 6,3 m2K/W voor het dak en 3,7 m2K/W voor de vloer. Voor bestaande bouw ligt de werkelijke Rc vaak veel lager en verschilt hij sterk per bouwjaar: gebruik daarvoor de waarde uit een energielabel of opname, niet een schatting.

## Ontwerptemperaturen: binnen en buiten

ISSO 51 rekent met een vaste ontwerpbuitentemperatuur van ongeveer -10 °C (gecorrigeerd voor de tijdconstante van het gebouw) en een ontwerpbinnentemperatuur van 22 °C voor verblijfsgebieden in goed geïsoleerde woningen (voorheen 20 °C). Dat geeft voor de meeste woningen een ontwerp-ΔT van ongeveer 32 K.

## Ventilatieverlies: de formule en de wettelijke eis

Voor lucht geldt een formule die eruitziet als de debietformule van module 2 en 3, maar met een andere constante omdat lucht een andere warmte-inhoud heeft dan water:

Φ_ventilatie = 0,34 x qv x ΔT

met qv het ventilatiedebiet in m3/h en ΔT in K. De constante 0,34 Wh/(m3K) is de warmte-inhoud van lucht (dichtheid ongeveer 1,2 kg/m3 x soortelijke warmte ongeveer 1012 J/(kg K), omgerekend).

Het benodigde ventilatiedebiet volgt uit het Bbl: minstens 0,9 dm3/s per m2 vloeroppervlakte voor een verblijfsgebied en 0,7 dm3/s per m2 voor een verblijfsruimte, met in beide gevallen een minimum van 7 dm3/s. Voor een kookopstelplaats geldt een aparte eis van minstens 21 dm3/s, voor een toiletruimte 7 dm3/s en voor een badruimte 14 dm3/s.

## Rekenvoorbeeld: warmteverlies van een woonkamer

Een woonkamer op de begane grond is 5 bij 4 m (20 m2 vloeroppervlak), met één buitengevel van 5 x 2,6 m (13 m2), waarvan 3 m2 raam. De vloer ligt boven een kruipruimte; de correctie daarvoor laten we hier voor de eenvoud buiten beschouwing (aanname). Gevel-Rc is 4,7 m2K/W (Bbl-nieuwbouw), het glas heeft een U-waarde van 1,1 W/(m2K) (voorbeeld, HR++). Binnen 22 °C, buiten -10 °C.

| Stap | Berekening | Resultaat |
|---|---|---|
| U-waarde gevel | 1 / 4,7 | 0,213 W/(m2K) |
| Transmissie gevel (opaak, 10 m2) | 10 x 0,213 x 32 | 68 W |
| Transmissie glas (3 m2) | 3 x 1,1 x 32 | 106 W |
| Ventilatiedebiet (Bbl, 20 m2 x 0,9 dm3/s) | 20 x 0,9 = 18 dm3/s | 64,8 m3/h |
| Ventilatieverlies | 0,34 x 64,8 x 32 | 706 W |
| Totaal (zonder opwarmtoeslag) | 68 + 106 + 706 | 880 W |

Voor deze ene ruimte, zonder de vloer en zonder opwarmtoeslag, komt de warmtevraag al op bijna 0,9 kW, en het ventilatieverlies is daarvan het grootste deel. Voor de hele woning tel je dit per vertrek op.

?? Verdieping: waarom ventilatieverlies relatief zo groot kan zijn
Een goed geïsoleerde gevel laat weinig warmte door: de U-waarde is klein. De hoeveelheid ventilatielucht die het Bbl eist, staat daar los van, want die is gekoppeld aan het vloeroppervlak, niet aan de isolatie. Daardoor verschuift het aandeel van het totale verlies steeds meer naar de ventilatie naarmate een woning beter geïsoleerd is. Dat is ook een reden waarom warmteterugwinning uit ventilatielucht (WTW) in nieuwbouw zo veel oplevert.
??

## Wat je met de uitkomst doet

Het warmteverlies per vertrek gebruik je in les 11.2 om het ketelvermogen te kiezen, en in les 14 (bouwjaartabel, module 14) als je het bestaande radiatorvermogen niet kent. Een volledige ISSO 51-berekening telt alle vertrekken op en houdt ook rekening met details die dit voorbeeld vereenvoudigt: koudebruggen, de opwarmtoeslag en de precieze correctie voor onverwarmde ruimten. Voor het examen en voor een eerste schatting is deze hoofdlijn voldoende; voor een officiële berekening gebruik je de volledige publicatie of rekensoftware.
`,
  checklist: [
    'Ik weet welke ISSO-publicatie bij welk type gebouw hoort',
    'Ik kan transmissieverlies berekenen met oppervlak, U-waarde (uit Rc) en ΔT',
    'Ik kan ventilatieverlies berekenen met de Bbl-eis en de 0,34-formule',
    'Ik reken met de juiste ontwerptemperaturen (22 °C binnen, -10 °C buiten), niet met een schatting',
    'Ik weet dat ventilatieverlies in goed geïsoleerde nieuwbouw net zo belangrijk kan zijn als transmissieverlies'
  ],
  quiz: [
    {
      vraag: `Een utiliteitsgebouw heeft een vertrekhoogte van 3 m. Welke publicatie gebruik je voor de warmteverliesberekening?`,
      opties: [`ISSO 51`, `ISSO 57`, `ISSO 53`, `NEN 5066`],
      goed: 2,
      uitleg: `ISSO 53 is bedoeld voor utiliteitsgebouwen met een vertrekhoogte tot 4 m. ISSO 51 is voor woningen, ISSO 57 voor gebouwen met hogere ruimten, en NEN 5066 is de ingetrokken voorganger van deze methoden.`
    },
    {
      vraag: `Een gevel van 10 m2 (Rc = 4,7 m2K/W) grenst aan buitenlucht. Binnen 22 °C, buiten -10 °C. Wat is het transmissieverlies ongeveer, met U ongeveer 1/Rc?`,
      opties: [`ongeveer 68 W`, `ongeveer 1500 W`, `ongeveer 26 W`, `ongeveer 7 W`],
      goed: 0,
      uitleg: `U = 1 / 4,7 = 0,213 W/(m2K). ΔT = 22 - (-10) = 32 K. Φ = 10 x 0,213 x 32 = 68 W. 1500 W ontstaat als je Rc gebruikt in plaats van U (10 x 4,7 x 32). 26 W vergeet dat buiten -10 is en rekent met ΔT = 12. 7 W vergeet het oppervlak.`
    },
    {
      vraag: `Een verblijfsgebied van 20 m2 heeft volgens het Bbl minstens 0,9 dm3/s per m2 nodig (minimum 7 dm3/s). Wat is het benodigde debiet ongeveer in m3/h?`,
      opties: [`ongeveer 18 m3/h`, `ongeveer 648 m3/h`, `ongeveer 1,8 m3/h`, `ongeveer 65 m3/h`],
      goed: 3,
      uitleg: `20 x 0,9 = 18 dm3/s. Om naar m3/h te gaan vermenigvuldig je met 3,6: 18 x 3,6 = 64,8, ongeveer 65 m3/h. 18 m3/h verwart de eenheden. 648 m3/h vermenigvuldigt met 36 in plaats van 3,6. 1,8 m3/h deelt in plaats van te vermenigvuldigen.`
    },
    {
      vraag: `Bij een debiet van 65 m3/h en een ΔT van 32 K, wat is het ventilatieverlies met Φ = 0,34 x qv x ΔT?`,
      opties: [`ongeveer 2080 W`, `ongeveer 707 W`, `ongeveer 22 W`, `ongeveer 2420 W`],
      goed: 1,
      uitleg: `0,34 x 65 x 32 = 707,2 W. 2080 W vergeet de constante 0,34 (65 x 32). 22 W vergeet het debiet (alleen 0,34 x 32). 2420 W gebruikt per ongeluk de constante voor water (1,163) in plaats van lucht (0,34).`
    },
    {
      vraag: `Welke bewering over NEN 5066 klopt?`,
      opties: [
        `NEN 5066 is nog steeds de norm die installateurs voor woningen moeten gebruiken`,
        `NEN 5066 regelt de maximale CO-concentratie in rookgas van een cv-ketel`,
        `NEN 5066 is in 2004 ingetrokken en vervangen door NEN-EN 12831, de basis van ISSO 51`,
        `NEN 5066 is een merkgebonden rekenmethode die alleen Remeha gebruikt`
      ],
      goed: 2,
      uitleg: `NEN 5066 is in 2004 ingetrokken en opgevolgd door NEN-EN 12831, waarop ISSO 51, 53 en 57 zijn gebaseerd. De norm ging niet over CO-concentraties en is geen merkgebonden methode van een fabrikant.`
    },
    {
      vraag: `Een dakconstructie heeft Rc = 6,3 m2K/W in plaats van 3,5 m2K/W. Wat betekent dat voor de U-waarde en het transmissieverlies bij gelijk oppervlak en ΔT?`,
      opties: [
        `Een hogere Rc geeft een lagere U-waarde en dus minder transmissieverlies`,
        `Een hogere Rc geeft een hogere U-waarde en dus meer transmissieverlies`,
        `Rc en U staan volledig los van elkaar en beïnvloeden elkaar niet`,
        `Een hogere Rc verlaagt alleen het ventilatieverlies, niet het transmissieverlies`
      ],
      goed: 0,
      uitleg: `U is bij benadering 1/Rc, dus een hogere Rc geeft een lagere U-waarde. Bij gelijk oppervlak en ΔT geeft dat minder transmissieverlies (Φ = A x U x ΔT). Rc en U zijn juist elkaars omgekeerde, en Rc gaat over de constructie, niet over ventilatie.`
    }
  ],
  kaarten: [
    { voor: `Wat is de opvolger van NEN 5066?`, achter: `NEN-EN 12831, de Europese norm waarop ISSO 51, 53 en 57 zijn gebaseerd.` },
    { voor: `Voor welk type gebouw gebruik je ISSO 51?`, achter: `Woningen en woongebouwen.` },
    { voor: `Voor welk type gebouw gebruik je ISSO 53?`, achter: `Utiliteitsgebouwen met een vertrekhoogte tot 4 m.` },
    { voor: `Wat zijn de drie onderdelen van een warmteverliesberekening?`, achter: `Transmissieverlies, ventilatieverlies en een opwarmtoeslag.` },
    { voor: `Wat is de formule voor ventilatieverlies?`, achter: `Φ = 0,34 x qv (m3/h) x ΔT (K).` },
    { voor: `Wat is de relatie tussen Rc en U (bij benadering)?`, achter: `U is ongeveer 1 / Rc. Een hogere Rc geeft dus een lagere U-waarde.` },
    { voor: `Welke ontwerptemperaturen gebruikt ISSO 51 voor een woning?`, achter: `Ongeveer -10 °C buiten en 22 °C binnen in verblijfsgebieden.` },
    { voor: `Welke minimale Rc-waarden stelt het Bbl voor nieuwbouw (gevel, dak, vloer)?`, achter: `Gevel 4,7, dak 6,3 en vloer 3,7 m2K/W (artikel 4.152).` }
  ],
  bronnen: ['DIM-01', 'DIM-02', 'DIM-03', 'DIM-04', 'DIM-06', 'DIM-07', 'DIM-08', 'DIM-09', 'DIM-10', 'DIM-11', 'DIM-27', 'REG-20', 'REG-21', 'REG-22', 'EXA-17']
},

/* ------------------------------------------------------------------ 11.2 */
{
  id: 'm11l02',
  nr: '11.2',
  titel: 'Het ketelvermogen kiezen',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt het benodigde vermogen voor verwarming en tapwater bepalen en daar een passende ketel bij kiezen.',
  videos: [
    { taal: 'nl', titel: 'Vermogen instellen op je Intergas HRE ketel (Arjan Jonkers)', yt: 'VDINX3-aDx0', duur: '±1 min, 2023' },
    { taal: 'nl', titel: 'Instellen Intergas Kombi Kompakt HRE 36/30 CW5 (John Visser cv-optimalisatie)', yt: 'l0QIEHRronQ', duur: '±5 min, 2020' },
    { taal: 'en', titel: 'Right Sizing a New Boiler... the easy way (Tec Tube)', yt: 'h00dAUaOa9o', duur: '±8 min, 2018' }
  ],
  tekst: `
## Twee vragen, twee getallen

Een cv-ketel moet twee dingen kunnen: de woning verwarmen en, bij een combiketel, warm tapwater leveren. Dat zijn twee onafhankelijke keuzes. Het cv-vermogen volgt uit het warmteverlies van les 11.1. Het tapwatervermogen volgt uit de CW-klasse of het gevraagde debiet in liter per minuut, en heeft niets met het cv-vermogen te maken: een combiketel geeft bij tapwatervraag voorrang aan het tapwater, niet aan verwarming.

## Waarom groter niet beter is

Een installateur die twijfelt, kiest vaak voor een ruimer ketelvermogen "voor de zekerheid". Dat werkt averechts. Een cv-ketel heeft een modulatiebereik: een minimum- en een maximumvermogen waarbinnen hij stabiel kan doorbranden. Onder dat minimum kan hij niet blijven branden en schakelt hij aan en uit: pendelen (ook wel taktend bedrijf).

Uit module 3 weet je al: de Remeha Calenta 25s heeft een modulatiebereik van 5,2 tot 25,0 kW, ongeveer 1 op 4,8. Vraagt de woning bij een bepaalde buitentemperatuur maar 3 kW, dan ligt dat onder het minimum van 5,2 kW: de ketel kan niet zo laag doorbranden en gaat aan- en uitschakelen.

!!! kern Het minimum is net zo belangrijk als het maximum
Bij het kiezen van een ketel kijk je niet alleen of het maximale vermogen de koudste dag aankan, maar ook of het minimale vermogen laag genoeg is voor een milde dag. Een ketel die "groot genoeg" is voor de ontwerpdag, kan in het voor- en najaar toch pendelen als de warmtevraag onder zijn minimum zakt.
!!!

Pendelen kost twee dingen: het rendement daalt (elke start en stop kost extra gas en tijd) en de slijtage aan brander, ventilator en pomp neemt toe. Een cv-ketel heeft daarom een anti-pendelfunctie die een nieuwe start voor een minimale tijd blokkeert, maar dat verhelpt de oorzaak niet: een te grofmazig modulatiebereik voor de werkelijke warmtevraag.

## Rekenvoorbeeld: past dit modulatiebereik bij deze woning?

Een woning heeft volgens een volledige berekening (les 11.1) een warmteverlies van 6,5 kW bij de ontwerpdag (buiten -10 °C, ΔT 32 K). Daar past een Remeha Calenta 25s (5,2 tot 25,0 kW) qua maximum ruim bij. Hoe zit het bij een milde dag van 5 °C buiten (ΔT 17 K)?

| Stap | Berekening | Resultaat |
|---|---|---|
| Warmtevraag bij 5 °C (vereenvoudigd, lineair met ΔT) | 6,5 x (17 / 32) | 3,45 kW |
| Minimumvermogen van de gekozen ketel | | 5,2 kW |
| Conclusie | 3,45 kW < 5,2 kW | de ketel pendelt bij dit weertype |

Deze woning en deze ketel passen dus op de ontwerpdag, maar niet bij milder weer, wat een groot deel van het stookseizoen is. Dit is geen reden om een kleinere ketel te kiezen die de koudste dag niet aankan: het is een reden om te weten dat pendelen bij dit soort weer normaal is voor dit modulatiebereik, en om bij een terugkerende klacht over pendelen eerst te kijken of de warmtevraag structureel onder het minimum van de ketel ligt. Een modulerende zoneregeling kan dat verzachten door de ketel bij een lage vraag van één zone toch op laag vermogen te laten doorbranden in plaats van steeds aan en uit te schakelen.

## Tapwater: de CW-klasse

De CW-klasse (CW3 tot en met CW6) is een Nederlandse comfortclassificatie voor de tapwaterprestatie van een combiketel, vastgesteld door Kiwa in het kader van het Gaskeur-keurmerk. Bij een temperatuurstijging naar 60 °C geeft een CW3-ketel minstens 6,0 l/min, CW4 minstens 7,5 l/min, CW5 minstens 9,0 l/min en CW6 minstens 11,0 l/min.

| CW-klasse | Debiet bij 60 °C |
|---|---|
| CW3 | minstens 6,0 l/min |
| CW4 | minstens 7,5 l/min |
| CW5 | minstens 9,0 l/min |
| CW6 | minstens 11,0 l/min |

Naast de CW-klasse heeft een tapwatertoestel sinds 2015 ook een Europese energielabel-capaciteitsklasse (van 3XS tot XXL). Die twee systemen bestaan naast elkaar: de CW-klasse gaat over hoeveel water je tegelijk kunt tappen (comfort), de EU-klasse over het energieverbruik van een genormeerd gebruikspatroon over de dag.

?? Verdieping: waarom je de CW-klasse niet uit een tabel met "aantal personen" mag aflezen
Vuistregels als "CW4 voor een gezin van vier" bestaan, maar het werkelijke comfort hangt af van gelijktijdig gebruik: twee douches tegelijk vraagt meer dan één bad na elkaar. Reken bij twijfel het werkelijke gelijktijdige debiet van de kranen in de woning, en vergelijk dat met de l/min-tabel van de klasse of met het specifieke debiet uit de handleiding van de gekozen ketel.
??

## Wat je vastlegt

Leg bij elke ketelkeuze vast: het berekende warmteverlies (les 11.1), het gekozen modulatiebereik en waarom het past (of niet helemaal past, met de reden), en de gekozen CW-klasse of het tapwaterdebiet met de onderbouwing daarvan.
`,
  checklist: [
    'Ik bepaal het cv-vermogen uit het berekende warmteverlies, niet uit de oude ketel',
    'Ik controleer niet alleen het maximum, maar ook of het minimumvermogen laag genoeg is voor mild weer',
    'Ik kan uitleggen waarom pendelen het rendement verlaagt en de slijtage verhoogt',
    'Ik kies de CW-klasse of het tapwaterdebiet los van het cv-vermogen',
    'Ik gebruik voor de CW-klasse het werkelijke gelijktijdige debiet, niet alleen een vuistregel over gezinsgrootte'
  ],
  quiz: [
    {
      vraag: `Een ketel heeft een modulatiebereik van 5,2 tot 25,0 kW. De warmtevraag van de woning is 3,0 kW. Wat gebeurt er?`,
      opties: [
        `De ketel modulert probleemloos naar 3,0 kW, want dat is onder het maximum`,
        `De ketel gaat pendelen, want 3,0 kW ligt onder het minimum van 5,2 kW`,
        `De ketel schakelt over op een intern lager bereik van 1,0 tot 5,2 kW`,
        `De ketel blijft op 25,0 kW draaien tot de temperatuur is bereikt`
      ],
      goed: 1,
      uitleg: `Het minimum van het modulatiebereik is de ondergrens waaronder een ketel niet stabiel kan doorbranden. Bij een vraag van 3,0 kW, onder de 5,2 kW, gaat de ketel aan- en uitschakelen (pendelen). Er bestaat geen los, lager intern bereik en de ketel draait bij lage vraag niet op zijn maximum.`
    },
    {
      vraag: `Wat kost pendelen (te vaak aan- en uitschakelen door een te grofmazig modulatiebereik)?`,
      opties: [
        `Alleen extra geluid, zonder gevolgen voor rendement of levensduur`,
        `Een hogere waterdruk in de installatie, met kans op afblazen van het ventiel`,
        `Niets: de anti-pendelfunctie van de ketel lost het probleem volledig op`,
        `Een lager rendement en meer slijtage aan brander, ventilator en pomp`
      ],
      goed: 3,
      uitleg: `Elke start en stop kost extra gas en tijd (lager rendement) en belast de bewegende en elektrische onderdelen extra (meer slijtage). Waterdruk en het veiligheidsventiel hebben hier niets mee te maken, en de anti-pendelfunctie blokkeert alleen een te snelle herstart: die verhelpt de oorzaak niet.`
    },
    {
      vraag: `Een woning heeft een warmteverlies van 6,0 kW bij ΔT 32 K (ontwerpdag). Wat is de geschatte warmtevraag bij ΔT 16 K, bij een vereenvoudigde lineaire aanname?`,
      opties: [`ongeveer 3,0 kW`, `ongeveer 6,0 kW`, `ongeveer 1,5 kW`, `ongeveer 12,0 kW`],
      goed: 0,
      uitleg: `6,0 x (16 / 32) = 3,0 kW: de vraag halveert als ΔT halveert. 6,0 kW zou betekenen dat de buitentemperatuur er niet toe doet. 1,5 kW en 12,0 kW ontstaan door de verhouding fout toe te passen.`
    },
    {
      vraag: `Waar staat de CW-klasse van een cv-ketel voor?`,
      opties: [
        `Het modulatiebereik van de ketel voor centrale verwarming`,
        `De maximale waterdruk waarop de ketel mag werken`,
        `Een Nederlandse comfortclassificatie voor hoeveel warm tapwater de ketel tegelijk kan leveren`,
        `Het seizoensrendement van de ketel volgens de Europese energielabel-eis`
      ],
      goed: 2,
      uitleg: `CW staat voor Comfort Warmwater: hoe hoger de klasse, hoe meer warm tapwater de ketel tegelijk levert. Het modulatiebereik, de maximale waterdruk en het seizoensrendement zijn andere, los daarvan vastgelegde eigenschappen van een ketel.`
    },
    {
      vraag: `Wat is het belangrijkste verschil tussen de CW-klasse en de EU-capaciteitsklasse (tapprofiel) van een tapwatertoestel?`,
      opties: [
        `Het zijn twee namen voor exact dezelfde meting, alleen in een andere taal`,
        `De CW-klasse gaat over het gebruikscomfort, de EU-klasse vooral over het energieverbruik over de dag`,
        `De EU-klasse geldt alleen voor ketels zonder tapwaterfunctie`,
        `De CW-klasse is een Europese eis, de EU-klasse een Nederlandse`
      ],
      goed: 1,
      uitleg: `De CW-klasse (Nederlands, Kiwa/Gaskeur) draait om het debiet dat comfort geeft, de EU-capaciteitsklasse om het energieverbruik van een genormeerd gebruikspatroon. Het zijn dus geen vertalingen van elkaar, de EU-klasse gaat juist specifiek over tapwatertoestellen (niet alleen ketels zonder tapwaterfunctie), en de CW-klasse is Nederlands, niet Europees.`
    },
    {
      vraag: `Een monteur kiest een groter ketelvermogen dan berekend "voor de zekerheid". Wat is het risico dat in deze les wordt besproken?`,
      opties: [
        `Een groter ketelvermogen heeft geen enkel nadeel, het is altijd een veilige keuze`,
        `Een groter ketelvermogen verlaagt automatisch het benodigde tapwaterdebiet`,
        `Het risico betreft alleen de aanschafprijs, niet de werking van de installatie`,
        `De ketel kan bij normale (niet extreem koude) warmtevraag onder zijn minimumvermogen komen en gaan pendelen`
      ],
      goed: 3,
      uitleg: `Een groter vermogen betekent meestal ook een hoger minimumvermogen. Ligt de normale warmtevraag (niet alleen de ontwerpdag) onder dat minimum, dan pendelt de ketel vaker dan nodig. Vermogen en tapwaterdebiet zijn losse keuzes (zie hierboven), en het gaat hier om de werking van de installatie, niet alleen om de prijs.`
    }
  ],
  kaarten: [
    { voor: `Wat is het modulatiebereik van een cv-ketel?`, achter: `Het minimum- en maximumvermogen waarbinnen de ketel stabiel kan doorbranden.` },
    { voor: `Wat gebeurt er als de warmtevraag onder het minimumvermogen van de ketel komt?`, achter: `De ketel kan niet stabiel doorbranden en gaat aan- en uitschakelen (pendelen).` },
    { voor: `Wat kost pendelen?`, achter: `Een lager rendement (elke start en stop kost extra gas) en meer slijtage aan brander, ventilator en pomp.` },
    { voor: `Waarom kies je het cv-vermogen niet alleen op het maximum?`, achter: `Omdat ook het minimumvermogen laag genoeg moet zijn voor mild weer, anders pendelt de ketel een groot deel van het stookseizoen.` },
    { voor: `Wat drukt de CW-klasse uit?`, achter: `Hoeveel warm tapwater een combiketel tegelijk kan leveren (CW3 het minst, CW6 het meest).` },
    { voor: `Wat is het verschil tussen CW-klasse en EU-capaciteitsklasse?`, achter: `CW-klasse gaat over comfort (debiet), de EU-klasse vooral over het energieverbruik van een genormeerd gebruikspatroon.` },
    { voor: `Staat het tapwatervermogen los van het cv-vermogen?`, achter: `Ja: het zijn twee onafhankelijke keuzes, en een combiketel geeft bij tapwatervraag voorrang aan tapwater.` }
  ],
  bronnen: ['DIM-12', 'DIM-13', 'DIM-14', 'DIM-15', 'KET-15', 'REG-10', 'REG-11', 'RGL-12', 'STO-13']
},

/* ------------------------------------------------------------------ 11.3 */
{
  id: 'm11l03',
  nr: '11.3',
  titel: 'Leidingen dimensioneren',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt leidingen dimensioneren op debiet, stroomsnelheid en drukverlies.',
  videos: [
    { taal: 'nl', titel: 'C.V.-leidingnetberekeningen (Leever Installatie adviseurs)', yt: 'pxawJjbWcoc', duur: '±2 min, 2021' },
    { taal: 'nl', titel: '...', zoek: 'leidingdiameter berekenen cv installatie' },
    { taal: 'en', titel: 'Pipe Velocity & Sizing in Heating Systems Explained (HVAC Education Hub)', yt: '09KxKwk0oyw', duur: '±6 min, 2024' }
  ],
  tekst: `
## Drie stappen van vermogen naar diameter

Elke leiding in een cv-installatie moet groot genoeg zijn om het benodigde debiet door te laten, zonder onnodig groot (duur, traag opwarmend) te zijn. De methode kent drie stappen:

1. Bereken het benodigde debiet uit het vermogen van het traject en het ontwerp-ΔT: debiet = vermogen / (1,163 x ΔT), dezelfde formule als in module 2, 3 en 14.
2. Kies met een richtsnelheid de bijpassende binnendiameter.
3. Controleer met de tabel van de fabrikant of het drukverlies per meter bij die diameter en dat debiet binnen de richtwaarde blijft. Past het niet, dan kies je een andere diameter.

!!! kern Snelheid is de vuistregel, de fabrikanttabel is de controle
Je kunt een diameter kiezen op basis van een richtsnelheid, maar het drukverlies per meter (dat de pomp moet overwinnen) hangt ook af van de ruwheid van het materiaal en de exacte fabrikanttabel. Reken de snelheid uit als eerste schatting en controleer daarna in de tabel van het gekozen leidingsysteem.
!!!

## Richtwaarden voor snelheid en drukverlies

Als vuistregel geldt voor het lineaire drukverlies een bandbreedte van 50 tot 100 Pa per meter leiding. Een hogere waarde geeft een kleinere (goedkopere) leiding, maar meer stroomsnelheid, geluid en pompvermogen.

| Leidingtype | Richtsnelheid |
|---|---|
| Kleine leiding in een verblijfsruimte | 0,4 tot 0,8 m/s |
| Middelgrote leiding buiten verblijfsruimten | ongeveer 1,0 tot 1,2 m/s |
| Hoofdleiding | tot 1,5 a 2,0 m/s |

Hogere snelheden geven meer stromingsgeluid en meer kans op erosie bij bochten en fittingen: in een leiding die door een woonkamer of slaapkamer loopt, houd je de snelheid dus liever aan de lage kant.

## Van buitenmaat naar binnendiameter

Koperbuis volgens EN 1057 heeft in de gangbare cv-installatiematen een wanddikte van ongeveer 1,0 mm.

| Buitendiameter | Binnendiameter (ongeveer) |
|---|---|
| 15 mm | 13 mm |
| 18 mm | 16 mm |
| 22 mm | 20 mm |
| 28 mm | 26 mm |

## Rekenvoorbeeld: een hoofdleiding van 12 kW

Een hoofdleiding vervoert 12 kW bij een ontwerp-ΔT van 20 K.

| Stap | Berekening | Resultaat |
|---|---|---|
| Benodigd debiet | 12.000 / (1,163 x 20) | 516 l/h |
| Debiet in m3/s | 516 / 3600 / 1000 | 1,433 x 10^-4 m3/s |
| Doorsnede 15 mm (binnen 13 mm) | π x 0,0065^2 | 1,327 x 10^-4 m2 |
| Snelheid bij 15 mm | 1,433 x 10^-4 / 1,327 x 10^-4 | ongeveer 1,08 m/s |
| Doorsnede 18 mm (binnen 16 mm) | π x 0,008^2 | 2,011 x 10^-4 m2 |
| Snelheid bij 18 mm | 1,433 x 10^-4 / 2,011 x 10^-4 | ongeveer 0,71 m/s |

Een 15 mm leiding geeft hier ongeveer 1,08 m/s: dat past nog bij een hoofdleiding buiten verblijfsruimten, maar zit al aan de hoge kant. Loopt deze leiding door een verblijfsruimte, dan is 18 mm met ongeveer 0,71 m/s de comfortabelere keuze. In beide gevallen controleer je vervolgens in de fabrikanttabel of het drukverlies per meter bij dit debiet binnen de 50 tot 100 Pa/m blijft; dat getal hangt af van het gekozen leidingsysteem en materiaal.

?? Verdieping: waarom een te lage snelheid ook een nadeel kan zijn
Een ruimere leiding dan nodig geeft niet alleen een lagere snelheid, maar ook meer waterinhoud: de installatie warmt trager op en koelt trager af, en lucht wordt minder makkelijk meegevoerd naar het ontluchtingspunt. Een leiding hoeft dus niet zo ruim mogelijk te zijn: kies de kleinste diameter die binnen de richtsnelheid en het richtdrukverlies blijft.
??

## Wat je vastlegt

Leg per hoofdtraject vast: het vermogen, het ΔT, het berekende debiet, de gekozen diameter en de gecontroleerde snelheid. Bij een volledig leidingnet (meerdere aftakkingen) doe je dit voor elk traject, van dik naar dun, zoals ook in de fabrikantsoftware gebeurt.
`,
  checklist: [
    'Ik bereken het debiet van een traject uit vermogen en ontwerp-ΔT',
    'Ik kies een diameter op basis van een richtsnelheid (0,4 tot 2,0 m/s, afhankelijk van het type leiding)',
    'Ik controleer daarna het drukverlies per meter in de fabrikanttabel (richtwaarde 50 tot 100 Pa/m)',
    'Ik ken de gangbare binnendiameters van 15, 18, 22 en 28 mm koperbuis',
    'Ik weet dat een te ruime leiding ook nadelen heeft: trager opwarmen en lucht die minder goed meegevoerd wordt'
  ],
  quiz: [
    {
      vraag: `Een traject vervoert 6 kW bij een ontwerp-ΔT van 20 K. Wat is het benodigde debiet ongeveer?`,
      opties: [`120 l/h`, `516 l/h`, `258 l/h`, `1032 l/h`],
      goed: 2,
      uitleg: `Debiet = 6000 / (1,163 x 20) = 6000 / 23,26 = 258 l/h. 120 l/h vergeet de constante 1,163 (6000/20/2,5). 516 l/h hoort bij het dubbele vermogen (12 kW). 1032 l/h is nog eens het dubbele daarvan.`
    },
    {
      vraag: `Bij een gelijk debiet heeft leiding A een grotere binnendiameter dan leiding B. Wat betekent dat voor de stroomsnelheid?`,
      opties: [
        `Leiding A heeft een lagere stroomsnelheid dan leiding B`,
        `Leiding A heeft een hogere stroomsnelheid dan leiding B`,
        `De stroomsnelheid is bij gelijk debiet altijd gelijk, ongeacht de diameter`,
        `De stroomsnelheid hangt alleen af van het materiaal, niet van de diameter`
      ],
      goed: 0,
      uitleg: `Snelheid v = debiet / doorsnede. Een grotere diameter geeft een grotere doorsnede (die met het kwadraat van de diameter groeit), en dus bij gelijk debiet een lagere snelheid. De diameter is hier juist de bepalende factor, niet het materiaal.`
    },
    {
      vraag: `Wat is de richtwaarde voor het lineaire drukverlies bij het dimensioneren van verwarmingsleidingen?`,
      opties: [`5 tot 10 Pa per meter`, `500 tot 1000 Pa per meter`, `1 tot 5 Pa per meter`, `50 tot 100 Pa per meter`],
      goed: 3,
      uitleg: `De gangbare richtwaarde is 50 tot 100 Pa per meter leiding. Een lagere waarde (5 tot 10 Pa/m) zou een onrealistisch grote leiding vragen, en 500 tot 1000 Pa/m zou veel te veel geluid en pompvermogen geven voor een gewone woninginstallatie.`
    },
    {
      vraag: `Een koperbuis van 18 mm buitendiameter heeft in de gangbare cv-maat een binnendiameter van ongeveer:`,
      opties: [`18 mm`, `16 mm`, `13 mm`, `20 mm`],
      goed: 1,
      uitleg: `Bij een wanddikte van ongeveer 1,0 mm is de binnendiameter van 18 mm buis ongeveer 16 mm (18 - 2 x 1,0). 18 mm zelf is de buitenmaat, 13 mm hoort bij 15 mm buis en 20 mm bij 22 mm buis.`
    },
    {
      vraag: `Waarom kan een leidingdiameter die veel groter is dan nodig een nadeel zijn, ook al lijkt "ruim" veilig?`,
      opties: [
        `Een te ruime leiding is altijd goedkoper dan de juiste maat, dus dat is geen echt nadeel`,
        `Een te ruime leiding voldoet nooit meer aan de richtwaarde voor drukverlies per meter`,
        `De installatie warmt en koelt trager af en lucht wordt minder goed meegevoerd naar het ontluchtingspunt`,
        `Een te ruime leiding verlaagt automatisch het benodigde ketelvermogen`
      ],
      goed: 2,
      uitleg: `Een grotere diameter geeft meer waterinhoud (trager reagerend systeem) en een lagere snelheid, waardoor lucht minder makkelijk wordt meegevoerd. Een ruimere leiding is juist duurder, voldoet meestal makkelijker (niet nooit) aan het drukverlies, en heeft geen invloed op het benodigde ketelvermogen.`
    }
  ],
  kaarten: [
    { voor: `Wat zijn de drie stappen om een leidingdiameter te kiezen?`, achter: `1) debiet berekenen uit vermogen en ΔT, 2) diameter kiezen met een richtsnelheid, 3) drukverlies per meter controleren in de fabrikanttabel.` },
    { voor: `Wat is de richtwaarde voor het lineaire drukverlies in een verwarmingsleiding?`, achter: `50 tot 100 Pa per meter.` },
    { voor: `Welke richtsnelheid geldt voor een kleine leiding in een verblijfsruimte?`, achter: `Ongeveer 0,4 tot 0,8 m/s.` },
    { voor: `Wat is de binnendiameter van 15 mm koperbuis, ongeveer?`, achter: `Ongeveer 13 mm (bij een wanddikte van 1,0 mm).` },
    { voor: `Wat gebeurt er met de stroomsnelheid als je bij gelijk debiet een grotere diameter kiest?`, achter: `De snelheid daalt, want de doorsnede groeit met het kwadraat van de diameter.` },
    { voor: `Wat is het nadeel van een leiding die veel ruimer is dan nodig?`, achter: `Meer waterinhoud (trager opwarmen en afkoelen) en minder goede luchtafvoer bij lage snelheid.` }
  ],
  bronnen: ['DIM-16', 'DIM-17', 'DIM-18', 'DIM-19']
},

/* ------------------------------------------------------------------ 11.4 */
{
  id: 'm11l04',
  nr: '11.4',
  titel: 'Pomp en expansievat dimensioneren',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt een pomp en een expansievat kiezen op basis van berekening en de keuze onderbouwen.',
  videos: [
    { taal: 'nl', titel: 'Circulatiepomp / CV pomp: advies over de juiste keuze (Waterpompshop)', yt: 'E3s7zyB6zIk', duur: '±1 min, 2018' },
    { taal: 'nl', titel: 'Expansievat? Wat is het en hoe werkt het? (TV Emiel)', yt: 'IMDnnVGbmdA', duur: '±3 min, 2020' },
    { taal: 'en', titel: 'Pump Chart Basics Explained - Pump curve HVACR (The Engineering Mindset)', yt: 'U8iWNaDuUek', duur: '±13 min, 2020' }
  ],
  tekst: `
## De pomp kiezen: hetzelfde werkpunt, nu vooraf bepaald

In module 3 (les 3.4) leerde je dat het werkelijke debiet in een installatie het snijpunt is van de pompkarakteristiek (opvoerhoogte tegen debiet) en de installatiekarakteristiek (de drukval van het leidingnet, die met het kwadraat van het debiet groeit). Daar gebruikte je dat principe om een storing te verklaren. Bij het ontwerpen gebruik je het om vooraf een pomp te kiezen:

1. Bepaal het ontwerp-debiet (uit het totale vermogen en de ontwerp-ΔT, zoals in les 11.3).
2. Bepaal de drukval van het volledige leidingnet bij dat debiet, met de kwadratenregel vanaf een bekend of berekend punt.
3. Kies een pomp waarvan de curve bij dat debiet een opvoerhoogte geeft die minstens gelijk is aan die drukval.

Bij een elektronisch geregelde pomp verschuift het werkpunt bovendien mee met de warmtevraag: bij een proportionele-drukinstelling daalt de opvoerhoogte als er minder wordt gevraagd (bijvoorbeeld dichte thermostaatkranen), bij een constante-drukinstelling blijft de opvoerhoogte gelijk en verschuift het werkpunt langs die vaste curve.

!!! kern Kies de pomp op het net, niet op het typeplaatje van de oude pomp
Een pomp "die het altijd deed" zegt niets over het nieuwe net: een andere ketel, andere leidingdiameters of een ander afgiftesysteem (bijvoorbeeld vloerverwarming naast radiatoren) veranderen de installatiekarakteristiek. Reken het ontwerp-debiet en de bijbehorende drukval uit en vergelijk die met de curve van de te kiezen pomp.
!!!

## Rekenvoorbeeld: controleren of een pomp een net aankan

Een leidingnet heeft bij 900 l/h een drukval van 180 mbar (gemeten of berekend uitgangspunt). Het ontwerp-debiet van de installatie is 1100 l/h.

Met de kwadratenregel: drukval bij 1100 l/h = 180 x (1100 / 900)^2 = 180 x 1,49 = ongeveer 269 mbar.

Stel dat de curve van de gekozen pomp bij 1100 l/h een opvoerhoogte van 300 mbar geeft (uit de pompcurve van de fabrikant). Dat is meer dan de 269 mbar die het net op dat punt vraagt, dus de pomp kan dit debiet leveren: het werkelijke werkpunt ligt zelfs iets boven 1100 l/h, waar de (met het debiet stijgende) netcurve de (dalende) pompcurve weer inhaalt. Geeft de pompcurve bij 1100 l/h juist minder dan 269 mbar, dan halveert de conclusie: dan levert deze pomp in dit net minder dan het gewenste debiet, en is een grotere pomp of een pomp met een steilere curve nodig.

## Het expansievat: dezelfde formules als in module 3, een nieuw voorbeeld

De formules uit les 3.3 gebruik je hier om vooraf een vat te kiezen in plaats van een bestaand vat te controleren:

- Uitzetting: Ve = installatie-inhoud x uitzettingspercentage (ongeveer 3% voor 10 tot 80 °C)
- Voordruk: P0 = P_ST (0,1 bar per meter hoogte) + P_Z (toeslag, minstens 0,2 bar), afgerond naar boven op een veelvoud van 0,5 bar
- Vuldruk: P0 + 0,3 bar (Flamco/EN 12828)
- Nuttig effect: G = (Pe - P0) / Pe, met absolute drukken (overdruk plus ongeveer 1,0 bar)
- Brutoinhoud: V_bruto = (Ve + waterreserve) / G

## Rekenvoorbeeld: een vat voor een installatie van 180 liter

Het hoogste punt van de installatie ligt 8 m boven het vat. Aannames: uitzetting 10 tot 80 °C (3%), waterreserve 6 liter (Flamco-advies), einddruk 2,7 bar overdruk (10% onder de openingsdruk van 3 bar van het veiligheidsventiel).

| Stap | Berekening | Resultaat |
|---|---|---|
| Statische druk | 8 x 0,1 | 0,8 bar |
| Voordruk (+ 0,2 bar toeslag) | 0,8 + 0,2 = 1,0 | 1,0 bar (al een veelvoud van 0,5) |
| Vuldruk | 1,0 + 0,3 | 1,3 bar |
| Uitzetting | 180 x 0,03 | 5,4 liter |
| Absolute drukken | P0 = 2,0 bar, Pe = 3,7 bar | |
| Nuttig effect | (3,7 - 2,0) / 3,7 | 0,46 |
| Brutoinhoud | (5,4 + 6) / 0,46 | 24,8 liter |

Flamco levert vaten in een reeks standaardmaten (onder meer 8, 12, 18, 25, 35 en 50 liter). Een berekende 24,8 liter rond je naar boven af naar het eerstvolgende vat uit die reeks: hier 25 liter. Andere fabrikanten (Pneumatex, Reflex) hebben een eigen reeks maten.

?? Verdieping: waarom je nooit precies op de berekening afrondt
De berekening geeft een minimum. Rond je naar boven af naar het eerstvolgende beschikbare vat (zoals hierboven), dan houd je marge voor kleine afwijkingen in de werkelijke installatie-inhoud, een iets hogere vuldruk in de praktijk, of een klant die later een radiator toevoegt. Rond je naar onder af "om een maat te besparen", dan loopt de installatie het risico dat het veiligheidsventiel bij opwarmen toch afblaast.
??

## Wat je vastlegt

Leg vast: het ontwerp-debiet en de berekende drukval van het net (met het gebruikte referentiepunt), de gekozen pomp en waarom de curve past, en de volledige expansievatberekening (hoogte, voordruk, vuldruk, uitzetting, nuttig effect, brutoinhoud en het gekozen standaardvat).
`,
  checklist: [
    'Ik bereken het ontwerp-debiet en de bijbehorende drukval van het net met de kwadratenregel',
    'Ik kies een pomp waarvan de curve bij het ontwerp-debiet minstens de berekende drukval geeft',
    'Ik weet dat het werkpunt van een elektronische pomp meeverschuift met de warmtevraag',
    'Ik kan met de formules uit module 3 vooraf een expansievat kiezen (voordruk, vuldruk, nuttig effect, brutoinhoud)',
    'Ik rond een berekende vatinhoud naar boven af naar het eerstvolgende standaardvat, niet naar onder'
  ],
  quiz: [
    {
      vraag: `Wat is het werkpunt van een circulatiepomp in een leidingnet?`,
      opties: [
        `Het maximale debiet dat op het typeplaatje van de pomp staat, ongeacht welk leidingnet daarop is aangesloten`,
        `Het gemiddelde van het minimale en maximale debiet van de pomp`,
        `Het punt waarop de pomp de hoogste opvoerhoogte levert`,
        `Het snijpunt van de pompkarakteristiek en de installatiekarakteristiek van het net`
      ],
      goed: 3,
      uitleg: `Het werkpunt is waar de (dalende) pompcurve de (met het debiet stijgende) netcurve kruist. Het typeplaatje geeft alleen het theoretische uiterste van de pomp zelf, los van een specifiek net, en het werkpunt is geen gemiddelde en geen vast maximum.`
    },
    {
      vraag: `Een leidingnet heeft bij 800 l/h een drukval van 160 mbar. Wat is de drukval ongeveer bij 1200 l/h (kwadratenregel)?`,
      opties: [`ongeveer 240 mbar`, `ongeveer 360 mbar`, `ongeveer 160 mbar`, `ongeveer 480 mbar`],
      goed: 1,
      uitleg: `Het debiet is 1200/800 = 1,5 keer zo groot. De drukval volgt het kwadraat: 1,5 x 1,5 = 2,25 keer zoveel, dus 160 x 2,25 = 360 mbar. 240 mbar is een lineair verband (past niet bij turbulente stroming), 480 mbar hoort bij een grotere verhouding.`
    },
    {
      vraag: `Bij een proportionele-drukinstelling van een moderne circulatiepomp, wat gebeurt er als de warmtevraag daalt (meer dichte thermostaatkranen)?`,
      opties: [
        `De opvoerhoogte blijft altijd exact gelijk, wat de pomp ook doet`,
        `Het debiet stijgt juist, omdat de weerstand van het net daalt`,
        `De opvoerhoogte van de pomp daalt mee, en het werkpunt verschuift naar beneden op de curve`,
        `De pomp schakelt automatisch helemaal uit zodra een kraan dichtgaat`
      ],
      goed: 2,
      uitleg: `Bij een proportionele-drukinstelling daalt de opvoerhoogte mee met een lagere warmtevraag: het werkpunt verschuift naar beneden op de curve. Een constante-drukinstelling houdt de opvoerhoogte juist gelijk (dat is het andere type, niet dit). Dichte kranen verhogen de weerstand (niet verlagen), en de pomp schakelt niet automatisch volledig uit.`
    },
    {
      vraag: `Een installatie heeft een voordruk van 1,0 bar en een einddruk van 2,7 bar (allebei overdruk). Wat is het nuttig effect G, gerekend met absolute druk?`,
      opties: [`ongeveer 0,46`, `ongeveer 0,63`, `ongeveer 0,27`, `ongeveer 1,70`],
      goed: 0,
      uitleg: `Absolute drukken: P0 = 2,0 bar, Pe = 3,7 bar. G = (3,7 - 2,0) / 3,7 = 0,46. Rekenen met de overdrukken zelf geeft een te hoge waarde (0,63). 0,27 draait de aftrekking om, en 1,70 is alleen het drukverschil, geen verhouding.`
    },
    {
      vraag: `Een berekening geeft een benodigde brutoinhoud van 22,3 liter voor een expansievat, en de fabrikant levert de maten 18 en 25 liter. Welk vat kies je?`,
      opties: [`18 liter, want dat is de maat die het dichtst bij 22,3 liter ligt`, `18 liter, om kosten te besparen en later zo nodig bij te vullen`, `Het maakt niet uit welke maat je kiest, zolang het merk klopt`, `25 liter, want je rondt altijd naar boven af naar het eerstvolgende beschikbare vat`],
      goed: 3,
      uitleg: `22,3 liter is een berekend minimum. Een vat van 18 liter is te klein en kan de uitzetting niet volledig opvangen, met kans op afblazen van het veiligheidsventiel. Je rondt daarom naar boven af naar het eerstvolgende beschikbare vat, hier 25 liter, ook als dat niet de dichtstbijzijnde maat is.`
    },
    {
      vraag: `Waarom is "de oude pomp deed het altijd goed" geen goede basis om een nieuwe pomp te kiezen?`,
      opties: [
        `Omdat pompen na verloop van tijd wettelijk vervangen moeten worden, los van de werking`,
        `Omdat een andere ketel, andere leidingen of een ander afgiftesysteem de installatiekarakteristiek van het net kunnen veranderen`,
        `Omdat een oudere pomp altijd een hogere opvoerhoogte heeft dan een nieuwe pomp`,
        `Omdat het werkpunt van een installatie nooit verandert nadat de installatie voor het eerst in bedrijf is gesteld, dus de reden ligt niet bij het net`
      ],
      goed: 1,
      uitleg: `Het werkpunt hangt af van de installatiekarakteristiek van het net op dat moment. Verandert er iets in de installatie (ketel, leidingen, afgiftesysteem), dan verandert die karakteristiek en moet je opnieuw rekenen. Er is geen algemene wettelijke vervangingstermijn voor pompen op basis van leeftijd, en de vergelijking oud versus nieuw zegt niets zonder het net te kennen.`
    }
  ],
  kaarten: [
    { voor: `Wat is het werkpunt van een circulatiepomp?`, achter: `Het snijpunt van de pompkarakteristiek en de installatiekarakteristiek (drukval) van het net.` },
    { voor: `Wat zijn de drie stappen om vooraf een pomp te kiezen?`, achter: `1) ontwerp-debiet bepalen, 2) drukval van het net bij dat debiet berekenen, 3) een pomp kiezen waarvan de curve bij dat debiet minstens die drukval geeft.` },
    { voor: `Wat doet het werkpunt bij een proportionele-drukinstelling als de warmtevraag daalt?`, achter: `De opvoerhoogte daalt mee en het werkpunt verschuift naar beneden op de curve.` },
    { voor: `Welke formule geeft het nuttig effect van een expansievat?`, achter: `G = (Pe - P0) / Pe, met absolute druk (overdruk plus ongeveer 1,0 bar).` },
    { voor: `Hoe rond je een berekende vatinhoud af?`, achter: `Altijd naar boven af naar het eerstvolgende beschikbare standaardvat, nooit naar onder.` },
    { voor: `Noem de vijf stappen van een expansievatberekening.`, achter: `Uitzetting, voordruk, vuldruk, nuttig effect en brutoinhoud.` },
    { voor: `Waarom is "de oude pomp deed het altijd" geen goede basis voor een nieuwe keuze?`, achter: `Omdat een gewijzigde ketel, leiding of afgifte de installatiekarakteristiek van het net verandert.` },
    { voor: `Waarom kan een grotere leiding het benodigde pompvermogen verlagen?`, achter: `Een grotere diameter geeft bij gelijk debiet een lagere snelheid en dus een lagere drukval, wat minder van de pomp vraagt.` }
  ],
  bronnen: ['DIM-20', 'DIM-21', 'DIM-22', 'DIM-23', 'HYD-01', 'HYD-02', 'HYD-05', 'HYD-15', 'HYD-21', 'HYD-22']
},

/* ------------------------------------------------------------------ 11.5 */
{
  id: 'm11l05',
  nr: '11.5',
  titel: 'Afvoer en luchttoevoer ontwerpen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt controleren of de afvoer en luchttoevoer binnen de toegestane lengte en weerstand van het toestel blijven.',
  videos: [
    { taal: 'nl', titel: 'Een veilige rookgasafvoer #1 (InstallatieNL)', yt: 'HYFTkH2KEYY', duur: '±1 min, 2019' },
    { taal: 'nl', titel: 'Een veilige rookgasafvoer #4: beugelen (InstallatieNL)', yt: 'NVFc81sIvWw', duur: '±1 min, 2019' },
    { taal: 'en', titel: 'How do I Measure and Fit the Flue Correctly? (Ideal Heating, VK)', yt: 'mss_D8_6LZY', duur: '±2 min, 2022' }
  ],
  tekst: `
## De optelsom: recht plus vervangend

Module 4 en 8 hebben je de toesteltypen, materialen en montagevoorschriften van rookgasafvoer- en luchttoevoersystemen al gegeven. Bij het ontwerpen komt daar één rekenstap bij: controleren of de gekozen route past binnen de maximale lengte die de fabrikant voor dat toestel en die diameter toestaat.

Elke bocht of knie in een kanaal kost extra weerstand. Fabrikanten drukken dat uit als een vervangende (equivalente) lengte: hoeveel meter rechte leiding dezelfde weerstand geeft als die bocht. Die vervangende lengte hangt af van de diameter van het kanaal: bij een grotere diameter is de vervangende lengte van een bocht van 90 graden groter.

!!! kern Tel de bochten mee als extra meters, niet als een detail
Een route "lijkt" kort als je alleen de rechte leiding meet. Reken elke bocht om naar zijn vervangende lengte en tel die op bij de rechte lengte, voor je de uitkomst tegen de maximale lengte van de fabrikant controleert.
!!!

De controle is een optelsom:

Totale vervangende lengte = som van de rechte leidingdelen + som van de vervangende lengte van elke bocht

Is die uitkomst hoger dan de maximaal toegestane lengte uit de fabrikanttabel, dan is een grotere diameter, een kortere route of minder bochten nodig.

!!! gevaar Een te lang of te veel bochtig kanaal is geen kosmetisch probleem
Een kanaal dat de maximale (vervangende) lengte overschrijdt, geeft de ventilator van het toestel te veel weerstand. Het toestel kan dan onvoldoende verbrandingslucht krijgen of de rookgassen niet meer volledig afvoeren, met een verhoogd risico op onvolledige verbranding en koolmonoxide. Overschrijd de maximale lengte uit de installatiehandleiding daarom nooit, ook niet "voor deze keer".
!!!

## Rekenvoorbeeld: past deze route?

Voor een Intergas Kombi Kompakt HRE 24/18 A geldt voor het concentrische systeem met een horizontale geveluitmonding een maximaal toegestane lengte van 100 m (inclusief de dubbelpijpsdoorvoer), voor de HRE 28/24 A 85 m en voor de HRE 36/30 A 80 m. Dit zijn voorbeelden van dit merk en model bij deze diameter: elk toestel, systeem en diameter heeft een eigen tabel, altijd te controleren in de bijbehorende installatiehandleiding.

Stel een route van 6 m rechte leiding, twee bochten van 90 graden en één bocht van 45 graden. Neem als voorbeeldwaarden (controleer altijd de tabel van het gekozen systeem): een vervangende lengte van 3,1 m voor een bocht van 90 graden en 1,5 m voor een bocht van 45 graden bij deze diameter.

| Onderdeel | Lengte |
|---|---|
| Rechte leiding | 6,0 m |
| 2 x bocht 90 graden (2 x 3,1 m) | 6,2 m |
| 1 x bocht 45 graden | 1,5 m |
| Totale vervangende lengte | 13,7 m |

Bij een maximum van 100, 85 of 80 m (afhankelijk van het model) zit deze route ruim binnen de norm. Bij een lange route met veel bochten, bijvoorbeeld door een schacht met meerdere richtingsveranderingen, kan de optelsom wel dicht bij het maximum komen: dan is deze controle geen formaliteit meer maar de reden om de route aan te passen.

?? Verdieping: waarom je niet zomaar "het zal wel passen" mag denken
Een enkele bocht lijkt weinig voor te stellen, maar de vervangende lengte van een paar bochten samen kan al net zoveel wegen als enkele meters rechte leiding. Bij een grotere diameter is de vervangende lengte van een bocht bovendien groter dan bij een kleine diameter: een grotere diameter geeft dus niet automatisch meer marge voor bochten.
??

## Wat je vastlegt

Leg per project vast: het gekozen toestel, systeem en diameter, de maximaal toegestane lengte uit de handleiding, en de optelsom van rechte en vervangende lengte voor de werkelijk gekozen route. Wijzigt de route later (bijvoorbeeld een extra bocht om een balk te ontwijken), dan reken je de optelsom opnieuw.
`,
  checklist: [
    'Ik weet dat elke bocht een vervangende (equivalente) lengte heeft die met de rechte lengte wordt opgeteld',
    'Ik controleer de opgetelde lengte altijd tegen de maximale lengte uit de handleiding van het specifieke toestel en systeem',
    'Ik weet dat een grotere diameter niet automatisch meer marge voor bochten geeft',
    'Ik overschrijd de maximale toegestane lengte nooit, ook niet bij een kleine overschrijding',
    'Ik reken de optelsom opnieuw als de route later wijzigt'
  ],
  quiz: [
    {
      vraag: `Wat is de vervangende (equivalente) lengte van een bocht in een rookgasafvoer- of luchttoevoerkanaal?`,
      opties: [
        `De werkelijke fysieke lengte van het bochtstuk zelf, in centimeters`,
        `De lengte rechte leiding die dezelfde weerstand geeft als die bocht`,
        `Een vast getal van 1 meter voor elke bocht, ongeacht de diameter`,
        `De afstand tussen twee bochten in dezelfde leiding`
      ],
      goed: 1,
      uitleg: `De vervangende lengte drukt de extra weerstand van een bocht uit in een gelijkwaardige lengte rechte leiding, zodat je alles in dezelfde eenheid kunt optellen. Het is niet de fysieke lengte van het bochtstuk zelf, geen vast getal (het hangt af van de diameter) en geen afstand tussen bochten.`
    },
    {
      vraag: `Een route heeft 8 m rechte leiding en drie bochten van 90 graden met elk een vervangende lengte van 3,0 m. Wat is de totale vervangende lengte?`,
      opties: [`11 m`, `9 m`, `24 m`, `17 m`],
      goed: 3,
      uitleg: `8 + (3 x 3,0) = 8 + 9 = 17 m. 11 m telt maar één bocht mee. 9 m is alleen de bochten, zonder de rechte leiding. 24 m zou horen bij acht bochten in plaats van drie.`
    },
    {
      vraag: `Waarom overschrijdt een te lang of te bochtig afvoerkanaal geen kosmetisch probleem, maar een veiligheidsrisico?`,
      opties: [
        `Het toestel kan onvoldoende verbrandingslucht krijgen of rookgassen niet volledig afvoeren, met risico op koolmonoxide`,
        `Een te lang kanaal veroorzaakt alleen extra geluid van de ventilator, zonder gevolgen voor de verbranding`,
        `Een te lang kanaal verhoogt alleen de energierekening, door extra warmteverlies via het kanaal`,
        `Het risico betreft alleen condensvorming, niet de verbranding of de rookgasafvoer zelf`
      ],
      goed: 0,
      uitleg: `Te veel weerstand belemmert de ventilator van het toestel bij het aanvoeren van lucht en het afvoeren van rookgas, wat tot onvolledige verbranding en koolmonoxide kan leiden. Geluid, energierekening en condensvorming zijn geen reden waarom dit in de les als gevaarlijk wordt aangemerkt.`
    },
    {
      vraag: `Klopt de bewering "een grotere kanaaldiameter geeft altijd meer marge voor extra bochten"?`,
      opties: [
        `Ja, een grotere diameter geeft altijd meer marge, bij elk systeem en elke fabrikant`,
        `Dit hangt niet af van de diameter, alleen van het aantal bochten`,
        `Nee, want de vervangende lengte van een bocht is bij een grotere diameter juist groter`,
        `Ja, maar alleen bij luchttoevoer, nooit bij rookgasafvoer`
      ],
      goed: 2,
      uitleg: `Bij een grotere diameter kost een bocht van 90 graden juist meer vervangende lengte dan bij een kleinere diameter. Een grotere diameter geeft dus niet automatisch meer marge, en dit geldt voor beide leidingen (lucht en rookgas), niet voor slechts één.`
    },
    {
      vraag: `Een monteur voegt na de eerste berekening nog een extra bocht toe om een balk te ontwijken. Wat is de juiste vervolgstap?`,
      opties: [
        `Niets: één extra bocht is te klein om nog een verschil te maken voor de norm`,
        `De totale vervangende lengte opnieuw berekenen met de extra bocht erbij, en opnieuw tegen het maximum controleren`,
        `Alleen de diameter van het toestel aanpassen naar de eerstvolgende grotere maat, zonder de lengteberekening opnieuw te herhalen`,
        `De installatiehandleiding negeren, omdat de eerste berekening al was goedgekeurd`
      ],
      goed: 1,
      uitleg: `Elke wijziging in de route verandert de optelsom van rechte en vervangende lengte. Die controleer je daarom opnieuw tegen het maximum, ook als de wijziging klein lijkt: een paar bochten samen kunnen al net zoveel wegen als enkele meters rechte leiding. Alleen de diameter aanpassen zonder herberekening, of de handleiding negeren, laat het risico onopgemerkt.`
    }
  ],
  kaarten: [
    { voor: `Wat is de vervangende (equivalente) lengte van een bocht?`, achter: `De lengte rechte leiding die dezelfde weerstand geeft als die bocht.` },
    { voor: `Wat is de optelsom die je maakt bij het ontwerpen van een afvoer- of luchttoevoerroute?`, achter: `Som van de rechte leidingdelen plus de som van de vervangende lengte van elke bocht, vergeleken met de maximale lengte uit de fabrikanttabel.` },
    { voor: `Geeft een grotere kanaaldiameter meer marge voor bochten?`, achter: `Niet automatisch: de vervangende lengte van een bocht is bij een grotere diameter juist groter.` },
    { voor: `Wat is het risico van een te lang of te bochtig afvoerkanaal?`, achter: `Te veel weerstand voor de ventilator, met risico op onvolledige verbranding en koolmonoxide.` },
    { voor: `Wat doe je als je de gekozen route later wijzigt (bijvoorbeeld een extra bocht)?`, achter: `De optelsom opnieuw berekenen en opnieuw tegen de maximale lengte controleren.` },
    { voor: `Waar vind je de maximale toegestane lengte voor een specifiek toestel?`, achter: `In de installatiehandleiding van dat toestel, model en gekozen systeem/diameter: dat verschilt per fabrikant.` }
  ],
  bronnen: ['DIM-24', 'DIM-25', 'DIM-26']
},

/* ------------------------------------------------------------------ 11.6 */
{
  id: 'm11l06',
  nr: '11.6',
  titel: 'Een compleet ontwerp uitwerken',
  duur: 40,
  type: 'les',
  leerdoel: 'Je kunt voor een woning een volledig ontwerp uitwerken en elke keuze onderbouwen.',
  videos: [
    { taal: 'nl', titel: 'Warmteverliesberekening... in 60 seconden (RensaTV)', yt: 'aHzrUG4aIH0', duur: '±1 min, 2023' },
    { taal: 'en', titel: 'Design Heating System Pipework Like a Pro (Urban Plumbers, VK)', yt: 'O3eBxIFtHRQ', duur: '±15 min, 2024' }
  ],
  tekst: `
## Eén woning, alle keuzes achter elkaar

De vijf vorige lessen behandelden elk onderdeel apart. Bij een echt ontwerp doorloop je ze in dezelfde volgorde en op elkaar aansluitend: het ene onderdeel is de invoer van het volgende. Deze les doet dat voor één voorbeeldwoning, met de methoden uit les 11.1 tot 11.5.

!!! kern Een ontwerp is pas compleet als de onderdelen op elkaar aansluiten
Verander je later één keuze (een andere ketel, een groter vat, een extra bocht in de afvoer), dan controleer je of de rest van het ontwerp nog klopt. De onderdelen bouwen op elkaar voort: het warmteverlies bepaalt het ketelvermogen, het ketelvermogen (met het ΔT) bepaalt het debiet, het debiet bepaalt de leidingdiameters en de pompkeuze, en de installatie-inhoud bepaalt het expansievat.
!!!

## Stap 1: warmteverlies (les 11.1)

Voor de voorbeeldwoning is met de ISSO 51-methode (transmissie + ventilatie, per vertrek opgeteld) een warmteverlies berekend van **6,2 kW** bij de ontwerpdag (buiten -10 °C, binnen 22 °C, ΔT 32 K).

## Stap 2: ketelvermogen (les 11.2)

Bij dit warmteverlies past een Remeha Calenta 25s (modulatiebereik 5,2 tot 25,0 kW, zie module 3) qua maximum ruim. De controle op mild weer:

| Situatie | ΔT | Vermogen |
|---|---|---|
| Ontwerpdag (-10 °C) | 32 K | 6,2 kW |
| Milde dag (5 °C) | 17 K | 6,2 x 17/32 = 3,3 kW |

3,3 kW ligt onder het minimum van 5,2 kW: deze ketel gaat in het voor- en najaar pendelen. Dat is met dit modulatiebereik niet te voorkomen zonder een ander toestel of een aanvullende maatregel (bijvoorbeeld modulerende zoneregeling); het ontwerp benoemt dit bewust als bekend gedrag, niet als fout.

## Stap 3: leidingen (les 11.3)

De hoofdleiding vervoert het volledige vermogen (6,2 kW) bij een ontwerp-ΔT van 20 K:

Debiet = 6200 / (1,163 x 20) = 267 l/h

Bij 15 mm koperbuis (binnendiameter 13 mm, doorsnede 1,327 x 10^-4 m2): snelheid = (267 / 3600 / 1000) / 1,327 x 10^-4 = ongeveer 0,56 m/s. Dat past ruim binnen de richtsnelheid voor een leiding in een verblijfsruimte (0,4 tot 0,8 m/s): 15 mm is hier voldoende.

## Stap 4: pomp en expansievat (les 11.4)

De pomp wordt gekozen op het ontwerp-debiet (267 l/h) en de berekende drukval van dit leidingnet bij dat debiet (kwadratenregel vanaf een bekend punt, zoals in les 11.4).

Voor het expansievat: installatie-inhoud 120 liter, hoogste punt 5 m boven het vat.

| Stap | Berekening | Resultaat |
|---|---|---|
| Statische druk | 5 x 0,1 | 0,5 bar |
| Voordruk (+ 0,2 bar, afgerond op 0,5) | 0,5 + 0,2 = 0,7, afgerond | 1,0 bar |
| Vuldruk | 1,0 + 0,3 | 1,3 bar |
| Uitzetting | 120 x 0,03 | 3,6 liter |
| Nuttig effect (P0 2,0 bar, Pe 3,7 bar abs.) | (3,7 - 2,0) / 3,7 | 0,46 |
| Brutoinhoud | (3,6 + 6) / 0,46 | 20,9 liter |

20,9 liter rond je naar boven af naar het eerstvolgende Flamco-vat: 25 liter.

## Stap 5: afvoer en luchttoevoer (les 11.5)

De route naar de gevel is 4 m recht plus twee bochten van 90 graden (voorbeeldwaarde 3,1 m vervangende lengte per bocht bij deze diameter):

Totale vervangende lengte = 4 + (2 x 3,1) = 10,2 m

Vergeleken met de maximale lengte van het gekozen toestel (bijvoorbeeld 100 m voor een Intergas HRE 24/18 A bij dit systeem, zie les 11.5) zit dit ruim binnen de norm.

## Stap 6: controleren of het geheel klopt

| Onderdeel | Gekozen waarde | Gebaseerd op |
|---|---|---|
| Warmteverlies | 6,2 kW | les 11.1, ISSO 51 |
| Ketel | Calenta 25s, 5,2 tot 25,0 kW | les 11.2, met kennis van het pendelgedrag bij mild weer |
| Hoofdleiding | 15 mm (267 l/h, 0,56 m/s) | les 11.3 |
| Pomp | gekozen op werkpunt bij 267 l/h | les 11.4 |
| Expansievat | 25 liter (berekend 20,9 liter) | les 11.4 |
| Afvoer | 10,2 m vervangende lengte, binnen het maximum | les 11.5 |

Dit overzicht is wat je in een echt project vastlegt: niet alleen de eindkeuzes, maar ook de tussenstappen en de aannames waarop ze steunen. Zo kan een collega, een keurmerkinstantie of je toekomstige zelf de keuzes navolgen en, als iets in de woning verandert (een uitbouw, een andere ketel, vloerverwarming erbij), precies zien welke stap opnieuw moet worden doorgerekend.

?? Verdieping: wat deze cursus niet vervangt
Deze module leert je de rekenmethode en de samenhang tussen de onderdelen. Een officiële ISSO 51-berekening met alle details (koudebruggen, opwarmtoeslag, exacte correcties) en een berekening die voor een keurmerk of vergunning moet worden ingediend, vraagt de volledige publicatie of erkende software. De cursus geeft geen diploma en geen Bewijs van Vakmanschap CO: weten waar je eigen bevoegdheid ophoudt en wanneer je een preciezere berekening (of een tweede lezer) nodig hebt, hoort bij vakbekwaamheid.
??

## Wat je vastlegt

Voor elk compleet ontwerp: de zes stappen uit deze les, met per stap het gebruikte getal, de gebruikte formule en de bron of aanname. Dat maakt het ontwerp controleerbaar en herhaalbaar, ook door iemand anders.
`,
  checklist: [
    'Ik kan de zes stappen van een compleet ontwerp in de juiste volgorde noemen',
    'Ik zie hoe de uitkomst van elke stap de invoer is van de volgende stap',
    'Ik controleer bij een gewijzigde keuze of de rest van het ontwerp nog klopt',
    'Ik leg per stap het gebruikte getal, de formule en de bron of aanname vast',
    'Ik weet dat een volledige, keurmerkwaardige berekening meer detail vraagt dan deze cursus behandelt'
  ],
  quiz: [
    {
      vraag: `In welke volgorde bouwen de stappen van een compleet ontwerp op elkaar voort?`,
      opties: [
        `Ketelvermogen kiezen, dan pas het warmteverlies berekenen, gevolgd door afvoer, leidingen, pomp en expansievat controleren`,
        `De volgorde maakt niet uit, zolang alle onderdelen aan het einde maar zijn gecontroleerd`,
        `Warmteverlies, ketelvermogen, leidingen (debiet en diameter), pomp en expansievat, afvoer en luchttoevoer`,
        `Afvoer en luchttoevoer eerst, want dat bepaalt welke ketel past`
      ],
      goed: 2,
      uitleg: `Het warmteverlies bepaalt het benodigde ketelvermogen, het vermogen (met het ΔT) bepaalt het debiet voor leidingen en pomp, en de installatie-inhoud bepaalt het expansievat. De afvoer hangt af van het gekozen toestel, dus die volgt na de ketelkeuze. De volgorde is dus niet willekeurig en start niet bij de afvoer.`
    },
    {
      vraag: `Een woning heeft 6,2 kW warmteverlies bij ΔT 32 K. Wat is de geschatte warmtevraag bij ΔT 17 K (vereenvoudigde lineaire aanname)?`,
      opties: [`ongeveer 3,3 kW`, `ongeveer 6,2 kW`, `ongeveer 11,7 kW`, `ongeveer 1,7 kW`],
      goed: 0,
      uitleg: `6,2 x (17/32) = 3,3 kW. 6,2 kW zou betekenen dat de buitentemperatuur geen invloed heeft. 11,7 kW en 1,7 kW ontstaan door de verhouding om te draaien of fout toe te passen.`
    },
    {
      vraag: `In het voorbeeld pendelt de gekozen ketel bij mild weer, omdat de vraag onder het minimumvermogen zakt. Wat is de juiste conclusie voor het ontwerp?`,
      opties: [
        `De hele berekening van het warmteverlies moet fout zijn, want een goed ontworpen installatie pendelt nooit`,
        `Dit los je alleen op door een groter ketelvermogen te kiezen dan het berekende warmteverlies`,
        `Pendelen bij mild weer is nooit acceptabel en betekent dat het ontwerp moet worden afgekeurd`,
        `Dit is bekend gedrag bij dit modulatiebereik, te benoemen in het ontwerp, en eventueel te verzachten met zoneregeling of een ander toestel`
      ],
      goed: 3,
      uitleg: `Zoals les 11.2 laat zien, is dit een normaal gevolg van het modulatiebereik van veel ketels, geen rekenfout. Een groter ketelvermogen verhoogt meestal ook het minimumvermogen en maakt het probleem eerder groter dan kleiner. Het is een bewuste afweging, geen automatische reden tot afkeuring.`
    },
    {
      vraag: `Een hoofdleiding vervoert 6,2 kW bij ΔT 20 K. Bij 15 mm koperbuis (binnendiameter 13 mm) is de snelheid ongeveer 0,56 m/s. Wat betekent dat voor de keuze van deze diameter in een verblijfsruimte?`,
      opties: [
        `Dit is veel te laag: een leiding in een verblijfsruimte moet minstens 1,5 m/s halen`,
        `Dit past ruim binnen de richtsnelheid van 0,4 tot 0,8 m/s, dus 15 mm is hier voldoende`,
        `Dit is veel te hoog: een leiding die door een verblijfsruimte loopt mag volgens de richtlijn nooit boven 0,3 m/s uitkomen`,
        `De snelheid zelf is niet relevant, alleen het drukverlies per meter telt`
      ],
      goed: 1,
      uitleg: `0,56 m/s valt binnen de richtsnelheid van 0,4 tot 0,8 m/s voor een leiding in een verblijfsruimte (les 11.3). 1,5 m/s hoort bij een hoofdleiding buiten verblijfsruimten, niet bij dit geval, en een harde grens van 0,3 m/s bestaat niet. Snelheid is juist wel relevant: het is de eerste controlestap voor je het drukverlies per meter checkt.`
    },
    {
      vraag: `Waarom leg je bij een compleet ontwerp ook de gebruikte aannames vast (bijvoorbeeld de vervangende lengte per bocht), niet alleen de eindkeuzes?`,
      opties: [
        `Omdat de wet dat in alle gevallen voorschrijft voor elk ontwerp, zonder enige uitzondering voor kleine of eenvoudige installaties`,
        `Alleen om aan te tonen dat er geen fouten in de berekening zaten`,
        `Zodat iemand anders (of jij later) de keuzes kan navolgen en weet wat opnieuw moet worden doorgerekend bij een wijziging`,
        `Aannames zijn niet belangrijk om vast te leggen, alleen de eindresultaten tellen`
      ],
      goed: 2,
      uitleg: `Vastgelegde aannames en tussenstappen maken een ontwerp controleerbaar en herhaalbaar: verandert er iets aan de woning of installatie, dan is meteen duidelijk welke stap opnieuw moet worden gemaakt. Dit is een vakmatige gewoonte, geen wettelijke plicht in deze exacte vorm, en het gaat niet uitsluitend om foutloosheid aantonen.`
    }
  ],
  kaarten: [
    { voor: `Noem de zes stappen van een compleet cv-ontwerp.`, achter: `Warmteverlies, ketelvermogen, leidingen, pomp en expansievat, afvoer en luchttoevoer, en de controle of alles op elkaar aansluit.` },
    { voor: `Wat bepaalt het benodigde ketelvermogen?`, achter: `Het berekende warmteverlies van de woning bij de ontwerpdag.` },
    { voor: `Wat bepaalt het benodigde debiet voor leidingen en pomp?`, achter: `Het gekozen vermogen samen met het ontwerp-ΔT (debiet = vermogen / (1,163 x ΔT)).` },
    { voor: `Wat controleer je als je later één keuze in het ontwerp wijzigt?`, achter: `Of de rest van het ontwerp (de andere vijf onderdelen) nog klopt met die wijziging.` },
    { voor: `Wat vervangt deze cursus niet?`, achter: `Een volledige, officiële ISSO 51-berekening met erkende software, en het diploma of Bewijs van Vakmanschap CO.` },
    { voor: `Waarom leg je per stap de bron of aanname vast?`, achter: `Zodat het ontwerp controleerbaar en herhaalbaar is, ook voor iemand anders of jezelf later.` }
  ],
  bronnen: ['DIM-01', 'DIM-06', 'DIM-15', 'DIM-18', 'DIM-23', 'DIM-26', 'EXA-05']
}
  ]
});
