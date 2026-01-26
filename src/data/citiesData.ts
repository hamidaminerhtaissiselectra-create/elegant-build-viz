// Données des villes pour les pages SEO locales - Version enrichie
export interface CityData {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  region: string;
  regionSlug: string;
  population: string;
  description: string;
  neighborhoods?: string[];
  nearbyTowns?: string[];
}

export const citiesData: CityData[] = [
  // ===== ÎLE-DE-FRANCE =====
  {
    name: "Paris",
    slug: "paris",
    department: "Paris",
    departmentCode: "75",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "2,1 millions",
    description: "Atteignez le Top 3 Sécurité à Paris en 2025-2026. HD Connect, expert certifié NF&A2P, installe des systèmes de vidéosurveillance IA 4K et des alarmes intelligentes. Audit gratuit, intervention 4h urgence dans tous les arrondissements.",
    neighborhoods: ["Le Marais", "Montmartre", "Saint-Germain", "Bastille", "Belleville", "Auteuil", "Passy", "Nation", "République", "Opéra", "Châtelet", "La Défense"],
    nearbyTowns: ["Boulogne-Billancourt", "Neuilly-sur-Seine", "Levallois-Perret", "Vincennes", "Saint-Denis", "Montreuil"]
  },
  {
    name: "Créteil",
    slug: "creteil",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "92 000",
    description: "HD Connect intervient à Créteil et dans tout le Val-de-Marne pour vos installations de sécurité : caméras de surveillance, systèmes d'alarme, contrôle d'accès. Devis gratuit et intervention rapide.",
    neighborhoods: ["Centre-Ville", "Mont-Mesly", "La Source", "Préfecture", "L'Échat", "Bords de Marne"],
    nearbyTowns: ["Maisons-Alfort", "Saint-Maur-des-Fossés", "Alfortville", "Choisy-le-Roi", "Bonneuil-sur-Marne"]
  },
  {
    name: "Vitry-sur-Seine",
    slug: "vitry-sur-seine",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "95 000",
    description: "Expert en sécurité à Vitry-sur-Seine. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide pour particuliers et entreprises.",
    neighborhoods: ["Centre-Ville", "Port à l'Anglais", "Plateau", "Coteau", "Gare"],
    nearbyTowns: ["Ivry-sur-Seine", "Choisy-le-Roi", "Thiais", "Villejuif", "Alfortville"]
  },
  {
    name: "Saint-Maur-des-Fossés",
    slug: "saint-maur-des-fosses",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "76 000",
    description: "HD Connect, installateur de sécurité à Saint-Maur-des-Fossés. Vidéosurveillance HD, alarmes certifiées, domotique pour maisons et commerces. Devis gratuit, intervention rapide.",
    neighborhoods: ["La Varenne-Saint-Hilaire", "Saint-Maur Créteil", "Le Parc", "Adamville", "Champignol"],
    nearbyTowns: ["Créteil", "Joinville-le-Pont", "Bonneuil-sur-Marne", "Champigny-sur-Marne", "Sucy-en-Brie"]
  },
  {
    name: "Boulogne-Billancourt",
    slug: "boulogne-billancourt",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "121 000",
    description: "Installation sécurité à Boulogne-Billancourt par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour résidences de standing et sièges sociaux. Expert Hauts-de-Seine.",
    neighborhoods: ["Centre-Ville", "Point du Jour", "Silly-Gallieni", "Princes-Marmottan", "Rives de Seine"],
    nearbyTowns: ["Issy-les-Moulineaux", "Meudon", "Sèvres", "Saint-Cloud", "Paris 16e"]
  },
  {
    name: "Versailles",
    slug: "versailles",
    department: "Yvelines",
    departmentCode: "78",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "85 000",
    description: "HD Connect à Versailles : solutions de sécurité haut de gamme pour propriétés d'exception. Vidéosurveillance discrète, alarmes certifiées, domotique intégrée.",
    neighborhoods: ["Notre-Dame", "Saint-Louis", "Montreuil", "Porchefontaine", "Clagny-Glatigny"],
    nearbyTowns: ["Le Chesnay", "Viroflay", "Vélizy-Villacoublay", "Saint-Cyr-l'École", "Rocquencourt"]
  },
  // ===== VILLES IDF SUPPLÉMENTAIRES (Zone Primaire) =====
  {
    name: "Saint-Denis",
    slug: "saint-denis",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "113 000",
    description: "Expert sécurité à Saint-Denis (93). HD Connect protège commerces, entreprises et résidences autour du Stade de France. Vidéosurveillance HD, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Pleyel", "Franc-Moisin", "La Plaine", "Stade de France"],
    nearbyTowns: ["Aubervilliers", "Épinay-sur-Seine", "Pierrefitte", "Villetaneuse", "Paris 18e"]
  },
  {
    name: "Montreuil",
    slug: "montreuil",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "109 000",
    description: "Installation sécurité Montreuil par HD Connect. Vidéosurveillance, alarmes pour commerces, ateliers d'artistes et résidences. Intervention rapide 93.",
    neighborhoods: ["Centre-Ville", "Croix de Chavaux", "Bas-Montreuil", "La Noue", "Signac"],
    nearbyTowns: ["Vincennes", "Bagnolet", "Romainville", "Rosny-sous-Bois", "Fontenay-sous-Bois"]
  },
  {
    name: "Argenteuil",
    slug: "argenteuil",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "111 000",
    description: "HD Connect Argenteuil : sécurité électronique pour la plus grande ville du 95. Caméras, alarmes, contrôle d'accès. Devis gratuit.",
    neighborhoods: ["Centre-Ville", "Val-d'Argent", "Orgemont", "Joliot-Curie", "Val Notre-Dame"],
    nearbyTowns: ["Bezons", "Colombes", "Gennevilliers", "Sartrouville", "Cormeilles-en-Parisis"]
  },
  {
    name: "Nanterre",
    slug: "nanterre",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "96 000",
    description: "Expert sécurité Nanterre, préfecture des Hauts-de-Seine. HD Connect sécurise La Défense, universités et zones d'activités. Intervention rapide 92.",
    neighborhoods: ["Centre-Ville", "La Défense", "Université", "Mont-Valérien", "Petit Nanterre"],
    nearbyTowns: ["Rueil-Malmaison", "Puteaux", "Suresnes", "Colombes", "Courbevoie"]
  },
  {
    name: "Courbevoie",
    slug: "courbevoie",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "85 000",
    description: "Sécurité à Courbevoie et La Défense par HD Connect. Protection sièges sociaux, commerces, résidences. Vidéosurveillance 4K, contrôle d'accès biométrique.",
    neighborhoods: ["La Défense", "Bécon-les-Bruyères", "Faubourg de l'Arche", "Charras", "Centre-Ville"],
    nearbyTowns: ["Puteaux", "Neuilly-sur-Seine", "Levallois-Perret", "La Garenne-Colombes", "Nanterre"]
  },
  {
    name: "Neuilly-sur-Seine",
    slug: "neuilly-sur-seine",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "62 000",
    description: "Sécurité haut de gamme à Neuilly-sur-Seine. HD Connect installe des systèmes discrets pour hôtels particuliers, résidences de standing et bureaux de prestige.",
    neighborhoods: ["Sablons", "Bagatelle", "Saint-James", "Île de la Jatte", "Ancienne Mairie"],
    nearbyTowns: ["Levallois-Perret", "Paris 16e", "Paris 17e", "Courbevoie", "Puteaux"]
  },
  {
    name: "Issy-les-Moulineaux",
    slug: "issy-les-moulineaux",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "70 000",
    description: "HD Connect à Issy-les-Moulineaux : sécurité pour entreprises médias, sièges sociaux et résidences modernes. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Val de Seine", "Les Épinettes", "Centre-Ville", "La Ferme", "Fort d'Issy"],
    nearbyTowns: ["Vanves", "Meudon", "Paris 15e", "Boulogne-Billancourt", "Clamart"]
  },
  {
    name: "Levallois-Perret",
    slug: "levallois-perret",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "65 000",
    description: "Installation sécurité Levallois-Perret par HD Connect. Commune la plus dense de France : alarmes, vidéosurveillance, contrôle d'accès pour immeubles et commerces.",
    neighborhoods: ["Front de Seine", "Centre-Ville", "Alsace", "Louise Michel", "Anatole France"],
    nearbyTowns: ["Neuilly-sur-Seine", "Clichy", "Paris 17e", "Asnières-sur-Seine", "Courbevoie"]
  },
  {
    name: "Vincennes",
    slug: "vincennes",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "50 000",
    description: "Expert sécurité Vincennes et Bois de Vincennes. HD Connect protège résidences, commerces et équipements sportifs. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Château", "Nord", "Est", "Montreuil"],
    nearbyTowns: ["Fontenay-sous-Bois", "Montreuil", "Saint-Mandé", "Paris 12e", "Nogent-sur-Marne"]
  },
  {
    name: "Champigny-sur-Marne",
    slug: "champigny-sur-marne",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "78 000",
    description: "HD Connect Champigny-sur-Marne : installation vidéosurveillance, alarmes pour pavillons et commerces. Couverture complète bords de Marne.",
    neighborhoods: ["Centre-Ville", "Bois l'Abbé", "Coeuilly", "Plant", "Tremblay"],
    nearbyTowns: ["Joinville-le-Pont", "Le Perreux-sur-Marne", "Bry-sur-Marne", "Villiers-sur-Marne", "Chennevières-sur-Marne"]
  },
  {
    name: "Ivry-sur-Seine",
    slug: "ivry-sur-seine",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "65 000",
    description: "Sécurité Ivry-sur-Seine par HD Connect. Protection zones industrielles, commerces et résidences. Vidéosurveillance, alarmes, dépannage 24/7.",
    neighborhoods: ["Centre-Ville", "Ivry Port", "Petit Ivry", "Plateau", "Parmentier"],
    nearbyTowns: ["Vitry-sur-Seine", "Paris 13e", "Charenton-le-Pont", "Alfortville", "Le Kremlin-Bicêtre"]
  },
  {
    name: "Maisons-Alfort",
    slug: "maisons-alfort",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "56 000",
    description: "HD Connect Maisons-Alfort : installation sécurité pour résidences, commerces et École vétérinaire. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Charentonneau", "Alfortville", "Vétérinaire", "Les Juilliottes"],
    nearbyTowns: ["Alfortville", "Créteil", "Saint-Maurice", "Charenton-le-Pont", "Saint-Maur-des-Fossés"]
  },
  {
    name: "Meaux",
    slug: "meaux",
    department: "Seine-et-Marne",
    departmentCode: "77",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "55 000",
    description: "Expert sécurité Meaux et nord Seine-et-Marne. HD Connect installe vidéosurveillance, alarmes pour particuliers et entreprises du 77.",
    neighborhoods: ["Centre-Ville", "Beauval", "Dunant", "Pierre Collinet", "Foch"],
    nearbyTowns: ["Chelles", "Villenoy", "Nanteuil-lès-Meaux", "Trilport", "Crégy-lès-Meaux"]
  },
  {
    name: "Évry-Courcouronnes",
    slug: "evry-courcouronnes",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "70 000",
    description: "HD Connect Évry-Courcouronnes : sécurité pour la préfecture de l'Essonne. Vidéosurveillance, alarmes pour zones commerciales et résidences.",
    neighborhoods: ["Centre-Ville", "Pyramides", "Bois Sauvage", "Canal", "Génopole"],
    nearbyTowns: ["Corbeil-Essonnes", "Ris-Orangis", "Lisses", "Bondoufle", "Courcouronnes"]
  },
  {
    name: "Massy",
    slug: "massy",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "52 000",
    description: "Sécurité Massy par HD Connect. Protection zones d'activités, gare TGV et résidences. Vidéosurveillance, contrôle d'accès, alarmes.",
    neighborhoods: ["Centre-Ville", "Massy-Palaiseau", "Opéra", "Atlantis", "Vilmorin"],
    nearbyTowns: ["Palaiseau", "Antony", "Wissous", "Chilly-Mazarin", "Verrières-le-Buisson"]
  },
  {
    name: "Cergy",
    slug: "cergy",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "67 000",
    description: "HD Connect Cergy : expert sécurité ville nouvelle. Protection universités, commerces, résidences. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Préfecture", "Grand Centre", "Axe Majeur", "Saint-Christophe", "Hauts de Cergy"],
    nearbyTowns: ["Pontoise", "Osny", "Éragny", "Saint-Ouen-l'Aumône", "Courdimanche"]
  },
  // ===== AUVERGNE-RHÔNE-ALPES =====
  {
    name: "Lyon",
    slug: "lyon",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "522 000",
    description: "Sécurité 2025-2026 à Lyon : HD Connect vous propulse au Top 3. Installation de vidéosurveillance IA 4K, contrôle d'accès biométrique et alarmes APSAD. Expertise reconnue en Auvergne-Rhône-Alpes. Devis gratuit rapidement.",
    neighborhoods: ["Presqu'île", "Vieux Lyon", "Part-Dieu", "Croix-Rousse", "Confluence", "Gerland", "Villeurbanne"],
    nearbyTowns: ["Villeurbanne", "Vénissieux", "Caluire-et-Cuire", "Saint-Priest", "Vaulx-en-Velin", "Bron"]
  },
  {
    name: "Grenoble",
    slug: "grenoble",
    department: "Isère",
    departmentCode: "38",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "158 000",
    description: "Expert sécurité à Grenoble. HD Connect installe vidéosurveillance, alarmes et contrôle d'accès pour entreprises tech et résidences. Couverture Isère complète.",
    neighborhoods: ["Centre-Ville", "Europole", "Berriat", "Eaux-Claires", "Île Verte", "Bastille"],
    nearbyTowns: ["Échirolles", "Saint-Martin-d'Hères", "Fontaine", "Meylan", "Seyssinet-Pariset"]
  },
  {
    name: "Saint-Étienne",
    slug: "saint-etienne",
    department: "Loire",
    departmentCode: "42",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "173 000",
    description: "HD Connect à Saint-Étienne : sécurité électronique pour industries et commerces. Vidéosurveillance, alarmes certifiées, maintenance 24/7.",
    neighborhoods: ["Centre-Ville", "Châteaucreux", "Bellevue", "Montreynaud", "Jacquard"],
    nearbyTowns: ["Saint-Priest-en-Jarez", "Saint-Jean-Bonnefonds", "Villars", "La Talaudière", "Roche-la-Molière"]
  },
  // ===== PROVENCE-ALPES-CÔTE D'AZUR =====
  {
    name: "Marseille",
    slug: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "870 000",
    description: "HD Connect, votre partenaire Top 3 Sécurité à Marseille. Installation de systèmes d'alarme NF&A2P et vidéosurveillance IA. Protection optimale pour résidences et entreprises en PACA. Intervention rapide et garantie 5 ans.",
    neighborhoods: ["Vieux-Port", "Joliette", "Prado", "Castellane", "La Valentine", "Les Catalans", "Endoume"],
    nearbyTowns: ["Aix-en-Provence", "Aubagne", "Martigues", "Vitrolles", "Marignane", "La Ciotat"]
  },
  {
    name: "Nice",
    slug: "nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "342 000",
    description: "Expert sécurité sur la Côte d'Azur. HD Connect Nice installe vos systèmes de vidéosurveillance, alarmes et domotique. Protection optimale pour villas, appartements et commerces.",
    neighborhoods: ["Vieux-Nice", "Promenade des Anglais", "Cimiez", "Libération", "Port", "Saint-Roch"],
    nearbyTowns: ["Cannes", "Antibes", "Cagnes-sur-Mer", "Grasse", "Saint-Laurent-du-Var", "Menton"]
  },
  {
    name: "Cannes",
    slug: "cannes",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "74 000",
    description: "Sécurité haut de gamme à Cannes par HD Connect. Protection villas de luxe, hôtels, événements. Vidéosurveillance discrète, alarmes, contrôle d'accès.",
    neighborhoods: ["La Croisette", "Le Suquet", "Palm Beach", "La Californie", "Petit Juas"],
    nearbyTowns: ["Antibes", "Mougins", "Le Cannet", "Mandelieu-la-Napoule", "Vallauris"]
  },
  {
    name: "Aix-en-Provence",
    slug: "aix-en-provence",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "145 000",
    description: "HD Connect Aix-en-Provence : installation sécurité pour bastides, commerces et entreprises. Vidéosurveillance, alarmes, domotique provençale.",
    neighborhoods: ["Centre Historique", "Mazarin", "Jas de Bouffan", "Pont de l'Arc", "Les Milles"],
    nearbyTowns: ["Marseille", "Gardanne", "Vitrolles", "Venelles", "Meyreuil", "Bouc-Bel-Air"]
  },
  // ===== NOUVELLE-AQUITAINE =====
  {
    name: "Bordeaux",
    slug: "bordeaux",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "260 000",
    description: "HD Connect Bordeaux : solutions de sécurité complètes. Vidéosurveillance, alarmes, contrôle d'accès pour maisons, commerces et entreprises. Intervention rapide en Gironde.",
    neighborhoods: ["Chartrons", "Saint-Pierre", "Bacalan", "Bastide", "Caudéran", "Mériadeck"],
    nearbyTowns: ["Mérignac", "Pessac", "Talence", "Bègles", "Villenave-d'Ornon", "Gradignan"]
  },
  {
    name: "La Rochelle",
    slug: "la-rochelle",
    department: "Charente-Maritime",
    departmentCode: "17",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "77 000",
    description: "Installation sécurité La Rochelle par HD Connect. Protection résidences côtières, commerces du port. Vidéosurveillance, alarmes adaptées environnement marin.",
    neighborhoods: ["Vieux Port", "Les Minimes", "La Pallice", "Saint-Nicolas", "Tasdon"],
    nearbyTowns: ["Aytré", "Lagord", "Puilboreau", "Périgny", "Châtelaillon-Plage"]
  },
  // ===== OCCITANIE =====
  {
    name: "Toulouse",
    slug: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "493 000",
    description: "Installation sécurité à Toulouse par HD Connect. Caméras HD, alarmes connectées, domotique intelligente. Expert en protection des biens pour particuliers et professionnels toulousains.",
    neighborhoods: ["Capitole", "Saint-Cyprien", "Compans-Caffarelli", "Minimes", "Rangueil", "Blagnac"],
    nearbyTowns: ["Blagnac", "Colomiers", "Tournefeuille", "Muret", "Balma", "L'Union"]
  },
  {
    name: "Montpellier",
    slug: "montpellier",
    department: "Hérault",
    departmentCode: "34",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "295 000",
    description: "HD Connect Montpellier : expert sécurité électronique. Vidéosurveillance, alarmes, contrôle d'accès pour résidences, commerces et entreprises héraultaises.",
    neighborhoods: ["Écusson", "Antigone", "Port Marianne", "Les Arceaux", "Richter", "Odysseum"],
    nearbyTowns: ["Castelnau-le-Lez", "Lattes", "Pérols", "Mauguio", "Saint-Jean-de-Védas"]
  },
  // ===== HAUTS-DE-FRANCE =====
  {
    name: "Lille",
    slug: "lille",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "236 000",
    description: "Expert sécurité à Lille. HD Connect installe vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Protection optimale pour résidences et locaux professionnels dans le Nord. **Intervention Rapide** possible.",
    neighborhoods: ["Vieux-Lille", "Wazemmes", "Vauban", "Centre", "Bois-Blancs", "Fives"],
    nearbyTowns: ["Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "Lambersart", "Wasquehal"]
  },
  {
    name: "Amiens",
    slug: "amiens",
    department: "Somme",
    departmentCode: "80",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "134 000",
    description: "HD Connect Amiens : sécurité électronique pour entreprises et particuliers. Vidéosurveillance, alarmes certifiées, intervention rapide Somme. **Intervention Rapide** possible.",
    neighborhoods: ["Centre-Ville", "Saint-Leu", "Henriville", "Saint-Acheul", "Etouvie"],
    nearbyTowns: ["Longueau", "Rivery", "Camon", "Dury", "Salouël"]
  },
  // ===== GRAND EST =====
  {
    name: "Strasbourg",
    slug: "strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "287 000",
    description: "HD Connect Strasbourg : solutions de sécurité sur mesure. Caméras de surveillance, systèmes d'alarme certifiés, contrôle d'accès. Intervention dans toute l'Alsace.",
    neighborhoods: ["Grande Île", "Neudorf", "Cronenbourg", "Hautepierre", "Koenigshoffen", "Robertsau"],
    nearbyTowns: ["Illkirch-Graffenstaden", "Schiltigheim", "Lingolsheim", "Bischheim", "Hoenheim", "Ostwald"]
  },
  {
    name: "Nancy",
    slug: "nancy",
    department: "Meurthe-et-Moselle",
    departmentCode: "54",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "105 000",
    description: "Installation sécurité Nancy par HD Connect. Vidéosurveillance, alarmes, domotique pour particuliers et entreprises lorraines. Devis gratuit.",
    neighborhoods: ["Ville-Vieille", "Stanislas", "Saurupt", "Mon Désert", "Trois Maisons"],
    nearbyTowns: ["Vandœuvre-lès-Nancy", "Laxou", "Villers-lès-Nancy", "Maxéville", "Jarville-la-Malgrange"]
  },
  {
    name: "Metz",
    slug: "metz",
    department: "Moselle",
    departmentCode: "57",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "118 000",
    description: "HD Connect Metz : expert sécurité électronique Moselle. Caméras, alarmes, contrôle d'accès pour tous types de bâtiments.",
    neighborhoods: ["Centre Pompidou", "Queuleu", "Sablon", "Plantières", "Borny"],
    nearbyTowns: ["Woippy", "Montigny-lès-Metz", "Moulins-lès-Metz", "Le Ban-Saint-Martin", "Longeville-lès-Metz"]
  },
  // ===== PAYS DE LA LOIRE =====
  {
    name: "Nantes",
    slug: "nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "320 000",
    description: "HD Connect à Nantes : installation et maintenance de systèmes de sécurité. Vidéosurveillance, alarmes anti-intrusion, domotique. Devis gratuit pour particuliers et professionnels.",
    neighborhoods: ["Centre-Ville", "Île de Nantes", "Doulon", "Chantenay", "Erdre", "Zola"],
    nearbyTowns: ["Saint-Herblain", "Rezé", "Orvault", "Saint-Nazaire", "Carquefou", "Vertou"]
  },
  {
    name: "Angers",
    slug: "angers",
    department: "Maine-et-Loire",
    departmentCode: "49",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "155 000",
    description: "Sécurité électronique Angers par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour résidences et entreprises du Maine-et-Loire.",
    neighborhoods: ["Centre-Ville", "La Doutre", "Belle-Beille", "Monplaisir", "Lac de Maine"],
    nearbyTowns: ["Avrillé", "Trélazé", "Beaucouzé", "Bouchemaine", "Saint-Barthélemy-d'Anjou"]
  },
  // ===== BRETAGNE =====
  {
    name: "Rennes",
    slug: "rennes",
    department: "Ille-et-Vilaine",
    departmentCode: "35",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "222 000",
    description: "HD Connect Rennes : expert sécurité électronique Bretagne. Vidéosurveillance, alarmes, contrôle d'accès pour entreprises tech et particuliers.",
    neighborhoods: ["Centre Historique", "Villejean", "Beaulieu", "Saint-Martin", "Thabor"],
    nearbyTowns: ["Cesson-Sévigné", "Saint-Jacques-de-la-Lande", "Bruz", "Chantepie", "Pacé"]
  },
  {
    name: "Brest",
    slug: "brest",
    department: "Finistère",
    departmentCode: "29",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "139 000",
    description: "Installation sécurité Brest par HD Connect. Protection sites portuaires, entreprises, résidences. Vidéosurveillance adaptée environnement marin.",
    neighborhoods: ["Centre-Ville", "Recouvrance", "Saint-Marc", "Lambézellec", "Saint-Pierre"],
    nearbyTowns: ["Guipavas", "Plouzané", "Le Relecq-Kerhuon", "Plougastel-Daoulas", "Gouesnou"]
  },
  // ===== NORMANDIE =====
  {
    name: "Rouen",
    slug: "rouen",
    department: "Seine-Maritime",
    departmentCode: "76",
    region: "Normandie",
    regionSlug: "normandie",
    population: "113 000",
    description: "HD Connect Rouen : sécurité électronique Seine-Maritime. Vidéosurveillance, alarmes, contrôle d'accès pour industries et commerces normands.",
    neighborhoods: ["Centre Historique", "Saint-Sever", "Grammont", "Martainville", "Mont-Saint-Aignan"],
    nearbyTowns: ["Mont-Saint-Aignan", "Bois-Guillaume", "Sotteville-lès-Rouen", "Petit-Quevilly", "Grand-Quevilly"]
  },
  {
    name: "Le Havre",
    slug: "le-havre",
    department: "Seine-Maritime",
    departmentCode: "76",
    region: "Normandie",
    regionSlug: "normandie",
    population: "170 000",
    description: "Expert sécurité Le Havre. HD Connect protège zones portuaires, entrepôts, commerces. Vidéosurveillance industrielle, alarmes certifiées.",
    neighborhoods: ["Centre Reconstruit", "Sainte-Adresse", "Sanvic", "Caucriauville", "Danton"],
    nearbyTowns: ["Sainte-Adresse", "Harfleur", "Gonfreville-l'Orcher", "Montivilliers", "Octeville-sur-Mer"]
  },
  // ===== BOURGOGNE-FRANCHE-COMTÉ =====
  {
    name: "Dijon",
    slug: "dijon",
    department: "Côte-d'Or",
    departmentCode: "21",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "158 000",
    description: "HD Connect Dijon : installation sécurité Bourgogne. Vidéosurveillance, alarmes pour domaines viticoles, commerces, résidences.",
    neighborhoods: ["Centre Historique", "Toison d'Or", "Fontaine-d'Ouche", "Grésilles", "Montchapet"],
    nearbyTowns: ["Chenôve", "Talant", "Quetigny", "Chevigny-Saint-Sauveur", "Longvic"]
  },
  // ===== CENTRE-VAL DE LOIRE =====
  {
    name: "Orléans",
    slug: "orleans",
    department: "Loiret",
    departmentCode: "45",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "116 000",
    description: "Sécurité électronique Orléans par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour entreprises logistiques et particuliers.",
    neighborhoods: ["Centre-Ville", "Source", "Argonne", "Saint-Marceau", "Madeleine"],
    nearbyTowns: ["Olivet", "Saint-Jean-de-Braye", "Fleury-les-Aubrais", "Saran", "Saint-Jean-de-la-Ruelle"]
  },
  {
    name: "Tours",
    slug: "tours",
    department: "Indre-et-Loire",
    departmentCode: "37",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "136 000",
    description: "HD Connect Tours : expert sécurité Val de Loire. Protection châteaux, résidences, commerces. Vidéosurveillance discrète, alarmes.",
    neighborhoods: ["Vieux Tours", "Grammont", "Sanitas", "Deux-Lions", "Rabelais"],
    nearbyTowns: ["Saint-Cyr-sur-Loire", "Saint-Pierre-des-Corps", "Joué-lès-Tours", "La Riche", "Chambray-lès-Tours"]
  }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return citiesData.find(city => city.slug === slug);
};

export const getCitiesByRegion = (region: string): CityData[] => {
  return citiesData.filter(city => city.region === region);
};

export const getCitiesByRegionSlug = (regionSlug: string): CityData[] => {
  return citiesData.filter(city => city.regionSlug === regionSlug);
};

export const getCitiesByDepartment = (departmentCode: string): CityData[] => {
  return citiesData.filter(city => city.departmentCode === departmentCode);
};

export const getAllCitySlugs = (): string[] => {
  return citiesData.map(city => city.slug);
};
