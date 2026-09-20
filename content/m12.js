/* ==========================================================================
   m12.js - Module 12: Leidingwerk en verbindingen
   Lessen 12.1 t/m 12.7 zijn geschreven op basis van project/docs/feiten/11-leidingwerk.md (LEI),
   met hergebruik van feiten over gasleidingwerk uit 05-installeren-meten-onderhoud-storingen.md (INS).
   Het beproeven op dichtheid en het in bedrijf stellen van de installatie horen bij module 13 en
   worden hier niet behandeld, alleen genoemd als vooruitwijzing.
   ========================================================================== */

CURSUS.addModule({
  id: 'm12',
  nr: 12,
  deel: 2,
  titel: 'Leidingwerk en verbindingen',
  ondertitel: 'Het ambacht onder elke installatie.',
  niveau: 'Beginner',
  studietijd: 9,
  intro: 'Het ambacht onder elke installatie: materialen en gereedschap, tekeningen lezen, buis bewerken, solderen, knellen en persen, kunststof en meerlagenbuis, afvoer en het monteren van radiatoren. Goed leidingwerk is de basis van een lekvrije installatie.',
  inleiding: [
    'Een cv-installatie bestaat voor een groot deel uit leidingwerk: van de meterkast naar de ketel, van de ketel naar elke radiator, en van elk tappunt naar de afvoer. Een verbinding die je vandaag maakt, moet jaren later nog dicht zijn, ook als niemand er meer naar kijkt. Dat vraagt vakmanschap: het juiste materiaal voor de toepassing, de juiste voorbereiding van de buis en een verbinding die je zelf kunt controleren voordat je hem wegwerkt.',
    'Deze module behandelt het ambacht dat onder elke installatie ligt: materiaalkeuze en veilig werken, tekeningen lezen, buis bewerken, verbindingstechnieken (solderen, knellen, persen), kunststof en meerlagenbuis voor water en gas, PVC-afvoer, en het monteren van radiatoren en cv-leidingwerk. Het beproeven op dichtheid van een gasleiding en het in bedrijf stellen van de installatie komen in module 13: die bouwen voort op het leidingwerk dat je hier leert maken.'
  ],
  leerdoelen: [
    'Materialen en gereedschap kiezen en veilig gebruiken',
    'Installatietekeningen en symbolen lezen',
    'Buis vakkundig meten, snijden, afbramen en buigen',
    'Verbindingen maken door solderen, knellen en persen',
    'Kunststof en meerlagenbuis voor water en gas toepassen',
    'Afvoer- en PVC-systemen verlijmen en monteren',
    'Radiatoren en cv-leidingwerk monteren en afvullen'
  ],
  examen: [
    {
      vraag: `Je moet een leiding voor een gasinstallatie kiezen. Welke uitspraak klopt?`,
      opties: [
        `Een blauwe meerlagenbuis voor drinkwater mag ook voor gas, want de buis is toch KIWA-gekeurd`,
        `Materiaal voor een gasleiding moet een Gastec QA-keuring voor gas hebben (bijvoorbeeld KE 5 voor koperen buis of KE 198 voor meerlagenbuis binnenshuis); een keuring voor drinkwater is niet automatisch een keuring voor gas`,
        `Voor gas mag elk materiaal dat ook voor cv-water is toegelaten, omdat gas in een woninginstallatie een lagere druk heeft dan cv-water; het drukverschil alleen bepaalt dus of een materiaal geschikt is, ongeacht de toepassing waarvoor het oorspronkelijk bedoeld was`,
        `Een gasleiding mag van elk materiaal zijn zolang de fitting van hetzelfde merk is als de buis`
      ],
      goed: 1,
      uitleg: `Kiwa Gastec QA geeft eigen keuringseisen (KE-nummers) voor gasmateriaal: KE 5 voor koperen buis, KE 8 voor PE-buis, KE 198 en KE 212 voor meerlagenbuis. Een Kiwa-keur voor drinkwater zegt niets over geschiktheid voor gas. Eenzelfde merk bij buis en fitting is geen vervanging voor de juiste keuring, en drukniveau alleen bepaalt niet of een materiaal voor gas is toegelaten.`
    },
    {
      vraag: `Voor een gasinstallatie met een werkdruk tot en met 0,5 bar in een nieuwbouwwoning verwijst de BRL 6000-04 naar welke norm?`,
      opties: [`NEN 8078`, `NEN-EN 12056-2`, `NEN 1078`, `NEN 3215`],
      goed: 2,
      uitleg: `BRL 6000-04 verwijst voor nieuwbouw naar NEN 1078 (werkdruk tot en met 0,5 bar); NEN 8078 is de versie voor bestaande bouw. NEN-EN 12056-2 gaat over de berekening van huishoudelijke afvalwaterafvoer en NEN 3215 over binnenriolering: geen van beide over gas.`
    },
    {
      vraag: `Je moet hete werkzaamheden (solderen) uitvoeren in een kruipruimte met houten balklaag erboven. Wat doe je volgens de richtlijn voor brandgevaarlijke werkzaamheden?`,
      opties: [
        `Direct beginnen zonder enige voorbereiding: een kruipruimte is volgens veel monteurs te klein en te vochtig om daar met vonken of hitte werkelijk brand te kunnen veroorzaken`,
        `Alleen een brandblusser meenemen, verder is voorbereiding niet nodig bij kortdurend werk`,
        `Brandbaar materiaal verwijderen of afschermen, blusmiddel binnen handbereik houden, en na het werk minimaal een uur de omgeving controleren op het ontstaan van brand`,
        `Alleen ventileren tegen gasvorming; brandgevaar door vonken en hitte speelt bij solderen in een kruipruimte met een houten balklaag amper een rol`
      ],
      goed: 2,
      uitleg: `Bij hete werkzaamheden hoort: brandbaar materiaal verwijderen of afschermen, een geschikt blusmiddel binnen handbereik, en een nacontrole van minstens een uur na afloop, ook in aangrenzende ruimten, omdat een beginnende brand in een verborgen ruimte lang onopgemerkt kan blijven. Een kruipruimte met een houten balklaag is juist een risicovolle plek voor deze werkzaamheden.`
    },
    {
      vraag: `Wat is het verschil tussen een principeschema en een isometrische tekening op een installatietekening?`,
      opties: [
        `Een principeschema toont de functionele verbindingen tussen componenten, een isometrische tekening toont de werkelijke driedimensionale ligging van de leidingen`,
        `Een principeschema en een isometrische tekening zijn gewoon twee namen voor dezelfde tekening en tonen dus exact dezelfde informatie, zonder enig verschil in wat ze laten zien`,
        `Een isometrische tekening toont alleen de symbolen-legenda, een principeschema toont de leidingroutes`,
        `Een principeschema is altijd op schaal 1:50, een isometrische tekening nooit`
      ],
      goed: 0,
      uitleg: `Een principeschema laat zien hoe componenten functioneel met elkaar verbonden zijn (bijvoorbeeld ketel, verdeler en radiatoren), zonder de werkelijke maten. Een isometrische tekening toont juist de driedimensionale ligging van de leidingen in het gebouw. Schaal en legenda zijn geen onderscheidend kenmerk tussen de twee tekeningtypen.`
    },
    {
      vraag: `Bij het handmatig buigen van koperbuis met een buigveer ontstaat een afplatting (ovalisering) in de bocht. Wat is de meest waarschijnlijke oorzaak?`,
      opties: [
        `De buigradius is te klein voor de gebruikte diameter en methode`,
        `De buis is niet ontbraamd voor het buigen`,
        `De buigveer is aan de buitenzijde geplaatst in plaats van de binnenzijde`,
        `De buis is te lang afgekort`
      ],
      goed: 0,
      uitleg: `Ovalisering en knikken ontstaan bij een te kleine buigradius voor de gebruikte diameter en buigmethode. Ontbramen voorkomt een braam bij een verbinding, niet ovalisering bij het buigen. Een buigveer kan aan binnen- of buitenzijde gebruikt worden afhankelijk van het buigtype, en de lengte van de afgekorte buis heeft geen invloed op ovalisering.`
    },
    {
      vraag: `Wat is het functionele verschil tussen zacht solderen en hard solderen?`,
      opties: [
        `Zacht solderen gebruikt een brander op aardgas, hard solderen altijd op propaan`,
        `Zacht solderen is uitsluitend geschikt voor kunststof leidingen, terwijl hard solderen uitsluitend voor metalen leidingen geldt, ongeacht de gebruikte brander of het gebruikte soldeermateriaal`,
        `Zacht solderen gebruikt soldeer dat onder ongeveer 450 °C smelt, hard solderen (brazeren) gebruikt soldeer dat daarboven smelt en een hogere brandertemperatuur vraagt`,
        `Zacht solderen en hard solderen verschillen alleen in kleur van het soldeer, niet in smeltpunt`
      ],
      goed: 2,
      uitleg: `Het onderscheid tussen zacht en hard solderen is het smeltpunt van het soldeermateriaal: onder of boven ongeveer 450 °C. Hard solderen (brazeren) vraagt een hogere brandertemperatuur, vaak zuurstof-acetyleen. Het onderscheid gaat niet over het type brandstof van de brander of over kunststof versus metaal.`
    },
    {
      vraag: `Waarom wordt een koperen gasleiding in de installatiepraktijk hard gesoldeerd en niet zacht gesoldeerd?`,
      opties: [
        `Omdat zacht solderen voor een gasleiding in de installatiepraktijk niet gebruikelijk is en wordt afgekeurd; welke methode een fitting toestaat, staat op de fitting of in de fabrikantvoorschriften`,
        `Omdat zacht solderen uitsluitend op koudwaterleidingen werkt en daarom nooit op een gasleiding kan worden toegepast, ongeacht de temperatuur`,
        `Omdat hard solderen sneller gaat dan zacht solderen`,
        `Omdat zacht solderen een hogere temperatuur vraagt dan de meeste branders kunnen leveren`
      ],
      goed: 0,
      uitleg: `Meerdere onafhankelijke vakbronnen zijn het erover eens dat zacht solderen voor een koperen gasleiding niet gebruikelijk is en wordt afgekeurd, ook al is dit niet met een letterlijke normtekst bevestigd. Snelheid is niet de reden, en zacht solderen vraagt juist een lagere temperatuur dan hard solderen, niet een hogere.`
    },
    {
      vraag: `Een Viega-persfitting met SC-Contur is per ongeluk niet geperst. Wat gebeurt er bij de drukproef?`,
      opties: [
        `Niets: SC-Contur voorkomt dat een ongeperste verbinding ooit lekt`,
        `De verbinding lekt zichtbaar tussen 0,1 en 0,65 MPa, zodat de fout voor ingebruikname wordt ontdekt`,
        `De fitting knapt volledig los van de buis, met waterschade als gevolg zodra de installatie wordt gevuld`,
        `De verbinding blijft dicht tot de installatie een jaar in gebruik is en gaat daarna pas lekken`
      ],
      goed: 1,
      uitleg: `SC-Contur is juist ontworpen om een ongeperste verbinding zichtbaar te laten lekken tussen 0,1 en 0,65 MPa tijdens het vullen en de drukproef, zodat de fout meteen wordt opgespoord in plaats van pas later. De fitting knapt niet los en een ongeperste verbinding blijft niet een jaar lang dicht.`
    },
    {
      vraag: `Een meerlagenbuis moet worden voorzien van een knelkoppeling. Wat doe je eerst?`,
      opties: [
        `De buis meteen in de fitting drukken, kalibreren is bij knelkoppelingen niet nodig`,
        `De buis inkorten tot de helft van de oorspronkelijke lengte`,
        `De buis verwarmen met een brander om hem soepeler te maken, zodat de fitting er zonder kalibreren overheen schuift`,
        `De buis ontbramen en kalibreren, zodat hij weer precies rond is en de fitting goed en lekvrij aansluit`
      ],
      goed: 3,
      uitleg: `Na het afkorten van meerlagenbuis wordt eerst ontbraamd en gekalibreerd: de calibrator maakt de buis weer precies rond en verwijdert de braam aan de binnenzijde, zodat een knel- of persfitting goed aansluit. Verwarmen met een brander of het inkorten van de buis heeft hier geen functie.`
    },
    {
      vraag: `Een meerlagenbuis voor drinkwater (niet geel) wordt gebruikt voor een aardgasaansluiting. Wat is het probleem?`,
      opties: [
        `Er is geen probleem: elke meerlagenbuis is altijd geschikt voor gas, ongeacht kleur of keurmerk, want de aluminium kern maakt de buis sterk genoeg voor elk denkbaar medium`,
        `Alleen het uiterlijk is fout, technisch is er niets mis`,
        `Deze buis is niet Gastec QA-gekeurd voor gas (geen KE 198/212-keur) en is niet als gasgeschikt te herkennen aan de kleur; hij mag niet voor een gasaansluiting worden gebruikt`,
        `Het probleem is alleen dat de buis een andere diameter heeft dan gasbuis`
      ],
      goed: 2,
      uitleg: `Meerlagenbuis die geschikt is voor gas is te herkennen aan een gele kleur of gele markering en moet het Gastec QA-keurmerk voor gas dragen (KE 198 binnenshuis of KE 212 buitenshuis). Een gewone (niet-gele) buis voor drinkwater of cv heeft die keuring niet en is niet zonder meer geschikt voor gas, los van de diameter.`
    },
    {
      vraag: `Waarom heeft een kunststof leiding die door een brandscheiding gaat een brandmanchet nodig?`,
      opties: [
        `Om de leiding tegen vorst te beschermen, want een opzwellend materiaal isoleert net zo goed tegen kou als tegen brand`,
        `Om te voorkomen dat de kunststof leiding gaat trillen`,
        `Om de doorstroomcapaciteit van de leiding te vergroten`,
        `Omdat een kunststof buis bij brand wegsmelt en zonder afdichting een open gat achterlaat waar vuur en rook doorheen kunnen; het opzwellende materiaal in de manchet drukt die opening dan dicht`
      ],
      goed: 3,
      uitleg: `Een kunststof buis smelt bij brand weg en laat dan een open gat in de brandscheiding achter. Een brandmanchet bevat een opzwellend (grafiet)materiaal dat bij verhitting uitzet en de opening dichtdrukt, zodat de brandwerendheid van de scheiding behouden blijft. Vorstbescherming, trilling en doorstroomcapaciteit hebben hier niets mee te maken.`
    },
    {
      vraag: `Waarom is het temperatuurbereik en de maximale werkdruk van meerlagenbuis geen algemeen getal dat voor elk merk geldt?`,
      opties: [
        `Omdat de norm voor meerlagenbuis elk merk toestaat om de eigen keuring over te slaan zodra het merk al lang genoeg op de markt is`,
        `Omdat de opbouw (kunststoflagen, aluminium kern) en de toepassing per fabrikant en systeem verschillen: bijvoorbeeld een Uponor GAS-systeem tot 100 mbar tegenover een Henco Alupex GAS-systeem tot 5 bar`,
        `Omdat meerlagenbuis nooit een keurmerk heeft en dus geen vaste specificatie kent`,
        `Omdat de temperatuur en druk uitsluitend van de binnendiameter afhangen, niet van het merk`
      ],
      goed: 1,
      uitleg: `De maximale werkdruk en temperatuur van meerlagenbuis verschillen per fabrikant en systeem: een voorbeeld is Uponor GAS met een werkdruk tot 100 mbar tegenover Henco Alupex GAS tot 5 bar. Beide systemen hebben wel een keuring; de norm schrijft juist keuring voor in plaats van dat elk merk die kan overslaan, en de binnendiameter alleen bepaalt niet de toegestane druk of temperatuur.`
    },
    {
      vraag: `Wat is de functie van de stankafsluiter (sifon) met waterslot bij een lozingstoestel op de binnenriolering?`,
      opties: [
        `Hij vertraagt de afvoer van water, zodat het riool bij veel lozingstoestellen tegelijk niet overbelast raakt`,
        `Hij filtert vaste deeltjes uit het afvalwater`,
        `Hij zorgt voor het afschot van de leiding`,
        `Hij biedt met een waterslot van minimaal 50 mm weerstand tegen drukschommelingen in het rioleringsstelsel en voorkomt zo dat riooldamp de ruimte binnenkomt`
      ],
      goed: 3,
      uitleg: `De sifon met waterslot (minimaal 50 mm) biedt weerstand tegen drukschommelingen in de binnenriolering en houdt zo riooldamp en -lucht buiten de ruimte. Vertraging van de afvoer, filtering van vaste stoffen en het afschot van de leiding zijn geen functies van de sifon.`
    },
    {
      vraag: `Waarom wordt de condensafvoer van een cv-ketel altijd via een sifon op de riolering aangesloten, en niet rechtstreeks?`,
      opties: [
        `Rechtstreeks aansluiten is sneller te monteren en is daarom de gangbare norm, ook al ontbreekt dan de sifon die bij elk ander lozingstoestel verplicht is`,
        `Zonder sifon staat het condenscircuit in open verbinding met het riool, met kans op stank- en gasoverlast uit het riool naar het toestel; met sifon geldt dezelfde eis als bij elk ander lozingstoestel (waterslot van minimaal 50 mm)`,
        `Een sifon is alleen nodig bij een VR-toestel, niet bij een HR-toestel`,
        `Rechtstreeks aansluiten is verboden omdat het condensaat te heet is voor de sifon`
      ],
      goed: 1,
      uitleg: `Een condensafvoer is in principe een lozingstoestel zoals elk ander en heeft dezelfde sifon-eis (waterslot van minimaal 50 mm) om drukschommelingen en riooldamp buiten te houden. Zonder sifon ontstaat een open verbinding met het riool. Het onderscheid VR/HR is hier niet relevant, en het condensaat is niet te heet voor een sifon.`
    },
    {
      vraag: `Waarom hangt de maximale beugelafstand van een leiding af van het materiaal en de diameter?`,
      opties: [
        `Omdat de beugelafstand alleen een esthetische keuze is, zonder enige technische reden die met doorbuigen, materiaalsterkte of het gewicht van de gevulde leiding zelf te maken zou hebben`,
        `Omdat beugelafstand alleen bij PVC-afvoer een rol speelt en niet bij koper of staal`,
        `Omdat een grotere diameter juist meer beugels per meter nodig heeft dan een kleine diameter`,
        `Omdat een grotere diameter en een stijver materiaal minder snel doorbuigen tussen twee steunpunten, waardoor de leiding verder uit elkaar gebeugeld kan worden zonder door te zakken`
      ],
      goed: 3,
      uitleg: `Zowel bij PVC/PP-afvoer (bijvoorbeeld 10 keer de diameter, tot een maximum) als bij koperen en stalen leidingen geldt: een grotere diameter en een stijver materiaal buigen minder snel door, dus mag de beugelafstand groter zijn. Het is geen esthetische keuze en het geldt niet alleen voor PVC.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 12.1 */
{
  id: 'm12l01',
  nr: '12.1',
  titel: 'Materialen, gereedschap en veilig werken',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt de gangbare buismaterialen voor water, cv en gas herkennen en het bijbehorende gereedschap veilig gebruiken, ook bij hete werkzaamheden.',
  videos: [
    { taal: 'nl', titel: 'CV aansluiten met Bonfix materiaal (Bouwmaat Nederland)', yt: 'ZvTpbu9PLvc', duur: '±5 min, 2018' },
    { taal: 'en', titel: 'PEX vs copper pipes (This Old House)', yt: '9bLwiF3hWUA', duur: '±4 min, 2025' },
    { taal: 'nl', titel: '...', zoek: 'materialen en gereedschap voor leidingwerk cv installatie' }
  ],
  tekst: `
## Welk materiaal voor welke leiding?

Een leiding voert water, cv-water of gas. Voor elk van die drie gelden andere eisen, en niet elk materiaal dat er geschikt uitziet, is dat ook. Koperen buis volgens EN 1057 is het meest veelzijdig: met een Kiwa-merk is hij geschikt voor drinkwater, en met een Gastec QA-keur ook voor gas. Stalen draadbuis wordt met schroefdraad verbonden en komt vooral voor bij oudere installaties en gasleidingwerk. Rvs-leidingsystemen zijn een flexibel alternatief voor koper, met een eigen Gastec QA-keur voor gasgeschikte uitvoeringen. Kunststof en meerlagenbuis komen in les 12.5 uitgebreid aan de orde.

!!! kern Een keurmerk voor water is geen keurmerk voor gas
Kiwa geeft voor gasmateriaal eigen Gastec QA-keuringseisen (KE-nummers) uit: onder meer KE 5 voor koperen buis, KE 8 voor PE-buis en KE 198 en KE 212 voor meerlagenbuis. Een product dat voor drinkwater is gekeurd, is daarmee niet automatisch ook voor gas toegelaten. Controleer bij twijfel de eigen gas-keuring van het materiaal, niet alleen het merk op de verpakking.
!!!

## Gereedschap: van snijden tot persen

Voor het bewerken en verbinden van leidingwerk gebruik je onder meer een pijpsnijder, een buigtang of buigmachine, een ontbramer, een calibrator (voor meerlagenbuis) en, afhankelijk van de verbindingstechniek, soldeergereedschap, een knelmoersleutel of een pers- of knelmachine. Welk gereedschap bij welke buis en fitting past, staat in de voorschriften van de systeemfabrikant: fittingen en buis van verschillende systemen passen niet gegarandeerd op elkaar, ook al lijken de maten hetzelfde.

## Hete werkzaamheden: waarom solderen brandgevaarlijk is

Solderen, lassen, snijden en slijpen zijn hete werkzaamheden: er is direct contact tussen vlam, hitte, vonken of gloeiende deeltjes en de omgeving. Dat risico is groter in kleine, moeilijk toegankelijke ruimten zoals een kruipruimte, een spouw of de ruimte tussen plafond en vloer, waar vaak ook brandbaar materiaal (hout, isolatie, stof) aanwezig is.

!!! gevaar Hete werkzaamheden bij een gasleiding of in een kruipruimte
Verwijder brandbaar materiaal uit de omgeving of scherm het af, houd bij brandbare (vloei)stoffen een minimale afstand van 5 tot 20 meter aan, ventileer of inertiseer bij brandbare gassen, dek kieren en gaten in vloeren, muren en plafonds af tegen vonken, en houd een geschikt blusmiddel binnen handbereik. Controleer de omgeving, ook aangrenzende ruimten, na het werk nog minstens een uur op het ontstaan van brand: een beginnende brand in een verborgen ruimte blijft anders lang onopgemerkt.
!!!

## Rekenvoorbeeld: hoeveel afstand houd je aan?

Je gaat een koperen leiding hard solderen op 1,5 meter van een houten kozijn dat met krantenpapier is geïsoleerd (een oude schuurwoning). De richtlijn voor brandgevaarlijke werkzaamheden noemt een minimale afstand van 5 tot 20 meter tot brandbare (vloei)stoffen, of afscherming als je die afstand niet kunt aanhouden.

| Situatie | Afstand tot brandbaar materiaal | Conclusie |
|---|---|---|
| Kozijn op 1,5 m, niet afgeschermd | 1,5 m, ver onder de richtlijn | Niet zo beginnen: eerst afschermen met een lasdeken of het materiaal verwijderen |
| Kozijn op 1,5 m, afgeschermd met een lasdeken | Effectief geen blootstelling | Wel beginnen, met blusmiddel binnen handbereik en nacontrole |

## Wat je in de praktijk meeneemt

In grotere bedrijven en op locaties met verhoogd risico werkt men met een vergunning voor brandgevaarlijke werkzaamheden: die noemt de datum, de plaats en aard van het werk, de uitvoerder en toezichthouder, de genomen veiligheidsmaatregelen en het resultaat van het onderzoek naar brandbare gassen. Ook zonder een formele vergunning is de kern hetzelfde: inspecteren voor je begint, afschermen of verwijderen wat brandbaar is, blusmiddel bij de hand, en controleren na het werk.
`,
  checklist: [
    'Ik controleer of een materiaal voor water, cv of gas de juiste keuring heeft, en niet alleen of het "er geschikt uitziet"',
    'Ik gebruik buis en fitting van hetzelfde systeem en dezelfde fabrikant',
    'Ik scherm brandbaar materiaal af of verwijder het voor ik ga solderen, zeker in een kruipruimte of besloten ruimte',
    'Ik houd na hete werkzaamheden minstens een uur nacontrole op het ontstaan van brand'
  ],
  quiz: [
    {
      vraag: `Een koperen buis met alleen een Kiwa-merk voor drinkwater wordt gebruikt voor een gasaansluiting. Wat klopt?`,
      opties: [
        `Ja, koper is als buismateriaal in alle gevallen geschikt voor gasleidingen, ook zonder een aparte keuring voor gas`,
        `Ja, maar uitsluitend wanneer de buisdiameter toevallig groter uitvalt dan tweeentwintig millimeter, in elke denkbare toepassing`,
        `Nee, want gas vraagt een eigen Gastec QA-keuring (bijvoorbeeld KE 5); een keuring voor drinkwater alleen is niet voldoende`,
        `Ja, zolang de fitting die je erop monteert van hetzelfde merk is als de buis zelf`
      ],
      goed: 2,
      uitleg: `Kiwa geeft voor gasmateriaal eigen keuringseisen (KE-nummers) uit, los van de drinkwaterkeuring. Koperbuis is pas geschikt voor gas met die eigen gas-keuring. Diameter en het merk van de fitting zijn hier niet de bepalende factor.`
    },
    {
      vraag: `Wat is het risico van hete werkzaamheden in een kruipruimte met een houten balklaag erboven?`,
      opties: [
        `Vonken, hitte of gloeiende deeltjes kunnen brandbaar materiaal zoals hout, isolatie of stof laten ontbranden in een ruimte die moeilijk te overzien en te bereiken is`,
        `Er is geen extra risico, want een kruipruimte is vrijwel altijd vochtig genoeg om brand vanzelf te voorkomen`,
        `Het enige echte risico van hete werkzaamheden in zo'n afgesloten en moeilijk bereikbare ruimte is eigenlijk alleen dat je gereedschap daar sneller vuil en stoffig wordt dan normaal`,
        `Het risico van hete werkzaamheden geldt volgens de richtlijn uitsluitend bij lassen, nooit bij solderen of snijden`
      ],
      goed: 0,
      uitleg: `Kleine, moeilijk toegankelijke ruimten met brandbaar materiaal zijn juist een verhoogd risico bij hete werkzaamheden, ook bij solderen. Vocht in een kruipruimte is geen garantie tegen brand van droog hout of isolatiemateriaal, en het risico geldt voor elke vorm van heet werk.`
    },
    {
      vraag: `Je moet solderen op 2 meter van een stapel isolatiemateriaal die je niet kunt verplaatsen. Wat is de juiste maatregel?`,
      opties: [
        `Niets doen, want 2 meter afstand is bij hete werkzaamheden altijd ver genoeg om veilig te werken`,
        `Alleen een raam openzetten voor wat extra ventilatie, verder is er bij dit soort materiaal geen enkele extra voorzorgsmaatregel nodig`,
        `Doorwerken zonder maatregelen, want isolatiemateriaal is van zichzelf niet brandbaar te noemen`,
        `Het isolatiemateriaal afschermen, bijvoorbeeld met een lasdeken, omdat de richtlijn een afstand van 5 tot 20 meter tot brandbaar materiaal aanhoudt`
      ],
      goed: 3,
      uitleg: `De richtlijn voor hete werkzaamheden noemt een minimale afstand van 5 tot 20 meter tot brandbaar materiaal, of afscherming als die afstand niet haalbaar is. Isolatiemateriaal kan wel brandbaar zijn, en alleen ventileren beschermt niet tegen vonken of hitte.`
    },
    {
      vraag: `Hoe lang na hete werkzaamheden moet de omgeving minimaal worden gecontroleerd op het ontstaan van brand?`,
      opties: [`Een kwartier, dan is het risico wel voorbij`, `Minimaal een uur, ook in aangrenzende ruimten`, `Vijf minuten, net zo lang als de laatste vlam nagloeit`, `Controle is niet nodig als je zelf niets ruikt of ziet`],
      goed: 1,
      uitleg: `De richtlijn voor brandgevaarlijke werkzaamheden noemt een nacontrole van minimaal een uur, ook van aangrenzende ruimten, omdat een beginnende brand in een verborgen ruimte lang onopgemerkt kan blijven. Een kwartier of vijf minuten is te kort, en niet ruiken of zien is geen garantie.`
    },
    {
      vraag: `Waarom kun je fittingen van verschillende leidingsystemen niet zomaar mengen, ook als de maat hetzelfde lijkt?`,
      opties: [
        `Omdat elk systeem wettelijk verplicht is om een eigen en goed herkenbare kleur fitting te gebruiken`,
        `Omdat fabrikanten fittingen afstemmen op hun eigen buiswanddikte en diameter; een ander merk wijkt daar net iets in af, wat de verbinding niet gegarandeerd lekvrij maakt`,
        `Omdat het mengen van fittingen van verschillende merken in Nederland voor ieder denkbaar leidingsysteem, zonder enige uitzondering, wettelijk verboden is`,
        `Omdat fittingen van verschillende merken volgens de norm altijd een andere schroefdraadmaat hebben`
      ],
      goed: 1,
      uitleg: `Fittingen zijn per systeem afgestemd op de exacte wanddikte en diameter van de bijbehorende buis. Een andere fabrikant kan daarin net afwijken, waardoor een gemengde verbinding niet gegarandeerd lekvrij is. Dit is een technisch punt, geen wettelijk kleurvoorschrift en niet voor elk systeem een algemeen verbod (al is het bij sommige systemen wel expliciet voorgeschreven).`
    }
  ],
  kaarten: [
    { voor: `Is een Kiwa-keur voor drinkwater ook een keur voor gas?`, achter: `Nee. Gasmateriaal heeft een eigen Gastec QA-keuring (KE-nummer), los van de drinkwaterkeuring.` },
    { voor: `Welke Gastec QA-keuring geldt voor koperen buis voor gas?`, achter: `KE 5.` },
    { voor: `Wat zijn hete werkzaamheden?`, achter: `Werk zoals lassen, snijden, slijpen en solderen, waarbij vlam, hitte, vonken of gloeiende deeltjes brand kunnen veroorzaken.` },
    { voor: `Welke minimale afstand tot brandbaar materiaal geldt bij hete werkzaamheden, of wat doe je als dat niet lukt?`, achter: `5 tot 20 meter; kan dat niet, dan scherm je het materiaal af (bijvoorbeeld met een lasdeken).` },
    { voor: `Hoe lang controleer je de omgeving na hete werkzaamheden op brand?`, achter: `Minimaal een uur, ook in aangrenzende ruimten.` },
    { voor: `Waarom mag je fittingen van verschillende merken niet zomaar mengen?`, achter: `Ze zijn op maat van de eigen buiswanddikte en -diameter gemaakt; een andere fabrikant wijkt daar net iets in af, wat de verbinding niet gegarandeerd lekvrij maakt.` }
  ],
  bronnen: ['LEI-01', 'LEI-02', 'LEI-03', 'LEI-06', 'LEI-10', 'LEI-11', 'LEI-12', 'LEI-13', 'LEI-14']
},

