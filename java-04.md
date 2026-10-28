# RideShare — Java 4 · Neon dhe PostgreSQL

Ruaje këtë skedar si java-04.md pranë README, jashtë aplikacioni/.
Plotëso të gjitha përgjigjet; hiqi shenjat [].
Mos vendos DATABASE_URL, pamje të kredencialeve ose të dhëna reale.

## Çfarë ndërtova
[Konfigurova databazën PostgreSQL në Neon dhe e lidha me aplikacionin RideShare duke përdorur variablën `DATABASE_URL` në skedarin `.env.local`.

Lista e udhëtimeve i lexon të dhënat nga databaza përmes funksionit `lexoUdhetimet`. Detajet e një udhëtimi shfaqin informacionin përkatës sipas ID-së. Në këtë mënyrë, të dhënat nuk varen vetëm nga ato të shkruara drejtpërdrejt në kod, por lexohen nga databaza.
] 

## Provat që bëra
### Prova 1: Ndryshimi në databazë shfaqet në aplikacion
[Në SQL Editor të Neon ndryshova orën e udhëtimit me ID 2 nga 08:15 në 08:25.

Pas rifreskimit të aplikacionit, kontrollova nëse lista e udhëtimeve dhe faqja e detajeve shfaqnin orën e re. Pastaj e ktheva orën në 08:15 dhe e rifreskova përsëri aplikacionin.

Rezultati: Kjo provë verifikon nëse aplikacioni i lexon ndryshimet nga databaza dhe nëse ora e rikthyer shfaqet saktë.
]

### Prova 2: Lista bosh dhe rikthimi
[Shtova përkohësisht kushtin `WHERE false` vetëm te pyetja SQL e funksionit `lexoUdhetimet`, për të kontrolluar sjelljen e aplikacionit kur databaza nuk kthen asnjë udhëtim.

Kontrollova mesazhin që shfaqet në listë. Më pas e hoqa kushtin `WHERE false` dhe e rifreskova aplikacionin.

Rezultati: Duhet të verifikohet mesazhi për listën bosh dhe nëse pas heqjes së kushtit rikthehen tri kartat e udhëtimeve.
] 

### Prova 3: Lidhja mungon, rikthimi dhe siguria
[Në skedarin `.env.local` ndryshova përkohësisht emrin e variablës `DATABASE_URL`, në mënyrë që aplikacioni të mos mund ta gjente lidhjen me databazën. Pastaj e rinisa serverin dhe kontrollova mesazhin e gabimit.

Pas provës, e riktheva emrin e saktë të variablës dhe e rinisa serverin përsëri.

Gjithashtu kontrollova në GitHub Desktop nëse `.env.local` përjashtohet nga Git dhe nuk përfshihet në skedarët që do të publikohen.

Rezultati: Duhet të verifikohet nëse aplikacioni shfaq gabim kur mungon lidhja, nëse punon përsëri pas rikthimit të konfigurimit dhe nëse `.env.local` mungon nga ndryshimet e GitHub Desktop.] 


## Ku gjendet puna
[- Databaza: Neon me PostgreSQL.
- Skema e databazës: `schema.sql`, nëse është ruajtur në projekt.
- Konfigurimi i lidhjes: `.env.local` (skedar privat që nuk duhet të publikohet në GitHub).
- Funksioni për leximin e udhëtimeve: `lexoUdhetimet`.
- Repository: https://github.com/VesaVishaj/rideshare-mobile
] 

## Çfarë mbetet për përmirësim
[jë përmirësim i ardhshëm është trajtimi më i qartë i gabimeve të lidhjes me databazën dhe i rasteve kur lista e udhëtimeve është bosh.

Butoni “Në pritje” mbetet simulim dhe nuk krijon rezervim real. Në të ardhmen mund të shtohet funksionaliteti për rezervime reale, me ruajtjen e të dhënave në databazë.]


## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
[Përdora AI për ndihmë gjatë konfigurimit të aplikacionit Next.js.

Verifikova vetë nisjen e aplikacionit, shfaqjen e udhëtimeve dhe funksionimin e faqeve të projektit. Provat për ndryshimin e të dhënave në databazë, listën bosh dhe mungesën e lidhjes duhet të konfirmohen sipas rezultateve reale.] 