#!/usr/bin/env python3
"""Construit le carnet de 1ère D à partir du carnet de bac (src/base.html).

Chaque remplacement doit trouver son texte exactement le nombre de fois prévu,
sinon la construction s'arrête : rien ne change en silence.
"""
import glob, json, os, re, shutil, sys

ICI = os.path.dirname(os.path.abspath(__file__))
RACINE = os.path.dirname(ICI)
DIST = os.path.join(RACINE, "dist")
base = open(os.path.join(ICI, "base.html"), encoding="utf-8").read()
s = base

def lire(rel):
    return open(os.path.join(ICI, rel), encoding="utf-8").read()

def rep(old, new, n=1):
    global s
    c = s.count(old)
    if c != n:
        sys.exit(f"[rep] attendu {n}, trouvé {c} : {old[:90]!r}")
    s = s.replace(old, new)

def entre(debut, fin, new, garder_fin=True):
    """Remplace de `debut` (inclus) jusqu'à `fin` (exclu)."""
    global s
    i = s.find(debut)
    if i < 0 or s.count(debut) != 1:
        sys.exit(f"[entre] début introuvable ou multiple : {debut[:80]!r}")
    j = s.find(fin, i + len(debut))
    if j < 0:
        sys.exit(f"[entre] fin introuvable : {fin[:80]!r}")
    s = s[:i] + new + s[j:]

def copie_base(debut, fin):
    i = base.find(debut)
    if i < 0 or base.count(debut) != 1:
        sys.exit(f"[copie] début introuvable ou multiple : {debut[:80]!r}")
    j = base.find(fin, i + len(debut))
    if j < 0:
        sys.exit(f"[copie] fin introuvable : {fin[:80]!r}")
    return base[i:j]

def resoudre_copies(txt):
    out = []
    for ligne in txt.split("\n"):
        if ligne.startswith("//@@COPIE "):
            d, f = ligne[len("//@@COPIE "):].split("@@")
            out.append(copie_base(d.replace("\\n", "\n"), f.replace("\\n", "\n")).rstrip("\n"))
        else:
            out.append(ligne)
    return "\n".join(out)

# ---------- En-tête ----------
rep("<title>Carnet de bac 2027</title>", "<title>Carnet de révisions · 1ère D</title>")
rep('content="Révisions du soir, cartes mémoire, exercices type bac et suivi de progression."',
    'content="Révisions du soir, exercices corrigés, cartes mémoire et suivi de progression pour la 1ère D."')
rep('<meta name="theme-color" content="#1f4fd8">', '<meta name="theme-color" content="#5b3fd0">')
rep('<meta name="apple-mobile-web-app-title" content="Carnet de bac">', '<meta name="apple-mobile-web-app-title" content="Carnet 1ère D">')

# ---------- Couleurs : encre violette, une couleur par matière ----------
rep("  --bic: #1f4fd8;\n", "  --bic: #5b3fd0;\n")
rep("  --bic-doux: #e9effd;\n", "  --bic-doux: #eeeafd;\n")
rep("--bic: #7fa2ff; --sur-bic: #0c1220; --bic-doux: #1b2848;", "--bic: #a593ff; --sur-bic: #0c1220; --bic-doux: #221c45;", n=2)
rep("  --s-ses: #2a78d6; --s-hggsp: #eb6834; --s-philo: #1baf7a;\n",
    "  --s-maths: #2a78d6; --s-pct: #eb6834; --s-svt: #1baf7a; --s-francais: #eda100; --s-anglais: #e87ba4; --s-hg: #008300; --s-philo: #e34948;\n")
rep("--s-ses: #3987e5; --s-hggsp: #d95926; --s-philo: #199e70;",
    "--s-maths: #3987e5; --s-pct: #d95926; --s-svt: #199e70; --s-francais: #c98500; --s-anglais: #d55181; --s-hg: #0ca30c; --s-philo: #e66767;", n=2)
rep("\n</style>", lire("parts/extra.css") + "\n</style>")

# ---------- Contenu : les fichiers de src/data, dans l'ordre ----------
donnees = "\n".join(open(f, encoding="utf-8").read() for f in sorted(glob.glob(os.path.join(ICI, "data", "*.js"))))
entre("/* ============================================================\n   CONTENU", "/* ============================================================\n   CŒUR", donnees + "\n")

