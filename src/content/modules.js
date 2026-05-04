// Source unique des formations pour afficher la grille de cartes.
// Les contenus détaillés sont directement gérés dans les pages de chaque composant.

export const modules = [
  {
    slug: 'prepa-annuelle-temps-plein',
    number: '01',
    tag: 'RECOMMANDÉ',
    title: 'Prépa Annuelle Temps Plein',
    short: 'La voie royale vers le diplôme d’État',
    subtitle: "Notre formation phare en immersion totale à Paris. Sur une année complète, préparez sereinement les concours des ENSA et écoles internationales. Au programme : acquisition de bases techniques (dessin, projet, expression plastique, modélisation), constitution d'un book professionnel, entraînements poussés aux oraux, culture architecturale, stratégie d'orientation et un stage en agence d’architecture.",
    price: '6 980 €',
    cover: 'https://media.routard.com/image/74/7/photo.1405747.w1000.jpg',
  },
  {
    slug: 'prepa-distance',
    number: '02',
    tag: 'FLEXIBLE',
    title: 'Prépa à Distance',
    short: 'Votre candidature ENSA depuis chez vous',
    subtitle: "Constituez un dossier de candidature exceptionnel aux ENSA depuis chez vous, à votre propre rythme. Cette formation couvre l'intégralité des épreuves : réalisation d'un portfolio créatif, préparation approfondie à l'entretien d'admission, enrichissement de la culture architecturale et apprentissage des bases techniques du dessin, le tout encadré par nos architectes enseignants.",
    price: '1 480 €',
    cover: 'https://media.timeout.com/images/106009567/1024/576/image.webp',
  },
  {
    slug: 'stage-boot-camp',
    number: '03',
    tag: 'INTENSIF',
    title: 'Stage Prépa Boot Camp',
    short: 'Une semaine pour tout changer',
    subtitle: "Une immersion intensive de 5 jours (33 heures de cours) en petit groupe à Paris. Conçu pour propulser votre candidature, ce stage couvre la rédaction de votre lettre de motivation (projet motivé), l'initiation au croquis et à la maquette, le montage stratégique de votre portfolio et la préparation à l'oral avec de multiples simulations face à un jury d'architectes.",
    price: '850 €',
    cover: 'https://www.pariszigzag.fr/wp-content/uploads/2023/11/CITE-UNIVERSITAIRE-6-PARIS-ZIGZAG.jpg',
  },
  {
    slug: 'stage-entretien-ensa',
    number: '04',
    tag: 'FOCUS ORAL',
    title: 'Stage Entretien ENSA',
    short: 'Anticipez. Préparez. Réussissez.',
    subtitle: "Ne laissez pas l'oral au hasard ! Ce stage intensif de deux jours, 100 % en ligne, vous donne toutes les clés pour convaincre le jury. Apprenez à construire un storytelling percutant, maîtrisez la méthode infaillible du commentaire d'image, et enchaînez les oraux blancs en conditions réelles avec un débriefing personnalisé par nos coachs en communication.",
    price: '390 €',
    cover: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'stage-decouverte',
    number: '05',
    tag: 'ORIENTATION',
    title: 'Stage de Découverte',
    short: 'Affinez votre projet d’architecte',
    subtitle: "La formation idéale pour confirmer votre vocation. En 5 jours, plongez au cœur de la profession : découvrez la diversité des métiers (urbaniste, designer, paysagiste), initiez-vous aux bases du dessin d'observation et à la fabrication de maquettes en 3 dimensions, enrichissez votre culture urbaine et clarifiez vos futurs choix d'orientation avant de vous lancer.",
    price: '790 €',
    cover: 'https://media.routard.com/image/71/5/photo.1582715.w1000.jpeg',
  },
  {
    slug: 'formation-rhino-3d',
    number: '06',
    tag: 'LOGICIEL',
    title: 'Formation Logiciel 3D Rhino',
    short: 'Maîtrisez la conception numérique',
    subtitle: "Maîtrisez la conception architecturale numérique avec Rhinocéros 3D. Cette formation de 24 heures réparties sur 4 jours alterne théorie et pratique pour vous rendre autonome : de la prise en main de l'interface à la modélisation topographique, jusqu'à la préparation des exports CAO et des rendus visuels pour vos futurs projets professionnels.",
    price: '1 188 €',
    cover: 'https://www.pariszigzag.fr/wp-content/uploads/2023/11/CITE-UNIVERSITAIRE-3-PARIS-ZIZGAG.jpg',
  }
]

export const getModule = slug => modules.find(m => m.slug === slug)