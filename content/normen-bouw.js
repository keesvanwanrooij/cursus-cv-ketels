/* ==========================================================================
   normen-bouw.js - normpagina's over de bouwregelgeving: Bouwbesluit en Bbl,
   NEN 2757 (met NEN 8757) en NEN 1087 (met NEN 8087), plus een paar overige normen.
   Sjabloon en regels: project/docs/10-NORMPAGINAS.md.
   Alle feiten staan in project/docs/feiten/21-normen-bouw.md (voorvoegsel NOB) en in
   04-rookgas-en-luchttoevoer.md (NRM, RGA, LUC, OPS) en 01-wet-en-certificering.md (WET).
   Alleen zekerheid A of B. Stand van de aangewezen en nieuwste uitgaven: gecontroleerd op
   2026-11-06. Bbl-artikelen zijn gelezen in de tekst bij inwerkingtreding (1 januari 2024).
   NEN-normen zijn auteursrechtelijk beschermd: deze pagina's beschrijven wat een norm regelt,
   geen normtekst, geen tabellen of figuren uit een norm.
   Regels voor de tekst: geen backticks of dollar-accolade in de inhoud, geen em-dash of en-dash.
   Stem: herschreven in de stem van Kees op 2026-11-14, inhoud ongewijzigd.
   ========================================================================== */

