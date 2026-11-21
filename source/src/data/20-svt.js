/* ---------------- SVT · 1ère D ----------------
   SA1 : activités tectoniques (séquence A barrée dans le cahier : rappel du 1er devoir ;
   séquence B : divergence ; séquence C : convergence) · SA2 : la mesure du temps (datation relative, absolue) */
FIGURES.coupe = {
  titre: "Coupe géologique", w: 300, h: 214, legende: "Coupe géologique simplifiée (S : surface d’érosion)",
  polys: [
    ["10,20 290,20 290,50 10,50", 0.05], ["10,50 290,50 290,90 10,90", 0.15],
    ["10,90 196.7,90 10,130", 0.27], ["10,130 196.7,90 290,90 290,130 10,190", 0.09], ["10,190 290,130 290,190", 0.34],
    ["228,190 237,190 237,50 228,50", 0.62]
  ],
  traits: [[80, 190, 80, 90, 3], [10, 90, 290, 90, 2.5]],
  textes: [[150, 35, "5"], [150, 70, "4"], [38, 108, "3"], [110, 145, "2"], [265, 172, "1"], [80, 203, "F"], [233, 203, "β"], [282, 81, "S"]]
};

METHODES.push(
  { id: "m-svt-devoir", mat: "svt", titre: "SVT : réussir le devoir",
    intro: "Le devoir de SVT a souvent deux parties : **I. Restitution organisée des connaissances** (définir, expliquer, schématiser) et **II. Résolution de problème à partir de documents** (une situation avec un contexte, une tâche et des consignes).",
    etapes: [
      ["Restitution : définir et expliquer", "Une définition précise en une phrase, puis l’explication avec les mots du cours (dorsale, subduction, accrétion…)."],
      ["Un schéma, c’est des points", "Un titre, des traits à la règle, des légendes écrites horizontalement. Un schéma clair vaut souvent plus qu’un long texte."],
      ["Documents : je décris avec des valeurs", "« Le document montre que… » : cite des chiffres précis (âge, profondeur, distance, unité)."],
      ["J’interprète avec mes connaissances", "« Je sais que… donc… ». Relie ce que tu vois au cours."],
      ["Je conclus", "Une phrase qui répond exactement à la consigne ou au problème posé."],
      ["Les calculs", "Formule, valeurs remplacées, résultat avec son unité. Vitesse = distance ÷ temps ; 1 km/Ma = 0,1 cm/an."]
    ],
    pieges: ["Recopier le document au lieu de l’interpréter", "Oublier les unités (Ma, km, cm/an)", "Un schéma sans titre ni légende"] }
);

