/* ============================================================
   VUES : Ce soir, Réviser, Progrès, Plus + formulaires
   ============================================================ */
const ONGLETS = [
  { id: "ce-soir", nom: "Ce soir", icone: "soir" },
  { id: "reviser", nom: "Réviser", icone: "livre" },
  { id: "progres", nom: "Progrès", icone: "courbe" },
  { id: "plus", nom: "Plus", icone: "reglages" }
];
const UI = { filtreMat: "tous", seulementDevoir: true, vueTableau: false };
const coach = () => (S.config.coach || "").trim() || "Will";
const prenomEleve = () => (S.config.prenom || "").trim();
const listeNoms = (mats) => { const n = mats.map((m) => MATIERES[m].nom); return n.length > 1 ? n.slice(0, -1).join(", ") + " et " + n[n.length - 1] : n[0] || ""; };
function ongletCourant() {
  const hsh = (location.hash || "").replace("#", "");
  if (ONGLETS.some((o) => o.id === hsh)) return hsh;
  return "ce-soir";
}

function rendre() {
  const app = document.getElementById("app");
  const ong = ongletCourant();
  let nav = app.querySelector(".nav");
  if (!nav) {
    nav = h("nav", { class: "nav", "aria-label": "Navigation" },
      h("div", { class: "marque" }, "Carnet de Mawouena", h("small", null, "1ère D · Bénin · 2026-2027")),
      ONGLETS.map((o) => h("a", { href: "#" + o.id, "data-o": o.id }, icone(o.icone), h("span", null, o.nom))));
    app.append(h("div", { class: "marge-rouge", "aria-hidden": "true" }), nav, h("main", { class: "main", id: "vue" }));
  }
  nav.querySelectorAll("a").forEach((a) => { if (a.dataset.o === ong) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  const vue = document.getElementById("vue");
  const y = window.scrollY;
  const contenu = S.sync === "sans-cle" ? ecranSansCle() : { "ce-soir": vueCeSoir, reviser: vueReviser, progres: vueProgres, plus: vuePlus }[ong]();
  vider(vue).append(...bandeauxEtat(), ...[].concat(contenu));
  if (ong === "progres") requestAnimationFrame(() => dessinerGraphes());
  window.scrollTo(0, y);
}
function bandeauxEtat() {
  const out = [];
  const n = Store.attente.length;
  if (S.sync === "inconnu") out.push(bandeau("erreur", h("b", null, "Lien invalide. "), "Ce lien ne correspond à aucun carnet. Rouvre le lien exact que tu as reçu."));
  else if ((S.sync === "horsligne" || S.sync === "erreur") && n) out.push(bandeau("alerte", h("b", null, "Pas de connexion. "), `Tes ${pluriel(n, "modification")} ${n > 1 ? "sont gardées" : "est gardée"} sur cet ordinateur et ${n > 1 ? "partiront" : "partira"} toute${n > 1 ? "s" : ""} seule${n > 1 ? "s" : ""} au retour d’internet.`));
  else if (S.sync === "horsligne" || S.sync === "erreur") out.push(bandeau("alerte", h("b", null, "Pas de connexion. "), "Tu peux réviser normalement : tout sera enregistré en ligne au retour d’internet."));
  return out;
}
//@@COPIE function etatSync() {@@function ecranSansCle() {
function ecranSansCle() {
  let saisie = "";
  return [h("div", { class: "page-titre" }, h("h1", null, "Carnet de Mawouena"), h("p", null, "Ce carnet s’ouvre avec un lien personnel.")),
    h("section", { class: "carte" },
      h("p", null, "Ouvre le lien que tu as reçu (il se termine par ", h("code", null, "?k=…"), "), ou colle-le ici :"),
      h("label", { class: "champ" }, "Ton lien", h("input", { type: "text", id: "lien-k", placeholder: "https://…/carnet-1ere-d/?k=…", oninput: (e) => { saisie = e.target.value; } })),
      h("button", { class: "btn grand primaire", type: "button", onclick: () => {
        const m = String(saisie).match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
        if (!m) { toast("Ce lien ne contient pas de clé de carnet."); return; }
        location.href = `${location.pathname}?k=${m[0].toLowerCase()}`;
      } }, "Ouvrir mon carnet"))];
}

/* Installation sur l’ordinateur (ou le téléphone) */
let invitationInstall = null;
window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); invitationInstall = e; planifierRendu(); });
window.addEventListener("appinstalled", () => { invitationInstall = null; planifierRendu(); });
const estInstallee = () => (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
const estIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const estMobile = () => estIOS() || /android|mobile/i.test(navigator.userAgent);
function aideInstallation(compacte) {
  if (estInstallee()) return null;
  let masque = false; try { masque = localStorage.getItem("c1d.installMasque") === "1"; } catch (e) { /* ignoré */ }
  if (compacte && masque) return null;
  const pc = !estMobile();
  const etapes = estIOS()
    ? ["Ouvre ce lien dans Safari.", "Touche le bouton Partager (le carré avec une flèche vers le haut).", "Choisis « Sur l’écran d’accueil », puis « Ajouter »."]
    : pc
      ? ["Ouvre ce lien dans Google Chrome ou Microsoft Edge.", "Chrome : clique sur l’icône d’installation à droite de la barre d’adresse (un petit écran avec une flèche), puis sur « Installer ». Si tu ne la vois pas : menu ⋮ › « Caster, enregistrer et partager » › « Installer la page en tant qu’application ».", "Edge : menu … › « Applications » › « Installer ce site en tant qu’application »."]
      : ["Ouvre ce lien dans Chrome.", "Touche le menu ⋮ en haut à droite.", "Choisis « Ajouter à l’écran d’accueil » (ou « Installer l’application »)."];
  return h("section", { class: "carte", "aria-labelledby": "t-install" },
    h("div", { class: "carte-titre" }, h("h2", { id: "t-install" }, pc ? "Installe le carnet sur ton ordinateur" : "Mets le carnet sur ton écran d’accueil"),
      compacte ? h("button", { class: "btn fantome petit-btn", type: "button", onclick: () => { try { localStorage.setItem("c1d.installMasque", "1"); } catch (e) { /* ignoré */ } planifierRendu(); } }, "Plus tard") : null),
    invitationInstall ? h("button", { class: "btn grand primaire", type: "button", onclick: async () => { invitationInstall.prompt(); try { await invitationInstall.userChoice; } catch (e) { /* ignoré */ } invitationInstall = null; planifierRendu(); } }, icone("plus"), "Installer le carnet")
      : h("ol", { style: "margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px" }, etapes.map((t) => h("li", null, t))),
    h("p", { class: "petit" }, pc ? "Il s’ouvrira dans sa propre fenêtre, avec une icône sur le bureau, même sans internet." : "Il s’ouvrira comme une appli, en plein écran, même sans réseau."));
}

/* ---------- CE SOIR ---------- */
function vueCeSoir() {
  const auj = todayKey();
  const obj = objectifDuJour(auj);
  const fait = minutesDuJour(auj);
  const ser = series();
  const pd = prochainDevoir();
  const heure = new Date().getHours();
  const salut = (heure < 5 || heure >= 18 ? "Bonsoir" : "Bonjour") + (prenomEleve() ? " " + prenomEleve() : "");
  const pro = prochaineEcheance();
  const out = [];

  out.push(h("div", { class: "entete" }, h("div", null, h("div", { class: "date-du-jour" }, fmtDateLongue(auj)), h("div", { class: "salut" }, salut)), etatSync()));

  /* Compte à rebours jusqu’au devoir + anneau du soir */
  const R = 54, C = 2 * Math.PI * R, ratio = clamp(fait / obj, 0, 1);
  const j = pd ? daysBetween(auj, pd.date) : null;
  const toutes = pd && pd.mats.length >= Object.keys(MATIERES).filter(epreuveActive).length;
  const quoi = !pd ? "" : toutes ? "le devoir de toutes les matières" : `le devoir de ${listeNoms(pd.mats)}`;
  out.push(h("section", { class: "hero", "aria-label": "Compte à rebours et objectif du soir" },
    h("div", null,
      h("div", { class: "compte" }, pd ? (j > 0 ? `J-${j}` : "Jour J") : "Courage"),
      sv("svg", { class: "trait", viewBox: "0 0 220 10", preserveAspectRatio: "none", "aria-hidden": "true" }, sv("path", { d: "M2 7 C 50 2, 90 9, 130 5 S 200 3, 218 6", fill: "none", stroke: "var(--rouge)", "stroke-width": 2.5, "stroke-linecap": "round" })),
      h("div", { class: "compte-sous" }, pd ? (j > 0 ? ["avant ", quoi, ", ", h("strong", null, fmtDateLongue(pd.date)), "."] : ["Aujourd’hui : ", quoi, ". Tu as travaillé, fais-toi confiance."])
        : "Pas de devoir à venir dans le carnet : ajoute la date du prochain dans Plus.")),
    h("div", { class: "anneau", role: "img", "aria-label": `${fait} minutes sur ${obj} ce soir` },
      sv("svg", { viewBox: "0 0 128 128" },
        sv("circle", { cx: 64, cy: 64, r: R, fill: "none", stroke: "var(--ligne-forte)", "stroke-width": 11 }),
        sv("circle", { cx: 64, cy: 64, r: R, fill: "none", stroke: ratio >= 1 ? "var(--vert)" : "var(--bic)", "stroke-width": 11, "stroke-linecap": "round", "stroke-dasharray": C, "stroke-dashoffset": C * (1 - ratio) })),
      h("div", { class: "val" }, h("b", { class: "tnum" }, String(Math.round(fait))), h("span", null, `sur ${obj} min`)))));

  /* Semaine */
  const lundi = lundiDe(auj); const mpj = minutesParJour();
  out.push(h("section", { class: "carte" },
    h("div", { class: "serie" },
      h("span", null, h("b", { class: "tnum" }, String(ser.actuelle)), ` soir${ser.actuelle > 1 ? "s" : ""} d’affilée à l’objectif`),
      h("span", null, "Record : ", h("b", { class: "tnum" }, String(ser.record)))),
    h("div", { class: "semaine", role: "list", "aria-label": "Cette semaine" }, [0, 1, 2, 3, 4, 5, 6].map((k) => {
      const d = addDays(lundi, k); const m = mpj.get(d) || 0;
      const cls = m >= objectifDuJour(d) ? "plein" : m > 0 ? "part" : "";
      return h("div", { class: "j" + (d === auj ? " auj" : ""), role: "listitem", "aria-label": `${fmtDate(d)} : ${fmtMin(m)}` }, h("span", { class: "rond " + cls }), "LMMJVSD"[k]);
    })),
    pro ? h("p", { class: "petit" }, icone("calendrier"), " Prochaine échéance : ", h("b", null, pro.titre), ` — ${fmtDateCourte(pro.date)} (dans ${pluriel(Math.max(0, daysBetween(auj, pro.date)), "jour")})`) : null));

  /* Le mot de Will */
  if (S.config.mot && S.config.mot.texte) {
    out.push(h("section", { class: "carte mot" }, h("div", { class: "petit" }, `Le mot de ${coach()}`, S.config.mot.date ? ` · ${fmtDateCourte(S.config.mot.date)}` : ""), h("p", { class: "mot-txt" }, S.config.mot.texte)));
  }

  /* Séance du soir */
  out.push(carteSeance(fait));
  const aide = aideInstallation(true);
  if (aide) out.push(aide);
  out.push(cartePret());

  /* Raccourcis */
  const dues = cartesDues().length;
  const nonRelues = erreursNonRelues().length;
  out.push(h("section", { class: "raccourcis", "aria-label": "Raccourcis" },
    h("button", { class: "raccourci", type: "button", onclick: () => ouvrirActivite("cartes", { mode: "dues" }) }, icone("cartes"), h("b", null, "Cartes à revoir"), h("span", null, dues ? pluriel(dues, "carte") : "À jour")),
    h("button", { class: "raccourci", type: "button", onclick: () => ouvrirActivite("minuteur", {}) }, icone("chrono"), h("b", null, "Minuteur"), h("span", null, "25 min sur ton cahier")),
    h("button", { class: "raccourci", type: "button", onclick: () => formNote() }, icone("note"), h("b", null, "Ajouter une note"), h("span", null, "Interro, devoir, composition")),
    h("button", { class: "raccourci", type: "button", onclick: () => formErreur() }, icone("erreur"), h("b", null, "Noter une erreur"), h("span", null, nonRelues ? `${nonRelues} à relire` : "Carnet à jour"))));
  return out;
}

function cartePret() {
  const pd = prochainDevoir();
  const rows = Object.keys(MATIERES).filter(epreuveActive).map((m) => {
    const chs = CHAPITRES.filter((c) => c.mat === m && c.devoir && chapitreVu(c));
    return { m, n: chs.length, prets: chs.filter((c) => maitriseDe(c.id) >= 2).length };
  }).filter((r) => r.n);
  if (!rows.length) return null;
  const total = rows.reduce((a, r) => a + r.n, 0), prets = rows.reduce((a, r) => a + r.prets, 0);
  return h("section", { class: "carte", "aria-labelledby": "t-pret" },
    h("div", { class: "carte-titre" }, h("h2", { id: "t-pret" }, pd ? "Prête pour le devoir ?" : "Où tu en es"), h("span", { class: "puce" }, `${prets}/${total} chapitres prêts`)),
    h("div", { class: "pret" }, rows.map((r) => h("button", { type: "button", onclick: () => { UI.filtreMat = r.m; UI.seulementDevoir = true; location.hash = "#reviser"; } },
      h("span", { class: "nom" }, h("span", { class: "pt", style: `background:${MATIERES[r.m].couleur}` }), MATIERES[r.m].nom),
      h("span", { class: "barre", "aria-hidden": "true" }, h("i", { style: `width:${Math.round(r.prets / r.n * 100)}%` })),
      h("span", { class: "val" }, `${r.prets}/${r.n}`)))),
    h("p", { class: "petit" }, "Un chapitre est prêt quand tu le mets à « Correct » ou « Maîtrisé » dans sa fiche (Réviser › le chapitre), après les exercices."));
}

function carteSeance(fait) {
  const auj = todayKey();
  const nb = nbBlocsDuJour(auj), faits = blocsFaitsDuJour(auj);
  const rythme = `${libelleBlocs(nb)} chaque soir, ${DUREE_PAUSE} min de pause entre deux. Le premier bloc est toujours pour les maths.`;
  const enCours = lireSeanceEnCours();
  if (enCours) {
    const ou = enCours.phase === "pause" ? "en pause" : enCours.phase === "bilan" ? "il reste le bilan" : `bloc ${Math.min(enCours.iBloc + 1, enCours.plan.nb)} sur ${enCours.plan.nb}`;
    const b = enCours.plan.blocs[Math.min(enCours.iBloc, enCours.plan.blocs.length - 1)];
    const tard = enCours.phase !== "bilan" && blocsPossibles(1) === 0;
    return h("section", { class: "carte", "aria-labelledby": "titre-plan" },
      h("div", { class: "carte-titre" }, h("h2", { id: "titre-plan" }, `Séance en cours · ${ou}`)),
      h("p", { class: "sous" }, enCours.phase === "bilan" ? "Tous les blocs sont faits : remplis le bilan pour finir." : `${enCours.msBlocs.length} bloc${enCours.msBlocs.length > 1 ? "s" : ""} fait${enCours.msBlocs.length > 1 ? "s" : ""}. Prochain : ${b.titre} (${CHAP[b.chap].court}).`),
      tard ? bandeau("alerte", `Il est ${heureFr(new Date())} : plus le temps pour un bloc entier avant ${fmtHM(finTravailMin())}. Ouvre la séance pour la terminer, puis va dormir.`) : null,
      h("button", { class: "btn grand primaire", type: "button", onclick: () => lancerSoiree({ reprise: lireSeanceEnCours() || enCours }) }, icone("lecture"), tard ? "Terminer ma séance" : "Reprendre la séance"));
  }
  if (faits >= nb) {
    const bonusPossible = blocsPossibles(1) > 0;
    return h("section", { class: "carte", "aria-labelledby": "titre-plan" },
      h("div", { class: "carte-titre" }, h("h2", { id: "titre-plan" }, "Séance faite ce soir")),
      h("p", { class: "sous" }, `${pluriel(faits, "bloc")} sur ${nb} · ${fmtMin(fait)} de travail. ` + (bonusPossible ? "Bravo. Repose-toi, ou fais un bloc de plus." : `Bravo. Il est ${heureFr(new Date())} : ferme l’écran et va dormir, au lit à ${fmtHM(heureCoucher())}.`)),
      bonusPossible ? h("button", { class: "btn grand", type: "button", onclick: () => lancerSoiree({ bonus: true }) }, icone("lecture"), `Un bloc bonus de ${DUREE_BLOC} min`) : null);
  }
  const plan = planSeance(nb);
  if (!plan.blocs.length) {
    return h("section", { class: "carte" }, h("h2", { class: "h2" }, "Rien à réviser"), h("p", { class: "sous" }, "Toutes les matières sont décochées, ou tous les chapitres sont marqués « pas encore vu ». Va dans Plus pour cocher tes matières."));
  }
  const debut = Math.min(faits, plan.blocs.length - 1);
  const restePlan = plan.blocs.slice(debut);
  const possibles = blocsPossibles(restePlan.length);
  if (!possibles) return carteDormir(nb);
  const reste = restePlan.slice(0, possibles);
  const coupe = possibles < restePlan.length;
  const lignes = [];
  const ICO_ROLE = { sciences: "stylo", lettres: "bulle", langue: "cartes" };
  reste.forEach((b, k) => {
    if (k) lignes.push(h("li", { class: "pause" }, h("span", { class: "ico" }, icone("pause")), h("span", { class: "lbl" }, "Pause : lève-toi, bois de l’eau, pas de téléphone"), h("span", { class: "min tnum" }, `${DUREE_PAUSE} min`)));
    lignes.push(h("li", null, h("span", { class: "ico", style: `color:${MATIERES[b.mat].couleur}` }, icone(ICO_ROLE[b.role] || "quiz")),
      h("span", { class: "lbl" }, h("b", null, `${faits + k + 1}. ${b.titre}`), h("span", null, `${CHAP[b.chap].court} · ${ROLES_BLOC[b.role].detail}`)),
      h("span", { class: "min tnum" }, `${DUREE_BLOC} min`)));
  });
  const finPrevue = new Date(Date.now() + dureeSeance(reste.length) * 60000);
  const soir = new Date().getHours() >= 18 || new Date().getHours() < 5;
  return h("section", { class: "carte", "aria-labelledby": "titre-plan" },
    h("div", { class: "carte-titre" }, h("h2", { id: "titre-plan" }, faits ? `Il te reste ${pluriel(reste.length, "bloc")}` : `Ta séance de ce soir · ${fmtMin(dureeSeance(reste.length))}`)),
    h("p", { class: "sous" }, rythme),
    coupe ? bandeau("alerte", h("b", null, `Il est ${heureFr(new Date())}.`), ` Pour finir avant ${fmtHM(finTravailMin())} et être au lit à ${fmtHM(heureCoucher())}, ce soir c’est ${pluriel(possibles, "bloc")} au lieu de ${restePlan.length}. Demain, commence avant ${fmtHM(debutAuPlusTard(nb))} pour faire les ${nb}.`)
      : soir ? h("p", { class: "petit" }, icone("soir"), ` Si tu commences maintenant : fin vers ${heureFr(finPrevue)}, au lit à ${fmtHM(heureCoucher())}.`) : null,
    h("ol", { class: "plan" }, lignes),
    h("details", { class: "repli" }, h("summary", null, "Changer le programme de ce soir"),
      h("div", { class: "pile" }, plan.blocs.map((b, k) => k < debut || k >= debut + possibles ? null : h("div", { class: "rangee", style: "justify-content:space-between;border-top:1px solid var(--ligne);padding-top:8px" },
        h("span", null, h("b", null, `Bloc ${k + 1} · ${MATIERES[b.mat].nom}`), h("span", { class: "petit", style: "display:block" }, CHAP[b.chap].court)),
        h("span", { class: "rangee" },
          h("button", { class: "btn petit-btn", type: "button", onclick: () => changerChapitreMat(b.mat) }, "Autre chapitre"),
          k > 0 || b.mat !== "maths" ? h("button", { class: "btn petit-btn", type: "button", onclick: () => changerMatiere(k) }, "Autre matière") : null)))),
      h("p", { class: "petit" }, "Le bloc de maths reste chaque soir : c’est la matière qui demande le plus d’entraînement.")),
    h("button", { class: "btn grand primaire", type: "button", onclick: () => lancerSoiree() }, icone("lecture"), faits ? "Continuer ma séance" : "Commencer la séance"));
}
// Trop tard pour un bloc : le carnet ne lance pas de séance, il envoie dormir
function carteDormir(nb) {
  return h("section", { class: "carte dormir", "aria-labelledby": "titre-plan" },
    h("div", { class: "carte-titre" }, h("h2", { id: "titre-plan" }, icone("soir"), " C’est l’heure de dormir")),
    h("p", null, `Il est ${heureFr(new Date())}. Ta séance doit finir à ${fmtHM(finTravailMin())} pour que tu sois au lit à ${fmtHM(heureCoucher())} : il n’y a plus le temps pour un bloc de ${DUREE_BLOC} minutes.`),
    h("p", { class: "sous" }, "Ferme l’écran, prépare ton sac pour demain et va te coucher. Ce que tu as appris aujourd’hui se fixe pendant le sommeil : une nuit courte, c’est un devoir plus dur."),
    h("p", { class: "petit" }, `Demain, commence avant ${fmtHM(debutAuPlusTard(nb))} pour faire tes ${pluriel(nb, "bloc")}.`));
}

/* ---------- RÉVISER ---------- */
function vueReviser() {
  const dues = cartesDues().length;
  const nbExos = Object.entries(EXOS).filter(([id]) => CHAP[id] && epreuveActive(CHAP[id].mat)).reduce((a, [, l]) => a + l.length, 0);
  const pd = prochainDevoir();
  const out = [];
  out.push(h("div", { class: "page-titre" }, h("h1", null, "Réviser"), h("p", null, "Sept façons de travailler. Change de méthode quand tu sens que tu décroches.")));
  const tuile = (ico, nom, pourquoi, meta, action) => h("button", { class: "methode", type: "button", onclick: action },
    h("span", { class: "ico" }, icone(ico)), h("b", null, nom), h("span", null, pourquoi), meta ? h("span", { class: "meta" }, meta) : null);
  out.push(h("section", { class: "methodes", "aria-label": "Méthodes" },
    tuile("stylo", "Exercice corrigé", "S’entraîner comme au devoir, avec le corrigé pas à pas.", `${nbExos} exercices`, () => choisirChapitrePuis("probleme")),
    tuile("cartes", "Cartes mémoire", "Retenir formules, définitions, auteurs et mots.", dues ? `${pluriel(dues, "carte")} à revoir` : "À jour", () => ouvrirActivite("cartes", { mode: "dues" })),
    tuile("quiz", "Quiz", "Vérifier ce que tu sais vraiment.", null, () => choisirChapitrePuis("quiz")),
    tuile("note", "Rédaction", "Philo, français, histoire-géo, anglais : rédiger puis comparer avec un corrigé.", S.ia ? "Correction par Claude" : "Auto-correction guidée", () => choisirChapitrePuis("exercice")),
    tuile("bulle", "Explique-le", "Dire avec tes mots, voir ce qui manque.", S.dictee ? "À l’écrit ou à l’oral" : null, () => choisirChapitrePuis("explique")),
    tuile("chrono", "Minuteur", "25 min sur ton cahier, téléphone posé loin de toi.", null, () => ouvrirActivite("minuteur", {})),
    tuile("erreur", "Carnet d’erreurs", "Ne plus refaire les mêmes fautes.", erreursNonRelues().length ? `${erreursNonRelues().length} à relire` : "À jour", () => ouvrirActivite("erreurs", {}))));

  out.push(h("section", { class: "carte" }, h("div", { class: "carte-titre" }, h("h2", null, "Méthodes du devoir")),
    h("div", { class: "pile" }, METHODES.filter((m) => epreuveActive(m.mat)).map((m) => h("button", { class: "btn", type: "button", style: "justify-content:space-between;text-align:left", onclick: () => ouvrirMethode(m) }, h("span", null, m.titre), icone("fleche"))))));

  /* Chapitres */
  const filtres = [["tous", "Tout"], ...Object.values(MATIERES).filter((m) => epreuveActive(m.id) && aDuContenu(m.id)).map((m) => [m.id, m.nom])];
  if (UI.filtreMat !== "tous" && !(epreuveActive(UI.filtreMat) && aDuContenu(UI.filtreMat))) UI.filtreMat = "tous";
  const liste = h("div", { class: "liste-chap" });
  let groupe = null, n = 0;
  for (const c of CHAPITRES) {
    if (!epreuveActive(c.mat)) continue;
    if (UI.filtreMat !== "tous" && c.mat !== UI.filtreMat) continue;
    if (UI.seulementDevoir && !c.devoir && !c.socle) continue;
    const g = `${MATIERES[c.mat].nom} · ${c.groupe}`;
    if (g !== groupe) { liste.append(h("div", { class: "groupe" }, g)); groupe = g; }
    const st = statsCartesChap(c.id);
    const nx = (EXOS[c.id] || []).length;
    const infos = [!chapitreVu(c) ? "Pas encore vu en classe" : null, c.verifier ? "À vérifier avec ton cahier" : null, c.socle ? "Sert dans tous les exercices" : !c.devoir ? "Rappel, hors devoir" : null, `${st.sues}/${st.total} cartes sues`, nx ? pluriel(nx, "exercice corrigé", "exercices corrigés") : null].filter(Boolean).join(" · ");
    n++;
    liste.append(h("button", { class: "chap", type: "button", onclick: () => ouvrirChapitre(c.id), style: chapitreVu(c) ? null : "opacity:.6" },
      puceMaitrise(maitriseDe(c.id)),
      h("span", null, h("span", { class: "t" }, c.court), h("span", { class: "s", style: "display:block" }, infos)),
      h("span", { class: "jauge", "aria-hidden": "true" }, h("i", { style: `width:${st.total ? Math.round(st.sues / st.total * 100) : 0}%` }))));
  }
  if (!n) liste.append(h("p", { class: "sous" }, "Aucun chapitre avec ces filtres."));
  out.push(h("section", { class: "carte", "aria-labelledby": "titre-chap" },
    h("div", { class: "carte-titre" }, h("h2", { id: "titre-chap" }, "Chapitres")),
    choixUnique(filtres, UI.filtreMat, (v) => { UI.filtreMat = v; planifierRendu(); }),
    h("label", { class: "case" }, h("input", { type: "checkbox", checked: UI.seulementDevoir, onchange: (e) => { UI.seulementDevoir = e.target.checked; planifierRendu(); } }),
      h("span", null, pd ? `Seulement ce qui tombe au devoir du ${fmtDateCourte(pd.date)}` : "Seulement les chapitres du devoir")),
    liste));
  return out;
}
function choisirChapitrePuis(type) {
  const filtre = (c) => type === "probleme" ? (EXOS[c.id] || []).length > 0 : type === "exercice" ? aRedaction(c.id) : true;
  const ch0 = chapitreDuSoir();
  const ch = ch0 && filtre(ch0) ? ch0 : null;
  ouvrirFeuille({
    titre: TITRES_ACT[type] + " · quel chapitre ?",
    construire: (f) => {
      const lancer = (id) => { f.fermer(true); ouvrirActivite(type, { chap: id }); };
      const classes = classementChapitres().filter(filtre);
      const autres = CHAPITRES.filter((c) => epreuveActive(c.mat) && filtre(c) && !classes.includes(c));
      const bouton = (c) => h("button", { class: "chap", type: "button", onclick: () => lancer(c.id) }, puceMaitrise(maitriseDe(c.id)),
        h("span", null, h("span", { class: "t" }, `${MATIERES[c.mat].nom} · ${c.court}`), c.devoir ? null : h("span", { class: "s", style: "display:block" }, c.socle ? "Les bases, utiles dans tous les chapitres" : "Rappel, hors devoir")), icone("fleche"));
      f.corps.append(
        ch ? h("button", { class: "btn grand primaire", type: "button", onclick: () => lancer(ch.id) }, `Conseillé ce soir : ${MATIERES[ch.mat].nom} · ${ch.court}`) : null,
        h("p", { class: "petit" }, "Ou choisis (les plus utiles en premier) :"),
        h("div", { class: "pile" }, classes.map(bouton)),
        autres.length ? h("details", { class: "repli" }, h("summary", null, "Chapitres marqués « pas encore vu en classe »"), h("div", { class: "pile" }, autres.map(bouton))) : null);
    }
  });
}
function ouvrirMethode(m) {
  ouvrirFeuille({ titre: m.titre, construire: (f) => {
    f.corps.append(h("p", { class: "rich" }, rich(m.intro)),
      h("ol", { class: "plan" }, m.etapes.map(([t, d], k) => h("li", null, h("span", { class: "ico tnum" }, String(k + 1)), h("span", { class: "lbl" }, h("b", null, t), h("span", { class: "rich" }, rich(d))), h("span")))),
      m.pieges && m.pieges.length ? h("div", { class: "carte" }, h("h3", { class: "h2" }, "Les pièges"), h("ul", { style: "margin:0;padding-left:20px" }, m.pieges.map((x) => h("li", null, rich(x))))) : null,
      m.exemple ? h("details", { class: "repli" }, h("summary", null, "Un exemple rédigé"), h("div", { class: "rich", style: "line-height:1.6" }, rich(m.exemple))) : null);
  } });
}

/* ---------- Feuille chapitre ---------- */
function ecrireChapitre(id, changes) {
  const avant = Object.assign({}, S.chapitres.get(id) || {}); delete avant.id;
  Store.ecrire("chapitres", id, Object.assign(avant, changes, { maj: todayKey() }));
}
function ouvrirChapitre(id) {
  const c = CHAP[id];
  ouvrirFeuille({ titre: `${MATIERES[c.mat].nom} · ${c.court}`, construire: (f) => {
    const dessiner = () => {
      const st = statsCartesChap(id);
      const sq = statsQuiz([id]);
      const m = maitriseDe(id);
      const der = derniereSeanceChap(id);
      const errs = [...S.erreurs.values()].filter((e) => e.chap === id).length;
      const cartes = cartesDuChap(id);
      const exos = EXOS[id] || [];
      const vu = chapitreVu(c);
      const lancer = (type) => { f.fermer(true); ouvrirActivite(type, type === "cartes" ? { mode: "chap", chap: id } : { chap: id }); };
      vider(f.corps).append(
        h("div", { class: "puces" }, puceMatiere(c.mat), c.devoir ? h("span", { class: "puce devoir" }, "Au programme du devoir") : c.socle ? h("span", { class: "puce devoir" }, "Les bases : servent dans tout le devoir") : h("span", { class: "puce hors" }, "Rappel, hors devoir"),
          c.verifier ? h("span", { class: "puce verif" }, "À vérifier avec ton cahier") : null),
        h("h3", { style: "font-size:var(--t-l)" }, c.titre),
        c.verifier ? bandeau("alerte", "Ce thème est bien dans ton cahier (programme de 1ère D), mais on n’a pas encore la liste des leçons de ce devoir. Si ton professeur n’a pas encore fait cette leçon, coche « Pas encore vu en classe » : le carnet ne te la proposera plus le soir.") : null,
        h("label", { class: "case" }, h("input", { type: "checkbox", checked: !vu, onchange: (e) => { ecrireChapitre(id, { pasVu: e.target.checked }); setTimeout(dessiner, 0); } }),
          h("span", null, h("b", null, "Pas encore vu en classe"), h("span", { class: "petit", style: "display:block" }, "Coche si ton professeur n’a pas encore fait ce chapitre."))),
        h("div", null, h("label", { class: "champ" }, "Où tu en es sur ce chapitre"),
          h("div", { class: "segment", role: "group" }, NIVEAUX.map((lab, k) => h("button", { type: "button", "data-m": String(k), "aria-pressed": m === k ? "true" : "false", onclick: () => { ecrireChapitre(id, { maitrise: k }); setTimeout(dessiner, 0); } }, h("span", { class: "pt" }), lab))),
          h("p", { class: "petit", style: "margin-top:6px" }, `${st.sues}/${st.total} cartes sues · ${st.vues} déjà vues${sq.vues ? ` · quiz : ${sq.maitrisees}/${sq.total} maîtrisées` : ""} · ${pluriel(errs, "erreur")} notée${errs > 1 ? "s" : ""}${der ? " · dernière séance " + fmtDate(der) : ""}`)),
        c.fiche && c.fiche.length ? h("details", { class: "repli", open: true }, h("summary", null, "La fiche du chapitre"), ficheEl(c)) : null,
        h("div", { class: "rangee etire" },
          exos.length ? h("button", { class: "btn primaire", type: "button", onclick: () => lancer("probleme") }, icone("stylo"), `Exercices (${exos.length})`) : null,
          h("button", { class: "btn", type: "button", onclick: () => lancer("cartes") }, icone("cartes"), "Cartes"),
          h("button", { class: "btn", type: "button", onclick: () => lancer("quiz") }, icone("quiz"), "Quiz")),
        h("div", { class: "rangee etire" },
          aRedaction(id) ? h("button", { class: "btn", type: "button", onclick: () => lancer("exercice") }, icone("note"), "Rédaction") : null,
          h("button", { class: "btn", type: "button", onclick: () => lancer("explique") }, icone("bulle"), "Explique-le")),
        (c.sujets || []).length ? h("details", { class: "repli" }, h("summary", null, "Sujets de rédaction"), h("ul", null, c.sujets.map((s) => h("li", null, rich(s.texte))))) : null,
        h("details", { class: "repli" }, h("summary", null, `Les ${cartes.length} cartes du chapitre`),
          h("div", { class: "pile" }, cartes.map((k) => {
            const p = S.progres.get(k.id);
            return h("div", { class: "sujet", style: "padding:10px 12px" }, h("div", { class: "rangee", style: "justify-content:space-between" }, h("b", null, rich(k.recto)), h("span", { class: "puce" }, p ? `Boîte ${p.boite}/5` : "Nouvelle")),
              h("p", { class: "sous" }, rich(k.verso)),
              k.origine !== "depart" ? h("button", { class: "btn fantome petit-btn danger", type: "button", onclick: async () => { const v = await dialogue({ titre: "Supprimer cette carte ?", boutons: [{ label: "Supprimer", valeur: "oui", cls: "primaire" }, { label: "Annuler", valeur: "non" }] }); if (v === "oui") { Store.supprimer("cartes", k.id); setTimeout(dessiner, 0); } } }, "Supprimer") : null);
          }))),
        h("div", { class: "rangee etire" },
          h("button", { class: "btn", type: "button", onclick: () => formCarte(id, dessiner) }, icone("plus"), "Ajouter une carte"),
          S.ia ? h("button", { class: "btn", type: "button", onclick: () => genererCartes(id, dessiner) }, icone("ia"), "8 cartes par Claude") : null));
    };
    dessiner();
  } });
}
async function genererCartes(id, apres) {
  const c = CHAP[id];
  const deja = cartesDuChap(id).map((k) => k.recto);
  toast("Claude prépare 8 cartes…");
  try {
    const r = await demanderJSON(`Tu es professeur de ${MATIERES[c.mat].long} ${NIVEAU_IA}. Crée 8 cartes mémoire pour le chapitre « ${c.titre} ».
Recto : une notion, une formule ou une question courte. Verso : la réponse exacte en 1 à 3 phrases simples. N’invente aucun chiffre ni aucune date dont tu n’es pas sûr.
Ne reprends pas ces notions déjà présentes : ${deja.join(" ; ")}.
Réponds uniquement avec un objet JSON valide : {"cartes":[{"recto":"...","verso":"..."}]}`);
    const cartes = (r.cartes || []).filter((k) => k && k.recto && k.verso).slice(0, 10);
    if (!cartes.length) throw { code: "format" };
    cartes.forEach((k) => Store.ecrire("cartes", "u-" + uid(), { chap: id, recto: String(k.recto).slice(0, 300), verso: String(k.verso).slice(0, 1200), origine: "ia", date: todayKey() }));
    toast(`${cartes.length} cartes ajoutées au chapitre.`);
    if (apres) setTimeout(apres, 0);
  } catch (e) { toast(messageErreurIA(e)); }
}

/* ---------- Formulaires ---------- */
//@@COPIE function formCarte(chapId, apres) {@@function formNote(existante) {
function formNote(existante) {
  ouvrirFeuille({ titre: existante ? "Modifier la note" : "Ajouter une note", construire: (f) => {
    const n = Object.assign({ date: todayKey(), mat: "maths", valeur: "", sur: 20, coef: 1, type: "Devoir", commentaire: "" }, existante || {});
    f.corps.append(
      h("label", { class: "champ" }, "Matière", h("select", { id: "n-mat", onchange: (e) => { n.mat = e.target.value; } }, MATIERES_NOTES().map(([k, lab]) => h("option", { value: k, selected: k === n.mat }, lab)))),
      h("div", { class: "rangee etire" },
        h("label", { class: "champ" }, "Note", h("input", { type: "text", id: "n-val", inputmode: "decimal", autocomplete: "off", value: n.valeur === "" ? "" : String(n.valeur).replace(".", ","), oninput: (e) => { n.valeur = e.target.value; } })),
        h("label", { class: "champ" }, "Sur", h("input", { type: "number", id: "n-sur", min: "1", value: String(n.sur), oninput: (e) => { n.sur = e.target.value; } })),
        h("label", { class: "champ" }, "Poids", h("input", { type: "text", id: "n-coef", inputmode: "decimal", value: String(n.coef).replace(".", ","), oninput: (e) => { n.coef = e.target.value; } }))),
      h("label", { class: "champ" }, "Type", choixUnique([["Interro", "Interro"], ["Devoir", "Devoir"], ["Composition", "Composition"], ["Exposé", "Exposé"]], n.type, (v) => { n.type = v; })),
      h("label", { class: "champ" }, "Date", h("input", { type: "date", id: "n-date", value: n.date, oninput: (e) => { n.date = e.target.value; } })),
      h("label", { class: "champ" }, "Remarque du professeur (facultatif)", h("input", { type: "text", id: "n-com", value: n.commentaire || "", oninput: (e) => { n.commentaire = e.target.value; } })),
      h("div", { class: "pile" },
        h("button", { class: "btn grand primaire", type: "button", onclick: () => {
          const v = Number(String(n.valeur).trim().replace(",", ".")), sur = Number(String(n.sur).replace(",", ".")) || 20, coef = Number(String(n.coef).replace(",", ".")) || 1;
          if (!Number.isFinite(v) || v < 0 || v > sur) { toast(`Entre une note entre 0 et ${sur}.`); return; }
          if (!/^\d{4}-\d{2}-\d{2}$/.test(n.date)) { toast("Choisis une date."); return; }
          Store.ecrire("notes", existante ? existante.id : uid(), { date: n.date, mat: n.mat, valeur: v, sur, coef, type: n.type, commentaire: (n.commentaire || "").trim() });
          f.fermer(true); toast("Note enregistrée.");
        } }, "Enregistrer"),
        existante ? h("button", { class: "btn danger", type: "button", onclick: () => { Store.supprimer("notes", existante.id); f.fermer(true); } }, "Supprimer cette note") : null));
  } });
}
function formErreur() {
  ouvrirFeuille({ titre: "Noter une erreur", construire: (f) => {
    const e = { mat: "maths", chap: "", type: "cours", description: "", aRetenir: "" };
    const selChap = h("select", { id: "e-chap", onchange: (ev) => { e.chap = ev.target.value; } });
    const majChaps = () => { vider(selChap).append(h("option", { value: "" }, "— Aucun en particulier —"), ...CHAPITRES.filter((c) => c.mat === e.mat).map((c) => h("option", { value: c.id }, c.court))); e.chap = ""; };
    majChaps();
    f.corps.append(
      h("p", { class: "sous" }, "Une copie rendue, un exercice raté ? Note l’erreur tout de suite : elle reviendra dans tes séances jusqu’à ce que tu la relises."),
      h("label", { class: "champ" }, "Matière", h("select", { id: "e-mat", onchange: (ev) => { e.mat = ev.target.value; majChaps(); } }, Object.values(MATIERES).map((m) => h("option", { value: m.id }, m.long)))),
      h("label", { class: "champ" }, "Chapitre", selChap),
      h("label", { class: "champ" }, "Type d’erreur", h("select", { id: "e-type", onchange: (ev) => { e.type = ev.target.value; } }, ERREUR_TYPES.map((t) => h("option", { value: t.id }, t.nom)))),
      h("label", { class: "champ" }, "Ce qui n’allait pas", h("textarea", { id: "e-desc", style: "min-height:90px", placeholder: "ex. J’ai utilisé un arrangement au lieu d’une combinaison", oninput: (ev) => { e.description = ev.target.value; } })),
      h("label", { class: "champ" }, "Ce que je dois retenir", h("textarea", { id: "e-ret", style: "min-height:90px", placeholder: "ex. Tirage simultané : l’ordre ne compte pas, donc combinaison", oninput: (ev) => { e.aRetenir = ev.target.value; } })),
      h("button", { class: "btn grand primaire", type: "button", onclick: () => {
        if (!e.description.trim()) { toast("Décris l’erreur en une phrase."); return; }
        ajouterErreur({ ...e, description: e.description.trim(), aRetenir: e.aRetenir.trim(), chap: e.chap || null });
        f.fermer(true); toast("Erreur ajoutée au carnet.");
      } }, "Ajouter au carnet"));
  } });
}
function formMot() {
  const qui = prenomEleve() || "elle";
  ouvrirFeuille({ titre: `Le mot pour ${qui}`, construire: (f) => {
    let texte = S.config.mot.texte || "";
    f.corps.append(
      h("p", { class: "sous" }, "Il s’affiche en haut de son écran « Ce soir ». Un encouragement, un défi de la semaine, un rappel."),
      h("textarea", { id: "mot-txt", value: texte, placeholder: "ex. Défi : 3 blocs chaque soir jusqu’au devoir. Les maths d’abord, tu vas y arriver.", oninput: (e) => { texte = e.target.value; } }),
      h("div", { class: "pile" },
        h("button", { class: "btn grand primaire", type: "button", onclick: () => { majConfig({ mot: { texte: texte.trim().slice(0, 600), date: todayKey() } }); f.fermer(true); } }, "Publier le mot"),
        S.config.mot.texte ? h("button", { class: "btn danger", type: "button", onclick: () => { majConfig({ mot: { texte: "", date: null } }); f.fermer(true); } }, "Effacer le mot") : null));
  } });
}

/* ============================================================
   PROGRÈS (aussi la vue de suivi de Will, sur son PC) + graphiques
   ============================================================ */
function vueProgres() {
  const auj = todayKey();
  const lundi = lundiDe(auj); const mpj = minutesParJour();
  let semaine = 0, joursOk = 0, vise = 0;
  for (let k = 0; k < 7; k++) { const d = addDays(lundi, k), m = mpj.get(d) || 0; semaine += m; vise += objectifDuJour(d); if (m >= objectifDuJour(d)) joursOk++; }
  const ser = series();
  const moy = moyenneGenerale(); const prev = Number(S.config.moyennePrecedente);
  const ses7 = [...S.sessions.values()].filter((s) => s.date >= addDays(auj, -6));
  const pauses7 = ses7.flatMap((s) => s.pauses || []), depasse7 = pauses7.filter((x) => x.depasse > 0);
  const blocs7 = ses7.reduce((a, s) => a + ((s.blocs && s.blocs.faits) || 0), 0);
  const exos7 = [...S.exercices.values()].filter((e) => e.date >= addDays(auj, -6));
  const exosMoy = exos7.length ? exos7.reduce((a, e) => a + (Number(e.note) || 0), 0) / exos7.length : null;
  const pd = prochainDevoir();

  const out = [];
  out.push(h("div", { class: "entete" }, h("div", { class: "page-titre" }, h("h1", null, "Progrès"), h("p", null, prenomEleve() ? `La progression de ${prenomEleve()}, mise à jour automatiquement.` : "Toute la progression, mise à jour automatiquement.")), etatSync()));

  const tuile = (lab, v, d, cls) => h("div", { class: "tuile" }, h("span", { class: "lab" }, lab), h("span", { class: "v" }, v), d ? h("span", { class: "d " + (cls || "") }, d) : null);
  let dMoy = prev ? `L’an dernier : ${fmtNote(prev)}` : "Moyenne simple de tes matières";
  let clsMoy = "";
  if (moy != null && prev) { const ecart = moy - prev; dMoy = `${ecart >= 0 ? "+" : "−"}${fmtNote(Math.abs(ecart))} par rapport à l’an dernier (${fmtNote(prev)})`; clsMoy = ecart >= 0 ? "haut" : "bas"; }
  out.push(h("section", { class: "tuiles", "aria-label": "Résumé" },
    tuile("Cette semaine", fmtMin(semaine), `${pluriel(joursOk, "soir")} à l’objectif · visé : ${fmtMin(vise)}`),
    tuile("Série en cours", pluriel(ser.actuelle, "soir"), `Record : ${pluriel(ser.record, "soir")}`),
    tuile("Exercices corrigés (7 j)", String(exos7.length), exosMoy != null ? `Note moyenne : ${fmtNote(exosMoy)}/20` : "Aucun cette semaine"),
    tuile(pd ? "Prochain devoir" : "Moyenne indicative", pd ? (daysBetween(auj, pd.date) > 0 ? `J-${daysBetween(auj, pd.date)}` : "Jour J") : (moy != null ? fmtNote(moy) : "—"), pd ? fmtDateLongue(pd.date) : dMoy, pd ? "" : clsMoy)));

  const grille = h("div", { class: "grille-progres" });
  out.push(grille);

  /* Minutes de travail */
  const obj = objectifDuJour(auj);
  grille.append(h("section", { class: "carte large", "aria-labelledby": "t-min" },
    h("div", { class: "carte-titre" }, h("h2", { id: "t-min" }, "Travail du soir · 4 dernières semaines"),
      h("button", { class: "btn fantome petit-btn", type: "button", onclick: () => { UI.vueTableau = !UI.vueTableau; planifierRendu(); } }, UI.vueTableau ? "Voir le graphique" : "Voir les chiffres")),
    UI.vueTableau ? h("div", { class: "tab-zone" }, tableauMinutes()) : h("div", { class: "graphe", id: "g-minutes", role: "img", "aria-label": "Minutes de travail par jour sur 28 jours" }),
    UI.vueTableau ? null : h("div", { class: "legende" },
      h("span", null, h("span", { class: "k", style: "background:var(--barre)" }), `Objectif atteint (${obj} min ce soir)`),
      h("span", null, h("span", { class: "k", style: "background:var(--barre-part)" }), "En dessous")),
    h("p", { class: "petit" }, `7 derniers jours : ${pluriel(blocs7, "bloc")} de ${DUREE_BLOC} min.`),
    pauses7.length ? h("p", { class: "petit" }, depasse7.length ? `Pauses : ${depasse7.length} dépassée${depasse7.length > 1 ? "s" : ""} sur ${pauses7.length}, soit ${fmtMin(depasse7.reduce((a, x) => a + x.depasse, 0))} de sommeil en moins.` : `Pauses : ${pauses7.length} sur ${pauses7.length} tenues en ${DUREE_PAUSE} min.`) : null));

  /* Sommeil : à quelle heure le travail s’est arrêté, soir après soir */
  grille.append(carteSommeil());

  /* Notes */
  const notes = notesTriees().slice().reverse();
  grille.append(h("section", { class: "carte", "aria-labelledby": "t-notes" },
    h("div", { class: "carte-titre" }, h("h2", { id: "t-notes" }, "Notes et moyennes"), h("button", { class: "btn petit-btn", type: "button", onclick: () => formNote() }, icone("plus"), "Ajouter")),
    h("div", { class: "graphe", id: "g-notes", role: "img", "aria-label": "Moyenne par matière, sur 20" }),
    notes.length ? h("details", { class: "repli" }, h("summary", null, `Toutes les notes (${notes.length})`),
      h("div", { class: "tab-zone" }, h("table", { class: "tab" }, h("thead", null, h("tr", null, h("th", null, "Date"), h("th", null, "Matière"), h("th", null, "Type"), h("th", { style: "text-align:right" }, "Note"), h("th", { style: "text-align:right" }, "Poids"))),
        h("tbody", null, notes.map((n) => h("tr", { style: "cursor:pointer", onclick: () => formNote(n), title: "Modifier" }, h("td", null, fmtDateCourte(n.date)), h("td", null, nomMatiereNote(n.mat)), h("td", null, n.type || ""), h("td", { class: "n" }, `${fmtNote(n.valeur)}/${n.sur || 20}`), h("td", { class: "n" }, fmtNote(n.coef || 1)))))))) : null,
    moyennesParMatiere(),
    moy != null ? h("p", { class: "petit" }, `Moyenne indicative : ${fmtNote(moy)}/20 (moyenne simple des matières, sans les coefficients de la classe).`) : null));

  /* Défauts */
  const errs = [...S.erreurs.values()];
  const parType = ERREUR_TYPES.map((t) => ({ t, n: errs.filter((e) => e.type === t.id).length })).filter((x) => x.n).sort((a, b) => b.n - a.n);
  grille.append(h("section", { class: "carte", "aria-labelledby": "t-err" },
    h("div", { class: "carte-titre" }, h("h2", { id: "t-err" }, "Les erreurs, en chiffres"), h("button", { class: "btn petit-btn", type: "button", onclick: () => formErreur() }, icone("plus"), "Noter")),
    errs.length ? h("div", { class: "graphe", id: "g-erreurs", role: "img", "aria-label": "Nombre d’erreurs notées par type" }) : h("div", { class: "vide" }, icone("erreur"), h("p", null, "Aucune erreur notée pour l’instant. Elles arrivent ici depuis les exercices, les quiz et les copies rendues.")),
    parType.length ? h("div", { class: "pile" }, h("b", null, "À travailler en priorité"), parType.slice(0, 3).map((x) => h("div", { class: "erreur-item" }, h("b", null, `${x.t.nom} · ${pluriel(x.n, "fois", "fois")}`), h("p", { class: "sous" }, x.t.conseil)))) : null,
    erreursNonRelues().length ? h("button", { class: "btn", type: "button", onclick: () => ouvrirActivite("erreurs", {}) }, `Relire les ${erreursNonRelues().length} erreurs en attente`) : null));

  /* Chapitres */
  const matsActives = Object.keys(MATIERES).filter((m) => epreuveActive(m) && aDuContenu(m));
  grille.append(h("section", { class: "carte", "aria-labelledby": "t-chap" },
    h("div", { class: "carte-titre" }, h("h2", { id: "t-chap" }, "Chapitre par chapitre")),
    h("div", { class: "legende" }, [1, 2, 3, 0].map((m) => puceMaitrise(m))),
    ...matsActives.map((mat) => h("div", { class: "pile", style: "gap:6px" },
      h("b", null, MATIERES[mat].long),
      h("div", { class: "chips-maitrise" }, CHAPITRES.filter((c) => c.mat === mat).map((c) => h("button", { class: `chip-m m${maitriseDe(c.id)}${(c.devoir || c.socle) && chapitreVu(c) ? "" : " hors"}`, type: "button", title: c.titre + (c.devoir || c.socle ? "" : " (rappel, hors devoir)") + (chapitreVu(c) ? "" : " (pas encore vu en classe)"), onclick: () => ouvrirChapitre(c.id) }, h("span", { class: "pt" }), c.court))))),
    h("p", { class: "petit" }, "Bordure en pointillés : hors devoir, ou pas encore vu en classe."),
    (() => {
      const q = statsQuiz(CHAPITRES.filter((c) => epreuveActive(c.mat)).map((c) => c.id));
      return h("p", { class: "petit" }, q.vues ? `Quiz : ${q.maitrisees} questions maîtrisées sur ${q.total} · ${q.ecrire} réponses écrites sans propositions.` : `Quiz : ${q.total} questions, aucune encore tentée.`);
    })()));

  /* Le mot pour elle */
  const qui = prenomEleve() || "elle";
  grille.append(h("section", { class: "carte mot", "aria-labelledby": "t-mot" },
    h("div", { class: "carte-titre" }, h("h2", { id: "t-mot" }, `Le mot pour ${qui}`), h("button", { class: "btn petit-btn", type: "button", onclick: formMot }, icone("stylo"), S.config.mot.texte ? "Modifier" : "Écrire")),
    S.config.mot.texte ? h("p", { class: "mot-txt" }, S.config.mot.texte) : h("p", { class: "sous" }, `${coach()} peut écrire ici un encouragement ou un défi : il s’affiche en haut de l’écran « Ce soir ».`),
    h("p", { class: "petit" }, `Tout ce qui est sur cette page est partagé entre ${prenomEleve() || "toi"} et ${coach()}.`)));

  /* Journal */
  const ses = sessionsTriees().slice(0, 15);
  grille.append(h("section", { class: "carte large", "aria-labelledby": "t-journal" },
    h("div", { class: "carte-titre" }, h("h2", { id: "t-journal" }, "Journal des séances")),
    ses.length ? h("ul", { class: "journal" }, ses.map((s) => h("li", null,
      h("span", { class: "jd" }, fmtDate(s.date)),
      h("span", null, h("span", { class: "jt" }, (s.etapes || []).map((e) => e.resume || TITRES_ACT[e.type]).filter(Boolean).join(" · ") || "Séance"),
        h("span", { class: "petit", style: "display:block" }, [s.blocs ? `${s.blocs.bonus ? "bonus · " : ""}${s.blocs.faits}/${s.blocs.prevus} bloc${s.blocs.prevus > 1 ? "s" : ""}` : null, s.pauses && s.pauses.length ? (s.pauseDepassee ? `pauses dépassées de ${fmtMin(s.pauseDepassee)}` : "pauses tenues") : null, s.fin ? `fini à ${heureFr(new Date(s.fin))}` : null, s.coupeSommeil ? "arrêtée pour dormir" : null, s.forme ? `forme : ${FORMES[s.forme]}` : null].filter(Boolean).join(" · ")),
        s.commentaire ? h("span", { class: "jc", style: "display:block" }, `« ${s.commentaire} »`) : null),
      h("span", { class: "jm" }, fmtMin(s.minutes))))) : h("div", { class: "vide" }, icone("chrono"), h("p", null, "Aucune séance enregistrée. La première apparaîtra ici dès ce soir."))));
  return out;
}
// Les 7 derniers soirs : heure où le travail s’est arrêté, comparée à l’heure limite (coucher − 30 min)
function carteSommeil() {
  const auj = todayKey();
  const parSoir = new Map();
  for (const s of S.sessions.values()) {
    if (!s.fin || !s.minutes) continue;
    const d = soireeDe(s.fin);
    const p = parSoir.get(d) || { fin: 0, forme: null, coupe: false };
    if (s.fin > p.fin) { p.fin = s.fin; if (s.forme) p.forme = s.forme; }
    else if (s.forme && !p.forme) p.forme = s.forme;
    if (s.coupeSommeil) p.coupe = true;
    parSoir.set(d, p);
  }
  const jours = []; for (let k = 0; k < 7; k++) jours.push(addDays(auj, -k));
  const avec = jours.filter((d) => parSoir.has(d));
  const aLHeure = avec.filter((d) => finiAvantLimite(parSoir.get(d).fin)).length;
  const lim = fmtHM(finTravailMin());
  return h("section", { class: "carte", "aria-labelledby": "t-sommeil" },
    h("div", { class: "carte-titre" }, h("h2", { id: "t-sommeil" }, "Sommeil · fin du travail"), h("span", { class: "puce" }, `Au lit à ${fmtHM(heureCoucher())}`)),
    h("p", { class: "sous" }, `Le travail s’arrête au plus tard à ${lim}, pour 30 minutes sans écran avant de dormir.`),
    avec.length ? h("ul", { class: "nuits", "aria-label": "Heure de fin du travail, 7 derniers soirs" }, jours.map((d) => {
      const nom = d === auj ? "Ce soir" : fmtDate(d);
      const p = parSoir.get(d);
      if (!p) return h("li", { class: "sans" }, h("span", { class: "jd" }, nom), h("span", { class: "h tnum" }, "—"), h("span", { class: "etat" }, d === auj ? "pas encore" : "pas de séance"));
      const ok = finiAvantLimite(p.fin);
      return h("li", null, h("span", { class: "jd" }, nom), h("span", { class: "h tnum" }, heureFr(new Date(p.fin))),
        h("span", { class: "etat" }, icone(ok ? "coche" : "erreur", ok ? "i-ok" : "i-tard"), ok ? "à l’heure" : "trop tard"),
        h("span", { class: "forme" }, p.forme ? FORMES[p.forme] : ""));
    })) : h("div", { class: "vide" }, icone("soir"), h("p", null, "L’heure de fin de chaque séance s’affichera ici, soir après soir.")),
    avec.length ? h("p", { class: "petit" }, `${aLHeure} soir${aLHeure > 1 ? "s" : ""} sur ${avec.length} fini${aLHeure > 1 ? "s" : ""} à l’heure (avant ${lim}). À droite : la forme notée au bilan.`) : null);
}
//@@COPIE function moyennesParMatiere() {@@function tableauMinutes() {
function tableauMinutes() {
  const auj = todayKey(); const mpj = minutesParJour();
  const lignes = [];
  for (let k = 0; k < 28; k++) { const d = addDays(auj, -k); lignes.push(h("tr", null, h("td", null, fmtDate(d)), h("td", { class: "n" }, fmtMin(mpj.get(d) || 0)), h("td", { class: "n" }, fmtMin(objectifDuJour(d))))); }
  return h("table", { class: "tab" }, h("thead", null, h("tr", null, h("th", null, "Jour"), h("th", { style: "text-align:right" }, "Travail"), h("th", { style: "text-align:right" }, "Objectif"))), h("tbody", null, lignes));
}

/* ---------- Graphiques (SVG dessinés à la largeur réelle) ---------- */
function dessinerGraphes() {
  const a = document.getElementById("g-minutes"); if (a) grapheMinutes(a);
  const b = document.getElementById("g-notes"); if (b) grapheMoyennes(b);
  const c = document.getElementById("g-erreurs"); if (c) grapheErreurs(c);
}
//@@COPIE function bulle(conteneur) {@@function grapheMinutes(el) {
function grapheMinutes(el) {
  vider(el);
  const auj = todayKey(); const obj = objectifDuJour(auj); const mpj = minutesParJour();
  const jours = []; for (let k = 27; k >= 0; k--) jours.push(addDays(auj, -k));
  const vals = jours.map((d) => mpj.get(d) || 0);
  const objs = jours.map((d) => objectifDuJour(d));
  const W = Math.max(300, el.clientWidth || 600), H = 200;
  const m = { l: 36, r: 10, t: 26, b: 30 };
  const iw = W - m.l - m.r, ih = H - m.t - m.b;
  const maxV = Math.max(...objs.map((o) => o * 1.35), ...vals);
  const pas = maxV > 150 ? 60 : maxV > 75 ? 30 : 15;
  const yMax = Math.ceil(maxV / pas) * pas;
  const y = (v) => m.t + ih - (v / yMax) * ih;
  const base = m.t + ih;
  const bande = iw / jours.length, bw = Math.min(24, Math.max(4, bande - 2));
  const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, width: W, height: H });
  for (let v = 0; v <= yMax; v += pas) {
    svg.append(sv("line", { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v), stroke: v === 0 ? "var(--axe)" : "var(--grille)", "stroke-width": 1 }));
    svg.append(sv("text", { x: m.l - 6, y: y(v) + 4, "text-anchor": "end", class: "tnum" }, v === 0 ? "0" : String(v)));
  }
  svg.append(sv("text", { x: m.l - 6, y: m.t - 14, "text-anchor": "end" }, "min"));
  jours.forEach((d, i) => {
    const v = vals[i]; const x = m.l + i * bande + (bande - bw) / 2;
    if (v > 0) svg.append(sv("path", { d: barreArrondie(x, y(v), bw, base), fill: v >= objs[i] ? "var(--barre)" : "var(--barre-part)" }));
    const dt = parseKey(d);
    if (dt.getDay() === 1 || d === auj) svg.append(sv("text", { x: x + bw / 2, y: base + 16, "text-anchor": "middle", class: d === auj ? "lab-fort" : "" }, d === auj ? "auj." : fmtDateCourte(d)));
  });
  const yo = y(obj);
  svg.append(sv("path", { d: jours.map((d, i) => `${i ? "L" : "M"}${m.l + i * bande},${y(objs[i])} H${m.l + (i + 1) * bande}`).join(" "), fill: "none", stroke: "var(--encre-3)", "stroke-width": 1 }));
  svg.append(sv("text", { x: W - m.r, y: yo - 5, "text-anchor": "end", class: "lab-fort" }, `objectif ${obj} min`));
  const b = bulle(el);
  jours.forEach((d, i) => {
    const zone = sv("rect", { x: m.l + i * bande, y: m.t, width: bande, height: ih + 20, fill: "transparent", style: "cursor:pointer" });
    const montrer = () => b.montrer(m.l + i * bande + bande / 2, Math.min(y(vals[i]), y(objs[i])), h("b", null, fmtDate(d)), h("div", null, `${fmtMin(vals[i])} de travail sur ${fmtMin(objs[i])}`));
    zone.addEventListener("pointerenter", montrer); zone.addEventListener("pointerdown", montrer);
    zone.addEventListener("pointerleave", () => b.cacher());
    svg.append(zone);
  });
  el.prepend(svg);
}
// Moyenne de chaque matière sur 20 : une barre par matière, la ligne des 10 en repère
function grapheMoyennes(el) {
  vider(el);
  const rows = MATIERES_NOTES().map(([k, lab]) => ({ k, lab, v: moyenneMatiere(k), n: [...S.notes.values()].filter((n) => n.mat === k).length })).filter((r) => r.v != null);
  if (!rows.length) { el.append(h("div", { class: "vide" }, icone("note"), h("p", null, "Ajoute tes notes d’interros et de devoirs : la moyenne de chaque matière apparaîtra ici."))); return; }
  const W = Math.max(280, el.clientWidth || 400);
  const lw = Math.min(150, Math.round(W * 0.34));
  const rh = 30, H = rows.length * rh + 22;
  const x0 = lw + 8, x1 = W - 40;
  const x = (v) => x0 + (x1 - x0) * clamp(v, 0, 20) / 20;
  const svg = sv("svg", { viewBox: `0 0 ${W} ${H}`, width: W, height: H });
  for (const v of [0, 5, 10, 15, 20]) {
    svg.append(sv("line", { x1: x(v), x2: x(v), y1: 0, y2: H - 18, stroke: v === 0 ? "var(--axe)" : v === 10 ? "var(--encre-3)" : "var(--grille)", "stroke-width": 1 }));
    svg.append(sv("text", { x: x(v), y: H - 4, "text-anchor": "middle", class: "tnum" + (v === 10 ? " lab-fort" : "") }, String(v)));
  }
  const b = bulle(el);
  rows.forEach((r, i) => {
    const yc = i * rh + rh / 2;
    const w = Math.max(3, x(r.v) - x0), r4 = Math.min(4, w / 2);
    svg.append(sv("text", { x: lw, y: yc + 4, "text-anchor": "end", class: "lab-fort" }, r.lab));
    svg.append(sv("path", { d: `M${x0},${yc - 8} H${x0 + w - r4} Q${x0 + w},${yc - 8} ${x0 + w},${yc - 8 + r4} V${yc + 8 - r4} Q${x0 + w},${yc + 8} ${x0 + w - r4},${yc + 8} H${x0} Z`, fill: r.v >= 10 ? "var(--barre)" : "var(--barre-part)" }));
    svg.append(sv("text", { x: x0 + w + 6, y: yc + 4, class: "tnum" }, fmtNote(r.v)));
    const zone = sv("rect", { x: 0, y: yc - rh / 2, width: W, height: rh, fill: "transparent", style: "cursor:pointer" });
    const montrer = () => b.montrer(x(r.v), yc - 8, h("b", null, `${r.lab} : ${fmtNote(r.v)}/20`), h("div", null, pluriel(r.n, "note")));
    zone.addEventListener("pointerenter", montrer); zone.addEventListener("pointerdown", montrer); zone.addEventListener("pointerleave", () => b.cacher());
    svg.append(zone);
  });
  el.prepend(svg);
}
//@@COPIE function grapheErreurs(el) {@@/* ============================================================\n   PLUS
/* ============================================================
   PLUS : réglages, matières, dates des devoirs, à propos
   ============================================================ */
