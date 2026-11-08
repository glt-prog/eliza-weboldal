# Eliza Beauty Salon – onboarding a következő munkamenethez

Átadás dátuma: 2026-11-09. Projektmappa: `D:\ai\eliza-weboldal`.

## Induló utasítás az új munkamenetnek

Egy már megtervezett, kiválasztott koncepcióból felépített weboldal munkáját folytatod. Olvasd el ezt a fájlt, majd a lent megjelölt elsődleges forrásokat. **Ne kezdd újra az interjút vagy a koncepciógenerálást.** A felhasználó a „Csendes énidő” koncepciót választotta; a négy oldal elkészült, de a teljes projekt még nincs kész és élesítés sem történt. A következő konkrét feladatot a felhasználó adja meg.

Kommunikálj magyarul. A weboldal magyar, tegező és Eliza személyes hangján szól. A jóváhagyott megjelenést tartsd meg, és a kért változtatásokat végezd el a szerkeszthető forrásban is, ne csak az előállított HTML-ben. A legutóbbi felhasználói döntések itt szerepelnek; ezek felülírják a régebbi brief vagy terv eltérő részleteit.

Első lépések:
1. Nézd meg a munkakönyvtárat és a `git status --short` kimenetét. Őrizd meg a felhasználó változtatásait.
2. Olvasd el: `HANDOFF.md`, `.webprojekt/brief.md`, `design-system.md`, `.webprojekt/build-pages.cjs`, majd az érintett oldalakat és az `assets/` fájlokat. Tartalmi munkához a `szovegek.md` és az `eliza-jegyzet.md` is kell.
3. A jelenlegi eredményt tekintsd alapnak. A `.webprojekt/state.json` régi `phase: prototypes_complete` mezője **nem jelent újragenerálási feladatot**; a `selected_direction: 1` és a `site_phase: four_pages_complete` jelzi az azóta elkészült munkát.
4. Előnézethez ellenőrizd, fut-e a helyi szerver. Ha nem, indítsd: `node .webprojekt/preview.cjs`. Cím: `http://127.0.0.1:4173/`. Ne feltételezd, hogy egy korábbi chat szerverfolyamata még él.
5. A következő kérés szerint folytasd a finomítást. Ne telepíts keretrendszert és ne publikálj pusztán a munkamenet folytatása miatt.

## Mi történt eddig?