# ---------- Cœur ----------
rep("\n/* ---------- État ---------- */", "\n" + lire("parts/coeur.js") + "\n/* ---------- État ---------- */")
rep("""const DEFAUTS = {
  prenom: "",
  objectif: 45,            // ancien objectif en minutes, gardé pour les jours d’avant les blocs
  rythme: { mode: "montee", debut: null },
  moyennePrecedente: 9,
  epreuves: { philo: true, hggsp: true, go: true },
  lva: "LV A", lvb: "LV B",
  questionsGO: ["", ""],
  mot: { texte: "", date: null },
  echeances: []
};""", """const DEFAUTS = {
  prenom: "",
  coach: "Will",
  objectif: 75,
  rythme: { mode: 3, debut: null },
  moyennePrecedente: null,
  epreuves: Object.fromEntries(Object.keys(MATIERES).map((m) => [m, true])),
  devoirs: Object.fromEntries(Object.keys(MATIERES).map((m) => [m, DEVOIR_DEFAUT])),
  mot: { texte: "", date: null },
  echeances: []
};""")
entre("function fusionConfig(d) {", "const majConfig =", """function fusionConfig(d) {
  const c = structuredClone(DEFAUTS);
  Object.assign(c, d || {});
  c.epreuves = Object.assign({}, DEFAUTS.epreuves, (d && d.epreuves) || {});
  c.devoirs = Object.assign({}, d && d.devoirs ? {} : DEFAUTS.devoirs, (d && d.devoirs) || {});
  c.mot = Object.assign({}, DEFAUTS.mot, (d && d.mot) || {});
  if (!Array.isArray(c.echeances)) c.echeances = [];
  c.objectif = clamp(Number(c.objectif) || 75, 10, 240);
  const r = Object.assign({}, DEFAUTS.rythme, (d && d.rythme) || {});
  c.rythme = { mode: [1, 2, 3, 4].includes(r.mode) ? r.mode : 3, debut: /^\\d{4}-\\d{2}-\\d{2}$/.test(r.debut || "") ? r.debut : null };
  return c;
}
""")
# Le carnet du frère vit sur le même site : clés de stockage séparées
rep('"carnet.', '"c1d.', n=s.count('"carnet.'))
rep('const cleSeance = () => "c1d.seance." + (CLE_CARNET || "local");', 'const cleSeance = () => "c1d.seance." + (CLE_CARNET || "local");')

# ---------- IA (inactive sur GitHub Pages, mais le contexte doit être juste) ----------
rep("en terminale générale en France (bac 2027). Crée un quiz", "${NIVEAU_IA}. Crée un quiz")
rep("Règles : niveau bac, conforme au programme officiel,", "Règles : niveau du devoir, conforme au programme,")
rep("en terminale (bac 2027). Un élève explique", "${NIVEAU_IA}. Un élève explique")
rep('const appointQuiz = (chapId) => (CHAP[chapId] && CHAP[chapId].mat === "philo" && chapId !== "ph-reperes" ? "ph-reperes" : null);',
    'const appointQuiz = (chapId) => (CHAP["ph-reperes"] && CHAP[chapId] && CHAP[chapId].mat === "philo" && chapId !== "ph-reperes" ? "ph-reperes" : null);')
rep('function puceMatiere(mat) {\n  const couleur = { ses: "var(--s-ses)", hggsp: "var(--s-hggsp)", philo: "var(--s-philo)", go: "var(--encre-3)" }[mat] || "var(--encre-3)";',
    'function puceMatiere(mat) {\n  const couleur = MATIERES[mat] ? MATIERES[mat].couleur : "var(--encre-3)";')

# ---------- Quiz : texte enrichi et réponses numériques (type « v ») ----------
rep('const aEcrire = (x) => (x.t === "d" || x.t === "n") &&', 'const ecrivable = (x) => x.t === "d" || x.t === "n" || x.t === "v";\nconst aEcrire = (x) => ecrivable(x) &&')
rep('.replace(/^(?:le|la|les|l) /, "");', '.replace(/^(?:le|la|les|l|the|a|an|to) /, "");')
rep("""function choixQuestion(x) {
  if (x.t === "d") {""", """function choixQuestion(x) {
  if (x.t === "v") return melanger([x.r, ...melanger(x.p.filter((a) => a !== x.r)).slice(0, 3)]).map(fmtNombre);
  if (x.t === "d") {""")
