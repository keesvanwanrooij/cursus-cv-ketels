/* ==========================================================================
   m13.js - Module 13: Installeren en inbedrijfstellen
   Geschreven op basis van project/docs/feiten/13-installeren-en-inbedrijfstellen.md (IBS),
   met hergebruik van 01-wet-en-certificering.md (WET, EXA), 05-installeren-meten-onderhoud-storingen.md
   (INS, MET, ONT), 06-arbo-en-veilig-werken.md (ARB). Voor meten verwijst deze module naar module 10,
   voor leidingwerk naar module 12 en voor de rookgasafvoer naar module 8, in plaats van die stof te herhalen.
   ========================================================================== */

CURSUS.addModule({
  id: 'm13',
  nr: 13,
  deel: 2,
  titel: 'Installeren en inbedrijfstellen',
  ondertitel: 'Van werkvoorbereiding tot een veilig opgeleverde ketel.',
  niveau: 'Gevorderd',
  studietijd: 9,
  intro: 'Van werkvoorbereiding tot oplevering: een ketel plaatsen, aansluiten, gasdicht controleren, vullen, ontsteken, afstellen en vrijgeven, volgens de fabrikantinstructies en met aantoonbare metingen.',
  inleiding: [
    'Deze module zet de stappen op een rij die je bij vrijwel elke ketelvervanging doorloopt: de opname bij de klant, plaatsen en aansluiten, gasdichtheid controleren, vullen en ontluchten, de eerste ontsteking en afstelling, vrijgeven en opleveren. Het is de rode draad die de vakken uit modules 8, 9, 10 en 12 samenbrengt in het werk van een dag: rookgasafvoer, elektra, meten en leidingwerk komen hier terug als onderdeel van een groter geheel, niet als apart hoofdstuk.',
    'De wet en het certificatieschema stellen niet alleen eisen aan het toestel, maar aan het hele proces: wat je vooraf controleert, welke metingen verplicht zijn, wat je vastlegt en wanneer je een installatie niet mag vrijgeven. Wie deze volgorde beheerst en weet wat hij moet bewijzen, werkt sneller en met minder risico dan wie van fabrikant tot fabrikant blindelings een ander protocol volgt.'
  ],
  leerdoelen: [
    'Een installatie voorbereiden en de situatie bij de klant opnemen',
    'Een ketel plaatsen en water, gas, elektra en afvoer aansluiten',
    'De gasdichtheid controleren',
    'Vullen, ontluchten, spoelen en de eerste ontsteking uitvoeren',
    'Een ketel vrijgeven met een compleet protocol en de klant instrueren'
  ],
  lessen: [

/* ------------------------------------------------------------------ 13.1 */
{
  id: 'm13l01',
  nr: '13.1',
  titel: 'Werkvoorbereiding en opname bij de klant',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt een installatie voorbereiden en bij de klant de situatie opnemen die bepaalt of de ketel er veilig kan komen.',
  videos: [
    { taal: 'nl', titel: 'Hoe installeer je een CV-ketel écht juist? (Loodgieter Den Haag Stad)', yt: 'lplWnQUmmRE', duur: '±8 min, 2025' },
    { taal: 'nl', titel: 'Hybrid ready cv ketel installeren, stap voor stap met tips (Loodgieter Den Haag Stad)', yt: 'S2bL8XyzmTE', duur: '±15 min, 2026' },
    { taal: 'en', titel: 'How to check an engineers gas safe card properly (Sebastian Hibbert, VK, ter vergelijking)', yt: '6nTbf0D84mA', duur: '±4 min, 2014' }
  ],
  tekst: `
## De opname bepaalt niet of de ketel past, maar of hij er veilig kan komen

Voordat je een schroef aandraait, ligt al vast wat je gaat doen: een project registreren, de situatie bij de klant beoordelen en vaststellen of de bouwkundige omgeving een veilige installatie toelaat. Wie dit overslaat en meteen gaat monteren, ontdekt de problemen op het moment dat ze het duurst zijn: met een half aangesloten toestel in een woonkamer.

!!! kern De opname is geen formaliteit
Tijdens de werkvoorbereiding controleer je of aan de bouwkundige randvoorwaarden is voldaan om de installatie veilig te laten functioneren, en die controle is voorbehouden aan de inbedrijfsteller. Dat gebeurt vóór je begint, niet achteraf als het toestel al hangt.
!!!

## Wat je administratief vastlegt

Elk project waarvoor je opdracht hebt gekregen, registreer je vóór de uitvoering: een projectnummer, de naam- en adresgegevens en de datum van opname. De certificerende instelling moet daar op elk moment bij kunnen. Dat is geen extra papierwerk naast het echte werk, het is het begin van het projectdossier dat je straks bij de vrijgave weer nodig hebt (les 13.6).

Bij de opname mag de klant ook aan jou vragen wie je bent. Iedereen die namens een certificaathouder werkzaamheden verricht, moet kunnen aantonen dat hij bij dat gecertificeerde bedrijf werkt. Een legitimatiebewijs bevat minimaal de bedrijfsnaam, je naam en pasfoto, het beeldmerk "CO-Vrij" en de afgiftedatum; het Vakpaspoort mag hiervoor dienen als het die gegevens bevat.

## Wat je ter plaatse controleert

| Onderdeel | Wat je checkt | Waar je meer over leert |
|---|---|---|
| Opstelplaats en vrije ruimte | Past het nieuwe toestel, is er onderhoudsruimte, is de ruimte vorstvrij | Module 8 (rookgasafvoer en opstellingsruimte) |
| Gasleiding en gasmeter | Diameter, staat, capaciteit van de meter | Module 12 (leidingwerk) |
| Elektra | Groep beschikbaar, randaarde, aansluitpunt binnen bereik | Module 9 (elektrisch werken) |
| Bestaande rookgasafvoer | Materiaal, leeftijd, conditie: blijft hij, of moet hij mee vervangen worden | Module 8, les 8.9 |
| Bouwkundige omgeving | Verdacht plaatmateriaal (mogelijk asbest), doorvoeren, vloerconstructie | Zie hieronder |
| Cv-water en installatie | Leeftijd installatie, eerdere problemen, of spoelen nodig is | Les 13.4 |

!!! gevaar Verdacht materiaal: niet zelf bewerken
Zolang asbesthoudend materiaal intact blijft, komen er geen vezels vrij. Zie je bij een gebouw van voor 1994 verouderd plaatmateriaal, board of koord rond de ketelkast dat je moet verwijderen of doorboren om het toestel te kunnen plaatsen, boor, zaag of breek er dan niet zelf in. Voor renovatie of onderhoud aan zo'n bouwwerk is doorgaans een asbestinventarisatie verplicht voordat het werk begint. Meld je twijfel bij de opdrachtgever en laat eerst onderzoeken voor je verder gaat.
!!!

## Praktijkgeval: de oude geiser in de badkamer

Je gaat een offerte opnemen voor een ketel ter vervanging van een 22 jaar oude combiketel in een jaren '80-rijtjeswoning. Bij de opname zie je: de ketel hangt in een kast op de overloop met weinig vrije ruimte, de rookgasafvoer is een enkelwandig aluminium kanaal dat je niet eerder bent tegengekomen bij nieuwere installaties, en in de meterkast zit nog een oude platen wandconstructie. Je noteert dit alles in het projectdossier: de afvoer moet beoordeeld worden op resterende levensduur voor je kunt zeggen of hij kan blijven zitten, en de platen achterwand verdient een vraag aan de klant voordat je gaat boren. Geen van beide punten betekent dat je de opdracht niet aanneemt, wel dat je ze meeneemt in de offerte en de planning.

## Wat je met de klant afspreekt

Bespreek bij de opname ook wat de klant kan verwachten: een planning, wat er gebeurt als de bestaande afvoer alsnog vervangen moet worden, wie verantwoordelijk is voor een asbestonderzoek als dat nodig is, en of er al een CO-melder in huis is. Zo voorkom je dat de klant deze punten pas op de installatiedag hoort.
`,
  checklist: [
    'Ik registreer een project vóór de uitvoering met nummer, naam, adres en datum',
    'Ik kan mijn legitimatie laten zien en weet wat daarop moet staan',
    'Ik controleer bij opname opstelplaats, gasleiding, elektra, bestaande afvoer en de bouwkundige omgeving',
    'Ik werk niet zelf in verdacht plaatmateriaal van voor 1994 zonder onderzoek',
    'Ik leg bevindingen van de opname vast in het projectdossier'
  ],
  quiz: [
    {
      vraag: `Wanneer moet je een project registreren volgens het certificatieschema?`,
      opties: [`Voordat de uitvoering begint, met projectnummer, naam- en adresgegevens en de datum van opname`, `Alleen bij opdrachten boven een bepaald bedrag`, `Dat is alleen verplicht voor bedrijven met meer dan 10 medewerkers`, `Na afronding van het werk, samen met de eindfactuur en het opleveringsrapport voor de administratie`],
      goed: 0,
      uitleg: `De certificaathouder registreert elk project voorafgaand aan de uitvoering, met projectnummer, naam- en adresgegevens en de datum van opname. Een grens aan het bedrag of de bedrijfsgrootte staat niet in het schema.`
    },
    {
      vraag: `Een klant vraagt bij de opname om je legitimatie te zien. Wat moet daarop minimaal staan?`,
      opties: [
        `Alleen je voornaam, want een achternaam is privacygevoelig`,
        `Je BTW-nummer en KvK-nummer`,
        `Bedrijfsnaam, je naam en pasfoto, het beeldmerk "CO-Vrij" en de afgiftedatum`,
        `Een kopie van het examenresultaat van je theorietoets`
      ],
      goed: 2,
      uitleg: `Het legitimatiebewijs bevat minimaal de bedrijfsnaam, naam en pasfoto van de medewerker, het beeldmerk "CO-Vrij" en de afgiftedatum. Een Vakpaspoort mag dienen als het die gegevens bevat. KvK-gegevens en examenresultaten horen er niet standaard op.`
    },
    {
      vraag: `Bij een opname in een woning van 1985 zie je verouderd plaatmateriaal rond de ketelkast dat in de weg zit voor het nieuwe toestel. Wat is de juiste eerste stap?`,
      opties: [
        `Het meteen wegzagen, want je hebt nog geen storing gemeld`,
        `Het laten zitten en er niet in werken zonder eerst te laten onderzoeken of het asbest bevat`,
        `De klant vragen het zelf te verwijderen voor je langskomt`,
        `Doorgaan, want zolang je geen boormachine gebruikt is er niets aan de hand`
      ],
      goed: 1,
      uitleg: `Zolang asbesthoudend materiaal intact blijft, komen er geen vezels vrij, maar bewerken (zagen, boren, breken) kan dat wel doen. Voor een bouwwerk van voor 1994 is bij renovatie of onderhoud doorgaans eerst een asbestinventarisatie nodig. Zelf verwijderen door de klant of "doorgaan zolang je niet boort" is geen veilige aanpak.`
    },
    {
      vraag: `Wat is het doel van de controle van bouwkundige randvoorwaarden tijdens de werkvoorbereiding?`,
      opties: [`Vaststellen of aan de voorwaarden is voldaan om de installatie veilig te laten functioneren`, `Vaststellen welke kleur toestel het beste bij de ruimte past`, `Alleen relevant bij nieuwbouw, niet bij vervanging van een bestaand toestel op dezelfde opstelplaats`, `Vaststellen of de klant de rekening op tijd kan betalen`],
      goed: 0,
      uitleg: `Het certificatieschema koppelt de werkvoorbereiding aan de veilige werking van de installatie: is de bouwkundige omgeving geschikt om het toestel veilig te laten functioneren. Dat geldt evengoed bij vervanging in bestaande bouw als bij nieuwbouw.`
    },
    {
      vraag: `Tijdens de opname blijkt de bestaande rookgasafvoer 12 jaar oud, zonder dat er ooit een conditiebeoordeling is gedaan. Wat betekent dit voor je opname?`,
      opties: [`Je vervangt hem alleen als hij zichtbaar corrosie vertoont`, `De leeftijd van een afvoer is nooit relevant voor de beslissing`, `Niets, onder de 15 jaar mag een afvoer altijd blijven zitten, ook zonder dat er ooit een grondige controle op de conditie is uitgevoerd door een inbedrijfsteller`, `Je moet de afvoer beoordelen; zonder een grondige controle met een "goed" oordeel wordt hij bij toestelvervanging gelijktijdig vervangen`],
      goed: 3,
      uitleg: `De 15 jaar in het schema gaat over de verwachte resterende levensduur na een grondige controle, niet over de kalenderleeftijd. Zonder die beoordeling met een "goed" oordeel vervang je de afvoer gelijktijdig met het toestel. Zichtbare corrosie is niet de enige aanleiding: de binnenkant kan slechter zijn dan de buitenkant laat zien.`
    }
  ],
  kaarten: [
    { voor: `Wat controleer je tijdens de werkvoorbereiding volgens het certificatieschema?`, achter: `Of aan de bouwkundige randvoorwaarden is voldaan om de installatie veilig te laten functioneren.` },
    { voor: `Wanneer registreer je een project?`, achter: `Voor de uitvoering begint: met projectnummer, naam- en adresgegevens en de datum van opname.` },
    { voor: `Wat moet minimaal op je legitimatiebewijs staan?`, achter: `Bedrijfsnaam, je naam en pasfoto, het beeldmerk "CO-Vrij" en de afgiftedatum.` },
    { voor: `Wat doe je bij een vermoeden van asbest tijdens de opname?`, achter: `Niet zelf bewerken of verwijderen; bij een bouwwerk van voor 1994 is doorgaans eerst een asbestinventarisatie nodig.` },
    { voor: `Wat betekent "resterende levensduur van 15 jaar" voor een rookgasafvoer bij toestelvervanging?`, achter: `Zonder een grondige controle met dat oordeel wordt de afvoer gelijktijdig met het toestel vervangen.` },
    { voor: `Wie mag de controle van bouwkundige randvoorwaarden tijdens de werkvoorbereiding uitvoeren?`, achter: `Een inbedrijfsteller.` },
    { voor: `Wat vraag je bij de opname aan de klant over veiligheid, naast de techniek?`, achter: `Of er al een CO-melder aanwezig is, en of hij verwachtingen heeft over planning en eventueel meerwerk.` }
  ],
  bronnen: ['IBS-01', 'IBS-02', 'IBS-03', 'ARB-13', 'ARB-21', 'INS-36']
},

/* ------------------------------------------------------------------ 13.2 */
{
  id: 'm13l02',
  nr: '13.2',
  titel: 'Plaatsen en aansluiten',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt een ketel plaatsen en water, gas, elektra en afvoer volgens de fabrikantinstructies aansluiten.',
  videos: [
    { taal: 'nl', titel: 'Leer in 30 minuten een HR cv-ketel vakkundig aansluiten: Remeha Avanta (Loodgieter Den Haag Stad)', yt: 'jbJ01IA36IU', duur: '±30 min, 2020' },
    { taal: 'nl', titel: 'Loodgieter Anouar laat zien hoe je een gasleiding op een cv-ketel aansluit (Loodgieter Den Haag Stad)', yt: 'F9wQOmeKOdI', duur: '±1 min, 2022' },
    { taal: 'en', titel: 'Vaillant EcoTec Plus Boiler Install, Full Walkthrough (Advanced Boiler Training, VK)', yt: 'uMRW2UygIlE', duur: '±7 min, 2025' }
  ],
  tekst: `
## Vrije ruimte, dan pas de leidingen

Voor je één leiding aansluit, moet het toestel goed en veilig kunnen hangen of staan. Als de fabrikant geen maten geeft, geldt volgens de brancherichtlijn voor hoog-rendement cv-ketels als vrije ruimte: minimaal 2 m vrije hoogte vanaf de vloer aan de bedieningszijde, een vrij looppad van minimaal 1 m breed aan die zijde, en minimaal 10 cm afstand tot andere wanden (niet de achterzijde). De opstellingsruimte moet vorstvrij zijn. Bij vervanging in bestaande bouw mag hiervan praktisch worden afgeweken, zolang bediening, onderhoud en reparatie nog goed mogelijk blijven. Dit is een brancherichtlijn en geen harde wettelijke maat: de fabrikant van het toestel gaat voor, en de precieze maten staan op de maattekening in de installatiehandleiding.

!!! kern Volgorde verschilt per fabrikant, niet per wet
Er bestaat geen wettelijk voorgeschreven volgorde om gas, water, elektra en afvoer aan te sluiten. Fabrikanten kiezen zelf een volgorde in hun handleiding: de installatiehandleiding van de Remeha Calora Tower Gas 35S behandelt eerst plaatsing, dan de wateraansluitingen (met de installatie eerst doorspoelen), dan de gasaansluiting, en pas daarna de lucht- en rookgasaansluiting. Andere fabrikanten kiezen een andere volgorde. Volg altijd de handleiding van het toestel dat je plaatst, niet een algemene vaste regel.
!!!

## Wat je logisch wel vast kunt houden

Ongeacht de volgorde in de handleiding, zijn er een paar vaste punten:

- **Water:** spoel een bestaande of nieuwe installatie eerst grondig door voordat de nieuwe ketel wordt aangesloten. Zie les 13.4 voor de hoeveelheden.
- **Gas:** de aansluiting gebeurt volgens de norm voor gasleidingwerk en wordt na montage altijd op dichtheid gecontroleerd (les 13.3). Bij het aansluiten van een vulkraan of een andere verbinding tussen de cv-installatie en het drinkwaternet is een terugstroombeveiliging nodig, om te voorkomen dat cv-water in het drinkwaternet terechtkomt; welke categorie beveiliging nodig is, staat in het voorschrift van de fabrikant van de vulkraan of het toestel.
- **Elektra:** spanningsloos werken, randaarde en de aansluiting van de netvoeding en de thermostaat komen uitgebreid aan de orde in module 9. Sluit pas aan als je weet welke groep beschikbaar is en of de aarding in orde is.
- **Luchttoevoer en rookgasafvoer:** moeten voldoen aan het Bbl en aan de voorschriften van zowel de toestelfabrikant als de fabrikant van het afvoersysteem, met NEN 3028 en NPR 3378-22 als aanwijzing voor de capaciteitsbepaling van de ventilatieopeningen. De aansluitwijzen (C13, C33, C53 en zo verder) en de materialen komen uitgebreid aan bod in module 8.

## Rekenvoorbeeld: past de vrije ruimte?

Een monteur plaatst een staande ketel in een kast van 90 cm breed en 70 cm diep, met een deur die 65 cm opent. De brancherichtlijn vraagt een vrij looppad van minimaal 1 m aan de bedieningszijde. De deuropening van 65 cm is smaller dan dat. Betekent dit dat de kast per definitie afgekeurd is? Niet automatisch: bij vervanging in bestaande bouw mag praktisch worden afgeweken als bediening, onderhoud en reparatie nog goed mogelijk blijven, en de fabrikant van het toestel kan een kleinere minimale maat toestaan. De monteur controleert dus eerst de maattekening van het specifieke toestel voordat hij de kast afkeurt of goedkeurt.

## Praktijkgeval: de volgorde omdraaien

Een leerling wil eerst de gasleiding aansluiten "want dat is het spannendste onderdeel" en pas daarna het toestel definitief vastzetten. Dat werkt averechts: zonder dat het toestel goed vastzit, hangt de aansluiting onder spanning en is naderhand lastig te corrigeren als de opstelling toch niet klopt. Volg de volgorde uit de handleiding van het toestel: die is niet willekeurig, maar voorkomt dat je later een al aangesloten leiding moet loskoppelen om iets anders recht te zetten.
`,
  checklist: [
    'Ik controleer de vrije ruimte volgens de maattekening van het toestel, met de brancherichtlijn als vangnet als de fabrikant niets zegt',
    'Ik volg de aansluitvolgorde uit de installatiehandleiding van het specifieke toestel',
    'Ik weet dat een vulkraan of aansluiting op het drinkwaternet een terugstroombeveiliging nodig heeft',
    'Ik sluit elektra pas aan als groep en aarding gecontroleerd zijn (module 9)',
    'Ik weet dat luchttoevoer en rookgasafvoer aan het Bbl en de fabrikantvoorschriften moeten voldoen (module 8)'
  ],
  quiz: [
    {
      vraag: `Wat is de juiste volgorde om gas, water, elektra en afvoer aan te sluiten bij een nieuwe ketel?`,
      opties: [`Er is geen wettelijk voorgeschreven volgorde; volg de installatiehandleiding van het specifieke toestel`, `Altijd eerst de rookgasafvoer, want die bepaalt de opstelling`, `De volgorde maakt niet uit zolang alles maar wordt aangesloten voor je de eerste keer een warmtevraag test`, `Altijd eerst gas, dat is bij elk merk wettelijk verplicht`],
      goed: 0,
      uitleg: `Er bestaat geen wettelijk voorgeschreven volgorde: fabrikanten kiezen zelf een volgorde in hun handleiding, en die kan per merk verschillen. "Maakt niet uit" is te kort door de bocht: een verkeerde volgorde kan je dwingen om al aangesloten onderdelen weer los te maken.`
    },
    {
      vraag: `Een fabrikant geeft geen maten voor de vrije ruimte rond een ketel. Wat geldt dan volgens de brancherichtlijn voor hoog-rendement cv-ketels?`,
      opties: [`Precies 60 cm vrije ruimte voor de ketel, ongeacht het model`, `Geen enkele eis, dan mag je zelf inschatten`, `Minimaal 3 m vrije hoogte en 2 m vrij looppad`, `Minimaal 2 m vrije hoogte, een vrij looppad van minimaal 1 m breed aan de bedieningszijde en minimaal 10 cm tot andere wanden`],
      goed: 3,
      uitleg: `Als de fabrikant niets zegt, geldt als brancherichtlijn 2 m vrije hoogte, een looppad van minimaal 1 m breed aan de bedieningszijde en minimaal 10 cm tot andere wanden (niet de achterzijde), met een vorstvrije ruimte. Dit is geen wettelijke maat, en 60 cm of 3 m zijn hier niet aangetoond.`
    },
    {
      vraag: `Waarom is een terugstroombeveiliging nodig bij een vulkraan van een cv-installatie?`,
      opties: [`Om te voorkomen dat de ketel te veel geluid maakt`, `Dat is alleen nodig bij een toestel boven 100 kW`, `Om te voorkomen dat cv-water met eventuele toevoegmiddelen in het drinkwaternet terechtkomt`, `Om de waterdruk in de cv-installatie hoger te maken zodat de radiatoren sneller warm worden`],
      goed: 2,
      uitleg: `Een terugstroombeveiliging voorkomt dat verontreinigd water, zoals cv-water met een toevoegmiddel, teruggezogen wordt in de drinkwaterinstallatie. Het gaat om contaminatierisico, niet om geluid of waterdruk, en de eis geldt niet pas boven een vermogensgrens van 100 kW.`
    },
    {
      vraag: `Een kast voor een staande ketel heeft een deuropening van 65 cm, terwijl de brancherichtlijn 1 m vrij looppad noemt. Wat is de juiste vervolgstap?`,
      opties: [`Doorgaan zonder verder te kijken, de richtlijn geldt toch niet voor bestaande bouw`, `De maattekening van het specifieke toestel raadplegen: bij vervanging in bestaande bouw mag praktisch worden afgeweken als bediening, onderhoud en reparatie nog goed mogelijk blijven`, `De klant vragen de kastdeur te verbreden voor je verder werkt`, `De kast is per definitie afgekeurd, want de brancherichtlijn is een harde wettelijke eis`],
      goed: 1,
      uitleg: `De brancherichtlijn is geen wet: bij vervanging in bestaande bouw mag er praktisch van worden afgeweken als bediening, onderhoud en reparatie nog goed mogelijk blijven, en de fabrikant kan een eigen minimale maat toestaan. "Per definitie afgekeurd" en "geldt niet voor bestaande bouw" zijn beide te ongenuanceerd.`
    },
    {
      vraag: `Waaraan moeten luchttoevoer en rookgasafvoer bij het plaatsen van een toestel voldoen?`,
      opties: [`Alleen aan NEN 3028, andere normen zijn hier niet relevant`, `Aan geen enkele eis zolang het toestel een CE-markering heeft`, `Alleen aan de voorschriften van de fabrikant van het toestel, het Bbl is hier niet van toepassing op de rookgasafvoer`, `Aan het Bbl en aan de voorschriften van zowel de toestelfabrikant als de fabrikant van het afvoersysteem`],
      goed: 3,
      uitleg: `Luchttoevoer en rookgasafvoer moeten voldoen aan het Bbl en aan de installatievoorschriften van zowel de toestelfabrikant als de fabrikant van het afvoersysteem, met NEN 3028 en NPR 3378-22 als aanwijzing voor de capaciteitsbepaling. Een CE-markering op het toestel vervangt deze eisen niet.`
    }
  ],
  kaarten: [
    { voor: `Is er een wettelijk voorgeschreven volgorde om gas, water, elektra en afvoer aan te sluiten?`, achter: `Nee. Fabrikanten kiezen zelf een volgorde in hun handleiding; volg die volgorde per toestel.` },
    { voor: `Wat is de brancherichtlijn voor vrije ruimte rond een HR-ketel als de fabrikant niets zegt?`, achter: `Minimaal 2 m vrije hoogte, 1 m vrij looppad aan de bedieningszijde, 10 cm tot andere wanden, en vorstvrij.` },
    { voor: `Waarom heeft een vulkraan van een cv-installatie een terugstroombeveiliging nodig?`, achter: `Om te voorkomen dat cv-water (mogelijk met toevoegmiddel) teruggezogen wordt in het drinkwaternet.` },
    { voor: `Waar staan de exacte vrije-ruimte-maten voor een specifiek toestel?`, achter: `Op de maattekening in de installatiehandleiding van dat toestel.` },
    { voor: `Waaraan moet de rookgasafvoer bij plaatsing voldoen?`, achter: `Aan het Bbl en aan de voorschriften van de toestelfabrikant én de fabrikant van het afvoersysteem.` },
    { voor: `Wat controleer je voor je elektra aansluit?`, achter: `Of er een geschikte groep beschikbaar is en of de aarding in orde is (module 9).` },
    { voor: `Wat kost je tijd als je een leiding aansluit voordat het toestel goed vastzit?`, achter: `Je moet de aansluiting mogelijk weer loskoppelen als de opstelling niet klopt.` }
  ],
  bronnen: ['IBS-05', 'IBS-06', 'IBS-07', 'IBS-08']
},

/* ------------------------------------------------------------------ 13.3 */
{
  id: 'm13l03',
  nr: '13.3',
  titel: 'Gasdichtheid controleren',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de gasleiding en aansluitingen van een toestel op dichtheid controleren en de uitkomst beoordelen.',
  videos: [
    { taal: 'nl', titel: 'Beproeven van een nieuw aangelegde gasleiding met een drukstoot (Berry Mauritsz)', yt: 'kyETgn0HHbY', duur: '±2 min, 2014' },
    { taal: 'nl', titel: 'Beproeven van een nieuw aangelegde gasleiding met een dichtheidsbeproeving (Berry Mauritsz)', yt: 'IslIlv5PKis', duur: '±1 min, 2014' },
    { taal: 'en', titel: 'Practical demonstration of tightness testing and purging to IGEM/UP/1B (Tomkat Gas Training, VK, ter vergelijking)', yt: 'PZ38knShLls', duur: '±22 min, 2026' }
  ],
  tekst: `
## Twee beproevingen, twee doelen

Bij het installeren of vervangen van een gasverbrandingstoestel moet de gasleiding op dichtheid worden beproefd. Bij een nieuwe leiding zijn dat twee losse stappen: een sterkteproef en een dichtheidsproef. Voldoe je aan NPR 3378-1, dan wordt geacht aan de gasdichtheidseis van het Bbl te zijn voldaan.

!!! kern Zonder beproeving stel je niet in bedrijf
De dichtheidsbeproeving is verplicht bij elke installatie of vervanging van een gasverbrandingstoestel, niet iets dat je overslaat als de leiding er "netjes" uitziet. Voldoe je daarbij aan NPR 3378-1, dan geldt dat als bewijs dat je aan de gasdichtheidseis van het Bbl voldoet: geen beproeving betekent geen bewijs, en dus geen toestel in bedrijf.
!!!

| Beproeving | Wat het test | Richtwaarde |
|---|---|---|
| Sterkteproef | Of de leiding een drukstoot doorstaat zonder te bezwijken | Drukstoot van 5 bar, minimaal 10 seconden |
| Dichtheidsproef (nieuwe leiding) | Of er geen gas weglekt bij de werkdruk | Werkdruk plus 100 mbar, minimaal 3 minuten |
| Beproeving bestaande installatie | Of het lekverlies binnen de norm blijft | Maximaal 5 dm³ per uur (NEN 8078) |

Voor een bestaande gasleiding geldt geen drukstoot: die wordt uitsluitend op werkdruk op dichtheid beproefd, met aandacht voor bescherming tegen mechanische beschadiging en corrosie en voor de juiste materialen, bevestiging en beugeling.

!!! gevaar Nooit een sterkteproef of dichtheidsproef op het aangesloten toestel
Een aangesloten toestel is niet gebouwd op een drukstoot van 5 bar of een proefdruk van werkdruk plus 100 mbar: dat kan het gasblok beschadigen. Sluit eerst de toestelkraan of koppel het toestel los, en ontspan de leidingdruk voor je de gaskraan van het toestel opent. Volg voor het toegestane testbereik op een aangesloten toestel altijd de fabrikant: de een staat 60 mbar toe, de ander 110 mbar.
!!!

## Meetapparatuur en middelen

Voor het meten van de lekdichtheid van een gasleiding is drukmeetapparatuur nodig die het bereik van 0 tot 200 mbar met voldoende nauwkeurigheid en resolutie kan meten. Voor het opsporen van een lek zelf gebruik je lekzoekspray of een gaslekzoeker met een uitlezing van de gasconcentratie en een akoestisch signaal. Lekzoeken met een open vlam is uitgesloten: dat is precies de vonkbron die je bij een lek wilt vermijden.

Voor schroefdraadverbindingen op gas is niet elk afdichtmateriaal toegestaan: erkend zijn producten met een Gastec QA-keur (KE 31-1, KE 31-2 of KE 31-3, waaronder PTFE-tape met dat keurmerk). Bij een fabrieksafdichting, zoals een pakking of een ring, gebruik je geen extra afdichtmiddel en vervang je bij onderhoud alleen met de meegeleverde originele afdichting.

## Rekenvoorbeeld: klopt de meting?

Je beproeft een nieuwe binnenleiding met een werkdruk van 30 mbar. Volgens de dichtheidsproef test je op werkdruk plus 100 mbar, dus op 130 mbar, gedurende minimaal 3 minuten. Na 3 minuten zie je op de manometer geen drukdaling. Dat is een goed teken, maar geen garantie: een goede beproeving hoort ook een controle van alle koppelingen met lekzoekspray of een gaslekzoeker, juist omdat een zeer klein lek soms niet meteen in het drukverloop terug te zien is binnen de proeftijd.

## Wat je doet bij een lek

Vind je bij het controleren met lekzoekspray of een gaslekzoeker toch een lek, dan herstel je de verbinding (nadraaien, een nieuwe afdichting, of het onderdeel vervangen) en herhaal je de beproeving vanaf het begin. Stel het toestel niet in bedrijf voordat de leiding en alle aansluitingen dicht zijn bevonden: dat is geen kwestie van "een beetje lek is oké", een gaslek dat je zelf hersteld denkt te hebben, controleer je opnieuw voor je verder gaat.
`,
  checklist: [
    'Ik weet het verschil tussen de sterkteproef (drukstoot) en de dichtheidsproef van een nieuwe gasleiding',
    'Ik weet dat een bestaande installatie alleen op werkdruk wordt beproefd, met een maximaal toegestaan lekverlies',
    'Ik test nooit met de volledige proefdruk op een aangesloten toestel',
    'Ik gebruik lekzoekspray of een gaslekzoeker, nooit een open vlam',
    'Ik gebruik alleen afdichtmateriaal met een Gastec QA-keur op schroefdraadverbindingen'
  ],
  quiz: [
    {
      vraag: `Wat is het verschil tussen de sterkteproef en de dichtheidsproef van een nieuwe gasleiding?`,
      opties: [`De dichtheidsproef gebeurt altijd voor de sterkteproef`, `Er is geen verschil, het zijn twee namen voor dezelfde proef`, `De sterkteproef test met een drukstoot of de leiding een hoge druk doorstaat, de dichtheidsproef test op werkdruk plus 100 mbar of er gas weglekt`, `De sterkteproef is alleen voor kunststof leidingen, de dichtheidsproef alleen voor metalen leidingen, omdat kunststof een hogere proefdruk niet zou verdragen`],
      goed: 2,
      uitleg: `De sterkteproef (drukstoot van 5 bar, minimaal 10 seconden) test of de leiding een hoge druk doorstaat. De dichtheidsproef test bij werkdruk plus 100 mbar, minimaal 3 minuten, of er gas weglekt. Het materiaal van de leiding bepaalt niet welke proef je doet, en de sterkteproef gaat vooraf aan de dichtheidsproef.`
    },
    {
      vraag: `Waarom test je nooit met de volledige sterkteproefdruk op een aangesloten toestel?`,
      opties: [
        `Dat is helemaal geen probleem, elk toestel is daar wel tegen bestand`,
        `Omdat de proefdruk het gasblok van het toestel kan beschadigen; sluit eerst de toestelkraan of koppel los`,
        `Omdat de wet dit expliciet verbiedt voor elk toestel op elke druk`,
        `Omdat het te lang duurt om het toestel los te koppelen`
      ],
      goed: 1,
      uitleg: `Een aangesloten toestel is niet gebouwd op de volle proefdruk: dat kan het gasblok beschadigen. Daarom sluit je eerst de toestelkraan of koppel je het toestel los, en volg je de door de fabrikant toegestane testdruk op het aangesloten toestel (die per merk verschilt).`
    },
    {
      vraag: `Welk middel gebruik je om een gaslek concreet op te sporen na een beproeving?`,
      opties: [`Lekzoekspray of een gaslekzoeker met concentratie-uitlezing en akoestisch signaal`, `Alleen je reukzin, want aardgas is voorzien van een geurstof`, `Een föhn om het gebied te drogen en zo een lek te horen`, `Een open vlam, want die reageert direct op gas`],
      goed: 0,
      uitleg: `Erkend gereedschap voor lekzoeken is lekzoekspray of een gaslekzoeker met uitlezing van de concentratie en een akoestisch signaal. Een open vlam is precies de vonkbron die je bij een gaslek wilt vermijden.`
    },
    {
      vraag: `Een collega gebruikt gewone loodgieterstape (zonder keurmerk) op een schroefdraadverbinding voor gas. Wat klopt?`,
      opties: [`Het maakt niet uit, want de dichtheidsproef vangt elke fout toch wel op`, `Dat mag altijd, tape is tape`, `Dat mag nooit, PTFE-tape is op gas volledig verboden, ongeacht of er een Gastec QA-keurmerk op de verpakking staat`, `Alleen tape met een Gastec QA-keur (bijvoorbeeld KE 31-3) is erkend afdichtmateriaal voor schroefdraad op gas`],
      goed: 3,
      uitleg: `"Geen teflon op gas" is te absoluut: PTFE-tape met een Gastec QA-keur (KE 31-3) is wel erkend, gewone niet-gekeurde tape niet. Op een dichtheidsproef vertrouwen in plaats van het juiste materiaal te gebruiken is geen vervanging voor een correcte verbinding.`
    },
    {
      vraag: `Je beproeft een bestaande gasinstallatie op dichtheid. Wanneer is het lekverlies volgens de norm voor bestaande installaties in orde?`,
      opties: [`Bestaande installaties worden nooit op dichtheid beproefd`, `Als het lekverlies niet groter is dan 5 dm³ per uur`, `Als er helemaal geen enkele meetbare drukverandering is`, `Als de proefdruk minimaal 5 bar was`],
      goed: 1,
      uitleg: `Voor bestaande gasinstallaties geldt een maximaal toegestaan lekverlies van 5 dm³ per uur (NEN 8078). Een bestaande leiding wordt niet met een sterkteproef van 5 bar getest, alleen op werkdruk.`
    }
  ],
  kaarten: [
    { voor: `Wat is de sterkteproef van een gasleiding?`, achter: `Een drukstoot van 5 bar, minimaal 10 seconden, om te controleren of de leiding een hoge druk doorstaat.` },
    { voor: `Wat is de dichtheidsproef van een nieuwe gasleiding?`, achter: `Testen op werkdruk plus 100 mbar, minimaal 3 minuten, om te controleren of er gas weglekt.` },
    { voor: `Wat is het maximaal toegestane lekverlies bij een bestaande gasinstallatie?`, achter: `5 dm³ per uur (NEN 8078).` },
    { voor: `Waarom test je niet met de volle proefdruk op een aangesloten toestel?`, achter: `Dat kan het gasblok beschadigen; sluit eerst de toestelkraan of koppel los, en volg de fabrikantwaarde.` },
    { voor: `Met welk middel spoor je een gaslek concreet op?`, achter: `Lekzoekspray of een gaslekzoeker met concentratie-uitlezing en akoestisch signaal, nooit een open vlam.` },
    { voor: `Welk afdichtmateriaal is erkend voor schroefdraad op gas?`, achter: `Materiaal met een Gastec QA-keur (KE 31-1, KE 31-2 of KE 31-3), zoals gekeurde PTFE-tape.` },
    { voor: `Wat doe je als je na herstel van een lek opnieuw test?`, achter: `De volledige beproeving herhalen, niet alleen de gerepareerde plek nakijken.` }
  ],
  bronnen: ['INS-13', 'INS-17', 'INS-19', 'INS-20', 'INS-21', 'INS-23', 'INS-28', 'INS-29', 'INS-30', 'INS-32', 'IBS-09']
},

/* ------------------------------------------------------------------ 13.4 */
{
  id: 'm13l04',
  nr: '13.4',
  titel: 'Vullen, ontluchten en spoelen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt een installatie vullen, ontluchten en spoelen en de drukken controleren.',
  videos: [
    { taal: 'nl', titel: 'Leer zelf je cv ketel vullen, vakkundig en zonder lekkages (Loodgieter Den Haag Stad)', yt: 'zmr_tpKQOT0', duur: '±12 min, 2025' },
    { taal: 'nl', titel: 'CV-ketel ontluchten en bijvullen, hoe doet u dat? (Woningcorporatie Intermaris)', yt: 'thy8mF1X_i0', duur: '±5 min, 2021' },
    { taal: 'en', titel: 'Open-vent heating system: how you power flush it (SKAN Academy, VK)', yt: '1oh4ouhIDgw', duur: '±6 min, 2025' }
  ],
  tekst: `
## Spoelen voor je vult

Voordat een nieuwe ketel op een bestaande of nieuwe installatie wordt aangesloten, moet de installatie grondig gereinigd en doorgespoeld worden. Resten van het installeren (lasslakken, fitmiddelen) en opgehoopt vuil (slib, slijk) horen niet in een nieuwe ketel terecht te komen: een fabrikant vraagt de installatie door te spoelen met minimaal 3 keer de systeeminhoud, en sanitairleidingen met minimaal 20 keer de leidinginhoud.

!!! kern Spoelen is geen momentje, het is een garantievoorwaarde
Bij meerdere fabrikanten vervalt de garantie als niet kan worden aangetoond dat de installatie is gespoeld of als het vulwater buiten de specificatie valt. Regelmatig moeten bijvullen (meer dan 5 procent van de systeeminhoud per jaar) geldt bij sommige fabrikanten als signaal van een structureel probleem, niet als iets dat je oplost door gewoon vaker bij te vullen.
!!!

## Vullen en ontluchten: het patroon per fabrikant

De precieze druk en volgorde verschillen per merk, maar het patroon is steeds: eerst vullen tot een minimale koude druk, dan ontluchten (toestel en installatie apart), dan controleren en zo nodig bijvullen.

| Stap | Voorbeeld Intergas Kombi Kompakt HRE | Voorbeeld Vaillant ecoTEC plus VHR |
|---|---|---|
| Vuldruk (koud) | Tussen 1 en 2 bar | Minimaal 0,80 bar, en minstens 0,2 bar boven de tegendruk van het expansievat |
| Ontluchten toestel | Handontluchter op het toestel | Testprogramma voor ontluchten (P.000) |
| Ontluchten installatie | Handontluchters op de radiatoren | Hoogste radiator eerst ontluchten |
| Na ontluchten | Bijvullen als de druk te ver is gedaald | Druk opnieuw controleren |

De tapwaterzijde krijgt bij Intergas een eigen stap: de hoofdkraan open, dan een warmwaterkraan open laten staan tot alle lucht is verdwenen, met een controle van alle koppelingen op lekkage. Cv-zijde en tapwaterzijde zijn dus geen momentje dat je in één beweging afvinkt.

!!! gevaar Een lege sifon is geen klein ongemak
Als de sifon van een condenserend toestel niet met water is gevuld, kunnen verbrandingsgassen in de opstellingsruimte vrijkomen: de sifon is de waterafsluiting die dat voorkomt. Controleer bij elke installatie of onderhoudsbeurt of de sifon gevuld is, ook als het toestel verder prima werkt.
!!!

## Waterkwaliteit en minimale doorstroming

Niet elke ketel is even gevoelig voor waterdoorstroming: een modulerende regeling begrenst het temperatuurverschil en de stijgsnelheid van de aanvoertemperatuur, waardoor een ketel nagenoeg ongevoelig kan zijn voor een te kleine doorstroming. Toch blijft er altijd een minimale waterdoorstroming nodig (bij een voorbeeldmodel 0,1 m³/h): "modulerend" is geen vrijbrief om de doorstroming helemaal te negeren. De maximale bedrijfsdruk van het cv-circuit ligt bij de meeste huidige toestellen op 3 bar; daarboven treedt een storing of een overdrukventiel in werking.

## Rekenvoorbeeld: hoeveel water spoel je door?

Een cv-installatie heeft een systeeminhoud van 45 liter. Spoel je met 3 keer de systeeminhoud, dan spoel je minimaal 135 liter door. Voor de sanitaire leidingen met een inhoud van 2 liter geldt 20 keer de inhoud, dus minimaal 40 liter. Dat zijn geen getallen die je in een paar seconden doorspoelt: reken op enkele minuten per circuit, afhankelijk van de doorstroomsnelheid van de kraan of de aftapkraan.
`,
  checklist: [
    'Ik spoel een installatie door voor ik een nieuwe ketel aansluit, met de hoeveelheden uit de handleiding als richtlijn',
    'Ik vul, ontlucht en controleer cv-zijde en tapwaterzijde apart',
    'Ik controleer altijd of de sifon gevuld is met water',
    'Ik weet dat een modulerende ketel toch een minimale waterdoorstroming nodig heeft',
    'Ik ken de maximale bedrijfsdruk van het cv-circuit van het toestel waaraan ik werk'
  ],
  quiz: [
    {
      vraag: `Waarom spoel je een installatie door voordat je een nieuwe ketel aansluit?`,
      opties: [`Om resten van het installeren en opgehoopt vuil te verwijderen voor ze in de nieuwe ketel komen`, `Om de leidingdiameter te controleren`, `Dat is alleen nodig bij een installatie die ouder is dan 30 jaar of al eens een lekkage heeft gehad`, `Om de installatie sneller op temperatuur te krijgen`],
      goed: 0,
      uitleg: `Spoelen verwijdert resten van het installeren (lasslakken, fitmiddelen) en opgehoopt vuil (slib, slijk) die anders in de nieuwe ketel terechtkomen. Het gaat niet om de leidingdiameter of om opwarmsnelheid, en het geldt niet alleen bij oude installaties.`
    },
    {
      vraag: `Een fabrikant vraagt de installatie te spoelen met minimaal 3 keer de systeeminhoud. Wat betekent dit voor een installatie van 40 liter?`,
      opties: [`Het volume van de installatie is hier niet relevant`, `Je spoelt minimaal 40 liter door`, `Je spoelt minimaal 120 liter door`, `Je spoelt minimaal 13,3 liter door`],
      goed: 2,
      uitleg: `3 keer de systeeminhoud van 40 liter is 3 x 40 = 120 liter. 40 liter is maar 1 keer de inhoud, en 13,3 liter zou 1/3 van de inhoud zijn: allebei te weinig.`
    },
    {
      vraag: `Wat gebeurt er als de sifon van een condenserend toestel niet met water is gevuld?`,
      opties: [`Verbrandingsgassen kunnen in de opstellingsruimte vrijkomen`, `Alleen de garantie vervalt, er is geen veiligheidsrisico`, `Niets, de sifon heeft alleen een functie bij regen`, `De ketel gaat vanzelf harder branden`],
      goed: 0,
      uitleg: `De sifon vormt een waterafsluiting tussen de verbrandingskamer en de opstellingsruimte. Zonder water in de sifon is die afsluiting weg en kunnen verbrandingsgassen de ruimte in komen: dit is een veiligheidsrisico, niet alleen een garantiekwestie.`
    },
    {
      vraag: `Een moderne ketel heeft een modulerende regeling die het temperatuurverschil begrenst. Wat betekent dit voor de minimale waterdoorstroming?`,
      opties: [`De minimale doorstroming geldt alleen nog op laaglast`, `De pomp mag dan altijd uitstaan`, `Er is dan helemaal geen minimale doorstroming meer nodig, want de elektronica regelt de pomp en het vermogen volledig automatisch`, `De ketel is minder gevoelig voor een te kleine doorstroming, maar er blijft toch een minimale waterdoorstroming nodig`],
      goed: 3,
      uitleg: `Een modulerende regeling maakt de ketel minder gevoelig voor een kleine doorstroming, maar "minder gevoelig" is niet "geen eis meer": er blijft een minimale waterdoorstroming nodig (bij een voorbeeldmodel 0,1 m³/h).`
    },
    {
      vraag: `Waarom controleer je bij het vullen zowel de cv-zijde als de tapwaterzijde apart?`,
      opties: [`Alleen om de garantiesticker compleet te maken`, `Omdat de tapwaterzijde nooit lucht kan bevatten`, `Omdat beide circuits een eigen vul- en ontluchtstap hebben en lucht in het ene circuit het andere niet oplost`, `Dat is niet nodig, één keer ontluchten volstaat voor het hele toestel`],
      goed: 2,
      uitleg: `Cv-circuit en tapwatercircuit zijn gescheiden watersystemen met elk hun eigen vul- en ontluchtstap: lucht in het cv-circuit verdwijnt niet door de tapwaterzijde te ontluchten, en omgekeerd.`
    }
  ],
  kaarten: [
    { voor: `Hoeveel keer de systeeminhoud spoel je een cv-installatie minimaal door bij een fabrikant die 3 keer voorschrijft?`, achter: `Minimaal 3 keer de systeeminhoud van de installatie, en sanitairleidingen minimaal 20 keer de leidinginhoud.` },
    { voor: `Wat gebeurt er als een sifon niet gevuld is met water?`, achter: `Verbrandingsgassen kunnen in de opstellingsruimte vrijkomen: controleer dit altijd.` },
    { voor: `Waarom vervalt bij sommige fabrikanten de garantie zonder spoelbewijs?`, achter: `Omdat vuil en fitresten in een niet-gespoelde installatie de nieuwe ketel kunnen beschadigen.` },
    { voor: `Wat is een teken van een structureel probleem in het watercircuit?`, achter: `Vaker dan ongeveer 5 procent van de systeeminhoud per jaar moeten bijvullen.` },
    { voor: `Heeft een modulerende ketel nog een minimale waterdoorstroming nodig?`, achter: `Ja, ondanks dat hij minder gevoelig is voor een te kleine doorstroming.` },
    { voor: `Wat is de maximale bedrijfsdruk van het cv-circuit bij de meeste huidige toestellen?`, achter: `3 bar; daarboven grijpt een storing of het overdrukventiel in.` },
    { voor: `Waarom heeft de tapwaterzijde een eigen ontluchtstap?`, achter: `Het is een apart watercircuit; lucht daarin verdwijnt niet door alleen de cv-zijde te ontluchten.` }
  ],
  bronnen: ['INS-39', 'INS-40', 'INS-42', 'INS-43', 'INS-44', 'INS-46', 'IBS-10', 'IBS-11', 'IBS-12', 'IBS-13']
},

/* ------------------------------------------------------------------ 13.5 */
{
  id: 'm13l05',
  nr: '13.5',
  titel: 'Eerste ontsteking en afstellen',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt een ketel voor het eerst starten, de verbranding controleren en afstellen volgens de fabrikant.',
  videos: [
    { taal: 'nl', titel: 'Hoe controleer en stel je een HR cv-ketel op O2 en CO2? (Loodgieter Den Haag Stad)', yt: 'oPsXD-NRFVI', duur: '±21 min, 2023' },
    { taal: 'nl', titel: 'Instellen Intergas Kombi Kompakt Hre 36/30 cw5 cv-ketel (John Visser cv-optimalisatie)', yt: 'l0QIEHRronQ', duur: '±5 min, 2020' },
    { taal: 'en', titel: 'How to use a combustion analysis meter (Habegger Help)', yt: 'IBxDvR7i61s', duur: '±8 min, 2020' }
  ],
  tekst: `
## Ontluchten voor ontsteken

Voor de eerste ontsteking wordt de gasleiding ontlucht via het voordrukmeetpunt op het gasblok, waarna alle koppelingen op lekkage worden gecontroleerd en de voordruk wordt gemeten. Dit is dezelfde ontluchting als in les 13.3, maar dan als vaste stap in de startprocedure: een ketel start niet betrouwbaar op met lucht in de gastoevoer, en de eerste ontstekingspogingen met lucht in de leiding tellen mee in de foutentelling van sommige toestellen.

!!! kern De eerste ontsteking is geen "aanzetten en klaar"
De gasdichtheid van gasvoerende delen, het gasregelblok en de gasleiding wordt bij elk merk apart gecontroleerd tijdens een warmtevraag, net als de cv- en warmwatercircuits en de interne lucht-rookgasdichtheid. Alleen daarna volgt de controle van vol- en laaglast.
!!!

## Wat je controleert voor je aanzet

Een voorbeeldchecklist (Remeha Calora Tower Gas 35S) doorloopt: de geleverde gassoort vergelijken met het typeplaatje, het gascircuit controleren, het hydraulisch circuit controleren, de waterdruk van de cv-installatie controleren, de lekdichtheid van de rookgas- en luchttoevoeraansluiting controleren, de elektrische aansluitingen van thermostaat en overige externe aansluitingen controleren, overige aansluitingen controleren, en dan pas de ketel op vollast en op laaglast testen. Elk toestel heeft zijn eigen checklist, maar de opbouw (eerst statisch controleren, dan pas onder bedrijf testen) is een bruikbaar patroon.

## Afstellen: verschilt per merk, altijd volgens de fabrikant

De instelling van de branderdruk en de gas-luchtverhouding gebeurt altijd volgens de voorschriften van de fabrikant. Sommige toestellen hebben een afstelschroef, andere (zoals de Vaillant ecoTEC plus VHR) hebben geen instelschroef en corrigeren de gas-luchtverhouding via een diagnosecode. Ook of je met open of gesloten mantel meet, verschilt per merk. Voor de precieze afstelwaarden, de meetprocedure en de rol van O2, CO2 en luchtovermaat verwijst deze les naar module 10 (meten en analyseren): daar staat wat je meet, hoe en waarom.

## Rekenvoorbeeld: aanvoer- en retourtemperatuur

Bij de inbedrijfstelling van een toestel houdt een fabrikant een richtwaarde van ongeveer 20 °C temperatuurverschil tussen aanvoer en retour aan, in te stellen via het maximale vermogen en de pompstand. Meet je een aanvoertemperatuur van 70 °C en een retourtemperatuur van 58 °C, dan is het verschil 12 °C: te klein. Een te klein verschil wijst op een te hoog ingestelde pompstand of een te laag ingesteld vermogen voor de warmtevraag, en dat pas je aan voordat je de inbedrijfstelling afrondt, niet erna.

!!! gevaar Een niet-afgesteld toestel stel je niet in bedrijf
Een toestel dat je niet binnen de grenswaarden van de fabrikant kunt afstellen, of waarvan de gas-luchtverhouding niet klopt, mag niet in bedrijf gesteld worden. Doorgaan "want het brandt toch" is geen professioneel oordeel: het is precies de situatie waar een slecht afgestelde verbranding tot verhoogde CO leidt zonder dat je dat zonder meting ziet.
!!!
`,
  checklist: [
    'Ik ontlucht de gasleiding via het voordrukmeetpunt voor de eerste ontsteking',
    'Ik controleer gasdichtheid, hydraulisch circuit en elektrische aansluitingen voor ik op vol- en laaglast test',
    'Ik stel de branderdruk en gas-luchtverhouding altijd volgens de fabrikant af, nooit uit het hoofd',
    'Ik weet dat het meten van O2 en CO2 in module 10 staat en pas dat daar geleerde toe',
    'Ik stel een toestel dat niet binnen de grenswaarden valt niet in bedrijf'
  ],
  quiz: [
    {
      vraag: `Waarom ontlucht je de gasleiding voor de eerste ontsteking, ook als de dichtheidsproef al gedaan is?`,
      opties: [
        `Dat is niet nodig als de dichtheidsproef eerder die dag al goed is uitgevoerd en er niemand aan de leiding heeft gezeten`,
        `Om lucht uit de gastoevoer te verwijderen, want een ketel start niet betrouwbaar op met lucht in de leiding`,
        `Om de gasdruk te verhogen`,
        `Alleen om de meter een keer te laten draaien`
      ],
      goed: 1,
      uitleg: `Ontluchten van de gasleiding is een aparte stap in de startprocedure: lucht in de gastoevoer verstoort een betrouwbare start, ook als de leiding daarvoor al op dichtheid getest is. Dat verhoogt de druk niet en heeft niets met de gasmeter te doen.`
    },
    {
      vraag: `Wat is de juiste volgorde bij een voorbeeldchecklist voor de eerste inbedrijfstelling?`,
      opties: [`Eerst gassoort, gascircuit, hydraulisch circuit en elektrische aansluitingen controleren, en pas daarna op vol- en laaglast testen`, `De volgorde maakt niet uit zolang je alles maar een keer doet`, `Eerst de klant bellen, dan de checklist doorlopen`, `Eerst op vollast testen, dan pas de statische aansluitingen controleren`],
      goed: 0,
      uitleg: `Het patroon is eerst statisch controleren (gassoort, gascircuit, hydraulisch circuit, elektrische aansluitingen), en dan pas onder bedrijf testen op vol- en laaglast. Andersom werken betekent dat je een storing onder bedrijf krijgt die je met een eenvoudige controle vooraf had kunnen voorkomen.`
    },
    {
      vraag: `Een toestel heeft geen instelschroef voor de gas-luchtverhouding. Wat betekent dit?`,
      opties: [`Alle toestellen hebben altijd een instelschroef, dit kan niet voorkomen`, `Dat toestel kan nooit worden afgesteld`, `Bij dat merk gebeurt de correctie op een andere manier, bijvoorbeeld via een diagnosecode; volg de procedure van die fabrikant`, `Dat is een storing en het toestel moet worden vervangen`],
      goed: 2,
      uitleg: `Niet elk toestel stelt de gas-luchtverhouding met een schroef in: sommige merken gebruiken een diagnosecode om te corrigeren. De afstelmethode verschilt per fabrikant, en het ontbreken van een schroef is geen storing.`
    },
    {
      vraag: `Bij een inbedrijfstelling meet je een aanvoertemperatuur van 65 °C en een retourtemperatuur van 60 °C, terwijl de fabrikant ongeveer 20 °C verschil verwacht. Wat is de juiste conclusie?`,
      opties: [`Het verschil van 5 °C is te klein; pas de pompstand of het ingestelde vermogen aan voor je de inbedrijfstelling afrondt`, `Het verschil van 5 °C is te groot en wijst op een lekkage in het cv-circuit die eerst verholpen moet worden voordat je verder gaat`, `Temperatuurverschil is alleen relevant bij vloerverwarming`, `Dit is in orde, elk verschil is acceptabel`],
      goed: 0,
      uitleg: `65 min 60 is 5 °C, ruim onder de richtwaarde van ongeveer 20 °C. Een te klein verschil wijst op een te hoog ingestelde pompstand of een te laag ingesteld vermogen, niet op een lekkage, en je corrigeert dit voor je klaar bent, niet pas bij een volgend bezoek.`
    },
    {
      vraag: `Je krijgt een toestel niet binnen de afstelgrenzen van de fabrikant, ook na de gebruikelijke correcties. Wat doe je?`,
      opties: [`De grenswaarden van de fabrikant negeren als de klant haast heeft`, `Een andere fabrikant se grenswaarden aanhouden die wel lijken te passen`, `Toch in bedrijf stellen, want het toestel brandt en dat is het belangrijkste`, `Het toestel niet in bedrijf stellen tot de oorzaak is gevonden en verholpen`],
      goed: 3,
      uitleg: `Een toestel dat niet binnen de grenswaarden van de fabrikant af te stellen is, stel je niet in bedrijf: "het brandt toch" is geen vervanging voor een correcte gas-luchtverhouding. Grenswaarden van een ander merk gebruiken is nooit een geldige oplossing.`
    }
  ],
  kaarten: [
    { voor: `Waarom ontlucht je de gasleiding voor de eerste ontsteking?`, achter: `Om lucht uit de gastoevoer te halen, ook als de leiding al op dichtheid is getest.` },
    { voor: `Wat controleer je voor je een toestel voor het eerst op vol- en laaglast test?`, achter: `Gassoort, gascircuit, hydraulisch circuit en elektrische aansluitingen, in die volgorde vóór het testen.` },
    { voor: `Stelt elk toestel de gas-luchtverhouding met een schroef in?`, achter: `Nee, sommige merken corrigeren via een diagnosecode; volg altijd de procedure van dat merk.` },
    { voor: `Waar leer je hoe je O2 en CO2 meet en beoordeelt?`, achter: `In module 10 (meten en analyseren).` },
    { voor: `Wat betekent een te klein temperatuurverschil tussen aanvoer en retour?`, achter: `Mogelijk een te hoog ingestelde pompstand of een te laag ingesteld vermogen voor de warmtevraag.` },
    { voor: `Wat doe je als een toestel niet binnen de afstelgrenzen van de fabrikant komt?`, achter: `Niet in bedrijf stellen tot de oorzaak gevonden en verholpen is.` },
    { voor: `Wie schrijft de exacte afstelwaarden voor een toestel voor?`, achter: `De fabrikant van dat specifieke toestel, in de installatie- of servicehandleiding.` }
  ],
  bronnen: ['INS-47', 'INS-48', 'INS-49', 'INS-50', 'INS-55', 'INS-56', 'INS-57', 'IBS-14', 'IBS-15']
},

/* ------------------------------------------------------------------ 13.6 */
{
  id: 'm13l06',
  nr: '13.6',
  titel: 'Vrijgave en het inbedrijfstellingsprotocol',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt een ketel vrijgeven en vastleggen wat je gecontroleerd en gemeten hebt.',
  videos: [
    { taal: 'nl', titel: '2 ondernemers over CO-certificering en het kwaliteitshandboek (Techniek Nederland)', yt: 'eqwkoCrkV6o', duur: '±2 min, 2020' },
    { taal: 'nl', titel: 'Webinar CO-certificering: een goede rookgasafvoer is van levensbelang (Ubbink Nederland)', yt: 'GbGuwVyXo2Y', duur: '±48 min, 2025' },
    { taal: 'en', titel: 'Commissioning a boiler: a gas tutorial to the current regs (Tomkat Gas Training, VK, ter vergelijking)', yt: 'drRKoSVwC1Y', duur: '±35 min, 2020' }
  ],
  tekst: `
## Vrijgeven is een besluit, geen formulier invullen

Alleen een Vakbekwaam Persoon mag een toestel in bedrijf stellen; een Voldoende Onderricht Persoon werkt onder toezicht. Vrijgeven betekent dat jij, met je professionele oordeel en met metingen erbij, verklaart dat de installatie veilig kan draaien. Het formulier dat je invult is het bewijs van die beslissing, niet de beslissing zelf.

!!! kern Twee metingen zijn de kern van vrijgave
Je mag pas in bedrijf stellen als de CO-concentratie in de opstellingsruimte lager is dan 5 ppm, en de CO-concentratie in de rookgassen binnen de grenswaarde valt: 50 ppm bij een open afvoerloos toestel, 200 ppm bij een open afvoergebonden toestel en 400 ppm bij een gesloten toestel (tenzij de fabrikant een strengere waarde noemt). Beide metingen doe je niet alleen na het werk, maar ook vóór aanvang van de werkzaamheden: zo weet je waar je vandaan komt en kun je een verslechtering die je zelf veroorzaakt hebt onderscheiden van een situatie die al zo was.
!!!

## Wanneer je NIET mag vrijgeven

Is de CO-concentratie in de opstellingsruimte hoger dan 20 ppm, dan meld je dit onmiddellijk aan de bewoner of gebruiker, de eigenaar van het gebouw, het bevoegd gezag en de certificerende instelling, en stel je het toestel buiten bedrijf. Ligt de concentratie tussen 5 en 20 ppm, dan is nader onderzoek nodig en informeer je de opdrachtgever, maar mag je nog niet vrijgeven voordat je de oorzaak hebt weggenomen. Bij de controle van je werkzaamheden leg je vast wat je hebt gecontroleerd en op basis van welke eisen, wie heeft gecontroleerd en wanneer, met welk instrument is gemeten, en wat de resultaten zijn. Vind je daarbij een ontoelaatbare tekortkoming, zoals een verhoogde CO-concentratie, dan geef je het toestel niet vrij voor gebruik totdat die is opgelost.

!!! gevaar Vrijgeven onder tijdsdruk is geen optie
Een klant die haast heeft, een collega die wacht, of een planning die uitloopt, verandert niets aan de grenswaarden. "Het zal wel goed zijn" is geen vervanging voor een meting die je nog niet gedaan hebt. Vind je geen tijd meer om de laatste controle af te ronden, dan stel je de installatie niet in bedrijf en maak je een nieuwe afspraak.
!!!

## Wat je vastlegt en hoe lang je het bewaart

Het opleverings- en beproevingsrapport bevat onder meer: locatie, certificaathouder en toestelgegevens met de indeling A, B of C, de uitvoerder en de inbedrijfsteller, de lekdichtheid van de gasleiding, de beoordeling van de opstellingsruimte, de rookgasafvoer en luchttoevoer, de ingebruikstelling (branderdruk, CO en O2, gas-luchtafstelling, of een CO-melder is geadviseerd, of de opdrachtgever is geïnformeerd over waterzijdig inregelen) en geconstateerde afwijkingen met de genomen maatregel. Bij het afmelden van je werk registreer je in elk geval de datum van uitvoering, je naam als inbedrijfsteller, de naam van de certificaathouder, merk en type van het toestel, en welke werkzaamheden je hebt verricht.

Je projectdossier, met alle documenten waarnaar het verwijst, bewaar je minstens 10 jaar na afronding van het project. Dat is geen richtlijn die je zelf kunt inkorten: de certificerende instelling moet dat dossier bij een onderzoek altijd kunnen inzien, ook jaren later.

## Rekenvoorbeeld: mag je vrijgeven?

Je meet na afronding van je werk 3 ppm CO in de opstellingsruimte en 180 ppm CO in de rookgassen van een open, afvoergebonden toestel (grenswaarde 200 ppm). Beide waarden liggen onder de grens: 3 ppm is lager dan 5 ppm, en 180 ppm is lager dan de 200 ppm-grens voor dit toesteltype. Je mag vrijgeven, mits ook de overige controles (gasdichtheid, opstellingsruimte, aansluitingen) in orde zijn: de twee CO-metingen zijn een noodzakelijke voorwaarde, geen volledige vervanging van de rest van het protocol.
`,
  checklist: [
    'Ik weet dat alleen een Vakbekwaam Persoon in bedrijf mag stellen',
    'Ik meet CO in de opstellingsruimte en in de rookgassen, zowel voor als na de werkzaamheden',
    'Ik weet bij welke waarde ik moet melden en aan wie: bewoner, eigenaar, bevoegd gezag en certificerende instelling',
    'Ik leg vast wat ik controleerde, met welk instrument, wanneer en met welk resultaat',
    'Ik bewaar het projectdossier minstens 10 jaar na afronding'
  ],
  quiz: [
    {
      vraag: `Wanneer mag je een gasverbrandingsinstallatie in bedrijf stellen?`,
      opties: [
        `Zodra het toestel brandt, ongeacht de meetwaarden`,
        `Als de CO-concentratie in de opstellingsruimte lager is dan 5 ppm en de CO-concentratie in de rookgassen binnen de grenswaarde van het toesteltype valt`,
        `Als de klant tekent dat hij akkoord is met het resultaat`,
        `Zodra de gasdichtheid gecontroleerd is, de CO-waarden zijn dan niet meer relevant`
      ],
      goed: 1,
      uitleg: `Vrijgave vereist beide metingen: minder dan 5 ppm CO in de opstellingsruimte en een CO-waarde in de rookgassen binnen de grenswaarde voor dat type toestel. Een handtekening van de klant of alleen de gasdichtheid vervangt deze metingen niet.`
    },
    {
      vraag: `Je meet 25 ppm CO in de opstellingsruimte. Wat is de juiste vervolgstap?`,
      opties: [`Onmiddellijk melden aan bewoner of gebruiker, eigenaar van het gebouw, bevoegd gezag en de certificerende instelling, en het toestel buiten bedrijf stellen`, `Wachten tot na de werkzaamheden om te zien of de waarde daalt`, `Alleen een aantekening maken op de werkbon`, `Alleen de opdrachtgever informeren en verder werken`],
      goed: 0,
      uitleg: `Boven 20 ppm meld je onmiddellijk aan alle vier de partijen (bewoner/gebruiker, eigenaar, bevoegd gezag, certificerende instelling) en stel je het toestel buiten bedrijf. Alleen de opdrachtgever informeren of alleen noteren is niet voldoende bij deze waarde.`
    },
    {
      vraag: `Wat betekent een "ontoelaatbare tekortkoming" bij de controle van je werkzaamheden?`,
      opties: [`Elke afwijking, ook al is die zonder veiligheidsrisico`, `Een fout die alleen de garantie beïnvloedt, niet de vrijgave`, `Een kleine kosmetische fout die je later kunt herstellen`, `Een situatie zoals een verhoogde CO-concentratie, waarbij het toestel niet wordt vrijgegeven voor gebruik totdat ze is opgelost`],
      goed: 3,
      uitleg: `Een ontoelaatbare tekortkoming is in de praktijk een verhoogde CO-concentratie: bij zo'n bevinding geef je het toestel niet vrij tot de tekortkoming is opgelost. Kosmetische fouten of garantiekwesties zijn geen ontoelaatbare tekortkoming in deze zin.`
    },
    {
      vraag: `Hoe lang moet je het projectdossier na afronding van het project bewaren?`,
      opties: [
        `Minimaal 2 jaar`,
        `Minimaal 5 jaar`,
        `Minimaal 10 jaar`,
        `Er is geen minimale bewaartermijn vastgelegd`
      ],
      goed: 2,
      uitleg: `Het projectdossier en de documenten waarnaar het verwijst worden minstens 10 jaar na afronding van het project bewaard, in beide aangewezen certificatieschema's.`
    },
    {
      vraag: `Waarom meet je CO in de rookgassen en in de opstellingsruimte ook vóór aanvang van de werkzaamheden, niet alleen na afloop?`,
      opties: [`Om te kunnen onderscheiden of een probleem al aanwezig was of door je eigen werk is ontstaan`, `Om te bepalen hoeveel je in rekening mag brengen`, `Omdat de meter anders niet goed opwarmt`, `Dat is niet nodig, alleen de meting na de werkzaamheden telt voor het opleveringsrapport en de vrijgave`],
      goed: 0,
      uitleg: `Een meting voor aanvang laat zien wat de uitgangssituatie was, zodat je een bestaand probleem kunt onderscheiden van iets dat door je eigen werk is veroorzaakt. Dat heeft niets met facturering of met opwarmen van de meter te maken.`
    },
    {
      vraag: `Je hebt door tijdsdruk de laatste controle van de rookgasafvoer nog niet kunnen doen, maar het toestel brandt al. Wat doe je?`,
      opties: [`De controle overslaan, want een brandend toestel is het bewijs dat het goed is`, `Een collega vragen om telefonisch te bevestigen dat het wel goed zal zijn`, `Vrijgeven, want de klant al de hele dag wacht en morgen niet meer thuis kan zijn voor een nieuwe afspraak`, `Het toestel niet in bedrijf stellen en een nieuwe afspraak maken om de controle af te ronden`],
      goed: 3,
      uitleg: `Tijdsdruk verandert niets aan de eis dat je moet controleren en meten voor je vrijgeeft. Ontbreekt een controle, dan stel je niet in bedrijf en maak je een nieuwe afspraak. Een brandend toestel of een telefonische inschatting van een collega is geen vervanging voor de eigen meting.`
    }
  ],
  kaarten: [
    { voor: `Wie mag een gasverbrandingsinstallatie in bedrijf stellen?`, achter: `Alleen een Vakbekwaam Persoon; een Voldoende Onderricht Persoon werkt onder toezicht.` },
    { voor: `Welke twee metingen zijn nodig voor vrijgave?`, achter: `CO in de opstellingsruimte (moet onder 5 ppm) en CO in de rookgassen (binnen de grenswaarde van het toesteltype).` },
    { voor: `Wat doe je bij meer dan 20 ppm CO in de opstellingsruimte?`, achter: `Onmiddellijk melden aan bewoner/gebruiker, eigenaar, bevoegd gezag en certificerende instelling, en het toestel buiten bedrijf stellen.` },
    { voor: `Wat doe je bij 5 tot 20 ppm CO in de opstellingsruimte?`, achter: `Nader onderzoek, oorzaak wegnemen en de opdrachtgever informeren voor je vrijgeeft.` },
    { voor: `Wat is een ontoelaatbare tekortkoming bij vrijgave?`, achter: `Bijvoorbeeld een verhoogde CO-concentratie: dan geef je niet vrij tot ze is opgelost.` },
    { voor: `Hoe lang bewaar je het projectdossier na afronding van het project?`, achter: `Minstens 10 jaar.` },
    { voor: `Wat registreer je bij het afmelden van je werk?`, achter: `Datum van uitvoering, naam inbedrijfsteller, naam certificaathouder, merk en type toestel, en welke werkzaamheden verricht zijn.` },
    { voor: `Waarom meet je CO ook vóór aanvang van je werkzaamheden?`, achter: `Om een bestaand probleem te kunnen onderscheiden van iets dat je eigen werk heeft veroorzaakt.` }
  ],
  bronnen: ['WET-28', 'MET-14', 'MET-16', 'MET-18', 'INS-58', 'IBS-16', 'IBS-17', 'IBS-18', 'IBS-19', 'IBS-20', 'IBS-21']
},

/* ------------------------------------------------------------------ 13.7 */
{
  id: 'm13l07',
  nr: '13.7',
  titel: 'Oplevering en klantinstructie',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt een installatie opleveren en de klant uitleggen wat hij moet weten over gebruik, onderhoud en veiligheid.',
  videos: [
    { taal: 'nl', titel: 'Een CO-melder plaatsen... hoe doe je dat?! (Nederlandse Brandwonden Stichting)', yt: 'i67WbC9mAXI', duur: '±1 min, 2022' },
    { taal: 'nl', titel: 'Waar hang je een koolmonoxidemelder op? (Consumentenbond)', yt: '8Q3Ad2qt4WM', duur: '±2 min, 2017' },
    { taal: 'en', titel: 'How to check your boiler: a step by step guide (Home Group, VK)', yt: '0XKqK3r4K0U', duur: '±1 min, 2024' }
  ],
  tekst: `
## Opleveren is meer dan de deur van de kast dichtdoen

Na de vrijgave (les 13.6) is het werk voor de klant niet klaar: hij moet weten wat hij zelf kan doen, wat hij moet laten doen, en waar hij op moet letten. Deze klantinstructie is geen vrijblijvende service, het is onderdeel van je verplichtingen als certificaathouder.

!!! kern Drie dingen die je nooit vergeet te zeggen
Je informeert de klant altijd over het voorgeschreven onderhoud en de onderhoudsinterval van het toestel en de rookgasafvoer, je controleert of het gebruiksvoorschrift aanwezig is (en wijst erop als dat niet zo is), en je adviseert schriftelijk een CO-melder als er nog geen is bij een toestel waarvoor dat nodig is.
!!!

## CO-melder: wanneer verplicht om te adviseren

Een CO-melder moet worden geplaatst bij open toestellen, bij afvoerloze toestellen en bij toestellen die op een collectief rookgasafvoersysteem zijn aangesloten zonder geschiktheidsverklaring. Is er nog geen CO-melder aanwezig, dan moet je als certificaathouder schriftelijk adviseren om er een te plaatsen. Plaats je zelf een CO-melder, dan volg je de gebruiksaanwijzing en het installatievoorschrift van de fabrikant van die melder: een CO-melder werkt anders dan een rookmelder en hoort op een andere plek en hoogte, afhankelijk van het model.

## Onderhoud, gebruiksvoorschrift en waterzijdig inregelen

Leg aan de klant uit: hoe vaak onderhoud nodig is (bij ontbreken van een fabrikantvoorschrift minimaal eens per 12 maanden, maar volg altijd wat de fabrikant van dit specifieke toestel voorschrijft), wat er gebeurt als hij dat overslaat (garantieverval bij sommige merken, en een groter risico op storingen en op een slecht afgestelde verbranding), en waar het gebruiksvoorschrift van het toestel te vinden is. Bij het plaatsen van een nieuw toestel of het vervangen ervan moet het warmteafgiftesysteem ook waterzijdig worden ingeregeld en gedocumenteerd: als jij dat niet zelf doet, wijs je de opdrachtgever expliciet op deze verplichting, zodat hij weet dat dit nog moet gebeuren en door wie.

## Praktijkgeval: de huurwoning zonder CO-melder

Je vervangt een oude combiketel (open, afvoergebonden) in een huurwoning. Er hangt geen CO-melder. Je legt in je opleveringsrapport vast dat je schriftelijk hebt geadviseerd een CO-melder te plaatsen, en je vertelt de bewoner waarom: bij dit type toestel komt een deel van de verbrandingslucht uit de woonruimte, en een storing in de afvoer geeft niet altijd een storingscode op het display voordat er CO vrijkomt. Of de verhuurder of de bewoner de melder uiteindelijk plaatst, ligt buiten jouw verantwoordelijkheid, maar het schriftelijke advies wel geven en vastleggen, ligt binnen jouw verantwoordelijkheid.

## Documentatie overdragen

Zorg dat de klant na je vertrek weet: waar de gebruiksaanwijzing van het toestel ligt (fysiek of digitaal), wat het opleveringsrapport zegt over eventuele afwijkingen, en bij wie hij terecht kan bij een storing of voor het volgende onderhoud. Een goede oplevering laat de klant niet met vragen achter die je bij de opname al had kunnen beantwoorden.
`,
  checklist: [
    'Ik informeer de klant altijd over het voorgeschreven onderhoud en de onderhoudsinterval',
    'Ik controleer of het gebruiksvoorschrift aanwezig is en wijs op het ontbreken ervan',
    'Ik adviseer schriftelijk een CO-melder als die nog ontbreekt bij een toestel waarvoor dat nodig is',
    'Ik wijs de opdrachtgever op de verplichting tot waterzijdig inregelen als ik dat niet zelf doe',
    'Ik laat de klant niet achter zonder te weten waar de documentatie is en bij wie hij terecht kan'
  ],
  quiz: [
    {
      vraag: `Waarom is klantinstructie bij oplevering meer dan een vriendelijk gebaar?`,
      opties: [`Het informeren over onderhoud en het controleren van het gebruiksvoorschrift zijn onderdeel van de verplichtingen van de certificaathouder`, `Het is alleen relevant als de klant er zelf om vraagt`, `Klantinstructie is uitsluitend een wettelijke eis bij nieuwbouw`, `Het is puur commercieel bedoeld om herhaalbezoeken te genereren`],
      goed: 0,
      uitleg: `Informeren over onderhoud en interval, en controleren of het gebruiksvoorschrift aanwezig is, staan als verplichting in het certificatieschema, niet als vrijblijvende service. Deze eisen gelden evengoed bij vervanging als bij nieuwbouw, en niet alleen op verzoek van de klant.`
    },
    {
      vraag: `Bij welk type toestel moet je schriftelijk een CO-melder adviseren als er nog geen is?`,
      opties: [`Bij elk toestel, zonder uitzondering`, `Alleen als de klant erom vraagt`, `Alleen bij toestellen ouder dan 20 jaar`, `Bij open toestellen, afvoerloze toestellen en toestellen op een collectief systeem zonder geschiktheidsverklaring`],
      goed: 3,
      uitleg: `Het schriftelijke advies geldt specifiek bij open toestellen, afvoerloze toestellen, en toestellen op een collectief systeem zonder geschiktheidsverklaring. Leeftijd van het toestel op zich is geen criterium, en het advies is een plicht, niet iets waar de klant om moet vragen.`
    },
    {
      vraag: `Je stelt vast dat er geen gebruiksvoorschrift bij het toestel van de klant aanwezig is. Wat doe je?`,
      opties: [
        `Niets, dat is de verantwoordelijkheid van de klant zelf`,
        `De klant hierop wijzen, zodat hij weet dat deze informatie ontbreekt`,
        `Zelf een nieuw voorschrift schrijven op basis van je eigen ervaring met dat merk toestel`,
        `Het toestel om deze reden niet vrijgeven`
      ],
      goed: 1,
      uitleg: `Je controleert of het gebruiksvoorschrift aanwezig is en wijst de gebruiker of bewoner erop als dat niet zo is. Zelf een voorschrift verzinnen is niet betrouwbaar, en het ontbreken van het voorschrift is op zich geen grond om niet vrij te geven (dat hangt af van de metingen uit les 13.6).`
    },
    {
      vraag: `Je vervangt een toestel maar regelt het warmteafgiftesysteem niet zelf waterzijdig in. Wat is dan je verplichting?`,
      opties: [`De opdrachtgever expliciet wijzen op de verplichting tot waterzijdig inregelen`, `Het toestel niet vrijgeven totdat het waterzijdig is ingeregeld door een erkend bedrijf`, `Zelf een collega inhuren om het gratis te doen`, `Niets, dat is uitsluitend de verantwoordelijkheid van de klant`],
      goed: 0,
      uitleg: `Doe je het waterzijdig inregelen niet zelf, dan moet je de opdrachtgever wel op deze verplichting wijzen. Dit staat los van de vrijgave van het toestel zelf (die gaat over gasdichtheid en CO-metingen), en niets wijst erop dat je hiervoor kosteloos een collega moet inhuren.`
    },
    {
      vraag: `Een huurwoning heeft een open, afvoergebonden toestel zonder CO-melder. Wat leg je in je opleveringsrapport vast?`,
      opties: [`Dat de bewoner zelf verantwoordelijk is en dit dus niet in het rapport hoeft`, `Alleen dat het toestel technisch in orde is, CO-melders vallen buiten het rapport`, `Niets, een CO-melder is de verantwoordelijkheid van de verhuurder, niet iets om te documenteren`, `Dat je schriftelijk hebt geadviseerd een CO-melder te plaatsen`],
      goed: 3,
      uitleg: `Ook als het uiteindelijk aan de verhuurder of bewoner is om de melder te plaatsen, blijft het jouw plicht om het schriftelijke advies te geven en dat vast te leggen. Wie de melder uiteindelijk plaatst, doet niets af aan die documentatieplicht.`
    }
  ],
  kaarten: [
    { voor: `Welke drie dingen zeg je bijna altijd bij oplevering?`, achter: `Onderhoud en interval, of het gebruiksvoorschrift aanwezig is, en (indien nodig) een schriftelijk CO-melderadvies.` },
    { voor: `Bij welke toestellen is een schriftelijk CO-melderadvies verplicht als er nog geen melder is?`, achter: `Open toestellen, afvoerloze toestellen, en toestellen op een collectief systeem zonder geschiktheidsverklaring.` },
    { voor: `Wat doe je als het gebruiksvoorschrift van het toestel ontbreekt?`, achter: `De gebruiker of bewoner erop wijzen dat deze informatie ontbreekt.` },
    { voor: `Wat doe je als je het waterzijdig inregelen niet zelf uitvoert?`, achter: `De opdrachtgever expliciet wijzen op de verplichting om dit te laten doen.` },
    { voor: `Waarom kan een open toestel zonder storingscode toch gevaarlijk zijn?`, achter: `Een storing in de afvoer geeft niet altijd een foutmelding voordat er CO vrijkomt.` },
    { voor: `Wat laat je de klant na oplevering weten over documentatie?`, achter: `Waar de gebruiksaanwijzing is, wat het opleveringsrapport zegt, en bij wie hij terecht kan bij storing of onderhoud.` }
  ],
  bronnen: ['INS-38', 'ONT-01', 'ONT-03', 'ONT-16', 'IBS-24', 'IBS-25', 'IBS-26']
}

  ],
  examen: [
    {
      vraag: `Wanneer moet je tijdens een project een projectregistratie hebben aangemaakt?`,
      opties: [
        `Na de eerste factuur aan de klant`,
        `Voordat de uitvoering begint, met projectnummer, naam- en adresgegevens en de datum van opname`,
        `Pas bij de vrijgave van het toestel`,
        `Alleen als de opdracht via een aanbesteding loopt`
      ],
      goed: 1,
      uitleg: `Elk project wordt vóór de uitvoering geregistreerd, met projectnummer, naam- en adresgegevens en de datum van opname. Facturering, vrijgave en aanbestedingen zijn hier geen voorwaarde voor.`
    },
    {
      vraag: `Bij een opname zie je verouderd plaatmateriaal van voor 1994 dat in de weg zit voor het plaatsen van een nieuw toestel. Wat is de juiste eerste stap?`,
      opties: [`Doorgaan, want het gaat maar om een klein stukje`, `Het materiaal verwijderen zonder onderzoek, mits je daarbij handschoenen en een stofmasker draagt`, `Het materiaal verwijderen zodra het niet meer intact is`, `Niet zelf in het materiaal werken en eerst laten onderzoeken of het asbest bevat`],
      goed: 3,
      uitleg: `Voor renovatie of onderhoud aan een bouwwerk van voor 1994 is doorgaans eerst een asbestinventarisatie nodig. Handschoenen dragen of "een klein stukje" verandert daar niets aan: het risico zit in het bewerken, niet in de hoeveelheid.`
    },
    {
      vraag: `Een leerling wil eerst de gasleiding aansluiten voordat het toestel definitief is vastgezet, "want dat is het spannendste onderdeel". Waarom is dat averechts, ook al is er geen wettelijk voorgeschreven volgorde?`,
      opties: [
        `Omdat het toestel nog niet vaststaat: de aansluiting hangt onder spanning en kan later los moeten`,
        `Omdat de wet toch een vaste volgorde voorschrijft die altijd met de watertoevoer begint`,
        `Omdat de gasleiding bij elke fabrikant zonder uitzondering als laatste stap in de handleiding staat`,
        `Dat maakt niet uit, zolang alle vier de aansluitingen maar gemaakt zijn voor de eerste warmtevraagtest`
      ],
      goed: 0,
      uitleg: `Er is geen wettelijk voorgeschreven volgorde, maar de volgorde uit de handleiding is niet willekeurig: staat het toestel nog niet vast, dan hangt een al aangesloten leiding onder spanning en moet die mogelijk worden losgekoppeld als de opstelling toch gecorrigeerd moet worden. Er bestaat geen wettelijke volgorde die met water begint, "de gasleiding altijd als laatste" klopt niet bij elk merk, en "het maakt niet uit" is te kort door de bocht: fabrikanten kiezen elk hun eigen volgorde, en een verkeerde volgorde kost onnodig werk.`
    },
    {
      vraag: `Een fabrikant geeft geen maten voor de vrije ruimte rond een cv-ketel. Welke brancherichtlijn geldt dan als vangnet?`,
      opties: [
        `Minimaal 3 m vrije hoogte en 2 m vrij looppad, zonder uitzonderingen`,
        `Minimaal 2 m vrije hoogte, 1 m vrij looppad aan de bedieningszijde en 10 cm tot andere wanden, met ruimte voor praktische afwijking bij vervanging`,
        `Precies 60 cm vrije ruimte, wettelijk vastgelegd in het Bbl`,
        `Er is geen enkele richtlijn als de fabrikant niets zegt`
      ],
      goed: 1,
      uitleg: `De brancherichtlijn voor hoog-rendement cv-ketels noemt 2 m vrije hoogte, 1 m vrij looppad en 10 cm tot andere wanden, met ruimte voor praktische afwijking bij vervanging in bestaande bouw. Het Bbl zelf legt geen vaste maat vast.`
    },
    {
      vraag: `Een monteur denkt dat een terugstroombeveiliging op de vulkraan er vooral is om de garantie van de ketel te behouden, net zoals het spoelen van de installatie. Klopt die vergelijking?`,
      opties: [
        `Ja, beide maatregelen zijn vooral bedoeld om de garantie van de fabrikant veilig te stellen`,
        `Ja, zonder beide maatregelen keurt de certificerende instelling het opleveringsrapport altijd af, ook als de rest van de installatie verder in orde is`,
        `Nee, de terugstroombeveiliging beschermt het drinkwaternet tegen cv-water; spoelen gaat over vuil dat de ketel kan beschadigen`,
        `Nee, de terugstroombeveiliging is juist bedoeld om sneller te kunnen bijvullen bij drukverlies`
      ],
      goed: 2,
      uitleg: `Een terugstroombeveiliging voorkomt dat cv-water, mogelijk met een toevoegmiddel, teruggezogen wordt in het drinkwaternet: dat is een risico voor iedereen op dat net, niet in de eerste plaats een garantiekwestie. Spoelen (les 13.4) gaat over een ander risico: vuil en fitresten die de nieuwe ketel zelf kunnen beschadigen, wat wel aan garantie raakt. Het opleveringsrapport en het gemak van bijvullen zijn hier niet de reden.`
    },
    {
      vraag: `Je moet een nieuwe binnenleiding met een werkdruk van 30 mbar beproeven, en er hangt al een toestel aangesloten waarvoor de fabrikant een testdruk van maximaal 60 mbar toestaat. Kun je de sterkteproef (5 bar) en de dichtheidsproef (werkdruk plus 100 mbar, hier 130 mbar) zomaar uitvoeren met dat toestel aangesloten?`,
      opties: [
        `Ja, zolang je onder de sterkteproefdruk van 5 bar blijft, is het aangesloten toestel altijd veilig, ongeacht het gasblok`,
        `Ja, de dichtheidsproef van 130 mbar is laag genoeg voor elk toestel, alleen de sterkteproef van 5 bar niet, dus alleen die moet zonder toestel gebeuren`,
        `Nee, beide proefdrukken liggen ver boven de 60 mbar die de fabrikant op dit toestel toestaat: sluit eerst de toestelkraan of koppel los`,
        `Nee, maar alleen voor de sterkteproef moet het toestel los; de dichtheidsproef van 130 mbar mag met het toestel aangesloten`
      ],
      goed: 2,
      uitleg: `Zowel de sterkteproef (5 bar) als de dichtheidsproef (hier 130 mbar) ligt ver boven de 60 mbar die deze fabrikant op het aangesloten toestel toestaat. Beide beproevingen kunnen het gasblok beschadigen als het toestel aangesloten blijft: sluit daarom eerst de toestelkraan of koppel het toestel los voor je een van beide proeven doet. Alleen bij de sterkteproef loskoppelen is niet genoeg: ook 130 mbar is voor dit toestel te hoog.`
    },
    {
      vraag: `Bij de dichtheidsproef van een nieuwe leiding zie je na 3 minuten geen drukdaling op de manometer. Betekent dat dat de leiding gegarandeerd dicht is?`,
      opties: [
        `Ja, geen drukdaling binnen de proeftijd is het enige bewijs dat nodig is`,
        `Ja, zolang de sterkteproef daarvoor al geslaagd was, is de dichtheidsproef eigenlijk niet meer nodig`,
        `Nee, maar dan moet je de proeftijd verdubbelen naar 6 minuten in plaats van de koppelingen zelf nog te controleren met een gaslekzoeker`,
        `Nee, ook alle koppelingen controleer je met lekzoekspray of een gaslekzoeker: een klein lek is niet altijd zichtbaar in het drukverloop`
      ],
      goed: 3,
      uitleg: `Geen zichtbare drukdaling binnen de proeftijd is een goed teken, maar geen garantie: een zeer klein lek is niet altijd terug te zien in het drukverloop binnen die tijd. Een volledige beproeving controleert daarom ook alle koppelingen met lekzoekspray of een gaslekzoeker. De sterkteproef vervangt de dichtheidsproef niet, en het probleem los je niet op door alleen de proeftijd te verdubbelen zonder de koppelingen te controleren.`
    },
    {
      vraag: `Tijdens de inbedrijfstelling meet je 0 ppm CO in de opstellingsruimte, maar je ontdekt dat de sifon van het condenserende toestel niet met water is gevuld. Mag je op basis van die CO-meting toch vrijgeven?`,
      opties: [
        `Nee, een lege sifon is zelf al een risico dat je eerst verhelpt (water bijvullen), ook als de CO-meting op dit moment goed is`,
        `Ja, een CO-meting van 0 ppm is de enige voorwaarde voor vrijgave, de sifon is daarnaast op dit moment niet relevant`,
        `Ja, zolang de rookgasmeting ook binnen de grenswaarde van het toesteltype valt, is de lege sifon op dit moment helemaal geen probleem`,
        `Nee, maar dan mag je toch gewoon vrijgeven als je de klant mondeling waarschuwt voor de lege sifon`
      ],
      goed: 0,
      uitleg: `De sifon is de waterafsluiting tussen de verbrandingskamer en de opstellingsruimte: zonder water kunnen verbrandingsgassen alsnog vrijkomen, ook als de CO-meting op dit moment goed uitvalt. Dat is een zelfstandig risico dat je eerst verhelpt voor je op basis van de metingen vrijgeeft. Een goede rookgasmeting verandert dat niet, en een mondelinge waarschuwing aan de klant is geen vervanging voor het daadwerkelijk verhelpen van het probleem.`
    },
    {
      vraag: `Een installatie met een systeeminhoud van 60 liter wordt volgens fabrikantvoorschrift met minimaal 3 keer de systeeminhoud gespoeld. Hoeveel liter is dat minimaal?`,
      opties: [
        `60 liter`,
        `120 liter`,
        `180 liter`,
        `20 liter`
      ],
      goed: 2,
      uitleg: `3 x 60 liter = 180 liter. 60 liter is maar 1 keer de inhoud en 120 liter is 2 keer: beide te weinig volgens dit voorschrift.`
    },
    {
      vraag: `Je hebt de gasdichtheid gecontroleerd en goedgekeurd, en de CO in de rookgassen valt binnen de grenswaarde van het toesteltype. De CO in de opstellingsruimte heb je nog niet gemeten. Mag je al vrijgeven?`,
      opties: [
        `Ja, gasdichtheid plus een goede rookgasmeting zijn samen voldoende voor vrijgave`,
        `Ja, zodra de gasdichtheid in orde is, zijn verdere metingen nog slechts een formaliteit`,
        `Nee, vrijgave vraagt ook de CO-meting in de opstellingsruimte, onder 5 ppm: gasdichtheid en de rookgasmeting alleen zijn niet genoeg`,
        `Nee, maar dan is een schriftelijke garantie van de klant dat hij zelf goed zal ventileren al een voldoende vervanging van die meting`
      ],
      goed: 2,
      uitleg: `Vrijgave vereist beide CO-metingen: minder dan 5 ppm in de opstellingsruimte én de CO in de rookgassen binnen de grenswaarde van het toesteltype. Een goede gasdichtheidscontrole en een goede rookgasmeting zijn dus niet voldoende zolang de meting in de opstellingsruimte nog ontbreekt: die is geen formaliteit, en een garantie van de klant vervangt geen meting.`
    },
    {
      vraag: `Je meet 25 ppm CO in de opstellingsruimte na je werkzaamheden. Aan wie meld je dit onmiddellijk?`,
      opties: [`Alleen aan je eigen leidinggevende`, `Aan niemand, je herstelt het probleem eerst zelf en meldt het daarna alleen als de herstelpoging niet lukt`, `Alleen aan de opdrachtgever`, `Aan bewoner of gebruiker, de eigenaar van het gebouw, het bevoegd gezag en de certificerende instelling`],
      goed: 3,
      uitleg: `Boven 20 ppm meld je onmiddellijk aan alle vier de partijen: bewoner/gebruiker, eigenaar, bevoegd gezag en de certificerende instelling. Wachten met melden tot na een eigen herstelpoging, of alleen intern melden, voldoet niet aan deze eis.`
    },
    {
      vraag: `Hoe lang bewaar je het projectdossier na afronding van een project?`,
      opties: [`Minimaal 5 jaar`, `Minimaal 10 jaar`, `Zolang de klant nog op dat adres woont`, `Minimaal 2 jaar`],
      goed: 1,
      uitleg: `Beide aangewezen certificatieschema's eisen een bewaartermijn van minstens 10 jaar na afronding van het project, ongeacht of de klant nog op het adres woont.`
    },
    {
      vraag: `Je vervangt een open, afvoergebonden toestel zonder CO-melder, en je regelt het warmteafgiftesysteem niet zelf waterzijdig in. Wat moet je in beide gevallen doen, ook al voer je de handeling zelf niet uit?`,
      opties: [
        `In beide gevallen de opdrachtgever wijzen: schriftelijk adviseren over de CO-melder en wijzen op de plicht tot waterzijdig inregelen`,
        `Niets, zolang je het zelf niet uitvoert, ligt de verantwoordelijkheid volledig bij de klant`,
        `Alleen bij de CO-melder moet je iets zeggen; waterzijdig inregelen is uitsluitend de zaak van de installateur die het toestel ooit heeft geplaatst`,
        `Alleen bij het waterzijdig inregelen moet je iets zeggen; een CO-melder plaats je altijd zelf, zonder daarover te hoeven adviseren`
      ],
      goed: 0,
      uitleg: `Beide plichten staan los van wie de handeling uiteindelijk uitvoert: bij een open, afvoergebonden toestel zonder CO-melder adviseer je schriftelijk om er een te plaatsen, en als je het waterzijdig inregelen niet zelf doet, wijs je de opdrachtgever expliciet op die verplichting. In beide gevallen is "ik doe het niet, dus ik zeg er niets over" onjuist: de informatieplicht blijft, ook al ligt de uitvoering bij een ander.`
    },
    {
      vraag: `Je regelt het warmteafgiftesysteem bij een toestelvervanging niet zelf waterzijdig in. Wat is je verplichting?`,
      opties: [
        `Niets, dat is volledig en uitsluitend de verantwoordelijkheid van de klant zelf, niet van de installateur`,
        `De opdrachtgever expliciet wijzen op de verplichting tot waterzijdig inregelen`,
        `Het toestel om deze reden niet vrijgeven`,
        `Zelf gratis een collega regelen om het te doen`
      ],
      goed: 1,
      uitleg: `Doe je het inregelen niet zelf, dan blijft de plicht om de opdrachtgever hierop te wijzen. Dit staat los van de vrijgave (die over gasdichtheid en CO-metingen gaat), en er is geen verplichting om dit gratis te regelen.`
    }
  ]
});
