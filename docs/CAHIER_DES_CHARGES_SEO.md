# 🔍 Cahier des Charges SEO - HD Connect

> **Version:** 3.0  
> **Dernière mise à jour:** 03 Février 2026  
> **Statut:** ✅ Implémenté

---

## 📌 Vue d'Ensemble

Ce document définit la stratégie SEO complète pour HD Connect, incluant le SEO technique, le SEO local, la stratégie Answer-First et l'optimisation pour les moteurs de recherche et l'IA.

---

## 🎯 Objectifs SEO

### Objectifs Principaux
1. **Positionnement national** sur les requêtes "installation sécurité France"
2. **Domination locale** sur Île-de-France et zones sensibles
3. **Génération de leads** qualifiés via le formulaire de devis
4. **Autorité thématique** sur la sécurité électronique
5. **Optimisation IA** pour Google AI Overviews et assistants vocaux

### KPIs Cibles
| Métrique | Objectif 6 mois | Objectif 12 mois |
|----------|-----------------|------------------|
| Trafic organique | +150% | +300% |
| Positions Top 3 | 50 mots-clés | 150 mots-clés |
| Leads/mois | 100 | 250 |
| Domain Authority | 25 | 40 |
| Pages indexées | 250+ | 500+ |

---

## 🏗️ Architecture SEO Implémentée

### Structure en Silos (250+ pages)

```
hdconnect.fr/
├── / (Accueil - Priority 1.0)
│
├── /services/ (Hub - Priority 0.9)
│   ├── /videosurveillance
│   ├── /alarme
│   ├── /controle-acces
│   ├── /reseau
│   ├── /domotique
│   ├── /antenne-satellite
│   ├── /portails-parking
│   ├── /installation
│   ├── /depannage
│   └── /location
│
├── /zones-intervention/ (Hub géo - Priority 0.85)
│   ├── /ile-de-france/
│   ├── /auvergne-rhone-alpes/
│   ├── /provence-alpes-cote-d-azur/
│   └── /[10 autres régions]/
│
├── /departements/ (Priority 0.8)
│   ├── /paris-75
│   ├── /seine-saint-denis-93
│   ├── /val-de-marne-94
│   └── /[5 autres IDF]/
│
├── /villes/ (125 pages pivot - Priority 0.75)
│   ├── /paris → Hub arrondissements
│   ├── /lyon
│   ├── /marseille
│   ├── /saint-denis
│   ├── /bobigny
│   └── /[120 autres villes]/
│
├── /villes/:ville/:service (1000+ pages - Priority 0.7)
│   ├── /paris/videosurveillance
│   ├── /lyon/alarme
│   └── /[combinaisons ville×service]/
│
├── /paris/ (20 arrondissements - Priority 0.7)
│   ├── /paris-1er
│   └── /[jusqu'au 20ème]/
│
├── /blog/ (Hub - Priority 0.65)
│   └── /[10 articles]/
│
└── /[pages légales] (Priority 0.3)
```

### Maillage Interne

| Type de page | Liens émis vers |
|--------------|-----------------|
| Accueil | Hub services, Hub zones, Blog |
| Hub services | 11 services, Régions principales |
| Page service | Autres services, Hub, Régions pertinentes |
| Hub zones | 13 régions, Départements IDF |
| Page région | Services, Départements, Villes |
| Page département | Services, Villes du département |
| Page ville | Région parent, Département, Services locaux (ville+service), Villes voisines |
| Page ville+service | Ville parente, Autres services locaux, FAQ contextuelle |
| Blog | Services liés, Villes mentionnées |

---

## 🎯 Stratégie SEO Answer-First

### Philosophie

La stratégie "Answer-First" optimise le contenu pour être directement cité par :
- **Google AI Overviews (SGE)**
- **Assistants vocaux** (Alexa, Google Assistant, Siri)
- **ChatGPT et autres LLMs**
- **Featured Snippets** (Position 0)
- **People Also Ask**

### Implémentation

