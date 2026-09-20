/* ==========================================================================
   m04.js - Module 4: Gas, verbranding en koolmonoxide
   Lessen 4.1 t/m 4.7 zijn geschreven op basis van project/docs/feiten/02-gas-verbranding-co.md
   (GAS, VER, CO, REN), met kruisverwijzingen naar 01 (WET), 04 (RGA, LUC) en 05 (MET, KLA).
   Open punten uit het register (H-gas-omschakeling, 25 of 30 mbar, luchtvrije CO-grenzen,
   lozing van condensaat) staan als voorbehoud in de lessen, niet als feit.
   ========================================================================== */

CURSUS.addModule({
  id: 'm04',
  nr: 4,
  deel: 1,
  titel: 'Gas, verbranding en koolmonoxide',
  ondertitel: 'Het theoretische hart van het examen en van je verantwoordelijkheid.',
  niveau: 'Gemiddeld',
  studietijd: 9,
  kritiek: true,
  intro: 'Van aardgas tot koolmonoxide: wat er precies gebeurt in de vlam, waarom verbranding onvolledig kan zijn en hoe CO het lichaam aantast. Het theoretisch hart van het examen en van je verantwoordelijkheid.',
  inleiding: [
    'Deze module draait om twee vragen: wat gebeurt er in de vlam, en wat komt er uit het rookgas? Je leert welk gas een woning krijgt, hoeveel lucht een verbranding nodig heeft, hoe je uit een O2-meting de luchtovermaat afleidt, en wat er misgaat als de verbranding onvolledig is. Die stof keert terug in het examen, in je metingen en in elk oordeel dat je over een toestel geeft.',
    'De getallen komen uit het feitenregister van de cursus: wetteksten, certificatieschema\'s, Kiwa-tabellen en fabrikanthandleidingen, aangevuld met eigen berekeningen waarvan de aannames erbij staan. Waarden van fabrikanten zijn voorbeelden en verschillen per model. Waar een bron een vraag open laat, zoals of de CO-grenzen in het rookgas luchtvrij zijn, zeggen de lessen dat ook.'
  ],
  leerdoelen: [
    'De gassoorten en gasdrukken in Nederland benoemen en hun gevolgen voor het toestel uitleggen',
    'Volledige en onvolledige verbranding uitleggen met luchtbehoefte en luchtovermaat',
    'Het verband tussen O2, CO2 en lambda gebruiken bij het beoordelen van een meting',
    'Uitleggen hoe CO het lichaam aantast en welke richtwaarden en handelingskaders er zijn',
    'Condensatie, dauwpunt en rendement aan elkaar koppelen',
    'Bij een CO-alarm de eerste maatregelen goed nemen'
  ],
  examen: [
    {
      vraag: `Een collega zegt dat G20 op 20 mbar de standaard is in Nederlandse woningen. Wat is de juiste reactie?`,
      opties: [`Dat klopt: G20 is het gas van de K-groep en 20 mbar is de nominale druk in woningen`, `Dat klopt: de druk is 20 mbar, alleen krijgen alle woningen G25 (L-groep) in plaats van G20 (E-groep)`, `Dat klopt niet: woningen krijgen G-gas (G25.3) op nominaal 25 mbar, 20 mbar hoort bij G20 (H-gas)`, `Dat klopt niet: woningen krijgen propaan op 50 mbar, dat is de gangbare huisdruk in Nederland`],
      goed: 2,
      uitleg: `G20 is het referentiegas van de E-groep (H-gas) met een nominale druk van 20 mbar. Gewone woningen krijgen G-gas met G25.3 als referentiegas op nominaal 25 mbar (het toegestane bereik verschilt per model, bij de Remeha Avanta 20 tot 30 mbar). Propaan is een aparte gassoort.`
    },
    {
      vraag: `Een toestel is afgesteld op G25.3 (Wobbe 45,07) met lambda 1,2. Het net levert G25 (Wobbe 43,88). Welke lambda meet je bij dezelfde instelling ongeveer?`,
      opties: [`1,17`, `1,23`, `1,20`, `1,32`],
      goed: 1,
      uitleg: `Lambda verschuift met de verhouding van de Wobbe-indices: 1,2 × 45,07 / 43,88 = 1,23. De 1,17 is de omgekeerde deling. Een lagere Wobbe-index geeft meer luchtovermaat en dus meer O2 in het rookgas, zonder dat het toestel defect is.`
    },
    {
      vraag: `Hoeveel lucht is minimaal nodig om 1 m³ propaan volledig te verbranden (C3H8 + 5 O2 → 3 CO2 + 4 H2O, lucht met 20,94% O2)?`,
      opties: [`5,0 m³`, `9,55 m³`, `1,05 m³`, `23,9 m³`],
      goed: 3,
      uitleg: `Propaan vraagt 5 m³ zuurstof per m³ gas, en lucht bevat 0,2094 m³ zuurstof per m³: 5 / 0,2094 = 23,9 m³ lucht. De 5,0 m³ is alleen de zuurstof, de 9,55 m³ hoort bij methaan en de 1,05 m³ komt uit vermenigvuldigen in plaats van delen.`
    },
    {
      vraag: `Je meet op een G20-toestel 5,26% O2 en 60 ppm CO in het droge rookgas. Welke lambda hoort daarbij volgens de Kiwa-tabel, en wat is de luchtvrije CO-waarde?`,
      opties: [`Lambda 1,3 en circa 80 ppm luchtvrij`, `Lambda 1,3 en 60 ppm luchtvrij`, `Lambda 1,2 en circa 80 ppm luchtvrij`, `Lambda 1,4 en circa 48 ppm luchtvrij`],
      goed: 0,
      uitleg: `Bij G20 hoort 5,26% O2 bij lambda 1,3. CO luchtvrij = 60 × 21 / (21 − 5,26) = 60 × 1,334 = 80 ppm. De luchtvrije waarde is altijd hoger dan de aflezing, want de luchtovermaat verdunt het CO. Of de wettelijke grenzen luchtvrij zijn, is niet vastgesteld: het is een rekenmethode.`
    },
    {
      vraag: `Bij een open afvoergebonden toestel (type B) zonder maximale CO-waarde in het fabrikantvoorschrift meet je 250 ppm CO in het rookgas. De bron zegt niet of de grens luchtvrij is. Wat zegt het schema?`,
      opties: [`Boven de grens voor type B (200 ppm): niet in bedrijf stellen en de oorzaak zoeken`, `Toegestaan: de grens voor open toestellen is 400 ppm, dus 250 ppm blijft daaronder`, `Toegestaan: de grens voor type B is 250 ppm en precies 250 ppm mag nog`, `Alleen afkeuren boven 1000 ppm, want dan sluit de beveiliging de gastoevoer af`],
      goed: 0,
      uitleg: `Zonder fabrikantgrens noemt BRL 6000-25 maximaal 50 ppm (type A), 200 ppm (type B) en 400 ppm (type C). De 400 ppm hoort bij gesloten toestellen. Een fabrikantgrens zou voorgaan. De 1000 ppm (0,1%) is het niveau waarop de beveiliging bij de Kiwa-blokkeringstests de gastoevoer moet afsluiten, niet een afkeurgrens.`
    },
    {
      vraag: `Je meet in de opstellingsruimte voor de werkzaamheden 25 ppm CO. Wat is de juiste handeling?`,
      opties: [`Nader onderzoek doen, de oorzaak wegnemen en de opdrachtgever informeren, een melding is niet nodig`, `Onverwijld melden aan bewoner, eigenaar, gemeente en certificerende instelling en het toestel niet in bedrijf stellen`, `Het toestel toch in bedrijf stellen, na afloop opnieuw meten en pas melden als de waarde dan nog steeds boven 20 ppm ligt`, `De bewoner en de eigenaar informeren, maar de gemeente en de certificerende instelling alleen op verzoek`],
      goed: 1,
      uitleg: `Boven 20 ppm geldt de meldplicht van art. 6.46 Bbl. Nader onderzoek zonder melding hoort bij 5 tot 20 ppm. De melding bevat minstens de gemeten concentratie en een beschrijving van de ruimte. Zie ook les 1.6.`
    },
    {
      vraag: `Een slachtoffer met 16% COHb (voorbeeldgetal) ademt 100% zuurstof. Neem een halfwaardetijd van 1 uur. Hoeveel COHb blijft er na 3 uur?`,
      opties: [`8%`, `4%`, `2%`, `0%`],
      goed: 2,
      uitleg: `Drie uur is drie halfwaardetijden: 16 → 8 → 4 → 2%. De halfwaardetijd bij 100% zuurstof is 0,5 tot 2 uur, tegenover 3 tot 6 uur bij gewone lucht: zuurstof versnelt het herstel. Het verdwijnt niet lineair en niet helemaal.`
    },
    {
      vraag: `Een collega noemt de WHO-richtwaarde van circa 9 ppm (8 uur) als afkeurgrens voor CO in de opstellingsruimte. Wat klopt?`,
      opties: [`Dat klopt: de WHO-waarde is de wettelijke afkeurgrens en geldt ook voor de opstellingsruimte`, `Dat klopt, maar alleen bij werkzaamheden van meer dan 8 uur; daaronder geldt de WHO-waarde van 1 uur`, `Dat klopt niet: de afkeurgrens in de ruimte is 35 ppm volgens het certificatieschema`, `Dat klopt niet: het is een richtlijn voor de bevolking, jouw grenzen in de ruimte zijn 5 en 20 ppm`],
      goed: 3,
      uitleg: `De WHO-waarden zijn gezondheidsrichtlijnen voor de algemene bevolking. Voor installateurs gelden in de opstellingsruimte de waarden van het schema: onder 5 ppm inbedrijfstellen, 5 tot 20 ppm onderzoeken en de oorzaak wegnemen, boven 20 ppm melden. Een 'afkeurgrens van 35 ppm' is geen Nederlandse grens: het getal komt waarschijnlijk van de WHO-waarde van 35 mg/m³ (circa 30 ppm) voor 1 uur.`
    },
    {
      vraag: `Een ketel draait op lambda 1,2 (dauwpunt circa 55,5 °C). Bij welke retourtemperatuur is er in de warmtewisselaar geen condensatie te verwachten?`,
      opties: [`30 °C`, `45 °C`, `52 °C`, `60 °C`],
      goed: 3,
      uitleg: `Condenseren kan alleen als het water onder het dauwpunt blijft. Bij 60 °C retour ligt het water boven 55,5 °C, dus er is geen condensatie te verwachten. Bij 30, 45 en 52 °C ligt het water onder het dauwpunt en condenseert de ketel, met steeds meer winst naarmate de retour lager is.`
    },
    {
      vraag: `Een fabrikant noemt 108,7% rendement voor een condenserende ketel. Hoeveel is dat ongeveer op de bovenwaarde (Hi/Hs = 0,902)?`,
      opties: [`98%`, `118%`, `108,7%`, `89%`],
      goed: 0,
      uitleg: `108,7 × 0,902 = 98,0% op de bovenwaarde. Rendement op onderwaarde kan boven 100% komen omdat de condensatiewarmte wordt benut, op bovenwaarde niet. De 118% komt uit delen in plaats van vermenigvuldigen.`
    },
    {
      vraag: `In een appartementencomplex met een collectieve rookgasafvoer (CLV) is geen geschiktheidsverklaring aanwezig. Wat verlangt BRL 6000-25 van jou als installateur?`,
      opties: [`Je plaatst zelf CO-melders in alle opstelruimten en noteert dat op de werkbon`, `Je keurt de CLV af en meldt dat aan de VvE en de certificerende instelling`, `Je adviseert CO-melders in de opstelruimten en legt vast dat je dat hebt gedaan`, `Niets: de VvE beslist over de CLV en jij beoordeelt alleen je eigen toestel`],
      goed: 2,
      uitleg: `Zonder geschiktheidsverklaring van de CLV adviseer je CO-melders in de opstelruimten en leg je vast dat je dat hebt geadviseerd. Het schema verplicht adviseren, niet plaatsen of afkeuren, en bij plaatsing raadpleeg je het Brandweeradvies.`
    },
    {
      vraag: `Je meet 450 ppm CO in de woonkamer van een klant en de bewoner heeft hoofdpijn en misselijkheid. Wat doe je eerst?`,
      opties: [`Eerst de oorzaak zoeken en de ketel afstellen, daarna pas de bewoner waarschuwen`, `Iedereen waarschuwen en naar buiten laten gaan, 112 bellen, en daarna pas melden`, `Alleen de gemeente melden en de bewoner laten weten dat het toestel gecontroleerd wordt`, `Ramen openzetten, de bewoner een pauze geven en gewoon doorwerken aan de ketel`],
      goed: 1,
      uitleg: `Bij acuut gevaar of een ernstig vergiftigde bewoner bel je altijd 112, en boven 400 ppm schakelt de gemeente volgens het handelingskader de brandweer in. Eerst mensen in veiligheid, daarna melden volgens art. 6.46 Bbl en het toestel buiten bedrijf stellen. Zoeken en afstellen komt pas daarna.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 4.1 */
{
  id: 'm04l01',
  nr: '4.1',
  titel: 'Aardgas in Nederland: gassoorten, gasdruk en Wobbe',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de gassoorten in Nederland benoemen en uitleggen wat de Wobbe-index en de gasdruk betekenen voor een toestel.',
  videos: [
    { taal: 'nl', titel: 'Uitleg stikstofinstallatie Gasunie Zuidbroek (Gasunie)', yt: 'CRRQkVegZvo', duur: '±6 min, 2022' },
    { taal: 'en', titel: 'Wobbe Index: greener gas in the pipeline? (Worcester Bosch, VK)', yt: 'ymlGDdTCkSw', duur: '±4 min, 2016' }
  ],
  tekst: `
## Twee gaskwaliteiten: G-gas en H-gas

Het Nederlandse gastransportnet vervoert twee kwaliteiten: **G-gas** (laagcalorisch, van oorsprong Groningengas) en **H-gas** (hoogcalorisch). G-gas bevat ongeveer 14% stikstof. Dat brandt niet, dus er zit minder energie in een kubieke meter dan in buitenlands H-gas.

Het Groningenveld is sinds 19 april 2024 definitief gesloten. Huishoudens krijgen G-gas nu doordat buitenlands H-gas met stikstof wordt verdund (pseudo-Groningengas, stikstoffabriek Zuidbroek). Of woningen ooit naar H-gas worden omgeschakeld, is in de bronnen die voor deze cursus zijn nagelopen niet vastgesteld. Ga daarom niet uit van een gassoort: lees in het toestelvoorschrift voor welk gas het toestel is afgesteld.

## De Wobbe-index

Twee gassen met een verschillende samenstelling kunnen bij dezelfde brander toch evenveel warmte geven. Dat beschrijft de **Wobbe-index**: de calorische bovenwaarde (Hs) gedeeld door de wortel van de relatieve dichtheid (dichtheid ten opzichte van lucht). Gassen met dezelfde Wobbe-index leveren bij dezelfde brander en gasdruk bij benadering dezelfde warmtebelasting. De reden: een zwaarder gas stroomt bij dezelfde druk langzamer door de sproeier. De Wobbe-index legt de energie per m³ en de dichtheid daarom samen in één getal vast.

Alle waarden gelden per normaal-kubieke meter, m³(n): het volume bij 0 °C en 101,325 kPa.

| Gas | Wobbe-index (Hs) in MJ/m³(n) | Waar het vandaan komt |
|---|---|---|
| G-gas, eis bij invoeding en aflevering | 43,46 tot 44,41 | Regeling gaskwaliteit, sinds 2026 Energieregeling |
| Referentiegas G25 (L-groep) | 43,88 | Kiwa BRL Gaskeur CV:2021 |
| Referentiegas G25.3 (K-groep) | 45,07 | Kiwa BRL Gaskeur CV:2021 |
| H-gas | 49,9 tot 55,7 bij invoeding, 47 tot 55,7 bij aflevering | Regeling gaskwaliteit |

## Welk gas hoort bij welk toestel

Toestellen worden gekeurd op referentiegassen: G25 voor de L-groep, G25.3 voor de K-groep en G20 voor de E-groep (H-gas). Een gewone Nederlandse woning zit in de K-groep. Een categorie als II2EK3P betekent dat het toestel af fabriek is afgesteld op K-gas en met een ombouw of herafstelling geschikt kan worden gemaakt voor E-gas (H-gas) en propaan.

!!! kern G20 op 20 mbar is H-gas, geen huisgas
Een gewone Nederlandse woning heeft G-gas (K-groep, referentiegas G25.3) op een nominale druk van 25 mbar. De 20 mbar hoort bij G20, het E-gas (H-gas) van ombouw en keuring. Wie leert dat G20 op 20 mbar de standaard woningsituatie is, leert het verkeerd.
!!!

## Gasdruk in de woning

Gasdruk geef je in mbar (1 mbar = 0,1 kPa = 100 Pa). Het lagedrukgasnet staat meestal op 100 mbar en deels op 30 mbar. In woningen op 100-mbargebied verlaagt een huisdrukregelaar de druk tot 30 mbar. Woningtoestellen op aardgas hebben een nominale aansluitdruk van 25 mbar (2,5 kPa). Voorbeeld uit de Remeha Avanta (handleiding v.13, categorie II2EK3P), per model verschilt dit:

| Gas | Nominale aansluitdruk | Toegestane gasvoordruk |
|---|---|---|
| G25.3 (K-gas, jouw woning) | 25 mbar | 20 tot 30 mbar |
| G20 (E-gas, H-gas) | 20 mbar | 17 tot 30 mbar |
| G31 (propaan) | 30 tot 50 mbar | 30 tot 50 mbar |

De Intergas Kombi Kompakt noemt dezelfde drukken en meldt 'voordruk te laag' onder 20 mbar. De bronnen zijn het niet volledig eens over het nominale getal: keuringsregeling en fabrikanten noemen 25 mbar, Netbeheer Nederland noemt 30 mbar als ontwerpdruk van huishoudelijke toestellen. In de praktijk ligt de druk bij het toestel dus ruwweg tussen 25 en 30 mbar. Voor de beoordeling geldt het toegestane bereik in de handleiding van het model, niet je eigen vuistregel.

## Rekenvoorbeeld: een lagere Wobbe-index geeft meer luchtovermaat

Een toestel is afgesteld op G25.3 (Wobbe 45,07) met lambda 1,3, dat is 5,2% O2 in het droge rookgas (zie [les 4.3](les:m04l03)). Het net levert G25 (Wobbe 43,88). Volgens Kiwa verschuift lambda mee met de Wobbe-index:

- lambda nieuw = 1,3 × 45,07 / 43,88 = 1,335
- de O2-meting stijgt daarmee van 5,2% naar 5,6%

Er is niets mis met het toestel: het gas is anders. Wie dat niet weet, gaat onnodig bijstellen. De typische denkfout is de omgekeerde deling (1,3 × 43,88 / 45,07 = 1,27): een lagere Wobbe-index geeft meer lucht per hoeveelheid brandstof, niet minder.

?? Verdieping: waarom staat er m³(n) en geen m³?
Een gas zet uit bij hogere temperatuur. 1 m³ gas van 15 °C bevat ongeveer 5% minder gas dan 1 m³(n) van 0 °C (273,15 / 288,15 = 0,948). Of de m³ op de gasmeter en de gasrekening een m³(n) is, is voor deze cursus niet vastgesteld.
??
`,
  checklist: [
    'Ik kan uitleggen waarom G-gas minder energie per m³ heeft dan H-gas',
    'Ik weet welk gas en welke nominale druk een gewone woning heeft, en bij welk gas 20 mbar hoort',
    'Ik kan de Wobbe-index definiëren en uitleggen waarom hij voor toestellen telt',
    'Ik raadpleeg voor het toegestane drukbereik altijd de handleiding van het model'
  ],
  quiz: [
    {
      vraag: `Welk gas en welke nominale druk horen bij een gewone Nederlandse woning?`,
      opties: [`G20 (H-gas, E-groep) op 20 mbar`, `G25.3 (G-gas, K-groep) op 25 mbar`, `G31 (propaan, tank of fles) op 50 mbar`, `G20 (H-gas, E-groep) op 30 mbar`],
      goed: 1,
      uitleg: `Huishoudens krijgen G-gas met G25.3 als referentiegas, toestellen zijn daarvoor gekeurd op een nominale aansluitdruk van 25 mbar. G20 op 20 mbar is H-gas: dat komt terug bij ombouw en keuring, maar is niet de gangbare woningsituatie.`
    },
    {
      vraag: `Twee gassen hebben dezelfde Wobbe-index. Wat mag je bij dezelfde brander en gasdruk verwachten?`,
      opties: [`Bij benadering dezelfde warmtebelasting, ook bij andere samenstelling`, `Dezelfde energie per m³, dus ook dezelfde samenstelling van het gas`, `Dezelfde samenstelling, want de Wobbe-index legt die precies vast`, `Hetzelfde CO2-gehalte in het rookgas bij dezelfde luchtovermaat`],
      goed: 0,
      uitleg: `De Wobbe-index combineert energie per m³ (Hs) met de relatieve dichtheid, en die bepaalt hoeveel gas door de sproeier stroomt. Gassen met dezelfde Wobbe-index geven daardoor bij dezelfde brander en druk ongeveer dezelfde warmtebelasting, ook als de samenstelling en de energie per m³ verschillen.`
    },
    {
      vraag: `Een toestel is afgesteld op G25.3 en meet bij lambda 1,3 een O2-gehalte van 5,2%. Het net levert nu G25 (Wobbe 43,88 in plaats van 45,07). Welke lambda meet je bij dezelfde instelling ongeveer?`,
      opties: [`1,27`, `1,30`, `1,34`, `1,40`],
      goed: 2,
      uitleg: `Lambda verschuift mee met de verhouding van de Wobbe-indices: 1,3 × 45,07 / 43,88 = 1,335. De 1,27 is de omgekeerde deling, de klassieke denkfout. Een lagere Wobbe-index geeft meer luchtovermaat, dus een hogere O2-waarde (circa 5,6%) zonder dat het toestel defect is.`
    },
    {
      vraag: `Waarom bevat een m³ G-gas minder energie dan een m³ H-gas?`,
      opties: [`Het staat in het net onder een lagere druk dan H-gas`, `Het bestaat voor een groot deel uit propaan en butaan`, `Het bevat veel waterdamp, en die neemt de warmte op`, `Het bevat ongeveer 14% stikstof, en dat brandt niet`],
      goed: 3,
      uitleg: `Het stikstofgehalte van circa 14% is het verschil. Stikstof levert geen warmte, dus per m³ zit er minder brandbaar gas in. Druk verandert niet de energie per normaal-kubieke meter, en propaan en butaan hebben juist meer energie per m³.`
    },
    {
      vraag: `Je meet bij een Remeha Avanta (handleiding v.13, categorie II2EK3P, draaiend op G25.3) een gasvoordruk van 27 mbar. Wat is de beste conclusie?`,
      opties: [`Te hoog: de nominale druk is 25 mbar, dus regel de druk terug`, `Binnen het toegestane bereik van dit model (20 tot 30 mbar)`, `Te laag: een woning heeft altijd 30 mbar nodig, dus regel de druk op`, `Alleen goed als het toestel op G20 (H-gas) is afgesteld`],
      goed: 1,
      uitleg: `Nominaal betekent niet dat de druk exact dat getal moet zijn: de handleiding geeft een toegestaan bereik (hier 20 tot 30 mbar voor G25.3). Dat bereik verschilt per model, dus lees altijd de handleiding van het toestel voor je een druk afkeurt.`
    },
    {
      vraag: `Het Groningenveld is gesloten. Hoe krijgen huishoudens nu nog G-gas?`,
      opties: [`Alle woningen zijn omgeschakeld naar H-gas op 20 mbar`, `Het wordt uit propaan gemaakt en via het gasnet geleverd`, `Buitenlands H-gas wordt met stikstof verdund tot G-gas`, `Het komt uit een groter gasveld net over de grens in Duitsland`],
      goed: 2,
      uitleg: `Gasunie verdunt H-gas met stikstof (o.a. in de fabriek bij Zuidbroek) tot gas met de kwaliteit van Groningengas. Voor huishoudens is een omschakeling naar H-gas in de nagelopen bronnen niet vastgesteld.`
    }
  ],
  kaarten: [
    { voor: `Wat is de Wobbe-index?`, achter: `De calorische bovenwaarde (Hs) gedeeld door de wortel van de relatieve dichtheid. Gassen met dezelfde Wobbe-index geven bij dezelfde brander en druk bij benadering dezelfde warmtebelasting.` },
    { voor: `Welk gas en welke nominale druk krijgt een gewone Nederlandse woning?`, achter: `G-gas (K-groep, referentiegas G25.3) op nominaal 25 mbar. Het toegestane bereik verschilt per model, bijvoorbeeld 20 tot 30 mbar bij de Remeha Avanta.` },
    { voor: `Bij welk gas hoort een nominale druk van 20 mbar?`, achter: `Bij G20, het E-gas (H-gas). Dat is niet de gangbare huisdruk.` },
    { voor: `Waarom bevat G-gas minder energie per m³ dan H-gas?`, achter: `Het bevat ongeveer 14% stikstof, en dat brandt niet.` },
    { voor: `Wat is de Wobbe-band van G-gas bij invoeding en aflevering?`, achter: `43,46 tot 44,41 MJ/m³(n).` },
    { voor: `Een toestel staat op G25.3 met lambda 1,3 en krijgt G25 (Wobbe 43,88). Welke lambda meet je ongeveer?`, achter: `Circa 1,335 (O2 circa 5,6%): 1,3 × 45,07 / 43,88. Een lagere Wobbe-index geeft meer luchtovermaat.` },
    { voor: `Wat betekent toestelcategorie II2EK3P?`, achter: `Af fabriek afgesteld op K-gas, met ombouw of herafstelling geschikt te maken voor E-gas (H-gas) en propaan.` },
    { voor: `Hoe krijgen huishoudens G-gas nu Groningen gesloten is?`, achter: `Buitenlands H-gas wordt met stikstof verdund (pseudo-Groningengas, o.a. stikstoffabriek Zuidbroek).` }
  ],
  bronnen: ['GAS-01', 'GAS-02', 'GAS-03', 'GAS-04', 'GAS-05', 'GAS-06', 'GAS-07', 'GAS-11', 'GAS-12', 'GAS-13', 'GAS-14', 'GAS-15', 'GAS-16', 'GAS-17', 'GAS-18', 'GAS-19', 'GAS-21', 'GAS-22', 'GAS-30']
},

/* ------------------------------------------------------------------ 4.2 */
{
  id: 'm04l02',
  nr: '4.2',
  titel: 'Volledige verbranding en de luchtbehoefte',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de verbranding van aardgas opstellen en de benodigde hoeveelheid lucht bepalen.',
  videos: [
    { taal: 'nl', titel: 'Volledige en onvolledige verbranding (Scheikunde CDH)', yt: 'z7tH3d4xcWs', duur: '±13 min, 2020' },
    { taal: 'nl', titel: 'Natuurkunde uitleg: aardgas verbranden (WATT!? Natuurkunde)', yt: 'QtGCFdBK9T8', duur: '±3 min, 2021' },
    { taal: 'en', titel: 'Complete combustion of methane (CH4), balanced equation (chemistNATE)', yt: '_DNF8Z0lMfw', duur: '±2 min, 2019' }
  ],
  tekst: `
## Wat er in de vlam gebeurt

Aardgas bestaat vooral uit methaan (CH4). Verbranden is een reactie met zuurstof uit de lucht. Bij volledige verbranding zijn het resultaat koolstofdioxide, waterdamp en warmte:

CH4 + 2 O2 → CO2 + 2 H2O + warmte

Voor de kleine componenten in aardgas geldt hetzelfde principe: C2H6 + 3,5 O2 → 2 CO2 + 3 H2O en C3H8 + 5 O2 → 3 CO2 + 4 H2O. Stikstof (N2) in het gas brandt niet mee. Blijft er te weinig lucht of wordt de vlam gekoeld, dan verloopt de reactie niet volledig: dan ontstaat CO ([les 4.4](les:m04l04)).

## Hoeveel lucht heb je nodig

Lucht is geen zuivere zuurstof. De tabellen van Kiwa rekenen met 20,94% O2, 79,02% N2 en 0,04% CO2 in droge lucht. De vuistregel '21% zuurstof' is een afronding. Voor 1 m³ methaan is 2 m³ zuurstof nodig, dus:

lucht = 2 m³ O2 / 0,2094 = 9,55 m³ lucht per m³ methaan

De stikstof uit de lucht (circa 7,55 m³ per m³ methaan) doet niet mee met de reactie. Hij wordt wel opgewarmd en verlaat het toestel met het rookgas.

| Gas | Samenstelling (rekenaanname) | Minimaal benodigde lucht |
|---|---|---|
| Methaan (G20 gerekend als zuiver methaan) | 100% CH4 | 9,55 m³ per m³ gas |
| G25-achtig gas | 86% CH4, 14% N2 | 0,86 × 9,55 = 8,21 m³ per m³ gas |
| Gas met wat ethaan en propaan | voorbeeldsamenstelling, eigen rekenaanname | circa 8,4 m³ per m³ gas |

Dit zijn rekenwaarden. De wet noemt geen getal per m³ gas: de capaciteit van de luchttoevoer moet minimaal de volgens de toestelspecificaties benodigde capaciteit zijn (voor toestellen tot 130 kW, bepaald volgens NEN 1087 of NEN 8087). Als orde van grootte kom je uit op 8 tot 10 m³ lucht per m³ gas, afhankelijk van de gassamenstelling.

!!! kern Zonder genoeg lucht geen volledige verbranding
Per m³ gas heb je minstens 8 tot 9,5 m³ lucht nodig, want alleen de 20,94% zuurstof reageert. Een te krappe of geblokkeerde luchttoevoer is daarom het begin van onvolledige verbranding en van CO.
!!!

## Rekenvoorbeeld: lucht voor een toestel van 24 kW

Een toestel met 24,0 kW ingangsvermogen (op onderwaarde, Hi) draait op vollast op Nederlands aardgas van 8,792 kWh per m³(n) Hi. Rekenen met kW en kWh: 1 kW is 1 kWh per uur.

- gasverbruik: 24,0 kW / 8,792 kWh/m³(n) = 2,73 m³(n)/h
- minimale lucht: 2,73 m³(n)/h × 8,4 m³ lucht per m³ gas = 22,9 m³(n)/h, dat is 6,4 dm³/s

Dit is het theoretische minimum. In werkelijkheid krijgt de vlam meer lucht dan dit; hoeveel en waarom, leer je in [les 4.3](les:m04l03).

## De lucht moet schoon zijn

Verbrandingslucht moet vrij zijn van chloor- en fluorverbindingen. Die zijn uitermate corrosief en zitten in spuitbussen, verf, oplosmiddelen, reinigingsmiddelen, waspoeder, lijm en pekel. Zuig daarom geen lucht aan via ruimten waar deze producten worden gebruikt, zoals een kapsalon, stomerij, industriële ruimte of een ruimte met koelinstallatie. Volgens Remeha vervalt bij corrosie hierdoor de garantie.

Ook mag bij een open opstelling de luchttoevoeropening van het toestel niet worden afgesloten en mogen de verbrandingsluchtopeningen van de opstelruimte niet worden verkleind of afgesloten. De luchtstroom moet volgens het Bbl van de toevoervoorziening naar het toestel gaan.

?? Verdieping: waar komt de warmte vandaan?
Bij de reactie ontstaat 2 mol waterdamp per mol methaan. De calorische bovenwaarde Hs (35,17 MJ/m³ voor Groningen-equivalent gas) telt de condensatiewarmte van die damp mee, de onderwaarde Hi (31,65 MJ/m³(n) voor gemiddeld aardgas) niet. De verhouding Hi/Hs is 0,902 voor aardgas. Dat verschil van circa 10% is precies de winst die een condenserende ketel kan halen: zie [les 4.6](les:m04l06).
??
`,
  checklist: [
    'Ik kan de verbranding van methaan opschrijven en de luchtbehoefte per m³ gas uitrekenen',
    'Ik weet dat de wet geen getal per m³ gas noemt en dat de toestelspecificaties de luchtcapaciteit bepalen',
    'Ik reken een gasverbruik uit met kW, kWh per m³ en de juiste eenheden',
    'Ik weet welke stoffen verbrandingslucht ongeschikt maken'
  ],
  quiz: [
    {
      vraag: `Hoeveel m³ zuurstof is minimaal nodig om 1 m³ methaan volledig te verbranden?`,
      opties: [`9,55 m³`, `1 m³`, `2 m³`, `4 m³`],
      goed: 2,
      uitleg: `CH4 + 2 O2 → CO2 + 2 H2O: per mol methaan zijn 2 mol zuurstof nodig, en bij gassen is dat gelijk aan 2 m³ per m³. De 9,55 m³ is de hoeveelheid lucht die 2 m³ zuurstof bevat, niet de hoeveelheid zuurstof zelf.`
    },
    {
      vraag: `Hoeveel m³ lucht is minimaal nodig voor 1 m³ methaan, als lucht 20,94% zuurstof bevat?`,
      opties: [`9,55 m³`, `21 m³`, `0,42 m³`, `4,8 m³`],
      goed: 0,
      uitleg: `Je hebt 2 m³ zuurstof nodig en lucht bevat maar 0,2094 m³ zuurstof per m³: 2 / 0,2094 = 9,55 m³. De 0,42 m³ komt uit vermenigvuldigen in plaats van delen, de 4,8 m³ uit rekenen met 1 m³ zuurstof.`
    },
    {
      vraag: `Een toestel van 12,0 kW ingangsvermogen (onderwaarde) draait op vollast op aardgas van 8,792 kWh/m³(n). Hoeveel lucht heeft het minimaal per uur nodig, gerekend met 8,4 m³ lucht per m³ gas?`,
      opties: [`1,4 m³(n)/h`, `23 m³(n)/h`, `101 m³(n)/h`, `11,5 m³(n)/h`],
      goed: 3,
      uitleg: `Eerst het gasverbruik: 12,0 / 8,792 = 1,365 m³(n)/h. Dan de lucht: 1,365 × 8,4 = 11,5 m³(n)/h. De 1,4 is alleen het gas, de 101 komt uit 12 × 8,4 zonder de omrekening kW naar m³ gas, de 23 hoort bij een toestel van 24 kW.`
    },
    {
      vraag: `Waarom heeft G25-achtig gas (86% CH4, 14% N2) minder lucht nodig per m³ dan zuiver methaan?`,
      opties: [`Het gas staat onder lagere druk, dus is er minder lucht nodig`, `De stikstof in het gas vervangt een deel van de zuurstof in de lucht`, `Alleen het methaandeel verbrandt: 0,86 × 9,55 = 8,21 m³ lucht`, `De stikstof in het gas neemt zuurstof op, dus minder lucht nodig`],
      goed: 2,
      uitleg: `Stikstof brandt niet en vraagt dus geen zuurstof. Per m³ gas is er maar 0,86 m³ methaan, dat 0,86 × 9,55 = 8,21 m³ lucht vraagt. De druk verandert niets aan de stoichiometrie.`
    },
    {
      vraag: `Een open toestel staat in een kapsalon en haalt zijn verbrandingslucht uit de salon, waar dagelijks spuitbussen worden gebruikt. Wat is het risico?`,
      opties: [`Corrosie door chloor- en fluorverbindingen in de aangezogen lucht`, `Een te hoge gasdruk bij het toestel door de drijfgassen in de lucht`, `Meer stikstof in het rookgas door de aangezogen spuitbuslucht`, `Te weinig zuurstof in de salon omdat de spuitbus zuurstof verbruikt`],
      goed: 0,
      uitleg: `Spuitbussen, verf en reinigingsmiddelen bevatten chloor- en fluorverbindingen, die uitermate corrosief zijn. Kapsalons staan met name genoemd als ruimte waaruit je geen verbrandingslucht moet aanzuigen. Het zuurstofgehalte van de lucht verandert er nauwelijks door.`
    }
  ],
  kaarten: [
    { voor: `Wat is de reactievergelijking voor volledige verbranding van methaan?`, achter: `CH4 + 2 O2 → CO2 + 2 H2O + warmte.` },
    { voor: `Hoeveel lucht is minimaal nodig voor 1 m³ methaan?`, achter: `9,55 m³ (2 m³ O2 / 0,2094). Voor G25-achtig gas met 14% stikstof 8,21 m³ per m³ gas.` },
    { voor: `Met welke luchtsamenstelling rekenen de Kiwa-tabellen?`, achter: `20,94% O2, 79,02% N2 en 0,04% CO2 (droog). '21% zuurstof' is een afronding.` },
    { voor: `Hoeveel zuurstof is nodig voor 1 m³ propaan?`, achter: `5 m³ (C3H8 + 5 O2 → 3 CO2 + 4 H2O).` },
    { voor: `Welke eis stelt de wet aan de capaciteit van de verbrandingsluchttoevoer?`, achter: `Geen getal per m³ gas: minimaal de volgens de toestelspecificaties benodigde capaciteit (toestellen tot 130 kW), bepaald volgens NEN 1087 of NEN 8087.` },
    { voor: `Welke stoffen maken verbrandingslucht ongeschikt?`, achter: `Chloor- en fluorverbindingen (spuitbussen, verf, oplosmiddelen, reinigingsmiddelen, waspoeder, lijm, pekel): uitermate corrosief.` },
    { voor: `Wat gebeurt er met de stikstof uit de lucht bij verbranding?`, achter: `Hij brandt niet mee, maar wordt wel opgewarmd en verlaat het toestel met het rookgas.` }
  ],
  bronnen: ['VER-01', 'VER-02', 'VER-03', 'GAS-02', 'GAS-08', 'GAS-09', 'GAS-10', 'REN-01', 'REN-20', 'REN-21', 'LUC-01', 'LUC-02', 'LUC-04', 'LUC-05', 'LUC-06']
},

/* ------------------------------------------------------------------ 4.3 */
{
  id: 'm04l03',
  nr: '4.3',
  titel: 'Luchtovermaat, lambda en het verband tussen O2 en CO2',
  duur: 30,
  type: 'les',
  leerdoel: 'Je kunt uit een gemeten O2- of CO2-waarde de luchtovermaat afleiden en beoordelen of de verbranding klopt.',
  videos: [
    { taal: 'nl', titel: 'Een HR-cv-ketel controleren en afstellen op O2 en CO2 (Loodgieter Den Haag Stad)', yt: 'oPsXD-NRFVI', duur: '±21 min, 2023' },
    { taal: 'nl', titel: 'De testo 300 gebruiken voor een verwarmingssysteem (Testo Nederland)', yt: 'UrJuWtZU6Ds', duur: '±3 min, 2022' },
    { taal: 'en', titel: 'Flue gas measurement with the testo 300 analyzer (Testo)', yt: 'lnv8smfEuJk', duur: '±2 min, 2019' }
  ],
  tekst: `
## Lambda: hoeveel lucht je werkelijk geeft

**Lambda** is de verhouding tussen de werkelijk toegevoerde en de theoretisch benodigde hoeveelheid lucht (zie [les 4.2](les:m04l02)). Bij lambda 1,0 is er precies genoeg lucht voor de reactievergelijking, bij lambda 1,2 is er 20% luchtovermaat. Onder lambda 1,0 is er te weinig zuurstof en ontstaat CO. Vlam en lucht mengen nooit perfect, dus een toestel werkt met luchtovermaat. Te veel lucht kost rendement: het extra rookgas voert voelbare warmte af. De Gaskeur-rendementsmeting is afgesproken bij lambda 1,2, wat bij G20 overeenkomt met 9,6% CO2.

## Wat je meet: O2 en CO2 in droog rookgas

Je meet geen lambda maar O2 en CO2 in het droge rookgas. Meer luchtovermaat betekent meer O2 en minder CO2. De twee hangen lineair samen via de maximale CO2-waarde bij lambda 1,0 (CO2max): 11,74% voor methaan (G20) en 11,52% voor G25-achtig gas.

CO2 = CO2max × (1 − O2 / 20,94)

De tabel van Kiwa (BRL Gaskeur CV:2021, droog rookgas) geeft de samenhang. Voor G25.3 geeft Kiwa alleen O2, bijna gelijk aan G25 (lambda 1,2: 3,77%).

| Lambda | G25: O2 | G25: CO2 | G20: O2 | G20: CO2 |
|---|---|---|---|---|
| 1,1 | 2,07% | 10,39% | 2,10% | 10,56% |
| 1,2 | 3,77% | 9,46% | 3,82% | 9,60% |
| 1,3 | 5,18% | 8,68% | 5,26% | 8,80% |
| 1,4 | 6,38% | 8,02% | 6,47% | 8,13% |

## Rekenvoorbeeld: van O2 naar CO2 en lambda

Je meet op een G20-toestel 3,82% O2 in het droge rookgas.

- CO2 = 11,74 × (1 − 3,82 / 20,94) = 11,74 × 0,8176 = 9,60%
- Uit de tabel: 3,82% O2 hoort bij lambda 1,2

Een veelgebruikte benadering is lambda = 20,94 / (20,94 − O2). Die overschat lambda: bij 3,82% O2 geeft ze 20,94 / 17,12 = 1,223 terwijl de exacte waarde 1,2 is. Bij G20 en 4,0% O2 is het 1,236 tegenover 1,211, en bij 5,0% O2 is het 1,314 tegenover 1,281. Gebruik de tabel van Kiwa of van de fabrikant, niet de benadering.

!!! kern Lambda lees je af, je meet O2
Lambda is geen meetwaarde maar een uitkomst: je meet O2 (en CO2) in droog rookgas en zoekt lambda op in de tabel voor de juiste gassoort. Werk je op basis van CO2 alleen, dan zeg je weinig over de luchtovermaat.
!!!

## Waarom je op O2 afstelt en niet op CO2

Het gedistribueerde G-gas kan tot 10,5% CO2 bevatten. Daardoor kan het rookgas bij stoichiometrische verbranding circa 1 procentpunt extra CO2 bevatten, en dan zegt de CO2-meting niet meer betrouwbaar hoeveel lucht er is. Remeha stelt cv-toestellen daarom niet meer af op CO2 maar op O2. Kiwa eist voor toestellen van categorie I2EK dat de gas/luchtverhouding op een O2-meting wordt ingesteld, met een totale meetonnauwkeurigheid van maximaal 0,3 procentpunt. Ook de Wobbe-index verschuift je O2-meting (zie [les 4.1](les:m04l01)).

Let op de meting zelf: laat de sonde het meetpunt niet lekken, want meegezogen lucht verdunt het monster. Een te hoge O2-waarde kan wijzen op een lekkend meetsysteem.

## Voorbeelden van instelwaarden per model

Elk model heeft eigen grenzen. Dit zijn voorbeelden, het verschilt per model en de handleiding is leidend. Waarden in droog rookgas.

| Model en meetconditie | Gas | Vollast | Laaglast |
|---|---|---|---|
| Remeha Avanta (v.13), meten zonder frontmantel | G25.3 | O2 4,4 tot 4,9% | O2 4,9 tot 5,4% |
| Remeha Avanta (v.13), meten zonder frontmantel | G20 | O2 4,7 tot 5,2% | O2 5,2 tot 5,7% |
| Intergas Kombi Kompakt HRE, meten met open mantel | G25.3 | O2 3,15 tot 5,70% (CO2 8,4 tot 9,8%) | hangt af van de hooglastwaarde, tot 6,05% O2 |

Bij de Remeha Avanta moet O2 bij vollast lager zijn dan bij laaglast. Het bereik van de Intergas is veel breder dan dat van de Remeha: vergelijk dus nooit merken met elkaar.
`,
  checklist: [
    'Ik kan lambda definiëren en bij een O2-meting de luchtovermaat uit de tabel opzoeken',
    'Ik kan CO2 uitrekenen uit O2 met CO2max',
    'Ik weet waarom O2 bij G-gas betrouwbaarder is dan CO2',
    'Ik lees de O2-grenzen en de meetconditie altijd uit de handleiding van het model'
  ],
  quiz: [
    {
      vraag: `De rookgasmeting van een G20-toestel geeft 3,82% O2 in droog rookgas. Wat is de luchtovermaat volgens de Kiwa-tabel?`,
      opties: [`Lambda 1,2: 20% luchtovermaat`, `Lambda 1,1: 10% luchtovermaat`, `Lambda 1,3: 30% luchtovermaat`, `Lambda 0,9: 10% tekort aan lucht`],
      goed: 0,
      uitleg: `Bij G20 hoort lambda 1,2 bij 3,82% O2 en 9,60% CO2. Lambda 1,1 hoort bij 2,10% O2 en 1,3 bij 5,26%. Er is pas een tekort aan lucht onder lambda 1,0, en dan is O2 in het rookgas ongeveer nul.`
    },
    {
      vraag: `Een G20-toestel (CO2max 11,74%) geeft 3,82% O2. Welke CO2-waarde hoort daarbij?`,
      opties: [`7,9%`, `10,6%`, `9,6%`, `2,1%`],
      goed: 2,
      uitleg: `CO2 = 11,74 × (1 − 3,82 / 20,94) = 9,60%. De 7,9% komt uit 11,74 min 3,82, wat geen correcte omrekening is. De 10,6% is de CO2-waarde bij lambda 1,1 in dezelfde tabel, dus de verkeerde rij.`
    },
    {
      vraag: `Waarom is een CO2-meting alleen geen betrouwbare maat voor de luchtovermaat bij G-gas?`,
      opties: [`CO2 stijgt als er meer lucht is, dus meer CO2 betekent altijd meer luchtovermaat`, `CO2 ontstaat alleen bij onvolledige verbranding en zegt daarom niets over de lucht`, `CO2 hangt alleen van het rendement af en niet van de hoeveelheid toegevoerde lucht`, `Het gas kan zelf tot 10,5% CO2 bevatten, tot circa 1 procentpunt extra in het rookgas`],
      goed: 3,
      uitleg: `Het CO2 in het gas komt bovenop het CO2 uit de verbranding, dus dezelfde luchtovermaat geeft een andere CO2-uitslag. Bij meer lucht daalt CO2 juist. Daarom stelt Remeha af op O2 en eist Kiwa voor I2EK-toestellen een O2-meting.`
    },
    {
      vraag: `Een collega berekent bij G20 en 4,0% O2 lambda = 20,94 / (20,94 − 4,0) = 1,236 en noemt dat exact. Wat klopt?`,
      opties: [`Dat klopt, de formule is exact zolang je droog rookgas meet`, `De formule overschat: de exacte lambda is circa 1,21`, `De formule onderschat lambda: de exacte waarde is 1,30`, `Lambda leid je alleen uit een CO2-meting af, niet uit O2`],
      goed: 1,
      uitleg: `De formule houdt geen rekening met het ontstane rookgasvolume en overschat lambda met 2 tot 3%: bij 4,0% O2 is de exacte waarde 1,211. Lambda kun je wel uit O2 afleiden, maar via de tabel van Kiwa of de fabrikant.`
    },
    {
      vraag: `Een Remeha Avanta (v.13) staat op G25.3. Bij vollast meet je 5,1% O2 en bij laaglast 4,8% O2 (droog rookgas, zonder frontmantel). Wat is de conclusie?`,
      opties: [`Alles is in orde: beide waarden zijn normaal voor een toestel dat op G25.3 staat`, `Niet in orde: vollast 5,1% ligt boven 4,4 tot 4,9% en boven laaglast, zoek de oorzaak`, `Alleen de vollast is fout: 5,1% ligt boven het bereik, de laaglast van 4,8% is in orde`, `Meet opnieuw op CO2, want bij G-gas zegt O2 niets over de kwaliteit van de verbranding`],
      goed: 1,
      uitleg: `De handleiding geeft voor G25.3 op vollast 4,4 tot 4,9% en op laaglast 4,9 tot 5,4%, en eist dat O2 bij vollast lager is dan bij laaglast. Beide controles falen, en ook de 4,8% bij laaglast ligt onder het laaglastbereik. Onderzoek de oorzaak volgens de handleiding in plaats van blind bij te stellen.`
    },
    {
      vraag: `Tijdens een rookgasmeting zuigt de sonde door een lekkende afdichting lucht mee. Wat zie je in de meting?`,
      opties: [`O2 te laag en CO2 te hoog`, `Geen effect: lucht telt niet mee`, `O2 te hoog en CO2 te laag`, `Alleen de temperatuur verandert`],
      goed: 2,
      uitleg: `Meegezogen lucht verdunt het monster: O2 stijgt en CO2 daalt, alsof er meer luchtovermaat is dan werkelijk. Daarom moet de sonde het meetpunt afdichten, en kan een te hoge O2-waarde wijzen op een lekkend meetsysteem.`
    }
  ],
  kaarten: [
    { voor: `Wat is lambda?`, achter: `De verhouding tussen de werkelijk toegevoerde en de theoretisch benodigde hoeveelheid lucht. Lambda 1,2 is 20% luchtovermaat.` },
    { voor: `Welke O2- en CO2-waarde hoort bij lambda 1,2 voor G20 in droog rookgas?`, achter: `O2 3,82% en CO2 9,60% (Kiwa-tabel). Voor G25: O2 3,77% en CO2 9,46%.` },
    { voor: `Hoe reken je CO2 uit O2 uit?`, achter: `CO2 = CO2max × (1 − O2 / 20,94). CO2max is 11,74% voor G20 en 11,52% voor G25-achtig gas.` },
    { voor: `Waarom stel je af op O2 en niet op CO2?`, achter: `G-gas kan tot 10,5% CO2 bevatten, dat verschuift het CO2 in het rookgas met circa 1 procentpunt. Remeha stelt daarom af op O2.` },
    { voor: `Wat is het bezwaar tegen lambda = 20,94 / (20,94 − O2)?`, achter: `Het overschat lambda met 2 tot 3%: bij G20 en 4,0% O2 geeft het 1,236 tegenover exact 1,211. Gebruik de tabel.` },
    { voor: `Bij welke lambda is de Gaskeur-rendementsmeting afgesproken?`, achter: `Lambda 1,2, wat overeenkomt met 9,6% CO2.` },
    { voor: `Wat eist Kiwa voor I2EK-toestellen over het instellen van de gas/luchtverhouding?`, achter: `Instellen op basis van een O2-meting, met een totale meetonnauwkeurigheid van maximaal 0,3 procentpunt.` }
  ],
  bronnen: ['VER-02', 'VER-04', 'VER-05', 'VER-06', 'VER-07', 'VER-08', 'VER-09', 'VER-11', 'VER-12', 'GAS-27', 'GAS-28', 'GAS-29', 'GAS-30', 'REN-10', 'MET-08', 'MET-15', 'INS-56']
},

/* ------------------------------------------------------------------ 4.4 */
{
  id: 'm04l04',
  nr: '4.4',
  titel: 'Onvolledige verbranding en het ontstaan van CO',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen waardoor een verbranding onvolledig wordt en hoe je de oorzaak in de installatie herkent.',
  videos: [
    { taal: 'nl', titel: 'Koolmonoxide: hoe ontstaat het en wat zijn de symptomen? (Varen doe je Samen)', yt: 'sl0t-l5OH6M', duur: '±1 min, 2025' },
    { taal: 'nl', titel: 'Wat is koolmonoxide en waarom is het gevaarlijk? (Ei Electronics Nederland)', yt: 'IEf2u1vGd0w', duur: '±2 min, 2016' },
    { taal: 'en', titel: 'Combustion and incomplete combustion explained (FuseSchool)', yt: 'Nl0bipxyuyk', duur: '±4 min, 2014' }
  ],
  tekst: `
## Wat er gebeurt als de verbranding tekortschiet

Bij onvolledige verbranding, door te weinig lucht of een gekoelde vlam, ontstaat CO in plaats van CO2. Een voorbeeld: 2 CH4 + 3 O2 → 2 CO + 4 H2O. Er komt dan minder warmte vrij dan bij volledige verbranding: het toestel verspilt brandstof en maakt een giftig gas. Onder lambda 1,0 is CO onvermijdelijk, want er is te weinig zuurstof (zie [les 4.3](les:m04l03)).

## Waar het in de installatie misgaat

De oorzaak zit vaak buiten de vlam. In 2025 waren de meest genoemde oorzaken in CO-meldingen de rookgasafvoer (35 meldingen), een algemeen toestelsdefect (24) en een lek in de warmtewisselaar (14).

| Oorzaak | Wat er gebeurt | Hoe je het herkent |
|---|---|---|
| Verstopte uitmonding (vogelnest, vuil) | Lucht of rookgas kan niet vrij stromen | Vlamverlies of blokkeringsbeveiliging (per model verschillend), O2 buiten de grenzen |
| Recirculatie: rookgas in de luchttoevoer | Verbrandingslucht bevat al rookgas | CO2 op het meetpunt van de luchttoevoer (gesloten mantel): buitenluchtwaarde, tot circa 1% CO2 door wind toelaatbaar, veel hoger wijst op interne lekkage |
| Onderdruk in de woning bij een open toestel | Afzuigkap of mechanische ventilatie zuigt rookgas de woning in | De BRL vraagt onderdruk te controleren als de ruimte-CO tussen 5 en 20 ppm ligt |
| Verkeerde gas/luchtverhouding of gassoort | Lambda te laag | O2 buiten de grenzen van de handleiding |
| Lekkende collectieve afvoer (CLV, shunt) | Rookgas bij boven- of benedenburen | Lekkende aansluitingen, ontbrekende terugslagkleppen, corrosiegaten |

Een afvoerloos toestel (type A, zoals een keukengeiser) voert rookgas niet af: alles komt in de ruimte.

## CO meten: in de ruimte en in het rookgas

**Ruimte.** Meet voor je begint op circa 1,7 m hoogte en circa 1 m van het toestel (les [1.6](les:m01l06)). Gebruik een instrument met passende uitlezing, bij voorkeur een persoonlijke veiligheidsmeter: een rookgasmeter is voor ruimte-CO alleen indicatief. Ruimte-CO beoordeel je altijd zoals afgelezen.

**Rookgas.** Het CO in het rookgas is verdund met de luchtovermaat. Met de luchtvrije waarde corrigeer je daarvoor: het CO dat er in het rookgas zou zitten zonder luchtovermaat. O2 is in procenten van het droge rookgas.

CO luchtvrij = CO gemeten × 21 / (21 − O2)

- 100 ppm CO gemeten bij 4,0% O2: 100 × 21 / 17 = 123,5 ppm luchtvrij
- 50 ppm CO gemeten bij 6,0% O2: 50 × 21 / 15 = 70 ppm luchtvrij

Voorbeeldgetallen, geen meetgegevens. De factor 21 / (21 − O2) is gelijk aan CO2max / CO2 (binnen 0,3%) en niet exact gelijk aan lambda: bij G25 en 4,0% O2 is de factor 1,235 en lambda 1,215. Op omgevingslucht (O2 circa 20,9%) is de formule zinloos, want de noemer nadert nul. De Testo 300 toont ook 'CO onverdund': dat is de luchtvrije waarde.

Bij open toestellen met trekonderbreker meet je in de trekonderbreker vóór de luchtbijmenging, anders is het monster verdund.

## Grenzen voor CO in het rookgas

Geeft de fabrikant geen maximale CO-waarde, dan noemt het schema (BRL 6000-25, naar de Omgevingsregeling) na een goed afgesteld toestel deze maxima: 'niet hoger dan' betekent dat precies de grens nog is toegestaan. De fabrikantgrens gaat voor en is strenger, bijvoorbeeld 160 ppm bij de Intergas Kombi Kompakt HRE (gemeten met gemonteerde voormantel) en onder 250 ppm bij de Remeha Avanta Ace, voorbeelden die per model verschillen.

| Toestel | Grens die het schema noemt |
|---|---|
| Open afvoerloos (type A) | 50 ppm |
| Open afvoergebonden (type B) | 200 ppm |
| Gesloten (type C) | 400 ppm |

!!! kern Luchtvrij is een rekenmethode: of de wettelijke grenzen luchtvrij zijn, is niet vastgesteld
Of de grenzen in de tabel luchtvrij zijn of zoals afgelezen, is niet vastgesteld: de tekst van de Omgevingsregeling en van de schema's zegt het niet, en BRL 6000-25 zegt dat de op het instrument aangegeven waarde leidend is. Gebruik de luchtvrije omrekening om metingen bij verschillende luchtovermaat te vergelijken. Beroep je er niet op als wettelijke beoordeling. Twijfel je, vraag je certificerende instelling of docent. Les [10.4](les:m10l04) werkt dit verder uit, met de letterlijke tekst van de wet en van beide meetprotocollen.
!!!

?? Verdieping: de giftigheidsindex
Kiwa definieert de giftigheidsindex als (%CO / %CO2) × 100 en eist in de tegendruktesten van BRL Gaskeur CV een waarde van hoogstens 2. Voorbeeld: 100 ppm CO (0,0100%) bij 9,0% CO2 geeft (0,0100 / 9,0) × 100 = 0,11. CO en CO2 worden door luchtovermaat even sterk verdund, dus de verhouding hangt niet van de verdunning af. De eis geldt voor de keuring van het toestel, niet als grens in het veld.
??
`,
  checklist: [
    'Ik kan uitleggen waarom te weinig lucht of een gekoelde vlam CO geeft',
    'Ik kan een CO-meting in het rookgas omrekenen naar luchtvrij en weet dat niet vaststaat of de wettelijke grenzen luchtvrij zijn',
    'Ik weet dat ruimte-CO altijd zoals afgelezen wordt beoordeeld',
    'Ik kan opnoemen waar in de installatie de oorzaak kan zitten en hoe ik hem herken'
  ],
  quiz: [
    {
      vraag: `Een ketel is afgesteld op lambda 0,95. Wat is het gevolg?`,
      opties: [`Te weinig zuurstof: een deel van de brandstof wordt CO`, `Alleen het rendement stijgt, door minder rookgasverlies`, `Er ontstaat extra waterdamp, maar er ontstaat geen CO`, `Alle brandstof verbrandt volledig tot CO2 en waterdamp`],
      goed: 0,
      uitleg: `Onder lambda 1,0 is er te weinig zuurstof voor de reactievergelijking: een deel van de brandstof verbrandt tot CO en levert minder warmte. Een tekort aan lucht is dus nooit gunstig voor het rendement.`
    },
    {
      vraag: `Je meet in het rookgas 80 ppm CO bij 5,0% O2 (droog). Wat is de luchtvrije waarde?`,
      opties: [`336 ppm`, `61 ppm`, `84 ppm`, `105 ppm`],
      goed: 3,
      uitleg: `CO luchtvrij = 80 × 21 / (21 − 5,0) = 80 × 1,3125 = 105 ppm. De 61 ppm komt uit vermenigvuldigen met (21 − O2) / 21, dus de omgekeerde factor. De 336 ppm komt uit 21 / O2 in plaats van 21 / (21 − O2).`
    },
    {
      vraag: `Je meet in de woonkamer met een rookgasmeter 12 ppm CO en O2 van 20,9%. Een collega rekent dat om naar luchtvrij. Wat klopt?`,
      opties: [`De uitkomst vergelijk je daarna met de 5 en 20 ppm uit het schema`, `Zinloos: de noemer nadert nul, ruimte-CO beoordeel je zoals afgelezen`, `Dat is verplicht: ruimte-CO beoordeel je altijd als luchtvrije waarde`, `Dat geeft een lagere en dus veiligere waarde dan de aflezing zelf`],
      goed: 1,
      uitleg: `De luchtvrije correctie geldt alleen voor rookgas met luchtovermaat. Bij een O2 van circa 20,9% wordt 21 − O2 bijna nul en levert de formule een onzinnige waarde. Voor de ruimte gelden de aflezingen zoals ze zijn: onder 5 ppm inbedrijfstellen, boven 20 ppm melden.`
    },
    {
      vraag: `Een gesloten toestel (type C) heeft geen maximale CO-waarde in het voorschrift van de fabrikant. Je meet 400 ppm CO in het rookgas. De bron zegt niet of de grens luchtvrij is. Wat zegt de grens die het schema noemt?`,
      opties: [`De grens is 'lager dan 400 ppm': bij precies 400 ppm moet je afkeuren`, `De grens voor type C is 200 ppm, en 400 ppm is de grens voor type B`, `Voor type C bestaat geen grens, alleen voor open toestellen zijn er maxima`, `De grens is 'niet hoger dan 400 ppm': precies 400 ppm is nog toegestaan`],
      goed: 3,
      uitleg: `BRL 6000-25 noemt 50 (type A), 200 (type B) en 400 ppm (type C) als maxima zonder fabrikantgrens, met 'niet hoger dan'. De 200 ppm hoort bij type B. Of de waarde luchtvrij is, staat in de bron niet.`
    },
    {
      vraag: `Een Intergas Kombi Kompakt HRE (voorbeeldmodel, maximaal 160 ppm CO volgens het voorschrift) meet bij hooglast 180 ppm CO. Het schema noemt 400 ppm voor gesloten toestellen. Welke grens telt?`,
      opties: [`Er is geen grens bij hooglast, alleen bij laaglast`, `400 ppm: de wettelijke grens gaat voor de fabrikantgrens`, `160 ppm: de fabrikantgrens gaat voor, 180 ppm is te hoog`, `200 ppm: dat is de grens voor open afvoergebonden toestellen`],
      goed: 2,
      uitleg: `De grenzen van het schema gelden alleen als de fabrikant geen maximale CO-waarde geeft. Een fabrikantgrens is strenger en gaat voor. De 180 ppm is dus te hoog: onderzoek de oorzaak in plaats van de meetwaarde af te ronden.`
    },
    {
      vraag: `Je meet CO2 op het meetpunt van de verbrandingsluchttoevoer van een concentrisch systeem (gesloten mantel) en leest 4,5%. Wat betekent dat?`,
      opties: [`Veel hoger dan de toelaatbare 1% door wind: dat wijst op interne lekkage`, `Het meetpunt is verkeerd gekozen, want CO2 meet je alleen in de afvoer`, `Normaal: de buitenlucht bevat circa 4,5% CO2, dit is de gewone waarde`, `Normaal: door windaanval is een waarde tot circa 5% CO2 toelaatbaar`],
      goed: 0,
      uitleg: `Bij een goed werkend systeem is CO2 in de luchttoevoer gelijk aan de buitenluchtwaarde, ongeveer 0,04%. Door wind kan tot circa 1% CO2 optreden. 4,5% is veel hoger en duidt op rookgas dat via een lek in de luchttoevoer terugkomt.`
    }
  ],
  kaarten: [
    { voor: `Wat is de reactie bij onvolledige verbranding van methaan?`, achter: `Bijvoorbeeld 2 CH4 + 3 O2 → 2 CO + 4 H2O, met minder warmte dan bij volledige verbranding.` },
    { voor: `Welke twee oorzaken geven onvolledige verbranding?`, achter: `Te weinig lucht, of een gekoelde vlam.` },
    { voor: `Hoe reken je CO om naar luchtvrij?`, achter: `CO luchtvrij = CO gemeten × 21 / (21 − O2), met O2 in procenten van het droge rookgas.` },
    { voor: `100 ppm CO gemeten bij 4,0% O2: wat is dat luchtvrij?`, achter: `100 × 21 / 17 = 123,5 ppm.` },
    { voor: `Waarom is de luchtvrije formule zinloos voor CO in een woonruimte?`, achter: `O2 is daar circa 20,9%, dus 21 − O2 nadert nul. Ruimte-CO beoordeel je zoals afgelezen.` },
    { voor: `Welke maximale CO-waarden in rookgas noemt het schema als de fabrikant geen grens geeft?`, achter: `50 ppm (type A), 200 ppm (type B), 400 ppm (type C), 'niet hoger dan'. De bron zegt niet of ze luchtvrij zijn. De fabrikantgrens gaat voor.` },
    { voor: `Hoe controleer je recirculatie in een concentrisch systeem?`, achter: `CO2 meten op het meetpunt van de luchttoevoer (gesloten mantel): buitenluchtwaarde, tot circa 1% door wind toelaatbaar, veel hoger wijst op interne lekkage.` },
    { voor: `Waar meet je CO bij een open toestel met trekonderbreker?`, achter: `In de trekonderbreker vóór de luchtbijmenging, anders is het monster verdund.` }
  ],
  bronnen: ['VER-13', 'VER-15', 'CO-30', 'CO-31', 'CO-32', 'CO-33', 'CO-34', 'CO-35', 'CO-38', 'CO-40', 'CO-41', 'CO-45', 'CO-46', 'CO-47', 'WET-44', 'WET-45', 'WET-86', 'LUC-08', 'RGA-02', 'RGA-28', 'RGA-30', 'RGA-77', 'RGA-79', 'MET-11', 'MET-13', 'MET-14', 'MET-17', 'MTN-01', 'MTN-02', 'MTN-05']
},

/* ------------------------------------------------------------------ 4.5 */
{
  id: 'm04l05',
  nr: '4.5',
  titel: 'Koolmonoxide en het lichaam',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe CO het lichaam aantast en welke klachten bij welke concentratie en duur horen.',
  videos: [
    { taal: 'nl', titel: 'Wat is koolmonoxide en wat doet het met je lichaam? (RTL Nieuws)', yt: 'I03M2Hg2WvY', duur: '±2 min, 2016' },
    { taal: 'nl', titel: 'Ervaringsverhaal: bijna overleden aan koolmonoxide in de slaap (Nederlandse Brandwonden Stichting)', yt: 'UejW3c_smOE', duur: '±2 min, 2017' },
    { taal: 'en', titel: 'Carbon monoxide and hemoglobin explained (Andrey K)', yt: 'Lsq-zyrzXxE', duur: '±8 min, 2014' }
  ],
  tekst: `
## Wat CO in het bloed doet

CO bindt aan de heemgroepen van hemoglobine en vormt carboxyhemoglobine (COHb). Die hemoglobine kan dan geen zuurstof meer vervoeren, en organen krijgen zuurstofgebrek. CO bindt ruim 200 keer sterker aan hemoglobine dan zuurstof (RIVM: ongeveer 200, WHO: 245), dus ook een klein aandeel CO in de lucht telt mee. CO werkt daarnaast op andere heme-eiwitten in weefsels, zoals in hart en zenuwstelsel. Daardoor zijn er al bij lage concentraties effecten die je niet uit het COHb-percentage kunt afleiden.

Extra gevoelig zijn zwangere vrouwen en de foetus, pasgeborenen, ouderen, mensen met hart- en longziekten en mensen met bloedarmoede of bloedziekten.

## Klachten

- **Mild:** hoofdpijn, duizeligheid, misselijkheid, braken en wazig zien.
- **Matig:** verwardheid, flauwvallen, pijn op de borst en ademnood.
- **Ernstig:** bloeddrukdaling, hartritmestoornissen, insulten, coma en hartstilstand.

De klachten lijken op griep of voedselvergiftiging, en dat maakt herkenning moeilijk. Een bewoner met hoofdpijn en misselijkheid denkt niet snel aan CO. Daarom meet jij, en vertrouw je niet op wat mensen voelen.

!!! kern Er bestaat geen vaste tabel van ppm × tijd × klacht
Het RIVM stelt dat het niet mogelijk en niet zinvol is om precies aan te geven bij welk COHb-percentage klachten ontstaan. Wat wel bestaat zijn richtwaarden en handelingskaders. Elk heeft een eigen doel en eigen doelgroep: verwar ze niet met elkaar.
!!!

## Richtwaarden en handelingskaders

| Kader | Waarde | Voor wie en waarvoor |
|---|---|---|
| WHO binnenlucht (2010) | 100 mg/m³ per 15 min (circa 86 ppm), 35 mg/m³ per 1 uur (circa 30 ppm), 10 mg/m³ per 8 uur (circa 9 ppm), 7 mg/m³ per 24 uur (circa 6 ppm) | Gezondheidsrichtlijn voor de algemene bevolking, geen keuringsgrens voor toestellen |
| Wettelijke grenswaarde beroepsmatig (Arbeidsomstandighedenregeling) | 23 mg/m³ (20 ppm) als 8-uursgemiddelde, 117 mg/m³ (100 ppm) als 15-minutengemiddelde | Werknemers, niet bewoners |
| Schema voor installateurs (BRL 6000-25) | Ruimte onder 5 ppm: in bedrijf stellen. 5 tot 20 ppm: onderzoeken en oorzaak wegnemen. Boven 20 ppm: melden | Jouw handelen als certificaathouder ([les 1.6](les:m01l06)) |
| Handelingskader voor gemeenten | 20 tot 400 ppm: onderzoek door BWT, het kader koppelt dit bereik aan milde klachten. Boven 400 ppm: ernstige hoofdpijn en levensgevaar, brandweer en ontruiming | Handreiking voor gemeenten, geen gezondheidsnorm. Milde klachten betekent niet ongevaarlijk: boven 20 ppm meld je altijd |

De Gezondheidsraad adviseerde in 2024 een lagere advieswaarde voor beroepsmatige blootstelling van 7,5 mg/m³ (6,4 ppm) als 8-uursgemiddelde. In de bijlage XIII die is nagelopen voor deze cursus (september 2026) staat nog 20 ppm.

## Rekenvoorbeelden

**Omrekenen.** 1 ppm CO is 1,165 mg/m³. De WHO-waarde voor 1 uur is 35 mg/m³, dus 35 / 1,165 = 30 ppm.

**Afname van COHb.** COHb halveert in 3 tot 6 uur bij gewone lucht, in 0,5 tot 2 uur bij 100% zuurstof en in 20 tot 30 minuten bij hyperbare zuurstof. Neem als voorbeeldgetal (geen medisch advies) 10% COHb:

- gewone lucht, 6 uur: 10 × 0,5^(6 / 6) = 5% bij de langzame halfwaardetijd, 10 × 0,5^(6 / 3) = 2,5% bij de snelle
- 100% zuurstof, 2 uur: 10 × 0,5^(2 / 2) = 5% bij de langzame halfwaardetijd, 10 × 0,5^(2 / 0,5) = 0,6% bij de snelle

Wie in frisse lucht is, herstelt dus langzaam, en zuurstof versnelt dat. Ter vergelijking: niet-rokers hebben van nature 0,5 tot 1,5% COHb, iemand die een pakje per dag rookt 5 tot 6%.

?? Verdieping: de GGD-richtlijn
De GGD-richtlijn (uit 2008, aangehaald door de Gezondheidsraad in 2019) is bedoeld voor GGD-medewerkers met handmeters, niet voor monteurs. Ze noemt: 10 tot 25 ppm altijd extra metingen, 25 tot 50 ppm ingrijpen binnen 30 minuten, 50 tot 100 ppm ingrijpen binnen 15 minuten en boven 100 ppm het pand ontruimen en hulpdiensten waarschuwen. Het laat zien hoe verschillend kaders per doelgroep zijn: jouw kader is het schema, met 112 bij acuut gevaar.
??
`,
  checklist: [
    'Ik kan uitleggen hoe CO het zuurstoftransport in het bloed blokkeert',
    'Ik kan de klachten bij milde, matige en ernstige vergiftiging opnoemen',
    'Ik weet dat er geen vaste ppm × tijd × klacht-tabel bestaat en waarom niet',
    'Ik kan de richtwaarden en handelingskaders uit elkaar houden: wie ze gebruikt en waarvoor',
    'Ik kan mg/m³ omrekenen naar ppm en een halfwaardetijd doorrekenen'
  ],
  quiz: [
    {
      vraag: `Hoe veroorzaakt CO zuurstofgebrek in de organen?`,
      opties: [`CO verdringt de zuurstof uit de kamerlucht, zodat je te weinig inademt`, `CO vernietigt rode bloedcellen, zodat er minder zuurstof wordt vervoerd`, `CO bindt sterk aan hemoglobine, dat daardoor geen zuurstof meer vervoert`, `CO verstopt de longblaasjes, zodat er geen zuurstof meer doorheen komt`],
      goed: 2,
      uitleg: `CO vormt met hemoglobine carboxyhemoglobine (COHb). Dat bloed kan geen zuurstof meer transporteren, terwijl de lucht zelf nog gewoon zuurstof bevat. De rode bloedcellen zelf blijven intact.`
    },
    {
      vraag: `Iemand vraagt je om de officiële tabel die per ppm en blootstellingsduur de klachten noemt. Wat is het juiste antwoord?`,
      opties: [`Die tabel staat in de Omgevingsregeling bij de regels over CO-melding`, `Die tabel hoort bij BRL 6000-25 en is bindend voor alle installateurs`, `Die tabel is er alleen voor kinderen, ouderen en zwangere vrouwen`, `Die is er niet: volgens het RIVM is dat niet mogelijk en niet zinvol`],
      goed: 3,
      uitleg: `Er is geen vaste tabel ppm × tijd × symptoom. Wat er is, zijn richtwaarden (bijvoorbeeld van de WHO) en handelingskaders (bijvoorbeeld van gemeenten), elk met een eigen doel. Een tabel met vaste klachten per ppm die je online ziet, is niet officieel vastgesteld.`
    },
    {
      vraag: `Een bewoner heeft sinds de vervanging van zijn ketel last van hoofdpijn en misselijkheid en denkt aan griep. Je meet 8 ppm CO in de opstellingsruimte. Wat doe je?`,
      opties: [`Niets doen: 8 ppm ligt onder de meldgrens van 20 ppm en de klachten zijn waarschijnlijk gewoon griep`, `Nader onderzoek doen, de oorzaak wegnemen, de opdrachtgever informeren en klachten serieus nemen`, `Direct de gemeente en de certificerende instelling melden, want boven 5 ppm geldt de meldplicht`, `Zeggen dat het waarschijnlijk griep is en gewoon doorwerken zonder verder onderzoek`],
      goed: 1,
      uitleg: `Tussen 5 en 20 ppm volgt volgens het schema nader onderzoek, oorzaak wegnemen en informeren van de opdrachtgever. De meldplicht geldt pas boven 20 ppm. CO-klachten lijken op griep, dus de klacht is een reden om door te zoeken.`
    },
    {
      vraag: `De WHO-richtwaarde voor 1 uur is 35 mg/m³. Hoeveel ppm is dat ongeveer (1 ppm = 1,165 mg/m³)?`,
      opties: [`30 ppm`, `41 ppm`, `86 ppm`, `3 ppm`],
      goed: 0,
      uitleg: `35 / 1,165 = 30 ppm. De 41 ppm komt uit vermenigvuldigen in plaats van delen. De 86 ppm is de waarde die bij 100 mg/m³ hoort (15 minuten): 100 / 1,165 = 86.`
    },
    {
      vraag: `Een bewoner heeft 12% COHb (voorbeeldgetal) en ademt frisse lucht. De halfwaardetijd is 4 uur. Hoeveel COHb blijft er na 8 uur?`,
      opties: [`6%`, `9%`, `3%`, `0%`],
      goed: 2,
      uitleg: `8 uur is twee halfwaardetijden: 12 × 0,5 × 0,5 = 3%. Na één halfwaardetijd (4 uur) is het 6%. Het verdwijnt nooit lineair of helemaal, en de halfwaardetijd is 3 tot 6 uur in gewone lucht.`
    },
    {
      vraag: `Waarom kan een lage CO-concentratie toch gevaarlijk zijn voor een hartpatiënt?`,
      opties: [`Hartpatiënten zijn extra gevoelig en CO werkt ook op heme-eiwitten in het hart`, `Een hartpatiënt ademt sneller en neemt daardoor altijd meer CO op dan gewone mensen`, `Bij hartpatiënten bindt CO sterker aan hemoglobine, zodat het COHb sneller oploopt`, `Er is geen bijzonder risico: bij lage concentraties reageert iedereen hetzelfde`],
      goed: 0,
      uitleg: `Mensen met hart- en longziekten, ouderen, zwangere vrouwen en de foetus, pasgeborenen en mensen met bloedarmoede zijn extra gevoelig. CO werkt ook direct op weefsels, dus een laag COHb-percentage sluit klachten niet uit.`
    }
  ],
  kaarten: [
    { voor: `Hoe werkt CO in het bloed?`, achter: `CO bindt aan hemoglobine (carboxyhemoglobine, COHb). Die hemoglobine vervoert geen zuurstof meer: de organen krijgen zuurstofgebrek.` },
    { voor: `Hoeveel sterker dan zuurstof bindt CO aan hemoglobine?`, achter: `Ruim 200 keer (RIVM ongeveer 200, WHO 245).` },
    { voor: `Welke klachten horen bij milde CO-vergiftiging?`, achter: `Hoofdpijn, duizeligheid, misselijkheid, braken en wazig zien. Ze lijken op griep of voedselvergiftiging.` },
    { voor: `Bestaat er een officiële tabel ppm × tijd × klacht?`, achter: `Nee. Het RIVM zegt dat het niet mogelijk en niet zinvol is om precies aan te geven bij welk COHb-percentage klachten ontstaan.` },
    { voor: `Wat is de halfwaardetijd van COHb?`, achter: `3 tot 6 uur bij gewone lucht, 0,5 tot 2 uur bij 100% zuurstof, 20 tot 30 minuten bij hyperbare zuurstof.` },
    { voor: `Wie zijn extra gevoelig voor CO?`, achter: `Zwangere vrouwen en foetus, pasgeborenen, ouderen, mensen met hart- en longziekten, en mensen met bloedarmoede of bloedziekten.` },
    { voor: `Wat is de wettelijke grenswaarde voor beroepsmatige CO-blootstelling?`, achter: `23 mg/m³ (20 ppm) als 8-uursgemiddelde en 117 mg/m³ (100 ppm) als 15-minutengemiddelde. Alleen voor werknemers.` },
    { voor: `Hoe reken je mg/m³ CO om naar ppm?`, achter: `Delen door 1,165 (1 ppm = 1,165 mg/m³): 35 mg/m³ is 30 ppm.` }
  ],
  bronnen: ['CO-01', 'CO-02', 'CO-03', 'CO-04', 'CO-05', 'CO-06', 'CO-07', 'CO-08', 'CO-09', 'CO-11', 'CO-12', 'CO-13', 'CO-24', 'CO-25', 'WET-43', 'WET-44']
},

/* ------------------------------------------------------------------ 4.6 */
{
  id: 'm04l06',
  nr: '4.6',
  titel: 'Condensatie: dauwpunt, condensaat en rendement',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen wanneer een ketel condenseert, waarom dat rendement oplevert en wat er met het condensaat gebeurt.',
  videos: [
    { taal: 'nl', titel: 'Hoe werkt een condensatieketel? Werking en rendement (Renovatie-Gids)', yt: 'CbFBUIzaUms', duur: '±2 min, 2020' },
    { taal: 'nl', titel: 'Hoe werkt een hr-ketel van Vaillant? (Vaillant)', yt: 'bviiHAed90g', duur: '±2 min, 2016' },
    { taal: 'en', titel: 'Dew point temperature explained (MEP Academy)', yt: 'hOhFoga6Ufc', duur: '±9 min, 2024' }
  ],
  tekst: `
## Het dauwpunt hangt af van lambda

Bij de verbranding ontstaat waterdamp: 2 mol per mol methaan. Die damp condenseert als het rookgas afkoelt tegen een wand die kouder is dan het **dauwpunt**. Het dauwpunt hangt af van het aandeel waterdamp in het rookgas, en dat wordt kleiner naarmate er meer luchtovermaat is: de damp raakt verdund.

| Lambda | Dauwpunt rookgas aardgas |
|---|---|
| 1,0 | circa 59 °C |
| 1,1 | circa 57 °C |
| 1,2 | circa 55,5 °C |
| 1,3 | circa 54 °C |
| 1,5 | circa 51 °C |
| 2,0 | circa 46 °C |

Rekenwaarden voor G25-achtig gas (86% CH4, 14% N2) bij 101,325 kPa. Voor G20 zijn ze 0,2 tot 0,4 °C hoger. Het vaak genoemde 'circa 57 °C' geldt dus bij lambda 1,1. Bij de gangbare lambda 1,2 tot 1,3 is het dauwpunt 54 tot 56 °C. Viessmann noemt 57 °C als retourtemperatuur waaronder condensatie is gegarandeerd.

## Rekenvoorbeeld: dauwpunt uit het waterdampaandeel

Per m³ G25-achtig gas ontstaat 2 × 0,86 = 1,72 m³ waterdamp. Het droge rookgas is 7,49 m³ bij lambda 1,0 en 7,49 + 0,3 × 8,21 = 9,95 m³ bij lambda 1,3.

- lambda 1,0: 1,72 / (7,49 + 1,72) = 18,7% waterdamp, dus 18,7% × 101,325 kPa = 18,9 kPa. Water verzadigt bij 18,9 kPa op circa 59 °C.
- lambda 1,3: 1,72 / (9,95 + 1,72) = 14,7%, dus 14,9 kPa, dauwpunt circa 54 °C.

!!! kern Condenseren kan alleen onder het dauwpunt
Het water in de warmtewisselaar moet onder het dauwpunt van het rookgas blijven. Hoe lager de retourtemperatuur en hoe kleiner de luchtovermaat, hoe meer condensatie en hoe hoger het rendement. Bij een retour van 56 °C en lambda 1,3 (dauwpunt 54 °C) is in de warmtewisselaar geen condensatie te verwachten.
!!!

## Condensaat: hoeveel en hoe zuur

Volledig condenseren levert maximaal 2 m³ damp × 18,015 g/mol / 22,414 l/mol = 1,61 kg water per m³(n) methaan, en 0,86 × 1,61 = 1,38 kg voor G25-achtig gas. In de praktijk condenseert maar een deel. Bij G-gas en lambda 1,25 (rekenaanname, verzadigd rookgas) is dat circa 75% (1,05 liter per m³) bij 30 °C rookgas, 56% (0,78 l/m³) bij 40 °C, 22% (0,31 l/m³) bij 50 °C en niets vanaf circa 55 °C. Het cijfer '1,5 liter per m³' is dus geen praktijkwaarde: het ligt boven het theoretische maximum voor G-gas (1,38) en is alleen bij (bijna) volledige condensatie van methaan haalbaar.

Condensaat is zuur: Remeha noemt pH 3,5 tot 4,5 (uit de handleiding van een grote gasboiler van 90 tot 120 kW), Buildwise pH onder 5. Daarom is voor de rookgasafvoer een weerstandsklasse W (natte condensatie) nodig, en moet dunwandig aluminium worden vermeden. Voorbeeld van een condensafvoer: de Remeha Avanta (v.13) eist een kunststof pijp van minimaal 32 mm naar het riool met stankafsluiter of sifon, afschot van minimaal 30 mm per meter, maximaal 5 m horizontaal, nooit afdichten, en lozen op een dakgoot is niet toegestaan. Het verschilt per model. Wat de wet zegt over lozen en neutraliseren van condensaat, is voor deze cursus nog niet vastgesteld: volg het voorschrift van de fabrikant.

## Rendement en de retourtemperatuur

De bovenwaarde Hs neemt aan dat het water condenseert, de onderwaarde Hi dat het damp blijft. Voor aardgas is Hi/Hs = 0,902. Een rendement op Hi kan daarom boven 100% komen: de condensatiewarmte (circa 10% van Hs, 11% van Hi) wordt benut maar staat niet in de noemer. Het maximum is 1 / 0,902 = 110,9% op Hi, terwijl op Hs 100% niet te overschrijden is. HR107 betekent 107% op de onderwaarde, dat is 96,5% op de bovenwaarde.

| Voorbeeld: Remeha Avanta 24c (v.13) | Rendement Hs | Rendement Hi |
|---|---|---|
| Vollast 80/60 °C | 89,3% | 99,1% |
| Vollast 50/30 °C | 94,0% | 104,4% |
| Laaglast, retour 60 °C | 84,9% | 94,3% |
| Deellast (Gaskeur HR-methode), retour 30 °C | 97,9% | 108,7% |

Van 30 naar 60 °C retour daalt het Hs-rendement 13 procentpunt. Reken dat door voor een nuttig vermogen van 17,8 kW (voorbeeld, per model verschillend) en 8,792 kWh/m³(n) Hi:

- 80/60 °C: 17,8 / (0,991 × 8,792) = 2,04 m³(n)/h
- 50/30 °C: 17,8 / (1,044 × 8,792) = 1,94 m³(n)/h, dat is 5% minder gas

Rendement en calorische waarde moeten op dezelfde basis (Hi of Hs) staan, anders maak je 10% fout.
`,
  checklist: [
    'Ik kan uitleggen waarom het dauwpunt daalt als de luchtovermaat stijgt',
    'Ik kan bepalen of een ketel bij een gegeven retourtemperatuur en lambda condenseert',
    'Ik kan uitleggen waarom een rendement op onderwaarde boven 100% kan komen, en wat HR107 betekent',
    'Ik weet dat condensaat zuur is en welke gevolgen dat voor afvoer en materiaal heeft'
  ],
  quiz: [
    {
      vraag: `Een ketel draait met lambda 1,3 (dauwpunt circa 54 °C) en een retourtemperatuur van 56 °C. Condenseert het rookgas in de warmtewisselaar?`,
      opties: [`Ja: het dauwpunt is 59 °C, dus 56 °C is koud genoeg`, `Ja: een condensatieketel condenseert altijd, ook nu`, `Nee: dat gebeurt pas bij een retour onder 30 °C`, `Nee: de retour van 56 °C is warmer dan het dauwpunt`],
      goed: 3,
      uitleg: `Condensatie begint pas als het water in de warmtewisselaar onder het dauwpunt blijft. Bij lambda 1,3 is dat circa 54 °C, dus 56 °C is te warm. De 59 °C geldt bij lambda 1,0, niet bij de gangbare instelling, en ook de grens van 30 °C klopt niet: condensatie begint al onder het dauwpunt van circa 54 °C. Een condensatieketel condenseert alleen onder de juiste omstandigheden.`
    },
    {
      vraag: `Wat gebeurt er met het dauwpunt als de luchtovermaat toeneemt van lambda 1,1 naar lambda 1,5?`,
      opties: [`Het stijgt van circa 51 naar circa 57 °C`, `Het blijft gelijk, het hangt van het gas af`, `Het daalt van circa 57 naar circa 51 °C`, `Het hangt alleen van gasdruk en gassoort af`],
      goed: 2,
      uitleg: `Meer lucht verdunt de waterdamp in het rookgas: de partiële druk daalt, dus het dauwpunt ook. Meer luchtovermaat betekent dus minder gemakkelijk condenseren en meer rookgas dat warmte afvoert.`
    },
    {
      vraag: `De fabrikant geeft voor een condenserende ketel een rendement van 104,4%. Klopt dat?`,
      opties: [`Onmogelijk: een rendement boven 100% bestaat niet, ook niet bij condensatie`, `Mogelijk op onderwaarde (Hi): dat is circa 94% op bovenwaarde`, `Alleen mogelijk op bovenwaarde (Hs): daar kan het rendement boven 100% komen`, `Alleen als er extra gas wordt bijgemengd om meer warmte te leveren`],
      goed: 1,
      uitleg: `Op Hi kan een condenserend toestel boven 100% komen, want de condensatiewarmte wordt benut maar staat niet in de noemer. Met Hi/Hs = 0,902 is 104,4% Hi gelijk aan circa 94% Hs (104,4 × 0,902 = 94,2; de fabrikant geeft 94,0%, het verschil is afronding). Op Hs is 100% niet te overschrijden.`
    },
    {
      vraag: `Het HR-label eist bij deellast 96,5% op de bovenwaarde. Hoeveel is dat op de onderwaarde (Hi/Hs = 0,902)?`,
      opties: [`107,0%`, `87,0%`, `96,5%`, `110,9%`],
      goed: 0,
      uitleg: `96,5 / 0,902 = 107,0% Hi. Dat is de betekenis van HR107: 107% op onderwaarde, niet op bovenwaarde. De 87,0% komt uit vermenigvuldigen in plaats van delen, de 110,9% is het theoretische maximum op Hi.`
    },
    {
      vraag: `Een toestel levert 17,8 kW nuttig vermogen bij 99,1% Hi en verbruikt dan 2,04 m³(n)/h. Hoeveel gas verbruikt het voor hetzelfde vermogen bij 104,4% Hi (8,792 kWh/m³(n) Hi)?`,
      opties: [`2,15 m³(n)/h`, `2,04 m³(n)/h`, `1,94 m³(n)/h`, `1,79 m³(n)/h`],
      goed: 2,
      uitleg: `17,8 / (1,044 × 8,792) = 1,94 m³(n)/h, dus 5% minder dan bij 99,1%. Een hoger rendement betekent minder gas, niet meer. De 2,15 komt uit de omgekeerde verhouding.`
    },
    {
      vraag: `Het theoretische maximum is 1,61 kg condensaat per m³(n) methaan. Waarom haal je dat in de praktijk niet?`,
      opties: [`De ketel maakt minder waterdamp dan de reactievergelijking voorschrijft`, `Het rookgas koelt niet genoeg af, dus condenseert maar een deel van de damp`, `Een deel van het condensaat verdampt in de sifon voor de afvoer`, `Alleen bij een hoge luchtovermaat ontstaat er condensaat, bij lage niet`],
      goed: 1,
      uitleg: `De reactie levert altijd 2 mol water per mol methaan, maar er condenseert alleen wat uit het rookgas wordt afgekoeld onder het dauwpunt. Bij G-gas en lambda 1,25 is dat 75% bij 30 °C, 56% bij 40 °C en 22% bij 50 °C.`
    }
  ],
  kaarten: [
    { voor: `Wat is het dauwpunt van het rookgas van aardgas bij lambda 1,0, 1,2 en 1,3?`, achter: `Circa 59 °C, 55,5 °C en 54 °C (rekenwaarden voor G25-achtig gas).` },
    { voor: `Waarom daalt het dauwpunt bij meer luchtovermaat?`, achter: `De waterdamp raakt verdund: lagere partiële druk, dus lager dauwpunt.` },
    { voor: `Hoeveel condensaat levert volledige condensatie per m³(n) methaan maximaal?`, achter: `1,61 kg (1,38 kg voor G25-achtig gas). In de praktijk 0,3 tot 1,1 liter per m³ bij 30 tot 50 °C rookgas.` },
    { voor: `Hoe zuur is condensaat van een gasketel?`, achter: `Zuur: Remeha noemt pH 3,5 tot 4,5 (grote gasboiler), Buildwise pH onder 5. Daarom weerstandsklasse W voor de afvoer.` },
    { voor: `Wat is de verhouding Hi/Hs voor aardgas en wat is het maximum op onderwaarde?`, achter: `Hi/Hs = 0,902. Het maximum op Hi is 1/0,902 = 110,9%. Op Hs niet boven 100%.` },
    { voor: `Wat betekent HR107?`, achter: `107% rendement op de onderwaarde (Hi), gelijk aan 96,5% op de bovenwaarde (deellasteis HR-label). Niet 107% op Hs.` },
    { voor: `Waarom kan het rendement op onderwaarde boven 100% komen?`, achter: `De condensatiewarmte (circa 10% van Hs, 11% van Hi) wordt benut maar staat niet in de noemer (Hi).` },
    { voor: `Hoe groot is het effect van de retourtemperatuur bij de Remeha Avanta 24c (voorbeeld)?`, achter: `97,9% Hs bij 30 °C retour (deellast) tegenover 84,9% Hs bij 60 °C retour (laaglast): 13 procentpunt verschil.` }
  ],
  bronnen: ['VER-16', 'VER-17', 'VER-19', 'VER-20', 'VER-21', 'VER-22', 'VER-23', 'GAS-08', 'GAS-09', 'GAS-10', 'REN-01', 'REN-03', 'REN-04', 'REN-05', 'REN-06', 'REN-08', 'REN-10', 'REN-21', 'REN-22', 'REN-23', 'RGA-47']
},

/* ------------------------------------------------------------------ 4.7 */
{
  id: 'm04l07',
  nr: '4.7',
  titel: 'CO in de woning: bronnen, melders en eerste maatregelen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kent de bronnen van CO in een woning, de werking van een CO-melder en de eerste maatregelen bij een alarm.',
  videos: [
    { taal: 'nl', titel: 'Een CO-melder plaatsen: hoe doe je dat? (Nederlandse Brandwonden Stichting)', yt: 'i67WbC9mAXI', duur: '±1 min, 2022' },
    { taal: 'nl', titel: 'Wat te doen bij koolmonoxidevergiftiging (Rode Kruis)', yt: 'wWbOnbP-DFo', duur: '±6 min, 2021' },
    { taal: 'en', titel: 'Carbon monoxide alarms: what to do if the alarm sounds (Seattle Fire Department, VS)', yt: 'Nd5dbMVvl_8', duur: '±2 min, 2021' }
  ],
  tekst: `
## Waar CO in een woning vandaan komt

Naast cv-ketels zijn er veel andere bronnen: afvoerloze geisers, gashaarden en open haarden, hout-, kolen- en pelletkachels, gasfornuizen, roken, waterpijp (ook shishalounges onder woningen), tafelbarbecues, opslag van houtpellets, kaarsen en wierook, en verkeer (circa 1 tot 2 ppm nabij drukke wegen). In woningen zonder bronnen is de gemiddelde CO-concentratie circa 0,4 ppm en in de buitenlucht onder 1 ppm. Bij afvoerloze toestellen meet je al snel 1 tot 2 ppm. Kiwa Technology schatte in 2022 dat de kans op een CO-incident bij een geiser ongeveer 20 keer groter is dan bij een cv-installatie. Hoe CO bij een cv-installatie ontstaat, staat in [les 4.4](les:m04l04).

## De CO-melder: wat hij wel en niet doet

Een melder volgens NEN-EN 50291 alarmeert niet direct. De norm, zoals de Gezondheidsraad hem weergeeft (uitgave 2010/A1:2012), eist:

| CO-concentratie | Wat de melder moet doen |
|---|---|
| 30 ppm | Gedurende 120 minuten geen alarm |
| 50 ppm | Alarm na minimaal 60 en uiterlijk 90 minuten |
| 100 ppm | Alarm na minimaal 10 en uiterlijk 40 minuten |
| 300 ppm | Alarm binnen 3 minuten |

NEN-EN 50291 is een niet-wettelijke norm waaraan de NVWA melders toetst. Melders op de Nederlandse markt alarmeren pas vanaf circa 50 ppm, de gevoeligste tonen vanaf 10 ppm een waarde op het display. Reken het na: bij 30 ppm mag de melder 2 uur lang zwijgen, terwijl 30 ppm ongeveer de WHO-richtwaarde voor 1 uur is (35 mg/m³) en ruim boven de WHO-waarde van circa 9 ppm voor 8 uur ligt.

!!! kern Een stille melder is geen bewijs dat de ruimte veilig is
Een melder beschermt tegen acuut gevaar, niet tegen lage concentraties over langere tijd. De Onderzoeksraad voor Veiligheid constateerde bovendien dat de melder niet altijd werkte. Meten met een eigen instrument blijft dus nodig, en een melder vervangt dat niet. Hoe je een melder test en wanneer je hem vervangt, staat in de handleiding van de melder en verschilt per model.
!!!

## Adviseren en plaatsen

Rijksoverheid en Brandweer presenteren een CO-melder als aanbeveling. Een wettelijke plicht voor een melder in woningen is in de bronnen die voor deze cursus zijn nagelopen niet gevonden: controleer dat voor je het aan een klant vertelt. Het schema (BRL 6000-25) verplicht wel om te adviseren, en niet om te plaatsen. Je adviseert een melder in de opstellingsruimte in deze gevallen:

1. Een open of afvoerloos toestel zonder melder
2. Een collectieve rookgasafvoer (CLV) zonder geschiktheidsverklaring
3. Als niet te bewijzen is dat de installatie aan alle eisen voldoet, bijvoorbeeld bij twijfel over de kwaliteit van de rookgasafvoer: dan adviseer je ook nader onderzoek

Bij plaatsing raadpleeg je het advies van Brandweer Nederland, en je legt vast of je een melder hebt geadviseerd (ja of nee). Het Brandweeradvies: koop alleen een melder met NEN-EN 50291 op de verpakking. Hang hem in de ruimte met het toestel aan het plafond, op 1 tot 3 m horizontale afstand van de CO-bron en minimaal 30 cm van muren. In de slaapkamer hang je hem op ademhoogte. Een combinatiemelder voor rook en CO hoort alleen in de ruimte met het toestel. Bij toestellen op een CLV noemt de BRL een melder op minder dan 2 m afstand.

## Eerste maatregelen bij een alarm

!!! gevaar Bij een CO-alarm: waarschuwen, naar buiten, 112
Bij een CO-alarm waarschuw je iedereen, ga je direct naar buiten en bel je 112 (Brandweer Nederland). Bij acuut gevaar of een ernstig vergiftigde bewoner bel je altijd 112. Bij CO boven 400 ppm in de ruimte schakelt de gemeente volgens het handelingskader de brandweer in en wordt zo nodig ontruimd. Melden en oorzaak zoeken komt daarna.
!!!

Wat je als certificaathouder daarna doet (het toestel buiten bedrijf stellen, melden aan vier partijen, vastleggen) staat in [les 1.6](les:m01l06). Voor je eigen veiligheid neem je bij voorkeur een persoonlijke CO-veiligheidsmeter mee. De BRL 6000-25 noemt die als voorkeursinstrument naast de rookgasmeter.
`,
  checklist: [
    'Ik kan de belangrijkste CO-bronnen in een woning noemen',
    'Ik ken de alarmtijden van NEN-EN 50291 en weet waarom een stille melder geen bewijs van veiligheid is',
    'Ik weet in welke gevallen ik een CO-melder adviseer en dat ik dat vastleg',
    'Ik weet waar een melder hoort te hangen volgens Brandweer Nederland',
    'Ik weet wat de eerste maatregelen bij een CO-alarm zijn'
  ],
  quiz: [
    {
      vraag: `Volgens NEN-EN 50291 mag een CO-melder bij 30 ppm gedurende 120 minuten geen alarm geven. Wat volgt daaruit voor een bewoner met een melder in huis?`,
      opties: [`Een stille melder sluit CO-waarden zoals 30 ppm niet uit`, `De melder is defect als hij bij 30 ppm niet alarmeert`, `30 ppm is voor iedereen ongevaarlijk, ook bij lange blootstelling`, `Een stille melder betekent dat er geen CO in de ruimte zit`],
      goed: 0,
      uitleg: `De norm laat melders bewust zwijgen bij 30 ppm gedurende 120 minuten en eist alarm pas bij hogere waarden of langere tijd. 30 ppm is ongeveer de WHO-richtwaarde voor 1 uur, dus stilte is geen bewijs van veiligheid. De melder is bij 30 ppm niet defect.`
    },
    {
      vraag: `In een ruimte is 100 ppm CO. Na 5 minuten heeft de melder nog niet gealarmeerd. Is de melder defect?`,
      opties: [`Ja: een melder moet altijd direct alarmeren, ook bij lage concentraties`, `Ja: na 3 minuten moet elke melder bij elke concentratie alarm geven`, `Nee: bij 100 ppm komt het alarm na minimaal 10 en uiterlijk 40 minuten`, `Nee: een melder alarmeert alleen boven 300 ppm, daaronder blijft hij stil`],
      goed: 2,
      uitleg: `Bij 100 ppm eist de norm alarm na minimaal 10 en uiterlijk 40 minuten. De 3 minuten gelden bij 300 ppm. Na 5 minuten is de melder dus nog binnen de norm.`
    },
    {
      vraag: `Je onderhoudt een open toestel in een woning zonder CO-melder. Wat verlangt BRL 6000-25 van jou?`,
      opties: [`Een melder adviseren en vastleggen dat je dat hebt gedaan`, `De melder zelf plaatsen en aansluiten in de opstellingsruimte`, `Het toestel afkeuren zolang er geen melder in de ruimte hangt`, `Niets: een melder is alleen de zaak van de bewoner`],
      goed: 0,
      uitleg: `Bij een open of afvoerloos toestel zonder melder adviseer je er een. Het schema eist het adviseren en het vastleggen ervan, en niet het plaatsen of afkeuren. Bij plaatsing raadpleeg je het Brandweeradvies.`
    },
    {
      vraag: `Waar hang je volgens het Brandweeradvies een CO-melder in de ruimte met het toestel?`,
      opties: [`Laag bij de vloer, op 1 tot 3 m horizontale afstand van de bron en van muren`, `In de meterkast, zodat hij bij de gasmeter meteen alarmeert bij een lek`, `Aan het plafond, 1 tot 3 m horizontaal van de bron en minimaal 30 cm van muren`, `Vlak boven het toestel, tegen de muur, zodat hij eerst de rookgassen meet`],
      goed: 2,
      uitleg: `Het Brandweeradvies is plafond, 1 tot 3 m horizontaal van de bron en minimaal 30 cm van muren. In een slaapkamer hang je hem op ademhoogte. Tegen de muur of vlak boven het toestel geeft geen goede plaatsing volgens dat advies.`
    },
    {
      vraag: `Een CO-melder gaat af in een woning. Wat zijn de eerste maatregelen?`,
      opties: [`De melder resetten en de installateur bellen als hij opnieuw afgaat`, `Iedereen waarschuwen, direct naar buiten gaan en 112 bellen`, `Eerst het toestel zelf proberen uit te zetten en te repareren`, `Ramen openzetten, binnen blijven en wachten tot de melder stopt`],
      goed: 1,
      uitleg: `Brandweer Nederland adviseert bij alarm iedereen te waarschuwen, direct naar buiten te gaan en 112 te bellen. Resetten of repareren houdt mensen in de gevarenzone.`
    },
    {
      vraag: `Wat is een gebruikelijke achtergrondwaarde voor CO in een woning zonder bronnen?`,
      opties: [`Circa 0,4 ppm (buiten onder 1 ppm)`, `5 ppm, de grens voor nader onderzoek`, `20 ppm, de grens voor de meldplicht`, `9 ppm, de WHO-richtwaarde voor 8 uur`],
      goed: 0,
      uitleg: `In woningen zonder bronnen is de gemiddelde CO-concentratie circa 0,4 ppm, buiten onder 1 ppm. De 5 en 20 ppm zijn de grenzen uit het schema voor de ruimte, en 9 ppm is de WHO-richtwaarde voor 8 uur.`
    }
  ],
  kaarten: [
    { voor: `Wat eist NEN-EN 50291 aan alarmtijden van een CO-melder?`, achter: `30 ppm: geen alarm binnen 120 min. 50 ppm: alarm na 60 tot 90 min. 100 ppm: na 10 tot 40 min. 300 ppm: binnen 3 min.` },
    { voor: `Vanaf welke concentratie alarmeren melders op de Nederlandse markt?`, achter: `Pas vanaf circa 50 ppm. De gevoeligste tonen vanaf 10 ppm een waarde op het display.` },
    { voor: `In welke gevallen adviseert de installateur een CO-melder volgens BRL 6000-25?`, achter: `Bij een open of afvoerloos toestel zonder melder, bij een CLV zonder geschiktheidsverklaring, en als niet te bewijzen is dat de installatie aan alle eisen voldoet.` },
    { voor: `Is een CO-melder in een woning wettelijk verplicht?`, achter: `In de nagelopen bronnen (Rijksoverheid, Brandweer) is het een aanbeveling. Een wettelijke plicht voor woningen is niet gevonden. Het schema verplicht alleen adviseren.` },
    { voor: `Waar hang je een CO-melder in de ruimte met het toestel?`, achter: `Aan het plafond, 1 tot 3 m horizontaal van de bron en minimaal 30 cm van muren. In de slaapkamer op ademhoogte.` },
    { voor: `Wat doe je bij een CO-alarm?`, achter: `Iedereen waarschuwen, direct naar buiten gaan en 112 bellen.` },
    { voor: `Noem vijf CO-bronnen in een woning naast de cv-ketel.`, achter: `Afvoerloze geiser, gashaard of open haard, hout- of pelletkachel, gasfornuis, roken, waterpijp, tafelbarbecue, kaarsen en wierook.` },
    { voor: `Wat is de achtergrond-CO in een woning zonder bronnen?`, achter: `Circa 0,4 ppm, buiten onder 1 ppm. Bij afvoerloze toestellen meet je al snel 1 tot 2 ppm.` }
  ],
  bronnen: ['CO-09', 'CO-17', 'CO-18', 'CO-19', 'CO-20', 'CO-21', 'CO-23', 'KLA-05', 'KLA-06', 'RGA-33', 'WET-51', 'WET-57', 'WET-61', 'WET-81', 'WET-87']
}
  ]
});
