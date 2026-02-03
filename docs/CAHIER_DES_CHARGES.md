# 📋 Cahier des Charges - HD Connect

> **Version:** 3.0  
> **Dernière mise à jour:** 03 Février 2026  
> **Statut:** ✅ Production Ready

---

## 📌 Présentation du Projet

**Client** : HD Connect  
**URL Production** : https://hdconnect.fr  
**URL Preview** : https://site-polish-joy.lovable.app

### 🎯 Objectif Principal

Créer un site vitrine professionnel et performant pour HD Connect, spécialisé dans l'installation, le dépannage et la location de systèmes de sécurité électronique (vidéosurveillance, alarmes, contrôle d'accès) sur l'ensemble du territoire français.

### 🏆 Résultats Atteints

| Objectif | Cible | Réalisé |
|----------|-------|---------|
| Pages services | 11 | ✅ 11 |
| Pages régions | 13 | ✅ 13 |
| Pages villes | 50+ | ✅ **125** |
| Pages ville+service | - | ✅ **1000+** |
| Articles blog | 6 | ✅ **10** |
| Arrondissements Paris | - | ✅ **20** |

---

## 🏗️ Architecture Technique

### Stack Technologique

| Technologie | Version | Usage |
|-------------|---------|-------|
| React | 18.3.1 | Framework Frontend |
| TypeScript | 5.x | Typage statique |
| Vite | 5.x | Build tool |
| Tailwind CSS | 3.x | Styling |
| Shadcn/UI | Latest | Composants UI |
| Framer Motion | 12.x | Animations |
| React Router | 6.30.1 | Routing |
| Supabase | 2.x | Backend (Auth, DB, Edge Functions) |

### Backend Supabase

- **Base de données** : PostgreSQL avec RLS (Row Level Security)
- **Authentification** : Email/Password pour l'admin
- **Edge Functions** : Envoi d'emails via Resend
- **Tables** : `customer_requests`, `user_roles`

---

## 🎨 Design System

### Philosophie Design

Le site utilise une **signature visuelle unique** caractérisée par :
- **Cercles lumineux flottants** avec `blur-3xl` et `animate-pulse-slow`
- **Gradients subtils** sur les backgrounds
- **Effets glassmorphism** avec `backdrop-blur-sm`
- **Animations au scroll** via AnimatedSection et Framer Motion
- **Effet parallax** sur les heroes des pages villes
- **Hover effects** avec `hover:scale-105` et transitions fluides

### Palette de Couleurs (HSL)

```css
/* Couleurs Principales */
--primary: 215 100% 50%        /* Bleu HD Connect */
--accent: 195 100% 45%          /* Cyan accent */
--background: 222 47% 11%       /* Fond sombre */
--foreground: 0 0% 95%          /* Texte clair */

/* Couleurs Services */
--videosurveillance: blue-500
--alarme: red-500
--controle-acces: green-500
--reseau: cyan-500
--domotique: amber-500
--antenne: orange-500
--portails: pink-500
--installation: teal-500
--depannage: rose-500
--location: sky-500
```

---

## 📄 Structure des Pages

### Hiérarchie Complète

```
/ (Accueil)
├── /services (Hub)
│   ├── /services/videosurveillance
│   ├── /services/alarme
│   ├── /services/controle-acces
│   ├── /services/domotique
│   ├── /services/reseau
│   ├── /services/maintenance
│   ├── /services/antenne-satellite
│   ├── /services/portails-parking
│   ├── /services/installation
│   ├── /services/depannage
│   └── /services/location
├── /zones-intervention (Hub géographique)
│   ├── /zones-intervention/ile-de-france
│   ├── /zones-intervention/auvergne-rhone-alpes
│   ├── /zones-intervention/provence-alpes-cote-d-azur
│   └── ... (13 régions)
├── /departements/:slug (8+ départements)
├── /villes/:slug (125 villes)
├── /villes/:slug/:service (1000+ combinaisons)
├── /paris/:arrondissement (20 arrondissements)
├── /blog (Hub)
│   └── /blog/:slug (10 articles)
├── /mentions-legales
├── /politique-confidentialite
├── /auth
└── /admin
```

