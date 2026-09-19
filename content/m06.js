/* ==========================================================================
   m06.js - Module 6: Regeling en tapwater
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
   ========================================================================== */

CURSUS.addModule({
  id: 'm06',
  nr: 6,
  deel: 1,
  titel: 'Regeling en tapwater',
  ondertitel: 'Het gedrag van de installatie bepaalt comfort en rendement.',
  niveau: 'Gemiddeld',
  studietijd: 6,
  intro: 'De regeling en het tapwater: thermostaten, OpenTherm, weersafhankelijk regelen, combi en boiler, CW-klassen en legionella. Het gedrag van de installatie bepaalt comfort, rendement en veel klachten.',
  leerdoelen: [
    'Aan/uit, modulerend en OpenTherm regelen uit elkaar houden',
    'Weersafhankelijk regelen en de stooklijn uitleggen',
    'Uitleggen wat slimme thermostaten en zoneregeling met de ketel doen',
    'Combi en voorraadvat vergelijken en CW-klassen begrijpen',
    'De risico\'s van tapwater herkennen'
  ],
  lessen: [
    { id: 'm06l01', nr: '6.1', titel: 'Thermostaten: aan/uit, modulerend en OpenTherm', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt de regelvormen uit elkaar houden en uitleggen wat OpenTherm de ketel vertelt.' },
    { id: 'm06l02', nr: '6.2', titel: 'Weersafhankelijk regelen en de stooklijn', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt uitleggen hoe een weersafhankelijke regeling werkt en hoe je de stooklijn instelt.' },
    { id: 'm06l03', nr: '6.3', titel: 'Slimme thermostaten en zoneregeling', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt uitleggen wat slimme thermostaten en zoneregeling met de ketel doen en waar je bij het aansluiten op let.' },
    { id: 'm06l04', nr: '6.4', titel: 'Tapwater: combi, boiler en CW-klassen', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt een combi en een voorraadvat vergelijken en de CW-klasse van een toestel uitleggen.' },
    { id: 'm06l05', nr: '6.5', titel: 'Legionella en veilig tapwater', duur: 20, status: 'gepland',
      leerdoel: 'Je kent de legionellarisico\'s en de verbrandingsgevaren van tapwater en weet hoe je een installatie daarop instelt.' }
  ]
});
