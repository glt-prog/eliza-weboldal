# eliza-weboldal
Sipos Eliza weboldala - fejlesztés AI-val

## Aktuális weboldal

A kiválasztott „Csendes énidő” koncepcióból elkészült a négy összekapcsolt oldal:

- Főoldal: `index.html`
- Kezelések: `kezelesek.html`
- Rólunk: `rolunk.html`
- Kapcsolat: `kapcsolat.html`

A közös megjelenés és működés az `assets/site.css` és `assets/site.js` fájlokban van. A webre optimalizált új stock fotók az `images/web/` mappában találhatók. A kiválasztás és az ellenőrzések részletei: `.webprojekt/negy-oldal.md`.

A korábbi koncepcióválasztó a `koncepciok.html` fájlban maradt meg. Az alábbi koncepcióleírások az előző tervezési fázist dokumentálják; a jelenlegi `index.html` már a Főoldal.

## Kezdőoldal-koncepciók

A jóváhagyott brief: `.webprojekt/brief.md`. A három irány terve: `.webprojekt/plan.md`.

Nyisd meg az `index.html` fájlt a böngészőben, és válassz a három kezdőoldal közül:

- `koncepcio-1-csendes-enido.html`
- `koncepcio-2-szakerto-kezek.html`
- `koncepcio-3-a-borod-tortenete.html`

Nincs telepítés vagy buildlépés. A Google Fonts és a Tailwind Play CDN betöltéséhez internetkapcsolat kell; a helyi fotók és a saját CSS internet nélkül is elérhetők.

Helyi HTTP-előnézet Node.js-szel:

```text
node .webprojekt/preview.cjs
```

Ezután: http://127.0.0.1:4173 . Leállítás: Ctrl+C.

## A prototípusok működése

- Most a kezdőoldal változatai készültek el; a menüpontok az adott prototípus szakaszaihoz vezetnek.
- Az időpontkérő és a hírlevélűrlap nem küld adatot. Kitöltés után jelzi, hogy bemutató űrlapról van szó.
- Az Arcápolási Kisokos később készül el, nincs valódi letöltés vagy e-mailes kézbesítés.
- Az adatkezelési rész a prototípus működését ismerteti; a végleges tájékoztató elkészítendő.
- A telefon és az e-mail az ügyféljegyzetben megadott fiktív feladatadat.
- A stock hangulatfotók nem Elizát vagy saját szalonját ábrázolják. Források: `images/forrasok.md`.