CHAPITRES.push(
  { id: "svt-globe", mat: "svt", groupe: "SA1 · Activités tectoniques", devoir: false, court: "Rappel : structure et composition du globe",
    titre: "Séquence A (rappel) : structure interne et composition chimique du globe",
    fiche: [
      "**Ondes sismiques** : P (premières, traversent solides et liquides), S (secondaires, ne traversent pas les liquides), L (de surface, les plus destructrices).",
      "**Discontinuités** : Mohorovičić (Moho, base de la croûte), Gutenberg (2 900 km, manteau/noyau), Lehmann (5 100 km, noyau externe liquide/graine solide).",
      "**Croûte continentale** : granite (quartz, feldspaths, micas), riche en Si et Al, épaisse de 30 à 70 km. **Croûte océanique** : basalte et gabbro (pyroxènes, plagioclases), environ 7 km. **Manteau** : péridotite (olivine, pyroxènes), riche en Mg et Fe. **Noyau** : fer et nickel.",
      "**Lithosphère** : croûte + partie supérieure rigide du manteau (environ 100 km). Elle repose sur l’**asthénosphère**, plus chaude et ductile (déformable).",
      "**Plaques lithosphériques** : la lithosphère est découpée en plaques rigides qui se déplacent. Mouvements relatifs : **divergence** (écartement), **convergence** (rapprochement), **coulissage** (failles transformantes)."
    ],
    cartes: [
      ["Ondes P", "Ondes de compression, les premières enregistrées ; elles traversent les solides et les liquides."],
      ["Ondes S", "Ondes de cisaillement ; elles ne traversent pas les liquides (d’où la zone d’ombre due au noyau externe liquide)."],
      ["Discontinuité de Gutenberg", "Limite manteau / noyau, vers 2 900 km de profondeur."],
      ["Moho", "Discontinuité de Mohorovičić : limite entre la croûte et le manteau."],
      ["Roche et minéraux de la croûte continentale", "Le granite : quartz, feldspaths, micas."],
      ["Roche et minéraux de la croûte océanique", "Le basalte (et le gabbro) : pyroxènes et feldspaths plagioclases."],
      ["Roche et minéraux du manteau", "La péridotite : olivine et pyroxènes. Riche en magnésium et en fer."],
      ["Lithosphère", "Enveloppe rigide formée de la croûte et du manteau supérieur, épaisse d’environ 100 km, découpée en plaques."],
      ["Asthénosphère", "Partie du manteau sous la lithosphère, plus chaude et ductile, sur laquelle les plaques se déplacent."],
      ["Plaque lithosphérique", "Fragment rigide de la lithosphère, limité par des dorsales, des fosses (zones de subduction) et des failles transformantes."]
    ],
    sujets: [] },
  { id: "svt-div", mat: "svt", groupe: "SA1 · Activités tectoniques", devoir: true, court: "Divergence des plaques",
    titre: "Séquence B : activités tectoniques associées à la divergence des plaques lithosphériques",
    fiche: [
      "**Dorsale océanique** : chaîne de montagnes sous-marine, avec en son axe un **rift** (fossé d’effondrement). Exemple : la dorsale médio-atlantique.",
      "**Rift continental** : un continent commence à se déchirer. Exemple : le **rift est-africain** (Afar, grands lacs, volcans actifs). La **mer Rouge** est un océan naissant.",
      "**Accrétion** : à l’axe de la dorsale, la péridotite du manteau remonte, la pression diminue et elle **fond partiellement** (fusion par décompression) : le magma basaltique forme une nouvelle lithosphère océanique (basaltes en coussins, gabbros).",
      "**Les indices de la divergence** : âge des roches et des sédiments qui augmente de part et d’autre de l’axe (symétrie) ; anomalies magnétiques en bandes symétriques ; flux de chaleur élevé à l’axe ; volcanisme effusif (basalte fluide) ; séismes peu profonds ; failles normales (distension).",
      "**Anomalies magnétiques** : en refroidissant, le basalte enregistre le sens du champ magnétique terrestre. Le champ s’inverse au cours du temps : on obtient des bandes alternées, symétriques par rapport à l’axe.",
      "**Vitesse d’expansion** = distance à l’axe ÷ âge. Conversion : **1 km/Ma = 0,1 cm/an**. L’océan s’ouvre de deux fois la « demi-vitesse » mesurée d’un seul côté.",
      "Ordres de grandeur : l’Atlantique s’ouvre de quelques centimètres par an (environ 2 à 4 cm/an), certaines dorsales du Pacifique jusqu’à environ 15 cm/an.",
      "**Failles transformantes** : elles décalent l’axe de la dorsale ; les plaques y coulissent."
    ],
    cartes: [
      ["Dorsale océanique", "Relief sous-marin en chaîne de montagnes, avec un rift à son axe, où se forme la nouvelle lithosphère océanique."],
      ["Rift", "Fossé d’effondrement limité par des failles normales, à l’axe d’une dorsale ou dans un continent qui se déchire."],
      ["Accrétion océanique", "Formation de nouvelle lithosphère océanique à l’axe de la dorsale par mise en place de magma basaltique."],
      ["Origine du magma à la dorsale", "La péridotite du manteau remonte ; la pression baisse : elle fond partiellement (fusion par décompression)."],
      ["Âge des basaltes de part et d’autre de la dorsale", "Il augmente avec la distance à l’axe, de façon symétrique : les roches les plus jeunes sont à l’axe."],
      ["Anomalies magnétiques symétriques", "Bandes de basaltes aimantés dans un sens puis dans l’autre (inversions du champ magnétique), symétriques par rapport à l’axe : preuve de l’expansion."],
      ["Type de volcanisme à la dorsale", "Effusif : lave basaltique fluide, coulées, basaltes en coussins (pillow-lavas) sous l’eau."],
      ["Séismes à la dorsale", "Nombreux mais peu profonds (foyers superficiels)."],
      ["Failles normales", "Failles de distension (étirement), typiques des rifts et des dorsales."],
      ["Rift est-africain", "Exemple de rift continental : l’Afrique de l’Est se déchire (vallée du Rift, lacs, volcans comme le Nyiragongo)."],
      ["Mer Rouge", "Un océan naissant entre l’Afrique et l’Arabie."],
      ["Conversion km/Ma → cm/an", "1 km/Ma = 100 000 cm / 1 000 000 ans = 0,1 cm/an. Exemple : 20 km/Ma = 2 cm/an."],
      ["Flux de chaleur à la dorsale", "Élevé à l’axe : le magma chaud remonte. Il diminue en s’éloignant de l’axe."],
      ["Faille transformante", "Faille qui décale l’axe d’une dorsale ; les deux plaques y glissent l’une contre l’autre (coulissage)."]
    ],
    sujets: [] },
  { id: "svt-conv", mat: "svt", groupe: "SA1 · Activités tectoniques", devoir: true, court: "Convergence des plaques",
    titre: "Séquence C : activités tectoniques et phénomènes caractéristiques des zones de convergence",
    fiche: [
      "**Subduction** : une lithosphère océanique (vieille, froide, plus dense) plonge sous une autre plaque, au niveau d’une **fosse océanique**. Exemples : les Andes (plaque Nazca sous l’Amérique du Sud), le Japon (arc insulaire).",
      "**Les indices de la subduction** : fosse océanique ; séismes de plus en plus profonds en s’éloignant de la fosse, jusqu’à environ 700 km : ils dessinent le **plan de Wadati-Benioff** ; volcanisme **explosif** (andésites) ; chaîne de montagnes ou arc volcanique ; flux de chaleur faible à la fosse, élevé sous les volcans.",
      "**Origine du magma en subduction** : la plaque qui plonge se **déshydrate** ; l’eau libérée hydrate le manteau au-dessus et abaisse sa température de fusion : la péridotite fond partiellement. Ce magma donne des **andésites** (en surface) et des **granodiorites** (en profondeur).",
      "**Volcanisme explosif** : magma visqueux, riche en gaz : explosions, nuées ardentes (exemple : la montagne Pelée en 1902).",
      "**Collision** : après la disparition complète d’un océan par subduction, deux lithosphères continentales s’affrontent : chaîne de montagnes, épaississement de la croûte (racine crustale), plis, failles inverses, chevauchements. Exemple : l’**Himalaya** (Inde contre Eurasie, depuis environ 50 millions d’années).",
      "**Obduction** : un morceau de lithosphère océanique est charrié **sur** un continent : on le retrouve sous forme d’**ophiolites** (exemple : Oman).",
      "**Déformations en compression** : plis, failles inverses, chevauchements (en distension : failles normales).",
      "En Afrique de l’Ouest, la chaîne de l’Atacora (Bénin, Togo) est un reste très érodé d’une ancienne chaîne de collision (chaîne panafricaine, vers 600 millions d’années)."
    ],
    cartes: [
      ["Subduction", "Plongée d’une lithosphère océanique sous une autre plaque, au niveau d’une fosse océanique."],
      ["Pourquoi la lithosphère océanique plonge-t-elle ?", "En vieillissant, elle se refroidit et devient plus dense que l’asthénosphère : elle s’enfonce."],
      ["Plan de Wadati-Benioff", "Plan incliné dessiné par les foyers des séismes, de plus en plus profonds (jusqu’à environ 700 km) en s’éloignant de la fosse."],
      ["Type de volcanisme de subduction", "Explosif : magma visqueux et riche en gaz, roches andésitiques, nuées ardentes."],
      ["Origine du magma de subduction", "Déshydratation de la plaque plongeante → hydratation du manteau au-dessus → fusion partielle de la péridotite."],
      ["Andésite et granodiorite", "Roches typiques des zones de subduction : l’andésite est volcanique (refroidie en surface), la granodiorite est plutonique (refroidie en profondeur)."],
      ["Collision", "Affrontement de deux lithosphères continentales après la fermeture d’un océan : formation d’une chaîne de montagnes."],
      ["Exemple de chaîne de collision", "L’Himalaya, née de la collision de l’Inde et de l’Eurasie (depuis environ 50 millions d’années)."],
      ["Exemple de chaîne de subduction", "Les Andes : la plaque Nazca plonge sous la plaque sud-américaine."],
      ["Obduction", "Charriage d’un fragment de lithosphère océanique sur un continent."],
      ["Ophiolites", "Roches de la lithosphère océanique (basaltes, gabbros, péridotites) retrouvées sur un continent : témoins d’un ancien océan."],
      ["Failles inverses et plis", "Déformations dues à la compression, typiques des zones de convergence."],
      ["Fosse océanique", "Dépression sous-marine très profonde, là où la plaque océanique commence à plonger."],
      ["Racine crustale", "Épaississement de la croûte sous une chaîne de montagnes de collision."]
    ],
    sujets: [] },
  { id: "svt-drel", mat: "svt", groupe: "SA2 · La mesure du temps", devoir: true, court: "Datation relative",
    titre: "Les méthodes de datation : la datation relative",
    fiche: [
      "**Datation relative** : ranger des événements géologiques dans l’ordre (plus ancien, plus récent), **sans** donner leur âge en années.",
      "**Principe de superposition** : dans une série non déformée, une couche est plus récente que celle qu’elle recouvre.",
      "**Principe de continuité** : une même couche a le même âge sur toute son étendue.",
      "**Principe de recoupement** : une structure (faille, filon, intrusion) est plus récente que les couches qu’elle recoupe.",
      "**Principe d’inclusion** : les morceaux (galets, fragments) inclus dans une roche sont plus anciens que cette roche.",
      "**Principe d’identité paléontologique** : deux couches qui contiennent les mêmes **fossiles stratigraphiques** ont le même âge.",
      "**Fossile stratigraphique** : espèce qui a vécu peu de temps, sur une grande surface, abondante et facile à reconnaître. Exemples : trilobites (ère primaire), ammonites (ère secondaire), nummulites (ère tertiaire).",
      "**Discordance** : surface d’érosion qui sépare des couches anciennes déformées (plissées ou basculées) de couches plus récentes horizontales. Elle raconte : dépôt → déformation → érosion → nouveau dépôt.",
      "**L’échelle des temps géologiques** est découpée en ères : Précambrien, Paléozoïque (primaire, d’environ −540 à −252 Ma), Mésozoïque (secondaire, de −252 à −66 Ma), Cénozoïque (tertiaire et quaternaire, de −66 Ma à aujourd’hui). Les limites correspondent à de grandes crises biologiques (−252 Ma : la plus grande extinction ; −66 Ma : fin des dinosaures et des ammonites)."
    ],
    cartes: [
      ["Datation relative", "Ordonner des événements géologiques (plus ancien / plus récent) sans donner d’âge en années."],
      ["Principe de superposition", "Une couche est plus récente que celle qu’elle recouvre (si la série n’est pas renversée)."],
      ["Principe de continuité", "Une couche a le même âge sur toute son étendue."],
      ["Principe de recoupement", "Une faille, un filon ou une intrusion est plus récent que les couches qu’il recoupe."],
      ["Principe d’inclusion", "Un élément inclus dans une roche est plus ancien que cette roche."],
      ["Principe d’identité paléontologique", "Deux couches qui contiennent les mêmes fossiles stratigraphiques ont le même âge."],
      ["Fossile stratigraphique : les qualités", "Courte durée de vie de l’espèce, grande répartition géographique, abondant, facile à identifier."],
      ["Trilobites, ammonites, nummulites", "Fossiles stratigraphiques de l’ère primaire (trilobites), secondaire (ammonites) et tertiaire (nummulites)."],
      ["Discordance", "Surface d’érosion entre des couches anciennes déformées et des couches récentes horizontales : dépôt, déformation, érosion, puis nouveau dépôt."],
      ["Limite primaire / secondaire", "Vers −252 millions d’années : la plus grande crise biologique de l’histoire de la vie."],
      ["Limite secondaire / tertiaire", "Vers −66 millions d’années : disparition des dinosaures et des ammonites."],
      ["Lacune de sédimentation", "Absence de dépôt (ou couches érodées) pendant une période : un « trou » dans l’enregistrement."]
    ],
    sujets: [] },
  { id: "svt-dabs", mat: "svt", groupe: "SA2 · La mesure du temps", devoir: true, court: "Datation absolue",
    titre: "Les méthodes de datation : la datation absolue (radiochronologie)",
    fiche: [
      "**Datation absolue** : donner l’âge d’une roche ou d’un fossile **en années**, grâce à la radioactivité.",
      "**Radioactivité** : un isotope **père** instable se désintègre spontanément en isotope **fils** stable, à un rythme constant qui ne dépend ni de la température ni de la pression.",
      "**Période (demi-vie) T** : durée au bout de laquelle la moitié des atomes père s’est désintégrée. Après n périodes, il reste N = @frac{N_{0}}{2^{n}}.",
      "**Loi de décroissance** : N = N_{0} e^{−λt}, avec λ = @frac{ln 2}{T}. D’où **t = @frac{1}{λ} ln(@frac{N_{0}}{N})** = @frac{T}{ln 2} ln(@frac{N_{0}}{N}).",
      "Si la roche ne contenait aucun atome fils au départ : N_{0} = P + F (père restant + fils formés), d’où t = @frac{1}{λ} ln(1 + @frac{F}{P}).",
      "**Le chronomètre démarre** quand le système se ferme : cristallisation d’une roche magmatique, mort d’un être vivant.",
      "**Carbone 14** (T = 5 730 ans) : restes d’êtres vivants récents (bois, os, charbon), jusqu’à environ 50 000 ans. Vivant, l’organisme garde le même rapport ¹⁴C/¹²C que l’atmosphère ; après sa mort, le ¹⁴C diminue.",
      "**Potassium-argon** (T ≈ 1,3 milliard d’années) : roches volcaniques. L’argon (gaz) s’échappe de la lave : le chronomètre démarre à la cristallisation.",
      "Autres couples : uranium-plomb (T ≈ 4,5 milliards d’années), rubidium-strontium (T ≈ 49 milliards d’années) pour les roches très anciennes.",
      "**Choisir le bon chronomètre** : sa période doit être du même ordre de grandeur que l’âge à mesurer. L’âge de la Terre, mesuré ainsi : environ 4,55 milliards d’années."
    ],
    cartes: [
      ["Datation absolue", "Donner l’âge d’une roche ou d’un fossile en années, grâce à la radioactivité."],
      ["Période (demi-vie) T", "Durée au bout de laquelle la moitié des atomes radioactifs (père) s’est désintégrée."],
      ["Après n périodes, il reste…", "@frac{N_{0}}{2^{n}} atomes père. Exemple : après 3 périodes, il reste 1/8 des atomes."],
      ["Loi de décroissance radioactive", "N = N_{0} e^{−λt}, avec λ = @frac{ln 2}{T}."],
      ["Formule de l’âge", "t = @frac{1}{λ} ln(@frac{N_{0}}{N}) = @frac{T}{ln 2} ln(@frac{N_{0}}{N})."],
      ["Âge avec le rapport fils / père", "Si F = 0 au départ : t = @frac{1}{λ} ln(1 + @frac{F}{P})."],
      ["Période du carbone 14", "5 730 ans. Il date des restes organiques jusqu’à environ 50 000 ans."],
      ["Quand démarre le chronomètre du carbone 14 ?", "À la mort de l’être vivant : il cesse d’échanger du carbone avec l’atmosphère."],
      ["Méthode potassium-argon", "Période d’environ 1,3 milliard d’années ; elle date les roches volcaniques (l’argon s’échappe de la lave fondue)."],
      ["Comment choisir le chronomètre ?", "Sa période doit être du même ordre de grandeur que l’âge à mesurer."],
      ["Âge de la Terre", "Environ 4,55 milliards d’années (méthode uranium-plomb, sur des météorites)."],
      ["Isotope père et isotope fils", "Le père est l’isotope radioactif qui se désintègre ; le fils est l’isotope stable qu’il produit."]
    ],
    sujets: [] }
);

