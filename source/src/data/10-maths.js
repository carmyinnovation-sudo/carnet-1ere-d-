/* ---------------- MATHÉMATIQUES · 1ère D ----------------
   SA1 Configuration de l’espace · SA2 Organisation des données
   (relevé du cahier : droites orthogonales, droite et plans orthogonaux, plans perpendiculaires,
   projections orthogonales, vecteurs de l’espace ; équations et inéquations dans ℝ, systèmes linéaires, dénombrement) */
const FIGURES = {
  cube: {
    titre: "Cube ABCDEFGH", w: 270, h: 222, legende: "ABCD : face du dessous · EFGH : face du dessus",
    pts: [["A", 40, 196, -12, 8], ["B", 172, 196, 4, 14], ["C", 230, 154, 14, 6], ["D", 98, 154, -14, -6], ["E", 40, 64, -14, -2], ["F", 172, 64, 12, 10], ["G", 230, 22, 12, -6], ["H", 98, 22, -10, -10]],
    aretes: [["A", "B"], ["B", "F"], ["F", "E"], ["E", "A"], ["B", "C"], ["C", "G"], ["G", "F"], ["E", "H"], ["H", "G"]],
    cachees: [["A", "D"], ["D", "C"], ["D", "H"]]
  },
  tetra: {
    titre: "Tétraèdre SABC", w: 270, h: 230, legende: "(SA) ⊥ (ABC) · ABC rectangle en B · H projeté de A sur (SB)",
    pts: [["S", 60, 22, -12, -6], ["A", 60, 196, -14, 6], ["B", 160, 214, 2, 14], ["C", 240, 150, 14, 2], ["H", 105, 107, 14, -6]],
    aretes: [["S", "A"], ["S", "B"], ["S", "C"], ["A", "B"], ["B", "C"]],
    cachees: [["A", "C"]],
    couleur: [["A", "H"]],
    angles: [[60, 182, "h 13 l 0 15"], [150, 212, "l 8 -6 l 8 2"]]
  }
};

METHODES.push(
  { id: "m-ma-devoir", mat: "maths", titre: "Maths : réussir le devoir",
    intro: "Le devoir commence par une **situation** (une histoire : un atelier, un marché, une coopérative…), puis une **tâche** : « Tu es invité(e) à résoudre les problèmes suivants ». Ensuite viennent 2 ou 3 problèmes numérotés. L’histoire sert d’habillage : les questions sont des exercices classiques du cours.",
    etapes: [
      ["Lis tout le sujet (5 min)", "Repère les questions que tu sais faire : il y en a toujours (calculer un discriminant, résoudre un système, compter avec une formule)."],
      ["Commence par ce que tu sais faire", "Les questions ne sont pas forcément de plus en plus dures. Prends tous les points faciles d’abord."],
      ["Rédige comme une preuve", "« On sait que… Or… Donc… ». Cite la propriété ou le théorème. Un résultat sans justification rapporte peu."],
      ["Utilise les questions précédentes", "« En déduire » veut dire : la réponse vient de la question d’avant."],
      ["Vérifie", "Remplace la solution dans l’équation. Un nombre de façons est un entier positif. Une longueur est positive."],
      ["Gère le temps", "3 heures pour 3 problèmes : environ 1 heure chacun. Bloquée plus de 10 minutes ? Passe et reviens."]
    ],
    pieges: ["Rester bloquée sur une question et ne pas traiter la suite", "Oublier les cas particuliers (a = 0 dans une équation à paramètre)", "Confondre arrangement (l’ordre compte) et combinaison (l’ordre ne compte pas)", "Oublier de conclure par une phrase"] },
  { id: "m-ma-espace", mat: "maths", titre: "Maths : démontrer une orthogonalité dans l’espace",
    intro: "Presque toutes les questions de géométrie dans l’espace se ramènent à **trois théorèmes**. Le travail : trouver les bonnes droites, puis justifier chaque petite orthogonalité.",
    etapes: [
      ["Que veux-tu montrer ?", "Deux droites orthogonales ? Une droite orthogonale à un plan ? Deux plans perpendiculaires ?"],
      ["Droite ⊥ plan", "Trouve **deux droites sécantes** du plan, orthogonales à ta droite. Justifie chacune (diagonales d’un carré, arête d’un cube, triangle rectangle…)."],
      ["Droites orthogonales", "Montre que l’une est orthogonale à un plan qui contient l’autre. Ou utilise une parallèle : si (d) ∥ (d’) et (d’) ⊥ (Δ), alors (d) ⊥ (Δ)."],
      ["Plans perpendiculaires", "Trouve dans l’un des plans une droite orthogonale à l’autre plan."],
      ["Conclus", "Nomme le théorème : « (BD) est orthogonale aux deux droites sécantes (AC) et (CG) du plan (ACG), donc (BD) ⊥ (ACG). »"]
    ],
    pieges: ["Croire que deux droites orthogonales se coupent forcément", "Prendre deux droites parallèles du plan au lieu de deux droites sécantes", "Affirmer une orthogonalité sans la justifier"] },
  { id: "m-ma-param", mat: "maths", titre: "Maths : équation du 2nd degré à paramètre",
    intro: "Exemple type : (m − 3)x² − 2(m + 2)x + m − 5 = 0. Le paramètre m change l’équation : il faut **discuter** selon ses valeurs.",
    etapes: [
      ["Le cas a = 0", "Si le coefficient de x² est nul (ici m = 3), l’équation est du 1er degré : résous-la à part."],
      ["Le discriminant", "Sinon, calcule Δ (ou Δ’ si b est pair) en fonction de m, puis étudie son signe."],
      ["Discute", "Δ < 0 : pas de solution ; Δ = 0 : une racine double ; Δ > 0 : deux racines. Écris les valeurs de m pour chaque cas."],
      ["Signe des racines", "Utilise P = @frac{c}{a} et S = @frac{−b}{a} : P < 0 → signes contraires ; P > 0 et S > 0 → deux positives ; P > 0 et S < 0 → deux négatives (avec Δ > 0)."],
      ["Fais un tableau", "Un tableau de signes de Δ, P et S selon m évite les oublis. Puis conclus par des intervalles."]
    ],
    pieges: ["Oublier le cas m = 3 (a = 0)", "Oublier Δ > 0 quand on demande « deux racines »", "Se tromper de signe en développant (m + 2)²"] }
);

