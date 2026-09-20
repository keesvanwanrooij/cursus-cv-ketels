/* ==========================================================================
   storingen.js - casussen voor de storingzoeker
   Elke casus registreert zich met CURSUS.addCasus({...}). Datamodel en schrijfregels:
   project/docs/02-ARCHITECTUUR.md en project/docs/07-LESSJABLOON.md.

   {
     id: 's01', titel, niveau: 'Beginner' | 'Gemiddeld' | 'Gevorderd', duur: 10 (minuten),
     klacht: 'wat de klant zegt', context: 'markdown: toestel, leeftijd, situatie',
     les: 'm12l03',                       // achtergrondles (optioneel)
     acties: [ { id, groep, tekst, resultaat, essentieel: true | nuttig: true } ],
     oorzaken: [ { tekst, goed: true, uitleg } ],   // precies een goed
     oplossing: 'markdown (zonder eigen kop, de kop "Hoe een topmonteur dit aanpakt" wordt automatisch gezet): de werkwijze',
     veiligheid: 'optioneel: veiligheidswaarschuwing',
     leerpunten: [ '...' ]
   }
   ========================================================================== */

/* ------------------------------------------------------------------ s01 */
/* Feiten: HYD-01, HYD-06, HYD-10 t/m HYD-16 (project/docs/feiten/03-ketel-hydrauliek-regeling.md).
   De getallen in de situatie zijn een voorbeeld, geen meetgegevens. */
