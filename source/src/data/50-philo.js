/* ---------------- PHILOSOPHIE · 1ère D ----------------
   SA2 : État et individus · activité « Jean-Jacques Rousseau ou le peuple… » (souverain).
   Textes cités : œuvres du domaine public (Rousseau 1762, Montesquieu 1748, Hobbes, Locke…). */
const TEXTE_ROUSSEAU_I8 = "Ce que l’homme perd par le contrat social, c’est sa liberté naturelle et un droit illimité\nà tout ce qui le tente et qu’il peut atteindre ; ce qu’il gagne, c’est la liberté civile\net la propriété de tout ce qu’il possède. Pour ne pas se tromper dans ces compensations,\nil faut bien distinguer la liberté naturelle qui n’a pour bornes que les forces de l’individu,\nde la liberté civile qui est limitée par la volonté générale, et la possession\nqui n’est que l’effet de la force ou le droit du premier occupant,\nde la propriété qui ne peut être fondée que sur un titre positif.\nOn pourrait sur ce qui précède ajouter à l’acquis de l’état civil la liberté morale,\nqui seule rend l’homme vraiment maître de lui ; car l’impulsion du seul appétit est esclavage,\net l’obéissance à la loi qu’on s’est prescrite est liberté.";
const TEXTE_ROUSSEAU_I6 = "« Trouver une forme d’association qui défende et protège de toute la force commune\nla personne et les biens de chaque associé, et par laquelle chacun s’unissant à tous\nn’obéisse pourtant qu’à lui-même et reste aussi libre qu’auparavant. »\nTel est le problème fondamental dont le contrat social donne la solution. […]\nSi donc on écarte du pacte social ce qui n’est pas de son essence,\non trouvera qu’il se réduit aux termes suivants :\nChacun de nous met en commun sa personne et toute sa puissance\nsous la suprême direction de la volonté générale ;\net nous recevons en corps chaque membre comme partie indivisible du tout.";

METHODES.push(
  { id: "m-ph-dissert", mat: "philo", exo: "ph-dissert", titre: "Philo : la dissertation",
    intro: "Une dissertation répond à une question en **argumentant**. Le correcteur attend un vrai problème, un plan qui progresse, des arguments appuyés sur des exemples et des auteurs.",
    etapes: [
      ["Analyse des termes", "Définis chaque mot important du sujet. Exemple : « État » = pouvoir politique organisé qui fait les lois et les fait respecter sur un territoire."],
      ["Le problème", "Montre pourquoi la question se pose : deux réponses possibles et défendables qui s’opposent. Exemple : l’État limite ma liberté… mais sans lui, la liberté de chacun est menacée par la force des autres."],
      ["Le plan en 2 ou 3 parties", "Thèse (une première réponse), antithèse (ses limites), puis dépassement (une réponse plus juste, qui tient compte des deux)."],
      ["Dans chaque partie", "Un argument (pourquoi ?), un exemple concret (la vie au Bénin, l’actualité, l’histoire) et une référence (un auteur et son idée)."],
      ["Introduction et conclusion", "Introduction : une accroche, le sujet, le problème, l’annonce du plan. Conclusion : une réponse claire à la question."]
    ],
    pieges: ["Réciter le cours sur l’État sans répondre à la question", "Un plan « oui / non » sans dépassement", "Citer un auteur sans expliquer son idée"] },
  { id: "m-ph-texte", mat: "philo", exo: "ph-texte", titre: "Philo : l’étude de texte",
    intro: "Étudier un texte, c’est montrer **ce qu’il dit**, **comment il le démontre** et **ce qu’il vaut**, pas le résumer.",
    etapes: [
      ["Lecture active", "Lis deux fois. Souligne les mots clés et les connecteurs logiques (car, donc, mais, or)."],
      ["Thème et thèse", "Le thème : de quoi parle le texte (en quelques mots). La thèse : ce que l’auteur affirme (une phrase, avec tes mots)."],
      ["Le problème", "La question à laquelle le texte répond. Exemple : « En entrant dans la société, l’homme perd-il sa liberté ? »"],
      ["La structure", "Découpe le texte en 2 ou 3 étapes (avec les lignes) et donne un titre à chacune."],
      ["L’intérêt philosophique", "Montre ce que le texte apporte, puis ses limites, avec un autre auteur ou un exemple."]
    ],
    pieges: ["Paraphraser (répéter le texte avec d’autres mots)", "Parler de la vie de l’auteur au lieu du texte", "Oublier le problème"] }
);