rep("""  if (!brut) return { vide: true, juste: false, exact: false };
  if (x.t === "d") {""", """  if (!brut) return { vide: true, juste: false, exact: false };
  if (x.t === "v") {
    const v = lireNombre(brut);
    if (!Number.isFinite(v)) return { juste: false, exact: false };
    const tol = x.tol != null ? x.tol : 1e-9;
    if (Math.abs(v - x.r) <= tol) return { juste: true, exact: true };
    if ((x.ok || []).some((o) => Math.abs(v - o) <= tol)) return { juste: true, exact: false };
    return { juste: false, exact: false };
  }
  if (x.t === "d") {""")
entre("  const pieges = { hggsp:", "  const preparer = (x) => {", """  const pieges = { maths: "résultats proches et méthodes qui se ressemblent", pct: "formules, unités et signes qui se ressemblent", svt: "notions et exemples qui se ressemblent", francais: "procédés et figures de style qui se ressemblent", anglais: "words and grammar that look alike", philo: "auteurs et notions à ne pas confondre", hg: "pays, routes et ports à ne pas confondre" }[ch.mat] || "réponses qui se ressemblent";
""")
rep("return { x, ecrit: false, choix, bonne: choix.indexOf(String(x.r)) };", 'return { x, ecrit: false, choix, bonne: choix.indexOf(x.t === "v" ? fmtNombre(x.r) : String(x.r)) };')
rep('const passe = !q.ecrit && juste && (x.t === "d" || x.t === "n") && avant < QUIZ_A_ECRIRE', "const passe = !q.ecrit && juste && ecrivable(x) && avant < QUIZ_A_ECRIRE")
rep("        const rep = String(x.r);\n", '        const rep = x.t === "v" ? fmtNombre(x.r) + (x.u ? " " + x.u : "") : String(x.r);\n')
rep('(exact ? "Bonne réponse." : x.t === "d" ? `Accepté, mais retiens ${rep}.` : `Accepté. Orthographe exacte : ${rep}.`)',
    '(exact ? "Bonne réponse." : x.t === "d" ? `Accepté, mais retiens ${rep}.` : x.t === "v" ? `Accepté. Valeur exacte : ${rep}.` : `Accepté. Orthographe exacte : ${rep}.`)')
rep('h("p", { class: "retour-q" }, h("b", null, titre), x.e ? " " + x.e : ""),', 'h("p", { class: "retour-q" }, h("b", null, rich(titre)), x.e ? [" ", rich(x.e)] : ""),')
rep('h("span", { class: "puce bac" }, x.t === "d" ? "Sans propositions : écris l’année" : "Sans propositions : écris le nom")',
    'h("span", { class: "puce bac" }, x.t === "d" ? "Sans propositions : écris l’année" : x.t === "v" ? "Sans propositions : écris le résultat" : "Sans propositions : écris la réponse")')
rep('          h("div", { class: "q" }, x.q)));', '          h("div", { class: "q" }, rich(x.q))));')
rep('const liste = h("div", { class: "qcm" + (x.t === "d" ? " dates" : ""),', 'const liste = h("div", { class: "qcm" + (x.t === "d" || x.t === "v" ? " dates" : ""),')
rep("""          corriger(k === q.bonne, true);
        } }, txt)));""", """          corriger(k === q.bonne, true);
        } }, rich(txt))));""")
rep('inputmode: x.t === "d" ? "numeric" : "text", maxlength: x.t === "d" ? "4" : "80", placeholder: x.t === "d" ? "4 chiffres" : "Le nom" });',
    'inputmode: x.t === "d" ? "numeric" : x.t === "v" ? "decimal" : "text", maxlength: x.t === "d" ? "4" : "80", placeholder: x.t === "d" ? "4 chiffres" : x.t === "v" ? "Le résultat (un nombre)" : "Ta réponse" });')