/* ------------------------------------------------------------------ 12.2 */
{
  id: 'm12l02',
  nr: '12.2',
  titel: 'Installatietekeningen en symbolen lezen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt een installatietekening en de symbolen daarop lezen en er een werkplan uit afleiden.',
  videos: [
    { taal: 'nl', titel: 'Installatietekeningen (Leever Installatie adviseurs)', yt: 'bjyWSjWf09Q', duur: '±1 min, 2021' },
    { taal: 'nl', titel: 'Lezen van bouwtekeningen (Paul Schouten)', yt: 'erLj0laUtDY', duur: '±3 min, 2019' },
    { taal: 'en', titel: 'How to read plumbing drawings (Global MEP Training Academy)', yt: 'O4uTlaKNeEc', duur: '±43 min, 2024' }
  ],
  tekst: `
## Waarom je een tekening moet kunnen lezen voor je een leiding legt

Voordat je een leiding legt, staat de route vaak al vastgelegd op een tekening: waar de leiding loopt, welke diameter hij heeft en welke onderdelen erop aangesloten worden. Zonder die tekening te kunnen lezen, werk je op aannames, en een verkeerd aangenomen route kost tijd en materiaal.

Er zijn verschillende soorten installatietekeningen, elk met een eigen doel:

| Tekeningtype | Wat het toont |
|---|---|
| Plattegrond | Bovenaanzicht van ruimtes en installaties, waar leidingen en toestellen liggen |
| Doorsnede | Verticale routing van installaties door het gebouw (bijvoorbeeld een standleiding door drie verdiepingen) |
| Detailtekening | Uitvergroting van een complex aansluitpunt, zoals de aansluiting op de ketel |
| Principeschema | Functionele verbindingen tussen componenten (ketel, verdeler, radiatoren), niet de werkelijke maten |
| Isometrische tekening | De werkelijke driedimensionale ligging van de leidingen in het gebouw |

!!! kern Een principeschema is geen plattegrond
Een principeschema laat zien hoe onderdelen met elkaar samenhangen (welke leiding waar begint en eindigt, in welke volgorde), maar niet waar dat in het gebouw precies ligt. Voor de werkelijke route en maten gebruik je de plattegrond, de doorsnede of de isometrische tekening. Verwar de twee niet: een principeschema oplossen betekent niet dat je weet waar de leiding fysiek loopt.
!!!

## Schaal en symbolen

Een tekening staat op schaal: bij 1:50 komt 1 cm op de tekening overeen met 50 cm in werkelijkheid, bij 1:100 met 1 m. Meet je iets op de tekening, reken dan altijd terug naar de werkelijke maat voordat je een leiding afkort. Symbolen zijn per discipline gestandaardiseerd (de precieze symbolen staan in normen zoals NEN-EN ISO 6412-1 voor pijpleidingen, die dit vastlegt maar niet vrij te citeren is) en een legenda op de tekening legt uit wat elk symbool betekent. Ga er niet van uit dat een symbool op elke tekening hetzelfde betekent: controleer de legenda van de tekening die je in handen hebt.

## Praktijkgeval: de tekening klopt niet met de bouwkundige situatie

Je krijgt een installatietekening waarop een verdeler op 1,2 meter van de buitenmuur staat ingetekend, maar op de bouwplaats zit daar een dragende kolom. Wat doe je?

1. Controleer of de tekening recent is (een oudere revisie kan afwijken van de huidige bouwkundige situatie).
2. Overleg met de projectleider of installatieverantwoordelijke voordat je de leiding op een andere plek legt: een verplaatsing kan gevolgen hebben voor andere leidingen of voor de berekende leidinglengte.
3. Leg de afwijking en de gekozen oplossing vast (bijvoorbeeld met een foto en een notitie op de tekening), zodat een volgende monteur of de revisietekening klopt met de werkelijke situatie.

Een tekening is een hulpmiddel, geen wet van Meden en Perzen: als de bouwkundige werkelijkheid afwijkt, is overleggen en vastleggen belangrijker dan blind de tekening volgen.
`,
  checklist: [
    'Ik ken het verschil tussen een plattegrond, een doorsnede, een detailtekening, een principeschema en een isometrische tekening',
    'Ik reken een maat op een tekening altijd terug naar de werkelijke maat aan de hand van de schaal',
    'Ik controleer de legenda van de tekening die ik in handen heb, in plaats van te gokken wat een symbool betekent',
    'Ik leg een afwijking tussen tekening en bouwkundige situatie vast en overleg voor ik zelf een andere route kies'
  ],
  quiz: [
    {
      vraag: `Wat toont een principeschema van een cv-installatie?`,
      opties: [
        `Alleen de plaats van de ketel op de plattegrond, niets over de andere onderdelen van de installatie`,
        `De exacte driedimensionale ligging van elke leiding, inclusief bochten en aansluitpunten, zoals die door het gebouw loopt`,
        `Uitsluitend de symbolen-legenda die bij de tekening hoort, zonder verdere inhoud te tonen`,
        `De functionele verbindingen tussen componenten zoals ketel, verdeler en radiatoren, zonder de werkelijke maten`
      ],
      goed: 3,
      uitleg: `Een principeschema toont hoe componenten functioneel samenhangen, niet hoe ze fysiek in het gebouw liggen. De werkelijke driedimensionale ligging staat op een isometrische tekening, en de plaats in het gebouw op een plattegrond.`
    },
    {
      vraag: `Op een tekening met schaal 1:50 meet je een leidingtraject van 8 cm. Hoe lang is dat traject in werkelijkheid?`,
      opties: [`4 m`, `0,8 m`, `8 m`, `50 m`],
      goed: 0,
      uitleg: `Bij schaal 1:50 staat 1 cm op de tekening voor 50 cm werkelijkheid. 8 cm x 50 = 400 cm = 4 m. 0,8 m zou horen bij schaal 1:10, 8 m bij schaal 1:100, en 50 m klopt met geen van beide gegevens.`
    },
    {
      vraag: `Je twijfelt over de betekenis van een symbool op een installatietekening. Wat doe je?`,
      opties: [
        `Aannemen dat het symbool exact hetzelfde betekent als op een andere tekening die je een keer eerder onder ogen kreeg`,
        `De legenda van deze specifieke tekening controleren, omdat symbolen per tekening en discipline kunnen verschillen`,
        `Het symbool negeren en gewoon verder werken op eigen inschatting`,
        `De schaal van de tekening aanpassen tot het symbool logisch lijkt`
      ],
      goed: 1,
      uitleg: `Een legenda hoort bij de tekening waar hij op staat: controleer die legenda in plaats van te vertrouwen op een eerdere tekening of een eigen inschatting. De schaal aanpassen verandert niets aan de betekenis van een symbool.`
    },
    {
      vraag: `Welke tekening gebruik je om de exacte, driedimensionale route van een leiding door een gebouw te zien?`,
      opties: [
        `Een principeschema, want dat toont naar eigen zeggen de complete installatie in detail`,
        `Een legenda die los bij de tekening is toegevoegd`,
        `Een isometrische tekening, die de werkelijke driedimensionale ligging toont`,
        `Een symbolentabel uit de norm voor pijpleidingen`
      ],
      goed: 2,
      uitleg: `Een isometrische tekening toont de werkelijke driedimensionale ligging van leidingen. Een principeschema toont alleen functionele verbindingen, en een legenda of symbolentabel legt symbolen uit zonder een route te tekenen.`
    },
    {
      vraag: `Op de bouwplaats zit een dragende kolom waar de tekening een verdeler intekent. Wat is de juiste eerste stap?`,
      opties: [
        `Controleren of de tekening recent is en overleggen met de projectleider of installatieverantwoordelijke voor je afwijkt`,
        `Doorwerken volgens de tekening en de kolom er later gewoon uit slopen zodat het weer klopt`,
        `Meteen zelf een geheel nieuwe plek voor de verdeler kiezen, zonder daarover met de projectleider of iemand anders te overleggen`,
        `De tekening meteen weggooien en verder zonder enige tekening aan het werk gaan`
      ],
      goed: 0,
      uitleg: `Eerst controleren of de tekening klopt met de actuele situatie en overleggen voordat je afwijkt, is de juiste volgorde: een eigen aanpassing kan gevolgen hebben voor andere leidingen. Een dragende kolom sloop je nooit om een tekening te volgen, en zonder tekening werken is geen structurele oplossing.`
    }
  ],
  kaarten: [
    { voor: `Wat toont een plattegrond op een installatietekening?`, achter: `Het bovenaanzicht van ruimtes en installaties.` },
    { voor: `Wat toont een doorsnede?`, achter: `De verticale routing van installaties door het gebouw.` },
    { voor: `Wat is het verschil tussen een principeschema en een isometrische tekening?`, achter: `Een principeschema toont functionele verbindingen zonder werkelijke maten; een isometrische tekening toont de werkelijke driedimensionale ligging.` },
    { voor: `Hoeveel werkelijke centimeters is 1 cm op een tekening met schaal 1:100?`, achter: `100 cm (1 meter).` },
    { voor: `Waar controleer je de betekenis van een symbool op een tekening?`, achter: `In de legenda van die specifieke tekening, niet op basis van een eerdere tekening.` },
    { voor: `Wat doe je als de tekening niet klopt met de bouwkundige situatie?`, achter: `Controleren of de tekening recent is, overleggen voor je afwijkt, en de afwijking vastleggen.` }
  ],
  bronnen: ['LEI-17', 'LEI-18', 'LEI-19', 'LEI-20', 'LEI-21']
},