CHAPITRES.push(
  { id: "ph-etat", mat: "philo", groupe: "SA2 · État et individus", devoir: true, court: "L’État et l’individu",
    titre: "État et individus : notions, problèmes et auteurs",
    fiche: [
      "**État** : organisation politique et juridique d’une société sur un **territoire**, dotée d’un **pouvoir souverain** (gouvernement, administration, lois, justice, armée).",
      "**Individu** : être humain singulier, considéré dans son indépendance, porteur de droits et de libertés. **Société** : groupe humain organisé. **Nation** : communauté qui a conscience de son unité (histoire, culture, volonté de vivre ensemble).",
      "**Pouvoir, autorité, légitimité** : un pouvoir est **légal** s’il est conforme aux lois ; il est **légitime** s’il est reconnu comme juste (par exemple parce qu’il vient du peuple).",
      "**État de nature** : situation imaginée des hommes avant toute société politique. **Contrat social** : accord par lequel les individus fondent la société politique.",
      "**Hobbes** (Léviathan, 1651) : l’état de nature est une « guerre de chacun contre chacun ». Pour avoir la **sécurité**, les hommes confient tout leur pouvoir à un souverain absolu.",
      "**Locke** (Second traité du gouvernement civil, 1690) : l’homme a des **droits naturels** (vie, liberté, propriété). L’État est créé pour les protéger ; s’il les viole, le peuple peut lui **résister**.",
      "**Rousseau** (Du contrat social, 1762) : le **peuple est souverain**. La loi exprime la **volonté générale**. « L’obéissance à la loi qu’on s’est prescrite est liberté. »",
      "**Montesquieu** (De l’esprit des lois, 1748) : **séparation des pouvoirs** (législatif, exécutif, judiciaire) : « il faut que, par la disposition des choses, le pouvoir arrête le pouvoir ».",
      "**Max Weber** (1919) : l’État revendique le **monopole de la violence physique légitime** sur un territoire.",
      "**Marx et Engels** : l’État est un instrument de **domination** de la classe dominante ; dans une société sans classes, il devrait « dépérir ». **Les anarchistes** (Proudhon, Bakounine) refusent l’État.",
      "**Hegel** (1820) : l’État est la réalisation de la liberté et de la vie morale d’un peuple.",
      "**État de droit** : État soumis lui-même au droit : respect des droits fondamentaux, séparation des pouvoirs, juges indépendants.",
      "**Exemple béninois** : la Constitution du 11 décembre 1990 affirme que « la souveraineté nationale appartient au peuple » (article 3). La Conférence nationale de février 1990 a ouvert le « Renouveau démocratique ».",
      "**Les grands problèmes** : l’État est-il l’ennemi ou le garant de la liberté de l’individu ? Faut-il toujours obéir aux lois (légalité et légitimité) ? Peut-on vivre sans État ?"
    ],
    cartes: [
      ["État", "Organisation politique et juridique d’une société sur un territoire, dotée d’un pouvoir souverain (lois, justice, administration, armée)."],
      ["Individu", "Être humain singulier, considéré dans son indépendance, avec ses droits et ses libertés."],
      ["Légal et légitime", "Légal : conforme aux lois en vigueur. Légitime : reconnu comme juste, fondé en droit ou en morale."],
      ["Souveraineté", "Pouvoir suprême, qui ne dépend d’aucun autre. Pour Rousseau, elle appartient au peuple."],
      ["État de nature", "Situation imaginée des hommes avant toute société politique (sans État, sans lois communes)."],
      ["Contrat social", "Accord par lequel les individus fondent ensemble la société politique et l’État."],
      ["Hobbes : l’état de nature", "Une « guerre de chacun contre chacun » : sans pouvoir commun, la peur et la violence règnent (Léviathan, 1651)."],
      ["Hobbes : la solution", "Les hommes confient tout leur pouvoir à un souverain absolu, en échange de la sécurité."],
      ["Locke : les droits naturels", "La vie, la liberté et la propriété. L’État est fait pour les protéger ; s’il les viole, le peuple a un droit de résistance."],
      ["Montesquieu : la séparation des pouvoirs", "Législatif, exécutif, judiciaire séparés : « le pouvoir arrête le pouvoir » (De l’esprit des lois, 1748)."],
      ["Montesquieu : la liberté politique", "« La liberté est le droit de faire tout ce que les lois permettent. »"],
      ["Max Weber : définition de l’État", "L’État revendique avec succès le monopole de la violence physique légitime sur un territoire (1919)."],
      ["Marx et Engels sur l’État", "Un instrument de domination de la classe dominante, appelé à dépérir dans une société sans classes."],
      ["Hegel sur l’État", "L’État est la réalisation de la liberté et de la vie morale d’un peuple (Principes de la philosophie du droit, 1820)."],
      ["Aristote", "« L’homme est par nature un animal politique » : il ne s’accomplit que dans la cité."],
      ["État de droit", "État qui se soumet lui-même au droit : droits fondamentaux respectés, séparation des pouvoirs, juges indépendants."],
      ["Désobéissance civile", "Refus public et non violent d’obéir à une loi jugée injuste (Thoreau en 1849 ; Gandhi, Martin Luther King)."],
      ["Constitution béninoise de 1990, article 3", "« La souveraineté nationale appartient au peuple. » Aucune partie du peuple ni aucun individu ne peut se l’attribuer."]
    ],
    sujets: [
      { type: "ph-dissert", texte: "L’État est-il l’ennemi de la liberté de l’individu ?",
        modele: "**Analyse** : l’État = le pouvoir politique qui fait les lois et les fait respecter sur un territoire. La liberté de l’individu = pouvoir agir selon sa volonté. « Ennemi » : ce qui s’oppose, ce qui menace.\n**Problème** : l’État limite mes actes (lois, impôts, police)… mais sans lui, ma liberté serait-elle mieux protégée contre la force des autres ?\n\n**I. L’État semble limiter, voire menacer, la liberté de l’individu**\n• Il impose des lois, des interdits, des impôts : il contraint (Weber : le monopole de la violence physique légitime).\n• Pour Marx, il sert les intérêts d’une classe ; pour les anarchistes, il opprime par nature.\n• Exemple : les régimes dictatoriaux, la censure, les arrestations arbitraires.\n\n**II. Mais sans État, la liberté de chacun est à la merci des plus forts**\n• Hobbes : l’état de nature est une « guerre de chacun contre chacun » ; l’État apporte la sécurité, condition de toute liberté.\n• Rousseau : en entrant dans l’état civil, l’homme perd la liberté naturelle, illimitée mais fragile, et gagne la liberté civile, garantie par la loi.\n• Montesquieu : « la liberté est le droit de faire tout ce que les lois permettent ».\n\n**III. Tout dépend de l’État : l’État de droit est le garant de la liberté**\n• Un État qui protège les droits (Locke) et dont le pouvoir est limité (séparation des pouvoirs : « le pouvoir arrête le pouvoir »).\n• Un État dont le peuple est l’auteur des lois : « l’obéissance à la loi qu’on s’est prescrite est liberté » (Rousseau). Exemple : la Constitution béninoise de 1990, « la souveraineté nationale appartient au peuple ».\n\n**Conclusion** : l’État n’est pas en lui-même l’ennemi de la liberté ; il en est même la condition, à condition d’être un État de droit, contrôlé par les citoyens." },
      { type: "ph-dissert", texte: "Faut-il toujours obéir aux lois ?",
        modele: "**Analyse** : obéir = se soumettre à un ordre ; les lois = règles obligatoires fixées par l’autorité politique ; « toujours » = en toutes circonstances, même si la loi semble injuste.\n**Problème** : obéir aux lois garantit l’ordre et la liberté de tous… mais une loi peut être légale sans être juste (légitime).\n\n**I. Oui, il faut obéir aux lois : elles rendent la vie commune possible**\n• Sans lois respectées, retour à la loi du plus fort (Hobbes).\n• Rousseau : la loi exprime la volonté générale ; lui obéir, c’est obéir à soi-même : « l’obéissance à la loi qu’on s’est prescrite est liberté ».\n• Exemple : le code de la route protège tout le monde.\n\n**II. Mais une loi peut être injuste : la légalité n’est pas la légitimité**\n• Des lois ont organisé l’esclavage, la colonisation, la ségrégation : légales, mais injustes.\n• Thoreau (1849) : la désobéissance civile face à une loi injuste ; Martin Luther King contre la ségrégation.\n• Locke : le peuple a un droit de résistance quand le pouvoir viole les droits naturels.\n\n**III. Obéir en citoyen libre et critique**\n• En démocratie, on conteste d’abord par les moyens légaux : vote, justice, presse, pétitions.\n• La désobéissance n’est légitime qu’en dernier recours, de façon publique et non violente, au nom de la justice et non de son intérêt personnel.\n\n**Conclusion** : il faut en principe obéir aux lois, car elles garantissent la liberté de tous ; mais l’obéissance n’est pas aveugle : le citoyen garde le devoir de juger si la loi est juste." },
      { type: "ph-texte", texte: "Fais l’étude de ce texte de Rousseau.", support: TEXTE_ROUSSEAU_I8, source: "Jean-Jacques Rousseau, Du contrat social, livre I, chapitre 8 (1762).",
        modele: "**Thème** : la liberté de l’homme quand il entre dans la société politique (l’état civil).\n**Thèse** : par le contrat social, l’homme ne perd pas sa liberté : il échange une liberté naturelle, illimitée mais fondée sur la force, contre une liberté civile garantie par la loi, et même une liberté morale : obéir à la loi qu’on s’est donnée, c’est être libre.\n**Problème** : en entrant dans la société et en obéissant aux lois, l’individu perd-il sa liberté ?\n\n**Structure** :\n1. Lignes 1 à 3 : le bilan du contrat social, ce que l’homme perd (liberté naturelle, droit illimité) et ce qu’il gagne (liberté civile, propriété).\n2. Lignes 3 à 7 : deux distinctions pour ne pas se tromper : liberté naturelle (limitée par la force de chacun) et liberté civile (limitée par la volonté générale) ; possession (effet de la force) et propriété (fondée sur un titre, un droit).\n3. Lignes 8 à 10 : le gain le plus important, la liberté morale : obéir à ses désirs est un esclavage, obéir à la loi qu’on s’est prescrite est la vraie liberté.\n\n**Intérêt** : le texte montre que la loi n’est pas l’ennemie de la liberté : elle la rend sûre et juste. Il fonde la démocratie : le peuple est l’auteur des lois (la Constitution béninoise : « la souveraineté nationale appartient au peuple »).\n**Limites** : et si la loi est faite par une minorité, ou si la majorité opprime une minorité (Tocqueville parlera de « tyrannie de la majorité ») ? La liberté civile suppose une vraie démocratie et le respect des droits de chacun (Locke)." }
    ] },
  { id: "ph-rousseau", mat: "philo", groupe: "SA2 · État et individus", devoir: true, court: "Rousseau ou le peuple souverain",
    titre: "Activité : Jean-Jacques Rousseau ou le peuple souverain (Du contrat social, 1762)",
    fiche: [
      "**Jean-Jacques Rousseau** (1712-1778), philosophe né à Genève. Œuvre clé : **Du contrat social** (1762). Première phrase : « L’homme est né libre, et partout il est dans les fers. »",
      "**Le problème du contrat** (livre I, chapitre 6) : « Trouver une forme d’association qui défende et protège de toute la force commune la personne et les biens de chaque associé, et par laquelle chacun s’unissant à tous n’obéisse pourtant qu’à lui-même et reste aussi libre qu’auparavant. »",
      "**La solution** : l’**aliénation totale** de chaque associé avec tous ses droits à toute la communauté. Comme chacun se donne entièrement, la condition est **égale pour tous** ; et « chacun se donnant à tous ne se donne à personne ».",
      "**Le pacte** : « Chacun de nous met en commun sa personne et toute sa puissance sous la suprême direction de la volonté générale ; et nous recevons en corps chaque membre comme partie indivisible du tout. »",
      "**Volonté générale** : elle vise l’**intérêt commun**. Elle est différente de la **volonté de tous**, simple somme des intérêts particuliers.",
      "**Le peuple souverain** : la souveraineté, c’est l’exercice de la volonté générale ; elle est **inaliénable** (on ne peut pas la donner à un autre) et **indivisible**. Le peuple est l’auteur des lois : la loi est l’expression de la volonté générale.",
      "**Liberté naturelle, civile, morale** (livre I, chapitre 8) : l’homme perd la liberté naturelle et gagne la liberté civile, et même la liberté morale : « l’obéissance à la loi qu’on s’est prescrite est liberté ».",
      "**« On le forcera d’être libre »** : celui qui refuse d’obéir à la volonté générale y sera contraint par tout le corps (livre I, chapitre 7).",
      "**Contre la représentation** : pour Rousseau, la souveraineté ne peut pas être représentée : le peuple doit voter lui-même ses lois.",
      "**Héritage** : l’idée de souveraineté du peuple est au cœur des démocraties modernes (Révolution française, Constitution béninoise de 1990)."
    ],
    cartes: [
      ["« L’homme est né libre, et partout il est dans les fers. »", "Première phrase du Contrat social (Rousseau, 1762) : les sociétés existantes enchaînent l’homme ; il faut trouver une association légitime."],
      ["Le problème du contrat social selon Rousseau", "Trouver une association qui protège chacun avec la force de tous, et où chacun, uni à tous, n’obéit qu’à lui-même et reste aussi libre qu’avant."],
      ["L’aliénation totale", "Chaque associé se donne tout entier, avec tous ses droits, à la communauté : la condition est ainsi égale pour tous."],
      ["« Chacun se donnant à tous ne se donne à personne »", "On ne se soumet à aucun homme en particulier, mais à la communauté entière, dont on fait soi-même partie."],
      ["Volonté générale", "Volonté du peuple comme corps, tournée vers l’intérêt commun."],
      ["Volonté générale et volonté de tous", "La volonté de tous additionne des intérêts particuliers ; la volonté générale vise l’intérêt commun."],
      ["Souveraineté chez Rousseau", "L’exercice de la volonté générale : elle appartient au peuple, elle est inaliénable et indivisible."],
      ["La loi chez Rousseau", "L’expression de la volonté générale : le peuple est l’auteur des lois auxquelles il obéit."],
      ["Liberté naturelle", "Liberté illimitée de l’état de nature, qui n’a pour bornes que les forces de l’individu."],
      ["Liberté civile", "Liberté garantie par la loi dans l’état civil, limitée par la volonté générale."],
      ["Liberté morale", "Être maître de soi : « l’impulsion du seul appétit est esclavage, et l’obéissance à la loi qu’on s’est prescrite est liberté »."],
      ["« On le forcera d’être libre »", "Celui qui refuse d’obéir à la volonté générale y sera contraint par tout le corps : c’est le forcer à rester citoyen libre."]
    ],
    sujets: [
      { type: "ph-texte", texte: "Fais l’étude de ce texte de Rousseau.", support: TEXTE_ROUSSEAU_I6, source: "Jean-Jacques Rousseau, Du contrat social, livre I, chapitre 6 (1762).",
        modele: "**Thème** : le pacte social, c’est-à-dire l’acte par lequel un peuple se constitue.\n**Thèse** : le seul pacte légitime est celui par lequel chacun se donne entièrement à la communauté, sous la direction de la volonté générale : ainsi chacun est protégé par tous et reste libre, puisqu’il n’obéit qu’à des lois dont il est l’auteur.\n**Problème** : comment s’unir aux autres sous un pouvoir commun sans perdre sa liberté ?\n\n**Structure** :\n1. Lignes 1 à 4 : le problème à résoudre : protection de tous et liberté de chacun en même temps.\n2. Lignes 5 à 9 : la solution, les termes du pacte : mise en commun de sa personne et de sa puissance sous la volonté générale ; chacun devient partie indivisible du tout (le peuple).\n\n**Intérêt** : Rousseau fonde la souveraineté du peuple : le pouvoir n’est légitime que s’il vient de la volonté générale. C’est l’idée de nos démocraties (Constitution béninoise de 1990, article 3).\n**Limites** : se donner « totalement » à la communauté peut faire craindre que l’individu disparaisse derrière le groupe ; Locke insiste au contraire sur des droits naturels que l’État ne doit jamais violer. Et dans les grands États, le peuple ne peut pas toujours voter lui-même toutes les lois." }
    ] }
);

