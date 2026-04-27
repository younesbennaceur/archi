// Source unique des articles du blog. Chaque article = une page SEO.
// Ajouter un article = ajouter une entrée ici (+ rebuild sitemap si possible).

export const articles = [
  {
    slug: 'reussir-concours-ensa-methode-complete',
    title: "Réussir le concours ENSA : la méthode complète en 2026",
    excerpt: "Toutes les étapes clés pour construire un dossier convaincant, préparer le portfolio et réussir l'entretien de motivation des Écoles Nationales Supérieures d'Architecture.",
    cover: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    date: '2026-03-14',
    readTime: 8,
    author: { name: 'Faiz Cheraiet', role: 'Directeur Prépa' },
    category: 'Méthodologie',
    tags: ['ENSA', 'concours', 'portfolio', 'entretien'],
    seo: {
      title: "Réussir le concours ENSA en 2026 : méthode complète | Prépa MonArchi",
      description: "Guide étape par étape pour intégrer une ENSA : construction du portfolio, lettre de motivation, entretien de jury. Méthode éprouvée, 100% réussite.",
      keywords: ['concours ENSA', 'prépa architecture', 'portfolio architecture', 'entretien ENSA'],
    },
    content: [
      { type: 'p', text: "Intégrer une École Nationale Supérieure d'Architecture (ENSA) ne se joue pas uniquement sur le dossier scolaire. Le concours évalue votre sensibilité spatiale, votre culture architecturale et votre capacité à défendre un projet devant un jury exigeant." },
      { type: 'h2', text: '1. Construire un portfolio qui raconte une histoire' },
      { type: 'p', text: "Le portfolio est le premier outil de sélection. Il doit démontrer une cohérence narrative : chaque planche répond à une intention. Évitez la simple juxtaposition de travaux, cherchez le fil conducteur." },
      { type: 'quote', text: "Un portfolio n'est pas un inventaire, c'est une démonstration de pensée." },
      { type: 'h2', text: '2. Maîtriser la culture architecturale contemporaine' },
      { type: 'p', text: "Les jurys attendent des candidats qu'ils citent leurs références. Lisez Kenneth Frampton, étudiez les Pritzker des 10 dernières années, visitez autant de bâtiments que possible." },
      { type: 'h2', text: '3. Préparer un entretien engagé' },
      { type: 'p', text: "L'oral n'est pas une récitation : c'est un dialogue. Préparez 3 projets que vous pouvez défendre à fond, anticipez les questions pièges sur la soutenabilité et la commande publique." },
    ],
  },
  {
    slug: 'construire-portfolio-architecture-etudiant',
    title: "Construire son portfolio d'architecture quand on est étudiant",
    excerpt: "Les 7 règles typographiques, graphiques et narratives qui distinguent un portfolio amateur d'un portfolio professionnel — validé par les jurys ENSA.",
    cover: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1600&q=80',
    date: '2026-02-28',
    readTime: 6,
    author: { name: 'Solveig Alegre', role: 'Architecte DE, encadrante portfolio' },
    category: 'Portfolio',
    tags: ['portfolio', 'mise en page', 'graphisme'],
    seo: {
      title: "Portfolio d'architecture étudiant : 7 règles pour convaincre | Prépa MonArchi",
      description: "Typographie, grille, narration, choix des projets : le guide pratique pour construire un portfolio d'architecture percutant qui passe les sélections ENSA.",
      keywords: ['portfolio architecture', 'mise en page portfolio', 'portfolio ENSA'],
    },
    content: [
      { type: 'p', text: "Un bon portfolio se construit comme un projet d'architecture : grille, hiérarchie, lumière. Voici les 7 règles que nous enseignons en atelier." },
      { type: 'h2', text: 'Règle 1 — Une seule famille typographique' },
      { type: 'p', text: "Choisissez une grotesque neutre (Inter, Söhne, Helvetica Now) et tenez-la sur tout le document. Les mélanges typographiques signalent immédiatement l'amateurisme." },
      { type: 'h2', text: 'Règle 2 — La grille avant le dessin' },
      { type: 'p', text: "Définissez votre grille (12 colonnes, 6 colonnes, modulaire) avant de placer la moindre image. Votre portfolio doit être lisible à 10 cm comme à 2 m." },
      { type: 'h2', text: "Règle 3 — Moins de projets, plus de profondeur" },
      { type: 'p', text: "5 projets bien documentés battent 15 projets survolés. Le jury retient ce qui est démontré, pas ce qui est listé." },
    ],
  },
  {
    slug: 'culture-charrette-ecole-architecture',
    title: "La culture de la 'charrette' : comprendre le rythme d'une école d'architecture",
    excerpt: "D'où vient ce terme, pourquoi il structure la pédagogie des ENSA et comment s'y préparer mentalement dès la prépa pour ne pas décrocher.",
    cover: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80',
    date: '2026-01-20',
    readTime: 5,
    author: { name: 'Faiz Cheraiet', role: 'Directeur Prépa' },
    category: 'Vie étudiante',
    tags: ['école architecture', 'charrette', 'rythme'],
    seo: {
      title: "Culture de la charrette : comprendre l'ENSA | Prépa MonArchi",
      description: "Origines, réalité quotidienne et préparation mentale : tout comprendre de la 'charrette', pilier culturel des écoles nationales supérieures d'architecture.",
      keywords: ['charrette architecture', 'ENSA rythme', 'vie étudiante ENSA'],
    },
    content: [
      { type: 'p', text: "Le mot « charrette » vient des Beaux-Arts du XIXe siècle : une charrette passait dans l'atelier pour collecter les rendus au dernier moment. Aujourd'hui encore, le terme désigne la phase finale intense avant un rendu de projet." },
      { type: 'h2', text: 'Une réalité quotidienne' },
      { type: 'p', text: "En première année d'ENSA, un rendu tombe en moyenne toutes les 3 à 4 semaines. Les nuits blanches ne sont pas un mythe — mais elles se préparent, se gèrent, et surtout s'évitent avec la bonne méthode." },
      { type: 'h2', text: "S'y préparer dès la prépa" },
      { type: 'p', text: "Notre pédagogie installe très tôt les réflexes : planning projet, jalons intermédiaires, technique de dessin rapide. L'objectif : vous faire vivre la charrette en prépa pour qu'elle ne vous surprenne pas en école." },
    ],
  },
]

export const getArticle = slug => articles.find(a => a.slug === slug)
export const getRelated = (slug, limit = 2) =>
  articles.filter(a => a.slug !== slug).slice(0, limit)
