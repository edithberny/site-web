# Edith Berny — Site vitrine

Site web statique présentant l'activité d'**Edith Berny**, conseillère
indépendante en gestion de patrimoine basée à Meaux (Île-de-France).

Site en ligne : [edithberny.fr](https://edithberny.fr)

## Aperçu

Site monopage (one-page) au design éditorial — palette ivoire, or et
encre — avec navigation ancrée et animations légères. Aucune dépendance
JavaScript externe.

Sections :

- **Hero** — accroche, sous-titre, CTA « Prendre rendez-vous » et trois statistiques clés
- **À propos** — portrait, présentation (1ʳᵉ personne), domaines d'expertise, ligne directe (email, téléphone, LinkedIn), carte Google Maps et lien vers la fiche Google Business
- **Domaines d'expertise** — six cartes (immobilier, placements, défiscalisation, retraite, succession, accompagnement)
- **Approche** — méthode en quatre étapes (écoute, analyse, recommandation, suivi)
- **Témoignages** — trois quotes clients
- **FAQ** — accordéon interactif (5 questions)
- **Footer** — liens (À propos, Approche, FAQ, Prendre rendez-vous), mention ORIAS, mentions légales, politique de confidentialité, plan du site

## Stack technique

- **HTML5** sémantique
- **CSS3** vanilla (variables CSS, Grid, Flexbox, responsive `clamp()`)
- **JavaScript** vanilla (≈ 30 lignes inline, aucune librairie)
- **Google Fonts** : [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (titres serif) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (texte sans-serif)
- **[Google Maps Embed API](https://developers.google.com/maps/documentation/embed)** pour la localisation

## Arborescence

```
site-web/
├── index.html              # page principale (HTML + script inline)
├── mentions-legales.html       # page légale (éditeur, ORIAS, hébergement…)
├── politique-confidentialite.html  # politique RGPD (données, finalités, droits)
├── sitemap.xml             # plan du site (SEO)
├── robots.txt              # directives crawlers + lien vers le sitemap
├── netlify.toml            # cache, headers de sécurité, redirect www → apex
├── style.css               # feuille de style unique
├── README.md               # ce fichier
├── assets/                 # images & favicons utilisés par le site
│   ├── favicon/            # favicons (ico, png 16/32, apple-touch, android-chrome) + webmanifest
│   ├── fond2.webp           # image de fond du hero
│   ├── profile_picture.webp # portrait Edith Berny
│   ├── maison.webp          # carte « Investissement immobilier »
│   ├── placement.webp       # carte « Placements financiers »
│   ├── impots.webp          # carte « Défiscalisation »
│   ├── retraite.webp        # carte « Retraite »
│   ├── succession.webp      # carte « Succession »
│   └── accompagnement.webp  # carte « Accompagnement »
└── (.gitignore — exclut .DS_Store, .vscode/, node_modules/, etc.)
```

## Déploiement

Le site est hébergé sur **[Netlify](https://www.netlify.com/)** à
l'URL [edithberny.fr](https://edithberny.fr). Tout
push sur la branche principale du dépôt déclenche automatiquement un
nouveau déploiement.

Aucune configuration build n'est requise : Netlify sert directement les
fichiers statiques à la racine du dépôt.

## Prise de contact

Le site ne contient pas de formulaire : tous les CTA « Prendre rendez-vous »
(navbar, hero, footer, FAQ) renvoient vers la section **À propos**, qui
regroupe les coordonnées directes :

- email : `edith.berny@maisonblanchepatrimoine.com`
- téléphone : `06 13 01 38 81`
- LinkedIn : [linkedin.com/in/edithberny](https://www.linkedin.com/in/edithberny/)
- fiche Google Business : [share.google/9w6bGB4XbKCmkHkI8](https://share.google/9w6bGB4XbKCmkHkI8)

## Personnalisation rapide


| Quoi                  | Où                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| Palette de couleurs   | Variables `:root` en haut de `style.css` (`--ivory`, `--gold`, `--ink`, …)                              |
| Polices               | Lien Google Fonts dans le `<head>` de `index.html` + variables `--serif` / `--sans` dans `style.css`    |
| Contenus textuels     | Directement dans `index.html`                                                                           |
| Images                | Dossier `assets/` (mêmes noms à conserver, ou mettre à jour les `src` dans `index.html`)                |
| Image de fond du hero | `assets/fond2.webp` (référencée dans la règle `.hero-bg` de `style.css`)                                |
| FAQ / Témoignages     | Dupliquer / éditer les blocs `.faq-item` ou `.temoignage` dans `index.html`                             |
| Carte Google Maps     | Iframe dans la section `#about` (bloc `.about-visual`), paramètre `q=` à modifier pour changer la ville |


## SEO

Le site est optimisé pour le **SEO local** (Meaux + Île-de-France) sans
aucun tracker (ni Google Analytics, ni Tag Manager).

### Fichiers SEO


| Fichier        | Rôle                                                                |
| -------------- | ------------------------------------------------------------------- |
| `sitemap.xml`  | Liste des URL indexables avec `lastmod` et `priority`               |
| `robots.txt`   | `Allow: /` + lien vers le sitemap                                   |
| `netlify.toml` | Cache long sur `assets/*`, headers de sécurité, redirect www → apex |


### Balises critiques (par page)

Chaque page contient :

- `<title>` unique et descriptif (avec mention « Meaux » sur les 3 pages)
- `<meta name="description">` unique (~155 caractères)
- `<link rel="canonical">` absolu vers la version officielle
- `<meta name="robots">` :
  - `index, follow` sur l'accueil
  - `noindex, follow` sur les pages légales (best practice : accessibles mais ne concurrencent pas l'accueil)
- OpenGraph + Twitter Card complets pour le partage social
- `<meta name="geo.region" content="FR-77">` + `<meta name="geo.placename" content="Meaux">` (signal géo)

### Données structurées Schema.org (JSON-LD)

Les blocs sont placés en bas du `<body>` :

- `**index.html`** : 3 blocs
  - `FinancialService` (`@id="…/#cabinet"`) : nom, description, image, logo, email, adresse Meaux 77100, `areaServed` (Meaux / 77 / IDF), `serviceType`, `knowsAbout`, `hasCredential` (ORIAS, CIF/AMF), `parentOrganization` (Maison Blanche Patrimoine), `sameAs` (LinkedIn, ORIAS, Google Business)
  - `Person` (`@id="…/#edith-berny"`) : identité d'Edith Berny, lien `worksFor` vers le cabinet
  - `FAQPage` : les 5 questions/réponses de la FAQ — éligible aux **rich snippets** Google
- `**mentions-legales.html`** + `**politique-confidentialite.html**` :
  - `BreadcrumbList` : fil d'Ariane Accueil → page courante

### Performance / Core Web Vitals

- Toutes les images en **WebP** (~564 KB total pour 7 images, contre 12 MB avant optimisation)
- Toutes les `<img>` ont `width` + `height` intrinsèques (anti-CLS)
- Portrait précharché via `<link rel="preload" as="image" fetchpriority="high">` (LCP candidate)
- Polices Google Fonts chargées avec `&display=swap` + `<link rel="preconnect">`
- Aucune librairie JS externe (~30 lignes inline)

### Maintenance

À chaque modification de contenu :

1. Mettre à jour `<lastmod>` dans `sitemap.xml`
2. Vérifier que les nouvelles questions FAQ sont aussi reflétées dans le bloc JSON-LD `FAQPage`
3. Tester chaque bloc JSON-LD sur [Rich Results Test](https://search.google.com/test/rich-results)
4. Vérifier l'unicité de `<title>` / `<meta description>` / `<canonical>` entre pages

### Off-page (à faire dans la console)

1. **Google Search Console** : ajouter la propriété, vérifier, soumettre `sitemap.xml`
2. **Bing Webmaster Tools** : idem
3. **Google Business Profile** : cohérence NAP avec le site (Meaux 77100)
4. Backlinks : Maison Blanche Patrimoine, annuaires CGP, Pages Jaunes

## Mentions légales

- **Edith Berny** — Conseillère indépendante en gestion de patrimoine
- Immatriculation **ORIAS #22002433**
- Activité exercée sous le contrôle de l'**Autorité des Marchés Financiers (AMF)** et de l'**ACPR**

## Crédits

Conception et contenus : Jessica Kuijer.