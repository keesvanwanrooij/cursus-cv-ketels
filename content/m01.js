/* ==========================================================================
   m01.js - Module 1: Het vak, de wet en het CO-stelsel
   Lessen 1.1 t/m 1.7 zijn volledig geschreven op basis van
   project/docs/feiten/01-wet-en-certificering.md (en 02 en 04 voor CO en normen)
   en, voor les 1.7, project/docs/feiten/06-arbo-en-veilig-werken.md.
   ========================================================================== */

CURSUS.addModule({
  id: 'm01',
  nr: 1,
  deel: 1,
  titel: 'Het vak, de wet en het CO-stelsel',
  ondertitel: 'De basis van bevoegd en veilig werken.',
  niveau: 'Fundamenteel',
  studietijd: 7,
  kritiek: true,
  beginHier: true,
  intro: 'Wat het vak inhoudt, welke wetten en certificeringen gelden, en hoe je werkt met wet, norm en fabrikantvoorschrift. Dit is de basis van bevoegd en veilig werken aan gasverbrandingstoestellen.',
  inleiding: [
    'Werken aan gasverbrandingstoestellen is in Nederland sinds 1 april 2023 alleen toegestaan voor gecertificeerde bedrijven en monteurs. Dat is geen papierwerk: het stelsel is ingevoerd omdat er jaarlijks mensen overlijden aan koolmonoxide, vaak door installaties die op het oog in orde waren.',
    'Deze module legt uit hoe dat stelsel in elkaar zit, wat jij als monteur mag en moet, hoe het examen Vakmanschap CO werkt en wat je doet als je een onveilige situatie aantreft. Alles in deze module is nagelopen bij wetteksten, certificatieschema\'s en de officiële examenstukken.'
  ],
  leerdoelen: [
    'Uitleggen welke wettelijke eisen gelden voor werk aan gasverbrandingstoestellen',
    'De profielen, het examen en de verlenging van Vakmanschap CO beschrijven',
    'Het verschil tussen persoonlijke en bedrijfscertificering uitleggen',
    'Bij strijdige informatie bepalen welke bron voorgaat',
    'Vastleggen en handelen bij een onveilige situatie',
    'De belangrijkste risico\'s op een werklocatie herkennen en beperken'
  ],
  examen: [
    {
      vraag: `Sinds wanneer is het verboden om zonder certificaat werkzaamheden aan gasverbrandingstoestellen uit te voeren?`,
      opties: [`Sinds 1 oktober 2020, bij de start van het stelsel`, `Sinds 1 april 2023, twee keer eerder uitgesteld`, `Sinds 1 januari 2024, met de Omgevingswet`, `Sinds 1 april 2022, zoals oorspronkelijk gepland`],
      goed: 1,
      uitleg: `Het stelsel werd op 1 oktober 2020 van kracht, maar de verbodsbepaling zelf is twee keer uitgesteld (van 1 april 2022 naar 1 januari 2023 en daarna naar 1 april 2023). Op 1 januari 2024 kwam het verbod in art. 6.45 Bbl te staan, maar het verbod gold toen al.`
    },
    {
      vraag: `Een bewoner wil zelf de sifon van zijn cv-ketel schoonmaken. Mag dat zonder certificaat?`,
      opties: [`Ja, het is zijn eigen toestel en zijn eigen risico`, `Ja, als hij eerst de stekker eruit haalt en de gaskraan sluit`, `Nee, onderhoud is voorbehouden aan een certificaathouder`, `Ja, als hij daarna een gecertificeerde monteur laat controleren`],
      goed: 2,
      uitleg: `Installeren, repareren en onderhouden van een gasverbrandingstoestel is certificaatplichtig, ook als het je eigen toestel is. Wat een bewoner wel mag: de resetknop gebruiken, cv-water bijvullen, de stekker eruit halen, batterijen vervangen en de timer of thermostaat instellen.`
    },
    {
      vraag: `Wie kan er strafbaar zijn als werk aan een cv-ketel wordt uitgevoerd door een niet-gecertificeerd bedrijf?`,
      opties: [`Alleen het bedrijf dat het werk heeft uitgevoerd`, `Alleen de eigenaar, want het toestel is van hem`, `Zowel het bedrijf als degene die het werk laat uitvoeren`, `Niemand, zolang er geen ongeval met CO is gebeurd`],
      goed: 2,
      uitleg: `Art. 6.45 lid 1 Bbl geldt voor degene die de werkzaamheden uitvoert én voor degene die ze laat uitvoeren. De opdrachtgever (bewoner, VvE, verhuurder) is dus zelf ook verantwoordelijk.`
    },
    {
      vraag: `Wat is het Bewijs van Vakmanschap CO?`,
      opties: [`Een bedrijfscertificaat op naam van je werkgever, drie jaar geldig`, `Een persoonsgebonden bewijs van vakmanschap, vijf jaar geldig`, `Een mbo-diploma installatietechniek, afgegeven door de opleider`, `Een keurmerk op het toestel, afgegeven door de fabrikant`],
      goed: 1,
      uitleg: `Het Bewijs is persoonsgebonden en vijf jaar geldig. Het bedrijfscertificaat (BRL 6000-25 of K25000) staat daarnaast op naam van het bedrijf. Wie een toestel in bedrijf stelt namens een certificaathouder moet het Bewijs hebben.`
    },
    {
      vraag: `Voor welke taak in een certificaathoudend bedrijf is een Vakbekwaam Persoon (VP) verplicht?`,
      opties: [`Het schoonmaken van de sifon en condensafvoer`, `Het in bedrijf stellen van een toestel`, `Het bijvullen en ontluchten van de installatie`, `Het invullen van de werkbon en het dossier`],
      goed: 1,
      uitleg: `Alleen een VP mag een toestel in bedrijf stellen, groot onderhoud uitvoeren (brander, warmtewisselaar) en een installatie uit bedrijf nemen. Een Voldoende Onderricht Persoon (VOP) doet de overige taken onder toezicht.`
    },
    {
      vraag: `Je meet in de opstellingsruimte na onderhoud 12 ppm CO. Wat is de juiste conclusie?`,
      opties: [`Onder de meldgrens van 20 ppm, dus alles is in orde`, `Nader onderzoek, de oorzaak wegnemen en de opdrachtgever informeren`, `Direct melden bij de gemeente en de certificerende instelling`, `Alleen noteren op de werkbon en na een maand opnieuw meten`],
      goed: 1,
      uitleg: `Onder 5 ppm mag je in bedrijf stellen. Tussen 5 en 20 ppm volgt nader onderzoek, wordt de oorzaak weggenomen en informeer je de opdrachtgever. Boven 20 ppm geldt de wettelijke meldplicht van art. 6.46 Bbl.`
    },
    {
      vraag: `Wat is de wettelijke meldgrens voor CO in een ruimte waar personen kunnen zijn?`,
      opties: [`5 ppm`, `20 ppm`, `35 ppm`, `400 ppm`],
      goed: 1,
      uitleg: `De meldgrens is 20 ppm (art. 5.52 Omgevingsregeling). 5 ppm is de grens waaronder je mag inbedrijfstellen. 35 ppm is geen Nederlandse afkeurgrens voor de ruimte en 400 ppm is het niveau waarop het gemeentelijke handelingskader brandweer en ontruiming noemt.`
    },
    {
      vraag: `Bij een melding boven 20 ppm moet de certificaathouder onverwijld melden aan vier partijen. Welke?`,
      opties: [`Bewoner, eigenaar, gemeente en certificerende instelling`, `Bewoner, netbeheerder, brandweer en de toezichthouder TloKB`, `Eigenaar, ILT, gemeente en de fabrikant van het toestel`, `Bewoner, huisarts, gemeente en de schemabeheerder InstallQ`],
      goed: 0,
      uitleg: `Art. 6.46 Bbl noemt bewoner of gebruiker, eigenaar, bevoegd gezag (de gemeente) en de certificerende instelling. Een plicht om ook de netbeheerder te informeren is in wet en schema\'s niet gevonden.`
    },
    {
      vraag: `Welke van deze stellingen over de OvV-conclusies uit 2015 klopt?`,
      opties: [`De meeste CO-ongevallen gebeurden met oude ketels zonder periodiek onderhoud`, `De meeste ongevallen gebeurden met moderne, goed onderhouden cv-installaties`, `CO-melders werkten altijd goed en voorkwamen daardoor de meeste ongevallen`, `Er overlijden jaarlijks meer dan honderd mensen aan CO uit cv-installaties`],
      goed: 1,
      uitleg: `De Onderzoeksraad voor Veiligheid concludeerde dat de meeste ongevallen gebeurden met moderne en goed onderhouden cv-installaties, dat onderhoud alleen geen afdoende bescherming bood en dat de melder niet altijd werkte. Dat was de aanleiding voor het CO-stelsel.`
    },
    {
      vraag: `Welke norm gaat over het gasleidingwerk (werkdruk tot en met 500 mbar) in nieuwbouw?`,
      opties: [`NEN 2757`, `NEN 1006`, `NEN 1078`, `NEN 1087`],
      goed: 2,
      uitleg: `NEN 1078 (nieuwbouw) en NEN 8078 (bestaande bouw) zijn de prestatie-eisen voor het gasleidingwerk. NEN 2757 gaat over de rookgasafvoer, NEN 1087 over ventilatie en verbrandingslucht en NEN 1006 over drinkwater.`
    },
    {
      vraag: `Het Bbl schrijft de maximale beugelafstand van een rookgasafvoer voor.`,
      opties: [`Waar, dat staat in art. 4.136 over de rookgasafvoer`, `Waar, dat staat in bijlage II van de Omgevingsregeling`, `Onwaar, het staat in het fabrikantvoorschrift en NPR 3378`, `Onwaar, daar bestaat helemaal geen regel of richtlijn voor`],
      goed: 2,
      uitleg: `Het Bbl legt prestatie-eisen op en geen voorschriften voor afschot, beugelafstand, insteekdiepte of dilatatie. Die staan in de fabrikantvoorschriften en NPR 3378, en BRL 6000-25 verwijst ernaar.`
    },
    {
      vraag: `Een klant wil dat je een ketel in bedrijf stelt die een andere installateur heeft geplaatst. Wie is verantwoordelijk voor de veiligheid van de installatie?`,
      opties: [`De installateur die hem plaatste, want die kent de installatie`, `De fabrikant, want zijn voorschriften gelden voor het toestel`, `Het bedrijf dat hem in bedrijf stelt, voor de gehele installatie`, `De klant, omdat hij de opdracht tot inbedrijfstelling gaf`],
      goed: 2,
      uitleg: `Bij inbedrijfstelling draagt het gecertificeerde bedrijf de verantwoordelijkheid voor de veiligheid van de gehele installatie, ook als het die niet zelf heeft geplaatst. Wie zekerheid wil dat het veilig is, moet dus kijken naar het geheel: toestel, luchttoevoer en afvoer.`
    },
    {
      vraag: `Welke instantie handhaaft in de praktijk het verbod op werken zonder certificaat?`,
      opties: [`De TloKB, als landelijke toezichthouder`, `De Inspectie Leefomgeving en Transport (ILT)`, `De gemeente (soms via de omgevingsdienst)`, `De certificerende instelling van het bedrijf`],
      goed: 2,
      uitleg: `De gemeente is het bevoegd gezag. De TloKB houdt stelseltoezicht (aanwijzing van schema\'s en instellingen, het register) en de certificerende instellingen houden toezicht op hun certificaathouders, maar op ongecertificeerd werk handhaaft de gemeente.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 1.1 */
{
  id: 'm01l01',
  nr: '1.1',
  titel: 'Wat een cv-monteur doet en waarom dit vak levens redt',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt beschrijven wat het werk van een cv-monteur inhoudt en waarom CO-veiligheid de kern van het vak is.',
  videos: [
    { taal: 'nl', titel: 'Koolmonoxide: onderschat en onbegrepen gevaar (Onderzoeksraad voor Veiligheid)', yt: '3zqAQgEOyP4', duur: '±8 min, 2015' },
    { taal: 'nl', titel: 'Praktijkleren: Monteur Service en Onderhoud Installaties en Systemen (SBB)', yt: 'zmELEAoa1XA', duur: '±2 min, 2017' },
    { taal: 'en', titel: 'A Day in the Life of a Service & Repair Engineer (British Gas, VK)', yt: '029QjPRnoag', duur: '±2 min, 2024' }
  ],
  tekst: `
## Wat je doet als cv-monteur

Een cv-monteur werkt aan gebouwgebonden gasverbrandingstoestellen: cv-ketels, maar ook geisers, gasboilers en gaskachels, samen met de luchttoevoer en de rookgasafvoer die erbij horen. De wet noemt vier soorten werk: **installeren, repareren, onderhouden, en in bedrijf stellen en vrijgeven** voor gebruik. Wie een van die vier doet, moet in Nederland gecertificeerd zijn. Hoe dat precies werkt, leer je in de volgende lessen.

Binnen het vak zijn twee hoofdrichtingen. Ze bepalen ook de profielen van het examen Vakmanschap CO:

| Richting | Wat je vooral doet |
|---|---|
| Service en onderhoud | Toestellen controleren en onderhouden, beproeven en in bedrijf stellen, storingen oplossen, eigen werk controleren |
| Werktuigkundige installatie | Nieuwe toestellen installeren, componenten aansluiten, de rookgasafvoer aanleggen, beproeven en in bedrijf stellen |

Een eerste monteur doet daar meer bij: werk van anderen controleren en, bij installatie, ontwerpen en berekenen, of bij service, gasinstallaties beheren en onderhouden. Een zzp'er kiest altijd een eerste-monteurprofiel, omdat een zzp'er eindverantwoordelijk is.

## Waarom dit vak ertoe doet

Een cv-ketel is geen risicoloos apparaat. Als de verbranding onvolledig is of de afvoer niet in orde, ontstaat koolmonoxide (CO). CO hecht zich aan het hemoglobine in het bloed, ruim 200 keer sterker dan zuurstof, waardoor je organen zuurstofgebrek krijgen. Hoeveel mensen daaraan overlijden hangt af van wie je vraagt en wat er wordt geteld:

| Bron | Wat wordt geteld | Uitkomst |
|---|---|---|
| Onderzoeksraad voor Veiligheid (2015) | CO uit alle bronnen | Minstens 5 tot 10 doden per jaar, de werkelijke omvang is 3 tot 5 keer zo groot |
| RIVM (naar OvV 2015) | Acute CO-vergiftiging | Ongeveer 10 doden en bijna 200 ziekenhuisopnamen per jaar |
| Kiwa Technology voor Netbeheer Nederland | Aardgasongevallen achter de meter, met letsel | 2015 tot 2024: 1 tot 4 doden per jaar, gemiddeld 1,7 |
| TloKB, jaarverslag 2025 | Meldingen van certificaathouders bij CO boven 20 ppm | 106 meldingen in 2025, waarvan 23 met levensbedreigende waarden |

De cijfers verschillen omdat de definities verschillen: de ene bron telt alle CO-bronnen (ook kachels en barbecues), de andere alleen ongevallen met een gasinstallatie. Noem daarom bij een cijfer altijd de bron en wat er is geteld.

!!! kern Onderhoud alleen beschermt niet
De Onderzoeksraad concludeerde in 2015 dat de meeste CO-ongevallen met een cv-installatie gebeurden met moderne en goed onderhouden installaties. Periodiek onderhoud bood geen afdoende bescherming, en de CO-melder werkte niet altijd. Een ketel die goed brandt is dus nog geen veilige installatie: je moet het geheel beoordelen, en dat aantoonbaar.
!!!

## Wat er in de praktijk misgaat

Sinds 2023 melden certificaathouders (bijna-)ongevallen. In 2025 waren dat er 106, op ruim 2,5 miljoen afgemelde werkzaamheden: ongeveer 1 melding per 24.000 werkzaamheden. Het gaat dus meestal goed. Als het misgaat, was de oorzaak in 2025 het vaakst:

- de **rookgasafvoer** (35 meldingen)
- een algemeen defect aan het toestel (24)
- een lek in de warmtewisselaar (14)

De afvoer staat bovenaan. Daarom besteedt deze cursus een hele module aan rookgasafvoer en luchttoevoer (module 8), en daarom kijk je bij elk toestel ook naar wat eromheen zit.

Het aantal CO-incidenten lijkt sinds 2015 ongeveer gehalveerd, maar de registratie blijft versnipperd en onvolledig. De cijfers hierboven zijn dus geen exacte telling.

## Jouw verantwoordelijkheid

Als jij een toestel in bedrijf stelt, draag jij (namens het gecertificeerde bedrijf) de verantwoordelijkheid voor de veiligheid van de **gehele** installatie, ook als een ander het toestel heeft geplaatst. Dat is de kern van het vak: niet alleen het toestel aan de praat krijgen, maar kunnen aantonen dat de installatie veilig is.
`,
  checklist: [
    'Ik kan de vier certificaatplichtige werkzaamheden opnoemen',
    'Ik kan uitleggen waarom onderhoud alleen geen bescherming tegen CO is',
    'Ik noem bij een CO-cijfer altijd de bron en wat er is geteld',
    'Ik weet dat ik bij inbedrijfstelling verantwoordelijk ben voor de hele installatie'
  ],
  quiz: [
    {
      vraag: `Welke vier werkzaamheden aan een gasverbrandingstoestel vallen onder de certificeringsplicht?`,
      opties: [
        `Installeren, repareren, onderhouden, en in bedrijf stellen en vrijgeven`,
        `Installeren, keuren van de installatie, adviseren en verkopen van toestellen`,
        `Installeren, onderhouden, reinigen en meten van de installatie`,
        `Ontwerpen van de installatie, installeren, verkopen en repareren`
      ],
      goed: 0,
      uitleg: `Art. 6.45 lid 2 Bbl noemt precies deze vier: installeren, repareren, onderhouden, en in bedrijf stellen en vrijgeven voor gebruik. Adviseren of verkopen valt er niet onder, meten wel als onderdeel van het werk.`
    },
    {
      vraag: `Wat concludeerde de Onderzoeksraad voor Veiligheid in 2015 over de installaties waarmee de meeste CO-ongevallen gebeurden?`,
      opties: [
        `Het waren vooral oude ketels die niet waren onderhouden`,
        `Het waren vooral geisers zonder rookgasafvoer of ventilatie`,
        `Het waren meestal moderne en goed onderhouden cv-installaties`,
        `Het waren vooral ketels die bewoners zelf hadden geinstalleerd`
      ],
      goed: 2,
      uitleg: `De conclusie was juist onverwacht: onderhoud bood geen afdoende bescherming. Daarom draait het stelsel om aantoonbaar veilig werken (meten, controleren, vastleggen) en niet alleen om onderhoud.`
    },
    {
      vraag: `Twee bronnen noemen verschillende aantallen CO-doden per jaar. Wat is de beste verklaring?`,
      opties: [
        `Een van de twee bronnen heeft zich vergist bij het tellen`,
        `Ze tellen iets anders: alle CO-bronnen, of alleen aardgasongevallen`,
        `Het aantal is elk jaar sterk gedaald, dus de ene bron is verouderd`,
        `De ene bron telt alleen Nederland, de andere de gehele Europese Unie`
      ],
      goed: 1,
      uitleg: `De OvV telt CO uit alle bronnen (ook kachels en barbecues) en schat de werkelijke omvang hoger. Kiwa Technology telt alleen ongevallen met aardgas achter de meter met letsel. Daarom geef je bij een cijfer altijd de bron en de definitie.`
    },
    {
      vraag: `Wat was in 2025 de meest genoemde oorzaak in de CO-meldingen van certificaathouders?`,
      opties: [
        `Een defecte of verkeerd ingestelde thermostaat`,
        `Een lek in de warmtewisselaar van de ketel`,
        `Een probleem met de rookgasafvoer van het toestel`,
        `Een verkeerd afgestelde pomp of te lage waterdruk`
      ],
      goed: 2,
      uitleg: `De rookgasafvoer stond met 35 meldingen bovenaan, gevolgd door een algemeen defect aan het toestel (24) en een lek in de warmtewisselaar (14). Daarom is afvoer en luchttoevoer een aparte, zware module in deze cursus.`
    },
    {
      vraag: `Je stelt een ketel in bedrijf die door een collega-bedrijf is geplaatst. Wie is verantwoordelijk voor de veiligheid van de gehele installatie op dat moment?`,
      opties: [
        `Het bedrijf dat de ketel oorspronkelijk plaatste`,
        `Het gecertificeerde bedrijf dat de ketel in bedrijf stelt`,
        `De fabrikant, want die stelt de voorschriften`,
        `De bewoner, want hij heeft de opdracht gegeven`
      ],
      goed: 1,
      uitleg: `Bij inbedrijfstelling ligt de verantwoordelijkheid voor de veiligheid van de hele installatie bij het gecertificeerde bedrijf dat inbedrijfstelt, ook als het de installatie niet zelf plaatste. Kijk dus verder dan het toestel alleen.`
    }
  ],
  kaarten: [
    { voor: `Welke vier werkzaamheden aan gasverbrandingstoestellen zijn certificaatplichtig?`, achter: `Installeren, repareren, onderhouden, en in bedrijf stellen en vrijgeven (Bbl art. 6.45 lid 2).` },
    { voor: `Wat concludeerde de OvV in 2015 over CO-ongevallen met cv-installaties?`, achter: `Meestal moderne, goed onderhouden installaties: periodiek onderhoud bood geen afdoende bescherming.` },
    { voor: `Wat waren in 2025 de drie meest genoemde oorzaken in CO-meldingen?`, achter: `Rookgasafvoer (35), algemeen toestelsdefect (24), lek in de warmtewisselaar (14).` },
    { voor: `Wie draagt bij inbedrijfstelling de verantwoordelijkheid voor de veiligheid van de hele installatie?`, achter: `Het gecertificeerde bedrijf dat inbedrijfstelt, ook als het de installatie niet zelf heeft geplaatst.` },
    { voor: `Wat is de "Gasketelwet" formeel?`, achter: `Een bijnaam. Officieel het CO-stelsel: certificering van werkzaamheden aan gasverbrandingsinstallaties.` },
    { voor: `Wat is het verschil tussen het profiel Service en Onderhoud en Werktuigkundige Installatie?`, achter: `Service en onderhoud controleert en onderhoudt toestellen. Werktuigkundige installatie installeert nieuwe toestellen en legt de rookgasafvoer aan.` }
  ],
  bronnen: ['WET-01', 'WET-10', 'WET-21', 'WET-40', 'WET-80', 'WET-81', 'WET-82', 'WET-84', 'WET-54', 'WET-86', 'WET-88', 'EXA-05', 'EXA-06', 'CO-02']
},

/* ------------------------------------------------------------------ 1.2 */
{
  id: 'm01l02',
  nr: '1.2',
  titel: 'De wet: wie mag wat aan een gasverbrandingstoestel',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt uitleggen welke wettelijke eisen gelden voor werk aan gasverbrandingstoestellen en welke werkzaamheden onder de certificeringsplicht vallen.',
  videos: [
    { taal: 'nl', titel: 'Per 1 april CO-vrij (Brandweer Twente)', yt: '84ebfNB2658', duur: '±1 min, 2023' },
    { taal: 'nl', titel: 'Gasketelwet: voldoe jij eraan? Webinar met CO-certificatie (Wasco)', yt: '5ycykBZp_oQ', duur: '±39 min, 2024' },
    { taal: 'en', titel: 'Introduction to Gas Safe Register (VK, ter vergelijking met het Nederlandse stelsel)', yt: '27y9mbPKsX4', duur: '±2 min, 2010' }
  ],
  tekst: `
## De "Gasketelwet" bestaat niet

Iedereen zegt "de Gasketelwet", maar een wet met die titel is er niet. Het is een bijnaam voor het **CO-stelsel**: een samenhangend geheel van een wet, een algemene maatregel van bestuur, ministeriële regelingen en certificatieschema's. Kijk je de stukken na, dan zie je dit:

| Wanneer | Wat |
|---|---|
| 26 juni 2019 | Wet tot wijziging van de Woningwet: het stelsel van certificering wordt geïntroduceerd (Stb. 2019, 383) |
| 14 september 2020 | Besluit dat Bouwbesluit 2012 en Bbl aanpast en de regels uitwerkt (Stb. 2020, 348) |
| 1 oktober 2020 | Het stelsel treedt in werking |
| 1 april 2023 | Het **verbod** om zonder certificaat te werken gaat in. Eerder uitgesteld: van 1 april 2022 naar 1 januari 2023 en daarna naar 1 april 2023, omdat de schema's en certificerende instellingen te laat klaar waren |
| 1 januari 2024 | Met de Omgevingswet staat het verbod in **art. 6.45 Bbl** (Besluit bouwwerken leefomgeving) |

Als je iemand hoort zeggen "verplicht sinds 2023", klopt dat dus voor het verbod, niet voor het stelsel.

## Wat art. 6.45 Bbl zegt

- **Lid 1:** aan de regels moet worden voldaan door degene die het werk uitvoert **én** door degene die het laat uitvoeren. De opdrachtgever (bewoner, VvE, verhuurder) is dus zelf ook verantwoordelijk.
- **Lid 2:** vier werkzaamheden aan een gebouwgebonden gasverbrandingstoestel en de voorzieningen voor verbrandingsluchttoevoer en rookgasafvoer mogen alleen door een certificaathouder: installeren, repareren, onderhouden, en in bedrijf stellen en vrijgeven.
- **Lid 3:** het verbod geldt niet voor stookinstallaties boven 100 kW (die vallen onder een keuringsregime) en niet voor werkzaamheden voor het verkrijgen van een certificaat, zoals de praktijktoets.

## Voor welke toestellen geldt het?

Het verbod geldt voor gebouwgebonden gasverbrandingstoestellen voor ruimteverwarming en/of warm tapwater **tot 100 kW nominaal vermogen**: cv-ketels, geisers, gasboilers, moederhaarden, gas-sfeerhaarden en gaskachels, samen met de luchttoevoer en rookgasafvoer, ook collectieve systemen. Het gaat om gas dat uit koolstofverbindingen bestaat, zoals aardgas en propaan.

Buiten het verbod vallen gasfornuizen en kooktoestellen, losse niet-gebouwgebonden voorzieningen (heteluchtkanonnen, terraskachels) en toestellen in vaartuigen, voertuigen en caravans. De voorschriften van de fabrikant en de normen blijven daar wel gelden.

## Wat mag wel en wat niet zonder certificaat

| Mag ook zonder certificaat | Mag niet zonder certificaat |
|---|---|
| Resetknop gebruiken | Een toestel installeren, repareren of onderhouden |
| Cv-water bijvullen | Een toestel in bedrijf stellen |
| Stekker eruit halen, batterijen vervangen | Een rookgasafvoer aanleggen, aanpassen of repareren |
| Timer of thermostaat instellen | De rookgasafvoer (tijdelijk) losnemen of terugplaatsen, bijvoorbeeld bij dakwerk |
| Een radiator ontluchten | |

Werk aan gasleidingen, expansievaten en radiatoren valt niet onder het verbod, maar moet natuurlijk wel aan de geldende voorschriften voldoen. Let op dat BRL 6000-25 bij het installeren of vervangen van een toestel wel een lekdichtheidsbeproeving van de gasleiding eist: dat is een schema-eis boven de wet.

!!! kern Ook de bewoner mag het niet
De verbodsbepaling geldt ook voor bewoners en eigenaren die hun eigen toestel willen onderhouden of repareren. Dat is vaak de eerste vraag die klanten stellen: leg het uit zonder betuttelend te zijn. Het losnemen of terugplaatsen van een rookgasafvoer tijdens bouwwerk, zonder installateur, is volgens de TloKB een terugkerende aanleiding voor incidenten.
!!!

## Handhaving

De **gemeente** is het bevoegd gezag en handhaaft op het verbod (soms via de omgevingsdienst). Ze kan zich richten tot zowel de installateur als de bewoner of eigenaar die het werk liet uitvoeren. Bestuursrechtelijk zijn dat een last onder dwangsom of bestuursdwang, en het verbieden van het gebruik van een toestel dat te veel CO produceert. Strafrechtelijk loopt de handhaving via de Wet op de economische delicten, waarbij ook de opdrachtgever strafbaar is.

Een vast boetebedrag voor "werken zonder certificaat" staat niet in de bronnen die we hebben nagelopen. Bedragen die je op internet ziet, zijn vaak niet te herleiden naar de wet.

De **TloKB** handhaaft niet zelf op ongecertificeerd werk. Zij houdt namens de minister toezicht op het stelsel: aanwijzing van certificatieschema's en instellingen en het openbare register van certificaathouders.
`,
  checklist: [
    'Ik weet dat "Gasketelwet" een bijnaam is en waar het verbod nu staat',
    'Ik kan uitleggen voor welke toestellen en tot welk vermogen het verbod geldt',
    'Ik kan opsommen wat een bewoner wel en niet zelf mag doen',
    'Ik weet wie er strafbaar kan zijn en wie handhaaft'
  ],
  quiz: [
    {
      vraag: `Sinds wanneer geldt het verbod om zonder certificaat aan gasverbrandingstoestellen te werken?`,
      opties: [`1 oktober 2020`, `1 april 2022`, `1 april 2023`, `1 januari 2024`],
      goed: 2,
      uitleg: `Het stelsel trad op 1 oktober 2020 in werking, maar het verbod is twee keer uitgesteld en gaat op 1 april 2023 in. Sinds 1 januari 2024 staat het in art. 6.45 Bbl.`
    },
    {
      vraag: `Tot welk vermogen geldt het verbod voor een gebouwgebonden gasverbrandingstoestel?`,
      opties: [`Tot 30 kW`, `Tot 100 kW nominaal`, `Tot 500 kW`, `Er is geen vermogensgrens`],
      goed: 1,
      uitleg: `Het verbod geldt tot 100 kW nominaal vermogen. Gasgestookte stookinstallaties boven 100 kW vallen onder een ander regime.`
    },
    {
      vraag: `Een bewoner wil zelf iets aan zijn cv-ketel doen. Wat mag hij zonder certificaat?`,
      opties: [
        `De brander reinigen, want het is zijn eigen ketel`,
        `De rookgasafvoer nalopen en losse delen vastzetten`,
        `Cv-water bijvullen en de resetknop gebruiken`,
        `Het toestel opnieuw afstellen met een handleiding`
      ],
      goed: 2,
      uitleg: `Bijvullen, resetten, de stekker eruit halen, batterijen vervangen en de timer of thermostaat instellen mogen. Reinigen, afstellen of aan de afvoer werken is onderhoud of reparatie en dus voorbehouden aan een certificaathouder.`
    },
    {
      vraag: `Een aannemer haalt tijdens dakwerk tijdelijk de rookgasafvoer van een ketel los en zet hem terug. De aannemer is niet gecertificeerd. Wat klopt?`,
      opties: [
        `Dat mag, want hij werkt niet aan het toestel zelf`,
        `Dat mag niet: werk aan de rookgasafvoer valt onder het verbod`,
        `Dat mag als de bewoner toestemming geeft`,
        `Dat mag als hij daarna de ketel laat controleren`
      ],
      goed: 1,
      uitleg: `De rookgasafvoer hoort bij het gasverbrandingstoestel in de wet. Het (tijdelijk) losnemen of monteren door een niet-gecertificeerde is een bekende bron van incidenten en valt onder het verbod.`
    },
    {
      vraag: `Wie kan er strafbaar zijn als een niet-gecertificeerd bedrijf werk aan een cv-ketel uitvoert?`,
      opties: [
        `Alleen het bedrijf dat zonder certificaat werkt`,
        `Alleen de bewoner of eigenaar die het werk liet doen`,
        `Het bedrijf én degene die het werk liet uitvoeren`,
        `Alleen de fabrikant van het toestel bij een ongeval`
      ],
      goed: 2,
      uitleg: `Art. 6.45 lid 1 Bbl treft de uitvoerder én degene die het laat uitvoeren. Bewoners, eigenaren en verhuurders kunnen dus zelf ook worden aangesproken.`
    },
    {
      vraag: `Wie handhaaft in de praktijk het verbod op werken zonder certificaat?`,
      opties: [`De TloKB`, `De gemeente`, `De certificerende instelling`, `InstallQ`],
      goed: 1,
      uitleg: `De gemeente is het bevoegd gezag. De TloKB houdt stelseltoezicht en de certificerende instellingen controleren hun eigen certificaathouders, maar ze handhaven niet op ongecertificeerd werk.`
    }
  ],
  kaarten: [
    { voor: `Sinds wanneer geldt het verbod op werk zonder certificaat, en waar staat het nu?`, achter: `Sinds 1 april 2023 (twee keer uitgesteld). Sinds 1 januari 2024 in art. 6.45 Bbl.` },
    { voor: `Voor welke toestellen geldt het verbod?`, achter: `Gebouwgebonden gasverbrandingstoestellen voor ruimteverwarming en/of warm tapwater tot 100 kW nominaal, plus luchttoevoer en rookgasafvoer.` },
    { voor: `Noem vijf handelingen die een bewoner wel zelf mag doen.`, achter: `Resetknop, cv-water bijvullen, stekker eruit, batterijen vervangen, timer of thermostaat instellen.` },
    { voor: `Wie handhaaft het verbod op werken zonder certificaat?`, achter: `De gemeente (soms via de omgevingsdienst), niet de TloKB of de ILT.` },
    { voor: `Wie kan er strafbaar zijn bij werk door een niet-gecertificeerd bedrijf?`, achter: `De uitvoerder én degene die het werk laat uitvoeren (art. 6.45 lid 1 Bbl).` },
    { voor: `Vallen gasfornuizen onder het verbod?`, achter: `Nee. Kooktoestellen en fornuizen, en toestellen in vaartuigen, voertuigen en caravans vallen erbuiten.` }
  ],
  bronnen: ['WET-01', 'WET-02', 'WET-03', 'WET-04', 'WET-05', 'WET-06', 'WET-07', 'WET-08', 'WET-09', 'WET-10', 'WET-11', 'WET-19', 'WET-21', 'WET-22', 'WET-23', 'WET-24', 'WET-25', 'WET-26', 'WET-29', 'WET-30', 'WET-31', 'WET-32', 'WET-33', 'WET-37']
},

/* ------------------------------------------------------------------ 1.3 */
{
  id: 'm01l03',
  nr: '1.3',
  titel: 'Vakmanschap CO: profielen, examen en verlenging',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kent de profielen, de opbouw van het theorie- en praktijkexamen en de eisen voor verlenging.',
  videos: [
    { taal: 'nl', titel: 'Vakmanschap CO (Vakmanschap Techniek, het exameninstituut)', yt: 'uvlxJhd2vJc', duur: '±4 min, 2023' },
    { taal: 'nl', titel: 'Gasketelwet: Bewijs van Vakmanschap CO in 2021 of eerder behaald? Verlengen (Techniek Nederland)', yt: 'soM2tOIy_oQ', duur: '±1 min, 2026' },
    { taal: 'en', titel: 'Becoming a Gas Safe registered engineer (VK, ter vergelijking met Vakmanschap CO)', yt: 'V-NlqIFvJUA', duur: '±4 min, 2014' }
  ],
  tekst: `
## Wat het Bewijs van Vakmanschap CO is

Het Bewijs van Vakmanschap CO is **persoonsgebonden** en **vijf jaar geldig**. Wie namens een certificaathouder een gasverbrandingsinstallatie in bedrijf stelt, moet het hebben. Na het examen komt het bewijs binnen twee weken in de Vakpaspoort-app te staan en de geldigheid is te controleren in het Centraal Register Techniek.

Wie doet wat? **Vakmanschap Techniek** is de exameninstelling die het bewijs afgeeft. De **Vakbekwaamheidscommissie** stelt het examenproduct vast en **InstallQ** accrediteert de instellingen die examens mogen afnemen. Opleiden en examineren zijn gescheiden: een opleider (zoals Techniek Helden, IW, Wasco of ROVC) bereidt je voor, maar het examen doe je bij een geaccrediteerde instelling. Deze cursus is een voorbereiding en geen examen.

## De zes profielen

| Profiel | Niveau |
|---|---|
| Monteur Service & Onderhoud | 2 |
| Eerste Monteur Service & Onderhoud | 3 |
| Monteur Werktuigkundige Installatie | 2 |
| Eerste Monteur Werktuigkundige Installatie | 3 |
| Monteur Werktuigkundige Installatie & Service en Onderhoud | 2 |
| Eerste Monteur Werktuigkundige Installatie & Service en Onderhoud | 3 |

De monteur controleert en onderhoudt toestellen (service) of installeert nieuwe toestellen en legt de afvoer aan (installatie). De eerste monteur controleert daarnaast werk van anderen en beheert gasinstallaties (service), of ontwerpt en berekent en legt de rookgasafvoer in gestapelde bouw aan (installatie). Een zzp'er kiest altijd een eerste-monteurprofiel. Wie een mbo-opleiding heeft afgerond, heeft in een aantal gevallen automatisch gelijkstelling, maar niet in alle: check de diplomalijst.

!!! kern Persoon en bedrijf zijn twee aparte bewijzen
Jij haalt het Bewijs van Vakmanschap CO: persoonsgebonden en vijf jaar geldig. Het bedrijf waarvoor je werkt (of jijzelf als zzp'er) heeft daarnaast een bedrijfscertificaat, zie les 1.4. Het een maakt het ander niet overbodig.
!!!

## De route in zes stappen

1. Profielkeuze (met de profielkeuzehulp)
2. Voorbereiding, met een gratis zelftest
3. Aanmelden en betalen
4. Theorietoets
5. Aanmelden voor het praktijkexamen (alleen na een gehaalde theorietoets)
6. Registratie in het Vakpaspoort

## De theorietoets

De theorietoets wordt digitaal gemaakt op een zelfgekozen plek en moment, duurt ongeveer anderhalf uur, moet in één keer worden afgemaakt en geeft direct de uitslag. In 2026 kostte de toets EUR 95 excl. btw. De slaagnorm (cesuur) is **70%**.

De officiële toetsmatrijs van de Vakbekwaamheidscommissie (versie 15 juli 2019) verdeelt de vragen over negen onderwerpen. Het aantal vragen verschilt per profiel:

| Onderwerp | Mon. WI | 1e WI | Mon. SO | 1e SO | Mon. WI+SO | 1e WI+SO |
|---|---|---|---|---|---|---|
| 1 Algemene basiskennis | 5 | 7 | 5 | 7 | 5 | 7 |
| 2 Signaleren en melden onveilige situatie CO | 3 | 3 | 2 | 3 | 3 | 3 |
| 3 Ontwerpen en beoordelen opstellingsruimte | 7 | 9 | 7 | 9 | 7 | 9 |
| 4 Rookgasafvoerleidingen aanleggen | 8 | 11 | - | - | 7 | 5 |
| 5 Rookgasafvoer in gestapelde bouw | - | 7 | - | - | - | 5 |
| 6 Rookgasafvoer controleren en adviseren | - | - | 4 | 11 | 3 | 6 |
| 7 Gasverbrandingstoestel installeren | 5 | 6 | - | - | 5 | 6 |
| 8 Onderhoud toestellen en rookgasafvoer | - | - | 10 | 13 | 8 | 12 |
| 9 CO-melder adviseren, plaatsen, controleren | 2 | 2 | 2 | 2 | 2 | 2 |
| **Totaal** | **30** | **45** | **30** | **45** | **40** | **55** |

WI staat voor Werktuigkundige Installatie, SO voor Service en Onderhoud. Als kennisbronnen noemt de matrijs onder meer de fabrikantvoorschriften, NEN 1078, NEN 8078, NEN 2757, NEN 1087, NPR 3378, Het Nieuwe Beugelen en het Bbl.

!!! info Controleer de actualiteit
Deze matrijs is de enige openbare bron voor de vraagaantallen; de site van Vakmanschap Techniek publiceert ze niet. Vraag bij je opleider of bij de helpdesk van Vakmanschap Techniek of de aantallen en de vraagvorm nog kloppen voor jouw toets. De verdeling over onderwerpen laat in elk geval goed zien waar het zwaartepunt ligt: opstellingsruimte, rookgasafvoer, installeren en onderhoud.
!!!

De **zelftest** is gratis, digitaal en onbeperkt te herhalen. Volgens de matrijs telt hij 15 vragen (enkelvoudige profielen) of 20 vragen (gecombineerde profielen) met dezelfde cesuur van 70%. Wie de zelftest niet haalt, heeft nog niet genoeg kennis voor de theorietoets.

## Het praktijkexamen

Voor het praktijkexamen moet de theorietoets gehaald zijn. Je betaalt vooraf, brengt een geldig identiteitsbewijs mee, en brengt zelf de juiste, goedgekeurde meetinstrumenten en het gereedschap mee. De praktijklocatie levert de opstelling en de materialen.

Volgens de richtlijnen praktijkexamen (versie 03, juli 2019) duurt het examen voor één profiel maximaal een dagdeel van 4 uur, inclusief eindgesprek en rapportage. Gecombineerde profielen duren ongeveer een dag. Je krijgt een concrete werksituatie: een installatie-opdracht, een onderhoudsopdracht, of beide. De assessor speelt de klant. Het examen bestaat uit voorbereiding, werkuitvoering en nazorg, en sluit af met een eindgesprek over een onveilige situatie en enkele theorievragen. Het oordeel wordt vastgelegd in een examenportfolio. Het resultaat is bindend, een nieuw praktijkexamen betaal je opnieuw.

## Verlengen

Het bewijs verloopt na vijf jaar. Verlengen kan vanaf zes maanden voor de einddatum: eerst de verplichte online module **Basiskennis Opfrisser**, daarna een theorietoets van maximaal 120 minuten bij een geaccrediteerde examenorganisatie. Er is geen praktijkexamen. Het volledige pakket kostte in 2026 EUR 275 excl. btw. Slaag je, dan wordt het bewijs automatisch vijf jaar verlengd.

!!! gevaar Na de einddatum mag je niet meer werken
Is je bewijs verlopen, dan mag je geen werk meer doen waarvoor het bewijs is vereist en moet je het volledige initiële traject (theorietoets én praktijkexamen) opnieuw doen. Zet je einddatum dus in je agenda en begin ruim op tijd met verlengen.
!!!
`,
  checklist: [
    'Ik weet welke zes profielen er zijn en welk profiel bij mijn werk past',
    'Ik ken de zes stappen van de route en de slaagnorm van de theorietoets',
    'Ik weet welke onderwerpen zwaar wegen in de theorietoets',
    'Ik weet hoe en wanneer ik het bewijs moet verlengen'
  ],
  quiz: [
    {
      vraag: `Hoe lang is het Bewijs van Vakmanschap CO geldig?`,
      opties: [`3 jaar`, `5 jaar`, `7 jaar`, `Onbeperkt`],
      goed: 1,
      uitleg: `Het bewijs is vijf jaar geldig. Een verlengd bewijs is weer vijf jaar geldig. (Het bedrijfscertificaat is daarentegen maximaal drie jaar geldig, zie les 1.4.)`
    },
    {
      vraag: `Wat is de rol van InstallQ bij het examen Vakmanschap CO?`,
      opties: [
        `InstallQ neemt zelf de theorie- en praktijkexamens af`,
        `InstallQ accrediteert de instellingen die examens afnemen`,
        `InstallQ geeft het Bewijs van Vakmanschap CO uit aan geslaagden`,
        `InstallQ stelt de toetsmatrijs en de cesuur vast`
      ],
      goed: 1,
      uitleg: `Vakmanschap Techniek is de exameninstelling en geeft het bewijs af, de Vakbekwaamheidscommissie stelt het examenproduct vast en InstallQ accrediteert de instellingen. InstallQ beheert daarnaast de BRL 6000-25 voor bedrijfscertificering.`
    },
    {
      vraag: `Welke slaagnorm (cesuur) hanteert de theorietoets volgens de toetsmatrijs?`,
      opties: [`55%`, `60%`, `70%`, `80%`],
      goed: 2,
      uitleg: `De cesuur is 70%, ook voor de gratis zelftest. Bij een toets van 30 vragen betekent dat minimaal 21 goed.`
    },
    {
      vraag: `Welk onderwerp weegt volgens de matrijs het zwaarst in de theorietoets voor een Eerste Monteur Service en Onderhoud?`,
      opties: [
        `Algemene basiskennis`,
        `Ontwerpen en beoordelen van de opstellingsruimte`,
        `Onderhoud van toestellen en rookgasafvoer`,
        `CO-melder adviseren, plaatsen en controleren`
      ],
      goed: 2,
      uitleg: `Onderhoud van toestellen en rookgasafvoer telt 13 van de 45 vragen. Daarna volgen rookgasafvoer controleren en adviseren (11 vragen) en opstellingsruimte (9). De CO-melder telt maar 2 vragen.`
    },
    {
      vraag: `Je bewijs is een maand geleden verlopen. Wat moet je doen om weer te mogen werken?`,
      opties: [
        `Alleen de verlengingstoets van 120 minuten afleggen`,
        `De module Basiskennis Opfrisser doen en een week wachten`,
        `Het hele initiële traject opnieuw doen, theorie en praktijk`,
        `Niets, er geldt een coulanceperiode van een jaar na de einddatum`
      ],
      goed: 2,
      uitleg: `Verlengen kan alleen vóór de einddatum (vanaf zes maanden ervoor). Daarna is het bewijs niet meer geldig en moet je het initiële traject opnieuw doorlopen.`
    },
    {
      vraag: `Wie speelt bij het praktijkexamen de klant?`,
      opties: [`Een acteur van de examenorganisatie`, `De assessor`, `Een medekandidaat`, `Er is geen klant, alleen een opdrachtblad`],
      goed: 1,
      uitleg: `De assessor speelt de klant. Je moet dus ook laten zien dat je om bijzonderheden vraagt, de klant adviseert (ook over een CO-melder) en hem laat aftekenen.`
    }
  ],
  kaarten: [
    { voor: `Hoe lang is het Bewijs van Vakmanschap CO geldig?`, achter: `Vijf jaar. Verlengen kan vanaf zes maanden voor de einddatum.` },
    { voor: `Welke slaagnorm heeft de theorietoets Vakmanschap CO volgens de toetsmatrijs?`, achter: `70% (cesuur). Ook de gratis zelftest gebruikt 70%.` },
    { voor: `Noem de zes stappen van de initiële route.`, achter: `Profielkeuze, voorbereiding (zelftest), aanmelden en betalen, theorietoets, aanmelden praktijkexamen, registratie in het Vakpaspoort.` },
    { voor: `Wie geeft het Bewijs uit en wie accrediteert de examinstellingen?`, achter: `Vakmanschap Techniek geeft het bewijs uit. InstallQ accrediteert de instellingen. De Vakbekwaamheidscommissie stelt het examenproduct vast.` },
    { voor: `Wat is het verschil tussen een monteur en een eerste monteur?`, achter: `Niveau 2 tegenover niveau 3. De eerste monteur controleert ook werk van anderen en ontwerpt of beheert gasinstallaties. Een zzp'er kiest altijd een eerste-monteurprofiel.` },
    { voor: `Waaruit bestaat de verlenging van het Bewijs?`, achter: `De online module Basiskennis Opfrisser en daarna een theorietoets (maximaal 120 minuten). Geen praktijkexamen.` },
    { voor: `Wat gebeurt er als je bewijs is verlopen?`, achter: `Je mag geen werk meer doen waarvoor het bewijs is vereist en moet het volledige initiële traject (theorie en praktijk) opnieuw doen.` }
  ],
  bronnen: ['EXA-01', 'EXA-02', 'EXA-03', 'EXA-04', 'EXA-05', 'EXA-06', 'EXA-08', 'EXA-09', 'EXA-10', 'EXA-11', 'EXA-12', 'EXA-14', 'EXA-15', 'EXA-16', 'EXA-17', 'EXA-19', 'EXA-20', 'EXA-22', 'EXA-23', 'EXA-24', 'EXA-25', 'EXA-26', 'EXA-28', 'EXA-30', 'EXA-31', 'EXA-32', 'EXA-35', 'EXA-36', 'EXA-43']
},

/* ------------------------------------------------------------------ 1.4 */
{
  id: 'm01l04',
  nr: '1.4',
  titel: 'Bedrijfscertificering: BRL 6000-25 en BRL K25000',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt het verschil uitleggen tussen persoonlijke en bedrijfscertificering en wat een bedrijf moet regelen.',
  videos: [
    { taal: 'nl', titel: 'Je CO-certificering in 5 stappen geregeld (Techniek Nederland)', yt: 'GBTAEhhWS9A', duur: '±3 min, 2023' },
    { taal: 'nl', titel: 'Update verplichte CO-certificering (Kiwa)', yt: 'XzVs1I3BRbc', duur: '±2 min, 2023' },
    { taal: 'en', titel: 'Tech Talk 7: a Gas Safe Register investigations officer (VK, toezicht op bedrijven)', yt: 'Bq5G5nFHANQ', duur: '±11 min, 2024' }
  ],
  tekst: `
## Twee lagen: de monteur en het bedrijf

Werken aan gasverbrandingstoestellen vraagt twee dingen tegelijk. De **monteur** heeft een persoonlijk Bewijs van Vakmanschap CO (les 1.3). Het **bedrijf** heeft een certificaat volgens een aangewezen certificatieschema. Dat certificaat staat op naam van het bedrijf zoals ingeschreven bij het handelsregister en is niet overdraagbaar. Een bekwame monteur maakt een niet-gecertificeerd bedrijf dus niet bevoegd, en een certificaat maakt een onbekwame monteur niet vakbekwaam.

## De schema's

Een certificatieschema (BRL, beoordelingsrichtlijn) beschrijft wat een bedrijf moet regelen en hoe dat wordt getoetst. De minister wijst schema's aan. Per september 2026 zijn dat onder meer:

| Schema | Beheerder | Opmerking |
|---|---|---|
| BRL 6000-25 | InstallQ | Twee deelgebieden: toestellen met eigen afvoer en collectieve afvoer (CLV) |
| BRL K25000 | Kiwa | Compacter traject, beperking tot bepaalde toesteltypen mogelijk |
| BRL SI-6025 | SKG-IKOB | Bedoeld voor kleine bedrijven en zzp'ers, zonder collectieve voorzieningen |
| NHK CBS | Stichting NHK | Voor haarden en kachels |

Certificeren gebeurt door een **certificerende instelling**. Er zijn er vijf aangewezen: Bureau Veritas, DEKRA, Kiwa, Normec en SKG-IKOB. InstallQ beheert het schema BRL 6000-25 maar certificeert zelf niet, Kiwa is bij K25000 schemabeheerder én certificerende instelling. Schema's worden bijgewerkt met wijzigingsbladen: certificaten op een oude versie verliezen hun geldigheid. Controleer dus altijd de actuele versie in het openbare register van de TloKB.

## Wat beide schema's vragen

- Werkzaamheden aan toestellen tot **100 kW** nominaal vermogen.
- Een certificaat dat **maximaal drie jaar** geldig is, met **jaarlijks vervolgonderzoek** (dat onaangekondigd kan zijn).
- Iemand met een **Bewijs van Vakmanschap CO** (niveau 2 of 3) voor wie in bedrijf stelt.
- Een instromer mag maximaal drie jaar zonder bewijs werken als VOP, onder toezicht van een VP niveau 3.

Wat een bedrijf onder BRL 6000-25 verder regelt: inschrijving in het handelsregister, een kwaliteitshandboek met een verantwoordelijke, projectregistratie en projectdossiers, ingangscontrole van materialen, documentenbeheer, beheersing van tekortkomingen, een klachtenregister, gekalibreerde meetmiddelen, legitimatie van medewerkers en interne audits minstens één keer per jaar. Uitbesteden mag alleen aan een andere certificaathouder voor hetzelfde deelgebied.

## VP en VOP

| Rol | Wat mag |
|---|---|
| Vakbekwaam Persoon (VP) | In bedrijf stellen, groot onderhoud (brander, warmtewisselaar), een installatie uit bedrijf nemen of niet in bedrijf stellen vanwege veiligheid |
| Voldoende Onderricht Persoon (VOP) | De overige taken, onder toezicht van een VP |

## In de praktijk

- **Afmelden:** elke voltooide werkzaamheid en inbedrijfstelling wordt minstens wekelijks afgemeld bij de certificerende instelling.
- **Projectdossier:** minstens 10 jaar na afronding bewaren.
- **Meetinstrumenten:** instrumenten die de uitkomst van goed- of afkeuren bepalen, moeten gekalibreerd zijn, de kalibratiestatus staat op het instrument en het bedrijf houdt een overzicht bij. Bijlage 2 van het schema noemt onder meer rookgasmeetapparatuur (CO, O2, rookgastemperatuur), drukmeting, trekmeting volgens EN 50379-2 en een gaslekzoeker.
- **Herkenbaar:** medewerkers kunnen zich legitimeren en het bedrijf voert het beeldmerk **CO-VRIJ**. Het register gasverbrandingsinstallaties van de TloKB is openbaar: iedereen kan zien of een installateur gecertificeerd is.
- **Sticker:** onder BRL 6000-25 plaatst de VP na het werk een sticker "Gecontroleerd" met datum, volgend onderhoud en certificaatnummer op het toestel.

!!! kern Wat de wet eist en wat het schema eist
De wet stelt de basis (certificaat verplicht, meldplicht bij hoge CO). De schema's eisen daar bovenop meer, zoals de sticker en het kwaliteitssysteem: de zogenoemde bovenwettelijke eisen. Wie certificaathouder is, moet aan beide voldoen.
!!!

## Als het misgaat

Bij een niet-kritieke afwijking volgt een extra vervolgonderzoek als het niet binnen drie maanden is hersteld. Bij een **kritieke afwijking**, zoals een CO-onveilige installatie in bedrijf stellen of inbedrijfstelling door een onvoldoende gekwalificeerd persoon, volgt schorsing, een plan van aanpak binnen vier weken en herstel binnen drie maanden. Lukt dat niet, dan wordt het certificaat ingetrokken.
`,
  checklist: [
    'Ik kan het verschil uitleggen tussen het persoonlijke bewijs en het bedrijfscertificaat',
    'Ik weet wie een schema beheert en wie certificeert',
    'Ik weet welke taken alleen een VP mag doen',
    'Ik weet wat een certificaathouder moet vastleggen, afmelden en bewaren'
  ],
  quiz: [
    {
      vraag: `Wie beheert het certificatieschema BRL 6000-25?`,
      opties: [`InstallQ, die zelf geen certificerende instelling is`, `Vakmanschap Techniek, als exameninstelling voor monteurs`, `Kiwa, die het schema beheert en zelf certificeert`, `De TloKB, als toezichthouder op het stelsel`],
      goed: 0,
      uitleg: `InstallQ beheert BRL 6000-25 als schemabeheerder. Certificeren doen de aangewezen certificerende instellingen. Bij BRL K25000 is Kiwa zowel schemabeheerder als certificerende instelling.`
    },
    {
      vraag: `Welke taak mag alleen een Vakbekwaam Persoon (VP) doen?`,
      opties: [`Een sifon schoonmaken`, `Een toestel in bedrijf stellen`, `De werkbon invullen`, `Een klant adviseren over een CO-melder`],
      goed: 1,
      uitleg: `In bedrijf stellen, groot onderhoud (brander, warmtewisselaar) en het uit bedrijf nemen van een installatie vanwege veiligheid zijn voorbehouden aan een VP. Een VOP doet de overige taken onder toezicht.`
    },
    {
      vraag: `Hoe lang is een bedrijfscertificaat maximaal geldig en hoe vaak is er vervolgonderzoek?`,
      opties: [`Onbeperkt, met vervolgonderzoek na een klacht`, `5 jaar, met vervolgonderzoek om de 5 jaar`, `3 jaar, met jaarlijks vervolgonderzoek`, `1 jaar, met een nieuw toelatingsonderzoek`],
      goed: 2,
      uitleg: `Het certificaat is maximaal drie jaar geldig en de certificerende instelling doet ongeveer jaarlijks een vervolgonderzoek, dat onaangekondigd kan zijn. Het persoonlijke Bewijs van Vakmanschap CO is daarentegen vijf jaar geldig.`
    },
    {
      vraag: `Hoe vaak moet een certificaathouder voltooide werkzaamheden en inbedrijfstellingen afmelden bij de certificerende instelling?`,
      opties: [`Alleen bij een incident`, `Elk jaar`, `Elke maand`, `Ten minste wekelijks`],
      goed: 3,
      uitleg: `Onder BRL 6000-25 moet elke voltooide werkzaamheid en inbedrijfstelling ten minste wekelijks worden afgemeld, met o.a. datum, toesteltype en de naam van degene die in bedrijf stelde.`
    },
    {
      vraag: `Een bedrijf stelt een onveilige installatie in bedrijf. Wat is de gevolgde stap in het schema?`,
      opties: [`Een kritieke afwijking, met schorsing en een plan van aanpak binnen vier weken`, `Een boete van de gemeente, de certificering blijft ongewijzigd`, `Directe intrekking van het certificaat zonder mogelijkheid tot herstel`, `Een niet-kritieke afwijking: herstel binnen drie maanden, anders extra onderzoek`],
      goed: 0,
      uitleg: `Een CO-onveilige installatie in bedrijf stellen is een kritieke afwijking. Dat leidt tot schorsing, een plan van aanpak binnen vier weken en herstel binnen drie maanden. Wordt het niet hersteld, dan volgt intrekking.`
    }
  ],
  kaarten: [
    { voor: `Wat is het verschil tussen een schemabeheerder en een certificerende instelling?`, achter: `De schemabeheerder (bijv. InstallQ) beheert het schema. De certificerende instelling certificeert bedrijven. Kiwa is bij K25000 allebei.` },
    { voor: `Hoe lang is een bedrijfscertificaat geldig en hoe vaak is er vervolgonderzoek?`, achter: `Maximaal 3 jaar, met jaarlijks vervolgonderzoek (kan onaangekondigd zijn).` },
    { voor: `Welke taken mag alleen een VP doen?`, achter: `In bedrijf stellen, groot onderhoud (brander, warmtewisselaar) en een installatie uit bedrijf nemen of niet in bedrijf stellen vanwege veiligheid.` },
    { voor: `Hoe lang moet een projectdossier worden bewaard?`, achter: `Minstens 10 jaar na afronding van het project.` },
    { voor: `Hoe vaak melden certificaathouders werkzaamheden af?`, achter: `Ten minste wekelijks, bij hun certificerende instelling.` },
    { voor: `Wat is de bovengrens in vermogen voor beide schema's?`, achter: `100 kW nominaal vermogen.` }
  ],
  bronnen: ['WET-13', 'WET-17', 'WET-27', 'WET-28', 'WET-54', 'WET-55', 'WET-56', 'WET-57', 'WET-58', 'WET-59', 'WET-63', 'WET-64', 'WET-66', 'WET-67', 'WET-68', 'WET-69', 'WET-70', 'WET-71', 'WET-72', 'WET-73', 'WET-74', 'WET-75', 'WET-76']
},

/* ------------------------------------------------------------------ 1.5 */
{
  id: 'm01l05',
  nr: '1.5',
  titel: 'Bronnen en hiërarchie: wet, norm, fabrikant, werkinstructie',
  duur: 20,
  type: 'les',
  leerdoel: 'Je weet welke bron voorgaat bij strijdige informatie en hoe je bij twijfel de juiste voorschriften vindt.',
  videos: [
    { taal: 'nl', titel: 'Normalisatie, lekker normaal: wat een norm is (NEN)', yt: 'XPvDXR8Nljs', duur: '±2 min, 2013' },
    { taal: 'nl', titel: '2 ondernemers over CO-certificering en het kwaliteitshandboek (Techniek Nederland)', yt: 'eqwkoCrkV6o', duur: '±2 min, 2020, noemt nog de oude startdatum' },
    { taal: 'en', titel: 'New Gas Boiler Installation: Benchmark Code of Practice (VK)', yt: 'Lf87taSzaIA', duur: '±17 min, 2020' }
  ],
  tekst: `
## Waarom bronnen ertoe doen

In dit vak lees je veel: wetten, normen, schema's, fabrikanthandleidingen, handboeken en websites. Ze spreken elkaar soms tegen, en niet alles wat je online vindt klopt. Een verkeerd getal in een handboek kan betekenen dat je een onveilige installatie goedkeurt. Je moet dus weten welke bron voor welke vraag gezaghebbend is.

## Vier lagen

| Laag | Wat het regelt | Voorbeeld |
|---|---|---|
| 1 Wet en regelgeving | Wat verplicht is, het minimum | Bbl art. 6.45 en 6.46, Omgevingsregeling |
| 2 Certificatieschema | Wat een gecertificeerd bedrijf en monteur moet doen, soms strenger dan de wet | BRL 6000-25, BRL K25000, toetsmatrijs Vakmanschap CO |
| 3 Fabrikantvoorschrift | Hoe dit toestel of deze afvoer geïnstalleerd, afgesteld en onderhouden moet worden | Installatie- en servicehandleiding |
| 4 Normen en richtlijnen | Uitwerking en rekenmethoden waar de regelgeving naar verwijst | NEN 1078, NEN 2757, NPR 3378 |

Alles daaronder (handboeken, video's, forums, ook deze cursus) is hulp om de bron te begrijpen, nooit de bron zelf. Bij twijfel ga je terug naar de bron erboven.

!!! kern Bij strijd: de strengste eis, en leg het vast
Klopt wat je leest niet met wet of schema, dan gelden wet en schema. Zeggen fabrikantvoorschrift en algemene richtlijn iets anders, dan werk je naar de strengste van de geldende eisen en leg je vast op welke bron je steunde. Werk je aantoonbaar, dan kan niemand je achteraf verwijten dat je op gevoel werkte.
!!!

## Wat de wet wel en niet voorschrijft

Het Bbl stelt **prestatie-eisen** aan rookgasafvoer en verbrandingslucht. Het legt geen voorschriften op voor afschot, beugelafstand, insteekdiepte of dilatatie van een afvoer. Die staan in het fabrikantvoorschrift en in NPR 3378, en BRL 6000-25 verwijst ernaar. Kijk je naar de beugelafstand van een afvoer, dan zoek je dus in de handleiding van de afvoer en het toestel, niet in het Bbl.

## Welke norm gaat waarover

Normen zijn auteursrechtelijk beschermd: in deze cursus staat wat een norm regelt, niet de normtekst. Dit is de kaart die je moet kennen:

| Norm | Onderwerp |
|---|---|
| NEN 1078 (nieuwbouw) en NEN 8078 (bestaande bouw) | Het gasleidingwerk tot en met 500 mbar werkdruk |
| NEN 2757 (nieuwbouw) en NEN 8757 (bestaande bouw) | Bepalingsmethode voor de geschiktheid van de rookgasafvoer |
| NEN 1087 (nieuwbouw) en NEN 8087 (bestaande bouw) | Ventilatie van gebouwen, dus ook de toevoer van verbrandingslucht |
| NEN 6062 en NEN 8062 | Brandveiligheid van rookgasafvoervoorzieningen |
| NPR 3378 (meerdere delen) | Praktijkrichtlijn bij NEN 1078, NEN 2757 en NEN 8757: uitleg voor de praktijk |
| NEN 1006 | Leidingwaterinstallaties (drinkwater), dus niet gas |
| NEN 1010 | Elektrische laagspanningsinstallaties |

Deze kaart komt terug in de onderwerpen van de theorietoets. Twee valkuilen: NEN 1006 gaat over drinkwater, ook al staat hij online soms bij gas genoemd. En NEN 1078 en NEN 8078 gaan over het gasleidingwerk, niet over de opstellingsruimte of de afvoer.

## Welke uitgave geldt?

Het Bbl wijst normen aan in een **bepaalde uitgave**, via bijlage II van de Omgevingsregeling. Voor wat wettelijk geldt is die bijlage leidend, niet de nieuwste NEN-catalogus. Zo wijst de Omgevingsregeling voor bestaande bouw nog NEN 8757 uit 2005 aan, terwijl NEN in 2025 een nieuwe uitgave publiceerde (stand september 2026). Normen worden regelmatig bijgewerkt en de aanwijzing volgt later: controleer bij twijfel wat er op dat moment is aangewezen.

## Zo werk je in de praktijk

1. Zoek eerst de **fabrikantdocumentatie** bij het toestel (typeplaatje, serienummer) en bij de afvoer.
2. Controleer of wet en schema iets extra's eisen, zoals de CO-grenzen en de meldplicht (les 1.6).
3. Gebruik normen en NPR voor de uitwerking, en let op welke uitgave is aangewezen.
4. Leg vast op welke bron je een beslissing baseerde.

Bij het rekenen op een getal dat je ergens leest (bijvoorbeeld "boven 35 ppm CO afkeuren"): controleer het. In Nederland zijn de grenzen voor CO in de opstellingsruimte 5 en 20 ppm (les 1.6). Een getal zonder eenheid, meetconditie en bron is geen feit.
`,
  checklist: [
    'Ik kan de vier lagen van bronnen opnoemen en weet wat elke laag regelt',
    'Ik weet dat het Bbl prestatie-eisen stelt en de details in het fabrikantvoorschrift staan',
    'Ik ken de norm-kaart (NEN 1078, 2757, 1087, 6062, NPR 3378)',
    'Ik controleer bij een getal altijd de bron, de eenheid en de meetconditie'
  ],
  quiz: [
    {
      vraag: `Een handboek noemt een CO-grens die afwijkt van wat de wet en het schema zeggen. Welke bron volg je?`,
      opties: [`De wet en het certificatieschema`, `Het gemiddelde van beide`, `Wat je collega zegt`, `Het handboek, want het is recenter`],
      goed: 0,
      uitleg: `Wet en schema staan bovenaan. Een handboek of website is hulp om de bron te begrijpen en kan fouten bevatten. Bij afwijkingen ga je terug naar de bron.`
    },
    {
      vraag: `Waar zoek je de maximale beugelafstand van een rookgasafvoer?`,
      opties: [
        `In art. 4.136 van het Bbl, over de rookgasafvoer`,
        `In het fabrikantvoorschrift van de afvoer en in NPR 3378`,
        `In NEN 1078, de norm voor het gasleidingwerk`,
        `In de Woningwet, waarmee het stelsel is ingevoerd`
      ],
      goed: 1,
      uitleg: `Het Bbl stelt alleen prestatie-eisen. Afschot, beugelafstand, insteekdiepte en dilatatie staan in het fabrikantvoorschrift en in NPR 3378, waarnaar BRL 6000-25 verwijst.`
    },
    {
      vraag: `Welke norm regelt het gasleidingwerk tot en met 500 mbar in bestaande bouw?`,
      opties: [`NEN 1006`, `NEN 1078`, `NEN 8078`, `NEN 8757`],
      goed: 2,
      uitleg: `NEN 1078 geldt voor nieuwbouw, NEN 8078 voor bestaande bouw. NEN 8757 gaat over de rookgasafvoer in bestaande bouw en NEN 1006 over drinkwater.`
    },
    {
      vraag: `Iemand zegt dat NEN 1006 de norm voor de gasinstallatie is. Wat klopt?`,
      opties: [`NEN 1006 gaat over de geschiktheid van de rookgasafvoer`, `NEN 1006 gaat over elektrische laagspanningsinstallaties`, `Dat klopt, NEN 1006 is de norm voor het gasleidingwerk`, `NEN 1006 gaat over drinkwaterinstallaties, niet over gas`],
      goed: 3,
      uitleg: `NEN 1006 gaat over leidingwaterinstallaties. Deze verwarring komt in adviezen en handboeken regelmatig voor. Het gasleidingwerk staat in NEN 1078 en NEN 8078.`
    },
    {
      vraag: `NEN publiceert een nieuwe uitgave van een norm. Welke uitgave geldt wettelijk?`,
      opties: [`De uitgave die bijlage II van de Omgevingsregeling aanwijst`, `De uitgave die de fabrikant in zijn handleiding noemt`, `De uitgave die je bedrijf in zijn kwaliteitshandboek vastlegt`, `Altijd de nieuwste uitgave uit de NEN-catalogus`],
      goed: 0,
      uitleg: `Het Bbl wijst normen aan in een bepaalde uitgave via bijlage II van de Omgevingsregeling. De aanwijzing kan achterlopen op de nieuwste catalogus, dus controleer wat er is aangewezen.`
    }
  ],
  kaarten: [
    { voor: `Noem de vier lagen van bronnen, van hoog naar laag.`, achter: `Wet en regelgeving, certificatieschema, fabrikantvoorschrift, normen en richtlijnen. Daaronder: handboeken en websites als hulp.` },
    { voor: `Waar staan afschot, beugelafstand en dilatatie van een afvoer?`, achter: `In het fabrikantvoorschrift en NPR 3378, niet in het Bbl (dat stelt alleen prestatie-eisen).` },
    { voor: `Welke norm regelt het gasleidingwerk tot en met 500 mbar?`, achter: `NEN 1078 (nieuwbouw) en NEN 8078 (bestaande bouw).` },
    { voor: `Welke norm gaat over de geschiktheid van de rookgasafvoer?`, achter: `NEN 2757 (nieuwbouw) en NEN 8757 (bestaande bouw).` },
    { voor: `Welke norm regelt ventilatie en verbrandingslucht?`, achter: `NEN 1087 (nieuwbouw) en NEN 8087 (bestaande bouw).` },
    { voor: `Waar gaat NEN 1006 over?`, achter: `Leidingwaterinstallaties (drinkwater), niet over gas.` },
    { voor: `Welke uitgave van een norm geldt wettelijk?`, achter: `De uitgave die is aangewezen in bijlage II van de Omgevingsregeling, niet altijd de nieuwste.` }
  ],
  bronnen: ['WET-16', 'NRM-02', 'NRM-03', 'NRM-07', 'NRM-10', 'NRM-11', 'NRM-12', 'NRM-18', 'NRM-21', 'NRM-24', 'EXA-19', 'WET-44']
},

/* ------------------------------------------------------------------ 1.6 */
{
  id: 'm01l06',
  nr: '1.6',
  titel: 'Afkeuren, melden en aansprakelijkheid',
  duur: 20,
  type: 'les',
  leerdoel: 'Je weet wat je doet bij een onveilige situatie, hoe je vastlegt wat je vaststelt en waar je verantwoordelijkheid ligt.',
  videos: [
    { taal: 'nl', titel: 'Vakmanschap CO: mag een cv-ketel zo worden opgeleverd? (Klimaat Techniek Nederland)', yt: '67t8BWTh34s', duur: '±1 min, 2026' },
    { taal: 'nl', titel: 'CV-ketel afgekeurd: levensgevaarlijke verstopping in de rookgasafvoer (Loodgieter Den Haag Stad)', yt: 'Ql2Da2T2Mz8', duur: '±4 min, 2026' },
    { taal: 'en', titel: 'Understanding Unsafe Situations Procedures (VK; in Nederland geldt de aanpak uit deze les)', yt: 'XscdCUacojk', duur: '±3 min, 2023' }
  ],
  tekst: `
## De driestapsregel voor CO in de ruimte

Als certificaathouder meet je CO in de opstellingsruimte. Het schema geeft een driestapsregel, gebaseerd op de wet:

| CO in de ruimte | Wat je doet |
|---|---|
| Onder 5 ppm | Je mag in bedrijf stellen |
| 5 tot 20 ppm | Nader onderzoek, de oorzaak wegnemen en de opdrachtgever informeren |
| Boven 20 ppm | De **wettelijke meldplicht** van art. 6.46 Bbl geldt |

Je meet op ongeveer 1,7 meter hoogte en ongeveer 1 meter van het toestel. De waarde op het meetinstrument is leidend.

!!! kern 20 ppm is de meldgrens, 5 ppm de inbedrijfstellingsgrens
Twee getallen die je uit je hoofd moet kennen. De meldgrens van 20 ppm staat in de Omgevingsregeling (art. 5.52). De Gezondheidsraad adviseerde in 2024 een lagere waarde voor beroepsmatige blootstelling (6,4 ppm), maar de wettelijke meldgrens is nu 20 ppm. Een waarde als "35 ppm afkeuren" die je online tegenkomt, is geen Nederlandse afkeurgrens voor de opstellingsruimte.
!!!

## Wat je bij een melding moet doen

Art. 6.46 Bbl verplicht een certificaathouder die bij zijn werk een te hoge CO-concentratie constateert in een ruimte waar personen kunnen zijn, dit **onverwijld** te melden aan vier partijen:

1. de bewoner of gebruiker
2. de eigenaar
3. het bevoegd gezag (de gemeente)
4. de certificerende instelling

De melding bevat minstens de gemeten concentratie en een beschrijving van de ruimte. Sinds 1 april 2026 kan de melding ook via het Digitaal Stelsel Omgevingswet. Let op: er is een wijziging voorgenomen (melden aan het bevoegd gezag alleen als het risico niet direct kan worden weggenomen, met vermelding van de oorzaak); zolang die niet in werking is getreden, geldt de tekst van art. 6.46 zoals hierboven. Controleer dit voor je in de praktijk gaat werken.

BRL 6000-25 is op dit punt niet helemaal eenduidig over de volgorde en vorm van de melding. De wet is leidend: onverwijld aan alle vier.

## Afkeuren: buiten bedrijf stellen

Komen er bij gebruik ontoelaatbare hoeveelheden CO vrij, dan mag je het toestel niet in bedrijf stellen en moet je het buiten bedrijf stellen. Dat is een taak voor een VP. In de praktijk zijn dit je stappen:

1. Zet het toestel uit en zorg dat het niet zonder herstel weer aangaat.
2. Waarschuw de aanwezigen en ventileer de ruimte.
3. Meld volgens art. 6.46 en leg vast wat je vond: gemeten waarde, plek, toestel, tijd.
4. Zoek de oorzaak, herstel, meet opnieuw en stel pas in bedrijf als de waarden in orde zijn.
5. Informeer de klant over wat er is gebeurd en wat er nodig is.

Werkt de eigenaar niet mee aan herstel, dan stel je de installatie niet in bedrijf. Alleen de gemeente kan herstel afdwingen.

!!! gevaar Acuut gevaar: 112
Bij acuut gevaar of een ernstig vergiftigde bewoner bel je altijd 112. Bij CO-waarden boven 400 ppm in de ruimte schakelt de gemeente in de praktijk de brandweer in en wordt zo nodig het pand ontruimd. Wacht niet op een melding.
!!!

## Aansprakelijkheid en vastleggen

- **Strafbaar:** wie zonder certificaat werkt is strafbaar, en ook de opdrachtgever (les 1.2).
- **Bij inbedrijfstelling** ben je verantwoordelijk voor de veiligheid van de hele installatie, ook als je hem niet zelf plaatste.
- **Civielrechtelijk:** bewoners kunnen een schadevordering instellen.
- **Schema:** een CO-onveilige installatie in bedrijf stellen is een kritieke afwijking van het schema (les 1.4).
- **Onderhoud:** de wet eist geen periodiek onderhoud van de eigenaar. Het schema eist wel dat de installateur de klant informeert over onderhoud en interval, en zonder fabrikantvoorschrift geldt minimaal eens per 12 maanden.
- **CO-melder:** de installateur adviseert een CO-melder bij open of afvoerloze toestellen zonder melder, en bij een collectieve afvoer zonder geschiktheidsverklaring.

Wat je niet kunt aantonen, heb je niet gedaan. Noteer daarom waarden, plaats, tijd, wie je informeerde en welke maatregelen je nam, op de werkbon of in het projectdossier (les 18.4).

## Wat de wet niet regelt

Een plicht om de netbeheerder te informeren bij afkeuren is in wet en schema niet gevonden. Voor gasinstallatie-ongevallen achter de gasmeter bestaat geen wettelijke meldplicht; alleen netbeheerders melden gasdistributie-ongevallen. De meldplicht van art. 6.46 gaat over wat een certificaathouder bij zijn werk constateert. Twijfel je in een concrete situatie, overleg dan met je certificerende instelling of je docent.
`,
  checklist: [
    'Ik ken de drie stappen (5 ppm, 20 ppm) en weet welke actie erbij hoort',
    'Ik weet aan welke vier partijen ik een melding moet doen',
    'Ik weet wat ik bij een melding minimaal vastleg',
    'Ik weet wanneer ik 112 bel en dat de wet leidend is boven het schema'
  ],
  quiz: [
    {
      vraag: `Je meet in de opstellingsruimte 3 ppm CO. Wat is de conclusie?`,
      opties: [
        `Je mag in bedrijf stellen, mits de rest in orde is`,
        `Je moet melden aan de gemeente en de eigenaar`,
        `Je moet de bewoner laten ventileren en opnieuw meten`,
        `Je moet het toestel buiten bedrijf stellen`
      ],
      goed: 0,
      uitleg: `Onder 5 ppm mag je in bedrijf stellen (mits ook de rest van de installatie in orde is). Vanaf 5 ppm volgt nader onderzoek, en boven 20 ppm de wettelijke meldplicht.`
    },
    {
      vraag: `Je meet 12 ppm CO in de opstellingsruimte. Wat doe je?`,
      opties: [
        `Niets doen, want 12 ppm ligt ruim onder de meldgrens van 20 ppm`,
        `Nader onderzoek, oorzaak wegnemen en opdrachtgever informeren`,
        `Direct het pand ontruimen en de brandweer waarschuwen`,
        `Alleen noteren op de werkbon en het toestel laten draaien`
      ],
      goed: 1,
      uitleg: `Tussen 5 en 20 ppm volgt nader onderzoek, wordt de oorzaak weggenomen en informeer je de opdrachtgever. De wettelijke meldplicht geldt pas boven 20 ppm.`
    },
    {
      vraag: `Aan welke vier partijen moet een certificaathouder een CO-melding boven de meldgrens onverwijld doen?`,
      opties: [`Eigenaar, ILT, fabrikant en de verzekeraar van het pand`, `Bewoner, gemeente, TloKB en de schemabeheerder InstallQ`, `Bewoner, eigenaar, gemeente en certificerende instelling`, `Bewoner, huisarts, brandweer en de lokale netbeheerder`],
      goed: 2,
      uitleg: `Art. 6.46 Bbl noemt de bewoner of gebruiker, de eigenaar, het bevoegd gezag (gemeente) en de certificerende instelling. De netbeheerder staat er niet bij.`
    },
    {
      vraag: `De BRL 6000-25 en de wet zijn niet helemaal eenduidig over de vorm van de melding. Welke lezing volg je?`,
      opties: [`Wat je opdrachtgever wil, want hij betaalt het werk`, `De volgorde die het minste tijd en papierwerk kost`, `De BRL, want een schema is specifieker dan de wet`, `De wet: onverwijld melden aan alle vier partijen`],
      goed: 3,
      uitleg: `De wet staat boven het schema. Dus: onverwijld melden aan alle vier partijen, ook als het schema in een paragraaf een andere volgorde noemt.`
    },
    {
      vraag: `De eigenaar van een woning met een afgekeurd toestel weigert herstel. Wat doe je?`,
      opties: [`Je stelt niet in bedrijf: alleen de gemeente kan herstel afdwingen`, `Je haalt het toestel weg zodat het niet meer gebruikt kan worden`, `Je belt de fabrikant en laat hem besluiten of het toestel mag draaien`, `Je stelt het toestel toch in bedrijf, want hij is zelf verantwoordelijk`],
      goed: 0,
      uitleg: `Je mag een onveilige installatie niet in bedrijf stellen, ook niet op verzoek van de eigenaar. Herstel afdwingen kan alleen de gemeente. Leg vast wat je hebt gemeld en waarom je niet in bedrijf hebt gesteld.`
    },
    {
      vraag: `Welke uitspraak over onderhoud klopt?`,
      opties: [
        `De wet verplicht eigenaren tot jaarlijks onderhoud door een certificaathouder`,
        `De wet eist geen periodiek onderhoud, BRL 6000-25 zonder fabrikantvoorschrift wel jaarlijks`,
        `Onderhoud is alleen verplicht voor toestellen boven 50 kW, kleinere toestellen zijn vrijgesteld`,
        `Onderhoud is verplicht na elke storing, ook als het toestel daarna weer normaal werkt`
      ],
      goed: 1,
      uitleg: `Er is geen generieke wettelijke onderhoudsplicht (de eigenaar moet wel zorgen dat de installatie functioneert en geen gevaar oplevert). Het schema eist dat de installateur de klant informeert en zonder fabrikantvoorschrift geldt minimaal eens per 12 maanden.`
    }
  ],
  kaarten: [
    { voor: `Welke CO-waarde in de opstellingsruimte is de wettelijke meldgrens?`, achter: `20 ppm (Omgevingsregeling art. 5.52).` },
    { voor: `Onder welke CO-waarde in de ruimte mag je inbedrijfstellen?`, achter: `Onder 5 ppm. Tussen 5 en 20 ppm volgt nader onderzoek en informeer je de opdrachtgever.` },
    { voor: `Aan wie meld je onverwijld bij CO boven 20 ppm?`, achter: `Bewoner of gebruiker, eigenaar, bevoegd gezag (gemeente) en de certificerende instelling (art. 6.46 Bbl).` },
    { voor: `Wat vermeld je minimaal in een CO-melding?`, achter: `De gemeten concentratie en een beschrijving van de ruimte.` },
    { voor: `Op welke hoogte en afstand meet je CO in de opstellingsruimte?`, achter: `Ongeveer 1,7 m hoogte en ongeveer 1 m van het toestel. De waarde op het instrument is leidend.` },
    { voor: `De eigenaar weigert herstel van een onveilige installatie. Wat doe je?`, achter: `Je stelt niet in bedrijf. Alleen de gemeente kan herstel afdwingen.` },
    { voor: `Wanneer bel je 112?`, achter: `Bij acuut gevaar of een ernstig vergiftigde bewoner. Boven 400 ppm in de ruimte schakelt de gemeente in de praktijk de brandweer in.` }
  ],
  bronnen: ['CO-13', 'WET-42', 'WET-43', 'WET-44', 'WET-46', 'WET-47', 'WET-48', 'WET-49', 'WET-51', 'WET-52', 'WET-53', 'WET-60', 'WET-61', 'WET-62', 'WET-18', 'WET-40', 'WET-76']
},

/* ------------------------------------------------------------------ 1.7 */
{
  id: 'm01l07',
  nr: '1.7',
  titel: 'Veilig werken op locatie: hoogte, asbest en bescherming',
  duur: 25,
  type: 'les',
  leerdoel: 'Je herkent de belangrijkste risico\'s op een werklocatie (hoogte, besloten ruimten, asbest, gaslucht) en weet welke maatregelen en grenzen daarbij gelden.',
  videos: [
    { taal: 'nl', titel: 'Tips voor veilig werken op hoogte - Toolbox (Volandis)', yt: 'WuFoWJ6huOc', duur: '±3 min, 2018' },
    { taal: 'nl', titel: 'Hoe herken je asbest? (Milieu Centraal)', yt: 'dEFKdS9f_mI', duur: '±2 min, 2019' },
    { taal: 'en', titel: 'Working safely with asbestos (Health and Safety Executive, VK, ter vergelijking)', yt: 'eVfI5hiRCqk', duur: '±3 min, 2023' }
  ],
  tekst: `
## De andere kant van het vak: niet alleen de ketel, ook de werkplek

CO-veiligheid gaat over het toestel en de installatie. Deze les gaat over jou: de ladder waarop je staat, de kruipruimte waar je induikt, het board dat mogelijk asbest bevat en de gasgeur die je op locatie tegenkomt. Dit zijn geen cv-specifieke regels maar de algemene Arbowet en het Arbeidsomstandighedenbesluit (Arbobesluit), die voor elke werknemer in Nederland gelden. Eerste hulp bij CO-vergiftiging staat in (les:m01l06) en (les:m04l05), elektrische veiligheid in module 9: die stof komt hier niet terug.

## Werken op hoogte: ladder, trap of steiger?

Vanaf een hoogte van 2,5 meter geldt in de regel valgevaar, en dan moet er een veilige steiger, stelling, bordes of werkvloer zijn, of een doelmatig hekwerk of leuning die minstens tot 1 meter boven het werkvlak beveiligt. Ook onder 2,5 meter kan een voorziening verplicht zijn, bijvoorbeeld bij een vloeropening of een extra risico zoals water of verkeer.

Een ladder of trap mag je alleen als werkplek gebruiken als het werk kort duurt, het risico laag is en een veiliger arbeidsmiddel niet gerechtvaardigd is. Sta je op een ladder, dan moet je altijd veilige steun en houvast hebben: een last met de hand dragen mag dat houvast nooit belemmeren, en de ladder staat op een stabiele, stevige ondergrond zodat de sporten horizontaal blijven. Kan een steiger of hekwerk niet worden aangebracht, of levert die zelf meer gevaar op, dan is een vangnet of een veiligheidsgordel met vanglijn het laatste redmiddel, niet de eerste keuze.

Werk je met een steiger, dan wordt de constructie regelmatig door een deskundig persoon gecontroleerd: in elk geval voor het eerste gebruik, na elke wijziging, na een periode van stilstand en na slecht weer. Een steiger mag niet worden overbelast en een verrijdbare steiger staat vast tijdens het werk.

!!! kern Twee getallen om te onthouden
2,5 meter is de hoogte waarboven een voorziening tegen valgevaar in de regel verplicht is. 1 meter is de hoogte waartot een hekwerk of leuning minstens moet beveiligen om als doelmatig te tellen. Een ladder mag je alleen gebruiken als werkplek bij kort, veilig en laag-risicowerk: geen vaste vervanger van een steiger.
!!!

!!! gevaar Vallen van hoogte is dodelijk
Een val van een paar meter kan al fataal zijn of blijvend letsel geven. Twijfel je of een ladder voor dit werk veilig genoeg is, gebruik dan een steiger, bordes of ander deugdelijk arbeidsmiddel. Werk nooit op een dak of bij een dakdoorvoer zonder dat de valbeveiliging in orde is, ook niet voor "twee minuutjes".
!!!

## Besloten ruimten en kruipruimten: eerst meten, dan naar binnen

Een kruipruimte, kelder of andere ruimte die niet is ingericht om in te verblijven en waar gevaar kan bestaan voor verstikking, bedwelming, vergiftiging, brand of explosie, is een besloten ruimte. Kan dat gevaar worden vermoed, dan mag je die ruimte alleen betreden als onderzoek uitwijst dat het gevaar er niet is. Blijkt uit dat onderzoek dat het gevaar er wél is, dan worden eerst doeltreffende maatregelen genomen (ventileren, meten, beschermingsmiddelen) voordat iemand naar binnen gaat.

**Praktijkgeval:** je moet in een kruipruimte onder een tussenwoning een leidingaansluiting controleren. De kruipruimte is laag, er staat wat water en je ruikt niets bijzonders. Toch meet je eerst: een gaslek elders in het pand of een opgehoopte concentratie CO kan zich ophopen in een laaggelegen, slecht geventileerde ruimte zonder dat je dat ruikt of voelt. Pas als de meting geen gevaar aantoont, ga je naar binnen. Trek je conclusie nooit alleen op je neus.

## Asbest: herkennen, en vooral niet zelf bewerken

In gebouwen en installaties van vóór 1994 kan asbest voorkomen: in pakkingen en koord bij aansluitingen, in brandwerende platen of board rond een ketel, geiser of schoorsteen, in doorvoeren door vloer of dak, en in het rookgasafvoerkanaal zelf. Zolang dat materiaal intact blijft, komen er geen vezels vrij. Boren, zagen, breken of schuren kan dat wel doen.

!!! gevaar Vermoeden van asbest: stoppen, niet doorwerken
Zie je verouderd, beschadigd plaatmateriaal, board of koord dat mogelijk asbest bevat: bewerk het niet, rond het werk op die plek niet af en informeer de eigenaar. Alleen een bedrijf dat gecertificeerd is volgens SC-540 mag vaststellen of het om asbest gaat en in welke risicoklasse (1, 2 of 2a). Jij bepaalt dat nooit zelf op het oog.
!!!

Is de risicoklasse eenmaal vastgesteld, dan bepaalt die wat er verder mag. Risicoklasse 2 en 2a mogen alleen worden verwijderd door een bedrijf met het procescertificaat asbestverwijdering, met personeel dat een DAV-1, DAV-2 (Deskundig Asbestverwijderaar) of DTA (Deskundig Toezichthouder) persoonscertificaat heeft. Bij risicoklasse 1 mag ook een niet-gecertificeerd bedrijf het werk uitvoeren, maar alleen als de klasse vooraf door een gecertificeerd bedrijf is vastgesteld, het werk vakkundig gebeurt, het gemeld is bij de Nederlandse Arbeidsinspectie, de monteur is voorgelicht en getraind, en hem een arbeidsgezondheidskundig onderzoek is aangeboden. Het volledig en onbeschadigd verwijderen van een oud verwarmingstoestel wordt in de praktijk soms als risicoklasse 1 beoordeeld, maar ook dat stelt niet de monteur zelf vast.

Een particuliere eigenaar mag in en om zijn eigen woning zelf maximaal 35 m2 van bepaald, hechtgebonden materiaal verwijderen (geschroefde platen, vloertegels). Dat is een uitzondering voor de particulier zelf, geen regel die voor jou als monteur van een bedrijf geldt.

## Persoonlijke beschermingsmiddelen en fysieke belasting

De werkgever moet zorgen voor de veiligheid en gezondheid van zijn werknemers en kiest daarvoor, op basis van de risico-inventarisatie, geschikte persoonlijke beschermingsmiddelen (PBM): bijvoorbeeld werkschoenen, handschoenen, een stofmasker of een valharnas. Die middelen moeten voldoende beschikbaar zijn, onderhouden en op tijd vervangen worden, en de kosten daarvan zijn voor de werkgever: hij mag ze niet op je loon inhouden. Werk je als zzp'er, dan ben je in dit opzicht zelf "de werkgever".

Voor tillen en dragen geldt een landelijke praktijkrichtlijn: bij incidenteel tillen niet meer dan 23 kg, bij meer dan 12 keer per dienst tillen niet meer dan 12 kg, en bij dragen op heuphoogte niet meer dan 15 kg. Onder minder gunstige omstandigheden (bukken, draaien, een trap op) ligt de werkelijke grens lager. Een boiler of gasfles is zwaarder dan die grenzen: gebruik een steekwagen, hulp van een collega of een tilhulpmiddel.

## Gaslucht op locatie: geen vonken

Ruik je tijdens je werk plotseling sterk gas, dus los van de storing waaraan je al werkt: maak geen vuur, bedien geen schakelaar, verlichting, deurbel of mobiele telefoon in die ruimte (een kleine vonk kan al genoeg zijn), open ramen en deuren, draai de hoofdgaskraan dicht en bel van buiten de ruimte. Het landelijke, gratis nummer voor een gasstoring of gaslucht is 0800-9009; bij acuut gevaar of een sterke lucht waarvan je de bron niet kent, bel je 112.

## VCA: los van het CO-stelsel

VCA (Veiligheid, Gezondheid en Milieu Checklist Aannemers) is een apart veiligheidscertificaat, beheerd door stichting SSVV. Het is niet wettelijk verplicht, maar veel opdrachtgevers in bouw, industrie en installatietechniek eisen het voordat je op hun locatie mag werken. VCA vervangt niets van het CO-stelsel uit (les:m01l02) en (les:m01l04): het is een generieke check op veilig werken in het algemeen, geen vervanging voor het Bewijs van Vakmanschap CO of de bedrijfscertificering.
`,
  checklist: [
    'Ik weet vanaf welke hoogte een voorziening tegen valgevaar verplicht is en wanneer een ladder als werkplek mag',
    'Ik onderzoek een kruipruimte of andere besloten ruimte op gevaarlijke atmosfeer voordat ik naar binnen ga',
    'Ik herken waar asbest in een oude cv-installatie kan voorkomen en bewerk vermoedelijk asbesthoudend materiaal nooit zelf',
    'Ik weet aan welke voorwaarden zelf werken aan asbest van risicoklasse 1 moet voldoen',
    'Ik weet wat ik doe als ik op locatie plotseling gas ruik'
  ],
  quiz: [
    {
      vraag: `Vanaf welke hoogte geldt in de regel dat er een voorziening tegen valgevaar moet zijn, zoals een steiger of een hekwerk?`,
      opties: [`2,5 meter`, `1,5 meter`, `3 meter`, `2 meter`],
      goed: 0,
      uitleg: `Artikel 3.16 Arbobesluit noemt 2,5 meter als de hoogte waarboven valgevaar in de regel bestaat. Onder die hoogte kan een voorziening ook verplicht zijn bij extra risico, zoals een vloeropening of werk boven water.`
    },
    {
      vraag: `Je moet vlak bij een dakdoorvoer een korte, eenvoudige controle doen. Wat zegt de wet over het gebruik van een ladder hierbij?`,
      opties: [
        `Alleen met een steiger, een ladder mag hier nooit`,
        `Een ladder mag, als het werk kort en veilig op de ladder kan`,
        `Een hekwerk is verplicht, ook bij werk van twee minuten`,
        `Een gordel met vanglijn is hier de eerste keuze`
      ],
      goed: 1,
      uitleg: `Een ladder mag als werkplek als het werk kort duurt, het risico laag is en een veiliger arbeidsmiddel niet gerechtvaardigd is. Een vanglijn is het laatste redmiddel als een steiger niet kan of meer gevaar geeft, niet de standaardoplossing.`
    },
    {
      vraag: `Wat is de juiste volgorde voor je een kruipruimte ingaat waar gevaar kan worden vermoed?`,
      opties: [
        `Eerst naar binnen gaan en pas ventileren als het benauwd aanvoelt`,
        `Alleen laten onderzoeken als er al eerder een gaslek is geweest`,
        `Eerst onderzoeken of de atmosfeer gevaar oplevert, dan naar binnen`,
        `Een adembeschermingsmasker opzetten en meteen naar binnen gaan`
      ],
      goed: 2,
      uitleg: `Artikel 3.5g Arbobesluit eist dat je bij een vermoeden van gevaar (verstikking, bedwelming, vergiftiging, brand, explosie) eerst onderzoekt of het gevaar er is. Alleen als dat onderzoek geen gevaar aantoont, ga je naar binnen; blijkt er wel gevaar, dan volgen eerst maatregelen.`
    },
    {
      vraag: `Je ziet tijdens onderhoud een oude, beschadigde plaat die mogelijk asbest bevat. Wat doe je?`,
      opties: [
        `Voorzichtig een klein stukje afzagen voor onderzoek`,
        `De plaat schoonmaken en het werk gewoon afronden`,
        `Een foto maken en zelf inschatten dat het asbest is`,
        `Niet bewerken, stoppen en de eigenaar inschakelen`
      ],
      goed: 3,
      uitleg: `Bewerken (zagen, breken, schuren) kan vezels laten vrijkomen. Je stopt het werk op die plek, informeert de eigenaar en laat een SC-540-gecertificeerd bedrijf vaststellen of het om asbest gaat en in welke risicoklasse. Zelf inschatten of een stukje wegzagen is geen van beide toegestaan.`
    },
    {
      vraag: `Wanneer mag een niet-gecertificeerd bedrijf zelf werkzaamheden aan asbest van risicoklasse 1 uitvoeren?`,
      opties: [
        `Alleen na inventarisatie, melding en voorlichting`,
        `Nooit, dat mag alleen een DTA-gecertificeerd bedrijf`,
        `Altijd, risicoklasse 1 is per definitie ongevaarlijk`,
        `Alleen als de bewoner mondeling toestemming geeft`
      ],
      goed: 0,
      uitleg: `Dat mag alleen als de risicoklasse vooraf door een gecertificeerd inventarisatiebedrijf is vastgesteld, het werk vakkundig gebeurt, het is gemeld bij de Nederlandse Arbeidsinspectie, de werknemer is voorgelicht en getraind, en hem een gezondheidsonderzoek is aangeboden. Toestemming van de bewoner of een eigen inschatting is niet genoeg.`
    },
    {
      vraag: `Welke uitspraak over VCA klopt?`,
      opties: [
        `VCA vervangt het Bewijs van Vakmanschap CO voor gaswerk`,
        `VCA is een apart veiligheidscertificaat naast het CO-stelsel`,
        `VCA is wettelijk verplicht voor iedereen die met gas werkt`,
        `VCA geldt alleen voor bedrijven in de bouwsector`
      ],
      goed: 1,
      uitleg: `VCA is een generiek, niet wettelijk verplicht veiligheidscertificaat dat opdrachtgevers naast het CO-stelsel kunnen eisen. Het vervangt niet het Bewijs van Vakmanschap CO of de BRL-bedrijfscertificering, en geldt niet uitsluitend voor de bouw.`
    }
  ],
  kaarten: [
    { voor: `Vanaf welke hoogte is een voorziening tegen valgevaar in de regel verplicht?`, achter: `2,5 meter (art. 3.16 Arbobesluit); ook onder die hoogte bij extra risico zoals een vloeropening.` },
    { voor: `Wanneer mag je een ladder gebruiken als werkplek in plaats van een steiger?`, achter: `Alleen bij kort, veilig werk met een laag risico. Geen vaste vervanger van een steiger.` },
    { voor: `Wat doe je voor je een kruipruimte ingaat waar gevaar kan worden vermoed?`, achter: `Eerst onderzoeken of de atmosfeer gevaarlijk is (verstikking, gas, CO); pas naar binnen als dat niet zo is (art. 3.5g).` },
    { voor: `Je vindt verouderd plaatmateriaal dat mogelijk asbest bevat. Wat doe je?`, achter: `Niet bewerken, werk stoppen, eigenaar informeren en een SC-540-bedrijf laten vaststellen of en welke asbest het is.` },
    { voor: `Wanneer mag een niet-gecertificeerd bedrijf zelf aan asbest werken?`, achter: `Alleen bij risicoklasse 1, na vaststelling door een gecertificeerd bedrijf, met melding, vakkundig werk, voorlichting en een aangeboden gezondheidsonderzoek.` },
    { voor: `Wie betaalt verplichte persoonlijke beschermingsmiddelen?`, achter: `De werkgever, kosteloos. Hij mag dit niet op het loon inhouden.` },
    { voor: `Wat is de praktijkregel voor incidenteel tillen?`, achter: `Niet meer dan 23 kg; bij meer dan 12 keer per dienst tillen niet meer dan 12 kg, dragen op heuphoogte niet meer dan 15 kg.` },
    { voor: `Wat doe je als je op locatie plotseling sterk gas ruikt?`, achter: `Geen vuur of schakelaars, ramen en deuren open, hoofdkraan dicht, van buiten bellen (0800-9009, bij acuut gevaar 112).` }
  ],
  bronnen: ['ARB-01', 'ARB-02', 'ARB-03', 'ARB-05', 'ARB-06', 'ARB-07', 'ARB-08', 'ARB-09', 'ARB-10', 'ARB-11', 'ARB-12', 'ARB-13', 'ARB-15', 'ARB-16', 'ARB-17', 'ARB-18', 'ARB-19', 'ARB-21', 'ARB-22', 'ARB-23', 'ARB-24', 'ARB-25', 'ARB-26', 'ARB-27', 'ARB-28', 'ARB-29', 'ARB-30', 'ARB-31']
}

  ]
});