/* ------------------------------------------------------------------ 12.3 */
{
  id: 'm12l03',
  nr: '12.3',
  titel: 'Buis bewerken: meten, snijden, afbramen en buigen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt buis nauwkeurig meten, snijden, afbramen en buigen zonder de buis te beschadigen.',
  videos: [
    { taal: 'nl', titel: 'Cv-leidingen ontbramen (John Visser cv-optimalisatie)', yt: 'LBxc8EKiWM4', duur: '±4 min, 2020' },
    { taal: 'nl', titel: 'Koperen buis buigen (Marianne Alleleijn - ten Haaf)', yt: 'Jmr6JErirvc', duur: '±3 min, 2025' },
    { taal: 'en', titel: 'Copper tube bending tools and methods (AC Service Tech LLC)', yt: 'aUsemVifUNs', duur: '±8 min, 2020' }
  ],
  tekst: `
## Meten en snijden: de basis van elke verbinding

Elke verbinding begint met een buis die precies op maat is. Meet de leidingroute op de tekening (les 12.2) of op de bouwplaats, reken de maat van de fitting mee (elke fitting heeft een insteekdiepte, dus de buis moet daar plus zijn), en kort de buis af met een pijpsnijder of een fijne zaag. Een pijpsnijder geeft een rechte, haakse snede; een zaag vraagt meer aandacht om haaks te blijven.

## Afbramen: klein werk met groot effect

Na het afkorten laat elke snede een braam achter: een scherpe, opstaande rand aan de binnen- en buitenkant van de buis. Die braam lijkt onschuldig, maar heeft twee gevolgen. Aan de buitenkant verstoort hij een soldeer-, knel- of persverbinding, met een grotere kans op een lek. Aan de binnenkant verstoort hij de doorstroming: het water moet om de braam heen stromen, wat stromingsgeluid geeft en de kans op afzetting (en daarmee ook op legionellagroei bij drinkwater) vergroot.

!!! kern Ontbramen doe je aan binnen- en buitenkant, altijd
Een buis die je niet ontbraamt, ziet er aan de buitenkant misschien prima uit, maar de binnenkant is dan nog steeds ruw. Ontbraam daarom standaard beide kanten, ook als je "toch wel weet dat het meevalt": het is een gewoonte die je bij elke buis toepast, niet een uitzondering voor als het tegenzit.
!!!

## Buigen: met de hand of met een machine

Voor kleinere diameters koperbuis gebruik je een buigveer (aan binnen- of buitenzijde van de buis) of een handbuigtang met een rol of slede; voor grotere diameters of dikwandige buis, of voor staal en rvs, gebruik je een elektrische of hydraulische buigmachine. Bij elke methode geldt: een te kleine buigradius voor de gebruikte diameter geeft ovalisering (afplatting) of een knik in de bocht, wat de doorstroming vermindert en een zwakke plek in de buis kan geven. Welke buigradius voor welke diameter en welk gereedschap geldt, staat in de gereedschapshandleiding: dat verschilt per fabrikant en model, dus lees die handleiding voor je met een onbekende machine aan de slag gaat.

## Rekenvoorbeeld: hoeveel buis heb je nodig voor een bocht?

Je moet een koperen leiding 90 graden laten buigen met een buigradius van 60 mm (radius tot de buismiddellijn). De lengte van het gebogen deel volgt uit de boogformule: lengte = (hoek / 360) x 2 x pi x radius.

| Grootheid | Waarde | Toelichting |
|---|---|---|
| Buigradius | 60 mm | Radius tot de buismiddellijn, uit de gereedschapshandleiding |
| Hoek | 90 graden | Kwart cirkel |
| Booglengte | (90/360) x 2 x 3,14 x 60 ≈ 94 mm | Dit stuk buis "verdwijnt" in de bocht |

Bestel of kort de buis dus niet te strak af: reken de booglengte van elke bocht mee in de totale benodigde lengte, anders kom je een paar centimeter tekort na het buigen.

## Kalibreren van meerlagenbuis

Meerlagenbuis wordt na het afkorten niet alleen ontbraamd maar ook gekalibreerd: een calibrator maakt de buis, die door het afkorten of transport iets uit zijn ronde vorm kan zijn, weer precies rond, zodat een knel- of persfitting er goed omheen sluit. Sommige systemen (zie de handleiding van dat systeem) zijn direct na montage belastbaar zonder aparte kalibreerstap: dat verschilt per fabrikant, dus check dit altijd voor je een stap overslaat.
`,
  checklist: [
    'Ik reken de insteekdiepte van de fitting mee bij het meten van de buis',
    'Ik ontbraam elke buis aan binnen- en buitenkant, zonder uitzondering',
    'Ik kies de buigradius volgens de gereedschapshandleiding van de gebruikte machine of tang, niet op gevoel',
    'Ik reken de booglengte van een bocht mee in de totale benodigde buislengte',
    'Ik controleer of een meerlagenbuis gekalibreerd moet worden voor de gebruikte fitting'
  ],
  quiz: [
    {
      vraag: `Waarom verstoort een braam aan de binnenkant van een buis de doorstroming?`,
      opties: [
        `Omdat de braam de buis op de plek van de snede zodanig vernauwt dat er merkbaar minder water doorheen kan stromen`,
        `Omdat een braam de buis van kleur laat veranderen, zoals bij oxidatie van het metaal`,
        `Omdat het water om de opstaande rand heen moet stromen, wat stromingsgeluid geeft en afzetting kan bevorderen`,
        `Omdat een braam de buis verkort, waardoor de fitting niet meer op maat past`
      ],
      goed: 2,
      uitleg: `Een braam is een scherpe, opstaande rand die het water dwingt om ernaar heen te stromen, met stromingsgeluid en meer kans op afzetting als gevolg. Kleurverandering en verkorting van de buis hebben niets met een braam te maken, en een braam vernauwt de buis niet gelijkmatig maar geeft juist een lokale verstoring.`
    },
    {
      vraag: `Wat gebeurt er als je een koperbuis buigt met een buigradius die te klein is voor de gebruikte diameter?`,
      opties: [
        `De buis krijgt ovalisering (afplatting) of een knik, met minder doorstroming en een zwakke plek als gevolg`,
        `De buis wordt langer dan van tevoren berekend, ook al verandert de buigradius daar normaal gesproken niets aan`,
        `De buis wordt op de plek van de bocht automatisch dikker en steviger dan de rest van de buis`,
        `Er verandert eigenlijk niets aan de buis, de buigradius is naar eigen zeggen alleen relevant voor het uiterlijk`
      ],
      goed: 0,
      uitleg: `Een te kleine buigradius voor de gebruikte diameter geeft ovalisering of een knik: de buis wordt daar niet ronder maar juist vervormd, met minder doorstroming en een zwakkere plek. De buigradius is dus geen kwestie van uiterlijk alleen.`
    },
    {
      vraag: `Je buigt een koperen leiding 90 graden met een buigradius van 60 mm tot de buismiddellijn. Hoeveel buis "verdwijnt" ongeveer in die bocht?`,
      opties: [`Ongeveer 60 mm`, `Ongeveer 120 mm`, `Ongeveer 188 mm`, `Ongeveer 94 mm`],
      goed: 3,
      uitleg: `Booglengte = (hoek/360) x 2 x pi x radius = (90/360) x 2 x 3,14 x 60 ≈ 94 mm. 60 mm is alleen de radius, 120 mm is tweemaal de radius (de diameter van de denkbeeldige cirkel) en 188 mm zou horen bij een volledige halve cirkel (180 graden) met deze radius.`
    },
    {
      vraag: `Waarom wordt meerlagenbuis na het afkorten gekalibreerd?`,
      opties: [
        `Om de buis een heel andere kleur en glans te geven aan de buitenkant, zodat hij beter herkenbaar is`,
        `Om de buis weer precies rond te maken, zodat een knel- of persfitting er goed omheen sluit`,
        `Om de buis flink te verlengen voordat de fitting erop wordt gezet`,
        `Om de wanddikte van de buis merkbaar te verminderen op die plek`
      ],
      goed: 1,
      uitleg: `Kalibreren maakt de buis weer precies rond, wat nodig is voor een goed sluitende knel- of persfitting. Kleur, lengte en wanddikte veranderen niet door kalibreren.`
    },
    {
      vraag: `Waarom moet je bij een onbekende buigmachine altijd eerst de handleiding raadplegen?`,
      opties: [
        `Omdat de juiste buigradius per fabrikant en model verschilt, en een verkeerde keuze ovalisering of een knik kan geven`,
        `Omdat elke buigmachine toevallig precies dezelfde buigradius gebruikt, en de handleiding dat alleen ter bevestiging nog eens herhaalt`,
        `Omdat een handleiding volgens de wet altijd verplicht zou zijn, geheel los van de gebruikte techniek`,
        `Omdat een buigmachine zonder handleiding er simpelweg nooit aan mag, ongeacht het bedrijf`
      ],
      goed: 0,
      uitleg: `De juiste buigradius voor een diameter en materiaal verschilt per fabrikant en model van het buiggereedschap: dat is precies de reden om de handleiding te raadplegen voordat je een onbekende machine gebruikt. Er is geen universele buigradius die voor elke machine gelijk is.`
    }
  ],
  kaarten: [
    { voor: `Wat controleer je bij het meten van een buis voor je hem afkort?`, achter: `De insteekdiepte van de fitting: de buis moet daar plus lengte hebben.` },
    { voor: `Waarom ontbraam je een buis aan binnen- en buitenkant?`, achter: `Buiten voor een goede verbinding, binnen tegen stromingsgeluid en afzetting door een verstoorde doorstroming.` },
    { voor: `Wat gebeurt er bij een te kleine buigradius?`, achter: `Ovalisering (afplatting) of een knik, met minder doorstroming en een zwakke plek.` },
    { voor: `Waar vind je de juiste buigradius voor een diameter en materiaal?`, achter: `In de handleiding van het gebruikte buiggereedschap: dat verschilt per fabrikant en model.` },
    { voor: `Wat is kalibreren van meerlagenbuis?`, achter: `De buis na het afkorten weer precies rond maken, zodat een knel- of persfitting goed aansluit.` },
    { voor: `Wat is de booglengte-formule voor een bocht?`, achter: `Booglengte = (hoek/360) x 2 x pi x radius (radius tot de buismiddellijn).` }
  ],
  bronnen: ['LEI-22', 'LEI-23', 'LEI-24', 'LEI-25', 'LEI-26', 'LEI-27']
},