rep('h("label", { class: "champ", for: "rep-quiz" }, x.t === "d" ? "L’année" : "Le nom", champ)', 'h("label", { class: "champ", for: "rep-quiz" }, x.t === "d" ? "L’année" : x.t === "v" ? "Le résultat" : "Ta réponse", champ)')
rep('const aRetenir = (x) => { const r = String(x.r);', 'const aRetenir = (x) => { const r = x.t === "v" ? fmtNombre(x.r) + (x.u ? " " + x.u : "") : String(x.r);')
rep('h("span", null, c.q.x.q, h("span", { class: "petit", style: "display:block" }, "Réponse : " + c.q.x.r))',
    'h("span", null, rich(c.q.x.q), h("span", { class: "petit", style: "display:block" }, "Réponse : ", rich(c.q.x.t === "v" ? fmtNombre(c.q.x.r) : String(c.q.x.r))))')
rep('const avecEcrit = qs.some((x) => x.t === "d" || x.t === "n");', "const avecEcrit = qs.some(ecrivable);")
rep('"Une date ou un nom trouvé deux fois de suite revient sans propositions : il faudra l’écrire toi-même."', '"Une réponse trouvée deux fois de suite revient sans propositions : il faudra l’écrire toi-même."')
rep('h("p", null, `${nb} questions à pièges : ${pieges}.`),', 'h("p", null, `${nb} questions, avec des pièges : ${pieges}.`),')

# ---------- Cartes et explique-le : texte enrichi ----------
rep('h("div", { class: "puces" }, puceMatiere(c.mat), h("span", { class: "puce" }, CHAP[c.chap].court)), h("div", { class: "q" }, c.recto));',
    'h("div", { class: "puces" }, puceMatiere(c.mat), h("span", { class: "puce" }, CHAP[c.chap].court)), h("div", { class: "q" }, rich(c.recto)));')
rep('flash.append(h("div", { class: "r" }, c.verso));', 'flash.append(h("div", { class: "r" }, rich(c.verso)));')
rep('h("div", { class: "flash" }, h("div", { class: "petit" }, "Explique avec tes mots, comme à quelqu’un qui n’a jamais fait de " + MATIERES[ch.mat].nom), h("div", { class: "q" }, c.recto)),',
    'h("div", { class: "flash" }, h("div", { class: "petit" }, "Explique avec tes mots, comme à quelqu’un qui n’a jamais suivi ce cours"), h("div", { class: "q" }, rich(c.recto))),')
rep('vider(zone).append(h("div", { class: "flash" }, h("div", { class: "q" }, c.recto), h("div", { class: "r" }, c.verso)),',
    'vider(zone).append(h("div", { class: "flash" }, h("div", { class: "q" }, rich(c.recto)), h("div", { class: "r" }, rich(c.verso))),')

# ---------- Minuteur et carnet d'erreurs ----------
rep('mat = p.mat && MATIERES[p.mat] ? p.mat : "hggsp"', 'mat = p.mat && MATIERES[p.mat] ? p.mat : "maths"')
rep('"Pour travailler sur ton cahier, ton manuel ou des fiches : lance le chrono, pose le téléphone, écran vers le bas."',
    '"Pour travailler sur ton cahier, ton manuel ou des exercices sur papier : lance le chrono et pose ton téléphone loin de toi, écran vers le bas."')
rep('placeholder: "ex. fiche sur le patrimoine"', 'placeholder: "ex. exercices de dénombrement"')
rep('          h("p", null, e.description),\n          e.aRetenir ? h("p", { class: "ret" }, "À retenir : " + e.aRetenir)',
    '          h("p", null, rich(e.description)),\n          e.aRetenir ? h("p", { class: "ret" }, "À retenir : ", rich(e.aRetenir))')

# ---------- Activités ----------
entre("/* ---------- Exercice type bac ---------- */", "/* ---------- Explique-le ---------- */", lire("parts/exercice.js"))
rep("const ACTIVITES = { cartes: actCartes, quiz: actQuiz, exercice: actExercice, explique: actExplique, minuteur: actMinuteur, erreurs: actErreurs };",
    "const ACTIVITES = { cartes: actCartes, quiz: actQuiz, exercice: actExercice, probleme: actProbleme, fiche: actFiche, explique: actExplique, minuteur: actMinuteur, erreurs: actErreurs };")
