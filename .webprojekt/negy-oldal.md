# A kiválasztott koncepció megvalósítása

A felhasználó a Csendes énidő koncepciót választotta. A négy oldal a kisebb szakasztérközökkel és az egymás melletti, kisebb betűs vendégvéleményekkel készült el.

## Oldalak és közös fájlok
- `index.html`: Főoldal, a kiválasztott koncepció alapján.
- `kezelesek.html`: kezelési kategóriák, további eljárások, három csomag a megadott árakon, garancia, vélemények, folyamat és időpontkérő.
- `rolunk.html`: személyes bemutatkozás, történet, 2011/2018/2019 szakmai mérföldkövek, értékek, kezelési hangulat, időpontkérő.
- `kapcsolat.html`: elérhetőségek, nyitvatartás, egyetlen kapcsolatfelvételi űrlap és GYIK.
- `assets/site.css`, `assets/site.js`: a négy oldal közös stílusai és működése. A végleges oldalak nem igénylik a Tailwind Play CDN-t; a Google Fonts külső betöltés maradt.
- `koncepciok.html`: a korábbi koncepcióválasztó megőrzött változata. A koncepciófájlok is megmaradtak.
- `.webprojekt/build-pages.cjs`: a közös részekből előállítja a négy oldalt. Forrása a kiválasztott koncepció, az aloldali tartalom és a közös bővítések ebben a generátorban vannak. Újragenerálás: `node .webprojekt/build-pages.cjs`.

## Fotóválogatás
A felhasználó által az `images/` mappába tett készletből kiválasztott fotók. Az eredeti fájlokat nem módosítottuk. Az `images/web/` mappában legfeljebb 1800 px hosszabb oldalú, optimalizált JPEG-másolatok vannak.

| Eredeti fájl | Webes másolat | Használat és indok |
|---|---|---|
| pexels-ivan-s-5659052.jpg | soin-lumiere.jpg | Főoldali nagy fotó, világos krém/bézs kezelési környezet |
| pexels-kerimeveyik-37033485.jpg | soin-douceur.jpg | Személyes gondoskodás és Belico, meleg természetes bőrtónusok |
| pexels-cottonbro-7582562.jpg | peau-mature.jpg | Mesotica, az érett bőr kezelését mutató, visszafogott kép |
| pexels-arina-krasnikova-6663390.jpg | routine.jpg | Otthoni arcápolás és Kisokos, meleg semleges háttér |
| pexels-kerimeveyik-15866050.jpg | relaxation.jpg | Rólunk oldal, nyugodt kezelési hangulat |
| pexels-teona-swift-6874304.jpg | contact.jpg | Kapcsolati rész, természetes színű, egyeztetést idéző részlet |

A képek stock illusztrációk: nem Eliza portréi, nem a valódi szalon fotói, és nem előtte–utána eredménybizonyítékok. A felhasználó által gyűjtött fotók eredeti licencadatai nem szerepelnek a projektben.

## Ellenőrzés
- Mind a négy oldal helyi fájl- és horgonyhivatkozásai ellenőrizve, nincs hiányzó cél vagy duplikált azonosító.
- Közös JavaScript szintaxisa ellenőrizve.
- A négy oldal asztali és 375 px mobilnézetben megnyitva; 768 px-en is ellenőrizve, nincs vízszintes kilógás.
- A menü valódi oldalakra navigál, az aktív oldal jelölt.
- A csomagválasztás beírja a választott csomagot az üzenetmezőbe.
- A Kapcsolat oldali űrlap fiktív adatokkal kipróbálva: csak a bemutató állapotát jelzi, nem színlel küldést.
- A GYIK és a mobilmenü ellenőrizve.

## Nyitott élesítési feladatok
A korábbi brief szerint az e-mail-küldés/hírlevélszolgáltatás nincs bekötve, a Kisokos még készül és az adatkezelési szöveg nem végleges. A fiktív elérhetőségeket és az üzleti tartalmat élesítés előtt meg kell erősíteni. A mostani feladat négy összekapcsolt, helyben böngészhető oldal elkészítése volt.
