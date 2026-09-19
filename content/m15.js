/* ==========================================================================
   m15.js - Module 15: Onderhoud
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
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
  lessen: [
    { id: 'm15l01', nr: '15.1', titel: 'De onderhoudsbeurt als proces', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt een onderhoudsbeurt als vast proces uitvoeren, van intake tot afronding.' },
    { id: 'm15l02', nr: '15.2', titel: 'Reinigen en inspecteren', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt brander, warmtewisselaar en sifon inspecteren en reinigen zonder onderdelen te beschadigen.' },
    { id: 'm15l03', nr: '15.3', titel: 'Slijtdelen en vervangen', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt slijtdelen herkennen, de juiste onderdelen kiezen en ze vervangen volgens de fabrikant.' },
    { id: 'm15l04', nr: '15.4', titel: 'Veiligheidscontroles en afronden met een meting', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt de veiligheidsfuncties controleren en het onderhoud afronden met een aantoonbare meting.' },
    { id: 'm15l05', nr: '15.5', titel: 'Rapporteren en klantadvies', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt de bevindingen van een onderhoudsbeurt vastleggen en de klant helder adviseren.' }
  ]
});
