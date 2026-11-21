/* ---------------- FRANÇAIS · 1ère D ----------------
   SA1 · Séquence 5 : le commentaire composé.
   Textes d’entraînement du domaine public (Hugo 1856, Baudelaire 1861, Rimbaud 1870, La Fontaine 1668). */
const TXT_DEMAIN = "Demain, dès l’aube, à l’heure où blanchit la campagne,\nJe partirai. Vois-tu, je sais que tu m’attends.\nJ’irai par la forêt, j’irai par la montagne.\nJe ne puis demeurer loin de toi plus longtemps.\n\nJe marcherai les yeux fixés sur mes pensées,\nSans rien voir au dehors, sans entendre aucun bruit,\nSeul, inconnu, le dos courbé, les mains croisées,\nTriste, et le jour pour moi sera comme la nuit.\n\nJe ne regarderai ni l’or du soir qui tombe,\nNi les voiles au loin descendant vers Harfleur,\nEt quand j’arriverai, je mettrai sur ta tombe\nUn bouquet de houx vert et de bruyère en fleur.";
const TXT_ALBATROS = "Souvent, pour s’amuser, les hommes d’équipage\nPrennent des albatros, vastes oiseaux des mers,\nQui suivent, indolents compagnons de voyage,\nLe navire glissant sur les gouffres amers.\n\nÀ peine les ont-ils déposés sur les planches,\nQue ces rois de l’azur, maladroits et honteux,\nLaissent piteusement leurs grandes ailes blanches\nComme des avirons traîner à côté d’eux.\n\nCe voyageur ailé, comme il est gauche et veule !\nLui, naguère si beau, qu’il est comique et laid !\nL’un agace son bec avec un brûle-gueule,\nL’autre mime, en boitant, l’infirme qui volait !\n\nLe Poète est semblable au prince des nuées\nQui hante la tempête et se rit de l’archer ;\nExilé sur le sol au milieu des huées,\nSes ailes de géant l’empêchent de marcher.";
const TXT_DORMEUR = "C’est un trou de verdure où chante une rivière\nAccrochant follement aux herbes des haillons\nD’argent ; où le soleil, de la montagne fière,\nLuit : c’est un petit val qui mousse de rayons.\n\nUn soldat jeune, bouche ouverte, tête nue,\nEt la nuque baignant dans le frais cresson bleu,\nDort ; il est étendu dans l’herbe, sous la nue,\nPâle dans son lit vert où la lumière pleut.\n\nLes pieds dans les glaïeuls, il dort. Souriant comme\nSourirait un enfant malade, il fait un somme :\nNature, berce-le chaudement : il a froid.\n\nLes parfums ne font pas frissonner sa narine ;\nIl dort dans le soleil, la main sur sa poitrine\nTranquille. Il a deux trous rouges au côté droit.";
const TXT_LOUP = "La raison du plus fort est toujours la meilleure :\nNous l’allons montrer tout à l’heure.\nUn Agneau se désaltérait\nDans le courant d’une onde pure.\nUn Loup survient à jeun, qui cherchait aventure,\nEt que la faim en ces lieux attirait.\n« Qui te rend si hardi de troubler mon breuvage ?\nDit cet animal plein de rage :\nTu seras châtié de ta témérité.\n— Sire, répond l’Agneau, que Votre Majesté\nNe se mette pas en colère ;\nMais plutôt qu’elle considère\nQue je me vas désaltérant\nDans le courant,\nPlus de vingt pas au-dessous d’Elle,\nEt que par conséquent, en aucune façon,\nJe ne puis troubler sa boisson.\n— Tu la troubles, reprit cette bête cruelle,\nEt je sais que de moi tu médis l’an passé.\n— Comment l’aurais-je fait si je n’étais pas né ?\nReprit l’Agneau ; je tette encor ma mère.\n— Si ce n’est toi, c’est donc ton frère.\n— Je n’en ai point. — C’est donc quelqu’un des tiens ;\nCar vous ne m’épargnez guère,\nVous, vos bergers, et vos chiens.\nOn me l’a dit : il faut que je me venge. »\nLà-dessus, au fond des forêts,\nLe Loup l’emporte, et puis le mange,\nSans autre forme de procès.";