Object.assign(QUIZ, {
  "svt-globe": [
    { t: "c", q: "Quelles ondes sismiques ne traversent pas les liquides ?", r: "Les ondes S", p: ["Les ondes P", "Les ondes L", "Toutes les ondes"], e: "C’est ce qui a montré que le noyau externe est liquide." },
    { t: "c", q: "La roche typique de la croûte continentale est…", r: "le granite", p: ["le basalte", "la péridotite", "le gabbro"], e: "Basalte et gabbro : croûte océanique. Péridotite : manteau." },
    { t: "c", q: "La roche typique du manteau est…", r: "la péridotite", p: ["le granite", "le basalte", "l’andésite"], e: "Olivine et pyroxènes, riche en magnésium et en fer." },
    { t: "c", q: "La discontinuité de Gutenberg sépare…", r: "le manteau et le noyau", p: ["la croûte et le manteau", "le noyau externe et la graine", "la lithosphère et l’asthénosphère"], e: "Vers 2 900 km. Croûte / manteau : le Moho. Noyau externe / graine : Lehmann." },
    { t: "c", q: "La lithosphère est formée…", r: "de la croûte et du manteau supérieur rigide", p: ["de la croûte seulement", "du manteau et du noyau", "de l’asthénosphère"], e: "Environ 100 km d’épaisseur, découpée en plaques." },
    { t: "c", q: "Les trois mouvements relatifs des plaques sont…", r: "divergence, convergence, coulissage", p: ["divergence, subduction, érosion", "convergence, rotation, chute", "accrétion, fusion, dérive"], e: "Écartement, rapprochement, glissement le long des failles transformantes." }
  ],
  "svt-div": [
    { t: "c", q: "À l’axe d’une dorsale, les roches sont…", r: "les plus jeunes", p: ["les plus anciennes", "toutes du même âge", "des granites"], e: "L’âge augmente en s’éloignant de l’axe, des deux côtés." },
    { t: "c", q: "La fusion du manteau sous la dorsale est due…", r: "à la baisse de pression quand la péridotite remonte", p: ["à l’eau apportée par une plaque qui plonge", "à la collision de deux continents", "au frottement des plaques"], e: "Fusion partielle par décompression. Piège : l’eau, c’est la subduction." },
    { t: "c", q: "Le volcanisme des dorsales est…", r: "effusif, avec des laves basaltiques fluides", p: ["explosif, avec des laves visqueuses", "inexistant", "explosif, avec des andésites"], e: "Coulées et basaltes en coussins sous l’eau." },
    { t: "c", q: "Les anomalies magnétiques de part et d’autre d’une dorsale sont…", r: "symétriques par rapport à l’axe", p: ["toutes de même sens", "plus nombreuses d’un seul côté", "dues aux séismes"], e: "Le basalte enregistre les inversions du champ magnétique en refroidissant." },
    { t: "c", q: "Les failles typiques d’un rift sont…", r: "des failles normales", p: ["des failles inverses", "des chevauchements", "des plis"], e: "Le rift s’étire (distension). Failles inverses et plis : compression." },
    { t: "c", q: "Un exemple de rift continental actuel est…", r: "le rift est-africain", p: ["la chaîne des Andes", "l’Himalaya", "la fosse des Mariannes"], e: "L’Afrique de l’Est se déchire : grands lacs, volcans, séismes." },
    { t: "v", q: "Un basalte situé à 60 km de l’axe d’une dorsale a 3 Ma. Demi-vitesse d’expansion, en cm/an ?", r: 2, p: [20, 0.2, 4], u: "cm/an", e: "60 km / 3 Ma = 20 km/Ma = 2 cm/an (1 km/Ma = 0,1 cm/an)." },
    { t: "v", q: "Si la demi-vitesse mesurée d’un côté est 2 cm/an, l’océan s’ouvre de combien de cm par an ?", r: 4, p: [2, 1, 8], u: "cm/an", e: "Les deux plaques s’écartent chacune de 2 cm/an : 4 cm/an au total." },
    { t: "c", q: "Les séismes à l’axe d’une dorsale sont…", r: "peu profonds", p: ["très profonds (jusqu’à 700 km)", "absents", "de plus en plus profonds en s’éloignant de l’axe"], e: "Les séismes profonds, en plan incliné, sont la marque des subductions." },
    { t: "c", q: "La mer Rouge est…", r: "un océan naissant", p: ["une zone de subduction", "une chaîne de collision", "un ancien océan refermé"], e: "L’Arabie s’écarte de l’Afrique." }
  ],
  "svt-conv": [
    { t: "c", q: "Le plan de Wadati-Benioff est dessiné par…", r: "les foyers des séismes de plus en plus profonds", p: ["les volcans d’une dorsale", "les anomalies magnétiques", "les failles normales d’un rift"], e: "Il plonge sous la plaque chevauchante, jusqu’à environ 700 km." },
    { t: "c", q: "La lithosphère océanique plonge en subduction car…", r: "en vieillissant, elle devient plus dense", p: ["elle est plus chaude que l’asthénosphère", "elle est plus légère que la croûte continentale", "le magma la pousse vers le bas"], e: "Elle se refroidit et s’alourdit." },
    { t: "c", q: "En zone de subduction, le manteau fond parce que…", r: "l’eau libérée par la plaque plongeante abaisse sa température de fusion", p: ["la pression diminue", "il est chauffé par le frottement", "le noyau le réchauffe"], e: "Hydratation du manteau → fusion partielle de la péridotite." },
    { t: "c", q: "Le volcanisme des zones de subduction est…", r: "explosif (andésites)", p: ["effusif (basaltes fluides)", "absent", "uniquement sous-marin"], e: "Magma visqueux et riche en gaz : nuées ardentes." },
    { t: "c", q: "L’Himalaya est une chaîne…", r: "de collision", p: ["de subduction", "de dorsale", "d’obduction"], e: "L’Inde est entrée en collision avec l’Eurasie (depuis environ 50 millions d’années)." },
    { t: "c", q: "Les Andes sont une chaîne…", r: "de subduction", p: ["de collision", "d’obduction", "de rift"], e: "La plaque Nazca plonge sous la plaque sud-américaine." },
    { t: "c", q: "Les ophiolites sont…", r: "des morceaux de lithosphère océanique sur un continent", p: ["des roches volcaniques de dorsale encore sous l’eau", "des granites de collision", "des fossiles stratigraphiques"], e: "Elles témoignent d’un ancien océan et de l’obduction." },
    { t: "c", q: "Les déformations typiques de la compression sont…", r: "les plis et les failles inverses", p: ["les failles normales", "les rifts", "les failles transformantes"], e: "Failles normales et rifts : distension." },
    { t: "c", q: "L’andésite est une roche…", r: "volcanique des zones de subduction", p: ["plutonique des dorsales", "du manteau", "sédimentaire"], e: "Sa cousine refroidie en profondeur est la granodiorite." },
    { t: "c", q: "L’obduction, c’est…", r: "le charriage de lithosphère océanique sur un continent", p: ["la plongée d’une plaque sous une autre", "l’écartement de deux plaques", "la fonte d’une plaque"], e: "Exemple : les ophiolites d’Oman." }
  ],
  "svt-drel": [
    { t: "c", q: "Une faille qui recoupe les couches 1, 2 et 3 est…", r: "plus récente que les couches 1, 2 et 3", p: ["plus ancienne que la couche 1", "du même âge que la couche 2", "impossible à dater"], e: "Principe de recoupement." },
    { t: "c", q: "Des galets de granite inclus dans un conglomérat sont…", r: "plus anciens que le conglomérat", p: ["plus récents que le conglomérat", "du même âge", "impossibles à dater"], e: "Principe d’inclusion : on n’inclut que ce qui existait déjà." },
    { t: "c", q: "Deux couches éloignées contiennent les mêmes fossiles stratigraphiques. Elles ont…", r: "le même âge", p: ["la même épaisseur", "la même roche", "des âges très différents"], e: "Principe d’identité paléontologique." },
    { t: "c", q: "Un bon fossile stratigraphique appartient à une espèce qui a vécu…", r: "peu de temps, sur une grande surface", p: ["très longtemps, sur une petite surface", "très longtemps, partout", "peu de temps, dans un seul lac"], e: "Courte durée = précision ; grande répartition = comparaisons possibles." },
    { t: "c", q: "Les ammonites sont des fossiles stratigraphiques de l’ère…", r: "secondaire (Mésozoïque)", p: ["primaire (Paléozoïque)", "tertiaire (Cénozoïque)", "quaternaire"], e: "Trilobites : primaire ; nummulites : tertiaire." },
    { t: "c", q: "Une discordance témoigne de…", r: "dépôt, déformation, érosion, puis nouveau dépôt", p: ["un séisme récent", "un dépôt continu sans interruption", "une coulée de lave"], e: "Les couches du dessous sont plus anciennes et ont été déformées puis érodées." },
    { t: "v", q: "Il y a combien de millions d’années (environ) se termine l’ère secondaire, avec la disparition des dinosaures ?", r: 66, p: [252, 541, 6], u: "millions d’années", e: "Vers −66 Ma : crise Crétacé-Paléogène. −252 Ma : fin de l’ère primaire. −541 Ma : début de l’ère primaire." },
    { t: "c", q: "La datation relative permet de…", r: "ranger des événements dans l’ordre, sans âge en années", p: ["donner l’âge exact en années", "mesurer la radioactivité", "calculer la vitesse des plaques"], e: "L’âge en années, c’est la datation absolue." }
  ],
  "svt-dabs": [
    { t: "c", q: "La période (demi-vie) d’un isotope radioactif est…", r: "la durée pour que la moitié des atomes père se désintègre", p: ["la durée pour que tous les atomes se désintègrent", "l’âge de la roche", "la moitié de l’âge de la Terre"], e: "Après une période il en reste la moitié, après deux un quart…" },
    { t: "v", q: "Il reste 25 % du carbone 14 initial dans un charbon de bois (T = 5 730 ans). Son âge, en années ?", r: 11460, p: [5730, 17190, 2865], u: "ans", e: "25 % = 1/4 = 1/2² : deux périodes, 2 × 5 730 = 11 460 ans." },
    { t: "v", q: "Il reste 12,5 % du carbone 14 initial. Combien de périodes se sont écoulées ?", r: 3, p: [2, 4, 8], e: "12,5 % = 1/8 = 1/2³." },
    { t: "c", q: "Pour dater un os de 8 000 ans, on choisit…", r: "le carbone 14", p: ["le potassium-argon", "l’uranium-plomb", "le rubidium-strontium"], e: "Période de 5 730 ans : bien adaptée à quelques milliers d’années." },
    { t: "c", q: "Pour dater un basalte de 2 millions d’années, on choisit…", r: "le potassium-argon", p: ["le carbone 14", "aucune méthode", "l’identité paléontologique"], e: "Le carbone 14 ne marche plus au-delà d’environ 50 000 ans." },
    { t: "c", q: "La formule de l’âge est…", r: "t = @frac{1}{λ} ln(@frac{N_{0}}{N})", p: ["t = λ ln(@frac{N}{N_{0}})", "t = @frac{N_{0}}{N} × T", "t = @frac{ln 2}{λN}"], e: "Avec λ = ln 2 / T." },
    { t: "c", q: "Pour le carbone 14, le chronomètre démarre…", r: "à la mort de l’organisme", p: ["à sa naissance", "à la cristallisation de la roche", "quand on trouve le fossile"], e: "Vivant, il renouvelle son carbone ; mort, le ¹⁴C décroît." },
    { t: "c", q: "L’âge de la Terre est d’environ…", r: "4,55 milliards d’années", p: ["4,55 millions d’années", "13,8 milliards d’années", "540 millions d’années"], e: "13,8 milliards d’années : l’âge de l’Univers." },
    { t: "v", q: "Combien vaut λ pour le carbone 14 (en an⁻¹, arrondi à 0,00001 près) ? On prend ln 2 ≈ 0,693.", r: 0.00012, p: [0.0012, 0.000012, 8268], tol: 0.000005, e: "λ = ln 2 / T = 0,693 / 5 730 ≈ 1,21 × 10⁻⁴ an⁻¹." }
  ]
});