CURSUS.addCasus({
  id: 's01',
  titel: 'De waterdruk zakt elke week',
  niveau: 'Beginner',
  duur: 12,
  klacht: 'De klant moet elke week water bijvullen omdat de manometer op 0,7 bar staat en de ketel dan een lagedrukmelding geeft.',
  context: `
Een HR-combiketel van negen jaar oud in een tussenwoning, met radiatoren op twee verdiepingen. Het hoogste punt van de installatie ligt ongeveer 5 meter boven het expansievat. De klant heeft zelf al radiatoren ontlucht. Hij vertelt dat de druk in de winter juist hoog lijkt te staan zodra de ketel aan is.
`,
  les: 'm03l03',
  acties: [
    { id: 'a1', groep: 'Vragen aan de klant', tekst: 'Vraag wanneer de druk zakt en hoeveel hij bijvult', resultaat: 'Elke week ongeveer een halve bar. Na een koude nacht staat de druk het laagst.', nuttig: true },
    { id: 'a2', groep: 'Vragen aan de klant', tekst: 'Vraag of hij ooit water op de vloer of bij de ketel heeft gezien', resultaat: 'Nooit water op de vloer gezien. Bij de ketel hangt een afvoerslangetje dat hij nooit heeft bekeken.', nuttig: true },
    { id: 'a3', groep: 'Water', tekst: 'Lees de waterdruk af bij koude installatie', resultaat: '0,7 bar.', essentieel: true },
    { id: 'a4', groep: 'Water', tekst: 'Laat de ketel opwarmen tot 80 graden en volg de druk', resultaat: 'De druk loopt op van 0,7 naar ongeveer 3 bar. Daarna druppelt er water uit de afvoer van het veiligheidsventiel.', essentieel: true },
    { id: 'a5', groep: 'Water', tekst: 'Meet de voordruk van het expansievat (systeem drukloos, vat afgesloten van de waterzijde)', resultaat: 'Voordruk 0,1 bar. De installatiehandleiding noemt bij 5 meter hoogte ongeveer 0,5 bar.', essentieel: true },
    { id: 'a6', groep: 'Water', tekst: 'Kijk of het veiligheidsventiel en de afvoer nat zijn', resultaat: 'De afvoer is nat en er zit kalkaanslag rond de uitloop.', nuttig: true },
    { id: 'a7', groep: 'Water', tekst: 'Zoek naar zichtbare lekkage bij ketel, leidingen en radiatoren', resultaat: 'Geen zichtbare lekkage en geen vochtplekken.', nuttig: true },
    { id: 'a8', groep: 'Water', tekst: 'Ontlucht alle radiatoren nog een keer', resultaat: 'Bij twee radiatoren komt een beetje lucht uit. De druk zakt daarna licht, het probleem blijft.' },
    { id: 'a9', groep: 'Gas', tekst: 'Meet de gasdruk', resultaat: 'Geen afwijking.' },
    { id: 'a10', groep: 'Elektra', tekst: 'Meet de voedingsspanning van de ketel', resultaat: 'Geen afwijking.' },
    { id: 'a11', groep: 'Regeling', tekst: 'Lees de storingshistorie uit', resultaat: 'Meerdere lagedrukmeldingen en twee keer een hogedrukmelding.', nuttig: true },
    { id: 'a12', groep: 'Regeling', tekst: 'Controleer de instellingen van de thermostaat', resultaat: 'Normaal ingesteld.' }
  ],
  oorzaken: [
    {
      tekst: 'Er is een lek in een leiding onder de vloer',
      goed: false,
      uitleg: 'Een lek geeft een gestage daling van de druk, ook bij koude installatie. Hier loopt de druk bij opwarmen juist op tot bijna 3 bar en is er geen vocht gevonden.'
    },
    {
      tekst: 'Het expansievat heeft een veel te lage voordruk en vangt het uitzettingswater niet op',
      goed: true,
      uitleg: 'Water zet bij verwarmen van 10 naar 80 graden ongeveer 3 procent uit. Het vat kan dat niet opvangen, de druk loopt op tot het veiligheidsventiel opent en het afgeblazen water ontbreekt bij afkoelen. De druk zakt dan onder de minimale waarde, de klant vult bij en de cyclus herhaalt zich.'
    },
    {
      tekst: 'Het gasblok van de ketel is defect',
      goed: false,
      uitleg: 'Het gasblok regelt de gastoevoer en heeft geen invloed op de waterdruk of op de uitzetting van het water.'
    },
    {
      tekst: 'Het veiligheidsventiel is defect en opent te vroeg',
      goed: false,
      uitleg: 'Het ventiel opent bij ongeveer 3 bar en dat is zijn taak. Het druppelen is het gevolg van de te hoge druk, niet de oorzaak. Vervang je alleen het ventiel, dan blijft het echte probleem bestaan.'
    }
  ],
  oplossing: `
1. **Bewijs eerst, vervang daarna.** "De druk zakt" kan meerdere oorzaken hebben. Een lek geeft een gestage daling, een probleem met het expansievat geeft een sterke drukstijging bij opwarmen gevolgd door waterverlies via het veiligheidsventiel. Door de druk koud en warm af te lezen, onderscheid je die twee.
2. **Meet de voordruk op het juiste moment.** Maak de installatie drukloos en sluit het vat af van de waterzijde. Meet dan op het stikstofventiel van het vat. Voordruk is de druk in onbelaste toestand.
3. **Bepaal de juiste voordruk.** Die hangt af van de statische hoogte: 1 meter hoogteverschil geeft 0,1 bar, plus een toeslag. Gebruik de tabel of berekening van de fabrikant of de leverancier van het vat, de waarden verschillen per fabrikant.
4. **Pomp het vat bij** tot de juiste voordruk. Vul daarna de installatie tot de vuldruk uit de handleiding en test opnieuw: opwarmen tot 80 graden en de druk volgen.
5. **Controleer het veiligheidsventiel.** Blijft de afvoer na de reparatie droog, dan is het ventiel in orde. Blijft het druppelen, dan vervang je het.
6. **Leg vast** wat je vond en deed: druk koud en warm voor en na, voordruk en vuldruk.
`,
  veiligheid: 'Het water in de installatie kan heet zijn. Laat het systeem afkoelen en maak het drukloos voordat je de voordruk meet of iets losmaakt.',
  leerpunten: [
    'Lees de druk koud en warm af: het verloop vertelt meer dan een getal.',
    'De voordruk meet je bij een drukloos systeem, met het vat afgesloten van de waterzijde.',
    'Water zet bij verwarmen van 10 naar 80 graden ongeveer 3 procent uit: dat vangt het expansievat op.',
    'Een druppelend veiligheidsventiel is vaak het gevolg van een ander probleem, niet de oorzaak.'
  ]
});

/* ------------------------------------------------------------------ s02 */
/* Feiten: STO-11, TAP-01, TAP-13, ONT-19, KET-23 (project/docs/feiten/05 en 03).
   De getallen in de situatie zijn een voorbeeld, geen meetgegevens. */
