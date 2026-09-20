/* ==========================================================================
   m16.js - Module 16: Storingzoeken en reparatie
   Lessen 16.1 t/m 16.8 zijn geschreven op basis van project/docs/feiten/16-storingzoeken.md (STZ) en,
   vooral, op feiten die al in eerdere onderzoeksrondes stonden: 05-installeren-meten-onderhoud-storingen.md
   (STO, MRK, MET, ONT, KLA, INS), 03-ketel-hydrauliek-regeling.md (HYD, KET, TAP, REG),
   04-rookgas-en-luchttoevoer.md (RGA) en 09-elektra-aan-de-ketel.md (ELK). Die feiten worden hier
   rechtstreeks geciteerd in plaats van gedupliceerd: zie de leeswijzer van 16-storingzoeken.md.
   Merkspecifieke waarden en codes (Remeha, Intergas, Vaillant, ATAG, Nefit) staan steeds met model en
   uitgave erbij en met de zin dat het per model verschilt. Meten van ionisatiestroom in serie met een
   multimeter wordt niet aangeraden: er is geen Nederlandse fabrikantprocedure voor gevonden (MET-27,
   register 05, C-zekerheid, niet gebruikt). Een echte werking van een luchtdrukverschilschakelaar is
   niet met een fabrikantbron bevestigd (zie open vraag 4 in 16-storingzoeken.md): les 16.7 gebruikt
   daarom alleen ventilatortoerentalbewaking, recirculatie en blokkade als wel-bevestigde onderwerpen.
   ========================================================================== */