function vuePlus() {
  const c = S.config; const auj = todayKey();
  const ligne = (lab, val, action) => h("div", { class: "rangee", style: "justify-content:space-between;border-top:1px solid var(--ligne);padding-top:10px" },
    h("span", null, h("span", { class: "petit", style: "display:block" }, lab), h("b", null, val)), action ? h("button", { class: "btn petit-btn", type: "button", onclick: action }, "Modifier") : null);
  const out = [];
  out.push(h("div", { class: "page-titre" }, h("h1", null, "Plus"), h("p", null, "Réglages, matières, dates des devoirs et méthode.")));

  out.push(h("section", { class: "carte", "aria-labelledby": "t-profil" }, h("h2", { id: "t-profil", class: "h2" }, "Profil et objectif"),
    ligne("Prénom", c.prenom || "Pas renseigné", formProfil),
    ligne("Séance du soir", `${libelleBlocs(nbBlocsDuJour())} · ${fmtMin(dureeSeance(nbBlocsDuJour()))} avec les pauses`, formRythme),
    ligne("Heure du coucher", `${fmtHM(heureCoucher())} · travail fini au plus tard à ${fmtHM(finTravailMin())}`, formRythme),
    ligne("Moyenne générale de l’an dernier (2nde)", c.moyennePrecedente ? fmtNote(c.moyennePrecedente) : "—", formProfil),
    ligne("Qui suit ce carnet avec toi", coach(), formProfil)));

  const pd = prochainDevoir();
  out.push(h("section", { class: "carte", "aria-labelledby": "t-dev" }, h("div", { class: "carte-titre" }, h("h2", { id: "t-dev" }, "Dates de mes devoirs"), h("button", { class: "btn petit-btn", type: "button", onclick: formDevoirs }, icone("calendrier"), "Modifier")),
    h("p", { class: "sous" }, "Le carnet compte les jours jusqu’au prochain devoir et donne plus de place, le soir, à la matière dont le devoir approche."),
    h("ul", { class: "dates" }, Object.values(MATIERES).filter((m) => epreuveActive(m.id)).map((m) => { const d = dateDevoir(m.id); return h("li", { class: d && d < auj ? "passe" : "" }, h("span", { class: "dd" }, d ? fmtDateCourte(d) : "—"), h("span", null, m.long), h("span")); })),
    pd ? h("p", { class: "petit" }, `Prochain : ${listeNoms(pd.mats)}, ${fmtDateLongue(pd.date)}.`) : null));

  out.push(h("section", { class: "carte", "aria-labelledby": "t-epr" }, h("h2", { id: "t-epr", class: "h2" }, "Mes matières"),
    h("p", { class: "sous" }, "Décoche une matière pour que le carnet ne te la propose plus (par exemple pendant la semaine où tu n’as pas de devoir dans cette matière)."),
    h("div", null, Object.values(MATIERES).map((m) => h("label", { class: "case" },
      h("input", { type: "checkbox", checked: c.epreuves[m.id] !== false, onchange: (e) => majConfig({ epreuves: Object.assign({}, c.epreuves, { [m.id]: e.target.checked }) }) }),
      h("span", null, h("b", null, m.long), h("span", { class: "petit", style: "display:block" }, aDuContenu(m.id) ? `${CHAPITRES.filter((x) => x.mat === m.id && x.devoir).length} chapitres au devoir · ${Object.entries(EXOS).filter(([id]) => CHAP[id] && CHAP[id].mat === m.id).reduce((a, [, l]) => a + l.length, 0)} exercices corrigés` : "Chapitres en préparation, d’après ton cahier : ils arrivent bientôt. Tu peux déjà noter tes notes et la date du devoir.")))))));

  const echeances = DATES_CLES.map((d) => ({ ...d, perso: false })).concat((c.echeances || []).map((e, i) => ({ ...e, perso: true, i }))).sort((a, b) => a.date.localeCompare(b.date));
  out.push(h("section", { class: "carte", "aria-labelledby": "t-dates" }, h("div", { class: "carte-titre" }, h("h2", { id: "t-dates" }, "Autres dates"), h("button", { class: "btn petit-btn", type: "button", onclick: formEcheance }, icone("plus"), "Composition, exposé…")),
    echeances.length ? h("ul", { class: "dates" }, echeances.map((d) => h("li", { class: (d.fin || d.date) < auj ? "passe" : "" },
      h("span", { class: "dd" }, fmtDateCourte(d.date) + (d.fin ? " → " + fmtDateCourte(d.fin) : "")),
      h("span", null, d.titre),
      d.perso ? h("button", { class: "btn fantome petit-btn danger", type: "button", "aria-label": "Supprimer cette date", onclick: () => majConfig({ echeances: c.echeances.filter((_, j) => j !== d.i) }) }, icone("fermer")) : h("span")))) : h("p", { class: "petit" }, "Aucune pour l’instant.")));

  out.push(h("section", { class: "carte", "aria-labelledby": "t-methode" }, h("h2", { id: "t-methode", class: "h2" }, "Comment ça marche"),
    h("ol", { class: "plan" },
      [["soir", "Un rendez-vous fixe", `Chaque soir, des blocs de ${DUREE_BLOC} minutes de travail séparés par ${DUREE_PAUSE} minutes de pause. Le premier bloc est pour les maths, les autres tournent entre les matières. La série compte les soirs où l’objectif est atteint.`],
       ["chrono", "Le bloc va jusqu’au bout", `Quand une activité est finie avant les ${DUREE_BLOC} minutes, la suivante démarre : fiche, cartes, exercice corrigé, quiz, révision d’un autre chapitre.`],
       ["soir", "Le sommeil d’abord", `La séance finit au plus tard à ${fmtHM(finTravailMin())}, 30 minutes avant ton coucher (${fmtHM(heureCoucher())}). Si tu commences tard, le carnet raccourcit la séance au lieu de te faire veiller : ce que tu apprends se fixe pendant la nuit.`],
       ["livre", "Les bases en maths", "Le chapitre « Les bases du calcul » (signes, fractions, développer, factoriser, équations) passe en premier : il sert dans tous les exercices du devoir."],
       ["stylo", "S’entraîner comme au devoir", "Les exercices corrigés suivent le format des devoirs de 1ère D : un contexte, une tâche, des questions numérotées. Tu cherches sur ta feuille, puis tu compares avec le corrigé pas à pas."],
       ["cartes", "Se tester plutôt que relire", "Les cartes reviennent après 1, 2, 4, 8 puis 16 jours : la répétition espacée fixe les formules et les définitions."],
       ["courbe", "Le devoir qui approche passe devant", "Le chapitre du soir change selon ton niveau, ta dernière révision et la date du devoir de chaque matière."],
       ["erreur", "Chaque erreur compte", "Les questions ratées vont dans le carnet d’erreurs et reviennent jusqu’à ce que tu les relises."]]
        .map(([ico, t, d]) => h("li", null, h("span", { class: "ico" }, icone(ico)), h("span", { class: "lbl" }, h("b", null, t), h("span", null, d)), h("span"))))));

  out.push(h("section", { class: "carte", "aria-labelledby": "t-lien" }, h("h2", { id: "t-lien", class: "h2" }, "Le lien du carnet"),
    h("p", { class: "sous" }, `Ce lien ouvre ce carnet, sur ordinateur comme sur téléphone. Toute personne qui l’a peut le lire et le modifier : ne le donne à personne d’autre. ${coach()} l’a aussi : il voit tes séances, tes notes et tes erreurs pour t’aider à t’organiser.`),
    h("div", { class: "rangee" }, h("button", { class: "btn primaire", type: "button", onclick: async () => {
      try { await navigator.clipboard.writeText(lienDuCarnet()); toast("Lien copié."); } catch (e) { toast("Copie refusée : sélectionne le lien dans la barre d’adresse."); }
    } }, "Copier le lien"), etatSync()),
    h("p", { class: "petit" }, Store.derniereSync ? `Dernière synchronisation : ${new Date(Store.derniereSync).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}.` : "Synchronisation automatique toutes les 30 secondes quand le carnet est ouvert.")));
  const aide = aideInstallation(false);
  if (aide) out.push(aide);
  out.push(h("section", { class: "carte", "aria-labelledby": "t-donnees" }, h("h2", { id: "t-donnees", class: "h2" }, "Sauvegarde"),
    h("p", { class: "sous" }, "Tout est enregistré en ligne et gardé sur cet ordinateur : le carnet marche aussi sans internet."),
    h("button", { class: "btn", type: "button", onclick: copierDonnees }, "Copier toutes les données")));
  return out;
}
function formProfil() {
  ouvrirFeuille({ titre: "Profil et objectif", construire: (f) => {
    const c = Object.assign({}, S.config);
    f.corps.append(
      h("label", { class: "champ" }, "Prénom", h("input", { type: "text", id: "p-prenom", value: c.prenom, oninput: (e) => { c.prenom = e.target.value; } })),
      h("label", { class: "champ" }, "Moyenne générale de l’an dernier (2nde)", h("input", { type: "text", id: "p-moy", inputmode: "decimal", value: c.moyennePrecedente == null ? "" : String(c.moyennePrecedente).replace(".", ","), oninput: (e) => { c.moyennePrecedente = Number(String(e.target.value).replace(",", ".")); } })),
      h("label", { class: "champ" }, "Prénom de la personne qui suit le carnet avec toi", h("input", { type: "text", id: "p-coach", value: c.coach || "Will", oninput: (e) => { c.coach = e.target.value; } })),
      h("button", { class: "btn grand primaire", type: "button", onclick: () => {
        majConfig({ prenom: (c.prenom || "").trim().slice(0, 40), moyennePrecedente: Number.isFinite(c.moyennePrecedente) && c.moyennePrecedente > 0 ? clamp(c.moyennePrecedente, 0, 20) : null, coach: (c.coach || "Will").trim().slice(0, 40) || "Will" });
        f.fermer(true); toast("Enregistré.");
      } }, "Enregistrer"));
  } });
}
function formRythme() {
  ouvrirFeuille({ titre: "Séance du soir", construire: (f) => {
    let mode = nbBlocsDuJour();
    let coucher = COUCHERS.includes(S.config.coucher) ? S.config.coucher : "23:00";
    const debutMax = h("p", { class: "petit" });
    const majDebut = () => { const fin = Number(coucher.slice(0, 2)) * 60 + Number(coucher.slice(3)) - SAS_SOMMEIL; debutMax.textContent = `Avec ${pluriel(mode, "bloc")} et un coucher à ${fmtHM(fin + SAS_SOMMEIL)}, commence au plus tard à ${fmtHM(fin - dureeSeance(mode))} : fin du travail à ${fmtHM(fin)}.`; };
    majDebut();
    f.corps.append(
      h("p", null, `Chaque bloc dure ${DUREE_BLOC} minutes, avec ${DUREE_PAUSE} minutes de pause entre deux. Dans un bloc, le carnet enchaîne les activités jusqu’au bout du temps.`),
      h("label", { class: "champ" }, "Nombre de blocs chaque soir", h("span", { class: "aide" }, "Jusqu’au devoir, 3 blocs est un bon rythme. Un soir chargé, mieux vaut 2 blocs faits que 4 abandonnés.")),
      choixUnique([[2, "2 blocs · 55 min"], [3, "3 blocs · 1 h 25"], [4, "4 blocs · 1 h 55"]], mode, (v) => { mode = Number(v); majDebut(); }),
      h("label", { class: "champ" }, "Heure du coucher", h("span", { class: "aide" }, `Le travail s’arrête ${SAS_SOMMEIL} minutes avant : écran fermé, sac prêt pour le lendemain. Si tu commences trop tard, le carnet raccourcit la séance.`)),
      choixUnique(COUCHERS.map((c) => [c, fmtHM(Number(c.slice(0, 2)) * 60 + Number(c.slice(3)))]), coucher, (v) => { coucher = v; majDebut(); }),
      debutMax,
      h("button", { class: "btn grand primaire", type: "button", onclick: () => {
        majConfig({ rythme: { mode, debut: (S.config.rythme || {}).debut || todayKey() }, coucher });
        f.fermer(true); toast("Enregistré.");
      } }, "Enregistrer"));
  } });
}
function formDevoirs() {
  ouvrirFeuille({ titre: "Dates de mes devoirs", construire: (f) => {
    const d = Object.assign({}, S.config.devoirs || {});
    let commune = "";
    const champs = {};
    f.corps.append(
      h("p", { class: "sous" }, "Mets la date du prochain devoir de chaque matière. Si tu ne la connais pas encore, laisse la date que tu as."),
      h("div", { class: "carte pile" },
        h("label", { class: "champ" }, "Même date pour toutes les matières", h("input", { type: "date", id: "dv-tout", oninput: (e) => { commune = e.target.value; } })),
        h("button", { class: "btn", type: "button", onclick: () => { if (!/^\d{4}-\d{2}-\d{2}$/.test(commune)) { toast("Choisis d’abord une date."); return; } for (const m of Object.keys(MATIERES)) { d[m] = commune; champs[m].value = commune; } } }, "Appliquer à toutes")),
      h("div", { class: "dates-devoirs" }, Object.values(MATIERES).map((m) => h("label", { class: "champ" }, m.long,
        champs[m.id] = h("input", { type: "date", id: "dv-" + m.id, value: d[m.id] || "", oninput: (e) => { d[m.id] = e.target.value; } })))),
      h("button", { class: "btn grand primaire", type: "button", onclick: () => {
        const propre = {};
        for (const m of Object.keys(MATIERES)) if (/^\d{4}-\d{2}-\d{2}$/.test(d[m] || "")) propre[m] = d[m];
        majConfig({ devoirs: propre });
        try { localStorage.removeItem("c1d.matSoir"); } catch (e) { /* ignoré */ }
        f.fermer(true); toast("Dates enregistrées.");
      } }, "Enregistrer"));
  } });
}
//@@COPIE function formEcheance() {@@/* ---------- Démarrage ---------- */
/* ---------- Démarrage ---------- */
window.addEventListener("hashchange", () => { window.scrollTo(0, 0); planifierRendu(); });
let largeurPrec = window.innerWidth;
window.addEventListener("resize", () => {
  clearTimeout(window.__rz);
  window.__rz = setTimeout(() => { if (Math.abs(window.innerWidth - largeurPrec) > 30) { largeurPrec = window.innerWidth; planifierRendu(); } }, 200);
});
document.addEventListener("visibilitychange", () => { if (!document.hidden && !Feuilles.length) planifierRendu(); });
rendre();
Store.init();
if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("sw.js").catch(() => {});
// Accès réservé aux tests automatisés (navigateur piloté) : rien n’est exposé en usage normal
if (navigator.webdriver) window.__carnet = { questionsDuChap, choisirQuestions, ouvrirChapitre, ouvrirActivite, planSeance, Store, S, CHAPITRES, QUIZ, EXOS };

})();
</script>
</body>
</html>