CHAPITRES.push(
  /* ---------------- SA1 · Configuration de l’espace ---------------- */
  { id: "ma-ortho", mat: "maths", groupe: "SA1 · Configuration de l’espace", devoir: true, court: "Orthogonalité dans l’espace",
    titre: "Droites orthogonales, droite et plan orthogonaux, plans perpendiculaires",
    fiche: [
      "**Cube ABCDEFGH** (convention des exercices) : ABCD est la face du dessous, EFGH celle du dessus, E au-dessus de A, F de B, G de C, H de D.\n@fig{cube}",
      "**Droites orthogonales** : (d) et (d’) sont orthogonales si leurs parallèles menées par un même point sont perpendiculaires. On note (d) ⊥ (d’). Attention : elles ne se coupent pas forcément (perpendiculaires = orthogonales **et** sécantes).",
      "Si (d) ∥ (d’) et (d’) ⊥ (Δ), alors (d) ⊥ (Δ).",
      "**Droite orthogonale à un plan** : (d) ⊥ (P) si (d) est orthogonale à toutes les droites de (P).",
      "**Le théorème clé** : si (d) est orthogonale à **deux droites sécantes** de (P), alors (d) ⊥ (P).",
      "**La réciproque utile** : si (d) ⊥ (P), alors (d) est orthogonale à **toute** droite de (P).",
      "Deux droites orthogonales à un même plan sont parallèles. Deux plans orthogonaux à une même droite sont parallèles.",
      "**Plans perpendiculaires** : (P) ⊥ (Q) si l’un des plans contient une droite orthogonale à l’autre.",
      "**Plan médiateur** de [AB] : le plan qui passe par le milieu de [AB] et qui est orthogonal à (AB). C’est l’ensemble des points équidistants de A et de B.",
      "Dans le cube : chaque arête verticale est orthogonale aux faces horizontales, par exemple (AE) ⊥ (ABC). Les diagonales d’une face carrée sont perpendiculaires : (AC) ⊥ (BD)."
    ],
    cartes: [
      ["Deux droites orthogonales se coupent-elles toujours ?", "Non. Deux droites orthogonales peuvent ne pas se couper. Si elles se coupent en plus, on dit qu’elles sont perpendiculaires."],
      ["Théorème : comment montrer que (d) est orthogonale au plan (P) ?", "Il suffit que (d) soit orthogonale à deux droites **sécantes** de (P)."],
      ["Si (d) ⊥ (P), que dire de (d) et d’une droite de (P) ?", "(d) est orthogonale à toutes les droites de (P)."],
      ["Comment montrer que deux plans sont perpendiculaires ?", "On trouve dans l’un des plans une droite orthogonale à l’autre plan."],
      ["Deux droites orthogonales à un même plan sont…", "parallèles."],
      ["Deux plans orthogonaux à une même droite sont…", "parallèles."],
      ["Si (d) ∥ (d’) et (d’) ⊥ (Δ), alors…", "(d) ⊥ (Δ) : l’orthogonalité se transmet aux parallèles."],
      ["Plan médiateur du segment [AB]", "Le plan qui passe par le milieu de [AB] et qui est orthogonal à (AB). Tous ses points sont à égale distance de A et de B."],
      ["Dans le cube ABCDEFGH, pourquoi (AE) ⊥ (ABC) ?", "(AE) ⊥ (AB) et (AE) ⊥ (AD) (faces carrées), et (AB), (AD) sont deux droites sécantes du plan (ABC)."],
      ["Dans le cube, pourquoi (AC) ⊥ (BD) ?", "Ce sont les diagonales du carré ABCD : elles sont perpendiculaires."],
      ["Dans le cube, pourquoi (EG) ∥ (AC) ?", "AEGC est un rectangle : (AE) et (CG) sont parallèles et de même longueur, donc AEGC est un parallélogramme (avec un angle droit)."],
      ["Perpendiculaires ou orthogonales : la différence ?", "Perpendiculaires = orthogonales ET sécantes. Orthogonales = « à angle droit » même sans se toucher."]
    ],
    sujets: [] },
  { id: "ma-proj", mat: "maths", groupe: "SA1 · Configuration de l’espace", devoir: true, court: "Projections orthogonales",
    titre: "Projection orthogonale sur un plan et sur une droite, distances",
    fiche: [
      "**Projeté orthogonal d’un point M sur un plan (P)** : le point H de (P) tel que (MH) ⊥ (P). Si M ∈ (P), alors H = M.",
      "**Projeté orthogonal de M sur une droite (D)** : le point H de (D) tel que (MH) ⊥ (D). C’est le point d’intersection de (D) avec le plan passant par M et orthogonal à (D).",
      "**Distance d’un point à un plan** : d(M ; (P)) = MH, où H est le projeté orthogonal de M sur (P). C’est la plus petite distance entre M et un point de (P).",
      "**Méthode** pour trouver le projeté de M sur (P) : chercher une droite passant par M et orthogonale à (P) (avec le théorème des deux droites sécantes), puis son point d’intersection avec (P).",
      "Dans le cube ABCDEFGH : le projeté de G sur le plan (ABC) est C, car (GC) ⊥ (ABC). Le projeté de E sur la droite (AB) est A, car (EA) ⊥ (AB).",
      "Dans le cube d’arête a : la distance de E au plan (ABC) vaut a ; la diagonale d’une face vaut a@sqrt{2} ; la grande diagonale [AG] vaut a@sqrt{3}."
    ],
    cartes: [
      ["Projeté orthogonal de M sur le plan (P) : définition", "Le point H de (P) tel que (MH) soit orthogonale à (P)."],
      ["Projeté orthogonal de M sur la droite (D) : définition", "Le point H de (D) tel que (MH) ⊥ (D). C’est l’intersection de (D) avec le plan passant par M et orthogonal à (D)."],
      ["Distance d’un point M à un plan (P)", "MH, où H est le projeté orthogonal de M sur (P)."],
      ["Si M appartient au plan (P), son projeté orthogonal sur (P) est…", "M lui-même."],
      ["Cube d’arête a : longueur d’une diagonale de face", "a@sqrt{2} (théorème de Pythagore dans le carré)."],
      ["Cube d’arête a : longueur de la grande diagonale [AG]", "a@sqrt{3} : AG² = AC² + CG² = 2a² + a² = 3a²."],
      ["Dans le cube, projeté de G sur le plan (ABC) ?", "C, car (GC) est orthogonale au plan (ABC)."],
      ["Méthode : trouver le projeté de M sur un plan", "Trouver une droite passant par M orthogonale au plan, puis son point d’intersection avec le plan."]
    ],
    sujets: [] },
  { id: "ma-vect", mat: "maths", groupe: "SA1 · Configuration de l’espace", devoir: true, court: "Vecteurs de l’espace",
    titre: "Vecteurs de l’espace : coplanarité, base, coordonnées",
    fiche: [
      "Les règles du plan restent vraies : relation de Chasles @vec{AB} + @vec{BC} = @vec{AC}, produit par un réel, colinéarité (@vec{u} et @vec{v} colinéaires s’il existe k tel que @vec{v} = k@vec{u}).",
      "**Vecteurs coplanaires** : @vec{u}, @vec{v}, @vec{w} sont coplanaires si l’un s’écrit avec les deux autres : @vec{w} = a@vec{u} + b@vec{v} (avec @vec{u} et @vec{v} non colinéaires).",
      "**Points coplanaires** : A, B, C, D sont coplanaires si et seulement si @vec{AB}, @vec{AC}, @vec{AD} sont coplanaires.",
      "**Base de l’espace** : trois vecteurs **non coplanaires** (@vec{i}, @vec{j}, @vec{k}). Tout vecteur s’écrit de façon unique @vec{u} = x@vec{i} + y@vec{j} + z@vec{k} : (x ; y ; z) sont ses coordonnées.",
      "**Repère** (O ; @vec{i}, @vec{j}, @vec{k}) : M a pour coordonnées (x ; y ; z) quand @vec{OM} = x@vec{i} + y@vec{j} + z@vec{k}.",
      "@vec{AB} a pour coordonnées (x_{B} − x_{A} ; y_{B} − y_{A} ; z_{B} − z_{A}). Le milieu I de [AB] a pour coordonnées (@frac{x_{A} + x_{B}}{2} ; @frac{y_{A} + y_{B}}{2} ; @frac{z_{A} + z_{B}}{2}).",
      "**Coplanarité avec des coordonnées** : on cherche a et b tels que @vec{w} = a@vec{u} + b@vec{v}. On obtient un système de 3 équations à 2 inconnues : on trouve a et b avec deux équations, puis on **vérifie** la troisième. Si elle est vraie : coplanaires ; sinon : non coplanaires (donc base).",
      "Dans le repère (A ; @vec{AB}, @vec{AD}, @vec{AE}) du cube : A(0 ; 0 ; 0), B(1 ; 0 ; 0), C(1 ; 1 ; 0), D(0 ; 1 ; 0), E(0 ; 0 ; 1), F(1 ; 0 ; 1), G(1 ; 1 ; 1), H(0 ; 1 ; 1)."
    ],
    cartes: [
      ["Relation de Chasles", "@vec{AB} + @vec{BC} = @vec{AC}, pour tous points A, B, C de l’espace."],
      ["Vecteurs colinéaires", "@vec{u} et @vec{v} sont colinéaires s’il existe un réel k tel que @vec{v} = k@vec{u} : leurs coordonnées sont proportionnelles."],
      ["Trois vecteurs coplanaires", "L’un s’écrit en fonction des deux autres : @vec{w} = a@vec{u} + b@vec{v}."],
      ["Quatre points A, B, C, D coplanaires", "Si et seulement si @vec{AB}, @vec{AC} et @vec{AD} sont coplanaires."],
      ["Base de l’espace", "Trois vecteurs non coplanaires."],
      ["Coordonnées de @vec{AB}", "(x_{B} − x_{A} ; y_{B} − y_{A} ; z_{B} − z_{A}) : « arrivée moins départ »."],
      ["Coordonnées du milieu de [AB]", "La moyenne des coordonnées : (@frac{x_{A} + x_{B}}{2} ; @frac{y_{A} + y_{B}}{2} ; @frac{z_{A} + z_{B}}{2})."],
      ["@vec{AB} = @vec{DC} signifie…", "ABCD est un parallélogramme."],
      ["Méthode : @vec{u}, @vec{v}, @vec{w} sont-ils coplanaires ?", "Chercher a et b avec @vec{w} = a@vec{u} + b@vec{v} : résoudre avec 2 équations, puis vérifier la 3e. Vraie → coplanaires. Fausse → non coplanaires."],
      ["Coordonnées de G dans le repère (A ; @vec{AB}, @vec{AD}, @vec{AE}) du cube", "G(1 ; 1 ; 1), car @vec{AG} = @vec{AB} + @vec{AD} + @vec{AE}."]
    ],
    sujets: [] },
  /* ---------------- SA2 · Organisation des données ---------------- */
  { id: "ma-eq", mat: "maths", groupe: "SA2 · Organisation des données", devoir: true, court: "Second degré : équations et inéquations",
    titre: "Équations et inéquations dans ℝ : second degré, signe, somme et produit des racines",
    fiche: [
      "**Trinôme** ax² + bx + c (a ≠ 0). **Discriminant** : Δ = b² − 4ac.",
      "**Δ > 0** : deux racines x_{1} = @frac{−b − @sqrt{Δ}}{2a} et x_{2} = @frac{−b + @sqrt{Δ}}{2a}. Factorisation : a(x − x_{1})(x − x_{2}).",
      "**Δ = 0** : une racine double x_{0} = @frac{−b}{2a}. Factorisation : a(x − x_{0})². **Δ < 0** : aucune racine réelle, pas de factorisation.",
      "**Discriminant réduit** (quand b = 2b’) : Δ’ = b’² − ac. Les racines sont @frac{−b’ ± @sqrt{Δ’}}{a}. Même signe que Δ.",
      "**Signe du trinôme** : du signe de a « à l’extérieur » des racines, du signe contraire de a « entre » les racines. Si Δ < 0 : toujours du signe de a.",
      "**Somme et produit des racines** : S = x_{1} + x_{2} = @frac{−b}{a} et P = x_{1} × x_{2} = @frac{c}{a}.",
      "**Signe des racines** : P < 0 → deux racines de signes contraires. P > 0 et S > 0 → deux racines positives. P > 0 et S < 0 → deux racines négatives (avec Δ > 0).",
      "**Inéquation** : on étudie le signe (tableau de signes), puis on lit les intervalles. Pour un quotient, la valeur interdite est exclue (crochet ouvert).",
      "**Équation irrationnelle** : @sqrt{A} = B ⇔ B ≥ 0 et A = B².",
      "**Inéquations irrationnelles** : @sqrt{A} ≤ B ⇔ A ≥ 0, B ≥ 0 et A ≤ B². @sqrt{A} ≥ B ⇔ (B < 0 et A ≥ 0) ou (B ≥ 0 et A ≥ B²).",
      "**Équation bicarrée** ax⁴ + bx² + c = 0 : on pose X = x² (avec X ≥ 0), on résout en X, puis on revient à x."
    ],
    cartes: [
      ["Discriminant de ax² + bx + c", "Δ = b² − 4ac."],
      ["Racines quand Δ > 0", "x_{1} = @frac{−b − @sqrt{Δ}}{2a} et x_{2} = @frac{−b + @sqrt{Δ}}{2a}."],
      ["Racine quand Δ = 0", "Une racine double : x_{0} = @frac{−b}{2a}."],
      ["Quand Δ < 0…", "Pas de racine réelle. Le trinôme garde le signe de a pour tout x."],
      ["Discriminant réduit Δ’", "Si b = 2b’ : Δ’ = b’² − ac, et les racines sont @frac{−b’ ± @sqrt{Δ’}}{a}."],
      ["Signe du trinôme quand Δ > 0", "Signe de a à l’extérieur des racines, signe contraire de a entre les racines."],
      ["Somme et produit des racines", "S = @frac{−b}{a} et P = @frac{c}{a}."],
      ["Deux racines de signes contraires", "Il suffit que P = @frac{c}{a} < 0 (alors Δ > 0 automatiquement)."],
      ["Deux racines strictement négatives", "Δ > 0, P > 0 et S < 0."],
      ["Deux racines strictement positives", "Δ > 0, P > 0 et S > 0."],
      ["@sqrt{A} = B équivaut à…", "B ≥ 0 et A = B²."],
      ["@sqrt{A} ≥ B équivaut à…", "(B < 0 et A ≥ 0) ou (B ≥ 0 et A ≥ B²)."],
      ["Équation bicarrée ax⁴ + bx² + c = 0", "On pose X = x² ≥ 0, on résout aX² + bX + c = 0, puis on garde les X positifs et x = ±@sqrt{X}."],
      ["Équation à paramètre : le premier réflexe", "Étudier à part la valeur de m qui annule le coefficient de x² : l’équation devient du 1er degré."]
    ],
    sujets: [] },
  { id: "ma-sys", mat: "maths", groupe: "SA2 · Organisation des données", devoir: true, court: "Systèmes linéaires",
    titre: "Systèmes d’équations linéaires : substitution, combinaison, déterminant, pivot de Gauss",
    fiche: [
      "**Système 2 × 2** : { ax + by = c ; a’x + b’y = c’ }. Méthodes : **substitution** (exprimer x ou y puis remplacer) ou **combinaison** (multiplier les lignes pour éliminer une inconnue).",
      "**Déterminant** : D = ab’ − a’b. Si D ≠ 0 : une seule solution, x = @frac{cb’ − c’b}{D} et y = @frac{ac’ − a’c}{D} (méthode de Cramer). Si D = 0 : aucune solution ou une infinité.",
      "**Système 3 × 3, méthode du pivot de Gauss** : on garde la ligne L1, on élimine x des lignes L2 et L3 (L2 ← L2 − kL1…), puis on élimine y de la nouvelle L3. Le système devient **triangulaire** : on trouve z, puis y, puis x en remontant.",
      "**Toujours vérifier** : remplace la solution dans les 3 équations de départ.",
      "**Mise en équation d’un problème** : 1) choisir les inconnues (avec leur unité) ; 2) traduire chaque phrase par une équation ; 3) résoudre ; 4) vérifier ; 5) répondre par une phrase.",
      "Exemple : 3 cahiers et 2 stylos coûtent 1 100 F, 1 cahier et 1 stylo coûtent 450 F → { 3c + 2s = 1 100 ; c + s = 450 } → c = 200 F, s = 250 F."
    ],
    cartes: [
      ["Déterminant du système { ax + by = c ; a’x + b’y = c’ }", "D = ab’ − a’b."],
      ["Si D ≠ 0…", "Le système a une seule solution : x = @frac{cb’ − c’b}{D}, y = @frac{ac’ − a’c}{D}."],
      ["Si D = 0…", "Le système n’a aucune solution, ou une infinité."],
      ["Méthode de substitution", "On exprime une inconnue en fonction de l’autre dans une équation, puis on remplace dans l’autre équation."],
      ["Méthode de combinaison", "On multiplie les équations par des nombres choisis puis on les additionne (ou soustrait) pour éliminer une inconnue."],
      ["Pivot de Gauss : le but", "Rendre le système triangulaire (z seul dans la dernière ligne), puis remonter."],
      ["Résoudre un problème avec un système : les 5 étapes", "Choisir les inconnues, traduire en équations, résoudre, vérifier, répondre par une phrase."],
      ["Après avoir résolu un système…", "On vérifie en remplaçant la solution dans toutes les équations de départ."]
    ],
    sujets: [] },
  { id: "ma-denomb", mat: "maths", groupe: "SA2 · Organisation des données", devoir: true, court: "Dénombrement",
    titre: "Dénombrement : principe multiplicatif, p-listes, arrangements, permutations, combinaisons",
    fiche: [
      "**Cardinal** : card(A ∪ B) = card(A) + card(B) − card(A ∩ B). Le complémentaire : card(Ā) = card(E) − card(A).",
      "**Principe multiplicatif** : si un choix se fait en plusieurs étapes indépendantes, on **multiplie** le nombre de possibilités de chaque étape (arbre de choix).",
      "**Les deux questions à se poser** : 1) L’ordre compte-t-il ? 2) Peut-on répéter (remise) ?",
      "**p-listes** (ordre compte, répétition possible : tirages successifs **avec remise**, codes) : n^{p}.",
      "**Arrangements** (ordre compte, sans répétition : tirages successifs **sans remise**, podium, bureau avec postes) : @A{n}{p} = n(n − 1)…(n − p + 1) = @frac{n!}{(n − p)!}.",
      "**Permutations** (ranger n objets) : n! = n × (n − 1) × … × 2 × 1. Par convention 0! = 1.",
      "**Combinaisons** (ordre ne compte pas, sans répétition : tirages **simultanés**, délégations, groupes) : @C{n}{p} = @frac{n!}{p!(n − p)!} = @frac{@A{n}{p}}{p!}.",
      "**Propriétés** : @C{n}{0} = @C{n}{n} = 1 ; @C{n}{1} = n ; @C{n}{p} = @C{n}{n − p} ; formule de Pascal : @C{n}{p} = @C{n − 1}{p − 1} + @C{n − 1}{p}.",
      "**« Au moins un »** : passe par le contraire. Nombre « avec au moins un » = total − nombre « avec aucun ».",
      "**Anagrammes avec lettres répétées** : n! divisé par le produit des factorielles des répétitions. BÉNIN : @frac{5!}{2!} = 60.",
      "Nombre de parties d’un ensemble à n éléments : 2^{n}."
    ],
    cartes: [
      ["Tirages successifs AVEC remise de p objets parmi n", "p-listes : n^{p} (l’ordre compte, répétitions possibles)."],
      ["Tirages successifs SANS remise de p objets parmi n", "Arrangements : @A{n}{p} = n(n − 1)…(n − p + 1)."],
      ["Tirage SIMULTANÉ de p objets parmi n", "Combinaisons : @C{n}{p} = @frac{n!}{p!(n − p)!}."],
      ["Formule de @A{n}{p}", "@A{n}{p} = @frac{n!}{(n − p)!} = n(n − 1)…(n − p + 1) (p facteurs)."],
      ["Formule de @C{n}{p}", "@C{n}{p} = @frac{n!}{p!(n − p)!} = @frac{@A{n}{p}}{p!}."],
      ["n! (factorielle n)", "n × (n − 1) × … × 2 × 1 : le nombre de façons de ranger n objets. 0! = 1."],
      ["Symétrie des combinaisons", "@C{n}{p} = @C{n}{n − p}. Exemple : @C{10}{8} = @C{10}{2} = 45."],
      ["Formule de Pascal", "@C{n}{p} = @C{n − 1}{p − 1} + @C{n − 1}{p}."],
      ["Principe multiplicatif", "Pour un choix en plusieurs étapes, on multiplie les nombres de possibilités de chaque étape."],
      ["« Au moins un » : la méthode", "Total − « aucun ». Exemple : au moins une fille = toutes les délégations − délégations sans fille."],
      ["card(A ∪ B)", "card(A) + card(B) − card(A ∩ B)."],
      ["Comment choisir le bon outil ?", "L’ordre compte et répétition : n^{p}. L’ordre compte sans répétition : @A{n}{p}. L’ordre ne compte pas : @C{n}{p}."]
    ],
    sujets: [] }
);

