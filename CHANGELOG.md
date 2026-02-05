 # 📋 CHANGELOG - HD Connect
 
 > **Format:** [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/)  
 > **Versioning:** [Semantic Versioning](https://semver.org/lang/fr/)
 
 ---
 
 ## [8.0.0] - 2026-02-05
 
 ### ✅ Ajouté
 - **Pages légales** : `/mentions-legales`, `/politique-confidentialite`, `/cgv`
 - **Schema Speakable** : Optimisation pour la recherche vocale et les IA
 - **Contenu local enrichi** : 17 départements avec statistiques uniques
 - **Maillage Blog → Villes** : 5 articles avec `relatedCities`
 - **Geo tags** : Meta tags de géolocalisation dans `index.html`
 - **Liens footer** : Pages légales ajoutées au footer
 
 ### 🔧 Corrigé
 - **ParisPage.tsx** : Liens services corrigés vers `/villes/paris/*` au lieu de `/services/*`
 - **index.html** : Open Graph, Twitter Card, placeholder Google Analytics
 
 ### 📝 Documentation
 - Consolidation de toute la documentation en 3 fichiers
 - Mise à jour complète du README.md (Version 8.0)
 
 ---
 
 ## [7.0.0] - 2026-02-03
 
 ### ✅ Ajouté
 - **125 villes** couvertes (100% Île-de-France + métropoles nationales)
 - **20 arrondissements Paris** avec pages dédiées
 - **1000+ pages ville+service** dynamiques
 - **10 articles blog** (5 nationaux + 5 zones sensibles)
 - **CityLocalContent** : Composant de contenu contextuel par département
 
 ### 🎨 Amélioré
 - **Stratégie Answer-First** : FAQ enrichies pour Google AI Overviews
 - **E-E-A-T** : Signaux d'autorité intégrés (NF&A2P, APSAD, 5 ans garantie)
 - **Parallax** : Effet sur les heroes des pages villes
 
 ---
 
 ## [6.0.0] - 2026-01-28
 
 ### ✅ Ajouté
 - **Hub Services** (`/services`) comme page pivot SEO
 - **Pages départements** : 8 départements IDF
 - **CityCoverageSection** : Villes voisines et maillage local
 
 ---
 
 ## [5.0.0] - 2026-01-20
 
 ### ✅ Ajouté
 - **Images WebP** : Conversion de toutes les images JPG
 - **Maillage interne services** : CTA croisés entre services complémentaires
 - **Pages régions** : 13 régions françaises
 
 ### 📈 Performance
 - Réduction taille images de 30-70%
 - Score Core Web Vitals amélioré
 
 ---
 
 ## [4.0.0] - 2026-01-15
 
 ### ✅ Ajouté
 - **11 pages services** complètes
 - **Formulaire de devis** multi-étapes
 - **Edge Function** pour envoi d'emails via Resend
 - **Sitemap.xml** avec 250+ URLs
 
 ---
 
 ## [3.0.0] - 2026-01-10
 
 ### ✅ Ajouté
 - **Design System** : Variables CSS, tokens de couleurs
 - **Composants Shadcn/UI** : 45+ composants
 - **Animations** : Framer Motion, AnimatedSection
 
 ---
 
 ## [2.0.0] - 2026-01-05
 
 ### ✅ Ajouté
 - **Architecture React/Vite** initiale
 - **Intégration Supabase** : Auth, Database
 - **Routing** : React Router 6
 
 ---
 
 ## [1.0.0] - 2026-01-01
 
 ### 🚀 Initial Release
 - Création du projet HD Connect
 - Structure de base du site vitrine
 
 ---
 
 ## 📝 Notes de Version
 
 ### Configuration Post-Déploiement (En attente)
 - [ ] `RESEND_API_KEY` pour les emails
 - [ ] Google Analytics 4 (`G-XXXXXXXXXX`)
 - [ ] Soumission sitemap à Search Console
 - [ ] Premier utilisateur admin
 
 ### Roadmap Future
 - [ ] +25 villes (objectif 150)
 - [ ] Page Auteurs/Experts E-E-A-T
 - [ ] Widget avis Google
 - [ ] Images OG personnalisées par service