#### 1. Phrases autonomes et citables

```typescript
// ❌ Mauvais (non citable)
"Nous proposons des services de vidéosurveillance de qualité."

// ✅ Bon (Answer-First)
"HD Connect installe des systèmes de vidéosurveillance 4K avec accès 
smartphone 24h/24, certifiés NF&A2P, et garantis 5 ans."
```

#### 2. Format Question → Réponse directe

```markdown
## Combien coûte l'installation d'une alarme ?

L'installation d'une alarme professionnelle coûte entre 800€ et 3000€ 
selon la surface et le niveau de protection souhaité. HD Connect propose 
des devis gratuits et personnalisés pour chaque projet.

[Développement détaillé...]
```

#### 3. Signaux E-E-A-T Intégrés

| Signal | Implémentation |
|--------|----------------|
| **Experience** | "Depuis 2015", "Plus de 1000 installations" |
| **Expertise** | "Techniciens certifiés NF&A2P", "Formation continue" |
| **Authority** | "Partenaire Hikvision/Dahua", "Certifié APSAD" |
| **Trust** | "Garantie 5 ans", "Devis gratuit", "SAV 7j/7" |

---

## 📄 Structure des Pages Pivot (Villes)

### Template de Page Ville

```
[H1] Sécurité, Vidéosurveillance & Domotique à [Ville] | HD Connect

[Hero Parallax avec image locale]

[Section Services - CityServicesGrid]
[H2] Nos Services de Sécurité à [Ville]
→ 8 cartes avec liens vers /villes/[ville]/[service]

[Section Contenu Local - CityLocalContent]
[H2] Pourquoi Choisir HD Connect à [Ville] ?
→ Contenu contextuel selon département (93, PACA, etc.)

[Section FAQ Locale]
[H2] Questions Fréquentes - Sécurité [Ville]
→ 6 questions spécifiques avec schema FAQPage

[Section Couverture - CityCoverageSection]
[H2] Zones Couvertes depuis [Ville]
→ Liens vers villes voisines
```

### Template de Page Ville+Service

```
[H1] [Service] à [Ville] | Installation & Dépannage | HD Connect

[Hero avec contexte local]

[Section Features]
→ 4-6 features contextualisées pour la ville

[Section FAQ Contextuelle]
[H2] Questions sur [Service] à [Ville]
→ 4 questions ultra-ciblées

[CTA Devis Local]
```

---

## 🏷️ Balises SEO

### Title Tag
```
Format: [Service] à [Ville] | HD Connect
Longueur: 50-60 caractères
Exemple: Vidéosurveillance à Lyon | HD Connect
```

### Meta Description (Answer-First)
```
Format: [Réponse directe avec chiffres]. [Bénéfice]. [CTA].
Longueur: 150-160 caractères
Exemple: Installation vidéosurveillance 4K à Lyon par HD Connect. 
Techniciens certifiés, garantie 5 ans. Devis gratuit sous 24h.
```

### Open Graph
```html
<meta property="og:title" content="[Title Answer-First]" />
<meta property="og:description" content="[Description autonome]" />
<meta property="og:image" content="https://hdconnect.fr/og-image.jpg" />
<meta property="og:url" content="[URL canonique]" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:site_name" content="HD Connect" />
```

---

## 📊 Données Structurées (JSON-LD)

### Schemas Implémentés

| Schema | Pages | Usage |
|--------|-------|-------|
| `LocalBusiness` | Accueil | Infos entreprise |
| `Organization` | Toutes | Identité marque |
| `Service` | Services | Détails service |
| `FAQPage` | Services, Villes | People Also Ask |
| `BreadcrumbList` | Toutes | Navigation |
| `Article` | Blog | Contenu éditorial |

