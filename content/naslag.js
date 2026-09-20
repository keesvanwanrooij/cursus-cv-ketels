/* ==========================================================================
   naslag.js - spiekbriefje, bedoeld om op de telefoon open te hebben
   Elk getal is nagelopen tegen het feitenregister (project/docs/feiten/,
   zekerheid A of B) of tegen een les die het register citeert. De feit-id's
   staan in een commentaar boven elke kaart. Geen C- of X-feiten.
   De CO-maxima in het rookgas (50/200/400 ppm) staan in de kaart 'CO en de
   wet', met de hedge dat niet vaststaat of ze luchtvrij zijn of zoals
   afgelezen (CO-43, MTN-05). Waarden per fabrikant zijn voorbeelden met merk
   en model: het voorschrift van het toestel dat je voor je hebt gaat voor.
   Regels voor de tekst: geen backticks of dollar-accolade in de inhoud,
   geen streepjes als gedachtestreep, geen | in een tabelcel.
   ========================================================================== */

window.NASLAG = [

/* Feit-id's: HYD-22, REN-20, REN-22, REN-21, REN-11, GAS-08, GAS-09, REG-22, REG-12.
   0,07 en 1,16 zijn afgeleid uit HYD-22 (1,163 x 60 / 1000 en 1,163 x 1000 / 1000), les 3.6.
   Radiatorformule: exponent per fabrikant, alleen REG-12 gebruikt (REG-13 tot REG-15 zijn C). */
{
  icoon: '🧮',
  titel: 'Formules',
  inhoud: `
| Formule | Waarvoor |
|---|---|
| Q = m × c × ΔT | Warmte om water op te warmen. Water: c = 4,19 kJ/(kg K) = 1,163 Wh/(kg K), 1 liter = 1 kg (aanname, ongeveer 2 tot 3% fout bij 70 tot 80 °C) |
| Debiet (l/h) = P (W) / (1,163 × ΔT) | Water dat per uur langs moet. 20 kW bij ΔT 20 K is ongeveer 860 l/h, bij ΔT 30 K ongeveer 570 l/h |
| P (kW) ≈ 1,16 × debiet (m³/h) × ΔT (K) | Vermogen dat het water transporteert |
| P (kW) ≈ 0,07 × debiet (l/min) × ΔT (K) | Idem, met debiet in liters per minuut. Tapwater CW4: 7,5 l/min van 10 naar 60 °C is ongeveer 26 kW |
| E (kWh) = P (kW) × t (h) | Energie is vermogen maal tijd. 1 kWh = 3,6 MJ |
| V (m³(n)/h) = P nuttig (kW) / (η × calorische waarde) | Gasverbruik. Hi: 8,792 kWh/m³(n), Hs: 9,769 kWh/m³(n). Rendement en waarde altijd op dezelfde basis, anders ongeveer 10% fout. η als fractie (0,893 en niet 89,3) |
| Q (W) = U × A × ΔT | Transmissieverlies. U in W/(m² K), A in m², ΔT in K |
| Q = Q50 × (ΔT / 50)^n | Radiatorvermogen bij een ander regime. Q50 (vermogen bij ΔT 50 K) en n geeft de fabrikant, n is gemiddeld ongeveer 1,3 en verschilt per radiator |
`
},

/* Feit-id's: HYD-10 (1 m waterkolom = 0,1 bar), GAS-15 (25 mbar = 2,5 kPa), GAS-04 (273,15 K), REN-20 (1 kWh = 3,6 MJ).
   Omrekeningen bar, kPa, mbar, Pa zijn SI-definities (les 3.1). 9810 Pa per meter = 1000 x 9,81 x 1 (les 3.1). */
{
  icoon: '📏',
  titel: 'Druk en eenheden',
  inhoud: `
| Eenheid | Gelijk aan |
|---|---|
| 1 bar | 100 kPa = 1000 mbar = 100.000 Pa |
| 1 kPa | 10 mbar |
| 1 mbar | 100 Pa |
| 25 mbar | 2,5 kPa (sommige handleidingen geven gasdruk in kPa) |
| 1 meter waterkolom | ongeveer 0,1 bar (precies 9810 Pa) |
| 10 meter waterkolom | ongeveer 1 bar (0,98 bar) |
| 1 kW | 1000 W = 3,6 MJ per uur |
| 1 kWh | 3,6 MJ |
| 1 K verschil | even groot als 1 °C verschil. 0 °C = 273,15 K |

Vuistregel: **1 meter hoogteverschil in water geeft 0,1 bar statische druk.**
`
},

/* Feit-id's: REN-01, REN-02, REN-03, REN-05, REN-06, REN-08, GAS-08, GAS-09, GAS-10, REN-21, KET-21, VER-16.
   HR107 is 107% op Hi (REN-06); 96,5% Hs is de deellasteis van het huidige HR-label (REN-05).
   De vollasteis (82,1 + 10log Q) is bewust weggelaten: zie de BRL Gaskeur HR zelf. */
{
  icoon: '🔥',
  titel: 'Hs, Hi en rendement',
  inhoud: `
| Onderwerp | Hs (bovenwaarde) | Hi (onderwaarde) |
|---|---|---|
| Verbrandingswater | condenseert volledig, condensatiewarmte telt mee | blijft damp, condensatiewarmte telt niet mee |
| 1 m³(n) aardgas | 35,17 MJ = 9,769 kWh | 31,65 MJ = 8,792 kWh |
| Hoogste rendement | niet boven 100% | tot 1 / 0,902 = 110,9% |
| Gaskeur HR-label, deellast (30% van de grootste nominale belasting) | minimaal 96,5% | 107% (HR107) |

**HR107 is 107% op de onderwaarde (Hi), niet op de bovenwaarde.** Op Hs kan een ketel niet boven 100% komen.

- Hi / Hs = 0,902 voor aardgas (Kiwa, G25), afgerond 0,90. Rendement op Hi = rendement op Hs / 0,902.
- In Europa en in Gaskeur is het Hs-rendement de standaard, het Hi-rendement is de oude Nederlandse uitdrukking. Zie je 107% in een folder, lees dan Hi.
- De energie per m³ is een gemiddelde: de werkelijke waarde verschilt per gaskwaliteit.
- Condensatie begint onder het dauwpunt van het rookgas: circa 55 °C (Remeha Calenta), berekend 54 tot 56 °C bij lambda 1,2 tot 1,3. De retour moet daar onder blijven.

| Remeha Avanta 24c | Rendement Hs | Rendement Hi |
|---|---|---|
| Vollast, 80/60 °C | 89,3% | 99,1% |
| Vollast, 50/30 °C | 94,0% | 104,4% |
| Laaglast, retour 60 °C | 84,9% | 94,3% |
| Deellast (Gaskeur HR-methode), retour 30 °C | 97,9% | 108,7% |

Voorbeeld uit de handleiding (v.13), per model verschillend. Van 30 naar 60 °C retour daalt het Hs-rendement met 13 procentpunten.
`
},

/* Feit-id's: GAS-01, GAS-02, GAS-04, GAS-11, GAS-12, GAS-14, GAS-15, GAS-16, GAS-17, GAS-18, GAS-19, GAS-30,
   INS-24, INS-26, INS-27, INS-50.
   Gehedged (open vragen register 02, nr 3 en 4): 25 of 30 mbar, m3 op de gasrekening, omschakeling naar H-gas.
   GAS-32 (X) en GAS-23 (C) niet als feit gebruikt: alleen de juiste combinatie G25.3 op 25 mbar en G20 is H-gas. */
{
  icoon: '⛽',
  titel: 'Gasgegevens',
  inhoud: `
| Gas | Nominale aansluitdruk | Toegestane voordruk |
|---|---|---|
| G25.3 (K-groep, huisgas) | 25 mbar | 20 tot 30 mbar |
| G20 (E-groep, H-gas) | 20 mbar | 17 tot 30 mbar |
| G31 (propaan) | 30 tot 50 mbar | 30 tot 50 mbar |

Voordruk: voorbeeld Remeha Avanta (handleiding v.13, categorie II2EK3P). Het bereik verschilt per model, lees de handleiding.

**Een gewone Nederlandse woning heeft G-gas (K-groep, referentiegas G25.3) op nominaal 25 mbar.** G20 op 20 mbar is H-gas: dat hoort bij ombouw en keuring, niet bij de gangbare woningsituatie.

- Referentiegassen: G25 (L-groep), G25.3 (K-groep), G20 (E-groep). Categorie II2EK3P: af fabriek afgesteld op K-gas, met ombouw of herafstelling geschikt voor E-gas (H-gas) en propaan.
- G-gas bevat ongeveer 14% stikstof. Dat brandt niet, dus er zit minder energie in een m³ dan in H-gas.
- Wobbe-index (Hs): G25 43,88 en G25.3 45,07 MJ/m³(n). Een lagere Wobbe-index geeft meer luchtovermaat: een op G25.3 afgesteld toestel (lambda 1,3, O2 5,2%) meet op G25 lambda 1,335 en O2 5,6%. Daar hoeft niets mis mee te zijn. Beoordeel met de waarden van de fabrikant.
- Intergas Kombi Kompakt meldt voordruk te laag onder 20 mbar, ATAG i-Serie eist een dynamische voordruk hoger dan 20 mbar.
- 1 m³(n) is het volume bij 0 °C (273,15 K) en 101,325 kPa. Of de m³ op de gasrekening een m³(n) is, is niet vastgesteld.
- Gasmeter, maximale capaciteit: G4 6 m³/h, G6 10 m³/h, G10 16 m³/h, G16 25 m³/h, G25 40 m³/h (Enexis). G4 is de standaard huisaansluiting.

**Open punten.** 25 of 30 mbar: fabrikanten en keuring noemen nominaal 25 mbar, Netbeheer Nederland noemt 30 mbar als ontwerpdruk (een huisdrukregelaar verlaagt de druk op 100-mbargebied tot 30 mbar). Bij het toestel ligt de druk in de praktijk ruwweg tussen 25 en 30 mbar. Voor de beoordeling geldt het bereik uit de handleiding van het model. Of woningen ooit naar H-gas omschakelen, is in de gebruikte bronnen niet vastgesteld: ga niet uit van een gassoort, maar vergelijk de gasgroep op het typeplaatje met de gasgroep ter plaatse (Vaillant ecoTEC plus VHR) en lees het toestelvoorschrift.
`
},

/* Feit-id's: CO-21, CO-35, CO-36, CO-37, CO-38, CO-40, CO-41, CO-45, WET-28, WET-42, WET-43, WET-44, WET-45,
   WET-46, WET-47, WET-48, WET-51, WET-52, WET-53, MET-16, MET-17, MET-18, MTN-01, MTN-02, MTN-03, MTN-04, MTN-05.
   Rookgasgrenzen (50/200/400 ppm) nu wel opgenomen: MTN-01 t/m MTN-04 (A) onderzochten de letterlijke wettekst en
   beide meetprotocollen zelf en vonden geen correctiestap voor zuurstofovermaat; MTN-05 (B) trekt daaruit de
   voorzichtige conclusie "zoals afgelezen", geen letterlijke wetsuitspraak (uitgewerkt in les 10.4).
   Meldplicht: art. 6.46 Bbl is leidend (WET-47). Wijziging voorgenomen (WET-53), inwerkingtreding niet gevonden. */
{
  icoon: '⚠️',
  titel: 'CO en de wet',
  inhoud: `
| CO in de opstellingsruimte | Wat je doet |
|---|---|
| Onder 5 ppm | In bedrijf stellen mag, als het toestel ook naar het oordeel van de VP veilig is |
| 5 tot 20 ppm | Nader onderzoek, oorzaak wegnemen voor je (opnieuw) in bedrijf stelt, melden aan de opdrachtgever |
| Boven 20 ppm | Wettelijke meldplicht (art. 6.46 Bbl) |

**Meten:** voor de werkzaamheden, op ongeveer 1,7 m hoogte en ongeveer 1 m van het toestel. De waarde op het meetinstrument is leidend. Gebruik een instrument met passende uitlezing, bij voorkeur een persoonlijke veiligheidsmeter: een rookgasmeter is voor ruimte-CO alleen indicatief.

**20 ppm** is de wettelijke meldgrens (Omgevingsregeling art. 5.52). **5 ppm** is de grens uit het schema (BRL 6000-25) voor in bedrijf stellen.

Melden, onverwijld, aan vier partijen:

1. de bewoner of gebruiker
2. de eigenaar
3. het bevoegd gezag (de gemeente)
4. de certificerende instelling

De melding bevat minstens de gemeten concentratie en een beschrijving van de ruimte. Sinds 1 april 2026 kan de melding ook via het Digitaal Stelsel Omgevingswet. De wet (Bbl art. 6.46) is leidend: de BRL is niet helemaal eenduidig over volgorde en vorm van de melding.

Komen er bij gebruik ontoelaatbare hoeveelheden CO vrij, dan stel je het toestel buiten bedrijf en stel je het niet in bedrijf. Een toestel uit bedrijf nemen of niet in bedrijf stellen vanwege veiligheidsrisico's is voorbehouden aan een VP.

**CO in het rookgas.** Zonder een maximale waarde van de fabrikant geldt bij een goed afgesteld toestel:

| Toesteltype | Grens |
|---|---|
| Open, afvoerloos (A) | 50 ppm |
| Open, afvoergebonden (B) | 200 ppm |
| Gesloten (C) | 400 ppm |

Een fabrikantgrens is meestal strenger en gaat voor (Intergas bijvoorbeeld 160 ppm, Remeha Avanta Ace onder 250 ppm, per model verschillend). Ook hier is de op het meetinstrument aangegeven waarde leidend, dat zegt BRL 6000-25 letterlijk. Of deze grenzen luchtvrij zijn (gecorrigeerd voor zuurstofovermaat) of zoals afgelezen, zegt geen van de wettekst, BRL 6000-25 of BRL K25000 met zoveel woorden. De letterlijke tekst wijst op zoals afgelezen: geen correctiestap in het meetprotocol, en de aflezing zelf is leidend. Behandel dat als een voorzichtige conclusie, geen vaststaand feit. Zie de kaart 'CO luchtvrij (rekenmethode)'.

**Let op:** er is een wijziging van de meldplicht voorgenomen (melden aan het bevoegd gezag alleen als het risico niet direct is weggenomen, met vermelding van de oorzaak). Tot die in werking treedt geldt art. 6.46 zoals hierboven. Controleer de actuele tekst.

!!! gevaar Bij een CO-alarm of acuut gevaar: 112
Waarschuw iedereen, ga direct naar buiten en bel 112. Bij een ernstig vergiftigde bewoner bel je altijd 112.
!!!
`
},

/* Feit-id's: CO-19, CO-20, CO-21, CO-23, WET-61, RGA-32, INS-58.
   De alarmtijden zijn de weergave van de Gezondheidsraad (uitgave 2010/A1:2012); de EN 50291-1:2018 is niet zelf ingezien (CO-19).
   Plaatsing: alleen wat CO-21 noemt (bronruimte aan het plafond, andere ruimtes op ademhoogte). */
{
  icoon: '🔔',
  titel: 'CO-melder (NEN-EN 50291)',
  inhoud: `
| CO-concentratie | Wat de melder moet doen |
|---|---|
| 30 ppm | 120 minuten geen alarm |
| 50 ppm | Alarm na minimaal 60 en uiterlijk 90 minuten |
| 100 ppm | Alarm na minimaal 10 en uiterlijk 40 minuten |
| 300 ppm | Alarm binnen 3 minuten |

Weergave van de norm door de Gezondheidsraad (uitgave 2010/A1:2012). De actuele EN 50291-1:2018 is niet zelf ingezien.

**Een stille melder is geen bewijs dat de ruimte veilig is.** Bij 30 ppm mag een melder twee uur zwijgen. NEN-EN 50291 is geen wet: de NVWA toetst melders eraan. Melders op de Nederlandse markt alarmeren pas vanaf circa 50 ppm, de gevoeligste tonen vanaf 10 ppm een waarde op het display (stand 2019). Meet zelf met je eigen instrument.

- Brandweer Nederland: koop alleen een melder met NEN-EN 50291 op de verpakking.
- Plaatsing: in de ruimte met het toestel aan het plafond, in andere ruimtes op ademhoogte (Brandweer, onderzoek 2021).
- Bij toestellen op een CLV noemt de BRL een melder binnen 2 m van de toestellen.
- BRL 6000-25: je adviseert een melder bij een open of afvoerloos toestel zonder melder en bij een CLV zonder geschiktheidsverklaring. Twijfel je aan de kwaliteit van de rookgasafvoer, adviseer dan ook nader onderzoek.
- Je adviseert en legt vast of je hebt geadviseerd (ja of nee). Plaatsen hoef je niet.
`
},

/* Feit-id's: CO-30, CO-32, CO-33, CO-34, CO-41, CO-46, MET-08, MET-11, MET-15, MTN-01, MTN-02, MTN-04, MTN-05.
   CO-43 (X) en MTN-05 (B) alleen als hedge verwerkt: de vraag of de wettelijke rookgasgrenzen luchtvrij zijn is
   open, uitgewerkt in les 10.4. CO-32: voorbeeldgetallen zijn verzonnen, geen meetgegevens. */
{
  icoon: '🧪',
  titel: 'CO luchtvrij (rekenmethode)',
  inhoud: `
**CO luchtvrij = CO gemeten × 21 / (21 - O2)**

O2 in % van het droge rookgas. In de VS rekent men met 20,9 in plaats van 21 (verschil kleiner dan 1%).

| Meting | Luchtvrij |
|---|---|
| 100 ppm CO bij 4,0% O2 | 100 × 21 / 17 = 123,5 ppm |
| 50 ppm CO bij 6,0% O2 | 50 × 21 / 15 = 70 ppm |

Voorbeeldgetallen, geen meetgegevens.

- Bij Testo is CO onverdund de luchtvrije waarde.
- De factor 21 / (21 - O2) is gelijk aan CO2max / CO2 (binnen 0,3%) en niet exact gelijk aan lambda: bij G25 en 4,0% O2 is de factor 1,235 en lambda 1,215.
- Ruimte-CO beoordeel je altijd zoals afgelezen. Op omgevingslucht (O2 circa 20,9%) is de formule zinloos.
- Schakel de analyser pas in nadat is vastgesteld dat er geen CO in de ruimte is (Kiwa BRL K25000, bijlage V).
- Bij een open afvoergebonden toestel meet je in de trekonderbreker voor de luchtbijmenging, anders is het monster verdund (Kiwa BRL K25000, bijlage V).
- Sonde in de kernstroom (midden van de rookgaspijp) en het meetpunt afdichten, anders verdunning met lucht. Een te hoge O2-waarde kan wijzen op een lek in het meetsysteem.

**Luchtvrij is een rekenmethode, geen wettelijke beoordeling.** Of de wettelijke CO-grenzen in het rookgas luchtvrij zijn of zoals afgelezen, is niet vastgesteld: de Omgevingsregeling en de schema's zeggen het niet, BRL 6000-25 zegt dat de waarde op het instrument leidend is en de gelezen handleidingen van Intergas en Remeha vermelden het niet. Gebruik de omrekening om metingen bij verschillende luchtovermaat te vergelijken. Twijfel je, vraag dan je certificerende instelling of docent.
`
},

/* Feit-id's: RGA-01, RGA-02, RGA-03, RGA-04, RGA-05, RGA-06, RGA-07, RGA-08, RGA-21, RGA-37.
   Definities volgens CEN/TR 1749:2014 (EN 1749:2020 zelf niet gelezen, register 04 open vraag 1). */
{
  icoon: '🏷️',
  titel: 'Toesteltypen A, B en C',
  inhoud: `
Eerste letter: hoe lucht en rookgas worden geleid. Eerste cijfer: hoe de uitmonding of het afvoersysteem is opgebouwd. Laatste cijfer: waar de ventilator zit.

| Aanduiding | Betekenis |
|---|---|
| A | Niet bedoeld voor een afvoer naar buiten: de verbrandingsproducten komen in de ruimte (bijvoorbeeld een afvoerloze keukengeiser) |
| B (open toestel) | Lucht rechtstreeks uit de opstelruimte, afvoer naar buiten |
| C (gesloten toestel) | Het hele verbrandingscircuit (luchttoevoer, verbrandingskamer, warmtewisselaar, afvoer) is afgesloten van de opstelruimte |
| Laatste cijfer 1 | Natuurlijke trek, geen ventilator |
| Laatste cijfer 2 | Ventilator in de rookgasstroom (na verbrandingskamer en warmtewisselaar) |
| Laatste cijfer 3 | Ventilator in de luchttoevoer (voor verbrandingskamer en warmtewisselaar). Moderne Nederlandse HR-toestellen eindigen op 3 |
| Laatste cijfer 4 | Alleen type B met trekonderbreker: ventilator na verbrandingskamer en trekonderbreker |
| B1 en B4 | Met trekonderbreker. B2, B3 en B5: zonder trekonderbreker |
| B11 | Open toestel met trekonderbreker en natuurlijke trek. B11BS: met een bewaking die reageert op blokkade van het afvoersysteem |
| B23 | Open toestel zonder trekonderbreker, ventilator voor de verbrandingskamer. B23P: voor een afvoer die onder overdruk werkt |

Een open toestel mag niet in een toilet- of badruimte staan (Bbl art. 4.135 lid 2 nieuwbouw, art. 3.75 lid 2 bestaande bouw).

Bron voor de typedefinities: CEN/TR 1749:2014. De actuele NEN-EN 1749:2020 is een indelingsschema, geen installatie- of productnorm, en is niet zelf gelezen. Nederlandse uitleg: NPR 3378-80:2023.
`
},

/* Feit-id's: RGA-10, RGA-11, RGA-12, RGA-13, RGA-14, RGA-15, RGA-16, RGA-18, RGA-23, RGA-26, RGA-32, RGA-58.
   C33 is NIET "gescheiden door dak of gevel" (dat is C53) en C4 is GEEN gedeelde schoorsteen (register 04, correcties).
   RGA-24 tegen RGA-32 (HR-toestellen op een onderdruk-CLV): niet beslist, daarom alleen de vervangregel van de BRL (RGA-32) en een hedge. */
{
  icoon: '🔀',
  titel: 'Aansluitwijzen C13 tot C93',
  inhoud: `
| Type | Kenmerk |
|---|---|
| C13 | Horizontale (gevel) uitmonding. Lucht en rookgas concentrisch of dicht bij elkaar, onder gelijke winddruk. Ventilator in de luchttoevoer |
| C33 | Verticale (dak) uitmonding. Lucht en rookgas concentrisch of dicht bij elkaar, in hetzelfde drukgebied. Ventilator in de luchttoevoer |
| C43 | Aansluiting op een gemeenschappelijk CLV-systeem met twee kanalen (lucht en rookgas) dat bij het gebouw hoort. Geen gedeelde schoorsteen |
| C53 | Afzonderlijke leidingen en uitmondingen voor lucht en rookgas, in verschillende drukgebieden toegestaan. Fabrikanteis (Nefit): niet op tegenover elkaar liggende gevels |
| C63 | Toestel zonder afvoermateriaal geleverd, bedoeld voor een apart goedgekeurd systeem. Eisen per fabrikant, bijvoorbeeld maximaal 10% recirculatie (Remeha Calora Tower 35S) |
| C83 | Half CLV: gemeenschappelijk rookgaskanaal met natuurlijke trek, lucht individueel van buiten het gebouw |
| C93 | Rookgas naar een verticale uitmonding, lucht uit een bestaand verticaal kanaal (schacht) in het gebouw |
| C(10)3 | Overdruk-CLV: de druk in het gemeenschappelijke rookgaskanaal mag hoger worden dan in het luchtkanaal. Ventilator in de luchttoevoer. Kanalen concentrisch met CE-markering, zonder trekonderbreker (Rogafa/VFK) |

**C33 is niet C53.** C33 ligt in hetzelfde drukgebied, C53 mag in verschillende drukgebieden uitmonden. "C33 is gescheiden door dak of gevel" is een veelgemaakte fout.

**C4 is geen gedeelde schoorsteen:** het is het CLV-systeem dat bij het gebouw hoort en niet bij het toestel.

CLV: vervang een toestel op een CLV alleen door exact hetzelfde type (BRL 6000-25, bijlage 5). Of een HR-toestel op een onderdruk-CLV (C4) mag, laten de bronnen niet eenduidig zien: volg de fabrikant en de les over CLV.
`
},

/* Feit-id's: RGA-44, RGA-50, RGA-51, RGA-53, RGA-54, RGA-57, RGA-59, RGA-62, RGA-67, RGA-68, RGA-69, RGA-70, RGA-71,
   RGA-80, NRM-21, MET-19, CO-47.
   Montagewaarden komen uit Rogafa- en Ubbink-voorschriften, niet uit het Bbl (NRM-21).
   Bewust weggelaten: de 10 mm-regel (RGA-55 en RGA-56, niet beslist), hinderafstanden (NPR 3378-60, betaald). */
{
  icoon: '🏗️',
  titel: 'Afvoer: uitmonding en montage',
  inhoud: `
**Uitmonding volgens het Bbl:** nieuwbouw, en bij verbouw voor een nieuw geïnstalleerde afvoer (niet bij vervanging waarbij de plaats van de uitmonding niet wijzigt)

| Onderwerp | Waarde |
|---|---|
| Uitmonding niet boven het dakvlak: afstand tot de perceelsgrens, langszij gemeten | minimaal 1 m |
| Idem, loodrecht gemeten | minimaal 2 m |
| Uitmonding boven een constructieonderdeel of aansluitend terrein | minimaal 0,3 m boven de bovenzijde |
| Verdunningsfactor rookgas gasgestookt toestel (NEN 2757), bij de instroomopening van een voorziening voor luchtverversing | niet groter dan 0,01 |
| Instroomopening verbrandingslucht: afstand tot de perceelsgrens loodrecht (niet voor een opening in een dak) | minimaal 2 m |
| Luchtsnelheid in de leefzone door toevoer van verbrandingslucht (NEN 1087) | niet groter dan 0,2 m/s |

Grenst het perceel aan een openbare weg, water of groen, dan meet je tot het hart daarvan. Hinder- en verdunningsafstanden staan in NPR 3378-60 en bij de fabrikant. Ze staan hier niet.

**Monteren** (Rogafa, Ubbink: per fabrikant en per systeem verschillend)

| Onderwerp | Voorschrift |
|---|---|
| Afschot horizontaal | 3 graden, minimaal 50 mm per meter, naar het toestel |
| Beugelafstand | horizontaal maximaal 1 m, verticaal maximaal 2 m |
| Eerste beugel | maximaal 0,5 m van het toestel |
| Insteeklengte moffen en spie-einden | minimaal 40 mm na montage |
| Kunststof luchttoevoer naast metalen rookgasleiding | minimaal 35 mm afstand |

- Kunststof afvoer is bedoeld voor rookgas tot maximaal 120 °C (T120).
- Niet kitten, schuimen of plakken. Steekverbindingen met afdichtring.
- Afdichtring alleen insmeren met het voorgeschreven middel, water of maximaal 1% zeepoplossing, nooit met vet, vaseline of olie.
- Materialen of fabricaten niet mengen, behalve waar de fabrikant het toestaat.
- Het Bbl geeft geen voorschriften voor afschot, beugelafstand of insteekdiepte. Volg het voorschrift van de fabrikant van het afvoersysteem en van het toestel.

**Recirculatie in een concentrisch systeem:** meet met gesloten mantel (tenzij het onderhoudsvoorschrift anders zegt) CO2 op het meetpunt van de verbrandingsluchttoevoer. Een goed systeem geeft de buitenluchtwaarde. Tot circa 1% CO2 is door windinvloed toelaatbaar. Veel hogere waarden wijzen op interne lekkage: nader onderzoek.

**Vervangen:** bij vervanging van een afvoergebonden toestel vervang je het bestaande rookgasafvoersysteem gelijktijdig. Het mag alleen blijven als het grondig is gecontroleerd en goed bleek: een resterende levensduur van minimaal 15 jaar wordt verwacht (BRL 6000-25).
`
},

/* Feit-id's: NRM-02, NRM-03, NRM-06, NRM-07, NRM-10, NRM-11, NRM-12, NRM-13, NRM-18, NRM-19, NRM-20, NRM-22, NRM-24,
   RGA-01, CO-20, MET-01, OPS-01, OPS-03, INS-16.
   NEN-normen zijn auteursrechtelijk beschermd: hier staat alleen wat ze regelen. NEN 1006 is drinkwater, NEN 2767 is conditiemeting.
   NRM-06 is een datumvoorbeeld (stand 2026-09-19): controleer bijlage II van de Omgevingsregeling opnieuw voor je het gebruikt. */
{
  icoon: '📚',
  titel: 'Normen: wat regelt wat',
  inhoud: `
| Norm | Wat ze regelt |
|---|---|
| NEN 1078 (nieuwbouw), NEN 8078 (bestaande bouw) | Gasvoorziening (het gasleidingwerk) met een werkdruk tot en met 500 mbar. Niet de rookgasafvoer en niet de opstellingsruimte |
| NEN 2757 (nieuwbouw), NEN 8757 (bestaande bouw) | Bepalingsmethode van de rookgasafvoer: capaciteit, stromingsrichting, verdunningsfactor, rookdoorlatendheid. NEN 2757-1 tot en met 130 kW bovenwaarde, NEN 2757-2 daarboven |
| NEN 1087 (nieuwbouw), NEN 8087 (bestaande bouw) | Bepalingsmethode ventilatie, dus ook de toevoer van verbrandingslucht |
| NEN 6062 (nieuwbouw), NEN 8062 (bestaande bouw) | Brandveiligheid van rookgasafvoervoorzieningen |
| NPR 3378 | Praktijkrichtlijn, geen wet: het Bbl verwijst er niet naar, de BRL 6000-25 wel. Leidraad bij NEN 1078, NEN 2757 en NEN 8757 |
| NEN 1006 | Leidingwaterinstallaties (drinkwater). Niet gas |
| NEN 1010 | Elektrische laagspanningsinstallaties. Niet gas |
| NEN 2767 | Conditiemeting van gebouwen en installatiedelen. Geen gas- of rookgasnorm |
| NEN-EN 1749 | Indeling van toestellen (A, B, C) naar toevoer van lucht en afvoer van rookgas. Geen installatie- of productnorm |
| NEN-EN 50291 | CO-melders. Geen wet, de NVWA toetst melders eraan |
| NEN-EN 50379-2 | Meetapparatuur voor CO, O2 en rookgastemperatuur, verschildruk en trek (eis van de BRL 6000-25) |
| NEN-EN 14471, 1856 en 13384 | Productnormen afvoer: 14471 kunststof binnenbuis, 1856 metaal. 13384 is de berekeningsmethode |

**NPR 3378 in delen:** -1 sterkte en dichtheid van gasleiding en gasinstallatie, -22 opstelling van gastoestellen, -40 CLV onderdruk, -41 half CLV onderdruk, -45 vervangen van toestellen en werken aan afvoer, -46 condenserend type C, -47 type B, -48 renovatie CLV, -60 uitmondingen, -80 toestelaanduidingen.

**Opstellingsruimte:** in nieuwbouw Bbl art. 4.176 en 4.177 (opstelplaats verwarmings- en warmwatertoestel), zonder vaste maten. De opstelling van gastoestellen staat in NPR 3378-22. Niet in NEN 1078 of NEN 8078.

**Welke uitgave geldt:** wettelijk geldt de uitgave die bijlage II van de Omgevingsregeling aanwijst, niet automatisch de nieuwste van NEN. Voorbeeld (stand september 2026): aangewezen is NEN 8757:2005, terwijl NEN 8757:2025 is uitgegeven.
`
},

/* Feit-id's: HYD-01, HYD-02, HYD-04, HYD-05, HYD-06, HYD-07, HYD-08, HYD-09, HYD-10, HYD-11, HYD-12, HYD-13, HYD-14,
   HYD-15, HYD-17, HYD-32, INS-42, INS-43, INS-44.
   Voordruk en vuldruk verschillen per fabrikant en berekening (HYD-11, HYD-14): alles voorbeelden met merk of model.
   Klop-test (HYD-19, X) bewust niet opgenomen. Rekenvoorbeelden 6 m en 100 liter: les 3.2 en 3.3 (afgeleid uit HYD-07 en HYD-09). */
{
  icoon: '🎈',
  titel: 'Expansievat en druk',
  inhoud: `
| Onderwerp | Waarde |
|---|---|
| Uitzetting water van 10 naar 80 °C | ongeveer 3% (100 liter geeft ongeveer 3 liter), Flamco |
| Volumevermeerdering ten opzichte van 4 °C | 80 °C: 2,82%, 90 °C: 3,47% (Flamco) |
| Statische druk | 1 meter waterkolom = 0,1 bar |
| Voordruk P0 | P_ST + P_D + P_Z (+ P_pomp), Flamco op basis van EN 12828. P_ST = 0,1 bar per meter tussen het aansluitpunt van het vat en het hoogste punt, P_Z minstens 0,2 bar. Naar boven afronden op een veelvoud van 0,5 bar |
| Vuldruk koud | P0 + 0,3 bar (Flamco, EN 12828), met een vuldruktolerantie van minimaal 0,25 bar. Vaillant: minstens 0,2 bar boven de tegendruk van het vat |
| Nuttig effect en brutoinhoud | G = (Pe - P0) / Pe en V_bruto = (Ve + Vwr) / G, met absolute drukken (overdruk plus ongeveer 1 bar) |
| Waterreserve Vwr | Flamco: 0,5% van de inhoud, minimaal 3 liter, in de praktijk minstens 6 liter |
| Veiligheidsventiel woninginstallatie | opent meestal bij 3 bar. Flamco: maximale einddruk minstens 10% onder de openingsdruk, dus 2,7 bar bij 3 bar |

**Voordruk meten:** laat de installatie afkoelen en maak hem drukloos (het water kan heet zijn). Meet op het stikstofvulventiel, in onbelaste toestand (vat afgesloten van de waterzijde, dus zonder waterdruk op het membraan) en bij omgevingstemperatuur.

- Voorbeeld voordruk: hoogste punt 6 m boven het vat geeft 0,6 + 0,2 = 0,8 bar, afgerond 1,0 bar. Vuldruk dan 1,0 + 0,3 = 1,3 bar.
- Voorbeeld vat: 100 liter, Ve = 3 liter, voordruk 1,0 bar en einddruk 2,7 bar (overdruk) is P0 = 2,0 en Pe = 3,7 bar absoluut. G = 0,46 en V_bruto = (3 + 6) / 0,46 = 19,6 liter: kies het eerstvolgende vat uit de reeks van de fabrikant (bijvoorbeeld 24 liter).
- Druk loopt te snel op: te veel water of te hoge vuldruk. Het ventiel blaast onnodig af en de ketel kan in storing vallen.
- Druk valt weg: te weinig water. Het vat staat na afkoelen droog, er kunnen onderdruk en luchtproblemen ontstaan en de pomp kan cavitereren.

| Model (voorbeeld) | Waterdruk volgens de handleiding |
|---|---|
| Remeha Calenta | minimaal 0,8 bar (daaronder verschijnt een symbool), geadviseerde vuldruk 1,5 tot 2 bar, maximaal 3,0 bar |
| Remeha Tzerra Ace | minimaal 0,8 bar, geadviseerd 1,5 tot 2 bar, bijvullen tot 2 bar en na ontluchten opnieuw controleren |
| Vaillant ecoTEC plus VHR | bedrijfsvuldruk 1,0 tot 2,0 bar, minimaal 0,80 bar houden, vuldruk minstens 0,2 bar boven de tegendruk van het vat |
| ATAG i-Serie | voordruk vat 0,5 bar bij 5 m, 1,0 bar bij 10 m en 1,5 bar bij 15 m installatiehoogte boven het vat. Code 117 bij een druk boven 3 bar |
| Intergas Kombi Kompakt HRE | overstortventiel van 3 bar in de aanvoerleiding, op maximaal 500 mm van het toestel |

Voordruk en vuldruk verschillen per fabrikant en per berekening: volg de handleiding van het toestel en van het vat.

!!! gevaar Veiligheidsventiel
Tussen het toestel en het veiligheidsventiel mag geen afsluiter of vernauwing zitten (voorschrift Intergas Kombi Kompakt HRE, ventiel op maximaal 500 mm van het toestel). Een afblazend ventiel betekent dat de druk tot ongeveer 3 bar is gekomen: zoek de oorzaak.
!!!
`
},

/* Feit-id's: HYD-26, HYD-27, HYD-28, HYD-31, INS-39, INS-41.
   HYD-29 (X) zegt hoe dit moet: er is geen algemeen pH-venster, de vensters zijn merkvoorbeelden.
   Nefit-waarde komt uit een oude uitgave (2014, INS-41) en staat er met die kanttekening. */
{
  icoon: '💧',
  titel: 'Waterkwaliteit: pH-vensters',
  inhoud: `
**Er is geen algemeen pH-venster voor cv-water.** Dit zijn voorbeelden per model, geen algemene waarden. Dezelfde pH kan goed zijn voor het ene model en te laag voor het andere: pH 7,2 is goed voor een Remeha Calenta en te laag voor een Vaillant ecoTEC plus VHR.

| Model (voorbeeld) | Eisen uit de handleiding |
|---|---|
| Remeha Calenta | pH 7 tot 9 (onbehandeld) of 7 tot 8,5 (behandeld). Hardheid 0,5 tot 20,0 dH, afhankelijk van het totaal opgestelde vermogen. Geen chemische middelen zonder overleg met Remeha |
| ATAG i-Serie | pH 6,0 tot 8,5. Geleidbaarheid maximaal 2500 µS/cm bij 20 °C, ijzer maximaal 0,2 ppm, hardheid 1 tot 12 dH (onder 20 l/kW) of 1 tot 7 dH (vanaf 20 l/kW). Geen grondwater, demi-water of gedestilleerd water |
| Vaillant ecoTEC plus VHR | pH 8,2 tot 10,0, gemeten in afgetapt water bij 25 °C. Daarbuiten reinigen en conditioneren. Hardheid van vul- en bijvulwater meten |
| Nefit ProLine NxT | pH 7,0 tot 9,5 (oude uitgave, 2014) |

- Bijvullen: ATAG noemt meer dan 5% per jaar een structureel probleem, want vers water brengt zuurstof en kalk in het systeem.
- Spoelen voor het aansluiten: Remeha eist voor de Calenta Ace minimaal 3 keer de systeeminhoud.
- Volgorde: spoelen, vullen met geschikt water (radiatorkranen open), ontluchten, druk opnieuw controleren.
- Het voorschrift van de fabrikant bepaalt. Voeg zonder voorschrift geen chemische middelen toe.
`
},

/* Feit-id's: EXA-01, EXA-03, EXA-04, EXA-05, EXA-06, EXA-09, EXA-10, EXA-12, EXA-16, EXA-20, EXA-31, EXA-32, EXA-36, EXA-43,
   WET-19, WET-28, WET-73.
   Cesuur 70% en de theorietoets: toetsmatrijs 15-07-2019, of die nog geldt is niet bevestigd (EXA-18, C): daarom gehedged.
   Prijzen en vraagaantallen bewust weggelaten (veranderen, of niet bevestigd). Grace-periode na de vervaldatum niet opgenomen (EXA-36 en INS-05 verschillen). */
{
  icoon: '🪪',
  titel: 'Vakmanschap CO in een oogopslag',
  inhoud: `
| Profiel | Niveau |
|---|---|
| Monteur Service & Onderhoud | 2 |
| Eerste Monteur Service & Onderhoud | 3 |
| Monteur Werktuigkundige Installatie | 2 |
| Eerste Monteur Werktuigkundige Installatie | 3 |
| Monteur Werktuigkundige Installatie & Service en Onderhoud | 2 |
| Eerste Monteur Werktuigkundige Installatie & Service en Onderhoud | 3 |

- Het Bewijs van Vakmanschap CO is persoonsgebonden en **5 jaar geldig**. Wie namens een certificaathouder een toestel in bedrijf stelt, moet het hebben (minimaal VP-niveau).
- Na het slagen staat het binnen twee weken in de Vakpaspoort-app. De geldigheid is te controleren in het Centraal Register Techniek.
- Service en onderhoud: controleren en onderhouden, beproeven, in bedrijf stellen. Installatie: nieuwe toestellen installeren, rookgasafvoer aanleggen, beproeven, in bedrijf stellen. De eerste monteur controleert ook werk van anderen en beheert gasinstallaties (service, inclusief CLV) of ontwerpt en legt rookgasafvoer aan in gestapelde bouw (installatie).
- Een zzp'er kiest altijd een eerste-monteurprofiel, want de zzp'er is eindverantwoordelijk.
- Route: profielkeuze, voorbereiding (gratis zelftest, onbeperkt te herhalen), aanmelden en betalen, theorietoets, praktijkexamen (alleen na een gehaalde theorietoets), registratie in het Vakpaspoort.
- **Cesuur theorietoets: 70%.** Dat staat in de toetsmatrijs van 15 juli 2019. Of die matrijs nog ongewijzigd wordt gebruikt, is niet bevestigd: vraag het bij je opleider of de helpdesk van Vakmanschap Techniek.

**Verlengen:**

- Kan vanaf 6 maanden voor de einddatum.
- Eerst de verplichte online module Basiskennis Opfrisser, daarna een theorietoets van maximaal 120 minuten bij een geaccrediteerde examenorganisatie. Er is geen praktijkexamen.
- Bij een voldoende wordt het bewijs automatisch 5 jaar verlengd.

**Na de vervaldatum is het bewijs niet meer geldig.** Je mag dan geen werk meer doen waarvoor het bewijs vereist is. Wie te laat is, moet het volledige initiële traject (theorietoets en praktijkexamen) opnieuw doen. Zet je einddatum in je agenda.

**Wie mag wat (BRL 6000-25):**

- Alleen een VP (Vakbekwaam Persoon) mag in bedrijf stellen, groot onderhoud doen (brander, warmtewisselaar) en een toestel uit bedrijf nemen of niet in bedrijf stellen vanwege veiligheidsrisico's.
- Een VOP (Voldoende Onderricht Persoon) doet de overige taken onder toezicht van een VP.
- Een instromer mag maximaal 3 jaar zonder Bewijs als VOP werken, onder toezicht van een VP niveau 3.
- Het bedrijf heeft daarnaast een eigen certificaat: maximaal 3 jaar geldig, tot 100 kW nominaal vermogen.

Deze cursus is een voorbereiding. Hij geeft geen diploma en geen Bewijs van Vakmanschap CO.
`
}

];