Object.assign(QUIZ, {
  "ma-ortho": [
    { t: "c", q: "Deux droites orthogonales de l’espace…", r: "ne se coupent pas forcément", p: ["se coupent toujours", "sont toujours parallèles", "sont forcément dans un même plan"], e: "Orthogonales = à angle droit, même sans se toucher. Si elles se coupent en plus, elles sont perpendiculaires." },
    { t: "c", q: "Pour prouver que (d) est orthogonale au plan (P), il suffit que (d) soit orthogonale à…", r: "deux droites sécantes de (P)", p: ["une droite de (P)", "deux droites parallèles de (P)", "trois points de (P)"], e: "Le théorème demande deux droites **sécantes**. Deux droites parallèles ne suffisent pas." },
    { t: "c", q: "Dans le cube ABCDEFGH, la droite (AE) est orthogonale au plan…", r: "(ABC)", p: ["(ABF)", "(ADH)", "(BCG)"], e: "(AE) ⊥ (AB) et (AE) ⊥ (AD). Piège : (ABF) et (ADH) contiennent (AE) ; (BCG) lui est parallèle." },
    { t: "c", q: "Dans le cube ABCDEFGH, les droites (AC) et (BD) sont…", r: "perpendiculaires", p: ["parallèles", "orthogonales mais pas sécantes", "non coplanaires"], e: "Ce sont les diagonales du carré ABCD : elles se coupent à angle droit au centre du carré." },
    { t: "c", q: "Dans le cube ABCDEFGH, les droites (BD) et (EG) sont…", r: "orthogonales, sans se couper", p: ["perpendiculaires", "parallèles", "sécantes mais pas orthogonales"], e: "(EG) ∥ (AC) et (AC) ⊥ (BD), donc (EG) ⊥ (BD). Elles ne se coupent pas : une est en bas, l’autre en haut." },
    { t: "c", q: "Deux plans sont perpendiculaires si…", r: "l’un contient une droite orthogonale à l’autre", p: ["ils ont une droite commune", "ils sont orthogonaux à une même droite", "chacun contient une droite parallèle à l’autre"], e: "Piège : deux plans orthogonaux à une même droite sont parallèles, pas perpendiculaires." },
    { t: "c", q: "Deux droites orthogonales à un même plan sont…", r: "parallèles", p: ["perpendiculaires", "orthogonales", "sécantes"], e: "Exemple dans le cube : (AE) et (BF) sont orthogonales au plan (ABC), et elles sont parallèles." },
    { t: "c", q: "Deux plans orthogonaux à une même droite sont…", r: "parallèles", p: ["perpendiculaires", "sécants", "confondus"], e: "Exemple : les plans (ABC) et (EFG) sont orthogonaux à (AE) : ce sont les faces du dessous et du dessus, parallèles." },
    { t: "c", q: "Si (d) est orthogonale au plan (P), alors (d) est orthogonale à…", r: "toutes les droites de (P)", p: ["deux droites de (P) seulement", "aucune droite de (P)", "seulement les droites de (P) qui la coupent"], e: "C’est la définition, et c’est l’outil pour montrer que deux droites sont orthogonales." },
    { t: "c", q: "(BC) est orthogonale au plan (ABF) car…", r: "(BC) ⊥ (AB) et (BC) ⊥ (BF), deux droites sécantes de (ABF)", p: ["(BC) ⊥ (AB) seulement", "(BC) ∥ (AD)", "(BC) ⊥ (AB) et (BC) ⊥ (EF), deux droites de (ABF)"], e: "Piège : (AB) et (EF) sont parallèles, pas sécantes. Il faut deux droites **sécantes**." },
    { t: "c", q: "Pour démontrer que les plans (P) et (Q) sont perpendiculaires, on cherche…", r: "une droite de (P) orthogonale à (Q)", p: ["une droite commune à (P) et (Q)", "deux droites parallèles de (P)", "un point commun à (P) et (Q)"], e: "Une droite de l’un orthogonale à l’autre plan, et c’est gagné." },
    { t: "c", q: "Dans la face carrée ADHE du cube, les droites (AH) et (DE) sont…", r: "perpendiculaires", p: ["parallèles", "confondues", "non coplanaires"], e: "Ce sont les deux diagonales du carré ADHE." }
  ],
  "ma-proj": [
    { t: "c", q: "Dans le cube ABCDEFGH, le projeté orthogonal de G sur le plan (ABC) est…", r: "C", p: ["A", "B", "D"], e: "(GC) est une arête verticale, orthogonale à la face du dessous." },
    { t: "c", q: "Dans le cube ABCDEFGH, le projeté orthogonal de E sur la droite (AB) est…", r: "A", p: ["B", "le milieu de [AB]", "F"], e: "(EA) ⊥ (AB), et A est sur (AB)." },
    { t: "c", q: "Dans un cube d’arête a, la distance du point E au plan (ABC) vaut…", r: "a", p: ["a@sqrt{2}", "a@sqrt{3}", "@frac{a}{2}"], e: "Le projeté de E sur (ABC) est A, et EA = a." },
    { t: "c", q: "Dans un cube d’arête a, la diagonale d’une face mesure…", r: "a@sqrt{2}", p: ["a@sqrt{3}", "2a", "a"], e: "Pythagore dans le carré : AC² = a² + a² = 2a²." },
    { t: "c", q: "Dans un cube d’arête a, la grande diagonale [AG] mesure…", r: "a@sqrt{3}", p: ["a@sqrt{2}", "3a", "2a"], e: "AG² = AC² + CG² = 2a² + a² = 3a²." },
    { t: "v", q: "Un cube a une arête de 4 cm. Combien vaut AG² (en cm²) ?", r: 48, p: [32, 16, 64], e: "AG² = 3a² = 3 × 16 = 48, donc AG = 4@sqrt{3} cm ≈ 6,9 cm." },
    { t: "c", q: "Le projeté orthogonal de M sur le plan (P) est le point H de (P) tel que…", r: "(MH) ⊥ (P)", p: ["(MH) ∥ (P)", "MH = 1", "(MH) coupe (P) en son centre"], e: "C’est la définition. Et MH est la distance de M au plan." },
    { t: "c", q: "Le projeté orthogonal de M sur une droite (D) est aussi…", r: "l’intersection de (D) avec le plan passant par M orthogonal à (D)", p: ["le milieu de M et de (D)", "le point de (D) le plus loin de M", "l’intersection de (D) avec un plan parallèle à (D)"], e: "Ce plan « coupe » (D) à angle droit exactement au projeté." }
  ],
  "ma-vect": [
    { t: "c", q: "@vec{AB} + @vec{BC} = ?", r: "@vec{AC}", p: ["@vec{CA}", "@vec{BA}", "@vec{0}"], e: "Relation de Chasles." },
    { t: "c", q: "Trois vecteurs @vec{u}, @vec{v}, @vec{w} sont coplanaires si…", r: "@vec{w} = a@vec{u} + b@vec{v} pour des réels a et b", p: ["ils sont tous non nuls", "ils sont deux à deux colinéaires", "@vec{u} + @vec{v} + @vec{w} = 3"], e: "(avec @vec{u} et @vec{v} non colinéaires)." },
    { t: "c", q: "Une base de l’espace est formée de…", r: "trois vecteurs non coplanaires", p: ["deux vecteurs non colinéaires", "trois vecteurs non nuls", "trois vecteurs colinéaires"], e: "Deux vecteurs non colinéaires forment une base du plan, pas de l’espace." },
    { t: "c", q: "A(1 ; 2 ; −1) et B(3 ; −1 ; 4). Les coordonnées de @vec{AB} sont…", r: "(2 ; −3 ; 5)", p: ["(4 ; 1 ; 3)", "(−2 ; 3 ; −5)", "(2 ; 3 ; 5)"], e: "Arrivée moins départ : 3 − 1 = 2 ; −1 − 2 = −3 ; 4 − (−1) = 5." },
    { t: "c", q: "A(1 ; 2 ; −1) et B(3 ; −1 ; 4). Le milieu de [AB] a pour coordonnées…", r: "(2 ; @frac{1}{2} ; @frac{3}{2})", p: ["(4 ; 1 ; 3)", "(1 ; −@frac{3}{2} ; @frac{5}{2})", "(2 ; 1 ; 3)"], e: "Moyennes : (1 + 3)/2 = 2 ; (2 − 1)/2 = 1/2 ; (−1 + 4)/2 = 3/2." },
    { t: "c", q: "@vec{u}(2 ; −4 ; 6) et @vec{v}(−1 ; 2 ; −3) sont…", r: "colinéaires", p: ["orthogonaux", "non colinéaires", "égaux"], e: "@vec{u} = −2@vec{v} : les coordonnées sont proportionnelles." },
    { t: "v", q: "@vec{u}(1 ; 2 ; 3) et @vec{v}(2 ; k ; 6) sont colinéaires pour k = ?", r: 4, p: [2, 3, 6], e: "@vec{v} = 2@vec{u} : la 2e coordonnée vaut 2 × 2 = 4." },
    { t: "c", q: "Dans le repère (A ; @vec{AB}, @vec{AD}, @vec{AE}) du cube, les coordonnées de G sont…", r: "(1 ; 1 ; 1)", p: ["(1 ; 0 ; 1)", "(0 ; 1 ; 1)", "(1 ; 1 ; 0)"], e: "@vec{AG} = @vec{AB} + @vec{AD} + @vec{AE}. (1 ; 1 ; 0) est C, (1 ; 0 ; 1) est F." },
    { t: "c", q: "Dans le repère (A ; @vec{AB}, @vec{AD}, @vec{AE}) du cube, les coordonnées de F sont…", r: "(1 ; 0 ; 1)", p: ["(0 ; 1 ; 1)", "(1 ; 1 ; 0)", "(0 ; 0 ; 1)"], e: "F est au-dessus de B : @vec{AF} = @vec{AB} + @vec{AE}." },
    { t: "c", q: "Quatre points A, B, C, D sont coplanaires si et seulement si…", r: "@vec{AB}, @vec{AC}, @vec{AD} sont coplanaires", p: ["@vec{AB} et @vec{CD} sont colinéaires", "AB = CD", "ABCD est un carré"], e: "On ramène la question des points à celle des vecteurs." },
    { t: "c", q: "Si @vec{w} = 2@vec{u} − 3@vec{v}, alors @vec{u}, @vec{v}, @vec{w} sont…", r: "coplanaires", p: ["une base de l’espace", "colinéaires", "orthogonaux"], e: "@vec{w} s’écrit avec @vec{u} et @vec{v}." },
    { t: "c", q: "@vec{AB} = @vec{DC} signifie que…", r: "ABCD est un parallélogramme", p: ["ABDC est un parallélogramme", "A, B, C, D sont alignés", "AB = DC seulement"], e: "Attention à l’ordre des lettres : @vec{AB} = @vec{DC} pour ABCD." }
  ],
  "ma-eq": [
    { t: "v", q: "Le discriminant de 2x² − 3x − 5 vaut…", r: 49, p: [-31, 31, 1], e: "Δ = (−3)² − 4 × 2 × (−5) = 9 + 40 = 49." },
    { t: "c", q: "Les solutions de x² − 5x + 6 = 0 sont…", r: "2 et 3", p: ["−2 et −3", "1 et 6", "−1 et 6"], e: "Δ = 25 − 24 = 1, x = (5 ± 1)/2. Vérifie : 2 + 3 = 5 = S et 2 × 3 = 6 = P." },
    { t: "c", q: "Si Δ < 0, le trinôme ax² + bx + c…", r: "est toujours du signe de a", p: ["est toujours positif", "change de signe une fois", "s’annule une fois"], e: "Pas de racine : pas de changement de signe." },
    { t: "c", q: "L’équation x² − 4x + 4 = 0 a…", r: "une racine double : 2", p: ["deux racines : 2 et −2", "aucune racine", "une racine double : −2"], e: "Δ = 16 − 16 = 0, x₀ = 4/2 = 2. En effet x² − 4x + 4 = (x − 2)²." },
    { t: "v", q: "Le produit des racines de 3x² + 7x − 6 = 0 vaut…", r: -2, p: [2, -6, 6], e: "P = c/a = −6/3 = −2. (Les racines sont −3 et 2/3.)" },
    { t: "c", q: "La somme des racines de 3x² + 7x − 6 = 0 vaut…", r: "−@frac{7}{3}", p: ["@frac{7}{3}", "−2", "−7"], e: "S = −b/a = −7/3. Vérifie : −3 + 2/3 = −7/3." },
    { t: "c", q: "Si le produit P des racines est strictement négatif…", r: "les racines sont de signes contraires", p: ["les racines sont négatives", "il n’y a pas de racine", "les racines sont positives"], e: "Et dans ce cas, Δ est forcément positif." },
    { t: "v", q: "Pour que −1 soit solution de (m − 3)x² − 2(m + 2)x + m − 5 = 0, il faut m = ?", r: 1, p: [-1, 3, 5], e: "On remplace x par −1 : (m − 3) + 2(m + 2) + m − 5 = 4m − 4 = 0, donc m = 1." },
    { t: "v", q: "L’équation (m − 3)x² − 2(m + 2)x + m − 5 = 0 est du premier degré pour m = ?", r: 3, p: [5, -2, 0], e: "Le coefficient de x² s’annule pour m = 3 : il faut traiter ce cas à part." },
    { t: "c", q: "@sqrt{x + 3} = x + 1 équivaut à…", r: "x + 1 ≥ 0 et x + 3 = (x + 1)²", p: ["x + 3 = (x + 1)²", "x + 3 ≥ 0 et x + 3 = x + 1", "x ≥ 0 et x + 3 = (x + 1)²"], e: "Le membre de droite doit être positif, puisqu’une racine carrée est positive." },
    { t: "c", q: "Les solutions de @sqrt{x + 3} = x + 1 sont…", r: "x = 1 seulement", p: ["x = 1 ou x = −2", "x = −2 seulement", "aucune solution"], e: "x + 3 = x² + 2x + 1 donne x = 1 ou x = −2, mais −2 + 1 < 0 : on rejette −2." },
    { t: "c", q: "Le signe de −x² + x + 6 entre ses racines −2 et 3 est…", r: "positif", p: ["négatif", "nul", "celui de a"], e: "Entre les racines : signe contraire de a = −1, donc positif." },
    { t: "c", q: "L’ensemble des solutions de x² − x − 6 ≤ 0 est…", r: "[−2 ; 3]", p: ["]−∞ ; −2] ∪ [3 ; +∞[", "]−2 ; 3[", "[−3 ; 2]"], e: "Racines −2 et 3, a > 0 : négatif entre les racines, bornes comprises (≤)." },
    { t: "c", q: "Pour résoudre x⁴ − 5x² + 4 = 0, on pose…", r: "X = x²", p: ["X = x⁴", "X = 2x", "X = @sqrt{x}"], e: "X² − 5X + 4 = 0 donne X = 1 ou X = 4, donc x ∈ {−2 ; −1 ; 1 ; 2}." },
    { t: "v", q: "Le discriminant réduit Δ’ de x² − 6x + 5 vaut…", r: 4, p: [16, 36, -4], e: "b’ = −3, Δ’ = b’² − ac = 9 − 5 = 4. Racines : 3 ± 2, soit 1 et 5." },
    { t: "c", q: "Une équation du second degré a deux racines distinctes si…", r: "Δ > 0", p: ["Δ = 0", "Δ < 0", "a > 0"], e: "Δ = 0 : une racine double. Δ < 0 : aucune." }
  ],
  "ma-sys": [
    { t: "v", q: "Le déterminant du système { 2x + 3y = 7 ; x − y = 1 } vaut…", r: -5, p: [5, 1, -1], e: "D = ab’ − a’b = 2 × (−1) − 1 × 3 = −5." },
    { t: "c", q: "La solution du système { 2x + 3y = 7 ; x − y = 1 } est…", r: "x = 2 et y = 1", p: ["x = 1 et y = 2", "x = 3 et y = 2", "x = 2 et y = −1"], e: "x = 1 + y, puis 2(1 + y) + 3y = 7, donc y = 1 et x = 2. Vérifie dans les deux équations." },
    { t: "c", q: "Si le déterminant d’un système 2 × 2 est nul, le système…", r: "n’a aucune solution, ou en a une infinité", p: ["a une seule solution", "a toujours une infinité de solutions", "n’a jamais de solution"], e: "Exemples : { x + y = 3 ; 2x + 2y = 6 } (infinité) et { x + y = 3 ; x + y = 5 } (aucune)." },
    { t: "c", q: "Avec la méthode du pivot de Gauss, on cherche à obtenir…", r: "un système triangulaire", p: ["un système carré", "des équations sans x", "un déterminant nul"], e: "Puis on remonte : z, puis y, puis x." },
    { t: "c", q: "La solution de { x + y + z = 6 ; y + z = 5 ; z = 3 } est…", r: "(1 ; 2 ; 3)", p: ["(3 ; 2 ; 1)", "(1 ; 3 ; 2)", "(2 ; 2 ; 2)"], e: "z = 3, puis y = 5 − 3 = 2, puis x = 6 − 2 − 3 = 1." },
    { t: "c", q: "{ x + y = 3 ; 2x + 2y = 6 } a…", r: "une infinité de solutions", p: ["une seule solution", "aucune solution", "deux solutions"], e: "La 2e équation est la 1re multipliée par 2 : c’est la même droite." },
    { t: "c", q: "{ x + y = 3 ; x + y = 5 } a…", r: "aucune solution", p: ["une infinité de solutions", "une seule solution", "deux solutions"], e: "x + y ne peut pas valoir 3 et 5 à la fois." },
    { t: "v", q: "3 cahiers et 2 stylos coûtent 1 100 F ; 1 cahier et 1 stylo coûtent 450 F. Prix d’un cahier, en francs ?", r: 200, p: [250, 150, 300], u: "F", e: "{ 3c + 2s = 1 100 ; c + s = 450 } : s = 450 − c, puis 3c + 900 − 2c = 1 100, donc c = 200 F (et s = 250 F)." },
    { t: "c", q: "L’opération L2 ← L2 − 2L1 sert à…", r: "éliminer une inconnue de la ligne 2", p: ["multiplier la solution par 2", "changer l’ordre des lignes", "vérifier la solution"], e: "On choisit le coefficient pour faire disparaître x (ou une autre inconnue)." }
  ],
  "ma-denomb": [
    { t: "v", q: "Combien de codes de 4 chiffres (de 0 à 9) peut-on former ?", r: 10000, p: [5040, 210, 40], e: "4 chiffres avec répétition possible et ordre important : 10⁴ = 10 000." },
    { t: "v", q: "Combien de podiums (or, argent, bronze) possibles pour 8 coureurs ?", r: 336, p: [56, 512, 24], e: "L’ordre compte, sans répétition : @A{8}{3} = 8 × 7 × 6 = 336." },
    { t: "v", q: "Combien de délégations de 3 élèves peut-on former parmi 8 ?", r: 56, p: [336, 24, 512], e: "L’ordre ne compte pas : @C{8}{3} = @frac{8 × 7 × 6}{3 × 2 × 1} = 56." },
    { t: "v", q: "5! = ?", r: 120, p: [25, 60, 720], e: "5 × 4 × 3 × 2 × 1 = 120." },
    { t: "v", q: "@C{10}{2} = ?", r: 45, p: [90, 20, 100], e: "@frac{10 × 9}{2} = 45." },
    { t: "v", q: "@A{5}{2} = ?", r: 20, p: [10, 25, 60], e: "5 × 4 = 20." },
    { t: "c", q: "On tire successivement et sans remise 2 boules parmi 10. Le bon outil est…", r: "l’arrangement @A{10}{2}", p: ["la combinaison @C{10}{2}", "la p-liste 10²", "la factorielle 10!"], e: "Successif = l’ordre compte ; sans remise = pas de répétition." },
    { t: "c", q: "On tire simultanément 3 boules d’une urne. Le bon outil est…", r: "la combinaison", p: ["l’arrangement", "la p-liste", "la permutation"], e: "Simultané : l’ordre ne compte pas." },
    { t: "c", q: "On tire successivement avec remise 3 boules. Le bon outil est…", r: "la p-liste", p: ["la combinaison", "l’arrangement", "la permutation"], e: "Avec remise : on peut retomber sur la même boule, et l’ordre compte." },
    { t: "v", q: "Combien d’anagrammes (avec ou sans sens) du mot BÉNIN ?", r: 60, p: [120, 24, 30], e: "5 lettres dont 2 N : @frac{5!}{2!} = 60." },
    { t: "v", q: "Combien de parties a un ensemble de 4 éléments ?", r: 16, p: [8, 4, 24], e: "2⁴ = 16 (en comptant l’ensemble vide et l’ensemble entier)." },
    { t: "c", q: "@C{n}{p} est égal à…", r: "@C{n}{n − p}", p: ["@C{p}{n}", "@A{n}{p}", "@C{n − 1}{p}"], e: "Choisir les p qu’on prend revient à choisir les n − p qu’on laisse." },
    { t: "v", q: "Dans une classe de 30 élèves, 18 font du football, 12 du handball et 5 les deux. Combien ne font aucun des deux ?", r: 5, p: [0, 10, 25], e: "card(F ∪ H) = 18 + 12 − 5 = 25, donc 30 − 25 = 5." },
    { t: "v", q: "Une plaque est formée de 2 lettres (26 possibles) puis 3 chiffres. Combien de plaques ?", r: 676000, p: [26000, 650000, 1757600], e: "26 × 26 × 10 × 10 × 10 = 676 000 (principe multiplicatif)." },
    { t: "v", q: "Une urne contient 5 boules rouges et 3 noires. On tire simultanément 2 boules. Combien de tirages donnent 2 rouges ?", r: 10, p: [20, 15, 28], e: "@C{5}{2} = 10." },
    { t: "v", q: "Même urne (5 rouges, 3 noires), tirage simultané de 2 boules : combien de tirages avec au moins une noire ?", r: 18, p: [3, 15, 28], e: "Total − aucune noire : @C{8}{2} − @C{5}{2} = 28 − 10 = 18." }
  ]
});

