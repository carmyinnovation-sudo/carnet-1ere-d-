/* ============================================================
   CONTENU — Première D, programme du Bénin (2026-2027)
   Chapitres relevés dans les cahiers de l’élève pour le
   2e devoir du 1er trimestre (lundi 30 novembre 2026).
   PCT : début du programme officiel de 1ère D, à vérifier.
   ============================================================ */
const NIVEAU_IA = "en classe de Première D au Bénin (programme officiel béninois, approche par compétences)";
const MATIERES = {
  maths:    { id: "maths",    nom: "Maths",        long: "Mathématiques",                     couleur: "var(--s-maths)" },
  pct:      { id: "pct",      nom: "PCT",          long: "Physique, chimie et technologie",   couleur: "var(--s-pct)" },
  svt:      { id: "svt",      nom: "SVT",          long: "Sciences de la vie et de la Terre", couleur: "var(--s-svt)" },
  francais: { id: "francais", nom: "Français",     long: "Français",                          couleur: "var(--s-francais)" },
  anglais:  { id: "anglais",  nom: "Anglais",      long: "Anglais",                           couleur: "var(--s-anglais)" },
  philo:    { id: "philo",    nom: "Philo",        long: "Philosophie",                       couleur: "var(--s-philo)" },
  hg:       { id: "hg",       nom: "Histoire-géo", long: "Histoire-géographie",               couleur: "var(--s-hg)" }
};
const DEVOIR_DEFAUT = "2026-11-30";
const DATES_CLES = [];
const TYPE_MAT = { maths: "sciences", pct: "sciences", svt: "sciences", francais: "lettres", philo: "lettres", hg: "lettres", anglais: "langue" };

/* Types d’erreurs du carnet */
const ERREUR_TYPES = [
  { id: "cours",         nom: "Cours ou formule pas su",              conseil: "Fais-en une carte mémoire et revois-la demain, puis dans 2 jours." },
  { id: "methode",       nom: "Méthode pas sue",                       conseil: "Refais l’exercice corrigé sans regarder, puis écris la méthode en 3 étapes sur une fiche." },
  { id: "calcul",        nom: "Erreur de calcul ou de signe",          conseil: "Vérifie chaque ligne : signes, parenthèses, carrés. Contrôle ton résultat (remplace-le dans l’équation, regarde l’ordre de grandeur)." },
  { id: "justification", nom: "Justification incomplète",              conseil: "À chaque étape, cite la propriété ou le théorème : « On sait que… Or… Donc… »." },
  { id: "unite",         nom: "Unité oubliée ou fausse",               conseil: "Convertis avant de calculer (km/h → m/s, g → kg) et écris toujours l’unité du résultat." },
  { id: "consigne",      nom: "Consigne mal lue / hors sujet",         conseil: "Souligne le verbe de la consigne (calculer, justifier, montrer, expliquer, décrire) avant de répondre." },
  { id: "plan",          nom: "Plan ou organisation des idées",        conseil: "Avant de rédiger : une idée par paragraphe, annoncée dans l’introduction." },
  { id: "exemple",       nom: "Citation ou exemple manquant",          conseil: "Chaque idée = une affirmation + une citation ou un exemple précis + une explication." },
  { id: "langue",        nom: "Orthographe, grammaire, expression",    conseil: "Garde 10 minutes pour te relire : accords, conjugaison, ponctuation." },
  { id: "temps",         nom: "Manque de temps",                       conseil: "Fixe un temps par exercice avant de commencer et surveille l’heure. Commence par ce que tu sais faire." },
  { id: "attention",     nom: "Inattention",                           conseil: "Relis ta copie en cherchant une seule chose à la fois (signes, unités, accords)." }
];

