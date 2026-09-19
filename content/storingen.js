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