### Tervezés és döntések
- Telepítettük a `frontend-design`, `tervezes`, `generalas` skilleket. Helyük ezen a gépen: `C:\Users\gabor\.codex\skills\`. A tervezési és generálási workflow lezajlott; nem kell újraindítani.
- Átolvastuk az ügyféljegyzetet, a kész oldalszövegeket és a meglévő arculatot.
- Új weboldal készül, nem redesign. A felhasználó jóváhagyta a `.webprojekt/brief.md` dokumentumot.
- Fő cél: **időpontkérés** űrlapon vagy telefonon. Nincs online foglalónaptár, az időpontot Eliza személyesen egyezteti vissza.
- Elsődleges célcsoport: a környéken élő/dolgozó, 35–55 éves, bőrfiatalítást kereső nők. Az aknékezelés külön, jól látható útvonalat kap.
- A meglévő logó, színek és betűtípusok megtartása kötelező.
- A Kisokos-feliratkozó rész marad, bár a letölthető anyag még nincs kész.
- Egységes garancia: **ha a vendég az 5 alkalmas kúra után nem elégedett, a kúra díjának 50%-át visszakapja**. Nem a javulás hiánya a feltétel. A régi szövegforrásban ettől eltérő megfogalmazás is van; ezt ne hozd vissza.

### Koncepciók és megvalósítás
- Három teljes kezdőoldali koncepció készült: Csendes énidő, Szakértő kezek, A bőröd története.
- A felhasználó az **1. Csendes énidő** irányt választotta. A másik két irány archív referencia.
- A kiválasztott főoldal alapján elkészült a négy összekapcsolt oldal:
  - `index.html` – Főoldal; ez már nem koncepcióválasztó.
  - `kezelesek.html` – kezelési kategóriák, további eljárások, három csomag, garancia, vélemények, folyamat, időpontkérő.
  - `rolunk.html` – személyes bemutatás, szakmai történet, bizalomépítő számok, mérföldkövek, értékek, hangulat, időpontkérő.
  - `kapcsolat.html` – elérhetőségek, nyitvatartás, egyetlen kapcsolatfelvételi űrlap, GYIK.
- A navigáció valódi oldalak között működik, az aktív oldal `aria-current="page"` jelölést kap.
- Minden oldalon van időpontkérő, a Kapcsolat oldalon pontosan egy. Hírlevélűrlap csak a Főoldalon van.
- A Kezelések oldalon a csomag-/kezelésválasztó link beírja a választott szolgáltatást az üzenetmezőbe.

## A legutóbbi, megőrzendő finomítások

1. **Kevesebb üres hely:** általános szakasztérköz desktopon 80 px, mobilon 48 px. A főoldal szellős jellege maradjon meg.
2. **Vendégvélemények:** két púderes, lekerekített doboz desktopon egymás mellett; Jost 18 px. Mobilon egymás alatt, 16 px. A két meglévő vélemény Fruzsitól és Magditól származik; újat nem találunk ki.
3. **Főoldali hero:** eltávolítottuk a gombok alatti „Budapest, Ráday utca 1.” és „Személyesen, rád figyelve” rövid feliratokat. A cím és az elérhetőségek az oldal egyéb részein megmaradnak.
4. **Hero-elválasztó:** a Főoldal és a Kezelések nyitó szakasza alatt finom, rózsafa színű, statikus SVG-hullámvonal van. A háttér maradt krémszínű.
5. **Rólunk számblokk:** külön púderes szakasz, „Szakértelem, amire támaszkodhatsz” címmel: **14+ év tapasztalat, 1300+ vendég, 350+ féle kozmetikum**. Desktopon három oszlop, mobilon egymás alatt.
6. **Képismétlés:** a teljes négyoldalas webhelyen minden stock fotó csak egyszer szerepel. A logók ismétlése természetesen megmarad. Különböző szerepű szakaszokban ne használd újra ugyanazt a fotót.
7. **Kapcsolat hero:** az „Az űrlaphoz” gomb csak mobilon látható; desktopon rejtett, mert közvetlenül következik az űrlap.
8. **Rólunk térköz:** a számblokk felső térköze 40 px desktopon, 24 px mobilon.
9. **Rólunk legutolsó módosítása:** töröltük az „Adj egy kis figyelmet önmagadnak” címet és a „Ha úgy érzed, eljött az idő a személyes gondoskodásra, szeretettel várlak. Beszéljük át, mire van most szüksége a bőrödnek.” bekezdést is. **Ezeket ne állítsd vissza.** Az egykori CTA-blokk (`.about-cta-section`) desktopon teljesen rejtett, nem hagy üres helyet; mobilon csak az „Időpontot kérek” gomb marad benne. A közös kapcsolatfelvételi szakasz ezt követően továbbra is megvan.

## Arculat és tartalmi szabályok
- Nyugodt, nőies, elegáns, barátságos prémium hangulat, természetes fényű fotókkal.
- Rózsafa `#8E4A5A`, sötét rózsafa `#6E3644`, krém `#FAF6F2`, púder `#F1E6DF`, sötét kakaó `#2E2626`, szürkésbarna `#6B5F5C`, vonal `#E3D6CF`.
- Homokarany `#C9A27E` csak díszítésre; világos háttéren ne legyen szövegszín.
- Címsor: Cormorant Garamond 500/600; törzs és UI: Jost 400/500. H1 desktop 64 px, mobil 40 px; H2 44/32 px.
- Max. tartalomszélesség 1200 px, folyó szöveg általában max. 680 px; mobil oldalmargó 20 px. Finom lekerekítések, kapszulagombok.
- Ne legyen harsány dekoráció, neon, erős színátmenet vagy sötét mód.
- Ne találj ki új árakat, adatokat, szakmai ígéreteket, értékeléseket vagy eredményfotókat.
- A stock emberek nem Eliza portréi, a fotók nem a valódi szalon dokumentációi és nem kezelési eredménybizonyítékok.
- Megadott csomagárak: Anti-Age 79 000 Ft, Anti-Age Plus 99 000 Ft, Tini Anti-Akné 59 000 Ft. A részletes csomagtartalom a `szovegek.md` és a generátor fájlban van.

## Technikai felépítés – különösen fontos!

Egyszerű statikus HTML/CSS/JavaScript projekt, nincs npm-telepítés, framework vagy kötelező buildrendszer. A négy aktuális oldal közös stílusa az `assets/site.css`, közös működése az `assets/site.js`. A fontok a Google Fontsról töltődnek. A négy aktuális oldal már nem használ Tailwind Play CDN-t; a régi koncepciók még igen.

**Van egy saját oldalgenerátor:** `.webprojekt/build-pages.cjs`.

```powershell
node .webprojekt/build-pages.cjs
```

