/* ==========================================================================
   m09.js - Module 9: Elektrisch werken aan een cv-ketel
   Lessen 9.1 t/m 9.4 zijn geschreven op basis van project/docs/feiten/09-elektra-aan-de-ketel.md
   (voorvoegsel ELK), hergebruikt met ELE (register 03), MET (register 05) en REG/RGL
   (registers 03 en 07). Deze module leert geen algemene elektrotechniek: daarvoor verwijst
   de tekst naar CURSUS.site.zuster (Cursus Elektrotechniek). Hier staat alleen wat specifiek
   is voor het werken aan een cv-ketel: voeding, polariteit, aarding, veilig spanningsloos maken,
   thermostaatbedrading en de elektrische metingen die bij een ketel horen.
   Welke merken/modellen wel fasegevoelig zijn (naast Remeha, dat dat expliciet niet is) en de
   precieze wettelijke afbakening van wat een cv-monteur zelf aan de elektrische aansluiting mag,
   staan als open vraag in het feitenregister (09, open vragen 1 en 2).
   ========================================================================== */

CURSUS.addModule({
  id: 'm09',
  nr: 9,
  deel: 1,
  titel: 'Elektrisch werken aan een cv-ketel',
  ondertitel: 'De elektrische kant van de ketel, veilig en correct.',
  niveau: 'Gemiddeld',
  studietijd: 5,
  intro: 'De elektrische kant van de ketel: voeding, polariteit, aarding, veilig spanningsloos maken, thermostaatbedrading en de metingen die daarbij horen. Voor algemene elektrotechniek verwijst de cursus naar de Cursus Elektrotechniek.',
  inleiding: [
    'Een cv-monteur is geen elektromonteur, maar een ketel is wel een elektrisch toestel: hij heeft een voeding nodig, bewaakt de vlam met een klein elektrisch signaal en communiceert met een thermostaat over een laagspanningslijn. Deze module behandelt precies dat deel: wat een ketel aan voeding en aarding nodig heeft en waarom, hoe je veilig spanningsloos werkt en dat aantoont, hoe de thermostaatbedrading in elkaar zit, en welke metingen je aan een ketel doet. Wat een cv-monteur niet zelf doet (de vaste installatie van het pand aanleggen of wijzigen, een verzegelde meterkast openen) staat er ook bij, met de reden waarom.',
    'Waar iets echt algemene elektrotechniek is, zoals de wet van Ohm, hoe een multimeter precies werkt of wat spanning en stroom zijn, verwijst deze module naar de Cursus Elektrotechniek. Hier lees je alleen wat specifiek is voor de ketel: welke klemmen waarvoor zijn, welke waarden een fabrikant noemt, en wat er misgaat als je het verkeerd aansluit. Waarden als zekeringwaarden, klemnummers en kabellengtes verschillen per merk en model en staan daarom steeds met merk en model erbij: voor het toestel waaraan je werkt geldt de handleiding van dat toestel.',
    'De voorbeelden komen uit de installatie- en servicehandleidingen van de Remeha Calenta 25s, 28c, 35s en 40c (2017), de Intergas Kombi Kompakt HRE (installatievoorschrift 2021), de Vaillant ecoTEC plus VHR (installatie- en onderhoudshandleiding 2024) en de ATAG i-Serie (installatie- en servicehandleiding 2018), plus wetgeving (Arbeidsomstandighedenbesluit), het certificatieschema BRL 6000-25 en de erkenningsregels van InstallQ.'
  ],
  leerdoelen: [
    'De voeding, polariteit en aarding van een ketel beoordelen en uitleggen waarom polariteit de ionisatiebewaking kan beinvloeden',
    'Veilig een ketel spanningsloos maken, dat aantonen en weten wat je niet zelf aan de vaste installatie doet',
    'De thermostaatbedrading (aan/uit tegenover OpenTherm of een fabrikanteigen bus) aansluiten en uitleggen wat er misgaat bij een verkeerde aansluiting',
    'De belangrijkste elektrische metingen aan een ketel uitvoeren, met een multimeter van de juiste meetcategorie'
  ],
  examen: [
    {
      vraag: `Een Remeha Calenta heeft een hoofdzekering F1 van 6,3 AT. Bij een ATAG i-Serie staat op het elektrisch schema "T 3,15 H". Wat volgt daaruit voor een monteur die een zekering moet vervangen?`,
      opties: [
        `Beide toestellen gebruiken in de praktijk vaak hetzelfde type zekering, dus je neemt de waarde van het toestel dat je op dat moment het beste kent`,
        `De zekeringwaarde staat vast per merk en model, dus je vervangt hem met de waarde die voor dat specifieke toestel is voorgeschreven`,
        `Je kiest altijd de hoogste van de twee waarden, dat is nooit onveilig`,
        `De ATAG is minder krachtig, dus daar mag een lichtere zekering in`
      ],
      goed: 1,
      uitleg: `De zekeringwaarde is door de fabrikant op de bedrading en de componenten van dat specifieke toestel afgestemd (ELE-01, ELK-14). Een hogere waarde beveiligt niet meer wat hij moet beveiligen, en de twee genoemde waarden horen bij twee verschillende toestellen: ze zijn geen keuzemenu.`
    },
    {
      vraag: `Waarom kan het verwisselen van fase en nul bij een fasegevoelig toestel de gemeten ionisatiestroom beinvloeden, terwijl de vlam gewoon zichtbaar brandt?`,
      opties: [
        `Omdat de vlam dan minder heet wordt`,
        `Omdat de ionisatiemeting op een potentiaalverschil tussen de ionisatiepin en de ketelmassa steunt, en dat verschil bij verwisselde polariteit kan veranderen`,
        `Omdat de brander dan minder gas krijgt`,
        `Omdat de gasdruk bij een verwisselde polariteit enkele millibar daalt, waardoor de brander tijdelijk minder gas krijgt, minder warmte afgeeft en de vlam kleiner wordt`
      ],
      goed: 1,
      uitleg: `Flame rectification zet een wisselspanning om in een kleine gelijkstroom doordat de ionisatiepin veel kleiner is dan de ketelmassa (ELK-08). Die omzetting hangt af van de referentie ten opzichte van de massa, dus verwisselde polariteit kan het signaal veranderen, ook al brandt de vlam gewoon (ELK-09, ELK-10). Gasdruk en brandertemperatuur veranderen daardoor niet.`
    },
    {
      vraag: `Een monteur meet met een multimeter een weerstand van bijna 0 ohm tussen de aardrail in de meterkast en een geaard leidingdeel. Wat mag hij daaruit concluderen?`,
      opties: [
        `Dat er een verbinding is, maar niet dat de aardingsweerstand aan de norm voldoet: dat vraagt een gespecialiseerde meting`,
        `Dat de aarde van de hele woning volgens NEN 1010 is goedgekeurd`,
        `Dat een professionele aardweerstandsmeting met een gecalibreerd instrument hierna nooit meer nodig zal zijn voor dit pand`,
        `Dat de ketel op deze aarde altijd veilig ontsteekt`
      ],
      goed: 0,
      uitleg: `Een doorgangsmeting laat alleen zien dat er verbinding is, niet of de aardingsweerstand voldoet: dat vraagt een echte aardweerstandsmeting zoals de 3-pinmethode (ELK-15). Een multimeter is hiervoor niet het juiste instrument, en de ionisatiebewaking zegt niets over de kwaliteit van de aarde als geheel.`
    },
    {
      vraag: `Artikel 3.5 lid 3 van het Arbeidsomstandighedenbesluit stelt dat werkzaamheden aan een elektrische installatie alleen mogen worden uitgevoerd als de installatie spanningsloos is. Wat betekent dat voor het aansluiten van een thermostaat op een ketel?`,
      opties: [
        `Dat mag altijd onder spanning, want het is laagspanning`,
        `Spanningsloos maken is de wettelijke hoofdregel; onder spanning werken is alleen bij uitzondering toegestaan, met aangetoonde dringende noodzaak`,
        `Dat geldt alleen voor de vaste installatie van het pand zelf, met de meterkast en de groepenkast, niet voor het aansluiten van een los toestel zoals een ketel`,
        `Dat geldt alleen bij hoogspanning`
      ],
      goed: 1,
      uitleg: `Lid 3 is de hoofdregel: spanningsloos werken (ELK-02). Lid 5 laat een uitzondering voor laagspanning toe, maar alleen bij aangetoonde dringende noodzaak en een daarvoor geschikte installatie (ELK-03), niet als standaardwerkwijze voor iets dat ook spanningsloos kan.`
    },
    {
      vraag: `Een monteur wil aantonen dat een ketel spanningsloos is. Welke werkwijze past bij wat de norm NEN 3140 daarover beschrijft?`,
      opties: [
        `Met een eenpolige spanningszoeker op één ader controleren`,
        `Op het display van de ketel kijken of er na het indrukken van de resetknop nog enige tekst, temperatuur of storingscode op het scherm verschijnt`,
        `Met een tweepolige spanningsaanwijzer die vlak voor en na gebruik op een bekende spanningsbron is gecontroleerd, op alle geleiders meten`,
        `Aannemen dat het spanningsloos is nadat de hoofdschakelaar is omgezet`
      ],
      goed: 2,
      uitleg: `NEN 3140 werkt met vijf stappen, waarvan "aantonen dat spanningsloos is" er een is, met een tweepolige spanningsaanwijzer die je zelf eerst test (ELE-11, ELE-12). Een eenpolige zoeker of aannames op basis van de hoofdschakelaar tonen niets aan.`
    },
    {
      vraag: `Een cv-monteur met alleen het Bewijs van Vakmanschap CO wil achter een door de netbeheerder verzegelde meterkast zelf de spanning op een groepenkast (3 x 63 A) controleren, met een multimeter van CAT II. Wat is hier dubbel mis?`,
      opties: [
        `Niets: met een geteste tweepolige spanningsaanwijzer in plaats van een multimeter zou dit wel mogen`,
        `Alleen het instrument is verkeerd, want CAT II is te laag voor een groepenkast; de meterkast mag hij met zijn CO-certificaat wel zelf openen`,
        `Hij mag de verzegelde meterkast niet zelfstandig openen zonder elektrotechnische erkenning, en CAT II is bovendien de verkeerde categorie voor een groepenkast, die CAT III vraagt`,
        `Niets: de CO-certificering dekt zowel het zegelrecht als elke meetcategorie tot en met CAT III`
      ],
      goed: 2,
      uitleg: `Landelijk zegelrecht is voorbehouden aan bedrijven met een elektrotechnische erkenning; een BRL 6000-25-certificaat (CO) geeft dat recht niet, dus de meterkast mag hij niet zelfstandig openen. Bovendien hoort bij een groepenkast, de vaste installatie van het pand, meetcategorie CAT III en niet CAT II, dat voor via een wandcontactdoos gevoede apparaten is. Beide problemen staan los van elkaar: het ene lost het andere niet op, en geen enkel instrument maakt het zegelrecht overbodig.`
    },
    {
      vraag: `Een monteur heeft eerder voor een Vaillant ecoTEC plus VHR een losse OpenTherm-module gebruikt om een externe thermostaat aan te sluiten. Hij neemt aan dat dezelfde module ook op een ATAG i-Serie past, want beide toestellen spreken "hun eigen taal" in plaats van rechtstreeks OpenTherm. Klopt die aanname?`,
      opties: [
        `Ja, elke module die eBUS ondersteunt, ondersteunt automatisch ook de ATAG-bus`,
        `Nee, ATAG vraagt voor zijn eigen bus een eigen adapter (de OT-LPA): dat is een andere module dan de eBUS-module van Vaillant`,
        `Ja, zolang de jumper op de module wordt verwijderd, werkt hij op elk toestel met een eigen bus`,
        `Nee, want ATAG ondersteunt OpenTherm helemaal niet, ook niet met een adapter`
      ],
      goed: 1,
      uitleg: `Vaillant en ATAG spreken elk hun eigen taal, eBUS respectievelijk de ATAG-bus, en vragen daarom elk hun eigen adaptermodule: de eBUS-module van Vaillant past niet zomaar op een ATAG-toestel. Alleen de jumper verwijderen maakt een module niet universeel, en ATAG ondersteunt OpenTherm wel, alleen via de eigen OT-LPA-adapter. Raadpleeg daarom altijd het schema van dat specifieke toestel.`
    },
    {
      vraag: `Een Vaillant ecoTEC plus VHR communiceert standaard via eBUS. Wat is er nodig om er een externe OpenTherm-thermostaat op aan te sluiten?`,
      opties: [
        `Niets, OpenTherm en eBUS zijn hetzelfde protocol`,
        `Een firmware-update van de printplaat`,
        `Een losse OpenTherm-module, met de jumper op de grijze ProE-stekker verwijderd en aandacht voor de poling`,
        `Een extra aardaansluiting op de OpenTherm-klemmen, aangebracht naast de bestaande aardklem van de aansluitconnector`
      ],
      goed: 2,
      uitleg: `eBUS en OpenTherm zijn verschillende protocollen: Vaillant vraagt een losse OpenTherm-module, waarbij de jumper verwijderd wordt en op de poling gelet moet worden (ELK-22). Een firmware-update of een aardaansluiting lost dit niet op.`
    },
    {
      vraag: `Vaillant waarschuwt: "Netspanning aan verkeerde klemmen en stekkerklemmen kan de elektronica kapot maken." Waar slaat die waarschuwing vooral op?`,
      opties: [
        `Op het aansluiten van de eBUS- of thermostaatklemmen (laagspanning), niet op de reguliere 230 V-voedingsklemmen zelf`,
        `Alleen op de gasklep, en dan uitsluitend bij een gasblok dat elektronisch in plaats van pneumatisch wordt aangestuurd door de printplaat`,
        `Alleen op de rookgasafvoer`,
        `Op het vervangen van de sifon`
      ],
      goed: 0,
      uitleg: `De waarschuwing staat bij de elektrische aansluitingen en geldt in het bijzonder voor de laagspanningsklemmen (eBUS, thermostaat): 230 V op die klemmen zetten kan de printplaat onherstelbaar beschadigen (ELK-24). Gasklep, rookgasafvoer en sifon hebben hier niets mee te maken.`
    },
    {
      vraag: `Een Intergas Kombi Kompakt HRE staat met een aan/uit-thermostaat op grote afstand: de thermostaatleiding is lang en dun. Welke grens uit de handleiding is hier relevant?`,
      opties: [
        `De kabel mag niet langer zijn dan 125 meter, net als bij de eBUS-leiding van een Vaillant ecoTEC plus VHR`,
        `De thermostaat moet een eigen 230 V-voeding hebben`,
        `De kabel moet afgeschermd of getwist zijn`,
        `De maximale weerstand van de thermostaatleiding plus de kamerthermostaat samen is 15 ohm`
      ],
      goed: 3,
      uitleg: `Intergas noemt voor de aan/uit-thermostaatleiding een maximale weerstand van 15 ohm voor leiding plus thermostaat samen (ELK-21). De 125 meter en het verbod op afgeschermde/getwiste kabel horen bij de eBUS-leiding van Vaillant (ELK-23), een ander getal voor een ander protocol.`
    },
    {
      vraag: `Een monteur wil de weerstand van een NTC-sensor meten op een ketel die op een gewone wandcontactdoos is aangesloten. Zet het juiste instrument en de juiste volgorde op een rij.`,
      opties: [
        `Direct de weerstand meten met een multimeter van CAT II, zonder eerst aan te tonen dat het circuit spanningsloos is`,
        `Eerst met dezelfde multimeter (minstens CAT II) op de spanningsstand aantonen dat het circuit spanningsloos is, en dan pas op de weerstandsstand de NTC meten`,
        `Eerst de weerstand meten, en alleen als de waarde vreemd is alsnog spanningsloosheid aantonen`,
        `Een eenpolige spanningszoeker gebruiken en zonder verdere metingen aannemen dat de weerstand daarna klopt`
      ],
      goed: 1,
      uitleg: `Voor je weerstand meet, toon je met de spanningsstand van dezelfde multimeter aan dat het circuit spanningsloos is: dat voorkomt een onjuiste waarde en schade aan het instrument. Voor een op een wandcontactdoos aangesloten ketel is CAT II de juiste categorie. Meteen weerstand meten zonder die controle, de volgorde omdraaien, of alleen een eenpolige zoeker gebruiken tonen geen spanningsloosheid betrouwbaar aan.`
    },
    {
      vraag: `Voor je met een ohmmeter de weerstand van een NTC-sensor aan een ketel meet, wat doe je eerst?`,
      opties: [
        `Direct de weerstand meten, dat is de snelste manier om een storing te vinden`,
        `Eerst de sensor demonteren, enige tijd in warm water houden en dan pas met de ohmmeter de weerstand meten`,
        `Eerst spanning meten om aan te tonen dat het circuit spanningsloos is, pas daarna de ohmmeter gebruiken`,
        `Eerst de ketel op vollast laten draaien voor een stabiele waarde`
      ],
      goed: 2,
      uitleg: `Een weerstandsmeting op een circuit dat nog spanning voert, geeft een onjuiste waarde en kan het instrument beschadigen; daarom wordt eerst spanning gemeten en spanningsloosheid aangetoond (ELK-33, ELE-12), pas daarna de ohmstand gebruikt. Demonteren of laten draaien is voor een weerstandsmeting niet nodig en niet veilig.`
    }
  ],
  lessen: [

/* ------------------------------------------------------------------ 9.1 */
{
  id: 'm09l01',
  nr: '9.1',
  titel: 'Voeding, polariteit en aarding van een ketel',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt de voeding, polariteit en aarding van een ketel beoordelen, uitleggen waarom polariteit de ionisatie raakt, en weten wat je doet bij onbetrouwbare aarde.',
  videos: [
    { taal: 'nl', titel: 'HR cv-ketel vakkundig aansluiten: Remeha Avanta (Loodgieter Den Haag Stad)', yt: 'jbJ01IA36IU', duur: '±30 min, 2020' },
    { taal: 'nl', titel: 'HR cv-ketel vakkundig aansluiten: Intergas HRE (Loodgieter Den Haag Stad)', yt: 'XKPBB_75Af8', duur: '±15 min, 2021' },
    { taal: 'en', titel: 'Does it need earth bonding? (eFIXX, VK)', yt: 'umZx4WIm3lc', duur: '±6 min, 2026' }
  ],
  tekst: `
## Wat een ketel aan voeding nodig heeft

Een cv-ketel is een elektrisch toestel: hij heeft 230 V wisselspanning nodig voor de branderautomaat, de ventilator en de pomp, en een aarde om veilig te kunnen werken. Hoeveel stroom dat mag zijn, staat op het typeplaatje en in de handleiding, per merk en model verschillend. De Remeha Calenta heeft een hoofdzekering F1 van 6,3 AT en een zekering F2 van 2 AT; op het elektrisch schema van de ATAG i-Serie staan zekeringen van het type T 3,15 H. Dat zijn twee verschillende toestellen met twee verschillende waarden: je vervangt een zekering nooit uit het hoofd, maar met de waarde die voor dat specifieke toestel is voorgeschreven.

| Voorbeeld (merk en model) | Aansluiting | Zekering(en) |
|---|---|---|
| Remeha Calenta (2017) | Netsnoer met geaarde stekker | F1 6,3 AT, F2 2 AT |
| Intergas Kombi Kompakt HRE (2021) | Wandcontactdoos met randaarde, binnen 1 m van het toestel, goed bereikbaar | Niet in dit register vastgesteld |
| ATAG i-Serie (2018) | Netvoedingskabel, aarde apart aangeduid op het schema | 2 x T 3,15 H, 250 V |

Bij een vaste aansluiting (in plaats van een stekker) eist Remeha een dubbelpolige hoofdschakelaar met minstens 3 mm contactopening, en Intergas verplicht dat in vochtige ruimten. Dat getal van minstens 3 mm komt bij meerdere merken terug: het is geen toeval maar een vaste eis uit de norm voor de scheidingsinrichting.

## Waarom polariteit de ionisatiebewaking kan raken

Een ketel bewaakt zijn vlam met een klein elektrisch signaal: de ionisatiestroom. Dat werkt zo. De ionisatiepin die in de vlam steekt, is veel kleiner dan de ketelmassa of de brander waarop de wisselspanning van het bewakingscircuit staat. Door dat verschil in oppervlak stroomt de wisselspanning overwegend in één richting door de vlam (de vlam geleidt, omdat er vrije ionen in zitten), waardoor er een kleine, vrijwel gelijkgerichte stroom van een paar microampere ontstaat. Zonder een goede massa- of aardverbinding werkt die omzetting niet goed: het signaal daalt of valt weg, ook al brandt de vlam prima.

Of het verwisselen van fase en nul dat signaal ook beinvloedt, hangt af van hoe de fabrikant het bewakingscircuit heeft opgebouwd. Remeha vermeldt voor de Calenta en de Avanta uitdrukkelijk dat de ketel "niet fasegevoelig" is: fase en nul mogen verwisseld worden zonder dat de bewaking daardoor faalt. Dat de fabrikant dit apart vermeldt, is een aanwijzing dat er toestellen bestaan waarbij het wel uitmaakt, anders zou de mededeling overbodig zijn. Welke andere merken of modellen dat precies zijn, is in het feitenregister niet met een fabrikantbron vastgesteld: neem dus nooit een merk als voorbeeld van "wel fasegevoelig" zonder dat zelf in de handleiding te hebben gelezen.

!!! kern Een storing in de ionisatie is niet altijd de elektrode
Een laag ionisatiesignaal kan aan de elektrode liggen, maar ook aan de aarding of, bij een fasegevoelig toestel, aan de polariteit. Voor je een elektrode vervangt: controleer eerst de aarding en, als het toestel dat vraagt, de polariteit van de aansluiting.
!!!

## Aarding controleren: wat een multimeter wel en niet laat zien

Een monteur kan met een multimeter meten of er doorgang is (een weerstand dicht bij 0 ohm) tussen de aardrail in de meterkast en geaard metaal. Dat laat alleen zien dat er een verbinding IS, niet of de aardingsweerstand voldoet aan de norm. Een echte aardweerstandsmeting (bijvoorbeeld de 3-pinmethode) is een gespecialiseerde meting die niet met een gewone multimeter wordt gedaan. Storingstabellen van fabrikanten noemen bij een laag ionisatiesignaal daarom vaak "controleer de aarding" als actie, niet "meet de aardingsweerstand": de eerste controle (is er verbinding, zit de aardklem goed vast) kan een cv-monteur zelf doen.

!!! gevaar Ontbrekende of onbetrouwbare aarde
Zonder deugdelijke aarde kan de behuizing van een ketel bij een intern defect onder spanning komen te staan: dat is levensgevaarlijk. Is de aarde afwezig of naar jouw oordeel onbetrouwbaar, dan is dat een gebrek aan de elektrische installatie van het pand, niet aan de ketel. Herstel dat niet zelf: dat is werk voor een erkend elektrotechnisch bedrijf (zie de Cursus Elektrotechniek). Leg je bevinding vast en stel de ketel niet op die aarde in bedrijf.
!!!

## Praktijkgeval: laag signaal, vlam brandt gewoon

Een monteur meet aan een toestel na onderhoud een ionisatiestroom die duidelijk onder de grenswaarde van de fabrikant ligt, terwijl de vlam er stabiel bij staat. Voor het onderhoud had hij de stekker uit de wandcontactdoos genomen en er na het werk weer ingestoken, zonder op de stand te letten. Redeneer van elektrisch naar mechanisch: eerst de aarding controleren (zit de aardklem goed vast, is er doorgang), dan pas de elektrode beoordelen. Bij een toestel dat volgens de handleiding fasegevoelig kan zijn, is de stand van de stekker ook een logische controle voor je een onderdeel vervangt dat niet stuk is.

## Wat je vastlegt

Voeding, aarding en (als het toestel dat vraagt) polariteit horen bij de basiscontrole van elke ketel, voor je verder zoekt naar een mechanische oorzaak. De waarden zelf (zekering, aansluitwijze) komen uit de handleiding van dat merk en model.
`,
  checklist: [
    'Ik controleer de voeding en de zekeringwaarde altijd in de handleiding van het specifieke toestel, nooit uit het hoofd',
    'Ik kan uitleggen waarom de ionisatiebewaking een goede massa- of aardverbinding nodig heeft',
    'Ik weet dat niet elk toestel fasegevoelig is, en dat ik dat per model in de handleiding controleer',
    'Ik weet dat een doorgangsmeting met een multimeter geen aardweerstandsmeting vervangt',
    'Ik herken een onbetrouwbare aarde als een gebrek aan de installatie van het pand en verwijs door in plaats van het zelf te herstellen'
  ],
  quiz: [
    {
      vraag: `Waarom heeft de ionisatiebewaking van een ketel een goede massa- of aardverbinding nodig?`,
      opties: [
        `Omdat de brander zonder aarde minder gas toegevoerd krijgt en daardoor kouder brandt dan bedoeld`,
        `Omdat het bewakingscircuit de wisselspanning via het oppervlakteverschil tussen pin en massa omzet in een kleine, gelijkgerichte stroom`,
        `Omdat de rookgasafvoer bij een ontbrekende aarde eerder gaat condenseren in het onderste deel van de warmtewisselaar dan bij een goede aarde`,
        `Omdat de ventilator zonder aarde een lager toerental aanhoudt dan de startvolgorde vraagt`
      ],
      goed: 1,
      uitleg: `Flame rectification werkt doordat de ionisatiepin veel kleiner is dan de ketelmassa; die asymmetrie zet de wisselspanning overwegend in één richting om. Zonder goede massa- of aardreferentie werkt die omzetting niet goed, ook als de vlam prima brandt. Gasdruk, rookgasafvoer en ventilatortoerental veranderen daardoor niet.`
    },
    {
      vraag: `Remeha vermeldt voor de Calenta dat het toestel "niet fasegevoelig" is. Wat betekent dat concreet?`,
      opties: [
        `Dat de ionisatiebewaking van dit toestel zonder enige massa- of aardreferentie functioneert`,
        `Dat de ketel op elke netspanning tussen 110 en 230 volt zonder aanpassing blijft werken`,
        `Dat fase en nul verwisseld mogen worden zonder dat de ketel daardoor moet falen`,
        `Dat dit toestel als enige van de vier onderzochte merken geen aarde nodig heeft`
      ],
      goed: 2,
      uitleg: `"Niet fasegevoelig" betekent dat fase en nul verwisseld mogen worden zonder gevolgen voor de werking. Het toestel vraagt nog steeds de voorgeschreven voedingsspanning en aarding, en de ionisatiebewaking blijft een massareferentie gebruiken: dat zijn andere eisen dan polariteit.`
    },
    {
      vraag: `Een monteur meet met een multimeter bijna 0 ohm tussen de aardrail en een geaard leidingdeel. Mag hij daaruit concluderen dat de aarde van de woning helemaal in orde is?`,
      opties: [
        `Ja, een weerstand dicht bij 0 ohm bewijst altijd en zonder verdere meting dat de aardingsweerstand ruim binnen de norm van NEN 1010 valt`,
        `Nee, dit toont alleen aan dat er een verbinding is; of de aardingsweerstand aan de norm voldoet, vraagt een gespecialiseerde meting`,
        `Ja, maar alleen als de ketel daarna zonder enige storing op vollast start`,
        `Nee, een multimeter kan aan een cv-installatie helemaal niets over aarding laten zien`
      ],
      goed: 1,
      uitleg: `Een doorgangsmeting laat zien dat er verbinding is, niet of de aardingsweerstand voldoet: dat vraagt een echte aardweerstandsmeting (bijvoorbeeld de 3-pinmethode). Het is dus geen bewijs van een goede aarde, maar ook niet zonder waarde: het is een eerste, indicatieve controle.`
    },
    {
      vraag: `Bij een Remeha Calenta staat een hoofdzekering F1 van 6,3 AT voorgeschreven. Een monteur heeft alleen een zekering van 10 AT bij zich. Wat doet hij?`,
      opties: [
        `De 10 AT plaatsen, want een hogere waarde beschermt de bedrading altijd beter dan een lagere`,
        `Twee zekeringen van 5 AT in serie plaatsen als vervangende waarde voor de voorgeschreven 6,3 AT-zekering`,
        `De 10 AT toch plaatsen, zolang de ketel daarna niet binnen een paar minuten in storing valt`,
        `De juiste zekering (6,3 AT) ophalen of bestellen, en niet met een afwijkende waarde verder werken`
      ],
      goed: 3,
      uitleg: `De zekeringwaarde is per toestel door de fabrikant vastgelegd, afgestemd op de bedrading en de componenten. Een hogere waarde beveiligt niet meer wat hij moet beveiligen en kan bij een fout meer schade toelaten voor de zekering doorslaat. Twee zekeringen in serie is geen vervanging voor de voorgeschreven waarde.`
    },
    {
      vraag: `Wat is de juiste volgorde als een monteur na onderhoud een lage ionisatiestroom meet terwijl de vlam duidelijk zichtbaar en stabiel brandt?`,
      opties: [
        `De gasdruk verder verhogen tot de gemeten ionisatiestroom weer op de normale waarde uitkomt`,
        `Direct de elektrode vervangen, want een lage ionisatiestroom bij ieder toestel altijd de meest voorkomende oorzaak is`,
        `Eerst de aarding en, als het toestel dat vraagt, de polariteit controleren, pas daarna een onderdeel vervangen`,
        `Het toestel op vollast laten doorbranden zodat de gemeten stroom vanzelf verder stijgt`
      ],
      goed: 2,
      uitleg: `Een laag signaal met een gewoon brandende vlam wijst eerder op de aarding of, bij een fasegevoelig toestel, de polariteit dan op een defecte elektrode. Eerst die twee controleren voorkomt dat je een onderdeel vervangt dat niet stuk is. Gasdruk of hard laten branden verandert niets aan een elektrisch signaal.`
    },
    {
      vraag: `Waarom is het feit dat Remeha voor de Calenta uitdrukkelijk vermeldt dat het toestel "niet fasegevoelig" is, een aanwijzing dat er andere toestellen bestaan die dat wel zijn?`,
      opties: [
        `Omdat elk toestel zonder een vergelijkbare vermelding in de handleiding automatisch fasegevoelig moet zijn`,
        `Omdat een fabrikant een eigenschap doorgaans alleen vermeldt als het onderscheid met andere toestellen relevant is`,
        `Omdat dit een verplichte vermelding is die de BRL 6000-25 voor elk gasverbrandingstoestel expliciet voorschrijft aan de fabrikant`,
        `Omdat dit uit niets volgt en de vermelding zuiver een marketingzin zonder technische betekenis is`
      ],
      goed: 1,
      uitleg: `Een fabrikant vermeldt een eigenschap doorgaans omdat die onderscheidend is; bij een universeel gegeven zou de vermelding geen functie hebben. Dit is een redenering, geen garantie: welke andere toestellen wel fasegevoelig zijn, staat als open vraag in het register en moet per model in de handleiding worden nagelezen, niet aangenomen.`
    }
  ],
  kaarten: [
    { voor: `Waarom heeft de ionisatiebewaking een goede massa- of aardverbinding nodig?`, achter: `De wisselspanning van het bewakingscircuit wordt door het verschil in oppervlak tussen ionisatiepin en massa omgezet in een kleine gelijkstroom; zonder goede referentie werkt die omzetting niet goed.` },
    { voor: `Wat betekent "niet fasegevoelig" bij een ketel (bijvoorbeeld Remeha Calenta)?`, achter: `Fase en nul mogen verwisseld worden zonder dat de ketel daardoor faalt.` },
    { voor: `Wat laat een doorgangsmeting met een multimeter over de aarde wel en niet zien?`, achter: `Wel: dat er verbinding is. Niet: of de aardingsweerstand aan de norm voldoet. Dat vraagt een gespecialiseerde meting.` },
    { voor: `Wat doe je als je de aarde van een woning niet vertrouwt?`, achter: `Niet zelf herstellen: dat is een gebrek aan de vaste installatie. Bevinding vastleggen, doorverwijzen naar een erkend elektrotechnisch bedrijf, en de ketel niet op die aarde in bedrijf stellen.` },
    { voor: `Waar staat de voorgeschreven zekeringwaarde van een ketel?`, achter: `In de handleiding van dat specifieke merk en model (bijvoorbeeld Remeha Calenta F1 6,3 AT, F2 2 AT; ATAG i-Serie T 3,15 H).` },
    { voor: `Wat eist Intergas voor de wandcontactdoos van de Kombi Kompakt HRE?`, achter: `Randaarde, binnen 1 meter van het toestel en goed bereikbaar.` },
    { voor: `Wat is het eerste dat je controleert bij een lage ionisatiestroom en een normaal brandende vlam?`, achter: `De aarding, en bij een fasegevoelig toestel ook de polariteit, voordat je een onderdeel vervangt.` }
  ],
  bronnen: ['ELE-01', 'ELE-02', 'ELE-03', 'ELE-04', 'ELK-08', 'ELK-09', 'ELK-10', 'ELK-11', 'ELK-12', 'ELK-14', 'ELK-15', 'ELK-16']
},

/* ------------------------------------------------------------------ 9.2 */
{
  id: 'm09l02',
  nr: '9.2',
  titel: 'Veilig werken: spanningsloos maken en meten',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt een ketel veilig spanningsloos maken, dat aantonen, en uitleggen wat je niet zelf aan de vaste installatie doet.',
  videos: [
    { taal: 'nl', titel: 'NEN 3140, de vijf stappen voor spanningsloos werken (Smit Opleidingen)', yt: 'tzIDCGoHgLM', duur: '±6 min, 2026' },
    { taal: 'nl', titel: 'Spanningsloosheid aantonen: zo doe je dat (Levent Explains)', yt: 'K62Hs4WSJck', duur: '±9 min, 2025' },
    { taal: 'en', titel: 'Electrical safe isolation procedure, single phase (Residual Electrical, VK)', yt: 'opHtgbcicTk', duur: '±8 min, 2022' }
  ],
  tekst: `
## De hoofdregel: spanningsloos, niet onder spanning

Artikel 3.5 van het Arbeidsomstandighedenbesluit is duidelijk over de volgorde: elektrotechnische werkzaamheden die gevaar kunnen opleveren, worden door deskundige, voldoend onderrichte en bevoegde mensen gedaan (lid 1), en werk aan of bij een elektrische installatie gebeurt alleen als die installatie spanningsloos is (lid 3). Onder spanning werken mag bij uitzondering, maar alleen bij laagspanning en alleen als de dringende noodzaak daarvan is aangetoond en de installatie daarvoor geschikt is (lid 5). Voor het aansluiten van een thermostaat, het vervangen van een sensor of het meten aan een printplaat is die dringende noodzaak er niet: dat kan en moet spanningsloos.

## Vijf stappen, in de praktijk drie die je zelf doet

NEN 3140 beschrijft het spanningsloos werken in vijf stappen: scheiden, beveiligen tegen herinschakelen, aantonen dat de installatie spanningsloos is, aarden en kortsluiten waar nodig (vooral bij hogere spanning), en aangrenzende actieve delen afschermen. Voor een cv-monteur die aan een ketel werkt, zijn de eerste drie stappen de dagelijkse praktijk:

1. **Scheiden.** De stekker uit de wandcontactdoos, of bij een vaste aansluiting de hoofdschakelaar of scheidingsinrichting uitschakelen.
2. **Beveiligen tegen herinschakelen.** Zorg dat niemand de stekker terugsteekt of de schakelaar omzet terwijl je werkt; bij een vaste aansluiting kan dat een vergrendeling of een duidelijk bord zijn.
3. **Aantonen dat het spanningsloos is.** Met een tweepolige spanningsaanwijzer (nooit een eenpolige spanningszoeker), die je vlak voor en na gebruik op een bekende spanningsbron test, meet je op alle geleiders (fase-nul, fase-aarde).

!!! kern Meten is iets anders dan aantonen dat er geen spanning is
Een spanning meten en de afwezigheid van spanning aantonen zijn twee verschillende dingen. Een gewone multimeter kan door een hoge ingangsimpedantie een "spookspanning" aanwijzen op een ader die in werkelijkheid spanningsloos is (capacitieve koppeling). Gebruik daarom een instrument dat daarvoor geschikt is, en test het apparaat zelf altijd eerst op een bekende spanningsbron.
!!!

!!! gevaar Werken onder spanning is de uitzondering, niet de gewoonte
Werk aan of bij een elektrische installatie die niet spanningsloos is, kan een elektrische schok of een vlamboog veroorzaken en is bij een cv-ketel vrijwel nooit nodig. De wettelijke uitzondering (lid 5) is bedoeld voor situaties met een aangetoonde dringende noodzaak, niet voor gewoon onderhoud of een thermostaat aansluiten. Twijfel je of iets echt spanningsloos gedaan kan worden: ga ervan uit dat het kan, en zoek uit hoe.
!!!

## Wat je niet zelf doet aan de vaste installatie

Een ketel aansluiten op een bestaande, deugdelijke voeding hoort bij het werk van een cv-monteur met het Bewijs van Vakmanschap CO. Werk aan de meterkast, de groepenkast of de vaste elektrische installatie van het pand is dat niet. Dat volgt uit hoe InstallQ zijn erkenningen heeft ingedeeld: sinds 1 mei 2026 geldt het landelijk zegelrecht, waarbij alleen bedrijven met een elektrotechnische erkenning (elektrotechnisch installateur, of een elektrotechnisch inspectiebedrijf voor laagspanningsinstallaties) een door de netbeheerder verzegelde aansluiting of meterkast tot 3 x 80 A mogen openen en opnieuw verzegelen. Een BRL 6000-25-certificaat (de CO-certificering) geeft dat recht niet: het is een andere erkenning, voor een ander vakgebied.

Vaillant schrijft voor de ecoTEC plus VHR bijvoorbeeld dat de elektrische installatie alleen door een elektromonteur mag worden uitgevoerd. Dat is een fabrikantvoorschrift, geen volledige wettelijke afbakening, maar het wijst in dezelfde richting als het zegelrecht: waar het om de vaste installatie van het pand gaat, is dat een ander vakgebied dan het aansluiten van het toestel zelf.

## Praktijkgeval: een print vervangen bij een storing

Een ketel geeft een printstoring. De monteur wil de printplaat vervangen. Voor hij de kap opent: stekker eruit (scheiden), zorgen dat niemand die terugsteekt terwijl hij werkt (beveiligen), en met een geteste tweepolige spanningsaanwijzer aantonen dat de aansluitklemmen echt spanningsloos zijn (aantonen). Pas dan opent hij de behuizing en wisselt hij de print. Blijkt tijdens het werk dat de storing eigenlijk in de vaste bedrading van het pand zit (bijvoorbeeld een defecte wandcontactdoos), dan is dat een reden om door te verwijzen naar een elektrotechnisch bedrijf, niet om dat er zelf bij te repareren.

## Wat je vastlegt

Spanningsloos maken en aantonen is bij elk elektrisch werk aan een ketel de eerste stap, geen uitzondering die je overslaat als het "toch wel meevalt". Wat aan de vaste installatie van het pand hangt, hoort bij een ander vakgebied.
`,
  checklist: [
    'Ik weet dat spanningsloos werken de wettelijke hoofdregel is en onder spanning werken alleen bij uitzondering, met aangetoonde noodzaak',
    'Ik kan de eerste drie stappen van NEN 3140 (scheiden, beveiligen, aantonen) toepassen bij een ketel',
    'Ik gebruik voor het aantonen van spanningsloosheid een geteste tweepolige spanningsaanwijzer, geen eenpolige zoeker',
    'Ik weet dat werk aan de meterkast of de vaste installatie van het pand een aparte elektrotechnische erkenning vraagt en geen deel is van mijn CO-certificering'
  ],
  quiz: [
    {
      vraag: `Wat is volgens artikel 3.5 van het Arbeidsomstandighedenbesluit de hoofdregel voor werk aan of bij een elektrische installatie?`,
      opties: [
        `Dat de wet dit niet regelt en dat alleen de fabrikant van het toestel dit mag bepalen`,
        `Werk alleen als de installatie spanningsloos is; onder spanning werken mag alleen bij een aangetoonde uitzondering`,
        `Dat onder spanning werken altijd is toegestaan zolang het om laagspanning gaat`,
        `Dat elke elektrotechnische handeling aan een ketel vooraf altijd schriftelijk moet worden goedgekeurd door de opdrachtgever zelf`
      ],
      goed: 1,
      uitleg: `Lid 3 stelt spanningsloos werken als hoofdregel. Lid 5 laat een uitzondering voor laagspanning toe, maar alleen bij aangetoonde dringende noodzaak, niet als standaardwerkwijze. De wet regelt dit wel degelijk, los van wat een opdrachtgever schriftelijk goedkeurt.`
    },
    {
      vraag: `Welk instrument gebruik je om aan te tonen dat een ketel spanningsloos is, en hoe?`,
      opties: [
        `Een tweepolige spanningsaanwijzer, vlak voor en na gebruik getest op een bekende spanningsbron, gemeten op alle geleiders`,
        `Een eenpolige spanningszoeker, één keer kort tegen de behuizing van de ketel gehouden`,
        `Een gewone multimeter, zonder die vooraf op een bekende spanningsbron te testen`,
        `Het display van de ketel: staat er na het indrukken van de resetknop geen tekst meer op, dan is het toestel volledig spanningsloos`
      ],
      goed: 0,
      uitleg: `NEN 3140 vraagt een tweepolige spanningsaanwijzer, zelf eerst getest, gemeten op alle geleiders (fase-nul, fase-aarde). Een eenpolige zoeker, een ongeteste multimeter of het display van de ketel tonen dit niet betrouwbaar aan.`
    },
    {
      vraag: `Waarom kan een gewone multimeter met hoge ingangsimpedantie een misleidend beeld geven bij het aantonen van spanningsloosheid?`,
      opties: [
        `Omdat hij door capacitieve koppeling een "spookspanning" kan aanwijzen op een ader die in werkelijkheid spanningsloos is`,
        `Omdat hij bij elke meting standaard 230 V aanwijst, ongeacht de werkelijke spanning op de ader`,
        `Omdat een gewone multimeter principieel geen spanning van 0 V kan weergeven op het display`,
        `Omdat hij uitsluitend wisselspanning kan meten en daardoor helemaal geen enkele vorm van gelijkspanning kan aantonen op een ader`
      ],
      goed: 0,
      uitleg: `Een spookspanning ontstaat door capacitieve koppeling: de meter wijst dan een spanning aan die er in werkelijkheid niet is, of nauwelijks stroom kan leveren. Een instrument met een lage-impedantiestand voorkomt dit. De andere opties beschrijven geen bestaand meetprobleem.`
    },
    {
      vraag: `Mag een cv-monteur met alleen het Bewijs van Vakmanschap CO een door de netbeheerder verzegelde meterkast zelfstandig openen om een groepenkast van 3 x 63 A te bekijken?`,
      opties: [
        `Ja, want dat valt volgens hem automatisch binnen elke CO-certificering van het bedrijf, zonder enige aparte elektrotechnische erkenning nodig`,
        `Nee, dat mag helemaal niemand doen, ook een erkend elektrotechnisch bedrijf niet`,
        `Ja, maar uitsluitend als de bewoner daarvoor mondeling toestemming geeft`,
        `Nee, landelijk zegelrecht vraagt een aparte elektrotechnische erkenning; een BRL 6000-25-certificaat is daarvoor niet genoeg`
      ],
      goed: 3,
      uitleg: `Zegelrecht hoort bij een elektrotechnische erkenning (elektrotechnisch installateur of inspectiebedrijf), niet bij de CO-certificering. Toestemming van de bewoner verandert niets aan die erkenningseis, en elektrotechnische bedrijven met de juiste erkenning mogen dit wel.`
    },
    {
      vraag: `Een monteur ontdekt tijdens het vervangen van een printplaat dat de storing eigenlijk in de vaste bedrading van het pand zit (een defecte wandcontactdoos). Wat doet hij?`,
      opties: [
        `Een verlengsnoer plaatsen als permanente oplossing voor de defecte wandcontactdoos`,
        `De klacht over de wandcontactdoos negeren en alleen de printplaat vervangen`,
        `De bevinding melden en doorverwijzen naar een erkend elektrotechnisch bedrijf, in plaats van zelf de vaste installatie te repareren`,
        `De wandcontactdoos zelf vervangen, want dat hoort volgens hem gewoon bij het oplossen van deze elektrische storing aan de ketel zelf`
      ],
      goed: 2,
      uitleg: `Werk aan de vaste installatie van het pand valt buiten de CO-certificering en vraagt een elektrotechnische erkenning. De juiste stap is doorverwijzen, niet zelf repareren en niet negeren. Een verlengsnoer is geen structurele oplossing en ook geen vervanging van deugdelijke bedrading.`
    }
  ],
  kaarten: [
    { voor: `Wat is de wettelijke hoofdregel voor werk aan een elektrische installatie (art. 3.5 lid 3 Arbobesluit)?`, achter: `De installatie is spanningsloos. Onder spanning werken mag alleen bij uitzondering (lid 5), met aangetoonde dringende noodzaak.` },
    { voor: `Wat zijn de eerste drie stappen van NEN 3140 die je bij een ketel zelf doet?`, achter: `Scheiden, beveiligen tegen herinschakelen, aantonen dat het spanningsloos is.` },
    { voor: `Met welk instrument toon je aan dat een circuit spanningsloos is?`, achter: `Een tweepolige spanningsaanwijzer, vlak voor en na gebruik getest op een bekende spanningsbron. Nooit een eenpolige spanningszoeker.` },
    { voor: `Wat is een "spookspanning" (ghost voltage)?`, achter: `Een spanning die een hoge-impedantiemeter door capacitieve koppeling aanwijst op een ader die in werkelijkheid spanningsloos is.` },
    { voor: `Mag een BRL 6000-25-certificaat (CO-certificering) een verzegelde meterkast openen?`, achter: `Nee. Landelijk zegelrecht vraagt een aparte elektrotechnische erkenning van InstallQ.` },
    { voor: `Wat doe je als een storing eigenlijk in de vaste elektrische installatie van het pand blijkt te zitten?`, achter: `Vastleggen en doorverwijzen naar een erkend elektrotechnisch bedrijf, niet zelf repareren.` }
  ],
  bronnen: ['ELK-01', 'ELK-02', 'ELK-03', 'ELK-05', 'ELK-06', 'ELE-05', 'ELE-06', 'ELE-11', 'ELE-12', 'ELK-13', 'ELK-33', 'ELK-34']
},

/* ------------------------------------------------------------------ 9.3 */
{
  id: 'm09l03',
  nr: '9.3',
  titel: 'Thermostaatbedrading en laagspanning',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt aan/uit- en OpenTherm-bedrading van elkaar onderscheiden, per merk de juiste klemmen aansluiten, en uitleggen wat er misgaat bij een verkeerde aansluiting.',
  videos: [
    { taal: 'nl', titel: 'Slimme thermostaat aansluiten via OpenTherm: waarom een module nodig is (Leon Tindemans)', yt: 'kbBcI5nA9HA', duur: '±3 min, 2019' },
    { taal: 'nl', titel: 'Draadloze OpenTherm-ketelmodule monteren en aansluiten (Honeywell Home)', yt: 'NP9OxRCzIF4', duur: '±2 min, 2016' },
    { taal: 'en', titel: 'Why wire a boiler up OpenTherm instead of 240 volt switching (Baxi, VK)', yt: 'nTCOmWXnthc', duur: '±5 min, 2020' }
  ],
  tekst: `
## Aan/uit en OpenTherm: hetzelfde doel, andere bedrading

Les 6.1 legt uit wat OpenTherm als protocol technisch doet: een thermostaat die doorgeeft hoe ver de ketel moet bijstellen, in plaats van alleen "aan" of "uit" te roepen. Deze les gaat over de fysieke kant: welke draden op welke klemmen, en wat er misgaat als je het verkeerd aansluit. Dat verschilt sterk per merk, en dat is precies waarom je nooit uit het hoofd aansluit.

Bij de Remeha Calenta zitten een OpenTherm-regelaar en een 2-draads aan/uit-kamerthermostaat op dezelfde klemmen "On/off-OT" van de aansluitconnector: de ketel herkent zelf welk van de twee er hangt. Bij de Intergas Kombi Kompakt HRE heeft elke functie juist een eigen klemmenpaar op connector X4: aan/uit op klem 6-7, de modulerende OpenTherm-thermostaat op klem 11-12, de buitentemperatuurvoeler op klem 8-9.

| Merk en model (voorbeeld) | Aan/uit-thermostaat | OpenTherm-thermostaat | Bijzonderheid |
|---|---|---|---|
| Remeha Calenta | Klemmen On/off-OT | Klemmen On/off-OT (dezelfde) | Ondersteunt ook een power-stealing-thermostaat op diezelfde klemmen |
| Intergas Kombi Kompakt HRE | Connector X4, klem 6-7 | Connector X4, klem 11-12 | Buitenvoeler op klem 8-9, apart van de thermostaat |
| Vaillant ecoTEC plus VHR | 24 V RT-aansluiting (X100), apart van de bus | Alleen via een losse OpenTherm-module | Toestel spreekt van zichzelf eBUS, niet OpenTherm |
| ATAG i-Serie | Potentiaalvrij contact op het aansluitblok | Alleen via een OT-LPA-adapter op de bus | Aansluitblok is gemarkeerd "GEEN 230 V AANSLUITEN" |

!!! kern Vier merken, vier klemmenschema's
Waar een OpenTherm-thermostaat op moet, is bij Remeha en Intergas al verschillend, en bij Vaillant en ATAG spreekt de ketel van zichzelf een eigen taal (eBUS of ATAG-bus) waarvoor een los adaptermodule nodig is. Raadpleeg daarom altijd het aansluitschema van het specifieke toestel, en ga nooit uit van "dat werkte bij het vorige toestel ook zo".
!!!

## Wat er misgaat bij een verkeerde aansluiting

Een paar concrete gevallen uit de handleidingen, per merk verschillend:

- **Remeha Calenta:** bij een aan/uit-thermostaat mag een vorstthermostaat parallel op de klemmen On/off-OT worden aangesloten; bij een OpenTherm-thermostaat is dat op diezelfde klemmen niet toegestaan, en loopt de vorstbeveiliging via een buitensensor. Wie een vorstthermostaat gewoon bijplaatst naast een OpenTherm-regelaar, krijgt dus geen werkende extra beveiliging.
- **Remeha Calenta:** een kamerthermostaat met een anticipatie-element moet met parameter p5 worden omgezet; zonder die instelling regelt de ketel niet zoals de thermostaat verwacht.
- **Intergas Kombi Kompakt HRE:** de maximale weerstand van thermostaatleiding plus thermostaat samen is 15 ohm. Een lange, dunne leiding of een slechte klemverbinding kan dat overschrijden, met een onbetrouwbare warmtevraag als gevolg.
- **Vaillant ecoTEC plus VHR:** sluit nooit netspanning aan op de klemmen eBUS (+/-); de fabrikant waarschuwt letterlijk dat netspanning op de verkeerde klemmen de elektronica kapot kan maken. Bij een externe OpenTherm-thermostaat is een losse OpenTherm-module nodig, waarbij de jumper op de module verwijderd wordt en op de poling gelet moet worden.
- **Vaillant ecoTEC plus VHR:** storingscode F.049 betekent een kortsluiting op de eBUS-aansluiting, of dat twee actieve eBUS-bronnen een verwisselde polariteit hebben.
- **ATAG i-Serie:** een OpenTherm-thermostaat rechtstreeks op de bus-positie aansluiten werkt niet zonder de OT-LPA-adapter; het aansluitblok is uitdrukkelijk gemarkeerd dat er geen 230 V op mag.

## De eBUS-leiding van Vaillant: een concreet voorbeeld van kabeleisen

Waar een fabrikant zelf kabeleisen stelt, is dat de moeite van het naleven waard, ook al lijkt het bijkomstig. Vaillant vraagt voor de eBUS-leiding van de ecoTEC plus VHR een 2-aderige kabel, bijvoorbeeld het type NYM of H05VV, en waarschuwt uitdrukkelijk: nooit afgeschermde of getwiste kabel gebruiken. De maximale lengte is 125 m, met een aderdiameter van 0,75 mm2 tot 50 m totale lengte en 1,5 mm2 vanaf 50 m, en houd minstens 120 mm afstand tot netvoedingskabels om storing te voorkomen.

Dit is een ander getal dan wat je soms over OpenTherm zelf leest (bijvoorbeeld "maximaal 50 m", een zwakke bron): het gaat hier om de eBUS-leiding van dit specifieke merk, niet om het OpenTherm-protocol in het algemeen. Verwar de twee niet.

## Praktijkgeval: geen modulatie na het plaatsen van een nieuwe thermostaat

Een klant heeft zelf een OpenTherm-thermostaat gekocht en aangesloten op een Intergas Kombi Kompakt HRE, maar de ketel moduleert niet: hij gaat gewoon aan en uit. Bij controle blijkt de thermostaat op klem 6-7 aangesloten, de klemmen voor de aan/uit-functie, in plaats van klem 11-12. De thermostaat werkt daardoor als een gewone aan/uit-schakelaar: hij communiceert niet, want hij hangt op de verkeerde functie. De oplossing is de bedrading naar klem 11-12 te verplaatsen, niet de thermostaat te vervangen.

## Wat je vastlegt

De vraag is niet "is dit aan/uit of OpenTherm", maar "welke klemmen horen daar bij dit merk en model". Bij Vaillant en ATAG komt daar nog bij: welk adaptermodule is nodig, want het toestel spreekt van zichzelf een andere taal.
`,
  checklist: [
    'Ik raadpleeg voor elk toestel het eigen aansluitschema in plaats van uit te gaan van een vorig toestel',
    'Ik weet dat een aan/uit- en een OpenTherm-thermostaat bij sommige merken dezelfde klemmen delen en bij andere merken eigen klemmen hebben',
    'Ik weet dat Vaillant en ATAG een los adaptermodule nodig hebben om een OpenTherm-thermostaat aan te sluiten',
    'Ik sluit nooit netspanning aan op een laagspanningsklem (eBUS, thermostaat, buitensensor)',
    'Ik controleer bij een niet-modulerende ketel eerst of de thermostaat op de juiste klemmen zit voor ik een onderdeel vervang'
  ],
  quiz: [
    {
      vraag: `Bij een Remeha Calenta zitten een OpenTherm-regelaar en een aan/uit-thermostaat op dezelfde klemmen. Bij een Intergas Kombi Kompakt HRE heeft elke functie een eigen klemmenpaar. Wat volgt daaruit?`,
      opties: [
        `Dat een aan/uit-thermostaat op een Intergas Kombi Kompakt HRE niet werkt`,
        `Dat Remeha bij de Calenta helemaal geen buitensensor kan gebruiken naast een aangesloten aan/uit-thermostaat op dezelfde klemmen`,
        `Dat Intergas met deze indeling laat zien dat het toestel OpenTherm niet ondersteunt`,
        `Dat het klemmenschema per merk en model verschilt, dus je raadpleegt altijd het schema van dat specifieke toestel`
      ],
      goed: 3,
      uitleg: `Remeha deelt bij de Calenta dezelfde klemmen voor beide protocollen, Intergas geeft elke functie een eigen klemmenpaar. Beide toestellen ondersteunen wél OpenTherm, een buitensensor en aan/uit: alleen de fysieke klemmen verschillen.`
    },
    {
      vraag: `Een klant heeft een OpenTherm-thermostaat op een Intergas Kombi Kompakt HRE aangesloten op klem 6-7 in plaats van 11-12. Wat is het gevolg?`,
      opties: [
        `De thermostaat werkt als een gewone aan/uit-schakelaar en de ketel moduleert daardoor niet`,
        `De ketel raakt door deze verwisseling van klemmen onherstelbaar beschadigd aan de printplaat van de besturingsautomaat`,
        `De ketel valt vrijwel direct in een vergrendelende storing en start helemaal niet meer`,
        `Er verandert feitelijk niets, want beide klemmenparen sturen dezelfde functie aan`
      ],
      goed: 0,
      uitleg: `Klem 6-7 is bij dit toestel de aan/uit-functie, klem 11-12 de OpenTherm-functie. Op de verkeerde klemmen werkt de thermostaat als een simpele schakelaar: geen storing, geen schade, maar ook geen modulatie.`
    },
    {
      vraag: `Waarom is voor een externe OpenTherm-thermostaat op een Vaillant ecoTEC plus VHR een losse OpenTherm-module nodig?`,
      opties: [
        `Omdat de ketel zonder die module niet meer op aan/uit kan overschakelen`,
        `Omdat het toestel van zichzelf via het eigen eBUS-protocol communiceert, niet via OpenTherm`,
        `Omdat OpenTherm-thermostaten bij dit merk wettelijk niet zijn toegestaan`,
        `Omdat de module nodig is om de dynamische gasdruk van het toestel correct te blijven regelen tijdens bedrijf`
      ],
      goed: 1,
      uitleg: `Vaillant gebruikt van zichzelf het eigen eBUS-protocol; OpenTherm werkt pas via een adaptermodule. Er is geen verbod, geen gevolg voor aan/uit-schakelen en geen relatie met de gasdruk.`
    },
    {
      vraag: `Vaillant waarschuwt uitdrukkelijk: sluit nooit netspanning aan op de klemmen eBUS (+/-). Wat is de reden voor die waarschuwing?`,
      opties: [
        `Het is bedoeld als esthetisch advies voor een opgeruimde bedrading achter de voormantel`,
        `Netspanning op die klemmen zou het jaarlijkse energieverbruik van de ketel verhogen`,
        `De waarschuwing is alleen relevant bij een defecte gasklep, niet bij de eBUS-aansluiting van het toestel zelf`,
        `Netspanning op de verkeerde klemmen kan de elektronica van de printplaat onherstelbaar beschadigen`
      ],
      goed: 3,
      uitleg: `De waarschuwing gaat over schade aan de elektronica: laagspanningsklemmen zijn niet ontworpen voor 230 V. Het heeft niets met esthetiek, energieverbruik of de gasklep te maken.`
    },
    {
      vraag: `Een monteur wil de eBUS-leiding van een Vaillant ecoTEC plus VHR trekken over 60 m, langs een net-voedingskabel. Wat is volgens de handleiding correct?`,
      opties: [
        `Getwiste kabel van 0,5 mm2 gebruiken, die is bij elke lengte tot 125 m goed genoeg`,
        `Afgeschermde kabel gebruiken en die zo dicht mogelijk langs de netkabel leggen voor stabiliteit`,
        `Nooit afgeschermde of getwiste kabel gebruiken, minimaal 120 mm afstand houden tot de netkabel, en bij 60 m een aderdiameter van 1,5 mm2 aanhouden`,
        `De maximale lengte van 125 meter mag hier gewoon genegeerd worden, zolang de gekozen aderdiameter van de kabel maar ruim voldoende dik is voor deze afstand`
      ],
      goed: 2,
      uitleg: `Vaillant vraagt uitdrukkelijk geen afgeschermde of getwiste kabel, minstens 120 mm afstand tot netvoedingskabels, en vanaf 50 m totale lengte een aderdiameter van 1,5 mm2 (tot 125 m maximaal). De andere opties gaan tegen die eisen in.`
    },
    {
      vraag: `Bij een Remeha Calenta wil een monteur een vorstthermostaat bijplaatsen naast een al aangesloten OpenTherm-regelaar, parallel op de klemmen On/off-OT. Wat is het gevolg?`,
      opties: [
        `Er gebeurt niets zichtbaars, want de vorstthermostaat en de OpenTherm-regelaar werken op een andere frequentie`,
        `De OpenTherm-regelaar valt door deze extra aansluiting vanzelf buiten bedrijf`,
        `Dat is bij een OpenTherm-thermostaat op die klemmen niet toegestaan; de vorstbeveiliging loopt dan via een buitensensor`,
        `De vorstbeveiliging van de installatie wordt door deze dubbele aansluiting op dezelfde klemmen juist nog extra betrouwbaar`
      ],
      goed: 2,
      uitleg: `Bij Remeha is een parallelle vorstthermostaat op de On/off-OT-klemmen alleen bedoeld voor de aan/uit-situatie; bij OpenTherm loopt de vorstbeveiliging via een buitensensor. Er is geen "dubbele beveiliging" en geen effect op de OpenTherm-regelaar zelf, alleen een niet-werkende extra aansluiting.`
    }
  ],
  kaarten: [
    { voor: `Op welke klemmen sluit je bij een Remeha Calenta een aan/uit- of een OpenTherm-thermostaat aan?`, achter: `Dezelfde klemmen: On/off-OT van de aansluitconnector. De ketel herkent zelf welk protocol er hangt.` },
    { voor: `Op welke klemmen van connector X4 sluit je bij een Intergas Kombi Kompakt HRE een OpenTherm-thermostaat aan?`, achter: `Klem 11-12. Klem 6-7 is voor de aan/uit-thermostaat, klem 8-9 voor de buitenvoeler.` },
    { voor: `Wat heb je nodig om een externe OpenTherm-thermostaat op een Vaillant ecoTEC plus VHR aan te sluiten?`, achter: `Een losse OpenTherm-module (het toestel spreekt van zichzelf eBUS), met de jumper verwijderd en aandacht voor de poling.` },
    { voor: `Wat betekent storingscode F.049 bij een Vaillant ecoTEC plus VHR?`, achter: `Kortsluiting op de eBUS-aansluiting, of twee actieve eBUS-bronnen met verwisselde polariteit.` },
    { voor: `Wat is de maximale weerstand van thermostaatleiding plus thermostaat bij een aan/uit-aansluiting op een Intergas Kombi Kompakt HRE?`, achter: `15 ohm samen.` },
    { voor: `Welke kabel mag je NIET gebruiken voor de eBUS-leiding van een Vaillant ecoTEC plus VHR?`, achter: `Afgeschermde of getwiste kabel. Gebruik een gewone 2-aderige kabel, bijvoorbeeld NYM of H05VV.` },
    { voor: `Wat is nodig om een OpenTherm-thermostaat op een ATAG i-Serie aan te sluiten?`, achter: `Een OT-LPA (OpenTherm Low Power Adapter) tussen de stuurautomaat en de thermostaat.` },
    { voor: `Wat gebeurt er als je een OpenTherm-thermostaat bij Intergas op de aan/uit-klemmen aansluit in plaats van de OpenTherm-klemmen?`, achter: `Hij werkt als gewone aan/uit-schakelaar: geen storing, maar ook geen modulatie.` }
  ],
  bronnen: ['RGL-01', 'RGL-03', 'REG-08', 'ELK-17', 'ELK-18', 'ELK-19', 'ELK-20', 'ELK-21', 'ELK-22', 'ELK-23', 'ELK-24', 'ELK-25', 'ELK-26', 'ELK-27', 'ELK-28']
},

/* ------------------------------------------------------------------ 9.4 */
{
  id: 'm09l04',
  nr: '9.4',
  titel: 'Elektrische metingen aan een ketel',
  duur: 25,
  type: 'les',
  leerdoel: 'Je kunt met een multimeter van de juiste meetcategorie de spanning, doorgang, NTC-weerstand en ionisatiestroom van een ketel meten.',
  videos: [
    { taal: 'nl', titel: 'Storing zoeken met een voltmeter volgens de V4-methode (GijsOnderwijs)', yt: 'GQDbZNzJ5Wg', duur: '±7 min, 2026' },
    { taal: 'nl', titel: 'Installatie testen op werking en kortsluiting (Techniek@HOME)', yt: 'dbvahEksxbQ', duur: '±6 min, 2021' },
    { taal: 'en', titel: 'What are CAT ratings and why do they matter? (Fluke)', yt: 'MBui0WnydW0', duur: '±2 min, 2020' }
  ],
  tekst: `
## Welke metingen horen bij een ketel

De onderhoudslijst van de BRL 6000-25 noemt onder de te controleren punten onder meer netspanning, controle van de aarde en ventilatorspanning: elektrische metingen horen dus gewoon bij het reguliere onderhoud, niet alleen bij storingzoeken. Daarnaast meet je met een ohmmeter de weerstand van temperatuursensoren (NTC's) en, waar dat via het display niet af te lezen is, de ionisatiestroom. Elke meting heeft zijn eigen stand op de multimeter: wisselspanning voor netspanning en ventilator, weerstand voor NTC en doorgang, en microampere-gelijkstroom voor ionisatie als je die niet van het display kunt aflezen.

| Meting | Multimeterstand | Voorbeeldwaarde (model genoemd) |
|---|---|---|
| Netspanning | Wisselspanning (V AC) | 230 VAC (algemeen) |
| Weerstand aanvoer-/retoursensor (NTC) | Weerstand (ohm) | Remeha Avanta: 12 tot 15 kiloohm bij 20 tot 25 graden Celsius |
| Ionisatiestroom | Microampere (uitlezen via display, of gelijkstroom als het toestel dat toelaat) | Remeha Tzerra Ace: reinigen of vervangen onder 3 microampere |
| Doorgang thermostaatleiding | Weerstand (ohm) of doorgangspiep | Intergas HRE: max. 15 ohm leiding plus thermostaat |

## Welke multimeter: de meetcategorie (CAT)

Niet elke multimeter is voor elke meting geschikt. Instrumentfabrikanten delen meters in op meetcategorie (CAT, overspanningscategorie): CAT II is bedoeld voor apparaten die via een wandcontactdoos worden gevoed, zoals huishoudapparaten en dus ook een stekker-aangesloten cv-ketel; CAT III is bedoeld voor de vaste installatie van een gebouw, zoals verdeelkasten en groepenkasten. Een hogere categorie beschermt beter tegen een spanningspiek bij een fout. De vuistregel van de fabrikant: kies bij twijfel over de aansluiting de hoogste categorie waarmee je te maken kunt krijgen, in plaats van er na een fout achter te komen dat het instrument niet toereikend was.

!!! kern Eerst spanning, dan pas weerstand
Voor je met een ohmmeter de weerstand van een NTC-sensor of de doorgang van een thermostaatleiding meet, meet je eerst spanning om aan te tonen dat het circuit spanningsloos is. Een weerstandsmeting op een circuit dat nog spanning voert, geeft een onjuiste waarde en kan het instrument beschadigen.
!!!

!!! gevaar Meten is ook elektrisch werken
Meten aan een ketel gebeurt aan of nabij een elektrische installatie: dezelfde regels als in les 9.2 gelden. Gebruik een multimeter met minstens de meetcategorie die bij de aansluiting past, meet nooit weerstand op een circuit dat nog spanning voert, en toon aan dat een circuit spanningsloos is voor je het opent, niet alleen voor de meting zelf.
!!!

## Ionisatiestroom: een klein signaal met een concrete betekenis

Bij veel moderne ketels lees je de ionisatiestroom van het display af: dat is de methode die de fabrikant zelf voorschrijft. Een Nederlandse fabrikantprocedure om de ionisatiestroom in plaats daarvan met een losse multimeter in serie te meten, is niet gevonden: gebruik daarom het display, niet een zelf verzonnen meetopstelling. De grenswaarde verschilt sterk per merk: Remeha (Tzerra Ace, Calenta Ace) reinigt of vervangt de elektrode onder 3 microampere, gemeten bij vol- en laaglast; ATAG XL vraagt meer dan 2,0 microampere op vollast; Nefit ProLine NxT vraagt bij laaglast meer dan 10 (micro)ampere.

## Rekenvoorbeeld: past deze NTC-waarde bij dit toestel?

Een monteur meet aan de aanvoersensor van een Remeha Avanta, bij een omgevingstemperatuur van ongeveer 22 graden Celsius, een weerstand van 13,4 kiloohm. De handleiding noemt voor deze sensor 12 tot 15 kiloohm bij 20 tot 25 graden Celsius. De gemeten waarde valt binnen dat bereik: de sensor is op dit punt in orde. Was de gemeten waarde bijvoorbeeld 33 kiloohm geweest, dan zou dat, gezien de eigenschap van een NTC (weerstand daalt met de temperatuur), wijzen op een sensor die een veel lagere temperatuur "ziet" dan er werkelijk is: verdacht, en een reden om de sensor, de connector en de bedrading verder te controleren voor je iets vervangt.

## Praktijkgeval: storing zoeken met de V4-methode

Een ketel start niet. In plaats van meteen een onderdeel te vervangen, meet een monteur met een voltmeter systematisch langs het circuit: bij elke component controleert hij of er spanning binnenkomt en of er spanning uitgaat. Zo grenst hij de storing stap voor stap af tot het onderdeel waar de spanning wél binnenkomt maar niet meer uitgaat: dat is de plek waar het probleem zit. Deze systematische aanpak (meten in plaats van gokken) werkt voor elk elektrisch circuit, ook aan een ketel, en voorkomt dat je onderdelen vervangt die niet stuk zijn.

## Wat je vastlegt

Elke elektrische meting aan een ketel begint met spanningsloos maken en aantonen (les 9.2), gebruikt de juiste stand en de juiste meetcategorie, en de waarde die je meet, vergelijk je met het getal uit de handleiding van dat specifieke merk en model.
`,
  checklist: [
    'Ik gebruik voor elke meting de juiste stand op de multimeter (wisselspanning, weerstand, microampere)',
    'Ik kies een multimeter met minstens de meetcategorie die bij de aansluiting van het toestel past',
    'Ik meet eerst spanning en toon spanningsloosheid aan voor ik met een ohmmeter weerstand meet',
    'Ik lees de ionisatiestroom bij voorkeur van het display af in plaats van los met een multimeter in serie te meten',
    'Ik vergelijk elke gemeten waarde met de grenswaarde uit de handleiding van dat specifieke merk en model'
  ],
  quiz: [
    {
      vraag: `Welke multimeterstand gebruik je om de weerstand van een aanvoersensor (NTC) te meten?`,
      opties: [
        `Frequentie (Hz), want een NTC verandert zijn signaalfrequentie met de temperatuur`,
        `Wisselspanning (V AC), dezelfde stand als voor de netspanning`,
        `Weerstand (ohm), want een NTC is een temperatuurafhankelijke weerstand`,
        `Microampere-gelijkstroom, dezelfde stand als voor de ionisatiestroom`
      ],
      goed: 2,
      uitleg: `Een NTC is een weerstand die met de temperatuur verandert: die meet je in de ohmstand. Wisselspanning is voor netspanning, microampere voor ionisatiestroom, en frequentie is hier niet relevant.`
    },
    {
      vraag: `Welke meetcategorie (CAT) past bij een cv-ketel die op een gewone wandcontactdoos is aangesloten?`,
      opties: [
        `Alleen CAT IV biedt bij dit soort werk voldoende bescherming, elke lagere categorie is onvoldoende`,
        `CAT II, de categorie die instrumentfabrikanten koppelen aan via een wandcontactdoos gevoede apparaten`,
        `De categorie maakt hier niets uit, alleen het meetbereik van het instrument is van belang`,
        `CAT I, want dat is de laagste categorie en dus vanzelf de veiligste keuze`
      ],
      goed: 1,
      uitleg: `CAT II hoort bij apparaten die via een wandcontactdoos worden gevoed. CAT IV hoort bij de netaansluiting zelf, niet bij het apparaat, en een lagere categorie beschermt juist minder, niet meer.`
    },
    {
      vraag: `Waarom lees je de ionisatiestroom bij de meeste moderne ketels af van het display in plaats van een multimeter in serie te schakelen?`,
      opties: [
        `Omdat een gewone multimeter principieel geen stroom in de orde van microampere kan weergeven, zelfs niet met de juiste meetstand ingesteld`,
        `Omdat het display volgens de fabrikant altijd nauwkeuriger is dan een extern meetinstrument`,
        `Omdat het display van de ketel de enige manier is om enige vorm van spanning te meten`,
        `Omdat fabrikanten deze stroom zelf via het display laten aflezen, en een Nederlandse procedure om dit met een losse multimeter in serie te meten niet is gevonden`
      ],
      goed: 3,
      uitleg: `Fabrikanten laten de ionisatiestroom via het display aflezen; een Nederlandse procedure om dit in plaats daarvan met een losse multimeter te meten is niet gevonden. Een multimeter kan wel degelijk microampere meten; dat is niet de beperking hier.`
    },
    {
      vraag: `Een Remeha Avanta-aanvoersensor moet volgens de handleiding 12 tot 15 kiloohm zijn bij 20 tot 25 graden Celsius. Een monteur meet 33 kiloohm bij kamertemperatuur. Wat is de meest waarschijnlijke conclusie?`,
      opties: [
        `De pomp draait te snel, waardoor de sensor een te hoge waarde registreert`,
        `De sensor "ziet" een veel lagere temperatuur dan er werkelijk is: reden om sensor, connector en bedrading verder te controleren`,
        `De ketel heeft de afgelopen periode te veel gas gekregen`,
        `Alles is normaal, want een hogere weerstand duidt bij een NTC-sensor juist op een goed werkende sensor bij deze specifieke omgevingstemperatuur`
      ],
      goed: 1,
      uitleg: `Een NTC heeft bij een lagere temperatuur een hogere weerstand. 33 kiloohm past niet bij kamertemperatuur volgens deze handleiding en wijst op een sensor die een lagere temperatuur registreert dan de werkelijke: verder onderzoeken voor je iets vervangt. Gasverbruik en pompsnelheid hebben hier niets mee te maken.`
    },
    {
      vraag: `Wat doe je vóór je met een ohmmeter de weerstand van een sensor of leiding aan een ketel meet?`,
      opties: [
        `De sensor eerst demonteren en enige tijd laten afkoelen tot kamertemperatuur`,
        `De ketel op vollast zetten, zodat de meting een stabiele waarde geeft`,
        `Eerst spanning meten om aan te tonen dat het circuit spanningsloos is`,
        `Direct de weerstand meten, dat is bij een cv-ketel altijd een veilige meting`
      ],
      goed: 2,
      uitleg: `Een weerstandsmeting op een circuit dat nog spanning voert, geeft een onjuiste waarde en kan het instrument beschadigen. Daarom meet je eerst spanning en toon je spanningsloosheid aan. Vollast of demonteren is voor een weerstandsmeting niet nodig.`
    },
    {
      vraag: `Bij de V4-methode meet een monteur met een voltmeter systematisch langs een circuit. Waarom is dat een betere aanpak dan meteen een onderdeel vervangen?`,
      opties: [
        `Omdat het de enige werkwijze is die de wet voor elektrisch storing zoeken toestaat`,
        `Omdat een voltmeter, in tegenstelling tot andere instrumenten, nooit een foute waarde kan aanwijzen`,
        `Omdat systematisch meten met een voltmeter altijd sneller gaat dan eerst rustig nadenken over de mogelijke oorzaak van de storing`,
        `Omdat je zo de plek afgrenst waar spanning wel binnenkomt maar niet meer uitgaat, en dus precies weet waar het probleem zit`
      ],
      goed: 3,
      uitleg: `Systematisch meten grenst de storing stap voor stap af tot de plek waar spanning wel binnenkomt maar niet meer uitgaat: dat voorkomt dat je onderdelen vervangt die niet stuk zijn. Snelheid en wettelijke verplichting zijn hier niet de reden, en een voltmeter kan wel degelijk fout gebruikt worden.`
    }
  ],
  kaarten: [
    { voor: `Welke multimeterstand gebruik je voor netspanning en ventilatorspanning?`, achter: `Wisselspanning (V AC).` },
    { voor: `Welke multimeterstand gebruik je voor een NTC-sensor of de doorgang van een thermostaatleiding?`, achter: `Weerstand (ohm).` },
    { voor: `Welke meetcategorie (CAT) past bij een via een wandcontactdoos gevoede cv-ketel?`, achter: `CAT II. CAT III en hoger horen bij de vaste installatie van het gebouw.` },
    { voor: `Waarom lees je de ionisatiestroom bij voorkeur van het display af?`, achter: `Fabrikanten laten deze meting zelf via het display aflezen; een Nederlandse procedure om dit met een losse multimeter in serie te doen is niet gevonden.` },
    { voor: `Wat doe je altijd voor je met een ohmmeter weerstand meet?`, achter: `Eerst spanning meten en spanningsloosheid aantonen; anders is de meting onjuist en kan het instrument beschadigen.` },
    { voor: `Welke weerstand hoort bij een Remeha Avanta aanvoersensor (NTC) bij 20 tot 25 graden Celsius?`, achter: `12 tot 15 kiloohm (voorbeeld, dit model).` },
    { voor: `Onder welke ionisatiestroom reinigt of vervangt Remeha de elektrode van de Tzerra Ace/Calenta Ace?`, achter: `Onder 3 microampere, gemeten bij vol- en laaglast.` },
    { voor: `Wat laat de V4-methode je zien bij storing zoeken met een voltmeter?`, achter: `De precieze plek waar spanning wel binnenkomt maar niet meer uitgaat: daar zit de storing.` }
  ],
  bronnen: ['MET-21', 'MET-22', 'MET-23', 'MET-24', 'MET-25', 'MET-26', 'ELK-31', 'ELK-32', 'ELK-33', 'ELK-34', 'ELK-35']
}

  ]
});