/* ------------------------------------------------------------------ 12.4 */
{
  id: 'm12l04',
  nr: '12.4',
  titel: 'Verbindingstechnieken: solderen, knellen en persen',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt een soldeer-, knel- en perverbinding maken en beoordelen of hij goed en lekvrij is.',
  videos: [
    { taal: 'nl', titel: 'Waterleiding solderen (GAMMA bouwmarkt)', yt: 'h-KILvcbGzk', duur: '±5 min, 2017' },
    { taal: 'nl', titel: 'Waterleiding aanleggen met knelkoppelingen (GAMMA bouwmarkt)', yt: 'gcUYgISLRm4', duur: '±4 min, 2017' },
    { taal: 'en', titel: 'How to solder copper pipe (GOT2LEARN)', yt: 'JyVbjDsric4', duur: '±5 min, 2017' }
  ],
  tekst: `
## Drie technieken, drie toepassingen

Koperen buis wordt met drie hoofdtechnieken verbonden: solderen, knellen (een compressiefitting met een knelring) en persen (een fitting die met een pers- of knijptang blijvend om de buis wordt vervormd). Welke techniek waar past, hangt af van het medium (water, cv of gas), de toegankelijkheid (kun je later nog bij de verbinding?) en de voorschriften van de gebruikte fitting.

!!! kern Zacht en hard solderen: het smeltpunt maakt het verschil
Zacht solderen gebruikt soldeer dat onder ongeveer 450 °C smelt (een tin-basis soldeer met een gewone brander); hard solderen (ook brazeren genoemd) gebruikt soldeer dat daarboven smelt en een hogere brandertemperatuur vraagt, vaak zuurstof-acetyleen. Voor een koperen gasleiding wordt hard gesoldeerd; zacht solderen, de gangbare methode voor koperen water- en cv-leidingen, is voor een gasleiding in de installatiepraktijk niet gebruikelijk en wordt afgekeurd. Welke methode een specifieke fitting toestaat, staat op de fitting zelf of in de voorschriften van de fabrikant: controleer dat, in plaats van een vaste regel voor elke fitting aan te nemen.
!!!

## Knellen: snel, maar controleerbaar

Een knelkoppeling (compressiefitting) klemt bij het aandraaien van de moer een knelring om de buis. Het voordeel is dat je de verbinding zonder vlam maakt en later weer kunt losdraaien; het nadeel is dat een knelkoppeling meer ruimte inneemt dan een soldeer- of persverbinding en dat een te los of te strak aangedraaide moer een lek geeft. Voor koperbuis voor gas valt een knelkoppeling onder een eigen Gastec QA-keur (KE 35); dat is een andere keuring dan voor water of cv.

## Persen: snel en met een ingebouwde controle

Bij persen wordt een fitting met een pers- of knijptang blijvend om de buis vervormd, met een rubber afdichtring die de verbinding dicht maakt. Sommige perssystemen (bijvoorbeeld met Viega SC-Contur) hebben een ingebouwde controle: een per ongeluk niet-geperste verbinding lekt zichtbaar tussen 0,1 en 0,65 MPa tijdens het vullen van de installatie, zodat de fout voor ingebruikname wordt ontdekt in plaats van pas tijdens gebruik.

!!! kern Insteekdiepte aftekenen, altijd
Voordat je een pers- of knelfitting op de buis schuift, tekent je de insteekdiepte op het buiseinde af (met een viltstift of aftekenpotlood) en schuif je de buis tot aan die markering. Zo zie je vóór het persen of knellen of de fitting ver genoeg over de buis zit, en na het persen blijft de markering zichtbaar als extra controle.
!!!

## Praktijkgeval: een lek na de drukproef

Je hebt een cv-leiding met vijf persverbindingen gemaakt en test de installatie met een drukproef. Bij één verbinding zie je water druppelen. Wat is de meest waarschijnlijke oorzaak en wat doe je?

1. Controleer eerst of de insteekdiepte-markering nog op de juiste plek zit: is de fitting niet ver genoeg over de buis geschoven, dan is dat de oorzaak.
2. Is de markering wel goed, controleer dan of de fitting daadwerkelijk geperst is: bij een systeem met SC-Contur lekt een niet-geperste verbinding juist zichtbaar tijdens de drukproef, wat het probleem meteen verklaart.
3. Vervang de afdichtring of de fitting als hij beschadigd is, en test opnieuw voor je de leiding wegwerkt (in het plafond, de vloer of de muur).

Dit is precies waarom de drukproef vóór het afwerken gebeurt: een lek die je nu ontdekt, kost een paar minuten om te herstellen; een lek die je pas na het afwerken ontdekt, kost een sloopklus.

## Rekenvoorbeeld: hoeveel verbindingen op één dag?

Een monteur maakt gemiddeld één persverbinding per 3 minuten (inclusief afkorten, ontbramen, aftekenen en persen) en werkt 6 productieve uren per dag.

| Grootheid | Waarde | Berekening |
|---|---|---|
| Beschikbare tijd | 6 uur = 360 minuten | Gegeven |
| Tijd per verbinding | 3 minuten | Gegeven |
| Aantal verbindingen | 360 / 3 = 120 | Rekenkundig maximum, zonder rekening te houden met onderbrekingen of controles |

Dit is een theoretisch maximum: in de praktijk kost een moeilijk bereikbare verbinding, een controle of een correctie meer tijd, dus reken in een planning niet met dit maximum als gemiddelde.
`,
  checklist: [
    'Ik weet welke techniek (solderen, knellen, persen) past bij het medium en de fitting die ik gebruik',
    'Ik teken de insteekdiepte van een pers- of knelfitting altijd af voor ik de buis insteek',
    'Ik controleer een pers- of knelverbinding op een lek voor ik hem wegwerk, niet erna',
    'Ik gebruik voor een gasleiding alleen materiaal en een verbindingstechniek die daarvoor is toegelaten'
  ],
  quiz: [
    {
      vraag: `Wat is het verschil tussen zacht solderen en hard solderen?`,
      opties: [
        `Zacht solderen gebruikt soldeer dat onder ongeveer 450 graden smelt, hard solderen (brazeren) soldeer dat daarboven smelt met een hogere brandertemperatuur`,
        `Zacht solderen is uitsluitend bedoeld voor stalen leidingen, terwijl hard solderen dan weer alleen voor koperen leidingen zou gelden, ongeacht de fitting`,
        `Zacht solderen gebeurt altijd geheel zonder een brander, terwijl hard solderen altijd met een brander op de werkplek wordt uitgevoerd`,
        `Het verschil zit alleen in de kleur van het gebruikte soldeermateriaal en niet in het smeltpunt`
      ],
      goed: 0,
      uitleg: `Het onderscheid tussen zacht en hard solderen is het smeltpunt van het soldeer: ongeveer 450 °C is de grens. Hard solderen vraagt een hogere brandertemperatuur. Beide technieken gebruiken een brander, en beide worden vooral bij koper toegepast, niet bij staal.`
    },
    {
      vraag: `Voor koperbuis voor gas geldt voor een knelkoppeling een eigen Gastec QA-keur. Welke is dat?`,
      opties: [`KE 186, dezelfde als voor een persfitting`, `KE 5, dezelfde als voor de koperen buis zelf`, `KE 35`, `KE 198, dezelfde als voor meerlagenbuis`],
      goed: 2,
      uitleg: `KE 35 is de keuringseis voor knelfittingen voor koperen buis. KE 5 gaat over de koperen buis zelf, KE 186 over persfittingen voor koperen buis en KE 198 over meerlagenbuis voor gas binnenshuis.`
    },
    {
      vraag: `Waarom teken je de insteekdiepte van een pers- of knelfitting af op de buis voordat je hem insteekt?`,
      opties: [
        `Om de buis een iets mooiere en gladdere afwerking aan het uiteinde te geven, zodat hij netter oogt`,
        `Om te voorkomen dat de buis daarna nog te lang blijft voor de rest van het leidingtraject, wat verderop een probleem zou geven`,
        `Om vóór het persen of knellen te controleren of de fitting ver genoeg over de buis zit, en na het persen als extra controle`,
        `Om te onthouden, achteraf, welke fitting nu precies bij welke buis hoorde`
      ],
      goed: 2,
      uitleg: `De markering laat vóór het persen of knellen zien of de fitting ver genoeg over de buis geschoven is, en blijft na het persen zichtbaar als extra controle. Het gaat niet om onthouden welke fitting waar hoort, om afwerking, of om de lengte van de buis.`
    },
    {
      vraag: `Waarom wordt een koperen gasleiding hard gesoldeerd en niet zacht gesoldeerd?`,
      opties: [
        `Omdat zacht solderen uitsluitend voor kunststof leidingen is bedoeld en dus nooit voor enig metalen leidingmateriaal gebruikt zou worden`,
        `Omdat zacht solderen voor een gasleiding niet gebruikelijk is en wordt afgekeurd; de fitting of fabrikantvoorschriften zeggen welke methode wel is toegestaan`,
        `Omdat hard solderen, naar men beweert, aanzienlijk goedkoper zou uitvallen dan zacht solderen`,
        `Omdat zacht solderen zogenaamd een hogere temperatuur zou vragen dan de meeste branders kunnen leveren`
      ],
      goed: 1,
      uitleg: `Meerdere vakbronnen zijn het erover eens dat zacht solderen voor een koperen gasleiding niet gebruikelijk is en wordt afgekeurd, al is dit niet met een letterlijke normtekst bevestigd. Kosten zijn niet de reden, en zacht solderen vraagt juist een lagere temperatuur, niet een hogere.`
    },
    {
      vraag: `Een monteur maakt gemiddeld één persverbinding per 3 minuten en werkt 5 productieve uren. Wat is het rekenkundige maximum aan verbindingen die dag?`,
      opties: [`60, wat zou horen bij 3 volle uren werk`, `300, het aantal minuten in 5 uur zelf`, `150, wat zou horen bij 7,5 uur werk`, `100`],
      goed: 3,
      uitleg: `5 uur = 300 minuten, gedeeld door 3 minuten per verbinding = 100. Dit is een theoretisch maximum zonder rekening te houden met onderbrekingen; 60 zou horen bij 3 uur, 150 bij 7,5 uur en 300 is de tijd in minuten zelf, niet het aantal verbindingen.`
    },
    {
      vraag: `Bij een systeem met Viega SC-Contur blijkt tijdens de drukproef één verbinding te lekken. Wat betekent dat waarschijnlijk?`,
      opties: [
        `De fitting is hoe dan ook defect en moet zonder verdere controle worden vervangen`,
        `De verbinding is per ongeluk niet geperst: SC-Contur is juist ontworpen om dat tijdens de drukproef zichtbaar te maken`,
        `De testdruk van de drukproef is aanzienlijk te hoog geweest, waardoor ook een prima geperste verbinding daardoor even is gaan druppelen`,
        `Dit betekent helemaal niets: elke persverbinding lekt toch altijd een beetje tijdens de allereerste drukproef`
      ],
      goed: 1,
      uitleg: `SC-Contur laat een per ongeluk niet-geperste verbinding juist zichtbaar lekken tussen 0,1 en 0,65 MPa tijdens de drukproef, zodat de fout wordt opgespoord voor de installatie in gebruik gaat. Dit wijst dus niet automatisch op een defecte fitting of een te hoge testdruk, en een goed geperste verbinding lekt niet.`
    }
  ],
  kaarten: [
    { voor: `Wat is het smeltpunt-verschil tussen zacht en hard solderen?`, achter: `Zacht solderen smelt onder ongeveer 450 °C, hard solderen (brazeren) daarboven.` },
    { voor: `Welke soldeermethode is voor een koperen gasleiding gangbaar?`, achter: `Hard solderen; zacht solderen is voor gas niet gebruikelijk en wordt afgekeurd.` },
    { voor: `Wat doe je voordat je een pers- of knelfitting op de buis schuift?`, achter: `De insteekdiepte op het buiseinde aftekenen.` },
    { voor: `Wat is SC-Contur bij een Viega-persfitting?`, achter: `Een systeem dat een per ongeluk niet-geperste verbinding tijdens de drukproef (0,1 tot 0,65 MPa) zichtbaar laat lekken.` },
    { voor: `Welke Gastec QA-keur geldt voor een knelfitting voor koperen buis?`, achter: `KE 35.` },
    { voor: `Welke Gastec QA-keur geldt voor een persfitting voor koperen buis?`, achter: `KE 186.` },
    { voor: `Wanneer test je een pers- of knelverbinding op een lek?`, achter: `Voor je de leiding wegwerkt, niet erna.` }
  ],
  bronnen: ['LEI-02', 'LEI-03', 'LEI-28', 'LEI-29', 'LEI-30', 'LEI-31', 'LEI-32', 'LEI-34', 'LEI-35']
},