/* -------------------------------------------------------------------------- */
/* 1. Bouwbesluit en Bbl                                                      */
/* -------------------------------------------------------------------------- */
CURSUS.addNorm({
  id: 'bouwbesluit',
  code: 'Bbl',
  volgorde: 5,
  domein: 'Wet',
  titel: 'Bouwbesluit en Bbl: regels voor gas, rookgasafvoer en ventilatie',
  seoTitel: 'Bouwbesluit en Bbl: gas, rookgas en ventilatie',
  omschrijving: 'Het Bouwbesluit heet sinds 2024 het Bbl. Wat eist het Bbl voor gas, rookgasafvoer, verbrandingslucht en ventilatie? En wat moet jij daarmee?',
  kort: 'Het Bouwbesluit 2012 is sinds 1 januari 2024 het Bbl. Daar staan nu de regels voor gas, rookgasafvoer, verbrandingslucht, ventilatie en CO-certificering.',
  versie: 'Bbl, tekst bij inwerkingtreding 1 januari 2024',
  tekst: `
Het Bouwbesluit 2012 bestaat niet meer. Sinds 1 januari 2024 staan de technische bouwregels in het **Besluit bouwwerken leefomgeving (Bbl)**, onder de Omgevingswet. Het Bbl stelt prestatie-eisen aan de gasvoorziening, de rookgasafvoer, de verbrandingslucht en de ventilatie. Of je aan die eisen voldoet, bepaal je met de NEN-normen die het Bbl aanwijst. En voor jou als cv-monteur staat er ook de certificeringsplicht in (art. 6.45).

## In het kort

| Onderwerp | Antwoord |
|---|---|
| Volledige naam | Besluit bouwwerken leefomgeving (Bbl), onderdeel van de Omgevingswet |
| Sinds | 1 januari 2024. Het Bbl nam de technische bouwregels van het Bouwbesluit 2012 over |
| Wat het regelt | Gasvoorziening, rookgasafvoer, toevoer van verbrandingslucht, ventilatie, brandveiligheid van de afvoer en de plicht tot certificering van werk aan gasverbrandingsinstallaties |
| Voor wie | Iedereen die bouwt, verbouwt of een bouwwerk in stand houdt. Dus ook jij, als installateur die in dat bouwwerk werkt |
| Nieuwbouw en bestaande bouw | Hoofdstuk 4 geldt voor nieuwbouw, hoofdstuk 3 voor bestaande bouw, hoofdstuk 5 voor verbouw |
| Waar vind je de tekst | wetten.overheid.nl (BWBR0041297) en IPLO. Het Bbl is gratis in te zien |

## Van Bouwbesluit naar Bbl

Veel mensen zoeken nog op "Bouwbesluit rookgasafvoer" of "Bouwbesluit ventilatie". Dat is als zoekterm ook prima, maar de regels zelf staan nu in het Bbl. De Omgevingswet is op 1 januari 2024 in werking getreden. Op die datum nam het Bbl de technische bouwregels van het Bouwbesluit 2012 over. De certificeringsplicht ging gewoon mee. Het verbod stond eerst in artikel 1.35 van het Bouwbesluit 2012 en staat nu in artikel 6.45 van het Bbl.

Het Bouwbesluit 2012 was ingedeeld per technisch onderwerp. Het Bbl is ingedeeld naar de situatie van het bouwwerk, dus je zoekt nu ook anders. Eerst bepaal je of je met nieuwbouw, bestaande bouw of verbouw te maken hebt. Dan pas zoek je het onderwerp op.

## Nieuwbouw, bestaande bouw en verbouw

- **Hoofdstuk 4 (nieuwbouw):** de strengste eisen. Hier moeten nieuwe woningen aan voldoen.
- **Hoofdstuk 3 (bestaande bouw):** het minimumniveau voor wat er al staat.
- **Hoofdstuk 5 (verbouw):** bij gedeeltelijk vernieuwen, veranderen of vergroten pas je de regels van hoofdstuk 4 toe op het **rechtens verkregen niveau** (art. 5.4). Dat is het kwaliteitsniveau dat vlak voor de verbouwing was toegestaan. Het mag niet lager worden en ook nooit lager dan het niveau van bestaande bouw. Hoger dan het nieuwbouwniveau hoeft het niet (art. 5.5).

Een ketelvervanging in een bestaande woning wordt dus niet automatisch aan alle nieuwbouweisen getoetst. Bij de afvoer en de luchttoevoer kunnen de plaatseisen van nieuwbouw wel meekomen. Daarover lees je verderop meer. Let wel op als een bouwwerkinstallatie geheel wordt vernieuwd of geheel nieuw wordt aangebracht. Dan gelden ook de regels van afdeling 4.7, waaronder die voor gas (art. 5.4 lid 3). Of een enkele ketel daaronder valt, is een vraag voor het bevoegd gezag.

## Welke Bbl-artikelen raken jouw werk

| Onderwerp | Nieuwbouw | Bestaande bouw | Bepalingsmethode |
|---|---|---|---|
| Voorzieningen aanwezig, open toestel niet in toilet of badruimte | 4.135 | 3.75 | geen norm, de regel zelf |
| Capaciteit rookgasafvoer en stromingsrichting | 4.136 | 3.76 | [NEN 2757](norm:nen-2757) / NEN 8757 |
| Capaciteit verbrandingslucht | 4.137 | 3.77 | [NEN 1087](norm:nen-1087) / NEN 8087 |
| Plaats van de uitmonding, verdunning | 4.138 | geen eis, bij verbouw via 5.16 bij installeren | NEN 2757 |
| Plaats van de luchtinlaat | 4.139 | geen eis, bij verbouw via 5.16 bij installeren | NEN 1087 |
| Rookdoorlatendheid van de afvoer | 4.141 | 3.78 | NEN 2757 / NEN 8757 |
| Brandveiligheid van de afvoer | 4.40 | 3.29 | NEN 6062 / NEN 8062 |
| Ventilatie van verblijfsruimten | 4.122 | 3.67 | NEN 1087 / NEN 8087 |
| Voorziening voor gas | 4.200 | 3.107 | [NEN 1078](norm:nen-1078) / [NEN 8078](norm:nen-8078) |
| Certificering van het werk | 6.45 | 6.45 | certificatieschema (BRL 6000-25) |

Boven al die artikelen staat een doel, in artikel 4.134. Een bouwwerk met een verbrandingstoestel heeft voorzieningen voor verbrandingslucht en rookgasafvoer, zodat er geen binnenlucht ontstaat die slecht is voor de gezondheid. Het doel is dus de gezondheid, in de praktijk CO. De artikelen zijn de uitwerking ervan.

## Hoe Bbl, Omgevingsregeling en NEN op elkaar aansluiten

Het Bbl zegt wat er bereikt moet worden. Denk aan een afvoer met genoeg capaciteit, een uitmonding op een veilige plek en een luchttoevoer die klopt. Hoe je dat bepaalt, staat in een NEN-norm. Welke norm en welke uitgave dat is, regelt de **Omgevingsregeling** in Bijlage II. Soms wijst die maar een deel van een norm aan. Voor NEN 2757 bedoelt het Bbl deel 1 voor toestellen tot en met 130 kW bovenwaarde en deel 2 voor alles daarboven (art. 5.44).

!!! kern Wettelijk geldt de aangewezen uitgave
In het Bbl staan de prestatie-eisen. Bijlage II van de Omgevingsregeling is de lijst met aangewezen uitgaven. De nieuwste NEN-uitgave is dus niet automatisch de uitgave die wettelijk geldt. Op 6 november 2026 wijst Bijlage II onder meer NEN 2757-1:2019, NEN 8757:2005, NEN 1087:2001 en NEN 8087:2001 aan. Terwijl NEN al wel een NEN 8757:2025 heeft uitgegeven. Zie de pagina's over [NEN 2757 en NEN 8757](norm:nen-2757) en [NEN 1087 en NEN 8087](norm:nen-1087).
!!!

## Wat het Bbl wel en niet zegt

Het Bbl noemt getallen waar ze vaststaan. Bijvoorbeeld de afstand van de uitmonding tot de perceelsgrens, de verdunningsfactor en de ventilatiecapaciteit van een kookruimte (21 dm³/s). Over de montage zegt het niets. Afschot, beugelafstand, insteekdiepte en dilatatie haal je dus niet uit het Bbl, maar uit de voorschriften van de fabrikant en uit [NPR 3378](norm:npr-3378). Ook hoeveel verbrandingslucht een toestel nodig heeft, noemt het Bbl niet. Het spreekt van de "volgens de toestelspecificaties benodigde" hoeveelheid. Dat is eigenlijk gewoon de handleiding.

## Certificering en CO in het Bbl

Zonder certificaat mag je een gebouwgebonden gasverbrandingstoestel niet installeren, repareren, onderhouden of in bedrijf stellen en vrijgeven (art. 6.45). Dat geldt ook voor de voorzieningen voor verbrandingslucht en rookgasafvoer die erbij horen. De plicht ligt bij degene die het werk uitvoert en bij degene die het laat uitvoeren. Dus ook bij de eigenaar of bewoner. Losse kachels, kooktoestellen en de gasleiding zelf vallen er niet onder.

Stel je bij je werk een CO-concentratie boven de grens vast in een ruimte waar mensen kunnen zijn? Dan meld je dat onverwijld (art. 6.46). De grens staat in de Omgevingsregeling en is 20 ppm (art. 5.52).

!!! gevaar CO boven 20 ppm in een ruimte met mensen
Dan werk je niet door alsof er niets aan de hand is. Zorg dat de ruimte veilig is en informeer bewoner en eigenaar. Meld het volgens art. 6.46 aan de vier partijen: bewoner of gebruiker, eigenaar, bevoegd gezag en certificerende instelling. Er is een wijziging van de manier van melden voorgenomen, dus controleer de actuele regels.
!!!

## Wat dit in de praktijk betekent

- **Installeren in nieuwbouw:** de voorziening voor afvoer, luchttoevoer, uitmonding en ventilatie moet voldoen aan hoofdstuk 4. Meestal heeft de bouwer of de fabrikant het systeem al berekend. Jij controleert dan of wat er ligt bij het toestel past.
- **Vervangen in bestaande bouw:** het toestel zelf valt onder je certificaat. Bij verbouw gelden de plaatseisen voor een nieuw geplaatste afvoer of luchttoevoer (art. 5.16). Vervang je een bestaande voorziening en verandert de plaats van de uitmonding of toevoeropening niet, dan gelden ze niet. Wel moet de afvoer dan nog steeds geschikt zijn voor het nieuwe toestel. Zie [les 8.9](les:m08l09).
- **Beoordelen:** beoordeel je een afvoer of opstelplaats, dan toets je aan het niveau dat bij de situatie hoort. Weet je niet of het om nieuwbouwniveau of het rechtens verkregen niveau gaat? Vraag het dan aan het bevoegd gezag.
- **Veelgemaakte fouten:** alleen het toestel vervangen en de afvoer laten zitten omdat "het altijd goed ging". Of de normen door elkaar halen, want NEN 1078 gaat over het gasleidingwerk en niet over de opstelruimte of de afvoer. En een open toestel in een badruimte of toiletruimte plaatsen. Dat mag gewoon niet.

## Waar vind je het Bbl en de normen

Het Bbl staat op wetten.overheid.nl. De uitleg per onderwerp vind je op IPLO (Informatiepunt Leefomgeving). Alle NEN-normen die het Bbl aanwijst, kun je gratis inzien in NEN Connect. Dat is alleen-lezen online na een gratis registratie, dus printen of downloaden kan daar niet. Deze pagina is een uitleg voor de installateur. Het is geen officiële bron en geen juridisch advies.
`,
  faq: [
    { vraag: 'Is het Bouwbesluit nog van kracht?', antwoord: 'Nee. Het Bouwbesluit 2012 is per 1 januari 2024 opgegaan in het Besluit bouwwerken leefomgeving (Bbl) onder de Omgevingswet. De regels voor rookgasafvoer, verbrandingslucht, ventilatie en gas staan dus nu in het Bbl.' },
    { vraag: 'Wat zegt het Bouwbesluit over rookgasafvoer?', antwoord: 'Dat staat nu in het Bbl. In nieuwbouw eist artikel 4.136 een afvoercapaciteit die volgens NEN 2757 is bepaald. De plaats van de uitmonding staat in artikel 4.138. Voor bestaande bouw staat de capaciteitseis in artikel 3.76, bepaald volgens NEN 8757.' },
    { vraag: 'Welke regels gelden in het Bbl voor een cv-ketel?', antwoord: 'De ketel heeft verbrandingslucht en een rookgasafvoer nodig (art. 4.135 en 3.75). De capaciteit daarvan is bepaald volgens de aangewezen norm. Verder is de afvoer rookdicht en brandveilig en voldoet de voorziening voor gas aan NEN 1078 of NEN 8078. Aan de ketel werken mag alleen een certificaathouder (art. 6.45).' },
    { vraag: 'Heb ik een certificaat nodig om een cv-ketel te vervangen?', antwoord: 'Ja. Artikel 6.45 Bbl noemt installeren, repareren, onderhouden en het in bedrijf stellen en vrijgeven van een gebouwgebonden gasverbrandingstoestel en de afvoer- en luchtvoorzieningen. Die plicht geldt voor wie het uitvoert en net zo goed voor wie het laat uitvoeren.' },
    { vraag: 'Wat is het verschil tussen nieuwbouw, bestaande bouw en verbouw in het Bbl?', antwoord: 'Hoofdstuk 4 bevat de eisen voor nieuwbouw en hoofdstuk 3 het minimum voor bestaande bouw. Bij verbouw (hoofdstuk 5) geldt het rechtens verkregen niveau. Dat is niet lager dan voor de verbouwing, nooit lager dan bestaande bouw en niet hoger dan nieuwbouw.' },
    { vraag: 'Wat is het rechtens verkregen niveau?', antwoord: 'Het toegestane kwaliteitsniveau van een bouwwerk vlak voor een verbouwing. Na de verbouwing mag het niet lager zijn (art. 5.5), maar het hoeft ook niet hoger te zijn dan de eis voor nieuwbouw.' },
    { vraag: 'Waar vind ik de ventilatie-eisen van het Bbl?', antwoord: 'Voor nieuwbouw in artikel 4.122, met de capaciteit bepaald volgens NEN 1087. Voor bestaande bouw in artikel 3.67, bepaald volgens NEN 8087. Een ruimte met een kooktoestel heeft 21 dm³/s nodig, een toilet 7 en een badruimte 14 dm³/s.' },
    { vraag: 'Mag een open geiser in de badkamer hangen?', antwoord: 'Nee. Een open verbrandingstoestel mag niet in een toiletruimte of badruimte staan. Dat geldt in nieuwbouw (art. 4.135 lid 2) en in bestaande bouw (art. 3.75 lid 2). Een gesloten toestel mag soms wel, als de fabrikant dat toestaat.' }
  ],
  lessen: ['m01l02', 'm01l05', 'm08l06', 'm08l07', 'm08l09', 'm13l01', 'm19l07'],
  gerelateerd: ['nen-2757', 'nen-1087', 'nen-1078', 'nen-8078', 'npr-3378'],
  bronnen: ['NOB-01', 'NOB-02', 'NOB-03', 'NOB-05', 'NOB-06', 'NOB-07', 'NOB-11', 'NOB-17', 'NOB-21', 'NOB-22', 'NOB-23', 'NOB-24', 'NOB-28', 'NOB-29', 'NOB-30', 'NOB-38', 'NOB-39', 'NRM-01', 'NRM-02', 'NRM-03', 'NRM-07', 'NRM-21', 'NRM-24', 'WET-08', 'WET-09', 'WET-10', 'WET-42', 'WET-53', 'RGA-35', 'RGA-37', 'DIM-09', 'OPS-08', 'OPS-13', 'LUC-01', 'TST-42']
});

