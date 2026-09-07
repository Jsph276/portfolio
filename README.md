# Portfolio personnel de Joseph Assiman

Portfolio professionnel responsive présentant le parcours, les compétences, les projets et les certifications de Joseph Assiman, étudiant en génie logiciel et développeur web.

Le projet utilise une architecture légère basée sur HTML5, CSS3, JavaScript vanilla, Bootstrap 5 et Vite.

## Fonctionnalités

- Navigation responsive avec menu mobile et section active.
- Thème clair et sombre persistant dans le navigateur.
- Sections Hero, À propos, Expertise, Portfolio Showcase et Contact.
- Filtres pour les projets, les certifications et les technologies.
- Carousel horizontal responsive avec navigation précédent/suivant.
- Prévisualisation du CV et du certificat.
- Formulaire de contact avec validation côté client.
- Animations d'apparition, effets de survol et effet ripple.
- Mise en page adaptée aux écrans desktop, tablette et mobile.

## Technologies

- HTML5 sémantique
- CSS3 et variables CSS
- JavaScript ES modules
- Bootstrap 5
- Bootstrap Icons
- Vite

## Structure du projet

```text
portfolio-final/
├── index.html
├── package.json
├── public/
│   ├── favicon.png
│   └── douments/
│       └── cv.pdf
├── src/
│   ├── assets/
│   │   └── images/
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   └── js/
│       ├── main.js
│       ├── navbar.js
│       ├── theme.js
│       ├── reveal.js
│       ├── portfolio.js
│       ├── contact.js
│       └── ui.js
└── README.md
```

## Prérequis

- Node.js 18 ou version ultérieure
- npm

## Installation

Depuis le dossier du projet, installez les dépendances :

```bash
npm install
```

## Développement

Lancez le serveur de développement Vite :

```bash
npm run dev
```

Le site sera accessible à l'adresse indiquée dans le terminal, généralement `http://localhost:5173/`.

## Build de production

Générez la version optimisée du site :

```bash
npm run build
```

Les fichiers générés sont placés dans le dossier `dist/`.

Pour prévisualiser le build de production :

```bash
npm run preview
```

## Déploiement

Le dossier `dist/` peut être déployé sur toute plateforme compatible avec les sites statiques, comme GitHub Pages, Netlify ou Vercel.

## Contact

Pour toute demande professionnelle, utilisez le formulaire de contact disponible sur le portfolio ou consultez les liens sociaux présents dans la page.
