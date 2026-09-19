/* ==========================================================================
   m16.js - Module 16: Storingzoeken en reparatie
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
   ========================================================================== */

CURSUS.addModule({
  id: 'm16',
  nr: 16,
  deel: 2,
  titel: 'Storingzoeken en reparatie',
  ondertitel: 'Wat een topmonteur onderscheidt van een onderdelenwisselaar.',
  niveau: 'Gevorderd',
  studietijd: 12,
  intro: 'Systematisch storingzoeken: van klacht naar bewezen oorzaak. De methode, het lezen van storingscodes en de klassieke klachten: geen warm water, geen verwarming, drukproblemen, ontsteking en afvoer.',
  leerdoelen: [
    'Een storing methodisch aanpakken van klacht tot bewezen oorzaak',
    'Een storingscode lezen als aanwijzing en niet als diagnose',
    'De klassieke klachten (tapwater, verwarming, druk, ontsteking, lucht en afvoer) diagnosticeren',
    'Intermitterende storingen aanpakken',
    'Beslissen of je repareert of adviseert te vervangen'
  ],
  lessen: [
    { id: 'm16l01', nr: '16.1', titel: 'De methode: van klacht naar bewezen oorzaak', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt een storing methodisch aanpakken en de oorzaak bewijzen voordat je een onderdeel vervangt.' },
    { id: 'm16l02', nr: '16.2', titel: 'Storingscodes lezen zonder erin te trappen', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt een storingscode opzoeken en gebruiken als aanwijzing, en weet waarom een code geen diagnose is.' },
    { id: 'm16l03', nr: '16.3', titel: 'Geen warm tapwater', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt de oorzaken van een tapwaterstoring in een logische volgorde onderzoeken.' },
    { id: 'm16l04', nr: '16.4', titel: 'Geen verwarming', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt een ketel die niet verwarmt stap voor stap onderzoeken, van regeling tot afgifte.' },
    { id: 'm16l05', nr: '16.5', titel: 'Waterdruk zakt of stijgt', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt een drukprobleem analyseren en onderscheid maken tussen lek, expansievat en vulling.' },
    { id: 'm16l06', nr: '16.6', titel: 'Ontsteking en vlambewaking', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt een ketel die niet ontsteekt of de vlam verliest onderzoeken aan de hand van de startvolgorde.' },
    { id: 'm16l07', nr: '16.7', titel: 'Lucht, ventilator en afvoer', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt storingen door luchttoevoer, ventilator en afvoer onderzoeken en veilig oplossen.' },
    { id: 'm16l08', nr: '16.8', titel: 'Intermitterende storingen en repareren of vervangen', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt een storing die af en toe optreedt aanpakken en onderbouwen of repareren of vervangen zinvol is.' }
  ]
});