Object.assign(EXOS, {
  "ma-ortho": [
    { id: "ma-o1", titre: "Les cages de l’atelier de Jacob", niveau: 2, duree: 25,
      contexte: "Jacob, soudeur à Cotonou, fabrique des cages en forme de cube ABCDEFGH pour des pigeons. Son fils veut comprendre les propriétés de ces cages.\nABCD est la face du dessous, EFGH celle du dessus (E au-dessus de A, F de B, G de C, H de D). On note O le centre du carré ABCD.\n@fig{cube}",
      questions: [
        { q: "1. Démontre que les droites (BD) et (EG) sont orthogonales.", indice: "Montre d’abord que (EG) est parallèle à (AC).",
          corrige: "Les arêtes [AE] et [CG] sont parallèles et de même longueur, donc AEGC est un parallélogramme : (EG) ∥ (AC).\nOr (AC) ⊥ (BD), car ce sont les diagonales du carré ABCD.\nUne droite orthogonale à l’une de deux parallèles est orthogonale à l’autre : donc **(EG) ⊥ (BD)**.",
          retenir: "Pour deux droites qui ne se coupent pas, on passe par une parallèle." },
        { q: "2. Démontre que la droite (BD) est orthogonale au plan (ACG).", indice: "Il faut deux droites sécantes du plan (ACG) orthogonales à (BD). Pense à (AC) et à (CG).",
          corrige: "• (BD) ⊥ (AC) : diagonales du carré ABCD.\n• (CG) ⊥ (ABC) car (CG) ⊥ (CB) et (CG) ⊥ (CD) (faces carrées), deux droites sécantes du plan (ABC). Donc (CG) est orthogonale à toute droite de (ABC), en particulier (CG) ⊥ (BD).\n(AC) et (CG) sont deux droites sécantes (en C) du plan (ACG).\nDonc **(BD) ⊥ (ACG)**.",
          retenir: "Droite ⊥ plan : deux droites SÉCANTES du plan, chacune justifiée." },
        { q: "3. Déduis-en que (BD) ⊥ (AG).", indice: "(AG) est-elle dans le plan (ACG) ?",
          corrige: "La droite (AG) est contenue dans le plan (ACG) (A et G sont des points de ce plan).\nOr (BD) ⊥ (ACG), donc (BD) est orthogonale à toute droite de ce plan : **(BD) ⊥ (AG)**.",
          retenir: "« En déduire » : on réutilise la question précédente." },
        { q: "4. Démontre que les plans (BDF) et (ACG) sont perpendiculaires.", indice: "Trouve dans le plan (BDF) une droite orthogonale au plan (ACG).",
          corrige: "La droite (BD) est contenue dans le plan (BDF), et (BD) ⊥ (ACG) d’après la question 2.\nUn plan qui contient une droite orthogonale à un autre plan lui est perpendiculaire : **(BDF) ⊥ (ACG)**.",
          retenir: "Plans perpendiculaires : une droite de l’un orthogonale à l’autre." },
        { q: "5. Détermine le projeté orthogonal du point A sur le plan (BDF).", indice: "Montre que (AC) ⊥ (BDF), puis regarde où (AC) coupe ce plan.",
          corrige: "(AC) ⊥ (BD) (diagonales du carré) et (AC) ⊥ (BF) car (BF) ⊥ (ABC) (arête verticale) et (AC) est dans (ABC). Or (BD) et (BF) sont sécantes en B dans le plan (BDF) : donc (AC) ⊥ (BDF).\nLa droite (AC) passe par A et coupe le plan (BDF) en O (O est sur (BD)).\nDonc **le projeté orthogonal de A sur (BDF) est O**, le centre du carré ABCD.",
          retenir: "Projeté de M sur un plan : une droite passant par M orthogonale au plan, puis son intersection avec le plan." }
      ] },
    { id: "ma-o2", titre: "Le tétraèdre SABC", niveau: 2, duree: 25,
      contexte: "SABC est un tétraèdre tel que la droite (SA) est orthogonale au plan (ABC) et le triangle ABC est rectangle en B. On note H le projeté orthogonal de A sur la droite (SB).\n@fig{tetra}",
      questions: [
        { q: "1. Démontre que (BC) est orthogonale au plan (SAB).", indice: "(BC) est orthogonale à (AB) (pourquoi ?) et à (SA) (pourquoi ?).",
          corrige: "• (BC) ⊥ (AB), car ABC est rectangle en B.\n• (SA) ⊥ (ABC) et (BC) est dans le plan (ABC), donc (SA) ⊥ (BC).\n(AB) et (SA) sont deux droites sécantes (en A) du plan (SAB).\nDonc **(BC) ⊥ (SAB)**.",
          retenir: "Le théorème des deux droites sécantes." },
        { q: "2. Déduis-en que le triangle SBC est rectangle en B.", indice: "(SB) est une droite du plan (SAB).",
          corrige: "(BC) ⊥ (SAB) et la droite (SB) est contenue dans (SAB), donc (BC) ⊥ (SB).\nLes droites (BC) et (SB) se coupent en B : **le triangle SBC est rectangle en B**." },
        { q: "3. Démontre que les plans (SBC) et (SAB) sont perpendiculaires.",
          corrige: "La droite (BC) est contenue dans le plan (SBC) et (BC) ⊥ (SAB) (question 1).\nDonc **(SBC) ⊥ (SAB)**." },
        { q: "4. Démontre que (AH) est orthogonale au plan (SBC).", indice: "(AH) ⊥ (SB) par définition de H. Il manque une deuxième droite de (SBC) orthogonale à (AH).",
          corrige: "• (AH) ⊥ (SB), car H est le projeté orthogonal de A sur (SB).\n• (AH) est contenue dans le plan (SAB) (A et H sont dans ce plan) et (BC) ⊥ (SAB), donc (BC) ⊥ (AH).\n(SB) et (BC) sont sécantes en B dans le plan (SBC).\nDonc **(AH) ⊥ (SBC)**." },
        { q: "5. Quel est le projeté orthogonal du point A sur le plan (SBC) ?",
          corrige: "H est sur (SB), donc dans le plan (SBC), et (AH) ⊥ (SBC).\nDonc **le projeté orthogonal de A sur (SBC) est H**, et la distance de A au plan (SBC) est AH.",
          retenir: "Ce schéma (SA ⊥ base, triangle rectangle) tombe très souvent au devoir." }
      ] }
  ],
  "ma-vect": [
    { id: "ma-v1", titre: "Repérer les pigeons dans la cage", niveau: 2, duree: 30,
      contexte: "On reprend le cube ABCDEFGH (ABCD en bas, EFGH en haut). On travaille dans le repère (A ; @vec{AB}, @vec{AD}, @vec{AE}). I est le centre de la face ABCD et K le milieu de [FG].",
      questions: [
        { q: "1. Justifie que (@vec{AB}, @vec{AD}, @vec{AE}) est une base de l’espace.", indice: "Une base = trois vecteurs non coplanaires.",
          corrige: "@vec{AB} et @vec{AD} engendrent le plan (ABD), c’est-à-dire la face du dessous. Le point E n’est pas dans ce plan, donc @vec{AE} ne s’écrit pas a@vec{AB} + b@vec{AD}.\nLes trois vecteurs ne sont pas coplanaires : **c’est une base**." },
        { q: "2. Donne les coordonnées des 8 sommets du cube.",
          corrige: "A(0 ; 0 ; 0), B(1 ; 0 ; 0), C(1 ; 1 ; 0), D(0 ; 1 ; 0),\nE(0 ; 0 ; 1), F(1 ; 0 ; 1), G(1 ; 1 ; 1), H(0 ; 1 ; 1).",
          retenir: "Le point du dessus a la même position que celui du dessous, avec z = 1." },
        { q: "3. Calcule les coordonnées de I et de K.", indice: "Ce sont des milieux : I milieu de [AC], K milieu de [FG].",
          corrige: "I est le milieu de [AC] : I(@frac{0 + 1}{2} ; @frac{0 + 1}{2} ; 0) = **(@frac{1}{2} ; @frac{1}{2} ; 0)**.\nK est le milieu de [FG] : K(@frac{1 + 1}{2} ; @frac{0 + 1}{2} ; @frac{1 + 1}{2}) = **(1 ; @frac{1}{2} ; 1)**." },
        { q: "4. Montre que les vecteurs @vec{EG}, @vec{AB} et @vec{AD} sont coplanaires.",
          corrige: "@vec{EG} a pour coordonnées (1 − 0 ; 1 − 0 ; 1 − 1) = (1 ; 1 ; 0).\nOr @vec{AB}(1 ; 0 ; 0) et @vec{AD}(0 ; 1 ; 0), donc @vec{EG} = @vec{AB} + @vec{AD}.\n@vec{EG} s’écrit avec @vec{AB} et @vec{AD} : **les trois vecteurs sont coplanaires**." },
        { q: "5. Montre que les points A, I, G et E sont coplanaires.", indice: "Calcule @vec{AI}, @vec{AE}, @vec{AG} et cherche a et b tels que @vec{AG} = a@vec{AI} + b@vec{AE}.",
          corrige: "@vec{AI}(@frac{1}{2} ; @frac{1}{2} ; 0), @vec{AE}(0 ; 0 ; 1), @vec{AG}(1 ; 1 ; 1).\nOn cherche a et b : a × @frac{1}{2} = 1, a × @frac{1}{2} = 1 et b = 1. Donc a = 2 et b = 1.\n@vec{AG} = 2@vec{AI} + @vec{AE} : les vecteurs sont coplanaires, donc **A, I, G, E sont coplanaires** (ils sont dans le plan (ACGE))." },
        { q: "6. Les points M(0 ; 1 ; 0), N(−1 ; 0 ; −1), O(1 ; 4 ; 0) et P(−3 ; 2 ; −5) sont-ils coplanaires ?", indice: "Calcule @vec{MN}, @vec{MO}, @vec{MP}, puis cherche a et b tels que @vec{MP} = a@vec{MN} + b@vec{MO}. Trouve a et b avec deux équations, vérifie la troisième.",
          corrige: "@vec{MN}(−1 ; −1 ; −1), @vec{MO}(1 ; 3 ; 0), @vec{MP}(−3 ; 1 ; −5).\n@vec{MP} = a@vec{MN} + b@vec{MO} donne le système :\n−a + b = −3 ; −a + 3b = 1 ; −a = −5.\nLa 3e équation donne a = 5, puis la 1re : b = −3 + 5 = 2.\nVérification dans la 2e : −5 + 3 × 2 = 1. ✔\nDonc @vec{MP} = 5@vec{MN} + 2@vec{MO} : **M, N, O, P sont coplanaires**.",
          retenir: "Toujours vérifier la 3e équation : c’est elle qui décide.", type: "calcul" }
      ] },
    { id: "ma-v2", titre: "Coplanaires ou pas ?", niveau: 1, duree: 15,
      contexte: "Dans un repère de l’espace, on donne A(1 ; 0 ; 2), B(2 ; 1 ; 0), C(0 ; 2 ; 1) et, pour un réel m, le point D(3 ; 3 ; m).",
      questions: [
        { q: "1. Calcule les coordonnées de @vec{AB} et @vec{AC}. Sont-ils colinéaires ?",
          corrige: "@vec{AB}(1 ; 1 ; −2) et @vec{AC}(−1 ; 2 ; −1).\nSi @vec{AC} = k@vec{AB}, la 1re coordonnée donne k = −1, mais la 2e donnerait k = 2 : impossible.\n**Ils ne sont pas colinéaires** : A, B, C définissent un plan." },
        { q: "2. Pour m = −1, les points A, B, C, D sont-ils coplanaires ?", indice: "Cherche a et b tels que @vec{AD} = a@vec{AB} + b@vec{AC}.",
          corrige: "Pour m = −1 : @vec{AD}(2 ; 3 ; −3).\na − b = 2 et a + 2b = 3 donnent 3b = 1, b = @frac{1}{3}, a = @frac{7}{3}.\n3e coordonnée : −2a − b = −@frac{14}{3} − @frac{1}{3} = −5 ≠ −3.\nLa 3e équation est fausse : **A, B, C, D ne sont pas coplanaires**.", type: "calcul" },
        { q: "3. Pour quelle valeur de m les points A, B, C, D sont-ils coplanaires ?", indice: "Avec a = 7/3 et b = 1/3 trouvés à la question 2, la 3e coordonnée de @vec{AD} doit valoir −5.",
          corrige: "@vec{AD}(2 ; 3 ; m − 2). Les deux premières coordonnées donnent toujours a = @frac{7}{3} et b = @frac{1}{3}.\nIl faut alors m − 2 = −2a − b = −5, donc **m = −3**.\nPour m = −3, D(3 ; 3 ; −3) est dans le plan (ABC)." }
      ] }
  ],
  "ma-eq": [
    { id: "ma-e1", titre: "Les bases : résoudre, factoriser, signe", niveau: 1, duree: 20,
      contexte: "On considère le trinôme f(x) = 2x² − 3x − 5.",
      questions: [
        { q: "1. Résous dans ℝ l’équation f(x) = 0.",
          corrige: "a = 2, b = −3, c = −5. Δ = (−3)² − 4 × 2 × (−5) = 9 + 40 = 49 > 0.\n@sqrt{49} = 7. x_{1} = @frac{3 − 7}{4} = −1 et x_{2} = @frac{3 + 7}{4} = @frac{5}{2}.\n**S = {−1 ; @frac{5}{2}}**." },
        { q: "2. Factorise f(x).",
          corrige: "f(x) = a(x − x_{1})(x − x_{2}) = 2(x + 1)(x − @frac{5}{2}) = **(x + 1)(2x − 5)**.\nVérification : (x + 1)(2x − 5) = 2x² − 5x + 2x − 5 = 2x² − 3x − 5. ✔" },
        { q: "3. Résous l’inéquation f(x) > 0.",
          corrige: "a = 2 > 0 : f est positif à l’extérieur des racines.\n**S = ]−∞ ; −1[ ∪ ]@frac{5}{2} ; +∞[** (crochets ouverts car l’inégalité est stricte)." },
        { q: "4. Résous l’inéquation @frac{2x² − 3x − 5}{x − 1} ≤ 0.", indice: "Tableau de signes avec trois lignes : (x + 1)(2x − 5), puis x − 1, puis le quotient. Valeur interdite : 1.",
          corrige: "Valeurs importantes : −1, 1 (interdite) et @frac{5}{2}.\n• Numérateur : + avant −1, − entre −1 et @frac{5}{2}, + après.\n• Dénominateur x − 1 : − avant 1, + après.\n• Quotient : − sur ]−∞ ; −1[, + sur ]−1 ; 1[, − sur ]1 ; @frac{5}{2}[, + après @frac{5}{2}.\nIl est nul en −1 et en @frac{5}{2}, interdit en 1.\n**S = ]−∞ ; −1] ∪ ]1 ; @frac{5}{2}]**.",
          retenir: "Valeur interdite : toujours un crochet ouvert.", type: "calcul" },
        { q: "5. Résous dans ℝ l’équation x⁴ − 5x² + 4 = 0.", indice: "Pose X = x².",
          corrige: "On pose X = x² (X ≥ 0) : X² − 5X + 4 = 0. Δ = 25 − 16 = 9, X = @frac{5 ± 3}{2}, soit X = 1 ou X = 4 (tous deux positifs).\nx² = 1 donne x = ±1 ; x² = 4 donne x = ±2.\n**S = {−2 ; −1 ; 1 ; 2}**." }
      ] },
    { id: "ma-e2", titre: "Le champ de Koffi", niveau: 1, duree: 15,
      contexte: "Koffi veut clôturer un champ rectangulaire. Le périmètre doit faire 34 m et l’aire 60 m². On note x et y les dimensions du champ, en mètres.",
      questions: [
        { q: "1. Écris deux relations entre x et y.",
          corrige: "Périmètre : 2(x + y) = 34, donc **x + y = 17**.\nAire : **xy = 60**." },
        { q: "2. Déduis-en que x et y sont les solutions d’une équation du second degré, puis trouve les dimensions.", indice: "Deux nombres de somme S et de produit P sont les racines de X² − SX + P = 0.",
          corrige: "x et y ont pour somme 17 et pour produit 60 : ce sont les racines de X² − 17X + 60 = 0.\nΔ = 289 − 240 = 49, X = @frac{17 ± 7}{2}, soit 12 et 5.\n**Le champ mesure 12 m sur 5 m**.\nVérification : 2(12 + 5) = 34 et 12 × 5 = 60. ✔",
          retenir: "Somme S et produit P connus → équation X² − SX + P = 0." },
        { q: "3. Koffi veut tendre un fil le long de la diagonale. Quelle est sa longueur ?",
          corrige: "Pythagore : d² = 12² + 5² = 144 + 25 = 169, donc **d = 13 m**." }
      ] },
    { id: "ma-e3", titre: "L’équation à paramètre du devoir", niveau: 3, duree: 40,
      contexte: "Pour un réel m, on considère l’équation (E) : (m − 3)x² − 2(m + 2)x + m − 5 = 0.",
      questions: [
        { q: "1. Détermine m pour que −1 soit solution de (E). Donne alors l’autre solution.", indice: "Remplace x par −1. Pour l’autre solution, utilise le produit des racines P = c/a.",
          corrige: "x = −1 : (m − 3) × 1 − 2(m + 2) × (−1) + m − 5 = m − 3 + 2m + 4 + m − 5 = 4m − 4.\n4m − 4 = 0 donne **m = 1**.\nPour m = 1 : (E) s’écrit −2x² − 6x − 4 = 0. P = @frac{c}{a} = @frac{−4}{−2} = 2, donc l’autre solution vaut @frac{2}{−1} = **−2**.\nVérification : −2 × 4 + 12 − 4 = 0. ✔" },
        { q: "2. Résous (E) dans le cas m = 3.",
          corrige: "Pour m = 3, le coefficient de x² est nul : (E) devient −10x − 2 = 0, donc **x = −@frac{1}{5}**.",
          retenir: "Le cas « a = 0 » se traite toujours à part." },
        { q: "3. Pour m ≠ 3, calcule le discriminant réduit Δ’ en fonction de m.", indice: "b = −2(m + 2), donc b’ = −(m + 2). Δ’ = b’² − ac.",
          corrige: "b’ = −(m + 2). Δ’ = (m + 2)² − (m − 3)(m − 5)\n= m² + 4m + 4 − (m² − 8m + 15)\n= **12m − 11**.", type: "calcul" },
        { q: "4. Discute, selon les valeurs de m, le nombre de solutions de (E).",
          corrige: "• m < @frac{11}{12} : Δ’ < 0, **aucune solution**.\n• m = @frac{11}{12} : Δ’ = 0, **une racine double** x_{0} = @frac{−b’}{a} = @frac{m + 2}{m − 3} = −@frac{7}{5}.\n• m > @frac{11}{12} et m ≠ 3 : Δ’ > 0, **deux solutions** x = @frac{(m + 2) ± @sqrt{12m − 11}}{m − 3}.\n• m = 3 : une seule solution, x = −@frac{1}{5}." },
        { q: "5. Pour quelles valeurs de m (E) a-t-elle deux racines de signes contraires ?",
          corrige: "Il faut P = @frac{c}{a} = @frac{m − 5}{m − 3} < 0.\nTableau de signes : le quotient est négatif entre 3 et 5.\n**m ∈ ]3 ; 5[** (et alors Δ’ > 0 automatiquement)." },
        { q: "6. Pour quelles valeurs de m (E) a-t-elle deux racines distinctes strictement négatives ? strictement positives ?", indice: "Trois conditions : Δ’ > 0, P > 0, et S = −b/a = 2(m + 2)/(m − 3) de signe voulu.",
          corrige: "Δ’ > 0 : m > @frac{11}{12} (et m ≠ 3).\nP > 0 : m < 3 ou m > 5.\nS = @frac{2(m + 2)}{m − 3} : S < 0 pour −2 < m < 3, S > 0 pour m < −2 ou m > 3.\n• Deux racines strictement négatives : Δ’ > 0, P > 0, S < 0, soit **m ∈ ]@frac{11}{12} ; 3[**.\n• Deux racines strictement positives : Δ’ > 0, P > 0, S > 0, soit **m ∈ ]5 ; +∞[**.",
          retenir: "Mets Δ’, P et S dans un même tableau de signes : l’intersection se lit directement." }
      ] },
    { id: "ma-e4", titre: "Inéquation avec une racine carrée", niveau: 3, duree: 25,
      contexte: "On veut résoudre dans ℝ l’inéquation (I) : @sqrt{x² + 6x + 6} ≥ 2x + 1.",
      questions: [
        { q: "1. Détermine l’ensemble des réels x pour lesquels x² + 6x + 6 ≥ 0.",
          corrige: "Δ = 36 − 24 = 12, @sqrt{12} = 2@sqrt{3}. Racines : x = @frac{−6 ± 2@sqrt{3}}{2} = −3 ± @sqrt{3}.\na = 1 > 0 : positif à l’extérieur des racines.\n**D = ]−∞ ; −3 − @sqrt{3}] ∪ [−3 + @sqrt{3} ; +∞[** (−3 − @sqrt{3} ≈ −4,73 et −3 + @sqrt{3} ≈ −1,27)." },
        { q: "2. Premier cas : 2x + 1 < 0. Que vaut l’inéquation ? Donne les solutions de ce cas.", indice: "Une racine carrée est toujours ≥ 0 : elle est donc plus grande qu’un nombre négatif.",
          corrige: "Si 2x + 1 < 0, c’est-à-dire x < −@frac{1}{2}, alors @sqrt{x² + 6x + 6} ≥ 0 > 2x + 1 : l’inéquation est vraie dès que la racine existe.\nSolutions : x < −@frac{1}{2} et x ∈ D, soit **]−∞ ; −3 − @sqrt{3}] ∪ [−3 + @sqrt{3} ; −@frac{1}{2}[**." },
        { q: "3. Deuxième cas : 2x + 1 ≥ 0. Résous l’inéquation dans ce cas.", indice: "Les deux membres sont positifs : on peut élever au carré.",
          corrige: "Si x ≥ −@frac{1}{2}, on élève au carré : x² + 6x + 6 ≥ (2x + 1)² = 4x² + 4x + 1, soit 3x² − 2x − 5 ≤ 0.\nΔ = 4 + 60 = 64, racines @frac{2 ± 8}{6} : −1 et @frac{5}{3}. Négatif entre les racines : −1 ≤ x ≤ @frac{5}{3}.\nAvec x ≥ −@frac{1}{2} : **[−@frac{1}{2} ; @frac{5}{3}]**.", type: "calcul" },
        { q: "4. Conclus : ensemble des solutions de (I).",
          corrige: "On réunit les deux cas :\n**S = ]−∞ ; −3 − @sqrt{3}] ∪ [−3 + @sqrt{3} ; @frac{5}{3}]**.",
          retenir: "@sqrt{A} ≥ B : deux cas, B < 0 (et A ≥ 0) ou B ≥ 0 (et A ≥ B²)." }
      ] }
  ],
  "ma-sys": [
    { id: "ma-s1", titre: "Le pivot de Gauss pas à pas", niveau: 2, duree: 20,
      contexte: "Résous dans ℝ³ le système (S) formé des trois équations :\n(L1)  x + 2y − z = −3\n(L2)  2x − y + z = 8\n(L3)  −x + y + 2z = 3",
      questions: [
        { q: "1. Élimine x des lignes L2 et L3.", indice: "L2 ← L2 − 2L1 et L3 ← L3 + L1.",
          corrige: "L2 − 2L1 : (2x − y + z) − 2(x + 2y − z) = 8 − 2 × (−3), soit **−5y + 3z = 14**.\nL3 + L1 : (−x + y + 2z) + (x + 2y − z) = 3 + (−3), soit **3y + z = 0**.", type: "calcul" },
        { q: "2. Élimine y de la dernière ligne, puis trouve z.", indice: "Combine 5 × (3y + z = 0) et 3 × (−5y + 3z = 14).",
          corrige: "5 × (3y + z) + 3 × (−5y + 3z) = 5 × 0 + 3 × 14, soit 14z = 42, donc **z = 3**." },
        { q: "3. Remonte pour trouver y puis x, et vérifie.",
          corrige: "3y + z = 0 donne 3y = −3, **y = −1**.\nL1 : x = −3 − 2y + z = −3 + 2 + 3, **x = 2**.\nVérification : L1 : 2 − 2 − 3 = −3 ✔ ; L2 : 4 + 1 + 3 = 8 ✔ ; L3 : −2 − 1 + 6 = 3 ✔.\n**S = {(2 ; −1 ; 3)}**." }
      ] },
    { id: "ma-s2", titre: "Les courses d’Afi au marché Dantokpa", niveau: 2, duree: 25,
      contexte: "Au marché Dantokpa, trois amies achètent des tomates, des oignons et du piment (prix au kilo en francs CFA, les mêmes pour toutes) :\n• Afi : 2 kg de tomates, 1 kg d’oignons, 1 kg de piment → 2 600 F ;\n• Bola : 1 kg de tomates, 2 kg d’oignons, 1 kg de piment → 2 300 F ;\n• Codjo : 1 kg de tomates, 1 kg d’oignons, 2 kg de piment → 3 100 F.\nTâche : trouver le prix d’un kilo de chaque produit.",
      questions: [
        { q: "1. Choisis tes inconnues et traduis l’énoncé par un système.",
          corrige: "Soient t, o et p les prix d’un kilo de tomates, d’oignons et de piment (en F).\n{ 2t + o + p = 2 600\n  t + 2o + p = 2 300\n  t + o + 2p = 3 100 }" },
        { q: "2. Additionne les trois équations. Qu’obtiens-tu ?", indice: "Chaque inconnue apparaît 4 fois au total.",
          corrige: "4t + 4o + 4p = 8 000, donc **t + o + p = 2 000**." },
        { q: "3. Déduis-en t, o et p, puis vérifie.", indice: "Retire t + o + p = 2 000 à chaque équation.",
          corrige: "Équation d’Afi − (t + o + p) : t = 2 600 − 2 000 = **600 F**.\nBola : o = 2 300 − 2 000 = **300 F**.\nCodjo : p = 3 100 − 2 000 = **1 100 F**.\nVérification : 2 × 600 + 300 + 1 100 = 2 600 ✔ ; 600 + 600 + 1 100 = 2 300 ✔ ; 600 + 300 + 2 200 = 3 100 ✔.\nRéponse : le kilo de tomates coûte 600 F, celui d’oignons 300 F et celui de piment 1 100 F.",
          retenir: "On termine toujours par une phrase qui répond à la question posée." }
      ] },
    { id: "ma-s3", titre: "Système 2 × 2 avec le déterminant", niveau: 1, duree: 10,
      contexte: "On considère le système (S) : { 2x + 3y = 7 ; x − y = 1 }.",
      questions: [
        { q: "1. Calcule le déterminant de (S). Que peux-tu en conclure ?",
          corrige: "D = 2 × (−1) − 1 × 3 = −5. **D ≠ 0, donc (S) a une seule solution.**" },
        { q: "2. Résous (S) par la méthode de ton choix, puis vérifie.",
          corrige: "Substitution : x = 1 + y, donc 2(1 + y) + 3y = 7, 5y = 5, **y = 1**, puis **x = 2**.\nAvec Cramer : x = @frac{7 × (−1) − 1 × 3}{−5} = @frac{−10}{−5} = 2 et y = @frac{2 × 1 − 1 × 7}{−5} = @frac{−5}{−5} = 1.\nVérification : 4 + 3 = 7 ✔ et 2 − 1 = 1 ✔." }
      ] }
  ],
  "ma-denomb": [
    { id: "ma-d1", titre: "Le bureau de la coopérative scolaire", niveau: 2, duree: 25,
      contexte: "Une classe de 1ère D compte 40 élèves : 25 filles et 15 garçons. On veut élire le bureau de la coopérative scolaire.",
      questions: [
        { q: "1. Combien de bureaux différents peut-on former avec un président, un secrétaire et un trésorier (trois élèves différents) ?", indice: "Les postes sont différents : l’ordre compte. Une personne ne peut pas avoir deux postes.",
          corrige: "L’ordre compte (postes différents) et sans répétition : arrangement.\n@A{40}{3} = 40 × 39 × 38 = **59 280** bureaux." },
        { q: "2. Combien de délégations de 3 élèves (sans postes) peut-on former ?",
          corrige: "Sans postes, l’ordre ne compte pas : combinaison.\n@C{40}{3} = @frac{40 × 39 × 38}{3 × 2 × 1} = **9 880** délégations." },
        { q: "3. Combien de délégations de 3 élèves comptent exactement 2 filles ?", indice: "2 filles parmi 25 ET 1 garçon parmi 15 : on multiplie.",
          corrige: "@C{25}{2} × @C{15}{1} = 300 × 15 = **4 500** délégations." },
        { q: "4. Combien de délégations de 3 élèves comptent au moins une fille ?", indice: "Le contraire de « au moins une fille », c’est « aucune fille » (3 garçons).",
          corrige: "Total − délégations sans fille : @C{40}{3} − @C{15}{3} = 9 880 − 455 = **9 425**.",
          retenir: "« Au moins un » → total moins « aucun »." },
        { q: "5. Combien de bureaux (président, secrétaire, trésorier) ont une fille comme présidente ?",
          corrige: "Présidente : 25 choix. Puis secrétaire et trésorier parmi les 39 élèves restants : @A{39}{2} = 39 × 38 = 1 482.\n25 × 1 482 = **37 050** bureaux." }
      ] },
    { id: "ma-d2", titre: "L’urne à trois couleurs", niveau: 2, duree: 25,
      contexte: "Une urne contient 9 boules indiscernables au toucher : 4 rouges, 3 vertes et 2 blanches.",
      questions: [
        { q: "1. On tire simultanément 3 boules. Combien de tirages possibles ?",
          corrige: "Simultané : combinaison. @C{9}{3} = @frac{9 × 8 × 7}{6} = **84** tirages." },
        { q: "2. Combien de ces tirages contiennent 3 boules de la même couleur ?", indice: "3 rouges, ou 3 vertes, ou 3 blanches (possible ?).",
          corrige: "3 rouges : @C{4}{3} = 4. 3 vertes : @C{3}{3} = 1. 3 blanches : impossible (il n’y en a que 2).\nTotal : 4 + 1 = **5** tirages." },
        { q: "3. Combien de tirages contiennent une boule de chaque couleur ?",
          corrige: "1 rouge parmi 4, 1 verte parmi 3, 1 blanche parmi 2 : 4 × 3 × 2 = **24** tirages." },
        { q: "4. Combien de tirages contiennent au moins une boule rouge ?",
          corrige: "Total − aucun rouge (3 boules parmi les 5 non rouges) : 84 − @C{5}{3} = 84 − 10 = **74**." },
        { q: "5. On tire maintenant 3 boules successivement sans remise. Combien de tirages ? Et avec remise ?",
          corrige: "Sans remise : @A{9}{3} = 9 × 8 × 7 = **504**.\nAvec remise : 9³ = **729**." },
        { q: "6. Tirages successifs sans remise : combien donnent exactement 2 boules rouges ?", indice: "Choisis d’abord la place de la boule non rouge parmi les 3 tirages.",
          corrige: "Place de la boule non rouge : 3 choix. Les 2 rouges, dans l’ordre : @A{4}{2} = 12. La boule non rouge : 5 choix.\n3 × 12 × 5 = **180** tirages.",
          retenir: "En successif, on n’oublie pas de compter les places (l’ordre compte)." }
      ] },
    { id: "ma-d3", titre: "Codes et anagrammes", niveau: 1, duree: 15,
      contexte: "La porte de la salle informatique du lycée s’ouvre avec un code de 4 chiffres (de 0 à 9).",
      questions: [
        { q: "1. Combien de codes possibles ?", corrige: "4 chiffres, répétitions possibles, l’ordre compte : 10⁴ = **10 000** codes." },
        { q: "2. Combien de codes ont 4 chiffres tous différents ?", corrige: "Sans répétition, l’ordre compte : @A{10}{4} = 10 × 9 × 8 × 7 = **5 040** codes." },
        { q: "3. Combien de codes contiennent au moins un 0 ?", indice: "Compte d’abord les codes sans aucun 0.",
          corrige: "Codes sans 0 : 9⁴ = 6 561. Au moins un 0 : 10 000 − 6 561 = **3 439** codes." },
        { q: "4. Combien d’anagrammes (avec ou sans sens) peut-on former avec les lettres de COTONOU ?", indice: "7 lettres, mais le O apparaît 3 fois.",
          corrige: "7 lettres dont 3 O identiques : @frac{7!}{3!} = @frac{5 040}{6} = **840** anagrammes." }
      ] }
  ]
});
