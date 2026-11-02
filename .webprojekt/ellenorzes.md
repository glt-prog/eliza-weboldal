# Prototípusok ellenőrzése

Mindhárom kezdőoldal és az `index.html` koncepció-navigátor elkészült.

## Böngészős ellenőrzés
- Mindhárom oldal megnyitva helyi HTTP-szerveren, 1440 × 1000 px asztali és 375 × 812 px mobilnézetben.
- 768 × 1024 px táblagépes szélességen is ellenőrizve mindhárom oldal: nincs vízszintes dokumentumkilógás.
- Asztali H1-méret 64 px, mobilon 40 px. A később betöltődő Tailwind reset tipográfiai felülírása javítva.
- Mindhárom mobilmenü nyitása és zárása működik; az aria-expanded állapot változik.
- Mindhárom oldalon GYIK-elem nyitása ellenőrizve.
- Mindhárom kapcsolati és hírlevélűrlap kitöltve fiktív tesztadatokkal. A beküldés helyi prototípus-visszajelzést ad; nem színlel üzenetküldést vagy feliratkozást.
- A harmadik irány adatkezelési dialógusának nyitása és zárása ellenőrizve.
- Képek és logók megjelenése ellenőrizve; a lustán betöltődő alsó képek a megfelelő szakaszhoz görgetve betöltődnek.

## Fájlok ellenőrzése
- Mind a négy HTML-fájlban a hivatkozott helyi fájlok és belső horgonyok léteznek.
- Nincs ismételt HTML-azonosító.
- Minden inline JavaScript blokk szintaktikailag érvényes.
- Mindhárom koncepció teljes kezdőoldal; az aloldalak nem készültek el ebben a lépésben.

## Tudatos prototípuskorlátok
- Nincs szerveroldali üzenetküldés, hírlevélkezelés vagy Kisokos-letöltés.
- Az adatkezelési szöveg a prototípus állapotát ismerteti; nem végleges tájékoztató.
- A Tailwind Play CDN és a Google Fonts internetkapcsolatot használ. Saját CSS és helyi fotók rendelkezésre állnak; a teljes offline megjelenés külön nem lett böngészőben tesztelve.
- A fájlprotokoll közvetlen megnyitását a tesztböngésző nem engedi; a böngészős ellenőrzés HTTP-előnézeten történt.
