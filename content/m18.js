/* ==========================================================================
   m18.js - Module 18: Examen en beroepspraktijk
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
   ========================================================================== */

CURSUS.addModule({
  id: 'm18',
  nr: 18,
  deel: 2,
  titel: 'Examen en beroepspraktijk',
  ondertitel: 'Van voorbereiding naar topmonteur.',
  niveau: 'Gevorderd',
  studietijd: 7,
  intro: 'Voorbereiding op het theorie- en praktijkexamen, plus wat een topmonteur verder nodig heeft: klantcommunicatie, administratie, werkorganisatie en een leerplan voor na het examen.',
  leerdoelen: [
    'Het theorie-examen doelgericht aanpakken',
    'Het praktijkexamen voorbereiden',
    'Helder en professioneel met klanten communiceren',
    'Werkbonnen en administratie bijhouden en je aansprakelijkheid begrijpen',
    'Een werkdag voorbereiden en plannen',
    'Een leerplan opstellen om door te groeien'
  ],
  lessen: [
    { id: 'm18l01', nr: '18.1', titel: 'Het theorie-examen aanpakken', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt het theorie-examen doelgericht voorbereiden en de vraagvormen strategisch aanpakken.' },
    { id: 'm18l02', nr: '18.2', titel: 'Het praktijkexamen voorbereiden', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt het praktijkexamen voorbereiden en weet waarop je beoordeeld wordt.' },
    { id: 'm18l03', nr: '18.3', titel: 'Klantcommunicatie en moeilijke gesprekken', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt een afkeuring, een offerte en een slecht bericht helder en respectvol uitleggen aan een klant.' },
    { id: 'm18l04', nr: '18.4', titel: 'Administratie, werkbonnen en aansprakelijkheid', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt werkbonnen en meetgegevens vastleggen en weet waarom aantoonbaar werken je beschermt.' },
    { id: 'm18l05', nr: '18.5', titel: 'Werkvoorbereiding, planning en gereedschap', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt een werkdag voorbereiden en weet welk gereedschap, materiaal en welke documentatie je meeneemt.' },
    { id: 'm18l06', nr: '18.6', titel: 'Je leerplan als topmonteur', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt een leerplan opstellen om na het examen door te groeien.' }
  ]
});