METHODES.push(
  { id: "m-fr-commentaire", mat: "francais", exo: "fr-commentaire", titre: "Français : le commentaire composé",
    intro: "Commenter, c’est montrer **ce qui fait l’intérêt du texte** en reliant le **fond** (ce qu’il dit) et la **forme** (comment il le dit). On ne raconte pas le texte : on l’analyse, en 2 ou 3 **centres d’intérêt**.",
    etapes: [
      ["Lire et questionner (au brouillon)", "Qui parle ? À qui ? De quoi ? Comment ? Dans quel but ? Repère le genre (poème, récit, fable), le registre (lyrique, pathétique, comique…), les champs lexicaux, les temps, les figures de style."],
      ["Trouver 2 centres d’intérêt", "Deux grandes idées sur le texte (par exemple : « un tableau paisible » / « une dénonciation de la guerre »). Classe tes remarques du brouillon dans l’un ou l’autre."],
      ["L’introduction (4 éléments)", "1) L’amorce : l’auteur, l’œuvre, l’époque ou le courant. 2) La présentation du texte : titre, genre, thème. 3) L’idée générale. 4) L’annonce des centres d’intérêt."],
      ["Le développement", "Pour chaque idée : une affirmation, un procédé nommé, une citation (avec le vers ou la ligne), puis l’interprétation : l’effet produit. Une petite introduction et une transition pour chaque centre d’intérêt."],
      ["La conclusion", "Le bilan des centres d’intérêt, une appréciation personnelle justifiée, puis une ouverture (un autre texte, un autre auteur)."]
    ],
    pieges: ["Paraphraser : répéter le texte avec d’autres mots", "Faire un catalogue de procédés sans dire leur effet", "Séparer le fond et la forme (une partie « idées », une partie « style »)", "Citer sans guillemets ni numéro de vers"],
    exemple: "Exemple d’idée bien rédigée (sur « Le Dormeur du val ») : Le poète présente d’abord la nature comme un lieu plein de vie. La **personnification** « où chante une rivière » (v. 1) donne à l’eau une voix joyeuse, et le verbe « mousse » (v. 4) fait du soleil une matière vivante et pétillante. Ce décor accueillant rend la découverte finale de la mort plus brutale." }
);