CURSUS.addModule({
  id: 'm16',
  nr: 16,
  deel: 2,
  titel: 'Storingzoeken en reparatie',
  ondertitel: 'Wat een topmonteur onderscheidt van een onderdelenwisselaar.',
  niveau: 'Gevorderd',
  studietijd: 12,
  intro: 'Systematisch storingzoeken: van klacht naar bewezen oorzaak. De methode, het lezen van storingscodes en de klassieke klachten: geen warm water, geen verwarming, drukproblemen, ontsteking en afvoer.',
  inleiding: [
    'Twee monteurs komen bij dezelfde storing. De een vervangt het onderdeel dat de vorige keer de oorzaak was en hoopt dat het weer werkt. De ander stelt vragen, meet, en vervangt pas als hij heeft bewezen wat de oorzaak is. Het verschil tussen die twee zit niet in ervaring maar in volgorde. Deze module bouwt die volgorde op: de methode, het lezen van een storingscode zonder erin te trappen, en dan de klassieke klachten van tapwater tot afvoer, in de volgorde waarin ze in de praktijk voorkomen.',
    'Storingscodes, meetwaarden en instelwaarden staan hier steeds als voorbeeld uit een handleiding, met merk en model erbij. Voor het toestel waaraan je werkt geldt de handleiding van dat toestel: een code die bij het ene merk "waterdruk te laag" betekent, kan bij een ander merk iets heel anders zijn.'
  ],
  leerdoelen: [
    'Een storing methodisch aanpakken van klacht tot bewezen oorzaak',
    'Een storingscode lezen als aanwijzing en niet als diagnose',
    'De klassieke klachten (tapwater, verwarming, druk, ontsteking, lucht en afvoer) diagnosticeren',
    'Intermitterende storingen aanpakken',
    'Beslissen of je repareert of adviseert te vervangen'
  ],
  examen: [
    {
      vraag: `Een ketel heeft een storing. Vorige maand hielp het vervangen van de driewegklep bij een vergelijkbare klacht. Wat is de juiste eerste stap deze keer?`,
      opties: [`De storingsgeschiedenis en de code lezen en met een meting nagaan of nu dezelfde oorzaak speelt`, `Meteen weer de driewegklep vervangen, want die hielp de vorige keer bij een vergelijkbare klacht`, `Een week wachten om te zien of de klacht zichzelf oplost voordat je iets test`, `De klant vragen zelf de klep te controleren en terugbellen als het niet werkt`],
      goed: 0,
      uitleg: `Wat de vorige keer de oorzaak was, is geen bewijs voor deze keer, ook niet bij een vergelijkbare klacht. Fabrikanten schrijven voor om eerst de code en de storingsgeschiedenis te lezen (STO-01) en de hypothese met een meting te bewijzen voor je iets vervangt.`
    },
    {
      vraag: `Vaillant staat maximaal 3 herhaalde resetpogingen toe voordat naar het serviceteam wordt verwezen. Wat is de reden om na een paar mislukte pogingen te stoppen met resetten?`,
      opties: [`Resetten kost extra elektriciteit en dat wil de klant niet betalen`, `Een storing die na een paar pogingen terugkeert, heeft een oorzaak die je moet vinden en bewijzen in plaats van weg te drukken`, `De fabrikant verbiedt meer dan 3 pogingen om garantietechnische redenen`, `Meer dan 3 pogingen achter elkaar beschadigt in alle gevallen onherstelbaar de elektronica van de printplaat van het toestel`],
      goed: 1,
      uitleg: `Een storing die na resetten terugkomt, is niet weg: je hebt de oorzaak alleen nog niet gevonden. Vaillant begrenst het aantal pogingen daarom en verwijst daarna naar het serviceteam (STO-04): dat is een signaal om over te stappen op meten in plaats van nog een keer op de resetknop te drukken.`
    },
    {
      vraag: `Waarom is een storingscode een aanwijzing en geen diagnose?`,
      opties: [`Omdat displays vaak defect zijn en willekeurige codes tonen`, `Omdat een code alleen zegt welke beveiliging heeft ingegrepen, niet welk onderdeel of welke instelling de onderliggende oorzaak is`, `Omdat storingscodes uitsluitend voor de fabrikant bedoeld zijn en niet voor de monteur`, `Omdat elke ketel om de paar jaar een compleet nieuwe codetabel krijgt die structureel niets meer met de vorige tabel te maken heeft`],
      goed: 1,
      uitleg: `Een code (bijvoorbeeld "geen vlamsignaal") vertelt welke beveiliging ingreep, niet waarom: de gasdruk, de elektrode, de aarding of de gas-luchtafstelling kunnen alle vier dezelfde code geven (STO-08). De code stuurt je onderzoek, hij vervangt het niet.`
    },
    {
      vraag: `Een Intergas Kombi Kompakt HRE toont code 8, een Nefit ProLine NxT toont code 7A 550. Wat volgt daaruit over storingscodes tussen merken?`,
      opties: [`Codes met een compleet ander nummer, andere letters of andere cijfercombinaties betekenen in de praktijk bij elk denkbaar merk en model van cv-ketel toch precies hetzelfde onderliggende probleem`, `Nefit gebruikt geen numerieke codes maar altijd alleen letters`, `Cijfercodes zijn ouder dan lettercodes en worden uitgefaseerd bij alle merken`, `Dezelfde soort informatie (ventilatortoerental bij Intergas, netspanning bij Nefit) staat bij elk merk onder een eigen code, dus je zoekt de code op in de handleiding van dat merk en model`],
      goed: 3,
      uitleg: `Intergas code 8 betekent ventilatortoerental niet juist, Nefit code 7A 550 betekent een te lage netspanning: twee andere onderwerpen, twee andere nummeringen (MRK-11, MRK-14). Codes zijn dus per merk en model opgebouwd, nooit universeel.`
    },
    {
      vraag: `Bij een klacht "geen warm tapwater" test je eerst de doorstroming en de sensor, dan de driewegklep en de platenwisselaar. Waarom in die volgorde?`,
      opties: [`Omdat de fabrikant in de garantievoorwaarden van elk toestel een vaste, verplichte volgorde voorschrijft die de installateur bij elke storing zonder uitzondering letterlijk en in exact deze volgorde moet volgen`, `Omdat je van de eenvoudigst te controleren en meest voorkomende oorzaak naar de duurdere onderdelen werkt, in plaats van meteen een duur onderdeel te vervangen`, `Omdat de driewegklep altijd als laatste onderdeel wordt gecontroleerd volgens de wet`, `Omdat de platenwisselaar nooit de oorzaak van deze klacht kan zijn`],
      goed: 1,
      uitleg: `Intergas noemt bij geen warm tapwater onder meer een te lage tapflow, een defecte stromingssensor, en tapwaterzijdige kalk of vervuiling (STO-11). Beginnen bij wat je snel en goedkoop kunt controleren voorkomt dat je een duur onderdeel vervangt terwijl de oorzaak elders zit.`
    },
    {
      vraag: `Een combiketel geeft wel warm water maar geen verwarming. Welke twee onderdelen controleer je het eerst, gezien hun rol in de keten?`,
      opties: [`De thermostaat of regeling (geeft de ketel wel een warmtevraag?) en de pomp (draait die?)`, `De platenwarmtewisselaar en de tapwatersensor, want die twee onderdelen zijn bij een combiketel altijd de eerste en enige mogelijke oorzaak`, `De gasmeter bij de voordeur en de hoofdschakelaar in de meterkast`, `De rookgasafvoer op het dak en de sifon van de wasmachine`],
      goed: 0,
      uitleg: `Werkt het tapwater wel, dan functioneren brander, gasblok en warmtewisselaar. De resterende keten voor verwarming is de warmtevraag (thermostaat, regeling) en de waterzijdige kant (pomp, druk, lucht): Intergas noemt bij geen verwarming onder meer thermostaat, regeling en pomp die niet draait (STO-09).`
    },
    {
      vraag: `Een klant belt: "de druk zakt steeds en ik moet elke week bijvullen". Bij het opwarmen van de installatie loopt de druk juist op tot bijna 3 bar. Wat is de meest waarschijnlijke oorzaak?`,
      opties: [`Een lek in een leiding onder de vloer die zich in de praktijk altijd vroeg of laat verraadt door zichtbare vochtplekken op het plafond van de kelder of de garage`, `Een te lage voordruk van het expansievat, waardoor het uitzettingswater niet wordt opgevangen en via het veiligheidsventiel verloren gaat`, `Een defect gasblok dat de waterdruk beinvloedt`, `Een te hoog ingestelde warmtapwatertemperatuur`],
      goed: 1,
      uitleg: `Een lek geeft een gestage daling, ook koud. Hier stijgt de druk juist bij opwarmen (het water zet ongeveer 3 procent uit tussen 10 en 80 graden, HYD-01) tot het veiligheidsventiel opent, waarna het afgeblazen water bij afkoelen ontbreekt en de druk onder de minimale waarde zakt. Dat wijst op een te lage voordruk van het expansievat.`
    },
    {
      vraag: `Een ATAG-toestel toont code 118 (druk te laag). De installatiehandleiding noemt als eerste maatregel het handmatig deblokkeren van de ketelpomp. Waarom kan een vastgelopen pomp samen met deze klacht voorkomen?`,
      opties: [`Een vastgelopen pomp verhoogt de gasdruk, wat de code 118 veroorzaakt`, `Een vastgelopen pomp heeft niets met de waterdruk te maken, de code wijst dan op iets anders`, `Een vastgelopen pomp kan de druksensor beschadigen en daardoor een onjuiste te-lage-drukmelding geven`, `Een vastgelopen pomp is bij ATAG de enige mogelijke oorzaak van code 118`],
      goed: 2,
      uitleg: `ATAG noemt bij code 118 het handmatig deblokkeren van de ketelpomp als eerste maatregel (MRK-15): een vastgezeten pomp kan de drukmeting of de circulatie zo verstoren dat het toestel een te lage druk registreert. Andere oorzaken (lek, expansievat) blijven ook mogelijk en moeten apart worden nagelopen.`
    },
    {
      vraag: `Volgens Remeha (Avanta) leidt "wel ontstekingsvonk maar geen vlam" onder meer naar gaskraan, gasvoedingsdruk, lucht-/rookgasleiding en een gevulde, niet verstopte sifon. Wat is het gemeenschappelijke kenmerk van die oorzaken?`,
      opties: [`Ze horen allemaal bij de stroom gas, lucht of rookgas, dus buiten de elektrode of ionisatiemeting zelf`, `Ze zijn allemaal onderdelen van de regeling`, `Ze zijn allemaal elektrische oorzaken die met een multimeter worden gemeten`, `Ze zijn allemaal storingen die alleen bij dit ene toestel voorkomen`],
      goed: 0,
      uitleg: `Wel vonk maar geen vlam wijst op iets in het gas- of luchtpad: gaskraan, voedingsdruk, ontluchte leiding, lucht-/rookgasleiding en de sifon (STO-05). De elektrode zelf komt pas in beeld als deze stroom in orde is.`
    },
    {
      vraag: `Een Remeha-toestel geeft na 1 minuut 2,4 microampere op laaglast, de grens van de fabrikant is 3 microampere. Wat is de juiste vervolgstap?`,
      opties: [`Alleen de gasdruk verhogen tot de stroom stijgt`, `Niets doen, want de vollastwaarde is waarschijnlijk hoger dan 3 microampere en dat is genoeg`, `De elektrode reinigen of vervangen en daarna de oorzaak van de lage stroom zoeken, want de fabrikant vraagt controle in zowel vol- als laaglast`, `Het toestel enkele weken lang op halve belasting laten draaien in de hoop dat de gemeten ionisatiestroom dan vanzelf boven de grenswaarde van 3 microampere uitkomt`],
      goed: 2,
      uitleg: `Remeha vraagt de ionisatiestroom in vol- en laaglast te controleren, met een grens van 3 microampere (MET-26). Een goede vollastwaarde compenseert een lage laaglastwaarde niet: reinig of vervang de elektrode en zoek daarna de oorzaak van de lage stroom.`
    },
    {
      vraag: `Wat is de natuurkundige reden waarom een slechte aarding van de brander de gemeten ionisatiestroom kan doen wegvallen, ook als de vlam gewoon brandt?`,
      opties: [`Een slechte aarding maakt de gasdruk instabiel, waardoor de vlam flakkert`, `Het bewakingscircuit heeft de massaverbinding nodig om de wisselspanning overwegend in een richting te laten stromen (gelijkrichting); zonder goede referentie valt die gelijkrichting weg`, `Aarding heeft geen invloed op de ionisatiestroom, alleen op de veiligheid van de monteur`, `Een slechte aarding verhoogt de ionisatiestroom juist, waardoor de melding "te veel ionisatie" verschijnt`],
      goed: 1,
      uitleg: `Ionisatiebewaking werkt door asymmetrische gelijkrichting van een wisselspanning tussen elektrode en massa. Zonder goede massaverbinding valt die gelijkrichting weg, ook als de vlam er wel is (ELK-08, ELK-09): dat is waarom fabrikanten bij een laag signaal ook de aarding laten controleren.`
    },
    {
      vraag: `De BRL 6000-25 controlelijst voor onderhoud noemt onder meer "functioneren luchtdrukverschilschakelaar" en ventilatortoerental. Een ATAG-toestel toont code 8 (Intergas: ventilatortoerental niet juist bij een ander merk). Wat controleer je eerst voordat je de ventilator vervangt?`,
      opties: [`Of de ventilator ergens tegenaan loopt of vervuild is, en of de bedrading tussen ventilator en printplaat goed contact maakt`, `Alleen de kleur van de bedrading, zonder verder te meten`, `Meteen de gasdruk verhogen tot het toerental vanzelf stijgt`, `Niets, want deze code kan bij elk merk alleen met een complete nieuwe ketel worden opgelost`],
      goed: 0,
      uitleg: `Bij een onjuist ventilatortoerental controleer je eerst of de ventilator vrij kan draaien en of de bedrading naar de printplaat goed contact maakt, voor je een nieuw, niet-goedkoop onderdeel bestelt (MET-24, MRK-11). Gasdruk heeft hier geen invloed op het toerental.`
    },
    {
      vraag: `Bij een gesloten toestel met concentrische afvoer meet je op het meetpunt van de luchttoevoer een CO2-waarde die duidelijk boven de buitenluchtwaarde ligt (meer dan de ongeveer 1 procent die door windinvloed toelaatbaar is). Wat wijst dat aan?`,
      opties: [`Een te hoge gasvoordruk`, `Een defecte driewegklep`, `Mogelijke interne lekkage waardoor rookgas terug de luchttoevoer in komt (recirculatie), wat nader onderzoek vraagt`, `Een te lage warmtapwatertemperatuur`],
      goed: 2,
      uitleg: `Een goed werkend concentrisch systeem geeft op het luchttoevoermeetpunt de buitenluchtwaarde, met een kleine windmarge van ongeveer 1 procent CO2 (MET-19). Een duidelijk hogere waarde wijst op recirculatie: rookgas dat via een lek terug de luchttoevoer bereikt, wat verder onderzocht moet worden.`
    },
    {
      vraag: `Een ketel van 14 jaar oud heeft dit jaar al twee keer een vergrendelende storing gehad en de reparatie van de branderautomaat kost fors. De klant vraagt of hij moet repareren of vervangen. Welke afweging hoort bij een verantwoord advies?`,
      opties: [`Altijd vervangen zodra een ketel ouder is dan 10 jaar, zonder verder te kijken naar de storing`, `Altijd repareren, want een nieuwe ketel is nooit rendabel binnen de levensduur`, `Alleen de aankoopprijs van een nieuwe ketel vergelijken met de reparatiekosten, zonder naar de leeftijd of de onderdelenbeschikbaarheid te kijken`, `De leeftijd (een cv-ketel gaat gemiddeld ongeveer 15 jaar mee), de toenemende storingsfrequentie en de beschikbaarheid van onderdelen samen wegen, en dat gemotiveerd aan de klant voorleggen`],
      goed: 3,
      uitleg: `Consumentenbond en vakpublicaties noemen een gemiddelde levensduur van ongeveer 15 jaar met een toenemend risico op kostbare reparaties bij oudere toestellen (STZ-01, STZ-02). Een vast percentage van de nieuwprijs als vaste beslisregel is niet met een onafhankelijke bron te onderbouwen (STZ-04): leeftijd, storingsfrequentie en onderdelenbeschikbaarheid weeg je samen en leg je uit aan de klant.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 16.1 */
{
  id: 'm16l01',
  nr: '16.1',
  titel: 'De methode: van klacht naar bewezen oorzaak',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt een storing methodisch aanpakken en de oorzaak bewijzen voordat je een onderdeel vervangt.',
  videos: [
    { taal: 'nl', titel: 'Een dag in het leven van een cv-ketel monteur: storingen oplossen en tips (Monteurtje010)', yt: 'yN6x5kJStMQ', duur: '±16 min, 2025' },
    { taal: 'en', titel: 'Gas Training: fault finding on a combi boiler, how components work (Allen Hart, VK)', yt: 'Pxu_qyYCscE', duur: '±21 min, 2021' }
  ],
  tekst: `
## De onderdelenwisselaar en de topmonteur

Twee monteurs komen bij dezelfde klacht. De eerste vervangt het onderdeel dat de vorige keer de oorzaak was, hoopt dat het weer werkt, en gaat naar de volgende klus. De tweede stelt vragen, kijkt, leest de storingsgeschiedenis, meet, en vervangt pas als hij heeft bewezen wat de oorzaak is. Het verschil zit niet in ervaring of gereedschap, het zit in de volgorde. Die volgorde is deze les.

## De acht stappen

1. **Vraaggesprek.** Wanneer treedt de klacht op, hoe vaak, en wat deed de klant vlak daarvoor (bijvoorbeeld bijgevuld, thermostaat versteld, onderhoud gehad)?
2. **Waarnemen.** Kijk en luister voor je iets aanraakt: geluid, geur, wat het display zegt, lekkage, roetsporen.
3. **Storingsgeschiedenis en code lezen.** Fabrikanten schrijven dit als eerste diagnosestap voor. Vaillant leest het gegevensoverzicht en de laatste 10 foutmeldingen uit, Nefit het historiemenu, en Remeha noemt de storingscode "belangrijk voor het correct en snel opsporen van de aard van de storing" (STO-01).
4. **Ketenanalyse.** Orden de mogelijke oorzaken per stroom: water, gas, lucht en afvoer, elektra, regeling. Een klacht past bijna altijd in een van die stromen, zelden in alle vijf.
5. **Hypothese.** Kies de meest waarschijnlijke oorzaak op basis van stap 1 tot 4, niet op basis van "vorige keer was het dit onderdeel".
6. **Meten.** Bewijs of de hypothese klopt, met gekalibreerde apparatuur (MET-03) en, bij elektrische metingen, pas nadat je hebt aangetoond dat een circuit spanningsloos is voor je op de weerstandsstand overschakelt.
7. **Bewijs, dan pas vervangen.** Vervang alleen een onderdeel waarvan je hebt aangetoond dat het de oorzaak is, en gebruik daarvoor een door de fabrikant voorgeschreven of ten minste gelijkwaardig onderdeel (ONT-17).
8. **Controle.** Test de herstelde functie en leg vast wat je vond, hoe je het maat en met welk instrument (KLA-01).

!!! kern Bewijs voor je vervangt
Een storing "oplossen" door een onderdeel te vervangen zonder te meten, is gokken met het geld van de klant. Bewijs eerst met een meting dat een onderdeel de oorzaak is, vervang dan pas.
!!!

## Praktijkgeval: de elektrode die niet stuk was

Een Remeha Tzerra Ace geeft af en toe "wel vonk maar geen vlam". Een collega verving vorige week de ontstekingselektrode; de storing kwam deze week terug. Volgens de volgorde uit deze les had hij eerst de ionisatiestroom in vol- en laaglast moeten meten. Remeha noemt reinigen of vervangen bij minder dan 3 microampere in beide standen (MET-26), maar wel vonk en geen vlam wijst volgens Remeha ook op gaskraan, gasvoedingsdruk, een niet-ontluchte leiding, de lucht-/rookgasleiding, of een sifon die niet gevuld of verstopt is (STO-05). Een nieuwe elektrode plaatsen zonder die keten langs te lopen, kan toevallig helpen of toevallig niet: het bewijst niets.

## Wanneer je moet stoppen: een onveilige situatie

Soms vind je tijdens storingzoeken iets dat niets met de klacht te maken heeft, maar wel gevaarlijk is: te veel CO in de opstellingsruimte. De BRL 6000-25 geeft daarvoor een vast actiekader. Onder 5 ppm is er geen bezwaar. Tussen 5 en 20 ppm meld je de constatering aan de opdrachtgever en neem je de oorzaak weg voordat je het toestel (opnieuw) in bedrijf stelt (KLA-10, MET-16). Boven 20 ppm meld je onverwijld en schriftelijk aan bewoner, gebouweigenaar, bevoegd gezag en de certificerende instelling (KLA-09). In alle gevallen stel je een toestel niet in bedrijf als er ontoelaatbare hoeveelheden CO vrijkomen, ook als de oorspronkelijke klacht daarmee niet is opgelost (KLA-07).

!!! gevaar Doorgaan bij te veel CO
Een toestel bij twijfel toch maar aanzetten "om te kijken of het werkt" terwijl er te veel CO vrijkomt, is levensgevaarlijk voor de bewoners en voor jezelf. Volg het actiekader, nooit je eigen aanvoelen.
!!!

?? Verdieping: waarom je eerst spanningsloosheid aantoont
Voor je met een multimeter op de weerstandsstand meet, toon je eerst aan dat het circuit spanningsloos is. Een weerstandsmeting op een circuit dat nog spanning voert, geeft een onjuiste waarde en kan het instrument beschadigen (ELK-33). Datzelfde principe, eerst aantonen en dan pas verder, is de rode draad van deze hele les: aannames zijn geen bewijs.
??

## Wat je vastlegt

De BRL 6000-25 vraagt van elke controle of meting vast te leggen wat er is gecontroleerd, op welke eisen, wie het deed en wanneer, met welk instrument, en wat de uitkomst was (KLA-01). Dat is niet alleen administratie: het maakt je werk traceerbaar als de storing terugkomt, en het is het bewijs dat je gemeten hebt in plaats van gegokt.
`,
  checklist: [
    'Ik doorloop bij een storing steeds dezelfde volgorde: vraaggesprek, waarnemen, code en geschiedenis, ketenanalyse, hypothese, meten, bewijs, herstel, controle',
    'Ik vervang geen onderdeel voordat ik met een meting heb bewezen dat het de oorzaak is',
    'Ik ken het actiekader voor CO en stel een toestel niet in bedrijf bij een onveilige situatie',
    'Ik toon aan dat een circuit spanningsloos is voor ik op de weerstandsstand meet',
    'Ik leg vast wat ik heb gemeten, waarmee, en wat de uitkomst was'
  ],
  quiz: [
    {
      vraag: `Een ketel geeft een storing. De monteur van vorige keer verving een sensor en dat hielp. Deze keer treedt de storing weer op. Wat is de juiste eerste stap?`,
      opties: [
        `Meteen dezelfde sensor vervangen, want dat hielp de vorige keer`,
        `Het toestel resetten en wachten of de storing wegblijft`,
        `De storingsgeschiedenis en de code lezen en met een meting vaststellen of dezelfde oorzaak weer optreedt`,
        `De klant vragen of hij zelf de kabel wil controleren voor je langskomt`
      ],
      goed: 2,
      uitleg: `Wat de vorige keer de oorzaak was, is geen bewijs voor deze keer. Fabrikanten schrijven voor om eerst de code en de geschiedenis te lezen (STO-01) en pas daarna te meten voor je iets vervangt.`
    },
    {
      vraag: `Waarom meet je met een multimeter eerst of een circuit spanningsloos is, voordat je overschakelt naar de weerstandsstand?`,
      opties: [
        `Een weerstandsmeting op een circuit met spanning geeft een onjuiste waarde en kan het instrument beschadigen`,
        `Omdat de weerstandsstand van de meter alleen werkt zolang er nog spanning op het circuit staat`,
        `Omdat de fabrikant dat als enige controle toestaat voor het behoud van garantie op het toestel`,
        `Omdat een weerstandsmeting op een circuit onder spanning de hoofdzekering van de meterkast kan laten doorslaan`
      ],
      goed: 0,
      uitleg: `Een weerstandsmeting op een circuit dat nog spanning voert, geeft een onjuiste waarde en kan het instrument beschadigen (ELK-33). Eerst aantonen dat het spanningsloos is, dan pas de ohm-stand gebruiken.`
    },
    {
      vraag: `Tijdens het storingzoeken meet je in de opstellingsruimte 12 ppm CO, los van de storing waarvoor je geroepen was. Wat doe je volgens het actiekader van de BRL 6000-25?`,
      opties: [
        `Niets, want de storing waarvoor je geroepen was heeft daar geen verband mee`,
        `Het toestel gewoon in bedrijf stellen en de klant een nieuwe ketel adviseren`,
        `Alleen de oorspronkelijke storing oplossen en de CO-waarde niet vermelden op de werkbon`,
        `De oorzaak van de CO wegnemen voordat je het toestel weer in bedrijf stelt, en de klant hierover informeren`
      ],
      goed: 3,
      uitleg: `Bij CO tussen 5 en 20 ppm neemt de installateur de oorzaak weg voordat hij (opnieuw) in bedrijf stelt, en informeert hij de opdrachtgever (KLA-10). Boven 20 ppm volgt een schriftelijke melding aan meerdere partijen (KLA-09).`
    },
    {
      vraag: `Wat hoort bij de stap "ketenanalyse" in de methode van deze les?`,
      opties: [
        `Meteen het onderdeel vervangen waarvan je vermoedt dat het de oorzaak is, zonder eerst te meten of dat klopt`,
        `De mogelijke oorzaken ordenen per stroom: water, gas, lucht en afvoer, elektra, regeling`,
        `Wachten tot de storing vaker optreedt voor je er iets aan doet`,
        `De garantietermijn van het toestel nakijken bij de fabrikant`
      ],
      goed: 1,
      uitleg: `De ketenanalyse ordent mogelijke oorzaken per stroom, zodat je gericht kunt zoeken in plaats van willekeurig onderdelen te controleren of te vervangen zonder bewijs.`
    },
    {
      vraag: `Een ionisatiestroom van 2 microampere op laaglast bij een Remeha-toestel dat 3 microampere als grens noemt: wat is de juiste vervolgstap volgens deze les?`,
      opties: [
        `Elektrode reinigen of vervangen en daarna de oorzaak van de lage stroom zoeken, niet alleen de waarde herstellen`,
        `Niets doen, 2 microampere ligt dicht bij 3 en dat is voldoende dicht bij de grens`,
        `Alleen de gasdruk verhogen tot de ionisatiestroom stijgt naar een aanvaardbare waarde`,
        `Het toestel enkele weken op een lagere belasting laten draaien om te zien of de gemeten ionisatiestroom vanzelf boven de grenswaarde van 3 microampere uitkomt`
      ],
      goed: 0,
      uitleg: `Remeha vraagt reinigen of vervangen van de elektrode onder 3 microampere, gemeten in vol- en laaglast (MET-26), en daarna de oorzaak van de lage stroom te zoeken. Wachten of alleen de gasdruk verhogen lost de onderliggende oorzaak niet op.`
    },
    {
      vraag: `Wat leg je volgens de BRL 6000-25 minimaal vast na een controle of meting tijdens storingzoeken?`,
      opties: [
        `Alleen of de storing is opgelost, ja of nee`,
        `Een schatting van de kosten van een vervolgbezoek voor de klant`,
        `Wat je hebt gecontroleerd, met welk instrument, wanneer en wat de uitkomst was`,
        `Een handtekening van de klant waarin hij verklaart in te stemmen met alle door de monteur genomen vervolgstappen`
      ],
      goed: 2,
      uitleg: `De BRL 6000-25 vraagt vast te leggen wat is gecontroleerd, met welke instrumenten, wanneer en met welk resultaat (KLA-01). Dat is nodig omdat een justering gevolgen kan hebben voor eerdere beslissingen.`
    }
  ],
  kaarten: [
    { voor: `Wat is het verschil tussen een onderdelenwisselaar en een topmonteur bij storingzoeken?`, achter: `De topmonteur bewijst met een meting wat de oorzaak is voor hij iets vervangt; de onderdelenwisselaar vervangt op basis van "vorige keer was het dit".` },
    { voor: `Wat is de eerste diagnosestap die Remeha, Vaillant en Nefit allemaal voorschrijven?`, achter: `Eerst de storingscode en de opgeslagen storingsgeschiedenis lezen (STO-01), voor je verder onderzoekt.` },
    { voor: `Waarom orden je oorzaken per stroom (water, gas, lucht/afvoer, elektra, regeling)?`, achter: `Zodat je gericht kunt zoeken binnen de stroom die bij de klacht past, in plaats van willekeurig onderdelen te controleren.` },
    { voor: `Waarom meet je eerst spanningsloosheid aan voor je op de weerstandsstand van een multimeter overschakelt?`, achter: `Een weerstandsmeting op een circuit met spanning geeft een onjuiste waarde en kan het instrument beschadigen (ELK-33).` },
    { voor: `Wat doe je volgens de BRL 6000-25 bij 5 tot 20 ppm CO in de opstellingsruimte?`, achter: `De oorzaak wegnemen voordat je het toestel (opnieuw) in bedrijf stelt, en de opdrachtgever informeren (KLA-10).` },
    { voor: `Wat doe je bij meer dan 20 ppm CO in de opstellingsruimte?`, achter: `Onverwijld en schriftelijk melden aan bewoner, gebouweigenaar, bevoegd gezag en de certificerende instelling (KLA-09).` },
    { voor: `Wat leg je minimaal vast na een controle of meting?`, achter: `Wat je hebt gecontroleerd, met welk instrument, wanneer, en wat de uitkomst was (KLA-01).` }
  ],
  bronnen: ['STO-01', 'STO-04', 'STO-05', 'MET-03', 'MET-16', 'MET-26', 'KLA-01', 'KLA-07', 'KLA-09', 'KLA-10', 'ONT-17', 'ELK-33', 'ELK-34']
},

/* ------------------------------------------------------------------ 16.2 */
{
  id: 'm16l02',
  nr: '16.2',
  titel: 'Storingscodes lezen zonder erin te trappen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt een storingscode opzoeken en gebruiken als aanwijzing, en weet waarom een code geen diagnose is.',
  videos: [
    { taal: 'nl', titel: 'Hoe lees je het storingsgeheugen van de Remeha Calenta uit? (Remeha NL)', yt: 'p80KZE6VnKI', duur: '±2 min, 2017' },
    { taal: 'nl', titel: 'Uitleg codes en knopjes Intergas Kompakt HRE combiketel (JW B)', yt: 'EsbtPiGcgPE', duur: '±17 min, 2021' },
    { taal: 'en', titel: 'Gas Training: boiler fault finding, Baxi E110 / Main E1 10 (Allen Hart, VK)', yt: 'IQrpcIKvXck', duur: '±18 min, 2021' }
  ],
  tekst: `
## Een code zegt wat, niet waarom

Een storingscode vertelt welke beveiliging heeft ingegrepen: geen vlamsignaal, te lage druk, een sensor buiten bereik. Hij vertelt niet waarom dat gebeurde. "Geen vlamsignaal" kan bij hetzelfde toestel komen door een dichte gaskraan, een te lage voordruk, een vervuilde elektrode, een slechte aarding of een verkeerd afgesteld gasblok (STO-08). De code kiest niet tussen die vijf, jij wel, met de methode uit [les 16.1](les:m16l01).

## Blokkering of vergrendeling: eerst dat onderscheid

Voor je verder zoekt, kijk je of een code een waarschuwing, een blokkering of een vergrendeling is. Remeha onderscheidt A (waarschuwing, ketel blijft in bedrijf), H (blokkering, herstelt automatisch zodra de oorzaak weg is) en E (vergrendeling, alleen op te heffen met een handmatige reset na het wegnemen van de oorzaak). ATAG gebruikt een sleutelsymbool voor een blokkering en een belsymbool voor een error, Nefit onderscheidt soort 2 (blokkerend) en soort 3 (vergrendelend) (STO-03, MRK-07). Een vergrendeling zomaar resetten zonder de oorzaak te zoeken, brengt je terug bij af zodra de storing terugkomt: Vaillant staat daarom maximaal 3 herhaalde resetpogingen toe voordat naar het serviceteam wordt verwezen (STO-04).

## Codes zijn per merk en model, niet universeel

| Merk en model (voorbeeld) | Opbouw van de code | Betekenis van een voorbeeldcode |
|---|---|---|
| Remeha Calenta Ace | Letter plus twee cijferparen, bijvoorbeeld A.02.06 | A.02.06: waarschuwing waterdruk lager dan 0,8 bar (MRK-08) |
| Intergas Kombi Kompakt HRE | Een enkel cijfer op het temperatuurdisplay | 4: geen vlamsignaal, 8: ventilatortoerental niet juist (MRK-11) |
| Vaillant ecoTEC plus VHR | F. gevolgd door drie cijfers | F.028: vlamsignaal in de ontstekingsfase niet herkend (MRK-02) |
| Nefit ProLine NxT | Twee tekens, drie cijfers, een soort (bijv. 6A 227, soort 2 of 3) | 6A 227: onvoldoende ionisatiestroom na het ontsteken (MRK-13) |

Vaillant waarschuwt zelf dat zijn codetabel voor verschillende producten wordt gebruikt en dat niet elke code bij elk product voorkomt (MRK-06): dezelfde tabel geldt dus niet automatisch voor een ander model van hetzelfde merk. Nefit/Bosch groepeert zijn foutmeldingenoverzicht voor installateurs eveneens per toestelserie (TrendLine, ProLine, ProLine NxT, ProLine Eco) en verwijst naar de servicedienst als een code er niet bij staat (STZ-06). Een code van het ene merk overnemen naar het andere is dus gokken.

!!! kern Zoek de code op in de handleiding van dat merk en model
Onthoud geen codetabellen uit je hoofd. Dezelfde code betekent bij een ander merk, en soms bij een ander model van hetzelfde merk, iets anders. Zoek altijd op in de handleiding of de officiele foutcodepagina van dat specifieke toestel.
!!!

## Praktijkgeval: code 8 bij twee merken

Een Intergas Kombi Kompakt HRE toont code 8: het ventilatortoerental is niet juist. Een ATAG-toestel gebruikt voor een vergelijkbaar probleem een ander nummer uit zijn eigen tabel (MRK-15). Een monteur die "code 8" uit zijn hoofd kent van Intergas en dat toepast op een ATAG-toestel, zoekt op de verkeerde plek. Zoek daarom altijd het merk en het model erbij op voor je een code interpreteert.

?? Verdieping: waarom Remeha meerdere codes in een rij bundelt
In de vergrendelingscodetabel van de Remeha Calenta Ace staan soms meerdere codes samen in een rij (bijvoorbeeld bij verbrandingsfouten binnen 24 uur). Lees zulke tabellen in de volgorde van de rij en vergelijk met de omschrijving in de lopende tekst van de handleiding: de tabelopmaak alleen is soms niet genoeg om een code eenduidig aan een omschrijving te koppelen (MRK-10).
??
`,
  checklist: [
    'Ik gebruik een storingscode als aanwijzing voor waar ik moet zoeken, niet als kant-en-klare diagnose',
    'Ik onderscheid waarschuwing, blokkering en vergrendeling voor ik ga resetten',
    'Ik zoek een code altijd op in de handleiding van het merk en model waaraan ik werk',
    'Ik reset een vergrendeling niet herhaaldelijk zonder de oorzaak te hebben gezocht'
  ],
  quiz: [
    {
      vraag: `Een Vaillant-toestel toont F.028. Wat zegt die code precies?`,
      opties: [
        `Dat het gasblok van dit toestel vervangen moet worden`,
        `Dat de garantie van het toestel is verlopen`,
        `Dat het vlamsignaal in de ontstekingsfase niet is herkend, zonder dat daarmee de oorzaak vaststaat`,
        `Dat de ketel voorgoed vergrendeld is en dat er niets meer aan te doen is zonder een volledig nieuw toestel te plaatsen`
      ],
      goed: 2,
      uitleg: `F.028 betekent dat het vlamsignaal in de ontstekingsfase niet werd herkend (MRK-02). De oorzaak kan van alles zijn, van gasdruk tot een geblokkeerde luchtaanzuigbuis (STO-06): de code wijst de plek aan, niet de oorzaak.`
    },
    {
      vraag: `Wat is het verschil tussen een blokkering en een vergrendeling bij Remeha?`,
      opties: [
        `Een vergrendeling herstelt automatisch, een blokkering vraagt altijd een telefoontje naar de fabriek`,
        `Een blokkering geldt volgens deze indeling alleen voor gastoestellen die al meer dan 10 jaar in bedrijf zijn, wat feitelijk niet de juiste omschrijving is`,
        `Er is geen verschil, beide woorden betekenen bij Remeha hetzelfde`,
        `Een blokkering herstelt automatisch zodra de oorzaak weg is, een vergrendeling vraagt een handmatige reset na het wegnemen van de oorzaak`
      ],
      goed: 3,
      uitleg: `Remeha onderscheidt H (blokkering, automatisch herstel) en E (vergrendeling, handmatige reset nodig na het wegnemen van de oorzaak) (STO-03, MRK-07). Weten welke van de twee je hebt, bepaalt of resetten zin heeft.`
    },
    {
      vraag: `Waarom staat Vaillant maximaal 3 herhaalde resetpogingen toe voordat naar het serviceteam wordt verwezen?`,
      opties: [
        `Meer dan 3 pogingen achter elkaar is volgens de fabrieksgarantie op de printplaat van dit toestel uitdrukkelijk verboden voor de installateur`,
        `De reset-knop van dit toestel slijt na 3 keer indrukken`,
        `Een storing die na een paar pogingen terugkomt, wijst op een oorzaak die eerst gevonden en bewezen moet worden in plaats van weggedrukt`,
        `Elke ketel mag volgens de wet maximaal 3 keer per dag resetten`
      ],
      goed: 2,
      uitleg: `Een storing die telkens terugkomt na resetten, is niet verholpen: er is een oorzaak die je nog niet hebt gevonden (STO-04). Herhaald resetten zonder onderzoek stelt het echte zoeken alleen uit.`
    },
    {
      vraag: `Een Nefit ProLine NxT geeft code 7A 550. Wat kun je op basis van deze les over deze code zeggen, zonder de handleiding erbij te pakken?`,
      opties: [
        `Dat de code exact hetzelfde probleem beschrijft als een ATAG-code met hetzelfde nummer`,
        `Alleen dat de opbouw (twee tekens, drie cijfers) bij dit merk hoort en dat je de precieze betekenis in de handleiding van dit model moet opzoeken`,
        `Dat het altijd om een probleem met de rookgasafvoer gaat, want dat is bij elk merk code 7`,
        `Dat de storing vanzelf verdwijnt zodra je het toestel een hele nacht lang volledig uitgeschakeld en van het stroomnet losgekoppeld laat staan`
      ],
      goed: 1,
      uitleg: `Codetabellen zijn per merk en model opgebouwd (MRK-06, STZ-06). Zonder de handleiding van dit specifieke model te raadplegen, weet je alleen dat de code bij Nefit past, niet wat hij precies betekent.`
    },
    {
      vraag: `In de vergrendelingscodetabel van een Remeha Calenta Ace staan meerdere codes samen in een rij. Wat is de veiligste manier om die tabel te lezen?`,
      opties: [
        `Altijd de eerste code in de rij aanhouden en de rest negeren`,
        `Een rekenkundig gemiddelde nemen van alle codes die in die ene tabelrij samen staan vermeld, zonder de bijbehorende lopende tekst in de handleiding erbij te raadplegen`,
        `De tabel overslaan en meteen de klantenservice bellen`,
        `De rij in volgorde lezen en vergelijken met de omschrijving in de lopende tekst van de handleiding, in plaats van alleen op de tabelopmaak te vertrouwen`
      ],
      goed: 3,
      uitleg: `Bij een gebundelde rij is de tabelopmaak alleen soms niet genoeg om een code eenduidig aan een omschrijving te koppelen: vergelijk met de lopende tekst van de handleiding (MRK-10).`
    }
  ],
  kaarten: [
    { voor: `Wat vertelt een storingscode wel, en wat niet?`, achter: `Hij vertelt welke beveiliging heeft ingegrepen. Hij vertelt niet welke onderliggende oorzaak dat deed: dat zoek je uit met de methode van les 16.1.` },
    { voor: `Welke drie niveaus onderscheidt Remeha in zijn codes?`, achter: `A (waarschuwing, ketel blijft in bedrijf), H (blokkering, automatisch herstel) en E (vergrendeling, handmatige reset na het wegnemen van de oorzaak).` },
    { voor: `Hoeveel herhaalde resetpogingen staat Vaillant toe voor hij naar het serviceteam verwijst?`, achter: `Maximaal 3 (STO-04).` },
    { voor: `Wat betekent Intergas-code 8 op de Kombi Kompakt HRE (voorbeeld)?`, achter: `Ventilatortoerental niet juist (MRK-11). Per model verschillend genummerd.` },
    { voor: `Waarom kun je een codetabel van het ene merk niet gebruiken voor een ander merk?`, achter: `Codes zijn per merk en model opgebouwd; Vaillant waarschuwt zelf dat zijn tabel voor meerdere producten geldt en niet elke code bij elk product voorkomt (MRK-06).` },
    { voor: `Wat doe je met een code die bestaat uit meerdere gebundelde regels in een tabel?`, achter: `De rij in volgorde lezen en vergelijken met de lopende tekst van de handleiding, niet alleen op de tabelopmaak vertrouwen.` }
  ],
  bronnen: ['STO-01', 'STO-03', 'STO-04', 'STO-06', 'STO-08', 'MRK-02', 'MRK-06', 'MRK-07', 'MRK-08', 'MRK-10', 'MRK-11', 'MRK-13', 'MRK-15', 'STZ-05', 'STZ-06']
},

/* ------------------------------------------------------------------ 16.3 */
{
  id: 'm16l03',
  nr: '16.3',
  titel: 'Geen warm tapwater',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt de oorzaken van een tapwaterstoring in een logische volgorde onderzoeken.',
  videos: [
    { taal: 'nl', titel: 'CV ketels en storingen, wat moet je doen? (Gasservice - Gaswacht)', yt: 'LPUVUYy9Dt4', duur: '±2 min, 2021' },
    { taal: 'en', titel: 'Gas Training: boiler fault finding, no hot water (Allen Hart, VK)', yt: 'etZ_TAzqVt0', duur: '±24 min, 2021' }
  ],
  tekst: `
## De route van het tapwater

Bij een combiketel signaleert een tapsensor het openen van een kraan, schakelt de driewegklep naar de warmwaterstand, start de pomp, en warmt de platenwarmtewisselaar het water op terwijl de brander aanslaat (TAP-01, KET-23). Elke schakel in die keten kan de oorzaak van "geen warm water" zijn. Zoek ze in een logische volgorde: van de eenvoudigste en meest voorkomende oorzaak naar de duurdere onderdelen.

## De volgorde

1. **Doorstroming.** Is er wel voldoende debiet? Intergas noemt bij deze klacht onder meer een tapflow onder 1,5 l/min (STO-11). Een mengkraan die zelf defect is, geeft hetzelfde beeld: warm water blijft weg terwijl de ketel niets doet.
2. **Sensor.** Krijgt de stromingssensor voeding en geeft hij een geloofwaardig signaal? Intergas noemt hierbij geen 5 V op de sensor of een defecte stromingssensor als oorzaak (STO-11).
3. **Driewegklep.** Schakelt de klep daadwerkelijk naar de warmwaterstand? Bij de Remeha Calenta is dit een veerbelaste, elektrisch aangestuurde klep die alleen stroom verbruikt tijdens het schakelen (KET-23): een klep die niet meer schakelt, blijft in de cv-stand hangen en dan komt er geen warm water uit de kraan, ook al draait de ketel wel.
4. **Platenwisselaar.** Is de warmteoverdracht nog goed, of is de wisselaar dichtgeslibd met kalk? Kalkafzetting hangt volgens Remeha af van waterhardheid, bedrijfsuren, tapgedrag en de ingestelde temperatuur (TAP-13); bij een merkbaar lagere tapcapaciteit reinigt Remeha de platenwisselaar samen met de tapwatercartridge (ONT-19).
5. **Regeling.** Staat de gewenste temperatuur wel hoog genoeg, en is de tapcomfortfunctie (voorverwarmen) aan of uit gezet zoals de klant verwacht?

!!! kern Van goedkoop en snel naar duur en langzaam
Begin bij wat je snel en zonder onderdelen te bestellen kunt controleren (doorstroming, sensorspanning) voor je een duur onderdeel als de platenwisselaar vervangt. Andersom werken kost de klant geld voor niets als de oorzaak ergens anders zat.
!!!

## Praktijkgeval: warm water dat lauw blijft

Een klant belt: het water wordt niet meer warm genoeg, terwijl het een paar weken geleden nog wel lukte. Volgens de volgorde hierboven begin je bij de doorstroming: is de tapflow onveranderd? Is die dat wel, dan is een te lage sensorspanning minder waarschijnlijk (die zou vaker een foutcode geven dan een geleidelijk kouder wordende stroom). Kalkafzetting in de platenwisselaar past beter bij een geleidelijke achteruitgang: minder warmteoverdracht per liter water. Reinig dan pas de wisselaar als de goedkopere controles niets opleveren, precies zoals in [les 16.1](les:m16l01) beschreven.

?? Verdieping: waarom de driewegklep zo weinig stroom gebruikt
De driewegklep van de Remeha Calenta is veerbelast: hij verbruikt alleen stroom op het moment dat hij van stand wisselt, niet om in een stand te blijven staan (KET-23). Dat verklaart waarom een defecte klep soms lastig te ontdekken is met alleen een visuele controle: hij staat stil in een stand en lijkt daardoor "normaal", terwijl hij niet meer kan schakelen.
??
`,
  checklist: [
    'Ik ken de route van het tapwater door de ketel: sensor, driewegklep, platenwisselaar, brander',
    'Ik controleer bij geen warm tapwater eerst de doorstroming en de sensorspanning voor ik dure onderdelen vervang',
    'Ik herken het verschil tussen een plotselinge storing (sensor, klep) en een geleidelijke achteruitgang (kalk in de platenwisselaar)',
    'Ik weet dat de driewegklep alleen tijdens het schakelen stroom gebruikt, wat een visuele controle lastiger maakt'
  ],
  quiz: [
    {
      vraag: `Welke onderdelen doorloopt het signaal bij een combiketel als je een warmwaterkraan opent, in de juiste volgorde?`,
      opties: [
        `Alleen de brander, de rest van de ketel doet niets bij tapwater`,
        `Tapsensor signaleert de kraan, driewegklep schakelt naar warmwaterstand, pomp start, brander en platenwisselaar verwarmen het water`,
        `Eerst de platenwisselaar, dan pas de tapsensor, en de driewegklep helemaal aan het einde`,
        `De regeling stuurt bij het openen van een warmwaterkraan rechtstreeks en zonder enige tussenkomst van de tapsensor of de driewegklep de radiatoren van de cv-installatie aan`
      ],
      goed: 1,
      uitleg: `Bij een combiketel signaleert de tapsensor het openen van een kraan, schakelt de driewegklep naar de warmwaterstand, start de pomp en warmt de platenwisselaar het water terwijl de brander aanslaat (TAP-01, KET-23).`
    },
    {
      vraag: `Een klant heeft geen warm tapwater. Wat controleer je volgens deze les als eerste?`,
      opties: [
        `Meteen de platenwisselaar demonteren en op kalk controleren`,
        `Meteen de driewegklep vervangen, want die is volgens de meeste ervaren monteurs vrijwel altijd de onderliggende oorzaak van deze klacht`,
        `De garantietermijn van het toestel bij de fabrikant nakijken`,
        `De doorstroming (tapflow) en of de stromingssensor voeding en een geloofwaardig signaal heeft`
      ],
      goed: 3,
      uitleg: `Begin bij wat je snel kunt controleren zonder onderdelen te bestellen: doorstroming en sensorspanning (STO-11). Dure onderdelen als de platenwisselaar controleer je pas als de eenvoudige oorzaken zijn uitgesloten.`
    },
    {
      vraag: `Wat maakt kalkafzetting in de platenwisselaar waarschijnlijker als oorzaak dan een defecte stromingssensor?`,
      opties: [
        `Kalkafzetting past beter bij een geleidelijke achteruitgang van de temperatuur, terwijl een sensorstoring vaker abrupt optreedt`,
        `Een defecte sensor kost in de praktijk vaak fors meer om te laten vervangen door de fabrikant dan een volledige nieuwe platenwisselaar`,
        `Kalkafzetting geeft altijd een duidelijke foutcode op het display, een sensorstoring nooit`,
        `Kalkafzetting kan alleen optreden bij toestellen ouder dan 20 jaar`
      ],
      goed: 0,
      uitleg: `Kalkafzetting hangt af van waterhardheid, bedrijfsuren, tapgedrag en ingestelde temperatuur en bouwt zich geleidelijk op (TAP-13), terwijl een sensor- of klepstoring meestal abrupt een klacht of code geeft.`
    },
    {
      vraag: `Waarom is een visuele controle van de driewegklep van een Remeha Calenta niet altijd genoeg om een storing uit te sluiten?`,
      opties: [
        `De klep is zo diep weggebouwd in de ketel geplaatst dat je hem nooit kunt zien of controleren zonder de complete voormantel en behuizing van het toestel te demonteren`,
        `De klep maakt altijd lawaai als hij defect is, dus je hoort het probleem eerder dan je het ziet`,
        `De klep is veerbelast en gebruikt alleen stroom op het moment dat hij schakelt, dus een defecte klep die vast staat, kan er in stilstand normaal uitzien`,
        `Een driewegklep heeft geen bewegende delen die je kunt controleren`
      ],
      goed: 2,
      uitleg: `De klep verbruikt alleen stroom tijdens het wisselen van stand (KET-23). Een klep die vastzit in een stand, ziet er in rust normaal uit: pas tijdens een warmtevraag valt op dat hij niet schakelt.`
    },
    {
      vraag: `Een tapcapaciteit die merkbaar lager is dan vroeger, zonder foutcode. Welke aanpak past bij Remeha's eigen onderhoudsadvies?`,
      opties: [
        `Een compleet nieuwe ketel bestellen, want een lagere tapcapaciteit betekent altijd einde levensduur`,
        `De platenwisselaar samen met de tapwatercartridge reinigen`,
        `Alleen de warmwatertemperatuur op de ketel hoger instellen om het gevoel van meer capaciteit te geven`,
        `Wachten tot er een foutcode verschijnt voordat je iets doet`
      ],
      goed: 1,
      uitleg: `Remeha reinigt bij een merkbaar lagere tapcapaciteit de platenwisselaar samen met de tapwatercartridge (ONT-19), in plaats van meteen te vervangen of te wachten op een foutcode die misschien nooit komt.`
    }
  ],
  kaarten: [
    { voor: `Wat doet de driewegklep bij een combiketel als je warm water tapt?`, achter: `Hij schakelt het water naar de platenwarmtewisselaar in plaats van naar de radiatoren (TAP-01, KET-23).` },
    { voor: `Welke tapflow noemt Intergas als mogelijke oorzaak bij geen warm tapwater?`, achter: `Een tapflow onder 1,5 l/min, of een defecte stromingssensor (S3) zonder de vereiste 5 V (STO-11).` },
    { voor: `Waarvan hangt kalkafzetting in de platenwisselaar volgens Remeha af?`, achter: `Waterhardheid, bedrijfsuren, tapgedrag en de ingestelde warmwatertemperatuur (TAP-13).` },
    { voor: `Wat doet Remeha bij een merkbaar lagere tapcapaciteit?`, achter: `De platenwisselaar samen met de tapwatercartridge reinigen (ONT-19).` },
    { voor: `In welke volgorde onderzoek je "geen warm tapwater"?`, achter: `Doorstroming, sensor, driewegklep, platenwisselaar, regeling: van goedkoop en snel te controleren naar duur en langzaam.` },
    { voor: `Waarom begin je bij de goedkope controles en niet bij de dure onderdelen?`, achter: `Andersom werken kost de klant geld voor een vervangen onderdeel dat misschien niet de oorzaak was.` }
  ],
  bronnen: ['STO-11', 'TAP-01', 'TAP-13', 'ONT-19', 'KET-23']
},

/* ------------------------------------------------------------------ 16.4 */
{
  id: 'm16l04',
  nr: '16.4',
  titel: 'Geen verwarming',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt een ketel die niet verwarmt stap voor stap onderzoeken, van regeling tot afgifte.',
  videos: [
    { taal: 'nl', titel: 'CV ketel en thermostaat: wie is de baas? (Ketel Klets)', yt: 'D7OdBLGUyFo', duur: '±7 min, 2022' },
    { taal: 'en', titel: 'Boiler diagnosing, repairs and training, day in the life of a gas engineer (Advanced Boiler Training, VK)', yt: 'q_teoeAwfWU', duur: '±15 min, 2024' }
  ],
  tekst: `
## Wie geeft de warmtevraag, en komt hij aan?

"Geen verwarming" begint bij de vraag of de ketel wel een warmtevraag krijgt, en pas daarna bij wat de ketel daarmee doet. Intergas noemt bij deze klacht: de ketel staat uit, de kamerthermostaat of weersafhankelijke regeling is niet gesloten of defect, de pomp draait niet, of er staat geen 24 V op de regeling (STO-09). Dat is precies de volgorde om te controleren: regeling, dan elektrische voeding van de regelketen, dan de waterzijdige kant.

## Van regeling naar afgifte

1. **Regeling.** Vraagt de thermostaat om warmte? Bij een aan/uit-thermostaat en bij een OpenTherm-regelaar werkt dat mechanisch anders, en welke van de twee is aangesloten bepaalt zelfs welke klemmen op de ketel worden gebruikt: bij Remeha delen aan/uit en OpenTherm dezelfde klemmen, bij Intergas heeft elke functie een eigen klemmenpaar (ELK-17, ELK-20). Een OpenTherm-thermostaat op de verkeerde klemmen aangesloten, geeft geen werkende warmtevraag.
2. **Bedrading van de regeling.** Intergas noemt voor een aan/uit-kamerthermostaat een maximale leidingweerstand van 15 ohm voor kabel plus thermostaat samen (ELK-21): een te lange of te dunne leiding kan dus zelf de storing zijn, niet de thermostaat.
3. **Pomp.** Draait de pomp? Bij Intergas zie je dit op het display, bij vastzitten helpt handmatig deblokkeren met een schroevendraaier op de as (STO-09).
4. **Water.** Is er voldoende druk en doorstroming? Zie [les 16.5](les:m16l05) voor drukproblemen; een drukval die kwadratisch meegroeit met het debiet (HYD-21) betekent dat een kleine belemmering in de installatie een grote invloed op de doorstroming kan hebben.
5. **Vermogensvraag.** Ligt de warmtevraag van de woning onder de minimale belasting van de ketel? Dan pendelt (takt) de ketel: hij slaat aan en uit in plaats van door te moduleren (REG-11, KET-15, KET-28). Dat is geen storing, maar voelt voor de klant wel als "de verwarming doet het niet goed".

!!! kern Regeling voor pomp, pomp voor druk
Voor je de pomp of de waterzijdige kant onderzoekt, stel je vast dat de ketel echt een warmtevraag krijgt. Een ketel zonder warmtevraag doet niets, en dat lijkt in eerste instantie op precies dezelfde klacht als een defecte pomp.
!!!

## Praktijkgeval: 24 V op de regeling

Een klant meldt "de verwarming doet niets, warm water werkt wel". Volgens de keten in deze les start je bij de regeling: staat de thermostaat op een hogere temperatuur dan de kamertemperatuur, en geeft hij een signaal af? Intergas laat je vervolgens controleren of er 24 V op de regeling staat (MET-25). Ontbreekt die spanning, dan zit de oorzaak niet in de thermostaat zelf maar in de voeding van het regelcircuit: dat is een ander deel van de keten dan waar de klant zelf naar kijkt (de thermostaat), en precies waarom je de keten volgt in plaats van te raden.

?? Verdieping: waarom pendelen geen storing is
Een Remeha Calenta 25s heeft een minimale belasting van ongeveer 5,2 kW. Vraagt de woning maar 3 kW, dan kan de ketel niet lager moduleren en slaat hij aan en uit (REG-11). Dat voelt voor de klant als een probleem, maar er is niets defect: de oplossing zit in de afstemming tussen ketelvermogen en warmtevraag, niet in een reparatie.
??
`,
  checklist: [
    'Ik controleer bij geen verwarming eerst of de ketel echt een warmtevraag krijgt, voor ik de pomp of de waterzijde onderzoek',
    'Ik weet dat een aan/uit-thermostaat en een OpenTherm-regelaar niet bij elk merk op dezelfde klemmen worden aangesloten',
    'Ik ken de maximale leidingweerstand die Intergas noemt voor een aan/uit-thermostaatleiding',
    'Ik herken pendelen (aan/uit takken) als een gevolg van een te grote ketel voor de warmtevraag, niet als een storing'
  ],
  quiz: [
    {
      vraag: `Een klant heeft geen verwarming maar wel warm water. Wat controleer je als eerste volgens deze les?`,
      opties: [
        `Meteen de pomp demonteren en vervangen, zonder eerst te controleren of de ketel wel een warmtevraag krijgt van de thermostaat`,
        `De rookgasafvoer op het dak`,
        `Of de thermostaat of regeling daadwerkelijk een warmtevraag aan de ketel doorgeeft`,
        `De tapwatertemperatuur op het display`
      ],
      goed: 2,
      uitleg: `Werkt het tapwater, dan functioneren brander en warmtewisselaar. Begin dus bij de regeling: geeft die wel een warmtevraag door (STO-09)? Zo niet, dan doet de ketel niets, ook al is er niets defect aan pomp of waterzijde.`
    },
    {
      vraag: `Waarom kan het aansluiten van een OpenTherm-thermostaat op de verkeerde klemmen een "geen verwarming"-klacht geven?`,
      opties: [
        `Bij sommige merken heeft elke regelfunctie een eigen klemmenpaar, en op de verkeerde klemmen ontstaat geen werkende warmtevraag`,
        `OpenTherm-thermostaten werken nooit op cv-ketels, alleen op warmtepompen`,
        `Een OpenTherm-thermostaat heeft geen klemmen nodig, hij werkt altijd draadloos`,
        `De klemmen zijn bij elk merk en model universeel verwisselbaar, zonder dat dit enig gevolg heeft voor de werking van de warmtevraag`
      ],
      goed: 0,
      uitleg: `Bij Intergas heeft elke regelfunctie een eigen klemmenpaar, terwijl Remeha aan/uit en OpenTherm juist op dezelfde klemmen aansluit (ELK-17, ELK-20). Op de verkeerde klemmen aangesloten werkt de warmtevraag niet zoals bedoeld.`
    },
    {
      vraag: `Welke maximale leidingweerstand noemt Intergas voor de kabel plus een aan/uit-kamerthermostaat samen?`,
      opties: [`1,5 ohm`, `150 ohm`, `Er is geen maximum, elke weerstand is toegestaan`, `15 ohm`],
      goed: 3,
      uitleg: `Intergas noemt een maximale weerstand van 15 ohm voor kabel plus thermostaat samen (ELK-21). Een te lange of te dunne leiding kan dus zelf de storing veroorzaken, ook als de thermostaat zelf goed is.`
    },
    {
      vraag: `Een Remeha Calenta 25s (minimale belasting ongeveer 5,2 kW) slaat steeds aan en uit bij een warmtevraag van 3 kW. Wat is de juiste conclusie?`,
      opties: [
        `De ketel is defect en het gasblok moet vervangen worden`,
        `Dit is pendelen: de ketel kan niet lager moduleren dan zijn minimale belasting, dat is geen storing`,
        `De pomp is te zwak voor deze installatie`,
        `De thermostaat moet linksom worden vervangen door een duurder OpenTherm-model, want dat lost dit specifieke probleem altijd op`
      ],
      goed: 1,
      uitleg: `Onder de minimale belasting kan een ketel niet verder moduleren en pendelt hij (REG-11). Er is niets defect: de ketel is voor deze warmtevraag te groot afgestemd.`
    },
    {
      vraag: `Waarom is de opmerking "een kleine belemmering in de installatie kan een grote invloed op de doorstroming hebben" (drukval die kwadratisch met het debiet meegroeit) relevant bij "geen verwarming"?`,
      opties: [
        `Omdat dit alleen relevant is voor de gasdruk, niet voor de waterdruk`,
        `Omdat de drukval in een cv-installatie in de praktijk nooit enige merkbare invloed heeft op hoeveel water er nog door de leidingen, radiatoren en de warmtewisselaar heen kan stromen, ook niet bij een bijna dichte kraan`,
        `Omdat het betekent dat een klein beetje vervuiling of een bijna dichte kraan de doorstroming sterker kan afremmen dan je op het eerste gezicht zou verwachten`,
        `Omdat elke ketel automatisch compenseert voor drukval, dus dit is nooit een storingsoorzaak`
      ],
      goed: 2,
      uitleg: `Bij een gelijkblijvend leidingnet neemt de drukval ongeveer kwadratisch toe met het debiet (HYD-21): een kleine vernauwing (bijna dichte radiatorkraan, vervuiling) kan dus een relatief grote invloed hebben op hoeveel water er nog doorheen komt.`
    }
  ],
  kaarten: [
    { voor: `Wat controleer je bij "geen verwarming" als eerste, voor de pomp of de waterzijde?`, achter: `Of de ketel daadwerkelijk een warmtevraag krijgt van de thermostaat of regeling (STO-09).` },
    { voor: `Wat is het verschil tussen hoe Remeha en Intergas een OpenTherm-thermostaat aansluiten?`, achter: `Remeha deelt dezelfde klemmen voor aan/uit en OpenTherm; Intergas geeft elke functie een eigen klemmenpaar (ELK-17, ELK-20).` },
    { voor: `Welke maximale leidingweerstand noemt Intergas voor een aan/uit-thermostaatkabel?`, achter: `15 ohm voor kabel plus thermostaat samen (ELK-21).` },
    { voor: `Wat is pendelen (takten) en wanneer treedt het op?`, achter: `De ketel slaat aan en uit omdat de warmtevraag lager is dan zijn minimale belasting; geen storing, maar een afstemmingsprobleem (REG-11).` },
    { voor: `Welke spanning controleert Intergas op de regeling bij "geen verwarming"?`, achter: `24 V. Ontbreekt die, dan zit de oorzaak in de voeding van het regelcircuit, niet in de thermostaat zelf (MET-25).` },
    { voor: `Waarom kan een kleine vernauwing in de installatie een relatief grote invloed hebben op de doorstroming?`, achter: `De drukval groeit ongeveer kwadratisch met het debiet (HYD-21), dus een beetje extra weerstand remt verhoudingsgewijs veel af.` }
  ],
  bronnen: ['STO-09', 'STO-10', 'STO-13', 'REG-11', 'KET-15', 'KET-28', 'HYD-21', 'ELK-17', 'ELK-20', 'ELK-21', 'MET-25']
},

/* ------------------------------------------------------------------ 16.5 */
{
  id: 'm16l05',
  nr: '16.5',
  titel: 'Waterdruk zakt of stijgt',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt een drukprobleem analyseren en onderscheid maken tussen lek, expansievat en vulling.',
  videos: [
    { taal: 'nl', titel: 'CV ketel bijvullen met water: zo doe je dat (Praxis)', yt: 'EQxM4m7e0EA', duur: '±3 min, 2021' },
    { taal: 'nl', titel: 'Lage waterdruk cv-ketel en steeds moeten bijvullen: zo los je dit op (Monteurtje010)', yt: '4sb_HBUBga8', duur: '±2 min, 2025' },
    { taal: 'en', titel: 'Gas Training: how an expansion vessel works, boiler fault finding (Allen Hart, VK)', yt: 'dBnfd7H2PVs', duur: '±13 min, 2021' }
  ],
  tekst: `
## Koud en warm aflezen, dat vertelt het meeste

Een dalende druk kan twee heel verschillende oorzaken hebben, en je onderscheidt ze door de druk koud en warm af te lezen. Een lek geeft een gestage daling, ook bij een koude, stilstaande installatie. Een expansievat met een te lage voordruk geeft het omgekeerde beeld: de druk loopt bij opwarmen juist op, tot het veiligheidsventiel opent en het afgeblazen water bij afkoelen ontbreekt (HYD-15). Water zet tussen 10 en 80 graden ongeveer 3 procent in volume uit (HYD-01): dat uitzettingswater moet ergens heen, en dat is de taak van het expansievat.

## Het expansievat: voordruk, vuldruk, nuttig effect

De voordruk van het vat is de druk op het stikstofventiel, gemeten bij een drukloos systeem met het vat afgesloten van de waterzijde (HYD-12). Die voordruk hangt af van de statische hoogte van de installatie: ongeveer 0,1 bar per meter hoogteverschil tussen het vat en het hoogste punt, plus een toeslag (HYD-10). ATAG noemt als voorbeeld 0,5 bar bij 5 meter hoogte, 1,0 bar bij 10 meter (HYD-11): een voorbeeld van één fabrikant, gebruik de tabel of berekening die bij het gemonteerde vat hoort. De vuldruk (de druk waarop je de installatie koud vult) ligt daarna weer boven de voordruk: Vaillant vraagt minstens 0,2 bar boven de tegendruk van het vat (HYD-14).

| Situatie | Wat je ziet | Waarschijnlijke oorzaak |
|---|---|---|
| Druk daalt gestaag, ook koud | Langzaam, dag na dag | Lek in leiding, radiator of ketel |
| Druk stijgt sterk bij opwarmen, veiligheidsventiel druppelt | Vooral bij volle belasting | Te lage voordruk expansievat (HYD-15) |
| Druk blijft na bijvullen kort goed en zakt dan weer snel | Herhaalt zich elke week | Combinatie van de twee: laag vat plus afblazen |

!!! kern Bewijs met koud en warm aflezen
Lees de druk koud af, laat de ketel opwarmen, en lees opnieuw af. Dat onderscheidt een lek (gestage daling) van een expansievatprobleem (stijging, gevolgd door verlies via het veiligheidsventiel) sneller dan welke andere controle ook.
!!!

## Merkspecifieke codes en meldingen (voorbeeld)

Vaillant meldt bij te weinig water of een te lage waterdruk code F.022, met als mogelijke oorzaken onder meer een defect intern expansievat, lucht in het systeem, of een storing van de waterdruksensor of de pomp (STO-12). Remeha Calenta Ace toont waarschuwing A.02.06 onder 0,8 bar (MRK-08) en kent een aparte vergrendelingscode als het automatisch vullen te lang duurt zonder de minimale druk te bereiken (MRK-09). ATAG meldt code 118 bij druk onder 0,7 bar, met als eerste maatregel het handmatig deblokkeren van de ketelpomp, en code 117 bij druk boven 3 bar (MRK-15). Drie merken, drie andere codes voor grofweg hetzelfde probleem: nog een reden om de code op te zoeken in de handleiding van dat toestel ([les 16.2](les:m16l02)).

## Praktijkgeval: elke week bijvullen

Zie de uitgewerkte casus in de storingzoeker: een installatie waarin de druk bij koude toestand 0,7 bar is en bij opwarmen oploopt tot bijna 3 bar, met een expansievat waarvan de voordruk maar 0,1 bar is in plaats van de ongeveer 0,5 bar die bij deze installatiehoogte hoort. Pompen tot de juiste voordruk en daarna opnieuw vullen tot de vuldruk uit de handleiding lost dit structureel op, in plaats van elke week een emmer water bij te vullen.

!!! gevaar Voordruk meten kan alleen drukloos
Meet de voordruk van een expansievat alleen als het systeem drukloos en afgekoeld is en het vat is afgesloten van de waterzijde. Aan een systeem onder druk of met heet water werken is gevaarlijk voor jezelf.
!!!
`,
  checklist: [
    'Ik lees de waterdruk koud en warm af om een lek te onderscheiden van een expansievatprobleem',
    'Ik weet dat de voordruk van een expansievat afhangt van de statische hoogte en hoe ik hem meet',
    'Ik ken het verband tussen een te lage voordruk, een druppelend veiligheidsventiel en een terugkerende lagedrukmelding',
    'Ik zoek een merkspecifieke drukcode altijd op in de handleiding van dat toestel'
  ],
  quiz: [
    {
      vraag: `Een klant meldt dat de druk elke week zakt. Bij koude installatie meet je 0,8 bar, na opwarmen loopt de druk op naar bijna 3 bar en druppelt het veiligheidsventiel. Wat is de meest waarschijnlijke oorzaak?`,
      opties: [
        `Een lek in de leiding onder de vloer`,
        `Een defect gasblok dat de waterdruk beinvloedt`,
        `Een te lage voordruk van het expansievat, waardoor het uitzettingswater niet wordt opgevangen`,
        `Een te hoge warmtapwatertemperatuur die via de platenwisselaar ook de cv-druk zou beinvloeden, wat in de praktijk niet optreedt bij een normaal werkende driewegklep`
      ],
      goed: 2,
      uitleg: `Een lek geeft een gestage daling, ook koud. Hier stijgt de druk juist bij opwarmen tot het veiligheidsventiel opent (HYD-15): dat wijst op een expansievat dat het uitzettingswater niet kan opvangen door een te lage voordruk.`
    },
    {
      vraag: `Hoe en wanneer meet je de voordruk van een expansievat correct?`,
      opties: [
        `Met de installatie op vollast, aan het stikstofventiel, terwijl het water nog beweegt`,
        `Aan de manometer op het display van de ketel, op elk gewenst moment tijdens bedrijf, zonder de installatie drukloos te maken`,
        `Alleen tijdens de jaarlijkse onderhoudsbeurt, nooit bij een storing`,
        `Op het stikstofventiel, bij een drukloos systeem met het vat afgesloten van de waterzijde`
      ],
      goed: 3,
      uitleg: `De voordruk is de druk op het stikstofventiel, gemeten bij een drukloos systeem met het vat afgesloten van de waterzijde (HYD-12). Op elk ander moment gemeten, klopt de waarde niet.`
    },
    {
      vraag: `Een installatie heeft een hoogteverschil van ongeveer 5 meter tussen het expansievat en het hoogste punt. Welke voordruk noemt ATAG als voorbeeld voor deze hoogte?`,
      opties: [`0,1 bar`, `0,5 bar`, `1,0 bar`, `3,0 bar`],
      goed: 1,
      uitleg: `ATAG noemt als voorbeeld 0,5 bar bij 5 meter hoogte (HYD-11). Dit is een voorbeeld van één fabrikant: gebruik de tabel of berekening die bij het gemonteerde vat hoort.`
    },
    {
      vraag: `Een Vaillant ecoTEC plus VHR toont code F.022. Wat betekent die code, en wat vertelt hij niet?`,
      opties: [
        `Hij betekent te weinig water of een te lage waterdruk; welke van de genoemde oorzaken (sensor, pomp, expansievat, lucht) het precies is, staat er niet bij`,
        `Hij betekent dat het gasblok kapot is; de precieze oorzaak staat er niet bij`,
        `Hij betekent dat het toestel dermate oud is dat vervanging door een compleet nieuwe ketel altijd de enige mogelijke en verstandige oplossing is voor deze specifieke foutmelding`,
        `Hij betekent dat de gasdruk te hoog is`
      ],
      goed: 0,
      uitleg: `F.022 wijst op te weinig water of een te lage waterdruk, met als mogelijke oorzaken onder meer een defect intern expansievat, lucht, of een storing van de waterdruksensor of de pomp (STO-12): de code stuurt het onderzoek, hij beslist het niet.`
    },
    {
      vraag: `Een ATAG-toestel toont code 118. De installatiehandleiding noemt als eerste maatregel het handmatig deblokkeren van de ketelpomp. Wat betekent dat voor je aanpak?`,
      opties: [
        `Je vervangt meteen het expansievat, want dat is bij ATAG altijd de enige oorzaak van code 118`,
        `Je negeert de code, want deblokkeren van de pomp lost het nooit op`,
        `Je controleert eerst of de pomp vastzit, naast de andere mogelijke oorzaken van een te lage druk`,
        `Je verhoogt de gasdruk aanzienlijk in de hoop dat de waterdrukmelding daardoor vanzelf van het display verdwijnt`
      ],
      goed: 2,
      uitleg: `Deblokkeren van de pomp is de eerste maatregel die ATAG noemt bij code 118 (MRK-15), naast de andere mogelijke oorzaken zoals een lek of een te lage voordruk van het expansievat: het is een van de controles, niet de enige.`
    },
    {
      vraag: `Waarom lees je de waterdruk zowel koud als warm af in plaats van maar één keer?`,
      opties: [
        `Omdat de wet een dubbele meting verplicht voor elke storing aan de cv-installatie`,
        `Omdat de manometer van elke ketel bij een koude meting stelselmatig een onjuiste en te lage waarde aangeeft, ongeacht het merk, type of de leeftijd van het toestel`,
        `Omdat een enkele meting altijd precies 0,5 bar te laag uitvalt`,
        `Omdat het patroon van de daling of stijging het onderscheid maakt tussen een lek en een expansievatprobleem, wat je met één aflezing niet kunt zien`
      ],
      goed: 3,
      uitleg: `Een lek geeft een gestage daling, ook koud; een te laag expansievat geeft juist een stijging bij opwarmen gevolgd door verlies via het veiligheidsventiel (HYD-15). Dat verschil zie je alleen door beide momenten te vergelijken.`
    }
  ],
  kaarten: [
    { voor: `Hoeveel procent zet water ongeveer uit tussen 10 en 80 graden?`, achter: `Ongeveer 3 procent (HYD-01). Dat uitzettingswater vangt het expansievat op.` },
    { voor: `Waar en hoe meet je de voordruk van een expansievat?`, achter: `Op het stikstofventiel, bij een drukloos systeem met het vat afgesloten van de waterzijde (HYD-12).` },
    { voor: `Wat is het verschil in drukpatroon tussen een lek en een te laag expansievat?`, achter: `Een lek geeft een gestage daling, ook koud; een te laag expansievat geeft een stijging bij opwarmen, gevolgd door verlies via het veiligheidsventiel (HYD-15).` },
    { voor: `Wat betekent Vaillant-code F.022 (voorbeeld)?`, achter: `Te weinig water of een te lage waterdruk, met meerdere mogelijke oorzaken (sensor, pomp, expansievat, lucht) (STO-12).` },
    { voor: `Bij welke druk geeft een Remeha Calenta Ace waarschuwing A.02.06?`, achter: `Onder 0,8 bar waterdruk (MRK-08).` },
    { voor: `Wat noemt ATAG als eerste maatregel bij code 118 (druk te laag)?`, achter: `Handmatig deblokkeren van de ketelpomp (MRK-15), naast andere mogelijke oorzaken.` },
    { voor: `Waarom vang je de voordruk niet gewoon op door de installatie hoger te vullen?`, achter: `De voordruk hangt af van de statische hoogte (ongeveer 0,1 bar per meter, HYD-10); simpelweg hoger vullen verandert de voordruk van het vat zelf niet.` }
  ],
  bronnen: ['HYD-01', 'HYD-10', 'HYD-11', 'HYD-12', 'HYD-14', 'HYD-15', 'STO-12', 'MRK-08', 'MRK-09', 'MRK-15']
},

/* ------------------------------------------------------------------ 16.6 */
{
  id: 'm16l06',
  nr: '16.6',
  titel: 'Ontsteking en vlambewaking',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt een ketel die niet ontsteekt of de vlam verliest onderzoeken aan de hand van de startvolgorde.',
  videos: [
    { taal: 'nl', titel: 'Hoe werkt een HR-ketel? (Van Gemert Installatiegroep)', yt: 'Cd5O2a4qabo', duur: '±6 min, 2018' },
    { taal: 'en', titel: 'Gas Training: testing safety devices, flame rectification (Allen Hart, VK)', yt: 'JuYlsrHsuCM', duur: '±11 min, 2021' }
  ],
  tekst: `
## Drie takken, niet een

"De ketel ontsteekt niet" is eigenlijk drie verschillende klachten die vaak over een kam worden geschoren. Remeha (Avanta) onderscheidt ze scherp: geen ontstekingsvonk, wel vonk maar geen vlam, en wel vlam maar te weinig ionisatie (STO-05). Elke tak wijst naar een ander deel van de keten, en verwarring tussen de drie is de snelste weg naar een verkeerd vervangen onderdeel.

| Tak | Wat je waarneemt | Waar Remeha naar laat kijken |
|---|---|---|
| Geen vonk | Geen tikkend of knetterend geluid bij het opstarten | Ontstekingstransformator, ontstekingskabel, elektrodeafstand (3 tot 4 mm), aarding |
| Wel vonk, geen vlam | Je hoort de vonk, er komt geen vlam | Gaskraan, gasvoedingsdruk, ontluchting van de leiding, lucht-/rookgasleiding, sifon, netvoeding, elektrode, gas-luchtafstelling |
| Wel vlam, te weinig ionisatie | De brander gaat aan maar valt na kort branden weer uit | Verbrandingsstabiliteit, aarding, elektrode en elektrodeafstand |

## Hoe ionisatiebewaking werkt

De vlam is een gas van geladen deeltjes (ionen). Over de ionisatie-elektrode en de ketelmassa staat een wisselspanning, en doordat de elektrode een veel kleiner oppervlak heeft dan de massa, geleidt de vlam die wisselspanning overwegend in een richting: er ontstaat een kleine, vrijwel gelijkgerichte stroom van een paar microampere zolang de vlam er is (ELK-08). Een slechte massa- of aardverbinding kan die gelijkrichting laten wegvallen, ook als de vlam zelf gewoon brandt (ELK-09): dat is de natuurkundige reden waarom fabrikanten bij een laag signaal ook "controleer de aarding" laten checken.

!!! kern De vlam heeft een goede massa nodig, niet alleen gas
Een laag of wegvallend ionisatiesignaal betekent niet automatisch een kapotte elektrode. Een slechte aardverbinding van de brander geeft precies hetzelfde beeld, omdat het bewakingscircuit die massa nodig heeft om de wisselspanning gelijk te richten.
!!!

## Drempelwaarden zijn per merk (voorbeeld)

Remeha (Tzerra Ace, Calenta Ace) vraagt reinigen of vervangen van de elektrode onder 3 microampere, gemeten in zowel vol- als laaglast, stabiel na 1 minuut (MET-26). ATAG XL vraagt meer dan 2,0 microampere op vollast, Nefit ProLine NxT vraagt op laaglast meer dan 10 microampere (MET-26). Drie merken, drie andere getallen: er is geen algemene "goede" ionisatiestroom. Meet de ionisatiestroom via het display van het toestel, zoals de fabrikant voorschrijft: een Nederlandse fabrikantprocedure om de stroom met een multimeter in serie te meten, is er niet, dus dat wordt hier niet aangeraden.

## Praktijkgeval: wel vonk, geen vlam

Een Remeha Avanta geeft een vonk maar geen vlam. Volgens de tabel van Remeha loop je dan de keten gas, lucht/rookgas en elektra langs: gaskraan open, gasvoedingsdruk in orde, leiding ontlucht, lucht-/rookgasleiding vrij, sifon gevuld en niet verstopt, netvoeding aanwezig (STO-05). Pas als al die stappen in orde zijn, kijk je naar de elektrode zelf en naar de gas-luchtafstelling. Wie hier meteen de elektrode vervangt, slaat vier stappen over die sneller en goedkoper te controleren waren.

!!! gevaar Nooit een beveiliging overbruggen
Een vlambewaking overbruggen of uitschakelen "om te zien of de ketel dan wel brandt" is levensgevaarlijk: bij vlamverlies blijft er dan onverbrand gas vrijkomen. Zoek de oorzaak van het wegvallende signaal, overbrug de beveiliging nooit.
!!!
`,
  checklist: [
    'Ik onderscheid geen vonk, wel vonk zonder vlam, en wel vlam met te weinig ionisatie als drie verschillende oorzaken',
    'Ik weet dat een slechte aarding hetzelfde beeld geeft als een vervuilde elektrode',
    'Ik meet de ionisatiestroom via het display volgens de procedure van de fabrikant, niet in serie met een eigen multimeter',
    'Ik overbrug een vlambewaking nooit, ook niet om te testen'
  ],
  quiz: [
    {
      vraag: `Een ketel geeft geen enkel geluid van een vonk bij het opstarten. Bij welke tak van de klacht "ontsteekt niet" hoort dit?`,
      opties: [
        `Wel vlam maar te weinig ionisatie`,
        `Wel vonk maar geen vlam`,
        `Geen ontstekingsvonk: kijk naar transformator, kabel, elektrodeafstand en aarding`,
        `Een storing die volgens de fabrikant nooit gerelateerd is aan onderdelen uit de ontstekingsfase van het toestel`
      ],
      goed: 2,
      uitleg: `Geen enkel vonkgeluid wijst op de tak "geen ontstekingsvonk": ontstekingstransformator, ontstekingskabel, elektrodeafstand en aarding (STO-05). De andere twee takken veronderstellen dat er wel een vonk is.`
    },
    {
      vraag: `Waarom kan een slechte aardverbinding van de brander een laag ionisatiesignaal geven, ook als de vlam gewoon brandt?`,
      opties: [
        `Omdat het bewakingscircuit de massa nodig heeft om de wisselspanning overwegend in een richting te laten stromen; zonder goede massa valt die gelijkrichting weg`,
        `Omdat aarding de gastoevoer regelt en zonder aarding minder gas doorkomt`,
        `Omdat een slechte aarding de vlam kleiner maakt, waardoor er minder ionen ontstaan`,
        `Aarding heeft in de praktijk geen enkele invloed op de gemeten ionisatiestroom van het toestel, alleen op de veiligheid van de monteur bij onderhoud aan het toestel`
      ],
      goed: 0,
      uitleg: `Ionisatiebewaking werkt door asymmetrische gelijkrichting van een wisselspanning; het bewakingscircuit heeft de massaverbinding nodig als referentie. Zonder goede massa valt de gelijkrichting weg, ook als de vlam er wel is (ELK-08, ELK-09).`
    },
    {
      vraag: `Remeha vraagt reinigen of vervangen van de elektrode onder 3 microampere, ATAG XL onder 2,0 microampere en Nefit ProLine NxT onder 10 microampere (op laaglast). Wat volgt daaruit?`,
      opties: [
        `Dat 3 microampere de wettelijke ondergrens is voor alle merken`,
        `Dat Nefit-toestellen door hun ontwerp altijd een merkbaar zwakkere en minder betrouwbare ontsteking hebben dan vergelijkbare Remeha-toestellen`,
        `Dat deze getallen alleen voor toestellen ouder dan 10 jaar gelden`,
        `Dat er geen algemeen geldende drempelwaarde is, en dat je de waarde van de handleiding van dat specifieke merk en model gebruikt`
      ],
      goed: 3,
      uitleg: `De drempelwaarden lopen sterk uiteen per merk en model (MET-26): er bestaat geen algemene "goede" ionisatiestroom. Gebruik altijd de waarde uit de handleiding van het specifieke toestel.`
    },
    {
      vraag: `Waarom wordt het meten van ionisatiestroom met een eigen multimeter in serie in deze les niet aangeraden?`,
      opties: [
        `Omdat dat destructief is en de elektrode bij elke aanraking met meetapparatuur altijd onherstelbaar beschadigt, ongeacht hoe voorzichtig je te werk gaat`,
        `Omdat een multimeter fysiek niet in staat is om microampere te meten`,
        `Omdat er geen Nederlandse fabrikantprocedure voor is gevonden, en het uitlezen via het display van het toestel wel de voorgeschreven weg is`,
        `Omdat dit alleen door de fabrikant zelf in de fabriek mag gebeuren`
      ],
      goed: 2,
      uitleg: `Voor het in serie meten van de ionisatiestroom met een multimeter is geen Nederlandse fabrikantprocedure gevonden; fabrikanten laten de stroom via het display van het toestel uitlezen, en dat is de weg die deze cursus aanraadt.`
    },
    {
      vraag: `Een Remeha Avanta geeft wel een vonk maar geen vlam. Wat is de juiste volgorde om te controleren, volgens de tabel van Remeha?`,
      opties: [
        `Eerst gaskraan, gasvoedingsdruk, ontluchting, lucht-/rookgasleiding, sifon en netvoeding, en pas daarna de elektrode en de gas-luchtafstelling`,
        `Meteen de elektrode vervangen, dat is bij deze klacht altijd de snelste oplossing`,
        `Alleen de gas-luchtafstelling controleren, de rest van de keten is bij deze klacht niet relevant`,
        `Het toestel een hele nacht volledig laten uitstaan en de volgende dag gewoon opnieuw proberen, in de hoop dat het probleem zich dan uit zichzelf niet meer voordoet`
      ],
      goed: 0,
      uitleg: `Remeha noemt bij wel vonk maar geen vlam eerst de keten gas, lucht/rookgas en elektra (STO-05). De elektrode en de gas-luchtafstelling controleer je pas als die stappen zijn uitgesloten.`
    }
  ],
  kaarten: [
    { voor: `Welke drie takken onderscheidt Remeha bij "ontsteekt niet"?`, achter: `Geen ontstekingsvonk, wel vonk maar geen vlam, en wel vlam maar te weinig ionisatie (STO-05). Elke tak wijst naar een ander deel van de keten.` },
    { voor: `Hoe werkt ionisatiebewaking natuurkundig?`, achter: `De vlam geleidt een wisselspanning tussen elektrode en massa asymmetrisch (gelijkrichting), waardoor een kleine, vrijwel gelijkgerichte stroom ontstaat zolang de vlam er is (ELK-08).` },
    { voor: `Waarom kan een slechte aarding hetzelfde beeld geven als een vervuilde elektrode?`, achter: `Het bewakingscircuit heeft de massaverbinding nodig voor de gelijkrichting; zonder goede aarding valt het signaal weg, ook bij een brandende vlam (ELK-09).` },
    { voor: `Wat is de ionisatiestroomdrempel van Remeha voor de Tzerra Ace en Calenta Ace (voorbeeld)?`, achter: `Onder 3 microampere in zowel vol- als laaglast: elektrode reinigen of vervangen (MET-26).` },
    { voor: `Hoe meet je de ionisatiestroom volgens deze les?`, achter: `Via het display van het toestel, zoals de fabrikant voorschrijft. Niet in serie met een eigen multimeter: daarvoor is geen Nederlandse fabrikantprocedure gevonden.` },
    { voor: `In welke volgorde controleer je bij "wel vonk, geen vlam"?`, achter: `Gaskraan, gasvoedingsdruk, ontluchting, lucht-/rookgasleiding, sifon en netvoeding eerst; elektrode en gas-luchtafstelling pas daarna (STO-05).` },
    { voor: `Waarom overbrug je een vlambewaking nooit?`, achter: `Bij vlamverlies blijft er dan onverbrand gas vrijkomen: levensgevaarlijk voor CO en explosie.` }
  ],
  bronnen: ['STO-05', 'MET-26', 'ELK-08', 'ELK-09']
},

/* ------------------------------------------------------------------ 16.7 */
{
  id: 'm16l07',
  nr: '16.7',
  titel: 'Lucht, ventilator en afvoer',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt storingen door luchttoevoer, ventilator en afvoer onderzoeken en veilig oplossen.',
  videos: [
    { taal: 'nl', titel: 'Een cv-ketel afvoer ontstoppen (Ontstoppingsdienstnl)', yt: 'jxwHi4RoSdk', duur: '±2 min, 2025' },
    { taal: 'en', titel: 'Gas Training: how to test air pressure switches in gas boilers (Allen Hart, VK)', yt: '6L8aL6RvgcE', duur: '±10 min, 2021' }
  ],
  tekst: `
## De raakvlakken met module 8

Deze les gaat over wat er misgaat tussen de ventilator en de buitenlucht: een geblokkeerde luchtaanzuiging, een ventilator die niet op toerental komt, of rookgas dat terug de luchttoevoer bereikt (recirculatie). De opbouw van het afvoersysteem zelf (open of gesloten, de typeaanduidingen, de eisen aan de uitmonding) staat in [module 8](module:m08): deze les bouwt daarop voort vanuit het perspectief van storingzoeken.

## Ventilatortoerental

Een moderne ketel bewaakt het toerental van zijn eigen ventilator. De Remeha Calenta heeft een DC-ventilator en toont het toerental op het display (KET-30); Intergas geeft bij een onjuist ventilatortoerental code 8 (MRK-11). Voor je een nieuwe, niet-goedkope ventilator bestelt, controleer je eerst of de ventilator ergens tegenaan loopt of vervuild is, en of de bedrading naar de printplaat goed contact maakt: de BRL 6000-25 onderhoudscontrolelijst noemt "functioneren luchtdrukverschilschakelaar" en het ventilatortoerental als afzonderlijke controlepunten (MET-24), maar niet elk toestel heeft dezelfde uitvoering: volg de handleiding van dat specifieke model.

## Recirculatie: rookgas dat zijn eigen lucht opeet

Bij een gesloten toestel met een concentrisch systeem (lucht en rookgas door hetzelfde kanaal, gescheiden) kun je recirculatie controleren door op het meetpunt van de luchttoevoer de CO2 te meten. Een goed werkend systeem geeft daar de buitenluchtwaarde, met een windmarge van ongeveer 1 procent CO2 die toelaatbaar is; een duidelijk hogere waarde wijst op interne lekkage en vraagt nader onderzoek (MET-19). Bij een collectief afvoersysteem (CLV) noemt de Rijksoverheid als risico's onder meer lekkende aansluitingen, ontbrekende terugslagkleppen bij een overdruksysteem, en recirculatie via een drukvereffeningsopening bij een oudere onderdruksysteem (RGA-28, RGA-29).

!!! kern Meet CO2 op het luchttoevoermeetpunt bij twijfel over recirculatie
Een vermoeden van recirculatie bewijs je niet met "het ruikt anders", maar met een CO2-meting op het meetpunt van de luchttoevoer. De buitenluchtwaarde is goed, een duidelijk hogere waarde niet (MET-19).
!!!

## Blokkade en condensafvoer

Vaillant noemt bij het vlamsignaal dat in de ontstekingsfase niet wordt herkend onder meer een geblokkeerde luchtaanzuigbuis als mogelijke oorzaak (STO-06). Intergas noemt bij een luidruchtige ontsteking of resonerend geluid onder meer recirculatie van verbrandingsgassen (STO-14), en bij condensafvoerproblemen speelt een verstopte condensafvoer een rol in de storingscodetabel (STO-15). Een verstopte afvoer is dus niet alleen een "vervelend druppelend probleem": het kan zich melden als een heel ander soort storing dan je op het eerste gezicht zou verwachten.

## Praktijkgeval: geluid en een lage voordruk tegelijk

Een Intergas-toestel resoneert. Volgens de storingscodetabel van Intergas horen bij resoneren onder meer een voordruk lager dan 20 mbar, recirculatie van verbrandingsgassen, een ontregelde gas-luchtregeling en een defecte branderpakking of brander (STO-14). Voordat je de brander of de pakking vervangt, meet je dus eerst de gasvoordruk en controleer je op recirculatie: allebei goedkoper en sneller te controleren dan een brander demonteren, en allebei mogelijke oorzaken van precies dit geluid.

!!! gevaar Nooit doorwerken bij CO in de opstellingsruimte
Blokkade van de luchttoevoer of de afvoer, of recirculatie, kan leiden tot te veel CO in de opstellingsruimte. Vind je dat, dan volg je het actiekader uit [les 16.1](les:m16l01): niet in bedrijf stellen, oorzaak wegnemen, en zo nodig melden.
!!!
`,
  checklist: [
    'Ik controleer bij een ventilatorstoring eerst op vervuiling en bedrading voor ik het onderdeel vervang',
    'Ik kan recirculatie aantonen met een CO2-meting op het meetpunt van de luchttoevoer',
    'Ik weet dat een verstopte condensafvoer zich als andere klachten dan alleen lekkage kan melden',
    'Ik volg bij te veel CO in de opstellingsruimte het actiekader uit les 16.1, ook als de oorzaak in lucht of afvoer zit'
  ],
  quiz: [
    {
      vraag: `Een Intergas-toestel toont code 8 (ventilatortoerental niet juist). Wat controleer je voor je de ventilator vervangt?`,
      opties: [
        `Alleen de kleur van de bedrading, zonder verder te meten of te kijken`,
        `Meteen de gasdruk verhogen tot het toerental stijgt`,
        `Of de ventilator ergens tegenaan loopt of vervuild is, en of de bedrading naar de printplaat goed contact maakt`,
        `Niets, deze code betekent bij elk merk en model van cv-ketel zonder uitzondering altijd dat de volledige printplaat vervangen moet worden`
      ],
      goed: 2,
      uitleg: `Voor je een nieuwe ventilator bestelt, controleer je eerst of hij vrij kan draaien en of de bedrading goed contact maakt (MET-24, MRK-11). Gasdruk heeft geen invloed op het toerental van de ventilator zelf.`
    },
    {
      vraag: `Hoe toon je recirculatie bij een concentrisch afvoersysteem aan?`,
      opties: [
        `Door te ruiken of er ergens in de opstellingsruimte een vage rookgaslucht hangt, zonder verder te meten`,
        `Door de waterdruk van de installatie te vergelijken met de vuldruk`,
        `Door te controleren of het toestel harder geluid maakt dan een jaar geleden`,
        `Door de CO2 te meten op het meetpunt van de luchttoevoer en te vergelijken met de buitenluchtwaarde`
      ],
      goed: 3,
      uitleg: `Een goed werkend systeem geeft op het luchttoevoermeetpunt de buitenluchtwaarde, met een kleine windmarge; een duidelijk hogere CO2-waarde wijst op recirculatie (MET-19).`
    },
    {
      vraag: `Welke windmarge in CO2 is volgens de BRL 6000-25 nog toelaatbaar op het meetpunt van de luchttoevoer, voordat je verder onderzoek doet?`,
      opties: [`Ongeveer 1 procent CO2`, `Ongeveer 10 procent CO2`, `Ongeveer 0,01 procent CO2`, `Er is geen enkele marge toegestaan`],
      goed: 0,
      uitleg: `Een windinvloed tot ongeveer 1 procent CO2 boven de buitenluchtwaarde is toelaatbaar; veel hogere waarden wijzen op interne lekkage en vragen nader onderzoek (MET-19).`
    },
    {
      vraag: `Een Intergas-toestel resoneert. Wat noemt de storingscodetabel van Intergas als mogelijke oorzaken, naast een defecte brander of pakking?`,
      opties: [
        `Alleen een verkeerd ingestelde klok die de nachtverlaging van de verwarming op een net iets te vroeg of te laat moment laat inschakelen`,
        `Uitsluitend een te hoge waterdruk in de installatie`,
        `Een voordruk lager dan 20 mbar, recirculatie van verbrandingsgassen en een ontregelde gas-luchtregeling`,
        `Een lege batterij in de kamerthermostaat`
      ],
      goed: 2,
      uitleg: `Bij resoneren noemt Intergas onder meer een voordruk lager dan 20 mbar, recirculatie en een ontregelde gas-luchtregeling (STO-14): allemaal sneller te controleren dan een brander demonteren.`
    },
    {
      vraag: `Waarom kan een verstopte condensafvoer zich melden als een heel andere klacht dan "er lekt water"?`,
      opties: [
        `Omdat een verstopte afvoer nooit een storingscode geeft en dus onopgemerkt blijft`,
        `Omdat een verstopte afvoer bij elk merk en type toestel automatisch en zonder uitzondering de gasdruk van de brander verhoogt`,
        `Omdat een verstopte afvoer alleen bij toestellen zonder sifon voorkomt`,
        `Omdat condensaat dat niet wegkan, uiteindelijk in de verbrandingskamer terecht kan komen en zo een vlam- of ontstekingsstoring veroorzaakt`
      ],
      goed: 3,
      uitleg: `Vaillant meldt condensaat in de verbrandingskamer met een eigen code, en Remeha en Intergas noemen een niet-gevulde of verstopte sifon als oorzaak bij geen vlam (STO-15): een afvoerprobleem kan zich dus als een ontstekingsstoring voordoen.`
    }
  ],
  kaarten: [
    { voor: `Wat controleer je bij een ventilatortoerentalstoring voor je het onderdeel vervangt?`, achter: `Of de ventilator vrij kan draaien (vervuiling, aanloop) en of de bedrading naar de printplaat goed contact maakt (MET-24, MRK-11).` },
    { voor: `Hoe meet je recirculatie bij een concentrisch afvoersysteem?`, achter: `CO2 meten op het meetpunt van de luchttoevoer en vergelijken met de buitenluchtwaarde (MET-19).` },
    { voor: `Welke CO2-windmarge op het luchttoevoermeetpunt is nog toelaatbaar?`, achter: `Ongeveer 1 procent boven de buitenluchtwaarde (MET-19).` },
    { voor: `Welke risico's noemt de Rijksoverheid bij een collectief afvoersysteem (CLV)?`, achter: `Lekkende aansluitingen, ontbrekende terugslagkleppen (overdruk) en recirculatie via een drukvereffeningsopening (onderdruk) (RGA-28, RGA-29).` },
    { voor: `Wat noemt Intergas als mogelijke oorzaken van een resonerend geluid?`, achter: `Voordruk lager dan 20 mbar, recirculatie, ontregelde gas-luchtregeling, defecte branderpakking of brander (STO-14).` },
    { voor: `Hoe kan een verstopte condensafvoer zich melden als een ontstekingsstoring?`, achter: `Condensaat dat niet wegkan, kan in de verbrandingskamer terechtkomen en de vlamvorming of ontsteking verstoren (STO-15).` }
  ],
  bronnen: ['MET-19', 'MET-24', 'STO-06', 'STO-14', 'STO-15', 'RGA-28', 'RGA-29', 'KET-30', 'MRK-11']
},

/* ------------------------------------------------------------------ 16.8 */
{
  id: 'm16l08',
  nr: '16.8',
  titel: 'Intermitterende storingen en de keuze repareren of vervangen',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt een storing die af en toe optreedt aantonen en onderbouwen of repareren of vervangen zinvol is.',
  videos: [
    { taal: 'nl', titel: 'CV onderhoud vs. vervangen (Ketel Klets)', yt: 'yrp7qw9PNAs', duur: '±7 min, 2024' },
    { taal: 'en', titel: 'Should I repair or replace my boiler? (Heatable, VK)', yt: '4SqP2y-zZV0', duur: '±9 min, 2021' }
  ],
  tekst: `
## Het probleem met "hij deed het net nog wel"

Een storing die er niet meer is zodra jij er staat, is de lastigste om te bewijzen. Je kunt geen meting doen aan een fout die niet optreedt. De oplossing is niet harder raden, maar het toestel zelf laten meemeten: fabrikanten bouwen daarvoor logging in die precies dit soort patronen vastlegt.

## Wat het toestel al voor je bijhoudt

Vaillant bewaart de 10 laatste foutmeldingen en noodbedrijfmeldingen (ONT-08), en Nefit vraagt bij onderhoud altijd het historiemenu uit te lezen (ONT-08, STO-01). Voor pendelen specifiek gaat Nefit nog een stap verder: code 0A 202 verschijnt zodra er vaker dan 1 keer per 10 minuten een warmtevraag is geweest, en code 0A 353 zodra het toestel binnen 24 uur nooit langer dan 20 minuten uit is geweest (STO-13). Dat zijn geen foutmeldingen in de klassieke zin, het zijn automatisch vastgelegde patronen: precies het bewijs dat je nodig hebt bij een klacht die je zelf niet zag optreden.

!!! kern Laat het toestel getuige zijn
Bij een storing die je niet zelf hebt gezien, is de storingsgeschiedenis van het toestel je belangrijkste bewijsmateriaal. Lees hem uit voor je concludeert dat er "niets te vinden is".
!!!

## Repareren of vervangen: wat je afweegt

Een cv-ketel gaat volgens de Consumentenbond gemiddeld ongeveer 15 jaar mee, en 20 jaar trouwe dienst is geen uitzondering, maar de kans op kostbare reparaties neemt toe bij oudere toestellen (STZ-01). Een vakpublicatie voor installateurs bevestigt die 15 jaar en noemt vaker terugkerende vergrendelende storingen als signaal om goed te laten kijken (STZ-02). Onderdelenbeschikbaarheid speelt ook mee: Remeha garandeert als voorbeeld 15 jaar na de laatste productiedatum van een model nog onderdelen te leveren (STZ-03), en de BRL 6000-25 noemt voor een toestel op een collectief afvoersysteem vervanging "na ca. 15 jaar" als moment waarop ook de rookgasafvoer wordt beoordeeld (STO-18).

Een vaste rekenregel in procenten van de nieuwprijs is er niet: dat soort vuistregels circuleert op installatiebedrijf-websites met uiteenlopende, tegenstrijdige percentages en zonder een onafhankelijke of fabrikantbron (STZ-04). Wat je wel kunt wegen: de leeftijd, hoe vaak de storingen terugkomen, of onderdelen nog leverbaar zijn, en of reparatie door een niet-erkende partij de garantie al heeft aangetast (KLA-12).

| Factor | Pleit voor repareren | Pleit voor vervangen |
|---|---|---|
| Leeftijd | Ruim onder de 15 jaar | Rond of boven de 15 tot 20 jaar |
| Storingsfrequentie | Eerste keer, duidelijke eenmalige oorzaak | Herhaalde vergrendelende storingen |
| Onderdelen | Origineel of gelijkwaardig onderdeel leverbaar | Onderdeel niet meer leverbaar |
| Eerdere reparaties | Vakkundig, door een erkend bedrijf | Ondeskundig, garantie al vervallen |

## Praktijkgeval: de vergrendeling die "vanzelf" wegging

Een klant belt over een ketel die "af en toe" uitvalt en na een paar minuten zelf weer aanslaat. Voor je concludeert dat er niets te vinden is, lees je de storingsgeschiedenis uit: staat er een patroon in dat overeenkomt met wat de klant beschrijft? Blijkt daaruit een terugkerende vergrendeling met dezelfde code, dan heb je bewijs voor een structurele oorzaak in plaats van "een toevallige hapering". Bij een toestel van 16 jaar oud met een derde vergrendeling dit jaar leg je die informatie naast de leeftijd en de onderdelenbeschikbaarheid, en bespreek je gemotiveerd met de klant of repareren nog verstandig is.
`,
  checklist: [
    'Ik lees bij een storing die ik zelf niet heb gezien altijd eerst de storingsgeschiedenis van het toestel uit',
    'Ik herken automatisch vastgelegde patronen (zoals herhaalde warmtevraag binnen 10 minuten) als bewijs, niet als losse toevalligheden',
    'Ik weeg bij repareren of vervangen de leeftijd, de storingsfrequentie en de onderdelenbeschikbaarheid samen',
    'Ik gebruik geen vast percentage van de nieuwprijs als beslisregel, want daarvoor is geen onafhankelijke bron'
  ],
  quiz: [
    {
      vraag: `Een klant meldt dat de ketel "af en toe" uitvalt, maar bij jouw bezoek werkt hij prima. Wat is de beste eerste stap?`,
      opties: [
        `Concluderen dat er niets te vinden is en het bezoek afronden`,
        `Een willekeurig onderdeel vervangen, voor de zekerheid`,
        `De storingsgeschiedenis van het toestel uitlezen om te zien of er een vastgelegd patroon is`,
        `De klant vragen om zelf een dagboek bij te houden van elke keer dat de storing optreedt en pas over een maand weer terug te bellen`
      ],
      goed: 2,
      uitleg: `Het toestel legt zelf vaak al bruikbare informatie vast: Vaillant bewaart de laatste 10 foutmeldingen (ONT-08). Die geschiedenis uitlezen is sneller en betrouwbaarder dan raden of alleen op je eigen waarneming vertrouwen.`
    },
    {
      vraag: `Wat betekent Nefit-code 0A 202 (voorbeeld)?`,
      opties: [
        `Dat het toestel een vergrendeling heeft die uitsluitend en in alle gevallen door de fabriek zelf kan worden opgeheven`,
        `Dat de gasdruk twee keer buiten het toegestane bereik lag`,
        `Dat de ketel binnenkort vervangen moet worden volgens de fabrikant`,
        `Dat er vaker dan 1 keer per 10 minuten een warmtevraag is geweest: een automatisch vastgelegd pendelpatroon`
      ],
      goed: 3,
      uitleg: `Code 0A 202 legt automatisch vast dat er vaker dan 1 keer per 10 minuten een warmtevraag is geweest (STO-13): precies het soort patroon dat lastig te bewijzen is als je het niet zelf hebt gezien optreden.`
    },
    {
      vraag: `Welke drie zaken weegt deze les samen bij de vraag repareren of vervangen?`,
      opties: [
        `Leeftijd, storingsfrequentie en onderdelenbeschikbaarheid`,
        `Alleen de kleur van het toestel en het bouwjaar van de woning`,
        `Uitsluitend de mening van de klant, zonder technische onderbouwing`,
        `Alleen de merknaam van het toestel`
      ],
      goed: 0,
      uitleg: `Leeftijd (gemiddeld ongeveer 15 jaar, STZ-01, STZ-02), storingsfrequentie, en of onderdelen nog leverbaar zijn (STZ-03) samen geven een onderbouwd advies, in plaats van een van de drie alleen te bekijken.`
    },
    {
      vraag: `Waarom gebruikt deze les geen vast percentage van de nieuwprijs als beslisregel voor repareren of vervangen?`,
      opties: [
        `Omdat zo'n percentage wettelijk verboden is om aan een klant te noemen`,
        `Omdat dat soort vuistregels op installatiebedrijf-websites uiteenlopen en tegenstrijdig zijn, zonder een onafhankelijke of fabrikantbron`,
        `Omdat percentages alleen gelden voor toestellen die zich nog binnen de garantieperiode van de fabrikant bevinden en dus nooit voor oudere toestellen`,
        `Omdat de Consumentenbond een ander, geheim percentage gebruikt dat niet openbaar is`
      ],
      goed: 1,
      uitleg: `De gevonden percentages (bijvoorbeeld 30 tot 50 procent van de nieuwprijs) verschillen per website en zijn onderling tegenstrijdig, zonder gezamenlijke of onafhankelijke bron (STZ-04): dat is te zwak om als vaste regel te gebruiken.`
    },
    {
      vraag: `Wat garandeert Remeha als voorbeeld over de levering van onderdelen na het uitfaseren van een model?`,
      opties: [
        `15 jaar na de laatste productiedatum`,
        `1 jaar na de laatste productiedatum`,
        `Onbeperkt, voor altijd`,
        `Alleen zolang de garantieperiode van 2 jaar loopt`
      ],
      goed: 0,
      uitleg: `Remeha garandeert als voorbeeld 15 jaar na de laatste productiedatum van een model nog onderdelen te leveren (STZ-03). Dit is een voorbeeld van één fabrikant; het garantie- en onderdelenbeleid verschilt per merk.`
    }
  ],
  kaarten: [
    { voor: `Wat is de beste eerste stap bij een storing die je zelf niet hebt zien optreden?`, achter: `De storingsgeschiedenis van het toestel uitlezen: fabrikanten leggen dit soort patronen automatisch vast (ONT-08).` },
    { voor: `Wat legt Nefit-code 0A 202 automatisch vast?`, achter: `Dat er vaker dan 1 keer per 10 minuten een warmtevraag is geweest: een pendelpatroon (STO-13).` },
    { voor: `Welke drie factoren weeg je samen bij repareren of vervangen?`, achter: `Leeftijd, storingsfrequentie en onderdelenbeschikbaarheid, samen met eerdere reparaties door een erkende of niet-erkende partij.` },
    { voor: `Hoeveel jaar gaat een cv-ketel volgens de Consumentenbond gemiddeld mee?`, achter: `Ongeveer 15 jaar; 20 jaar is geen uitzondering, maar de kans op kostbare reparaties neemt toe met de leeftijd (STZ-01).` },
    { voor: `Waarom is "reparatiekosten boven 30 tot 50 procent van de nieuwprijs" geen betrouwbare beslisregel?`, achter: `Dat percentage circuleert op meerdere websites met uiteenlopende, tegenstrijdige waarden en zonder onafhankelijke of fabrikantbron (STZ-04).` },
    { voor: `Wat kan het gebruikte onderdelenbeleid van de fabrikant met de keuze repareren of vervangen te maken hebben?`, achter: `Is een onderdeel niet meer leverbaar (na de garantieperiode van de fabrikant op onderdelenlevering), dan is repareren soms niet meer mogelijk (STZ-03).` }
  ],
  bronnen: ['STO-01', 'STO-13', 'STO-18', 'ONT-08', 'KLA-12', 'STZ-01', 'STZ-02', 'STZ-03']
}

  ]
});
