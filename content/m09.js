/* ==========================================================================
   m09.js - Module 9: Elektrisch werken aan een cv-ketel
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
   ========================================================================== */

CURSUS.addModule({
  id: 'm09',
  nr: 9,
  deel: 1,
  titel: 'Elektrisch werken aan een cv-ketel',
  ondertitel: 'De elektrische kant van de ketel, veilig en correct.',
  niveau: 'Gemiddeld',
  studietijd: 5,
  intro: 'De elektrische kant van de ketel: voeding, polariteit, aarding, thermostaatbedrading en veilig meten. Met verwijzingen naar de Cursus Elektrotechniek voor wie dieper wil.',
  leerdoelen: [
    'De voeding, polariteit en aarding van een ketel beoordelen',
    'Veilig een ketel spanningsloos maken en dat aantonen',
    'De thermostaatbedrading en het verschil tussen sterkstroom en laagspanning uitleggen',
    'De belangrijkste elektrische metingen aan een ketel uitvoeren'
  ],
  lessen: [
    { id: 'm09l01', nr: '9.1', titel: 'Voeding, polariteit en aarding van een ketel', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt beoordelen of de voeding, polariteit en aarding van een ketel correct zijn en uitleggen waarom dat ertoe doet.' },
    { id: 'm09l02', nr: '9.2', titel: 'Veilig werken: spanningsloos maken en meten', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt een ketel veilig spanningsloos maken en aantonen dat hij spanningsloos is.' },
    { id: 'm09l03', nr: '9.3', titel: 'Thermostaatbedrading en laagspanning', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt de bedrading van een thermostaat aansluiten en uitleggen waarom sterkstroom en laagspanning gescheiden blijven.' },
    { id: 'm09l04', nr: '9.4', titel: 'Elektrische metingen aan een ketel', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt met een multimeter de spanning, doorgang en het signaal van sensoren en ionisatie meten.' }
  ]
});