CHAPITRES.push(
  { id: "fr-methode", mat: "francais", groupe: "SA1 · Séquence 5 · Le commentaire composé", devoir: true, court: "La méthode du commentaire composé",
    titre: "Le commentaire composé : la démarche, l’introduction, le développement, la conclusion",
    fiche: [
      "**Définition** : le commentaire composé est une **explication organisée** d’un texte, autour de 2 ou 3 **centres d’intérêt**. Il relie toujours le fond (le sens) et la forme (les procédés).",
      "**Le travail au brouillon (le plus important)** : 1) lire plusieurs fois ; 2) répondre aux questions : qui parle, à qui, de quoi, comment, pourquoi ; 3) relever les procédés (champs lexicaux, figures de style, temps, rythme, sonorités) ; 4) regrouper ces remarques en 2 centres d’intérêt.",
      "**L’introduction** : amorce (auteur, œuvre, époque) → présentation du texte (titre, genre, thème) → idée générale → annonce des centres d’intérêt. Exemple d’annonce : « Nous verrons d’abord…, puis… ».",
      "**Le développement** : chaque centre d’intérêt a une phrase d’introduction, 2 ou 3 idées, une transition. Chaque idée suit le schéma **affirmation → procédé → citation → interprétation**.",
      "**La citation** : entre guillemets, courte, avec le numéro du vers ou de la ligne entre parenthèses : « Je partirai » (v. 2).",
      "**La conclusion** : bilan (rappel des centres d’intérêt), appréciation personnelle justifiée, ouverture (un autre texte sur le même thème).",
      "**Les verbes utiles** : le poète **souligne**, **met en valeur**, **suggère**, **insiste sur**, **traduit**, **dénonce**… Évite « on voit que » répété partout."
    ],
    cartes: [
      ["Commentaire composé : définition", "Une explication organisée du texte en 2 ou 3 centres d’intérêt, qui relie le fond (le sens) et la forme (les procédés)."],
      ["Les 4 éléments de l’introduction", "Amorce, présentation du texte, idée générale, annonce des centres d’intérêt."],
      ["Amorce", "Première phrase de l’introduction : elle situe l’auteur, l’œuvre, l’époque ou le courant littéraire."],
      ["Centre d’intérêt", "Une grande idée qui dit ce qui fait l’intérêt du texte, développée en plusieurs sous-parties appuyées sur des procédés."],
      ["Le schéma d’une idée bien rédigée", "Affirmation → procédé nommé → citation (avec le vers) → interprétation (l’effet produit)."],
      ["Paraphrase", "Erreur qui consiste à répéter le texte avec d’autres mots au lieu de l’analyser."],
      ["Comment citer", "Entre guillemets, une citation courte, suivie du vers ou de la ligne : « Je partirai » (v. 2)."],
      ["Les 3 temps de la conclusion", "Bilan des centres d’intérêt, appréciation personnelle, ouverture."],
      ["Les questions à se poser au brouillon", "Qui parle ? À qui ? De quoi ? Comment ? Dans quel but ?"],
      ["Transition", "Phrase qui résume la partie finie et annonce la suivante."]
    ],
    sujets: [
      { type: "fr-commentaire", texte: "Fais le commentaire composé de ce poème de Victor Hugo.", support: TXT_DEMAIN, source: "Victor Hugo, « Demain, dès l’aube… », Les Contemplations, 1856. Hugo écrit ce poème pour l’anniversaire de la mort de sa fille Léopoldine, noyée en 1843.",
        modele: "**Introduction** : Victor Hugo (1802-1885), grand poète romantique, publie Les Contemplations en 1856. Le recueil est marqué par la mort de sa fille Léopoldine, noyée en 1843. Dans « Demain, dès l’aube… », trois quatrains en alexandrins, le poète annonce un voyage vers une personne aimée. Nous verrons d’abord que ce poème se présente comme un voyage impatient vers l’être aimé, puis qu’il se révèle être une marche de deuil.\n\n**I. Un voyage impatient vers l’être aimé**\n• Un départ décidé : le **futur** de certitude (« Je partirai », v. 2 ; « J’irai », v. 3) et l’indication précise du temps (« dès l’aube », v. 1) montrent une volonté ferme.\n• Un dialogue intime : l’**apostrophe** « Vois-tu » (v. 2) et le tutoiement installent une relation affectueuse ; le lecteur croit à un rendez-vous amoureux.\n• L’impatience : l’**anaphore** « J’irai par… j’irai par » (v. 3) et la négation « Je ne puis demeurer loin de toi plus longtemps » (v. 4) traduisent l’urgence de retrouver l’autre.\n\n**II. Une marche de deuil vers une tombe**\n• Un marcheur coupé du monde : les **négations** (« Sans rien voir… sans entendre aucun bruit », v. 6) et l’**énumération** « Seul, inconnu, le dos courbé, les mains croisées » (v. 7) peignent un homme accablé.\n• La tristesse : l’**antithèse** « le jour pour moi sera comme la nuit » (v. 8) montre que la douleur efface la lumière ; il refuse même la beauté du paysage (« l’or du soir », v. 9).\n• La révélation finale : le mot « tombe » (v. 11), placé à la rime, transforme le voyage en pèlerinage. Le « bouquet de houx vert et de bruyère en fleur » (v. 12), plantes qui restent vertes, symbolise un amour fidèle, plus fort que la mort.\n\n**Conclusion** : ce poème lyrique joue sur l’attente du lecteur : le rendez-vous amoureux est en réalité une visite au tombeau de sa fille. La simplicité du langage rend l’émotion plus forte. On peut le rapprocher d’un autre poème du même recueil, « À Villequier », où Hugo parle aussi de la mort de sa fille." },
      { type: "fr-commentaire", texte: "Fais le commentaire composé de ce poème d’Arthur Rimbaud.", support: TXT_DORMEUR, source: "Arthur Rimbaud, « Le Dormeur du val », octobre 1870, écrit pendant la guerre franco-prussienne.",
        modele: "**Introduction** : Arthur Rimbaud (1854-1891) écrit « Le Dormeur du val » en 1870, à seize ans, pendant la guerre entre la France et la Prusse. Ce sonnet présente un jeune soldat endormi dans une nature accueillante. Nous verrons d’abord que le poème peint un tableau paisible et lumineux, puis qu’il révèle la mort et dénonce la guerre.\n\n**I. Un tableau paisible et lumineux**\n• Une nature vivante : les **personnifications** « où chante une rivière » (v. 1) et « la montagne fière » (v. 3) animent le paysage ; le verbe « mousse » (v. 4) rend la lumière presque palpable.\n• Des couleurs douces : « verdure » (v. 1), « argent » (v. 3), « cresson bleu » (v. 6), « lit vert » (v. 8) composent un tableau harmonieux.\n• Un soldat au repos : le verbe « dort », répété (v. 7, 9, 13), et la **comparaison** « Souriant comme / Sourirait un enfant » (v. 9-10) présentent un jeune homme innocent et tranquille.\n\n**II. La révélation de la mort et la dénonciation de la guerre**\n• Des indices inquiétants : « Pâle » (v. 8), « enfant malade » (v. 10), « il a froid » (v. 11), « Les parfums ne font pas frissonner sa narine » (v. 12) : le lecteur comprend peu à peu.\n• La chute : le dernier vers « Il a deux trous rouges au côté droit » révèle brutalement la mort. Le rouge du sang contraste avec les couleurs douces du début.\n• Une dénonciation de la guerre : le poète ne décrit aucun combat, mais montre une jeune vie détruite ; l’**apostrophe** « Nature, berce-le chaudement » (v. 11) en fait une mère impuissante.\n\n**Conclusion** : par le contraste entre la beauté de la nature et la mort du soldat, Rimbaud dénonce l’absurdité de la guerre sans la nommer. La chute rend ce message inoubliable. On peut rapprocher ce sonnet des poèmes de guerre comme « Le Mal » du même Rimbaud." }
    ] },
  { id: "fr-procedes", mat: "francais", groupe: "SA1 · Séquence 5 · Le commentaire composé", devoir: true, court: "Les procédés d’écriture",
    titre: "Les outils d’analyse : figures de style, versification, registres",
    fiche: [
      "**Figures d’analogie** : la **comparaison** (avec un outil : comme, tel, semblable à) ; la **métaphore** (sans outil) ; la **personnification** (une chose agit comme un humain) ; l’**allégorie** (une idée représentée par une image concrète).",
      "**Figures d’insistance** : l’**anaphore** (même mot en début de vers ou de phrase) ; l’**hyperbole** (exagération) ; la **gradation** (termes de force croissante) ; l’**énumération** ou **accumulation**.",
      "**Figures d’opposition** : l’**antithèse** (deux mots opposés rapprochés) ; l’**oxymore** (deux mots contraires collés : « une obscure clarté ») ; le **chiasme** (structure en miroir ABBA).",
      "**Figures d’atténuation** : la **litote** (dire moins pour suggérer plus : « Va, je ne te hais point ») ; l’**euphémisme** (adoucir une réalité dure : « il nous a quittés »). **Périphrase** : désigner par une expression (« le roi des animaux » pour le lion).",
      "**Sonorités** : **allitération** (répétition d’une consonne) ; **assonance** (répétition d’une voyelle).",
      "**Versification** : alexandrin (12 syllabes), décasyllabe (10), octosyllabe (8). Rimes **plates** (AABB), **croisées** (ABAB), **embrassées** (ABBA). **Sonnet** : 2 quatrains et 2 tercets. **Enjambement** : la phrase continue au vers suivant ; **rejet** : un mot court rejeté au début du vers suivant, mis en valeur.",
      "**Registres** : **lyrique** (expression des sentiments personnels), **pathétique** (émouvoir, faire pitié), **tragique** (fatalité, mort), **épique** (exploits héroïques), **comique**, **satirique** (se moquer pour critiquer), **polémique** (attaquer), **réaliste**, **fantastique**, **didactique** (enseigner).",
      "**Énonciation et récit** : qui parle (1re ou 3e personne) ; la **focalisation** : interne (on voit par les yeux d’un personnage), externe (de l’extérieur), zéro (narrateur qui sait tout). Les temps : imparfait (description, habitude), passé simple (actions de premier plan), présent de narration (rend la scène vivante)."
    ],
    cartes: [
      ["Comparaison", "Rapprochement de deux éléments avec un outil de comparaison (comme, tel, pareil à). Ex. : « le jour pour moi sera comme la nuit »."],
      ["Métaphore", "Rapprochement de deux éléments sans outil de comparaison. Ex. : « ces rois de l’azur » pour les albatros."],
      ["Personnification", "Une chose ou un animal est présenté comme une personne. Ex. : « où chante une rivière »."],
      ["Allégorie", "Une idée abstraite représentée par une image concrète. Ex. : l’albatros, image du poète."],
      ["Anaphore", "Répétition d’un même mot en début de vers ou de phrase. Ex. : « J’irai par la forêt, j’irai par la montagne »."],
      ["Hyperbole", "Exagération pour frapper l’esprit. Ex. : « mourir de rire »."],
      ["Gradation", "Suite de termes de force croissante (ou décroissante). Ex. : « Va, cours, vole »."],
      ["Antithèse", "Rapprochement de deux idées opposées. Ex. : « le jour pour moi sera comme la nuit »."],
      ["Oxymore", "Deux mots de sens contraire réunis dans une même expression. Ex. : « cette obscure clarté »."],
      ["Chiasme", "Construction en miroir (A B B A). Ex. : « Il faut manger pour vivre et non pas vivre pour manger »."],
      ["Litote", "Dire moins pour faire entendre plus. Ex. : « Va, je ne te hais point » (= je t’aime)."],
      ["Euphémisme", "Atténuer une réalité pénible. Ex. : « il s’est éteint » pour « il est mort »."],
      ["Périphrase", "Remplacer un mot par une expression qui le décrit. Ex. : « le roi des animaux » pour le lion."],
      ["Allitération et assonance", "Allitération : répétition d’une consonne. Assonance : répétition d’une voyelle."],
      ["Alexandrin", "Vers de 12 syllabes, souvent coupé en deux hémistiches de 6 par la césure."],
      ["Rimes plates, croisées, embrassées", "Plates : AABB. Croisées : ABAB. Embrassées : ABBA."],
      ["Sonnet", "Poème de 14 vers : deux quatrains puis deux tercets."],
      ["Enjambement et rejet", "Enjambement : la phrase déborde sur le vers suivant. Rejet : un mot court rejeté au début du vers suivant, ce qui le met en valeur."],
      ["Registre lyrique", "Expression des sentiments personnels (amour, deuil, nostalgie), souvent à la 1re personne."],
      ["Registre pathétique", "Vise à émouvoir le lecteur, à susciter la pitié."],
      ["Registre satirique", "Se moquer de quelqu’un ou d’une société pour la critiquer."],
      ["Registre épique", "Raconte des exploits héroïques avec exagération et grandeur."],
      ["Focalisation interne", "Le lecteur voit la scène à travers les yeux et les pensées d’un personnage."],
      ["Présent de narration", "Présent employé dans un récit au passé pour rendre la scène plus vivante."]
    ],
    sujets: [
      { type: "fr-commentaire", texte: "Fais le commentaire composé de ce poème de Baudelaire.", support: TXT_ALBATROS, source: "Charles Baudelaire, « L’Albatros », Les Fleurs du mal, 1861.",
        modele: "**Introduction** : Charles Baudelaire (1821-1867) publie Les Fleurs du mal en 1857, puis une deuxième édition en 1861 où figure « L’Albatros ». Dans ces quatre quatrains en alexandrins, il raconte comment des marins capturent un grand oiseau de mer pour s’en moquer. Nous verrons d’abord le récit d’une humiliation cruelle, puis l’allégorie du poète incompris.\n\n**I. Le récit d’une humiliation cruelle**\n• Un oiseau majestueux : les **périphrases** et **métaphores** « vastes oiseaux des mers » (v. 2), « rois de l’azur » (v. 6) soulignent sa grandeur dans le ciel.\n• Une chute brutale : sur le pont, ces oiseaux deviennent « maladroits et honteux » (v. 6) ; la **comparaison** « Comme des avirons » (v. 8) montre que ses ailes, si belles en vol, deviennent un poids ridicule.\n• La cruauté des marins : ils agissent « pour s’amuser » (v. 1) ; les exclamations et l’**antithèse** « naguère si beau, qu’il est comique et laid ! » (v. 10) traduisent le contraste entre la grandeur passée et l’humiliation présente.\n\n**II. Une allégorie du poète incompris**\n• La comparaison finale : « Le Poète est semblable au prince des nuées » (v. 13) révèle le sens du poème : l’albatros représente le poète.\n• La supériorité du poète : comme l’oiseau dans la tempête, il « se rit de l’archer » (v. 14) dans le monde de l’imagination.\n• Son exclusion dans la société : « Exilé sur le sol au milieu des huées » (v. 15), il est moqué par les hommes ordinaires ; le dernier vers, « Ses ailes de géant l’empêchent de marcher », montre que son génie le rend maladroit dans la vie quotidienne.\n\n**Conclusion** : à travers un récit simple, Baudelaire construit une allégorie : le poète, génial dans le monde de l’art, est incompris et rejeté par la foule. Cette image du poète maudit se retrouve chez Verlaine et Rimbaud." },
      { type: "fr-commentaire", texte: "Fais le commentaire composé de cette fable de La Fontaine.", support: TXT_LOUP, source: "Jean de La Fontaine, « Le Loup et l’Agneau », Fables, livre I, 1668.",
        modele: "**Introduction** : Jean de La Fontaine (1621-1695) publie ses Fables à partir de 1668 ; il y met en scène des animaux pour critiquer la société de son temps. Dans « Le Loup et l’Agneau », un loup affamé accuse un agneau avant de le dévorer. Nous verrons d’abord un récit vivant et théâtral, puis une leçon critique sur la loi du plus fort.\n\n**I. Un récit vivant et théâtral**\n• Une mise en scène rapide : le **présent de narration** « Un Loup survient » (v. 5) rend la scène immédiate ; les vers de longueurs variées donnent du rythme.\n• Un dialogue comme au théâtre : les tirets et les répliques opposent un loup agressif (« animal plein de rage », v. 8 ; menaces « Tu seras châtié », v. 9) et un agneau poli (« Sire », « Votre Majesté », v. 10).\n• Des personnages contrastés : l’agneau raisonne avec logique (« Plus de vingt pas au-dessous d’Elle », v. 15 ; « si je n’étais pas né ? », v. 20), le loup accumule des accusations absurdes (« c’est donc ton frère », v. 22).\n\n**II. Une leçon critique sur la loi du plus fort**\n• Une morale annoncée dès le début : « La raison du plus fort est toujours la meilleure » (v. 1) ; le récit va le « montrer ».\n• Un faux procès : le loup cherche des prétextes ; chaque argument de l’agneau est vrai, mais inutile : la force l’emporte sur la justice.\n• Une chute brutale : « Le Loup l’emporte, et puis le mange, / Sans autre forme de procès » (v. 28-29) : ces vers courts et secs dénoncent l’injustice des puissants qui se donnent l’apparence du droit.\n\n**Conclusion** : sous la forme plaisante d’une fable, La Fontaine critique les puissants de son temps qui écrasent les faibles. La morale reste actuelle : la force sans justice est tyrannie. On peut rapprocher cette fable des contes africains où le lièvre, petit et rusé, triomphe par l’intelligence." }
    ] }
);

