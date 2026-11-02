# Weboldal-generálási terv

Állapot: a felhasználó mindhárom koncepcióirányt és megépítésüket jóváhagyta.

## Brand brief összefoglaló
Az Eliza Beauty Salon új weboldala elsősorban a Ráday utca környékén élő vagy dolgozó, 35–55 éves, személyre szabott bőrfiatalítást kereső nőket szólítja meg. Az elsődleges cselekvés az időpontkérés, amelyet Eliza személyesen egyeztet vissza. A mesterkozmetikusi szakértelem, a privát, nyugodt környezet, az otthoni rutin támogatása és az 5 alkalmas kúrához tartozó 50%-os elégedettségi garancia építi a bizalmat. Az anti-akné kezelések külön, könnyen megtalálható útvonalat kapnak.

## Közös arculati keretek
- Paletta mindhárom irányban: primary rózsafa `#8E4A5A`, secondary sötét rózsafa `#6E3644`, accent homokarany `#C9A27E`, bg krém `#FAF6F2`, surface púder `#F1E6DF`, text sötét kakaó `#2E2626`, muted szürkésbarna `#6B5F5C`. Vonalak: `#E3D6CF`. A homokarany világos háttéren nem szövegszín.
- Címsor: Cormorant Garamond 500/600; törzs és UI: Jost 400/500. A meglévő logó, komponensformák és méretskála megtartandók a `design-system.md` szerint.
- A különbség az elrendezésben, a képarányokban, az igazításban, a szakaszok belső ritmusában és a bizonyítékok bemutatásában van; a palettát és fontokat a jóváhagyott brief miatt nem változtatjuk.
- Minden irány a brief teljes kezdőoldali szakaszsorrendjét követi. Két meglévő vendégvéleményt használ; új szám, ígéret, értékelés vagy ár nem található ki.
- A stock képek kezelési hangulatot mutatnak, nem helyettesítik Eliza valódi portréját vagy a szalon dokumentálását. A Kisokos és az űrlapok prototípusállapota egyértelmű; nincs színlelt beküldés vagy letöltés.

## Koncepció irányok

### 1. Csendes énidő
- **Paletta és fontok:** a közös paletta és Cormorant Garamond + Jost; túlnyomó krémfelületek, kevés púder, visszafogott rózsafa CTA-k.
- **Vizuális megközelítés:** tágas, fotóközpontú kompozíció. Középre rendezett cím és CTA egy önálló, teljes tartalomszélességű, lekerekített kezelési fotó fölött; nincs képre tett szöveg. A 64 px-es címet rövid, 18 px-es törzsszöveg kíséri. Nagy térközök és széles képek adják a ritmust; a szolgáltatások levegős, egymás alatti sorokban, a két vélemény különálló idézetként jelenik meg. Árnyék nélküli, csendes felületek.
- **Miért illik:** az énidő és a privát kezelés élményét teszi érzékelhetővé; a látogató először a nyugalmat, majd a szakértelmet ismeri meg.
- **Jellegzetes pont:** középre rendezett bevezető alatt egyetlen nagy kezelési pillanat.
- **Kontraszttengelyek:** tágas sűrűség; középre igazított fotós hero; nagy cím–rövid törzs kontraszt; hosszú horizontális ritmus; önálló idézetek; minimális felületváltás.
- **Vázlat:** fejléc → középre zárt cím és gombok → széles kezelési fotó → levegős kezeléssorok → a brief további szakaszai.
- **Fájl:** `koncepcio-1-csendes-enido.html`.

### 2. Szakértő kezek
- **Paletta és fontok:** a közös paletta és Cormorant Garamond + Jost; rendszeresen váltakozó krém- és púderfelületek, hangsúlyos rózsafa navigációs pontok.
- **Vizuális megközelítés:** kiegyensúlyozott, professzionális elrendezés, bal oldali szöveggel és jobb oldali, álló kezelési részletfotóval nyitva. A címben 600-as súly, fegyelmezett hierarchia; a fotó mellett rövid szakmai bemutató szerepel. Három áttekinthető szolgáltatási kártya, jól elkülönített garanciablokk, oldalanként következetes igazítások. A két vélemény desktopon egymás mellett, a négylépéses folyamat áttekinthető sorban jelenik meg. Nincs dekoratív számozás a kezeléseken.
- **Miért illik:** az első kezelés előtt bizonytalan vendégnek segít gyorsan megérteni, milyen segítséget kap és hogyan kérhet időpontot.
- **Jellegzetes pont:** a személyes gondoskodás mellett már az első képernyőn jól látszik a mesterkozmetikusi háttér és az időpontkérés módja.
- **Kontraszttengelyek:** kiegyensúlyozott sűrűség; osztott hero; balra igazítás; 600-as címsorhangsúly; moduláris felületváltások; páros véleményblokk.
- **Vázlat:** fejléc → [szöveg + CTA | álló kezelési fotó] → három kezelési kártya → a brief további szakaszai.
- **Fájl:** `koncepcio-2-szakerto-kezek.html`.

