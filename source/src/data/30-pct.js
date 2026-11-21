/* ---------------- PCT · 1ère D ----------------
   Pas de photo du cahier de PCT : chapitres du début du programme officiel de 1ère D
   (SA 1 « L’énergie mécanique au service du développement », SA 2 « Étude de quelques composés organiques »).
   Tous marqués « à vérifier » : l’élève décoche ce que son professeur n’a pas encore fait. */
METHODES.push(
  { id: "m-pct-devoir", mat: "pct", titre: "PCT : réussir le devoir",
    intro: "Le devoir de PCT dure souvent 3 heures et compte deux situations d’évaluation : **A. Chimie et technologie** et **B. Physique et technologie**. Chacune a un contexte, des documents (données) et une tâche en trois parties : 1. mobilisation des ressources (questions de cours), 2 et 3. résolution de problème.",
    etapes: [
      ["Commence par les questions de cours", "Définitions, énoncés (principe d’inertie, théorème de l’énergie cinétique), équations à équilibrer : ce sont des points rapides."],
      ["Fais un schéma", "Le système, les forces (flèches), le sens du mouvement. Un schéma évite la moitié des erreurs de signe."],
      ["Formule littérale d’abord", "Écris la relation avec des lettres (W = mgh), puis remplace par les valeurs."],
      ["Les unités", "Convertis avant de calculer : km/h → m/s (÷ 3,6), g → kg, cm → m. Le résultat a toujours une unité."],
      ["Vérifie l’ordre de grandeur", "Une vitesse de 300 m/s pour un enfant sur un toboggan ? Il y a une erreur."],
      ["En chimie", "Équation équilibrée, puis quantités de matière (n = m/M, n = V/V_{m}), puis réponse."]
    ],
    pieges: ["Oublier de convertir les km/h en m/s", "Se tromper de signe pour le travail du poids (montée : négatif)", "Oublier que la réaction normale ne travaille pas", "Une équation de réaction non équilibrée"] }
);

