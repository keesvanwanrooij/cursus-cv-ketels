/* ==========================================================================
   m15.js - Module 15: Onderhoud
   Lessen 15.1 t/m 15.5 zijn geschreven op basis van project/docs/feiten/15-onderhoud.md (OND), met hergebruik van
   05-installeren-meten-onderhoud-storingen.md (ONT, MET, INS, STO, KLA), 01-wet-en-certificering.md (WET, EXA) en
   13-installeren-en-inbedrijfstellen.md (IBS). Voor de meetprocedure zelf verwijst deze module naar module 10, voor
   de rookgasafvoer en de sifon naar module 8 en voor het inbedrijfstellen naar module 13, in plaats van die stof te
   herhalen. Waarden per merk en model (onderhoudsinterval, aanhaalmoment, reinigingsvoorschrift, garantie) staan
   steeds als voorbeeld met merk en model erbij: altijd de handleiding van het te onderhouden toestel volgen.
   ========================================================================== */

CURSUS.addModule({
  id: 'm15',
  nr: 15,
  deel: 2,
  titel: 'Onderhoud',
  ondertitel: 'Reproduceerbaar werken in plaats van op gevoel.',
  niveau: 'Gevorderd',
  studietijd: 6,
  intro: 'De onderhoudsbeurt als vast proces: inspecteren, reinigen, slijtdelen vervangen, veiligheid controleren, meten en rapporteren. Zo werk je reproduceerbaar en vind je problemen voordat de klant ze merkt.',
  leerdoelen: [
    'Een onderhoudsbeurt als vast proces uitvoeren',
    'Brander, warmtewisselaar en sifon inspecteren en reinigen',
    'Slijtdelen herkennen en vervangen volgens de fabrikant',
    'De veiligheidsfuncties controleren en afronden met een meting',
    'De bevindingen rapporteren en de klant adviseren'
  ],
  examen: [
    {
      vraag: `Een klant heeft geen fabrikantvoorschrift meer voor het onderhoudsinterval van zijn toestel. Welke termijn valt terug volgens de BRL 6000-25?`,
      opties: [`Minimaal een keer per 12 maanden`, `Minimaal een keer per 6 maanden`, `Minimaal een keer per 24 maanden`, `Er geldt geen enkele termijn zonder fabrikantvoorschrift`],
      goed: 0,
      uitleg: `Ontbreekt een fabrikantvoorschrift, dan geldt volgens de BRL 6000-25 een onderhoudsfrequentie van minimaal een keer per 12 maanden, met de controlepunten van Bijlage 4. Dat is de enige harde termijn in het schema, en die geldt alleen bij afwezigheid van een fabrikantvoorschrift.`
    },
    {
      vraag: `Je meet bij aanvang van een onderhoudsbeurt 14 ppm CO in de opstellingsruimte. Wat is de juiste vervolgstap?`,
      opties: [`Doorwerken zonder verder onderzoek, want 14 ppm ligt onder de meldgrens van 20 ppm`, `Het toestel meteen buiten bedrijf stellen en 112 bellen`, `Nader onderzoek doen naar de oorzaak, dit melden aan de opdrachtgever en pas daarna verder werken`, `Alleen een raam openzetten en de meting daarna nooit meer herhalen, ook niet aan het einde van de onderhoudsbeurt`],
      goed: 2,
      uitleg: `Tussen 5 en 20 ppm vraagt het actiekader van de BRL 6000-25 om nader onderzoek naar de oorzaak en een melding aan de opdrachtgever, waarna het werk doorgaat. Onder de 5 ppm is er geen bezwaar, boven de 20 ppm geldt de wettelijke meldplicht aan alle betrokken partijen. 112 bellen hoort bij acuut gevaar, niet bij deze meetwaarde.`
    },
    {
      vraag: `Een Intergas Kombi Kompakt HRE en een Vaillant ecoTEC plus VHR staan naast elkaar. Wat klopt over het reinigen van de warmtewisselaar?`,
      opties: [`Beide fabrikanten verbieden elke vorm van reinigen van de warmtewisselaar`, `Bij Vaillant reinig je met water of eventueel azijn, bij Intergas reinig je de stuwstrippen met een borstel of stofzuiger`, `Bij Intergas mag je de warmtewisselaar met perslucht schoonblazen, bij Vaillant niet`, `Beide fabrikanten schrijven exact dezelfde reinigingsmethode voor`],
      goed: 1,
      uitleg: `Vaillant reinigt de warmtewisselaar met water of, indien nodig, azijn (max. 5% zuur, 20 minuten inwerktijd) en een scherpe waterstraal of kunststofborstel. Intergas reinigt de stuwstrippen en lamellen met een borstel of stofzuiger en verbiedt perslucht op de brander en de isolatieplaat. Het is dus per merk verschillend, niet identiek en niet overal verboden.`
    },
    {
      vraag: `Een Remeha Calenta Ace heeft een warmtewisselaar met een oppervlaktebehandeling aan de verbrandingszijde. Wat betekent dit voor onderhoud?`,
      opties: [`Deze warmtewisselaar mag alleen met perslucht worden schoongeblazen`, `Deze warmtewisselaar moet juist extra vaak en grondig met azijn worden gereinigd, telkens na elke afzonderlijke warmtevraag van de ketel`, `Deze warmtewisselaar vervang je bij elke onderhoudsbeurt`, `Deze warmtewisselaar hoef je juist niet te reinigen; reinigingsgereedschap, chemische middelen, perslucht en water zijn niet toegestaan`],
      goed: 3,
      uitleg: `Remeha schrijft voor de Calenta Ace expliciet voor dat de warmtewisselaar aan de verbrandingszijde niet hoeft te worden gereinigd en dat reinigingsgereedschap, chemische middelen, perslucht en water daarvoor niet zijn toegestaan. Wie hier toch gaat schoonmaken, doet iets wat de fabrikant verbiedt.`
    },
    {
      vraag: `Waarom vervangt Vaillant bij het openen van de branderflens altijd de afdichting én de zelfborgende moeren, ook als ze er nog goed uitzien?`,
      opties: [`Om garantietechnische redenen, veiligheid speelt hier geen rol`, `Omdat nieuwe onderdelen de ketel stiller maken`, `Omdat een beschadigde afdichting of moer hete verbrandingsgassen kan laten lekken, met levensgevaar tot gevolg`, `Omdat de fabrikant hiermee de onderhoudsbeurt duurder wil maken`],
      goed: 2,
      uitleg: `De handleiding waarschuwt met een gevaar-kader: als afdichting, isolatiemat of zelfborgende moeren op de branderflens beschadigd zijn, kunnen hete verbrandingsgassen lekken en tot verwondingen leiden. Daarom is het geen kwestie van "ziet er nog goed uit", maar een vaste vervangingsstap na elke keer openen.`
    },
    {
      vraag: `Een monteur wil een ionisatiestroom meten met een multimeter in serie in de ionisatieleiding, terwijl de fabrikant een uitleeswaarde op het display heeft. Wat is de juiste beoordeling?`,
      opties: [`Multimeter in serie meten is voor moderne toestellen geen Nederlandse fabrikantprocedure; lees de waarde op het display uit zoals de fabrikant vraagt`, `Dat is de voorgeschreven Nederlandse methode bij alle merken`, `Een multimeter in serie meten is verplicht bij toestellen zonder frontmantel`, `Beide methodes zijn qua betrouwbaarheid volledig gelijkwaardig en in de praktijk bij elk merk en model onderling probleemloos verwisselbaar, ongeacht wat de fabrikant voorschrijft`],
      goed: 0,
      uitleg: `Bij moderne ketels wordt de ionisatiestroom via het display uitgelezen, met een merkafhankelijke grenswaarde. Meten met een multimeter in serie in de ionisatieleiding komt alleen voor in vakforums en niet in de gelezen Nederlandse fabrikantprocedures, en kan de branderautomaat beschadigen. Volg dus de displayprocedure van de fabrikant.`
    },
    {
      vraag: `Een boilervat van roestvaststaal (RVS) heeft, in tegenstelling tot veel stalen boilervaten, geen magnesiumanode. Waarom niet?`,
      opties: [`Omdat een anode alleen in gasgestookte toestellen wordt toegepast`, `Omdat de fabrikant de anode altijd vergeet te monteren`, `Omdat een anode alleen werkt bij toestellen ouder dan 15 jaar`, `Omdat roestvaststaal van zichzelf al corrosiebestendig is en dus geen offeranode nodig heeft`],
      goed: 3,
      uitleg: `Een offeranode beschermt een stalen vat doordat het zelf corrodeert in plaats van het vat. Roestvaststaal (bijvoorbeeld de Remeha Aqua Pro of de ATAG Comfort Boiler) heeft die bescherming niet nodig door het materiaal zelf, dus schrijft de fabrikant er geen anode voor. Het is dus een materiaalkeuze, geen vergissing.`
    },
    {
      vraag: `Bij welke diameter van de magnesiumanode van een Techneco Loria Duo moet die anode worden vervangen?`,
      opties: [`Kleiner dan 20 mm`, `Kleiner dan 13 mm`, `Kleiner dan 5 mm`, `Een diametergrens bestaat niet, alleen een tijdgrens`],
      goed: 1,
      uitleg: `De fabrikant geeft een concreet keuringscriterium: de anode moet worden vervangen wanneer de diameter kleiner is dan 13 mm. Daarnaast raadt de fabrikant een jaarlijkse controle aan. Het is dus zowel een maat- als een tijdcriterium, niet alleen een tijdgrens.`
    },
    {
      vraag: `Waarom test je bij Vaillant de interne pomp, de driewegklep en de ventilator met de actortest (T.001 tot en met T.007) in plaats van meteen een warmtevraag te forceren?`,
      opties: [`Omdat je zo elk onderdeel apart aanstuurt en controleert, los van een warmtevraag, en dus gerichter kunt uitsluiten welk onderdeel niet werkt`, `Omdat een actortest sneller is dan wachten op een warmtevraag, meer niet`, `Omdat een warmtevraag forceren verboden is bij elk merk`, `Omdat de actortest de enige manier is om de gasdruk te meten`],
      goed: 0,
      uitleg: `Met de actortest stuur je een component los van een warmtevraag aan, zodat je gericht kunt vaststellen of bijvoorbeeld de pomp of de driewegklep fysiek functioneert, in plaats van te gokken op basis van het gedrag van de hele ketel. Dit is geen snelheidstruc en geen methode om gasdruk te meten.`
    },
    {
      vraag: `Een gemeten CO-waarde na onderhoud blijft boven 650 ppm onverdund, ook na het controleren van het VLT/VGA-systeem op lengte, montage en blokkade. Wat doe je volgens de vaste vervolgprocedure van Vaillant?`,
      opties: [`Meteen het gasblok vervangen`, `Het toestel zonder verdere actie vrijgeven, want 650 ppm is de wettelijke grens`, `Direct de klant factureren voor een nieuwe ketel`, `De regelelektrode vervangen en daarna opnieuw meten`],
      goed: 3,
      uitleg: `Na het controleren van het VLT/VGA-systeem is de volgende stap in de vaste procedure het vervangen van de regelelektrode, gevolgd door een nieuwe meting. Blijft de waarde dan nog te hoog, dan controleer je de verbrandingskamer en pas daarna neem je contact op met het serviceteam. Vrijgeven bij een te hoge waarde is niet toegestaan, en 650 ppm is geen wettelijke grens maar een fabrikantsignaal voor vervolgstappen.`
    },
    {
      vraag: `Wat is het verschil tussen de vakbekwaamheidseis voor een Voldoende Onderricht Persoon (VOP) en een Vakbekwaam Persoon (VP) bij groot onderhoud (brander, warmtewisselaar)?`,
      opties: [`Er is geen verschil, beide mogen groot onderhoud zelfstandig uitvoeren`, `Groot onderhoud is voorbehouden aan de VP; een VOP werkt hierbij alleen onder toezicht en verantwoordelijkheid van een VP`, `Een VOP mag groot onderhoud doen, een VP niet`, `Het verschil geldt alleen voor elektrische werkzaamheden, niet voor onderhoud`],
      goed: 1,
      uitleg: `De BRL 6000-25 legt "in bedrijf stellen", "groot onderhoud (brander, warmtewisselaar)" en "uit bedrijf nemen" vast als taken die voorbehouden zijn aan de VP; een VOP werkt hier onder toezicht en verantwoordelijkheid van een VP. Dit is waar de bevoegdheid van een instromer ophoudt, ongeacht ervaring.`
    },
    {
      vraag: `Een klant vraagt waarom zijn 16 jaar oude ketel bij onderhoud wordt afgekeurd terwijl hij "nog gewoon warm wordt". Welk antwoord past het beste bij wat het register hierover zegt?`,
      opties: [`De ketel is per definitie 16 jaar oud dus wettelijk verboden om te gebruiken`, `Een ketel van 16 jaar oud moet altijd meteen buiten bedrijf worden gesteld`, `Bij vervanging na ongeveer 15 jaar wordt ook het rookgasafvoersysteem beoordeeld en meestal vervangen; "warm worden" zegt niets over de veiligheid van de afvoer of de verbranding`, `Onderhoud heeft niets te maken met de leeftijd van een ketel`],
      goed: 2,
      uitleg: `De BRL 6000-25 (Bijlage 5) noemt vervanging van een gasverbrandingstoestel "na ca. 15 jaar" als richtlijn, waarbij ook de rookgasafvoer wordt beoordeeld en doorgaans vervangen. Een wettelijk verbod op basis van leeftijd alleen bestaat niet, maar "warm worden" zegt niets over CO-veiligheid of de staat van de afvoer: dat blijft een aparte beoordeling.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 15.1 */
{
  id: 'm15l01',
  nr: '15.1',
  titel: 'De onderhoudsbeurt als proces',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt een onderhoudsbeurt als vast proces uitvoeren, van veiligheid vooraf tot afronden en rapporteren.',
  videos: [
    { taal: 'nl', titel: 'Remeha Calenta - Voorbereiden onderhoud (Remeha Servicetraining)', yt: 'g2OlZrsjeWg', duur: '±3 min, 2020' },
    { taal: 'nl', titel: 'Jaarlijks cv-ketel onderhoud: wat doet de monteur precies? (Blauvolt)', yt: 'lXOA4Bs9zt8', duur: '±1 min, 2025' },
    { taal: 'en', titel: 'Guide to a Boiler Service (Viva Training, VK)', yt: 'iCv5wmKaCuI', duur: '±7 min, 2024' }
  ],
  tekst: `
## Een onderhoudsbeurt is geen los rijtje handelingen

Een goede monteur doet bij elke ketel hetzelfde soort stappen, in dezelfde volgorde, ongeacht merk of humeur. Dat is geen kwestie van gewoonte: het is de enige manier om niets te vergeten en om achteraf te kunnen aantonen wat je hebt gecontroleerd. Vaillant beschrijft dit voor de ecoTEC plus VHR letterlijk als een vaste volgorde: eerst het toestel tijdelijk buiten bedrijf stellen, dan de voormantel demonteren, de schakelkast beschermen tegen spatwater, en pas daarna de compacte thermomodule demonteren om bij brander, warmtewisselaar en sifon te kunnen. Andere merken hebben hun eigen volgorde, maar het principe is hetzelfde: eerst veilig maken, dan pas openen.

## Hoe vaak is onderhoud nodig?

Er bestaat geen wettelijke onderhoudsplicht voor de eigenaar van een cv-ketel: artikel 2.6 van het Bbl verplicht wel dat een installatie functioneert en geen gevaar oplevert, maar legt geen vaste termijn op. De fabrikant bepaalt daarom in de praktijk het interval, en dat loopt uiteen: Intergas eist jaarlijks onderhoud (ook voor de garantie), Nefit ProLine NxT noemt minimaal eens per 2 jaar, ATAG adviseert jaarlijks met minimaal een inspectie per 2 jaar en onderhoud per 4 jaar, en Vaillant splitst het per onderdeel (VLT/VGA en verontreiniging jaarlijks, isolatiematten en brander minimaal iedere 2 jaar). Is er geen fabrikantvoorschrift, dan valt de BRL 6000-25 terug op minimaal een keer per 12 maanden met de controlepunten uit Bijlage 4. Een vaste waarde als "om de 2 jaar is altijd genoeg" bestaat dus niet: je kijkt naar het toestel dat voor je hangt.

## Veiligheid vooraf: eerst meten, dan pas werken

Voordat je iets demonteert, meet je de CO-concentratie in de opstellingsruimte, op ongeveer 1,7 m hoogte en 1 m van het toestel. Onder de 5 ppm kun je zonder bezwaar beginnen. Tussen 5 en 20 ppm doe je nader onderzoek naar de oorzaak en meld je dat aan de opdrachtgever, waarna je verder werkt. Boven de 20 ppm geldt de wettelijke meldplicht: onverwijld en schriftelijk melden aan bewoner of gebruiker, eigenaar, bevoegd gezag en de certificerende instelling. Hoe je die meting precies uitvoert en beoordeelt, staat in [module 10](module:m10); hier is het genoeg om te onthouden dat de meting altijd vóór het werk gebeurt, niet pas achteraf als er iets misgaat.

!!! kern De volgorde is het proces
Eerst de storings- en foutgeschiedenis uitlezen, dan de ruimte-CO meten, dan pas het toestel spanningsloos en gasvrij maken en openen. Wie deze volgorde omdraait, werkt op een toestel waarvan hij de voorgeschiedenis en de veiligheid nog niet kent.
!!!

## Beginnen bij de geschiedenis, niet bij de brander

Voordat je iets schoonmaakt, lees je de storings- en foutgeschiedenis van het toestel uit: Nefit vraagt om het historiemenu te bekijken, Vaillant bewaart de tien laatste foutmeldingen en noodbedrijfmeldingen. Een terugkerende code vertelt je vaak meer dan een visuele controle. Vaillant biedt in het installateurmenu bovendien een actortest (T.001 tot en met T.007) waarmee je losse componenten, zoals de interne pomp, de driewegklep of de ventilator, apart aanstuurt en controleert, los van een warmtevraag. Zo weet je zeker of een onderdeel fysiek werkt voordat je een storing aan iets anders toeschrijft.

## Praktijkgeval: de klant belt over een "vreemde geur bij het starten"

Een klant meldt dat de ketel bij het opstarten soms een vreemde geur geeft. Je noteert dat vooraf, samen met eventuele eerdere storingsmeldingen en de leeftijd van het toestel. Op locatie meet je eerst de CO in de opstellingsruimte: 3 ppm, geen bezwaar om te beginnen. Je leest de foutgeschiedenis uit en ziet geen recente meldingen. Bij de visuele controle valt op dat de sifon droogstaat: de geur is condens- en rookgaslucht via de open sifon, geen gaslek. Je vult de sifon, controleert daarna alsnog de rest van de checklist, en meet aan het eind opnieuw de ruimte-CO om te bevestigen dat alles weer normaal is. Zonder de vaste volgorde (eerst meten, dan geschiedenis, dan pas visueel) had je misschien meteen aan de brander getwijfeld.

## Afronden en vastleggen

Vaillant sluit bijvoorbeeld elke onderhoudsbeurt van de ecoTEC plus VHR af met dezelfde vaste stappen: de gasaansluitdruk of gasstroomdruk controleren, het CO2- en O2-gehalte controleren, het toestel op dichtheid controleren, het onderhoudsinterval opnieuw instellen (bijvoorbeeld via bedrijfsuren of een vaste datum) en de inspectie en het onderhoud noteren. Andere merken hebben een vergelijkbare afsluitende volgorde, met net andere stappen of een andere manier van intervalinstelling: zoek dit op in de handleiding van het toestel. Van elke controle leg je vast wat je hebt gecontroleerd, met welke instrumenten, wat de resultaten waren en of er afwijkingen zijn geconstateerd. Dat is niet alleen prettig voor de volgende monteur: de certificerende instelling kan dit bij een steekproef opvragen. Rapporteren en klantadvies werken we verder uit in [les 15.5](les:m15l05).
`,
  checklist: [
    'Ik lees eerst de storings- en foutgeschiedenis uit voordat ik iets demonteer',
    'Ik meet de CO in de opstellingsruimte voordat ik begin, en beoordeel de uitkomst volgens het actiekader (onder 5, 5 tot 20, boven 20 ppm)',
    'Ik volg een vaste volgorde: buiten bedrijf stellen, mantel demonteren, dan pas de thermomodule of gelijkwaardige onderdelen',
    'Ik weet dat het onderhoudsinterval per fabrikant en model verschilt en zoek dit op in plaats van uit mijn hoofd te werken',
    'Ik sluit elke onderhoudsbeurt af met dezelfde stappen: gasdruk, CO2/O2, dichtheid, interval resetten, noteren'
  ],
  quiz: [
    {
      vraag: `Wat is volgens de BRL 6000-25 de enige harde onderhoudstermijn, en wanneer geldt die?`,
      opties: [
        `Elke 6 maanden, ongeacht wat de fabrikant zegt`,
        `Elke 2 jaar, als aanvulling op het fabrikantvoorschrift`,
        `Minimaal elke 12 maanden, maar alleen als er geen fabrikantvoorschrift is`,
        `Er bestaat geen enkele termijn in de BRL, alleen bij de fabrikant`
      ],
      goed: 2,
      uitleg: `Is er geen fabrikantvoorschrift, dan valt de BRL 6000-25 terug op minimaal een keer per 12 maanden met de controlepunten van Bijlage 4. Is er wel een fabrikantvoorschrift (zoals bij Intergas, Nefit, ATAG of Vaillant), dan geldt dat voorschrift.`
    },
    {
      vraag: `Je meet bij aankomst 22 ppm CO in de opstellingsruimte, voordat je aan het toestel hebt gewerkt. Wat doe je?`,
      opties: [
        `Je start de wettelijke meldplicht: onverwijld en schriftelijk melden aan bewoner, eigenaar, bevoegd gezag en certificerende instelling`,
        `Niets bijzonders, dit ligt nog dicht bij de meldgrens dus je werkt gewoon door`,
        `Je wacht tot de bewoner zelf een raam heeft geopend en het toestel een tijd heeft laten uitdampen, en meet daarna pas opnieuw of het probleem vanzelf is verdwenen`,
        `Je noteert het alleen in je eigen agenda voor later`
      ],
      goed: 0,
      uitleg: `Boven de 20 ppm geldt de wettelijke meldplicht uit Bbl art. 6.46: onverwijld en schriftelijk melden aan bewoner of gebruiker, eigenaar, bevoegd gezag en de certificerende instelling. Dat is iets anders dan het actiekader tussen 5 en 20 ppm, waar nader onderzoek en een melding aan de opdrachtgever volstaan.`
    },
    {
      vraag: `Waarom lees je bij aanvang van onderhoud eerst de storings- en foutgeschiedenis van het toestel uit?`,
      opties: [
        `Omdat de fabrikant hiermee de garantietermijn verlengt`,
        `Omdat de foutgeschiedenis de plaats van het CO-meetpunt bepaalt`,
        `Omdat dit verplicht is voordat je de gaskraan mag sluiten, ongeacht wat de klant eerder heeft gemeld`,
        `Omdat een terugkerende foutcode vaak meer informatie geeft dan een eerste visuele controle`
      ],
      goed: 3,
      uitleg: `Nefit vraagt om het historiemenu te bekijken en Vaillant bewaart de tien laatste foutmeldingen: die geschiedenis kan een terugkerend patroon laten zien dat je bij een losse visuele controle mist. Het heeft niets te maken met de gaskraan sluiten, garantie of het CO-meetpunt.`
    },
    {
      vraag: `Een Vaillant-monteur wil controleren of de interne pomp fysiek werkt, zonder eerst een warmtevraag te forceren. Welk hulpmiddel gebruikt hij?`,
      opties: [
        `De schoorsteenvegermodus van een ander merk`,
        `De actortest (T.001 tot en met T.007), waarmee losse componenten apart worden aangestuurd`,
        `Een multimeter in serie op de ionisatieleiding, een methode die in Nederlandse fabrikantprocedures niet wordt voorgeschreven`,
        `Het gaskeurlabel op het typeplaatje`
      ],
      goed: 1,
      uitleg: `Met de actortest kun je componenten zoals de interne pomp, de driewegklep of de ventilator apart aansturen en controleren, los van een warmtevraag. Een schoorsteenvegermodus (bij een ander merk) is iets anders, en het gaskeurlabel of een multimeter in serie horen niet bij deze controle.`
    },
    {
      vraag: `Een klant vraagt of hij zelf zijn ketel jaarlijks moet laten onderhouden omdat "de wet dat voorschrijft". Wat is het juiste antwoord?`,
      opties: [
        `Ja, de wet schrijft precies één keer per jaar voor, voor elk toestel`,
        `Ja, maar alleen voor toestellen die ouder zijn dan 15 jaar`,
        `Nee, er is geen wettelijke onderhoudstermijn voor de eigenaar; wel moet de installatie blijven functioneren en geen gevaar opleveren, en de fabrikant of de BRL geeft een concreet interval`,
        `Nee, onderhoud is nooit verplicht, ook niet voor de garantie`
      ],
      goed: 2,
      uitleg: `Artikel 2.6 Bbl verplicht dat een installatie blijft functioneren en geen gevaar oplevert, maar legt geen vaste onderhoudstermijn op. Het concrete interval komt van de fabrikant (bijvoorbeeld jaarlijks bij Intergas, mede voor de garantie) of, bij ontbreken daarvan, uit de BRL 6000-25 (minimaal 12 maanden).`
    }
  ],
  kaarten: [
    { voor: `Wat doe je als eerste stap van elke onderhoudsbeurt, voordat je iets demonteert?`, achter: `De storings- en foutgeschiedenis uitlezen en de CO in de opstellingsruimte meten.` },
    { voor: `Onder welke CO-waarde in de opstellingsruimte mag je zonder bezwaar beginnen met werken?`, achter: `Onder 5 ppm.` },
    { voor: `Wat doe je bij 5 tot 20 ppm CO in de opstellingsruimte?`, achter: `Nader onderzoek naar de oorzaak en dit melden aan de opdrachtgever, waarna je verder werkt.` },
    { voor: `Welke wettelijke onderhoudstermijn geldt voor de eigenaar van een cv-ketel?`, achter: `Geen vaste termijn: art. 2.6 Bbl eist alleen dat de installatie functioneert en geen gevaar oplevert. Het interval komt van de fabrikant of, bij ontbreken daarvan, de BRL (12 maanden).` },
    { voor: `Welke vijf stappen sluiten een onderhoudsbeurt bij Vaillant af?`, achter: `Gasaansluitdruk/gasstroomdruk controleren, CO2- en O2-gehalte controleren, dichtheid controleren, onderhoudsinterval resetten, inspectie en onderhoud noteren.` },
    { voor: `Waarmee test je bij Vaillant een los onderdeel zoals de pomp of de driewegklep, zonder warmtevraag?`, achter: `Met de actortest (T.001 tot en met T.007) in het installateurmenu.` }
  ],
  bronnen: ['ONT-01', 'ONT-03', 'ONT-04', 'ONT-05', 'ONT-06', 'ONT-07', 'ONT-08', 'WET-18', 'MET-16', 'KLA-09', 'KLA-10', 'OND-01', 'OND-02', 'OND-03', 'OND-04']
},

/* ------------------------------------------------------------------ 15.2 */
{
  id: 'm15l02',
  nr: '15.2',
  titel: 'Reinigen en inspecteren',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt brander, warmtewisselaar en sifon inspecteren en reinigen zonder onderdelen te beschadigen.',
  videos: [
    { taal: 'nl', titel: 'Atag I 32 EC deel 2: Onderhoud brander (TV Emiel)', yt: 'v42cSu8qa_I', duur: '±3 min, 2019' },
    { taal: 'nl', titel: 'Onderhoud en service cv-ketel: mee op stap met een servicemonteur (Poppe Installatietechniek)', yt: 'Ta9yXdk9GOU', duur: '±2 min, 2012' },
    { taal: 'en', titel: 'Servicing Worcester System Boiler (Hancock and Brown, VK)', yt: 'uFE1s5xi5mU', duur: '±23 min, 2022' }
  ],
  tekst: `
## Reinigen is per merk anders, en dat is geen slordigheid

Wie denkt dat "de warmtewisselaar schoonmaken" bij elk toestel hetzelfde is, maakt een dure fout. Vaillant reinigt de warmtewisselaar van de ecoTEC plus VHR met water of, indien nodig, azijn tot maximaal 5% zuur met een inwerktijd van 20 minuten, spoelt het losgekomen vuil af met een scherpe waterstraal of kunststofborstel, en richt die straal nadrukkelijk niet direct op de isolatiemat aan de achterkant. Remeha zegt voor de Calenta Ace het tegenovergestelde: de warmtewisselaar heeft aan de verbrandingszijde een oppervlaktebehandeling en hoeft niet te worden gereinigd, en reinigingsgereedschap, chemische middelen, perslucht en water zijn daar niet toegestaan. Intergas (Kombi Kompakt HRE) zit er tussenin: brander en geïntegreerde isolatieplaat behoeven geen onderhoud en mogen nooit met borstel of perslucht worden gereinigd (keramische vezels), terwijl de stuwstrippen en lamellen van de warmtewisselaar wél met een borstel of stofzuiger worden gereinigd. Nefit (ProLine NxT) gebruikt een zachte borstel en een stofzuiger met goed stoffilter (met mondkapje), zonder staalborstel en zonder perslucht.

!!! kern Er is geen algemene reinigingsmethode
Water, azijn, borstel, stofzuiger of juist "niet aanraken": wat is toegestaan hangt af van het merk en het model. Zoek dit op in de handleiding van het toestel dat voor je hangt, in plaats van de methode van je vorige klus te herhalen.
!!!

## Een vaste controlevolgorde bij het openen

Bij het demonteren van de brander- en verbrandingsmodule controleert Vaillant steeds drie dingen na elkaar: de warmtewisselaar op schade (bij schade vervangen), de warmtewisselaar op verontreiniging (bij vervuiling reinigen) en de isolatiemat van de warmtewisselaar op beschadiging (bij beschadiging vervangen). Die volgorde is bruikbaar bij elk merk: eerst kijken of iets kapot is voordat je gaat schoonmaken, want schoonmaken van een beschadigd onderdeel lost niets op.

## Waarom de branderflens-afdichting geen "nog wel even goed"-onderdeel is

!!! gevaar Beschadigde afdichting, isolatiemat of moeren op de branderflens
Als de afdichting, de isolatiemat of de zelfborgende moeren op de branderflens beschadigd zijn, kunnen hete verbrandingsgassen lekken. Dat is geen esthetisch mankement maar levensgevaar: verbrandingsgassen horen niet in de opstellingsruimte. Daarom vervangt Vaillant bij elke keer openen van de branderflens standaard de afdichting én de zelfborgende moeren, en vervangt hij de isolatiemat zodra die tekenen van beschadiging vertoont, ook als hij er op het eerste gezicht nog bruikbaar uitziet.
!!!

## Wat je verder tijdens een onderhoudsbeurt reinigt

Naast de warmtewisselaar en de brander hoort bij een volledige beurt: de zeef in de koudwateringang van een combitoestel (Vaillant sluit hiervoor eerst de koudwaterstopkraan, maakt het toestel aan warmwaterzijde leeg en plaatst bij het terugbouwen altijd een nieuwe O-ring), de sifonbeker (spoelen en opnieuw vullen tot de voorgeschreven vulhoogte, zie [module 8](module:m08) voor de werking van de sifon zelf), en bij Remeha de platenwarmtewisselaar aan de tapwaterzijde als de tapcapaciteit merkbaar lager is dan de opgegeven waarde, met bijvoorbeeld citroenzuur (pH ongeveer 3) en grondig naspoelen. Chemische stoffen zoals sprays, chloorhoudende reinigingsmiddelen, oplosmiddelen en verf horen nooit in de buurt van het toestel of in de verbrandingslucht: ze veroorzaken corrosie en storingen, ook als je zelf niets aan het toestel doet.

## Praktijkgeval: een ATAG en een Remeha op dezelfde dag

Je onderhoudt 's ochtends een ATAG-toestel en 's middags een Remeha Calenta Ace. Bij de ATAG reinig je de brander volgens het voorschrift van dat model. Aan het einde van de dag pak je uit gewoonte hetzelfde reinigingsgereedschap voor de warmtewisselaar van de Calenta Ace. Voordat je begint, controleer je de handleiding: Remeha verbiedt dat expliciet voor dit model. Je laat de warmtewisselaar met rust, controleert alleen op schade en vervuiling, en gaat verder met de rest van de checklist. Twee toestellen op dezelfde dag, twee verschillende reinigingsregimes: dat is precies waarom je de handleiding raadpleegt in plaats van op geheugen te werken.
`,
  checklist: [
    'Ik controleer eerst het reinigingsvoorschrift van dit merk en model voordat ik begin',
    'Ik controleer bij het openen eerst op schade, dan op vervuiling, dan op een beschadigde isolatiemat',
    'Ik vervang de afdichting en de zelfborgende moeren van de branderflens telkens als ik die flens open',
    'Ik gebruik nooit chemische middelen, sprays of perslucht op een onderdeel waarvoor de fabrikant dat verbiedt',
    'Ik reinig de sifon en controleer of hij na het werk weer gevuld is voordat het toestel weer brandt'
  ],
  quiz: [
    {
      vraag: `Wat schrijft Remeha voor over het reinigen van de warmtewisselaar van de Calenta Ace?`,
      opties: [
        `Reinigen is niet nodig en reinigingsgereedschap, chemische middelen, perslucht en water zijn niet toegestaan`,
        `Reinigen met water is toegestaan, met azijn niet`,
        `Reinigen met perslucht is verplicht bij elke onderhoudsbeurt`,
        `Reinigen gebeurt uitsluitend door de fabrikant zelf, nooit door een monteur`
      ],
      goed: 0,
      uitleg: `De warmtewisselaar van de Calenta Ace heeft aan de verbrandingszijde een oppervlaktebehandeling en hoeft niet te worden gereinigd; reinigingsgereedschap, chemische middelen, perslucht en water zijn hiervoor niet toegestaan. Dit staat haaks op hoe Vaillant zijn warmtewisselaar juist wél met water of azijn reinigt.`
    },
    {
      vraag: `In welke volgorde controleert Vaillant de warmtewisselaar bij het openen van de compacte thermomodule?`,
      opties: [
        `Eerst reinigen, dan pas op schade controleren`,
        `Eerst op schade, dan op vervuiling, dan de isolatiemat op beschadiging`,
        `Alleen op vervuiling, schade wordt nooit apart gecontroleerd`,
        `De volgorde maakt niet uit zolang alles uiteindelijk wordt gecontroleerd`
      ],
      goed: 1,
      uitleg: `Eerst schade beoordelen (bij schade vervangen), dan vervuiling (bij vervuiling reinigen), dan de isolatiemat op beschadiging. Schoonmaken van een beschadigd onderdeel lost het onderliggende probleem niet op, daarom staat schade-controle voorop.`
    },
    {
      vraag: `Waarom vervangt Vaillant bij het openen van de branderflens altijd de zelfborgende moeren, ook als ze nog stevig aanvoelen?`,
      opties: [
        `Omdat losse moeren de ketel geluid laten maken`,
        `Omdat de fabrikant hiermee extra materiaal wil verkopen`,
        `Omdat nieuwe moeren volgens het garantiebeleid van de fabrikant altijd verplicht worden vervangen bij onderhoud, ongeacht de zichtbare staat`,
        `Omdat een beschadigde afdichting of moer op de branderflens hete verbrandingsgassen kan laten lekken, met levensgevaar tot gevolg`
      ],
      goed: 3,
      uitleg: `Beschadigde afdichting, isolatiemat of zelfborgende moeren op de branderflens kunnen hete verbrandingsgassen laten lekken: dat is levensgevaar, geen esthetisch of commercieel argument. Daarom is vervangen een vaste stap, niet een keuze op basis van hoe iets er nog uitziet.`
    },
    {
      vraag: `Wat controleer je bij het reinigen van de zeef in de koudwateringang van een Vaillant-combitoestel als eerste?`,
      opties: [
        `Of de gaskraan gesloten is`,
        `Of er een nieuwe branderflensafdichting nodig is`,
        `Of de koudwaterstopkraan gesloten is en het toestel aan warmwaterzijde leeg is`,
        `Of het onderhoudsinterval al is verstreken`
      ],
      goed: 2,
      uitleg: `Voordat je de module met doorstromingsbegrenzer, O-ring en zeef eruit trekt, sluit je de koudwaterstopkraan en maak je het toestel aan warmwaterzijde leeg. Dit heeft niets te maken met de gaskraan of de branderflens, die horen bij de gaszijde.`
    },
    {
      vraag: `Welke stoffen mogen volgens meerdere fabrikanten nooit in de buurt van het toestel of in de verbrandingslucht komen?`,
      opties: [
        `Sprays, chloorhoudende reinigingsmiddelen, oplosmiddelen en verf`,
        `Schoon leidingwater`,
        `Citroenzuur, dat juist wel gericht wordt gebruikt bij het ontkalken van een platenwarmtewisselaar aan de tapwaterzijde`,
        `Lucht uit de opstellingsruimte zelf`
      ],
      goed: 0,
      uitleg: `Sprays, chloorhoudende reinigingsmiddelen, oplosmiddelen en verf in de buurt van het toestel of in de verbrandingslucht veroorzaken corrosie en storingen. Citroenzuur wordt juist wel gebruikt, maar dan gericht voor het ontkalken van een platenwarmtewisselaar, niet als algemene ruimte-reiniger.`
    }
  ],
  kaarten: [
    { voor: `Met welke twee middelen reinigt Vaillant de warmtewisselaar van de ecoTEC plus VHR, en wat is de inwerktijd van het tweede middel?`, achter: `Water, of indien nodig azijn tot max. 5% zuur met 20 minuten inwerktijd.` },
    { voor: `Wat schrijft Remeha voor over reinigen van de warmtewisselaar van de Calenta Ace?`, achter: `Niet reinigen: geen reinigingsgereedschap, chemische middelen, perslucht of water toegestaan (oppervlaktebehandeling).` },
    { voor: `Waarmee reinigt Intergas de stuwstrippen en lamellen van de warmtewisselaar van de Kombi Kompakt HRE?`, achter: `Met een borstel of stofzuiger. De brander en isolatieplaat zelf mogen nooit met borstel of perslucht.` },
    { voor: `In welke volgorde controleert Vaillant een warmtewisselaar bij het openen?`, achter: `Eerst op schade, dan op vervuiling, dan de isolatiemat op beschadiging.` },
    { voor: `Wat vervangt Vaillant standaard bij elke keer dat de branderflens wordt geopend?`, achter: `De afdichting en de zelfborgende moeren op de branderflens.` },
    { voor: `Waarom is dat vervangen van afdichting en moeren geen keuze maar een vaste stap?`, achter: `Een beschadigde afdichting, isolatiemat of moer kan hete verbrandingsgassen laten lekken: levensgevaar.` },
    { voor: `Waarmee reinigt Remeha de platenwarmtewisselaar aan de tapwaterzijde bij lage tapcapaciteit?`, achter: `Bijvoorbeeld citroenzuur (pH ongeveer 3), gevolgd door grondig naspoelen met leidingwater.` }
  ],
  bronnen: ['ONT-10', 'ONT-11', 'ONT-12', 'ONT-13', 'ONT-14', 'ONT-19', 'OND-06', 'OND-07', 'OND-08']
},

/* ------------------------------------------------------------------ 15.3 */
{
  id: 'm15l03',
  nr: '15.3',
  titel: 'Slijtdelen en vervangen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt slijtdelen herkennen, de juiste onderdelen kiezen en ze vervangen volgens de fabrikant.',
  videos: [
    { taal: 'nl', titel: 'Hoe vervang je een anode van een boiler? (Jorne Desmet)', yt: 'aWtRvkwgONo', duur: '±2 min, 2025' },
    { taal: 'nl', titel: 'REMEHA Calenta Ace - Deel 3: Onderdelen (TV Emiel)', yt: 'b1g8N0WWABQ', duur: '±2 min, 2018' },
    { taal: 'en', titel: 'Vaillant EcoTec Pro - How To Change The Electrodes (F28 / F29 / F67) (Advanced Boiler Training, VK)', yt: 'KE5ACC-ZDII', duur: '±4 min, 2021' }
  ],
  tekst: `
## Slijtdelen zijn geen keuze, maar een lijst per merk

Sommige onderdelen zijn er om na een bepaalde tijd te worden vervangen: ze slijten door de omstandigheden waarin ze werken (hitte, vonkoverslag, condens). Welke onderdelen dat zijn en na hoeveel tijd, verschilt per fabrikant. Nefit vervangt bij de ProLine NxT de branderpakkingen elke 2 jaar. ATAG vervangt bij de XL de ontstekingselektrode minimaal elke 4 jaar. Remeha vervangt bij de Calenta Ace de ionisatie- of ontstekingselektrode bij minder dan 3 microampere of bij zichtbare beschadiging. Vaillant vervangt de regelelektrode minimaal na 5 jaar of 20.000 bedrijfsuren, welke waarde het eerst wordt bereikt. Wat de garantie van een fabrikant juist uitsluit, is ook een aanwijzing: Intergas sluit de ontsteek- en ionisatiepen, de glaszekering en de ontluchter uit van zijn garantie, precies omdat dat de onderdelen zijn die door gebruik verslijten.

!!! kern Slijtdelen leer je niet uit je hoofd, je zoekt ze op
De grens waarbij je een elektrode vervangt (microampere, jaren, bedrijfsuren) verschilt per merk en model. Ga altijd na wat de fabrikant van het toestel dat voor je hangt, voorschrijft.
!!!

## Alleen originele of gelijkwaardige onderdelen

Bij onderhoud gebruik je uitsluitend onderdelen die door de fabrikant zijn voorgeschreven, of die minstens gelijkwaardig zijn aan de originele (gereviseerde onderdelen inbegrepen). Dit is een bovenwettelijke eis van de BRL 6000-25, en Intergas en ATAG vragen dit ook expliciet in hun eigen handleiding. Een "bijna passend" onderdeel van onbekende herkomst is dus geen optie, ook niet als het net zo goedkoop en snel beschikbaar is.

## Wat een aanhaalmoment met veiligheid te maken heeft

Bij het terugplaatsen van een onderdeel is niet alleen welk onderdeel je gebruikt van belang, maar ook hoe vast je het aandraait. Vaillant schrijft voor de ecoTEC plus VHR vaste aanhaalmomenten voor: de vier branderflensmoeren kruiselings op 6 Nm, de gasblok-wartelmoer met nieuwe afdichting op 40 Nm (of als alternatief 15 Nm plus nog 60 graden verder), de ontstekings- en regelelektrode elk met twee nieuwe schroeven op 3 Nm. Dit zijn de waarden van dit ene merk en model: een ander toestel heeft eigen aanhaalmomenten, die je opzoekt in de handleiding in plaats van uit je hoofd aan te draaien. Te los aandraaien geeft een lekkage van gas of verbrandingsgas, te vast beschadigt de schroefdraad of de afdichting. Beide elektroden mag je bovendien alleen op het keramische deel aanraken; reinigen van de elektrode is uitdrukkelijk verboden, bij twijfel vervang je hem.

## Rekenvoorbeeld: welke elektrode vervang je wel, welke niet?

Je meet bij een Remeha Calenta Ace op vollast 3,4 microampere en op laaglast 2,4 microampere. De grens van Remeha is 3 microampere, gemeten in vol- en laaglast. De laaglastwaarde ligt eronder, dus voldoet het toestel niet aan de eis, ook al is de vollastwaarde in orde. Je vervangt de elektrode volgens het voorschrift van de fabrikant, en zoekt daarna ook uit waarom de stroom laag is (bijvoorbeeld vervuiling of een slechte aarding), in plaats van alleen het onderdeel te wisselen en verder te gaan.

## Een offeranode: alleen nodig bij bepaalde materialen

Een boilervat van gewoon staal heeft vaak een magnesiumanode nodig: die anode corrodeert zelf in plaats van het vat, en beschermt zo de tank tegen roest. Bij de Loria Duo (een lucht/water warmtepomp) controleert de fabrikant deze anode aanbevolen jaarlijks en vervangt hem wanneer de diameter kleiner is dan 13 mm; bij het openen van het inspectieluik wordt altijd de pakking mee vervangen. Een boilervat van roestvaststaal, zoals de Remeha Aqua Pro of de ATAG Comfort Boiler, heeft die bescherming niet nodig doordat het materiaal zelf al corrosiebestendig is: het installatievoorschrift van dat toestel noemt dan ook geen anode. Kijk dus eerst naar het materiaal van het vat voordat je aanneemt dat "elke boiler een anode heeft": dat klopt niet.

!!! gevaar Werk aan het boilervat altijd spanningsloos en watervrij
Voordat je een inspectieluik van een boiler opent, maak je het toestel spanningsloos (met een korte wachttijd voor de condensatoren zijn ontladen), sluit je de watertoevoer af en tap je af naar een afvoerpunt. Pas daarna open je het luik.
!!!

## Vervangen en de rest van de installatie

Wat je aan slijtdelen vervangt, staat los van de vraag of het hele toestel nog rendabel te onderhouden is. De BRL 6000-25 noemt als richtlijn vervanging van een gasverbrandingstoestel "na ca. 15 jaar", waarbij ook het rookgasafvoersysteem wordt beoordeeld en meestal vervangen (zie [module 8](module:m08) voor de eisen aan de afvoer zelf). Dat gesprek met de klant, over vervangen van een los onderdeel tegenover vervangen van het hele toestel, werk je uit in [les 15.5](les:m15l05).
`,
  checklist: [
    'Ik ken de slijtdelen en de vervangingsgrens van het merk en model waaraan ik werk, en zoek dat op als ik het niet zeker weet',
    'Ik gebruik alleen originele of aantoonbaar gelijkwaardige onderdelen',
    'Ik draai schroeven en moeren aan op het voorgeschreven aanhaalmoment, niet op gevoel',
    'Ik raak een elektrode alleen op het keramische deel aan en reinig hem nooit',
    'Ik controleer bij een boilervat eerst het materiaal voordat ik ervan uitga dat er een anode in zit'
  ],
  quiz: [
    {
      vraag: `Een Nefit ProLine NxT, een ATAG XL en een Remeha Calenta Ace hebben elk hun eigen vervangingsgrens voor een slijtdeel. Wat klopt?`,
      opties: [
        `Alle drie hanteren precies dezelfde termijn van 2 jaar voor elk slijtdeel`,
        `Nefit vervangt de branderpakkingen elke 2 jaar, ATAG de ontstekingselektrode minimaal elke 4 jaar, Remeha de elektrode bij minder dan 3 microampere of zichtbare schade`,
        `Alleen Remeha kent een vervangingsgrens, de andere twee merken niet`,
        `De vervangingsgrens hangt nergens van af, dat is bij elk merk aan het gevoel van de monteur`
      ],
      goed: 1,
      uitleg: `Elk merk heeft zijn eigen criterium en termijn: Nefit tijdgebonden (2 jaar), ATAG tijdgebonden (minimaal 4 jaar), Remeha meetgebonden (minder dan 3 microampere) of op zichtbare schade. Dat drietal loopt dus uiteen, en geen ervan is "aan het gevoel overgelaten".`
    },
    {
      vraag: `Waarom moet je bij onderhoud alleen originele of gelijkwaardige onderdelen gebruiken?`,
      opties: [
        `Dit geldt alleen voor onderdelen die zichtbaar zijn voor de klant`,
        `Dit is alleen relevant bij toestellen ouder dan 15 jaar`,
        `Dit is uitsluitend een persoonlijke keuze van de monteur en staat nergens vastgelegd in een schema, voorschrift of garantievoorwaarde`,
        `De BRL 6000-25 stelt dit als bovenwettelijke eis, en fabrikanten zoals Intergas en ATAG vragen dit ook expliciet`
      ],
      goed: 3,
      uitleg: `De BRL 6000-25 legt dit vast als bovenwettelijke eis, en fabrikanten als Intergas en ATAG vragen dit ook expliciet in hun eigen documentatie. Het is dus geen vrije keuze en niet beperkt tot zichtbare onderdelen of oudere toestellen.`
    },
    {
      vraag: `Bij het monteren van een nieuwe branderflens van een Vaillant ecoTEC plus VHR draai je de vier moeren aan. Wat is hierbij belangrijk?`,
      opties: [
        `Kruiselings aandraaien tot het voorgeschreven aanhaalmoment van 6 Nm, niet losser en niet vaster`,
        `Zo vast mogelijk aandraaien met de grootst beschikbare sleutel`,
        `Handvast is voldoende, een aanhaalmoment is hier niet relevant`,
        `De volgorde en het aanhaalmoment maken niets uit zolang de flens niet lekt bij het testen`
      ],
      goed: 0,
      uitleg: `Vaillant schrijft kruiselings aandraaien tot 6 Nm voor: te los geeft een lekkage, te vast kan schroefdraad of afdichting beschadigen. "Zo vast mogelijk" of "handvast" is geen vervanging voor het voorgeschreven moment.`
    },
    {
      vraag: `Je meet bij een Remeha Calenta Ace op vollast 3,4 microampere en op laaglast 2,4 microampere ionisatiestroom, terwijl de grens 3 microampere is (vol- en laaglast). Wat concludeer je?`,
      opties: [
        `De elektrode is in orde, want de vollastwaarde ligt boven de grens`,
        `Deze waarden zeggen niets over de conditie van de elektrode`,
        `De elektrode voldoet niet, want de laaglastwaarde ligt onder de grens; je vervangt hem en zoekt ook de oorzaak`,
        `Je hoeft voor deze beoordeling alleen op laaglast te meten, want de vollastwaarde speelt bij dit merk en model geen enkele rol`
      ],
      goed: 2,
      uitleg: `Remeha eist de grenswaarde in zowel vol- als laaglast. De laaglastwaarde (2,4 µA) ligt onder de grens van 3 µA, dus voldoet het toestel niet, ook al is de vollastwaarde wel in orde. Eén goede waarde is niet genoeg.`
    },
    {
      vraag: `Een boilervat is gemaakt van roestvaststaal (RVS). Wat betekent dat voor de anode?`,
      opties: [
        `Er is juist een extra grote anode nodig`,
        `Roestvaststaal heeft geen offeranode nodig doordat het materiaal zelf al corrosiebestendig is, zoals bij de Remeha Aqua Pro en de ATAG Comfort Boiler`,
        `De anode moet elke maand worden gecontroleerd in plaats van jaarlijks`,
        `RVS-vaten hebben volgens sommige installateurs nooit een inspectieluik nodig, ook al noemt geen enkele hier gebruikte fabrikant dat ergens expliciet in de installatievoorschriften`
      ],
      goed: 1,
      uitleg: `Een offeranode beschermt een stalen vat door zelf te corroderen. Roestvaststaal heeft die bescherming niet nodig; de installatievoorschriften van de Remeha Aqua Pro en de ATAG Comfort Boiler noemen dan ook geen anode voor deze RVS-vaten.`
    }
  ],
  kaarten: [
    { voor: `Na hoeveel tijd of bedrijfsuren vervangt Vaillant de regelelektrode van de ecoTEC plus VHR?`, achter: `Minimaal na 5 jaar of 20.000 bedrijfsuren, welke waarde het eerst wordt bereikt.` },
    { voor: `Bij welke ionisatiestroom vervangt Remeha de elektrode van de Calenta Ace?`, achter: `Bij minder dan 3 microampere (gemeten in vol- én laaglast) of bij zichtbare beschadiging.` },
    { voor: `Welke onderdelen mag je bij onderhoud gebruiken volgens de BRL 6000-25?`, achter: `Alleen onderdelen die de fabrikant voorschrijft, of onderdelen die minstens gelijkwaardig zijn aan de originele.` },
    { voor: `Wat is het aanhaalmoment van de vier branderflensmoeren bij een Vaillant ecoTEC plus VHR?`, achter: `6 Nm, kruiselings aangedraaid.` },
    { voor: `Waar mag je een ontstekings- of regelelektrode aanraken, en wat is verboden?`, achter: `Alleen op het keramische deel aanraken; reinigen van de elektrode is verboden.` },
    { voor: `Bij welke diameter vervang je de magnesiumanode van een Techneco Loria Duo?`, achter: `Bij een diameter kleiner dan 13 mm; bij het openen van het inspectieluik altijd de pakking mee vervangen.` },
    { voor: `Waarom heeft een boilervat van roestvaststaal geen anode nodig, in tegenstelling tot een stalen vat?`, achter: `Omdat roestvaststaal zelf al corrosiebestendig is; een offeranode is er om een stalen vat tegen roest te beschermen.` },
    { voor: `Welke onderdelen sluit de garantie van Intergas uit, en wat zegt dat over die onderdelen?`, achter: `Ontsteek- en ionisatiepen, glaszekering en ontluchter: dit zijn typische slijtdelen die door gebruik verslijten.` }
  ],
  bronnen: ['ONT-15', 'ONT-16', 'ONT-17', 'MET-26', 'OND-09', 'OND-10', 'OND-11', 'OND-12', 'OND-15', 'OND-16', 'OND-17']
},

/* ------------------------------------------------------------------ 15.4 */
{
  id: 'm15l04',
  nr: '15.4',
  titel: 'Veiligheidscontroles en afronden met een meting',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de veiligheidsfuncties controleren en het onderhoud afronden met een aantoonbare meting.',
  videos: [
    { taal: 'nl', titel: 'Onderhoud verwarmingsketel: CO gehalte in de rookgassen te hoog (TV Emiel)', yt: 'eT-a_-85DnQ', duur: '±3 min, 2021' },
    { taal: 'nl', titel: 'Hoe Stel Je de Rookgasafvoer van een HR Remeha Calenta CV Ketel Af? (Loodgieter Den Haag Stad)', yt: 'qmQmon1E1ns', duur: '±13 min, 2023' },
    { taal: 'en', titel: 'What should you be looking at when doing a combustion analysis? (measureQuick, VS)', yt: 'RTJNSDXuAqk', duur: '±13 min, 2021' }
  ],
  tekst: `
## Onderhoud is pas klaar na een meting

Een toestel dat weer "gewoon aan gaat" is geen bewijs dat het veilig is. Onderhoud sluit je daarom altijd af met een meting, niet met een visuele indruk. Hoe je een rookgasmeting precies uitvoert en beoordeelt, en hoe je CO in de opstellingsruimte meet, staat uitgewerkt in [module 10](module:m10) (in het bijzonder [les 10.4](les:m10l04) en [les 10.5](les:m10l05)): hier gaat het om de plek van die meting in het onderhoudsproces, en om de andere veiligheidscontroles eromheen.

## De veiligheidscontroles op de checklist

De BRL 6000-25-controlelijst voor onderhoud noemt naast reiniging ook expliciet: het functioneren van de luchtdrukverschilschakelaar, de netspanning, de aarding, de ventilatorspanning, de gasdichtheid van het gasblok en de aansluiting, de droogkookbeveiliging, de thermostaten, de afvaltijd van de vlambeveiliging en de rookgas- en luchttransportbeveiliging. Dat is een andere categorie dan "schoonmaken": het gaat om functies die moeten ingrijpen als er iets misgaat, en die je dus test, niet alleen bekijkt.

!!! kern Meten is het bewijs, niet de bevestiging achteraf
Je meet niet om te bevestigen wat je al dacht, je meet om te weten. Een toestel dat "lijkt te branden zoals het hoort" kan alsnog een te hoog CO-gehalte geven: alleen de meting laat dat zien.
!!!

## Gasdichtheid na demontage

Elke keer dat je een gasvoerend onderdeel hebt losgekoppeld (gasblok, meetnippel, brander), controleer je de nieuwe verbinding op dichtheid voordat het toestel weer in bedrijf gaat. Vaillant staat op een reeds aangesloten toestel een maximale testdruk van 11 kPa (110 mbar) toe; kan die druk niet worden begrensd, dan sluit je eerst een voor het toestel geïnstalleerde gasafsluitkraan en ontspan je de leidingdruk voordat je die kraan weer opent. Andere fabrikanten controleren op vergelijkbare wijze: Vaillant zelf controleert de gastransporterende onderdelen, de interne lucht-rookgasdichtheid en het cv- en warmwatercircuit als aparte stap, Nefit controleert de gas-luchtunit, het gasregelblok en de gasleiding tijdens een warmtevraag.

!!! gevaar Lekzoeken nooit met een vlam
Voor het opsporen van een gaslek gebruik je lekzoekspray of een gaslekzoeker met display en akoestisch signaal. Lekzoeken met een vlam is uitgesloten: dat is precies de vonkbron die je probeert te vermijden.
!!!

## Verbrandingsmeting op vol- en deellast

Je meet de verbranding niet alleen op één belastingpunt. Fabrikanten vragen om te meten op vollast en op laaglast (of een instelbare deellast), omdat een goede waarde op vollast niets zegt over de laaglastsituatie en andersom: bij Remeha ligt de grenswaarde voor de ionisatiestroom bijvoorbeeld apart voor vol- en laaglast (zie [les 15.3](les:m15l03)). Bij een toestel op een concentrisch rookgasafvoersysteem controleer je bovendien de recirculatie: je meet CO2 op het meetpunt van de verbrandingsluchttoevoer. Een goed systeem geeft daar de buitenluchtwaarde, tot ongeveer 1% CO2 is door windinvloed toelaatbaar; een veel hogere waarde wijst op interne lekkage van het systeem en vraagt nader onderzoek.

## Ruimte-CO na afloop en wanneer je niet vrijgeeft

Na het werk meet je opnieuw de CO in de opstellingsruimte. Onder de 5 ppm is er geen bezwaar tegen inbedrijfstelling. Tussen 5 en 20 ppm neem je de oorzaak weg voordat je (opnieuw) in bedrijf stelt. Boven de 20 ppm meld je dit onverwijld en schriftelijk aan bewoner of gebruiker, eigenaar, bevoegd gezag en de certificerende instelling, en stel je het toestel buiten bedrijf. Een certificaathouder mag een toestel niet in bedrijf stellen als bij gebruik ontoelaatbare hoeveelheden CO vrijkomen: die regel geldt onverkort na onderhoud, ook als de klant liever "gewoon weer verwarming" wil.

## Praktijkgeval: een vaste vervolgprocedure bij een te hoge CO-waarde

Bij een Vaillant-toestel meet je na onderhoud 800 ppm CO onverdund in het rookgas, ruim boven de 650 ppm die de fabrikant als signaalwaarde noemt. Je volgt de vaste vervolgprocedure: eerst controleer je de lengte en de diameter van het VLT/VGA-systeem en of het correct gemonteerd, geblokkeerd of beschadigd is. Dat blijkt in orde. Vervolgens vervang je de regelelektrode en meet je opnieuw: nog steeds 720 ppm. Je controleert daarna de verbrandingskamer op vervuiling of beschadiging van de isolatiematten. Pas als dat allemaal geen verbetering geeft, neem je contact op met het serviceteam. Deze volgorde, van goedkoop en snel naar duur en specialistisch, voorkomt dat je onnodig dure onderdelen vervangt voor een probleem dat ergens anders zit.
`,
  checklist: [
    'Ik controleer bij onderhoud niet alleen brander en warmtewisselaar, maar ook de beveiligingen van de BRL-checklist (droogkookbeveiliging, thermostaten, vlambeveiliging, luchtdrukverschilschakelaar)',
    'Ik controleer elke nieuwe gasverbinding op dichtheid met lekzoekspray of een gaslekzoeker, nooit met een vlam',
    'Ik meet de verbranding op vol- én laaglast, niet alleen op één belastingpunt',
    'Ik meet de CO in de opstellingsruimte na afloop en beoordeel die volgens het actiekader (onder 5, 5 tot 20, boven 20 ppm)',
    'Ik geef een toestel niet vrij als het CO-gehalte in het rookgas of de opstellingsruimte te hoog blijft, ook niet onder tijdsdruk van de klant'
  ],
  quiz: [
    {
      vraag: `Welke onderdelen staan naast reiniging op de BRL 6000-25-controlelijst voor onderhoud onder "regeling en beveiliging"?`,
      opties: [
        `De droogkookbeveiliging, de thermostaten, de afvaltijd van de vlambeveiliging en de rookgas-/luchttransportbeveiliging`,
        `Alleen de kleur van de mantel en het typeplaatje`,
        `Uitsluitend de warmtewisselaar en de sifon, want die twee onderdelen vormen volgens deze controlelijst de complete beveiliging`,
        `Alleen de gasmeter bij de voordeur`
      ],
      goed: 0,
      uitleg: `De controlelijst noemt onder regeling en beveiliging onder meer de ionisatie-elektrode, de ontstekingselektrode, de droogkookbeveiliging, de thermostaten, de afvaltijd van de vlambeveiliging en de rookgas-/luchttransportbeveiliging: functies die moeten ingrijpen bij een storing, geen visuele kenmerken.`
    },
    {
      vraag: `Welke testdruk staat Vaillant maximaal toe bij een gasdichtheidscontrole op een reeds aangesloten toestel?`,
      opties: [`5 mbar`, `50 mbar`, `110 mbar`, `500 mbar`],
      goed: 2,
      uitleg: `Vaillant staat op een aangesloten toestel maximaal 11 kPa (110 mbar) toe. Kan die druk niet worden begrensd, dan sluit je eerst de gasafsluitkraan voor het toestel en ontspan je de leidingdruk voordat je die weer opent.`
    },
    {
      vraag: `Waarom meet je de verbranding op zowel vol- als laaglast, en niet alleen op één belastingpunt?`,
      opties: [
        `Omdat dat sneller gaat dan één keer meten`,
        `Omdat de wet dit exact zo voorschrijft voor elk merk met dezelfde grenswaarde`,
        `Omdat laaglast altijd de hoogste CO-waarde geeft`,
        `Omdat een goede waarde op vollast niets zegt over de situatie op laaglast, en andersom`
      ],
      goed: 3,
      uitleg: `Bij Remeha ligt de grenswaarde voor de ionisatiestroom bijvoorbeeld apart voor vol- en laaglast: één goede waarde bewijst niet dat het andere belastingpunt ook in orde is. Het is dus geen kwestie van snelheid, en laaglast geeft niet per definitie de hoogste waarde.`
    },
    {
      vraag: `Je meet na onderhoud 3 ppm CO in de opstellingsruimte. Wat concludeer je?`,
      opties: [
        `Je moet alsnog de oorzaak onderzoeken en dit melden aan de opdrachtgever`,
        `Er is geen bezwaar tegen inbedrijfstelling`,
        `Je moet het toestel direct buiten bedrijf stellen`,
        `Je moet altijd 112 bellen bij elke gemeten waarde boven 0 ppm`
      ],
      goed: 1,
      uitleg: `Onder de 5 ppm is er geen bezwaar tegen (opnieuw) in bedrijf stellen. Nader onderzoek en melden aan de opdrachtgever hoort bij 5 tot 20 ppm, buiten bedrijf stellen en de wettelijke meldplicht bij boven 20 ppm.`
    },
    {
      vraag: `Bij een Vaillant-toestel meet je na onderhoud een te hoog CO-gehalte. Wat is de eerste stap in de vaste vervolgprocedure van de fabrikant?`,
      opties: [
        `Meteen het serviceteam bellen`,
        `Meteen de warmtewisselaar vervangen`,
        `Eerst de lengte, diameter en montage van het VLT/VGA-systeem controleren op blokkade of beschadiging`,
        `Meteen de klant factureren voor een nieuw toestel`
      ],
      goed: 2,
      uitleg: `De vaste procedure begint met het eenvoudigste en goedkoopste: het VLT/VGA-systeem controleren. Pas als dat in orde is, volgt het vervangen van de regelelektrode, dan de verbrandingskamer, en pas als niets helpt, het serviceteam bellen.`
    }
  ],
  kaarten: [
    { voor: `Waarmee zoek je een gaslek op, en wat is uitgesloten?`, achter: `Met lekzoekspray of een gaslekzoeker met display en akoestisch signaal; lekzoeken met een vlam is uitgesloten.` },
    { voor: `Welke maximale testdruk staat Vaillant toe op een reeds aangesloten toestel?`, achter: `11 kPa (110 mbar).` },
    { voor: `Waarom meet je de verbranding op zowel vol- als laaglast?`, achter: `Omdat een goede waarde op het ene belastingpunt niets zegt over het andere.` },
    { voor: `Wat controleer je bij een concentrisch rookgasafvoersysteem om recirculatie op te sporen?`, achter: `CO2 op het meetpunt van de verbrandingsluchttoevoer; een goed systeem geeft de buitenluchtwaarde, tot ongeveer 1% CO2 kan door wind.` },
    { voor: `Wanneer geef je een toestel na onderhoud niet vrij?`, achter: `Als het CO-gehalte in het rookgas of de opstellingsruimte boven de toegestane grens blijft, ook niet onder druk van de klant.` },
    { voor: `Wat is de vaste vervolgprocedure van Vaillant bij een te hoge CO-waarde die aanhoudt?`, achter: `Eerst het VLT/VGA-systeem controleren, dan de regelelektrode vervangen, dan de verbrandingskamer controleren, pas dan het serviceteam bellen.` }
  ],
  bronnen: ['ONT-07', 'ONT-20', 'INS-32', 'INS-47', 'MET-14', 'MET-16', 'MET-19', 'KLA-07', 'KLA-09', 'KLA-10', 'OND-13', 'OND-14']
},

/* ------------------------------------------------------------------ 15.5 */
{
  id: 'm15l05',
  nr: '15.5',
  titel: 'Rapporteren en klantadvies',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt de bevindingen van een onderhoudsbeurt vastleggen en de klant helder en eerlijk adviseren.',
  videos: [
    { taal: 'nl', titel: 'CV-ketel uit 1998 in woning: tijd voor vervanging! (Homekeur BV - Bouwkundige keuring)', yt: 'pYrey7PjuIk', duur: '±2 min, 2023' },
    { taal: 'nl', titel: 'Levensgevaarlijke cv-ketel na 11 jaar zonder onderhoud (Monteurtje010)', yt: 'cLwE3IV_Qo8', duur: '±9 min, 2026' },
    { taal: 'en', titel: 'What is a CP12? Landlords gas safety check (Central Heatking, VK)', yt: 'MVygzuunhVw', duur: '±9 min, 2024' }
  ],
  tekst: `
## Wat je vastlegt, is het bewijs van je werk

Van elke controle en meting leg je vast wat je hebt gecontroleerd, op basis van welke eisen, wie het deed en wanneer, met welk instrument gemeten is, en wat de resultaten waren. Bij een afwijking rapporteer je die apart. Dit is geen overbodige administratie: de certificerende instelling kan dit bij een steekproef opvragen, en bij een geschil is dit je bewijs dat je hebt gedaan wat je moest doen. Na een controle brengt de verantwoordelijke Vakbekwaam Persoon een ingevulde sticker op het toestel aan met minstens: gecontroleerd door, volgens welk schema, de datum, wanneer het volgende onderhoud nodig is, en het certificaatnummer.

!!! kern Vastleggen is niet hetzelfde als "het is toch gedaan"
Een controle die je niet hebt genoteerd, kun je later niet aantonen. Schrijf de meetwaarde op, niet alleen "gecontroleerd, in orde".
!!!

## Wat de klant van jou hoort en krijgt

Je informeert de klant over het voorgeschreven onderhoud en het onderhoudsinterval van het toestel en de rookgasafvoer, en je controleert of het gebruiksvoorschrift van het toestel aanwezig is; ontbreekt het, dan wijs je de gebruiker daarop. Bij oplevering van nieuw werk hoort daar ook bij: uitleggen waar de veiligheidsvoorzieningen zitten en hoe ze werken, instrueren over de bediening, wijzen op de onderhoudsintervallen, alle handleidingen en papieren overhandigen, en de klant erop wijzen dat hij niets aan de rookgasafvoer of luchttoevoer mag veranderen en geen explosieve of licht ontvlambare stoffen in de opstellingsruimte mag bewaren. Ontbreekt er nog een CO-melder bij een open of afvoerloos toestel, dan adviseer je die schriftelijk, met de plaatsingsadviezen van de Brandweer als richtlijn (op plafondhoogte, 1 tot 3 m horizontale afstand van de bron, minstens 30 cm van muren, in de slaapkamer op ademhoogte).

## Garantie: iets anders dan de wettelijke conformiteit

De wettelijke conformiteit van geleverd werk is iets anders dan de fabrikantgarantie op het toestel. Veel fabrikanten koppelen hun garantie aan bewijsbaar jaarlijks onderhoud: Intergas laat de garantie vervallen bij ondeskundige reparatie of onderhoud door niet-erkende installateurs, of als niet aantoonbaar minimaal een keer per jaar onderhoud is gepleegd; ATAG doet hetzelfde bij niet-gespoelde installaties, waterkwaliteit buiten specificatie of niet-vrijgegeven additieven. Leg dit uit aan een klant die overweegt onderhoud over te slaan: hij bespaart kort op de rekening, maar kan bij een defect zijn garantie kwijtraken.

## Advies over vervanging: eerlijk en met argumenten

!!! kern Een advies is geen verkooppraatje
Je adviseert op basis van wat je hebt gecontroleerd en gemeten, niet op basis van wat het bedrijf die maand het liefst verkoopt. Noem het onderliggende feit (leeftijd, staat van de afvoer, onderdelenbeschikbaarheid), niet alleen de conclusie "vervangen".
!!!

Bij een oudere ketel speelt de leeftijd een rol, maar niet als enige argument. De BRL 6000-25 noemt als richtlijn vervanging van een gasverbrandingstoestel "na ca. 15 jaar", waarbij ook het rookgasafvoersysteem wordt beoordeeld en meestal gelijktijdig wordt vervangen (zie [module 8](module:m08) voor de afvoereisen zelf, en [les 15.3](les:m15l03) voor slijtdelen). Wordt een toestel op een collectief afvoersysteem vervangen, dan mag dat alleen door exact hetzelfde type toestel (bijvoorbeeld HR door HR), niet door een ander werkingsprincipe, tenzij het hele CLV-systeem daarop is beoordeeld. Leg dat uit voordat de klant zelf online een ander type bestelt.

## Waar je bevoegdheid ophoudt

Niet elke handeling mag door iedereen worden gedaan, ook niet door een ervaren monteur. In bedrijf stellen, groot onderhoud (brander, warmtewisselaar) en een installatie uit bedrijf nemen zijn voorbehouden aan de Vakbekwaam Persoon; een Voldoende Onderricht Persoon werkt hierbij onder toezicht en verantwoordelijkheid van een VP. Deze cursus geeft geen diploma en geen Bewijs van Vakmanschap CO: wat je hier leert, is de achtergrond en de redenering, niet het certificaat. Weten waar je eigen bevoegdheid ophoudt, en wanneer je een collega of een specialist nodig hebt, hoort net zo goed bij vakbekwaamheid als het kunnen vervangen van een elektrode.

## Praktijkgeval: het gesprek na de meting

Je hebt een 17 jaar oude ketel onderhouden. De verbranding is nog binnen de norm, maar de warmtewisselaar toont beginnende corrosie en de rookgasafvoer is van hetzelfde bouwjaar. Je legt de klant uit wat je hebt gemeten (de concrete waarden, niet alleen "het werkt nog"), wijst op de leeftijdsrichtlijn van 15 jaar voor toestel én afvoer samen, en op wat er gebeurt als de garantie van een eventueel nieuw toestel straks weer aan jaarlijks onderhoud gekoppeld is. Je noemt geen vast bedrag en geen merk dat toevallig in de aanbieding is: je legt de feiten voor en laat de klant kiezen tussen nu vervangen of dit jaar nog doorgaan met onderhoud, met de kanttekening dat je daar volgend jaar opnieuw naar kijkt.
`,
  checklist: [
    'Ik leg van elke controle vast wat ik heb gecontroleerd, met welk instrument, en wat het resultaat was',
    'Ik informeer de klant over het onderhoudsinterval en controleer of het gebruiksvoorschrift aanwezig is',
    'Ik leg uit dat fabrikantgarantie vaak gekoppeld is aan aantoonbaar jaarlijks onderhoud, los van de wettelijke conformiteit',
    'Ik adviseer op basis van wat ik heb gemeten en gecontroleerd, niet op basis van wat het makkelijkst te verkopen is',
    'Ik weet welke handelingen voorbehouden zijn aan een Vakbekwaam Persoon en waar mijn eigen bevoegdheid ophoudt'
  ],
  quiz: [
    {
      vraag: `Wat hoort minimaal op de sticker die een Vakbekwaam Persoon na controle op het toestel aanbrengt?`,
      opties: [
        `Gecontroleerd door, volgens welk schema, de datum, wanneer het volgende onderhoud nodig is, en het certificaatnummer`,
        `Alleen de datum van vandaag`,
        `Uitsluitend het merk, het bouwjaar en het serienummer van de ketel, zonder enige informatie over wie de controle heeft uitgevoerd`,
        `Alleen een handtekening, verder niets`
      ],
      goed: 0,
      uitleg: `De sticker bevat minimaal: gecontroleerd door, volgens welk schema, de datum, wanneer het volgende onderhoud nodig is, en het certificaatnummer. Dat is meer dan alleen een datum, een handtekening of merk en bouwjaar.`
    },
    {
      vraag: `Een klant wil dit jaar geen onderhoud laten doen om te besparen. Wat leg je uit over de fabrikantgarantie?`,
      opties: [
        `Garantie heeft niets met onderhoud te maken, dus dat maakt voor de garantie niet uit`,
        `Garantie is wettelijk verplicht en kan nooit vervallen door het overslaan van onderhoud`,
        `Sommige fabrikanten, zoals Intergas en ATAG, koppelen hun garantie aan aantoonbaar jaarlijks onderhoud; overslaan kan de garantie laten vervallen`,
        `De wettelijke conformiteit van het werk vervalt automatisch als er geen onderhoud is gedaan`
      ],
      goed: 2,
      uitleg: `Intergas laat de garantie vervallen als niet aantoonbaar minimaal jaarlijks onderhoud is gepleegd, ATAG bij vergelijkbare voorwaarden. Dat is iets anders dan de wettelijke conformiteit van het geleverde werk, die daar los van staat.`
    },
    {
      vraag: `Een toestel op een collectief rookgasafvoersysteem (CLV) moet worden vervangen. Wat mag?`,
      opties: [
        `Elk willekeurig type, zolang het maar HR is`,
        `Elk toestel, want de afvoer wordt bij vervanging altijd automatisch aangepast`,
        `Alleen een toestel van een ander merk, om recirculatie te voorkomen`,
        `Alleen exact hetzelfde type als het oude toestel (bijvoorbeeld HR door HR), tenzij het hele CLV-systeem is beoordeeld op het nieuwe type`
      ],
      goed: 3,
      uitleg: `Bij een CLV-systeem mag je alleen exact hetzelfde type toestel plaatsen als voorheen, tenzij het hele collectieve systeem is beoordeeld en geschikt bevonden voor het nieuwe type. Willekeurig wisselen kan het hele systeem onveilig maken.`
    },
    {
      vraag: `Welke handelingen zijn volgens de BRL voorbehouden aan een Vakbekwaam Persoon en dus niet aan een Voldoende Onderricht Persoon zonder toezicht?`,
      opties: [
        `Alleen het schoonvegen van de mantel`,
        `In bedrijf stellen, groot onderhoud (brander, warmtewisselaar) en een installatie uit bedrijf nemen`,
        `Het invullen van de eigen werkbon`,
        `Het parkeren van het bedrijfsbusje bij de klant en het aanbellen bij de voordeur, twee handelingen die geen enkele opleiding vereisen`
      ],
      goed: 1,
      uitleg: `In bedrijf stellen, groot onderhoud aan brander en warmtewisselaar, en het uit bedrijf nemen van een installatie zijn voorbehouden aan de Vakbekwaam Persoon; een Voldoende Onderricht Persoon werkt hierbij onder toezicht en verantwoordelijkheid.`
    },
    {
      vraag: `Wat is het verschil tussen een goed vervangingsadvies en "gewoon een nieuwe ketel verkopen"?`,
      opties: [
        `Er is geen verschil, beide leiden tot hetzelfde eindresultaat`,
        `Een goed advies wordt nooit vastgelegd op papier of in het systeem, en bestaat alleen uit een korte mondelinge opmerking tijdens het afrekenen`,
        `Een goed advies noemt de onderliggende feiten (leeftijd, staat van de afvoer, gemeten waarden), niet alleen de conclusie`,
        `Een goed advies vermeldt altijd één specifiek merk zonder toelichting`
      ],
      goed: 2,
      uitleg: `Een advies onderbouw je met wat je hebt gecontroleerd en gemeten (leeftijd van toestel en afvoer samen, staat van de warmtewisselaar, garantievoorwaarden), zodat de klant zelf kan afwegen. Alleen een conclusie geven, zonder onderbouwing, is geen advies maar een verkooppraatje.`
    }
  ],
  kaarten: [
    { voor: `Wat leg je vast van elke controle tijdens onderhoud?`, achter: `Wat je hebt gecontroleerd, op basis van welke eisen, wie het deed, wanneer, met welk instrument, en het resultaat.` },
    { voor: `Wat staat minimaal op de sticker die na controle op het toestel wordt aangebracht?`, achter: `Gecontroleerd door, volgens welk schema, de datum, wanneer het volgende onderhoud nodig is, en het certificaatnummer.` },
    { voor: `Waaraan koppelen fabrikanten zoals Intergas en ATAG hun garantie?`, achter: `Aan aantoonbaar (meestal jaarlijks) onderhoud door een erkend installateur, naast andere voorwaarden zoals waterkwaliteit.` },
    { voor: `Welk type toestel mag je op een collectief rookgasafvoersysteem (CLV) plaatsen bij vervanging?`, achter: `Alleen hetzelfde type als het oude toestel, tenzij het hele CLV-systeem is beoordeeld op het nieuwe type.` },
    { voor: `Welke leeftijdsrichtlijn noemt de BRL 6000-25 voor vervanging van een gasverbrandingstoestel?`, achter: `Ongeveer 15 jaar, waarbij ook het rookgasafvoersysteem wordt beoordeeld en meestal gelijktijdig vervangen.` },
    { voor: `Welke drie handelingen zijn voorbehouden aan een Vakbekwaam Persoon?`, achter: `In bedrijf stellen, groot onderhoud (brander, warmtewisselaar), en een installatie uit bedrijf nemen.` },
    { voor: `Geeft deze cursus een diploma of een Bewijs van Vakmanschap CO?`, achter: `Nee. De cursus geeft de achtergrond en de redenering, geen certificaat.` }
  ],
  bronnen: ['KLA-01', 'KLA-02', 'KLA-03', 'KLA-04', 'KLA-05', 'KLA-06', 'KLA-11', 'KLA-12', 'INS-07', 'INS-37', 'STO-18']
}

  ]
});
