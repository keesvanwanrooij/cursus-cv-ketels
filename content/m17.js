/* ==========================================================================
   m17.js - Module 17: Merken, documentatie en hybride
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
   ========================================================================== */

CURSUS.addModule({
  id: 'm17',
  nr: 17,
  deel: 2,
  titel: 'Merken, documentatie en hybride',
  ondertitel: 'Werken met wat de fabrikant voorschrijft.',
  niveau: 'Gevorderd',
  studietijd: 6,
  intro: 'De fabrikantdocumentatie is leidend bij installeren, onderhouden en afstellen. Deze module gaat over het vinden en lezen ervan, de grote merken in de praktijk, en het aangrenzende terrein van hybride systemen, warmtepompen en F-gassen.',
  leerdoelen: [
    'De juiste fabrikantdocumentatie vinden en gebruiken',
    'De grote merken in Nederland herkennen en hun documentatie lezen',
    'Fabrikantinformatie verwerken in installatie en storingzoeken',
    'Hybride en warmtepompsystemen herkennen en de grens van je bevoegdheid kennen',
    'De grens met koudetechniek (F-gassen) benoemen'
  ],
  lessen: [
    { id: 'm17l01', nr: '17.1', titel: 'Fabrikantdocumentatie vinden en lezen', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt met typeplaatje en serienummer de juiste handleiding vinden en de relevante hoofdstukken lezen.' },
    { id: 'm17l02', nr: '17.2', titel: 'Merken in de praktijk', duur: 30, status: 'gepland',
      leerdoel: 'Je kent de grote merken in Nederland, hun kenmerken en waar je hun documentatie en technische ondersteuning vindt.' },
    { id: 'm17l03', nr: '17.3', titel: 'Informatie van de fabrikant verwerken', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt fabrikantinformatie, bulletins en onderdelenlijsten gebruiken om een storing of installatie goed aan te pakken.' },
    { id: 'm17l04', nr: '17.4', titel: 'Hybride en warmtepompen: wat je moet weten', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt hybride en warmtepompsystemen herkennen en aangeven welk deel van het werk bij jouw bevoegdheid past.' },
    { id: 'm17l05', nr: '17.5', titel: 'De grens met koudetechniek: F-gassen', duur: 20, status: 'gepland',
      leerdoel: 'Je kunt uitleggen wat F-gassen zijn en waar de grens ligt tussen werk aan de waterzijde en werk aan het koudemiddelcircuit.' }
  ]
});
