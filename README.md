# Brainwave - Landing Page AirPods

Landing page moderne pour AirPods construite avec Next.js et Tailwind CSS.

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du Projet

```
brainwave/
├── app/
│   ├── page.tsx          # Page principale (importe les composants)
│   ├── layout.tsx        # Layout avec fonts
│   └── globals.css       # Styles globaux
├── components/           # Composants React modulaires
│   ├── Header.tsx        # Navigation responsive
│   ├── Hero.tsx          # Section hero
│   ├── FeaturesSection.tsx & FeatureCard.tsx
│   ├── TestimonialSection.tsx
│   ├── TrendyDesignsSection.tsx
│   ├── ProductsSection.tsx & ProductCard.tsx
│   ├── BannerSection.tsx
│   └── Footer.tsx
├── public/Images/        # Assets images
└── tailwind.config.ts
```

## Composants

- **Header** - Navigation responsive avec menu mobile
- **Hero** - Section hero avec image et CTA
- **FeaturesSection** - Grille de fonctionnalités avec FeatureCard
- **TestimonialSection** - Section témoignage client
- **TrendyDesignsSection** - Section avec background animé
- **ProductsSection** - Grille produits avec ProductCard
- **BannerSection** - Bannière pleine largeur
- **Footer** - Pied de page

### Design Responsive
- **Mobile** : < 768px - Layout vertical empilé
- **Tablet** : ≥ 768px - Grid activée, menu burger
- **Desktop** : ≥ 1024px - Navigation horizontale complète

### Technologies
- **Next.js 16** - Framework React
- **Tailwind CSS** - Styling utilitaire
- **TypeScript** - Typage statique
- **Google Fonts** - Rubik & Poppins