CHAPITRES.push(
  { id: "pct-cine", mat: "pct", groupe: "SA1 · L’énergie mécanique (physique)", devoir: false, verifier: true, court: "Rappel : mouvement et principe d’inertie",
    titre: "Rappel : mouvement d’un solide, vitesse, principe d’inertie",
    fiche: [
      "**Référentiel** : l’objet par rapport auquel on étudie le mouvement (le sol : référentiel terrestre).",
      "**Vitesse moyenne** : v = @frac{d}{Δt} (m/s). Conversion : **1 m/s = 3,6 km/h** (72 km/h = 20 m/s).",
      "**Mouvement rectiligne uniforme (MRU)** : trajectoire droite, vitesse constante. Loi horaire : x = v·t + x_{0}.",
      "**Mouvement rectiligne uniformément varié** : accélération a constante. v = a·t + v_{0} ; x = ½a·t² + v_{0}·t + x_{0} ; v² − v_{0}² = 2a(x − x_{0}).",
      "**Principe d’inertie** : dans un référentiel galiléen, un solide isolé ou pseudo-isolé (forces qui se compensent) est soit **au repos**, soit en **mouvement rectiligne uniforme**. Et réciproquement.",
      "**Chute avec vitesse horizontale** (projectile) : x = v_{0}·t et y = −½g·t² donnent une trajectoire **parabolique** : y = −@frac{g}{2v_{0}²}x²."
    ],
    cartes: [
      ["Principe d’inertie", "Dans un référentiel galiléen, un solide isolé ou pseudo-isolé est soit au repos, soit en mouvement rectiligne uniforme (et réciproquement)."],
      ["Solide pseudo-isolé", "Solide soumis à des forces qui se compensent (leur somme est nulle)."],
      ["Conversion km/h → m/s", "On divise par 3,6. Exemple : 72 km/h = 20 m/s ; 3,6 km/h = 1 m/s."],
      ["Loi horaire du MRU", "x = v·t + x_{0} (v constante)."],
      ["Relation indépendante du temps (MRUV)", "v² − v_{0}² = 2a(x − x_{0})."],
      ["Trajectoire d’un objet lancé horizontalement", "Une parabole : x = v_{0}t, y = −½gt², donc y = −@frac{g}{2v_{0}²}x²."]
    ],
    sujets: [] },
  { id: "pct-trav", mat: "pct", groupe: "SA1 · L’énergie mécanique (physique)", devoir: true, verifier: true, court: "Travail et puissance d’une force",
    titre: "Travail et puissance d’une force",
    fiche: [
      "**Travail d’une force constante** @vec{F} sur un déplacement rectiligne AB : **W_{AB}(@vec{F}) = F × AB × cos α**, où α est l’angle entre @vec{F} et le déplacement. Unité : le **joule (J)**.",
      "**Moteur, résistant, nul** : W > 0 si 0 ≤ α < 90° (la force aide le mouvement) ; W < 0 si 90° < α ≤ 180° (elle s’y oppose) ; W = 0 si α = 90° (force perpendiculaire au déplacement).",
      "**Travail du poids** : W_{AB}(@vec{P}) = m·g·(z_{A} − z_{B}) = ± m·g·h. Positif quand l’objet **descend**, négatif quand il **monte**. Il ne dépend **pas du chemin suivi**, seulement de la différence d’altitude.",
      "**Travail d’une force de frottement** constante f, opposée au mouvement, sur une longueur L : W = −f × L.",
      "**Réaction normale** d’un support (sans frottement) : perpendiculaire au déplacement, donc **son travail est nul**.",
      "Sur un arc de cercle de rayon r (toboggan, pendule) : la différence d’altitude se calcule avec r et cos θ, par exemple h = r(1 − cos θ).",
      "**Puissance moyenne** : P = @frac{W}{Δt}, en **watts (W)**. **Puissance instantanée** : P = F × v × cos α.",
      "Unités : 1 kW = 1 000 W ; 1 kWh = 3,6 × 10^{6} J. On prend en général **g = 10 N/kg**.",
      "**Rotation** autour d’un axe fixe : travail d’un couple W = C × θ (θ en radians) et puissance P = C × ω."
    ],
    cartes: [
      ["Formule du travail d’une force constante", "W_{AB}(@vec{F}) = F × AB × cos α (α : angle entre la force et le déplacement). En joules."],
      ["Travail moteur", "W > 0 : la force favorise le mouvement (angle α < 90°)."],
      ["Travail résistant", "W < 0 : la force s’oppose au mouvement (angle α > 90°)."],
      ["Travail du poids", "W = m·g·(z_{A} − z_{B}) : + m·g·h à la descente, − m·g·h à la montée. Indépendant du chemin suivi."],
      ["Travail d’une force perpendiculaire au déplacement", "Nul (cos 90° = 0). Exemple : la réaction normale sans frottement."],
      ["Travail d’une force de frottement", "W = −f × L (toujours résistant)."],
      ["Puissance moyenne", "P = @frac{W}{Δt}, en watts (W)."],
      ["Puissance instantanée", "P = F × v × cos α (ou P = F × v si la force est dans le sens du mouvement)."],
      ["Le kilowattheure", "1 kWh = 1 000 W × 3 600 s = 3,6 × 10^{6} J."],
      ["Travail d’un couple de moment C", "W = C × θ, avec θ l’angle de rotation en radians."]
    ],
    sujets: [] },
  { id: "pct-ec", mat: "pct", groupe: "SA1 · L’énergie mécanique (physique)", devoir: true, verifier: true, court: "Énergie cinétique et théorème",
    titre: "Énergie cinétique et théorème de l’énergie cinétique",
    fiche: [
      "**Énergie cinétique** d’un solide en translation : **E_{c} = ½ m v²** (m en kg, v en m/s, E_{c} en J). Si la vitesse double, l’énergie cinétique est multipliée par 4.",
      "En rotation autour d’un axe : E_{c} = ½ J_{Δ} ω² (J_{Δ} : moment d’inertie, ω : vitesse angulaire en rad/s).",
      "**Théorème de l’énergie cinétique** : dans un référentiel galiléen, la variation d’énergie cinétique d’un solide entre deux positions A et B est égale à la somme des travaux des forces extérieures : **E_{c}(B) − E_{c}(A) = Σ W_{AB}(@vec{F}_{ext})**.",
      "**Méthode** : 1) système et référentiel ; 2) bilan des forces (schéma) ; 3) travail de chaque force ; 4) on écrit le théorème ; 5) on isole l’inconnue (vitesse, hauteur, force de frottement…).",
      "**Chute libre sans vitesse initiale** d’une hauteur h : ½mv² = mgh, donc **v = @sqrt{2gh}**.",
      "Freinage : E_{c} diminue, la somme des travaux est négative (frottements). Distance d’arrêt sur le plat avec une force de frottement f : d = @frac{E_{c}}{f}."
    ],
    cartes: [
      ["Énergie cinétique (translation)", "E_{c} = ½ m v², en joules (m en kg, v en m/s)."],
      ["Si la vitesse double, l’énergie cinétique…", "est multipliée par 4 (elle dépend de v²)."],
      ["Énoncé du théorème de l’énergie cinétique", "Dans un référentiel galiléen : E_{c}(B) − E_{c}(A) = somme des travaux des forces extérieures entre A et B."],
      ["Les 5 étapes d’une application du théorème", "Système et référentiel, bilan des forces, travail de chaque force, écrire le théorème, isoler l’inconnue."],
      ["Vitesse après une chute libre de hauteur h (départ arrêté)", "v = @sqrt{2gh}."],
      ["Énergie cinétique de rotation", "E_{c} = ½ J_{Δ} ω²."],
      ["Calculer une force de frottement avec le théorème", "W(f) = ΔE_{c} − (somme des autres travaux), puis f = −W(f) / L."]
    ],
    sujets: [] },
  { id: "pct-em", mat: "pct", groupe: "SA1 · L’énergie mécanique (physique)", devoir: true, verifier: true, court: "Énergie potentielle et énergie mécanique",
    titre: "Énergie potentielle de pesanteur et énergie mécanique",
    fiche: [
      "**Énergie potentielle de pesanteur** : **E_{pp} = m g z** (+ une constante), avec z l’altitude comptée à partir d’un niveau de référence choisi (E_{pp} = 0 à ce niveau). L’axe des z est orienté vers le haut.",
      "Lien avec le travail du poids : W_{AB}(@vec{P}) = E_{pp}(A) − E_{pp}(B).",
      "**Énergie mécanique** : **E_{m} = E_{c} + E_{pp}**.",
      "**Sans frottements**, l’énergie mécanique se **conserve** : E_{c} et E_{pp} s’échangent (ce que l’objet perd en hauteur, il le gagne en vitesse).",
      "**Avec frottements**, l’énergie mécanique **diminue** : ΔE_{m} = W(frottements) < 0. L’énergie « perdue » devient de la chaleur.",
      "Exemple de technologie : dans un barrage hydroélectrique (comme celui de Nangbéto, sur le fleuve Mono), l’énergie potentielle de l’eau devient énergie cinétique puis énergie électrique."
    ],
    cartes: [
      ["Énergie potentielle de pesanteur", "E_{pp} = m g z (z : altitude par rapport au niveau de référence choisi)."],
      ["Énergie mécanique", "E_{m} = E_{c} + E_{pp}."],
      ["Sans frottements, l’énergie mécanique…", "se conserve : elle reste constante."],
      ["Avec frottements, l’énergie mécanique…", "diminue : sa variation est égale au travail des frottements (négatif)."],
      ["Lien entre travail du poids et énergie potentielle", "W_{AB}(@vec{P}) = E_{pp}(A) − E_{pp}(B) = −ΔE_{pp}."],
      ["Hauteur maximale d’un objet lancé vers le haut (sans frottements)", "Au sommet, v = 0 : toute l’énergie mécanique est de l’énergie potentielle, donc z_{max} = @frac{E_{m}}{mg}."]
    ],
    sujets: [] },
  { id: "pct-anal", mat: "pct", groupe: "SA2 · Composés organiques (chimie)", devoir: true, verifier: true, court: "Chimie organique : généralités et analyse",
    titre: "Généralités sur la chimie organique et analyse élémentaire",
    fiche: [
      "**Composé organique** : composé du carbone, contenant presque toujours de l’hydrogène (souvent aussi O et N). Exceptions minérales : CO, CO₂, les carbonates, les cyanures.",
      "**Tétravalence** : le carbone fait toujours 4 liaisons (l’hydrogène 1, l’oxygène 2, l’azote 3).",
      "**Mise en évidence (analyse qualitative)** : le **carbone** donne du CO₂ en brûlant (il trouble l’**eau de chaux**) ou un dépôt noir de carbone ; l’**hydrogène** donne de l’eau (buée, le **sulfate de cuivre anhydre** passe du blanc au bleu) ; l’**azote** donne de l’ammoniac avec la chaux sodée (il bleuit le papier pH humide).",
      "**Combustion complète** : C_{x}H_{y}O_{z} + (x + @frac{y}{4} − @frac{z}{2}) O₂ → x CO₂ + @frac{y}{2} H₂O.",
      "**Masses de C et H** à partir des produits : m(C) = @frac{12}{44} × m(CO₂) ; m(H) = @frac{2}{18} × m(H₂O) ; m(O) = m − m(C) − m(H).",
      "**Composition centésimale** : %C = @frac{m(C)}{m} × 100, etc. Formule brute : **@frac{12x}{%C} = @frac{y}{%H} = @frac{16z}{%O} = @frac{M}{100}**.",
      "**Masse molaire d’un gaz** à partir de sa densité par rapport à l’air : **M = 29 × d** (g/mol).",
      "Volume molaire (conditions normales) : V_{m} = 22,4 L/mol. Quantité de matière : n = @frac{m}{M} = @frac{V}{V_{m}}.",
      "**Isomères** : même formule brute, formules développées différentes. Formule développée (toutes les liaisons), semi-développée (liaisons C–C seulement), brute (C_{x}H_{y}…)."
    ],
    cartes: [
      ["Composé organique", "Composé du carbone (avec presque toujours de l’hydrogène). Exceptions : CO, CO₂, carbonates, cyanures."],
      ["Tétravalence du carbone", "Le carbone forme toujours 4 liaisons."],
      ["Mettre en évidence le carbone", "Le produit de combustion (CO₂) trouble l’eau de chaux."],
      ["Mettre en évidence l’hydrogène", "Il se forme de l’eau : le sulfate de cuivre anhydre passe du blanc au bleu."],
      ["Mettre en évidence l’azote", "Chauffé avec de la chaux sodée, le composé libère de l’ammoniac qui bleuit le papier pH humide."],
      ["Masse de carbone dans m(CO₂)", "m(C) = @frac{12}{44} × m(CO₂)."],
      ["Masse d’hydrogène dans m(H₂O)", "m(H) = @frac{2}{18} × m(H₂O)."],
      ["Formule brute à partir des pourcentages", "@frac{12x}{%C} = @frac{y}{%H} = @frac{16z}{%O} = @frac{M}{100}."],
      ["Masse molaire d’un gaz connaissant sa densité d", "M = 29 × d (en g/mol)."],
      ["Combustion complète de C_{x}H_{y}O_{z}", "C_{x}H_{y}O_{z} + (x + y/4 − z/2) O₂ → x CO₂ + y/2 H₂O."],
      ["Isomères", "Composés de même formule brute mais de formules développées différentes."]
    ],
    sujets: [] },
  { id: "pct-alcanes", mat: "pct", groupe: "SA2 · Composés organiques (chimie)", devoir: true, verifier: true, court: "Les alcanes",
    titre: "Les alcanes : formule, nomenclature, isomérie, réactions",
    fiche: [
      "**Alcanes** : hydrocarbures **saturés** (uniquement des liaisons simples), de formule générale **C_{n}H_{2n+2}**. Masse molaire : M = 14n + 2 (g/mol).",
      "**Noms** : méthane CH₄, éthane C₂H₆, propane C₃H₈, butane C₄H₁₀, pentane C₅H₁₂, hexane C₆H₁₄, heptane C₇H₁₆, octane C₈H₁₈.",
      "**Groupes alkyles** : méthyl –CH₃, éthyl –C₂H₅, propyl –C₃H₇.",
      "**Nommer un alcane ramifié** : 1) trouver la chaîne carbonée la plus longue (nom de base) ; 2) numéroter pour donner les **plus petits numéros** aux ramifications ; 3) nommer les ramifications par ordre alphabétique avec leur numéro (di-, tri- s’il y en a plusieurs identiques). Exemple : CH₃–CH(CH₃)–CH₂–CH₃ est le **2-méthylbutane**.",
      "**Isomères** : C₄H₁₀ en a 2 (butane, méthylpropane) ; C₅H₁₂ en a 3 (pentane, 2-méthylbutane, 2,2-diméthylpropane).",
      "**Combustion complète** : C_{n}H_{2n+2} + @frac{3n + 1}{2} O₂ → n CO₂ + (n + 1) H₂O. Exemple : C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. Combustion incomplète (manque d’air) : monoxyde de carbone CO (gaz mortel) et suie (carbone).",
      "**Substitution** (en présence de lumière) : un atome H est remplacé par un atome de chlore. CH₄ + Cl₂ → CH₃Cl + HCl, puis CH₂Cl₂, CHCl₃ (chloroforme), CCl₄.",
      "**Sources et usages** : pétrole et gaz naturel ; gaz de cuisine (butane, propane), essence, gasoil, pétrole lampant."
    ],
    cartes: [
      ["Formule générale des alcanes", "C_{n}H_{2n+2} (hydrocarbures saturés : liaisons simples seulement)."],
      ["Masse molaire d’un alcane en fonction de n", "M = 12n + (2n + 2) = 14n + 2 g/mol."],
      ["Les 6 premiers alcanes", "Méthane CH₄, éthane C₂H₆, propane C₃H₈, butane C₄H₁₀, pentane C₅H₁₂, hexane C₆H₁₄."],
      ["Nommer un alcane ramifié : les 3 étapes", "Chaîne la plus longue ; numéroter pour avoir les plus petits numéros ; ramifications par ordre alphabétique avec leur numéro."],
      ["Nom de CH₃–CH(CH₃)–CH₂–CH₃", "2-méthylbutane (chaîne de 4 carbones, un méthyl sur le carbone 2)."],
      ["Les isomères de C₄H₁₀", "Le butane et le méthylpropane (2-méthylpropane)."],
      ["Les isomères de C₅H₁₂", "Pentane, 2-méthylbutane, 2,2-diméthylpropane."],
      ["Combustion complète du propane", "C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O."],
      ["Combustion incomplète : le danger", "Elle produit du monoxyde de carbone (CO), un gaz incolore et mortel, et de la suie."],
      ["Réaction de substitution", "Un atome d’hydrogène est remplacé par un autre atome : CH₄ + Cl₂ → CH₃Cl + HCl (à la lumière)."]
    ],
    sujets: [] },
  { id: "pct-alcenes", mat: "pct", groupe: "SA2 · Composés organiques (chimie)", devoir: true, verifier: true, court: "Alcènes et alcynes",
    titre: "Les alcènes et les alcynes : nomenclature, addition, polymérisation",
    fiche: [
      "**Alcènes** : une double liaison C=C, formule **C_{n}H_{2n}**. Le plus simple : l’éthylène (éthène) C₂H₄, molécule plane.",
      "**Alcynes** : une triple liaison C≡C, formule **C_{n}H_{2n−2}**. Le plus simple : l’acétylène (éthyne) C₂H₂, molécule linéaire.",
      "**Nomenclature** : suffixe **-ène** ou **-yne**, avec le numéro (le plus petit possible) du premier carbone de la liaison multiple : but-1-ène CH₂=CH–CH₂–CH₃, but-2-ène CH₃–CH=CH–CH₃.",
      "**Isomérie Z/E** : quand chaque carbone de la double liaison porte deux groupes différents (but-2-ène), il existe deux isomères : Z (groupes du même côté) et E (de part et d’autre).",
      "**Réactions d’addition** (la liaison multiple s’ouvre) : hydrogénation (H₂, catalyseur nickel) → alcane ; dibrome Br₂ → dérivé dibromé ; eau (catalyseur acide) → alcool ; chlorure d’hydrogène HCl → chloroalcane.",
      "**Test des liaisons multiples** : un alcène ou un alcyne **décolore l’eau de brome** (jaune-orangé), un alcane non.",
      "**Polymérisation** : n CH₂=CH₂ → –(CH₂–CH₂)ₙ– : le polyéthylène (sachets, bidons). Avec le chlorure de vinyle : le PVC (tuyaux).",
      "Préparation de l’acétylène : CaC₂ + 2 H₂O → C₂H₂ + Ca(OH)₂ (carbure de calcium et eau)."
    ],
    cartes: [
      ["Formule générale des alcènes", "C_{n}H_{2n} (une double liaison C=C)."],
      ["Formule générale des alcynes", "C_{n}H_{2n−2} (une triple liaison C≡C)."],
      ["Éthylène et acétylène", "Éthylène (éthène) : C₂H₄, plan. Acétylène (éthyne) : C₂H₂, linéaire."],
      ["Test d’une liaison double ou triple", "Le composé décolore l’eau de brome ; un alcane ne la décolore pas."],
      ["Hydrogénation d’un alcène", "Addition de H₂ (catalyseur : nickel) : on obtient l’alcane correspondant. C₂H₄ + H₂ → C₂H₆."],
      ["Hydratation d’un alcène", "Addition d’eau (catalyseur acide) : on obtient un alcool. C₂H₄ + H₂O → C₂H₅OH (éthanol)."],
      ["Polymérisation de l’éthylène", "n CH₂=CH₂ → –(CH₂–CH₂)ₙ– : le polyéthylène."],
      ["Isomérie Z/E", "Pour une double liaison dont chaque carbone porte deux groupes différents : Z (même côté) ou E (côtés opposés)."],
      ["Nom de CH₃–CH=CH–CH₃", "But-2-ène."],
      ["Préparation de l’acétylène", "Carbure de calcium + eau : CaC₂ + 2 H₂O → C₂H₂ + Ca(OH)₂."]
    ],
    sujets: [] }
);

