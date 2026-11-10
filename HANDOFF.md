# Eliza Beauty Salon – MVP-átadás

**Átadás:** 2026. november 10.
**Állapot:** Az MVP elkészült, élesben fut. A projekt egyelőre szünetel. A következő munkamenetben az itt leírt állapotból indulj, és a felhasználó következő konkrét kérésén dolgozz.

- Éles oldal: [eliza-beauty.netlify.app](https://eliza-beauty.netlify.app/)
- GitHub: [glt-prog/eliza-weboldal](https://github.com/glt-prog/eliza-weboldal), ág: `main`
- Utolsó weboldal-commit az átadáskor: `b70fba7` – Mobilos PageSpeed eredmény javítása. A helyi `main` és az `origin/main` ezen a ponton egyezett. A push és az éles deploy megtörtént a felhasználó visszajelzése szerint.
- Netlify a GitHub-repóból publikálja a `public` mappát. A HTML, a CSS és a JavaScript generált változatai a repóban vannak, így a jelenlegi publikáláshoz elegendő a kész mappa.

## Az elkészült MVP

A három kezdőoldali koncepcióból a felhasználó a **Csendes énidő** irányt választotta. Ebből épült fel a magyar, tegező, Eliza személyes hangján megszólaló webhely. Fő célja a személyes időpont-egyeztetés. A bőrfiatalítás a fő ajánlat, az anti-akné kezelések külön navigációs útvonalat kaptak.

| Fájl a `public/` mappában | Szerep |
| --- | --- |
| `index.html` | Főoldal, kezelésáttekintés, Eliza bemutatása, vendégvélemények, GYIK, Kisokos, időpontkérő |
| `kezelesek.html` | Kezelések, három csomag, elégedettségi garancia, időpontkérő. A kezelés- és csomaglinkek előtöltik az üzenetmezőt. |
| `rolunk.html` | Eliza története, szakmai mérföldkövek, tapasztalati számok, értékek és időpontkérő |
| `kapcsolat.html` | Elérhetőségek, nyitvatartás, egyetlen időpontkérő és GYIK |
| `adatkezeles.html` | A láblécből és az űrlapokból elérhető adatkezelési tájékoztató tervezete |
| `koszonjuk.html` | Sikeres űrlapbeküldés utáni visszajelzés, keresőindexelés nélkül |

Az **Arcápolási Kisokos** közvetlenül, adatmegadás nélkül letölthető a főoldalról. A jelenlegi PDF-et a felhasználó előzetesnek adta át. A végleges dokumentum a `public/Arcápolási Kisokos.pdf` fájl cseréjével kerülhet a helyére, azonos fájlnévvel. A Kisokos fotója asztali nézetben kitölti a jobb oldali oszlopot, mobilon a szöveg és a letöltési link után jelenik meg.

### Űrlapok és sütikezelés

- A Netlify **Form detection** be van kapcsolva. A négy űrlap neve `idopontkeres-index`, `idopontkeres-kezelesek`, `idopontkeres-rolunk` és `idopontkeres-kapcsolat`. A név, e-mail, üzenet és a tájékoztató megismerését jelző kötelező pipa kerül a Netlify Forms rendszerébe.
- Sikeres beküldéskor megnyílik a `/koszonjuk.html`. Ez a beküldésről ad visszajelzést. Az e-mail-értesítés a szalonnak szól, a vendég webes visszajelzést kap. Az időpontot Eliza személyesen egyezteti.
- A felhasználó élesben mind a négy űrlapról sikeres e-mail-küldést igazolt. Az értesítési címzett a Netlify **Forms → Submission notifications** részében kezelhető. A pontos címzettet a repó alapján nem lehet megállapítani.
- Mind a négy űrlapon a `netlify-honeypot="bot-field"` egy rejtett `bot-field` mezőre mutat. A változást a generált HTML-ben ellenőriztük. A szándékosan kitöltött csapdamező éles elutasításáról nincs külön teszteredmény.
- A CookieYes kód mind a hat oldal közös fejlécében szerepel, a saját weboldalszkript előtt. A betűtípusok a Google Fonts szolgáltatásból töltődnek. Hírlevél-feliratkozás, analitika és online foglalónaptár az MVP-ben nincs.

### SEO és teljesítmény

- Egyedi title és meta description, canonical URL, Open Graph és Twitter Card mind a hat oldalon. Strukturált adat készült a szalonhoz, Sipos Elizához és a főoldali GYIK-hez. A forrásjegyzetben fiktívként jelölt telefon és e-mail kimaradt a strukturált adatokból.
- A `robots.txt` a jelenlegi Netlify-domainen lévő `sitemap.xml`-re hivatkozik. A sitemapben öt oldal van. A köszönőoldal `noindex` jelölésű és nincs a sitemapben. A Vikingo SEO skill ellenőrzése 20 hibáról 0-ra javult. A Search Console beállításáról nincs megerősítés.
- A nyolc jóváhagyott fotó WebP-ben van. A főoldali nyitókép és a bemutatkozás fotója 480 és 768 px széles változatokat is kapott. A nyitókép és a közös CSS előtöltést kapott. Helyi böngészőtesztben 390 px-es, 2× képpontsűrűségű nézetben a két fotó együtt kb. 185 kB helyett 79 kB volt.
- Utolsó, felhasználó által közölt **éles PageSpeed-eredmény**: mobil **89 → 97**, asztali **100 → 99**. Ezek az adott mérés pontszámai. A [korábbi mobiljelentés](https://pagespeed.web.dev/analysis/https-eliza-beauty-netlify-app/4mrk570n37?form_factor=mobile) 3,3 mp LCP-t mutatott. A gyorsítás utáni LCP-érték nincs dokumentálva.

## Innen lehet folytatni

1. Nézd meg a munkakönyvtárat, a `git status --short --branch` kimenetét és az utolsó commitokat. Az esetleges helyi változtatásokat őrizd meg.
2. Olvasd el a [jóváhagyott briefet](.webprojekt/brief.md), a [design systemet](design-system.md) és a [generátort](.webprojekt/build-pages.cjs). Tartalmi munkához a [szövegforrás](szovegek.md) és az [ügyféljegyzet](eliza-jegyzet.md) is kell. Eltérésnél a felhasználó frissebb döntései és az aktuális kód az irányadó. A `.webprojekt/state.json` és a régi QA-jegyzet korábbi fázist dokumentál.
3. A generátor a `koncepcio-1-csendes-enido.html` fájlból veszi a közös alapot és a főoldal nagy részét. **Ez ma is kötelező bemenet.** Az aloldalak, a Netlify Forms, a CookieYes, a SEO és az újabb stílusok jelentős része a `.webprojekt/build-pages.cjs` fájlban van. Az adatkezelési oldal szövegforrása a `.webprojekt/adatkezeles.html`. A módosítást a megfelelő forrásfájlban végezd el, és újragenerálás előtt ellenőrizd a `public/` alatt esetleg kézzel módosított fájlokat.
4. Generálás és helyi előnézet a repó gyökeréből:

   ```powershell
   node .webprojekt/build-pages.cjs
   node .webprojekt/preview.cjs
   ```

   A generátor a hat HTML-t, a közös `assets/site.css` és `assets/site.js` fájlokat, valamint a sitemapet és a robots.txt-t írja a `public/` mappába. Az előnézet a [127.0.0.1:4173](http://127.0.0.1:4173/) címen fut. A helyi szerver az űrlap POST-kéréseit 405-tel elutasítja, így a tényleges beküldést, köszönőoldali átirányítást és e-mailt Netlify-on kell kipróbálni. A projekthez Node.js elég, csomagtelepítésre nincs szükség.
5. Publikálás előtt nézd át a változásokat. A `public/` csak nyilvános fájlokat tartalmazzon. A mintadokumentum, eredeti fotók, briefek és prototípusok a mappán kívül vannak. A GitHub-push után ellenőrizd a Netlify deploy eredményét. Űrlap- vagy consent-módosításnál éles próba is szükséges.

### Megőrzendő döntések

- Marad a Csendes énidő megjelenés, a rózsafa, krém és púder arculat, a Cormorant Garamond és a Jost. A korábbi két koncepció archív referencia.
- A garancia feltétele az elégedettség: ha a vendég az öt alkalmas kúra után nem elégedett, a kúra díjának 50%-át kapja vissza. Az elfogadott csomagárak 79 000, 99 000 és 59 000 Ft.
- A két meglévő vélemény Fruzsitól és Magditól származik. A Rólunk számblokk jóváhagyott értékei 14+ év, 1300+ vendég és 350+ féle kozmetikum. Ezeket ne módosítsd automatikusan. A Rólunk külön CTA-szakasza csak mobilon jelenik meg, egy gombbal.
- A stockfotók hangulatképek. A négy főoldalon ugyanaz a fotó egy vizuális szerepben szerepel. A reszponzív változatok ugyanannak a képnek a különböző méretű fájljai.

## Javaslatok a következő szakaszhoz

1. **Adatkezelési tájékoztató és elérhetőségek.** A nyilvános tájékoztató jelenleg tervezet. A valós ügyfélforgalom előtt erősítsétek meg a hivatalos adatkezelői adatokat, a nyilvános telefont és e-mailt, a Netlify-értesítés tényleges címzettjét, a hozzáférők körét és a megőrzési, illetve törlési időt. A tájékoztatót igazítsátok az éles tárhelyhez és a CookieYes tényleges működéséhez.
2. **Valós szalonanyagok.** A végleges Kisokos cseréje után ellenőrizzétek a letöltést. Saját Eliza-portré vagy szalonfotó erősítheti a bemutatkozást. A jelenlegi stockfotók licencadatait érdemes dokumentálni, a látható szakmai számokat és a nyitvatartást pedig Elizával megerősíteni.
3. **Saját domain és helyi kereshetőség.** Ha lesz saját domain, a generátor `siteOrigin` értékét is frissítsd, majd generáld újra a canonical, megosztási és strukturált adatokat, a sitemapet és a robots.txt-t. Ellenőrizd az átirányítást és a CookieYes domainbeállítását. Ezután jöhet a sitemap beküldése a Search Console-ba és az ellenőrzött adatokkal kitöltött Google Business Profile.
4. **Karbantartási ellenőrzések.** Hasznos lehet egy rövid automatikus ellenőrzés a belső linkekre, a képekre, a sitemapre és a négy űrlap HTML-jelölésére. Deploy után időnként próbálj ki egy normál beküldést és egy honeypot-próbát, ellenőrizd a CookieYes választásait, és ismételd meg az azonos feltételekkel végzett mobilos PageSpeed-mérést. A jelenlegi 97/99 mellett a mérések alapján érdemes dönteni a következő gyorsításról.