### Exemple LocalBusiness (Answer-First)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "HD Connect - Installation Sécurité & Domotique",
  "description": "HD Connect installe des systèmes de sécurité professionnels : vidéosurveillance 4K, alarmes certifiées NF&A2P et contrôle d'accès biométrique. Techniciens certifiés, intervention rapide, garantie 5 ans.",
  "telephone": "+33 6 27 13 53 04",
  "email": "contact@hdconnect.fr",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Créteil",
    "addressRegion": "Île-de-France",
    "postalCode": "94000",
    "addressCountry": "FR"
  },
  "areaServed": ["France", "Île-de-France"],
  "priceRange": "€€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
```

---

## 🗺️ SEO Local

### Ciblage Géographique Prioritaire

Expansion basée sur les **zones à risque** (taux de cambriolages élevés) :

| Zone | Départements | Villes Couvertes |
|------|--------------|------------------|
| IDF Périphérique | 93, 94, 92, 91, 95 | 40+ villes |
| PACA | 13, 06, 83 | 15+ villes |
| Rhône-Alpes | 69, 38 | 10+ villes |
| Nord | 59 | 5+ villes |
| Métropoles | - | Lyon, Bordeaux, Toulouse, etc. |

### Couverture Actuelle

| Type | Quantité |
|------|----------|
| Régions | 13 |
| Départements | 8+ |
| Villes | **125** |
| Arrondissements Paris | **20** |
| Pages ville+service | **1000+** |

---

## 📝 Contenu Blog (SEO Local)

### Articles Implémentés (10)

| Article | Cible SEO | Type |
|---------|-----------|------|
| Choisir son système de vidéosurveillance 2026 | National | Guide |
| Erreurs installation alarme | National | Liste |
| Contrôle d'accès biométrique guide | National | Guide |
| Maison connectée par où commencer | National | Guide |
| Maintenance préventive économies | National | Guide |
| **Sécurité Commerce Seine-Saint-Denis 93** | **Local 93** | Guide |
| **Protection Villa PACA** | **Local PACA** | Guide |
| **Alarme Résidence Île-de-France** | **Local IDF** | Guide |
| **Vidéosurveillance Entreprise Lyon** | **Local 69** | Guide |
| **Domotique Maison Bordeaux** | **Local 33** | Guide |

---

## 📋 Checklist SEO par Page

### Avant Publication
- [x] Title unique (50-60 car.) avec mot-clé principal
- [x] Meta description Answer-First (150-160 car.)
- [x] H1 unique avec contexte local si applicable
- [x] Structure H2/H3 cohérente
- [x] Images optimisées (WebP, alt, lazy loading)
- [x] Liens internes (3-5 minimum)
- [x] Données structurées appropriées
- [x] URL propre et descriptive
- [x] Canonical défini
- [x] Mobile-friendly vérifié

### Après Publication
- [ ] Indexation vérifiée (Google Search Console)
- [ ] Pas d'erreurs 404/500
- [ ] Vitesse de chargement < 3s
- [ ] Rich snippets apparaissent

---

## 🔧 Outils SEO Recommandés

| Outil | Usage |
|-------|-------|
| Google Search Console | Suivi indexation, erreurs |
| Google Analytics 4 | Trafic, conversions |
| PageSpeed Insights | Performance |
| Schema Markup Validator | Données structurées |
| Screaming Frog | Audit technique |
| SEMrush / Ahrefs | Positions, backlinks |

---

## 📊 Reporting SEO

### Mots-clés Prioritaires

| Mot-clé | Volume | Difficulté | Objectif |
|---------|--------|------------|----------|
| installation vidéosurveillance paris | 720 | Moyenne | Top 5 |
| alarme maison ile de france | 590 | Moyenne | Top 5 |
| vidéosurveillance entreprise lyon | 320 | Facile | Top 3 |
| sécurité commerce 93 | 210 | Facile | Top 3 |
| dépannage alarme 94 | 180 | Facile | Top 3 |

---

## 📞 Contact SEO

**Stratégie SEO** : Définie par le client  
**Implémentation** : Lovable AI  
**Suivi** : Google Search Console + Analytics  
**Dernière mise à jour** : 03 Février 2026
