/* ==========================================================================
   m05.js - Module 5: De HR-ketel van binnen
   Lessen 5.1 t/m 5.8 zijn geschreven op basis van project/docs/feiten/03 (KET, HYD, TAP, ELE),
   02 (GAS, VER, REN) en 05 (INS, MET, ONT, STO, MRK). Waarden per merk en model staan er als
   voorbeeld met model erbij. De opbouw van het gasblok (veiligheidsafsluiters, pneumatisch of
   elektronisch) en de veiligheidstijd per merk zijn niet als feit opgenomen (zie register 03, open vragen 1 en 2).
   Pomp deblokkeren: STO-09 en MRK-15 noemen de handeling, een veilige procedure staat niet in het register;
   de les verwijst daarom naar de handleiding van het toestel en naar spanningsloos maken (ELE-05, MET-25).
   ========================================================================== */

CURSUS.addModule({
  id: 'm05',
  nr: 5,
  deel: 1,
  titel: 'De HR-ketel van binnen',
  ondertitel: 'Begrijp de keten, dan hoef je codes niet uit je hoofd te leren.',
  niveau: 'Gemiddeld',
  studietijd: 10,
  intro: 'Hoe een moderne HR-ketel werkt: brander, gasblok, ontsteking, vlambewaking, warmtewisselaar en de startvolgorde. Wie de ketel als keten begrijpt, hoeft geen storingscodes uit het hoofd te leren.',
  inleiding: [
    'Een HR-ketel lijkt een zwarte doos, maar er stromen maar vier dingen doorheen: gas, verbrandingslucht, water en rookgas. Op twee plekken komen ze samen: gas en lucht in het mengsel voor de brander (bij de Remeha Calenta in de venturi) en rookgas en water in de warmtewisselaar. Wie die keten kent, weet bij een storing waar hij moet zoeken en waarom een meetwaarde wel of niet klopt.',
    'In deze module loop je de ketel van voren naar achteren door: van de gasaansluiting en de brander tot de sensoren en de startvolgorde. Waarden als ionisatiestroom, O2 bij vollast of testdruk verschillen per fabrikant en model. Daarom staan ze hier steeds als voorbeeld uit een handleiding, met merk en model erbij. Voor het toestel waaraan je werkt geldt de handleiding van dat toestel. Regeling en OpenTherm komen aan bod in module 6.',
    'De voorbeelden komen uit deze handleidingen: Remeha Calenta 25s, 28c, 35s en 40c (installatie- en servicehandleiding 2017), Remeha Calenta Ace (25ds, 28c, 35ds en 40c), Remeha Tzerra Ace 24C, 28C en 39C (servicehandleiding), Remeha Avanta (uitgaven 2014, 2019 en versie 13 van 2020), Intergas Kombi Kompakt HRE (installatievoorschriften 2018 en 2021) en Prestige (2020), ATAG i-Serie (uitgave 2018) en XL (2016), Nefit ProLine NxT HRC 24/CW3 en CW4 (uitgave 2014), Vaillant ecoTEC plus VHR en Bosch Condens 7800i W (serviceanleiding). Bij nieuwere toestellen of andere uitgaven kunnen de waarden afwijken.'
  ],
  leerdoelen: [
    'De vier stromen door een ketel (gas, lucht, water, rookgas) beschrijven',
    'De werking van brander, venturi en gas-luchtverhouding uitleggen',
    'Gasblok, ontsteking en vlambewaking en hun veiligheidsfunctie uitleggen',
    'De rol van warmtewisselaar, pomp, 3-wegklep en sensoren beschrijven',
    'De startvolgorde van een ketel stap voor stap doorlopen'
  ],
  examen: [
    {
      vraag: `Een ketel op G20 verbruikt 3 m3(n) gas per uur. Voor G20 is 9,55 m3 lucht per m3 gas nodig voor volledige verbranding. Hoeveel lucht heeft de ketel minimaal nodig?`,
      opties: [`Ongeveer 3,2 m3(n) per uur`, `Ongeveer 28,7 m3(n) per uur`, `Ongeveer 34,4 m3(n) per uur`, `Ongeveer 286 m3(n) per uur`],
      goed: 1,
      uitleg: `3 x 9,55 = 28,65 m3(n) per uur bij lambda 1,0. De 34,4 hoort bij lambda 1,2 (28,65 x 1,2), de luchtovermaat waarmee een ketel in de praktijk brandt. Het minimum is dus 28,7. De 286 is een komma die verkeerd staat.`
    },
    {
      vraag: `Een ketel brandt met sterk verhoogde luchtovermaat. Wat gebeurt er met het dauwpunt van het rookgas bij dezelfde retourtemperatuur?`,
      opties: [
        `Het dauwpunt stijgt, want er is meer waterdamp`,
        `Het dauwpunt blijft gelijk, het hangt alleen van de retour af`,
        `Het dauwpunt stijgt en de ketel condenseert eerder`,
        `Het dauwpunt daalt doordat de waterdamp wordt verdund, dus er is minder condensatie`
      ],
      goed: 3,
      uitleg: `Berekend daalt het dauwpunt van ongeveer 59 °C bij lambda 1,0 naar 54 °C bij lambda 1,3 en 46 °C bij lambda 2,0. Meer lucht verdunt de waterdamp in het rookgas. Bij een retour dicht bij het dauwpunt scheelt dat direct in de condensatie.`
    },
    {
      vraag: `Je meet in het droge rookgas van een ketel op G20 5,3% O2. Welke luchtovermaat hoort daarbij?`,
      opties: [`Lambda 1,3`, `Lambda 1,2`, `Lambda 1,4`, `Lambda 1,1`],
      goed: 0,
      uitleg: `In de Kiwa-tabel voor G20 hoort lambda 1,3 bij 5,26% O2 en 8,80% CO2. Lambda 1,2 hoort bij 3,82% O2 en lambda 1,4 bij 6,47%.`
    },
    {
      vraag: `Een Remeha Calenta 35s heeft een minimale belasting van 7,3 kW. De warmtevraag van de woning is 5 kW. Wat doet de ketel?`,
      opties: [
        `Hij moduleert door naar 5 kW`,
        `Hij gaat in storing`,
        `Hij slaat aan en uit, omdat 5 kW onder de minimale belasting ligt`,
        `Hij schakelt over naar vollast en blijft daar`
      ],
      goed: 2,
      uitleg: `Onder de minimale belasting kan de ketel niet verder moduleren en pendelt hij. Het is geen storing en de ketel gaat niet op vollast.`
    },
    {
      vraag: `Een ATAG i-Serie eist een dynamische gasvoordruk hoger dan 20 mbar. Je meet statisch 27 mbar en dynamisch op vollast 19 mbar. Wat is de juiste conclusie?`,
      opties: [
        `In orde, want de statische druk is hoger dan 20 mbar`,
        `Te laag: de dynamische voordruk ligt onder de eis, dus eerst de oorzaak in de gastoevoer vaststellen`,
        `De voordruk verhoog je met een afstelschroef op het gasblok`,
        `Dit speelt alleen bij G20`
      ],
      goed: 1,
      uitleg: `De eis geldt dynamisch. Op vollast valt de druk het diepst, en 19 mbar is te laag. De voordruk regel je niet met het gasblok: die komt uit de toevoer.`
    },
    {
      vraag: `Je wilt een sterkteproef van 5 bar op de gasleiding doen terwijl een Vaillant ecoTEC plus VHR aangesloten is. Wat klopt?`,
      opties: [
        `Toestelkraan sluiten of het toestel loskoppelen: Vaillant staat aangesloten maximaal 110 mbar toe (afleiding, per model verifiëren)`,
        `Dat kan zolang de brander uit staat`,
        `Dat kan, want het toestel is ontworpen voor de sterkteproef van de BRL`,
        `Dat kan als het gasblok nieuw is`
      ],
      goed: 0,
      uitleg: `Boven de testdruk van de fabrikant kan het gasblok beschadigen. De sterkteproef van 5 bar hoort bij het leidingwerk, niet bij het aangesloten toestel.`
    },
    {
      vraag: `Een Remeha Calenta geeft na 1 minuut 3,4 µA bij vollast en 2,4 µA bij laaglast. Wat doe je?`,
      opties: [
        `Niets, de vollastwaarde ligt boven 3 µA`,
        `Het gasblok vervangen, want een lage ionisatiestroom betekent dat er te weinig gas komt en het gasblok dus defect is, ook als de voordruk klopt`,
        `Alleen de gasvoordruk verhogen`,
        `De elektrode reinigen of vervangen en de oorzaak zoeken, want Remeha eist controle in vol- en laaglast en de laaglast ligt onder 3 µA`
      ],
      goed: 3,
      uitleg: `Remeha noemt reinigen of vervangen bij minder dan 3 µA, gemeten in vollast en laaglast. Eén goede waarde is niet genoeg. Zoek daarna ook waarom de stroom laag is.`
    },
    {
      vraag: `Een Vaillant ecoTEC plus VHR liep, de vlam viel uit tijdens het bedrijf en de herontsteking mislukte. Welke code hoort daarbij?`,
      opties: [`F.022`, `F.028`, `F.029`, `F.347`],
      goed: 2,
      uitleg: `F.029 is de ontsteking na een vlamuitval tijdens het bedrijf. F.028 is het vlamsignaal dat in de ontstekingsfase niet wordt herkend, F.022 is te weinig water en F.347 is condensaat in de verbrandingskamer.`
    },
    {
      vraag: `De Remeha Avanta 24c haalt bij deellast en 30 °C retour 97,9% op bovenwaarde, en 108,7% op onderwaarde. Waarom is het tweede getal hoger?`,
      opties: [
        `Bij onderwaarde meet je bij een lagere temperatuur`,
        `De onderwaarde is ongeveer 0,902 keer de bovenwaarde: dezelfde nuttige warmte gedeeld door een kleinere noemer geeft een hoger percentage`,
        `De bovenwaarde telt de condensatiewarmte niet mee, dus dezelfde nuttige warmte geeft op bovenwaarde een lager percentage dan op onderwaarde`,
        `De ketel haalt extra energie uit de aanzuiglucht`
      ],
      goed: 1,
      uitleg: `Hi/Hs is ongeveer 0,902 voor aardgas. De verhouding 97,9 / 108,7 komt daar op uit. Er verandert niets aan de ketel: alleen de referentie.`
    },
    {
      vraag: `Een 25 kW ketel warmt het water 20 K op (bijvoorbeeld 70 °C aanvoer en 50 °C retour). Welk debiet is nodig?`,
      opties: [`Ongeveer 540 l/h`, `Ongeveer 860 l/h`, `Ongeveer 1290 l/h`, `Ongeveer 1075 l/h`],
      goed: 3,
      uitleg: `25.000 / (1,163 x 20) = ongeveer 1075 l/h. 860 l/h is de uitkomst voor 20 kW. 540 l/h hoort bij een delta T van 40 K.`
    },
    {
      vraag: `Het display van een Bosch Condens 7800i W laat een aanvoer van ongeveer 80 °C zien. Je maakt het toestel spanningsloos en meet volgens de handleiding aan de aanvoersensor 33.400 ohm. Wat concludeer je?`,
      opties: [
        `De sensor, de connector of de bedrading is verdacht: 33.404 ohm hoort bij 0 °C, bij 80 °C hoort 1.260 ohm`,
        `Het gasblok moet worden vervangen, want de ketel krijgt te weinig gas om de aanvoer op temperatuur te brengen`,
        `De pomp draait te langzaam, want het water stroomt niet snel genoeg langs de aanvoersensor`,
        `Alles is normaal: de weerstand van een NTC stijgt met de temperatuur, dus 33.400 ohm is een hoge waarde`
      ],
      goed: 0,
      uitleg: `Een NTC heeft bij lage temperatuur een hoge weerstand en bij hoge temperatuur een lage. 33.404 ohm hoort bij 0 °C. Welk van de drie (sensor, connector, bedrading) het is, weet je nog niet: meet en vergelijk verder voordat je iets vervangt. De weerstandstabel is van dit model: bij andere toestellen kijk je in hun eigen tabel.`
    },
    {
      vraag: `Een Remeha Calenta toont status 1, sub-status 1 'anti-pendel' en start niet direct. Wat is dit?`,
      opties: [
        `Een storing van de pomp`,
        `Een vergrendeling waarvoor een reset nodig is`,
        `Geen storing: de anti-pendelfunctie laat de ketel niet te snel opnieuw starten`,
        `Een sensorfout: de aanvoersensor geeft een onjuiste waarde en de ketel wacht daarom met starten`
      ],
      goed: 2,
      uitleg: `Anti-pendel is een wachttijd. Wie hier gaat resetten of onderdelen vervangt, lost iets op dat geen fout is. Lees eerst de status in de handleiding.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 5.1 */
{
  id: 'm05l01',
  nr: '5.1',
  titel: 'Het hoofdstromingspad: gas, lucht, water en rookgas',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt de vier stromen door een HR-ketel beschrijven en aanwijzen waar ze elkaar ontmoeten.',
  videos: [
    { taal: 'nl', titel: 'Hoe werkt een HR-ketel? (Van Gemert Installatiegroep)', yt: 'Cd5O2a4qabo', duur: '±6 min, 2018' },
    { taal: 'nl', titel: 'Animatie warmtewisselaar cv-ketel (ATAG Verwarming Nederland)', yt: 'IE_Cquu4giI', duur: '±1 min, 2018' },
    { taal: 'en', titel: 'How a condensing boiler works (MEP Academy)', yt: 'oRr3q3IraRU', duur: '±9 min, 2022' }
  ],
  tekst: `
## Vier stromen, twee ontmoetingen

Een HR-ketel bestaat uit tientallen onderdelen, maar er stromen maar vier dingen doorheen: gas, verbrandingslucht, water en rookgas. Twee plekken zijn beslissend. Gas en lucht komen samen en er ontstaat het brandbare mengsel: bij de Remeha Calenta (handleiding 2017) gebeurt dat in de venturi, maar de opbouw verschilt per merk. In de warmtewisselaar komen rookgas en water samen, gescheiden door een wand, en gaat de warmte van het een naar het ander. Wie dit plaatje in zijn hoofd heeft, kan bij elke klacht beginnen met de vraag: welke van de vier stromen klopt niet?

| Stroom | Waar komt hij binnen | Wat gebeurt ermee | Waar gaat hij heen |
|---|---|---|---|
| Gas | Gasaansluiting en gasblok | Wordt bij de lucht gevoegd (Remeha Calenta: in de venturi) | Brander |
| Lucht | Luchttoevoer, aangezogen door de ventilator | Wordt met het gas gemengd | Brander, daarna als deel van het rookgas verder |
| Water | Retour van de installatie | De pomp voert het langs de warmtewisselaar, waar het warmte opneemt | Aanvoer naar de radiatoren of, bij een combiketel, naar de tapwaterwisselaar |
| Rookgas | Ontstaat bij de brander | Geeft warmte af aan het water | Condensaat naar de sifon, rookgas naar de afvoer |

## Het pad van gas en lucht

Volgens Remeha zuigt in de Calenta (handleiding 2017) de ventilator de lucht aan, wordt het gas in de venturi aan de inlaatzijde van de ventilator ingespoten en gaat het gas-luchtmengsel naar de brander bovenin de warmtewisselaar. Het mengsel wordt dus gemaakt voordat het de brander bereikt: dat is wat 'voorgemengd' betekent. Dit is een voorbeeld van één merk en model: de opbouw verschilt per fabrikant. Hoe gas en lucht op elkaar worden afgestemd, lees je in [les 5.2](les:m05l02).

## Het pad van water en rookgas

Het rookgas geeft zijn warmte af aan het cv-water. Komt het rookgas onder het condensatiepunt (volgens Remeha ongeveer 55 °C voor dit toestel), dan condenseert de waterdamp in het onderste deel van de warmtewisselaar. De latente warmte gaat naar het cv-water en het condenswater loopt via een sifon af. Het condensatiepunt is geen vast getal: berekeningen geven een dauwpunt van ongeveer 59 °C bij lambda 1,0 en ongeveer 54 °C bij lambda 1,3. Hoe koud het water terugkomt, bepaalt dus of de ketel kan condenseren.

De sifon werkt als waterslot. Remeha vraagt bij de Calenta de sifon vóór de inbedrijfstelling met water te vullen tot de markeringsstreep, om te voorkomen dat rookgassen in het vertrek komen. Het rookgas is bovendien nat: de afvoer van een condenserende ketel heeft een weerstandsklasse tegen condensaten W nodig (volgens het installatievoorschrift van de Intergas Kombi Kompakt HRE, 2018). Zie [module 8](module:m08).

!!! kern Waar de stromen elkaar raken
Gas en lucht mengen voor de brander (Remeha Calenta: in de venturi), rookgas en water wisselen warmte uit in de warmtewisselaar. Een storing zit in een van de vier stromen of op een van die twee plekken: dat is je eerste ordening.
!!!

## Rekenvoorbeeld: hoeveel lucht slikt een ketel?

Volledige verbranding van methaan is CH4 + 2 O2 -> CO2 + 2 H2O + warmte. Per m3 methaan is dus 2 m3 zuurstof nodig. Lucht bevat 20,94% zuurstof. Voor G20 (bijna zuiver methaan) geldt daarom:

1. Zuurstofbehoefte: 2 m3 per m3 gas.
2. Luchtbehoefte: 2 / 0,2094 = 9,55 m3 lucht per m3 gas.
3. Voor gas met 86% methaan en 14% stikstof (G25-achtig) is dat 8,21 m3 lucht per m3 gas.

Neem de Remeha Avanta 24c (handleiding versie 13, 2020) bij 80/60 °C: 17,8 kW nuttig vermogen bij 99,1% rendement op onderwaarde geeft ongeveer 2,04 m3(n) gas per uur (m3(n) is het volume bij 0 °C en 101,325 kPa). De theoretische luchtbehoefte is dan 2,04 x 8,21 = 16,7 m3(n) per uur. Kiwa meet het rendement bij een luchtovermaat van lambda 1,2: dan is de luchtstroom 16,7 x 1,2 = 20,1 m3(n) per uur. Per m3(n) gas gaan er dus minstens 8 tot 10 m3(n) lucht door de ketel: luchttoevoer en rookgasafvoer zijn een groot deel van wat een ketel verwerkt. In [les 1.1](les:m01l01) staat de rookgasafvoer bovenaan de CO-meldingen; wat daar de oorzaak van is, volgt niet uit dit rekenvoorbeeld.

## Praktijkgeval: wel vonk, geen vlam

De Remeha Avanta (handleiding 2019) noemt bij 'wel ontstekingsvonk maar geen vlam' onder meer: gaskraan, gasvoedingsdruk, ontluchte gasleiding, lucht-/rookgasleiding, gevulde en niet verstopte sifon, netvoeding, elektrode en O2 op vol- en laaglast. Leg die lijst op de vier stromen en je ziet de keten:

- Gas: kraan, voedingsdruk, ontluchting van de leiding.
- Lucht en rookgas: luchttoevoer, afvoer, sifon.
- Elektra: netvoeding.
- Brander en afstelling: elektrode, O2 bij vol- en laaglast.

Wie alleen aan de elektrode denkt, vervangt onderdelen die niet stuk zijn. Bij een combiketel komt er nog een route bij, de platenwarmtewisselaar voor tapwater: zie [les 5.6](les:m05l06).
`,
  checklist: [
    'Ik kan de vier stromen door een ketel opnoemen en aanwijzen waar ze samenkomen',
    'Ik kan uitleggen waar condensaat ontstaat en waarom de sifon gevuld moet zijn',
    'Ik kan uit een gasverbruik in m3(n) per uur de luchtbehoefte schatten',
    'Ik orden een storingslijst per stroom in plaats van op volgorde van gemak'
  ],
  quiz: [
    {
      vraag: `In de Remeha Calenta zuigt de ventilator lucht aan. Waar wordt het gas aan die lucht toegevoegd?`,
      opties: [
        `In de brander, op het moment van ontsteking`,
        `In de venturi aan de inlaatzijde van de ventilator`,
        `In de warmtewisselaar, naast het cv-water`,
        `In de sifon, voordat het rookgas naar de afvoer wordt geleid`
      ],
      goed: 1,
      uitleg: `Volgens Remeha wordt het gas in de venturi aan de inlaatzijde van de ventilator ingespoten en gaat het mengsel daarna naar de brander. Bij een voorgemengde brander wordt het gas dus vóór de brander bij de lucht gevoegd. Wie denkt dat gas en lucht pas in de brander samenkomen, beschrijft een ander brandertype dan deze ketel gebruikt. Dit is een voorbeeld van één merk en model.`
    },
    {
      vraag: `Je hebt de sifon van een Remeha Calenta schoongemaakt en teruggezet. Wat doe je voordat de ketel weer brandt?`,
      opties: [
        `Niets, de sifon vult zich vanzelf met condensaat tijdens de eerste warmtevraag`,
        `De sifon droog laten, want water in de sifon veroorzaakt corrosie`,
        `De sifon half vullen, zodat het condensaat kan doorstromen`,
        `De sifon met water vullen tot de markeringsstreep`
      ],
      goed: 3,
      uitleg: `Remeha vraagt de sifon vóór de inbedrijfstelling te vullen tot de markeringsstreep, zodat rookgassen niet in het vertrek komen. Het waterslot moet er zijn voordat de ketel brandt: het helpt niet dat er later condensaat in komt.`
    },
    {
      vraag: `Een Remeha Avanta 24c gebruikt bij 80/60 °C ongeveer 2,04 m3(n) gas per uur. Voor dit gas is 8,21 m3 lucht per m3 gas nodig. Hoeveel lucht heeft de ketel minimaal nodig voor volledige verbranding?`,
      opties: [
        `Ongeveer 2,04 m3(n) per uur`,
        `Ongeveer 1,7 m3(n) per uur`,
        `Ongeveer 16,7 m3(n) per uur`,
        `Ongeveer 167 m3(n) per uur`
      ],
      goed: 2,
      uitleg: `2,04 x 8,21 = 16,7 m3(n) per uur bij lambda 1,0, de theoretische luchtbehoefte. In de praktijk brandt een ketel met luchtovermaat: bij lambda 1,2 is het ongeveer 20,1 m3(n) per uur. De optie van 167 is een komma die op de verkeerde plek staat.`
    },
    {
      vraag: `Een Remeha Avanta geeft een vonk maar geen vlam. Welke controle hoort bij de stroom rookgas en condensaat?`,
      opties: [
        `De gasvoedingsdruk meten met het toestel in bedrijf`,
        `De gasleiding ontluchten via het voordrukmeetpunt`,
        `De netvoeding en de zekering van de ketel controleren`,
        `Controleren of de sifon gevuld en niet verstopt is`
      ],
      goed: 3,
      uitleg: `In de tabel van de Avanta staat de gevulde, niet verstopte sifon naast de lucht-/rookgasleiding. Gasvoedingsdruk en ontluchting horen bij de stroom gas, de netvoeding bij de elektra. Zo laat de keten je eerst kiezen welke stroom je onderzoekt.`
    },
    {
      vraag: `Een ketel draait het hele stookseizoen op een retourtemperatuur van ongeveer 60 °C. Wat volgt uit de fabrikantcijfers van de Remeha Avanta 24c (rendement op bovenwaarde)?`,
      opties: [
        `Het rookgas blijft boven het condensatiepunt en het rendement is duidelijk lager: 84,9% (laaglast, 60 °C retour) tegen 97,9% (deellast, 30 °C retour)`,
        `Het rendement blijft gelijk, want alleen de brander bepaalt het rendement`,
        `Er ontstaat extra condensaat en dus een hoger rendement`,
        `De ketel valt in storing omdat het condensatiepunt niet wordt bereikt`
      ],
      goed: 0,
      uitleg: `Het condensatiepunt ligt volgens Remeha (bij de Calenta) rond 55 °C. Bij 60 °C retour blijft het rookgas daarboven, dus gaat de condensatiewarmte verloren. Het verschil is 13 procentpunten (de meetcondities zijn laaglast tegen deellast, maar het beeld is duidelijk). Een ketel die niet condenseert, valt niet in storing: hij werkt alleen minder zuinig.`
    }
  ],
  kaarten: [
    { voor: `In welke component komen gas en lucht samen bij de Remeha Calenta (voorbeeld)?`, achter: `In de venturi aan de inlaatzijde van de ventilator. Het mengsel gaat daarna naar de brander.` },
    { voor: `Onder welke rookgastemperatuur condenseert de Remeha Calenta volgens de fabrikant?`, achter: `Onder ongeveer 55 °C. De waterdamp condenseert dan in het onderste deel van de warmtewisselaar.` },
    { voor: `Waarom vul je de sifon vóór de inbedrijfstelling?`, achter: `Om te voorkomen dat rookgassen in het vertrek komen (Remeha Calenta). De sifon moet gevuld zijn voordat de ketel brandt.` },
    { voor: `Hoeveel m3 lucht heeft 1 m3 methaan (G20) minimaal nodig?`, achter: `9,55 m3 lucht (2 m3 zuurstof gedeeld door 0,2094).` },
    { voor: `Welke weerstandsklasse tegen condensaten hoort bij de rookgasafvoer van een condenserende ketel?`, achter: `Klasse W (natte condensatie), zoals Intergas in het installatievoorschrift van de Kombi Kompakt HRE noemt.` }
  ],
  bronnen: ['KET-01', 'KET-21', 'KET-22', 'VER-01', 'VER-02', 'VER-03', 'VER-09', 'VER-16', 'VER-23', 'REN-08', 'REN-23', 'STO-05', 'TAP-01']
},

/* ------------------------------------------------------------------ 5.2 */
{
  id: 'm05l02',
  nr: '5.2',
  titel: 'Brander, venturi en gas-luchtverhouding',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe een voorgemengde brander werkt en hoe de ketel gas en lucht op elkaar afstemt.',
  videos: [
    { taal: 'nl', titel: 'HR-ketel afstellen op O2 en CO2 (Loodgieter Den Haag Stad)', yt: 'oPsXD-NRFVI', duur: '±21 min, 2023' },
    { taal: 'nl', titel: 'Werking van een modulerend gasblok (Patrik De Paep)', yt: 'dB6QpokTyl4', duur: '±5 min, 2021' },
    { taal: 'en', titel: 'How to use a flue gas analyser and understand the results, deel 1 (Tomkat Gas Training, VK)', yt: 'ZIiLGeFcjXI', duur: '±28 min, 2019' }
  ],
  tekst: `
## Waarom gas en lucht op elkaar moeten passen

Bij een voorgemengde brander wordt het gas in de venturi bij de lucht gevoegd en gaat het mengsel als geheel naar de brander (Remeha Calenta, zie [les 5.1](les:m05l01)). Te weinig lucht geeft onvolledige verbranding en dus CO. Te veel lucht voert onnodig veel warmte met het rookgas af, wat het rendement drukt. Remeha beschrijft daarom voor de Calenta een continu geregelde gas-/luchtkoppeling, zodat gas en lucht over het hele belastingbereik op elkaar zijn afgestemd.

Hoe die koppeling is gebouwd, verschilt per toestel. Je hoort dat sommige gasblokken het gas 'pneumatisch' op de luchtdruk in de venturi regelen en andere elektronisch. Dat onderscheid is in onze bronnen niet met een fabrikant- of normbron bevestigd, dus we stellen het niet als regel. Wat wel vaststaat: een elektronisch zelfinstellend gasblok van Remeha vergelijkt de ionisatiestroom, het aantal start-stops, de primaire rookgastemperatuur en het PWM-signaal met krommen in de printplaat en past daarmee de gas-luchtverhouding automatisch aan. Bij andere toestellen lees je in de handleiding hoe het werkt.

## Lambda en O2: zo beoordeel je het mengsel

Lambda is de verhouding tussen de werkelijke en de theoretisch benodigde hoeveelheid lucht. Je meet het niet direct, je leidt het af uit de O2 of CO2 in droog rookgas. De Kiwa-tabellen gaan uit van lucht met 20,94% O2:

| Lambda | O2 (droog rookgas, G20) | CO2 (droog rookgas, G20) |
|---|---|---|
| 1,1 | 2,10% | 10,56% |
| 1,2 | 3,82% | 9,60% |
| 1,3 | 5,26% | 8,80% |
| 1,4 | 6,47% | 8,13% |

Kiwa meet het rendement bij lambda 1,2 (G20: 9,6% CO2). Voor G25 zijn de waarden iets lager (lambda 1,2: 3,77% O2). Voor G25.3, het gas in de meeste woningen, geeft Kiwa alleen O2, dicht bij G25. Gebruik de tabel en niet de vuistformule 20,94 / (20,94 - O2): die overschat lambda, bij G20 en 4,0% O2 geeft de formule 1,236 terwijl de exacte waarde 1,211 is.

Remeha stelt af op O2 en niet meer op CO2, omdat de samenstelling van het geleverde gas kan verschillen. Volgens Kiwa kan het gedistribueerde gas tot 10,5% CO2 bevatten, waardoor het rookgas ongeveer 1 procentpunt extra CO2 kan bevatten en CO2 geen betrouwbare maat is voor de luchtovermaat.

!!! kern Er is geen algemene waarde
Procedure, meetstand, met of zonder mantel, wachttijd, streefwaarde en zelfs de vraag of je O2 of CO2 gebruikt, verschillen per merk en model. De BRL 6000-25 eist dat je de branderdruk en de gas-luchtverhouding instelt volgens de voorschriften van de fabrikant. Een getal uit je hoofd is geen voorschrift.
!!!

## Zo verschillen de voorbeelden

Elke waarde komt uit de handleiding van dat model en die uitgave (vollast, aardgas). Een nieuwer toestel of een andere uitgave kan andere waarden hebben.

| Model en uitgave (voorbeeld) | O2 bij vollast | Instellen |
|---|---|---|
| Remeha Tzerra Ace 24C, 28C, 39C (servicehandleiding) | 3,5 tot 4,0% (G25.3), gemeten zonder frontmantel | Afstelschroef A, via de schoorsteenvegerstand |
| Intergas Kombi Kompakt HRE (installatievoorschrift 2018) | 3,15 tot 5,70% (G25.3), gemeten met open mantel | Hooglast eerst meten, laaglast hangt daarvan af, schroef B alleen voor laaglast |
| ATAG i-Serie (uitgave 2018) | 4,7% nominaal, tussen 3,6 en 5,5% (aardgas), gemeten met gesloten mantel | Alleen bijstellen met schroef b als de waarde buiten de grenzen valt |
| Nefit ProLine NxT HRC 24/CW3 en CW4 (uitgave 2014) | 5,3% plus of min 0,3 (aardgas) | Op laaglast de gas-luchtverhouding als verschildruk: min 5 Pa plus of min 3 Pa |

Vaillant ecoTEC plus VHR heeft geen instelschroef: de gas-luchtverhouding wordt via diagnosecode D.158 gecorrigeerd. De spreiding is groot: 3,5 tot 4,0% bij de Remeha Tzerra Ace, 5,3% bij de Nefit ProLine NxT. Daarom zeg je nooit 'O2 moet 4,7% zijn'.

## Modulatie en pendelen

Een moderne ketel moduleert: hij past zijn vermogen aan de warmtevraag aan. De Remeha Calenta 25s heeft een belasting voor CV van 5,2 tot 25,0 kW (onderwaarde), de 35s van 7,3 tot 35,1 kW: een modulatiebereik van ongeveer 1 op 4,8. Is de warmtevraag lager dan de minimale belasting, bijvoorbeeld 3 kW bij de 25s, dan slaat de ketel aan en uit. Dat is pendelen of takten.

## Praktijkgeval: 5,6% O2 bij vollast

Je meet bij een Remeha Tzerra Ace 24C op vollast op G25.3 5,6% O2. De handleiding noemt 3,5 tot 4,0%. Voordat je aan afstelschroef A draait, controleer je de meting: een te hoge O2-waarde kan wijzen op een lekkend meetsysteem (sonde, slang, meetpunt). Laat de sonde het meetpunt afdichten en wacht tot de waarde stabiel is. Ook het gas speelt mee, maar in beperkte mate: een toestel afgesteld op G25.3 (Wobbe 45,07 MJ/m3) met lambda 1,3 en 5,2% O2 meet op G25 (Wobbe 43,88 MJ/m3) lambda 1,335 en 5,6% O2, dus 0,4 procentpunt meer. Een lagere Wobbe-index geeft meer luchtovermaat. De afwijking in dit praktijkgeval (5,6% tegen 3,5 tot 4,0%) is veel groter dan dat verschil, dus controleer eerst de meting. Pas daarna stel je bij, volgens de handleiding.
`,
  checklist: [
    'Ik kan uitleggen waarom gas en lucht over het hele bereik op elkaar moeten passen',
    'Ik kan uit een O2-waarde in droog rookgas de luchtovermaat afleiden met een tabel',
    'Ik weet waarom instellen op O2 de voorkeur heeft boven CO2',
    'Ik controleer eerst de meting en het gas voordat ik aan een afstelschroef draai',
    'Ik zoek de instelwaarden altijd op in de handleiding van het toestel'
  ],
  quiz: [
    {
      vraag: `Je meet in het droge rookgas van een ketel op G20 een O2-gehalte van 3,8%. Welke luchtovermaat hoort daarbij?`,
      opties: [`Lambda 1,1`, `Lambda 1,2`, `Lambda 1,3`, `Lambda 1,4`],
      goed: 1,
      uitleg: `In de Kiwa-tabel voor G20 hoort lambda 1,2 bij 3,82% O2 en 9,60% CO2. Lambda 1,1 hoort bij ongeveer 2,1% O2, lambda 1,3 bij 5,26%.`
    },
    {
      vraag: `Waarom is een CO2-meting geen betrouwbare maat voor de luchtovermaat bij het geleverde G-gas?`,
      opties: [
        `Omdat CO2 door de sifon wordt opgelost`,
        `Omdat CO2-sensoren te onnauwkeurig zijn om de luchtovermaat te bepalen`,
        `Omdat het gas zelf tot 10,5% CO2 kan bevatten, waardoor het rookgas extra CO2 bevat`,
        `Omdat CO2 alleen bij laaglast te meten is`
      ],
      goed: 2,
      uitleg: `Het gedistribueerde gas kan tot 10,5% CO2 bevatten. Dat geeft ongeveer 1 procentpunt extra CO2 in het rookgas, los van de luchtovermaat. O2 komt niet uit het gas en is dus een zuiverder maat. Daarom stelt Remeha op O2 af.`
    },
    {
      vraag: `Een Remeha Calenta 35s heeft een minimale belasting van 7,3 kW. De warmtevraag van de woning is 3 kW. Wat doet de ketel?`,
      opties: [
        `Hij slaat aan en uit (pendelt), omdat hij niet lager kan moduleren dan 7,3 kW`,
        `Hij moduleert vanzelf door naar 3 kW, omdat een moderne ketel elk vermogen kan leveren`,
        `Hij schakelt automatisch over op tapwaterbedrijf`,
        `Hij valt in storing omdat de belasting te laag is`
      ],
      goed: 0,
      uitleg: `Onder de minimale belasting kan de ketel niet verder moduleren. Hij levert dan te veel warmte, slaat af en start later weer. Dat is pendelen. Het is geen storing en de ketel gaat niet uit zichzelf naar tapwater.`
    },
    {
      vraag: `Een toestel is afgesteld op G25.3 (Wobbe 45,07 MJ/m3) met lambda 1,3 en 5,2% O2. Op een net met G25 (Wobbe 43,88 MJ/m3) meet je 5,6% O2. Wat is de beste conclusie?`,
      opties: [
        `De ketel is ontregeld en moet direct bijgesteld worden, want de O2-waarde ligt 0,4 procentpunt boven de afstelling van de fabriek`,
        `De O2-sensor van de analyser meet fout`,
        `De ketel krijgt te veel gas`,
        `Een lagere Wobbe-index geeft meer luchtovermaat: een deel van de afwijking komt door het gas, dus eerst de handleiding raadplegen`
      ],
      goed: 3,
      uitleg: `Kiwa laat zien dat dezelfde ketel bij G25 lambda 1,335 en 5,6% O2 geeft. De monteur kan dus ten onrechte concluderen dat bijstellen nodig is. Meer luchtovermaat betekent niet meer gas maar relatief meer lucht.`
    },
    {
      vraag: `Een Remeha Tzerra Ace 24C geeft op vollast op G25.3 5,6% O2. De handleiding noemt 3,5 tot 4,0%. Wat doe je eerst?`,
      opties: [
        `Direct aan afstelschroef A draaien tot de O2-waarde binnen 3,5 tot 4,0% ligt en daarna pas de meting en het meetpunt controleren`,
        `Eerst de meting controleren: sonde afdichten in het meetpunt, meetsysteem op lekkage nalopen en de waarde laten stabiliseren`,
        `De ketel vervangen`,
        `De gasvoordruk verhogen`
      ],
      goed: 1,
      uitleg: `Een te hoge O2-waarde kan wijzen op een lekkend meetsysteem. Je stelt pas bij als je zeker weet dat de meting klopt. Direct draaien aan de schroef zet een meetfout in het toestel vast.`
    },
    {
      vraag: `Een collega zegt: "Bij vollast moet O2 altijd rond 4,7% zijn." Wat klopt?`,
      opties: [
        `Klopt, dat is de wettelijke waarde voor aardgas`,
        `Klopt voor alle merken, ze wijken hooguit 0,1 procentpunt af`,
        `Onjuist: de handleiding bepaalt de waarde, bijvoorbeeld Remeha Tzerra Ace 3,5 tot 4,0% en Nefit ProLine NxT 5,3% plus of min 0,3`,
        `Onjuist: alleen CO2 is relevant`
      ],
      goed: 2,
      uitleg: `ATAG i-Serie noemt 4,7% nominaal, maar dat is één model. De voorbeelden lopen uiteen van 3,5 tot 5,3%. Een vaste waarde bestaat niet.`
    }
  ],
  kaarten: [
    { voor: `Bij welke luchtovermaat meet Kiwa het rendement van een ketel?`, achter: `Bij lambda 1,2 (Gaskeur-rendementsmeting).` },
    { voor: `Welk O2-gehalte in droog rookgas hoort bij lambda 1,2 op G20?`, achter: `3,82% O2 (Kiwa-tabel, G20). Het CO2-gehalte is daar 9,60%.` },
    { voor: `Waarom stelt Remeha af op O2 en niet op CO2?`, achter: `De samenstelling van het geleverde gas kan verschillen: het kan tot 10,5% CO2 bevatten (Kiwa), waardoor CO2 geen betrouwbare maat voor luchtovermaat is.` },
    { voor: `Wat gebeurt er met de luchtovermaat als de Wobbe-index van het gas daalt?`, achter: `De luchtovermaat stijgt: op G25 (Wobbe 43,88) meet een op G25.3 afgesteld toestel lambda 1,335 in plaats van 1,3.` },
    { voor: `Wat is het modulatiebereik van de Remeha Calenta 25s?`, achter: `5,2 tot 25,0 kW (onderwaarde), ongeveer 1 op 4,8.` },
    { voor: `Wat doet een ketel als de warmtevraag lager is dan zijn minimale belasting?`, achter: `Hij pendelt (takt): aan en uit. Voorbeeld: de Calenta 25s heeft minimaal 5,2 kW nodig, dus bij 3 kW warmtevraag pendelt hij.` },
    { voor: `Waarom mag je bij een te hoge O2-waarde niet meteen aan de afstelschroef draaien?`, achter: `Eerst de meting controleren: een te hoge O2 kan een lekkend meetsysteem zijn. En de instelwaarde verschilt per model.` },
    { voor: `Welke O2-waarde bij vollast noemt de Remeha Tzerra Ace?`, achter: `3,5 tot 4,0% (G25.3, zonder frontmantel gemeten). Per model verschillend.` },
    { voor: `Welke O2-waarde bij vollast noemt de Nefit ProLine NxT (HRC 24/CW3 en CW4, uitgave 2014)?`, achter: `5,3% plus of min 0,3 (aardgas). Per model en uitgave verschillend.` }
  ],
  bronnen: ['KET-01', 'KET-02', 'KET-03', 'KET-15', 'REG-11', 'VER-02', 'VER-06', 'VER-07', 'VER-08', 'VER-09', 'VER-13', 'REN-10', 'GAS-12', 'GAS-19', 'GAS-27', 'GAS-29', 'GAS-30', 'INS-51', 'INS-52', 'INS-53', 'INS-54', 'INS-55', 'INS-56', 'INS-57', 'MET-08', 'MET-15']
},

/* ------------------------------------------------------------------ 5.3 */
{
  id: 'm05l03',
  nr: '5.3',
  titel: 'Gasblok en gasafsluiting',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen wat een gasblok in de keten doet, hoe je de gasvoordruk controleert en waarom de gasafsluiting bij storing zo belangrijk is.',
  videos: [
    { taal: 'nl', titel: 'Drukmeting en gaslekdetectie bij een cv-ketel (Euro-Index)', yt: 'jvx5GIafwJw', duur: '±4 min, 2019' },
    { taal: 'nl', titel: 'Onderhoud van een Intergas HRE cv-ketel (Loodgieter Den Haag Stad)', yt: 'MNKLC9zzSD0', duur: '±31 min, 2021' },
    { taal: 'en', titel: 'Gas pressures: working pressure and standing pressure (Allen Hart, VK)', yt: '1fe2rBSgzzE', duur: '±8 min, 2021' }
  ],
  tekst: `
## Wat het gasblok in de keten doet

Het gasblok hoort bij de stroom gas in de ketel: het gas gaat er doorheen op weg naar het punt waar het bij de lucht komt (bij de Remeha Calenta de venturi). In de fabrikantdocumenten zie je wat je er als monteur mee doet: op het gasblok zit het meetpunt voor de voordruk (Intergas Kombi Kompakt HRE: meetnippel D, Remeha Calenta Ace: meetpunt C), bij een ander gas dan aardgas moet het gasblok worden aangepast voordat de ketel wordt aangezet (Remeha Calenta Ace) en hoe de gas-luchtverhouding wordt bijgesteld, verschilt per toestel (zie [les 5.2](les:m05l02)). Bij de eerste inbedrijfstelling ontluchten Intergas en Remeha de gasleiding via het voordrukmeetpunt, waarna alle koppelingen op lekkage worden gecontroleerd en de voordruk wordt gemeten. Hoe je dat bij jouw toestel doet, staat in de handleiding: volg die procedure.

## Gasafsluiting: wat vaststaat

Dat de ketel het gas moet kunnen afsluiten, staat vast. Kiwa laat in zijn blokkeringstests de toevoer of afvoer van een toestel tot 144 kW geleidelijk sluiten en eist dat de beveiliging de gastoevoer afsluit voordat het rookgas 0,1% CO (1000 ppm) bereikt. De Intergas Kombi Kompakt HRE kent een aparte foutcode voor een defect gasklep-relais (codes 29 en 30).

Wat je hier niet als algemene regel leert, is de opbouw van het gasblok. Je leest vaak dat er 'twee veiligheidsafsluiters in serie' in zitten en dat sommige gasblokken 'pneumatisch' werken en andere elektronisch. Dat is in de documenten waarop deze cursus steunt niet met een fabrikant- of normbron bevestigd: de norm voor gasblokken (EN 13611) is niet gelezen. Ook getallen als 'het gasblok sluit binnen 1 seconde' zijn in de nagelopen handleidingen niet gevonden. Hoe het gasblok van een toestel is opgebouwd en hoe snel het sluit, lees je in de technische documentatie van dat toestel. Neem het niet aan.

## Gasvoordruk: het getal dat het toestel nodig heeft

De voordruk is de druk van het gas vlak voor het toestel. Fabrikanten noemen een nominale aansluitdruk en een toegestaan bereik. Voor gewone Nederlandse woningen (G-gas uit de K-groep, met referentiegas G25.3) noemen Remeha (Calenta Ace) en Intergas (Kombi Kompakt HRE) een nominale aansluitdruk van 25 mbar; in de praktijk ligt de druk bij het toestel rond 25 tot 30 mbar. De 20 mbar die je ook ziet, is de nominale druk voor G20 (H-gas) en dus niet de gangbare huisdruk. G-gas en K-gas zijn hier dus hetzelfde gas.

| Toestel en uitgave (voorbeeld) | Wat de handleiding zegt voor G25.3 |
|---|---|
| Remeha Avanta (versie 13, 2020), Remeha Calenta Ace, Nefit ProLine NxT (uitgave 2014), Vaillant ecoTEC plus VHR | Toegestaan 20 tot 30 mbar |
| Intergas Kombi Kompakt HRE (2018) | Nominaal 25 mbar, meldt 'voordruk te laag' onder 20 mbar |
| ATAG i-Serie (uitgave 2018) | Dynamische gasvoordruk hoger dan 20 mbar |

Je meet de voordruk dynamisch, dus met het toestel in bedrijf. Nefit meet op vollast met een digitale manometer op de voordrukmeetnippel (manometer op nul, tijdens de meting in dezelfde positie) en Vaillant meet de gasstroomdruk met testprogramma P.001 op vollast. ATAG en de BRL 6000-25 noemen alleen 'dynamisch': de BRL zet 'gasvoordruk (dynamisch)' in de onderhoudslijst. De logica: op vollast stroomt er het meeste gas en zakt de druk het diepst, dus een goede statische druk zegt niet dat het toestel op vollast genoeg krijgt. Na de meting controleer je de nippel op gasdichtheid.

!!! kern De voordruk meet je met het toestel in bedrijf
Statisch goed betekent niet dynamisch goed. Lees de voordruk af met het toestel in bedrijf (Nefit en Vaillant: op vollast) en vergelijk hem met het bereik van dat model. Buiten het bereik stel je het toestel niet in bedrijf, stel je de oorzaak vast en informeer je het gasbedrijf (Nefit ProLine NxT en Vaillant ecoTEC plus VHR).
!!!

## Testdruk: het toestel is geen leidingwerk

Fabrikanten beperken de testdruk als het toestel aangesloten is: Remeha Calenta Ace maximaal 60 mbar, Vaillant ecoTEC plus VHR maximaal 110 mbar. Daarboven kan het gasblok beschadigen. Daaruit volgt (afleiding, per model verifiëren) dat de sterkteproef van 5 bar uit de BRL 6000-25 en een dichtheidsproef op werkdruk plus 100 mbar niet met het toestel aangesloten horen: sluit de toestelkraan of koppel het toestel los. Sluit de gaskraan voordat je aan gasvoerende delen werkt (Nefit ProLine NxT) en controleer daarna alle gasvoerende delen op dichtheid.

!!! gevaar Lekzoeken nooit met een vlam
De BRL 6000-25 noemt lekzoekspray of een gaslekzoeker met display en akoestisch signaal. Lekzoeken met een vlam is uitgesloten.
!!!

## Praktijkgeval: geen vlamsignaal (fictief)

Een Intergas Kombi Kompakt HRE toont code 4, geen vlamsignaal. Onder de oorzaken staat onder meer een gasvoordruk lager dan 20 mbar. Stel dat je statisch 26 mbar meet en dynamisch op vollast 17 mbar. Dan zit de oorzaak in de toevoer en niet in het toestel: vervang je nu de elektrode of het gasblok, dan vervang je onderdelen die niet stuk zijn. Stel de oorzaak vast en informeer het gasbedrijf. Bij een te hoge voordruk en luidruchtig ontsteken noemt Intergas een mogelijk defecte huisdrukregelaar (gasbedrijf).
`,
  checklist: [
    'Ik weet waar op het gasblok ik de voordruk meet en waarom ik dat dynamisch doe, met het toestel in bedrijf',
    'Ik ken het nominale en het toegestane bereik van de voordruk voor G25.3 als voorbeeld per model',
    'Ik plaats geen hogere testdruk op een aangesloten toestel dan de fabrikant toestaat',
    'Ik zoek gaslekken met lekzoekspray of een gaslekzoeker en nooit met een vlam'
  ],
  quiz: [
    {
      vraag: `Een Intergas Kombi Kompakt HRE meldt geen vlamsignaal. Je meet statisch 26 mbar en dynamisch op vollast 17 mbar. Wat is de beste conclusie?`,
      opties: [
        `De voordruk is in orde, want 26 mbar valt binnen het bereik`,
        `Het gasblok is defect en moet worden vervangen`,
        `De dynamische voordruk is te laag: eerst de oorzaak in de gastoevoer vaststellen en het gasbedrijf informeren`,
        `De meting is onbetrouwbaar en moet op laaglast worden herhaald`
      ],
      goed: 2,
      uitleg: `Intergas meldt 'voordruk te laag' onder 20 mbar en noemt dat bij geen vlamsignaal als oorzaak. De statische waarde zegt niets over vollast. Het gasblok vervangen zonder oorzaak is gokken. Laaglast helpt niet: je bent juist bij vollast te laag.`
    },
    {
      vraag: `Bij welke nominale aansluitdruk werkt een cv-ketel in een gewone Nederlandse woning (G-gas, G25.3) volgens fabrikanten als Remeha en Intergas?`,
      opties: [`20 mbar`, `25 mbar`, `30 tot 50 mbar`, `100 mbar`],
      goed: 1,
      uitleg: `25 mbar is de nominale druk voor G25.3 volgens Remeha (Calenta Ace) en Intergas (Kombi Kompakt HRE). 20 mbar is nominaal voor G20 (H-gas) en 30 tot 50 mbar voor propaan. 100 mbar is de druk in een deel van het lagedrukgasnet vóór de huisdrukregelaar (Netbeheer Nederland), niet wat deze fabrikanten als nominale aansluitdruk noemen.`
    },
    {
      vraag: `Je wilt een dichtheidsproef op een gasleiding doen met een druk boven 60 mbar. Er is een Remeha Calenta Ace aangesloten en de toestelkraan staat open. Wat doe je?`,
      opties: [
        `De toestelkraan sluiten of het toestel loskoppelen: Remeha noemt maximaal 60 mbar testdruk met aangesloten toestel`,
        `Doorgaan: het gasblok is gemaakt voor de leidingdruk en houdt elke proefdruk aan die de gasleiding zelf kan hebben`,
        `De druk langzaam opvoeren zodat het gasblok kan wennen`,
        `Alleen de gaskraan bij de meter sluiten`
      ],
      goed: 0,
      uitleg: `Boven de testdruk van de fabrikant kan het gasblok beschadigen. Voor Vaillant ecoTEC plus VHR is dat 110 mbar. Langzaam opvoeren of alleen de meterkraan sluiten verandert niet wat het gasblok kan hebben: de proefdruk staat dan nog steeds op het toestel.`
    },
    {
      vraag: `Bij de Kiwa-blokkeringstests wordt de toevoer of afvoer van een toestel tot 144 kW geleidelijk gesloten. Wat moet de beveiliging van het toestel dan doen?`,
      opties: [
        `De gastoevoer afsluiten zodra het CO-gehalte in het rookgas 1% (10.000 ppm) bereikt`,
        `De gastoevoer pas afsluiten nadat het rookgas 0,1% CO (1000 ppm) heeft bereikt`,
        `De gastoevoer alleen verminderen, zodat het toestel op laaglast blijft doorbranden`,
        `De gastoevoer afsluiten voordat het CO-gehalte in het rookgas 0,1% (1000 ppm) bereikt`
      ],
      goed: 3,
      uitleg: `Volgens Kiwa (BRL Gaskeur HR, 2021) moet de beveiliging van een toestel tot 144 kW de gastoevoer afsluiten voordat het rookgas 0,1% CO (1000 ppm) bereikt. Afsluiten op het moment dat die waarde er is, of pas bij 1%, is te laat. Hoe het gasblok van een toestel is opgebouwd en hoe snel het sluit, lees je in de technische documentatie van dat toestel.`
    },
    {
      vraag: `Je hebt de voordruk gemeten op de meetnippel van het gasblok. Wat doe je als laatste?`,
      opties: [
        `De ketel opnieuw instellen op CO2`,
        `De nippel weer dichtdraaien en op gasdichtheid controleren`,
        `De manometer op nul laten staan en aangesloten laten tot de volgende meting`,
        `Niets: de nippel is altijd afgedicht met een pakking`
      ],
      goed: 1,
      uitleg: `De meetnippel is een opening in een gasvoerend deel. Vaillant (ecoTEC plus VHR) controleert de nippel na de meting op gasdichtheid. Zonder die controle laat je een mogelijk lek achter op een plek die je net hebt geopend.`
    }
  ],
  kaarten: [
    { voor: `Waar meet je de gasvoordruk van een cv-ketel?`, achter: `Op het voordrukmeetpunt van het gasblok (Intergas Kombi Kompakt HRE: meetnippel D, Remeha Calenta Ace: meetpunt C). Meten met het toestel in bedrijf (dynamisch).` },
    { voor: `Wat is de nominale aansluitdruk voor G25.3, het G-gas in woningen (K-groep), volgens Remeha en Intergas?`, achter: `25 mbar. In de praktijk ligt de druk bij het toestel rond 25 tot 30 mbar.` },
    { voor: `Wat is de nominale aansluitdruk voor G20 (H-gas) volgens Remeha en Intergas?`, achter: `20 mbar. Dat is niet de gangbare huisdruk in een woning.` },
    { voor: `Bij welke gasvoordruk meldt de Intergas Kombi Kompakt HRE 'voordruk te laag'?`, achter: `Onder 20 mbar (voorbeeld, model Kombi Kompakt HRE).` },
    { voor: `Wat doe je als de gasvoordruk buiten het bereik van het toestel ligt?`, achter: `Niet in bedrijf stellen, oorzaak vaststellen en het gasbedrijf informeren (Nefit ProLine NxT en Vaillant ecoTEC plus VHR).` },
    { voor: `Hoe hoog mag de testdruk zijn met een aangesloten Remeha Calenta Ace?`, achter: `Maximaal 60 mbar. Daarboven kan het gasblok beschadigen: sluit de toestelkraan of koppel het toestel los.` },
    { voor: `Hoe hoog mag de testdruk zijn met een aangesloten Vaillant ecoTEC plus VHR?`, achter: `Maximaal 110 mbar. Daarboven kan het gasblok beschadigen.` },
    { voor: `Hoe zoek je een gaslek volgens de BRL 6000-25?`, achter: `Met lekzoekspray of een gaslekzoeker met display en akoestisch signaal. Nooit met een vlam.` },
    { voor: `Wat moet de beveiliging volgens de Kiwa-blokkeringstests doen bij een toestel tot 144 kW?`, achter: `De gastoevoer afsluiten voordat het CO-gehalte in het rookgas 0,1% (1000 ppm) bereikt.` }
  ],
  bronnen: ['KET-01', 'GAS-11', 'GAS-13', 'GAS-16', 'GAS-17', 'GAS-18', 'GAS-19', 'INS-17', 'INS-19', 'INS-23', 'INS-24', 'INS-25', 'INS-26', 'INS-32', 'INS-48', 'INS-49', 'MET-21', 'MET-22', 'MET-24', 'MRK-11', 'STO-08', 'STO-14', 'STO-17', 'VER-14']
},

/* ------------------------------------------------------------------ 5.4 */
{
  id: 'm05l04',
  nr: '5.4',
  titel: 'Ontsteking en vlambewaking',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe de ketel de vlam ontsteekt en met ionisatie bewaakt, en wat er bij verlies van de vlam gebeurt.',
  videos: [
    { taal: 'nl', titel: 'Vitodens 200: ionisatiestroom controleren (Viessmann Academy BeNeLux)', yt: 'pwui3U_yxM8', duur: '±1 min, 2019' },
    { taal: 'en', titel: 'Flame rectification: how to test (Allen Hart, VK)', yt: 'mcw5PDPnORU', duur: '±14 min, 2022' },
    { taal: 'en', titel: 'Testing ionisation probes and ignition electrodes (Andrew Millward, VK)', yt: 'nc2xFq9W5rc', duur: '±1 min, 2018' }
  ],
  tekst: `
## Van vonk naar vlam

De Remeha Calenta gaat na het voorventileren door naar: brander aan, voorontsteking, hoofdontsteking en vlamdetectie. De Intergas Kombi Kompakt HRE start met de ventilator op starttoerental, ontsteekt met elektrische vonken, doet na ongeveer 15 seconden een nieuwe poging en valt na 4 ontsteekpogingen in storing. De ATAG i-Serie meldt storing 133 na 5 pogingen, en de Remeha Avanta noemt maximaal 5 startpogingen. Het aantal pogingen verschilt dus per merk.

Hoe lang de ketel na het openen van het gas op een vlamsignaal wacht (de veiligheidstijd), staat per toestel in de handleiding. In de handleidingen die we hebben nagelopen is die tijd niet als getal gevonden: gebruik geen getal uit je hoofd.

## Hoe ionisatie de vlam ziet

Een gasvlam ioniseert de lucht eromheen. Over de elektroden staat een wisselspanning. Doordat de geladen deeltjes de stroom asymmetrisch geleiden, ontstaat een kleine gelijkstroomcomponent: de vlamgelijkrichting. Die stroom is het vlamsignaal.

De stroom is heel klein, in microampère (µA), en dus gevoelig voor alles wat de stroomkring verstoort. Remeha noemt bij de Calenta bij geen vonk of onvoldoende ionisatie als controle: controleer de aarding. Een stroom heeft een gesloten kring nodig: dat past bij die controle.

Het signaal doet meer dan 'vlam ja of nee': een elektronisch zelfinstellend gasblok gebruikt het ook voor de gas-luchtverhouding (zie [les 5.2](les:m05l02)).

!!! kern De ionisatiestroom is het bewijs dat er vlam is
Ziet de ketel geen of te weinig stroom, dan beslist hij dat er geen vlam is, ook als er wel een vlam brandt. Lage ionisatie is dus niet altijd een gasprobleem: het kan ook de pen, de afstand, de aarding of de verbranding zijn.
!!!

## Wat is een goede ionisatiestroom?

Er bestaat geen algemene waarde. Een 'venster van 5 tot 15 µA' klopt niet: de Remeha Calenta toont in de handleiding zelfs 70 µA als voorbeeld. Wat de handleidingen zeggen, is per model verschillend:

| Model en uitgave (voorbeeld) | Wat de handleiding zegt |
|---|---|
| Remeha Calenta (2017), Tzerra Ace, Avanta (uitgave 2020) | Controleer in vollast en laaglast (na 1 minuut stabiel). Reinigen of vervangen bij minder dan 3 µA |
| Remeha Avanta (uitgave 2014) | Vervangen bij minder dan 3 of meer dan 9 µA. De uitgave van 2020 noemt alleen de 3 µA |
| ATAG XL (uitgave 2016) | Meer dan 2,0 µA op vollast. Ontstekingselektrode minimaal elke 4 jaar vervangen |
| Intergas Kombi Kompakt HRE (2021), Prestige (2020) | Toont de stroom op het display in testbedrijf. Noemt geen drempel en geen maat |

Waarden veranderen zelfs tussen uitgaven van hetzelfde model. Lees de ionisatie uit op het display of via de servicefunctie en vergelijk met de handleiding. Bij de Vaillant ecoTEC plus VHR mag de regelelektrode alleen aan het keramische deel worden aangeraakt en reinigen is verboden; hij wordt na 5 jaar of 20.000 bedrijfsuren vervangen.

## Praktijkgeval: wat zegt de ketel je?

Bij de Remeha Avanta onderscheidt de handleiding (uitgave 2019) na de startpogingen drie situaties:

| Wat je waarneemt | Wat je controleert |
|---|---|
| Geen ontstekingsvonk | Ontstekingstransformator, kabel, elektrodeafstand 3 tot 4 mm, aarding |
| Wel vonk, geen vlam | Gaskraan, gasvoedingsdruk, ontluchte gasleiding, lucht-/rookgasleiding, sifon, netvoeding, elektrode reinigen of vervangen, O2 bij vol- en laaglast |
| Wel vlam, te weinig ionisatie | Verbrandingsstabiliteit, aarding, elektrode, elektrodeafstand |

Stel: je leest bij een Remeha Calenta in vollast na 1 minuut 2,6 µA af (fictieve meting). Dat is onder de drempel van 3 µA: reinigen of vervangen. Zoek ook de oorzaak. Nefit noemt bij de ProLine NxT bij onvoldoende ionisatie vervuiling, de dynamische gasvoordruk, de gas-luchtverhouding, de connectoren en de bekabeling van de pen.

## Meldingen als voorbeeld

Codes zijn per merk en model. Leer het patroon, niet de nummers:

| Merk, model en uitgave | Code | Betekenis volgens de handleiding |
|---|---|---|
| Vaillant ecoTEC plus VHR | F.028 en F.029 | Vlamsignaal in de ontstekingsfase niet herkend, en ontsteking na een vlamuitval tijdens het bedrijf mislukt |
| Nefit ProLine NxT HRC 24/CW3 en CW4 (uitgave 2014) | 6A 227 | Onvoldoende ionisatiestroom na het ontsteken |
| ATAG i-Serie (uitgave 2018) | 133 | Geen vlam na 5 ontsteekpogingen |
| Intergas Kombi Kompakt HRE (2018) | 4 en 5 | Geen vlamsignaal en slecht vlamsignaal |

!!! gevaar Onder spanning
Op de klemmen L en N van een Vaillant ecoTEC plus VHR staat continu spanning en bij de Nefit ProLine NxT voeren branderautomaat, ventilator, pomp en driewegklep 230 V. Fabrikanten beperken elektrische aansluitingen tot erkende installateurs of elektromonteurs. Volg de handleiding voor spanningsloos maken en zie de Cursus Elektrotechniek.
!!!
`,
  checklist: [
    'Ik kan uitleggen hoe ionisatie het vlamsignaal levert',
    'Ik weet dat de grenswaarde van de ionisatiestroom per merk en model verschilt en zoek hem op',
    'Ik onderscheid geen vonk, vonk zonder vlam en vlam met te weinig ionisatie',
    'Ik zoek bij lage ionisatie ook de oorzaak en vervang niet alleen de elektrode'
  ],
  quiz: [
    {
      vraag: `Hoe krijgt een ketel met ionisatiebewaking het signaal dat er vlam is?`,
      opties: [
        `Een lichtsensor (fotocel) in de brander ziet het licht van de vlam en geeft een signaal aan de branderautomaat`,
        `Een thermokoppel in de vlam wekt een spanning op`,
        `De vlam ioniseert de lucht en door asymmetrische geleiding ontstaat een gelijkstroom (vlamgelijkrichting)`,
        `Een drukschakelaar meet de gasstroom`
      ],
      goed: 2,
      uitleg: `Bij ionisatiebewaking staat een wisselspanning over de elektroden. De vlam ioniseert de lucht en geleidt de stroom asymmetrisch, zodat er een kleine gelijkstroom overblijft. Een thermokoppel is een ander principe.`
    },
    {
      vraag: `Bij een Remeha Calenta lees je in vollast na 1 minuut 2,6 µA af. Wat zegt de handleiding?`,
      opties: [
        `Normale waarde: bij een modulerende ketel is een ionisatiestroom onder 3 µA gebruikelijk`,
        `Reinig of vervang de ionisatie-/ontstekingselektrode, want de waarde ligt onder 3 µA`,
        `Vervang direct het gasblok, want een lage ionisatiestroom betekent dat er te weinig gas komt`,
        `Verhoog de gasvoordruk`
      ],
      goed: 1,
      uitleg: `Remeha noemt 3 µA als ondergrens voor Calenta, Tzerra Ace en Avanta. Reinigen of vervangen is de eerste stap. Zoek daarna ook de oorzaak: vervuiling, aarding, gas-luchtverhouding of bekabeling.`
    },
    {
      vraag: `Een collega zegt: "De ionisatiestroom moet altijd tussen 5 en 15 µA liggen." Wat klopt?`,
      opties: [
        `Klopt voor alle merken`,
        `Klopt alleen voor Remeha`,
        `Onjuist: de grens verschilt per model, bijvoorbeeld de Remeha Calenta vervangt onder 3 µA, de ATAG XL vraagt meer dan 2,0 µA op vollast en de Intergas Kombi Kompakt HRE noemt geen drempel`,
        `Onjuist: de stroom moet altijd boven 20 µA liggen`
      ],
      goed: 2,
      uitleg: `Zelfs de Remeha Calenta toont in de handleiding 70 µA als voorbeeld, dus een venster van 5 tot 15 µA klopt niet. Grenzen verschillen per model en soms per uitgave.`
    },
    {
      vraag: `Een Remeha Avanta geeft een vonk, maar er ontstaat geen vlam. Welke groep controles hoort daarbij?`,
      opties: [
        `Ontstekingstransformator, ontstekingskabel en de afstand tussen de elektroden`,
        `Alleen de aarding en de elektrodeafstand, want die bepalen of de vonk een vlam kan vormen`,
        `Alleen de ionisatiestroom op het display, want zonder ionisatie ontstaat er nooit een vlam`,
        `Gaskraan, gasvoedingsdruk, ontluchte gasleiding, lucht-/rookgasleiding en gevulde sifon`
      ],
      goed: 3,
      uitleg: `Bij 'wel vonk, geen vlam' werkt de ontsteking, dus zoek je waar het gas of de lucht wegblijft. Transformator en kabel horen bij 'geen vonk'. Aarding en elektrodeafstand staan in de handleiding bij 'geen vonk' en bij 'te weinig ionisatie', niet bij 'wel vonk, geen vlam'.`
    },
    {
      vraag: `Welke tweede functie heeft de ionisatiestroom bij een elektronisch zelfinstellend gasblok?`,
      opties: [
        `De ketel vergelijkt hem, met start-stops, primaire rookgastemperatuur en PWM-signaal, met krommen om de gas-luchtverhouding aan te passen`,
        `De ketel bepaalt ermee de pompsnelheid: bij een lage ionisatiestroom draait de pomp sneller, zodat het temperatuurverschil tussen aanvoer en retour kleiner wordt`,
        `De ketel meet ermee de waterdruk`,
        `De ketel schakelt ermee de driewegklep`
      ],
      goed: 0,
      uitleg: `Remeha beschrijft dat de printplaat deze waarden vergelijkt met voorgeprogrammeerde krommen. De ionisatiestroom is dus ook een maat voor de verbrandingskwaliteit, niet alleen voor de aanwezigheid van vlam.`
    }
  ],
  kaarten: [
    { voor: `Hoe werkt vlambewaking met ionisatie (vlamgelijkrichting)?`, achter: `De vlam ioniseert de lucht. Over de elektroden staat een wisselspanning en de asymmetrische geleiding geeft een gelijkstroomcomponent: het vlamsignaal.` },
    { voor: `Bij welke ionisatiestroom laat Remeha (Calenta, Tzerra Ace, Avanta) de elektrode reinigen of vervangen?`, achter: `Bij minder dan 3 µA, in vollast en laaglast, na 1 minuut stabiel. Voorbeeld, Remeha-modellen: geen algemene waarde.` },
    { voor: `Hoeveel ontsteekpogingen doet de Intergas Kombi Kompakt HRE voordat hij in storing valt?`, achter: `Na ongeveer 15 seconden een nieuwe poging en na 4 ontsteekpogingen storing. De ATAG i-Serie meldt storing 133 na 5 pogingen.` },
    { voor: `Waarom is een 'algemeen venster' van 5 tot 15 µA onjuist?`, achter: `Grenzen verschillen per model en uitgave: Remeha onder 3 µA, ATAG XL boven 2,0 µA, Intergas Kombi Kompakt HRE noemt er geen. De Remeha Calenta toont zelfs 70 µA als voorbeeld.` },
    { voor: `Wat is het verschil tussen F.028 en F.029 bij de Vaillant ecoTEC plus VHR?`, achter: `F.028: vlamsignaal in de ontstekingsfase niet herkend. F.029: ontsteking na een vlamuitval tijdens het bedrijf mislukt.` },
    { voor: `Welke controle noemt Remeha bij de Calenta bij geen ontstekingsvonk of onvoldoende ionisatie naast de elektrode?`, achter: `Controleer de aarding.` },
    { voor: `Hoe ga je bij de regelelektrode van een Vaillant ecoTEC plus VHR om met aanraken en reinigen?`, achter: `Alleen het keramische deel aanraken en de elektrode niet reinigen: reinigen is verboden. Vervangen na 5 jaar of 20.000 bedrijfsuren.` }
  ],
  bronnen: ['KET-03', 'KET-05', 'KET-06', 'KET-07', 'KET-08', 'KET-09', 'KET-13', 'KET-14', 'MET-25', 'MET-26', 'ONT-10', 'ONT-15', 'ELE-03', 'ELE-05', 'ELE-06', 'STO-05', 'STO-07', 'MRK-02', 'MRK-03', 'MRK-11', 'MRK-13', 'MRK-15']
},

/* ------------------------------------------------------------------ 5.5 */
{
  id: 'm05l05',
  nr: '5.5',
  titel: 'Warmtewisselaar en condensafvoer',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe de warmtewisselaar warmte overdraagt, waar condensaat ontstaat en hoe de sifon werkt.',
  videos: [
    { taal: 'nl', titel: 'Corrosie in de warmtewisselaar herkennen (TV Emiel)', yt: 'A3Jy4Q9hE2Y', duur: '±2 min, 2021' },
    { taal: 'nl', titel: 'Lekkage cv-ketel: de warmtewisselaar eenvoudig checken, deel 1 (TV Emiel)', yt: 'RLQ21T8amOY', duur: '±3 min, 2024' },
    { taal: 'en', titel: 'How to clean a stainless steel boiler heat exchanger (Tomkat Gas Training, VK)', yt: 'eCkyMX7qGI8', duur: '±13 min, 2021' }
  ],
  tekst: `
## Waar de warmte van het rookgas naar het water gaat

Bij de Remeha Calenta zit de brander bovenin de warmtewisselaar. Het rookgas stroomt door de wisselaar en geeft zijn warmte door de wand af aan het cv-water. Komt het rookgas onder het condensatiepunt (volgens Remeha ongeveer 55 °C), dan condenseert de waterdamp in het onderste deel van de warmtewisselaar. De latente warmte gaat naar het cv-water en het condenswater loopt via een sifon af.

Het materiaal en het reinigen verschillen sterk per merk:

| Merk, model en uitgave (voorbeeld) | Materiaal volgens de fabrikant | Reinigen volgens de handleiding |
|---|---|---|
| Remeha Calenta Ace | Aluminium (Ace-Matic: roestvast staal) | Aan de verbrandingszijde niet reinigen: water, chemie, perslucht en gereedschap zijn niet toegestaan |
| Intergas Kombi Kompakt HRE (2018) | Aluminium met twee gescheiden koperen circuits (CV en tapwater) | Lamellen met borstel of stofzuiger, brander en isolatieplaat nooit met borstel of perslucht |
| Vaillant ecoTEC plus VHR | Roestvast staal (typeletter S of F) | Met water of zo nodig azijn (maximaal 5% zuur, 20 minuten), scherpe waterstraal of kunststofborstel |
| Nefit ProLine NxT HRC 24/CW3 en CW4 (uitgave 2014) | Niet in de nagelopen bron | Zachte borstel en stofzuiger, geen staalborstel, geen perslucht |

ATAG noemt op zijn site een volledig roestvast staal warmtewisselaar voor alle cv-ketels.

!!! kern Reinigen is merk- en modelspecifiek
Vaillant laat de warmtewisselaar van de ecoTEC plus VHR met water of azijn reinigen, Remeha verbiedt het bij de Calenta Ace en Intergas laat de lamellen van de Kombi Kompakt HRE borstelen. Wie 'standaard even doorspoelen' doet, kan een toestel beschadigen. Lees het onderhoudshoofdstuk van dat toestel.
!!!

## Condensatie en rendement

De bovenwaarde (Hs) veronderstelt dat het gevormde water volledig condenseert, de onderwaarde (Hi) veronderstelt dat het damp blijft. Voor aardgas is Hi/Hs ongeveer 0,902. Daarom kan een ketel op onderwaarde boven 100% komen (theoretisch tot ongeveer 110,9%) en op bovenwaarde niet.

De Remeha Avanta 24c geeft in de handleiding (versie 13, 2020):

| Situatie | Rendement op Hs | Rendement op Hi |
|---|---|---|
| Vollast, 80/60 °C | 89,3% | 99,1% |
| Vollast, 50/30 °C | 94,0% | 104,4% |
| Laaglast, 60 °C retour | 84,9% | 94,3% |
| Deellast, 30 °C retour | 97,9% | 108,7% |

Van 30 naar 60 °C retour daalt het rendement op bovenwaarde met 13 procentpunten. Bij de Remeha Calenta 25s levert de ketel bij 25,0 kW belasting 24,8 kW bij 80/60 en 25,5 kW bij 50/30: ongeveer 99% tegen 102% op onderwaarde. Een lage retourtemperatuur is geen detail maar een groot deel van het rendement.

## Hoeveel condensaat?

Bij volledige condensatie ontstaat maximaal 1,61 kg water per m3(n) methaan en 1,38 kg per m3(n) G-gas. In de praktijk is het minder. Volgens het rekenmodel (G-gas, lambda 1,25, verzadigd rookgas) condenseert bij 30 °C rookgas ongeveer 1,05 liter per m3(n) gas, bij 40 °C 0,78 liter, bij 50 °C 0,31 liter en vanaf ongeveer 55 °C niets. Bij 2 m3(n) gas per uur en 40 °C rookgas is dat ongeveer 2 x 0,78 = 1,6 liter per uur: een berekening, geen meting.

Het condensaat is zuur. Buildwise noemt een pH onder 5 en Remeha noemt voor een grote gasboiler (90 tot 120 kW) pH 3,5 tot 4,5 en eist daarom een kunststof afvoer. Voor de Avanta (versie 13, 2020) eist Remeha een kunststof pijp van minimaal 32 mm naar het riool met stankafsluiter of sifon, afschot van minimaal 30 mm per meter, maximaal 5 m horizontaal, nooit afdichten en niet lozen op een dakgoot. Dat zijn eisen van dit toestel.

## De sifon

Remeha vult de sifon van de Calenta Ace met water tot de markeringsstreep, Vaillant die van de ecoTEC plus VHR tot 10 mm onder de condensafvoerleiding met de vlotter teruggeplaatst. De handleiding van het toestel bepaalt hoe.

!!! gevaar Geen ketel aan met een lege sifon
Remeha vraagt de sifon vóór de inbedrijfstelling te vullen om te voorkomen dat rookgassen in het vertrek komen. Na onderhoud stel je een ketel dus niet in bedrijf zolang de sifon leeg is.
!!!

## Praktijkgeval: F.028 en de sifon

Een Vaillant ecoTEC plus VHR meldt F.028: vlamsignaal in de ontstekingsfase niet herkend. In de oorzakenlijst staat naast gas, elektrode en aarding ook 'condenswater in de verbrandingskamer door een verstopte condensafvoer'. Het probleem kan dus onder de ketel liggen. Na de laatste ontstekingspoging voert Vaillant zelf een condenswater-blokkadetest uit, waardoor codes als F.028, F.029 en F.347 later verschijnen: wacht op de foutmelding voordat je conclusies trekt. Bij de Remeha Avanta en de Intergas Kombi Kompakt HRE staat een verstopte sifon of condensafvoer ook in de oorzakenlijst bij geen vlam.
`,
  checklist: [
    'Ik kan uitleggen waar het condensaat ontstaat en waar het heen gaat',
    'Ik weet dat reinigen van de warmtewisselaar per merk en model verschilt en lees het onderhoudshoofdstuk',
    'Ik kan een rendement op bovenwaarde omrekenen naar onderwaarde met Hi/Hs van ongeveer 0,902',
    'Ik stel geen ketel in bedrijf met een lege sifon'
  ],
  quiz: [
    {
      vraag: `Volgens de Remeha Avanta 24c is het rendement bij vollast 89,3% (Hs) bij 80/60 °C en 94,0% bij 50/30 °C. Wat is de beste verklaring voor het verschil?`,
      opties: [
        `Bij 50/30 °C brandt de ketel schoner`,
        `Bij een lagere retourtemperatuur condenseert meer waterdamp en die condensatiewarmte gaat naar het water`,
        `Bij 50/30 °C is het vermogen hoger`,
        `Het verschil komt door het verlies van de behuizing`
      ],
      goed: 1,
      uitleg: `Onder het condensatiepunt (ongeveer 55 °C volgens Remeha, bij de Calenta) condenseert waterdamp in de warmtewisselaar. Die latente warmte gaat naar het water. Behuizingsverlies (48 tot 79 W) is veel kleiner en verklaart het verschil niet.`
    },
    {
      vraag: `Dezelfde Avanta 24c haalt bij 50/30 °C 104,4% op onderwaarde. Kan dat?`,
      opties: [
        `Nee, een ketel kan nooit boven 100% komen, want er kan niet meer energie uit komen dan erin gaat`,
        `Alleen als de meting fout is`,
        `Ja, want de onderwaarde telt de condensatiewarmte niet mee in de noemer`,
        `Ja, want de ketel haalt warmte uit de aanzuiglucht`
      ],
      goed: 2,
      uitleg: `De onderwaarde (Hi) veronderstelt dat het water damp blijft. De condensatiewarmte wordt wel benut maar staat niet in de noemer. Theoretisch kan de ketel tot ongeveer 110,9% Hi komen. Op de bovenwaarde is 100% niet te overschrijden.`
    },
    {
      vraag: `Bij de jaarlijkse beurt van een Remeha Calenta Ace wil je de warmtewisselaar aan de verbrandingszijde met een waterstraal reinigen, zoals je dat bij een Vaillant ecoTEC plus VHR doet. Wat klopt?`,
      opties: [
        `Dat mag, want alle merken laten reinigen met een waterstraal toe zolang de brander en de isolatie droog blijven`,
        `Alleen met perslucht`,
        `Alleen met azijn (maximaal 5% zuur)`,
        `Dat mag niet: Remeha staat bij dit model reinigen met water, chemie, perslucht of gereedschap niet toe`
      ],
      goed: 3,
      uitleg: `Bij de Calenta Ace heeft de warmtewisselaar een oppervlaktebehandeling en hoeft hij niet te worden gereinigd. Vaillant laat juist reinigen met water of azijn. Het onderhoudshoofdstuk van dat toestel bepaalt wat mag.`
    },
    {
      vraag: `Een Vaillant ecoTEC plus VHR meldt F.028. Welke oorzaak uit de oorzakenlijst van de handleiding zit niet in de elektra of het gas maar onder de ketel?`,
      opties: [
        `Condenswater in de verbrandingskamer door een verstopte condensafvoer`,
        `Foutieve aarding van de ontstekingsunit en de ionisatiepen in de ketel`,
        `Een defecte ontstekingselektrode of een onderbroken ionisatiestroom bij de brander`,
        `Een gesloten gasafsluitkraan`
      ],
      goed: 0,
      uitleg: `Vaillant noemt condenswater in de verbrandingskamer expliciet als oorzaak van F.028. De andere opties horen bij elektra en gas. Wacht ook op de melding: de condenswater-blokkadetest vertraagt sommige codes.`
    },
    {
      vraag: `Een ketel verbruikt ongeveer 2 m3(n) gas per uur en het rookgas verlaat de ketel met 40 °C. Volgens het rekenmodel (0,78 liter condensaat per m3(n) bij 40 °C) is de condensaatstroom ongeveer:`,
      opties: [`0,4 liter per uur`, `0,8 liter per uur`, `1,6 liter per uur`, `3,2 liter per uur`],
      goed: 2,
      uitleg: `2 x 0,78 = 1,56, dus ongeveer 1,6 liter per uur. 3,2 liter per uur zou je krijgen met het theoretische maximum van 1,61 kg per m3(n), dat alleen bij volledige condensatie wordt gehaald.`
    }
  ],
  kaarten: [
    { voor: `Waarom kan het rendement van een ketel op onderwaarde boven 100% liggen?`, achter: `De condensatiewarmte wordt benut maar staat niet in de noemer (Hi).` },
    { voor: `Wat is het theoretische maximale rendement van een ketel op onderwaarde bij aardgas?`, achter: `Ongeveer 110,9% (1 gedeeld door 0,902).` },
    { voor: `Wat is de verhouding Hi/Hs voor aardgas volgens de Kiwa-BRL?`, achter: `0,902 voor aardgas (G25).` },
    { voor: `Waar ontstaat het condensaat in de ketel?`, achter: `In het onderste deel van de warmtewisselaar, als het rookgas onder het condensatiepunt komt (ongeveer 55 °C, Remeha Calenta).` },
    { voor: `Hoe zuur is het condensaat?`, achter: `pH onder 5 (Buildwise). Remeha noemt pH 3,5 tot 4,5 voor een grote gasboiler (90 tot 120 kW) en eist daarom een kunststof afvoer.` },
    { voor: `Mag je bij elke ketel de warmtewisselaar met water reinigen?`, achter: `Nee. De Vaillant ecoTEC plus VHR laat met water of azijn reinigen, de Remeha Calenta Ace verbiedt reinigen met water, chemie, perslucht en gereedschap.` },
    { voor: `Hoeveel procentpunt rendement (Hs) verliest de Remeha Avanta 24c tussen 30 en 60 °C retour?`, achter: `13 procentpunten: 97,9% (deellast, 30 °C retour) tegen 84,9% (laaglast, 60 °C retour).` },
    { voor: `Waarom verschijnt bij de Vaillant ecoTEC plus VHR F.028 soms met vertraging?`, achter: `Na de laatste ontstekingspoging voert Vaillant een condenswater-blokkadetest uit; codes als F.028, F.029 en F.347 komen daardoor later.` }
  ],
  bronnen: ['KET-17', 'KET-18', 'KET-19', 'KET-20', 'KET-21', 'KET-22', 'INS-46', 'VER-19', 'VER-20', 'VER-21', 'VER-22', 'REG-19', 'REN-01', 'REN-03', 'REN-04', 'REN-08', 'REN-09', 'GAS-10', 'ONT-10', 'ONT-11', 'ONT-12', 'ONT-13', 'STO-06', 'STO-15', 'MET-28']
},

/* ------------------------------------------------------------------ 5.6 */
{
  id: 'm05l06',
  nr: '5.6',
  titel: 'Pomp, 3-wegklep en tapwaterbereiding',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen hoe pomp en 3-wegklep het water door de ketel sturen bij verwarming en bij tapwater.',
  videos: [
    { taal: 'nl', titel: 'Driewegklep van een cv-ketel reviseren (Gijs Weezepoel)', yt: 'C-_z0eh9vZU', duur: '±3 min, 2017' },
    { taal: 'nl', titel: 'CV-ketel: driewegklep repareren (Wendela Plasschaert)', yt: 'pqOYQU5atmA', duur: '±7 min, 2021' },
    { taal: 'en', titel: 'Common causes of reduced hot water at the tap with a combi boiler (Baxi, VK)', yt: 'PCzOY4oC3ZQ', duur: '±2 min, 2020' }
  ],
  tekst: `
## Twee routes voor het warme water

De pomp voert het water door de warmtewisselaar. Bij verwarming gaat het verwarmde water naar de radiatoren en komt het als retour terug. Bij een combiketel komt er een tweede route bij: de platenwarmtewisselaar voor tapwater. De driewegklep bepaalt welke route het water neemt. Bij de Remeha Calenta is de klep veerbelast en verbruikt hij alleen stroom wanneer hij naar een andere stand loopt. Hoe de klep is aangedreven, kan per merk verschillen: lees het in de handleiding van dat toestel.

Bij tapwater werkt het zo: een tapsensor signaleert dat een kraan opengaat, de driewegklep schakelt naar de warmwaterstand en de pomp start. De Remeha Calenta 25s en 35s maken alleen verwarming, de 28c en 40c verwarming en tapwater.

## De pomp

De Remeha Calenta heeft een modulerende pomp die de besturing regelt op basis van het temperatuurverschil tussen aanvoer en retour. Remeha noemt EEI 0,20 de benchmark. Bij de Intergas Kombi Kompakt HRE stelt de installateur de pompstand in op het gewenste maximale vermogen en de waterzijdige weerstand en moduleert de pompcapaciteit mee met de CV-belasting.

Remeha laat bij de Calenta bij stromingsgeluid de maximale pompsnelheid verlagen (na ontluchten) en bij onvoldoende doorstroming van radiatoren de minimale pompsnelheid verhogen, via installateursparameters. Het werkpunt ligt waar de pompkarakteristiek de installatiekarakteristiek snijdt. De drukval in een gelijkblijvend leidingnet neemt ongeveer met het kwadraat van het debiet toe: verdubbel je het debiet, dan is de drukval ongeveer viermaal zo groot.

## Bypass en overstroomklep

Een overstroomklep (bypass) hoort bij sommige ketels: de Vaillant ecoTEC plus VHR heeft er een als component. Werking en instelling staan in de handleiding van dat model. Bij de Remeha Calenta combiketel (handleiding 2017) moet in een installatie waarin de aanvoer geheel van de retour kan worden afgesloten, bijvoorbeeld door thermostaatkranen, een bypassleiding worden gemonteerd of het expansievat in de aanvoerleiding worden geplaatst.

## Rekenvoorbeeld: hoeveel water moet er rond?

Het debiet volgt uit vermogen en temperatuurverschil: debiet (l/h) = vermogen (W) / (1,163 x delta T). De 1,163 volgt uit de soortelijke warmte van water (4,19 kJ per kg per K), bij 1 kg per liter.

- 20 kW bij delta T 20 K: 20.000 / (1,163 x 20) = ongeveer 860 l/h.
- 20 kW bij delta T 30 K: 20.000 / (1,163 x 30) = ongeveer 570 l/h.

Let bij fabrikantgetallen op wat ze zijn. De Intergas Kombi Kompakt HRE noemt in zijn installatievoorschrift debieten van 155 tot 1150 l/h bij 5,4 tot 40,9 kW, bijvoorbeeld 510 l/h bij 17,8 kW. Dat zijn minimale doorstroomhoeveelheden, geen ontwerpdebieten. Reken na: 17.800 / (510 x 1,163) = 30 K, dus zo'n debiet hoort bij een temperatuurverschil van ongeveer 30 K. Voor het inregelen vraagt Intergas zelf een temperatuurverschil tussen aanvoer en retour van ongeveer 20 graden: daarvoor stel je het maximale vermogen, de pompstand en zo nodig de radiatorafsluiters in. Remeha gebruikt voor het restopvoerhoogte-diagram van de Calenta (handleiding 2017) delta T 20 K. Een groter delta T betekent minder water, en door het kwadraat een veel lagere drukval.

!!! kern Debiet, delta T en vermogen horen bij elkaar
Weet je er twee, dan weet je de derde: 20 kW bij delta T 20 K vraagt ongeveer 860 l/h, bij delta T 30 K ongeveer 570 l/h. Een pomp die te weinig water rondpompt, geeft een te groot delta T en te weinig warmte bij de radiatoren.
!!!

## Tapwater: instelling, kalk en de klasse

De Intergas Kombi Kompakt HRE laat de tapwatertemperatuur instellen tussen 40 en 65 °C (standaard 60 °C) en heeft een tapcomfortfunctie die de warmtewisselaar warm houdt (aan, eco of uit). Kalkafzetting hangt volgens Remeha (Calenta) af van de waterhardheid, de samenstelling van de kalk, het aantal bedrijfsuren, het tapgedrag en de ingestelde tapwatertemperatuur. Het Waterwerkblad adviseert bij 60 °C of hoger thermostatische mengkranen vanwege verbrandingsgevaar voor risicogroepen.

De instelling heeft twee kanten. Te heet geeft verbrandingsgevaar. Te laag geeft legionellarisico: legionella groeit bij watertemperaturen tussen ongeveer 25 en 50 °C, en het Waterwerkblad WB 4.4 A (uitgave september 2025, met verwijzing naar NEN 1006) noemt voor een woninginstallatie zonder circulatie minstens 55 °C aan het mengtoestel of tappunt, bij gebruik volgens de ontwerpcondities. Hoe je dat afweegt, komt aan bod in les 6.5 (Legionella en veilig tapwater).

De tapcapaciteit staat in de CW-klasse: de Remeha Calenta 28c heeft Gaskeur CW4 (8,2 l/min bij 60 °C), de 40c CW5 (11,1 l/min). Zie ook les 6.4 (Tapwater: combi, boiler en CW-klassen).

## Praktijkgeval: de radiatoren blijven koud

Klacht: de ketel brandt, maar de radiatoren worden niet warm. De Intergas Kombi Kompakt HRE noemt voor 'CV komt niet op temperatuur' onder meer: installatiedruk te laag, te lage ingestelde temperatuur, pompstand te laag, geen doorstroming (minimaal 2 of 3 radiatoren open), ketelvermogen niet passend en vervuiling. Bij 'geen verwarming' hoort ook: pomp draait niet (display 80 en 1, connector X2) of geen 24 V spanning op de regeling. Bij de ATAG i-Serie is bij code 118 de eerste maatregel het deblokkeren van de ketelpomp. Hoe je een pomp deblokkeert, verschilt per toestel: volg de procedure uit de handleiding van het toestel en maak het toestel eerst spanningsloos en stel het veilig, zoals het blok hieronder beschrijft.

Bij geen warm tapwater noemt de Intergas Kombi Kompakt HRE: tapflow onder 1,5 l/min, geen 5 V op de stromingssensor of een defecte sensor S3. Wordt de cv-installatie tijdens het tappen ook warm, dan is er een thermosifon of tweede pomp: controleer keerklep of tweewegklep. Een vloerverwarmingsverdeler met eigen pomp die niet hydraulisch neutraal is aangesloten, kan ongewenste circulatie over het toestel veroorzaken.

Bij merkbaar minder tapwater reinigt Remeha (Tzerra Ace, minder dan 6,2 l/min bij dat model) de platenwarmtewisselaar met de tapwatercartridge, bijvoorbeeld met citroenzuur van pH ongeveer 3, en spoelt grondig na.

!!! gevaar Aan pomp en driewegklep werk je spanningsloos
Pomp en driewegklep voeren 230 V (Nefit ProLine NxT). Maak het toestel eerst spanningsloos door alle stroomvoorzieningen alpolig uit te schakelen en te beveiligen tegen herinschakelen (Vaillant ecoTEC plus VHR), voordat je een pomp deblokkeert of aan pomp, driewegklep of tapwaterwisselaar werkt. Volg voor het deblokkeren zelf de procedure uit de handleiding van het toestel.
!!!
`,
  checklist: [
    'Ik kan uitleggen wat de driewegklep doet bij verwarming en bij tapwater',
    'Ik kan uit vermogen en delta T het debiet berekenen',
    'Ik weet dat een minimaal debiet uit een handleiding niet hetzelfde is als het temperatuurverschil waarop het toestel wordt ingeregeld',
    'Ik maak het toestel spanningsloos en volg de handleiding voordat ik een pomp deblokkeer',
    'Ik loop bij klachten over koude radiatoren of te weinig tapwater de route van het water na'
  ],
  quiz: [
    {
      vraag: `Een ketel levert 20 kW aan het water. De aanvoer is 70 °C en de retour 50 °C. Welk debiet is nodig?`,
      opties: [`Ongeveer 570 l/h`, `Ongeveer 1720 l/h`, `Ongeveer 860 l/h`, `Ongeveer 34 l/h`],
      goed: 2,
      uitleg: `Delta T is 20 K, dus 20.000 / (1,163 x 20) = ongeveer 860 l/h. 570 l/h hoort bij delta T 30 K. 1720 l/h komt voort uit delta T 10 K.`
    },
    {
      vraag: `Wat doet de driewegklep in een Remeha Calenta combiketel?`,
      opties: [
        `Hij regelt de gasstroom naar de brander en houdt zo het vermogen op de ingestelde aanvoertemperatuur`,
        `Hij stuurt de luchttoevoer`,
        `Hij houdt de druk in de installatie constant`,
        `Hij bepaalt of het verwarmde water naar de cv-installatie of naar de platenwarmtewisselaar stroomt`
      ],
      goed: 3,
      uitleg: `De klep schakelt tussen verwarming en tapwater. Bij de Remeha Calenta is hij veerbelast en verbruikt hij alleen stroom wanneer hij naar een andere stand loopt. Hoe de klep is aangedreven, kan per merk verschillen.`
    },
    {
      vraag: `Klant: de ketel brandt, maar de radiatoren blijven koud. Wat hoort volgens de handleiding van de Intergas Kombi Kompakt HRE (voorbeeld) bij de eerste controles?`,
      opties: [
        `Het gasblok vervangen, omdat een te laag vermogen van de brander de radiatoren niet warm genoeg maakt`,
        `Controleren of de pomp draait, de pompstand niet te laag staat en minimaal 2 of 3 radiatoren open staan`,
        `De CO2 bijstellen zodat de verbranding meer vermogen aan het cv-water afgeeft en de radiatoren opwarmen`,
        `De sifon ontkalken`
      ],
      goed: 1,
      uitleg: `Bij 'CV komt niet op temperatuur' noemt Intergas pompstand en doorstroming. Het gasblok, de CO2 en de sifon horen bij gas en verbranding en verklaren koude radiatoren niet.`
    },
    {
      vraag: `De Intergas Kombi Kompakt HRE noemt bij 17,8 kW een minimale doorstroomhoeveelheid van 510 l/h. Bij welk temperatuurverschil tussen aanvoer en retour hoort dat debiet?`,
      opties: [`Ongeveer 10 K`, `Ongeveer 20 K`, `Ongeveer 30 K`, `Ongeveer 40 K`],
      goed: 2,
      uitleg: `Delta T is vermogen gedeeld door (1,163 x debiet): 17.800 / (1,163 x 510) = ongeveer 30 K. Voor het inregelen vraagt Intergas een temperatuurverschil van ongeveer 20 graden: een minimaal debiet en het temperatuurverschil waarop je inregelt zijn twee verschillende dingen. Bij 10 K zou er ongeveer 1530 l/h nodig zijn, bij 40 K ongeveer 380 l/h.`
    },
    {
      vraag: `Een klant meldt dat de tapcapaciteit van zijn Remeha Tzerra Ace sinds maanden merkbaar is gedaald. Welke oorzaak past bij de handleiding?`,
      opties: [
        `Kalkafzetting in de platenwarmtewisselaar en de tapwatercartridge`,
        `Een te lage gasvoordruk bij het toestel`,
        `Een defecte ionisatiepen in de brander`,
        `Een lege sifon onder de ketel`
      ],
      goed: 0,
      uitleg: `Remeha noemt reiniging van de platenwarmtewisselaar en de tapwatercartridge bij een merkbaar lagere tapcapaciteit. Kalk hangt af van waterhardheid, tapgedrag en ingestelde temperatuur. Gasvoordruk en ionisatie horen bij de verbranding.`
    }
  ],
  kaarten: [
    { voor: `Wat doet de driewegklep in een combiketel (Remeha Calenta)?`, achter: `Bepaalt of het verwarmde water naar de cv-installatie of naar de platenwarmtewisselaar (tapwater) stroomt. Veerbelast, stroom alleen bij verstellen.` },
    { voor: `Hoe reken je van vermogen en delta T naar debiet?`, achter: `Debiet in l/h = vermogen in W gedeeld door (1,163 x delta T).` },
    { voor: `Hoeveel water moet er rond voor 20 kW bij delta T 20 K?`, achter: `Ongeveer 860 l/h: 20.000 / (1,163 x 20).` },
    { voor: `Hoeveel water moet er rond voor 20 kW bij delta T 30 K?`, achter: `Ongeveer 570 l/h: 20.000 / (1,163 x 30).` },
    { voor: `Waar horen de Intergas-debieten van 155 tot 1150 l/h bij 5,4 tot 40,9 kW (Kombi Kompakt HRE) bij?`, achter: `Het zijn minimale doorstroomhoeveelheden bij ongeveer 30 K, geen ontwerp-delta T. Voor het inregelen vraagt Intergas ongeveer 20 graden.` },
    { voor: `Wat gebeurt er met de drukval als het debiet verdubbelt?`, achter: `Ongeveer viermaal zo groot: de drukval neemt toe met het kwadraat van het debiet.` },
    { voor: `Waarop regelt de modulerende pomp van de Remeha Calenta?`, achter: `Op het temperatuurverschil tussen aanvoer en retour.` },
    { voor: `Wat kan een vloerverwarmingsverdeler met eigen pomp veroorzaken als hij niet hydraulisch neutraal is aangesloten?`, achter: `Ongewenste circulatie over het toestel (Intergas Kombi Kompakt HRE). Oplossing: indirect hydraulisch neutraal aansluiten of een elektrische afsluiter.` },
    { voor: `Wat vergroot de kans op kalkuitval in de tapwaterwisselaar?`, achter: `Harder water, meer bedrijfsuren, meer tappen en een hogere ingestelde tapwatertemperatuur.` },
    { voor: `Bij welke watertemperaturen groeit legionella?`, achter: `Tussen ongeveer 25 en 50 °C (Waterwerkblad; de bereikgrens verschilt per bron).` },
    { voor: `Welke minimale temperatuur noemt het Waterwerkblad WB 4.4 A voor het tappunt in een woning zonder circulatie?`, achter: `Minstens 55 °C aan het mengtoestel of tappunt, bij gebruik volgens de ontwerpcondities (uitgave september 2025, NEN 1006).` },
    { voor: `Wat doe je voordat je aan pomp, driewegklep of tapwaterwisselaar werkt of een pomp deblokkeert?`, achter: `Het toestel spanningsloos maken en beveiligen tegen herinschakelen (pomp en driewegklep voeren 230 V bij de Nefit ProLine NxT), en de procedure uit de handleiding volgen.` }
  ],
  bronnen: ['KET-23', 'KET-24', 'KET-25', 'KET-26', 'TAP-01', 'TAP-02', 'TAP-06', 'TAP-07', 'TAP-08', 'TAP-11', 'TAP-12', 'TAP-13', 'HYD-21', 'HYD-22', 'HYD-23', 'HYD-24', 'HYD-25', 'HYD-34', 'HYD-36', 'ELE-05', 'STO-09', 'STO-10', 'STO-11', 'MRK-15', 'ONT-19', 'MET-25']
},

/* ------------------------------------------------------------------ 5.7 */
{
  id: 'm05l07',
  nr: '5.7',
  titel: 'Sensoren en beveiligingen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de sensoren en beveiligingen van een ketel benoemen en uitleggen wat er gebeurt als een meetwaarde niet klopt.',
  videos: [
    { taal: 'nl', titel: 'Wat is een NTC-weerstand? (Kapotte Spullen)', yt: 'DWM68TiSXmg', duur: '±7 min, 2022' },
    { taal: 'nl', titel: 'Flamco Prescor veiligheidsventiel: bescherming tegen overdruk (Flamco)', yt: 'cB8fmmuDO2g', duur: '±2 min, 2020' },
    { taal: 'en', titel: 'How to test thermistors, in perfect and imperfect scenarios (Baxi, VK)', yt: 'ncVJGNHQDSs', duur: '±2 min, 2018' }
  ],
  tekst: `
## Wat de ketel meet

De ketel regelt en beveiligt op wat hij meet. Een meetwaarde die niet klopt, geeft een melding of een blokkering, ook als het onderdeel in orde is. De volgende tabel toont voorbeelden uit handleidingen. Elke waarde is van dat model en verschilt per toestel.

| Meting | Voorbeeld (merk, model en uitgave) | Wat de handleiding zegt |
|---|---|---|
| Aanvoer- en retourtemperatuur (NTC) | Remeha Calenta (2017) | Aanvoer instelbaar van 20 tot 90 °C, modulerend terug bij het setpunt en uit bij het setpunt plus 5 °C. Maximaalbeveiliging vergrendelt bij 110 °C (code e12) |
| Waterdruk | Remeha Calenta (2017), ATAG i-Serie (2018) | Calenta: minimaal 0,8 bar, maximaal 3,0 bar. ATAG: code 118 onder 0,7 bar, code 117 boven 3 bar |
| Doorstroming | Intergas Kombi Kompakt HRE, Remeha Calenta (2017) | Intergas heeft een stromingssensor en een druksensor CV. Remeha bewaakt doorstroming op basis van temperatuurmetingen |
| Ventilatortoerental | Remeha Calenta (2017), Intergas Kombi Kompakt HRE (2018) | Calenta toont het toerental in omw/min (code Mf). Intergas meldt code 8: ventilatortoerental niet juist |
| Vlam | Alle ketels met ionisatie | Zie [les 5.4](les:m05l04) |

## De NTC: weerstand in plaats van temperatuur

De aanvoer- en retoursensor is een NTC: de weerstand daalt als de temperatuur stijgt. Bosch geeft in de serviceanleiding van de Condens 7800i W de weerstanden:

| Temperatuur | Weerstand |
|---|---|
| 0 °C | 33.404 ohm |
| 25 °C | 10.115 ohm |
| 50 °C | 3.624 ohm |
| 80 °C | 1.260 ohm |
| 90 °C | 918,3 ohm |

Remeha noemt voor de aanvoer- en retoursensor van de Avanta (handleiding 2019) een controlewaarde van 12 tot 15 kiloohm bij 20 tot 25 °C. Elke fabrikant geeft de waarden van zijn eigen toestel: andere sensoren (buiten, boiler) en andere merken hebben andere tabellen. Je kunt meten met een multimeter op het juiste weerstandsbereik, maar de waarde zegt alleen iets naast de tabel van dat toestel en bij een bekende temperatuur. Maak het toestel eerst spanningsloos en volg voor hoe en waar je meet de handleiding.

Praktijkvoorbeeld: het display van een Bosch Condens 7800i W laat een aanvoer van ongeveer 80 °C zien, terwijl je volgens de handleiding aan de sensor 33.400 ohm meet. Dat past bij 0 °C, niet bij 80 °C (1.260 ohm). De sensor, de connector of de bedrading is verdacht. Welke van de drie het is, weet je nog niet: meet en vergelijk verder voordat je iets vervangt.

## Beveiligingen: van waarschuwing tot vergrendeling

Fabrikanten onderscheiden niveaus. Remeha (Calenta Ace en Tzerra Ace): A is een waarschuwing (de ketel blijft in bedrijf), H een blokkering met automatisch herstel en E een vergrendeling met handmatige reset na opheffen van de oorzaak. Nefit (ProLine NxT) heeft soort 2 (blokkerend) en soort 3 (vergrendelend). Vaillant (ecoTEC plus VHR) staat maximaal 3 herhaalde resetpogingen toe en verwijst bij aanhoudende storing naar het serviceteam.

Sommige vergrendelingen zijn niet door de installateur te resetten. Bij de Nefit ProLine NxT is 8C 373 (branderthermostaat vaker dan toegestaan te hoge temperatuur) zo'n vergrendeling: het toestel kan niet worden herstart en moet door de fabrikant worden ontgrendeld.

De BRL 6000-25 noemt in de controlelijst voor onderhoud onder regeling en beveiliging onder meer: ionisatie-elektrode, ontstekingselektrode, droogkookbeveiliging, thermostaten, afvaltijd vlambeveiliging en rookgas-/luchttransportbeveiliging. Onder de metingen noemt dezelfde lijst het functioneren van de luchtdrukverschilschakelaar. Beveiligingen worden dus niet alleen uitgelezen: je controleert ze ook.

## Druk als beveiliging

Het veiligheidsventiel van een woninginstallatie opent meestal bij 3 bar (Remeha Calenta: maximale waterbedrijfsdruk 3,0 bar, Intergas Kombi Kompakt HRE: overstortventiel 3 bar). De Calenta heeft een minimale waterbedrijfsdruk van 0,8 bar en een geadviseerde vuldruk van 1,5 tot 2 bar. De Vaillant ecoTEC plus VHR zet het product buiten bedrijf onder 0,5 tot 0,8 bar. Ook hier verschilt het per model.

Het overstortventiel moet zijn werk kunnen doen. Bij de Intergas Kombi Kompakt HRE (installatievoorschrift 2021) zit het overstortventiel van 3 bar in de aanvoerleiding op maximaal 500 mm van het toestel, en mag er tussen het toestel en het overstortventiel geen afsluiter of vernauwing zitten. Ook bij een elektrische afsluiter (tweewegklepset) voor een vloerverwarmingsverdeler met eigen pomp vraagt Intergas de positie zo te kiezen, dat het veiligheidsventiel en het expansievat niet van het toestel geïsoleerd kunnen raken.

!!! kern Een afwijkende meetwaarde is niet hetzelfde als een defecte sensor
Vaillant F.083 (ecoTEC plus VHR) betekent dat bij branderstart geen of een te langzame temperatuurtoename aan de aanvoer- of retoursensor is geregistreerd. Dat kan de sensor zijn, maar ook water dat niet stroomt of een brander die niet brandt. Meet en vergelijk eerst, vervang daarna.
!!!

De Intergas Kombi Kompakt HRE controleert zelfs of de sensoren goed zijn aangesloten: code 2 is verwisseling van sensor S1 en S2.

!!! gevaar Spanning op de ketel
Branderautomaat, ventilator, pomp en driewegklep voeren 230 V (Nefit ProLine NxT). Op de netaansluitklemmen L en N van een Vaillant ecoTEC plus VHR staat continu spanning: maak het product spanningsloos door alle stroomvoorzieningen alpolig uit te schakelen en te beveiligen tegen herinschakelen. Fabrikanten beperken elektrische aansluitingen tot erkende installateurs of elektromonteurs. Wat jij als cv-monteur precies zelf aan de elektra mag doen, is in deze cursus niet als wettelijke regel vastgesteld: volg de handleiding en de Cursus Elektrotechniek.
!!!
`,
  checklist: [
    'Ik kan uitleggen waarom de weerstand van een NTC daalt bij hogere temperatuur',
    'Ik onderscheid waarschuwing, blokkering en vergrendeling',
    'Ik weet dat een sensor niet defect hoeft te zijn als een meetwaarde niet klopt',
    'Ik weet dat druk- en temperatuurgrenzen per model verschillen en zoek ze op'
  ],
  quiz: [
    {
      vraag: `Een aanvoersensor (NTC) van een Bosch Condens 7800i W meet 3.624 ohm. Welke temperatuur hoort daarbij volgens de tabel van dat model?`,
      opties: [`25 °C`, `50 °C`, `80 °C`, `0 °C`],
      goed: 1,
      uitleg: `In de tabel hoort 3.624 ohm bij 50 °C. De weerstand daalt als de temperatuur stijgt: 10.115 ohm bij 25 °C en 1.260 ohm bij 80 °C. Een andere fabrikant heeft een andere tabel.`
    },
    {
      vraag: `Je meet aan een NTC-sensor van een ketel een weerstand. Wat heb je nodig om te beoordelen of die waarde klopt?`,
      opties: [
        `Alleen de gemeten weerstand: elke NTC geeft bij dezelfde temperatuur dezelfde waarde`,
        `De weerstandstabel van een ander merk, want NTC-sensoren zijn onderling uitwisselbaar`,
        `De tabel van dat toestel en een bekende temperatuur bij de sensor tijdens de meting`,
        `De ionisatiestroom van dezelfde ketel, want die volgt de weerstand van de sensor`
      ],
      goed: 2,
      uitleg: `Een gemeten weerstand zegt alleen iets naast de tabel van dat toestel en bij een bekende temperatuur. Remeha noemt voor de Avanta een controlewaarde van 12 tot 15 kiloohm bij 20 tot 25 °C, Bosch geeft voor de Condens 7800i W een tabel per temperatuur: elk voor zijn eigen toestel. Andere sensoren en andere merken hebben andere tabellen.`
    },
    {
      vraag: `Een Remeha Calenta Ace toont een code die met H begint. Wat betekent dat?`,
      opties: [
        `Een blokkering: de ketel herstelt automatisch als de oorzaak verdwijnt`,
        `Een waarschuwing: de ketel blijft gewoon in bedrijf`,
        `Een vergrendeling: pas na opheffen van de oorzaak helpt een handmatige reset, eerder niet`,
        `Een sensorfout die alleen de fabrikant kan resetten`
      ],
      goed: 0,
      uitleg: `Bij Remeha is A een waarschuwing, H een blokkering met automatisch herstel en E een vergrendeling met handmatige reset. Dit is de structuur van Calenta Ace en Tzerra Ace, niet van elk merk.`
    },
    {
      vraag: `Een ATAG i-Serie toont code 117. Waarop wijst dat?`,
      opties: [
        `Druk te laag, onder 0,7 bar`,
        `Geen vlam na 5 ontsteekpogingen`,
        `De druk is te hoog, boven 3 bar`,
        `De veiligheidstemperatuur is overschreden`
      ],
      goed: 2,
      uitleg: `Code 117 is druk te hoog (boven 3 bar), code 118 druk te laag, 133 geen vlam na 5 pogingen en 110 veiligheidstemperatuur overschreden. Dat sluit aan bij het veiligheidsventiel dat meestal bij 3 bar opent.`
    },
    {
      vraag: `Een Nefit ProLine NxT toont 8C 373. Wat klopt volgens de instructie?`,
      opties: [
        `Reset drie keer, daarna herstart hij`,
        `De installateur kan hem resetten via het historiemenu, waarna de ketel na afkoelen weer normaal start`,
        `Het is een blokkering die na afkoelen vanzelf herstelt`,
        `Een vergrendeling die de installateur niet kan resetten: de fabrikant moet hem ontgrendelen`
      ],
      goed: 3,
      uitleg: `8C 373 betekent dat de branderthermostaat vaker dan toegestaan een te hoge temperatuur heeft gemeld. Het toestel kan niet worden herstart. Drie keer resetten is een regel van Vaillant en geldt hier niet.`
    }
  ],
  kaarten: [
    { voor: `Wat gebeurt er met de weerstand van een NTC als de temperatuur stijgt?`, achter: `De weerstand daalt. Bosch Condens 7800i W: 10.115 ohm bij 25 °C en 1.260 ohm bij 80 °C (voorbeeld).` },
    { voor: `Wat betekenen de eerste letters A, H en E bij Remeha Calenta Ace en Tzerra Ace?`, achter: `A: waarschuwing, ketel blijft in bedrijf. H: blokkering met automatisch herstel. E: vergrendeling, handmatige reset.` },
    { voor: `Bij welke temperatuur vergrendelt de maximaalbeveiliging van de Remeha Calenta?`, achter: `Bij 110 °C (code e12). Voorbeeld, model Calenta.` },
    { voor: `Wat betekent code 117 bij de ATAG i-Serie?`, achter: `Druk te hoog, boven 3 bar.` },
    { voor: `Wat betekent code 118 bij de ATAG i-Serie?`, achter: `Druk te laag, onder 0,7 bar, of pompdrukverhoging te laag (eerste maatregel: de ketelpomp deblokkeren volgens de handleiding).` },
    { voor: `Bij welke druk opent het veiligheidsventiel van een woninginstallatie meestal?`, achter: `Bij 3 bar. Openingsdruk per toestel controleren.` },
    { voor: `Hoe vaak staat Vaillant (ecoTEC plus VHR) herhaald resetten toe?`, achter: `Maximaal 3 keer, daarna verwijst Vaillant naar het serviceteam.` },
    { voor: `Welke spanning voeren branderautomaat, ventilator, pomp en driewegklep bij de Nefit ProLine NxT?`, achter: `230 V. Maak het toestel spanningsloos voor elektrisch werk.` },
    { voor: `Welke afstand en welke beperking noemt Intergas voor het overstortventiel van de Kombi Kompakt HRE?`, achter: `Maximaal 500 mm van het toestel in de aanvoerleiding, en geen afsluiter of vernauwing tussen toestel en overstortventiel.` }
  ],
  bronnen: ['KET-27', 'KET-28', 'KET-29', 'KET-30', 'HYD-04', 'HYD-14', 'HYD-17', 'HYD-32', 'HYD-35', 'MET-23', 'MET-24', 'MET-25', 'ELE-05', 'ELE-06', 'MRK-05', 'MRK-07', 'MRK-11', 'MRK-15', 'MRK-26', 'STO-03', 'STO-04', 'STO-19', 'ONT-07']
},

/* ------------------------------------------------------------------ 5.8 */
{
  id: 'm05l08',
  nr: '5.8',
  titel: 'De startvolgorde van begin tot eind',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de startvolgorde van een ketel doorlopen en bij een storing aanwijzen in welke stap het misgaat.',
  videos: [
    { taal: 'nl', titel: 'CV-ketel in storing: wat doe je? (Gasservice - Gaswacht)', yt: 'LPUVUYy9Dt4', duur: '±2 min, 2021' },
    { taal: 'nl', titel: 'Uitleg van de knoppen en codes van een Intergas Kombi Kompakt HRE (JW B)', yt: 'eI_1jQ_kHls', duur: '±5 min, 2020' },
    { taal: 'en', titel: 'How a boiler fires up: step-by-step sequence explained (SKAN Academy)', yt: '8rwt_1Xn5OE', duur: '±7 min, 2025' }
  ],
  tekst: `
## Een storing is een stap die niet lukt

Een ketel doorloopt bij elke warmtevraag dezelfde stappen. Een storing is bijna altijd een stap die niet lukt, en de melding laat zien welke. Wie de volgorde kent, weet wat er al wel is gelukt en waar hij dus niet meer hoeft te zoeken. Alles hieronder is een voorbeeld: de Remeha Calenta beschrijft de stappen als 'status' en 'sub-status'. Volgorde en namen verschillen per merk en model.

| Stap | Wat gebeurt er |
|---|---|
| 1 Warmtevraag en anti-pendel | De ketel wacht kort na een vorige stop, zodat hij niet te snel opnieuw start |
| 2 Driewegklep en pomp | De driewegklep wordt aangestuurd en de pomp start |
| 3 Wachten op temperaturen | De ketel wacht tot de temperaturen goed zijn |
| 4 Ventilator | Rookgasklep open (indien aanwezig), ventilator naar hoger toerental, voorventileren |
| 5 Vrijgave | De ketel wacht op release |
| 6 Ontsteking | Brander aan, voorontsteking, hoofdontsteking |
| 7 Vlamdetectie | De ketel ziet het vlamsignaal |
| 8 Bedrijf | De ketel moduleert en bewaakt |
| 9 Stop | Brander uit, naventileren, pomp nadraaien |

De anti-pendelfunctie zie je bij de Remeha Calenta in de statussen: na het stoppen van de warmtevraag komt status 6 sub-status 63, bij een nieuwe start status 1 sub-status 1 'anti-pendel'.

Hoe lang de ketel voorventileert en na het openen van het gas op het vlamsignaal wacht, staat per toestel in de handleiding: in de nagelopen handleidingen zijn die tijden niet als getal gevonden.

## De ontsteekpogingen en wat daarna volgt

De Intergas Kombi Kompakt HRE doet na ongeveer 15 seconden een nieuwe poging en valt na 4 ontsteekpogingen in storing. De ATAG i-Serie meldt storing 133 na 5 pogingen, en de handleiding van de Remeha Avanta onderscheidt na maximaal 5 startpogingen zonder vlam drie situaties (geen vonk, wel vonk geen vlam, te weinig ionisatie). De Vaillant ecoTEC plus VHR voert na de laatste ontstekingspoging zelf een condenswater-blokkadetest uit, waardoor codes als F.028 en F.029 later verschijnen.

Niet elke melding is een storing. De Remeha Calenta doorloopt na inschakelen bij voldoende waterdruk een ontluchtingsprogramma van ongeveer 3 minuten (vullen binnen 30 minuten, anders start het programma alsnog). De ATAG i-Serie toont bij het ontluchtingsprogramma code 105 en noemt het geen storing (ongeveer 7 minuten).

## Waar in de keten zit het?

Zet de waarneming naast de tabel:

| Waarneming | Waar in de keten | Eerste richting |
|---|---|---|
| Ketel start helemaal niet, ventilator draait niet | Stap 1 tot 3 | Warmtevraag, sensoren, pomp en klep |
| Ventilator draait niet op toerental (Intergas code 8) | Stap 4 | Ventilator, aansturing |
| Ventilator draait, geen vonk | Stap 6 | Transformator, kabel, elektrodeafstand, aarding |
| Vonk, geen vlam | Stap 6 | Gas: kraan, voordruk, ontluchting; ook lucht/rookgas en sifon |
| Vlam, dan storing | Stap 7 | Ionisatie: elektrode, aarding, verbranding |

Begin altijd met de foutcode en de foutgeschiedenis. Vaillant (ecoTEC plus VHR) bewaart de 10 laatste foutmeldingen, Nefit (ProLine NxT) heeft een historiemenu en Remeha (Calenta Ace) noemt de storingscode belangrijk voor het snel opsporen van de aard van de storing.

!!! kern Denk in stappen
Bepaal de laatste stap die wel lukte en de eerste die niet lukte. Daar ligt je zoekgebied. Meet in dat gebied voordat je iets vervangt: een onderdeel vervangen zonder bewijs is gokken.
!!!

## Praktijkgeval: geen verwarming, foutcode 4

Een Intergas Kombi Kompakt HRE meldt code 4: geen vlamsignaal. Je hoort de ventilator en de vonken. Dus stap 1 tot 6 werken. Vonken zijn er, dus de ontsteking geeft in elk geval een vonk. Dat zegt niets over de ontsteekafstand of over de ionisatie. Blijft over: komt er wel gas (kraan, voordruk 20 mbar en hoger), en is er wel vlam die de ketel niet ziet (ionisatie, aarding, ontsteekafstand)? Je meet de voordruk dynamisch, met het toestel in bedrijf (zie [les 5.3](les:m05l03)) en leest de ionisatie uit (zie [les 5.4](les:m05l04)).

## Veilig werken tijdens het zoeken

Nefit (ProLine NxT) eist het sluiten van de gaskraan voordat aan gasvoerende delen wordt gewerkt en controle van alle gas- en rookgasvoerende delen op dichtheid na afloop. ATAG (i-Serie) laat na onderhoud alle gasvoerende delen met lekzoekspray controleren.

Meet ook de CO in de opstellingsruimte. De BRL 6000-25 vraagt die meting voor de werkzaamheden, op ongeveer 1,7 m hoogte en ongeveer 1 m van het toestel; de waarde op het instrument is leidend. Na het werk mag je het toestel pas in bedrijf stellen als de CO-concentratie lager is dan 5 ppm en het toestel naar het oordeel van de Vakbekwaam Persoon veilig is. Bij 5 tot 20 ppm neem je eerst de oorzaak weg en meld je de constatering aan de opdrachtgever. Boven 20 ppm geldt een wettelijke meldplicht (Omgevingsregeling art. 5.52, Bbl art. 6.46): de certificaathouder meldt onverwijld en schriftelijk.

Weet waar je bevoegdheid ophoudt. Repareren, onderhouden en in bedrijf stellen van een cv-ketel mag wettelijk alleen een certificaathouder (Bbl art. 6.45). In de BRL 6000-25 is het in bedrijf stellen voorbehouden aan de Vakbekwaam Persoon: een Voldoende Onderricht Persoon werkt onder toezicht en verantwoordelijkheid van een Vakbekwaam Persoon. Deze cursus geeft geen Bewijs van Vakmanschap CO.

?? Verdieping: waarom staan er meerdere codes in een rij?
Bij Remeha (Calenta Ace) staan in de tabel met vergrendelingscodes meerdere codes in een rij. Ze moeten in volgorde met de omschrijvingen worden gelezen. Volgens die tabel hoort E.01.04 bij vijf keer onbedoeld vlamverlies en E.01.24 bij meerdere verbrandingsfouten binnen 24 uur. Lees in de handleiding zelf welke omschrijving bij welke code hoort.
??
`,
  checklist: [
    'Ik kan de stappen van een start doorlopen van warmtevraag tot vlamdetectie',
    'Ik kan uit een waarneming afleiden in welke stap het misgaat',
    'Ik begin bij een storing met de foutcode en de foutgeschiedenis',
    'Ik weet dat niet elke melding een storing is, zoals een ontluchtingsprogramma',
    'Ik ken de veiligheidsregels tijdens het storingzoeken: gaskraan, spanning, dichtheid en CO in de ruimte',
    'Ik meet de CO in de opstellingsruimte en ken de grenzen van 5 ppm en 20 ppm',
    'Ik weet waar mijn bevoegdheid ophoudt: alleen een certificaathouder werkt aan een cv-ketel'
  ],
  quiz: [
    {
      vraag: `Wat is de juiste volgorde bij een start van de Remeha Calenta (voorbeeld)?`,
      opties: [
        `Ontsteking, ventilator, pomp, vlamdetectie`,
        `Pomp, ontsteking, voorventileren, vlamdetectie`,
        `Anti-pendel, driewegklep en pomp, wachten op temperaturen, ventilator en voorventileren, ontsteking, vlamdetectie`,
        `Voorventileren, vlamdetectie, ontsteking, pomp`
      ],
      goed: 2,
      uitleg: `Volgens de sub-statussen komen eerst anti-pendel, driewegklep en pomp en het wachten op temperaturen, dan ventilator en voorventileren, dan brander aan, voorontsteking en hoofdontsteking, en dan vlamdetectie. Vlamdetectie kan pas als er een ontsteking is geweest.`
    },
    {
      vraag: `Een Intergas Kombi Kompakt HRE probeert te ontsteken en lukt dat niet. Wat gebeurt er?`,
      opties: [
        `Na ongeveer 15 seconden een nieuwe poging en na 4 pogingen storing`,
        `Direct storing na de eerste poging, want de ketel probeert nooit opnieuw te ontsteken`,
        `De ketel blijft eindeloos proberen`,
        `Na 10 pogingen storing`
      ],
      goed: 0,
      uitleg: `Volgens de handleiding ontsteekt Intergas met elektrische vonken, doet na ongeveer 15 seconden een nieuwe poging en valt na 4 pogingen in storing. ATAG meldt storing 133 na 5 pogingen: het aantal verschilt per merk.`
    },
    {
      vraag: `Je stelt vast dat er wel een vonk is maar geen vlam ontstaat. In welk deel van de keten zoek je eerst?`,
      opties: [
        `De pomp en de driewegklep, want die verzorgen het transport van het water door de warmtewisselaar naar de brander`,
        `De sensoren, want bij een vonk zonder vlam is een aanvoer- of retoursensor de meest voorkomende oorzaak`,
        `De ionisatie van een bestaande vlam`,
        `De gastoevoer bij de brander: kraan, voordruk en ontluchting, en ook lucht/rookgas en sifon`
      ],
      goed: 3,
      uitleg: `Bij wel vonk en geen vlam werkt de ontsteking, dus zoek je waar gas of lucht wegblijft. Ionisatie speelt pas als er wel een vlam is. De pomp zit eerder in de keten en is dan al gelukt.`
    },
    {
      vraag: `Een ATAG i-Serie toont code 105 na het bijvullen. Wat doe je?`,
      opties: [
        `De ketel direct resetten, want code 105 is een vergrendeling die alleen met een reset verdwijnt`,
        `Wachten: het is een ontluchtingsprogramma van ongeveer 7 minuten, geen storing`,
        `De druksensor vervangen`,
        `De pomp deblokkeren`
      ],
      goed: 1,
      uitleg: `Code 105 is het ontluchtingsprogramma en geen storing: er is niets stuk, dus resetten of onderdelen vervangen lost niets op. De pomp deblokkeren noemt ATAG als eerste maatregel bij code 118, niet bij code 105.`
    },
    {
      vraag: `Een Vaillant ecoTEC plus VHR toont F.028 pas met vertraging na de laatste ontstekingspoging. Wat is de verklaring?`,
      opties: [
        `F.028 bestaat niet bij deze ketel`,
        `De ketel heeft een geheugenfout`,
        `Vaillant voert na de laatste poging een condenswater-blokkadetest uit, waardoor de melding vertraagd verschijnt`,
        `De thermostaat stuurt de melding pas later door`
      ],
      goed: 2,
      uitleg: `Vaillant noemt dit in de handleiding: 'wacht op de foutmeldingen'. Trek dus geen conclusies voordat de melding er is. Bij F.028 hoort ook condenswater in de verbrandingskamer als mogelijke oorzaak.`
    },
    {
      vraag: `Wat noemen Vaillant, Nefit en Remeha als eerste diagnosestap bij een storing?`,
      opties: [
        `Het gasblok vervangen`,
        `Het toestel resetten tot de melding verdwijnt en daarna kijken of de storing terugkomt`,
        `De radiatorkranen dichtdraaien`,
        `De storingscode en de foutgeschiedenis uitlezen`
      ],
      goed: 3,
      uitleg: `Vaillant (ecoTEC plus VHR) leest de laatste 10 foutmeldingen uit, Nefit (ProLine NxT) het historiemenu, en Remeha (Calenta Ace) noemt de storingscode belangrijk voor het snel opsporen van de aard van de storing. Zonder de code weet je niet in welke stap het misging.`
    },
    {
      vraag: `Na afloop van een onderhoudsbeurt meet je in de opstellingsruimte 8 ppm CO. Wat doe je?`,
      opties: [
        `Het toestel in bedrijf stellen: 8 ppm ligt onder de wettelijke meldgrens van 20 ppm, dus er is geen bezwaar`,
        `Eerst de oorzaak wegnemen en de constatering aan de opdrachtgever melden voordat je het toestel in bedrijf stelt`,
        `Het toestel in bedrijf stellen en over een week opnieuw meten, want 8 ppm in de ruimte is een normale waarde`,
        `Direct schriftelijk melden bij het bevoegd gezag en de certificerende instelling, want 8 ppm ligt boven 5 ppm`
      ],
      goed: 1,
      uitleg: `De BRL 6000-25 staat in bedrijf stellen pas toe bij minder dan 5 ppm CO in de opstellingsruimte. Tussen 5 en 20 ppm neem je de oorzaak weg en meld je het aan de opdrachtgever. De onverwijlde schriftelijke melding aan onder meer het bevoegd gezag hoort bij meer dan 20 ppm, de wettelijke meldgrens. De 20 ppm is dus niet de grens waaronder je mag doorwerken.`
    }
  ],
  kaarten: [
    { voor: `Wat is de volgorde van een start bij de Remeha Calenta (voorbeeld)?`, achter: `Anti-pendel, driewegklep en pomp, wachten op temperaturen, ventilator en voorventileren, brander aan (voor- en hoofdontsteking), vlamdetectie.` },
    { voor: `Wat is anti-pendel?`, achter: `Een wachttijd na het stoppen van de warmtevraag, zodat de ketel niet te snel opnieuw start (Remeha Calenta).` },
    { voor: `Hoeveel ontsteekpogingen doet de Intergas Kombi Kompakt HRE?`, achter: `Nieuwe poging na ongeveer 15 seconden, storing na 4 pogingen.` },
    { voor: `Na hoeveel ontsteekpogingen meldt de ATAG i-Serie storing 133?`, achter: `Na 5 ontsteekpogingen zonder vlam. Het aantal verschilt per merk.` },
    { voor: `Wat betekent ATAG i-Serie code 105?`, achter: `Ontluchtingsprogramma actief (ongeveer 7 minuten). Geen storing.` },
    { voor: `Hoe lang duurt het ontluchtingsprogramma van de Remeha Calenta?`, achter: `Ongeveer 3 minuten.` },
    { voor: `Binnen welke tijd moet je de Remeha Calenta vullen, zodat het ontluchtingsprogramma niet alsnog start?`, achter: `Binnen 30 minuten. Daarna start het programma alsnog.` },
    { voor: `Waarom verschijnt een foutcode van de Vaillant ecoTEC plus VHR na de ontsteekpogingen soms met vertraging?`, achter: `Na de laatste poging voert Vaillant een condenswater-blokkadetest uit. De handleiding zegt: wacht op de foutmeldingen.` },
    { voor: `Wat is de eerste diagnosestap volgens Vaillant, Nefit en Remeha?`, achter: `De storingscode en de foutgeschiedenis uitlezen (Vaillant ecoTEC plus VHR: 10 laatste meldingen, Nefit ProLine NxT: historiemenu).` },
    { voor: `Onder welke CO-concentratie in de opstellingsruimte mag je een toestel na het werk in bedrijf stellen?`, achter: `Onder 5 ppm, en alleen als het toestel naar het oordeel van de Vakbekwaam Persoon veilig is (BRL 6000-25).` },
    { voor: `Bij welke CO-concentratie in de opstellingsruimte geldt de wettelijke meldplicht?`, achter: `Bij meer dan 20 ppm (Omgevingsregeling art. 5.52, Bbl art. 6.46): onverwijld en schriftelijk melden.` }
  ],
  bronnen: ['KET-13', 'KET-14', 'REG-10', 'HYD-18', 'MET-16', 'MET-18', 'MET-28', 'MRK-02', 'MRK-03', 'MRK-10', 'MRK-11', 'MRK-15', 'STO-01', 'STO-05', 'STO-17', 'ONT-08', 'GAS-17', 'INS-01', 'INS-07', 'KLA-09', 'KLA-10']
}
  ]
});