CURSUS.addCasus({
  id: 's02',
  titel: 'Warm water wordt niet meer warm genoeg',
  niveau: 'Gemiddeld',
  duur: 15,
  klacht: 'De douche wordt na een paar minuten al kouder, en de kraan geeft eigenlijk nooit meer echt heet water, terwijl dat vroeger geen probleem was.',
  context: `
Een combiketel van 11 jaar oud in een rijtjeswoning in een gebied met hard water. De klant heeft nooit een waterontharder gehad en kan zich niet herinneren dat er de afgelopen 3 jaar onderhoud is geweest. De klacht is volgens hem geleidelijk erger geworden, niet plotseling.
`,
  les: 'm16l03',
  acties: [
    { id: 'a1', groep: 'Vragen aan de klant', tekst: 'Vraag of de klacht plotseling begon of geleidelijk erger werd', resultaat: 'Geleidelijk, de afgelopen maanden steeds iets minder warm en iets korter warm.', nuttig: true },
    { id: 'a2', groep: 'Vragen aan de klant', tekst: 'Vraag wanneer het toestel voor het laatst onderhouden is', resultaat: 'Niet meer sinds de plaatsing, voor zover de klant weet, meer dan 3 jaar geleden.', nuttig: true },
    { id: 'a3', groep: 'Vragen aan de klant', tekst: 'Vraag of de klant weet of het water in de wijk hard is', resultaat: 'Ja, de klant weet van de buren dat het waterleidingbedrijf hard water levert; er is geen waterontharder geplaatst.', nuttig: true },
    { id: 'a4', groep: 'Water', tekst: 'Meet de tapflow bij volledig geopende warmwaterkraan', resultaat: 'Ongeveer 10 l/min, binnen de normale capaciteit van dit toestel.' },
    { id: 'a5', groep: 'Water', tekst: 'Meet de uitstroomtemperatuur bij lage en bij normale doorstroming', resultaat: 'Bij een klein straaltje water is de temperatuur nog wel op de ingestelde 60 graden, bij een normaal geopende kraan blijft de temperatuur duidelijk daaronder.', essentieel: true },
    { id: 'a6', groep: 'Water', tekst: 'Controleer de waterdruk van de cv-installatie', resultaat: '1,6 bar, geen afwijking.' },
    { id: 'a7', groep: 'Regeling', tekst: 'Lees de ingestelde warmtapwatertemperatuur op het display af', resultaat: '60 graden ingesteld, zoals de klant ook aangeeft te willen.' },
    { id: 'a8', groep: 'Elektra', tekst: 'Meet of de driewegklep tijdens het tappen spanning krijgt en schakelt', resultaat: 'De klep krijgt spanning op het moment dat er getapt wordt en schakelt hoorbaar naar de warmwaterstand.', essentieel: true },
    { id: 'a9', groep: 'Water', tekst: 'Demonteer de tapwatercartridge en inspecteer de platenwarmtewisselaar', resultaat: 'Duidelijke witte kalkaanslag op de platen, een deel van de kleine doorstroomkanalen is zichtbaar dichtgeslibd.', essentieel: true },
    { id: 'a10', groep: 'Gas', tekst: 'Lees de ionisatiestroom op het display af', resultaat: 'Ruim boven de grenswaarde van de fabrikant, geen afwijking.' }
  ],
  oorzaken: [
    {
      tekst: 'Kalkaanslag in de platenwarmtewisselaar vermindert de warmteoverdracht naar het tapwater',
      goed: true,
      uitleg: 'Kalkafzetting hangt af van waterhardheid, bedrijfsuren, tapgedrag en de ingestelde temperatuur, en bouwt zich geleidelijk op. Dat past bij een klacht die langzaam erger werd, bij een toestel dat al jaren niet is onderhouden in een gebied met hard water, en bij een normale tapflow die toch niet genoeg warmte overdraagt zodra er meer water doorheen stroomt.'
    },
    {
      tekst: 'De driewegklep is defect en blijft in de cv-stand hangen',
      goed: false,
      uitleg: 'De klep kreeg tijdens het tappen spanning en schakelde hoorbaar naar de warmwaterstand: dat sluit uit dat de klep vastzit of niet meer schakelt.'
    },
    {
      tekst: 'De warmtapwatertemperatuur staat te laag ingesteld',
      goed: false,
      uitleg: 'Het display toont 60 graden, precies wat de klant wil. Een verkeerde instelling zou bovendien niet verklaren waarom het probleem geleidelijk erger werd.'
    },
    {
      tekst: 'De ionisatiestroom is te laag, waardoor de ketel minder vermogen levert',
      goed: false,
      uitleg: 'De ionisatiestroom ligt ruim boven de grenswaarde: de brander en de vlambewaking functioneren dus normaal, dat is niet de beperkende factor bij deze klacht.'
    }
  ],
  oplossing: `
1. **Volg de volgorde van de les.** Doorstroming en driewegklep zijn hier al gecontroleerd en in orde, dus de volgende stap in de keten is de platenwisselaar, niet meteen een duur onderdeel raden.
2. **Bewijs het met de temperatuur bij verschillende debieten.** Blijft de temperatuur bij een klein straaltje wel op peil en zakt hij bij een normaal geopende kraan, dan wijst dat op te weinig warmteoverdracht per tijdseenheid: precies het beeld van een deels dichtgeslibde wisselaar.
3. **Reinig de platenwisselaar samen met de tapwatercartridge.** Dat is de aanpak die de fabrikant bij een merkbaar lagere tapcapaciteit voorschrijft, bijvoorbeeld met een geschikt ontkalkingsmiddel, gevolgd door grondig naspoelen met leidingwater.
4. **Adviseer structureel onderhoud.** Bij hard water en geen waterontharder komt kalkaanslag terug: leg de klant uit waarom jaarlijks onderhoud en eventueel een waterontharder dit in de toekomst voorkomen.
5. **Test na de reparatie.** Meet de uitstroomtemperatuur opnieuw bij een normaal geopende kraan en vergelijk met de ingestelde temperatuur.
`,
  veiligheid: 'Het water en de platenwisselaar kunnen heet zijn: laat het toestel afkoelen en maak het drukloos voor je de tapwatercartridge demonteert. Een ontkalkingsmiddel is een chemisch product: volg de voorschriften van de fabrikant en spoel na.',
  leerpunten: [
    'Kalkaanslag in de platenwisselaar geeft een geleidelijke achteruitgang, geen plotselinge storing.',
    'Meet de temperatuur bij een laag en bij een normaal debiet: dat onderscheidt een capaciteitsprobleem van een sensor- of klepstoring.',
    'Test de driewegklep door te controleren of hij tijdens het tappen echt spanning krijgt en schakelt, niet alleen visueel.',
    'Reinig bij een lagere tapcapaciteit de platenwisselaar samen met de tapwatercartridge, zoals de fabrikant voorschrijft.'
  ]
});

