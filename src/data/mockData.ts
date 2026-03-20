export const skillsData = {
  development: [
    { name: 'HTML/CSS', level: 90 },
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 70 },
    { name: 'Node.js', level: 55 },
    { name: 'C', level: 50 },
    { name: 'React', level: 50 },
    { name: 'TypeScript', level: 50 },
    { name: 'PostgreSQL', level: 50 },
  ],
  dataScience: [
    { name: 'Pandas', level: 85 },
    //{ name: 'Scikit-learn', level: 00 },
    //{ name: 'TensorFlow', level: 00 },
    //{ name: 'SQL', level: 00 },
    { name: 'Numpy', level: 85 },
    { name: 'Matplotlib', level: 85 },
    { name: 'Seaborn', level: 85 },
    { name: 'Regression lineaire', level: 65 },
    { name: 'Streamlit', level: 40 },
    //{ name: 'Regression non-lineaire', level: 0 },
  ],
  autres: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Méthodes Agiles', level: 85 },
    { name: 'Agent IA', level: 45 },
    { name: 'CI/CD', level: 70 },
    { name: 'UI/UX Design', level: 50 },
  ]
};

export const projectsData = [
  {
    id: 1,
    title: 'BioFlux - Application de Tracking Santé & Finance',
    category: 'Data',
    image: 'https://github.com/delsDin/BioFlux/blob/main/Docs/logo.png?raw=true',
    techs: ['Python', 'RSA', 'SHA 256'],
    description: 'Calculatrice corporelle intelligente : Sport, Sommeil et Finances',
    details: 'Développement d’une application modulaire en Python (3.8+) dédiée au suivi santé et finance, intégrant des mécanismes de sécurité cryptographique (RSA, SHA 256), des algorithmes d’analyse de tendances, ainsi qu’une gestion avancée des données avec sauvegarde automatique et fusion intelligente.',
    github: 'https://github.com/delsDin/BioFlux',
    demo: '#'
  },
  {
    id: 2,
    title: 'DelsAt - Analyse Climatique',
    category: 'Data',
    image: 'https://github.com/delsDin/DelsAt/raw/main/Docs/DelsAt.png?raw=true',
    techs: ['python', 'pandas', 'matplotlib', 'seaborn', 'jupyter'],
    description: "Un tableau de bord interactif pour l'analyse et la visualisation de données météorologiques.",
    details: "Développement d’un pipeline ETL avec Pandas pour l’intégration et le nettoyage de données météorologiques, d’analyses exploratoires sous Jupyter, de tableaux de bord interactifs avec Matplotlib & Seaborn, ainsi que d’un reporting automatisé, le tout organisé selon une architecture professionnelle.",
    github: 'https://github.com/delsDin/DelsAt',
    demo: '#'
  },
  {
    id: 3,
    title: "Delsio - Terminal d'Analyse & d'Optimisation de Portefeuille",
    category: 'Data',
    image: 'https://github.com/delsDin/Delsio/raw/main/Docs/DelsIo.png?raw=true',
    techs: ['TensorFlow', 'Python', 'OpenCV'],
    description: "Un programme professionnel d'analyse quantitative de portefeuilles financiers, conçu pour les investisseurs particuliers et professionnels.",
    details: 'Développement d’un terminal d’analyse de portefeuille avec moteur de calcul financier (Sharpe, volatilité, drawdown), simulations de Monte Carlo (5 000 itérations), dashboard Streamlit, sécurité par signature RSA 2048 et pipeline de données temps réel via yFinance.',
    github: 'https://github.com/delsDin/Delsio',
    demo: '#'
  },
];

export const experienceData = [
  // {
  //   id: 1,
  //   role: 'Data Scientist Senior',
  //   company: 'Tech Innovators Inc.',
  //   period: '2021 - Présent',
  //   description: [
  //     'Développement de modèles prédictifs augmentant le CA de 15%.',
  //     'Mise en place de pipelines de données automatisés avec Apache Airflow.',
  //     'Mentorat de développeurs juniors.'
  //   ]
  // },
  // {
  //   id: 2,
  //   role: 'Développeur Full-Stack',
  //   company: 'WebSolutions Agency',
  //   period: '2018 - 2021',
  //   description: [
  //     'Création d\'applications web sur mesure pour divers clients.',
  //     'Migration d\'une architecture monolithique vers des microservices.',
  //     'Optimisation des performances front-end (temps de chargement réduit de 40%).'
  //   ]
  // },
  // {
  //   id: 3,
  //   role: 'Formation : Master en Data Science',
  //   company: 'Université des Sciences',
  //   period: '2016 - 2018',
  //   description: [
  //     'Spécialisation en Machine Learning et Big Data.',
  //     'Projet de fin d\'études sur le traitement du langage naturel (NLP).'
  //   ]
  // }
];

export const testimonialsData = [
  // {
  //   id: 1,
  //   name: 'Alice Dupont',
  //   role: 'CTO, Tech Innovators',
  //   message: 'Un développeur exceptionnel avec une rare capacité à comprendre à la fois les enjeux de l\'ingénierie logicielle et de la data science.',
  //   avatar: 'https://picsum.photos/seed/alice/150/150'
  // },
  // {
  //   id: 2,
  //   name: 'Marc Martin',
  //   role: 'Product Manager, WebSolutions',
  //   message: 'Toujours force de proposition, il a su transformer nos idées complexes en interfaces simples et performantes.',
  //   avatar: 'https://picsum.photos/seed/marc/150/150'
  // }
];
