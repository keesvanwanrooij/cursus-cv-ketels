/* ==========================================================================
   m10.js - Module 10: Meten en analyseren
   Lessen 10.1 t/m 10.6 zijn geschreven op basis van project/docs/feiten/10-meten-en-analyseren.md (MTN),
   met 01 voor CO-grenzen en certificering (WET), 02 voor gas en verbranding (GAS, VER), 03 voor
   hydraulica en elektra (KET, ELE, HYD), 04 voor rookgasafvoer (RGA) en 05 voor meetprocedures en
   installeren (MET, INS). De belangrijkste openstaande vraag van de cursus, of de wettelijke
   CO-grenzen in het rookgas (50/200/400 ppm) luchtvrij zijn of zoals afgelezen, staat uitgewerkt in
   les 10.4 (MTN-01 t/m MTN-07): de meetprotocollen zelf wijzen op "zoals afgelezen", maar geen bron
   zegt dat met zoveel woorden, dus de les geeft dat als voorzichtige conclusie, niet als harde regel.
   ========================================================================== */

CURSUS.addModule({
  id: 'm10',
  nr: 10,
  deel: 2,
  titel: 'Meten en analyseren',
  ondertitel: 'Meten is het bewijs dat je werk veilig is.',
  niveau: 'Gevorderd',
  studietijd: 8,
  kritiek: true,
  intro: 'Meten is het bewijs dat je werk veilig is. Gasdruk, rookgas, CO in de ruimte, water en elektra: wat je meet, hoe je het doet en hoe je een meetwaarde beoordeelt.',
  inleiding: [
    'Een toestel dat goed brandt, is niet automatisch een veilig toestel: dat bewijs je met een meting. Deze module behandelt het hele meettraject van de cv-monteur, van het kiezen en kalibreren van een instrument, via gasdruk en de rookgasanalyse, tot CO in de ruimte waar het toestel staat en de water-, temperatuur- en elektrische metingen die daar bij horen. Elke meetwaarde is pas bruikbaar als je weet hoe nauwkeurig hij is en volgens welke procedure hij is genomen.',
    'De belangrijkste inhoudelijke leemte van de hele cursus zit in deze module: zijn de wettelijke CO-grenzen in het rookgas (50, 200 en 400 ppm) luchtvrij, of zoals afgelezen op het instrument? Geen enkele geraadpleegde bron, ook niet de wettekst zelf, zegt dat met zoveel woorden. Les 10.4 werkt uit wat er wel is gevonden: de letterlijke tekst van het certificatieschema zegt dat de aangegeven waarde op het meetinstrument leidend is, en de meetprotocollen bevatten geen correctiestap. Dat is het sterkste bewijs dat er is, geen definitief antwoord.'
  ],
  leerdoelen: [
    'Het juiste meetinstrument bij de vraag kiezen en het verschil tussen kalibreren en justeren uitleggen',
    'Gasdruk meten en de belasting van een toestel via de gasmeter controleren',
    'Uitleggen hoe een rookgasanalyser werkt, hem voorbereiden en onderhouden',
    'Een rookgasmeting volgens de voorgeschreven procedure uitvoeren en beoordelen',
    'CO in de opstellingsruimte meten, voor en na het werk, en de uitkomst beoordelen',
    'Waterdruk, temperatuur en elektrische grootheden meten en aan de installatie koppelen'
  ],
  examen: [
    {
      vraag: `Je meet met een niet recent gekalibreerde rookgasanalyser 180 ppm CO op een open, afvoergebonden toestel (grens 200 ppm). Wat is de beste eerste stap?`,
      opties: [`Meteen afkeuren, want elke aflezing boven 150 ppm geldt als te hoog voor dit toesteltype`, `De laagste van twee losse metingen aanhouden en die zonder toelichting rapporteren aan de klant`, `Nagaan hoe zeker de meetwaarde is, en zo nodig opnieuw meten met een gecontroleerd instrument`, `Gewoon goedkeuren, want 180 ppm blijft nog onder de grens van 200 ppm voor dit toesteltype`],
      goed: 2,
      uitleg: `Een instrument waarvan de kalibratiestatus onzeker is, kan een verkeerde beslissing opleveren: 180 ppm ligt dicht bij de grens van 200 ppm, dus een kleine afwijking kan de uitkomst kantelen. Bij twijfel meet je opnieuw met een instrument waarvan je de kalibratie kent, in plaats van zomaar goed- of af te keuren op basis van een onzekere meting of de laagste van twee metingen zonder toelichting aan te houden.`
    },
    {
      vraag: `Wat is het verschil tussen kalibreren en justeren van een meetinstrument?`,
      opties: [`Kalibreren stelt de afwijking vast, justeren corrigeert die pas als hij te groot is`, `Justeren stelt de afwijking vast, kalibreren corrigeert die daarna als hij te groot is`, `Kalibreren gebeurt altijd door de fabrikant zelf, justeren mag de monteur zelf doen`, `Kalibreren en justeren zijn in de praktijk gewoon twee namen voor dezelfde handeling`],
      goed: 0,
      uitleg: `Kalibreren stelt vast hoe groot de afwijking van een instrument ten opzichte van een standaard is. Blijkt die afwijking groter dan toegestaan, dan volgt justeren: het instrument afregelen tot de aangeduide waarde weer binnen de toegestane meetfout valt. Het is dus niet omgekeerd, niet dezelfde handeling, en niet per definitie voorbehouden aan alleen de fabrikant of alleen de monteur.`
    },
    {
      vraag: `Een G4-gasmeter laat maximaal 6 m³ per uur door. Wat is ongeveer de maximale belasting die je daarmee op bovenwaarde kunt meten, met Groningen-equivalent gas (9,769 kWh/m³)?`,
      opties: [`6,0 kW`, `35,2 kW`, `97,7 kW`, `58,6 kW`],
      goed: 3,
      uitleg: `6 m³/h × 9,769 kWh/m³ ≈ 58,6 kW. De 6,0 kW is alleen het meterdebiet in m³/h zonder omrekening, de 35,2 komt uit de tijdsduur-vuistregel (niet uit deze berekening) en 97,7 kW hoort bij een grotere meter of een andere rekenfout.`
    },
    {
      vraag: `Bij het inregelen van de gas-luchtverhouding meet je de dynamische gasvoordruk. Wat betekent 'dynamisch' hier?`,
      opties: [`De druk die de netbeheerder op het hoofdnet garandeert, los van het toestel zelf`, `De druk gemeten terwijl er gas stroomt, met het toestel op vollast in bedrijf`, `De druk na het dichtdraaien van de hoofdkraan van de woning, kort na de gasmeter`, `De druk gemeten met het toestel volledig uitgeschakeld, terwijl de leiding in rust is`],
      goed: 1,
      uitleg: `Dynamische gasvoordruk meet je terwijl het toestel gas verbruikt (warmtevraag, vollast): dat laat zien of de toevoer onder belasting op peil blijft. De druk in rust (toestel uit) is een aparte controle, en de druk op het hoofdnet of na de hoofdkraan zegt niets over de doorstroming onder vollast bij het toestel zelf.`
    },
    {
      vraag: `Welke stap ontbreekt in het meetprotocol van BRL K25000 (bijlage V) voor de CO-meting in het rookgas?`,
      opties: [`Het toestel voor de meting op vollast zetten in plaats van op deellast`, `De meetwaarden noteren en bewaren in het projectdossier van het werk`, `De afgelezen waarde corrigeren voor het gemeten zuurstofpercentage in het rookgas`, `Wachten tot de weergegeven meetwaarde stabiel is voordat je hem noteert`],
      goed: 2,
      uitleg: `Het protocol laat je de meter inschakelen, wachten tot de meting stabiel is, meten op vollast (en zo nodig deellast), aflezen en vastleggen in het projectdossier, maar geeft geen stap om de afgelezen waarde te corrigeren voor zuurstofovermaat. Dat is een van de aanwijzingen dat de wettelijke grenzen zoals afgelezen worden getoetst, niet luchtvrij.`
    },
    {
      vraag: `Een open, afvoergebonden toestel met trekonderbreker: waar plaats je de sonde voor de rookgasmeting?`,
      opties: [`Buiten, bij de uitmonding van de rookgasafvoer boven op het dak van de woning`, `In de trekonderbreker, dicht bij de warme kant van het toestel, vóór de luchtbijmenging`, `Vlak na de trekonderbreker, waar de omgevingslucht al is bijgemengd met het rookgas`, `Op een willekeurige plek, de trekonderbreker mengt toch alles gelijk door elkaar`],
      goed: 1,
      uitleg: `Je meet vóór de plek waar de trekonderbreker omgevingslucht bijmengt: erna (of buiten bij de uitmonding) is het rookgas al verdund en meet je een te lage CO- en te hoge O2-waarde, ook al is de verbranding niet verbeterd. De sonde hoort dus aan de warme kant, in de trekonderbreker.`
    },
    {
      vraag: `Je meet in de opstellingsruimte voor aanvang van de werkzaamheden 12 ppm CO. Wat doe je?`,
      opties: [`Niets doen, onder 20 ppm is bij aanvang van het werk altijd veilig genoeg`, `Wachten met werken tot de bewoner zelf een raam heeft geopend in de ruimte`, `Nader onderzoek doen naar de oorzaak, deze melden aan de opdrachtgever, dan verder werken`, `Direct het toestel buiten bedrijf stellen en meteen 112 bellen zonder verder onderzoek`],
      goed: 2,
      uitleg: `Tussen 5 en 20 ppm is nader onderzoek nodig: de oorzaak van de verhoogde concentratie opsporen en dat melden aan de opdrachtgever, waarna je verder werkt. Dat is geen reden om het toestel meteen buiten bedrijf te stellen en 112 te bellen (dat geldt bij acuut gevaar) en zeker geen reden om het te negeren of alleen op de bewoner te wachten.`
    },
    {
      vraag: `Waarom meet je CO in de opstellingsruimte zowel voor als na de werkzaamheden aan een toestel?`,
      opties: [`Om te bewijzen dat de start- en eindsituatie beide veilig waren: twee verplichte metingen`, `Om te bepalen of de gasmeter aan het begin van de dag goed is afgelezen door de monteur`, `De meting na het werk is eigenlijk optioneel en dient alleen de klanttevredenheid`, `Alleen om te controleren of het meetinstrument zelf nog steeds naar behoren functioneert`],
      goed: 0,
      uitleg: `De meting voor het werk legt de startsituatie vast, de meting na het werk (voor je het toestel weer in bedrijf stelt) bewijst dat het toestel na jouw ingreep veilig is. Beide zijn verplicht, niet optioneel, en ze gaan niet over de gasmeter aflezen of alleen het instrument zelf testen.`
    },
    {
      vraag: `Een elektrochemische CO-sensor veroudert vooral door blootstelling aan CO tijdens metingen. Wat betekent dit voor het gebruik van de analyser?`,
      opties: [`Alleen de O2-sensor slijt door gebruik, de CO-sensor blijft daar juist buiten schot`, `Veel korte testmetingen en metingen bij hoge CO-concentraties verkorten de levensduur extra`, `De sensor gaat juist langer mee als je hem vaker in vervuild rookgas gebruikt`, `De sensor slijt vooral door tijdsverloop, ongeacht hoeveel je er daadwerkelijk mee meet`],
      goed: 1,
      uitleg: `Omdat CO niet van nature in de lucht voorkomt, veroudert de CO-sensor vooral door contact met CO tijdens metingen: veel testmetingen en hoge concentraties (een sterk vervuild toestel) slijten hem sneller, in plaats van langer mee te gaan. Dit pleit voor doelgericht meten in plaats van 'voor de zekerheid' vaak testen.`
    },
    {
      vraag: `Waarom is een infraroodthermometer minder geschikt om de aanvoertemperatuur op een blank koperen leiding af te lezen zonder correctie?`,
      opties: [`Koperen leidingen zijn altijd geïsoleerd, dus er is voor de meter niets te meten`, `Blank koper heeft een lage emissiefactor en reflecteert de omgeving`, `Infraroodmeters kunnen fysiek geen temperaturen meten die boven 60 graden liggen`, `Koper is simpelweg te heet voor een infraroodmeter om nauwkeurig te kunnen meten`],
      goed: 1,
      uitleg: `Blank, glimmend metaal zoals koper heeft een lage emissiefactor (ongeveer 0,02 tot 0,07): het straalt zijn eigen temperatuur nauwelijks uit en reflecteert vooral de omgeving. Een contactthermometer met klemveer, of een mat tapepunt op de leiding voor de infraroodmeter, geeft een betrouwbaardere waarde.`
    },
    {
      vraag: `Bij het onderhoud noteer je 'gasvoordruk (dynamisch)', 'branderdruk', 'netspanning' en 'controle van de aarde'. Uit welk document komt deze combinatie van controlepunten?`,
      opties: [`De Omgevingsregeling, specifiek artikel 3.46 over de certificatieschema-eisen`, `BRL 6000-25, bijlage 4 met de controlepunten voor fabricaatgebonden onderhoud`, `Een willekeurige checklist die je toevallig bij een webwinkel hebt gedownload`, `De gebruiksaanwijzing die bij de rookgasanalyser van de fabrikant wordt geleverd`],
      goed: 1,
      uitleg: `Bijlage 4 van BRL 6000-25 geeft de officiële lijst van controlepunten bij fabricaatgebonden onderhoud, met daarin naast de verbrandingsgerelateerde metingen (branderdruk, CO, O2) ook elektrische metingen (netspanning, aarde, ventilatorspanning) en de gasvoordruk (dynamisch); dat staat niet in de Omgevingsregeling, een webwinkel of de gebruiksaanwijzing van de analyser.`
    },
    {
      vraag: `Een collega zegt: "De wet zegt dat 50, 200 en 400 ppm luchtvrije waarden zijn." Wat is de juiste reactie?`,
      opties: [`Onbekend: er bestaat geen enkele wettelijke tekst met deze drie grenswaarden erin`, `Nee: de wet noemt bij alle drie de toesteltypen juist uitsluitend luchtvrije waarden, zonder uitzondering`, `Ja, dat staat letterlijk zo verwoord in de tekst van de Omgevingsregeling zelf`, `Niet helemaal: de wettekst noemt geen correctie voor zuurstofovermaat, de protocollen ook niet`],
      goed: 3,
      uitleg: `De letterlijke tekst van artikel 3.46 Omgevingsregeling spreekt alleen van "heeft gemeten", zonder correctie. Beide certificatieschema's herhalen de grenzen zonder een stap om te corrigeren voor zuurstofovermaat, en BRL 6000-25 zegt zelfs expliciet dat de op het instrument aangegeven waarde leidend is. Geen bron zegt met zoveel woorden dat de grenzen luchtvrij zijn, en de grenzen bestaan wel degelijk (art. 3.46 sub c).`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 10.1 */
{
  id: 'm10l01',
  nr: '10.1',
  titel: 'Meten als vak: wat, waarmee, hoe nauwkeurig',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt bij een vraag het juiste meetinstrument kiezen, het verschil tussen kalibreren en justeren uitleggen en de nauwkeurigheid van een meting inschatten.',
  videos: [
    { taal: 'nl', titel: 'Significante cijfers: meetwaarden en nauwkeurigheid (KEMIA)', yt: 'nzZ8ReJ3FBg', duur: '±5 min, 2022' },
    { taal: 'nl', titel: 'Meetonzekerheid (Martijn Leensen)', yt: 'Cufqu8X7iIE', duur: '±9 min, 2015' },
    { taal: 'en', titel: 'Calibration of measuring instruments (WIKA Group, VS)', yt: 'aUQyMTUAMos', duur: '±2 min, 2019' }
  ],
  tekst: `
## Waarom meten het bewijs is

Een cv-toestel dat warm wordt en niet stinkt, is nog geen bewijs dat het veilig is. Dat bewijs lever je met een meting: gasdruk, rookgas, CO in de ruimte, waterdruk, temperatuur en elektrische waarden. Deze module doorloopt ze allemaal. Deze les gaat over de gemeenschappelijke basis: welk instrument bij welke vraag hoort, en hoe zeker je van een meetwaarde kunt zijn.

## Kalibreren, justeren en verifiëren zijn drie verschillende dingen

Deze woorden worden vaak door elkaar gebruikt, maar het certificatieschema BRL K25000 maakt onderscheid:

- **Kalibreren**: vaststellen hoe groot de afwijking van een instrument is ten opzichte van een herkenbare standaard. Dit is meten, geen ingrijpen.
- **Justeren**: het instrument daarna afregelen zodat de aangeduide waarde niet meer afwijkt dan de toegestane meetfout. Dit gebeurt alleen als kalibreren een te grote afwijking aantoont: afregelen binnen de toegestane meetfout heet geen justeren.
- **Verifiëren**: controleren of een instrument (nog) binnen de toegestane meetfout valt, zonder het per se af te regelen.

!!! kern Kalibreren is meten, justeren is corrigeren
Een instrument dat "gekalibreerd" is, is daarmee nog niet automatisch bijgesteld. Kalibreren stelt de afwijking vast, justeren corrigeert hem alleen als hij te groot is.
!!!

Is een instrument gejusteerd, dan hoort daar een extra stap bij: nagaan of het gebruik van dat instrument vóór de justering tot andere beslissingen (goed- of afkeuren van eerder werk) zou hebben geleid. Een monteur die pas laat ontdekt dat zijn meter fors afweek, moet dus terugkijken naar wat hij daarmee eerder heeft goed- of afgekeurd.

## Welke norm geldt voor het instrument

Voor rookgasmetingen (CO, O2, temperatuur) en voor druk- en trekmetingen eisen beide certificatieschema's meetapparatuur volgens EN 50379 deel 2. Een instrument waarvan alleen de O2- en temperatuurmeting aan deel 2 voldoet, maar de CO-meting niet, voldoet niet: de CO-meting moet zelf ook aan deel 2 voldoen. Voor het meten van CO in de omgevingslucht mag de rookgasmeter ter indicatie worden gebruikt; bij voorkeur heb je daarnaast een persoonlijke CO-veiligheidsmeter voor je eigen veiligheid tijdens het werk.

De twee certificatieschema's wijken op één punt van elkaar af: voor het meten van trek noemt BRL 6000-25 een bereik van -50 tot 200 Pa, BRL K25000 -50 tot 150 Pa. Beide zijn de letterlijke tekst van een aangewezen schema: er is geen fout, het is een echt verschil tussen de twee schema's. Voor de praktijk maakt het weinig verschil, maar het instrument moet aan het schema van je eigen certificerende instelling voldoen.

Geen van beide schema's legt een vaste kalibratiefrequentie vast: de certificaathouder bepaalt en onderbouwt die zelf, houdt een overzicht bij van instrumenten en hun nauwkeurigheid, en laat de kalibratie herleidbaar zijn tot nationaal erkende standaarden. Fabrikanten adviseren vaak een jaarlijkse kalibratie, met controle en zo nodig vervanging van de sensoren en filters. Een incident (val, overbelasting, extreme temperatuur) is een reden om eerder te laten kalibreren dan gepland.

## Rekenvoorbeeld: wat een kleine afwijking betekent

Voor toestellen die op O2 worden afgesteld, geldt volgens de BRL Gaskeur CV een totale meetonnauwkeurigheid van maximaal 0,3 procentpunt op de O2-meting.

| Grootheid | Waarde | Toelichting |
|---|---|---|
| Gemeten O2 | 5,2% | Aflezing op de analyser |
| Toegestane afwijking | ± 0,3 procentpunt | Eis uit de BRL Gaskeur CV |
| Werkelijke O2 (bereik) | 4,9% tot 5,5% | Wat het toestel echt uitstoot |

Een verschil van 0,3 procentpunt lijkt klein, maar bij een grenswaarde die vlak bij de gemeten waarde ligt, kan het net de doorslag geven tussen goedkeuren en afkeuren. Meet je vlak bij een grens, dan is het extra belangrijk te weten of je instrument recent gekalibreerd is.

!!! gevaar Een niet-gekalibreerd instrument kan een gevaarlijke installatie ten onrechte goedkeuren
Bij een meetwaarde die dicht bij de grenswaarde ligt, kan een instrument met een onbekende of te grote afwijking het verschil maken tussen een terecht veilig oordeel en een ten onrechte veilig oordeel. Bij twijfel over de kalibratie meet je opnieuw met een instrument waarvan je de status kent, voordat je een toestel vrijgeeft.
!!!

?? Verdieping: waarom staat er geen vaste kalibratie-interval in de wet of het schema?
De schema's leggen de verantwoordelijkheid bij het bedrijf, omdat de benodigde frequentie afhangt van het type instrument, de gebruiksintensiteit en de omstandigheden (stof, vocht, schokken). Een vast getal voor alle instrumenten zou voor de meeste te ruim of te krap zijn. De prijs van die vrijheid is dat jij, niet de wet, moet kunnen onderbouwen waarom je kalibratieschema voldoet.
??

## Wat je meeneemt

Bij elke meting in deze module komt dezelfde vraag terug: welk instrument, volgens welke norm, en hoe zeker weet je dat het klopt? De volgende lessen werken dat uit voor gasdruk, rookgas, CO in de ruimte, en water-, temperatuur- en elektrische metingen.
`,
  checklist: [
    'Ik kan het verschil tussen kalibreren, justeren en verifiëren uitleggen',
    'Ik weet dat mijn meetinstrument aan EN 50379 deel 2 moet voldoen, ook voor de CO-meting',
    'Ik houd bij wanneer mijn instrumenten voor het laatst gekalibreerd zijn en waarom',
    'Ik ben extra alert als een meetwaarde dicht bij een grenswaarde ligt',
    'Ik weet dat een justering achteraf kan betekenen dat ik eerdere beslissingen moet heroverwegen'
  ],
  quiz: [
    {
      vraag: `Wat is het verschil tussen kalibreren en justeren?`,
      opties: [`Kalibreren doet altijd de fabriek, justeren mag alleen de gebruiker zelf uitvoeren`, `Beide woorden zijn in de praktijk gewoon precies hetzelfde begrip voor monteurs`, `Kalibreren stelt de afwijking vast, justeren corrigeert hem pas als hij te groot is`, `Justeren stelt eerst de afwijking vast, waarna kalibreren die vervolgens corrigeert`],
      goed: 2,
      uitleg: `Kalibreren stelt de afwijking vast ten opzichte van een standaard. Blijkt die afwijking groter dan toegestaan, dan volgt justeren: het instrument wordt afgeregeld tot de waarde weer binnen de toegestane meetfout valt. Het is dus niet omgekeerd, en het is niet aan één partij (fabriek of gebruiker) voorbehouden.`
    },
    {
      vraag: `Volgens welke norm moet apparatuur voor het meten van CO, O2 en rookgastemperatuur voldoen?`,
      opties: [`NPR 3378 (rookgasafvoer)`, `EN 442-2 (radiatorvermogen)`, `EN 50379 deel 2`, `NEN 1078 (gasleiding)`],
      goed: 2,
      uitleg: `EN 50379 deel 2 is de norm voor draagbare meetapparatuur bij verplichte metingen zoals CO, O2 en rookgastemperatuur. NEN 1078 gaat over gasleidingen, NPR 3378 is de praktijkrichtlijn daarbij, en EN 442-2 gaat over radiatorvermogens.`
    },
    {
      vraag: `Een instrument voldoet voor O2 en temperatuur aan EN 50379 deel 2, maar de CO-sensor niet. Voldoet dit instrument voor rookgasmetingen?`,
      opties: [`Ja, zolang de temperatuurmeting maar klopt`, `Alleen als het instrument minder dan een jaar oud is`, `Ja, want de belangrijkste grootheid (O2) voldoet al`, `Nee, ook de CO-meting moet aan deel 2 voldoen`],
      goed: 3,
      uitleg: `Elke grootheid waarvan de meting beslissend is voor goed- of afkeuring moet aan de norm voldoen, inclusief de CO-meting. Een instrument dat daar niet volledig aan voldoet, is niet geschikt voor dit werk, ook niet voor de andere grootheden apart.`
    },
    {
      vraag: `Waarom leggen de certificatieschema's geen vaste kalibratiefrequentie vast?`,
      opties: [`Omdat de frequentie afhangt van instrument, gebruik en omstandigheden, en het bedrijf dat zelf onderbouwt`, `Omdat alleen de fabrikant van het instrument mag bepalen hoe vaak er precies gekalibreerd wordt`, `Omdat instrumenten van goede kwaliteit naar verwachting nooit noemenswaardig zullen afwijken`, `Omdat kalibratie in dit specifieke geval wettelijk helemaal niet verplicht zou zijn`],
      goed: 0,
      uitleg: `De schema's leggen de verantwoordelijkheid bij het bedrijf, omdat een vast getal voor alle instrumenten en alle gebruiksomstandigheden te ruim of te krap zou zijn. Kalibratie zelf is wel verplicht voor beslissende metingen (dus niet aan alleen de fabrikant voorbehouden), alleen de frequentie is niet wettelijk vastgelegd.`
    },
    {
      vraag: `Je ontdekt dat je rookgasanalyser bij de laatste kalibratie fors moest worden gejusteerd. Wat is de juiste vervolgstap?`,
      opties: [`Niets, want de meter is na de justering vanzelf weer helemaal in orde`, `Alleen de fabrikant hierover informeren, zonder verder zelf iets te doen`, `De meter meteen vervangen, ook al was justeren op zichzelf al voldoende`, `Nagaan of het gebruik van de meter vóór de justering tot andere beslissingen zou hebben geleid`],
      goed: 3,
      uitleg: `Na een justering hoort te worden nagegaan of eerdere metingen met het afwijkende instrument tot een andere beslissing (goed- of afkeuring) hadden moeten leiden. Dat is meer dan alleen constateren dat de meter nu weer klopt.`
    },
    {
      vraag: `Voor het meten van trek noemt BRL 6000-25 een bereik van -50 tot 200 Pa en BRL K25000 -50 tot 150 Pa. Wat is de juiste conclusie?`,
      opties: [`Alleen het ruimste bereik (200 Pa) is in de praktijk ooit toegestaan bij enige meting`, `Dit is een echt verschil tussen de twee schema's, het instrument moet aan het schema van je eigen certificerende instelling voldoen`, `Een van beide schema's bevat een fout die door de monteur zelf genegeerd mag worden`, `Het maakt in de praktijk niets uit, want geen cv-toestel produceert ooit zoveel trek`],
      goed: 1,
      uitleg: `Beide teksten zijn letterlijk uit een aangewezen certificatieschema gelezen: het is een echt, klein verschil tussen twee schema's, geen fout. Voor jouw werk is het bereik van het schema waaronder je certificaat valt, bepalend.`
    }
  ],
  kaarten: [
    { voor: `Wat is kalibreren?`, achter: `De afwijking van een meetinstrument vaststellen ten opzichte van een herkenbare standaard. Dit is meten, geen ingrijpen.` },
    { voor: `Wat is justeren?`, achter: `Een instrument afregelen zodat de aangeduide waarde niet meer afwijkt dan de toegestane meetfout, alleen nodig als kalibreren een te grote afwijking aantoont.` },
    { voor: `Volgens welke norm moet apparatuur voor CO, O2 en rookgastemperatuur voldoen?`, achter: `EN 50379 deel 2, ook voor de CO-meting zelf.` },
    { voor: `Wat moet je nagaan als een instrument fors is gejusteerd?`, achter: `Of het gebruik van dat instrument vóór de justering tot andere beslissingen (goed- of afkeuring) zou hebben geleid.` },
    { voor: `Leggen de schema's een vaste kalibratiefrequentie vast?`, achter: `Nee. De certificaathouder bepaalt en onderbouwt zelf de frequentie, met herleidbaarheid tot nationaal erkende standaarden.` },
    { voor: `Wat is het toegestane trekmeetbereik volgens BRL 6000-25 en volgens BRL K25000?`, achter: `-50 tot 200 Pa (BRL 6000-25) tegenover -50 tot 150 Pa (BRL K25000): een echt verschil tussen de schema's.` },
    { voor: `Mag je de rookgasmeter gebruiken om CO in de omgevingslucht te controleren?`, achter: `Ja, ter indicatie. Bij voorkeur heb je daarnaast een persoonlijke CO-veiligheidsmeter voor je eigen veiligheid.` }
  ],
  bronnen: ['MTN-08', 'MTN-09', 'MTN-10', 'MTN-11', 'MTN-12', 'MET-01', 'MET-02', 'MET-03', 'MET-04', 'MET-05', 'GAS-28']
},

/* ------------------------------------------------------------------ 10.2 */
{
  id: 'm10l02',
  nr: '10.2',
  titel: 'Gasdruk meten en de belasting via de gasmeter',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de gasdruk op een toestel meten, statisch en dynamisch, en de belasting van een toestel via de gasmeter controleren.',
  videos: [
    { taal: 'nl', titel: 'Controle gas voordruk (Element4)', yt: 'SS0x3C1bN8w', duur: '±0,5 min, 2016' },
    { taal: 'nl', titel: 'Beproeven van een gasinstallatie (Berry Mauritsz)', yt: 'lqjHltT-qKM', duur: '±3 min, 2013' },
    { taal: 'en', titel: 'How to Calculate Gas Load (Roger Wakefield Plumbing Education, VS)', yt: 'dI86pGQRLPo', duur: '±7 min, 2022' }
  ],
  tekst: `
## Wat de netbeheerder levert, en wat het toestel nodig heeft

Het lagedrukgasnet staat meestal op 100 mbar en deels op 30 mbar. In woningen op het 100-mbargebied verlaagt een huisdrukregelaar de druk tot 30 mbar. Woningtoestellen op aardgas (G25.3) hebben een nominale aansluitdruk van 25 mbar; het toegestane bereik daaromheen verschilt per model (zie [les 4.1](les:m04l01)). Tussen wat het net levert en wat op het toestel aankomt, meet je dus twee dingen: de druk in de leiding en de druk bij het toestel zelf.

## Statisch en dynamisch: twee metingen, niet één

BRL 6000-25 noemt in het onderhoudsformulier expliciet de post "gasvoordruk (dynamisch)", naast "branderdruk" in dezelfde lijst met metingen.

- **Statisch** (in rust): de druk in de leiding met het toestel uitgeschakeld, geen gas stroomt. Dit laat zien of de leiding en de regelaar bij nul verbruik het juiste niveau geven.
- **Dynamisch** (onder belasting): de druk gemeten terwijl het toestel op vollast gas verbruikt. Dit laat zien of de toevoer (leidingdiameter, meter, regelaar) groot genoeg is om onder belasting op peil te blijven.

!!! kern Een goede statische druk bewijst niets over de dynamische druk
Een leiding kan in rust prima op 25 mbar staan en onder vollast toch wegzakken, bijvoorbeeld door een te dunne leiding, een te kleine meter of een regelaar die de belasting niet aankan. Meet daarom altijd beide, niet alleen de eenvoudigste van de twee.
!!!

## Rekenvoorbeeld: belasting bepalen via de gasmeter

BRL 6000-25 noemt in het onderhoudsformulier expliciet "gasverbruik vollast" als te meten grootheid: de belasting van het toestel controleer je dus niet alleen aan het typeplaatje, maar ook aan de gasmeter. De methode: klok de tijd die nodig is om een bekend volume gas (bijvoorbeeld 1 of 2 liter, af te lezen op de kleinste schaalverdeling van de meter) te laten doorstromen met het toestel op vollast, reken dat om naar een debiet in m³ per uur, en vermenigvuldig met de calorische bovenwaarde (Hs) om het vermogen te krijgen.

| Grootheid | Waarde | Toelichting |
|---|---|---|
| Doorgestroomd volume | 2 liter | Afgelezen op de kleinste wijzer van de meter |
| Gemeten tijd | 71 seconden | Met een stopwatch geklokt op vollast |
| Debiet | 2 / 71 × 3600 = 101,4 l/h = 0,1014 m³/h | Omrekening naar een uurdebiet |
| Hs (Groningen-equivalent) | 9,769 kWh/m³ | Zie [les 4.1](les:m04l01) |
| Belasting op bovenwaarde | 0,1014 × 9,769 ≈ 0,99 kW | Vergelijk dit met het typeplaatje |

Een gasmeter G4 laat maximaal 6 m³ per uur door, wat op bovenwaarde neerkomt op ongeveer 58,6 kW (6 × 9,769). Dat is de bovengrens van wat een G4-meter kan doorlaten, niet het vermogen van een specifiek toestel: een groot combitoestel op vollast tapwater kan een grotere meter (G6, G10) nodig hebben.

?? Verdieping: waarom geen vaste "tel zoveel seconden"-vuistregel?
Met Groningen-equivalent gas (Hs 35,17 MJ/m³) geldt: het aantal liter gas dat in ongeveer 35,2 seconden door de meter stroomt, komt getalsmatig overeen met het vermogen in kW op bovenwaarde. Dat is een eigen afleiding uit de definitie van belasting (debiet × Hs), geen voorschrift uit een bron: bij een ander gas (een andere Hs) verschuift het getal mee, en zonder die afleiding is een kant-en-klare vuistregel niet te controleren. Reken daarom liever zelf uit met het volume en de tijd die je aan jouw meter aflezen kan, dan een getal uit een forum over te nemen.
??

## Wat je meeneemt

Gasdruk en belasting via de gasmeter zijn twee kanten van dezelfde controle: levert de toevoer genoeg, en verbruikt het toestel wat het volgens het typeplaatje zou moeten verbruiken? Een afwijking op een van beide is een aanwijzing, niet meteen een diagnose: zoek de oorzaak voordat je onderdelen vervangt.
`,
  checklist: [
    'Ik meet de gasdruk zowel statisch (toestel uit) als dynamisch (toestel op vollast)',
    'Ik weet dat "gasvoordruk (dynamisch)" een vaste post is in het onderhoudsformulier van BRL 6000-25',
    'Ik kan de belasting van een toestel via de gasmeter berekenen met volume, tijd en Hs',
    'Ik vergelijk de berekende belasting met het typeplaatje, niet met een vuistregel zonder onderbouwing',
    'Ik weet welke gasmetercapaciteit (G4, G6, G10) bij welk maximaal debiet hoort'
  ],
  quiz: [
    {
      vraag: `Wat is het verschil tussen statische en dynamische gasdruk?`,
      opties: [`Statisch is de druk in rust (toestel uit), dynamisch is de druk terwijl het toestel gas verbruikt`, `Statisch is de druk bij de netbeheerder, dynamisch is de druk bij het toestel`, `Statisch geldt voor G-gas, dynamisch voor H-gas`, `Er is geen verschil, het zijn twee namen voor dezelfde meting`],
      goed: 0,
      uitleg: `Statische druk meet je met het toestel uitgeschakeld, dynamische druk terwijl het toestel op vollast gas verbruikt. Een leiding kan statisch prima zijn en dynamisch toch wegzakken, bijvoorbeeld door een te dunne leiding of een te kleine meter.`
    },
    {
      vraag: `Je meet 2 liter gas in 71 seconden op vollast. Wat is het debiet in m³ per uur?`,
      opties: [`0,028 m³/h`, `0,101 m³/h`, `1,014 m³/h`, `2,84 m³/h`],
      goed: 1,
      uitleg: `2 liter / 71 seconden × 3600 seconden/uur = 101,4 liter per uur = 0,1014 m³/h. De 0,028 komt uit een verkeerde omrekeningsfactor, de 1,014 en 2,84 uit rekenfouten met de decimale komma.`
    },
    {
      vraag: `Bij hetzelfde debiet (0,1014 m³/h) en Hs 9,769 kWh/m³, wat is de belasting op bovenwaarde ongeveer?`,
      opties: [`0,10 kW`, `0,99 kW`, `9,77 kW`, `96,3 kW`],
      goed: 1,
      uitleg: `0,1014 m³/h × 9,769 kWh/m³ ≈ 0,99 kW. De 0,10 kW vergeet de vermenigvuldiging met Hs, de 9,77 kW is Hs zelf en 96,3 kW komt uit een verkeerde plaatsing van de komma.`
    },
    {
      vraag: `Een G4-gasmeter laat maximaal 6 m³ per uur door. Welke belasting kun je daarmee ongeveer nog meten op bovenwaarde?`,
      opties: [`Tot ongeveer 6 kW`, `Tot ongeveer 35 kW`, `Tot ongeveer 58,6 kW`, `Onbeperkt, de meter begrenst het toestel niet`],
      goed: 2,
      uitleg: `6 m³/h × 9,769 kWh/m³ ≈ 58,6 kW: dat is de bovengrens van wat een G4-meter kan doorlaten. Een groter toestel op vollast tapwater kan daarom een grotere meter (G6 of G10) nodig hebben.`
    },
    {
      vraag: `Waarom is een vaste "tel het aantal liter in zoveel seconden"-vuistregel voor elk gas riskant?`,
      opties: [`Omdat gasmeters nooit precies aflopen`, `Omdat de tijdsduur afhangt van de calorische bovenwaarde van het gas, en die verschilt per gassoort`, `Omdat een stopwatch niet nauwkeurig genoeg is voor deze meting`, `Omdat de vuistregel alleen voor propaan geldt`],
      goed: 1,
      uitleg: `De tijdsduur die bij "1 liter komt overeen met 1 kW" horen zou, hangt af van de calorische bovenwaarde (Hs) van het gas: bij Groningen-equivalent gas is dat ongeveer 35,2 seconden, bij een ander gas verschuift dat getal mee. Reken daarom zelf uit met het volume, de tijd en de Hs van het gebruikte gas.`
    },
    {
      vraag: `Wat vertelt "gasvoordruk (dynamisch)" op het onderhoudsformulier van BRL 6000-25 je, wat "gasverbruik vollast" niet doet?`,
      opties: [`Of de gastoevoer onder belasting voldoende druk houdt, terwijl gasverbruik vollast laat zien of het toestel de juiste hoeveelheid gas verbruikt`, `Ze zijn twee namen voor precies dezelfde meting`, `Gasvoordruk gaat over het toestel, gasverbruik vollast gaat over het gasnet`, `Gasvoordruk is alleen relevant bij propaan`],
      goed: 0,
      uitleg: `Gasvoordruk (dynamisch) test of de toevoer onder belasting op peil blijft (drukverlies). Gasverbruik vollast test of het toestel de hoeveelheid gas verbruikt die bij het typeplaatje past (belasting). Beide staan los van elkaar op het onderhoudsformulier omdat ze iets anders controleren.`
    }
  ],
  kaarten: [
    { voor: `Wat is het verschil tussen statische en dynamische gasdruk?`, achter: `Statisch: druk in rust, toestel uit. Dynamisch: druk terwijl het toestel op vollast gas verbruikt.` },
    { voor: `Hoe bepaal je de belasting van een toestel via de gasmeter?`, achter: `Klok de tijd voor een bekend volume gas op vollast, reken om naar m³/h, vermenigvuldig met de calorische bovenwaarde (Hs).` },
    { voor: `Wat is de maximale belasting die een G4-gasmeter (6 m³/h) op bovenwaarde nog kan doorlaten (Groningen-equivalent gas)?`, achter: `Ongeveer 58,6 kW (6 × 9,769 kWh/m³).` },
    { voor: `Welke post noemt BRL 6000-25 expliciet in het onderhoudsformulier voor de gasdruk?`, achter: `Gasvoordruk (dynamisch), naast branderdruk in de lijst met metingen.` },
    { voor: `Wat vertelt een goede statische druk je niet?`, achter: `Of de toevoer onder vollast (dynamisch) ook op peil blijft: een leiding kan in rust goed zijn en onder belasting toch wegzakken.` },
    { voor: `Waarom is een vaste "seconden per kW"-vuistregel riskant?`, achter: `De tijdsduur hangt af van de calorische bovenwaarde van het gas; bij een ander gas dan Groningen-equivalent klopt het getal niet meer.` }
  ],
  bronnen: ['MTN-14', 'MTN-15', 'MTN-16', 'MTN-17', 'MTN-18', 'MTN-19', 'GAS-08', 'GAS-09', 'INS-24', 'INS-25', 'INS-27']
},

/* ------------------------------------------------------------------ 10.3 */
{
  id: 'm10l03',
  nr: '10.3',
  titel: 'De rookgasanalyser: opbouw, nulmeting en onderhoud',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe een rookgasanalyser werkt, hem voorbereiden voor een betrouwbare meting en zijn sensoren onderhouden.',
  videos: [
    { taal: 'nl', titel: 'Wöhler A450: rookgasanalyse (Wöhler Nederland)', yt: 'Sa32a1hiAHk', duur: '±4 min, 2018' },
    { taal: 'nl', titel: 'Testo 300 rookgasanalyse met Smart-Touch-technologie (Testo Nederland)', yt: 'YKDFFWFvFK0', duur: '±1 min, 2018' },
    { taal: 'en', titel: 'How to Use a Combustion Analyzer (Smart Buildings Center, VS)', yt: 'sxZB58e1-ss', duur: '±10 min, 2025' }
  ],
  tekst: `
## Wat er in de sonde gebeurt

Een rookgasanalyser bestaat uit een sonde (met filter en condensopvang), elektrochemische sensoren voor CO en O2, een temperatuursensor en een rekeneenheid die daaruit CO2, rendement en rookgasverlies afleidt. Een elektrochemische sensor bevat chemische bestanddelen die een kleine elektrische stroom genereren zodra ze in contact komen met het gas waarvoor de sensor is gemaakt. Die stroom is de basis voor de weergegeven meetwaarde.

## De nulmeting: waarom hij in schone lucht gebeurt

Na het inschakelen nult een analyser zijn sensoren automatisch (bij de testo 300 duurt dat ongeveer 30 seconden), en de sonde moet daarbij in frisse lucht zijn, tenzij het instrument een optie heeft om in het rookgas te nullen. Ook de trek- en druksensoren worden dan genuld, en het instrument mag daarbij niet onder druk staan. Nul je in vervuilde lucht, dan neemt de analyser die vervuiling mee als nulpunt, en meet hij daarna structureel te laag.

!!! kern Een verkeerde nulmeting maakt elke volgende meting fout
De nulmeting is geen formaliteit: hij bepaalt het referentiepunt voor alles wat je daarna meet. Nullen in bedompte lucht, uitlaatgassen of nabij een net gebruikt toestel geeft een stelselmatige fout die je pas ziet als de uitkomst niet klopt met wat je verwacht.
!!!

## Onderhoud en levensduur van de sensoren

Elektrochemische sensoren verouderen door gebruik: de chemische stoffen reageren met het gas waarvoor ze gemaakt zijn en slijten daardoor. Bij een CO-sensor gebeurt dat vrijwel uitsluitend tijdens metingen, omdat CO niet van nature in de omgevingslucht voorkomt: veel korte testmetingen en metingen bij hoge concentraties (een sterk vervuild toestel) verkorten de levensduur extra. Sensoren zijn ook gevoelig voor stofdeeltjes, roet en vocht (vandaar het filter in de sonde) en voor extreme temperatuur of grote temperatuurwisselingen (laat een analyser dus niet bij vorst of hitte in de auto liggen).

De levensduur van een zuurstofsensor loopt sterk uiteen en is geen algemene garantieduur: een sensor van betere kwaliteit (bijvoorbeeld een ECO-sensor, andere meettechniek) kan tot ongeveer 7 jaar meegaan, een goedkope sensor nog geen jaar. Leveranciers adviseren de analyser jaarlijks op te sturen voor onderhoud en kalibratie, waarbij filters worden vervangen en de veroudering van de sensoren wordt gemeten. Leeg de condensopvang handmatig na elke meting: opgehoopt condensaat kan de sensoren beschadigen en de doorstroming belemmeren.

| Onderdeel | Wat kan misgaan | Wat je doet |
|---|---|---|
| Filter in de sonde | Verzadigd met roet of vocht | Vervangen volgens fabrikantschema |
| Condensopvang | Vol, condensaat bereikt de sensoren | Na elke meting legen |
| CO-sensor | Verouderd door veel of hoge blootstelling | Jaarlijkse controle, vervangen bij afwijking |
| O2-sensor | Verouderd door tijdsverloop | Jaarlijkse controle, levensduur 1 tot 7 jaar |

?? Verdieping: waarom toont een analyser ook "CO onverdund"?
Sommige analysers, zoals de testo 300, tonen naast de gemeten waarde ook "CO onverdund": de luchtvrije waarde, berekend uit de gemeten O2 of gemeten met een meergatssonde. Dat is een functie van het instrument, geen wettelijke maatstaf: de Nederlandse grenzen van 50, 200 en 400 ppm worden getoetst aan de gewone aflezing, niet aan deze berekende waarde (zie [les 10.4](les:m10l04)).
??

## Wat je meeneemt

Een rookgasanalyser is pas zo goed als zijn voorbereiding: een schone, correcte nulmeting, een filter en condensopvang die hun werk kunnen doen, en sensoren waarvan je de leeftijd en kalibratiestatus kent.
`,
  checklist: [
    'Ik nul de analyser altijd in frisse, schone lucht, niet bij een net gebruikt toestel',
    'Ik controleer en leeg de condensopvang na elke meting',
    'Ik weet dat een CO-sensor vooral veroudert door blootstelling tijdens metingen, niet alleen door tijdsverloop',
    'Ik laat de analyser jaarlijks onderhouden en kalibreren, met vervanging van filters en verouderde sensoren',
    'Ik weet dat "CO onverdund" een instrumentfunctie is, geen wettelijke maatstaf'
  ],
  quiz: [
    {
      vraag: `Hoe genereert een elektrochemische CO-sensor zijn meetsignaal?`,
      opties: [`Chemische bestanddelen genereren een kleine elektrische stroom bij contact met het gas`, `Door de warmteontwikkeling van CO nauwkeurig te meten met een ingebouwd thermokoppel`, `Door de dichtheid van het rookgas continu te wegen met een kleine precisieweegschaal`, `Door de kleuromslag van een chemisch papiertje in de sensor te fotograferen en te analyseren`],
      goed: 0,
      uitleg: `Een elektrochemische sensor bevat stoffen die bij contact met het doelgas (hier CO) een kleine, meetbare elektrische stroom opwekken. Dat is de basis van de weergegeven waarde, geen kleuromslag, warmtemeting of gewichtsmeting.`
    },
    {
      vraag: `Waarom moet de sonde tijdens de nulmeting in frisse lucht zijn (tenzij het instrument in het rookgas kan nullen)?`,
      opties: [`Frisse lucht is nodig om de accu van de analyser voldoende op te kunnen laden`, `Dit is eigenlijk alleen een aanbeveling zonder enig gevolg voor de latere meting`, `De nulmeting bepaalt het referentiepunt: nullen in vervuilde lucht geeft een stelselmatige fout`, `Anders raakt de sonde van de analyser aan de binnenkant te heet om nog verder te functioneren`],
      goed: 2,
      uitleg: `De nulmeting legt vast wat "nul" betekent voor de sensoren. Gebeurt dat in vervuilde lucht, dan neemt het instrument die vervuiling mee als nulpunt en meet het daarna structureel te laag, ook al lijkt de meting verder normaal te verlopen.`
    },
    {
      vraag: `Waarom veroudert een CO-sensor vooral tijdens metingen, en niet zomaar door tijdsverloop?`,
      opties: [`Omdat de sensor uitsluitend slijt bij omgevingstemperaturen boven ongeveer 30 graden Celsius`, `Omdat de sensor een ingebouwde batterij bevat die na ongeveer een jaar gebruik leeg raakt`, `Omdat CO in de loop van de tijd de behuizing van de sensor volledig aanvreet en aantast`, `Omdat CO niet van nature in gewone lucht voorkomt, dus slijt hij vooral tijdens metingen`],
      goed: 3,
      uitleg: `CO komt niet van nature in gewone lucht voor, dus de chemische reactie die de sensor doet verouderen treedt vooral op tijdens metingen in rookgas. Veel korte testmetingen en hoge concentraties (een vervuild toestel) verkorten de levensduur extra.`
    },
    {
      vraag: `Wat is de aanbevolen basisonderhoudsroutine voor een rookgasanalyser?`,
      opties: [`Nooit onderhouden zolang het display nog gewoon waarden blijft tonen op het scherm`, `Alleen de batterij vervangen zodra hij leeg is, verder niets aan het instrument doen`, `Elke week alle sensoren preventief vervangen, ongeacht hun werkelijke status`, `Jaarlijks kalibreren en onderhouden: filters vervangen, condensopvang legen`],
      goed: 3,
      uitleg: `Leveranciers adviseren jaarlijkse kalibratie en onderhoud met vervanging van filters en verouderde sensoren, en het na elke meting legen van de condensopvang. Wachten tot het display duidelijk fout gaat, is te laat: sensoren verouderen geleidelijk, niet plotseling.`
    },
    {
      vraag: `Wat betekent de waarde "CO onverdund" die sommige analysers tonen?`,
      opties: [`De wettelijke grenswaarde die voor dit specifieke gemeten toesteltype zou gelden`, `De luchtvrije waarde: een instrumentfunctie, geen wettelijke maatstaf`, `De concentratie CO die op dat moment in de opstellingsruimte aanwezig is`, `Het rekenkundige gemiddelde van de laatste tien metingen die zijn opgeslagen`],
      goed: 1,
      uitleg: `"CO onverdund" is de luchtvrije waarde: berekend uit de gemeten O2 of met een meergatssonde gemeten. Het is een functie van het instrument, geen wettelijke maatstaf: de grenzen van 50, 200 en 400 ppm worden getoetst aan de gewone aflezing.`
    },
    {
      vraag: `Wat is een reden om een analyser eerder dan gepland te laten kalibreren?`,
      opties: [`Er is zojuist een nieuwe firmware-update voor het instrument beschikbaar gekomen`, `De buitenkant van de behuizing is een klein beetje vuil geworden door gebruik`, `Het is nu precies een half jaar geleden sinds de vorige geplande kalibratie plaatsvond`, `Het instrument is gevallen, overbelast, of heeft een extreme temperatuur meegemaakt`],
      goed: 3,
      uitleg: `Een incident zoals vallen, overbelasting of blootstelling aan extreme temperatuur kan de sensoren ontregelen, ook binnen de normale kalibratietermijn. Alleen tijdsverloop of een firmware-update is geen directe reden om eerder te kalibreren.`
    }
  ],
  kaarten: [
    { voor: `Hoe werkt een elektrochemische CO-sensor?`, achter: `Chemische bestanddelen genereren een kleine elektrische stroom bij contact met CO; die stroom is de basis van de meetwaarde.` },
    { voor: `Waarom nul je een analyser in frisse lucht?`, achter: `De nulmeting bepaalt het referentiepunt. Nullen in vervuilde lucht geeft een stelselmatige, te lage meting daarna.` },
    { voor: `Waarom veroudert een CO-sensor vooral tijdens metingen?`, achter: `CO komt niet van nature in gewone lucht voor, dus de sensor slijt vooral door contact met CO tijdens metingen, meer bij hoge concentraties.` },
    { voor: `Wat is het onderhoudsadvies voor een rookgasanalyser?`, achter: `Jaarlijks kalibreren en onderhouden, filters vervangen, condensopvang na elke meting legen.` },
    { voor: `Wat is de levensduur van een O2-sensor ongeveer?`, achter: `Sterk wisselend, geen algemene garantieduur: van minder dan een jaar (goedkope typen) tot ongeveer 7 jaar (bijvoorbeeld een ECO-sensor, betere kwaliteit).` },
    { voor: `Wat betekent "CO onverdund" op een analyser?`, achter: `De luchtvrije, voor zuurstofovermaat gecorrigeerde CO-waarde. Een instrumentfunctie, geen wettelijke maatstaf.` },
    { voor: `Wanneer laat je een analyser eerder dan gepland kalibreren?`, achter: `Na een incident: een val, overbelasting, of blootstelling aan extreme temperatuur.` }
  ],
  bronnen: ['MTN-20', 'MTN-21', 'MTN-22', 'MTN-23', 'MTN-24', 'MET-07', 'MET-09', 'MET-11']
},

/* ------------------------------------------------------------------ 10.4 */
{
  id: 'm10l04',
  nr: '10.4',
  titel: 'Een rookgasmeting uitvoeren en beoordelen',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt een rookgasmeting uitvoeren volgens de voorgeschreven procedure en de waarden beoordelen, ook als het antwoord op luchtvrij of afgelezen onzeker is.',
  videos: [
    { taal: 'nl', titel: 'Leer Intergas afstellen op O2 (Service monteur Rohan)', yt: '0uQ21n662js', duur: '±3 min, 2025' },
    { taal: 'nl', titel: 'Intergas Kombi Kompakt HRE 36/30 CW5 instellen (John Visser cv-optimalisatie)', yt: 'l0QIEHRronQ', duur: '±5 min, 2020' },
    { taal: 'en', titel: 'Boiler Combustion Analyzer Readings Explained: O2, CO, CO2, NOx & Stack Temp (WARE Boilers, VS)', yt: 'RYdEBjMlxHA', duur: '±6 min, 2026' }
  ],
  tekst: `
## De procedure, stap voor stap

BRL K25000 bijlage V geeft een vaste volgorde. Eerst controleer je dat er geen CO in de opstelruimte aanwezig is, dan schakel je de meter in en wacht je tot hij gereed is. De meting zelf gebeurt op vollast, en de precieze plek van de sonde hangt af van het toesteltype:

- **Open, afvoerloos toestel**: in de rookgasstroom, zo kort mogelijk aan de uitstroomzijde, ongeveer 10 cm van de warmtewisselaar.
- **Open, afvoergebonden toestel met trekonderbreker**: in de trekonderbreker, zo dicht mogelijk bij de warme kant van het toestel, vóór de plek waar lucht wordt bijgemengd.
- **Open, afvoergebonden toestel zonder trekonderbreker**: op een aanwezig meetpunt in de rookgasafvoer.
- **Gesloten toestel**: op de aanwezige meetpunten in het toestel, de rookgasadapter of een meetpunt in de afvoer, met een gesloten luchtkast.

Bij elke stap wacht je tot de meting stabiel is, en herhaal je haar op deellast als de fabrikant dat voorschrijft. Bij een gesloten toestel voer je aan het einde nog een extra meting op vollast uit: die controleert of de instelling tijdens de deellastmeting niet is verschoven.

!!! kern Meet vóór de bijmenging, niet erna
Een trekonderbreker mengt omgevingslucht bij het rookgas. Meet je erna, dan verdun je de meting: je ziet een te lage CO- en te hoge O2-waarde, zonder dat de verbranding zelf is veranderd. De sonde hoort daarom aan de warme kant, vóór de bijmenging.
!!!

Elke meetwaarde lees je af, noteer je, en bewaar je in het projectdossier. Daarna controleer je of de waarde binnen de grens van de fabrikant blijft; ontbreekt die grens, dan geldt de wettelijke tabel van 50, 200 en 400 ppm naar toesteltype.

## Luchtvrij of afgelezen: wat er wel en niet is gevonden

De belangrijkste vraag bij het beoordelen van een CO-meting is of de grenzen van 50, 200 en 400 ppm luchtvrij zijn (gecorrigeerd voor zuurstofovermaat) of zoals afgelezen op het instrument. Voor deze cursus is dat rechtstreeks in de bronnen nagezocht:

- De letterlijke wettekst (Omgevingsregeling art. 3.46 sub c) zegt alleen dat de concentratie CO "in de verbrandingsgassen" is "gemeten" en niet hoger mag zijn dan de genoemde waarde. Er staat geen correctie voor zuurstofovermaat en geen zuurstofreferentie.
- BRL 6000-25 zegt bij dezelfde tabel letterlijk: "De op het meetinstrument aangegeven waarde is leidend."
- Het meetprotocol van BRL K25000 laat je de waarde aflezen, herhalen op vol- en deellast, en vergelijken met de grens, zonder een stap om te corrigeren voor het gemeten zuurstofpercentage.

Dat is het sterkste bewijs dat in dit onderzoek is gevonden voor "zoals afgelezen", maar geen enkele bron zegt dat met zoveel woorden. Behandel het daarom als een goed onderbouwde, voorzichtige conclusie, niet als een harde regel die je aan een cursist of collega als vaststaand feit kunt presenteren.

Het begrip "CO luchtvrij" bestaat wel, als rekenmethode: CO(luchtvrij) = CO(gemeten) × luchtfactor, waarbij de luchtfactor de verhouding is tussen de werkelijk toegevoerde en de theoretisch benodigde lucht. Sommige analysers tonen dit als "CO onverdund" (zie [les 10.3](les:m10l03)). In de Verenigde Staten hanteert de norm ANSI Z21 voor sommige toestelcategorieën expliciet luchtvrije grenzen tussen 200 en 800 ppm: dat is een Amerikaanse regel, geen Nederlandse.

## Rekenvoorbeeld: hoeveel verschil maakt de correctie

| Grootheid | Waarde | Toelichting |
|---|---|---|
| Gemeten CO | 60 ppm | Aflezing op de analyser |
| Gemeten O2 | 5,26% | Aflezing op de analyser, hoort bij lambda 1,3 (G20) |
| Luchtvrije CO (rekenmethode) | 60 × 21 / (21 - 5,26) ≈ 80 ppm | Alleen als rekenmethode, niet de toetsing volgens het schema |

Bij een grens van 200 ppm (open, afvoergebonden toestel) maakt dit verschil in dit voorbeeld niets uit: zowel 60 als 80 ppm ligt daar ruim onder. Bij een meetwaarde die dichter bij de grens ligt, kan het verschil tussen wel of niet corrigeren wél de doorslag geven: dat is precies waarom deze vraag ertoe doet, en waarom je hem niet als "toch wel ongeveer hetzelfde" mag afdoen.

!!! gevaar Boven de grens: niet in bedrijf stellen
Zonder fabrikantgrens mag je een gasverbrandingsinstallatie niet in bedrijf stellen als de gemeten CO-concentratie in het rookgas de wettelijke grens (50, 200 of 400 ppm naar toesteltype) overschrijdt: zoek dan de oorzaak, in plaats van de meting te herhalen tot er een gunstiger getal uitkomt.
!!!

?? Verdieping: waarom bevestigt niemand dit met zoveel woorden?
Een certificatieschema en een wet zijn geschreven om een procedure voor te schrijven, niet om een technisch debat te beslechten. Dat de wet "gemeten" zegt zonder correctie, en dat het schema de aflezing "leidend" noemt, is voor de opstellers misschien zo vanzelfsprekend dat een expliciete uitspraak overbodig leek. Voor een leerling is dat onbevredigend, maar wel de eerlijke stand van de bronnen.
??

## Wat je meeneemt

Volg de procedure precies, meet op de juiste plek, en beoordeel de uitkomst tegen de aflezing, niet tegen een zelf berekende luchtvrije waarde, tot een bron dat expliciet anders zegt.
`,
  checklist: [
    'Ik meet op de juiste plek voor het toesteltype (vóór de trekonderbreker, in de sonde-opening, of op het meetpunt in de afvoer)',
    'Ik wacht tot de meting stabiel is en herhaal op deellast als de fabrikant dat voorschrijft',
    'Ik noteer en bewaar elke meetwaarde in het projectdossier',
    'Ik weet dat "zoals afgelezen" de best onderbouwde, maar niet expliciet bevestigde conclusie is over de CO-grenzen',
    'Ik verwar de rekenmethode "CO luchtvrij" niet met de wettelijke toetsing'
  ],
  quiz: [
    {
      vraag: `Waar plaats je de sonde bij een open, afvoergebonden toestel met trekonderbreker?`,
      opties: [`Na de trekonderbreker, waar de lucht al ruim is bijgemengd met het rookgas`, `Buiten bij de uitmonding van de rookgasafvoer, boven op het dak van de woning`, `Op een willekeurige plek, want de trekonderbreker mengt toch alles door elkaar`, `In de trekonderbreker, vóór de bijmenging, aan de warme kant van het toestel`],
      goed: 3,
      uitleg: `Meet je na de bijmenging, dan verdun je het rookgas met omgevingslucht en meet je een te lage CO- en te hoge O2-waarde, zonder dat de verbranding is verbeterd. De sonde hoort daarom vóór de bijmenging, aan de warme kant.`
    },
    {
      vraag: `Wat doe je bij een gesloten toestel als laatste stap van de meetprocedure?`,
      opties: [`Niets meer doen, want de laatste deellastmeting was op zichzelf al voldoende genoeg`, `De sonde grondig reinigen met lauw water voordat je de meting afrondt`, `Nog een extra meting op vollast, om te controleren of de instelling niet is verschoven`, `Het toestel handmatig op de hoogste stand zetten en daar de rest van de dag laten staan`],
      goed: 2,
      uitleg: `Na de deellastmeting voer je nog een keer een meting op vollast uit: dat controleert of de instelling tijdens de deellastmeting niet is verschoven, zodat je met een betrouwbaar eindresultaat afsluit.`
    },
    {
      vraag: `Wat zegt de letterlijke tekst van BRL 6000-25 over de CO-grens in het rookgas?`,
      opties: [`De op het meetinstrument aangegeven waarde is leidend`, `De grens is altijd luchtvrij gecorrigeerd`, `De grens geldt alleen na herrekening met de luchtfactor`, `De grens geldt alleen als het toestel op O2 is afgesteld`],
      goed: 0,
      uitleg: `BRL 6000-25 zegt letterlijk dat de op het meetinstrument aangegeven waarde leidend is. Dat is geen expliciete uitspraak dat de grenzen niet luchtvrij zijn, maar het wijst wel op "zoals afgelezen" als de manier waarop de grens wordt getoetst.`
    },
    {
      vraag: `Je meet 60 ppm CO met 5,26% O2 op een open, afvoergebonden toestel (grens 200 ppm). Wat is de juiste beoordeling?`,
      opties: [`Afkeuren, want de luchtvrije waarde (ongeveer 80 ppm) ligt boven de grens`, `De meting is ongeldig zolang je niet weet of de grens luchtvrij is`, `Goedkeuren op basis van de aflezing (60 ppm), ruim onder de grens van 200 ppm`, `Altijd de laagst mogelijke uitkomst kiezen, dus 60 ppm, zonder verdere toelichting`],
      goed: 2,
      uitleg: `Zowel de aflezing (60 ppm) als de luchtvrije rekenwaarde (ongeveer 80 ppm) blijft ruim onder de grens van 200 ppm: in dit voorbeeld verandert de conclusie niet. Toetsing gebeurt aan de aflezing, dus 60 ppm is de waarde die je rapporteert en beoordeelt.`
    },
    {
      vraag: `Wat toont de vergelijking met de Amerikaanse norm ANSI Z21 (luchtvrije grenzen van 200 tot 800 ppm)?`,
      opties: [`Dat de Nederlandse grenzen daardoor ook luchtvrij moeten zijn, want ze zouden op ANSI Z21 gebaseerd zijn`, `Dat de Amerikaanse grenzen daardoor ook wettelijk in Nederland zouden moeten gelden`, `Dat luchtvrije correctie nergens ter wereld ooit wordt toegepast of gebruikt`, `Dat een ander land met een ander uitgangspunt tot heel andere getallen kan komen`],
      goed: 3,
      uitleg: `ANSI Z21 is een Amerikaanse norm met een ander uitgangspunt (expliciet luchtvrij, hogere getallen) dan het Nederlandse stelsel. De vergelijking laat zien dat de keuze tussen luchtvrij en afgelezen een reëel, groot verschil kan maken, niet dat de Amerikaanse regel in Nederland geldt.`
    },
    {
      vraag: `Hoe moet je de conclusie "zoals afgelezen" uit deze les aan een collega presenteren?`,
      opties: [`Als een vaststaand, onbetwistbaar wettelijk feit, want het is de sterkst mogelijke conclusie`, `Helemaal niet noemen tegen een collega, omdat de vraag toch niet definitief oplosbaar is`, `Als een goed onderbouwde, voorzichtige conclusie, geen letterlijke bevestiging`, `Als slechts een persoonlijke mening van jezelf, zonder enige verdere onderbouwing`],
      goed: 2,
      uitleg: `De wettekst en beide certificatieschema's wijzen in dezelfde richting (aflezing is leidend, geen correctiestap), maar geen bron zegt het met zoveel woorden. Dat is precies het verschil tussen "goed onderbouwd" en "letterlijk bevestigd": beide zijn eerlijker dan een van de twee uitersten.`
    }
  ],
  kaarten: [
    { voor: `Waar meet je bij een toestel met trekonderbreker?`, achter: `In de trekonderbreker, vóór de plek waar lucht wordt bijgemengd, aan de warme kant van het toestel.` },
    { voor: `Wat doe je bij een gesloten toestel als laatste meetstap?`, achter: `Nog een keer meten op vollast, om te controleren of de instelling tijdens de deellastmeting niet is verschoven.` },
    { voor: `Wat zegt BRL 6000-25 letterlijk over de CO-waarde in het rookgas?`, achter: `"De op het meetinstrument aangegeven waarde is leidend."` },
    { voor: `Bevat het meetprotocol van K25000 een stap om te corrigeren voor zuurstofovermaat?`, achter: `Nee. Je leest de waarde af en vergelijkt die direct met de grens van de fabrikant of de wettelijke tabel.` },
    { voor: `Wat is de formule voor CO(luchtvrij)?`, achter: `CO(luchtvrij) = CO(gemeten) × luchtfactor. Dit is een rekenmethode, geen wettelijke toetsingsgrens in Nederland.` },
    { voor: `Wat doet ANSI Z21 (Verenigde Staten) anders dan het Nederlandse stelsel?`, achter: `ANSI Z21 hanteert expliciet luchtvrije grenzen van 200 tot 800 ppm, een ander uitgangspunt dan het Nederlandse stelsel.` },
    { voor: `Wat doe je zonder fabrikantgrens als de gemeten CO boven de wettelijke tabel (50/200/400 ppm) ligt?`, achter: `Niet in bedrijf stellen: eerst de oorzaak zoeken, niet de meting herhalen tot een gunstiger getal.` }
  ],
  bronnen: ['MTN-01', 'MTN-02', 'MTN-03', 'MTN-04', 'MTN-05', 'MTN-06', 'MTN-07', 'MTN-25', 'MTN-26', 'MTN-27', 'MTN-28', 'MTN-29', 'MTN-30', 'WET-45']
},

/* ------------------------------------------------------------------ 10.5 */
{
  id: 'm10l05',
  nr: '10.5',
  titel: 'CO in de opstellingsruimte meten',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt CO in de opstellingsruimte meten, voor en na de werkzaamheden, en weet welke actie bij welke uitkomst hoort.',
  videos: [
    { taal: 'nl', titel: 'Deze meter kan je leven redden bij koolmonoxide lekkage (Service monteur Rohan)', yt: 'H-flVazlFY0', duur: '±2 min, 2025' },
    { taal: 'nl', titel: 'Koolmonoxidegevaar door slecht onderhoud: zo voorkom je ongelukken (Fixcellent)', yt: '2_AxTlNCyQ8', duur: '±1 min, 2025' },
    { taal: 'en', titel: 'Carbon Monoxide Alarm Activation Guidance (NGCFE, Allen Hart, VK)', yt: 'dstFSK33nTI', duur: '±16 min, 2022' }
  ],
  tekst: `
## Twee verplichte metingen, niet één keuzemoment

In de opstellingsruimte van een gasverbrandingstoestel meet je CO op twee vaste momenten: voordat je begint (om de startsituatie vast te leggen) en na de werkzaamheden, voordat je het toestel weer in bedrijf stelt (om te bewijzen dat het na jouw ingreep veilig is). Dit zijn twee afzonderlijke, verplichte metingen op hetzelfde toestel, geen keuzemomenten en geen dubbele controle van dezelfde uitkomst.

De meting gebeurt op ongeveer 1,7 meter hoogte en op ongeveer 1 meter afstand van het toestel. Voorbeelden van een opstellingsruimte zijn een woonkamer, cv-kast, douche of collectieve ruimte.

## De driestapsregel

| Gemeten CO | Handeling |
|---|---|
| 0 tot minder dan 5 ppm | Geen bezwaar om (opnieuw) in bedrijf te stellen: veilig om te gebruiken |
| 5 tot 20 ppm | Nader onderzoek naar de oorzaak, wegnemen, melden aan de opdrachtgever |
| 20 ppm of meer | Onverwijld en schriftelijk melden aan bewoner of gebruiker, eigenaar, bevoegd gezag en certificerende instelling |

!!! kern De op het meetinstrument aangegeven waarde is leidend
Ook voor de CO-meting in de opstellingsruimte geldt dat de aflezing op je instrument bepalend is: er is geen correctie of herrekening voorgeschreven. Dezelfde formulering staat zowel bij de rookgasmeting als bij de ruimtemeting in het certificatieschema (zie [les 10.4](les:m10l04)).
!!!

Na werkzaamheden aan het toestel mag je het pas weer in bedrijf stellen nadat de CO-concentratie in de opstellingsruimte lager is dan 5 ppm, en het toestel naar jouw professionele oordeel veilig is en aan de eisen van de wet voldoet. Bij een concentratie van 5 ppm of meer volg je de tabel hierboven.

## Rekenvoorbeeld: twee metingen op één werkbon

| Moment | Gemeten CO | Handeling |
|---|---|---|
| Voor het werk | 8 ppm | Nader onderzoek: oorzaak (bijvoorbeeld een verstopt luchtinlaatfilter) opsporen en wegnemen, opdrachtgever informeren |
| Na het werk (filter vervangen) | 2 ppm | Onder 5 ppm: toestel mag weer in bedrijf worden gesteld |

Zonder de meting vooraf zou je nooit hebben geweten dat er al voor je aankomst iets mis was: de meting na het werk bewijst dan alleen dat je eigen ingreep geen nieuw probleem heeft veroorzaakt, niet dat de situatie al die tijd veilig was.

!!! gevaar Boven 20 ppm: melden, niet zelf oplossen en stilhouden
Bij 20 ppm of meer meld je dat onverwijld aan bewoner of gebruiker, eigenaar, bevoegd gezag en certificerende instelling: dat is een wettelijke plicht (art. 6.46 Bbl), geen keuze die je kunt overslaan omdat je de oorzaak zelf al denkt te hebben opgelost. Bij acuut gevaar of een ernstig vergiftigde bewoner bel je altijd 112, zie [les 1.6](les:m01l06).
!!!

?? Verdieping: waarom is 1,7 meter en 1 meter geen willekeurige keuze?
Op ademhoogte (rond 1,7 meter) en op een meter afstand van het toestel meet je ongeveer waar een volwassene in die ruimte ademt, niet direct in een eventuele pluim vlak bij het toestel en niet vlak bij de vloer waar zwaardere gassen zich kunnen verzamelen. Het is geen vervanging voor het meten in de rookgasstroom zelf (les 10.4): dit is de blootstelling van de mens in de ruimte, niet de kwaliteit van de verbranding.
??

## Wat je meeneemt

Twee metingen, dezelfde plek en hoogte, en een vaste tabel met acties: dat is de kern van CO-in-de-ruimte. Het is de meting die het dichtst bij de bewoner staat, dus de meting waar geen kortere weg voor bestaat.
`,
  checklist: [
    'Ik meet CO in de opstellingsruimte zowel voor als na de werkzaamheden',
    'Ik meet op ongeveer 1,7 meter hoogte en 1 meter afstand van het toestel',
    'Ik pas de driestapsregel (onder 5, 5 tot 20, 20 of meer ppm) correct toe',
    'Ik weet dat de melding boven 20 ppm een wettelijke plicht is, geen eigen afweging',
    'Ik stel een toestel na werkzaamheden pas weer in bedrijf onder 5 ppm en na een eigen veiligheidsoordeel'
  ],
  quiz: [
    {
      vraag: `Op welke hoogte en afstand meet je CO in de opstellingsruimte?`,
      opties: [`Ongeveer 1,7 meter hoog, 1 meter van het toestel`, `Tegen het plafond, in de verste hoek van de ruimte`, `Op de hoogte van de gasmeter, buiten de opstellingsruimte`, `Op vloerhoogte, vlak naast de voet van het toestel`],
      goed: 0,
      uitleg: `De meting gebeurt op ongeveer 1,7 meter hoogte (ademhoogte) en 1 meter afstand van het toestel: dat benadert de blootstelling van een volwassene in de ruimte, niet de rookgasstroom zelf.`
    },
    {
      vraag: `Waarom meet je CO in de opstellingsruimte zowel voor als na de werkzaamheden?`,
      opties: [`Om te controleren of het meetinstrument zelf goed werkt en gekalibreerd is`, `Twee losse verplichte metingen: de startsituatie vastleggen en achteraf bewijzen dat het veilig is`, `De meting na het werk is optioneel`, `Om te bepalen of de gasmeter goed is afgelezen`],
      goed: 1,
      uitleg: `Beide metingen zijn verplicht en hebben een ander doel: de eerste legt de startsituatie vast (was het al onveilig voor je aankwam), de tweede bewijst dat het toestel na jouw ingreep veilig is voordat je het weer in bedrijf stelt.`
    },
    {
      vraag: `Je meet voor de werkzaamheden 8 ppm CO in de opstellingsruimte. Wat doe je?`,
      opties: [`Direct het toestel buiten bedrijf stellen en melden aan de gemeente`, `Niets, 8 ppm is te laag om iets mee te doen`, `De oorzaak onderzoeken, wegnemen en de opdrachtgever informeren`, `Wachten met werken tot een collega een tweede meting doet`],
      goed: 2,
      uitleg: `Tussen 5 en 20 ppm geldt nader onderzoek: de oorzaak opsporen, wegnemen, en de opdrachtgever informeren. Melden aan bevoegd gezag en certificerende instelling geldt vanaf 20 ppm, niet al bij 8 ppm.`
    },
    {
      vraag: `Wanneer mag je een toestel na werkzaamheden weer in bedrijf stellen?`,
      opties: [`Zodra de rookgasmeting is uitgevoerd, ongeacht de uitkomst in de ruimte`, `Altijd binnen een uur na afronding van het werk`, `Zodra de klant daar om vraagt`, `Als de ruimte onder 5 ppm CO blijft en jij het toestel veilig beoordeelt`],
      goed: 3,
      uitleg: `Beide voorwaarden gelden samen: de gemeten concentratie moet onder 5 ppm liggen, én jij moet het toestel naar je professionele oordeel veilig vinden en conform de wet. Een van de twee alleen is niet genoeg.`
    },
    {
      vraag: `Welke formulering keert terug bij zowel de rookgasmeting als de CO-meting in de opstellingsruimte in het certificatieschema?`,
      opties: [`"De op het meetinstrument aangegeven waarde is leidend"`, `"Alleen een tweede meting door een collega is geldig"`, `"De laagste van twee metingen geldt als de officiële waarde"`, `"De gemeten waarde moet altijd luchtvrij worden herrekend"`],
      goed: 0,
      uitleg: `Deze formulering staat op beide plekken in het schema: de aflezing zelf is bepalend, zonder voorgeschreven correctie. Dat is een van de aanwijzingen dat CO-metingen in dit stelsel als "zoals afgelezen" worden getoetst.`
    },
    {
      vraag: `Wat is verplicht zodra je 22 ppm CO meet in de opstellingsruimte, ook als je de oorzaak meteen kunt wegnemen?`,
      opties: [`Niets, want als je de oorzaak zelf al hebt weggenomen vervalt de plicht om het voorval te melden`, `Onverwijld en schriftelijk melden aan bewoner of gebruiker, eigenaar, bevoegd gezag en certificerende instelling`, `Alleen de bewoner op de hoogte stellen, verdere melding laat je aan het installatiebedrijf over`, `Wachten tot de volgende onderhoudsbeurt om het te melden`],
      goed: 1,
      uitleg: `Vanaf 20 ppm is de meldplicht van artikel 6.46 Bbl van toepassing, aan alle vier de partijen, onverwijld: dat geldt ook als je de oorzaak zelf al hebt weggenomen. De meldplicht is een wettelijke verplichting, geen eigen afweging op basis van hoe snel je het probleem oploste.`
    }
  ],
  kaarten: [
    { voor: `Op welke hoogte en afstand meet je CO in de opstellingsruimte?`, achter: `Ongeveer 1,7 meter hoogte, 1 meter afstand van het toestel.` },
    { voor: `Waarom meet je zowel voor als na de werkzaamheden?`, achter: `Twee verplichte metingen: de startsituatie vastleggen, en na het werk bewijzen dat het toestel veilig is voor het weer in bedrijf te stellen.` },
    { voor: `Wat doe je bij 5 tot 20 ppm CO in de opstellingsruimte?`, achter: `Nader onderzoek naar de oorzaak, deze wegnemen, de opdrachtgever informeren.` },
    { voor: `Wat doe je bij 20 ppm of meer?`, achter: `Onverwijld en schriftelijk melden aan bewoner of gebruiker, eigenaar, bevoegd gezag en certificerende instelling.` },
    { voor: `Wanneer mag je het toestel na werkzaamheden weer in bedrijf stellen?`, achter: `Onder 5 ppm CO in de ruimte, én als je het toestel professioneel als veilig en wetsconform beoordeelt.` },
    { voor: `Welke formulering staat zowel bij de rookgasmeting als de ruimtemeting?`, achter: `"De op het meetinstrument aangegeven waarde is leidend": geen voorgeschreven correctie.` },
    { voor: `Geldt de meldplicht boven 20 ppm ook als je de oorzaak al hebt weggenomen?`, achter: `Ja, de meldplicht (art. 6.46 Bbl) staat los van of je het probleem zelf al hebt opgelost.` }
  ],
  bronnen: ['MTN-31', 'MTN-32', 'MTN-33', 'WET-42', 'WET-43', 'WET-44', 'WET-46']
},

/* ------------------------------------------------------------------ 10.6 */
{
  id: 'm10l06',
  nr: '10.6',
  titel: 'Water, temperatuur en elektra meten',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt druk, temperatuur, debiet en elektrische waarden meten en de resultaten aan de installatie koppelen.',
  videos: [
    { taal: 'nl', titel: 'Intergas HRE of ECO cv-ketel bijvullen (Preuter installatiebedrijf Deventer)', yt: 'giS-Qu6NxiM', duur: '±5 min, 2021' },
    { taal: 'nl', titel: 'Hoe gebruik ik een multimeter? (Elektramat)', yt: 'AphYCE9iiyk', duur: '±2 min, 2022' },
    { taal: 'en', titel: 'How to use a multimeter like a pro (The Engineering Mindset, VK)', yt: '4lAyzRxsbDc', duur: '±29 min, 2023' }
  ],
  tekst: `
## Waterdruk: één manometer, twee momenten

De waterdruk in het cv-circuit lees je af op de manometer van het toestel (of een losse manometer op de vulkraan). De vuldruk moet minimaal ongeveer 0,8 bar zijn en minstens 0,2 bar boven de tegendruk van het expansievat blijven; het toegestane bereik en de exacte manier van vullen en ontluchten verschillen per merk (zie de fabrikanthandleiding van het toestel). Meet en noteer de druk in rust (voor het werk) en na het vullen en ontluchten: een druk die na het ontluchten wegzakt, wijst op een lek of onvoldoende ontluchting, geen meetfout.

## Temperatuur: contact of infrarood, en waarom dat verschil maakt

Voor de aanvoer- en retourtemperatuur van het cv-water zijn er twee gangbare instrumenten:

- **Contactthermometer met klemveer**: klem je rechtstreeks om de leiding, geeft snel een betrouwbare waarde zonder de installatie te openen.
- **Infraroodthermometer**: meet contactloos, snel, maar gevoelig voor het oppervlak. De standaardinstelling van een eenvoudige infraroodthermometer gaat uit van een emissiefactor van 0,95, geschikt voor een dof, mat oppervlak.

!!! kern Blank koper geeft een infraroodmeter een verkeerd antwoord
Glimmend metaal zoals blank koper of messing heeft een lage emissiefactor (koper ongeveer 0,02 tot 0,07): het straalt zijn eigen temperatuur nauwelijks uit en reflecteert vooral de omgeving. Meet je zonder correctie op blank koperleidingwerk, dan kan de infraroodmeter een temperatuur tonen die dichter bij de omgevingstemperatuur ligt dan bij de werkelijke leidingtemperatuur. Gebruik een contactthermometer, of plak een stukje matte tape op de leiding als vast meetpunt voor de infraroodmeter.
!!!

Voor een temperatuursensor (NTC) in het toestel zelf geldt een ander principe: de weerstand daalt als de temperatuur stijgt. Een voorbeeldtabel van een Bosch Condens 7800i W geeft 33.404 ohm bij 0 graden, 10.115 ohm bij 25 graden, 3.624 ohm bij 50 graden, 1.260 ohm bij 80 graden en 918,3 ohm bij 90 graden (per merk en model verschillend). Met een multimeter op de ohm-stand en de tabel van het betreffende toestel kun je zo'n voeler controleren zonder te demonteren: een weerstand die niet daalt bij opwarmen, of een oneindige weerstand (open) of 0 ohm (kortsluiting), wijst op een defecte voeler.

## Debiet: uit temperatuur en vermogen

Het debiet door een cv-circuit volgt uit het vermogen en het temperatuurverschil tussen aanvoer en retour (delta T): debiet (l/h) = vermogen (W) / (1,163 × delta T).

| Vermogen | Delta T | Debiet |
|---|---|---|
| 20 kW | 20 K | 20.000 / (1,163 × 20) ≈ 860 l/h |
| 20 kW | 30 K | 20.000 / (1,163 × 30) ≈ 573 l/h |

Een lager debiet bij hetzelfde vermogen betekent een groter temperatuurverschil, en dat wijst op een grotere delta T-instelling of, onbedoeld, op een te lage pompopvoer of een verstopping.

## Elektrische metingen: wat je meet, en wat je eerst doet

BRL 6000-25 noemt bij het onderhoud van een gasverbrandingstoestel als elektrische controles: netspanning, controle van de aarde en ventilatorspanning. Voor je met een multimeter aan een cv-ketel meet: maak het onderdeel spanningsloos, schakel alle voedingen alpolig uit en beveilig tegen herinschakelen, en toon met een tweepolige spanningsaanwijzer aan dat het echt spanningsloos is, niet met een eenpolige spanningszoeker (de volledige NEN 3140-procedure staat in de Cursus Elektrotechniek). Continuïteitsmeting (doorgang), weerstand en spanning zijn de drie basismetingen van een multimeter die je bij een cv-ketel het meest gebruikt: voor een NTC-voeler, een thermokoppel, een schakelaar of een zekering.

!!! gevaar Spanning meten is iets anders dan spanningsloos aantonen
Een spanning meten die 0 volt aangeeft, bewijst niet automatisch dat een circuit veilig is: een kapotte meter, een verkeerde instelling of een verkeerde meetstand kan ook 0 volt tonen terwijl er wél spanning staat. Toon spanningsloosheid aan met een daarvoor bedoeld, direct voor en na gebruik gecontroleerd instrument, niet met een gewone multimeter op gevoel.
!!!

?? Verdieping: waarom niet gewoon altijd een infraroodmeter gebruiken?
Een infraroodmeter is sneller en contactloos, wat aantrekkelijk lijkt voor een korte controle. Maar de emissiefactor van het oppervlak bepaalt de nauwkeurigheid, en cv-leidingwerk is vaak van blank koper: precies het materiaal waar een infraroodmeter het meest kan afwijken. Een contactthermometer is trager om te plaatsen, maar onafhankelijk van de kleur of glans van het oppervlak.
??

## Wat je meeneemt

Water, temperatuur en elektra zijn de metingen die je het vaakst doet, juist omdat ze zo gewoon aanvoelen: een manometer, een thermometer, een multimeter. De risico's zitten in de details: welk instrument bij welk oppervlak, en spanningsloos maken vóór je meet, niet erna.
`,
  checklist: [
    'Ik meet de waterdruk zowel voor het werk als na het vullen en ontluchten',
    'Ik gebruik een contactthermometer of een matte tape op blank koper, niet zomaar een infraroodmeter zonder correctie',
    'Ik kan een NTC-voeler met een multimeter controleren aan de hand van de weerstandstabel van het toestel',
    'Ik kan het debiet uit vermogen en delta T berekenen',
    'Ik maak een onderdeel spanningsloos en toon dat aan met een tweepolige spanningsaanwijzer voordat ik eraan werk'
  ],
  quiz: [
    {
      vraag: `Waarom kan een infraroodthermometer op blank koperleidingwerk een onbetrouwbare temperatuur tonen?`,
      opties: [`Blank koper heeft een lage emissiefactor en reflecteert de omgeving`, `Een infraroodmeter werkt principieel niet op metaal en meet dan de lucht ervoor`, `De meter heeft dan te weinig batterijspanning`, `Koper is te heet om te meten`],
      goed: 0,
      uitleg: `Glimmend metaal zoals koper heeft een lage emissiefactor (ongeveer 0,02 tot 0,07): het straalt zijn eigen temperatuur nauwelijks uit en reflecteert vooral de omgeving. Een contactthermometer of een mat meetpunt op de leiding geeft een betrouwbaardere waarde.`
    },
    {
      vraag: `Wat betekent het als de weerstand van een NTC-voeler niet daalt terwijl je hem opwarmt?`,
      opties: [`Dat is normaal gedrag voor een NTC`, `De voeler is waarschijnlijk defect`, `De voeler heeft dan juist een hogere nauwkeurigheid`, `Dat betekent dat de voeler correct gekalibreerd is`],
      goed: 1,
      uitleg: `Een NTC-voeler moet bij opwarming een dalende weerstand tonen. Blijft de weerstand gelijk, oneindig (open) of 0 ohm (kortsluiting), dan wijst dat op een defecte voeler, niet op normaal gedrag.`
    },
    {
      vraag: `Een cv-circuit levert 20 kW bij een delta T van 30 K. Wat is het debiet ongeveer?`,
      opties: [`1720 l/h`, `290 l/h`, `573 l/h`, `860 l/h`],
      goed: 2,
      uitleg: `20.000 / (1,163 × 30) ≈ 573 l/h. De 860 l/h hoort bij delta T 20 K in plaats van 30 K, de 290 en 1720 l/h komen uit rekenfouten met de factor 2.`
    },
    {
      vraag: `Welke elektrische controles noemt BRL 6000-25 bij het onderhoud van een gasverbrandingstoestel?`,
      opties: [`Alleen de isolatieweerstand van de bedrading in het toestel`, `Alleen de spanning over de ionisatie-elektrode bij vollast`, `Alleen de netspanning`, `Netspanning, controle van de aarde en ventilatorspanning`],
      goed: 3,
      uitleg: `Bijlage 4 van BRL 6000-25 noemt netspanning, controle van de aarde en ventilatorspanning als vaste elektrische controlepunten bij fabricaatgebonden onderhoud, naast de verbrandingsgerelateerde metingen.`
    },
    {
      vraag: `Waarom bewijst een multimeter die 0 volt aangeeft niet automatisch dat een circuit veilig is om aan te raken?`,
      opties: [`Omdat een kapotte meter of een verkeerde meetstand ook 0 volt kan tonen`, `Omdat de spanning bij een cv-ketel voortdurend wisselt tussen 0 en 230 volt`, `Omdat multimeters nooit spanning kunnen meten`, `Omdat 0 volt altijd 230 volt betekent bij een cv-ketel`],
      goed: 0,
      uitleg: `Een gewone spanningsmeting met een multimeter is geen betrouwbaar bewijs van spanningsloosheid: een fout aan de meter zelf, een verkeerde stand of instelling kan ten onrechte 0 volt tonen. Spanningsloosheid toon je aan met een daarvoor bedoeld, tweepolig instrument dat je voor en na gebruik controleert.`
    },
    {
      vraag: `Wanneer wijst een wegzakkende waterdruk na het vullen en ontluchten van een cv-installatie op een probleem?`,
      opties: [`Nooit, een dalende druk is na het vullen altijd normaal gedrag van de installatie`, `Als de druk blijft zakken nadat vullen en ontluchten klaar zijn`, `Alleen als de druk boven 3 bar uitkomt`, `Alleen als je geen manometer op het toestel hebt`],
      goed: 1,
      uitleg: `Na goed vullen en ontluchten hoort de druk stabiel te blijven. Zakt hij daarna toch weg, dan is dat een aanwijzing voor een lek of voor lucht die nog niet volledig is verwijderd, geen normaal verschijnsel dat je kunt negeren.`
    }
  ],
  kaarten: [
    { voor: `Waarom is een contactthermometer vaak betrouwbaarder dan een infraroodmeter op koperleidingwerk?`, achter: `Blank koper heeft een lage emissiefactor (ongeveer 0,02 tot 0,07) en reflecteert vooral de omgeving; een contactthermometer meet onafhankelijk van de glans van het oppervlak.` },
    { voor: `Hoe herken je een defecte NTC-voeler met een multimeter?`, achter: `De weerstand daalt niet bij opwarmen, of toont oneindig (open) of 0 ohm (kortsluiting) in plaats van de verwachte waarde uit de tabel van het toestel.` },
    { voor: `Wat is de formule voor het debiet in een cv-circuit?`, achter: `Debiet (l/h) = vermogen (W) / (1,163 × delta T in K).` },
    { voor: `Welke drie elektrische metingen noemt BRL 6000-25 bij onderhoud?`, achter: `Netspanning, controle van de aarde, ventilatorspanning.` },
    { voor: `Wat toon je aan voordat je aan een spanningsloos onderdeel gaat werken?`, achter: `Spanningsloosheid, met een tweepolige spanningsaanwijzer die je voor en na gebruik controleert, niet met een gewone multimeter op gevoel.` },
    { voor: `Wanneer meet je de waterdruk van een cv-installatie?`, achter: `Voor het werk (in rust) en na het vullen en ontluchten; een druk die daarna wegzakt wijst op een lek of onvoldoende ontluchting.` },
    { voor: `Wat is de standaard emissiefactor van een eenvoudige infraroodthermometer?`, achter: `0,95, geschikt voor een dof, mat oppervlak zoals huid of hout, niet voor blank metaal.` }
  ],
  bronnen: ['MTN-34', 'MTN-35', 'MTN-36', 'MTN-37', 'HYD-22', 'INS-42', 'INS-44', 'ELE-10', 'ELE-11', 'ELE-12']
}
  ]
});