/* ------------------------------------------------------------------ s03 */
/* Feiten: STO-05, KET-05, MET-26, ELK-08, ELK-09 (project/docs/feiten/05, 03 en 09).
   De getallen in de situatie zijn een voorbeeld, geen meetgegevens. */
CURSUS.addCasus({
  id: 's03',
  titel: 'De ketel ontsteekt niet meer',
  niveau: 'Gevorderd',
  duur: 15,
  klacht: 'M\'n cv-ketel doet helemaal niets meer: geen verwarming en geen warm water, en op het display staat een foutmelding.',
  context: `
Een Remeha-toestel van 8 jaar oud (voorbeeld, de aanpak verschilt per merk en model). De storing begon vlak na een korte stroomstoring in de wijk. De klant heeft zelf al een keer geprobeerd te resetten, zonder resultaat.
`,
  les: 'm16l06',
  acties: [
    { id: 'a1', groep: 'Vragen aan de klant', tekst: 'Vraag of de storing echt meteen na de stroomstoring begon', resultaat: 'Ja, meteen daarna probeerde de ketel een paar keer op te starten en toen bleef de foutmelding staan.', nuttig: true },
    { id: 'a2', groep: 'Vragen aan de klant', tekst: 'Vraag of er bij het opstarten een tikkend of knetterend geluid te horen was', resultaat: 'Ja, een paar keer een tikkend geluid vlak voor de foutmelding kwam.', nuttig: true },
    { id: 'a3', groep: 'Elektra', tekst: 'Controleer de netspanning en de aarding van de netaansluiting van het toestel', resultaat: 'Spanning en aarding van de netaansluiting zijn in orde.' },
    { id: 'a4', groep: 'Gas', tekst: 'Controleer of de gaskraan bij de ketel volledig open staat', resultaat: 'De gaskraan staat volledig open.' },
    { id: 'a5', groep: 'Gas', tekst: 'Meet de gasvoordruk dynamisch, met het toestel in bedrijf', resultaat: 'Binnen het toegestane bereik van dit toestel.' },
    { id: 'a6', groep: 'Water', tekst: 'Controleer of de sifon gevuld en niet verstopt is', resultaat: 'Sifon is gevuld tot de markering en niet verstopt.' },
    { id: 'a7', groep: 'Gas', tekst: 'Lees de ionisatiestroom af via het display, in vol- en laaglast', resultaat: 'Ruim onder de grenswaarde van de fabrikant, in beide standen.', essentieel: true },
    { id: 'a8', groep: 'Elektra', tekst: 'Controleer de elektrodeafstand en de staat van de ontstekings-/ionisatie-elektrode', resultaat: 'De elektrode is zwaar vervuild en op één punt duidelijk verkleurd door corrosie.', essentieel: true },
    { id: 'a9', groep: 'Elektra', tekst: 'Controleer de massaverbinding van de brander zelf, los van de netaarding van het toestel', resultaat: 'De massa-aansluiting van de brander vertoont corrosie en zit niet meer stevig vast.', essentieel: true },
    { id: 'a10', groep: 'Gas', tekst: 'Controleer de gas-luchtafstelling (bijvoorbeeld met een rookgasanalyse)', resultaat: 'Binnen de normale grenzen van dit toestel.' }
  ],
  oorzaken: [
    {
      tekst: 'Een vervuilde elektrode en een slechte massaverbinding van de brander door corrosie, waardoor de gelijkrichting van de ionisatiestroom grotendeels wegvalt',
      goed: true,
      uitleg: 'Ionisatiebewaking werkt doordat de vlam een wisselspanning tussen elektrode en massa asymmetrisch gelijkricht. Zowel een vervuilde elektrode als een slechte massaverbinding kunnen die gelijkrichting laten wegvallen, ook al is er wel een vonk en soms zelfs kort een vlam. De gemeten ionisatiestroom ver onder de grenswaarde in zowel vol- als laaglast bevestigt dit.'
    },
    {
      tekst: 'Het gasblok is door de stroomstoring beschadigd',
      goed: false,
      uitleg: 'De gasvoordruk en de gas-luchtafstelling zijn normaal: er is geen aanwijzing dat het gasblok zelf niet meer goed werkt.'
    },
    {
      tekst: 'De sifon is verstopt geraakt, waardoor de ketel niet meer ontsteekt',
      goed: false,
      uitleg: 'De sifon is gevuld en niet verstopt: dat sluit deze oorzaak uit, ook al staat een verstopte sifon wel vaker in de oorzakenlijst bij deze klacht.'
    },
    {
      tekst: 'De gaskraan is per ongeluk dichtgedraaid tijdens of na de stroomstoring',
      goed: false,
      uitleg: 'De gaskraan staat volledig open: dat is dus niet de oorzaak van deze storing.'
    }
  ],
  oplossing: `
1. **Herken de tak van de klacht.** Een tikkend geluid vlak voor de foutmelding wijst op wel een vonk, maar te weinig ionisatie of geen (stabiele) vlam: dat stuurt het onderzoek naar elektrode, aarding en gas-/luchtpad, niet naar het gasblok of de sifon.
2. **Meet de ionisatiestroom in vol- en laaglast** voor je iets vervangt: een waarde ver onder de grenswaarde in beide standen bevestigt het vermoeden en sluit uit dat het alleen aan de belasting ligt.
3. **Maak het toestel spanningsloos** voor je de elektrode en de massa-aansluiting van de brander controleert en reinigt of herstelt.
4. **Herstel de massa-aansluiting en reinig of vervang de elektrode.** Beide oorzaken spelen hier tegelijk: alleen de elektrode vervangen zonder de corrosie op de massa-aansluiting te verhelpen, laat de storing terugkomen.
5. **Meet opnieuw** de ionisatiestroom in vol- en laaglast om te bevestigen dat de reparatie de waarde boven de grenswaarde van de fabrikant heeft gebracht, en test een volledige opstart- en stopcyclus.
`,
  veiligheid: 'Maak het toestel spanningsloos voordat je aan de elektrode of de massa-aansluiting werkt, en toon aan dat het circuit spanningsloos is voor je verder meet. Overbrug de vlambewaking nooit om te testen of de ketel dan wel aanslaat: bij vlamverlies zonder werkende bewaking kan onverbrand gas vrijkomen.',
  leerpunten: [
    'Een tikkend geluid gevolgd door een foutmelding wijst op de tak "wel vonk, weinig of geen ionisatie", niet automatisch op het gasblok.',
    'Meet de ionisatiestroom altijd in vol- en laaglast voor je concludeert dat de elektrode of de aarding de oorzaak is.',
    'Een slechte massaverbinding van de brander geeft hetzelfde beeld als een vervuilde elektrode: controleer beide.',
    'Een stroomstoring kan corrosie of een losse verbinding "activeren" die er al was, zonder dat de stroomstoring zelf iets heeft beschadigd.'
  ]
});