rep('const TITRES_ACT = { cartes: "Cartes mémoire", quiz: "Quiz", exercice: "Exercice type bac", explique: "Explique-le", minuteur: "Minuteur concentration", erreurs: "Relire tes erreurs", bilan: "Bilan" };',
    'const TITRES_ACT = { cartes: "Cartes mémoire", quiz: "Quiz", exercice: "Rédaction type devoir", probleme: "Exercice corrigé", fiche: "La fiche du chapitre", explique: "Explique-le", minuteur: "Minuteur concentration", erreurs: "Relire tes erreurs", bilan: "Bilan" };')
rep('const ICONES_ACT = { cartes: "cartes", quiz: "quiz", exercice: "stylo", explique: "bulle", minuteur: "chrono", erreurs: "erreur", bilan: "note" };',
    'const ICONES_ACT = { cartes: "cartes", quiz: "quiz", exercice: "note", probleme: "stylo", fiche: "livre", explique: "bulle", minuteur: "chrono", erreurs: "erreur", bilan: "note" };')

# ---------- Plan du soir ----------
entre("/* ---------- Choix du chapitre et plan du soir ---------- */", "/* ============================================================\n   ACTIVITÉS", lire("parts/plan.js"))
entre("function activiteDeBloc(entree, etat) {", "function lancerSoiree(opts) {", """function activiteDeBloc(entree, etat) {
  const [type, chap] = entree;
  if (type === "dues") return !etat.duesFait && cartesDues().length ? { type: "cartes", mode: "dues", titre: "Échauffement : cartes à revoir", dues: true } : null;
  if (type === "erreurs") return erreursNonRelues().length ? { type: "erreurs", titre: "Relire tes erreurs" } : null;
  if (!CHAP[chap]) return null;
  const nom = CHAP[chap].court;
  if (type === "fiche") return (CHAP[chap].fiche || []).length ? { type: "fiche", chap, titre: `La fiche du chapitre · ${nom}` } : null;
  if (type === "cartes") return paquetChapitre(chap).length ? { type: "cartes", mode: "chap", chap, titre: `Apprendre avec les cartes · ${nom}` } : null;
  if (type === "quiz") return questionsDuChap(chap).length ? { type: "quiz", chap, direct: true, titre: `Quiz · ${nom}` } : null;
  if (type === "explique") return cartesDuChap(chap).length ? { type: "explique", chap, titre: `Explique-le avec tes mots · ${nom}` } : null;
  if (type === "exo") { const e = exoSuivant(chap); return e ? { type: "probleme", chap, exo: e.id, titre: `Exercice corrigé · ${nom}` } : null; }
  if (type === "exercice") return aRedaction(chap) ? { type: "exercice", chap, direct: true, titre: `Rédaction type devoir · ${nom}` } : null;
  return null;
}

""")
rep('const seq = (b.revisions || []).flatMap((c) => [["quiz", c], ["explique", c]]);',
    'const seq = (b.revisions || []).flatMap((c) => b.role === "sciences" ? [["quiz", c], ["exo", c]] : [["quiz", c], ["explique", c]]);')
rep('return { type: "quiz", chap: b.chap, direct: true, titre: `Quiz à pièges · ${CHAP[b.chap].court}` };', 'return { type: "quiz", chap: b.chap, direct: true, titre: `Quiz · ${CHAP[b.chap].court}` };')
rep('`${k + 1}. ${ROLES_BLOC[b.role].court}`', '`${k + 1}. ${b.court || MATIERES[b.mat].nom}`')
rep('toast("Aucune matière à réviser : coche tes épreuves dans l’onglet Plus.");', 'toast("Aucune matière à réviser : coche tes matières dans l’onglet Plus.");')
rep('const rituel = ["TikTok fermé, notifications coupées (mode Ne pas déranger)", "Cahier, cours et stylo devant moi", "Pendant les pauses, je me lève : pas de TikTok"];',
    'const rituel = ["Téléphone loin de moi, notifications coupées", "Cahiers, cours, feuille de brouillon et stylo devant moi", "Pendant les pauses, je me lève et je bois de l’eau"];')
