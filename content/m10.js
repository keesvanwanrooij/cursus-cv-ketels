/* ==========================================================================
   m10.js - Module 10: Meten en analyseren
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
   ========================================================================== */

CURSUS.addModule({
  id: 'm10',
  nr: 10,
  deel: 2,
  titel: 'Meten en analyseren',
  ondertitel: 'Meten is het bewijs dat je werk veilig is.',
  niveau: 'Gevorderd',
  studietijd: 8,
  intro: 'Meten is het bewijs dat je werk veilig is. Gasdruk, rookgas, CO in de ruimte, water en elektra: wat je meet, hoe je het doet en hoe je een meetwaarde beoordeelt.',
  leerdoelen: [
    'Het juiste meetinstrument bij de vraag kiezen',
    'Gasdruk meten en beoordelen',
    'Een rookgasanalyser voorbereiden, nullen en een meting uitvoeren',
    'Een rookgasmeting beoordelen en documenteren',
    'CO in de opstellingsruimte meten en de uitkomst beoordelen'
  ],
  lessen: [
    { id: 'm10l01', nr: '10.1', titel: 'Meten als vak: wat, waarmee, hoe nauwkeurig', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt bij een vraag het juiste meetinstrument kiezen en de nauwkeurigheid en beperkingen ervan benoemen.' },
    { id: 'm10l02', nr: '10.2', titel: 'Gasdruk meten', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt de gasdruk op een toestel meten, statisch en dynamisch, en de uitkomst beoordelen.' },
    { id: 'm10l03', nr: '10.3', titel: 'De rookgasanalyser: opbouw, nulmeting en onderhoud', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt uitleggen hoe een rookgasanalyser werkt en hem voorbereiden voor een betrouwbare meting.' },
    { id: 'm10l04', nr: '10.4', titel: 'Een rookgasmeting uitvoeren en beoordelen', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt een rookgasmeting uitvoeren op hoog en laag vermogen en de waarden beoordelen.' },
    { id: 'm10l05', nr: '10.5', titel: 'CO in de opstellingsruimte meten', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt CO in de ruimte meten en weet wat je doet met de uitkomst.' },
    { id: 'm10l06', nr: '10.6', titel: 'Water, temperatuur en elektra meten', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt druk, temperatuur, debiet en elektrische waarden meten en de resultaten aan de installatie koppelen.' }
  ]
});