Ez újraírja a négy HTML-oldalt **és** az `assets/site.css` / `assets/site.js` fájlokat. Az aloldali tartalmak és az újabb stíluskiegészítések a generátorban vannak. A közös alaphoz a generátor **beolvassa a `koncepcio-1-csendes-enido.html` fájlt**: ebből veszi az alapstílusokat, főoldali szakaszokat, közös űrlapot, fejlécet/láblécet és alap-JavaScriptet.

**Ezért a `koncepcio-1-csendes-enido.html` jelenleg technikai függőség, nem eldobható köztes eredmény.** A benne látható régebbi hero-feliratokat és képeket a generátor módosítja az aktuális oldalak előállításakor. A koncepciófájl önmagában nem tükrözi az összes legutóbbi döntést.

Javításkor először döntsd el, az alap-koncepció közös része vagy a generátor kiegészítése az érintett forrás. Az újabb, oldalspecifikus módosítások jellemzően a generátorba kerüljenek. Ha csak az előállított CSS/HTML fájlt szerkeszted, a következő generálás felülírja a változtatást. A generátor futtatása előtt ellenőrizd, nem kerültek-e bele azóta felhasználói kézi módosítások a kimenetekbe.

Előnézet:

```powershell
node .webprojekt/preview.cjs
```

Ez csak `127.0.0.1:4173` címen szolgálja ki a projektet. CSS és JS MIME-típusok be vannak állítva. A böngészős ellenőrzés HTTP-n történt; a tesztböngésző nem engedi a `file://` navigációt. Egy korábbi portfoglalásnál a saját korábbi szerverfolyamatot kell rendezni, ne indíts sok másolatot.

## Fotók – a jelenlegi kiosztás

Az eredeti stock fájlok az `images/` gyökerében megmaradtak. A ténylegesen használt, optimalizált JPEG-másolatok az `images/web/` alatt vannak, legfeljebb 1800 px hosszabb oldallal.

| Továbbviendő fájl | Helye az oldalon |
|---|---|
| `images/web/soin-lumiere.jpg` | Főoldali hero |
| `images/web/arcmasszazs.jpg` | Főoldali Eliza-bemutatkozás hangulatképe |
| `images/web/routine.jpg` | Főoldali otthoni arcápolás / Kisokos |
| `images/web/soin-douceur.jpg` | Kezelések – Belico |
| `images/web/peau-mature.jpg` | Kezelések – Mesotica |
| `images/web/szemelyes-gondoskodas.jpg` | Rólunk – történet hangulatképe |
| `images/web/relaxation.jpg` | Rólunk – nyugodt kezelési hangulat |
| `images/web/contact.jpg` | Kapcsolat – egyeztetést idéző részletkép |

Eredeti fotófájlokhoz rendelés: `.webprojekt/negy-oldal.md`. A felhasználó által hozott képek teljes licencadatai nincsenek a projektben. További válogatáshoz az eredeti készlet továbbra is a repóban van.

## Meddig kész, mi van még nyitva?

**Elkészült:** a négy oldal megjelenése és összekapcsolása, reszponzív navigáció, GYIK-ek, közös űrlapok megjelenése/validálása, csomagválasztás üzenetmezőbe írása, fotóválogatás/optimalizálás és a felsorolt finomítások.

**Nincs még kész / nincs eldöntve:**
- A felhasználó szerint még nincs minden készen; a további vizuális/tartalmi kéréseket az új munkamenetben fogja megadni. Nem született végső átadási vagy élesítési jóváhagyás.
- Nincs bekötött szerveroldali kapcsolatfelvétel vagy e-mail-küldés. Az űrlapok `preventDefault` után őszinte bemutató-visszajelzést adnak; nem küldenek adatot és nem színlelnek sikert.
- Nincs hírlevélszolgáltató, tényleges feliratkozás, Kisokos-fájl vagy kézbesítés.
- Nincs végleges adatkezelési tájékoztató. A láblécben a bemutató adatkezelési állapotát ismertető lenyitható rész van.
- A telefon (`+36 20 344 9272`) és e-mail (`hello.elizabeauty@gmail.com`) az ügyféljegyzet szerint fiktív feladatadat. Élesítés előtt megerősítendő/cserélendő.
- Nincs saját Eliza-portré vagy igazolt szalonfotó. Stock képet ne nevezz át valódi portrévá.
- A 14+ éves tapasztalatot a felhasználó kifejezetten kérte a számblokkba. Ne számítsd át automatikusan a naptár alapján; a 2011-es kezdettel együtt élesítés előtt tartalmilag ellenőrizhető.
- Nincs publikált webhely, domain-/hosting-beállítás vagy backend. A mostani munka helyi projekt.