### 3. A bőröd története
- **Paletta és fontok:** a közös paletta és Cormorant Garamond + Jost; krémalap, nagyobb púderes képkísérő felületek, finom rózsafa tipográfiai részletek.
- **Vizuális megközelítés:** személyes szépségnaplót idéző, aszimmetrikus, tipográfiával nyitó kompozíció. A balra rendezett címsor és rövid bevezető uralja az első képernyőt; a kép kisebb, fekvő kivágatként, lejjebb és jobbra jelenik meg. A következő szakaszokban keskeny magyarázó és széles tartalmi oszlopok váltakoznak; a kezelések kártyarács helyett szerkesztett képes sorokban látszanak. A meglévő idézetek nyitott, szerzővel aláírt szövegként jelennek meg. Képek és felületek nem lógnak a szövegre, az olvashatóság elsődleges.
- **Miért illik:** Eliza személyes hangját és az egyéni bőrápolási utat emeli ki; az otthoni rutin és a Kisokos természetesen kapcsolódik a történethez.
- **Jellegzetes pont:** szövegközpontú nyitás és tudatosan eltérő szélességű oszlopok; nincs ismétlődő kártyarács.
- **Kontraszttengelyek:** változó helyi sűrűség; tipografikus hero; aszimmetrikus igazítás; finom tipográfiai hierarchia; váltakozó képes sorok; nyitott idézetek és felületek.
- **Vázlat:** fejléc → nagy balra igazított cím és CTA → beljebb húzott szöveg + kisebb fekvő fotó → eltérő szélességű kezeléssorok → a brief további szakaszai.
- **Fájl:** `koncepcio-3-a-borod-tortenete.html`.

## Tervellenőrzés a brief alapján
Mindhárom irány megfelel a rögzített arculatnak, a célcsoportnak és az időpontkérési célnak. A koncepciók nem színvariációk: hero-szerkezetük, igazításuk, képarányaik, szolgáltatási elrendezésük és szakaszritmusuk is eltér. A meglévő krém–serif megjelenés tudatos márkamegkötés. Az egyediséget a személyes kezelés világából vett fotóválasztás és a kompozíció adja; elhagyjuk a funkció nélküli címkéket, dekoratív számokat és ismétlődő animációkat. A címsorméretek és komponensformák nem írják felül a design systemet.

## Mi készül el
- Statikus HTML projekt Tailwind CSS-sel.
- Három teljes, mobilon is használható kezdőoldal-prototípus, önálló HTML fájlokként.
- `index.html` koncepció-navigátor, amelyből mindhárom változat elérhető.
- A már meglévő Git-repó megőrzése; csak a workflow saját változtatásainak commitolása a projektfelállítási útmutató szerint.
- Irányonként külön alügynök a skill előírása szerint; a közös fájlokat a főügynök kezeli.
- Böngészős ellenőrzés desktop- és mobilméretben, navigáció, képek, GYIK és űrlapállapotok ellenőrzésével.
- Most csak a kezdőoldal-koncepciók készülnek; a menüpontok a prototípuson belüli megfelelő szakaszokra mutatnak, az aloldalak későbbi megvalósításakor kapnak végleges célokat.

## Hogyan nézd meg a prototípusokat
Elkészülés után nyisd meg az `index.html` fájlt a böngészőben; onnan mindhárom koncepcióra át tudsz kattintani:
- `koncepcio-1-csendes-enido.html`
- `koncepcio-2-szakerto-kezek.html`
- `koncepcio-3-a-borod-tortenete.html`

## Következő lépés
A három irány jóváhagyása után mentjük az `iranyok.json` fájlt és a `directions_complete` állapotot, majd felállítjuk a projektet és megépítjük a prototípusokat.