Object.assign(EXOS, {
  "svt-div": [
    { id: "svt-x1", titre: "Ce que racontent les basaltes de l’Atlantique", niveau: 2, duree: 25,
      contexte: "Contexte : en cours de géographie, Afiavi apprend que l’océan Atlantique s’élargit chaque année. Elle veut le vérifier avec des données de SVT.\nDocument : âge des basaltes du plancher océanique en fonction de la distance à l’axe de la dorsale médio-atlantique.\n• côté ouest : 120 km → 6 Ma ; 80 km → 4 Ma ; 40 km → 2 Ma\n• à l’axe : 0 km → 0 Ma (roches actuelles)\n• côté est : 40 km → 2 Ma ; 80 km → 4 Ma ; 120 km → 6 Ma\n(Ma = million d’années)\nTâche : aide Afiavi à exploiter ce document.",
      questions: [
        { q: "1. Décris l’évolution de l’âge des basaltes de part et d’autre de l’axe.",
          corrige: "Le document montre que l’âge des basaltes **augmente avec la distance à l’axe** : 0 Ma à l’axe, 2 Ma à 40 km, 4 Ma à 80 km, 6 Ma à 120 km.\nCette répartition est **symétrique** : on trouve les mêmes âges à la même distance à l’est et à l’ouest.",
          retenir: "Décrire = citer des valeurs précises avec leurs unités." },
        { q: "2. Explique ces observations.",
          corrige: "Je sais qu’à l’axe de la dorsale, du magma basaltique se met en place en permanence : c’est l’**accrétion**. La nouvelle lithosphère formée s’écarte ensuite de part et d’autre de l’axe.\nDonc les roches sont d’autant plus vieilles qu’elles sont loin de l’axe, de façon symétrique : c’est une **preuve de la divergence** des deux plaques." },
        { q: "3. Calcule la vitesse d’éloignement d’une plaque par rapport à l’axe, en km/Ma puis en cm/an.", indice: "Vitesse = distance ÷ temps. 1 km/Ma = 0,1 cm/an.",
          corrige: "v = @frac{120 km}{6 Ma} = **20 km/Ma**.\n20 km/Ma = 20 × 100 000 cm ÷ 1 000 000 ans = **2 cm/an**.",
          type: "calcul", retenir: "1 km/Ma = 0,1 cm/an." },
        { q: "4. De combien l’Atlantique s’élargit-il chaque année ? Et en 1 million d’années ?",
          corrige: "Chaque plaque s’éloigne de l’axe de 2 cm/an : l’océan s’élargit de **2 × 2 = 4 cm/an**.\nEn 1 million d’années : 4 cm × 1 000 000 = 4 000 000 cm = **40 km**." },
        { q: "5. Explique l’origine du magma basaltique à l’axe de la dorsale, puis cite deux autres indices de la divergence.",
          corrige: "Sous la dorsale, la péridotite du manteau remonte ; la pression diminue, elle **fond partiellement** (fusion par décompression). Ce magma donne les basaltes et les gabbros de la croûte océanique.\nAutres indices : **anomalies magnétiques symétriques**, **flux de chaleur élevé** à l’axe, **failles normales** et rift, **séismes peu profonds**, volcanisme effusif (deux au choix)." }
      ] }
  ],
  "svt-conv": [
    { id: "svt-x2", titre: "Les séismes de la côte du Chili", niveau: 2, duree: 25,
      contexte: "Contexte : en 2010, un très fort séisme frappe le Chili. Koffi veut comprendre pourquoi cette région, au bord de l’océan Pacifique, a autant de séismes et de volcans.\nDocument : profondeur des foyers de séismes en fonction de la distance à la fosse océanique (vers l’intérieur du continent).\n• 50 km → 30 km de profondeur\n• 100 km → 70 km\n• 200 km → 140 km\n• 300 km → 210 km\n• 400 km → 280 km\n• 500 km → 350 km\nDes volcans explosifs, aux laves andésitiques, se trouvent à environ 250 km de la fosse.\nTâche : aide Koffi à expliquer l’activité de cette région.",
      questions: [
        { q: "1. Décris la répartition des foyers des séismes.",
          corrige: "Plus on s’éloigne de la fosse vers le continent, plus les foyers sont **profonds** : 30 km à 50 km de la fosse, 350 km à 500 km de la fosse.\nLes foyers s’alignent sur un **plan incliné** qui plonge sous le continent." },
        { q: "2. Comment appelle-t-on ce plan ? Que représente-t-il ?",
          corrige: "C’est le **plan de Wadati-Benioff**. Il marque la plaque océanique (Nazca) qui **plonge sous la plaque sud-américaine** : c’est une **subduction**.\nLes séismes se produisent dans la plaque rigide qui s’enfonce." },
        { q: "3. Calcule l’angle de plongement de la plaque.", indice: "tan α = profondeur ÷ distance. Prends le dernier point.",
          corrige: "tan α = @frac{350}{500} = 0,7, donc α ≈ **35°**.", type: "calcul" },
        { q: "4. Explique l’origine du magma des volcans andésitiques.",
          corrige: "En s’enfonçant, la plaque océanique se **déshydrate** (vers 100 km de profondeur). L’eau libérée **hydrate le manteau** situé au-dessus, ce qui abaisse sa température de fusion : la péridotite **fond partiellement**.\nCe magma, visqueux et riche en gaz, remonte et donne un **volcanisme explosif** (andésites).",
          retenir: "Dorsale : fusion par décompression. Subduction : fusion par hydratation." },
        { q: "5. Fais un schéma légendé de cette zone (à faire sur ta feuille), puis compare avec la liste.",
          corrige: "Ton schéma (avec un titre : « Schéma d’une zone de subduction ») doit montrer :\n• la **fosse océanique** ;\n• la **lithosphère océanique** qui plonge sous la **lithosphère continentale** ;\n• l’**asthénosphère** ;\n• les **foyers des séismes** le long du plan de Benioff ;\n• la zone de **fusion partielle** du manteau, et le **volcan** à la surface ;\n• une flèche qui indique le sens du mouvement de la plaque." }
      ] }
  ],
  "svt-drel": [
    { id: "svt-x3", titre: "Lire une coupe géologique", niveau: 2, duree: 25,
      contexte: "Contexte : lors d’une sortie, la classe observe une falaise. Le professeur en fait le schéma ci-dessous.\n@fig{coupe}\nLes couches 1, 2 et 3 sont inclinées. La couche 1 contient des trilobites, la couche 4 des ammonites. La faille F décale les couches 1, 2 et 3 mais s’arrête à la surface S. Le filon de basalte β traverse les couches 1, 2 et 4, mais pas la couche 5.\nTâche : reconstitue l’histoire de cette région.",
      questions: [
        { q: "1. Range les couches 1, 2 et 3 de la plus ancienne à la plus récente. Quel principe utilises-tu ?",
          corrige: "1, puis 2, puis 3 : chaque couche s’est déposée sur la précédente.\nC’est le **principe de superposition** (une couche est plus récente que celle qu’elle recouvre)." },
        { q: "2. La faille F est-elle plus ancienne ou plus récente que la couche 4 ? Justifie.",
          corrige: "La faille recoupe les couches 1, 2 et 3 : elle est **plus récente** qu’elles (principe de recoupement).\nElle s’arrête à la surface S et ne décale pas la couche 4 : elle est **plus ancienne que la couche 4**." },
        { q: "3. Que représente la surface S ? Que s’est-il passé avant le dépôt de la couche 4 ?",
          corrige: "S est une **discordance** : une surface d’érosion qui coupe les couches inclinées (la couche 3 disparaît à droite).\nAvant le dépôt de 4 : les couches 1 à 3 ont été **déformées** (basculées), puis **érodées**, puis la mer est revenue et a déposé la couche 4 horizontalement." },
        { q: "4. Situe la mise en place du filon β.",
          corrige: "β traverse la couche 4 : il est **plus récent que la couche 4** (recoupement).\nIl ne traverse pas la couche 5 : il est **plus ancien que la couche 5**.\nDonc β s’est mis en place entre le dépôt de 4 et celui de 5." },
        { q: "5. Reconstitue toute l’histoire, dans l’ordre.",
          corrige: "1) Dépôt de la couche 1, puis de 2, puis de 3.\n2) Basculement (déformation) des couches 1 à 3, et formation de la faille F.\n3) Érosion : formation de la surface S.\n4) Dépôt de la couche 4.\n5) Mise en place du filon de basalte β.\n6) Dépôt de la couche 5.",
          retenir: "Une chronologie se construit avec les principes : superposition, recoupement, discordance." },
        { q: "6. Grâce aux fossiles, à quelles ères appartiennent les couches 1 et 4 ?",
          corrige: "Les **trilobites** sont des fossiles stratigraphiques de l’ère **primaire** (Paléozoïque) : la couche 1 date du primaire.\nLes **ammonites** caractérisent l’ère **secondaire** (Mésozoïque) : la couche 4 date du secondaire.\nLa discordance représente donc une longue période de déformation et d’érosion." }
      ] }
  ],
  "svt-dabs": [
    { id: "svt-x4", titre: "Dater un ancien four de forgeron", niveau: 2, duree: 25,
      contexte: "Contexte : au nord du Bénin, des archéologues découvrent les restes d’un ancien four où l’on fabriquait le fer. Ils y trouvent du charbon de bois.\nDonnées : période du carbone 14 : T = 5 730 ans ; ln 2 ≈ 0,693.\nLes mesures montrent que le charbon contient 60 % du carbone 14 que contient un bois vivant (N = 0,6 N_{0}).\nTâche : aide les archéologues à dater le four.",
      questions: [
        { q: "1. Pourquoi peut-on dater ce charbon avec le carbone 14 ?",
          corrige: "Le charbon de bois vient d’un **être vivant** (un arbre). Vivant, l’arbre avait le même rapport ¹⁴C/¹²C que l’atmosphère. À sa mort, il n’échange plus de carbone : le ¹⁴C **décroît** à un rythme connu.\nDe plus, le four est récent (quelques milliers d’années) : c’est dans la plage du carbone 14 (jusqu’à environ 50 000 ans)." },
        { q: "2. Sans calcul : l’âge est-il plus ou moins grand qu’une période ? Justifie.",
          corrige: "Il reste 60 % du carbone 14, donc **plus de la moitié** : moins d’une période s’est écoulée.\nL’âge est **inférieur à 5 730 ans**." },
        { q: "3. Calcule la constante radioactive λ.",
          corrige: "λ = @frac{ln 2}{T} = @frac{0,693}{5 730} ≈ **1,21 × 10⁻⁴ an⁻¹**.", type: "calcul" },
        { q: "4. Calcule l’âge du charbon.", indice: "t = (1/λ) × ln(N₀/N), avec N₀/N = 1/0,6.",
          corrige: "t = @frac{1}{λ} ln(@frac{N_{0}}{N}) = @frac{5 730}{0,693} × ln(@frac{1}{0,6})\n= 8 268 × 0,511 ≈ **4 220 ans** (environ 4 200 ans).\nLe four a fonctionné il y a environ 4 200 ans.", type: "calcul",
          retenir: "Toujours vérifier la cohérence : ici, moins d’une période, comme prévu." },
        { q: "5. Un autre échantillon ne contient plus que 25 % du carbone 14 initial. Son âge ?",
          corrige: "25 % = @frac{1}{4} = @frac{1}{2^{2}} : **2 périodes** se sont écoulées.\nt = 2 × 5 730 = **11 460 ans**." },
        { q: "6. Pourrait-on dater avec le carbone 14 une coulée de basalte de 3 millions d’années ? Quelle méthode choisir ?",
          corrige: "**Non** : le basalte n’est pas d’origine vivante, et 3 millions d’années, c’est bien plus que 50 000 ans (il ne resterait plus de ¹⁴C mesurable).\nOn choisit le **potassium-argon** (période d’environ 1,3 milliard d’années), adapté aux roches volcaniques." }
      ] }
  ]
});
