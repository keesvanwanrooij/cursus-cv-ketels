/* ==========================================================================
   m17.js - Module 17: Merken, documentatie en hybride
   Lessen 17.1 t/m 17.5 zijn geschreven op basis van project/docs/feiten/18-merken-en-hybride.md (MER),
   met hergebruik van 05-installeren-meten-onderhoud-storingen.md (MRK, STO, KLA, ONT),
   03-ketel-hydrauliek-regeling.md (HYB) en 08-afgiftesystemen.md (AFG). Merkspecifieke storingscodes,
   instelwaarden, garantietermijnen en menuprocedures staan steeds als voorbeeld met merk en model erbij
   en de zin dat het per model verschilt. Storingzoeken zelf (de methode, casussen) staat in module 16 en
   wordt hier niet herhaald; andere toestellen (olie, hout, LPG) staan in module 19.
   Bosch-voorbeelden komen uit een Duitse Serviceanleitung (Condens 7800i W, 2024/10): dezelfde fabrikant
   als Nefit Bosch in Nederland, maar een andere uitgave. Viessmann is het minst diep gecontroleerd: geen
   installatie-/servicehandleiding kon worden gedownload (zie MER-21, MER-22 en de open vragen in het register).
   ========================================================================== */

CURSUS.addModule({
  id: 'm17',
  nr: 17,
  deel: 2,
  titel: 'Merken, documentatie en hybride',
  ondertitel: 'Werken met wat de fabrikant voorschrijft.',
  niveau: 'Gevorderd',
  studietijd: 7,
  intro: 'De fabrikantdocumentatie is leidend bij installeren, onderhouden en afstellen. Deze module gaat over het vinden en lezen ervan, de grote merken in de praktijk, en het aangrenzende terrein van hybride systemen, warmtepompen en F-gassen.',
  inleiding: [
    'Een cv-monteur die de theorie van modules 1 tot en met 5 kent, weet nog niet hoe een Vaillant ecoTEC plus in het servicemenu komt, wat een Bosch-storingsklasse V betekent, of welke garantietermijn Intergas op een warmtewisselaar geeft. Dat staat niet in een norm of in deze cursus: dat staat in de documentatie van de fabrikant, en die documentatie is voor elk merk anders opgebouwd. Wie dat niet weet, zoekt op de verkeerde plek, gebruikt een verkeerde uitgave, of neemt een storingscode van het ene merk over op het andere.',
    'Deze module behandelt daarom hoe je de juiste documentatie vindt en dateert, hoe de zes grote merken in Nederland (Remeha, Intergas, Vaillant, Nefit Bosch, ATAG, Viessmann) in de praktijk verschillen, en hoe je fabrikantinformatie (servicebulletins, garantie, onderdelen) verwerkt. Het laatste deel gaat over het aangrenzende terrein: hybride opstellingen met een warmtepomp, en de grens waar jouw bevoegdheid als cv-monteur ophoudt en koudetechniek begint.',
    'Storingscodes, menuprocedures en garantietermijnen staan hier steeds als voorbeeld uit een handleiding of fabrikantpagina, met merk en model erbij: voor het toestel waaraan je werkt geldt de handleiding van dat toestel. Storingzoeken als methode staat in module 16, andere brandstoffen en toesteltypen in module 19: die stof wordt hier niet herhaald.'
  ],
  leerdoelen: [
    'De juiste fabrikantdocumentatie vinden met typeplaatje en serienummer, en een uitgave dateren',
    'De vier documenttypen (installatievoorschrift, servicehandleiding, gebruikershandleiding, onderdelenlijst) uit elkaar houden',
    'De grote merken in Nederland herkennen aan hun servicemenu, storingscodes en bedieningslogica',
    'Fabrikantinformatie verwerken: servicebulletins, garantie, registratie en onderdelen bestellen',
    'Een hybride opstelling met warmtepomp herkennen en aangeven welk deel van het werk bij jouw bevoegdheid past',
    'De grens met koudetechniek (F-gassen) benoemen en weten waar je moet doorverwijzen'
  ],
  examen: [
    {
      vraag: `Je vindt online een installatievoorschrift van jouw ketelmodel, maar de instelwaarden wijken af van het typeplaatje op het toestel. Wat is de meest waarschijnlijke verklaring?`,
      opties: [
        `Je hebt een oudere of andere uitgave dan bij dit exemplaar hoort, want elk merk dateert en vervangt uitgaven anders`,
        `Het typeplaatje is bij dit toestel verouderd en telt niet meer`,
        `Instelwaarden op een typeplaatje zijn altijd fout en moeten daarom in alle gevallen genegeerd worden door de installateur`,
        `Alle uitgaven van een model zijn identiek, dus de fout moet in het toestel zelf zitten`
      ],
      goed: 0,
      uitleg: `Intergas schrijft bijvoorbeeld letterlijk dat een vernieuwde uitgave alle voorgaande installatievoorschriften laat vervallen (MER-05), en elk merk dateert een uitgave anders (documentnummer, versie, maand/jaar-code). Een gevonden PDF is dus niet automatisch de juiste of de nieuwste uitgave voor dit exemplaar.`
    },
    {
      vraag: `Welke twee gegevens op het typeplaatje van een toestel heb je nodig om zeker te weten dat je de juiste documentatie zoekt?`,
      opties: [
        `Alleen het bouwjaar van de installatie, zonder verder naar het toestel te kijken`,
        `Het model of typenummer en het serienummer, samen met het merk`,
        `Uitsluitend de kleur van de mantel en het gewicht`,
        `Het adres van de woning waarin het toestel staat`
      ],
      goed: 1,
      uitleg: `Merk, model of typenummer en serienummer bepalen samen welke handleiding, welke instelwaarden en welke onderdelen bij dit specifieke exemplaar horen (MER-01, MRK-19, MRK-20): een modelnaam alleen is vaak niet genoeg, omdat er varianten binnen een serie bestaan.`
    },
    {
      vraag: `Wat is het verschil tussen een servicehandleiding en een onderdelenlijst?`,
      opties: [
        `Er is geen verschil, fabrikanten gebruiken de termen willekeurig door elkaar`,
        `Een onderdelenlijst is een oudere naam voor wat nu servicehandleiding heet`,
        `De servicehandleiding beschrijft onderhoud en storingzoeken; de onderdelenlijst geeft artikelnummers en prijzen om te bestellen`,
        `Een onderdelenlijst is uitsluitend bedoeld voor de eindgebruiker, terwijl een servicehandleiding uitsluitend voor de fabrikant zelf bedoeld is`
      ],
      goed: 2,
      uitleg: `Remeha publiceert bijvoorbeeld naast de installatie- en servicehandleiding een apart document, de Onderdelenprijslijst, met artikelnummers en prijzen (MER-36): dat is een ander documenttype met een ander doel dan de servicehandleiding (MRK-24).`
    },
    {
      vraag: `Een Nefit Bosch-monteur krijgt een Duitstalige Bosch-storingscode met klasse "V" onder ogen bij een vergelijkbaar Duits toestel. Wat betekent klasse V bij Bosch?`,
      opties: [
        `Een waarschuwing, het toestel blijft gewoon in bedrijf`,
        `Een onderhoudsmelding zonder gevolgen voor de werking`,
        `Een verriegelnde (vergrendelende) storing, die pas na een reset weer opstart`,
        `Een blokkering die zichzelf automatisch opheft zodra de oorzaak weg is, zonder enig ingrijpen van de installateur`
      ],
      goed: 2,
      uitleg: `Bosch deelt storingen in 4 klassen in: O (bedrijfstoestand), B (blokkerend, automatisch herstel), V (verriegelnd/vergrendelend, reset nodig) en W (onderhoudsmelding) (MER-13). Klasse V is dus vergelijkbaar met Remeha's E (vergrendeling, MRK-07) maar met een andere lettercode.`
    },
    {
      vraag: `Waarom kun je een Vaillant-diagnosecode als D.158 niet zomaar toepassen op een Bosch- of Remeha-toestel?`,
      opties: [
        `Omdat D-codes bij Vaillant uitsluitend voor administratieve garantiedoeleinden bestaan en helemaal geen technische functie hebben`,
        `Omdat elk merk zijn eigen codes en menu's gebruikt, en Vaillant zelf zegt dat zijn codetabel per productserie kan verschillen`,
        `Omdat D-codes verboden zijn voor toestellen die niet in Nederland zijn gekeurd`,
        `Omdat Bosch en Remeha geen diagnosecodes gebruiken en dus geen equivalent hebben`
      ],
      goed: 1,
      uitleg: `Vaillant gebruikt D.xxx-diagnosecodes om bijvoorbeeld de gas-luchtverhouding (D.158) of de ventilatortransportdruk (D.164) te corrigeren (MER-09), Remeha gebruikt letter+cijfercodes (MRK-07) en Bosch een klassensysteem (MER-13). Vaillant waarschuwt zelf dat zijn codetabel per productserie verschilt (MRK-06): overnemen naar een ander merk is gokken.`
    },
    {
      vraag: `Een klant vraagt waarom hij zijn garantiekaart eigenlijk moet registreren. Wat is het beste antwoord, gebaseerd op wat fabrikanten daadwerkelijk aanbieden?`,
      opties: [
        `Registratie is uitsluitend een verplichting vanuit de overheid en heeft in de praktijk helemaal niets te maken met garantie`,
        `Zonder registratie vervalt de standaardgarantie van 2 jaar meteen bij aflevering`,
        `Registratie is bij elk merk precies hetzelfde en verandert niets aan de garantietermijn`,
        `Bij sommige merken verlengt registratie de garantie voorbij de standaard 2 jaar (Remeha's OGP, ATAG's ComfortGarantie)`
      ],
      goed: 3,
      uitleg: `Remeha biedt met het OGP tot 15 jaar totale garantie op onderdelen (MER-26), ATAG met ComfortGarantie tot 15 jaar op de i/Q-serie (MER-27), en Vaillant en Intergas kennen vergelijkbare verlengingen (MER-19, MER-23, MER-28). De standaard 2 jaar geldt sowieso, registratie of een garantieplan verlengt die termijn.`
    },
    {
      vraag: `Wat leert de veiligheidswaarschuwing van Ferroli uit 2019 over AGPO Ferroli-ketels (Econpact, Megadens, Ultima, Megalux, bouwjaren 1997-2011) over het werken met fabrikantinformatie?`,
      opties: [
        `Dat een fabrikant nooit achteraf iets aan een al verkocht toestel mag laten wijzigen`,
        `Dat je bij een oud of afwijkend toestel altijd moet nagaan of er een latere veiligheidswaarschuwing of onderhoudsinstructie bijgekomen is, ook als de handleiding die je hebt daar niets over zegt`,
        `Dat AGPO Ferroli-ketels van deze bouwjaren per direct buiten bedrijf moeten worden gesteld`,
        `Dat een veiligheidswaarschuwing alleen bedoeld is voor de eindgebruiker en niet voor de installateur`
      ],
      goed: 1,
      uitleg: `De waarschuwing kwam los van een nieuwe handleiding-uitgave en vroeg om extra onderhoud en een aanpassing (MER-30, MER-31). Fabrikantinstructies kunnen dus wijzigen zonder dat je handleiding dat laat zien: bij oudere of afwijkende toestellen navragen hoort bij het werk.`
    },
    {
      vraag: `Wat is het verschil tussen een hybride opstelling en een gewone cv-ketel met warmtepomp-achtige functies?`,
      opties: [
        `Er is geen verschil, elke term beschrijft hetzelfde toestel`,
        `Een hybride opstelling is een cv-ketel die uitsluitend op groen gas werkt`,
        `Een hybride opstelling heeft nooit een gasaansluiting`,
        `Bij een hybride opstelling werken een warmtepomp en een gasketel samen en verdeelt de regeling de warmtevraag tussen beide, terwijl een cv-ketel alleen op gas draait`
      ],
      goed: 3,
      uitleg: `In het Intergas-hybrideconcept ontvangt de gasketel de warmtevraag van de warmtepomp-binnenunit: de regeling bepaalt welke bron levert (HYB-12). Dat is wezenlijk anders dan een cv-ketel die alleen op gas draait.`
    },
    {
      vraag: `Een monteur zonder F-gassen-certificaat wil een monoblock-warmtepomp aansluiten. Mag dat, en waarom (niet)?`,
      opties: [
        `Nee, voor elke warmtepomp is altijd een F-gassen-certificaat verplicht`,
        `Ja, bij een monoblock-warmtepomp loopt er geen koudemiddel door de leidingen naar binnen, dus is er voor het waterzijdig aansluiten geen F-gassen-certificaat nodig; bij een split-systeem wel`,
        `Ja, want F-gassen-certificering is alleen verplicht voor toestellen boven 100 kW`,
        `Nee, tenzij de klant zelf toestemming geeft om zonder certificaat te werken`
      ],
      goed: 1,
      uitleg: `Bij een monoblock zit het koudemiddelcircuit gesloten in de buitenunit en lopen alleen waterleidingen naar binnen (HYB-01); Remeha noemt daarom geen F-gassen-certificaat nodig voor het aansluiten ervan, in tegenstelling tot een split-systeem (HYB-02).`
    },
    {
      vraag: `Wat drukt GWP (Global Warming Potential) van een koudemiddel uit?`,
      opties: [
        `De giftigheid van het gas bij inademing`,
        `Het klimaatopwarmend effect van het gas ten opzichte van CO2 over 100 jaar`,
        `De hoeveelheid koudemiddel die maximaal in een installatie mag zitten`,
        `De prijs per kilogram van het koudemiddel`
      ],
      goed: 1,
      uitleg: `GWP drukt het klimaatopwarmend effect van een gas ten opzichte van CO2 uit; koudemiddelen als R410A (ongeveer 2088) en R32 (ongeveer 675) hebben een veel hogere GWP dan het natuurlijke R290 (ongeveer 3) (MER-33). Het zegt niets over giftigheid of over een wettelijke maximumhoeveelheid.`
    },
    {
      vraag: `Sinds 29 september 2025 geldt de certificeringsplicht voor koudemiddelen niet meer alleen voor F-gassen. Wat verandert daardoor voor een monteur die aan het koudemiddelcircuit van een warmtepomp werkt?`,
      opties: [
        `De plicht geldt vanaf die datum ook voor natuurlijke koudemiddelen zoals propaan, waar eerder alleen F-gassen certificeringsplichtig waren`,
        `Niets, de plicht gold al voor alle koudemiddelen`,
        `De plicht is vanaf die datum afgeschaft voor kleine installaties`,
        `De plicht geldt vanaf die datum alleen nog voor bedrijven, niet meer voor individuele monteurs`
      ],
      goed: 0,
      uitleg: `De herziene F-gassenverordening voegt certificering voor natuurlijke koudemiddelen (zoals koolwaterstoffen als propaan) toe aan die voor F-gassen, met de certificeringsplicht sinds 29 september 2025 (HYB-03, HYB-05). De plicht wordt dus uitgebreid, niet afgeschaft.`
    },
    {
      vraag: `Wanneer verwijs je als cv-monteur bij een hybride storing door naar een koudetechnisch bedrijf, in plaats van zelf verder te zoeken?`,
      opties: [
        `Zodra de klant zelf om een tweede mening vraagt`,
        `Zodra het probleem zich in het koudemiddelcircuit van de warmtepomp bevindt (bijvoorbeeld een lekkage of een compressorstoring), want daarvoor is een F-gassen- of koudemiddelcertificaat nodig dat een cv-monteur niet automatisch heeft`,
        `Nooit, een Vakmanschap CO-certificaat dekt het hele hybride systeem inclusief het koudemiddelcircuit`,
        `Alleen als het toestel ouder is dan 10 jaar`
      ],
      goed: 1,
      uitleg: `Vakmanschap CO dekt de gasketel-kant van een hybride systeem (HYB-11); werk aan het koudemiddelcircuit zelf (installatie, onderhoud, lekcontrole, terugwinning) vraagt een apart persoonscertificaat volgens BRL 200 (HYB-04). Een klantvraag of de leeftijd van het toestel bepaalt dat niet.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 17.1 */
{
  id: 'm17l01',
  nr: '17.1',
  titel: 'Fabrikantdocumentatie vinden en lezen',
  duur: 25,
  type: 'les',
  leerdoel: 'Je vindt met typeplaatje en serienummer de juiste documentatie bij een toestel, onderscheidt de vier documenttypen en weet hoe je een uitgave dateert.',
  videos: [
    { taal: 'nl', titel: 'Typenummer aflezen cv-ketel (Eco Heating Systems)', yt: 't2iYy1rVrbM', duur: '±1 min, 2025' },
    { taal: 'nl', titel: '...', zoek: 'verschil installatievoorschrift servicehandleiding gebruikershandleiding cv-ketel' },
    { taal: 'en', titel: 'How to locate your boiler serial number (Worcester Bosch, VK)', yt: 'mQrPlN2pQEI', duur: '±1 min, 2023' }
  ],
  tekst: `
## Waarom je dit apart moet leren

CLAUDE.md van deze cursus is niet iets wat je op je werk leest, maar de regel die daarin staat wel iets universeels: bij een gasverbrandingstoestel schrijft niet je geheugen voor, en niet een vage vuistregel van "vroeger", maar de documentatie van de fabrikant van dat exacte toestel. Een instelwaarde, een storingscode of een garantietermijn die je "toevallig weet" van een ander merk of een ander model, is geen bron: het is een gok. Deze les is daarom niet over een specifiek toestel, maar over de vaardigheid om bij elk toestel snel de juiste, actuele documentatie te vinden en te lezen.

## Typeplaatje en serienummer: je startpunt

Voordat je iets opzoekt, lees je het typeplaatje. Daarop staan het merk, het model of typenummer, het serienummer en meestal de gassoort en de netvoeding. De plek verschilt per merk: bij Vaillant zit het typeplaatje aan de bovenkant van het product en nog eens op de achterkant van de schakelkast, met het serienummer ook op de onderkant van het voorpaneel; bij Remeha zit de typeplaat boven op de ketel, met naast het serienummer ook de configuratienummers CN1 en CN2; bij Intergas vind je de toestelgegevens op het typeplaatje aan de onderzijde van het toestel.

| Merk (voorbeeld) | Waar het typeplaatje zit |
|---|---|
| Vaillant, ecoTEC plus VHR | Bovenkant van het product, en op de achterkant van de schakelkast; serienummer ook op de onderkant van het voorpaneel |
| Remeha, Calenta Ace | Boven op de ketel |
| Intergas, Kombi Kompakt HRE | Onderzijde van het toestel |

!!! kern Merk, model en serienummer, altijd samen
Een modelnaam alleen is vaak niet genoeg: binnen een serie bestaan varianten met andere instelwaarden. Noteer merk, model of typenummer en serienummer voordat je een handleiding gaat zoeken.
!!!

## Vier documenttypen, elk met een eigen taak

Fabrikanten geven niet één document per toestel uit, maar meerdere, elk met een eigen doel:

- **Installatievoorschrift**: hoe je het toestel plaatst en aansluit (gas, water, lucht, elektra). Intergas noemt dit document zo.
- **Servicehandleiding**: onderhoud, afstelling en storingzoeken, met instelwaarden en storingscodes. Bij Remeha vaak samengevoegd tot "installatie- en servicehandleiding" (Calenta, Avanta) of los ("Servicehandleiding" bij de Tzerra Ace).
- **Gebruikershandleiding**: bediening voor de bewoner, zonder technische instelwaarden.
- **Onderdelenlijst**: artikelnummers (en vaak prijzen) om een vervangend onderdeel te bestellen. Remeha publiceert hiervoor een apart document, de Onderdelenprijslijst, in zijn geheel of per hoofdstuk (bijvoorbeeld gaswandtoestellen, warmtepompen, regeltechniek) te downloaden.

Nefit Bosch werkt met drie documenttypen (installatie-instructie, service-instructie, gebruikers-/installateursinstructie) en verwijst bij een foutmelding die daar niet in staat naar de servicedienst. ATAG combineert op service.atag.nl de gebruiksaanwijzing, het installatievoorschrift, de foutcodes en overige documenten, te doorzoeken op modelnummer of artikelnummer.

## Een uitgave dateren: elk merk anders

Documentatie wordt herzien. Voor je een instelwaarde overneemt, wil je weten of je de laatste uitgave hebt voor precies dit model. Elk merk laat dat op zijn eigen manier zien:

| Merk (voorbeeld) | Hoe je de uitgave dateert |
|---|---|
| Vaillant, ecoTEC plus VHR | Documentnummer met versie en datum op de omslag: "0020282267_08 - 03.12.2024" (versie 8, 3 december 2024) |
| ATAG, i-Serie | Documentnummer met maand/jaar-code: "8A.51.36.03 / 01.18" (januari 2018) |
| Bosch, Condens 7800i W (Duitse uitgave) | Documentnummer met jaar/maand en taalcode: "6721872900 (2024/10) DE" |
| Intergas, Kombi Kompakt HRE | Ondertekening met plaats en maand/jaar: "Coevorden, mei 2021, P. Cool, Technisch Directeur", documentnummer 88557806 |

Intergas schrijft er expliciet bij dat een vernieuwde uitgave alle voorgaande installatievoorschriften laat vervallen. Er is dus geen uniforme conventie: je controleert de omslag of het colofon van het document dat je in handen hebt, en vergelijkt dat met de nieuwste versie op de website van de fabrikant zelf, in plaats van te vertrouwen op het eerste zoekresultaat.

!!! gevaar Een verkeerde of verouderde uitgave gebruiken voor gasinstellingen
Instelwaarden voor de gas-luchtverhouding of de gasvoordruk horen bij een specifiek model en een specifieke uitgave. Een oude kopie die her en der online staat, kan bij een gewijzigd model tot een verkeerde afstelling en dus tot een onveilige verbranding leiden. Bij twijfel: de nieuwste uitgave rechtstreeks bij de fabrikant ophalen, niet de eerste PDF die een zoekmachine toont.
!!!

## Praktijkgeval: twee PDF's, twee instelwaarden

Je zoekt online het installatievoorschrift van een Intergas Kombi Kompakt HRE en vindt een PDF met een instelwaarde die afwijkt van wat er op het typeplaatje van het toestel staat. Voordat je concludeert dat het toestel verkeerd is afgesteld: controleer eerst of de PDF wel de uitgave is die bij dit exemplaar hoort. Intergas geeft uitgaven een documentnummer en een datum van ondertekening mee; als die niet overeenkomt met wat je zou verwachten bij het bouwjaar van dit toestel (af te leiden uit het serienummer, samen met de fabrikant te controleren), zoek je de juiste uitgave op de website van Intergas zelf op voordat je verder gaat.

?? Verdieping: waarom "onderdelenlijst" een apart document is
Een servicehandleiding legt uit hoe een onderdeel werkt en wanneer je het vervangt; ze geeft zelden een artikelnummer of een prijs. Omdat onderdelen via een aparte handelsketen (groothandel, webshop, de fabrikant zelf) worden besteld, en omdat prijzen vaker wijzigen dan een technische procedure, houden fabrikanten als Remeha dit in een eigen, vaker bijgewerkt document.
??
`,
  checklist: [
    'Ik lees eerst het typeplaatje (merk, model of typenummer, serienummer) voor ik iets opzoek',
    'Ik weet dat de plek van het typeplaatje per merk verschilt',
    'Ik onderscheid installatievoorschrift, servicehandleiding, gebruikershandleiding en onderdelenlijst',
    'Ik controleer of ik de nieuwste uitgave voor dit exacte model heb, aan de hand van het documentnummer of de datum',
    'Ik gebruik nooit een instelwaarde uit een niet-geverifieerde of mogelijk verouderde uitgave'
  ],
  quiz: [
    {
      vraag: `Waar zit het typeplaatje van een Intergas Kombi Kompakt HRE?`,
      opties: [`Boven op de ketel, naast de configuratienummers`, `Aan de onderzijde van het toestel`, `Achter op de schakelkast`, `Op de binnenkant van de voormantel, naast de gasklep`],
      goed: 1,
      uitleg: `Intergas plaatst de toestelgegevens op het typeplaatje aan de onderzijde van het toestel (MER-01). Boven op de ketel is waar Remeha zijn typeplaat plaatst (MRK-20), niet Intergas.`
    },
    {
      vraag: `Wat is het belangrijkste verschil tussen een servicehandleiding en een gebruikershandleiding?`,
      opties: [
        `Een gebruikershandleiding is altijd dikker dan een servicehandleiding`,
        `Er is helemaal geen verschil tussen deze twee documenten: elk merk gebruikt beide namen willekeurig door elkaar voor precies hetzelfde ene document, zonder enig onderscheid in inhoud`,
        `De servicehandleiding bevat technische instelwaarden en storingscodes voor de installateur, de gebruikershandleiding beschrijft alleen de bediening voor de bewoner`,
        `Een servicehandleiding is alleen bedoeld voor toestellen ouder dan 10 jaar`
      ],
      goed: 2,
      uitleg: `De servicehandleiding is voor de vakman en bevat onderhoud, afstelling en storingscodes; de gebruikershandleiding is voor de bewoner en gaat over bediening, zonder technische instelwaarden (MRK-24).`
    },
    {
      vraag: `Een Vaillant-document draagt de code "0020282267_08 - 03.12.2024". Wat zegt dit over de uitgave?`,
      opties: [
        `Het is de achtste versie van dit document, gepubliceerd op 3 december 2024`,
        `Het document is 8 jaar geldig vanaf 3 december 2024`,
        `Het toestel heeft 8 servicebeurten gehad tot 3 december 2024`,
        `Dit documentnummer heeft geen betekenis, het is willekeurig`
      ],
      goed: 0,
      uitleg: `Vaillant nummert een document met een documentnummer, een versienummer na de underscore en een publicatiedatum: hier versie 8, gepubliceerd op 3 december 2024 (MER-02).`
    },
    {
      vraag: `Waarom vind je bij Remeha naast de installatie- en servicehandleiding ook een losse "Onderdelenprijslijst"?`,
      opties: [
        `Omdat de servicehandleiding fysiek geen enkele ruimte overlaat voor afbeeldingen, artikelnummers of prijzen van de onderdelen die je zou willen bestellen`,
        `Omdat onderdelen bestellen een andere taak is dan onderhoud uitvoeren, en artikelnummers en prijzen vaker wijzigen dan een technische procedure`,
        `Omdat de Onderdelenprijslijst de opvolger is van de servicehandleiding`,
        `Omdat een onderdelenlijst wettelijk verplicht is voor CO-certificering`
      ],
      goed: 1,
      uitleg: `Remeha publiceert de Onderdelenprijslijst als apart, per hoofdstuk of compleet te downloaden document met artikelnummers en prijzen (MER-36): een ander doel en een ander wijzigingsritme dan de servicehandleiding.`
    },
    {
      vraag: `Je vindt online een installatievoorschrift van jouw ketelmodel met een instelwaarde die niet overeenkomt met het typeplaatje. Wat doe je?`,
      opties: [
        `De instelwaarde uit de PDF aanhouden, want een PDF is altijd actueler dan een typeplaatje`,
        `Zelf een gemiddelde nemen tussen de PDF en het typeplaatje`,
        `Controleren of de gevonden PDF wel de juiste, nieuwste uitgave voor dit exacte model is, en zo nodig de actuele uitgave rechtstreeks bij de fabrikant ophalen`,
        `De ketel buiten bedrijf stellen tot een collega een tweede mening geeft`
      ],
      goed: 2,
      uitleg: `Een vernieuwde uitgave laat volgens Intergas alle voorgaande versies vervallen (MER-05); een oudere of verkeerde kopie online geeft dus niet automatisch de juiste waarde. Controleer eerst de uitgave, in plaats van te gokken of te middelen.`
    }
  ],
  kaarten: [
    { voor: `Welke twee gegevens van het typeplaatje bepalen samen welke documentatie bij een toestel hoort?`, achter: `Het model of typenummer en het serienummer (samen met het merk).` },
    { voor: `Waar zit het typeplaatje bij een Vaillant ecoTEC plus VHR (voorbeeld)?`, achter: `Aan de bovenkant van het product en op de achterkant van de schakelkast; het serienummer staat ook op de onderkant van het voorpaneel.` },
    { voor: `Noem de vier documenttypen die een fabrikant voor een cv-ketel uitgeeft.`, achter: `Installatievoorschrift, servicehandleiding, gebruikershandleiding en onderdelenlijst.` },
    { voor: `Hoe dateert Vaillant een uitgave?`, achter: `Met een documentnummer, een versienummer en een publicatiedatum op de omslag, bijvoorbeeld "0020282267_08 - 03.12.2024".` },
    { voor: `Hoe dateert Intergas een installatievoorschrift?`, achter: `Met een ondertekening onderaan (plaats, maand/jaar, naam en functie) en een documentnummer, en de mededeling dat een nieuwe uitgave de vorige laat vervallen.` },
    { voor: `Welk apart document publiceert Remeha om onderdelen te bestellen?`, achter: `De Onderdelenprijslijst, met artikelnummers en prijzen, in zijn geheel of per hoofdstuk te downloaden.` }
  ],
  bronnen: ['MER-01', 'MER-02', 'MER-03', 'MER-04', 'MER-05', 'MER-36', 'MRK-19', 'MRK-20', 'MRK-22', 'MRK-23', 'MRK-24']
},

/* ------------------------------------------------------------------ 17.2 */
{
  id: 'm17l02',
  nr: '17.2',
  titel: 'Merken in de praktijk',
  duur: 30,
  type: 'les',
  leerdoel: 'Je herkent hoe Remeha, Intergas, Vaillant, Nefit Bosch, ATAG en Viessmann elk hun eigen servicemenu en storingscodes gebruiken.',
  videos: [
    { taal: 'nl', titel: 'Hoe lees je het storingsgeheugen van de Remeha Calenta uit? (Remeha NL)', yt: 'p80KZE6VnKI', duur: '±2 min, 2017' },
    { taal: 'nl', titel: 'Uitleg codes en knopjes Intergas Kompakt HRE combiketel (JW B)', yt: 'EsbtPiGcgPE', duur: '±17 min, 2021' },
    { taal: 'en', titel: 'What does the 118 code mean? (ATAG Heating Technology, VK)', yt: 'zzVbrgIyEl4', duur: '±2 min, 2017' }
  ],
  tekst: `
## Zes merken, zes systemen

De zes grote merken in Nederland (Remeha, Intergas, Vaillant, Nefit Bosch, ATAG, Viessmann) lossen dezelfde vragen (welke storing, hoe stel ik iets in, waar zit de historie) allemaal anders op. Er is geen "cv-ketel-standaard" voor een servicemenu: elk merk heeft zijn eigen toegangsprocedure, zijn eigen soort code en zijn eigen manier om een storingsgeschiedenis te tonen.

## Remeha: letters en niveaus

Remeha (Calenta Ace, Tzerra Ace) bouwt een code op als een letter plus twee cijferparen, bijvoorbeeld A.02.06. De letter geeft het niveau aan: A is een waarschuwing (de ketel blijft in bedrijf), H een blokkering (herstelt automatisch) en E een vergrendeling (pas op te heffen met een handmatige reset na het wegnemen van de oorzaak). Remeha noemt het lezen van de storingscode "belangrijk voor het correct en snel opsporen van de aard van de storing", en dat lees je uit voordat je iets vervangt (zie ook [module 16](module:m16)).

## Intergas: een enkel cijfer

Intergas (Kombi Kompakt HRE) toont op het temperatuurdisplay een los cijfer: 4 is geen vlamsignaal, 8 is een onjuist ventilatortoerental, 29 en 30 zijn een defect gasklep-relais. De laatste vergrendelende storing roep je op door het toestel in de uit-stand te brengen en een knop in te drukken.

## Vaillant: drie codesystemen naast elkaar

Vaillant (ecoTEC plus VHR) gebruikt niet één, maar drie soorten codes. F.xxx is een storingscode (bijvoorbeeld F.028: vlamsignaal niet herkend in de ontstekingsfase). D.xxx is een diagnosecode voor de installateur, waarmee je bijvoorbeeld de gas-luchtverhouding (D.158) of de ventilatortransportdruk (D.164) instelt. En L.xxx/N.xxx zijn noodbedrijfmeldingen: een reversible L.xxx-code heft zichzelf op, een irreversible N.xxx-code vraagt ingrijpen. Je komt in het installateursniveau via MENU > INSTELLINGEN > Installateursniveau, met toegangscode 17; vanuit dat niveau lees je ook de fouthistorie uit (maximaal de 10 laatste meldingen). Vaillant waarschuwt zelf dat dezelfde codetabel voor meerdere productseries wordt gebruikt en dat niet elke code bij elk product voorkomt: dit alles geldt dus als voorbeeld voor dit model.

!!! kern Drie codesystemen bij één merk is geen uitzondering
Wat bij Vaillant een F-, D-, L- of N-code is, heet bij Remeha een letter+cijfercode met drie niveaus, bij Nefit een 2-tekens-plus-3-cijfers-code met een soort (2 of 3), bij ATAG een cijfercode met een sleutel- of belsymbool, en bij Bosch een 3-cijferige code met een klasse (O, B, V of W). Onthoud geen tabel: zoek de code op in de handleiding van dat merk en model.
!!!

## Nefit Bosch: soort 2 of 3, en een Duits zustersysteem

Nefit (ProLine NxT) bouwt een displaycode op uit een storingscode van 2 tekens (bijvoorbeeld 6A), een aanvullende code van 3 cijfers (227) en een soort (2 is blokkerend, 3 is vergrendelend); je vindt de historie via het historiemenu. Bosch, dezelfde fabrikant als Nefit Bosch maar hier bekeken via een Duitse uitgave (Condens 7800i W), werkt met 4 storingsklassen: O (bedrijfstoestand), B (blokkerend, herstelt automatisch), V (vergrendelend, reset nodig) en W (onderhoudsmelding, toestel blijft in bedrijf). Je roept het servicemenu op door een toets ongeveer 5 seconden ingedrukt te houden, en de storingshistorie vind je via Diagnose > Betriebsstatus - Storungen > Historie. Een vergrendelende storing reset je door twee toetsen gelijktijdig ingedrukt te houden tot de storingssymbolen verdwijnen, of door het toestel uit en weer in te schakelen. Bosch geeft als voorbeeld van zo'n vergrendelende storing "geen vlamsignaal na ontsteking", met een foutzoeklijst die van de hoofdafsluiter via de gasvoordruk en de elektroden naar de gasarmatuur loopt: dezelfde volgorde-logica (van eenvoudig naar duur) als bij Remeha's "wel vonk, geen vlam" ([les 5.1](les:m05l01)), maar met een eigen stappenlijst.

## ATAG: symbolen in plaats van letters

ATAG (i-Serie) gebruikt op het display een sleutelsymbool voor een service-functie of een blokkering en een belsymbool voor een storing (Error, met code): code 118 is bijvoorbeeld druk te laag, met als eerste maatregel het handmatig deblokkeren van de ketelpomp. De toetsencombinatie "+ eco +" werkt als bevestiging en "- reset -" als teruggaan.

## Viessmann: een menu met wachtwoord

Viessmann (Vitodens 200-W) werkt weer anders: je roept het servicemenu op via het menusymbool, kiest "Service", voert het wachtwoord "viservice" in en bevestigt. Welke menuonderdelen daarna zichtbaar zijn, hangt af van de systeemuitrusting. Van Viessmann is voor dit register geen volledige installatie- of servicehandleiding op handleidingniveau gecontroleerd: gebruik dit als voorbeeld van het principe (elk merk zijn eigen toegang), niet als volledige instructie voor een specifiek Viessmann-model.

## Praktijkgeval: code 8 bij twee merken

Een Intergas-toestel toont code 8: ventilatortoerental niet juist. Een collega die net bij een ATAG-toestel heeft gewerkt, herinnert zich "code 8" van dat merk en past die betekenis toe op het Intergas-toestel. Dat is fout: ATAG heeft voor een vergelijkbaar probleem een ander nummer uit zijn eigen tabel. Zoek bij elke code eerst het merk en het model op, ook als een code "vertrouwd" aanvoelt.

?? Verdieping: waarom zoveel verschillende systemen naast elkaar bestaan
Storingscodes, diagnosecodes en menu's zijn ontworpen door verschillende fabrikanten, op verschillende momenten, voor verschillende regelaars. Er is geen norm die dat uniformeert (in tegenstelling tot bijvoorbeeld OpenTherm, dat wel een gedeelde standaard is voor de communicatie tussen thermostaat en ketel). Voor jou als monteur betekent dat: de handleiding is niet een geheugensteun, maar de enige betrouwbare bron.
??
`,
  checklist: [
    'Ik weet dat Remeha, Intergas, Vaillant, Nefit Bosch, ATAG en Viessmann allemaal een ander systeem van codes en menu-toegang gebruiken',
    'Ik onderscheid bij Vaillant een F-code (storing), een D-code (diagnose/instelling) en een L- of N-code (noodbedrijf)',
    'Ik onderscheid bij Bosch de klassen O, B, V en W',
    'Ik neem nooit een storingscode van het ene merk over op een ander merk',
    'Ik weet dat Viessmann in dit register het minst diep gecontroleerd is en behandel Viessmann-informatie extra voorzichtig'
  ],
  quiz: [
    {
      vraag: `Een Remeha-toestel toont code H.03.10. Wat betekent de letter H?`,
      opties: [`Een blokkering: de ketel herstelt automatisch zodra de oorzaak weg is`, `Een vergrendeling die uitsluitend door de fabrikant zelf kan worden opgeheven, nooit door de installateur zelf`, `Een waarschuwing, de ketel blijft gewoon in bedrijf`, `Een onderdeel dat binnenkort vervangen moet worden`],
      goed: 0,
      uitleg: `Bij Remeha is H een blokkering met automatisch herstel, A een waarschuwing en E een vergrendeling met handmatige reset (MRK-07). H staat dus tussen A en E in.`
    },
    {
      vraag: `Vaillant gebruikt naast F-codes (storingen) ook D-codes en L-/N-codes. Waarvoor dient een D-code?`,
      opties: [
        `Voor de garantieregistratie van het toestel`,
        `Voor diagnose en instelling door de installateur, bijvoorbeeld D.158 voor de gas-luchtverhouding of D.164 voor de ventilatortransportdruk`,
        `Voor het aangeven van het bouwjaar van het toestel`,
        `Voor de meldingen die uitsluitend en volledig bedoeld zijn voor de eindgebruiker, en dus nooit door een installateur zelf worden geraadpleegd of ingesteld`
      ],
      goed: 1,
      uitleg: `D-codes zijn diagnosecodes voor de installateur, gebruikt om instellingen te controleren of aan te passen (MER-09). F-codes zijn storingen, L- en N-codes zijn noodbedrijfmeldingen (MER-10).`
    },
    {
      vraag: `Bij Bosch (Condens 7800i W) betekent storingsklasse "W":`,
      opties: [
        `Een waarschuwing die de ketel meteen buiten bedrijf stelt`,
        `Een vergrendelende storing die een reset vereist`,
        `Een onderhoudsmelding: het toestel blijft in bedrijf, eventueel met beperkte functie`,
        `Een blokkering die na 3 pogingen automatisch overgaat in een vergrendeling`
      ],
      goed: 2,
      uitleg: `Klasse W (Wartungsmeldung) is een onderhoudsmelding: het toestel blijft draaien, mogelijk met beperkte functie (MER-13). Klasse V is de vergrendelende storing die een reset vraagt.`
    },
    {
      vraag: `Een ATAG-toestel toont code 118 met een sleutelsymbool. Wat is de eerste maatregel die ATAG hierbij noemt?`,
      opties: [`De gasdruk verhogen`, `Het toestel volledig vervangen, zonder eerst verder te onderzoeken`, `Handmatig de ketelpomp deblokkeren`, `De warmwatertemperatuur verlagen`],
      goed: 2,
      uitleg: `ATAG noemt bij code 118 (druk te laag) als eerste maatregel het handmatig deblokkeren van de ketelpomp (MRK-15). Het sleutelsymbool geeft aan dat het om een blokkering of service-functie gaat, niet om een storing met belsymbool.`
    },
    {
      vraag: `Hoe roep je op een Viessmann Vitodens 200-W het servicemenu op?`,
      opties: [
        `Door twee knoppen 5 seconden ingedrukt te houden`,
        `Door het menusymbool aan te raken, "Service" te kiezen en het wachtwoord "viservice" in te voeren`,
        `Door de resettoets drie keer achter elkaar in te drukken`,
        `Door de installateurscode 17 in te toetsen`
      ],
      goed: 1,
      uitleg: `Viessmann gebruikt een menu met een wachtwoord ("viservice") in plaats van een druk-en-houdtijd (Bosch) of een numerieke installateurscode (Vaillant: code 17) (MER-21). Elk merk kiest zijn eigen toegangsmethode.`
    },
    {
      vraag: `Een collega neemt een Intergas-storingscode over en past die toe op een ATAG-toestel met dezelfde codewaarde. Waarom is dat riskant?`,
      opties: [
        `Dat is niet riskant, alle Nederlandse merken gebruiken identieke codetabellen`,
        `Omdat elk merk zijn eigen codetabel opbouwt: hetzelfde nummer kan bij een ander merk iets heel anders betekenen`,
        `Omdat foutcodes bij ATAG nooit hetzelfde cijfer gebruiken als bij Intergas`,
        `Omdat een codetabel na een jaar automatisch verandert`
      ],
      goed: 1,
      uitleg: `Codetabellen zijn per merk (en soms per model) opgebouwd; hetzelfde cijfer kan bij een ander merk een ander onderdeel of een andere oorzaak aanwijzen. Zoek de code altijd op in de handleiding van dat specifieke merk en model.`
    }
  ],
  kaarten: [
    { voor: `Welke drie niveaus onderscheidt Remeha in zijn storingscodes?`, achter: `A (waarschuwing, blijft in bedrijf), H (blokkering, automatisch herstel), E (vergrendeling, handmatige reset).` },
    { voor: `Welke vier storingsklassen gebruikt Bosch (voorbeeld Condens 7800i W)?`, achter: `O (bedrijfstoestand), B (blokkerend), V (vergrendelend, reset nodig), W (onderhoudsmelding).` },
    { voor: `Welke drie soorten codes gebruikt Vaillant naast elkaar?`, achter: `F.xxx (storingen), D.xxx (diagnose/instelling door de installateur), L.xxx en N.xxx (noodbedrijfmeldingen, reversible/irreversible).` },
    { voor: `Met welke code komt een installateur op een Vaillant ecoTEC plus VHR in het installateursniveau?`, achter: `Code 17, via MENU > INSTELLINGEN > Installateursniveau.` },
    { voor: `Welke twee symbolen gebruikt ATAG op het display om een blokkering van een storing te onderscheiden?`, achter: `Een sleutelsymbool voor een service-functie of blokkering, een belsymbool voor een storing (Error, met code).` },
    { voor: `Hoe komt een installateur op een Viessmann Vitodens 200-W in het servicemenu?`, achter: `Menusymbool aanraken, "Service" kiezen, wachtwoord "viservice" invoeren en bevestigen.` },
    { voor: `Hoe roep je op een Bosch Condens 7800i W het servicemenu op?`, achter: `Een toets ongeveer 5 seconden ingedrukt houden tot het servicemenu wordt weergegeven.` }
  ],
  bronnen: ['MRK-01', 'MRK-02', 'MRK-06', 'MRK-07', 'MRK-08', 'MRK-11', 'MRK-12', 'MRK-13', 'MRK-15', 'STO-01', 'STO-05', 'MER-08', 'MER-09', 'MER-10', 'MER-11', 'MER-13', 'MER-14', 'MER-15', 'MER-16', 'MER-19', 'MER-21']
},

/* ------------------------------------------------------------------ 17.3 */
{
  id: 'm17l03',
  nr: '17.3',
  titel: 'Informatie van de fabrikant verwerken',
  duur: 20,
  type: 'les',
  leerdoel: 'Je verwerkt servicebulletins, garantievoorwaarden, registratie en onderdeelkeuze op een manier die de klant en jezelf beschermt.',
  videos: [
    { taal: 'nl', titel: 'Instructiefilm aanbrengen thermische beveiliging AGPO Ferroli (Ferroli Nederland)', yt: 'oEclZ_dlyPI', duur: '±4 min, 2021' },
    { taal: 'nl', titel: '...', zoek: 'garantie registreren en verlengen bij een cv-ketel per merk' },
    { taal: 'en', titel: 'Viessmann Boiler Warranty: What You Need to Know (Boilers2Go, VK)', yt: 'nvDb9MEgEuo', duur: '±1 min, 2026' }
  ],
  tekst: `
## Servicebulletins: instructies die achteraf bijkomen

Een handleiding is niet het laatste woord van een fabrikant. Op 25 november 2019 waarschuwde Ferroli Nederland voor AGPO Ferroli-cv-ketels van de typen Econpact, Megadens, Ultima en Megalux, geproduceerd tussen 1997 en 2011: onvoldoende onderhoud kon leiden tot brand- of smeltschade en gezondheidsschade door rookontwikkeling. Eigenaren werd gevraagd regelmatig onderhoud door een erkend bedrijf te laten uitvoeren, en installateurs om de nieuwste onderhoudsinstructies bij Ferroli op te vragen. Deze waarschuwing stond los van een nieuwe handleiding-uitgave: wie alleen de handleiding raadpleegde die hij al had, zag hem niet.

!!! kern De handleiding die je hebt, is niet altijd het hele verhaal
Bij een ouder of afwijkend toestel hoort navragen bij de fabrikant of een certificerende instelling of er een latere veiligheidswaarschuwing, een servicebulletin of een modificatiebericht is bijgekomen. De BRL 6000-25 noemt modificatieberichten expliciet als iets dat een certificaathouder feitelijk beschikbaar moet hebben, naast de installatie-, gebruiks- en onderhoudsvoorschriften.
!!!

## Onderdelen bestellen: origineel tegenover gelijkwaardig

De BRL 6000-25 schrijft voor dat je bij onderhoud uitsluitend onderdelen toepast die door de fabrikant zijn voorgeschreven of ten minste gelijkwaardig zijn aan de originele (gereviseerde onderdelen inbegrepen). Intergas en ATAG vragen dit expliciet, en ook Remeha vraagt bij vervanging na inspectie of onderhoud uitsluitend originele of aanbevolen onderdelen en materialen te gebruiken. Remeha vraagt daarnaast een vervangen onderdeel dat onder garantie valt met een volledig ingevuld retourformulier naar de afdeling Retourgoederen te sturen, en Intergas vraagt hetzelfde: het onderdeel franco en met vermelding van het serienummer en het mankement.

Een "gelijkwaardig" onderdeel is dus toegestaan, maar de bewijslast dat het gelijkwaardig is, ligt bij jou als installateur: een goedkoop kopie-onderdeel zonder onderbouwing is geen gelijkwaardig onderdeel, het is een gok met de veiligheid en de garantie van de klant.

## Garantie: de basis, en wat registratie toevoegt

De meeste merken geven een basisgarantie van 2 jaar, met een veel langere termijn op de warmtewisselaar en vaak een mogelijkheid om verder te verlengen:

| Merk (voorbeeld) | Basisgarantie | Wat verlenging toevoegt |
|---|---|---|
| Intergas, Kombi Kompakt HRE | 2 jaar op onderdelen, 15 jaar op de dichtheid van de warmtewisselaar (met een aflopende eigen bijdrage vanaf het 6e jaar) | Onderdelen registreren via Mijn Intergas |
| Remeha | 2 jaar | Onderdelen Garantie Plan (OGP): tot 15 jaar totaal voor bepaalde modellen, garantiekaart binnen 4 weken registreren in Mijn Remeha |
| ATAG, i/Q-serie | 5 jaar op onderdelen, 15 jaar op de warmtewisselaar (via een ATAG Dealer) | ATAG ComfortGarantie: tot 10 of 15 jaar |
| Vaillant | 2 jaar fabrieksgarantie | Verlengbaar via de installateur, tot 15 jaar op de warmtewisselaar |

De rookgaskoker met geintegreerde tapwaterspiraal en de aluminium voorplaat vallen bij Intergas uitsluitend onder de algemene 2 jaar, niet onder de 15 jaar van de warmtewisselaar: lees dus ook bij garantie de kleine letters van het specifieke onderdeel, niet alleen de koptekst "2 jaar" of "15 jaar".

## Registratie: waarom dat niet alleen administratie is

Remeha vraagt bij de inbedrijfstelling van de Calenta de garantiekaart samen met de eindgebruiker online in te vullen, naast het invullen van het typeplaatje (gassoort) en de checklist van het meegeleverde Serviceboekje. Dat is meer dan een formaliteit: zonder registratie kan een klant zijn recht op een verlengde garantietermijn mislopen, en kan de fabrikant hem niet snel bereiken bij een servicebulletin zoals in het AGPO Ferroli-voorbeeld hierboven.

## Praktijkgeval: een klant met een oud toestel en een dure reparatie

Een klant heeft een AGPO Ferroli Econpact uit 2003 met een defecte branderautomaat. Voordat je repareert of vervangt: dit type valt onder de waarschuwing van 2019 (bouwjaren 1997-2011). Je vraagt bij Ferroli de laatste onderhoudsinstructies op en controleert of de eerder aanbevolen aanpassing (een metalen plaatje in plaats van het doorzichtige kijkglas) al is uitgevoerd, voordat je alleen de branderautomaat vervangt en het toestel weer in bedrijf stelt. Zo behandel je niet alleen de klacht waarvoor je geroepen bent, maar ook de bekende risico's van dit specifieke toestel.

?? Verdieping: waarom garantie per onderdeel kan verschillen
Een warmtewisselaar gaat bij normaal gebruik en goede waterkwaliteit vaak decennia mee, terwijl een pomp of een printplaat een kortere technische levensduur heeft. Fabrikanten geven daarom niet één garantietermijn voor het hele toestel, maar per onderdeelgroep een andere: dat is geen marketingtruc, het volgt uit het verschil in slijtage en faalkans tussen onderdelen.
??
`,
  checklist: [
    'Ik weet dat een servicebulletin of veiligheidswaarschuwing los van een nieuwe handleiding-uitgave kan komen',
    'Ik vraag bij een ouder of afwijkend toestel de laatste onderhoudsinstructies bij de fabrikant op',
    'Ik gebruik alleen originele of aantoonbaar gelijkwaardige onderdelen',
    'Ik weet dat garantie per merk en per onderdeel kan verschillen, en dat registratie de termijn kan verlengen',
    'Ik registreer een garantiekaart namens of samen met de klant als dat bij het merk hoort'
  ],
  quiz: [
    {
      vraag: `Wat leert de AGPO Ferroli-waarschuwing van 2019 over servicebulletins?`,
      opties: [
        `Dat een servicebulletin of veiligheidswaarschuwing altijd en zonder één uitzondering precies gelijktijdig verschijnt met een compleet nieuwe, volledig herziene handleiding-uitgave van de fabrikant`,
        `Dat een fabrikant een veiligheidswaarschuwing of onderhoudsaanpassing los van een nieuwe handleiding-uitgave kan uitbrengen, waardoor je die kunt missen als je alleen de handleiding raadpleegt`,
        `Dat servicebulletins alleen voor de eindgebruiker bestemd zijn`,
        `Dat AGPO Ferroli-toestellen van voor 1997 automatisch veilig zijn`
      ],
      goed: 1,
      uitleg: `De waarschuwing (bouwjaren 1997-2011) stond los van een nieuwe handleiding-uitgave (MER-30, MER-31). Bij oudere of afwijkende toestellen navragen bij de fabrikant hoort daarom bij het werk.`
    },
    {
      vraag: `Wat zegt de BRL 6000-25 over onderdelen die je bij onderhoud gebruikt?`,
      opties: [
        `Ze moeten altijd origineel zijn, een gelijkwaardig onderdeel is nooit toegestaan`,
        `Uitsluitend onderdelen die door de fabrikant zijn voorgeschreven, of ten minste gelijkwaardig zijn aan het origineel (gereviseerd inbegrepen)`,
        `Elk onderdeel dat past, is toegestaan zolang het goedkoper is`,
        `Onderdelen mogen alleen bij de fabrikant zelf besteld worden`
      ],
      goed: 1,
      uitleg: `De BRL 6000-25 staat een gelijkwaardig onderdeel toe naast het originele, maar de bewijslast voor "gelijkwaardig" ligt bij de installateur (ONT-17). Intergas, ATAG en Remeha vragen dit ook expliciet in hun eigen documentatie.`
    },
    {
      vraag: `Een Intergas-toestel heeft een lekkende warmtewisselaar in het 8e jaar na installatie. Wat volgt uit de garantievoorwaarden van Intergas (Art. XI)?`,
      opties: [
        `Volledig gratis vervanging, want de warmtewisselaar heeft 15 jaar garantie`,
        `Geen enkele vergoeding, want de standaardgarantie van 2 jaar is verstreken`,
        `Vervanging van het keteldeel tegen een eigen bijdrage die oploopt met de jaren (bijvoorbeeld 10% in het 6e jaar, 20% in het 7e jaar), berekend vanaf de installatiedatum`,
        `De garantie op de warmtewisselaar duurt bij Intergas in werkelijk alle gevallen precies 2 jaar vanaf de installatiedatum en vervalt daarna volledig en zonder enige overgangsregeling of eigen bijdrage`
      ],
      goed: 2,
      uitleg: `Intergas geeft 15 jaar garantie op de dichtheid van de warmtewisselaar, met een aflopende eigen bijdrage vanaf het 6e jaar (MER-23): geen volledig gratis vervanging na jaar 5, maar ook geen nul vergoeding.`
    },
    {
      vraag: `Waarom is registratie van een garantiekaart meer dan alleen administratie?`,
      opties: [
        `Omdat registratie de enige manier is om een toestel legaal in bedrijf te stellen`,
        `Omdat zonder registratie de basisgarantie van 2 jaar meteen vervalt`,
        `Omdat registratie bij sommige merken toegang geeft tot een langere garantietermijn, en de fabrikant de eigenaar kan bereiken bij een servicebulletin`,
        `Omdat een niet-geregistreerd toestel per direct niet meer door enige erkende monteur onderhouden mag worden en elk recht op onderhoud onherroepelijk en blijvend verliest`
      ],
      goed: 2,
      uitleg: `Remeha's OGP en ATAG's ComfortGarantie verlengen de garantie na registratie (MER-26, MER-27); daarnaast helpt registratie de fabrikant om een eigenaar te bereiken als er, net als bij AGPO Ferroli, een veiligheidswaarschuwing volgt.`
    },
    {
      vraag: `Bij een Intergas-toestel valt de rookgaskoker met geintegreerde tapwaterspiraal niet onder de 15 jaar garantie op de warmtewisselaar, maar onder de algemene 2 jaar. Wat leert dit over garantielezen?`,
      opties: [
        `Dat garantietermijnen bij Intergas altijd voor het hele toestel gelden, zonder uitzonderingen`,
        `Dat de rookgaskoker geen garantie heeft`,
        `Dat dit een fout in de garantievoorwaarden van Intergas is die genegeerd mag worden`,
        `Dat je de garantietekst per onderdeel moet lezen, omdat een koptekst als "15 jaar op de warmtewisselaar" niet automatisch voor elk onderdeel binnen die groep geldt`
      ],
      goed: 3,
      uitleg: `Intergas maakt in zijn eigen garantievoorwaarden expliciet onderscheid tussen de warmtewisselaar (15 jaar) en de rookgaskoker met tapwaterspiraal en de aluminium voorplaat (alleen de algemene 2 jaar) (MER-23). Lees de garantietekst dus altijd per onderdeel.`
    }
  ],
  kaarten: [
    { voor: `Wanneer werd door Ferroli Nederland gewaarschuwd voor AGPO Ferroli-ketels (Econpact, Megadens, Ultima, Megalux, bouwjaren 1997-2011)?`, achter: `25 november 2019, wegens brand- en gezondheidsrisico bij onvoldoende onderhoud.` },
    { voor: `Wat vraagt de BRL 6000-25 over onderdelen bij onderhoud?`, achter: `Uitsluitend door de fabrikant voorgeschreven onderdelen, of ten minste gelijkwaardige (gereviseerd inbegrepen).` },
    { voor: `Hoeveel jaar garantie geeft Intergas op de dichtheid van de warmtewisselaar, en hoe werkt de eigen bijdrage?`, achter: `15 jaar, met een oplopende eigen bijdrage vanaf het 6e jaar (bijvoorbeeld 10% in jaar 6, 20% in jaar 7) tot 90% in jaar 14.` },
    { voor: `Binnen hoeveel weken vraagt Remeha om de garantiekaart van een nieuw toestel te registreren?`, achter: `4 weken na installatie, in Mijn Remeha.` },
    { voor: `Wat biedt ATAG's ComfortGarantie boven de standaardgarantie?`, achter: `Verlenging tot 10 of 15 jaar (i/Q-serie: standaard 5 jaar op onderdelen, 15 jaar op de warmtewisselaar).` },
    { voor: `Naar welke afdeling stuurt Remeha een vervangen onderdeel dat onder garantie valt?`, achter: `De afdeling Retourgoederen, met een volledig ingevuld retourformulier.` }
  ],
  bronnen: ['ONT-17', 'MRK-25', 'MER-19', 'MER-23', 'MER-24', 'MER-25', 'MER-26', 'MER-27', 'MER-28', 'MER-29', 'MER-30', 'MER-31']
},

/* ------------------------------------------------------------------ 17.4 */
{
  id: 'm17l04',
  nr: '17.4',
  titel: 'Hybride en warmtepompen: wat je moet weten',
  duur: 25,
  type: 'les',
  leerdoel: 'Je herkent een hybride opstelling, begrijpt hoe de regeling kiest tussen warmtepomp en ketel, en weet wat dat van de afgifte vraagt.',
  videos: [
    { taal: 'nl', titel: 'Hoe werkt een hybride warmtepomp? (Intergas Verwarming)', yt: 'fXg0KgFFL4I', duur: '±2 min, 2025' },
    { taal: 'nl', titel: 'Wat is een Hybride CV-ketel? Hoppenbrouwers Helpt (Hoppenbrouwers)', yt: 'qqfX06l-hO4', duur: '±2 min, 2025' },
    { taal: 'en', titel: 'How does a hybrid heat pump work? (DaikinEurope)', yt: 'BRjvOm82ESs', duur: '±4 min, 2021' }
  ],
  tekst: `
## Wat een hybride opstelling is

Een hybride opstelling combineert een lucht-water-warmtepomp met een gasketel: de warmtepomp levert het grootste deel van de warmte, en de gasketel springt bij op de koudste dagen of bij een hoge warmwatervraag. Bij een monoblock-warmtepomp zit het koudemiddel in een gesloten circuit in de buitenunit en lopen alleen waterleidingen naar binnen; bij een split-systeem lopen er koudemiddelleidingen tussen de buiten- en de binnenunit. Dat onderscheid is niet alleen techniek: het bepaalt ook wie het waterzijdig mag aansluiten (zie hieronder).

## Hoe de regeling kiest tussen warmtepomp en ketel

In het Intergas-hybrideconcept (Kombi Kompakt HREco) ontvangt de gasketel de warmtevraag van de warmtepomp-binnenunit: na een warmtevraag van de warmtepomp volgt ventilator, ontsteken en cv-bedrijf, en bij tapwaterbedrijf boven een bepaald debiet wordt een cv-vraag onderbroken. De warmtepompregeling bepaalt dus welke bron levert; de precieze regelstrategie (bijvoorbeeld op basis van buitentemperatuur of energieprijs) verschilt per fabrikant en is hier niet met een fabrikantbron bevestigd, dus laten we die hier bewust weg.

!!! kern De regeling kiest de bron, jij onderhoudt de gasketel-kant
Bij een storing op een hybride systeem is de eerste vraag: zit het probleem bij de warmtepomp, bij de gasketel, of in de communicatie tussen beide? De gasketel-kant is jouw terrein; het koudemiddelcircuit van de warmtepomp is dat niet (zie [les 17.5](les:m17l05)).
!!!

## Wat dit van de afgifte en het temperatuurregime vraagt

Een warmtepomp verwarmt water tot doorgaans 30 tot 55 graden, waar een cv-ketel vaak op 60 tot 80 graden staat afgesteld. Bij die lagere temperatuur moet het afgiftesysteem (radiatoren of vloerverwarming) "groot genoeg" zijn om voldoende warmte af te geven: is dat niet het geval, dan springt de gasketel vaker bij, wat het voordeel van de warmtepomp juist wegneemt. Milieu Centraal biedt hiervoor de Verwarmingstest aan (aanvoertemperatuur een stookseizoen op 50 graden, en bijhouden of het huis warm genoeg blijft); Vaillant beschrijft een vergelijkbare vierstappentest met een grens van 55 graden. Hoe je een afgiftesysteem daadwerkelijk beoordeelt en optimaliseert (radiatorventilator, groter afgiftevlak, vloerverwarming), staat in [les 7.5](les:m07l05) en [les 7.6](les:m07l06): dat wordt hier niet herhaald.

## Wat een cv-monteur wel en niet doet

Wat je als cv-monteur aan een hybride systeem doet, hangt af van het onderdeel:

- **Gasketel, waterzijdige aansluiting, regeling van de gasketel-kant**: dit valt onder je Vakmanschap CO, net als bij een gewone cv-ketel. Zowel Remeha als Intergas schrijven voor dat werk aan gasvoerende delen alleen door een erkend installateur gebeurt.
- **Waterzijdig aansluiten van een monoblock-warmtepomp**: volgens Remeha kan een installateur zonder F-gassen-certificaat dit doen, omdat er geen koudemiddel door de leidingen naar binnen loopt.
- **Een split-systeem, of het koudemiddelcircuit van welke warmtepomp dan ook**: dit vraagt een apart persoonscertificaat voor koudemiddelen (zie [les 17.5](les:m17l05)). Dat is niet jouw terrein zonder die aparte certificering.

## Praktijkgeval: geen warmte, en twee mogelijke bronnen

Een klant met een hybride Intergas-installatie klaagt dat het huis kouder blijft dan normaal bij een buitentemperatuur van 5 graden. Volgens de methode uit [module 16](module:m16) begin je met de vraag: welke bron zou nu moeten leveren? Bij 5 graden buiten zou de warmtepomp normaal het grootste deel van de vraag moeten dekken. Je controleert eerst of de warmtepomp-binnenunit inderdaad een warmtevraag doorgeeft aan de gasketel (de gasketel-kant, jouw terrein), voordat je concludeert dat de warmtepomp zelf (de buitenunit, het koudemiddelcircuit) defect is. Blijkt het probleem echt in de buitenunit of het koudemiddelcircuit te zitten, dan verwijs je door naar een gecertificeerd koudetechnisch bedrijf in plaats van zelf verder te onderzoeken.

?? Verdieping: waarom "hybride" geen vast omschreven vermogensverdeling heeft
Beweringen als "de warmtepomp levert altijd 50 tot 70% van de warmtevraag" circuleren veel, maar zijn in dit register niet met een fabrikant- of ISSO-bron bevestigd en worden daarom niet als feit gebruikt. De werkelijke verdeling hangt af van het specifieke systeem, de instelling en de woning: noem dit in een klantgesprek als een indicatie, niet als een harde belofte.
??
`,
  checklist: [
    'Ik herken het verschil tussen een monoblock- en een split-warmtepomp en weet waarom dat verschil bepaalt wie mag aansluiten',
    'Ik weet dat de warmtepompregeling bepaalt welke bron levert, en dat de gasketel de warmtevraag daarvan ontvangt',
    'Ik weet dat een lagere aanvoertemperatuur een groter of beter afgiftesysteem vraagt, en verwijs voor de beoordeling daarvan naar module 7',
    'Ik onderhoud de gasketel-kant van een hybride systeem onder mijn Vakmanschap CO',
    'Ik verwijs een storing in het koudemiddelcircuit door naar een gecertificeerd koudetechnisch bedrijf'
  ],
  quiz: [
    {
      vraag: `Wat is het verschil tussen een monoblock- en een split-warmtepomp?`,
      opties: [
        `Bij een monoblock zit het koudemiddel gesloten in de buitenunit, bij een split lopen er ook koudemiddelleidingen naar binnen`,
        `Een monoblock heeft geen buitenunit, een split wel`,
        `Een split-warmtepomp gebruikt geen koudemiddel`,
        `Er is volgens veel verkopers eigenlijk geen enkel technisch verschil tussen een monoblock- en een split-warmtepomp, alleen een ander merknaam-etiket dat erop is geplakt`
      ],
      goed: 0,
      uitleg: `Bij een monoblock blijft het koudemiddel in de buitenunit, bij een split loopt het koudemiddel ook naar binnen (HYB-01). Dat bepaalt wie het waterzijdig mag aansluiten zonder F-gassen-certificaat.`
    },
    {
      vraag: `In het Intergas-hybrideconcept: wie of wat bepaalt of de gasketel gaat leveren?`,
      opties: [
        `De bewoner handmatig, via een schakelaar op de gasketel`,
        `De warmtepompregeling, die de warmtevraag aan de gasketel-binnenunit doorgeeft`,
        `Uitsluitend de buitentemperatuur, zonder enige regeling`,
        `De gasketel bepaalt dat volledig zelfstandig, geheel los van enige aansturing door de warmtepomp`
      ],
      goed: 1,
      uitleg: `De warmtepompregeling bepaalt welke bron levert; de gasketel ontvangt de warmtevraag van de warmtepomp-binnenunit (HYB-12).`
    },
    {
      vraag: `Waarom vraagt een warmtepomp bij dezelfde woning vaak een groter of ander afgiftesysteem dan een cv-ketel?`,
      opties: [
        `Omdat een warmtepomp meer vermogen heeft dan een cv-ketel`,
        `Omdat een warmtepomp volgens de installatievoorschriften van elke fabrikant uitsluitend op vloerverwarming mag worden aangesloten en nooit op radiatoren of ventilatorconvectoren`,
        `Omdat een warmtepomp geen radiatoren ondersteunt`,
        `Omdat een warmtepomp het water tot een lagere temperatuur verwarmt dan een cv-ketel, waardoor het afgiftesysteem groter of beter moet zijn`
      ],
      goed: 3,
      uitleg: `Bij een lagere aanvoertemperatuur geeft een even groot afgiftesysteem minder vermogen af; het systeem moet dan groter of geschikter zijn om toch voldoende warmte te leveren. Hoe je dat beoordeelt, staat in module 7.`
    },
    {
      vraag: `Een monteur zonder F-gassen-certificaat wil een monoblock-warmtepomp waterzijdig aansluiten. Mag dat volgens Remeha?`,
      opties: [
        `Nee, dat mag nooit zonder F-gassen-certificaat`,
        `Ja, omdat er bij een monoblock geen koudemiddel door de leidingen naar binnen loopt`,
        `Ja, maar alleen als het toestel jonger is dan een jaar`,
        `Nee, alleen gecertificeerde elektriciens mogen een warmtepomp aansluiten`
      ],
      goed: 1,
      uitleg: `Remeha noemt dat installateurs zonder F-gassen-certificaat een monoblock-warmtepomp kunnen plaatsen, juist omdat er geen koudemiddel door de leidingen naar binnen loopt (HYB-02).`
    },
    {
      vraag: `Bij een hybride storing blijkt het probleem in het koudemiddelcircuit van de buitenunit te zitten. Wat doe je als cv-monteur?`,
      opties: [
        `Zelf het koudemiddelcircuit openen en repareren, want je Vakmanschap CO-certificaat dekt het hele hybride systeem`,
        `Het probleem negeren, want de gasketel werkt nog`,
        `Doorverwijzen naar een bedrijf met het juiste koudemiddelcertificaat, en zelf alleen de gasketel-kant blijven onderhouden`,
        `De warmtepomp vervangen door een tweede gasketel`
      ],
      goed: 2,
      uitleg: `Werk aan het koudemiddelcircuit vraagt een apart persoonscertificaat (BRL 200); Vakmanschap CO dekt de gasketel-kant, niet het koudemiddelcircuit (HYB-04, HYB-11). Doorverwijzen is dan de juiste stap.`
    }
  ],
  kaarten: [
    { voor: `Wat is het verschil tussen een monoblock- en een split-warmtepomp?`, achter: `Monoblock: koudemiddel blijft in de buitenunit, alleen waterleidingen naar binnen. Split: koudemiddelleidingen lopen ook naar binnen.` },
    { voor: `Wie of wat bepaalt in een hybride systeem welke bron (warmtepomp of ketel) levert?`, achter: `De warmtepompregeling; de gasketel ontvangt de warmtevraag van de warmtepomp-binnenunit.` },
    { voor: `Tussen welke temperaturen verwarmt een warmtepomp het cv-water doorgaans, en een cv-ketel?`, achter: `Warmtepomp: ongeveer 30 tot 55 graden. Cv-ketel: vaak 60 tot 80 graden.` },
    { voor: `Mag een monteur zonder F-gassen-certificaat een monoblock-warmtepomp waterzijdig aansluiten?`, achter: `Ja, volgens Remeha, omdat er geen koudemiddel door de leidingen naar binnen loopt.` },
    { voor: `Welk deel van een hybride systeem valt onder jouw Vakmanschap CO?`, achter: `De gasketel-kant: het toestel, de gasvoerende delen en de aansluiting daarvan, net als bij een gewone cv-ketel.` },
    { voor: `Waarom is "de warmtepomp levert altijd 50 tot 70% van de warmtevraag" geen feit om als vaste regel te gebruiken?`, achter: `Deze verdeling is niet met een fabrikant- of ISSO-bron bevestigd; de werkelijke verdeling hangt af van het specifieke systeem en de woning.` }
  ],
  bronnen: ['HYB-01', 'HYB-02', 'HYB-04', 'HYB-10', 'HYB-11', 'HYB-12', 'AFG-12', 'AFG-14', 'AFG-16']
},

/* ------------------------------------------------------------------ 17.5 */
{
  id: 'm17l05',
  nr: '17.5',
  titel: 'De grens met koudetechniek: F-gassen',
  duur: 20,
  type: 'les',
  leerdoel: 'Je kunt uitleggen wat F-gassen zijn, welke certificering nodig is voor werk aan het koudemiddelcircuit, en waar jouw bevoegdheid ophoudt.',
  videos: [
    { taal: 'nl', titel: 'F-Gassen (ROVC Technische Opleidingen)', yt: 'Eu_TE6eafzw', duur: '±1 min, 2024' },
    { taal: 'nl', titel: 'F-gassen: dit is veranderd sinds 1 september (Techniek Nederland)', yt: 'kNAUqfaZ9Iw', duur: '±42 min, 2026' },
    { taal: 'en', titel: 'Introduction To F-Gas Training Course With Viva Training (Allen Hart, VK)', yt: 'QxWr4vcsQGk', duur: '±11 min, 2024' }
  ],
  tekst: `
## Wat een F-gas is

Een F-gas (gefluoreerd broeikasgas) is een kunstmatig gas dat geen ozonlaagafbrekende werking heeft, maar wel een klimaatopwarmend effect; bij sommige F-gassen is dat effect enkele duizenden keer zo groot als dat van CO2. F-gassen worden onder meer gebruikt als koudemiddel in de warmtepomp van een hybride systeem. Hoeveel een koudemiddel bijdraagt aan klimaatverandering, wordt uitgedrukt in GWP (Global Warming Potential): het klimaatopwarmend effect ten opzichte van CO2 over 100 jaar. Veelgebruikte koudemiddelen lopen daarin ver uiteen: R410A heeft een GWP van ongeveer 2088, R32 ongeveer 675, en het natuurlijke koudemiddel R290 (propaan) ongeveer 3. Fabrikanten als Nefit Bosch zeggen daarom de voorkeur te geven aan koudemiddelen met een zo laag mogelijke klimaatimpact.

!!! kern F-gassen zijn niet gevaarlijk voor de gezondheid op de manier die je van gas kent
Een F-gas is geen giftig of ontplofbaar gas zoals aardgas: het risico zit in het klimaatopwarmend effect als het ontsnapt, niet in acuut gevaar voor de monteur of de bewoner bij een klein lek. Dat is een andere soort risico dan de CO- en explosiegevaren die de rest van deze cursus behandelt, en het vraagt daarom ook een andere, eigen certificering.
!!!

## Welke certificering nodig is

Voor werk aan het koudemiddelcircuit (installeren, onderhouden, lekcontrole, terugwinnen van koudemiddel) is een persoonscertificaat nodig volgens BRL 200: A1 voor F-gassen en koolwaterstoffen in alle hoeveelheden, A2 voor kleinere hoeveelheden (tot 3 kg, of 6 kg hermetisch), B voor CO2, C voor ammoniak, D alleen voor terugwinning en E alleen voor lekcontrole zonder het circuit te openen. Bedrijven die aan koelinstallaties, airco's en warmtepompen werken, hebben daarnaast een bedrijfscertificaat nodig (BRL 100). Sinds 29 september 2025 geldt de certificeringsplicht niet meer alleen voor F-gassen, maar ook voor natuurlijke koudemiddelen zoals propaan: tot 29 maart 2026 worden nog certificaten volgens het oude systeem uitgegeven, en per 12 maart 2029 moeten alle monteurs die aan koudemiddelcircuits werken, volgens het nieuwe systeem gecertificeerd zijn.

| Wat je doet | Welke certificering | Van toepassing op |
|---|---|---|
| Gasketel installeren, onderhouden, afstellen | Vakmanschap CO (BRL 6000-25) | Elke cv-ketel, ook de gasketel-kant van een hybride systeem |
| Monoblock-warmtepomp waterzijdig aansluiten | Geen apart certificaat nodig (Remeha) | Alleen als er geen koudemiddel door de leidingen naar binnen loopt |
| Koudemiddelcircuit installeren, onderhouden, lekcontrole, terugwinnen | Persoonscertificaat BRL 200 (A1, A2, B, C, D of E) plus bedrijfscertificaat BRL 100 | Elke warmtepomp, split of monoblock, zodra je het koudemiddelcircuit zelf opent of erin werkt |

## Waar jouw bevoegdheid ophoudt

Vakmanschap CO en de BRL 6000-25 gaan over gasverbrandingstoestellen tot 100 kW en de bijbehorende lucht- en rookgasvoorzieningen. Die scope noemt geen koudemiddelcircuit. Concreet betekent dat: je mag de gasketel van een hybride systeem installeren, onderhouden en afstellen; je mag, als installateur zonder F-gassen-certificaat, een monoblock-warmtepomp waterzijdig aansluiten omdat er geen koudemiddel naar binnen loopt; maar zodra je aan het koudemiddelcircuit zelf moet werken (een split-systeem aansluiten, een lekkage zoeken in het koudemiddelcircuit, koudemiddel bijvullen of aftappen), heb je een BRL 200-certificaat nodig dat een Vakmanschap CO-certificaat niet vervangt.

Dit is precies dezelfde logica als bij andere brandstoffen en toesteltypen die buiten je CO-certificering vallen (zie [les 19.5](les:m19l05) voor olie, LPG, hout en pellets): weten waar je bevoegdheid ophoudt, hoort bij vakbekwaamheid, niet bij onzekerheid.

!!! gevaar Zelf aan een koudemiddelcircuit werken zonder certificaat
Koudemiddel dat ontsnapt bij ondeskundig werk kan de druk in een compressor of leiding onvoorspelbaar laten oplopen, en het is bovendien wettelijk verboden om zonder het juiste persoonscertificaat aan het koudemiddelcircuit te werken. Bij twijfel of iets "nog gasketel" of al "koudetechniek" is: niet zelf proberen, een gecertificeerd koudetechnisch bedrijf inschakelen.
!!!

## Praktijkgeval: waar ligt de grens bij deze klacht?

Een hybride installatie geeft een storing die volgens het display bij de buitenunit hoort. Je controleert eerst, net als in [les 17.4](les:m17l04), of de warmtepomp-binnenunit wel een warmtevraag doorgeeft aan de gasketel: dat mag je zelf controleren, want dat is de gasketel-kant en de communicatie ertussen. Blijkt de oorzaak in de buitenunit te zitten, bijvoorbeeld een compressor die niet aanslaat of een vermoeden van een koudemiddellek (bijvoorbeeld een ijsvorming op leidingen die daar niet zou moeten zitten), dan stop je daar: dat onderzoek en die reparatie vragen een BRL 200-certificaat.

?? Verdieping: waarom de certificering per 2025-2029 verandert
De herziening van de F-gassenverordening breidt de certificeringsplicht uit naar natuurlijke koudemiddelen, juist omdat steeds meer warmtepompen op propaan of andere natuurlijke koudemiddelen met een lage GWP overstappen. Een lage GWP maakt een koudemiddel klimaatvriendelijker, maar niet per se ongevaarlijker om mee te werken (propaan is bijvoorbeeld brandbaar): vandaar dat de certificeringsplicht meegroeit met het gebruik, in plaats van te verdwijnen.
??
`,
  checklist: [
    'Ik kan uitleggen wat een F-gas is en wat GWP betekent',
    'Ik weet dat het risico van een F-gas klimaatopwarming is, niet acuut gevaar zoals bij aardgas of CO',
    'Ik weet welk certificaat nodig is voor werk aan een koudemiddelcircuit (BRL 200) en dat mijn Vakmanschap CO dat niet vervangt',
    'Ik weet dat ik een monoblock-warmtepomp waterzijdig mag aansluiten zonder F-gassen-certificaat, maar een split-systeem niet',
    'Ik verwijs werk aan het koudemiddelcircuit door naar een gecertificeerd koudetechnisch bedrijf'
  ],
  quiz: [
    {
      vraag: `Wat is het belangrijkste risico van een F-gas dat ontsnapt, volgens deze les?`,
      opties: [
        `Een klimaatopwarmend effect, tot enkele duizenden keer zo groot als dat van CO2`,
        `Acute vergiftiging zoals bij koolmonoxide`,
        `Explosiegevaar, net zoals bij een lek van aardgas in een afgesloten ruimte`,
        `Verstikking door zuurstofverdringing in een kleine, onvoldoende geventileerde ruimte`
      ],
      goed: 0,
      uitleg: `Een F-gas heeft geen ozonlaagafbrekende werking maar wel een klimaatopwarmend effect (MER-32). Dat is een ander soort risico dan de acute CO- of explosiegevaren van aardgas.`
    },
    {
      vraag: `Welke certificering heb je nodig om zelf koudemiddel in het circuit van een warmtepomp bij te vullen?`,
      opties: [
        `Alleen je Vakmanschap CO-certificaat, dat het hele hybride systeem inclusief het koudemiddelcircuit zou dekken`,
        `Geen certificaat, zolang de klant toestemming geeft`,
        `Een persoonscertificaat volgens BRL 200 (bijvoorbeeld A1 of A2), naast een bedrijfscertificaat BRL 100`,
        `Alleen een VCA-certificaat`
      ],
      goed: 2,
      uitleg: `Werk aan het koudemiddelcircuit vraagt een persoonscertificaat volgens BRL 200 (HYB-04) en een bedrijfscertificaat BRL 100 (HYB-06). Vakmanschap CO gaat over gasverbrandingstoestellen, niet over het koudemiddelcircuit.`
    },
    {
      vraag: `Waarom mag een installateur zonder F-gassen-certificaat volgens Remeha wel een monoblock-warmtepomp waterzijdig aansluiten, maar geen split-systeem?`,
      opties: [
        `Omdat een split-systeem altijd groter vermogen heeft`,
        `Omdat een monoblock geen koudemiddel gebruikt`,
        `Omdat split-systemen sinds kort volledig en zonder enige uitzondering wettelijk verboden zijn voor iedere cv-monteur, ongeacht welk ander certificaat hij verder ook toevallig al heeft behaald`,
        `Omdat bij een monoblock geen koudemiddel door de leidingen naar binnen loopt, en bij een split wel`
      ],
      goed: 3,
      uitleg: `Bij een monoblock blijft het koudemiddelcircuit gesloten in de buitenunit; bij een split lopen koudemiddelleidingen ook naar binnen, wat wel onder de F-gassen-certificering valt (HYB-01, HYB-02).`
    },
    {
      vraag: `Sinds 29 september 2025 is de certificeringsplicht voor koudemiddelen uitgebreid. Waarnaar?`,
      opties: [
        `Naar elektrische installaties in het algemeen`,
        `Naar natuurlijke koudemiddelen zoals propaan, die eerst niet certificeringsplichtig waren`,
        `Naar aardgasinstallaties onder 20 kW`,
        `De uitbreiding is per die datum weer ingetrokken`
      ],
      goed: 1,
      uitleg: `De herziene F-gassenverordening voegt certificering voor natuurlijke koudemiddelen (zoals koolwaterstoffen als propaan) toe aan die voor F-gassen, sinds 29 september 2025 (HYB-03, HYB-05).`
    },
    {
      vraag: `Bij een hybride storing vermoed je een koudemiddellek in de buitenunit (ijsvorming op een leiding die daar niet zou moeten zitten). Wat is de juiste vervolgstap?`,
      opties: [
        `Zelf het circuit openen en het lek dichten, want je bent al bij het toestel`,
        `Een gecertificeerd koudetechnisch bedrijf inschakelen, en zelf alleen de gasketel-kant en de communicatie tussen ketel en warmtepomp blijven controleren`,
        `Wachten tot het lek zichzelf oplost bij de volgende onderhoudsbeurt`,
        `De warmtepomp buiten bedrijf stellen en de klant adviseren zelf koudemiddel bij te vullen`
      ],
      goed: 1,
      uitleg: `Werk aan het koudemiddelcircuit vraagt een BRL 200-certificaat dat een cv-monteur niet automatisch heeft (HYB-04); de juiste stap is doorverwijzen, niet zelf het circuit openen of de klant dat laten doen.`
    }
  ],
  kaarten: [
    { voor: `Wat is een F-gas?`, achter: `Een kunstmatig gas zonder ozonlaagafbrekende werking, maar met een klimaatopwarmend effect (soms duizenden keer zo groot als CO2).` },
    { voor: `Wat drukt GWP uit?`, achter: `Het klimaatopwarmend effect van een gas ten opzichte van CO2 over 100 jaar.` },
    { voor: `Welke GWP-waarden horen ongeveer bij R410A, R32 en R290?`, achter: `R410A ongeveer 2088, R32 ongeveer 675, R290 (propaan) ongeveer 3.` },
    { voor: `Welk persoonscertificaat heb je nodig om zelfstandig aan het koudemiddelcircuit van een warmtepomp te werken?`, achter: `Een certificaat volgens BRL 200 (bijvoorbeeld A1 of A2), naast een bedrijfscertificaat BRL 100.` },
    { voor: `Mag je zonder F-gassen-certificaat een monoblock-warmtepomp waterzijdig aansluiten?`, achter: `Ja, volgens Remeha, omdat er geen koudemiddel door de leidingen naar binnen loopt.` },
    { voor: `Vanaf welke datum geldt de certificeringsplicht ook voor natuurlijke koudemiddelen zoals propaan?`, achter: `29 september 2025 (met een overgangsperiode tot 29 maart 2026, en volledige overgang per 12 maart 2029).` },
    { voor: `Wat doe je als je een koudemiddellek vermoedt in de buitenunit van een hybride systeem?`, achter: `Niet zelf het circuit openen: doorverwijzen naar een bedrijf met een BRL 200- en BRL 100-certificaat.` }
  ],
  bronnen: ['HYB-01', 'HYB-02', 'HYB-03', 'HYB-04', 'HYB-05', 'HYB-06', 'HYB-10', 'HYB-11', 'MER-32', 'MER-33', 'MER-35']
}

  ]
});