/* ------------------------------------------------------------------ 12.5 */
{
  id: 'm12l05',
  nr: '12.5',
  titel: 'Kunststof en meerlagenbuis voor water en gas',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt kunststof en meerlagenbuis voor water en gas toepassen, verbinden en afmonteren volgens de fabrikantvoorschriften.',
  videos: [
    { taal: 'nl', titel: 'Installatie van een knel meerlagensysteem (Comap)', yt: 'jKU-gUbaxIE', duur: '±2 min, 2018' },
    { taal: 'nl', titel: 'Waterleiding persen met handperstang Uponor (Evert Reitsma)', yt: 'ewSjHYNBuhs', duur: '±5 min, 2022' },
    { taal: 'en', titel: 'Installation of a multilayer press-fit system (Comap)', yt: 'ThncTGgrOB4', duur: '±3 min, 2018' }
  ],
  tekst: `
## Wat een meerlagenbuis is en waarom hij zo populair is

Een meerlagenbuis (ook alupex of composietbuis genoemd) bestaat uit een kunststof binnenlaag, een aluminium kernlaag en een kunststof buitenlaag. De aluminium laag maakt de buis vormvast, voorkomt zuurstofdiffusie (belangrijk om corrosie in een cv-installatie te beperken) en geeft een lagere lineaire uitzetting dan een buis van alleen kunststof. Die combinatie van buigzaamheid (geen soldeerwerk, minder fittingen nodig in een lange route) en stevigheid maakt meerlagenbuis populair voor drinkwater en cv.

!!! kern Niet elke meerlagenbuis mag voor gas
Meerlagenbuis die geschikt is voor gas is te herkennen aan een gele kleur of een duidelijke gele markering, en moet het Gastec QA-keurmerk voor gas dragen (KE 198 binnenshuis of KE 212 buitenshuis). Een gewone (niet-gele) meerlagenbuis voor water of cv heeft die keuring niet en is niet zonder meer geschikt voor gas, ook al ziet de buis er verder identiek uit.
!!!

## Drukklasse en temperatuur: per systeem verschillend

De maximale werkdruk en temperatuur van meerlagenbuis zijn geen vast getal dat voor elk merk geldt: ze verschillen per systeem. Twee voorbeelden van gasgeschikte meerlagenbuis laten dat verschil goed zien:

| Systeem (voorbeeld) | Toepassing | Maximale werkdruk |
|---|---|---|
| Henco Alupex GAS (gele meerlagenbuis) | Aardgas | 5 bar |
| Uponor GAS SACP | Aardgas (H- en L-gas) | 100 mbar |

Beide systemen zijn voor aardgas gecertificeerd, maar met een heel andere maximale werkdruk. Voor drinkwater en cv geldt eveneens dat elk merk zijn eigen drukklasse en temperatuurgrens heeft: bijvoorbeeld Rehau RAUTITAN tot 95 °C en 10 bar. Ga bij een onbekend systeem dus nooit uit van "meerlagenbuis kan altijd tot ongeveer zoveel bar": lees de fabrikantspecificatie van het systeem dat je in handen hebt.

## Verbindingen: alleen het eigen systeem

Meerlagenbuis wordt met een knel- of persfitting verbonden, altijd van hetzelfde systeem en dezelfde fabrikant als de buis. Een Uponor GAS-installatie wordt bijvoorbeeld uitsluitend met de bijbehorende Uponor GAS Plus-persfittingen gemaakt, nooit met een knelkoppeling van een ander merk. Voor het buigen van de buis gebruik je de hand of het buiggereedschap dat de fabrikant voorschrijft.

## Brandveiligheid: de doorvoer, niet alleen de buis

Een kunststof of meerlagenbuis die door een wand of vloer met een brandwerendheidseis gaat, wordt afgedicht met een brandmanchet: een stalen band met een opzwellend materiaal dat bij een temperatuur vanaf ongeveer 140 °C uitzet. Zonder die manchet smelt de kunststof buis bij brand weg en laat een open gat achter waar vuur en rook doorheen kunnen, ook als de rest van de wand of vloer wel brandwerend is.

!!! gevaar Een gasleiding door een brandscheiding zonder afdichting
Een leidingdoorvoer voor gas door een brandscheiding zonder de juiste, voor die toepassing beproefde afdichting ondermijnt de brandveiligheid van het hele compartiment: bij brand verspreidt vuur en rook zich dan via precies de opening die de scheiding had moeten tegenhouden. Gebruik altijd een voor de toepassing beproefde voorziening (bijvoorbeeld een brandmanchet volgens NEN-EN 1366-3) en nooit een dichting op eigen inschatting.
!!!

## Praktijkgeval: welk systeem kies je?

Een klant wil een keukenblok verplaatsen en de gasleiding naar het fornuis mee laten verhuizen, met een korte doorvoer door een niet-brandwerende binnenmuur. Je overweegt Henco Alupex GAS of Uponor GAS SACP. Beide zijn Gastec QA-gekeurd voor aardgas, maar Henco Alupex GAS gaat tot 5 bar en Uponor GAS SACP tot 100 mbar. Voor een woninginstallatie op de gebruikelijke lage druk maakt dat verschil in de praktijk vaak niet uit voor de werkdruk zelf, maar wel voor de fittingen en het gereedschap dat je nodig hebt: die zijn per systeem eigen, dus de keuze bepaalt ook welk gereedschap je aanschaft of al in huis hebt.
`,
  checklist: [
    'Ik herken gasgeschikte meerlagenbuis aan de gele kleur of markering en het Gastec QA-keurmerk (KE 198 of KE 212)',
    'Ik zoek de maximale werkdruk en temperatuur op in de fabrikantspecificatie van het gebruikte systeem, in plaats van een algemene waarde aan te nemen',
    'Ik gebruik alleen fittingen van hetzelfde systeem en dezelfde fabrikant als de buis',
    'Ik dicht een leidingdoorvoer door een brandscheiding af met een voor die toepassing beproefde voorziening'
  ],
  quiz: [
    {
      vraag: `Waaraan herken je meerlagenbuis die geschikt is voor gas?`,
      opties: [
        `Aan een gele kleur of gele markering, met een Gastec QA-keurmerk voor gas (KE 198 of KE 212)`,
        `Aan een grotere diameter dan bij buis voor drinkwater, die altijd smaller wordt gemaakt`,
        `Aan een stevigere aluminium kern, die altijd goed zichtbaar is aan de buitenkant van de buis`,
        `Er is geen zichtbaar verschil te zien: dat is alleen af te leiden uit de typeaanduiding op de verpakking`
      ],
      goed: 0,
      uitleg: `Gasgeschikte meerlagenbuis is te herkennen aan een gele kleur of gele markering en moet het Gastec QA-keurmerk voor gas dragen. Diameter en de aluminium kern zeggen niets over geschiktheid voor gas.`
    },
    {
      vraag: `Waarom mag je een Uponor GAS-buis niet met een knelkoppeling van een ander merk verbinden?`,
      opties: [
        `Omdat knelkoppelingen in het algemeen verboden zijn voor elke vorm van gasleiding, ongeacht het gebruikte materiaal`,
        `Omdat een knelkoppeling van een ander merk toevallig bijna altijd een net iets verkeerde diameter heeft voor deze specifieke buis`,
        `Omdat Uponor GAS uitsluitend met de bijbehorende Uponor GAS Plus-persfittingen wordt verbonden, niet met knelkoppelingen`,
        `Omdat knelkoppelingen uitsluitend voor koperbuis bestaan en voor helemaal niets anders geschikt zijn`
      ],
      goed: 2,
      uitleg: `Voor dit specifieke systeem schrijft de fabrikant uitsluitend de eigen persfittingen voor, geen knelkoppeling. Dat is een voorschrift van dit systeem, geen algemeen verbod op knelkoppelingen voor gas (zie les 12.4, KE 35), en diameter is niet de kern van het probleem.`
    },
    {
      vraag: `Henco Alupex GAS heeft een maximale werkdruk van 5 bar, Uponor GAS SACP van 100 mbar. Wat leer je daaruit?`,
      opties: [
        `Dat een van de twee systemen, ondanks de aanwezige officiele keuring, blijkbaar toch eigenlijk niet echt gasgeschikt zou zijn`,
        `Dat 100 mbar en 5 bar, ondanks het cijferverschil, in de praktijk gewoon hetzelfde zouden zijn`,
        `Dat Uponor GAS SACP eigenlijk alleen voor drinkwater bedoeld zou zijn en niet voor gas`,
        `Dat de maximale werkdruk van gasgeschikte meerlagenbuis per systeem verschilt, en je die dus per systeem moet opzoeken`
      ],
      goed: 3,
      uitleg: `Beide systemen zijn gasgeschikt, maar met een heel verschillende maximale werkdruk. Dat toont precies waarom je de specificatie per systeem moet opzoeken in plaats van een algemene waarde aan te nemen. 100 mbar en 5 bar zijn niet gelijk (5 bar is 5000 mbar), en Uponor GAS SACP is wel voor gas bedoeld, niet voor drinkwater.`
    },
    {
      vraag: `Waarom heeft een kunststof gasleiding door een brandscheiding een brandmanchet nodig?`,
      opties: [
        `Omdat de kunststof buis bij brand wegsmelt en zonder afdichting een open gat achterlaat waar vuur en rook doorheen kunnen`,
        `Om de kunststof leiding vooral en uitsluitend tegen de inwerking van UV-licht en zoninstraling op de langere termijn te beschermen`,
        `Om condensvorming binnen in de leiding op de lange duur te voorkomen`,
        `Om de doorstroomcapaciteit van de leiding op die ene plek juist te vergroten`
      ],
      goed: 0,
      uitleg: `Een kunststof buis smelt bij brand weg; zonder een brandmanchet met opzwellend materiaal blijft er een open gat in de brandscheiding over. UV-bescherming, condens en doorstroomcapaciteit hebben hier niets mee te maken.`
    },
    {
      vraag: `Wat maakt de aluminium kernlaag van een meerlagenbuis functioneel belangrijk voor een cv-installatie?`,
      opties: [
        `Ze maakt de buis vooral een stuk lichter dan een buis van puur kunststof`,
        `Ze voorkomt zuurstofdiffusie, wat corrosie in de installatie kan bevorderen, en maakt de buis vormvast met een lagere uitzetting`,
        `Ze zorgt ervoor dat de buis elektrisch geleidend wordt, wat verplicht is voor elke cv-leiding zonder enige uitzondering of vrijstelling`,
        `Ze maakt de buis eenvoudigweg een stuk goedkoper dan koperbuis van dezelfde maat`
      ],
      goed: 1,
      uitleg: `De aluminium kern voorkomt zuurstofdiffusie en geeft de buis vormvastheid met een lagere lineaire uitzetting dan bij pure kunststof. Gewicht en prijs zijn geen kernfunctie van de aluminium laag, en elektrische geleiding is voor een cv-leiding geen eis.`
    }
  ],
  kaarten: [
    { voor: `Waaruit bestaat een meerlagenbuis?`, achter: `Een kunststof binnenlaag, een aluminium kernlaag en een kunststof buitenlaag.` },
    { voor: `Waaraan herken je gasgeschikte meerlagenbuis?`, achter: `Aan een gele kleur of gele markering, met Gastec QA-keur KE 198 (binnenshuis) of KE 212 (buitenshuis).` },
    { voor: `Noem twee voorbeelden van gasgeschikte meerlagenbuis met een verschillende maximale werkdruk.`, achter: `Henco Alupex GAS (5 bar) en Uponor GAS SACP (100 mbar).` },
    { voor: `Met welke fittingen verbind je een Uponor GAS-buis?`, achter: `Uitsluitend met de bijbehorende Uponor GAS Plus-persfittingen, nooit met een knelkoppeling van een ander merk.` },
    { voor: `Wat doet een brandmanchet bij een kunststof leiding door een brandscheiding?`, achter: `Zet bij verhitting uit en drukt de opening dicht die ontstaat als de kunststof buis wegsmelt.` },
    { voor: `Waarom voorkomt de aluminium kern van een meerlagenbuis corrosie in een cv-installatie?`, achter: `Ze voorkomt zuurstofdiffusie door de buiswand.` }
  ],
  bronnen: ['LEI-02', 'LEI-09', 'LEI-37', 'LEI-38', 'LEI-39', 'LEI-40', 'LEI-41', 'LEI-42', 'LEI-44']
},