/* -------------------------------------------------------------------------- */
/* 2. NEN 2757 (met NEN 8757)                                                 */
/* -------------------------------------------------------------------------- */
CURSUS.addNorm({
  id: 'nen-2757',
  code: 'NEN 2757',
  volgorde: 40,
  domein: 'Rookgas',
  titel: 'NEN 2757: rookgasafvoer bepalen (en NEN 8757 voor bestaande bouw)',
  seoTitel: 'NEN 2757 en NEN 8757 uitgelegd voor de installateur',
  omschrijving: 'NEN 2757 en NEN 8757 uitgelegd: hoe bepaal je of een rookgasafvoer geschikt is, welke uitgave wijst het Bbl aan en wat moet jij er als cv-monteur mee?',
  kort: 'Met NEN 2757 en NEN 8757 bepaal je of een rookgasafvoer geschikt is voor een toestel. Wat ze regelen en welke uitgave wettelijk geldt.',
  versie: 'NEN 2757-1:2019 en NEN 8757:2005 (aangewezen); NEN 8757:2025 (nieuwste)',
  tekst: `
**NEN 2757** is de bepalingsmethode waarmee je in nieuwbouw vaststelt of een systeem voor rookgasafvoer geschikt is voor een gebouwgebonden installatie. **NEN 8757** doet hetzelfde voor bestaande bouw. Het Bbl verwijst er rechtstreeks naar voor de capaciteit, de stromingsrichting, de verdunning en de rookdoorlatendheid van de afvoer. Het is eigenlijk een norm voor ontwerpers en leveranciers van afvoersystemen. Maar je moet wel weten wat hij regelt.

## In het kort

| Onderwerp | NEN 2757 | NEN 8757 |
|---|---|---|
| Volledige titel | Bepalingsmethoden voor de geschiktheid van systemen voor de afvoer van rookgas van gebouwgebonden installaties | Idem, met als aanvulling: Bepalingsmethoden voor bestaande bouw |
| Delen | Deel 1: belasting tot en met 130 kW op bovenwaarde. Deel 2: boven 130 kW tot en met 2500 kW met een verticale uitmonding boven het dak | Eén norm, niet in delen |
| Voor welk werk | Nieuwbouw (Bbl hoofdstuk 4) | Bestaande bouw (Bbl hoofdstuk 3) |
| Aangewezen door de Omgevingsregeling | NEN 2757-1:2019 en NEN 2757-2:2006 | NEN 8757:2005 |
| Nieuwste uitgave | NEN 2757-1:2019 (1 nov 2019) en NEN 2757-2:2021 (1 okt 2021) | NEN 8757:2025 (1 juli 2025) |
| Controle van deze stand | 6 november 2026 | 6 november 2026 |

## Wat de norm regelt

NEN beschrijft de norm zo: hij laat zien voor welke toestellen de capaciteit van een afvoersysteem geschikt is. En of die capaciteit past bij een bepaald toestel op een bepaalde plaats. Het Bbl verwijst naar vier onderdelen:

- **Capaciteit:** kan de afvoer de rookgassen van het toestel kwijt? Het Bbl eist dat de capaciteit volgens de norm is bepaald. Die moet ten minste zijn wat het toestel volgens zijn specificaties nodig heeft voor een doeltreffende verbranding (art. 4.136 voor nieuwbouw, art. 3.76 voor bestaande bouw).
- **Stromingsrichting:** de rookgassen gaan van het toestel naar de uitmonding. Je mag dus geen terugstroming van rookgassen naar het gebouw krijgen. Belemmeringen buiten het bouwwerkperceel tellen bij de bepaling niet mee.
- **Verdunning:** hoe sterk is het rookgas verdund op de plek waar buitenlucht naar binnen wordt gehaald? Bij gasgestookte toestellen mag de verdunningsfactor ter plaatse van een instroomopening voor luchtverversing niet groter zijn dan 0,01. Die factor bepaal je volgens NEN 2757 (art. 4.138).
- **Rookdoorlatendheid:** hoeveel rook laat het inwendige oppervlak van de afvoer door? Voor een overdrukvoorziening is dat 0,006 x 10⁻³ m³/s per m² bij 200 Pa. Voor een onderdrukvoorziening in nieuwbouw is het 3 x 10⁻³ m³/s per m² bij 40 Pa (art. 4.141). Bestaande bouw kent alleen de eis voor overdruk (art. 3.78).

Over de plaats van de uitmonding zegt het Bbl zelf meer. Een uitmonding die niet boven het dakvlak ligt, zit minimaal 1 m van de perceelsgrens als je langszij meet en minimaal 2 m als je loodrecht op de gevel meet. Ook ligt hij minimaal 0,3 m boven een constructieonderdeel of het terrein (art. 4.138). Grenst het perceel aan een openbare weg, openbaar water of openbaar groen? Dan meet je tot het hart daarvan. De norm levert dus de rekenmethode voor de verdunning en het Bbl de afstanden.

## Welke uitgave geldt

Het Bbl wijst niet de nieuwste norm aan, maar de uitgave die in Bijlage II van de Omgevingsregeling staat. En hier verschilt dat.

| Norm | Aangewezen (Bijlage II) | Nieuwste uitgave bij NEN |
|---|---|---|
| NEN 2757-1 | 2019 | 2019 |
| NEN 2757-2 | 2006 | 2021 |
| NEN 8757 | 2005 | 2025 |

Voor deel 1 is er dus geen verschil. Voor deel 2 (boven 130 kW) en voor NEN 8757 is de nieuwste uitgave nog niet aangewezen, dus wettelijk gelden daar nog de oude uitgaven. NEN 8757:2025 verving op 1 juli 2025 de uitgave van 2005. Op 6 november 2026 was er geen wijziging van Bijlage II bekend die dit verandert. Kijk wel even op wetten.overheid.nl of er sindsdien iets is gewijzigd.

!!! kern Nieuwste is niet gelijk aan geldend
Wat NEN heeft uitgegeven en wat de wet aanwijst, zijn twee verschillende dingen. In een beoordeling gebruik je de aangewezen uitgave. De nieuwere uitgave kun je gebruiken als stand van de techniek, maar wettelijk is zij niet de maat.
!!!

## Welk deel hoort bij welk toestel

De splitsing op 130 kW is op bovenwaarde. Een cv-ketel in een woning valt vrijwel altijd onder NEN 2757-1, of onder NEN 8757 in bestaande bouw. Deel 2 is voor woningen grotendeels niet van toepassing.

Een gasgestookte stookinstallatie van meer dan 100 kW die onderdeel is van een technisch bouwsysteem valt onder de keuringsplicht van art. 6.38 en is uitgezonderd van de certificeringsplicht van art. 6.45 (lid 3). Dat staat los van de splitsing op 130 kW.

## Wanneer heb je de norm nodig

- Je plaatst of vervangt een afvoer in nieuwbouw en moet laten zien dat de capaciteit bij het toestel past.
- Je wilt weten of een uitmonding op een nieuwe plek mag, bijvoorbeeld bij een andere gevel of dakdoorvoer.
- Je beoordeelt in bestaande bouw een bestaande afvoer voor een nieuw toestel. In de praktijk volg je dan de fabrikant en [NPR 3378](norm:npr-3378).

## Verhouding met andere normen

De afvoer zelf is een product met eigen normen. Volgens IPLO voldoet een afvoer met CE-markering van klasse N1 of P1 volgens NEN-EN 1443 aan de eis voor rookdoorlatendheid van artikel 4.141. Die klassen zijn dus de "productkant" van dezelfde eis. NEN-EN 14471 en NEN-EN 1856 zijn productnormen voor afvoeren. NEN-EN 13384 is een rekenmethode voor schoorstenen. De brandveiligheid van de afvoer is weer een apart onderwerp, met NEN 6062 voor nieuwbouw en NEN 8062 voor bestaande bouw. De luchtkant regelt [NEN 1087](norm:nen-1087), dus de toevoer van verbrandingslucht en de ventilatie. De hele set staat op de pagina over het [Bouwbesluit en Bbl](norm:bouwbesluit).

## Wat het in de praktijk betekent

Je rekent zelden zelf met NEN 2757. De fabrikant van het afvoersysteem laat zijn systeem bepalen en zet in de handleiding welke combinaties met welk toestel mogen. Jouw taak is dat wat je plaatst binnen die grenzen blijft. En dat de afvoer niet wordt gewijzigd als dat niet kan.

- **Veelgemaakte fout 1:** de norm verwarren met NEN 1078 of NEN 8078. Die gaan over het gasleidingwerk en niet over de afvoer of de opstelruimte.
- **Veelgemaakte fout 2:** denken dat NEN 2757 afschot, beugelafstand of insteekdiepte voorschrijft. Dat staat ook niet in het Bbl. De montage-eisen komen uit de voorschriften van de fabrikant en uit NPR 3378.
- **Veelgemaakte fout 3:** bij vervanging van een toestel op een bestaande afvoer niet nagaan of de afvoer nog geschikt is. Voor het vervangen van toestellen en het werken aan bestaande afvoeren geeft [NPR 3378-45](norm:npr-3378) richtlijnen.
- **Veelgemaakte fout 4:** de nieuwste NEN-uitgave behandelen alsof die wettelijk geldt.

Bij verbouw gaan voor een nieuw geïnstalleerde afvoer de plaatseisen van artikel 4.138 en 4.141 mee (art. 5.16). Dat geldt niet als je een bestaande voorziening vervangt en de plaats van de uitmonding niet wijzigt. Lees dit samen met [les 8.5](les:m08l05) en [les 8.9](les:m08l09).

## Waar vind je de norm

Alle normen die het Bbl aanwijst, dus ook NEN 2757 en NEN 8757, kun je gratis inzien in NEN Connect. Dat is alleen-lezen online, na een gratis registratie. Je kunt de norm ook kopen op nen.nl of inzien via het abonnement van je werkgever of opleider. Deze pagina is een uitleg, geen officiële bron en geen vervanging van de norm.
`,
  faq: [
    { vraag: 'Wat is NEN 2757?', antwoord: 'De norm met bepalingsmethoden voor de geschiktheid van systemen voor rookgasafvoer van gebouwgebonden installaties. Het Bbl verwijst ernaar voor de capaciteit, stromingsrichting, verdunning en rookdoorlatendheid van de afvoer in nieuwbouw.' },
    { vraag: 'Wat is het verschil tussen NEN 2757 en NEN 8757?', antwoord: 'NEN 2757 is voor nieuwbouw (Bbl hoofdstuk 4) en NEN 8757 voor bestaande bouw (hoofdstuk 3). Allebei bepalen ze of een afvoersysteem geschikt is voor een toestel op een bepaalde plaats.' },
    { vraag: 'Wat is het verschil tussen NEN 2757-1 en NEN 2757-2?', antwoord: 'Deel 1 geldt voor installaties met een belasting tot en met 130 kW op bovenwaarde. Deel 2 is voor installaties daarboven tot en met 2500 kW met een verticale uitmonding boven het dak. Een cv-ketel in een woning valt onder deel 1.' },
    { vraag: 'Welke uitgave van NEN 2757 geldt?', antwoord: 'Volgens de Omgevingsregeling NEN 2757-1:2019 en nog steeds NEN 2757-2:2006. NEN heeft deel 2 in 2021 herzien, maar die uitgave is niet aangewezen. Stand: 6 november 2026.' },
    { vraag: 'Welke uitgave van NEN 8757 geldt?', antwoord: 'NEN 8757:2005, want dat is de aangewezen uitgave. NEN heeft op 1 juli 2025 wel NEN 8757:2025 uitgegeven, maar die is op 6 november 2026 nog niet aangewezen.' },
    { vraag: 'Wat is de verdunningsfactor van rookgas?', antwoord: 'Een maat voor hoe sterk rookgas is verdund op de plek waar buitenlucht wordt aangezogen. Bij gasgestookte toestellen mag de factor ter plaatse van een instroomopening voor luchtverversing niet groter zijn dan 0,01. Je bepaalt hem volgens NEN 2757.' },
    { vraag: 'Hoe ver moet de uitmonding van de rookgasafvoer van de perceelsgrens liggen?', antwoord: 'Ligt de uitmonding niet boven het dakvlak, dan minimaal 1 m van de perceelsgrens als je langszij meet en minimaal 2 m loodrecht op de gevel (Bbl art. 4.138). Ook moet hij minimaal 0,3 m boven een constructieonderdeel of het terrein liggen.' },
    { vraag: 'Moet ik als cv-monteur NEN 2757 kopen?', antwoord: 'Niet per se. De normen die het Bbl aanwijst, kun je na een gratis registratie alleen-lezen inzien in NEN Connect. In het dagelijks werk volg je vooral de handleiding van het afvoersysteem en NPR 3378.' }
  ],
  lessen: ['m08l05', 'm08l03', 'm08l02', 'm08l08', 'm08l09', 'm08l01'],
  gerelateerd: ['bouwbesluit', 'nen-1087', 'npr-3378', 'nen-1078', 'nen-8078'],
  bronnen: ['NOB-06', 'NOB-07', 'NOB-08', 'NOB-10', 'NOB-11', 'NOB-24', 'NOB-34', 'NOB-35', 'NOB-36', 'NOB-37', 'NOB-38', 'NOB-39', 'NRM-02', 'NRM-03', 'NRM-04', 'NRM-05', 'NRM-06', 'NRM-07', 'NRM-10', 'NRM-20', 'NRM-21', 'NRM-22', 'NRM-23', 'NRM-24', 'RGA-67', 'RGA-68', 'RGA-69', 'RGA-71', 'OPS-14', 'WET-11']
});

