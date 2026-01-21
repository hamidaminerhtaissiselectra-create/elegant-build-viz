# 🛠 Plan Directeur Technique : Migration Astro pour HD Connect

Ce document détaille la structure technique nécessaire pour transformer HD Connect en un site ultra-performant, optimisé pour le Top 3 SEO et les moteurs de réponse IA.

---

## 1. Architecture "Astro Islands"
Le concept clé d'Astro est de livrer du HTML statique par défaut et d'injecter du JavaScript uniquement là où c'est nécessaire.

### Répartition des Composants
| Composant | Type de Rendu | Stratégie Astro |
| :--- | :--- | :--- |
| **Header / Footer** | Statique | `client:idle` (chargement après le contenu principal) |
| **Hero Section** | Statique | Aucun JS nécessaire (HTML pur) |
| **Services Grid** | Statique | Aucun JS nécessaire |
| **Formulaires (Quote)** | Interactif | `client:visible` (charge le JS quand l'utilisateur arrive au formulaire) |
| **FAQ Accordion** | Interactif | `client:load` ou `client:visible` |
| **Animations Parallax** | Interactif | `client:only="react"` (pour les effets complexes) |

---

## 2. Stratégie de Rendu Hybride
Pour maximiser le SEO tout en gardant des fonctionnalités dynamiques (admin, auth), nous utiliserons le mode **Hybrid**.

- **Pages Statiques (SSG)** : Accueil, Services, Villes, Régions, Blog.
    - *Bénéfice* : Temps de réponse < 100ms, indexation parfaite par ChatGPT/Perplexity.
- **Pages Dynamiques (SSR)** : Admin, Dashboard, Authentification.
    - *Bénéfice* : Sécurité et données en temps réel via Supabase.

---

## 3. Optimisation de la Performance (Core Web Vitals)
Astro permet d'atteindre un score de **100/100** sur Google PageSpeed Insights.

### Actions Techniques :
1. **Astro Image Component** : Remplacer les balises `<img>` par `<Image />` d'Astro pour :
    - Génération automatique de formats WebP/AVIF.
    - Redimensionnement intelligent selon l'écran.
    - Lazy-loading natif.
2. **Font Optimization** : Utiliser `@fontsource` pour héberger les polices localement et éviter les sauts de texte (CLS).
3. **CSS Inlining** : Astro injecte automatiquement le CSS critique dans le HTML pour un affichage instantané.

---

## 4. Structure des Dossiers Cible
```text
/
├── src/
│   ├── components/       # Vos composants React actuels (réutilisables)
│   ├── layouts/          # Modèles de pages (MainLayout.astro)
│   ├── pages/            # Fichiers .astro (Routage automatique)
│   │   ├── index.astro
│   │   ├── services/
│   │   │   └── [service].astro  # Génération dynamique des 11 services
│   │   └── villes/
│   │       └── [city].astro     # Génération dynamique des 60+ villes
│   ├── content/          # Fichiers Markdown/JSON pour le contenu (IA-friendly)
│   └── assets/           # Images WebP optimisées
├── astro.config.mjs      # Configuration du rendu hybride
└── package.json
```

---

## 5. Intégration Supabase & API
Astro s'intègre parfaitement avec votre backend actuel :
- **Client-side** : Utilisation du SDK Supabase dans les composants interactifs.
- **Server-side** : Récupération des données lors du build pour les pages statiques, garantissant que le contenu est présent dans le code source pour les IA.

---

### Prochaine Étape :
Ce plan technique garantit que la "carrosserie" de votre site est la plus rapide du marché. Le document suivant portera sur le "moteur" : la stratégie sémantique pour l'IA.