Object.assign(QUIZ, {
  "fr-methode": [
    { t: "c", q: "Quels sont les 4 éléments de l’introduction d’un commentaire composé ?", r: "amorce, présentation du texte, idée générale, annonce des centres d’intérêt", p: ["résumé, plan, citation, conclusion", "biographie complète de l’auteur, résumé, avis, plan", "titre, thèse, antithèse, synthèse"], e: "Dans cet ordre." },
    { t: "c", q: "Une idée bien rédigée dans un commentaire suit le schéma…", r: "affirmation → procédé → citation → interprétation", p: ["citation → résumé → avis", "procédé → procédé → procédé", "résumé → morale → ouverture"], e: "Sans interprétation (l’effet produit), on fait un catalogue de procédés." },
    { t: "c", q: "La paraphrase, c’est…", r: "répéter le texte avec d’autres mots, sans l’analyser", p: ["analyser un procédé", "citer le texte entre guillemets", "faire une transition"], e: "C’est l’erreur la plus fréquente : elle rapporte très peu de points." },
    { t: "c", q: "Comment cite-t-on correctement un poème ?", r: "« Je partirai » (v. 2)", p: ["Je partirai, comme dit le poète", "« Je partirai »", "(v. 2) Je partirai"], e: "Entre guillemets, avec le numéro du vers entre parenthèses." },
    { t: "c", q: "La conclusion d’un commentaire contient…", r: "un bilan, une appréciation et une ouverture", p: ["un nouveau centre d’intérêt", "le résumé du texte", "la biographie de l’auteur"], e: "On ne lance pas d’idée nouvelle dans la conclusion." },
    { t: "c", q: "Dans un commentaire composé, le fond et la forme…", r: "sont étudiés ensemble, dans chaque partie", p: ["sont étudiés dans deux parties séparées", "n’ont pas d’importance", "sont étudiés seulement en conclusion"], e: "On montre comment la forme (procédés) sert le sens (fond)." },
    { t: "c", q: "Un centre d’intérêt, c’est…", r: "une grande idée sur ce qui fait l’intérêt du texte", p: ["un passage recopié", "le résumé d’un paragraphe", "une figure de style"], e: "Il s’appuie ensuite sur plusieurs procédés." }
  ],
  "fr-procedes": [
    { t: "c", q: "« Le jour pour moi sera comme la nuit » (Hugo) contient…", r: "une comparaison et une antithèse", p: ["une métaphore et une litote", "une anaphore", "un oxymore"], e: "« comme » : comparaison ; jour / nuit : antithèse." },
    { t: "c", q: "« Ces rois de l’azur » (Baudelaire, pour les albatros) est…", r: "une métaphore", p: ["une comparaison", "une litote", "une anaphore"], e: "Pas d’outil de comparaison : c’est une métaphore (et une périphrase)." },
    { t: "c", q: "« Où chante une rivière » (Rimbaud) est…", r: "une personnification", p: ["une hyperbole", "une antithèse", "une litote"], e: "La rivière « chante » comme une personne." },
    { t: "c", q: "« Va, je ne te hais point » (Corneille) est…", r: "une litote", p: ["une hyperbole", "un euphémisme", "une antithèse"], e: "Dire moins (je ne te hais point) pour faire entendre plus (je t’aime)." },
    { t: "c", q: "« Cette obscure clarté qui tombe des étoiles » (Corneille) contient…", r: "un oxymore", p: ["une anaphore", "une comparaison", "une litote"], e: "Deux mots contraires réunis : obscure / clarté." },
    { t: "c", q: "« J’irai par la forêt, j’irai par la montagne » contient…", r: "une anaphore", p: ["un chiasme", "une litote", "un oxymore"], e: "Répétition de « j’irai par » en tête de groupe." },
    { t: "c", q: "« Il s’est éteint » pour « il est mort » est…", r: "un euphémisme", p: ["une hyperbole", "une métaphore filée", "une antithèse"], e: "On adoucit une réalité pénible." },
    { t: "c", q: "« Il faut manger pour vivre et non pas vivre pour manger » est…", r: "un chiasme", p: ["une anaphore", "une gradation", "une litote"], e: "Structure en miroir : manger / vivre / vivre / manger." },
    { t: "c", q: "Des rimes ABAB sont…", r: "croisées", p: ["plates", "embrassées", "suivies"], e: "Plates : AABB ; embrassées : ABBA." },
    { t: "v", q: "Combien de syllabes compte un alexandrin ?", r: 12, p: [10, 8, 14], e: "Souvent deux hémistiches de 6 syllabes." },
    { t: "c", q: "Un sonnet est composé de…", r: "deux quatrains et deux tercets", p: ["quatre quatrains", "trois quatrains et un distique", "deux tercets et deux quatrains, dans cet ordre"], e: "14 vers en tout. « Le Dormeur du val » est un sonnet." },
    { t: "c", q: "Le registre qui exprime les sentiments personnels du poète est…", r: "le registre lyrique", p: ["le registre épique", "le registre satirique", "le registre didactique"], e: "Exemple : « Demain, dès l’aube… »." },
    { t: "c", q: "Le registre qui cherche à émouvoir, à faire pitié, est…", r: "le registre pathétique", p: ["le registre comique", "le registre polémique", "le registre fantastique"], e: "Tragique : fatalité, mort inévitable ; pathétique : pitié." },
    { t: "c", q: "La répétition d’une même consonne dans un vers s’appelle…", r: "une allitération", p: ["une assonance", "une anaphore", "une rime"], e: "L’assonance répète une voyelle." },
    { t: "c", q: "Quand la phrase continue au vers suivant, c’est…", r: "un enjambement", p: ["une césure", "une rime", "un hémistiche"], e: "Si un mot court est rejeté au début du vers suivant, c’est un rejet." },
    { t: "c", q: "« Le roi des animaux » pour le lion est…", r: "une périphrase", p: ["une litote", "une antithèse", "une hyperbole"], e: "On désigne par une expression qui le caractérise." }
  ]
});

