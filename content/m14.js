/* ==========================================================================
   m14.js - Module 14: Waterzijdig inregelen
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
   ========================================================================== */

CURSUS.addModule({
  id: 'm14',
  nr: 14,
  deel: 2,
  titel: 'Waterzijdig inregelen',
  ondertitel: 'Comfort en rendement zitten in de balans.',
  niveau: 'Gevorderd',
  studietijd: 10,
  intro: 'Een installatie die niet in balans is geeft koude en warme plekken, geluid, pendelen en onnodig gasverbruik. Deze module leert je de hydraulica achter inregelen, de instelventielen en de methoden om een installatie waterzijdig in balans te brengen.',
  leerdoelen: [
    'Symptomen van een niet ingeregelde installatie herkennen',
    'Uitleggen hoe weerstand, debiet en verdeling samenhangen',
    'Statische en dynamische regelventielen en thermostaatkranen uit elkaar houden',
    'Het vermogen en het debiet per radiator berekenen',
    'Een installatie inregelen met de gangbare methoden',
    'Vloerverwarming inregelen',
    'Het resultaat meten, controleren en vastleggen'
  ],
  lessen: [
    { id: 'm14l01', nr: '14.1', titel: 'Waarom inregelen: symptomen van onbalans', duur: 20, status: 'gepland',
      leerdoel: 'Je herkent de symptomen van een niet ingeregelde installatie en kunt uitleggen wat ze kosten aan comfort en energie.' },
    { id: 'm14l02', nr: '14.2', titel: 'De hydraulica van inregelen: weerstand, debiet en verdeling', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt uitleggen hoe weerstand, debiet en verdeling in een leidingnet samenhangen en waarom de dichtstbijzijnde radiator meer krijgt.' },
    { id: 'm14l03', nr: '14.3', titel: 'Instelventielen en regelaars', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt statische en dynamische regelventielen en thermostaatkranen uit elkaar houden en weet wanneer je welke toepast.' },
    { id: 'm14l04', nr: '14.4', titel: 'Vermogen en debiet per radiator berekenen', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt het vermogen en het benodigde debiet van elke radiator berekenen en daaruit de instelling afleiden.' },
    { id: 'm14l05', nr: '14.5', titel: 'Inregelen in de praktijk: de methoden stap voor stap', duur: 35, status: 'gepland',
      leerdoel: 'Je kunt een installatie inregelen met de gangbare methoden en de instellingen onderbouwen.' },
    { id: 'm14l06', nr: '14.6', titel: 'Vloerverwarming inregelen', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt de kringen van vloerverwarming inregelen en het debiet per kring controleren.' },
    { id: 'm14l07', nr: '14.7', titel: 'Controleren, meten en opleveren', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt het resultaat van het inregelen meten, beoordelen en vastleggen voor de klant en de volgende monteur.' }
  ]
});