rep('"Lève-toi, bois de l’eau, regarde par la fenêtre. Pas de TikTok : 5 minutes de vidéos deviennent vite 30."',
    '"Lève-toi, bois de l’eau, regarde au loin. Pas de téléphone : 5 minutes de vidéos deviennent vite 30."')
rep('let concentration = null, tiktok = (S.jours.get(todayKey()) || {}).tiktok ?? null, commentaire = "";', 'let concentration = null, commentaire = "";')
rep('choixUnique([[1, "Très dispersé"], [2, "Dispersé"], [3, "Moyen"], [4, "Concentré"], [5, "À fond"]], null, (v) => { concentration = Number(v); }),',
    'choixUnique([[1, "Très dispersée"], [2, "Dispersée"], [3, "Moyenne"], [4, "Concentrée"], [5, "À fond"]], null, (v) => { concentration = Number(v); }),')
rep("""      h("label", { class: "champ" }, "Ton temps TikTok aujourd’hui", h("span", { class: "aide" }, "Regarde « Temps d’écran » (iPhone) ou « Bien-être numérique » (Android).")),
      choixUnique(TIKTOK, tiktok, (v) => { tiktok = v; }),
""", "")
rep("""        if (tiktok != null) Store.ecrire("jours", todayKey(), Object.assign({}, S.jours.get(todayKey()) || {}, { tiktok: String(tiktok) }));
""", "")

# ---------- Notes ----------
rep("""const MATIERES_NOTES = () => [
  ["hggsp", "HGGSP"], ["spe2", "Autre spécialité"], ["philo", "Philosophie"], ["hg", "Histoire-géo"], ["emc", "EMC"],
  ["lva", S.config.lva || "LV A"], ["lvb", S.config.lvb || "LV B"], ["es", "Enseignement scientifique"], ["eps", "EPS"], ["autre", "Autre"]
];""", """const MATIERES_NOTES = () => [
  ...Object.values(MATIERES).map((m) => [m.id, m.long]), ["eps", "EPS"], ["autre", "Autre"]
];""")

# ---------- Vues ----------
entre("/* ============================================================\n   VUES : Ce soir", "\n</html>", resoudre_copies(lire("parts/vues.js")).rstrip("\n").removesuffix("</html>").rstrip("\n"))
rep('placeholder: "ex. Bac blanc de HGGSP"', 'placeholder: "ex. Composition de maths"')

# ---------- Vérifications ----------
for mot in ["TikTok", "HGGSP", "hggsp", "Parcoursup", "grand oral", "c.bac", "bac 2027", "Carnet de bac"]:
    restes = [l.strip()[:110] for l in s.split("\n") if mot in l and not l.strip().startswith(("/*", "//", "*"))]
    restes = [l for l in restes if "TIKTOK" not in l]
    if restes:
        print(f"⚠ « {mot} » reste dans :", *restes[:6], sep="\n   ")

os.makedirs(DIST, exist_ok=True)
open(os.path.join(DIST, "index.html"), "w", encoding="utf-8").write(s)

# ---------- Manifeste et service worker ----------
VERSION = json.load(open(os.path.join(ICI, "version.json")))["version"]
manifeste = {
  "name": "Carnet de révisions · 1ère D", "short_name": "Carnet 1ère D",
  "description": "Révisions du soir, exercices corrigés, cartes mémoire et suivi de progression.",
  "lang": "fr", "dir": "ltr", "display": "standalone", "start_url": "./", "scope": "./", "id": "./",
  "background_color": "#f6f8fc", "theme_color": "#5b3fd0",
  "icons": [
    {"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
    {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
    {"src": "icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
  ]
}
json.dump(manifeste, open(os.path.join(DIST, "manifest.webmanifest"), "w", encoding="utf-8"), ensure_ascii=False, indent=2)
sw = lire("parts/sw.js").replace("@@VERSION@@", str(VERSION))
open(os.path.join(DIST, "sw.js"), "w", encoding="utf-8").write(sw)
for f in ["favicon.png", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png", ".nojekyll", "README.md"]:
    src = os.path.join(RACINE, "icones", f) if f.endswith(".png") else os.path.join(ICI, "parts", f)
    if os.path.exists(src):
        shutil.copy(src, os.path.join(DIST, f))
print(f"OK · index.html {len(s.encode('utf-8')) // 1024} Ko · version {VERSION}")