Ezek folytatási pontok, nem felhatalmazások tetszőleges szolgáltató kiválasztására vagy publikálásra. A következő konkrét kérés szerint dolgozz.

## Ellenőrzések és Git-állapot

- A négy oldal korábban 1440 px desktop-, 375 px mobil- és 768 px táblagépes nézetben ellenőrizve, vízszintes kilógás nélkül.
- A navigáció, mobilmenü, GYIK, űrlap-bemutató visszajelzése és a csomagválasztás böngészőben tesztelve.
- A hullámvonal, a számblokk, a Kapcsolat hero gomb desktop/mobil láthatósága böngészőben ellenőrizve.
- A fotók egyediségét a négy oldalon ellenőriztük. A helyi fájl- és horgonyhivatkozásokra és a JavaScript szintaxisára is volt ellenőrzés.
- A legutolsó apró Rólunk-térköz-/címtörlés-/mobil-CTA változtatásoknál generálás, forrás- és szintaxisellenőrzés történt; az utolsó címtörlés után új böngészős ellenőrzés nem volt. Érdemes innen kezdeni a következő vizuális ellenőrzést.
- Nincs külön automata tesztcsomag. A régi `.webprojekt/ellenorzes.md` még a prototípusfázist dokumentálja.
- A handoff előtti ellenőrzéskor a Git munkakönyvtára tiszta volt. Legutolsó commit: `6bac318` – „A négy oldal, javításokkal”; előtte `62468a3` – „A négy oldal első verziója”. A handoff fájl maga ebben a lezáró lépésben készül, külön commit nélkül.

## Kötelezően továbbviendő fájlok

Az alábbiak együtt elegendők az onboardinghoz, a jelenlegi négy oldal megjelenítéséhez és a folytatható szerkesztéshez. A rejtett `.webprojekt` mappát ne hagyd ki másoláskor!

**Kontextus és szerkeszthető forrás:**
- `HANDOFF.md` – ez legyen az új munkamenet belépési pontja.
- `.webprojekt/brief.md` – jóváhagyott brief, a jelen handoffban felsorolt későbbi döntésekkel együtt.
- `.webprojekt/state.json` – kiválasztott irány és oldalak állapota.
- `.webprojekt/build-pages.cjs` – a négy oldal és közös assetek generátora.
- `.webprojekt/preview.cjs` – helyi HTTP-előnézet.
- `koncepcio-1-csendes-enido.html` – **a generátor kötelező bemenete**.
- `design-system.md` – megtartandó arculati szabályok.
- `szovegek.md` – eredeti részletes tartalom és csomagadatok.
- `eliza-jegyzet.md` – ügyfélháttér, üzleti célok és a fiktív adatok jelölése.
- `.webprojekt/negy-oldal.md` – fotóforrások hozzárendelése és megvalósítási jegyzet. Egyes korábbi mondatok történetiek; a legfrissebb állapotot ez a handoff és a kód adja.

**Aktuális weboldal:**
- `index.html`
- `kezelesek.html`
- `rolunk.html`
- `kapcsolat.html`
- `assets/site.css`
- `assets/site.js`
- `logo/logo.svg`
- `logo/favicon.svg`
- Az `images/web/` mappa **mind a nyolc fenti JPEG-fájlja**.

**Hasznos, de nem feltétlenül onboarding-anyag:**
- `README.md` – tartalmaz történeti koncepcióleírást is, ezért nem minden mondata az aktuális fázisról szól.
- `logo/logo-feher.svg`, PNG logó- és faviconváltozatok.
- Az eredeti stock fájlok az `images/` gyökeréből, ha új képkivágást vagy további válogatást kér a felhasználó.
- `.gitignore`, `.gitattributes` és természetesen a Git-repó.

**Korábbi köztes eredmények, nem szükséges velük feltölteni az új kontextust:**
- `koncepcio-2-szakerto-kezek.html`
- `koncepcio-3-a-borod-tortenete.html`
- `koncepciok.html`
- `.webprojekt/iranyok.json`, `.webprojekt/plan.md`, `.webprojekt/head-sablon.html`
- `.webprojekt/ellenorzes.md`, `.webprojekt/qa/` korábbi ellenőrzési képei
- Az első három stock kép (`images/kezeles.jpg`, `images/arcapolas.jpg`, `images/rituale.jpg`) az aktuális négyoldalas webhelyen már nem használt; a régi koncepciók megjelenítéséhez lehet rájuk szükség.

**Fontos kivétel:** az első koncepció HTML-je köztes eredetű, de a jelenlegi generátor miatt továbbra is a kötelező készlet része. Csak tudatos forrás-átszervezés után válhat elhagyhatóvá.