/* ------------------------------------------------------------------ 12.6 */
{
  id: 'm12l06',
  nr: '12.6',
  titel: 'Afvoersystemen en PVC: verlijmen en monteren',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt een afvoersysteem van PVC verlijmen en monteren met het juiste afschot en de juiste ondersteuning.',
  videos: [
    { taal: 'nl', titel: 'Hoe PVC buizen verlijmen? (Soudal)', yt: 'GOEHf16aqW8', duur: '±1 min, 2024' },
    { taal: 'nl', titel: 'Instructiefilm PVC lijmen (Ron Baets)', yt: 'uviC-BBA5JY', duur: '±3 min, 2020' },
    { taal: 'en', titel: 'How to prime and glue PVC pipe (Mr Fred\'s DIY Garage School)', yt: 'mc-uQw8NENg', duur: '±3 min, 2022' }
  ],
  tekst: `
## Waarom binnenriolering meer is dan "een buis naar het riool"

Een afvoersysteem moet twee dingen tegelijk goed doen: het afvalwater afvoeren zonder verstopping, en de lucht in het systeem laten stromen zonder dat een waterslot leeggezogen of teruggeslagen wordt. NEN 3215 is de norm die dat voor de binnenriolering van een woning regelt: afschot, aansluitingen en beluchting.

!!! kern Elk lozingstoestel heeft een sifon met waterslot
Elk lozingstoestel (wastafel, closet, douche, en ook de condensafvoer van een cv-ketel) dat op de binnenriolering is aangesloten, heeft een stankafsluiter (sifon) met een waterslot van minimaal 50 mm. Dat waterslot biedt weerstand tegen drukschommelingen in het rioleringsstelsel en houdt riooldamp en -lucht buiten de ruimte. Sluit een condensafvoer dus nooit rechtstreeks op de riolering aan: zonder sifon ontstaat een open verbinding met het riool.
!!!

## Afschot en lengte van een toestelleiding

Een toestelleiding (de leiding van één lozingstoestel naar de standleiding of verzamelleiding) heeft een minimaal afschot van 1:200 (5 mm per meter) en een maximale ontwikkelde lengte van 3,5 meter. De overgang van een staand naar een liggend deel gebeurt bij een buisdiameter van 50 mm of kleiner met twee bochten van 45 graden of een vergelijkbare stromingsbocht, niet met een scherpe haakse bocht.

## Beugelafstand: hoe groter de diameter, hoe verder uit elkaar

Bij PVC- of PP-afvoerleidingen is de maximale beugelafstand voor een horizontale leiding 10 keer de buisdiameter, met een maximum van 2,5 meter; voor een verticale standleiding is dat 30 keer de buisdiameter, met een maximum van 1,8 meter. Per verdiepingshoogte horen minimaal 2 geleidebeugels en een vast punt aanwezig te zijn.

## Rekenvoorbeeld: de beugelafstand van een afvoerleiding

Je legt een horizontale PVC-afvoerleiding van 110 mm diameter.

| Grootheid | Waarde | Berekening |
|---|---|---|
| Diameter | 110 mm | Gegeven |
| 10 x diameter | 1100 mm = 1,1 m | 10 x 110 mm |
| Maximum uit de tabel | 2,5 m | Plafondwaarde, hier niet van toepassing |
| Toe te passen beugelafstand | 1,1 m | Het kleinste van de twee waarden geldt |

Bij een kleinere diameter (bijvoorbeeld 40 mm) zou 10 keer de diameter maar 400 mm zijn: bij grotere diameters loop je sneller tegen de maximumwaarde van 2,5 m aan dan bij kleine.

## Het verlijmen van een PVC mof-spieverbinding

Het verlijmen van PVC gaat in vaste stappen: het buiseind haaks afkorten, inwendig en uitwendig afbramen, de insteeklengte op het buiseind aftekenen, de lijmvlakken van mof en buis met PVC-reiniger ontvetten, de buis dun instrijken en de mof dun aan de binnenzijde, de buis snel en zonder te stoppen tot aan de markering in de mof schuiven zodat er een lijmrand rondom zichtbaar is, en die overtollige lijm afvegen.

!!! gevaar PVC-lijm is brandbaar en de damp is explosief
Bij het lijmen mag je niet roken of met open vuur werken, moet je goed ventileren en vloeistofdichte handschoenen en een veiligheidsbril gebruiken. Dit is geen overdreven voorzichtigheid: de damp van PVC-lijm is daadwerkelijk explosief in een afgesloten ruimte.
!!!

De droogtijd van een PVC-lijmverbinding hangt sterk af van de temperatuur: bij 15 tot 40 °C minimaal 1 uur, bij 5 tot 15 °C minimaal 2 uur, en onder 5 °C mag in de regel niet worden gelijmd. Belast de verbinding niet voor die tijd voorbij is: de uiteindelijke sterkte van de verbinding wordt zelfs pas na enkele weken bereikt. Een te ruime passing tussen buis en mof vraagt een tweede laag lijm; een lichte negatieve passing (net iets te strak) geeft de beste en snelste verlijming, en een rammelende (te losse) passing is niet geschikt voor een lijmverbinding.

## Praktijkgeval: verlijmen bij lage temperatuur

Je moet in een onverwarmde nieuwbouwwoning in de winter een PVC-afvoerleiding lijmen; het is 3 °C in de ruimte. Wat doe je?

Bij een temperatuur onder 5 °C mag je in de regel niet lijmen zonder extra maatregelen. Verwarm de ruimte tijdelijk (bijvoorbeeld met een bouwverwarmer) tot boven de 5 °C, of stel het werk uit tot een warmer moment. Ga je toch door zonder de temperatuur te verhogen, dan loop je het risico dat de lijm niet goed uithardt en de verbinding later gaat lekken, zonder dat je dat op het moment van lijmen ziet.
`,
  checklist: [
    'Ik sluit elk lozingstoestel, inclusief de condensafvoer van een cv-ketel, aan via een sifon met een waterslot van minimaal 50 mm',
    'Ik houd bij een toestelleiding een afschot van minimaal 1:200 aan en blijf onder de maximale lengte van 3,5 m',
    'Ik bepaal de beugelafstand met 10 keer de diameter (horizontaal) of 30 keer de diameter (verticaal), tot het genoemde maximum',
    'Ik verlijm PVC alleen bij een temperatuur boven 5 °C, of neem extra maatregelen als dat niet kan',
    'Ik rook niet en werk niet met open vuur tijdens het lijmen van PVC'
  ],
  quiz: [
    {
      vraag: `Waarom heeft elk lozingstoestel, ook de condensafvoer van een cv-ketel, een sifon met waterslot nodig?`,
      opties: [
        `Om het afvalwater gewoon een stuk sneller te laten stromen naar het riool`,
        `Om vooral vaste deeltjes zoals haar en vet uit het afvoerwater te filteren`,
        `Om weerstand te bieden tegen drukschommelingen in het rioleringsstelsel en riooldamp buiten de ruimte te houden`,
        `Om de aansluitleiding zelf een stuk korter te kunnen uitvoeren`
      ],
      goed: 2,
      uitleg: `Een sifon met waterslot (minimaal 50 mm) biedt weerstand tegen drukschommelingen en houdt riooldamp buiten. Snelheid van de afvoer, filtering en leidinglengte zijn geen functie van de sifon.`
    },
    {
      vraag: `Wat is het minimale afschot van een toestelleiding volgens de gangbare praktijk?`,
      opties: [`1:20, veel steiler dan gangbaar`, `1:50, ook nog steiler dan nodig`, `1:100, nog steeds steiler dan het minimum`, `1:200`],
      goed: 3,
      uitleg: `Een toestelleiding heeft een minimaal afschot van 1:200 (5 mm per meter). 1:20 en 1:50 zijn veel steiler dan nodig of gangbaar, en 1:100 is ook steiler dan het genoemde minimum.`
    },
    {
      vraag: `Je legt een horizontale PVC-afvoerleiding van 63 mm diameter. Wat is de maximale beugelafstand volgens de regel "10 keer de diameter, met een maximum van 2,5 m"?`,
      opties: [`0,63 m`, `1,8 m, de maximumwaarde voor een standleiding`, `2,5 m, de plafondwaarde die hier niet geldt`, `6,3 m, een rekenfout met de diameter`],
      goed: 0,
      uitleg: `10 x 63 mm = 630 mm = 0,63 m, en dat is kleiner dan het maximum van 2,5 m, dus geldt 0,63 m. 1,8 m is de maximumwaarde voor een verticale standleiding, 2,5 m is de plafondwaarde voor horizontale leidingen (die hier niet bereikt wordt) en 6,3 m zou een rekenfout met de diameter in meters zijn.`
    },
    {
      vraag: `Bij het verlijmen van een PVC mof-spieverbinding schuif je de buis tot aan de eerder aangebrachte markering. Waarom teken je die markering vooraf af?`,
      opties: [
        `Om, naar men zou kunnen denken, te onthouden welke lijmsoort er precies gebruikt is bij deze verbinding`,
        `Om te zorgen dat de buis met de juiste insteeklengte in de mof komt, zodat de verbinding voldoende overlap heeft`,
        `Om alleen de kleur van de gebruikte buis nog eens goed te controleren`,
        `Om achteraf het gewicht van het afgekorte stuk buis te kunnen bepalen`
      ],
      goed: 1,
      uitleg: `De markering laat zien hoe ver de buis in de mof moet, zodat de verbinding de juiste overlap (insteeklengte) krijgt. Lijmsoort, kleur en gewicht hebben hier niets mee te maken.`
    },
    {
      vraag: `Je moet PVC lijmen in een onverwarmde ruimte van 3 °C. Wat is de juiste aanpak?`,
      opties: [
        `Gewoon doorgaan, want de temperatuur heeft geen enkele invloed op het uitharden van PVC-lijm`,
        `Meer lijm gebruiken dan normaal, om zo de lage temperatuur van de ruimte te compenseren`,
        `Alleen de buis zelf verwarmen met een föhn en daarna verder helemaal normaal doorlijmen`,
        `De ruimte tijdelijk verwarmen tot boven 5 °C of het werk uitstellen, want onder 5 °C mag in de regel niet zonder extra maatregelen worden gelijmd`
      ],
      goed: 3,
      uitleg: `Onder 5 °C mag in de regel niet worden gelijmd zonder extra maatregelen; de ruimte verwarmen of het werk uitstellen is de juiste aanpak. Meer lijm gebruiken lost het temperatuurprobleem niet op, en te veel lijm in de mof geeft juist een risico op baardvorming en verstopping.`
    },
    {
      vraag: `Waarom mag je niet roken of met open vuur werken tijdens het verlijmen van PVC?`,
      opties: [
        `Omdat PVC-lijm brandbaar is en de damp explosief kan zijn`,
        `Omdat de lijm daardoor juist een stuk sneller opdroogt dan gewenst is`,
        `Omdat rook de uiteindelijke kleur van de lijmverbinding aantast`,
        `Omdat een brandende sigaret per ongeluk de hele lijmbus zou kunnen omstoten`
      ],
      goed: 0,
      uitleg: `PVC-lijm is brandbaar en de damp is explosief: dat is de reden voor het rook- en vuurverbod tijdens het lijmen, niet de droogtijd, de kleur of een omgestoten bus.`
    }
  ],
  kaarten: [
    { voor: `Wat is de minimale hoogte van het waterslot van een sifon?`, achter: `50 mm.` },
    { voor: `Wat is het minimale afschot van een toestelleiding?`, achter: `1:200 (5 mm per meter).` },
    { voor: `Wat is de maximale ontwikkelde lengte van een toestelleiding?`, achter: `3,5 meter.` },
    { voor: `Wat is de maximale beugelafstand voor een horizontale PVC/PP-afvoerleiding?`, achter: `10 keer de buisdiameter, met een maximum van 2,5 m.` },
    { voor: `Wat is de maximale beugelafstand voor een verticale standleiding van PVC/PP?`, achter: `30 keer de buisdiameter, met een maximum van 1,8 m.` },
    { voor: `Vanaf welke temperatuur mag je in de regel niet meer zonder extra maatregelen PVC lijmen?`, achter: `Onder 5 °C.` },
    { voor: `Waarom sluit je een condensafvoer van een cv-ketel nooit rechtstreeks op de riolering aan?`, achter: `Zonder sifon ontstaat een open verbinding met het riool, met kans op stank- en gasoverlast.` }
  ],
  bronnen: ['LEI-46', 'LEI-47', 'LEI-48', 'LEI-49', 'LEI-52', 'LEI-53', 'LEI-54', 'LEI-55', 'LEI-57']
},

