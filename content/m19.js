/* ==========================================================================
   m19.js - Module 19: Andere ketels en oudere toestellen
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
   Eerst onderzoek naar het feitenregister (project/docs/feiten/06-...), dan schrijven.
   Deze module hoort bij deel I en staat achteraan omdat de nummering van de andere modules vastligt.
   ========================================================================== */

CURSUS.addModule({
  id: 'm19',
  nr: 19,
  deel: 1,
  kritiek: true,
  titel: 'Andere ketels en oudere toestellen',
  ondertitel: 'Niet elk toestel is een moderne HR-ketel, en juist de oude zijn de gevaarlijkste.',
  niveau: 'Gemiddeld',
  studietijd: 3.5,
  intro: 'Naast de moderne HR-ketel kom je oudere ketels, geisers, gaskachels en toestellen op andere brandstoffen tegen. Juist open toestellen geven CO-ongevallen. Je leert ze herkennen en weet wat er verandert als je er een vervangt.',
  leerdoelen: [
    'De soorten ketels en toestellen indelen op brandstof, rendementsklasse en type (open of gesloten)',
    'Een atmosferische of VR-ketel herkennen en uitleggen waarom hij meer CO-risico geeft dan een gesloten HR-ketel',
    'Geisers, doorstroomtoestellen en losse gastoestellen herkennen en de risico\'s benoemen',
    'Ketels op olie, LPG, hout of pellets, warmtenetten en elektrische ketels plaatsen en weten waar jouw bevoegdheid ophoudt',
    'Uitleggen wat er verandert (afvoer, ventilatie, ruimte, afgifte) als je een oud toestel door een HR-ketel vervangt'
  ],
  lessen: [
    { id: 'm19l01', nr: '19.1', titel: 'Overzicht: soorten ketels en toestellen', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt ketels indelen op brandstof, rendementsklasse (HR, VR) en type (open of gesloten, solo of combi) en herkent ze op het typeplaatje.' },
    { id: 'm19l02', nr: '19.2', titel: 'Atmosferische en VR-ketels', duur: 30, status: 'gepland',
      leerdoel: 'Je herkent een atmosferische of VR-ketel, legt uit hoe hij zonder ventilator werkt (natuurlijke trek, trekonderbreker) en waarom hij CO-gevoelig is.' },
    { id: 'm19l03', nr: '19.3', titel: 'Geisers en doorstroomtoestellen', duur: 25, status: 'gepland',
      leerdoel: 'Je herkent een gasgeiser of doorstroomtoestel, weet waarom deze toestellen historisch vaak bij CO-ongevallen betrokken waren en wat je bij aantreffen doet.' },
    { id: 'm19l04', nr: '19.4', titel: 'Gaskachels, convectoren en gashaarden', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt losse gastoestellen (kachel, convector, haard) indelen naar open of gesloten type, hun afvoer en ventilatie beoordelen en de risico\'s uitleggen.' },
    { id: 'm19l05', nr: '19.5', titel: 'Olie, LPG, hout en pellets: herkennen en de grens', duur: 25, status: 'gepland',
      leerdoel: 'Je herkent ketels op olie, LPG, hout of pellets, weet wat er anders is aan brandstof en rookgas en waar de grens van jouw bevoegdheid en van Vakmanschap CO ligt.' },
    { id: 'm19l06', nr: '19.6', titel: 'Warmtenet, elektrische ketel en andere warmtebronnen', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt een afleverset van een warmtenet, een elektrische ketel en een gasabsorptiewarmtepomp plaatsen en weet wat je er als cv-monteur wel en niet aan doet.' },
    { id: 'm19l07', nr: '19.7', titel: 'Een oud toestel vervangen door een HR-ketel', duur: 35, status: 'gepland',
      leerdoel: 'Je kunt uitleggen wat er verandert bij het vervangen van een oud toestel (afvoer, ventilatie, ruimte, temperatuur) en welke controles je vooraf doet.' }
  ]
});