Object.assign(QUIZ, {
  "pct-cine": [
    { t: "v", q: "72 km/h, c’est combien de m/s ?", r: 20, p: [72, 7.2, 259.2], u: "m/s", e: "72 ÷ 3,6 = 20 m/s." },
    { t: "c", q: "Selon le principe d’inertie, un solide pseudo-isolé est…", r: "au repos ou en mouvement rectiligne uniforme", p: ["toujours au repos", "en mouvement circulaire", "en chute libre"], e: "Les forces se compensent : la vitesse ne change pas." },
    { t: "c", q: "La loi horaire d’un mouvement rectiligne uniforme est…", r: "x = v·t + x_{0}", p: ["x = ½a·t²", "v = a·t", "x = v·t²"], e: "Vitesse constante." },
    { t: "c", q: "Un objet lancé horizontalement a une trajectoire…", r: "parabolique", p: ["rectiligne", "circulaire", "verticale"], e: "x = v₀t et y = −½gt² donnent une parabole." },
    { t: "v", q: "Un cycliste roule à 5 m/s pendant 2 minutes. Quelle distance parcourt-il, en mètres ?", r: 600, p: [10, 300, 1200], u: "m", e: "2 min = 120 s ; d = 5 × 120 = 600 m." }
  ],
  "pct-trav": [
    { t: "c", q: "L’unité du travail d’une force est…", r: "le joule (J)", p: ["le watt (W)", "le newton (N)", "le kilogramme (kg)"], e: "Le watt est l’unité de la puissance, le newton celle de la force." },
    { t: "v", q: "Un sac de 50 kg est monté de 2 m. Travail du poids (g = 10 N/kg), en joules ?", r: -1000, p: [1000, 100, -100], u: "J", e: "À la montée, le travail du poids est négatif : W = −mgh = −50 × 10 × 2 = −1 000 J." },
    { t: "v", q: "Un fruit de 0,2 kg tombe d’une branche à 5 m de haut. Travail de son poids (g = 10 N/kg) ?", r: 10, p: [-10, 1, 100], u: "J", e: "Il descend : W = + mgh = 0,2 × 10 × 5 = 10 J (travail moteur)." },
    { t: "c", q: "Le travail de la réaction normale d’un support sans frottement est…", r: "nul", p: ["toujours positif", "toujours négatif", "égal au travail du poids"], e: "Elle est perpendiculaire au déplacement : cos 90° = 0." },
    { t: "c", q: "Le travail du poids entre A et B dépend…", r: "seulement de la différence d’altitude entre A et B", p: ["du chemin suivi", "de la vitesse", "de la durée du trajet"], e: "W = mg(z_{A} − z_{B}), quel que soit le chemin." },
    { t: "v", q: "Une force de 200 N tire une caisse sur 50 m, en faisant un angle de 60° avec le déplacement. Travail de la force, en joules ?", r: 5000, p: [10000, 8660, 2500], u: "J", e: "W = F × d × cos 60° = 200 × 50 × 0,5 = 5 000 J." },
    { t: "v", q: "Un moteur fournit un travail de 1 200 J en 1 minute. Sa puissance moyenne, en watts ?", r: 20, p: [1200, 72000, 2], u: "W", e: "P = W / Δt = 1 200 / 60 = 20 W (convertir 1 min en 60 s)." },
    { t: "v", q: "Une force de 50 N déplace un objet à 2 m/s, dans le sens du mouvement. Puissance, en watts ?", r: 100, p: [25, 52, 200], u: "W", e: "P = F × v = 50 × 2 = 100 W." },
    { t: "c", q: "Une force de frottement fait toujours un travail…", r: "résistant (négatif)", p: ["moteur (positif)", "nul", "égal à zéro à vitesse constante"], e: "Elle s’oppose au mouvement : W = −f × L." },
    { t: "c", q: "1 kWh vaut…", r: "3,6 × 10^{6} J", p: ["1 000 J", "3 600 J", "3,6 × 10^{3} W"], e: "1 000 W pendant 3 600 s." }
  ],
  "pct-ec": [
    { t: "c", q: "L’énergie cinétique d’un solide en translation est…", r: "E_{c} = ½ m v²", p: ["E_{c} = m g h", "E_{c} = m v", "E_{c} = ½ m v"], e: "m en kg, v en m/s, E_{c} en joules." },
    { t: "v", q: "Énergie cinétique d’une voiture de 1 000 kg roulant à 72 km/h, en joules ?", r: 200000, p: [2592000, 36000, 20000], u: "J", e: "72 km/h = 20 m/s ; E_{c} = ½ × 1 000 × 20² = 200 000 J. Piège : oublier de convertir donne 2 592 000 J." },
    { t: "c", q: "Si la vitesse d’un objet double, son énergie cinétique est…", r: "multipliée par 4", p: ["multipliée par 2", "inchangée", "divisée par 2"], e: "E_{c} dépend de v² : 2² = 4." },
    { t: "c", q: "Le théorème de l’énergie cinétique s’écrit…", r: "E_{c}(B) − E_{c}(A) = Σ W_{AB}(forces extérieures)", p: ["E_{c}(A) + E_{c}(B) = 0", "E_{c}(B) = m g h", "Σ W = 0 toujours"], e: "Dans un référentiel galiléen." },
    { t: "v", q: "Un objet tombe sans vitesse initiale d’une hauteur de 5 m (sans frottements, g = 10 N/kg). Sa vitesse en bas, en m/s ?", r: 10, p: [50, 100, 5], u: "m/s", e: "v = @sqrt{2gh} = @sqrt{2 × 10 × 5} = @sqrt{100} = 10 m/s." },
    { t: "c", q: "Pendant un freinage, la somme des travaux des forces est…", r: "négative", p: ["positive", "nulle", "égale à l’énergie cinétique finale"], e: "L’énergie cinétique diminue." }
  ],
  "pct-em": [
    { t: "c", q: "L’énergie mécanique est…", r: "E_{m} = E_{c} + E_{pp}", p: ["E_{m} = E_{c} − E_{pp}", "E_{m} = m g z", "E_{m} = ½ m v²"], e: "Somme de l’énergie cinétique et de l’énergie potentielle." },
    { t: "v", q: "Énergie potentielle de pesanteur d’une pierre de 0,5 kg à 20 m du sol (référence : le sol, g = 10 N/kg), en joules ?", r: 100, p: [10, 1000, 200], u: "J", e: "E_{pp} = mgz = 0,5 × 10 × 20 = 100 J." },
    { t: "c", q: "Sans frottements, l’énergie mécanique d’un objet en chute…", r: "reste constante", p: ["augmente", "diminue", "devient nulle au sol"], e: "E_{pp} se transforme en E_{c}." },
    { t: "c", q: "Avec des frottements, l’énergie mécanique…", r: "diminue", p: ["reste constante", "augmente", "ne dépend pas des frottements"], e: "ΔE_{m} = W(frottements) < 0 : elle devient de la chaleur." },
    { t: "c", q: "Dans un barrage hydroélectrique, l’énergie potentielle de l’eau devient d’abord…", r: "de l’énergie cinétique", p: ["de l’énergie chimique", "de l’énergie nucléaire", "de la chaleur seulement"], e: "Puis la turbine et l’alternateur la transforment en énergie électrique." }
  ],
  "pct-anal": [
    { t: "c", q: "Pour mettre en évidence le carbone d’un composé organique, on montre que sa combustion…", r: "donne un gaz qui trouble l’eau de chaux", p: ["bleuit le sulfate de cuivre anhydre", "bleuit le papier pH", "décolore l’eau de brome"], e: "Ce gaz est le CO₂. Le sulfate de cuivre anhydre détecte l’eau (donc l’hydrogène)." },
    { t: "c", q: "Le sulfate de cuivre anhydre permet de détecter…", r: "l’eau, donc l’hydrogène", p: ["le carbone", "l’azote", "l’oxygène"], e: "Il passe du blanc au bleu au contact de l’eau." },
    { t: "v", q: "Un gaz a une densité par rapport à l’air d = 2. Sa masse molaire, en g/mol ?", r: 58, p: [29, 31, 14.5], u: "g/mol", e: "M = 29 × d = 29 × 2 = 58 g/mol (c’est le butane C₄H₁₀)." },
    { t: "v", q: "Pourcentage massique de carbone dans le méthane CH₄ (C = 12, H = 1) ?", r: 75, p: [25, 80, 12], u: "%", e: "M = 16 g/mol ; %C = 12/16 × 100 = 75 %." },
    { t: "v", q: "La combustion d’un échantillon donne 4,4 g de CO₂. Masse de carbone dans l’échantillon, en grammes ?", r: 1.2, p: [4.4, 3.2, 0.44], u: "g", e: "m(C) = 12/44 × 4,4 = 1,2 g." },
    { t: "v", q: "La combustion d’un échantillon donne 2,7 g d’eau. Masse d’hydrogène, en grammes ?", r: 0.3, p: [2.7, 0.15, 2.4], u: "g", e: "m(H) = 2/18 × 2,7 = 0,3 g." },
    { t: "c", q: "Deux isomères ont…", r: "la même formule brute et des formules développées différentes", p: ["la même formule développée", "des formules brutes différentes", "les mêmes propriétés"], e: "Exemple : butane et méthylpropane (C₄H₁₀)." },
    { t: "c", q: "Lequel n’est PAS un composé organique ?", r: "le dioxyde de carbone CO₂", p: ["le méthane CH₄", "l’éthanol C₂H₆O", "le butane C₄H₁₀"], e: "CO, CO₂ et les carbonates sont classés parmi les composés minéraux." }
  ],
  "pct-alcanes": [
    { t: "c", q: "La formule générale des alcanes est…", r: "C_{n}H_{2n+2}", p: ["C_{n}H_{2n}", "C_{n}H_{2n−2}", "C_{n}H_{n}"], e: "C_{n}H_{2n} : alcènes ; C_{n}H_{2n−2} : alcynes." },
    { t: "c", q: "La formule de l’hexane est…", r: "C₆H₁₄", p: ["C₆H₁₂", "C₆H₆", "C₅H₁₂"], e: "n = 6 : 2 × 6 + 2 = 14." },
    { t: "c", q: "Le nom de CH₃–CH(CH₃)–CH₂–CH₃ est…", r: "2-méthylbutane", p: ["3-méthylbutane", "pentane", "2-méthylpropane"], e: "Chaîne la plus longue : 4 carbones (butane) ; le méthyl est sur le carbone 2 (plus petit numéro)." },
    { t: "v", q: "Combien d’isomères a l’alcane C₅H₁₂ ?", r: 3, p: [2, 4, 5], e: "Pentane, 2-méthylbutane, 2,2-diméthylpropane." },
    { t: "c", q: "L’équation équilibrée de la combustion complète du propane est…", r: "C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O", p: ["C₃H₈ + 3 O₂ → 3 CO₂ + 4 H₂O", "C₃H₈ + 5 O₂ → 3 CO₂ + 8 H₂O", "C₃H₈ + O₂ → CO₂ + H₂O"], e: "3 C → 3 CO₂ ; 8 H → 4 H₂O ; O : 6 + 4 = 10 atomes, soit 5 O₂." },
    { t: "c", q: "La combustion incomplète d’un alcane est dangereuse car elle produit…", r: "du monoxyde de carbone (CO)", p: ["du dioxygène", "de l’eau", "du méthane"], e: "Gaz incolore, inodore et mortel : toujours aérer une cuisine au gaz." },
    { t: "c", q: "CH₄ + Cl₂ → CH₃Cl + HCl est une réaction…", r: "de substitution", p: ["d’addition", "de combustion", "de polymérisation"], e: "Un H est remplacé par un Cl (à la lumière)." },
    { t: "v", q: "Un alcane a une masse molaire de 72 g/mol. Combien d’atomes de carbone a-t-il ?", r: 5, p: [6, 4, 7], e: "14n + 2 = 72, donc n = 5 : C₅H₁₂." },
    { t: "v", q: "Un alcane a un rapport (nombre d’atomes H) / (nombre d’atomes C) égal à 2,4. Combien d’atomes de carbone ?", r: 5, p: [4, 6, 12], e: "(2n + 2)/n = 2,4 → 2n + 2 = 2,4n → n = 5 (C₅H₁₂)." }
  ],
  "pct-alcenes": [
    { t: "c", q: "La formule générale des alcènes est…", r: "C_{n}H_{2n}", p: ["C_{n}H_{2n+2}", "C_{n}H_{2n−2}", "C_{2n}H_{n}"], e: "Une double liaison C=C." },
    { t: "c", q: "Un test simple pour reconnaître un alcène ou un alcyne :", r: "il décolore l’eau de brome", p: ["il trouble l’eau de chaux", "il bleuit le sulfate de cuivre anhydre", "il rougit le papier pH"], e: "Le dibrome s’additionne sur la liaison multiple." },
    { t: "c", q: "L’hydrogénation de l’éthylène donne…", r: "de l’éthane", p: ["de l’éthanol", "de l’acétylène", "du polyéthylène"], e: "C₂H₄ + H₂ → C₂H₆ (catalyseur : nickel)." },
    { t: "c", q: "L’hydratation de l’éthylène donne…", r: "de l’éthanol", p: ["de l’éthane", "de l’éthylène glycol", "du méthanol"], e: "C₂H₄ + H₂O → C₂H₅OH." },
    { t: "c", q: "Le nom de CH₂=CH–CH₂–CH₃ est…", r: "but-1-ène", p: ["but-2-ène", "butane", "but-3-ène"], e: "On numérote pour que la double liaison ait le plus petit numéro : 1, pas 3." },
    { t: "c", q: "Le polyéthylène est obtenu par…", r: "polymérisation de l’éthylène", p: ["combustion du méthane", "substitution du chlore", "hydratation de l’acétylène"], e: "n CH₂=CH₂ → –(CH₂–CH₂)ₙ–." },
    { t: "c", q: "La formule de l’acétylène est…", r: "C₂H₂", p: ["C₂H₄", "C₂H₆", "CH₄"], e: "Triple liaison : C_{n}H_{2n−2} avec n = 2." }
  ]
});