/* ------------------------------------------------------------------ 12.7 */
{
  id: 'm12l07',
  nr: '12.7',
  titel: 'Radiatoren en cv-leidingwerk monteren',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt radiatoren en cv-leidingwerk monteren, aansluiten en ondersteunen met de juiste beugelafstand en ruimte voor uitzetting.',
  videos: [
    { taal: 'nl', titel: 'Radiator ophangen en aansluiten voor beginners, deel 2-3 (Loodgieter Den Haag Stad)', yt: 'DUpCiEo895g', duur: '±5 min, 2023' },
    { taal: 'nl', titel: 'Een verwarmingsradiator aansluiten (Loodgieter Den Haag Stad)', yt: 'gYAEgt_PjBw', duur: '±13 min, 2021' },
    { taal: 'en', titel: 'Installing copper pipework to a radiator (London Trade College)', yt: 'PVYgG95dk9U', duur: '±21 min, 2022' }
  ],
  tekst: `
## Beugelen: waarom de afstand per materiaal en diameter verschilt

Een cv-leiding die niet goed ondersteund is, gaat na verloop van tijd doorzakken, tikken of trillen. Hoe groot de afstand tussen twee beugels mag zijn, hangt af van het materiaal en de diameter: hoe groter de diameter en hoe stijver het materiaal, hoe minder snel de leiding tussen twee steunpunten doorbuigt, en hoe verder de beugels uit elkaar mogen.

| Materiaal | Diameter | Maximale bevestigingsafstand (voorbeeld) |
|---|---|---|
| Stalen draadbuis | 1/4 inch (13,5 mm) | ongeveer 1,5 m |
| Stalen draadbuis | 1/2 inch (21,3 mm) | ongeveer 2,75 m |
| Koperbuis | 15 mm (18,0 mm buitendiameter) | ongeveer 1,5 m |
| Koperbuis | 22 mm | ongeveer 2,0 m |

Dit zijn voorbeeldwaarden uit een technische tabel van een leveranciersbron, gebaseerd op de normen voor deze buismaterialen; de exacte eis kan per leveranciersvoorschrift of vakrichtlijn afwijken.

!!! kern Beugelen is geen kwestie van "ergens tussenin"
Een leiding die je te ver uit elkaar beugelt, gaat doorzakken; een leiding die je onnodig dicht op elkaar beugelt, kost extra materiaal en werk zonder functioneel voordeel. Gebruik de leveranciersvoorschriften van het gebruikte leidingsysteem als uitgangspunt, in plaats van "op het oog" te bepalen waar de volgende beugel komt.
!!!

## Uitzetting: waarom een lange rechte leiding ruimte nodig heeft

Een cv-leiding zet bij opwarming uit. De lineaire uitzettingscoëfficiënt van staal is ongeveer 12 x 10⁻⁶ per graad Celsius (12 micrometer per meter per graad); koper zet iets meer uit dan staal. Een meerlagenbuis met een aluminium kern zet door die kern minder uit dan een leiding van alleen kunststof, maar nog steeds meer dan metaal. Bij een lange rechte leiding moet je met die uitzetting rekening houden, bijvoorbeeld met een vast punt en glijpunten, of door de leiding niet volledig strak te bevestigen zodat hij zich een klein beetje kan verplaatsen.

## Rekenvoorbeeld: hoeveel zet een stalen leiding uit?

Een stalen cv-leiding van 8 meter lang warmt op van 15 °C (koud) naar 70 °C (aanvoertemperatuur), een temperatuurstijging van 55 K.

| Grootheid | Waarde | Berekening |
|---|---|---|
| Lengte | 8 m = 8000 mm | Gegeven |
| Uitzettingscoëfficiënt staal | 12 x 10⁻⁶ per K | Materiaalconstante |
| Temperatuurstijging | 55 K | 70 - 15 |
| Lengtetoename | 8000 x 12 x 10⁻⁶ x 55 ≈ 5,3 mm | Uitzetting over de volle lengte |

Ruim 5 mm lijkt weinig, maar zonder een vast punt en glijpunten drukt die uitzetting tegen de bevestiging aan, wat op termijn tikkende geluiden of een beschadigde beugel kan geven.

## Radiatoren monteren: beugels, aansluiting en ontluchten

Een radiator wordt met muurbeugels of consoles bevestigd; de fabrikant van de radiator schrijft het aantal en de plaats van de beugels voor op basis van het gewicht en de afmeting van dat model. De exacte hoogte boven de vloer en de afstand tot de vensterbank verschillen per fabrikant en model en staan in de montagehandleiding van dat toestel: neem geen vaste maat uit een andere installatie over zonder de handleiding van dit model te checken.

Na het aansluiten van de voer- en retourleiding wordt de radiator ontlucht voordat de installatie op temperatuur wordt gebracht: lucht in de radiator vermindert de warmteafgifte en kan tikkende geluiden geven. Het afvullen en ontluchten van de hele cv-installatie na het aansluiten van de ketel zelf komt in module 5 en 13 aan de orde.

!!! kern Bescherm leidingwerk in vloer of muur tegen beschadiging en corrosie
Cv-leidingwerk dat in of onder de vloer of in een muur wordt aangelegd, wordt beschermd tegen mechanische beschadiging (bijvoorbeeld met een mantelbuis of voldoende afdekking) en tegen corrosie waar het door beton of metselwerk loopt. Dit is hetzelfde principe als bij de bescherming van een gasleiding: eenmaal ingestort of ingemetseld kun je een beschadiging niet meer zien voor hij een lek geeft.
!!!

## Praktijkgeval: radiator die tikt na montage

Je hebt een radiator aangesloten met een lange, strak bevestigde koperen aanvoerleiding van 6 meter. Na een paar weken meldt de klant een tikkend geluid zodra de verwarming aanslaat. Wat is een waarschijnlijke oorzaak en wat controleer je?

1. Controleer of de leiding een vast punt en voldoende glijruimte heeft, of dat hij over de volle lengte strak vastgezet is: bij opwarming kan een strak bevestigde leiding niet uitzetten zonder tegen de bevestiging te drukken, wat een tikkend geluid geeft.
2. Controleer of de radiator zelf goed ontlucht is: lucht in het systeem kan ook geluid geven, maar dan meer een borrelend dan een tikkend geluid.
3. Pas de bevestiging aan (bijvoorbeeld een beugel iets losser, of een vast punt op één plek met glijpunten elders) in plaats van de leiding volledig te vervangen: het probleem zit in de bevestiging, niet in het materiaal zelf.
`,
  checklist: [
    'Ik bepaal de beugelafstand aan de hand van materiaal en diameter, en gebruik het leveranciersvoorschrift als dat er is',
    'Ik houd bij een lange rechte cv-leiding rekening met uitzetting, met een vast punt en glijpunten',
    'Ik gebruik de montagehandleiding van het specifieke radiatormodel voor hoogte en beugelafstand, niet een maat uit een andere installatie',
    'Ik ontlucht een radiator na aansluiting voordat de installatie op temperatuur komt',
    'Ik bescherm leidingwerk in vloer of muur tegen mechanische beschadiging en corrosie'
  ],
  quiz: [
    {
      vraag: `Waarom mag de beugelafstand van een leiding met een grotere diameter meestal groter zijn dan bij een kleinere diameter van hetzelfde materiaal?`,
      opties: [
        `Omdat een grotere diameter minder snel doorbuigt tussen twee steunpunten`,
        `Omdat een grotere diameter minder weegt dan een kleinere`,
        `Omdat een grotere diameter minder warmte afgeeft en dus minder ondersteuning nodig heeft`,
        `De beugelafstand is voor elke diameter van hetzelfde materiaal gelijk`
      ],
      goed: 0,
      uitleg: `Een grotere diameter buigt minder snel door tussen twee steunpunten, waardoor de beugelafstand groter mag zijn. Een grotere diameter weegt juist meer, niet minder, en warmteafgifte heeft niets met de beugelafstand te doen.`
    },
    {
      vraag: `Een stalen cv-leiding van 10 meter warmt op van 15 °C naar 70 °C (temperatuurstijging 55 K). De uitzettingscoëfficiënt van staal is ongeveer 12 x 10⁻⁶ per K. Hoeveel zet de leiding ongeveer uit?`,
      opties: [`Ongeveer 0,7 mm`, `Ongeveer 12 mm`, `Ongeveer 66 mm`, `Ongeveer 6,6 mm`],
      goed: 3,
      uitleg: `10.000 mm x 12 x 10⁻⁶ x 55 ≈ 6,6 mm. 0,7 mm zou horen bij een veel kortere leiding of kleinere temperatuurstijging, 12 mm is alleen de coëfficiënt in micrometer per meter zonder de lengte en temperatuur mee te rekenen, en 66 mm is een factor 10 te veel.`
    },
    {
      vraag: `Waarom kan een lange, volledig strak bevestigde koperen leiding gaan tikken zodra de verwarming aanslaat?`,
      opties: [
        `Omdat koper bij opwarming juist krimpt in plaats van uitzet, net als de meeste andere metalen bij afkoeling doen`,
        `Omdat de leiding bij opwarming uitzet en, zonder vast punt en glijruimte, tegen de strakke bevestiging aan drukt`,
        `Omdat koper alleen tikt wanneer de radiator zelf defect is`,
        `Omdat een strakke bevestiging vooral de doorstroming door de leiding vermindert`
      ],
      goed: 1,
      uitleg: `Bij opwarming zet de leiding uit; zonder ruimte om te bewegen (vast punt plus glijpunten) drukt die uitzetting tegen een volledig strakke bevestiging, wat een tikkend geluid geeft. Koper zet uit, krimpt niet, bij verwarming, en dit heeft niets met een defecte radiator of de doorstroming te maken.`
    },
    {
      vraag: `Waarom controleer je voor de exacte montagehoogte van een radiator altijd de handleiding van dat specifieke model, in plaats van een maat over te nemen van een andere installatie?`,
      opties: [
        `Omdat elke radiator wettelijk op precies dezelfde hoogte moet hangen`,
        `Omdat de hoogte van een radiator uitsluitend decoratief is en geen enkele technische betekenis heeft voor het gewicht of de bevestiging`,
        `Omdat de fabrikant de hoogte en beugelafstand baseert op het gewicht en de afmeting van dat specifieke model, wat per model verschilt`,
        `Omdat elke radiator precies dezelfde beugels gebruikt, ongeacht het gewicht`
      ],
      goed: 2,
      uitleg: `Gewicht en afmeting verschillen per model, en de fabrikant stemt de montage-instructie daarop af. Er is geen wettelijke, voor elk model gelijke hoogte, de hoogte is niet louter decoratief, en beugels zijn niet voor elk model identiek.`
    },
    {
      vraag: `Waarom wordt cv-leidingwerk dat in een muur of onder de vloer wordt aangelegd, beschermd tegen mechanische beschadiging en corrosie?`,
      opties: [
        `Omdat een beschadiging na het instorten of inmetselen niet meer te zien is voordat hij een lek geeft`,
        `Omdat beschermde leiding aanzienlijk minder warmte verliest dan onbeschermde leiding, wat de stooklasten flink verlaagt`,
        `Omdat onbeschermde leiding altijd binnen een jaar breekt`,
        `Omdat dit principe alleen voor gasleiding geldt en toevallig ook bij cv wordt toegepast`
      ],
      goed: 0,
      uitleg: `Eenmaal ingestort of ingemetseld is een beschadiging aan de leiding niet meer zichtbaar voordat hij een lek geeft, dus bescherming vooraf is essentieel. Warmteverlies en een vaste levensduur van "binnen een jaar" zijn hier niet de reden, en het principe geldt voor leidingwerk in het algemeen, niet uitsluitend voor gas.`
    }
  ],
  kaarten: [
    { voor: `Waarom mag een grotere diameter verder uit elkaar gebeugeld worden?`, achter: `Omdat hij minder snel doorbuigt tussen twee steunpunten.` },
    { voor: `Wat is de lineaire uitzettingscoëfficiënt van staal, ongeveer?`, achter: `Ongeveer 12 x 10⁻⁶ per graad Celsius (12 micrometer per meter per graad).` },
    { voor: `Waarom heeft een lange rechte cv-leiding een vast punt en glijpunten nodig?`, achter: `Om ruimte te geven aan de uitzetting bij opwarming, zodat de leiding niet tegen een strakke bevestiging drukt.` },
    { voor: `Waar vind je de exacte montagehoogte en beugelafstand van een radiator?`, achter: `In de montagehandleiding van dat specifieke model: het verschilt per fabrikant en model.` },
    { voor: `Waarom ontlucht je een radiator na montage?`, achter: `Lucht in de radiator vermindert de warmteafgifte en kan tikkende geluiden geven.` },
    { voor: `Waarom bescherm je leidingwerk in een muur of onder de vloer tegen beschadiging?`, achter: `Omdat een beschadiging na het instorten of inmetselen niet meer te zien is voordat hij een lek geeft.` }
  ],
  bronnen: ['LEI-58', 'LEI-59', 'LEI-60', 'LEI-61', 'LEI-62', 'LEI-63', 'LEI-64']
}

  ]
});