/* Rédactions type devoir (corrigées à l’aide d’une grille et d’une proposition de corrigé) */
const EXERCICES = {
  "ph-dissert": {
    mat: "philo", nom: "Dissertation : introduction et plan détaillé", duree: 30, sujetType: "ph-dissert",
    desc: "Le travail qui fait la différence se fait au brouillon.",
    consigne: "Définis les mots importants du sujet, pose le problème en une question, puis écris l’introduction et un plan en 2 ou 3 parties. Pour chaque partie : une idée, un argument, un exemple et un auteur.",
    grille: [
      ["cours", "J’ai défini les mots importants du sujet"],
      ["plan", "J’ai posé un vrai problème (deux réponses possibles qui s’opposent)"],
      ["plan", "Mon plan répond au problème et progresse d’une partie à l’autre"],
      ["exemple", "Chaque partie a un argument, un exemple et un auteur"],
      ["langue", "J’ai relu l’orthographe et les accords"]
    ]
  },
  "ph-texte": {
    mat: "philo", nom: "Étude de texte", duree: 30, sujetType: "ph-texte",
    desc: "Thème, thèse, problème, structure, puis intérêt et limites.",
    consigne: "Lis le texte deux fois. Donne son thème, la thèse de l’auteur en une phrase, le problème auquel il répond et ses étapes (sa structure). Puis montre l’intérêt de cette thèse et ses limites, avec un autre auteur ou un exemple.",
    grille: [
      ["cours", "J’ai trouvé le thème et la thèse (en une phrase, avec mes mots)"],
      ["consigne", "J’ai formulé le problème sous forme de question"],
      ["plan", "J’ai découpé le texte en étapes et je les ai nommées"],
      ["exemple", "J’ai cité le texte (avec les lignes) et je l’ai expliqué"],
      ["justification", "J’ai discuté la thèse : un intérêt et une limite"]
    ]
  },
  "fr-commentaire": {
    mat: "francais", nom: "Commentaire composé : introduction et plan détaillé", duree: 35, sujetType: "fr-commentaire",
    desc: "Relève les procédés au brouillon avant d’écrire.",
    consigne: "Écris l’introduction complète (amorce, présentation du texte, idée générale, annonce des centres d’intérêt), puis le plan détaillé : 2 centres d’intérêt, et pour chaque idée un procédé nommé, une citation avec sa ligne ou son vers, et l’effet produit.",
    grille: [
      ["consigne", "Mon introduction a ses 4 éléments : amorce, présentation, idée générale, annonce du plan"],
      ["plan", "Mes 2 centres d’intérêt disent ce qui fait l’intérêt du texte (pas un résumé)"],
      ["exemple", "Chaque idée s’appuie sur une citation et un procédé nommé"],
      ["justification", "J’ai expliqué l’effet de chaque procédé, sans paraphraser le texte"],
      ["langue", "J’ai relu l’orthographe et les accords"]
    ]
  },
  "hg-dissert": {
    mat: "hg", nom: "Dissertation guidée", duree: 30, sujetType: "hg-dissert",
    desc: "Comme au devoir : définir, citer, présenter, expliquer.",
    consigne: "Réponds à chaque consigne dans l’ordre, en phrases complètes, avec des exemples précis (pays, routes, ports, dates). Relie tes réponses par une courte introduction et une conclusion.",
    grille: [
      ["cours", "J’ai défini les termes demandés"],
      ["consigne", "J’ai répondu à toutes les consignes, dans l’ordre"],
      ["exemple", "J’ai donné des exemples précis : pays, routes, ports, dates"],
      ["plan", "Mon devoir a une introduction, des paragraphes et une conclusion"],
      ["langue", "J’ai relu l’orthographe et les accords"]
    ]
  },
  "en-writing": {
    mat: "anglais", nom: "Writing : un paragraphe", duree: 25, sujetType: "en-writing",
    desc: "Part B du devoir : un texte d’environ 15 à 20 lignes.",
    consigne: "Write a paragraph of about 15 to 20 lines. Start with a topic sentence, give 2 or 3 ideas with examples, link them with connectors (first, moreover, however, finally) and end with a concluding sentence.",
    grille: [
      ["consigne", "My paragraph answers the question (it is not off-topic)"],
      ["plan", "Topic sentence, 2 or 3 ideas, concluding sentence"],
      ["exemple", "Each idea has an example"],
      ["langue", "Correct verbs (tenses, -s at he/she/it), spelling and punctuation"],
      ["justification", "I used connectors (first, moreover, however, finally)"]
    ]
  }
};

const METHODES = [];
const CHAPITRES = [];
const QUIZ = {};
const EXOS = {};