Object.assign(EXOS, {
  "fr-procedes": [
    { id: "fr-x1", titre: "Repérer les procédés et dire leur effet", niveau: 1, duree: 15,
      contexte: "Pour chaque citation : nomme le procédé, puis explique en une phrase l’effet produit. C’est exactement ce qu’on attend dans chaque idée d’un commentaire composé.",
      questions: [
        { q: "1. « J’irai par la forêt, j’irai par la montagne. » (Hugo)",
          corrige: "**Anaphore** de « j’irai par ». Effet : elle traduit la détermination et l’impatience du poète : aucun obstacle ne l’arrêtera." },
        { q: "2. « Seul, inconnu, le dos courbé, les mains croisées » (Hugo)",
          corrige: "**Énumération** (accumulation) de groupes courts. Effet : elle peint un homme accablé, replié sur sa douleur, isolé du monde." },
        { q: "3. « Comme des avirons traîner à côté d’eux » (Baudelaire, à propos des ailes de l’albatros)",
          corrige: "**Comparaison** (outil « comme »). Effet : les ailes, si belles en vol, deviennent des objets lourds et ridicules : l’oiseau est humilié." },
        { q: "4. « Lui, naguère si beau, qu’il est comique et laid ! » (Baudelaire)",
          corrige: "**Antithèse** (beau / laid) et **phrase exclamative**. Effet : elle souligne le contraste entre la grandeur passée et l’humiliation présente." },
        { q: "5. « Il a deux trous rouges au côté droit. » (Rimbaud, dernier vers)",
          corrige: "**Chute** du sonnet, avec la couleur rouge et un **euphémisme** (« deux trous » pour des blessures par balles). Effet : la mort est révélée brutalement, ce qui dénonce la guerre avec force." },
        { q: "6. « Le Loup l’emporte, et puis le mange, / Sans autre forme de procès. » (La Fontaine)",
          corrige: "Vers **courts** et **rythme rapide**, avec l’expression ironique « sans autre forme de procès ». Effet : la fin brutale montre que la discussion n’était qu’une comédie : le fort écrase le faible." }
      ] },
    { id: "fr-x2", titre: "Construire l’introduction et le plan", niveau: 2, duree: 20,
      contexte: "Texte : « Le Dormeur du val » d’Arthur Rimbaud (octobre 1870), à lire dans les sujets de rédaction ou dans ton manuel.\nTâche : préparer au brouillon l’introduction et le plan du commentaire.",
      questions: [
        { q: "1. Écris une amorce et la présentation du texte.",
          corrige: "Amorce : « Arthur Rimbaud (1854-1891), poète précoce, écrit ses premiers poèmes à seize ans, pendant la guerre franco-prussienne de 1870. »\nPrésentation : « Dans “Le Dormeur du val”, un sonnet en alexandrins, il décrit un jeune soldat étendu dans un vallon ensoleillé. »" },
        { q: "2. Formule l’idée générale du poème en une phrase.",
          corrige: "« Derrière la description d’un paysage paisible où un soldat semble dormir, le poète révèle peu à peu sa mort et dénonce la guerre. »" },
        { q: "3. Propose deux centres d’intérêt et annonce-les.",
          corrige: "I. Un tableau paisible et lumineux de la nature.\nII. La révélation de la mort et la dénonciation de la guerre.\nAnnonce : « Nous verrons d’abord que le poème peint un tableau paisible et lumineux, puis qu’il révèle la mort du soldat et dénonce la guerre. »",
          retenir: "L’annonce reprend exactement les deux centres d’intérêt." },
        { q: "4. Pour le centre d’intérêt II, trouve trois citations et leur procédé.",
          corrige: "• « Souriant comme / Sourirait un enfant malade » (v. 9-10) : **comparaison** qui annonce la maladie, la faiblesse.\n• « Nature, berce-le chaudement : il a froid » (v. 11) : **apostrophe** et **personnification** de la nature, comme une mère.\n• « Il a deux trous rouges au côté droit » (v. 14) : **chute** brutale, couleur du sang." }
      ] }
  ]
});