### Services (11 au total)

1. **Vidéosurveillance** - Caméras HD/4K, NVR, accès distant
2. **Alarme** - Systèmes anti-intrusion NF&A2P
3. **Contrôle d'accès** - Badges, biométrie, interphonie
4. **Réseau** - Câblage, baies, WiFi
5. **Domotique** - Maison intelligente
6. **Antenne & Satellite** - TNT, parabole, IPTV
7. **Portails & Parking** - Automatismes, barrières
8. **Maintenance** - Contrats, SAV
9. **Installation** - Mise en service
10. **Dépannage** - Interventions urgentes
11. **Location** - Équipements temporaires

---

## 🧩 Composants Principaux

### Layout
- `Header` - Navigation sticky avec menu mobile
- `Footer` - Liens, contact, réseaux sociaux
- `Breadcrumbs` - Fil d'Ariane SEO

### Sections Réutilisables
- `Hero` - Section héroïque avec CTA
- `ServiceHero` - Hero spécifique services (12 couleurs)
- `AnimatedSection` - Wrapper animation scroll
- `FAQAccordion` - Section FAQ
- `Testimonials` - Témoignages clients
- `QuoteFunnelSimple` - Formulaire de devis

### Composants Villes
- `CityHeroParallax` - Hero avec effet parallax
- `CityLocalContent` - Contenu local contextuel
- `CityServicesGrid` - Grille services avec liens locaux
- `CityCoverageSection` - Couverture et villes voisines

---

## ⚙️ Fonctionnalités

### Formulaire de Devis
- Collecte : nom, email, téléphone, message, services, localisation
- Envoi email via Supabase Edge Function + Resend
- Stockage en base de données
- Confirmation toast

### Navigation
- Menu responsive (desktop/mobile)
- Smooth scroll vers sections
- CTA flottant global (appel téléphonique)
- Breadcrumbs sur toutes les pages

### Animations
- Fade-in au scroll (AnimatedSection)
- Parallax sur heroes villes
- Hover effects sur cards
- Transitions fluides
- Pulse sur éléments décoratifs

---

## 📱 Responsive Design

| Breakpoint | Largeur | Usage |
|------------|---------|-------|
| `sm` | 640px | Mobile large |
| `md` | 768px | Tablette |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Desktop large |
| `2xl` | 1536px | Écrans larges |

---

## 🔐 Sécurité

### Supabase RLS
- Policies sur `customer_requests`
- Accès admin restreint par `user_roles`
- Authentification requise pour dashboard

### Bonnes Pratiques
- Variables d'environnement pour clés API
- Validation côté client (Zod)
- Sanitization des inputs (DOMPurify pour le blog)

---

## 📊 Performance

### Optimisations Appliquées
- Lazy loading images
- Code splitting automatique (Vite)
- Images WebP optimisées
- Fonts optimisées

### Métriques Cibles
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Score PageSpeed > 85

---

## 📋 État Final du Projet

### ✅ Fonctionnalités Complétées
- [x] Site vitrine complet
- [x] 11 pages services
- [x] Hub services
- [x] 13 pages régions
- [x] 8+ pages départements
- [x] **125 pages villes**
- [x] **1000+ pages ville+service**
- [x] **20 arrondissements Paris**
- [x] **10 articles blog** (5 nationaux + 5 locaux)
- [x] Formulaire de devis fonctionnel
- [x] SEO technique complet (sitemap 250+ URLs)
- [x] Stratégie SEO Answer-First
- [x] Design responsive
- [x] Animations et micro-interactions
- [x] Effet parallax pages villes

### ⏳ Configuration Externe (À faire par le client)
- [ ] RESEND_API_KEY
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Premier admin

---

## 📞 Contact Technique

**Développement** : Lovable AI  
**Infrastructure** : Supabase + Lovable Hosting  
**Version** : 3.0  
**Dernière mise à jour** : 03 Février 2026
