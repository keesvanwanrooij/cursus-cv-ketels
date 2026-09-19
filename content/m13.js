/* ==========================================================================
   m13.js - Module 13: Installeren en inbedrijfstellen
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
   ========================================================================== */

CURSUS.addModule({
  id: 'm13',
  nr: 13,
  deel: 2,
  titel: 'Installeren en inbedrijfstellen',
  ondertitel: 'Van werkvoorbereiding tot een veilig opgeleverde ketel.',
  niveau: 'Gevorderd',
  studietijd: 9,
  intro: 'Van werkvoorbereiding tot oplevering: een ketel plaatsen, aansluiten, gasdicht controleren, vullen, ontsteken, afstellen en vrijgeven, volgens de fabrikantinstructies en met aantoonbare metingen.',
  leerdoelen: [
    'Een installatie voorbereiden en de situatie bij de klant opnemen',
    'Een ketel plaatsen en water, gas, elektra en afvoer aansluiten',
    'De gasdichtheid controleren',
    'Vullen, ontluchten, spoelen en de eerste ontsteking uitvoeren',
    'Een ketel vrijgeven met een compleet protocol en de klant instrueren'
  ],
  lessen: [
    { id: 'm13l01', nr: '13.1', titel: 'Werkvoorbereiding en opname bij de klant', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt een installatie voorbereiden en bij de klant de situatie opnemen die bepaalt of de ketel er veilig kan komen.' },
    { id: 'm13l02', nr: '13.2', titel: 'Plaatsen en aansluiten', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt een ketel plaatsen en water, gas, elektra en afvoer volgens de fabrikantinstructies aansluiten.' },
    { id: 'm13l03', nr: '13.3', titel: 'Gasdichtheid controleren', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt de gasleiding en aansluitingen van een toestel op dichtheid controleren en de uitkomst beoordelen.' },
    { id: 'm13l04', nr: '13.4', titel: 'Vullen, ontluchten en spoelen', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt een installatie vullen, ontluchten en spoelen en de drukken controleren.' },
    { id: 'm13l05', nr: '13.5', titel: 'Eerste ontsteking en afstellen', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt een ketel voor het eerst starten, de verbranding controleren en afstellen volgens de fabrikant.' },
    { id: 'm13l06', nr: '13.6', titel: 'Vrijgave en het inbedrijfstellingsprotocol', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt een ketel vrijgeven en vastleggen wat je gecontroleerd en gemeten hebt.' },
    { id: 'm13l07', nr: '13.7', titel: 'Oplevering en klantinstructie', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt een installatie opleveren en de klant uitleggen wat hij moet weten over gebruik, onderhoud en veiligheid.' }
  ]
});
