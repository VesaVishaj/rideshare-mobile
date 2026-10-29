# RideShare — Java 5 · Hyrja dhe lejet

Ruaje si java-05.md pranë README, jashtë aplikacioni/.
Hiqi shenjat []. Mos vendos sekrete, email ose pamje të kredencialeve.

## Çfarë ndërtova
Identiteti është ID-ja e llogarisë GitHub të verifikuar, të cilën serveri e merr nga sesioni. Roli (`udhetar` ose `shofer`) ruhet veçmas në tabelën `profilet` në Neon dhe përcakton se cilat veprime mund të kërkojë përdoruesi. Pronësia ruhet te `udhetimet.shofer_id`; serveri lejon ndryshimin e orës vetëm kur ID-ja e pronarit përputhet me identitetin e sesionit dhe profili ka ende rolin `shofer`.

## Provat që bëra
### Prova 1: Hyrja, rifreskimi dhe dalja
Prova manuale nuk është kryer ende. Kodi i panelit shfaq udhëzimin për hyrje kur nuk ka sesion dhe emrin/rolin pas hyrjes. Nuk kam verifikuar në shfletues sjelljen pas hyrjes, rifreskimit ose daljes.

### Prova 2: Shoferi ndryshon udhëtimin e vet
Prova manuale nuk është kryer ende. Nuk e kam ndryshuar orën në Neon; prandaj nuk mund të raportoj rezultat nga paneli, lista, faqja e detajeve ose SQL Editor. Ora fillestare e ID 2 në të dhënat e laboratorit është 08:15.

### Prova 3: Veprimi pa leje refuzohet
Prova manuale nuk është kryer ende. Nuk e kam ndryshuar ID-në e formularit dhe nuk kam verifikuar rezultatin në Neon. Kodi synon të shfaqë “Nuk ke leje për këtë udhëtim. Ora nuk ndryshoi.” kur pronari nuk përputhet, por kjo sjellje duhet ende provuar.
Provat shtesë me heqjen e rolit dhe formularin e vjetër janë opsionale pas dorëzimit.

## Ku gjendet puna
Repository: nuk kam link publik për të shënuar. Demo në Vercel: nuk është publikuar nga kjo punë. Skedarët e Java 5 janë në `aplikacioni/`: `schema-java05.sql`, `src/lib/auth.ts`, `src/app/api/auth/[...nextauth]/route.ts`, `src/components/Hyrja.tsx`, `src/lib/lejet.ts`, `src/app/panel/actions.ts`, `src/app/panel/page.tsx`; lidhja për panelin u shtua te `src/app/page.tsx`.

## Çfarë mbetet për përmirësim
Kërkesa për vend është ende simulim. Më pas do të shtoja një formular real kërkese, ruajtjen e saj në databazë dhe një pamje ku shoferi mund ta pranojë ose refuzojë.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për të shtuar skemën SQL dhe skedarët e hyrjes. Provat manuale dhe ekzekutimi i SQL-së në Neon nuk janë kryer ende.
