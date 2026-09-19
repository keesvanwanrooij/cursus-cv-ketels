/* ==========================================================================
   m12.js - Module 12: Leidingwerk en verbindingen
   Skelet: alle lessen staan op status 'gepland'. Bij het schrijven van een les vervang je het
   object door een volledige les (zie project/docs/07-LESSJABLOON.md).
   ========================================================================== */

CURSUS.addModule({
  id: 'm12',
  nr: 12,
  deel: 2,
  titel: 'Leidingwerk en verbindingen',
  ondertitel: 'Het ambacht onder elke installatie.',
  niveau: 'Beginner',
  studietijd: 9,
  intro: 'Het ambacht onder elke installatie: materialen en gereedschap, tekeningen lezen, buis bewerken, solderen, knellen en persen, kunststof en meerlagenbuis, afvoer en het monteren van radiatoren. Goed leidingwerk is de basis van een lekvrije installatie.',
  leerdoelen: [
    'Materialen en gereedschap kiezen en veilig gebruiken',
    'Installatietekeningen en symbolen lezen',
    'Buis vakkundig meten, snijden, afbramen en buigen',
    'Verbindingen maken door solderen, knellen en persen',
    'Kunststof en meerlagenbuis voor water en gas toepassen',
    'Afvoer- en PVC-systemen verlijmen en monteren',
    'Radiatoren en cv-leidingwerk monteren en afvullen'
  ],
  lessen: [
    { id: 'm12l01', nr: '12.1', titel: 'Materialen, gereedschap en veilig werken', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt de gangbare buismaterialen en het bijbehorende gereedschap herkennen en veilig gebruiken.' },
    { id: 'm12l02', nr: '12.2', titel: 'Installatietekeningen en symbolen lezen', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt een installatietekening en de symbolen daarop lezen en er een werkplan uit afleiden.' },
    { id: 'm12l03', nr: '12.3', titel: 'Buis bewerken: meten, snijden, afbramen en buigen', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt buis nauwkeurig meten, snijden, afbramen en buigen zonder de buis te beschadigen.' },
    { id: 'm12l04', nr: '12.4', titel: 'Verbindingstechnieken: solderen, knellen en persen', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt een soldeer-, knel- en perverbinding maken en beoordelen of hij goed en lekvrij is.' },
    { id: 'm12l05', nr: '12.5', titel: 'Kunststof en meerlagenbuis voor water en gas', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt kunststof en meerlagenbuis voor water en gas toepassen, verbinden en afmonteren volgens de fabrikantvoorschriften.' },
    { id: 'm12l06', nr: '12.6', titel: 'Afvoersystemen en PVC: verlijmen en monteren', duur: 25, status: 'gepland',
      leerdoel: 'Je kunt een afvoersysteem van PVC verlijmen en monteren met het juiste afschot en de juiste ondersteuning.' },
    { id: 'm12l07', nr: '12.7', titel: 'Radiatoren en cv-leidingwerk monteren', duur: 30, status: 'gepland',
      leerdoel: 'Je kunt radiatoren en cv-leidingwerk monteren, aansluiten en afvullen.' }
  ]
});
