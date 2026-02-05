# ⚙️ Guide de Configuration HD Connect

> **Version:** 3.1  
> **Dernière mise à jour:** 05 Février 2026  
> **Statut:** Configuration externe en attente

---

## 📋 Checklist Rapide

### ✅ Déjà Configuré
- [x] Variables d'environnement Supabase
- [x] Tables base de données
- [x] Edge Function send-quote-email
- [x] Sitemap.xml (250+ URLs)
- [x] robots.txt
- [x] Meta tags SEO
- [x] Pages légales (Mentions, RGPD, CGV)
- [x] Schema Speakable (IA/vocale)

### ⏳ À Configurer par le Client
- [ ] Clé API Resend (RESEND_API_KEY)
- [ ] Premier utilisateur admin
- [ ] Vérification domaine email
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Domaine personnalisé (hdconnect.fr)

---

## 1. Configuration Resend (Emails)

### 1.1 Créer un Compte Resend

1. Aller sur [resend.com](https://resend.com)
2. Créer un compte gratuit
3. Aller dans **API Keys**
4. Créer une nouvelle clé avec les permissions `sending_access`
5. Copier la clé (commence par `re_`)

### 1.2 Ajouter la Clé dans Lovable Cloud

1. Dans votre projet Lovable, aller dans **Cloud** → **Secrets**
2. Cliquer **Add Secret**
3. Nom : `RESEND_API_KEY`
4. Valeur : Votre clé `re_...`
5. Sauvegarder

### 1.3 Vérifier le Domaine (Recommandé)

Pour envoyer des emails depuis `@hdconnect.fr` :

1. Dans Resend, aller dans **Domains**
2. Ajouter `hdconnect.fr`
3. Suivre les instructions pour ajouter les enregistrements DNS :
   - SPF
   - DKIM
   - DMARC (optionnel)

### 1.4 Tester l'Envoi

1. Aller sur le site (preview ou production)
2. Remplir le formulaire de devis
3. Vérifier que l'email arrive à `kamal@hdconnect.fr`

---

## 2. Créer le Premier Admin

### 2.1 Créer un Compte Utilisateur

1. Aller sur `/auth` de votre site
2. Créer un compte avec email/mot de passe
3. Noter l'email utilisé

### 2.2 Attribuer le Rôle Admin

1. Dans Lovable, aller dans **Cloud** → **Database** → **Tables**
2. Ouvrir la table `user_roles` (ou utiliser **Run SQL**)
3. Trouver l'UUID de l'utilisateur dans la table `auth.users`
4. Exécuter :

```sql
INSERT INTO public.user_roles (user_id, role)
VALUES ('VOTRE-UUID-ICI', 'admin');
```

5. Vous pouvez maintenant accéder à `/admin`

---

## 3. Google Analytics 4

### 3.1 Créer une Propriété

1. Aller sur [analytics.google.com](https://analytics.google.com)
2. Créer un compte ou sélectionner un compte existant
3. Créer une propriété pour `hdconnect.fr`
4. Configurer pour "Web"
5. Copier l'ID de mesure (format `G-XXXXXXXXXX`)

### 3.2 Ajouter le Script

Modifier `index.html` (à la racine du projet) :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <!-- ... autres tags ... -->
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>
  </head>
  <!-- ... -->
</html>
```

Remplacer `G-XXXXXXXXXX` par votre ID réel.

---

## 4. Google Search Console

### 4.1 Ajouter le Site

1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter une propriété
3. Choisir "Préfixe de l'URL" : `https://hdconnect.fr`
4. Vérifier la propriété (DNS, balise HTML, ou Google Analytics)

### 4.2 Soumettre le Sitemap

1. Dans Search Console, aller dans **Sitemaps**
2. Ajouter : `https://hdconnect.fr/sitemap.xml`
3. Cliquer **Envoyer**

Le sitemap contient **250+ URLs** incluant :
- 11 pages services
- 13 pages régions
- 8+ pages départements
- 125 pages villes
- 50+ pages ville+service prioritaires
- 20 arrondissements Paris
- 10 articles blog

### 4.3 Demander l'Indexation

Pages prioritaires à indexer en premier :
1. `/` (accueil)
2. `/services` (hub services)
3. `/zones-intervention` (hub géographique)
4. `/blog` (hub blog)
5. Pages services principales

---

## 5. Domaine Personnalisé

### 5.1 Configuration DNS

Ajouter ces enregistrements chez votre registrar :

```
Type: A
Name: @
Value: [IP fournie par Lovable]
TTL: 3600

Type: CNAME
Name: www
Value: site-polish-joy.lovable.app
TTL: 3600
```

### 5.2 Configuration Lovable

1. Dans Lovable, ouvrir le projet
2. Aller dans **Settings** → **Domains**
3. Ajouter `hdconnect.fr`
4. Attendre la propagation DNS (jusqu'à 48h)

### 5.3 Redirection www → apex

Configurer une redirection 301 de `www.hdconnect.fr` vers `hdconnect.fr`.

---

## 6. Vérification Post-Configuration

### 6.1 Checklist de Test

- [ ] Formulaire de devis → Email reçu
- [ ] Connexion admin → `/admin` accessible
- [ ] Google Analytics → Données en temps réel
- [ ] Search Console → Sitemap accepté
- [ ] Domaine → `hdconnect.fr` fonctionne
- [ ] SSL → Certificat valide

### 6.2 Métriques à Surveiller

| Métrique | Outil | Objectif |
|----------|-------|----------|
| Trafic organique | Google Analytics | Croissance mensuelle |
| Positions mots-clés | Search Console | Top 10 → Top 3 |
| Indexation | Search Console | 250+ pages indexées |
| Leads | Base de données | 100+/mois |
| Performance | PageSpeed Insights | Score > 85 |

---

## 7. Support

En cas de problème :
1. Consulter les logs dans **Cloud** → **Edge Functions**
2. Vérifier la console du navigateur (F12)
3. Tester les formulaires en mode preview

---

---

## 📚 Documentation

- **README.md** : Documentation technique complète
- **CHANGELOG.md** : Historique des versions
- **CONFIGURATION.md** : Ce guide

---

**Document mis à jour le 05 Février 2026**
