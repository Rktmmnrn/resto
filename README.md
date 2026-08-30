# Intro

Ceci est le model d'un site pour un hôtel
Un projet en Première année de Licence que j'ai refonter avec NextJS

## Stack utilisé

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion

## Sommaire
 
- [Structure du projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Démarrage rapide](#démarrage-rapide)
- [Scripts disponibles](#scripts-disponibles)
- [Configuration du contenu](#configuration-du-contenu)
- [Notes techniques](#notes-techniques)

---

## structure du projet

```
restaurant-nextjs/
├── public/
│   └── images/                # Placeholders générés
│       ├── about/
│       ├── blog/
│       ├── hero/
│       ├── home/
│       └── menu/
├── src/
│   ├── app/                           # Routes (App Router)
│   │   ├── layout.tsx                  # Layout racine : polices, metadata, JSON-LD, Header/Footer
│   │   ├── page.tsx                    # / (Accueil)
│   │   ├── globals.css                 # Tokens de design (@theme) + directive Tailwind
│   │   ├── sitemap.ts / robots.ts      # SEO
│   │   ├── not-found.tsx               # Page 404
│   │   ├── menu/page.tsx
│   │   ├── about/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx        # Détail d'article (statique, generateStaticParams)
│   │   └── contact/
│   │       ├── page.tsx
│   │       └── actions.ts              # Server Action du formulaire
│   ├── components/
│   │   ├── layout/    # Header, Footer, MobileNav, InfoDrawer
│   │   ├── ui/         # Button, SectionHeading, PageHero, Reveal, ScrollCarousel
│   │   ├── shared/     # Réutilisés sur 2+ pages : Stats, Testimonials, AboutIntro, BlogPostCard, LocationMap
│   │   ├── home/       # Sections propres à l'accueil
│   │   ├── menu/       # MenuExplorer (filtre par catégorie)
│   │   ├── about/      # Gallery, PrivateEvents, ChefPhilosophy
│   │   └── contact/    # ContactForm, ContactInfo, ContactFormSection
│   ├── data/           # Contenu du site — modifie ces fichiers, pas les composants
│   │   ├── site-config.ts   # Nom, contact, horaires, réseaux sociaux, nav
│   │   ├── menu-items.ts    # Plats par catégorie
│   │   └── blog-posts.ts    # Articles
│   └── hooks/
│       └── useSlideNav.ts   # État partagé menu mobile / panneau infos
├── next.config.ts
├── package.json
└── README.md
```

## Fonctionnalités
 
- **5 pages** (Accueil, Menu, About, Blog, Contact) + **6 pages de détail d'article**
  (`/blog/[slug]`), toutes générées statiquement
- **Header unifié** : nav mobile plein écran + panneau d'infos desktop (contact/horaires/
  réseaux), pilotés par un seul état partagé
- **Menu filtrable** par catégorie (special menu / drinks / seafood / desserts), avec
  transition animée
- **Carousels fonctionnels** (galerie photo, témoignages) — vrai défilement au clic
- **Formulaire de contact** avec validation côté serveur réelle (Server Action +
  `useActionState`/`useFormStatus`), états de chargement et erreurs par champ
- **Animations au scroll** (Motion), désactivées automatiquement si l'utilisateur a
  activé "réduire les animations" dans son OS
- **SEO** : `sitemap.xml`, `robots.txt`, JSON-LD `Restaurant` (schema.org), Open Graph
  et Twitter Card sur chaque page
- **Accessibilité** : lien "Skip to content", focus clavier visible, labels de
  formulaire, `aria-*` sur la nav et les composants interactifs
- **Polices Google auto-hébergées** via `next/font` (pas de `<link>` externe)
- Design tokens centralisés (couleurs, polices) dans `globals.css` via Tailwind v4
  (`@theme`) — pas de `tailwind.config.js`

## Démarrage rapide
 
### Prérequis
 
- Node.js **20 LTS** ou plus récent (`node -v`)
- npm (fourni avec Node) — yarn/pnpm fonctionnent aussi

### Installation
 
```bash
git clone <url-de-ton-repo>
cd restaurant-nextjs
npm install
```
 
### Développement
 
```bash
npm run dev
```
 
Ouvre [http://localhost:3000](http://localhost:3000).
 
## Scripts disponibles
 
| Commande        | Description                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Serveur de développement (Turbopack)          |
| `npm run build` | Build de production                           |
| `npm run start` | Sert le build de production                   |
| `npm run lint`  | Vérifie le code avec ESLint                   |
 
## Configuration du contenu
 
Tout le contenu texte vit dans `src/data/`, séparé des composants :
 
- **`site-config.ts`** — nom du restaurant, coordonnées, horaires, réseaux sociaux,
  liens de navigation, URL du site
- **`menu-items.ts`** — les plats, organisés par catégorie
- **`blog-posts.ts`** — les articles du blog
Les images sont dans `public/images/`, organisées par page. Chaque emplacement a un
placeholder généré (fond bleu nuit, bordure dorée, libellé) — remplace le fichier en
gardant le même nom et le composant qui l'affiche n'a pas besoin de changer.
 
---

## Notes techniques
 
- **Node 20+ requis.** Sur Debian/Parrot OS, le paquet `nodejs` des dépôts est souvent
  trop ancien pour Next.js — passe par [nvm](https://github.com/nvm-sh/nvm)
  (`nvm install --lts`) plutôt que `apt install nodejs`.
- **Tailwind CSS v4** : pas de `tailwind.config.js`. Les tokens (couleurs, polices) sont
  définis directement dans `src/app/globals.css` via `@theme`.
- **Erreur `Cannot find name 'LayoutProps'` (ou `PageProps`) ?** Ces types sont générés
  par Next (`.next/types/`) au premier `next dev`, `next build` ou `next typegen` — pas
  fournis par défaut par le package. Lance le serveur une fois et l'erreur disparaît.
- **Polices** : `next/font/google` télécharge Tenor Sans et Josefin Sans au moment du
  build — une connexion internet est nécessaire (échoue derrière un pare-feu strict ou
  en offline complet).
