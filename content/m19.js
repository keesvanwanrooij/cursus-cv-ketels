/* ==========================================================================
   m19.js - Module 19: Andere ketels en oudere toestellen
   Lessen 19.1 t/m 19.7 zijn geschreven op basis van project/docs/feiten/12-andere-toestellen.md (TST),
   met hergebruik van RGA/OPS (04), VER/CO/GAS/REN (02) en WET/EXA (01) voor stof die daar al vaststaat.
   Deze module herhaalt geen rookgastechniek uit module 8 of verbrandingsscheikunde uit module 4:
   waar dat nodig is, verwijst de tekst naar de betreffende les.
   ========================================================================== */

CURSUS.addModule({
  id: 'm19',
  nr: 19,
  deel: 1,
  kritiek: true,
  titel: 'Andere ketels en oudere toestellen',
  ondertitel: 'Niet elk toestel is een moderne HR-ketel, en juist de oude zijn de gevaarlijkste.',
  niveau: 'Gemiddeld',
  studietijd: 3.5,
  intro: 'Naast de moderne HR-ketel kom je oudere ketels, geisers, gaskachels en toestellen op andere brandstoffen tegen. Juist open toestellen geven CO-ongevallen. Je leert ze herkennen en weet wat er verandert als je er een vervangt.',
  inleiding: [
    'De meeste lessen in deze cursus gaan over de HR-ketel die je nu het vaakst tegenkomt. Maar bij een oudere woning, een vakantiehuis, een tussenwoning zonder gasaansluiting of een pand met een houtkachel sta je voor een ander toestel. Dan moet je kunnen herkennen wat je voor je hebt, weten waarom een open of ouder toestel meer CO-risico geeft, en weten waar je bevoegdheid ophoudt.',
    'De feiten in deze module komen uit een apart register (feiten/12-andere-toestellen.md, voorvoegsel TST) en uit stof die al vaststaat in de modules over rookgasafvoer (8), gas en verbranding (4) en wet en certificering (1). Waar die stof al ergens anders in de cursus staat, verwijst deze module daar naartoe in plaats van hem te herhalen. Voor merkspecifieke storingscodes en instelwaarden op oudere toestellen geldt dezelfde regel als overal: alleen als voorbeeld, met merk en model erbij, en alleen uit een officiele handleiding.'
  ],
  leerdoelen: [
    'De soorten ketels en toestellen indelen op brandstof, rendementsklasse en type (open of gesloten)',
    'Een atmosferische of VR-ketel herkennen en uitleggen waarom hij meer CO-risico geeft dan een gesloten HR-ketel',
    'Geisers, doorstroomtoestellen en losse gastoestellen herkennen en de risico\'s benoemen',
    'Ketels op olie, LPG, hout of pellets, warmtenetten en elektrische ketels plaatsen en weten waar jouw bevoegdheid ophoudt',
    'Uitleggen wat er verandert (afvoer, ventilatie, ruimte, afgifte) als je een oud toestel door een HR-ketel vervangt'
  ],
  examen: [
    {
      vraag: `Een klant zegt: "Mijn oude ketel heeft geen ventilator en toch is hij nooit gekeurd zoals mijn HR-ketel." Wat is de juiste reactie?`,
      opties: [
        `Klopt niet: een toestel zonder ventilator valt altijd buiten de certificeringsplicht`,
        `Klopt: alleen toestellen met een ventilator vallen onder de Gasketelwet`,
        `Klopt niet: een atmosferisch of VR-toestel is ook een gasverbrandingstoestel en valt onder BRL 6000-25`,
        `Klopt: onderhoud aan oudere toestellen is vrijgesteld zolang het toestel nog op natuurlijke trek werkt zonder enige vorm van ventilator`
      ],
      goed: 2,
      uitleg: `De certificeringsplicht van Bbl art. 6.45 en BRL 6000-25 geldt voor gebouwgebonden gasverbrandingstoestellen in het algemeen, niet alleen voor toestellen met een ventilator (zie TST-24 en RGA-01). Een atmosferisch of VR-toestel verbrandt gas en heeft dus net als een HR-ketel een CO-certificaat en een Bewijs van Vakmanschap CO nodig voor onderhoud en inbedrijfstelling.`
    },
    {
      vraag: `Waarom is een atmosferisch of VR-toestel gevoeliger voor een CO-incident dan een moderne gesloten HR-ketel?`,
      opties: [
        `Omdat een atmosferisch toestel zijn lucht uit de opstelruimte haalt en dus gevoelig is voor onderdruk`,
        `Omdat een atmosferisch toestel volgens een hardnekkig misverstand altijd op propaan werkt in plaats van op aardgas`,
        `Omdat een atmosferisch toestel een hoger vermogen heeft dan een HR-ketel`,
        `Omdat een atmosferisch toestel altijd op een CLV is aangesloten`
      ],
      goed: 0,
      uitleg: `Een open toestel (type B, zoals de meeste atmosferische en VR-ketels) haalt zijn lucht uit de opstelruimte (TST-11, RGA-01). Onderdruk in die ruimte, bijvoorbeeld door een afzuigkap, kan ervoor zorgen dat rookgas niet via de trekonderbreker naar buiten gaat maar de ruimte in komt. Een gesloten HR-toestel haalt zijn lucht van buiten en is daar niet gevoelig voor. Brandstof, vermogen en CLV zeggen hier niets over.`
    },
    {
      vraag: `Wat doet een trekonderbreker bij een atmosferisch toestel?`,
      opties: [
        `Hij verhoogt de gasdruk bij tegenvallende trek`,
        `Hij meet voortdurend de CO-waarde in het rookgas en sluit de gastoevoer automatisch af bij een te hoge waarde`,
        `Hij regelt de warmwatertemperatuur bij een combitoestel`,
        `Hij zorgt dat de werking van het toestel wordt bepaald door de eigen thermische trek, niet door de wind`
      ],
      goed: 3,
      uitleg: `De trekonderbreker (TST-07, RGA-07) ontkoppelt de brander van wisselende windinvloeden: een deel van de omgevingslucht wordt door de opening aangezogen, zodat de trek van het toestel zelf de doorslag geeft. Hij meet niets en regelt geen temperatuur of druk.`
    },
    {
      vraag: `Een waakvlam dooft. Wat gebeurt er met de gastoevoer naar de brander, en waarom?`,
      opties: [
        `Er gebeurt niets: de brander blijft gewoon aan totdat iemand het merkt`,
        `Het thermokoppel koelt af, de spanning verdwijnt en de klep sluit de gastoevoer automatisch`,
        `De gastoevoer wordt automatisch geblokkeerd door een druksensor die optisch controleert of de vlam nog brandt`,
        `De ventilator slaat af, waardoor de gasklep mechanisch dichtklapt`
      ],
      goed: 1,
      uitleg: `De waakvlam verhit een thermokoppel, dat een kleine spanning opwekt om een gasklep open te houden (TST-09). Dooft de vlam, dan koelt het thermokoppel af, verdwijnt de spanning en sluit de klep. Dit is een thermo-elektrische beveiliging, geen optische sensor, drukmeting of ventilatorschakeling.`
    },
    {
      vraag: `Wat is volgens het RIVM waar over de kans op een CO-ongeval bij een geiser vergeleken met een cv-ketel?`,
      opties: [
        `De kans is precies gelijk, want beide toestellen verbranden ongeveer dezelfde hoeveelheid gas per branduur, ongeacht het toesteltype of de leeftijd van de installatie`,
        `De kans is bij een geiser kleiner, omdat een geiser maar kort per keer draait`,
        `De kans is bij een geiser groter, maar alleen bij een geiser die op propaan werkt`,
        `De kans is bij een geiser groter, al veroorzaken cv-ketels tegenwoordig meer incidenten in absolute aantallen`
      ],
      goed: 3,
      uitleg: `Het RIVM stelt dat de kans op een CO-ongeval bij een geiser groter is dan bij een cv-ketel (TST-13). Omdat het aantal geisers in woningen sterk is afgenomen, veroorzaken cv-ketels tegenwoordig wel meer incidenten in absolute aantallen. Draaitijd, brandstofsoort en verbruik per uur zijn hier niet de verklaring.`
    },
    {
      vraag: `Je treft bij een klant een oude keukengeiser aan zonder CO-melder in de ruimte. Wat schrijft BRL 6000-25 hierover voor?`,
      opties: [
        `Je moet de geiser direct en zonder verder onderzoek buiten bedrijf stellen, want afvoerloze toestellen zijn overal verboden`,
        `Je hoeft niets te doen: een geiser in de keuken valt buiten elke regel`,
        `Je adviseert een CO-melder en legt dat advies vast; verwijderen is geen wettelijke plicht`,
        `Je meldt dit altijd bij de gemeente, ook zonder gemeten CO-waarde`
      ],
      goed: 2,
      uitleg: `Zonder CO-melder bij een open of afvoerloos toestel adviseer je een CO-melder en leg je dat advies vast (TST-18, WET-61). Dat is iets anders dan het toestel verwijderen of zelf een melder plaatsen: dat schrijft het schema niet voor. Een keukengeiser tot 15 kW in bestaande bouw mag onder voorwaarden blijven staan (RGA-01), en een melding aan de gemeente is pas aan de orde bij een gemeten CO-waarde boven 20 ppm.`
    },
    {
      vraag: `Wat is het verschil tussen een open en een gesloten gaskachel?`,
      opties: [
        `Een open kachel gebruikt lucht uit de ruimte, een gesloten kachel heeft een eigen luchttoevoer naar buiten`,
        `Een gesloten kachel heeft volgens een hardnekkig misverstand geen brander, terwijl een open kachel er wel een heeft`,
        `Een gesloten kachel werkt alleen op propaan, een open kachel alleen op aardgas`,
        `Een open kachel heeft een hoger rendement dan een gesloten kachel`
      ],
      goed: 0,
      uitleg: `Een open gaskachel haalt zijn verbrandingslucht uit de ruimte waarin hij staat, ook met glas of een deurtje voor de vlammen; een gesloten kachel heeft een eigen leiding naar buiten (TST-19). Beide typen hebben een brander en kunnen op verschillende gassoorten staan. Milieu Centraal noemt gesloten kachels juist veiliger en zuiniger, niet omgekeerd.`
    },
    {
      vraag: `Een gebouwgebonden gasinfraroodstraler van 60 kW hangt in een werkplaats. Een losse, verplaatsbare terraskachel van 8 kW staat op een terras. Welke van de twee valt onder de CO-certificeringsplicht van Bbl art. 6.45?`,
      opties: [
        `Beide, want allebei verbranden ze op de een of andere manier gas, en de wet maakt daarbij geen onderscheid naar vermogen of plaats`,
        `Alleen de gebouwgebonden infraroodstraler; de losse terraskachel valt daarbuiten`,
        `Alleen de terraskachel, omdat een terraskachel meer risico geeft in de buitenlucht`,
        `Geen van beide, want beide toestellen zijn onder de 100 kW-grens`
      ],
      goed: 1,
      uitleg: `De certificeringsplicht geldt voor gebouwgebonden gasverbrandingstoestellen tot 100 kW, waaronder gebouwgebonden helder- en donkerstralers (TST-22). Een losse, verplaatsbare terraskachel die niet aan het gebouw is verbonden valt daarbuiten, ongeacht het vermogen. De 100 kW-grens speelt hier dus geen rol: het gaat om "gebouwgebonden" of niet.`
    },
    {
      vraag: `Een klant vraagt of jij als CO-gecertificeerd monteur ook zijn oude olieketel mag onderhouden. Wat is het juiste antwoord?`,
      opties: [
        `Ja, olie en gas verbranden allebei op basis van hetzelfde chemische principe, dus het Bewijs van Vakmanschap CO dekt dit ook`,
        `Ja, zolang het vermogen van de olieketel onder 100 kW blijft`,
        `Nee: BRL 6000-25 en het Bewijs van Vakmanschap CO gelden alleen voor gasverbrandingstoestellen`,
        `Nee, tenzij de olieketel op propaan is afgesteld`
      ],
      goed: 2,
      uitleg: `BRL 6000-25 en de certificeringsplicht van Bbl art. 6.45 gelden uitsluitend voor toestellen die op gas werken (TST-24). Een olieketel verbrandt geen gas en valt dus buiten dit certificeringsstelsel, ook al is het verbrandingsprincipe verwant. Het vermogen en een eventuele propaanafstelling (die alleen voor gastoestellen relevant is) veranderen dat niet.`
    },
    {
      vraag: `Wat klopt over het koudemiddelcircuit van een gasabsorptiewarmtepomp (bijvoorbeeld met ammoniak als koudemiddel)?`,
      opties: [
        `Dat circuit valt automatisch onder het Bewijs van Vakmanschap CO, want het toestel heeft ook een gasbrander die daaronder valt`,
        `Dat circuit valt nergens onder, omdat ammoniak geen F-gas is`,
        `Dat circuit mag alleen door de fabrikant zelf worden geopend, nooit door een gecertificeerd installateur`,
        `Daarvoor is sinds 29 september 2025 een apart certificaat voor natuurlijke koudemiddelen nodig, los van het CO-certificaat`
      ],
      goed: 3,
      uitleg: `Sinds 29 september 2025 is voor alle koudemiddelen, ook natuurlijke zoals ammoniak, een apart persoonscertificaat verplicht (TST-30, TST-31). De gasbrander van het toestel valt onder de CO-certificering, het koudemiddelcircuit onder deze aparte certificering: het zijn twee verschillende vakgebieden in één toestel, niet automatisch gedekt door elkaar.`
    },
    {
      vraag: `Een woning wordt aangesloten op een warmtenet met een afleverset. Welke uitspraak klopt over wie dat mag plaatsen?`,
      opties: [
        `Alleen iemand met het Bewijs van Vakmanschap CO, want een afleverset is toch ook een soort verwarmingstoestel voor de woning`,
        `InstallQ heeft voor het plaatsen van afleversets een eigen erkenningsregeling, los van het Bewijs van Vakmanschap CO`,
        `Iedereen mag dit doen: er bestaat geen erkenning voor afleversets`,
        `Alleen medewerkers van het warmtebedrijf zelf, nooit een installatiebedrijf`
      ],
      goed: 1,
      uitleg: `InstallQ heeft de erkenningsregeling Afleversets ontwikkeld, met eigen e-learning, theorietoets en praktijkexamen (TST-33). Dit staat los van het Bewijs van Vakmanschap CO, omdat een afleverset geen gas verbrandt en dus niet onder BRL 6000-25 valt. De regeling staat open voor erkende installatiebedrijven, niet uitsluitend voor het warmtebedrijf zelf.`
    },
    {
      vraag: `Je vervangt een atmosferisch toestel op een bouwkundig collectief kanaal (shunt, onderdruk) door een HR-ketel. Waarom is dat kanaal niet zonder meer geschikt voor het nieuwe toestel?`,
      opties: [
        `Een HR-toestel geeft met een ventilator lichte overdruk bij een lagere, condenserende rookgastemperatuur, wat niet past bij het oude kanaal`,
        `Omdat het kanaal te breed is voor een HR-toestel`,
        `Omdat een HR-toestel volgens een hardnekkig misverstand alleen op een individuele afvoer mag, nooit op een collectief kanaal, wat voor elk toestel zou gelden`,
        `Omdat het kanaal na 1 april 2023 wettelijk is afgeschreven`
      ],
      goed: 0,
      uitleg: `Een atmosferisch toestel werkt op natuurlijke trek (onderdruk, warme rookgassen die opstijgen); een HR-toestel drukt het rookgas met een ventilator en lichte overdruk weg, bij een veel lagere temperatuur (TST-38, RGA-24). Een bouwkundig kanaal dat voor de oude situatie is berekend, is daar niet zonder meer geschikt voor. Een individuele afvoer is niet de enige oplossing (een modern overdruk-CLV bestaat) en 1 april 2023 heeft hier niets mee te maken.`
    },
    {
      vraag: `Wat controleer je volgens BRL 6000-25 bij het vervangen van een afvoergebonden toestel, voordat je de bestaande afvoer laat zitten?`,
      opties: [
        `Alleen of de afvoer er esthetisch nog netjes uitziet`,
        `Niets: de afvoer hoort volgens sommige monteurs bij het gebouw en is dus alleen de verantwoordelijkheid van de eigenaar, niet van de installateur`,
        `Alleen of de afvoer van hetzelfde merk is als het nieuwe toestel`,
        `Of de afvoer grondig is gecontroleerd en beoordeeld als geschikt voor minimaal 15 jaar resterende levensduur`
      ],
      goed: 3,
      uitleg: `BRL 6000-25 eist dat het bestaande afvoersysteem gelijktijdig met het toestel wordt vervangen, tenzij het grondig is gecontroleerd en beoordeeld als geschikt voor minimaal 15 jaar resterende levensduur (TST-39, RGA-80). De buitenkant zegt daar te weinig over, het merk van de afvoer is niet de eis, en de installateur blijft verantwoordelijk voor deze beoordeling.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 19.1 */
{
  id: 'm19l01',
  nr: '19.1',
  titel: 'Overzicht: soorten ketels en toestellen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt ketels indelen op brandstof, rendementsklasse (HR, VR) en type (open of gesloten, solo of combi) en herkent ze op het typeplaatje.',
  videos: [
    { taal: 'nl', titel: 'CV-ketel of een geiser: wat is dit apparaat? (Homekeur, bouwkundige keuring)', yt: 'Xvn6LKJpfH4', duur: '±2 min, 2020' },
    { taal: 'nl', titel: 'Hoe testen wij cv-ketels? (Consumentenbond)', yt: 'EJ58KENed-Y', duur: '±3 min, 2022' },
    { taal: 'en', titel: 'Boiler types explained and what you need to know (Worcester Bosch, VK)', yt: 'XLia8aO2kNk', duur: '±1 min, 2020' }
  ],
  tekst: `
## Niet elke ketel is een HR-ketel

In de rest van deze cursus staat de moderne HR-ketel centraal. Maar bij een oudere woning, een vakantiehuis of een pand zonder gasaansluiting kom je andere toestellen tegen: een conventionele of VR-ketel, een geiser, een gaskachel, een toestel op olie of pellets, of een afleverset van een warmtenet. Deze module helpt je ze te herkennen en te weten wat daarbij anders is.

## Drie manieren om een toestel in te delen

Een gasverbrandingstoestel deel je in op drie onafhankelijke kenmerken:

1. **Rendementsklasse**: hoe zuinig het toestel is en of het condenseert.
2. **Solo of combi**: alleen verwarming, of ook warm tapwater.
3. **Open of gesloten**: waar de verbrandingslucht vandaan komt (zie [les 8.1](les:m08l01)).

## Rendementsklasse: conventioneel, VR en HR

Een **conventionele ketel (CR)** heeft een atmosferische brander zonder ventilator (natuurlijke trek) en condenseert de waterdamp in het rookgas niet. Een **VR-ketel** (verbeterd rendement) werkt volgens hetzelfde principe, met minder verlies, maar condenseert net als de conventionele ketel niet: de warmte van de waterdamp verdwijnt met het rookgas.

Een **HR-ketel** (hoogrendement) koelt het rookgas in de warmtewisselaar zo ver af dat de waterdamp condenseert. Die condensatiewarmte wordt mee benut, waardoor het rendement op onderwaarde boven 100% kan komen (zie [les 4.2](les:m04l02) en [les 4.6](les:m04l06)). Bij aardgas is die winst theoretisch maximaal circa 11% van de onderwaarde.

!!! kern Condenseren is het verschil, niet de ventilator
Het onderscheid tussen VR en HR gaat niet over "wel of geen ventilator", maar over "wel of geen condensatie van de waterdamp in het rookgas". Een VR-ketel kan een ventilator hebben en toch niet condenseren. Herken een HR-ketel aan de kunststof of RVS afvoer met weerstandsklasse W en aan een condensaataansluiting (zie [les 8.3](les:m08l03)).
!!!

Het Gaskeur-label van Kiwa kende vroeger drie HR-niveaus (HR100, HR104 en HR107); op een gegeven moment is dat samengevoegd tot een enkel HR-label, met een eis die gelijk is aan die van het voormalige HR107: 107% rendement op onderwaarde, ongeveer 96,5% op bovenwaarde. Het precieze moment van die samenvoeging en de precieze percentages van de oude labels HR100 en HR104 zijn in het feitenregister niet met een sterke bron te bevestigen: gebruik ze niet als harde datum of harde getallen, alleen als naam die je nog op een oud typeplaatje kunt tegenkomen.

## Solo of combi

Een **solo ketel** verwarmt alleen het cv-water; voor warm tapwater is een apart toestel nodig, zoals een boiler of een keukengeiser. Een **combiketel** verwarmt zowel het cv-water als het tapwater in één toestel, en verhit het tapwater op het moment van gebruik (doorstroomprincipe). De meeste woningen in Nederland hebben een combiketel. De CW-klasse van een combiketel (het tapdebiet) staat al met een Kiwa-bron in [les 7.2](les:m07l02) en in het feitenregister van module 2 (REN-11 tot REN-15).

## Het typeplaatje lezen

Op het typeplaatje van elk gasverbrandingstoestel staan onder meer de toestelcategorie (bijvoorbeeld II2EK3P, zie [les 4.1](les:m04l01)), de aansluitwijze (A/B/C-indeling, zie [les 8.1](les:m08l01)), de CE-markering en het vermogen. De exacte lay-out verschilt per fabrikant en staat in de installatiehandleiding van dat toestel.

## Praktijkgeval: wat hangt hier?

Je komt bij een klant met een toestel in een keukenkast waarvan niemand weet wat het precies is. Je gaat systematisch te werk:

1. **Typeplaatje zoeken.** Merk, model, categorie en aansluitwijze staan erop.
2. **Solo of combi?** Is er een aparte boiler of geiser voor warm water, of doet dit toestel alles?
3. **Open of gesloten?** Zit er een aparte luchttoevoerleiding naar buiten, of alleen een afvoer?
4. **Condensaat aanwezig?** Een sifonaansluiting en een kunststof of RVS afvoer wijzen op HR; metaal zonder condensaat wijst op conventioneel of VR.

Alleen met het typeplaatje en de handleiding erbij weet je zeker wat je voor je hebt: gokken op het oog leidt tot verkeerde aannames over veiligheid en onderhoud.
`,
  checklist: [
    'Ik kan rendementsklasse, solo/combi en open/gesloten als drie losse kenmerken van elkaar onderscheiden',
    'Ik weet dat het verschil tussen VR en HR condensatie is, niet de aanwezigheid van een ventilator',
    'Ik zoek bij een onbekend toestel altijd eerst het typeplaatje en de handleiding op',
    'Ik gebruik oude Gaskeur-labels (HR100, HR104) alleen als herkenningsnaam, niet als hard rendementsgetal'
  ],
  quiz: [
    {
      vraag: `Wat is het wezenlijke verschil tussen een VR-ketel en een HR-ketel?`,
      opties: [
        `Een HR-ketel heeft altijd een ventilator die de rookgassen actief wegblaast, en een VR-ketel werkt altijd op natuurlijke trek zonder ventilator`,
        `Een HR-ketel condenseert de waterdamp in het rookgas en benut die warmte, een VR-ketel niet`,
        `Een VR-ketel werkt alleen op propaan, een HR-ketel alleen op aardgas`,
        `Een VR-ketel is altijd een combiketel en een HR-ketel altijd solo`
      ],
      goed: 1,
      uitleg: `Het onderscheidende kenmerk is condensatie: een HR-ketel koelt het rookgas zo ver af dat de waterdamp condenseert en die warmte wordt benut, een VR-ketel doet dat niet. De ventilator, de brandstofsoort en solo/combi zijn losse kenmerken die hier niets mee te maken hebben.`
    },
    {
      vraag: `Een oud typeplaatje vermeldt "HR104". Wat is de juiste omgang met dat getal in je werk?`,
      opties: [
        `Je rekent er zonder twijfel mee als exact rendement op onderwaarde`,
        `Je zet het zonder verder nadenken gelijk aan het huidige HR-label van 107 procent op onderwaarde, want de labelnaam klinkt vergelijkbaar genoeg`,
        `Je negeert het label volledig, want het zegt niets over het toestel`,
        `Je gebruikt het als herkenningsnaam van een oud Gaskeur-label; het precieze percentage is niet met een sterke bron bevestigd`
      ],
      goed: 3,
      uitleg: `HR104 was een van de oude Gaskeur-niveaus, sinds 2015 vervangen door één HR-label. Het exacte percentage van HR104 is in het feitenregister niet met een primaire bron bevestigd (alleen HR107/HR is dat wel), dus gebruik het als naam en niet als rekengetal. Het zegt wel iets (dit was een condenserend toestel), dus volledig negeren is ook niet juist.`
    },
    {
      vraag: `Wat bepaalt of een toestel solo of combi is?`,
      opties: [
        `Of het toestel alleen cv-water verwarmt, of ook warm tapwater op het moment van gebruik`,
        `Of het toestel condenseert of niet`,
        `Of het toestel op natuurlijke trek of met een ventilator werkt`,
        `Of het toestel open of gesloten is, dus of de verbrandingslucht uit de opstelruimte komt of van buiten via een eigen leiding`
      ],
      goed: 0,
      uitleg: `Solo/combi gaat over de functie: alleen verwarming (solo, met eventueel een apart toestel voor warm water) of verwarming plus warm tapwater in één toestel (combi). Condensatie (VR/HR), open/gesloten en de aanwezigheid van een ventilator zijn drie andere, onafhankelijke kenmerken.`
    },
    {
      vraag: `Waar vind je de toestelcategorie (bijvoorbeeld II2EK3P) en de aansluitwijze (bijvoorbeeld C13) van een specifiek toestel?`,
      opties: [
        `Alleen in het feitenregister van deze cursus`,
        `Nooit op het toestel zelf: je moet daarvoor altijd rechtstreeks contact opnemen met de fabrikant of de importeur van het toestel`,
        `Op het typeplaatje van het toestel, met verdere details in de installatiehandleiding`,
        `Op de meterkast, samen met de gasmeter`
      ],
      goed: 2,
      uitleg: `De toestelcategorie en de aansluitwijze staan op het typeplaatje van het toestel zelf; de installatiehandleiding geeft de details en de toegestane varianten. Het feitenregister van deze cursus is bedoeld voor de cursist, niet voor het toestel, en de gasmeter zegt niets over het toestel.`
    },
    {
      vraag: `Een klant heeft een cv-ketel en daarnaast een losse keukengeiser voor warm water. Wat zegt dat over de cv-ketel?`,
      opties: [
        `De cv-ketel is een solo ketel: voor warm tapwater is apart een geiser nodig`,
        `De cv-ketel is een combiketel`,
        `De cv-ketel is een conventionele ketel, want die combinatie met een losse geiser kwam vooral voor bij oudere, niet-condenserende toestellen`,
        `De cv-ketel is een gesloten toestel`
      ],
      goed: 0,
      uitleg: `Als er een apart toestel (geiser of boiler) nodig is voor warm tapwater, is de cv-ketel een solo ketel: hij verwarmt alleen het cv-water. Dat zegt niets over de rendementsklasse (conventioneel, VR of HR) of over open/gesloten: dat zijn losse kenmerken.`
    },
    {
      vraag: `Je twijfelt of een toestel condenseert (VR/conventioneel) of niet (HR). Welke twee aanwijzingen helpen je het snelst?`,
      opties: [
        `De kleur van de mantel en het bouwjaar op de doos`,
        `Het gewicht van het toestel en de plek waar het in de woning hangt`,
        `Het materiaal van de afvoer (HR: kunststof of RVS) en de condensaataansluiting`,
        `Het geluid van de ventilator en de kleur van de vlam in de kijkruit, twee dingen die niets zeggen over condensatie`
      ],
      goed: 2,
      uitleg: `Het materiaal en de klasse van de afvoer, en de aanwezigheid van een condensaataansluiting (sifon), zijn de directe, technische aanwijzingen voor condensatie (zie ook les 8.3). Kleur, gewicht, geluid en plek zeggen hier niets betrouwbaars over.`
    }
  ],
  kaarten: [
    { voor: `Wat is het verschil tussen een conventionele ketel, een VR-ketel en een HR-ketel?`, achter: `Conventioneel en VR condenseren niet (VR is een verbeterde uitvoering met minder verlies); HR koelt het rookgas zo ver af dat de waterdamp condenseert en benut die warmte.` },
    { voor: `Wat is het verschil tussen een solo ketel en een combiketel?`, achter: `Solo verwarmt alleen het cv-water (apart toestel nodig voor warm water); combi verwarmt ook het tapwater, op het moment van gebruik.` },
    { voor: `Welke drie onafhankelijke kenmerken deel je een gasverbrandingstoestel op in?`, achter: `Rendementsklasse (conventioneel/VR/HR), solo of combi, en open of gesloten (type B of C).` },
    { voor: `Wat betekende het oude Gaskeur-label HR107, en geldt dat nog?`, achter: `107% rendement op onderwaarde, circa 96,5% op bovenwaarde. Dit heet inmiddels gewoon "HR", met dezelfde eis.` },
    { voor: `Waarom mag je de oude percentages van HR100 en HR104 niet als hard feit gebruiken?`, achter: `Ze zijn in het feitenregister niet met een primaire bron (een Kiwa-BRL van voor 2015) bevestigd; gebruik ze alleen als herkenningsnaam.` },
    { voor: `Wat staat er op het typeplaatje van een gasverbrandingstoestel?`, achter: `Onder meer de toestelcategorie (bijvoorbeeld II2EK3P), de aansluitwijze (A/B/C-indeling), de CE-markering en het vermogen.` },
    { voor: `Hoe herken je snel of een toestel condenseert?`, achter: `Aan het materiaal van de afvoer (kunststof of RVS met weerstandsklasse W wijst op HR) en de aanwezigheid van een condensaataansluiting.` }
  ],
  bronnen: ['TST-01', 'TST-02', 'TST-04', 'TST-06', 'REN-03', 'REN-04', 'REN-06', 'GAS-14', 'RGA-01']
},

/* ------------------------------------------------------------------ 19.2 */
{
  id: 'm19l02',
  nr: '19.2',
  titel: 'Atmosferische en VR-ketels',
  duur: 30,
  type: 'les',
  leerdoel: 'Je herkent een atmosferische of VR-ketel, legt uit hoe hij zonder ventilator werkt (natuurlijke trek, trekonderbreker) en waarom hij CO-gevoelig is.',
  videos: [
    { taal: 'nl', titel: 'Tips om je cv-ketel te onderhouden (ID.nl)', yt: 'acWBMzF_SQM', duur: '±2 min, 2022' },
    { taal: 'nl', titel: '...', zoek: 'atmosferische ketel trekonderbreker werking uitleg' },
    { taal: 'en', titel: 'How a thermocouple, thermoelectric and ASD work (Tomkat Gas Training, VK)', yt: 'ropOHs5gW3M', duur: '±21 min, 2021' }
  ],
  tekst: `
## Werken zonder ventilator

Een atmosferische of VR-ketel heeft geen ventilator. De brander werkt met **natuurlijke trek**: de hete rookgassen zijn lichter dan de omgevingslucht en stijgen op, wat lucht van onderaf de brander in trekt. Dat is precies hetzelfde principe als bij een open haard, alleen dan gecontroleerd in een gesloten verbrandingskamer.

Natuurlijke trek is gevoelig voor omstandigheden die je niet in de hand hebt: wind rond de schoorsteen, temperatuurverschil met de buitenlucht, en de lengte en staat van het kanaal. Daarom heeft een atmosferisch toestel een **trekonderbreker** (ook wel valwindafleider): een open verbinding tussen de opstelruimte en de rookgasafvoer, net boven de verbrandingskamer.

!!! kern De trekonderbreker ontkoppelt het toestel van de wind
Een trekonderbreker zorgt dat de werking van het toestel wordt bepaald door de eigen thermische trek, niet door wisselende windinvloeden of een valwind in de schoorsteen. Een deel van de omgevingslucht wordt door de opening aangezogen, zodat een plotselinge terugslag van buiten niet rechtstreeks bij de brander komt. Zie ook de typeaanduiding B11 en B11BS in [les 8.1](les:m08l01).
!!!

## Waakvlam en thermokoppel

De meeste atmosferische en VR-toestellen hebben, in plaats van elektronische ontsteking, een **waakvlam**: een klein, continu brandend vlammetje dat de grotere brander ontsteekt. De waakvlam heeft een tweede functie: hij verhit een **thermokoppel**, twee samengevoegde metalen die daardoor een kleine elektrische spanning opwekken. Die spanning houdt een elektromagnetische gasklep open. Dooft de waakvlam, dan koelt het thermokoppel af, verdwijnt de spanning en sluit de klep de gastoevoer automatisch.

Dit is een simpele maar robuuste beveiliging: zonder vlam geen gastoevoer, zonder dat er elektriciteit uit het lichtnet nodig is. Bij het aansteken moet de bedieningsknop meestal circa 30 seconden ingedrukt blijven, tot het thermokoppel zelf voldoende spanning opwekt.

## Waarom meer CO-risico

Een atmosferisch of VR-toestel is bijna altijd een **open toestel** (type B): het haalt zijn verbrandingslucht rechtstreeks uit de opstelruimte (zie [les 8.1](les:m08l01) en [les 8.7](les:m08l07)). Dat maakt het gevoelig voor onderdruk in die ruimte, bijvoorbeeld door een afzuigkap, een wasdroger of mechanische ventilatie: bij te veel onderdruk kan het rookgas niet via de trekonderbreker naar buiten en komt het (deels) de ruimte in.

Daar komt bij dat een ouder toestel vaker een oudere, niet meer optimale afvoer heeft, en dat de veiligheidsvoorzieningen (alleen een thermokoppel, geen elektronische bewaking van de rookgasafvoer) minder uitgebreid zijn dan bij een modern toestel. De Onderzoeksraad voor Veiligheid concludeerde in 2015 dat de meeste CO-ongevallen echter met moderne en goed onderhouden installaties gebeurden, niet uitsluitend met oude toestellen (zie [les 8.1](les:m08l01), WET-81): leeftijd alleen is dus geen garantie voor veiligheid, en jeugdigheid alleen is geen garantie voor gevaar.

!!! gevaar Terugslag bij een open toestel
Ruik je bij een klant plotseling rookgaslucht in de opstelruimte van een atmosferisch of VR-toestel, of zie je roetsporen boven de trekonderbreker, dan is dat een teken van terugslag (spillage): rookgas dat niet via de afvoer naar buiten gaat. Stel het toestel buiten bedrijf, zoek de oorzaak (onderdruk, verstopte of beschadigde afvoer, te weinig ventilatie) voor je het weer in bedrijf stelt, en informeer de opdrachtgever. Bij twijfel: meet CO in de ruimte volgens de procedure uit [les 1.6](les:m01l06).
!!!

## Extra controles bij een atmosferisch of VR-toestel

- Controleer de trekonderbreker op corrosie, vervorming en roetsporen.
- Controleer of de opstelruimte voldoende geventileerd is en of er nieuwe mechanische ventilatie of een afzuigkap is bijgekomen sinds de laatste controle.
- Controleer waakvlam en thermokoppel op vervuiling en op een stabiele vlam.
- Beoordeel de afvoer zoals bij elk ander toestel (zie [les 8.9](les:m08l09)): materiaal, staat, beugeling.
`,
  checklist: [
    'Ik kan uitleggen wat natuurlijke trek is en waarom een atmosferisch toestel daar gevoelig voor is',
    'Ik kan de werking van een trekonderbreker en van een waakvlam met thermokoppel uitleggen',
    'Ik weet dat een atmosferisch of VR-toestel bijna altijd een open toestel is en dus gevoelig voor onderdruk',
    'Ik herken tekenen van terugslag (roetsporen, rookgaslucht) en weet wat ik dan doe'
  ],
  quiz: [
    {
      vraag: `Wat is natuurlijke trek bij een atmosferisch toestel?`,
      opties: [
        `Een ventilator die de rookgassen actief wegblaast`,
        `Het effect dat hete, lichtere rookgassen opstijgen en daardoor lucht van onderaf de brander in trekken`,
        `De onderdruk die een afzuigkap of een ander mechanisch ventilatiesysteem in de opstelruimte kan veroorzaken, los van de brander zelf`,
        `De trek die de gasleveraar op de meter zet bij lage temperaturen`
      ],
      goed: 1,
      uitleg: `Natuurlijke trek is het opstijgen van warme, lichtere rookgassen, waardoor lucht van onderaf wordt aangezogen: hetzelfde principe als bij een open haard. Er is geen ventilator bij een atmosferisch toestel, en onderdruk door een afzuigkap is juist een risico voor dit principe, niet de oorzaak ervan.`
    },
    {
      vraag: `Wat doet een trekonderbreker bij een open toestel op natuurlijke trek?`,
      opties: [
        `Hij regelt de warmwatertemperatuur van een combitoestel door de brandersterkte tijdens het tappen automatisch aan te passen aan de gevraagde temperatuur`,
        `Hij verlaagt de gasdruk bij een te hoge voordruk`,
        `Hij meet CO in het rookgas en schakelt het toestel uit`,
        `Hij zorgt dat de werking van het toestel wordt bepaald door zijn eigen thermische trek in plaats van door wisselende windinvloeden`
      ],
      goed: 3,
      uitleg: `De trekonderbreker ontkoppelt de brander van de wisselende trek in de schoorsteen door windinvloeden en temperatuurverschillen. Temperatuurregeling, gasdruk en CO-meting zijn functies van andere onderdelen, niet van de trekonderbreker.`
    },
    {
      vraag: `Een waakvlam dooft door een tochtvlaag. Wat gebeurt er direct daarna met de gasklep, en waarom?`,
      opties: [
        `De klep sluit, omdat het afkoelende thermokoppel geen spanning meer opwekt om de elektromagnetische klep open te houden`,
        `Niets: de gasklep blijft open totdat de brander op een later moment handmatig wordt uitgezet, ook als er inmiddels allang geen vlam meer brandt`,
        `De klep sluit, omdat een drukverschilsensor de tocht detecteert`,
        `De klep gaat verder open, om de brander opnieuw te ontsteken`
      ],
      goed: 0,
      uitleg: `Zonder vlam koelt het thermokoppel af en verdwijnt de kleine spanning die de elektromagnetische klep openhoudt: de klep sluit automatisch. Er is geen sensor die tocht "detecteert", en de klep gaat zeker niet verder open.`
    },
    {
      vraag: `Waarom is een atmosferisch toestel gevoeliger voor CO-incidenten dan een gesloten HR-toestel?`,
      opties: [
        `Omdat een atmosferisch toestel altijd meer gas verbruikt dan een HR-toestel bij dezelfde warmtevraag, waardoor er sneller CO ontstaat`,
        `Omdat een atmosferisch toestel altijd zonder afvoer werkt`,
        `Omdat een atmosferisch toestel meestal een open toestel is en zijn lucht uit de opstelruimte haalt, gevoelig voor onderdruk`,
        `Omdat een atmosferisch toestel geen thermokoppel heeft`
      ],
      goed: 2,
      uitleg: `Een atmosferisch of VR-toestel is bijna altijd type B (open): het haalt lucht uit de opstelruimte en is dus gevoelig voor onderdruk, bijvoorbeeld door mechanische ventilatie. Gasverbruik zegt hier niets over, de meeste atmosferische toestellen hebben wel een afvoer, en de meeste hebben juist wel een thermokoppel (dat is typisch voor dit type toestel).`
    },
    {
      vraag: `Je ziet roetsporen boven de trekonderbreker van een atmosferisch toestel. Wat is de juiste eerste stap?`,
      opties: [
        `Het toestel buiten bedrijf stellen, de oorzaak van de terugslag zoeken en pas daarna weer in bedrijf stellen`,
        `De roetsporen afvegen en verder gaan met je andere werkzaamheden`,
        `Alleen de bewoner adviseren om vaker te luchten en zelf verder niets aan het toestel of de afvoer te controleren`,
        `Direct de gemeente bellen zonder verder onderzoek`
      ],
      goed: 0,
      uitleg: `Roetsporen boven de trekonderbreker zijn een teken van terugslag: rookgas dat niet naar buiten gaat. Je stelt het toestel buiten bedrijf, zoekt de oorzaak (onderdruk, verstopping, ventilatie) en herstelt die voor je weer in bedrijf stelt. Afvegen en doorwerken, alleen adviseren om te luchten, of zonder onderzoek meteen melden zijn geen van alle de juiste eerste stap.`
    },
    {
      vraag: `Wat concludeerde de Onderzoeksraad voor Veiligheid in 2015 over de leeftijd van installaties bij CO-ongevallen?`,
      opties: [
        `Dat vrijwel alle ongevallen met installaties ouder dan 20 jaar gebeurden`,
        `Dat leeftijd van de installatie geen enkele rol speelt bij CO-risico`,
        `Dat de meeste ongevallen juist met moderne en goed onderhouden installaties gebeurden`,
        `Dat alleen atmosferische toestellen zonder enige vorm van onderhoud bij ongevallen betrokken waren, nooit moderne HR-ketels`
      ],
      goed: 2,
      uitleg: `De Onderzoeksraad concludeerde dat de meeste ongevallen met moderne en goed onderhouden cv-installaties gebeurden (zie les 8.1, WET-81). Dat betekent niet dat leeftijd geen rol speelt (een oudere afvoer of beveiliging kan wel degelijk risico geven), maar wel dat "oud" niet de enige verklaring is en "modern" geen garantie.`
    }
  ],
  kaarten: [
    { voor: `Wat is natuurlijke trek?`, achter: `Het opstijgen van hete, lichtere rookgassen, waardoor lucht van onderaf de brander in wordt getrokken, zonder ventilator.` },
    { voor: `Wat doet een trekonderbreker?`, achter: `Hij ontkoppelt de brander van wisselende windinvloeden, zodat de eigen thermische trek van het toestel de werking bepaalt.` },
    { voor: `Hoe werkt de thermo-elektrische beveiliging met waakvlam en thermokoppel?`, achter: `De waakvlam verhit het thermokoppel, dat een kleine spanning opwekt om een gasklep open te houden. Dooft de vlam, dan koelt het thermokoppel af en sluit de klep automatisch.` },
    { voor: `Waarom is een atmosferisch of VR-toestel gevoeliger voor CO-incidenten?`, achter: `Het is bijna altijd een open toestel (type B) dat lucht uit de opstelruimte haalt, en dus gevoelig voor onderdruk door bijvoorbeeld een afzuigkap.` },
    { voor: `Wat is een teken van terugslag (spillage) bij een atmosferisch toestel?`, achter: `Roetsporen boven de trekonderbreker of rookgaslucht in de opstelruimte.` },
    { voor: `Wat concludeerde de Onderzoeksraad voor Veiligheid over CO-ongevallen en de leeftijd van installaties?`, achter: `De meeste ongevallen gebeurden met moderne en goed onderhouden installaties, niet uitsluitend met oude toestellen.` },
    { voor: `Wat controleer je extra bij een atmosferisch of VR-toestel, naast het gewone onderhoud?`, achter: `De trekonderbreker (corrosie, roet), de ventilatie van de opstelruimte, en waakvlam plus thermokoppel op vervuiling en een stabiele vlam.` }
  ],
  bronnen: ['TST-07', 'TST-09', 'TST-10', 'TST-11', 'RGA-01', 'RGA-07', 'WET-81']
},

/* ------------------------------------------------------------------ 19.3 */
{
  id: 'm19l03',
  nr: '19.3',
  titel: 'Geisers en doorstroomtoestellen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je herkent een gasgeiser of doorstroomtoestel, weet waarom deze toestellen historisch vaak bij CO-ongevallen betrokken waren en wat je bij aantreffen doet.',
  videos: [
    { taal: 'nl', titel: 'Nooit onderhouden geiser had bijna een ongeval kunnen veroorzaken (Loodgieter Den Haag Stad)', yt: 'yvXNohhmSvk', duur: '±1 min, 2022' },
    { taal: 'nl', titel: 'Een keukengeiser aansteken (Verbouwkosten)', yt: 'fU0ZwKQdNuY', duur: '±1 min, 2019' },
    { taal: 'en', titel: 'Tankless hot water system explained (ZEB Learning Centre at BCIT, VK/internationaal, ter vergelijking)', yt: 'DxFtG9sWBWY', duur: '±2 min, 2021' }
  ],
  tekst: `
## Warm water op het moment dat je de kraan opent

Een gasgeiser (doorstroomtoestel) verwarmt water alleen op het moment dat de warmwaterkraan wordt geopend: een brander slaat aan zodra er doorstroming is, en dooft weer als de kraan dicht gaat. Er is geen voorraad warm water zoals bij een boiler. Oudere geisers zijn typisch een open toestel (type B, met trekonderbreker, zie [les 19.2](les:m19l02)) of, bij de allerouds­te modellen, een **afvoerloos toestel (type A)** dat zijn rookgas rechtstreeks in de ruimte afgeeft.

## Waarom geisers historisch zoveel CO-ongevallen gaven

Volgens het RIVM is de kans op een CO-ongeval bij een geiser groter dan bij een cv-ketel. Het RIVM noemt daar zelf geen specifieke oorzaak bij. Denkbare verklaringen, die volgen uit wat je al weet over CO en ventilatie (zie [les 8.7](les:m08l07)) maar niet apart door het RIVM zijn bevestigd:

- **Vaak in een kleinere ruimte.** Een keuken of badruimte is vaak kleiner dan een cv-ketelruimte, waardoor een lek CO-hoeveelheid zich sneller tot een gevaarlijke concentratie kan opbouwen.
- **Kortstondig, herhaald gebruik.** Een geiser slaat vaak aan en uit, op het moment dat iemand in de buurt staat (afwassen, douchen).
- **Vaak minder goed onderhouden en ouder.** Een geiser wordt door bewoners vaker als "gewoon een kraantje warm water" gezien dan als verbrandingstoestel dat onderhoud nodig heeft.

Omdat het aantal geisers in woningen sinds ongeveer 2001 sterk is afgenomen, veroorzaken cv-ketels tegenwoordig in absolute aantallen wel meer CO-incidenten dan geisers, ook al is de kans per toestel bij een geiser groter.

!!! kern Klein, kort en onopgemerkt: een mogelijke verklaring voor het risico van een geiser
Het RIVM stelt vast dat een geiser per toestel risicovoller is dan een cv-ketel, zonder daar zelf een oorzaak bij te geven. Een aannemelijke verklaring: hij staat vaak in een kleinere ruimte, slaat kort en herhaald aan precies op het moment dat iemand in de buurt is, en wordt door bewoners minder snel als onderhoudsplichtig verbrandingstoestel gezien. Geen van die drie punten is op zich al gevaarlijk, maar de combinatie kan dat wel zijn.
!!!

!!! gevaar Een geiser in een afgesloten ruimte
Een geiser (of een ander open toestel) in een kleine, afgesloten ruimte zoals een badruimte is een van de gevaarlijkste combinaties die je kunt tegenkomen: weinig lucht, korte afstand tot de bron, en vaak weinig ventilatie. Een open verbrandingstoestel mag volgens het Bbl nooit in een toilet- of badruimte staan (zie [les 8.1](les:m08l01)). Tref je dit toch aan, dan is dat een acuut aandachtspunt: adviseer directe actie (verplaatsen of vervangen) en niet alleen een CO-melder.
!!!

## Wat mag nog, en wat doe je als je een geiser aantreft

Een afvoerloze keukengeiser (type A) mag in nieuwbouw niet meer worden geplaatst. In bestaande bouw is een open kook- of warmwatertoestel tot en met 15 kW per toestel in een verblijfsruimte (zoals een keuken) vrijgesteld van de plicht tot rookgasafvoer en verbrandingsluchtvoorziening, maar hij mag nooit in een toilet- of badruimte staan (zie [les 8.1](les:m08l01), RGA-01, WET-54).

Tref je bij een klant een geiser aan zonder CO-melder in de ruimte, dan schrijft BRL 6000-25 voor dat je CO-melders adviseert en vastlegt dat je dat hebt gedaan. Dat is iets anders dan het toestel zelf verwijderen: dat is geen wettelijke plicht, maar wel iets wat je als vakbekwaam monteur bespreekt met de klant, zeker bij een geiser in een badruimte of bij tekenen van slecht onderhoud (roet, een instabiele vlam, een verkleurde wand boven het toestel).

## Praktijkgeval

Bij een renovatie tref je in de badkamer een oude keukengeiser aan die daar ooit is bijgeplaatst voor extra warm water. Er is geen CO-melder in de ruimte.

- **Wat je vaststelt:** type (open, met trekonderbreker), locatie (badruimte, niet toegestaan voor een open toestel), staat van onderhoud (roetsporen boven het toestel).
- **Wat je adviseert:** verplaatsen of vervangen door een toestel dat wel geschikt is voor die ruimte (bijvoorbeeld een gesloten toestel met eigen luchttoevoer), en tot die tijd een CO-melder.
- **Wat je vastlegt:** je bevindingen en je advies, inclusief de reden (locatie, staat, ontbrekende melder).
`,
  checklist: [
    'Ik kan uitleggen hoe een doorstroomtoestel werkt en het verschil met een boiler benoemen',
    'Ik kan een aannemelijke verklaring geven voor het hogere CO-risico van een geiser per toestel',
    'Ik weet dat een open toestel nooit in een toilet- of badruimte mag staan',
    'Ik weet wat ik doe als ik een geiser zonder CO-melder aantref'
  ],
  quiz: [
    {
      vraag: `Wat is het belangrijkste verschil tussen een gasgeiser en een boiler voor warm water?`,
      opties: [
        `Een geiser verwarmt water op het moment van gebruik, een boiler houdt een voorraad warm water op temperatuur`,
        `Een geiser werkt alleen op elektriciteit, een boiler alleen op gas`,
        `Een boiler heeft altijd een hoger vermogen dan een geiser, want een boiler moet een grotere voorraad water in één keer kunnen verwarmen`,
        `Er is geen verschil, het zijn twee namen voor hetzelfde toestel`
      ],
      goed: 0,
      uitleg: `Een geiser (doorstroomtoestel) verwarmt water alleen als de kraan open staat; een boiler houdt een voorraad warm water op temperatuur. Beide kunnen op gas of elektriciteit werken, en het vermogen zegt niets over dit onderscheid.`
    },
    {
      vraag: `Wat zegt het RIVM over de kans op een CO-ongeval bij een geiser vergeleken met een cv-ketel?`,
      opties: [
        `De kans is bij een geiser kleiner, omdat een geiser minder gas verbruikt per beurt dan een cv-ketel dat de hele dag door verstookt`,
        `De kans is bij een geiser en een cv-ketel precies gelijk`,
        `De kans is bij een geiser groter, hoewel cv-ketels in absolute aantallen tegenwoordig meer incidenten geven`,
        `De kans is alleen groter bij een geiser die op propaan werkt`
      ],
      goed: 2,
      uitleg: `Het RIVM stelt dat de kans op een CO-ongeval bij een geiser groter is dan bij een cv-ketel. Doordat er veel minder geisers dan cv-ketels zijn, veroorzaken cv-ketels in absolute aantallen inmiddels wel meer incidenten. Gasverbruik en brandstofsoort zijn hier niet de verklaring.`
    },
    {
      vraag: `Waarom is een geiser in een badruimte extra gevaarlijk?`,
      opties: [
        `Omdat een badruimte altijd een hoger plafond heeft`,
        `Een kleine, weinig geventileerde ruimte laat CO snel oplopen, en een open toestel mag daar niet staan`,
        `Omdat een geiser in een badruimte volgens sommige installateurs altijd op een hoger vermogen wordt ingesteld dan in een keuken, om het water sneller op te warmen`,
        `Omdat badruimtes wettelijk altijd zonder gasaansluiting zijn`
      ],
      goed: 1,
      uitleg: `Een kleine, vaak weinig geventileerde ruimte laat een lekkende hoeveelheid CO sneller oplopen, en het Bbl verbiedt een open verbrandingstoestel in een toilet- of badruimte. Plafondhoogte, gasverbruik en een algemeen verbod op gasaansluiting in badruimtes zijn hier niet de verklaring.`
    },
    {
      vraag: `Je treft een oude geiser aan in een keuken (bestaande bouw), zonder CO-melder. Wat is de juiste eerste stap volgens BRL 6000-25?`,
      opties: [
        `Niets doen, want een keukengeiser tot 15 kW mag in bestaande bouw blijven staan`,
        `Direct de gemeente inlichten, ook zonder gemeten CO-waarde`,
        `Het toestel direct verwijderen, want afvoerloze toestellen zijn overal verboden`,
        `Een CO-melder adviseren en dat advies vastleggen`
      ],
      goed: 3,
      uitleg: `Zonder CO-melder bij een open of afvoerloos toestel adviseer je een CO-melder en leg je dat vast. Een keukengeiser tot 15 kW mag in bestaande bouw onder voorwaarden blijven staan, maar dat is geen reden om niets te adviseren. Verwijderen is geen wettelijke plicht, en een melding aan de gemeente is pas aan de orde bij een gemeten waarde boven 20 ppm.`
    },
    {
      vraag: `Wat is het verschil tussen een afvoerloze geiser (type A) en een open geiser met trekonderbreker (type B)?`,
      opties: [
        `Type A heeft een ventilator, type B niet`,
        `Type A werkt volgens sommige installateurs alleen op propaan, en type B uitsluitend op aardgas, wat in de praktijk niet klopt`,
        `Type A geeft zijn rookgas rechtstreeks in de ruimte af, type B voert het via een afvoer naar buiten`,
        `Er is geen verschil in rookgasafvoer, alleen in vermogen`
      ],
      goed: 2,
      uitleg: `Type A heeft geen afvoer naar buiten: al zijn verbrandingsproducten komen in de ruimte. Type B heeft een afvoer, met een trekonderbreker om die tegen wisselende trek te beschermen. Geen van beide heeft standaard een ventilator, en de brandstofsoort is hier niet het onderscheid.`
    }
  ],
  kaarten: [
    { voor: `Hoe werkt een gasgeiser (doorstroomtoestel)?`, achter: `De brander slaat aan zodra de warmwaterkraan wordt geopend en er doorstroming is, en dooft als de kraan weer dicht gaat. Geen voorraad warm water.` },
    { voor: `Wat zegt het RIVM over het CO-risico van een geiser?`, achter: `De kans op een CO-ongeval is bij een geiser groter dan bij een cv-ketel, al geven cv-ketels tegenwoordig in absolute aantallen meer incidenten.` },
    { voor: `Waarom mag een geiser (open toestel) niet in een badruimte staan?`, achter: `Het Bbl verbiedt een open verbrandingstoestel in een toilet- of badruimte, en een kleine, weinig geventileerde ruimte laat CO snel oplopen.` },
    { voor: `Wat is een afvoerloze geiser (type A)?`, achter: `Een toestel zonder afvoer naar buiten, waarvan de verbrandingsproducten in de ruimte komen.` },
    { voor: `Mag een keukengeiser tot 15 kW in bestaande bouw blijven staan?`, achter: `Ja, onder voorwaarden (niet in een toilet- of badruimte); de ventilatieregels blijven wel gelden.` },
    { voor: `Wat doe je als je een geiser zonder CO-melder aantreft?`, achter: `Je adviseert een CO-melder en legt dat advies vast; verwijderen is geen wettelijke plicht.` }
  ],
  bronnen: ['TST-13', 'TST-14', 'TST-15', 'TST-16', 'TST-17', 'TST-18', 'RGA-01', 'WET-54', 'WET-61']
},

/* ------------------------------------------------------------------ 19.4 */
{
  id: 'm19l04',
  nr: '19.4',
  titel: 'Gaskachels, convectoren en gashaarden',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt losse gastoestellen (kachel, convector, haard) indelen naar open of gesloten type, hun afvoer en ventilatie beoordelen en de risico\'s uitleggen.',
  videos: [
    { taal: 'nl', titel: 'Uitleg en instructie gaskachel 3,5 kW (Lemerij Verhuur)', yt: 'a9e_beSRa0I', duur: '±3 min, 2023' },
    { taal: 'nl', titel: '...', zoek: 'gaswandkachel gesloten toestel installatie uitleg' },
    { taal: 'en', titel: 'Flue-less gas fire or gas stove: what you must know (Cheshire Heating and Electrical Expert, VK)', yt: '5dD2PMm_ga0', duur: '±3 min, 2022' }
  ],
  tekst: `
## Dezelfde open/gesloten-indeling, andere toestellen

Een gaskachel, een gasconvector en een gashaard zijn losse verwarmingstoestellen die niet aan een cv-installatie zijn aangesloten. Ze vallen onder dezelfde indeling die je al kent van ketels: een **open** kachel of haard heeft geen aparte luchttoevoer en gebruikt lucht uit de ruimte waarin hij staat, ook als er glas of een deurtje voor de vlammen zit. Een **gesloten** kachel of haard heeft een extra leiding naar buiten voor de verbrandingslucht. Volgens Milieu Centraal zijn gesloten kachels veiliger en hebben ze een hoger rendement dan open kachels.

Een **convector** verwarmt door lucht langs een verwarmd oppervlak te laten stromen: koude lucht wordt onderaan aangezogen, warmt op, stijgt op en zakt afgekoeld weer naar de vloer (natuurlijke convectie, zonder ventilator). Een gasconvector kan net als een gaskachel open of gesloten zijn, met dezelfde risico's van onderdruk als bij een open toestel.

!!! kern Open blijft open, ook met glas ervoor
Een decoratief venstertje of een deurtje voor de vlammen maakt een kachel niet gesloten. Gesloten betekent: een eigen luchttoevoerleiding naar buiten. Vraag bij twijfel de installatiehandleiding op, of controleer of er een leiding naar buiten loopt.
!!!

## Onderdruk: hetzelfde risico als bij een open ketel

Bij een open gaskachel kan onderdruk in de ruimte, bijvoorbeeld door te weinig verse lucht of door mechanische ventilatie elders in de woning, ertoe leiden dat verbrandingsgassen niet via de afvoer naar buiten gaan maar de ruimte in komen (zie ook [les 8.7](les:m08l07) en [les 19.2](les:m19l02)). Milieu Centraal noemt daarom voldoende verse lucht (een klapraam of ventilatierooster) als voorwaarde bij een open kachel, en een CO-melder als aanvullende voorzorg.

## Sfeerhaarden zonder afvoer

Een gashaard zonder rookgasafvoer is qua werkingsprincipe een afvoerloos toestel (type A): alle verbrandingsproducten komen in de ruimte. Fabrikanten bieden voor dit soort haarden soms extra voorzieningen aan die een deel van de verbrandingsproducten zouden moeten omzetten, maar zulke voorzieningen vervangen geen ventilatie: elke haard zonder afvoer vraagt om voldoende luchttoevoer in de ruimte, wat er ook op de haard is aangebracht.

!!! gevaar Een afvoerloze sfeerhaard in een kleine of goed geïsoleerde ruimte
Een moderne, goed geïsoleerde woning heeft weinig natuurlijke ventilatie. Een sfeerhaard zonder afvoer stookt zijn verbrandingsproducten rechtstreeks die ruimte in. Zonder voldoende ventilatie en zonder CO-melder is dat een risicovolle combinatie, vooral 's avonds als de haard lang aan blijft en de bewoners in de buurt zitten of slapen.
!!!

## Waar de grens van jouw certificering ligt

Een gebouwgebonden gasinfraroodstraler (helder- of donkerstraler) valt onder dezelfde certificeringsplicht als een cv-ketel, zolang het vermogen per toestel onder de 100 kW blijft. Een losse, verplaatsbare gaskachel of terraskachel die niet aan het gebouw is verbonden valt daarbuiten: dat is geen gasverbrandingsinstallatie in de zin van het Bbl. Dat betekent niet dat zo'n toestel veilig is zonder aandacht: het betekent alleen dat het buiten jouw certificeringsplicht valt.
`,
  checklist: [
    'Ik kan open en gesloten gaskachels, convectoren en haarden uit elkaar houden aan de hand van de luchttoevoer',
    'Ik weet dat glas of een deurtje voor de vlammen een toestel niet gesloten maakt',
    'Ik ken het onderdruk-risico bij een open gaskachel of -convector',
    'Ik weet dat een gebouwgebonden gasinfraroodstraler wel, en een losse terraskachel niet onder de CO-certificering valt'
  ],
  quiz: [
    {
      vraag: `Wat maakt een gaskachel "gesloten" in plaats van "open"?`,
      opties: [
        `Een gesloten kachel heeft glas of een deurtje voor de vlammen`,
        `Een gesloten kachel heeft een eigen leiding naar buiten voor de verbrandingslucht`,
        `Een gesloten kachel werkt zonder brander`,
        `Een gesloten kachel heeft altijd een hoger vermogen dan een open kachel, omdat de gesloten uitvoering standaard een grotere brander heeft`
      ],
      goed: 1,
      uitleg: `Gesloten betekent een eigen luchttoevoerleiding naar buiten. Glas of een deurtje voor de vlammen maakt een toestel niet gesloten: dat blijft een open toestel dat lucht uit de ruimte gebruikt. Vermogen en de aanwezigheid van een brander zeggen hier niets over.`
    },
    {
      vraag: `Hoe werkt een convectorkachel?`,
      opties: [
        `Met een ventilator die warme lucht actief wegblaast`,
        `Uitsluitend door straling, zonder luchtcirculatie`,
        `Door het cv-water rechtstreeks, zonder warmtewisselaar, door de ruimte langs de vloer te laten stromen`,
        `Door lucht langs een verwarmd oppervlak te laten circuleren, zonder ventilator`
      ],
      goed: 3,
      uitleg: `Een convector werkt met natuurlijke convectie: lucht warmt op langs een verwarmd oppervlak, stijgt op, koelt af en zakt weer naar beneden, zonder ventilator. Straling zonder luchtcirculatie is het principe van een stralingskachel, niet van een convector, en een convector staat los van het cv-water.`
    },
    {
      vraag: `Een fabrikant claimt dat een extra voorziening op een afvoerloze gashaard een deel van de verbrandingsproducten omzet. Wat blijft daardoor nodig?`,
      opties: [
        `Voldoende ventilatie in de ruimte, want de haard blijft een afvoerloos toestel`,
        `Een aparte waakvlam boven op de bestaande vlam`,
        `Een aparte gasaansluiting naast de bestaande aansluiting, voor het geval de voorziening extra brandstof nodig heeft`,
        `Een extra thermokoppel bovenop het bestaande thermokoppel`
      ],
      goed: 0,
      uitleg: `Zo'n voorziening vervangt geen ventilatie: de haard blijft een afvoerloos toestel (type A) dat zijn verbrandingsproducten in de ruimte afgeeft, dus blijft voldoende luchttoevoer nodig, wat er ook op de haard is aangebracht. Een tweede waakvlam, gasaansluiting of thermokoppel zijn geen onderdelen die hierbij horen.`
    },
    {
      vraag: `Wat is het risico van onderdruk in een ruimte met een open gaskachel?`,
      opties: [
        `De kachel gaat vanzelf harder branden, omdat de brander automatisch meer gas toelaat bij minder lucht in de ruimte`,
        `De gasdruk bij de kachel loopt op tot een gevaarlijk niveau`,
        `Verbrandingsgassen kunnen niet via de afvoer naar buiten en komen (deels) de ruimte in`,
        `De kachel schakelt automatisch over op elektrische verwarming`
      ],
      goed: 2,
      uitleg: `Bij te veel onderdruk (bijvoorbeeld door te weinig verse lucht of mechanische ventilatie elders) kunnen verbrandingsgassen niet via de afvoer naar buiten en komen ze de ruimte in. Dit heeft geen effect op de brandersterkte, de gasdruk of een omschakeling naar elektrisch: die bestaat niet bij een gaskachel.`
    },
    {
      vraag: `Een gebouwgebonden gasinfraroodstraler van 40 kW hangt in een loods, en een losse terraskachel van 10 kW staat op een terras. Wat klopt?`,
      opties: [
        `Alleen de infraroodstraler valt onder de certificeringsplicht, omdat hij gebouwgebonden is; de losse terraskachel niet`,
        `Beide vallen onder de CO-certificeringsplicht, want beide verbranden gas`,
        `Alleen de terraskachel valt onder de certificeringsplicht, omdat hij buiten staat`,
        `Geen van beide valt onder de certificeringsplicht, want beide toestellen blijven ruim onder de grens van 100 kW nominaal vermogen`
      ],
      goed: 0,
      uitleg: `De certificeringsplicht geldt voor gebouwgebonden gasverbrandingstoestellen tot 100 kW, waaronder gebouwgebonden helder- en donkerstralers. Een losse, verplaatsbare terraskachel is niet aan het gebouw verbonden en valt daarbuiten, ongeacht het vermogen. Het feit dat beide onder 100 kW zitten, is dus niet de reden dat de terraskachel buiten de plicht valt.`
    }
  ],
  kaarten: [
    { voor: `Wat is het verschil tussen een open en een gesloten gaskachel?`, achter: `Open gebruikt lucht uit de ruimte; gesloten heeft een eigen leiding naar buiten voor de verbrandingslucht.` },
    { voor: `Maakt glas voor de vlammen een gaskachel gesloten?`, achter: `Nee. Gesloten betekent een eigen luchttoevoerleiding naar buiten, niet een scherm voor de vlammen.` },
    { voor: `Hoe werkt een convector?`, achter: `Door natuurlijke convectie: lucht warmt op langs een verwarmd oppervlak, stijgt op, koelt af en zakt weer omlaag. Geen ventilator.` },
    { voor: `Wat is het risico van een gashaard zonder afvoer, ook met een extra voorziening van de fabrikant?`, achter: `Alle verbrandingsproducten komen in de ruimte; zo'n voorziening vervangt geen ventilatie.` },
    { voor: `Wat is het risico van onderdruk bij een open gaskachel?`, achter: `Verbrandingsgassen kunnen niet via de afvoer naar buiten en komen (deels) de ruimte in.` },
    { voor: `Valt een losse terraskachel onder de CO-certificeringsplicht?`, achter: `Nee: die plicht geldt voor gebouwgebonden toestellen. Een losse, verplaatsbare kachel is niet aan het gebouw verbonden.` },
    { voor: `Valt een gebouwgebonden gasinfraroodstraler (helder- of donkerstraler) onder de certificeringsplicht?`, achter: `Ja, net als een cv-ketel, zolang het vermogen per toestel onder de 100 kW blijft.` }
  ],
  bronnen: ['TST-19', 'TST-20', 'TST-22', 'TST-44', 'TST-45']
},

/* ------------------------------------------------------------------ 19.5 */
{
  id: 'm19l05',
  nr: '19.5',
  titel: 'Olie, LPG, hout en pellets: herkennen en de grens',
  duur: 25,
  type: 'les',
  leerdoel: 'Je herkent ketels op olie, LPG, hout of pellets, weet wat er anders is aan brandstof en rookgas en waar de grens van jouw bevoegdheid en van Vakmanschap CO ligt.',
  videos: [
    { taal: 'nl', titel: 'Duurzaam verwarmen met stookolie (in4fuels)', yt: 'yWl-hjjmS_c', duur: '±2 min, 2019' },
    { taal: 'nl', titel: 'Hoe werkt een pelletkachel? Complete uitleg en voordelen (BlueSolid)', yt: 'I9TKAxNGmqM', duur: '±1 min, 2025' },
    { taal: 'en', titel: 'How does an oil boiler work? (SKAN Academy, VK)', yt: 'TfmnzWboWqM', duur: '±3 min, 2025' }
  ],
  tekst: `
## Dezelfde chemie, andere brandstof

Verbranding van stookolie en van hout of pellets verloopt volgens hetzelfde basisprincipe als aardgas: brandstof plus zuurstof geeft CO2, water en warmte, en te weinig lucht geeft CO (zie [les 4.2](les:m04l02)). De brandstof zelf verschilt wel:

- **Stookolie (mazout)** is een vloeibaar mengsel van zwaardere koolwaterstoffen. Onvolledige verbranding geeft eerder roet en zwaveloxiden dan bij aardgas.
- **Hout en pellets** zijn vaste biomassa. Naast CO2 en water ontstaan as en fijnstof (koolstofdeeltjes), en de verbranding is moeilijker te regelen dan bij een gas- of oliebrander.

Dat betekent andere eisen aan de rookgasafvoer, andere onderhoudspunten (roet, as) en andere regelgeving dan bij aardgas. Deze cursus behandelt die techniek niet in detail: het belangrijkste is dat je weet waar jouw bevoegdheid stopt.

!!! kern BRL 6000-25 gaat alleen over gas
De CO-certificering (BRL 6000-25, het Bewijs van Vakmanschap CO) geldt uitsluitend voor gebouwgebonden gasverbrandingstoestellen: toestellen die op gas werken. Een olieketel, een houtkachel of een pelletketel verbrandt geen gas en valt dus niet onder deze certificeringsplicht. Propaan (LPG) is wel een gas, dus een toestel op propaan valt wel onder BRL 6000-25, net als een toestel op aardgas.
!!!

## Wat wel geldt voor olie, hout en pellets

Deze toestellen vallen niet buiten alle regelgeving, alleen buiten BRL 6000-25:

- **Grotere stookinstallaties** (globaal vanaf 100 kW, tot 50 MW) op olie of vaste brandstof vallen onder het Besluit activiteiten leefomgeving (Bal), met een keuringsplicht door een SCIOS-gecertificeerd bedrijf. Voor een kleine olieketel in een woonhuis is in het feitenregister van deze cursus geen specifiek wettelijk keuringsregime gevonden dat vergelijkbaar is met de CO-certificering voor gas.
- **Toestellen voor lokale ruimteverwarming op vaste brandstof** (zoals een houtkachel of pelletkachel) tot 50 kW moeten voldoen aan Europese Ecodesign-eisen voor rendement en emissies (fijnstof, CO, NOx). Dat is een eis aan het toestel dat op de markt komt, geen installatiecertificaat voor de monteur.
- **Propaan in een bovengrondse tank** (bij een woning zonder gasaansluiting) valt onder eigen veiligheidsafstanden en voorschriften voor de opslag (PGS 19), los van de certificering van het toestel dat op die tank is aangesloten.

## Waar de grens van Vakmanschap CO ligt

Het Bewijs van Vakmanschap CO en BRL 6000-25 dekken het gasverbrandingstoestel zelf en de bijbehorende rookgasafvoer en verbrandingsluchttoevoer. Ze dekken niet: gasleidingen verder het pand in, warmteafgiftesystemen (radiatoren, vloerverwarming), en toestellen op een andere brandstof dan gas. Werk aan een koudemiddelcircuit (koeltechniek, warmtepompen) vraagt sinds 29 september 2025 weer een eigen, apart certificaat voor alle koudemiddelen, ook natuurlijke zoals ammoniak, propaan of CO2: dat staat los van je CO-certificaat.

Een bijzonder grensgeval is de **gasabsorptiewarmtepomp**: dit toestel combineert een condenserende gasbrander (die onder de CO-certificering valt) met een water-ammoniakcircuit als koudemiddelkring (dat onder de certificering voor koudemiddelen valt). Eén toestel, twee vakgebieden.

## Praktijkgeval

Een klant met een oud vakantiehuis zonder gasaansluiting vraagt of jij, met je Bewijs van Vakmanschap CO, ook onderhoud kunt doen aan zijn olieketel en aan de propaantank waarop zijn keukenfornuis is aangesloten.

- **Olieketel:** nee, dat valt buiten je certificering; verwijs naar een gespecialiseerd bedrijf.
- **Propaan-keukenfornuis:** een kooktoestel valt sowieso buiten de certificeringsplicht (zie [les 8.1](les:m08l01), RGA-01), gas of niet.
- **De propaantank zelf:** de opslag valt onder eigen veiligheidsvoorschriften (PGS 19), niet onder jouw certificaat.

Wees hier eerlijk en concreet: "dat mag ik niet, en hier is waarom" is onderdeel van vakbekwaamheid, niet een tekortkoming.
`,
  checklist: [
    'Ik kan uitleggen wat er chemisch anders is aan olie- en houtverbranding vergeleken met aardgas, op hoofdlijnen',
    'Ik weet dat BRL 6000-25 alleen geldt voor gasverbrandingstoestellen, en dat propaan daarbij wel meetelt',
    'Ik weet dat olie- en houttoestellen onder andere, niet-CO regelgeving kunnen vallen (SCIOS, Ecodesign, PGS 19)',
    'Ik weet dat een koudemiddelcircuit (ook bij een gasabsorptiewarmtepomp) een apart certificaat vraagt, los van CO'
  ],
  quiz: [
    {
      vraag: `Een woning heeft een olieketel. Mag jij die met je Bewijs van Vakmanschap CO onderhouden?`,
      opties: [
        `Nee, BRL 6000-25 en het Bewijs van Vakmanschap CO gelden alleen voor gasverbrandingstoestellen`,
        `Ja, olie en gas verbranden allebei volgens hetzelfde chemische principe, dus het certificaat dekt in de praktijk alle brandstofsoorten`,
        `Ja, zolang het vermogen van de ketel onder 100 kW blijft`,
        `Nee, maar alleen als de ketel ouder is dan 15 jaar`
      ],
      goed: 0,
      uitleg: `De certificeringsplicht en het Bewijs van Vakmanschap CO gelden uitsluitend voor toestellen die op gas werken. Een olieketel valt daarbuiten, ongeacht vermogen of leeftijd, ook al is het verbrandingsprincipe verwant.`
    },
    {
      vraag: `Een toestel is afgesteld op propaan (LPG). Valt dit toestel onder BRL 6000-25?`,
      opties: [
        `Nee, want propaan is geen aardgas`,
        `Alleen als het toestel een cv-ketel is, niet bij een ander toesteltype zoals een gaskachel of geiser op propaan`,
        `Ja, want propaan is een gas en het toestel is dus een gasverbrandingstoestel`,
        `Alleen als het toestel op een bovengrondse tank is aangesloten`
      ],
      goed: 2,
      uitleg: `BRL 6000-25 geldt voor gasverbrandingstoestellen in het algemeen, niet alleen voor aardgas. Propaan is een gas, dus een toestel op propaan valt onder dezelfde certificering als een toestel op aardgas, ongeacht het toesteltype of de manier van gastoevoer.`
    },
    {
      vraag: `Wat regelt PGS 19 bij een propaantank voor woningverwarming?`,
      opties: [
        `De certificering van de monteur die het toestel op de tank onderhoudt, inclusief zijn Bewijs van Vakmanschap CO en zijn VCA-diploma`,
        `De veiligheidsafstanden en voorschriften voor de opslag van propaan in de tank, los van de toestelcertificering`,
        `Het rendement dat het toestel op de tank minimaal moet halen`,
        `De maximale gasdruk waarop het toestel mag worden afgesteld`
      ],
      goed: 1,
      uitleg: `PGS 19 (Publicatiereeks Gevaarlijke Stoffen) regelt de veiligheidsafstanden en voorschriften voor de opslag van propaan, een apart onderwerp naast de certificering van het toestel zelf. Rendementseisen en gasdruk zijn geen onderwerp van PGS 19.`
    },
    {
      vraag: `Waarom vallen kleine, huishoudelijke stookinstallaties op olie of hout meestal buiten het Bal-keuringsregime met SCIOS?`,
      opties: [
        `Omdat dat regime alleen voor gasverbrandingstoestellen geldt`,
        `Omdat SCIOS alleen voor bedrijfspanden geldt, nooit voor woningen`,
        `Omdat een huishoudelijke installatie volgens een oudere vuistregel altijd is vrijgesteld van elke vorm van keuring of onderhoudsplicht`,
        `Omdat dat regime begint bij installaties van 100 kW en hoger, en een huishoudelijke installatie daar meestal onder blijft`
      ],
      goed: 3,
      uitleg: `Het Bal-regime met SCIOS-keuring geldt voor stookinstallaties vanaf 100 kW; een gewone huishoudelijke olie- of houtinstallatie blijft daar meestal onder. Dat regime gaat juist over andere brandstoffen dan gas (niet erover), heeft geen categorische uitsluiting voor woningen, en "altijd vrijgesteld" is te sterk: voor een kleinere installatie is in deze cursus geen specifiek alternatief keuringsregime gevonden.`
    },
    {
      vraag: `Wat klopt over het koudemiddelcircuit van een gasabsorptiewarmtepomp?`,
      opties: [
        `Het valt automatisch onder het Bewijs van Vakmanschap CO, omdat het toestel nu eenmaal een gasbrander heeft die onder die certificering valt`,
        `Het valt onder een apart certificaat voor koudemiddelen, ook bij ammoniak, los van het Bewijs van Vakmanschap CO`,
        `Het valt nergens onder, omdat ammoniak geen F-gas is`,
        `Het valt onder dezelfde regels als een propaantank (PGS 19)`
      ],
      goed: 1,
      uitleg: `Sinds 29 september 2025 is voor alle koudemiddelen, ook natuurlijke zoals ammoniak, een apart persoonscertificaat verplicht. De gasbrander van een gasabsorptiewarmtepomp valt onder de CO-certificering, het koudemiddelcircuit onder deze aparte, andere certificering. PGS 19 gaat over propaanopslag, niet over koudemiddelcircuits.`
    }
  ],
  kaarten: [
    { voor: `Waarom valt een olieketel niet onder het Bewijs van Vakmanschap CO?`, achter: `BRL 6000-25 en de certificeringsplicht gelden uitsluitend voor toestellen die op gas werken; olie is geen gas.` },
    { voor: `Valt een propaantoestel onder BRL 6000-25?`, achter: `Ja: propaan is een gas, dus het toestel is een gasverbrandingstoestel en valt onder dezelfde certificering als aardgas.` },
    { voor: `Wat regelt PGS 19?`, achter: `De veiligheidsafstanden en voorschriften voor de opslag van propaan (bijvoorbeeld in een bovengrondse tank), los van de toestelcertificering.` },
    { voor: `Vanaf welk vermogen geldt het Bal-keuringsregime met SCIOS voor stookinstallaties op olie of vaste brandstof?`, achter: `Globaal vanaf 100 kW tot 50 MW; een gewone huishoudelijke installatie blijft daar meestal onder.` },
    { voor: `Wat is het verschil in verbrandingsproducten tussen aardgas en hout/pellets?`, achter: `Aardgas geeft vooral CO2 en water; hout en pellets geven daarnaast as en fijnstof (koolstofdeeltjes), en de verbranding is moeilijker te regelen.` },
    { voor: `Wat dekt het Bewijs van Vakmanschap CO niet?`, achter: `Gasleidingen verder het pand in, warmteafgiftesystemen, toestellen op andere brandstof dan gas, en koudemiddelcircuits.` },
    { voor: `Wat is bijzonder aan een gasabsorptiewarmtepomp qua certificering?`, achter: `De gasbrander valt onder de CO-certificering, het ammoniak- of ander koudemiddelcircuit onder een apart certificaat: één toestel, twee vakgebieden.` }
  ],
  bronnen: ['TST-24', 'TST-25', 'TST-26', 'TST-27', 'TST-29', 'TST-30', 'TST-31', 'TST-46', 'TST-48']
},

/* ------------------------------------------------------------------ 19.6 */
{
  id: 'm19l06',
  nr: '19.6',
  titel: 'Warmtenet, elektrische ketel en andere warmtebronnen',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt een afleverset van een warmtenet en een elektrische ketel plaatsen en weet wat je er als cv-monteur wel en niet aan doet.',
  videos: [
    { taal: 'nl', titel: 'Zo werkt stadsverwarming (Vattenfall Nederland)', yt: '052lFGk3pQM', duur: '±2 min, 2025' },
    { taal: 'nl', titel: 'Veelgestelde vragen over elektrische cv-ketels (Masterwatt)', yt: 'AwSqlnhoBOo', duur: '±3 min, 2023' },
    { taal: 'en', titel: 'Electric boiler installation (Allen Hart, VK)', yt: 'XQ4U9hqHGz0', duur: '±7 min, 2023' }
  ],
  tekst: `
## Warmte zonder eigen verbranding

Niet elke woning heeft een eigen verbrandingstoestel. Twee alternatieven die je steeds vaker tegenkomt:

- **Een afleverset** haalt warmte uit een warmtenet (stadswarmte) via een warmtewisselaar en geeft die door aan het cv-water en het warme tapwater van de woning. Er wordt in de woning niets verbrand.
- **Een elektrische cv-ketel** verwarmt het cv-water met een elektrisch verwarmingselement, ook zonder verbranding.

Landelijk werd in 2025 gemiddeld 7,3% van de Nederlandse woningen verwarmd via een warmtenet; dat percentage is veel lager bij vrijstaande woningen (1,0%) en bij woningen van voor 1965 (1,4%), en veel hoger bij nieuwbouw en gestapelde bouw. Warmtenetten en elektrische ketels zijn dus nog een minderheid, maar een groeiende categorie woningen zonder gasaansluiting.

!!! kern Geen gas, dan geen BRL 6000-25
Een afleverset en een elektrische cv-ketel verbranden geen gas. Ze vallen daarom niet onder de CO-certificeringsplicht van Bbl art. 6.45, niet onder BRL 6000-25 en niet onder je Bewijs van Vakmanschap CO. Dat betekent niet dat er geen regels zijn: het betekent dat er andere regels zijn.
!!!

## Wie mag een afleverset plaatsen

Voor het plaatsen van een afleverset heeft InstallQ de erkenningsregeling Afleversets ontwikkeld, met een eigen e-learning, theorietoets (niet voor Basismonteur) en praktijkexamen. Wie slaagt, krijgt een persoonlijk Vakbekwaamheidsbewijs Afleverset, 5 jaar geldig. Deze erkenning staat los van het Bewijs van Vakmanschap CO: het is een ander vakgebied, met een eigen route.

Werknemers van warmtebedrijven en aannemers die voor warmtebedrijven werken, werken bij onderhoud aan de warmte-installatie bovendien volgens sector-eigen veiligheidsvoorschriften. De precieze reikwijdte daarvan voor een gewone cv-monteur die incidenteel bij een afleverset komt, is niet in detail uitgezocht voor deze cursus: ga bij twijfel na welke afspraken het warmtebedrijf voor jouw situatie stelt.

## Elektrische ketel: wat is wel en niet jouw werk

Een elektrische cv-ketel heeft geen rookgasafvoer en geen verbrandingsluchttoevoer nodig, en dus geen CO-certificering. Het aansluiten en beveiligen (aansluitpunt, aardlekbeveiliging, groepen) is wel elektrisch installatiewerk, met dezelfde regels als andere vaste elektrische installaties in een woning: dat is het werkterrein van de Cursus Elektrotechniek, niet van het Bewijs van Vakmanschap CO. Een elektrische ketel kom je in de praktijk vaker tegen als aanvulling (bijvoorbeeld bij een warmtepomp, of als piekvoorziening) dan als enige hoofdverwarming van een Nederlandse woning; harde cijfers daarover staan niet in het feitenregister van deze module, dus behandel dit als een indruk uit de praktijk en niet als een vaststaand feit.

## Wat blijft jouw vakgebied

Ook bij een afleverset of elektrische ketel blijft het waterzijdige deel van de installatie (radiatoren, vloerverwarming, leidingwerk, expansievat) een vertrouwd vakgebied: dat werkt hetzelfde als bij een cv-ketel, alleen de warmtebron verschilt. Je CO-certificaat dekt het gasverbrandingstoestel zelf en de bijbehorende rookgasafvoer en verbrandingsluchttoevoer, niet de gasleidingen verder het pand in en niet de warmteafgiftesystemen: die twee laatste zijn dus altijd al, met of zonder gasketel, een ander deel van je werk.

## Praktijkgeval

Een VvE schakelt over van een gemeenschappelijke gasketel naar een warmtenet met een afleverset per woning. De bewoners vragen jou, hun vaste cv-monteur, om raad.

- **Wat verandert er?** Geen gasverbranding meer in de woning, dus geen CO-certificering meer nodig voor het nieuwe toestel zelf.
- **Wat blijft?** De radiatoren, het leidingwerk en de vloerverwarming blijven hetzelfde vakgebied.
- **Wat is nieuw voor jou?** Als je zelf afleversets wil plaatsen of onderhouden, is dat de erkenningsregeling Afleversets van InstallQ, een aparte route naast je Bewijs van Vakmanschap CO.
`,
  checklist: [
    'Ik kan uitleggen wat een afleverset doet en waarom die geen gas verbrandt',
    'Ik weet dat het plaatsen van een afleverset een eigen erkenningsregeling (Afleversets) van InstallQ vraagt, los van CO',
    'Ik weet dat het aansluiten van een elektrische cv-ketel elektrisch installatiewerk is',
    'Ik weet dat waterzijdig werk (radiatoren, leidingwerk) mijn vakgebied blijft, ook zonder gasketel'
  ],
  quiz: [
    {
      vraag: `Wat doet een afleverset in een woning die op een warmtenet is aangesloten?`,
      opties: [
        `Hij verbrandt gas op kleinere schaal dan een cv-ketel, maar dan rechtstreeks in de meterkast van de woning zelf, zonder rookgasafvoer naar buiten`,
        `Hij slaat warm water op voor gebruik overdag`,
        `Hij zet elektriciteit om in warmte voor het cv-water`,
        `Hij geeft warmte uit het warmtenet via een warmtewisselaar door aan het cv-water en tapwater, zonder zelf te verbranden`
      ],
      goed: 3,
      uitleg: `Een afleverset haalt warmte uit het warmtenet via een warmtewisselaar en geeft die door aan het cv-water en het tapwater; er wordt in de woning niets verbrand. Dat is dus geen kleinschalige verbranding, geen opslagvoorziening, en geen omzetting van elektriciteit (dat doet een elektrische ketel).`
    },
    {
      vraag: `Valt een afleverset onder BRL 6000-25 en het Bewijs van Vakmanschap CO?`,
      opties: [
        `Nee, want een afleverset verbrandt geen gas`,
        `Ja, want een afleverset is net als een cv-ketel een verwarmingstoestel`,
        `Alleen als de woning ook een gasaansluiting heeft`,
        `Alleen als het vermogen boven 100 kW ligt`
      ],
      goed: 0,
      uitleg: `BRL 6000-25 geldt voor gasverbrandingstoestellen; een afleverset verbrandt geen gas en valt er dus buiten. Dat een afleverset ook een verwarmingsfunctie heeft, maakt hem niet automatisch een gasverbrandingstoestel, en een gasaansluiting elders of het vermogen veranderen dat niet.`
    },
    {
      vraag: `Welke erkenning heeft InstallQ ontwikkeld voor het plaatsen van afleversets?`,
      opties: [
        `Het Bewijs van Vakmanschap CO, aangevuld met een extra module die je via je certificerende instelling kunt aanvragen`,
        `De erkenningsregeling Afleversets, met een eigen e-learning, theorietoets en praktijkexamen`,
        `Een uitbreiding van het VCA-certificaat`,
        `Er is geen specifieke erkenning, iedereen mag dit doen`
      ],
      goed: 1,
      uitleg: `InstallQ heeft de erkenningsregeling Afleversets ontwikkeld, met een eigen e-learning, theorietoets en praktijkexamen, los van het Bewijs van Vakmanschap CO en los van VCA (dat een generieke veiligheidscertificering is, geen vakinhoudelijke).`
    },
    {
      vraag: `Wie mag het elektrische aansluitpunt van een elektrische cv-ketel aansluiten en beveiligen?`,
      opties: [
        `Alleen iemand met het Bewijs van Vakmanschap CO, want dat certificaat dekt in de praktijk elk toestel in de cv-ruimte`,
        `Iemand die bevoegd is voor elektrisch installatiewerk, net als bij andere vaste installaties`,
        `De bewoner zelf, zonder verdere eisen`,
        `Alleen de fabrikant van de ketel`
      ],
      goed: 1,
      uitleg: `Het aansluiten en beveiligen van een elektrische cv-ketel is elektrisch installatiewerk, met dezelfde regels als andere vaste elektrische installaties. Het Bewijs van Vakmanschap CO gaat over gasverbranding en is hier niet de relevante bevoegdheid.`
    },
    {
      vraag: `Een woning schakelt over van een gasketel naar een afleverset. Wat blijft, ongeacht die overstap, jouw vakgebied als cv-monteur?`,
      opties: [
        `Niets, alles verandert mee met de warmtebron`,
        `Alleen het elektrisch aansluiten van de nieuwe afleverset, want de rest van de installatie wordt toch vervangen`,
        `Het waterzijdige deel van de installatie: radiatoren, leidingwerk, vloerverwarming en expansievat`,
        `Alleen de gasleiding die nu overbodig wordt`
      ],
      goed: 2,
      uitleg: `Het waterzijdige deel van de installatie (radiatoren, leidingwerk, vloerverwarming, expansievat) werkt hetzelfde als bij een cv-ketel; alleen de warmtebron verschilt. Het elektrisch aansluiten van de afleverset is een ander vakgebied (elektrotechniek of de leverancier van het warmtenet), en de oude gasleiding is juist iets wat verdwijnt, niet iets dat blijft.`
    }
  ],
  kaarten: [
    { voor: `Wat doet een afleverset?`, achter: `Hij geeft warmte uit een warmtenet via een warmtewisselaar door aan het cv-water en het tapwater van de woning, zonder zelf te verbranden.` },
    { voor: `Valt een afleverset onder BRL 6000-25?`, achter: `Nee: die geldt voor gasverbrandingstoestellen, en een afleverset verbrandt geen gas.` },
    { voor: `Welke erkenning heb je nodig om zelf afleversets te plaatsen?`, achter: `De erkenningsregeling Afleversets van InstallQ (e-learning, theorietoets, praktijkexamen), los van het Bewijs van Vakmanschap CO.` },
    { voor: `Waarom heeft een elektrische cv-ketel geen CO-certificering nodig?`, achter: `Er is geen gasverbranding, dus geen rookgasafvoer of verbrandingsluchttoevoer, en dus geen gasverbrandingstoestel in de zin van het Bbl.` },
    { voor: `Wie mag een elektrische cv-ketel elektrisch aansluiten?`, achter: `Iemand die bevoegd is voor elektrisch installatiewerk, net als bij andere vaste elektrische installaties.` },
    { voor: `Wat blijft je vakgebied als een woning van gas naar een warmtenet overstapt?`, achter: `Het waterzijdige deel: radiatoren, leidingwerk, vloerverwarming en expansievat.` },
    { voor: `Hoeveel procent van de Nederlandse woningen werd in 2025 via een warmtenet verwarmd?`, achter: `Gemiddeld 7,3%, met grote verschillen tussen woningtypen (CBS).` }
  ],
  bronnen: ['TST-32', 'TST-33', 'TST-35', 'TST-36', 'TST-47', 'TST-48', 'TST-49']
},

/* ------------------------------------------------------------------ 19.7 */
{
  id: 'm19l07',
  nr: '19.7',
  titel: 'Een oud toestel vervangen door een HR-ketel',
  duur: 35,
  type: 'les',
  leerdoel: 'Je kunt uitleggen wat er verandert bij het vervangen van een oud toestel (afvoer, ventilatie, ruimte, temperatuur) en welke controles je vooraf doet.',
  videos: [
    { taal: 'nl', titel: 'Cv-ketel van 20 jaar oud in woning: vervangen of niet? (Homekeur, bouwkundige keuring)', yt: 'Kq9H1F0Uw4A', duur: '±3 min, 2021' },
    { taal: 'nl', titel: 'Ik wil mijn cv-ketel vervangen. Wat zijn mijn opties? (Vattenfall Nederland)', yt: 'SJS17Rz8fQE', duur: '±2 min, 2024' },
    { taal: 'en', titel: 'Changing a vented heating system to a sealed system (Tomkat Gas Training, VK)', yt: 'hMTgDhKQoaQ', duur: '±23 min, 2020' }
  ],
  tekst: `
## Vijf dingen die veranderen

Een oud atmosferisch of VR-toestel vervangen door een HR-ketel is meer dan "de oude eraf, de nieuwe erop". Vijf dingen veranderen mee, en je controleert ze voordat je begint.

## 1. De afvoer: van onderdruk naar overdruk

Een atmosferisch of VR-toestel werkt op natuurlijke trek (onderdruk in de afvoer, warme rookgassen die opstijgen). Een HR-toestel heeft een ventilator die het rookgas met lichte overdruk door de afvoer drukt, bij een veel lagere, condenserende temperatuur. Een bouwkundig collectief kanaal met natuurlijke trek (een shunt of onderdruk-CLV) is daardoor niet zonder meer geschikt voor een HR-toestel: het drukverschil en de lagere rookgastemperatuur passen niet bij een kanaal dat voor de oude situatie is berekend (zie [les 8.8](les:m08l08)).

BRL 6000-25 eist bovendien dat het bestaande afvoersysteem bij vervanging gelijktijdig met het toestel wordt vervangen, tenzij het grondig is gecontroleerd en beoordeeld als geschikt voor een verwachte resterende levensduur van minimaal 15 jaar (zie [les 8.9](les:m08l09)). Bij een VR-toestel dat door een HR-toestel wordt vervangen, geldt in de praktijk van fabrikanten dat het afvoersysteem altijd wordt vervangen: de lagere rookgastemperatuur en de condens vragen om ander materiaal dan een oudere metalen afvoer zonder weerstandsklasse W (zie [les 8.3](les:m08l03)).

## 2. De opstelruimte en de ventilatie

Bij verbouw gelden voor een nieuw geïnstalleerde rookgasafvoer in beginsel de nieuwbouw-prestatieniveaus, behalve als de bestaande voorziening wordt vervangen en de plaats van de uitmonding niet wijzigt: dan geldt die plaatseis niet (zie [les 8.9](les:m08l09)). Dat neemt niet weg dat je de ventilatie van de opstelruimte altijd beoordeelt: een oud atmosferisch toestel had minder verbrandingslucht nodig dan sommige nieuwe situaties vragen, en een nieuwe afzuigkap of mechanische ventilatie die er sinds de vorige ketel is bijgekomen, verandert het risico op onderdruk (zie [les 19.2](les:m19l02) en [les 8.7](les:m08l07)).

## 3. De condensafvoer

Een HR-toestel maakt, in tegenstelling tot het oude toestel, zuur condensaat dat moet worden afgevoerd. Dat condensaat gaat via een sifon naar de (vuilwater)riolering: de sifon houdt rioollucht en methaan uit het riool tegen. Voor een kleine woninginstallatie wordt het zure condensaat in de praktijk vermengd met het overige, meer alkalische huishoudelijke afvalwater. De exacte aansluitwijze en diameter staan in de installatiehandleiding van het nieuwe toestel: dit is bij het oude toestel niet aan de orde geweest, dus je voegt een nieuwe leiding toe die er nog niet was.

## 4. Het temperatuurregime en de afgifte

Een HR-toestel heeft een lagere retourtemperatuur nodig om te kunnen condenseren dan een ouder toestel (zie [les 7.2](les:m07l02)). Oude radiatoren die voor een hoog temperatuurregime zijn ontworpen (bijvoorbeeld 90/70 °C), geven bij een lager temperatuurregime minder vermogen af. Dat betekent niet dat je de radiatoren per se moet vervangen, maar wel dat je vooraf checkt of de bestaande afgifte bij een lagere aanvoertemperatuur nog voldoende is, zeker in de koudste dagen van het jaar.

## 5. De rest van de installatie

Gasaansluiting en gasdruk, bestaand leidingwerk, en of er een CLV of ander collectief systeem bij betrokken is: dit zijn geen nieuwe onderwerpen, maar wel punten die je bij een vervanging opnieuw beoordeelt in plaats van klakkeloos over te nemen van de oude situatie.

!!! kern Vervangen is beoordelen, niet aannemen
De kern van een toestelvervanging is dat je niets van de oude situatie automatisch overneemt: niet de afvoer, niet de ventilatie, niet het temperatuurregime. Elk van die vijf punten controleer je opnieuw, ook als de oude installatie jarenlang zonder klachten heeft gedraaid.
!!!

## Praktijkgeval: checklist vooraf

Bij een offerte voor een nieuwe HR-ketel ter vervanging van een 22 jaar oude VR-ketel op een individueel metalen kanaal loop je vooraf langs:

1. **Afvoer:** materiaal en staat van het bestaande kanaal; geschikt te maken voor overdruk en condens, of vervangen.
2. **Opstelruimte:** ventilatie-openingen aanwezig en niet afgesloten; geen nieuwe afzuigkap of mechanische ventilatie bijgekomen zonder dat daar rekening mee is gehouden.
3. **Condensafvoer:** een sifonaansluiting op de riolering realiseren, die er nu niet is.
4. **Temperatuurregime:** radiatoren en leidingwerk geschikt voor een lagere aanvoertemperatuur, of vooraf een afgiftecheck.
5. **Overig:** gasdruk en leidingwerk controleren, en nagaan of er een collectief systeem bij betrokken is.

Alleen met deze vijf punten vooraf gecheckt, is de vervanging meer dan "de oude ketel eraf, de nieuwe erop".
`,
  checklist: [
    'Ik kan de vijf dingen noemen die veranderen bij het vervangen van een oud toestel door een HR-ketel',
    'Ik weet wanneer BRL 6000-25 vraagt om de afvoer gelijktijdig met het toestel te vervangen',
    'Ik weet dat een HR-toestel een nieuwe condensafvoer nodig heeft die er bij het oude toestel niet was',
    'Ik controleer bij vervanging altijd de ventilatie en het temperatuurregime opnieuw, in plaats van de oude situatie over te nemen'
  ],
  quiz: [
    {
      vraag: `Waarom is een bouwkundig collectief kanaal met natuurlijke trek niet zonder meer geschikt voor een nieuw HR-toestel?`,
      opties: [
        `Omdat het kanaal wettelijk is afgeschreven na 15 jaar en dan hoe dan ook vervangen moet worden, ongeacht de werkelijke conditie van het materiaal`,
        `Een HR-toestel werkt met overdruk en een veel lagere rookgastemperatuur dan het kanaal voor de oude situatie was berekend`,
        `Omdat HR-toestellen nooit op een collectief kanaal mogen`,
        `Omdat het kanaal altijd te smal is voor een HR-toestel`
      ],
      goed: 1,
      uitleg: `Het drukverschil (overdruk in plaats van onderdruk) en de lagere, condenserende rookgastemperatuur passen niet bij een kanaal dat voor de oude, atmosferische situatie is berekend. Er is geen wettelijke "afschrijftermijn" van 15 jaar (dat is een beoordelingscriterium, geen automatische afkeur), collectieve aansluiting van HR-toestellen kan wel degelijk (op een modern overdruk-CLV), en de breedte van het kanaal is niet de kern van het probleem.`
    },
    {
      vraag: `Wanneer mag je volgens BRL 6000-25 de bestaande afvoer laten zitten bij vervanging van het toestel?`,
      opties: [
        `Altijd, zolang het nieuwe toestel van hetzelfde merk is als het oude toestel, want fabrikanten garanderen dan de compatibiliteit`,
        `Nooit, de afvoer moet altijd mee vervangen worden`,
        `Als de afvoer grondig is gecontroleerd en beoordeeld als geschikt voor minimaal 15 jaar resterende levensduur`,
        `Als de afvoer er van buiten nog goed uitziet`
      ],
      goed: 2,
      uitleg: `BRL 6000-25 eist gelijktijdige vervanging, tenzij het bestaande systeem grondig is gecontroleerd en beoordeeld als geschikt voor minimaal 15 jaar resterende levensduur. Het merk van het nieuwe toestel is niet de eis, "altijd mee vervangen" is te strak geformuleerd (de uitzondering bestaat), en de buitenkant alleen zegt te weinig over de binnenkant.`
    },
    {
      vraag: `Waarom heeft een HR-toestel een condensafvoer nodig die het oude atmosferische toestel niet had?`,
      opties: [
        `Omdat een HR-toestel de waterdamp in het rookgas laat condenseren, wat zuur condensaat geeft`,
        `Omdat een HR-toestel voor zijn hogere rendement meer water in het cv-circuit moet rondpompen dan het oude toestel`,
        `Omdat een HR-toestel altijd een boiler nodig heeft`,
        `Omdat een HR-toestel meer gas verbruikt dan het oude toestel`
      ],
      goed: 0,
      uitleg: `Het condenseren van de waterdamp in het rookgas is precies waar het rendementsvoordeel van een HR-toestel vandaan komt (zie les 19.1), en dat condensaat is zuur en moet via een sifon worden afgevoerd. Dit heeft niets te maken met het cv-watervolume, een boiler, of een hoger gasverbruik (een HR-toestel verbruikt juist minder gas voor dezelfde warmte).`
    },
    {
      vraag: `Wat verandert er typisch aan het temperatuurregime bij vervanging door een HR-ketel, en wat betekent dat voor oude radiatoren?`,
      opties: [
        `De aanvoertemperatuur mag bij een HR-ketel juist hoger worden ingesteld dan bij het oude toestel, wat de afgifte van oude radiatoren flink verhoogt`,
        `Er verandert niets aan het temperatuurregime bij een HR-ketel`,
        `Voor een goed rendement wil je een lagere retourtemperatuur, waardoor oude radiatoren minder vermogen afgeven`,
        `Oude radiatoren moeten bij een HR-ketel altijd worden vervangen door vloerverwarming`
      ],
      goed: 2,
      uitleg: `Een HR-toestel condenseert het best bij een lage retourtemperatuur; oude radiatoren die voor een hoog regime (bijvoorbeeld 90/70 °C) zijn ontworpen, geven dan minder vermogen af. Dit is dus een verlaging, geen verhoging, van de gewenste temperatuur, er verandert wel iets, en vervanging door vloerverwarming is geen automatische eis, alleen een van de mogelijke oplossingen.`
    },
    {
      vraag: `Bij verbouw geldt voor een nieuw geïnstalleerde rookgasafvoer in beginsel de nieuwbouw-prestatieniveaus. Wanneer geldt de plaatseis voor de uitmonding daarbij niet?`,
      opties: [
        `Nooit, de plaatseis geldt altijd bij vervanging`,
        `Als de bestaande voorziening wordt vervangen en de plaats van de uitmonding niet wijzigt`,
        `Alleen als het nieuwe toestel van een ander merk is dan het oude, want elk merk heeft eigen plaatsingsregels`,
        `Alleen als de klant daar schriftelijk om vraagt`
      ],
      goed: 1,
      uitleg: `De plaatseis voor de uitmonding geldt niet als een bestaande voorziening wordt vervangen zonder dat de plaats van de uitmonding wijzigt (zie les 8.9). Dat is een objectief, wettelijk criterium, geen kwestie van merk of klantwens.`
    },
    {
      vraag: `Wat is de kern van de aanpak "vervangen is beoordelen, niet aannemen" bij een toestelvervanging?`,
      opties: [
        `Je vervangt altijd alles, ook wat nog goed is, om zeker te zijn`,
        `Je neemt de oude situatie (afvoer, ventilatie, temperatuurregime) gewoon over, want die heeft jarenlang zonder klachten gefunctioneerd en dat is genoeg bewijs`,
        `Je controleert bij elke vervanging opnieuw afvoer, ventilatie, condensafvoer en temperatuurregime, ook zonder eerdere klachten`,
        `Je beoordeelt alleen het nieuwe toestel, niet de bestaande installatie`
      ],
      goed: 2,
      uitleg: `De kern is dat je elk van de vijf punten (afvoer, ventilatie, condensafvoer, temperatuurregime, overige installatie) opnieuw beoordeelt, ook als er nooit klachten waren: een oude installatie zonder klachten is geen garantie dat ze geschikt is voor het nieuwe toestel. "Altijd alles vervangen" is onnodig en duur, en alleen het nieuwe toestel beoordelen mist precies het punt van deze les.`
    }
  ],
  kaarten: [
    { voor: `Wat verandert er aan de afvoer als je een atmosferisch toestel door een HR-ketel vervangt?`, achter: `Van onderdruk/natuurlijke trek naar lichte overdruk met een ventilator, bij een veel lagere rookgastemperatuur; het bestaande kanaal is daar niet automatisch geschikt voor.` },
    { voor: `Wanneer mag de bestaande afvoer blijven zitten bij toestelvervanging?`, achter: `Als hij grondig is gecontroleerd en beoordeeld als geschikt voor minimaal 15 jaar resterende levensduur (BRL 6000-25).` },
    { voor: `Waarom heeft een HR-toestel een condensafvoer nodig?`, achter: `Het toestel laat de waterdamp in het rookgas condenseren; dat condensaat is zuur en moet via een sifon naar de riolering worden afgevoerd.` },
    { voor: `Wat gebeurt er met de afgifte van oude radiatoren bij een lager temperatuurregime?`, achter: `Radiatoren die voor een hoog regime (bijvoorbeeld 90/70 °C) zijn ontworpen, geven bij een lagere temperatuur minder vermogen af.` },
    { voor: `Wanneer geldt de plaatseis voor de uitmonding niet bij verbouw?`, achter: `Als een bestaande voorziening wordt vervangen en de plaats van de uitmonding niet wijzigt.` },
    { voor: `Wat zijn de vijf punten die je controleert bij een toestelvervanging?`, achter: `De afvoer, de opstelruimte/ventilatie, de condensafvoer, het temperatuurregime/afgifte, en de rest van de installatie (gasdruk, leidingwerk, eventueel CLV).` },
    { voor: `Waarom controleer je deze vijf punten ook als de oude installatie nooit klachten gaf?`, achter: `Omdat een probleemvrije oude situatie geen garantie is dat ze geschikt is voor het nieuwe toestel met andere druk, temperatuur en condens.` }
  ],
  bronnen: ['TST-38', 'TST-39', 'TST-40', 'TST-41', 'TST-42', 'TST-43', 'RGA-24', 'RGA-71', 'RGA-80', 'RGA-81']
}

  ]
});