Object.assign(EXOS, {
  "pct-trav": [
    { id: "pct-x1", titre: "La grue du port de Cotonou", niveau: 1, duree: 20,
      contexte: "Contexte : au port de Cotonou, une grue soulève verticalement un conteneur de masse m = 2 000 kg, à vitesse constante, d’une hauteur h = 15 m en 30 s.\nDonnée : g = 10 N/kg.\nTâche : étudier le travail et la puissance mis en jeu.",
      questions: [
        { q: "1. Fais le bilan des forces qui s’exercent sur le conteneur. Que dit le principe d’inertie ?",
          corrige: "Deux forces : le **poids** @vec{P} (vertical, vers le bas) et la **tension du câble** @vec{T} (verticale, vers le haut).\nLe conteneur monte à vitesse constante en ligne droite : d’après le principe d’inertie, les forces se compensent : **T = P = mg = 2 000 × 10 = 20 000 N**." },
        { q: "2. Calcule le travail du poids pendant la montée. Est-il moteur ou résistant ?",
          corrige: "Le conteneur monte : W(@vec{P}) = −mgh = −2 000 × 10 × 15 = **−300 000 J = −3,0 × 10⁵ J**.\nIl est **résistant** (négatif) : le poids s’oppose à la montée.", type: "calcul" },
        { q: "3. Calcule le travail de la tension du câble.",
          corrige: "@vec{T} est dans le sens du déplacement (α = 0°) : W(@vec{T}) = T × h × cos 0° = 20 000 × 15 = **+3,0 × 10⁵ J** (moteur)." },
        { q: "4. Calcule la puissance moyenne de la grue de deux façons.", indice: "P = W/Δt, et aussi P = T × v avec v = h/Δt.",
          corrige: "P = @frac{W(@vec{T})}{Δt} = @frac{300 000}{30} = **10 000 W = 10 kW**.\nVérification : v = @frac{15}{30} = 0,5 m/s et P = T × v = 20 000 × 0,5 = 10 000 W. ✔",
          retenir: "La puissance se calcule avec P = W/Δt ou P = F × v." }
      ] },
    { id: "pct-x2", titre: "La charrette tirée sur la route", niveau: 2, duree: 20,
      contexte: "Contexte : Rodrigue tire une charrette chargée sur une route horizontale, sur une distance AB = 50 m, à vitesse constante. La corde fait un angle α = 30° avec la route et exerce une force F = 200 N. Les frottements de la route sont représentés par une force f opposée au mouvement.\nDonnées : cos 30° ≈ 0,866 ; g = 10 N/kg.",
      questions: [
        { q: "1. Calcule le travail de la force @vec{F} exercée par la corde entre A et B.",
          corrige: "W_{AB}(@vec{F}) = F × AB × cos α = 200 × 50 × 0,866 ≈ **8 660 J** (moteur)." },
        { q: "2. Quel est le travail du poids et celui de la réaction normale de la route ? Justifie.",
          corrige: "La route est horizontale : le poids (vertical) et la réaction normale (verticale) sont **perpendiculaires au déplacement**.\nLeurs travaux sont **nuls** (cos 90° = 0)." },
        { q: "3. La vitesse est constante. Que vaut la somme des travaux des forces ? Déduis-en le travail des frottements puis la valeur de f.", indice: "À vitesse constante, l’énergie cinétique ne change pas : utilise le théorème de l’énergie cinétique.",
          corrige: "Vitesse constante : ΔE_{c} = 0, donc la somme des travaux est nulle (théorème de l’énergie cinétique).\nW(@vec{F}) + W(@vec{f}) + 0 + 0 = 0, donc W(@vec{f}) = **−8 660 J**.\nW(@vec{f}) = −f × AB, donc f = @frac{8 660}{50} ≈ **173 N**." },
        { q: "4. Rodrigue met 1 min 40 s pour aller de A à B. Calcule la puissance moyenne qu’il développe.",
          corrige: "Δt = 100 s. P = @frac{W(@vec{F})}{Δt} = @frac{8 660}{100} ≈ **87 W**.", type: "unite", retenir: "Convertir le temps en secondes avant de calculer." }
      ] }
  ],
  "pct-ec": [
    { id: "pct-x3", titre: "Le toboggan du centre de loisirs", niveau: 2, duree: 25,
      contexte: "Contexte : un enfant de masse m = 30 kg part sans vitesse du haut d’un toboggan (point A). Le bas du toboggan (point B) est h = 3,2 m plus bas. La longueur de la glissière est L = 6 m.\nDonnée : g = 10 N/kg.\nTâche : aider le responsable du centre à vérifier la sécurité du toboggan.",
      questions: [
        { q: "1. On néglige d’abord les frottements. Fais le bilan des forces et calcule le travail de chacune entre A et B.",
          corrige: "• Le **poids** : W(@vec{P}) = + mgh = 30 × 10 × 3,2 = **960 J** (l’enfant descend).\n• La **réaction** du toboggan, perpendiculaire à la glissière (sans frottements) : **W = 0**." },
        { q: "2. Énonce le théorème de l’énergie cinétique, puis calcule la vitesse de l’enfant en B.",
          corrige: "Dans un référentiel galiléen, la variation d’énergie cinétique entre A et B est égale à la somme des travaux des forces extérieures.\nE_{c}(B) − E_{c}(A) = W(@vec{P}) + W(@vec{R}), avec E_{c}(A) = 0 (départ arrêté) :\n½ m v_{B}² = 960, donc v_{B}² = @frac{2 × 960}{30} = 64 et **v_{B} = 8 m/s** (≈ 29 km/h).", type: "calcul" },
        { q: "3. En réalité, on mesure v_{B} = 6 m/s. Calcule l’énergie cinétique réelle en B, puis le travail des frottements.",
          corrige: "E_{c}(B) = ½ × 30 × 6² = **540 J**.\nThéorème : 540 − 0 = 960 + 0 + W(@vec{f}), donc **W(@vec{f}) = −420 J**." },
        { q: "4. Déduis-en la valeur de la force de frottement, supposée constante.",
          corrige: "W(@vec{f}) = −f × L, donc f = @frac{420}{6} = **70 N**." },
        { q: "5. Après B, l’enfant glisse sur une piste horizontale où la force de frottement vaut aussi 70 N. Quelle distance parcourt-il avant de s’arrêter ?",
          corrige: "Entre B et l’arrêt C : E_{c}(C) − E_{c}(B) = W(@vec{f}) (poids et réaction ne travaillent pas sur le plat).\n0 − 540 = −70 × d, donc **d = @frac{540}{70} ≈ 7,7 m**.\nLe bac de réception doit donc mesurer au moins 7,7 m.",
          retenir: "Distance d’arrêt sur le plat : d = E_{c} / f." }
      ] }
  ],
  "pct-em": [
    { id: "pct-x4", titre: "Le ballon lancé vers le ciel", niveau: 2, duree: 20,
      contexte: "Contexte : Afi lance un ballon de masse m = 0,45 kg verticalement vers le haut, avec une vitesse v_{0} = 12 m/s, depuis une hauteur de 1,5 m au-dessus du sol. On néglige les frottements de l’air.\nDonnées : g = 10 N/kg ; on prend le sol comme référence (E_{pp} = 0 au sol).",
      questions: [
        { q: "1. Calcule l’énergie cinétique, l’énergie potentielle et l’énergie mécanique du ballon au moment du lancer.",
          corrige: "E_{c} = ½ × 0,45 × 12² = **32,4 J**.\nE_{pp} = mgz = 0,45 × 10 × 1,5 = **6,75 J**.\nE_{m} = 32,4 + 6,75 = **39,15 J**." },
        { q: "2. Que devient l’énergie mécanique pendant le mouvement ? Pourquoi ?",
          corrige: "Les frottements sont négligés : seul le poids travaille, l’énergie mécanique **se conserve** : E_{m} = 39,15 J tout au long du mouvement." },
        { q: "3. Calcule la hauteur maximale atteinte par le ballon.",
          corrige: "Au sommet, la vitesse est nulle : E_{c} = 0, donc E_{pp} = E_{m}.\nmgz_{max} = 39,15, donc z_{max} = @frac{39,15}{0,45 × 10} = **8,7 m** au-dessus du sol." },
        { q: "4. Avec quelle vitesse le ballon touche-t-il le sol ?",
          corrige: "Au sol, z = 0 : E_{pp} = 0, donc E_{c} = E_{m} = 39,15 J.\nv² = @frac{2 × 39,15}{0,45} = 174, donc **v ≈ 13,2 m/s**.\nC’est plus que 12 m/s : le ballon est parti de 1,5 m de haut.", type: "calcul" }
      ] }
  ],
  "pct-anal": [
    { id: "pct-x5", titre: "Retrouver la formule d’un liquide inconnu", niveau: 2, duree: 25,
      contexte: "Contexte : au laboratoire, on dispose d’un liquide organique A qui ne contient que du carbone, de l’hydrogène et de l’oxygène. Sa masse molaire est M = 46 g/mol.\nOn brûle complètement m = 2,3 g de A : on obtient 4,4 g de dioxyde de carbone et 2,7 g d’eau.\nDonnées : C = 12 ; H = 1 ; O = 16 (g/mol).",
      questions: [
        { q: "1. Comment pourrait-on montrer, par l’expérience, que A contient du carbone et de l’hydrogène ?",
          corrige: "• Carbone : le gaz produit par la combustion **trouble l’eau de chaux** (c’est du CO₂).\n• Hydrogène : la combustion produit de l’eau, qui fait passer le **sulfate de cuivre anhydre** du blanc au bleu." },
        { q: "2. Calcule les masses de carbone, d’hydrogène et d’oxygène dans les 2,3 g de A.",
          corrige: "m(C) = @frac{12}{44} × 4,4 = **1,2 g**.\nm(H) = @frac{2}{18} × 2,7 = **0,3 g**.\nm(O) = 2,3 − 1,2 − 0,3 = **0,8 g**.", type: "calcul" },
        { q: "3. Déduis-en la composition centésimale de A.",
          corrige: "%C = @frac{1,2}{2,3} × 100 ≈ **52,2 %** ; %H = @frac{0,3}{2,3} × 100 ≈ **13,0 %** ; %O = @frac{0,8}{2,3} × 100 ≈ **34,8 %**." },
        { q: "4. Détermine la formule brute de A.", indice: "12x/%C = y/%H = 16z/%O = M/100.",
          corrige: "@frac{M}{100} = 0,46.\nx = @frac{0,46 × 52,2}{12} ≈ 2 ; y = 0,46 × 13,0 ≈ 6 ; z = @frac{0,46 × 34,8}{16} ≈ 1.\n**A a pour formule brute C₂H₆O.** Vérification : 2 × 12 + 6 + 16 = 46 g/mol. ✔" },
        { q: "5. Écris l’équation équilibrée de la combustion complète de A.",
          corrige: "**C₂H₆O + 3 O₂ → 2 CO₂ + 3 H₂O**.\nVérification : C : 2 = 2 ; H : 6 = 6 ; O : 1 + 6 = 4 + 3 = 7. ✔",
          retenir: "Équilibrer dans l’ordre : C, puis H, puis O en dernier." }
      ] },
    { id: "pct-x6", titre: "Le gaz de la bouteille de cuisine", niveau: 1, duree: 20,
      contexte: "Contexte : la mère de Bola cuisine au gaz. Le gaz de la bouteille est un alcane A dont la densité par rapport à l’air vaut d = 2.\nDonnées : C = 12 ; H = 1 ; O = 16 (g/mol) ; volume molaire V_{m} = 22,4 L/mol.",
      questions: [
        { q: "1. Calcule la masse molaire de A.", corrige: "M = 29 × d = 29 × 2 = **58 g/mol**." },
        { q: "2. Trouve la formule brute de A et son nom.", indice: "Un alcane : C_{n}H_{2n+2}, donc M = 14n + 2.",
          corrige: "14n + 2 = 58, donc n = 4 : **C₄H₁₀**, le **butane**." },
        { q: "3. Écris les formules semi-développées et les noms des isomères de A.",
          corrige: "• CH₃–CH₂–CH₂–CH₃ : **butane** ;\n• CH₃–CH(CH₃)–CH₃ : **méthylpropane** (2-méthylpropane)." },
        { q: "4. Écris l’équation de la combustion complète du butane.",
          corrige: "**2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O** (ou C₄H₁₀ + @frac{13}{2} O₂ → 4 CO₂ + 5 H₂O)." },
        { q: "5. Quel volume de dioxygène faut-il pour brûler 58 g de butane (conditions normales) ?",
          corrige: "58 g de butane = 1 mol. D’après l’équation, 1 mol de butane réagit avec @frac{13}{2} = 6,5 mol de O₂.\nV = 6,5 × 22,4 = **145,6 L** de dioxygène." },
        { q: "6. Pourquoi faut-il bien aérer la cuisine ?",
          corrige: "Si l’air manque, la combustion est **incomplète** : elle produit du **monoxyde de carbone (CO)**, un gaz incolore, inodore et mortel, et de la suie." }
      ] }
  ],
  "pct-alcanes": [
    { id: "pct-x7", titre: "Nommer et reconnaître les alcanes", niveau: 1, duree: 15,
      contexte: "Tâche : appliquer les règles de nomenclature et d’isomérie des alcanes.",
      questions: [
        { q: "1. Nomme les alcanes suivants :\na) CH₃–CH(CH₃)–CH₂–CH₃\nb) CH₃–CH₂–CH(CH₃)–CH₂–CH₃\nc) CH₃–CH(CH₃)–CH(CH₃)–CH₃\nd) CH₃–C(CH₃)₂–CH₃",
          corrige: "a) **2-méthylbutane**\nb) **3-méthylpentane**\nc) **2,3-diméthylbutane**\nd) **2,2-diméthylpropane**",
          retenir: "Chaîne la plus longue, puis plus petits numéros, puis préfixes di-, tri-." },
        { q: "2. Écris la formule semi-développée du 2,2,4-triméthylpentane (un constituant de l’essence).",
          corrige: "Chaîne de 5 carbones ; deux méthyls sur le carbone 2 et un sur le carbone 4 :\n**CH₃–C(CH₃)₂–CH₂–CH(CH₃)–CH₃**." },
        { q: "3. Un alcane B a un rapport (atomes H) / (atomes C) égal à 2,4. Trouve sa formule brute puis écris et nomme tous ses isomères.",
          corrige: "@frac{2n + 2}{n} = 2,4, donc 2n + 2 = 2,4n, soit n = 5 : **C₅H₁₂**.\nIsomères :\n• CH₃–CH₂–CH₂–CH₂–CH₃ : pentane ;\n• CH₃–CH(CH₃)–CH₂–CH₃ : 2-méthylbutane ;\n• CH₃–C(CH₃)₂–CH₃ : 2,2-diméthylpropane." },
        { q: "4. Écris l’équation de la monochloration du méthane. Quelle condition faut-il ?",
          corrige: "**CH₄ + Cl₂ → CH₃Cl + HCl**, en présence de **lumière**. C’est une réaction de **substitution** (un H est remplacé par un Cl)." }
      ] }
  ],
  "pct-alcenes": [
    { id: "pct-x8", titre: "De l’éthylène au sachet plastique", niveau: 2, duree: 15,
      contexte: "Contexte : les sachets plastiques sont fabriqués à partir de l’éthylène, un gaz obtenu à partir du pétrole.\nDonnées : C = 12 ; H = 1 (g/mol).",
      questions: [
        { q: "1. Donne la formule brute et la formule développée de l’éthylène. À quelle famille appartient-il ?",
          corrige: "C₂H₄, formule développée CH₂=CH₂ (molécule plane). Il a une double liaison C=C : c’est un **alcène**." },
        { q: "2. Comment distinguer l’éthylène de l’éthane au laboratoire ?",
          corrige: "On fait passer chaque gaz dans de l’**eau de brome** : l’éthylène la **décolore** (addition sur la double liaison), l’éthane non." },
        { q: "3. Écris les équations de l’hydrogénation et de l’hydratation de l’éthylène, et nomme les produits.",
          corrige: "Hydrogénation (catalyseur nickel) : **C₂H₄ + H₂ → C₂H₆** (éthane).\nHydratation (catalyseur acide) : **C₂H₄ + H₂O → C₂H₅OH** (éthanol)." },
        { q: "4. Écris l’équation de la polymérisation de l’éthylène. Quelle est la masse molaire d’un polyéthylène de degré de polymérisation n = 1 000 ?",
          corrige: "**n CH₂=CH₂ → –(CH₂–CH₂)ₙ–** : le polyéthylène.\nMotif CH₂–CH₂ : 28 g/mol. M = 1 000 × 28 = **28 000 g/mol**." }
      ] }
  ]
});