Object.assign(QUIZ, {
  "ph-etat": [
    { t: "n", q: "Quel philosophe décrit l’état de nature comme une « guerre de chacun contre chacun » ?", r: "Hobbes", ok: ["Thomas Hobbes"], p: ["Rousseau", "Locke", "Montesquieu"], e: "Thomas Hobbes, Léviathan (1651)." },
    { t: "n", q: "Quel philosophe défend la séparation des pouvoirs pour que « le pouvoir arrête le pouvoir » ?", r: "Montesquieu", ok: [], p: ["Rousseau", "Hobbes", "Hegel"], e: "Montesquieu, De l’esprit des lois (1748)." },
    { t: "c", q: "Pour Locke, les droits naturels de l’homme sont…", r: "la vie, la liberté et la propriété", p: ["la sécurité, l’obéissance et l’ordre", "la richesse, le pouvoir et la gloire", "le travail, la famille et la patrie"], e: "L’État est créé pour les protéger ; s’il les viole, le peuple peut résister." },
    { t: "c", q: "Selon Max Weber, l’État se définit par…", r: "le monopole de la violence physique légitime", p: ["la séparation des pouvoirs", "la volonté générale", "la lutte des classes"], e: "Seul l’État peut légitimement utiliser la force sur son territoire (police, armée, justice)." },
    { t: "c", q: "Un pouvoir légitime est un pouvoir…", r: "reconnu comme juste", p: ["conforme aux lois, même injustes", "fondé sur la force", "toujours héréditaire"], e: "Légal : conforme aux lois. Légitime : juste, reconnu, fondé en droit." },
    { t: "c", q: "Pour Marx et Engels, l’État est…", r: "un instrument de domination d’une classe sur une autre", p: ["la réalisation de la liberté", "l’expression de la volonté générale", "un contrat entre égaux"], e: "Dans une société sans classes, il devrait « dépérir »." },
    { t: "c", q: "« La liberté est le droit de faire tout ce que les lois permettent. » Qui l’a écrit ?", r: "Montesquieu", p: ["Hobbes", "Marx", "Weber"], e: "De l’esprit des lois (1748), livre XI." },
    { t: "c", q: "Un État de droit est un État…", r: "qui se soumet lui-même au droit", p: ["qui a beaucoup de lois", "dirigé par un roi", "sans constitution"], e: "Droits fondamentaux, séparation des pouvoirs, juges indépendants." },
    { t: "c", q: "La désobéissance civile, c’est…", r: "refuser publiquement et sans violence une loi jugée injuste", p: ["refuser toutes les lois", "renverser le gouvernement par la force", "frauder en secret"], e: "Thoreau (1849), puis Gandhi et Martin Luther King." },
    { t: "c", q: "« L’homme est par nature un animal politique. » Qui l’a dit ?", r: "Aristote", p: ["Hobbes", "Rousseau", "Locke"], e: "L’homme ne s’accomplit que dans la cité (Politique)." },
    { t: "c", q: "Que dit l’article 3 de la Constitution béninoise de 1990 ?", r: "« La souveraineté nationale appartient au peuple »", p: ["« L’État est le maître du peuple »", "« Le président est souverain »", "« La loi est l’expression du gouvernement »"], e: "Aucune fraction du peuple ni aucun individu ne peut s’en attribuer l’exercice." },
    { t: "c", q: "Chez Hobbes, les hommes acceptent un souverain absolu pour obtenir…", r: "la sécurité", p: ["la richesse", "le droit de vote", "la séparation des pouvoirs"], e: "La peur de la mort violente les pousse à sortir de l’état de nature." }
  ],
  "ph-rousseau": [
    { t: "c", q: "Quelle est la première phrase du Contrat social ?", r: "« L’homme est né libre, et partout il est dans les fers. »", p: ["« L’homme est un loup pour l’homme. »", "« Je pense, donc je suis. »", "« L’homme est par nature un animal politique. »"], e: "Rousseau, 1762. « L’homme est un loup pour l’homme » est une formule reprise par Hobbes." },
    { t: "d", q: "En quelle année paraît Du contrat social ?", r: 1762, p: [1651, 1690, 1748, 1789], e: "1651 : Léviathan (Hobbes) ; 1690 : Second traité (Locke) ; 1748 : De l’esprit des lois (Montesquieu)." },
    { t: "c", q: "Chez Rousseau, la volonté générale vise…", r: "l’intérêt commun", p: ["la somme des intérêts particuliers", "l’intérêt du chef", "l’intérêt de la majorité riche"], e: "La somme des intérêts particuliers, c’est la volonté de tous." },
    { t: "c", q: "Pour Rousseau, la souveraineté appartient…", r: "au peuple", p: ["au roi", "aux représentants élus", "aux plus sages"], e: "Elle est inaliénable et indivisible ; elle ne peut pas être représentée." },
    { t: "c", q: "Selon Rousseau, en entrant dans l’état civil, l’homme perd…", r: "la liberté naturelle", p: ["la liberté civile", "la liberté morale", "toute liberté"], e: "Mais il gagne la liberté civile, la propriété et la liberté morale." },
    { t: "c", q: "« L’obéissance à la loi qu’on s’est prescrite est… »", r: "liberté", p: ["esclavage", "servitude volontaire", "contrainte"], e: "Et « l’impulsion du seul appétit est esclavage » (livre I, chapitre 8)." },
    { t: "c", q: "La liberté civile est limitée par…", r: "la volonté générale", p: ["les forces de l’individu", "la volonté du roi", "rien du tout"], e: "La liberté naturelle, elle, n’a pour bornes que les forces de l’individu." },
    { t: "c", q: "Dans le pacte social, chaque associé…", r: "se donne tout entier à la communauté", p: ["garde tous ses droits", "se soumet à un seul homme", "se donne à la majorité seulement"], e: "C’est l’aliénation totale : la condition est égale pour tous." },
    { t: "c", q: "Pour Rousseau, la possession se distingue de la propriété car elle…", r: "n’est que l’effet de la force ou du premier occupant", p: ["est garantie par un titre", "est voulue par la volonté générale", "est toujours juste"], e: "La propriété, elle, est fondée sur un titre positif (un droit reconnu)." }
  ]
});