/* -------------------------------------------------------------------------- */
/* 3. NEN 1087 (met NEN 8087)                                                 */
/* -------------------------------------------------------------------------- */
CURSUS.addNorm({
  id: 'nen-1087',
  code: 'NEN 1087',
  volgorde: 50,
  domein: 'Ventilatie',
  titel: 'NEN 1087: ventilatie van gebouwen (en NEN 8087 voor bestaande bouw)',
  seoTitel: 'NEN 1087 en NEN 8087: ventilatie en verbrandingslucht',
  omschrijving: 'NEN 1087 en NEN 8087 uitgelegd: ventilatiecapaciteit en verbrandingslucht, welke uitgave geldt en waarom je dit moet weten bij een open toestel.',
  kort: 'Met NEN 1087 (nieuwbouw) en NEN 8087 (bestaande bouw) bepaal je de ventilatiecapaciteit en de capaciteit van de toevoer van verbrandingslucht.',
  versie: 'NEN 1087:2001 en NEN 8087:2001 (aangewezen)',
  tekst: `
**NEN 1087** is de bepalingsmethode voor ventilatie van gebouwen in nieuwbouw. **NEN 8087** is dezelfde methode voor bestaande bouw. Het Bbl gebruikt ze voor de ventilatiecapaciteit van een woning en voor de capaciteit van de toevoer van verbrandingslucht. Voor jou als cv-monteur doen ze ertoe zodra een toestel zijn lucht uit de ruimte haalt. Of zodra een afzuiging de lucht in de woning beïnvloedt.

## In het kort

| Onderwerp | NEN 1087 | NEN 8087 |
|---|---|---|
| Volledige titel | Ventilatie van gebouwen, Bepalingsmethoden voor nieuwbouw | Ventilatie van gebouwen, Bepalingsmethoden voor bestaande gebouwen |
| Voor welk werk | Nieuwbouw (Bbl hoofdstuk 4) | Bestaande bouw (Bbl hoofdstuk 3) |
| Aangewezen door de Omgevingsregeling | NEN 1087:2001 (en dan alleen de hoofdstukken die de Omgevingsregeling noemt) | NEN 8087:2001 |
| Nieuwste uitgave | NEN 1087:2001 | NEN 8087:2001 (voor zover bekend) |
| Controle van deze stand | 6 november 2026 | 6 november 2026 |

## Wat de norm regelt

NEN beschrijft deze normen als bepalingsmethoden voor de nominale ventilatiecapaciteit van een voorziening voor luchtverversing. Daaronder vallen de toevoer, eventueel de overstroming tussen ruimten, de afvoer en een spuivoorziening. De ingetrokken 2006-uitgave van NEN 1087 ging ook over de inrichting van een ventilatiesysteem. Denk aan thermisch comfort, stromingsrichting en de plaats van de openingen voor toevoer en afvoer. Het Bbl gebruikt vooral deze onderdelen:

- **Capaciteit van de ventilatie** van verblijfsruimten, toiletten en badruimten (art. 4.122 in nieuwbouw, art. 3.67 in bestaande bouw).
- **Capaciteit van de verbrandingsluchttoevoer** voor een toestel tot en met 130 kW (art. 4.137 en 3.77).
- **Verdunning** van de uitstoot van een afvoer, onder andere ter plaatse van een luchtinlaat voor verbrandingslucht (art. 4.126 en 4.139).
- **Luchtsnelheid** in de leefzone door de toevoer van verbrandingslucht: niet groter dan 0,2 m/s (art. 4.140).

De Omgevingsregeling wijst niet de hele norm aan. Waar artikel 4.122 naar NEN 1087 verwijst, gaat het om de hoofdstukken 5 en 8 (art. 5.41).

## Waarom dit ertoe doet bij een open toestel

Een open toestel (type B) haalt zijn verbrandingslucht uit de ruimte waar het staat. Die lucht moet er dus ook echt zijn. Daarnaast moet de afvoer het rookgas kwijt kunnen zonder dat een afzuiging het terugtrekt. De wet regelt dit via de ventilatiecapaciteit van de ruimte en de capaciteit van de verbrandingsluchttoevoer.

Een paar getallen staan gewoon vast in het Bbl:

| Situatie | Nieuwbouw (art. 4.122) | Bestaande bouw (art. 3.67) |
|---|---|---|
| Verblijfsruimte, per m² vloeroppervlakte | 0,7 dm³/s, minimum 7 dm³/s | 0,7 dm³/s, minimum 7 dm³/s |
| Verblijfsgebied, per m² vloeroppervlakte | 0,9 dm³/s, minimum 7 dm³/s | niet apart genoemd |
| Ruimte met opstelplaats kooktoestel | 21 dm³/s | 21 dm³/s, ook voor een open toestel voor warm water |
| Toiletruimte | 7 dm³/s | 7 dm³/s |
| Badruimte | 14 dm³/s | 14 dm³/s |
| Ruimte met een gasmeter | 1 dm³/s per m², minimum 2 dm³/s (art. 4.125) | 1 dm³/s per m², minimum 2 dm³/s (art. 3.68) |

In bestaande bouw geldt de 21 dm³/s ook voor een open toestel voor warm water in een verblijfsruimte, zoals een keukengeiser. Een toestel boven 15 kW valt er niet onder, want dan gelden de rookgas- en verbrandingsluchtregels (art. 3.75 tot 3.77). In nieuwbouw is een open toestel zonder afvoer niet toegestaan (art. 4.135). Daar heeft elke ruimte met een verbrandingstoestel voorzieningen voor afvoer en luchttoevoer. De enige uitzondering is een kooktoestel tot 15 kW in een verblijfsruimte.

!!! kern De wet noemt geen getal voor de verbrandingslucht van je ketel
Het Bbl eist een verbrandingsluchtcapaciteit die volgens NEN 1087 (nieuwbouw) of NEN 8087 (bestaande bouw) is bepaald. Die moet minimaal gelijk zijn aan wat de toestelspecificaties vragen voor een doeltreffende verbranding. Het getal haal je dus uit de handleiding van het toestel en niet uit de norm of de wet. Boven 130 kW eist het Bbl een capaciteit waarmee de verbranding doeltreffend kan plaatsvinden.
!!!

## Welke uitgave geldt

NEN 1087:2001 is zowel de aangewezen als de nieuwste uitgave. Het ontwerp van 2019 voegde een indicatieve methode voor ventilatieprestatie toe, maar is ingetrokken. De 2006-uitgave in ontwerp was al op 8 januari 2019 ingetrokken. Volgens NEN Connect wordt er nog wel aan een herziening gewerkt.

Ook voor NEN 8087 is 2001 de aangewezen uitgave. Voor zover bekend is er op 6 november 2026 geen definitief vastgestelde nieuwere uitgave. NEN noemt op zijn pagina wel een ontwerp van 2006 als opvolger. Een aangewezen norm kan dus ruim twintig jaar oud zijn en toch de wettelijke maat blijven.

## Wanneer heb je de norm nodig

- Je vervangt een open toestel of een toestel in een kleine ruimte. Dan wil je weten of er genoeg verbrandingslucht beschikbaar is.
- Er is een afzuigkap of mechanische ventilatie bijgekomen in een kierdichte woning. Onderdruk kan dan rookgassen van open toestellen terugtrekken (zie [les 8.7](les:m08l07)).
- Je moet een opstellingsruimte beoordelen (zie [les 8.6](les:m08l06)).

## Verhouding met andere normen en de wet

Voor het rookgas zelf is [NEN 2757](norm:nen-2757) de norm. NEN 1087 bepaalt de luchtkant. Samen zijn ze de "bepalingsmethoden" onder de prestatie-eisen van het Bbl. Wat het toestel nodig heeft, staat in de specificaties van de fabrikant. Een gesloten toestel (type C) haalt zijn lucht van buiten via de luchttoevoerleiding. Dat maakt het veel minder afhankelijk van de ventilatie van de ruimte. Zie [het Bbl](norm:bouwbesluit) voor het geheel.

## Wat het in de praktijk betekent

- Sluit nooit een luchttoevoeropening van het toestel af en maak de verbrandingsluchtopeningen van de opstelruimte niet kleiner. Dat staat ook in de voorschriften van fabrikanten.
- Zorg dat verbrandingslucht niet wordt aangezogen door ruimten waar chloor- of fluorverbindingen vrijkomen, zoals bij reinigingsmiddelen, spuitbussen, verf en lijm. Die verbindingen zijn corrosief voor het toestel.
- Een BZK-handreiking noemt een luchttoevoer van minder dan 120 cm² rechtstreeks van buiten in de opstelruimte van een open toestel een risicofactor. Maar het is geen wettelijke eis. Een vaste "ventilatieroostermaat voor elke ketel" bestaat in het Bbl ook niet.
- Veelgemaakte fout: denken dat NEN 1078 of NEN 8078 de ventilatie van de ketelruimte regelt. Die normen gaan over het gasleidingwerk.

## Waar vind je de norm

Alle normen die het Bbl aanwijst, dus ook NEN 1087 en NEN 8087, kun je gratis inzien in NEN Connect. Dat is alleen-lezen online, na een gratis registratie. Kopen kan op nen.nl. Deze pagina is een uitleg en geen vervanging van de norm.
`,
  faq: [
    { vraag: 'Wat is NEN 1087?', antwoord: 'De norm met bepalingsmethoden voor ventilatie van gebouwen, bedoeld voor nieuwbouw. Het Bbl gebruikt hem voor de ventilatiecapaciteit van woningen en voor de capaciteit van de toevoer van verbrandingslucht.' },
    { vraag: 'Wat is NEN 8087?', antwoord: 'De bijbehorende norm voor ventilatie van bestaande gebouwen. Het Bbl gebruikt hem in hoofdstuk 3 (bestaande bouw), bijvoorbeeld in artikel 3.67 en 3.77.' },
    { vraag: 'Welke uitgave van NEN 1087 geldt?', antwoord: 'NEN 1087:2001. Dat is de aangewezen uitgave en volgens NEN Connect ook de actuele. Een ontwerp uit 2019 is ingetrokken en er wordt nog aan een herziening gewerkt. Stand: 6 november 2026.' },
    { vraag: 'Hoeveel ventilatie moet er in de keuken zijn?', antwoord: 'Minimaal 21 dm³/s in een ruimte met een opstelplaats voor een kooktoestel (nieuwbouw art. 4.122, bestaande bouw art. 3.67). In bestaande bouw geldt dat ook voor een open toestel voor warm water.' },
    { vraag: 'Hoeveel verbrandingslucht heeft een cv-ketel nodig?', antwoord: 'Het Bbl noemt geen getal. De capaciteit moet minimaal gelijk zijn aan wat de toestelspecificaties vragen voor een doeltreffende verbranding. Je zoekt het dus gewoon op in de handleiding van het toestel.' },
    { vraag: 'Is een ventilatierooster verplicht bij een cv-ketel?', antwoord: 'Dat hangt af van het toesteltype en de situatie. Een gesloten toestel haalt zijn lucht via de luchttoevoerleiding van buiten. Bij een open toestel moet de verbrandingslucht uit de ruimte kunnen komen. Volg dus de handleiding en de eisen aan de opstellingsruimte.' },
    { vraag: 'Mag een open toestel in de badkamer staan?', antwoord: 'Nee. Een open verbrandingstoestel mag niet in een toiletruimte of badruimte staan (Bbl art. 4.135 lid 2 en 3.75 lid 2). Een gesloten toestel kan soms wel, als de fabrikant dat toestaat.' },
    { vraag: 'Waarom geldt een norm uit 2001 nog steeds?', antwoord: 'Omdat de Omgevingsregeling in Bijlage II die uitgave aanwijst en er nog geen vastgestelde opvolger is. De herziening van NEN 1087 is nog niet afgerond.' }
  ],
  lessen: ['m08l07', 'm08l06', 'm08l01', 'm10l05', 'm13l01'],
  gerelateerd: ['bouwbesluit', 'nen-2757', 'npr-3378', 'nen-1078'],
  bronnen: ['NOB-09', 'NOB-12', 'NOB-13', 'NOB-14', 'NOB-16', 'NOB-17', 'NOB-18', 'NOB-19', 'NOB-46', 'NOB-38', 'NOB-39', 'NOB-40', 'NOB-41', 'NOB-42', 'NOB-43', 'NOB-44', 'NOB-45', 'NRM-11', 'LUC-01', 'LUC-02', 'LUC-04', 'LUC-06', 'LUC-08', 'RGA-35', 'RGA-37', 'RGA-04', 'RGA-70', 'DIM-08', 'DIM-09', 'OPS-08', 'OPS-09']
});

/* -------------------------------------------------------------------------- */
/* Overige normen die een cv-monteur tegenkomt (geen eigen pagina)            */
/* -------------------------------------------------------------------------- */
CURSUS.addNormOverig({ code: 'NEN 6062 en NEN 8062', titel: 'Brandveiligheid van rookgasafvoervoorzieningen', wat: 'Regelen de brandveiligheid van de afvoer. NEN 6062 is voor nieuwbouw (aangewezen uitgave 2017) en NEN 8062 voor bestaande bouw (aangewezen uitgave 2011). Waar het in bestaande bouw meer dan 90 graden Celsius kan worden, moet materiaal van de afvoer en in de nabijheid brandklasse A1 hebben of onbrandbaar zijn.', bronnen: ['NRM-10', 'OPS-13', 'NOB-38'] });
CURSUS.addNormOverig({ code: 'NEN 1006', titel: 'Leidingwaterinstallaties', wat: 'Voorschriften voor drinkwaterinstallaties. Het Bbl wijst hem aan voor drinkwatervoorzieningen. Hij gaat dus over het water en niet over gas of de afvoer.', bronnen: ['NRM-12', 'NOB-31'] });
CURSUS.addNormOverig({ code: 'NEN 1010', titel: 'Laagspanningsinstallaties', wat: 'De norm voor elektrische installaties. Volgens de Omgevingsregeling zijn alleen de onderdelen met technische voorschriften uit oogpunt van veiligheid van toepassing. Voor elektrisch werk verwijst deze cursus naar de Cursus Elektrotechniek.', bronnen: ['NRM-12', 'NOB-33'] });
CURSUS.addNormOverig({ code: 'NEN 3028', titel: 'Verbrandingsinstallaties: ontwerp, aanleg en opstelling', wat: 'Gaat over de brandveilige opstelling van verbrandingsinstallaties, ook over opstellingsruimten. Het Bbl en de Omgevingsregeling wijzen hem niet aan. De uitgave NEN 3028:2022 is sinds 11 maart 2026 ingetrokken.', bronnen: ['NRM-16', 'OPS-03'] });
CURSUS.addNormOverig({ code: 'NEN-EN 1749', titel: 'Indeling van gastoestellen naar de wijze van toevoer en afvoer', wat: 'Het indelingsschema voor de typen A, B en C met hun varianten, zoals B11 of C13. Het is zelf geen installatienorm en ook geen productnorm. NPR 3378-80 is de Nederlandse uitleg ervan.', bronnen: ['RGA-01', 'NRM-17'] });
CURSUS.addNormOverig({ code: 'NEN-EN 1443', titel: 'Schoorstenen: algemene eisen en klassen', wat: 'Legt de klassen vast voor temperatuur, druk, condens, corrosie en roetbrand. Volgens IPLO voldoet een afvoer met CE-markering klasse N1 of P1 volgens NEN-EN 1443 aan de eis voor rookdoorlatendheid van artikel 4.141 van het Bbl.', bronnen: ['NRM-23'] });
CURSUS.addNormOverig({ code: 'NEN-EN 50291', titel: 'Koolmonoxidemelders voor huishoudelijk gebruik', wat: 'Een niet-wettelijke norm waaraan de NVWA melders toetst. Brandweer Nederland adviseert alleen een melder te kopen met deze norm op de verpakking. In de praktijk geven melders pas vanaf circa 50 ppm alarm.', bronnen: ['CO-20', 'CO-21'] });
CURSUS.addNormOverig({ code: 'NEN-EN 50379', titel: 'Rookgasanalysers (deel 2: CO, O2, temperatuur)', wat: 'Eisen aan de apparatuur waarmee je CO, zuurstof en rookgastemperatuur meet. De eisen van het certificatieschema (BRL 6000-25) noemen gekalibreerde rookgasmeetapparatuur volgens EN 50379-2.', bronnen: ['CO-45', 'WET-57'] });
