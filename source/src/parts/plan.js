/* ---------- Choix du chapitre et plan du soir ---------- */
// Poids de chaque matière : les maths (sa matière la plus fragile) et les sciences de la série D d’abord
const POIDS_MAT = { maths: 1, pct: 0.9, svt: 0.9, francais: 0.75, philo: 0.7, anglais: 0.65, hg: 0.6 };
const chapitreVu = (c) => !((S.chapitres.get(c.id) || {}).pasVu);
const chapitreActif = (c) => epreuveActive(c.mat) && chapitreVu(c);
function dateDevoir(mat) { const d = (S.config.devoirs || {})[mat]; return /^\d{4}-\d{2}-\d{2}$/.test(d || "") ? d : null; }
function urgence(mat) {
  const d = dateDevoir(mat); if (!d) return 1;
  const j = daysBetween(todayKey(), d);
  if (j < 0) return 0.8;   // devoir passé : on continue le programme, sans urgence
  if (j <= 1) return 3;    // c’est demain (ou aujourd’hui)
  if (j <= 3) return 1.6;
  if (j <= 7) return 1.2;
  return 1;
}
function poidsMatiere(mat) { return (POIDS_MAT[mat] || 0.5) * urgence(mat); }
function derniereSeanceMat(mat) {
  let best = null;
  for (const s of S.sessions.values()) for (const e of (s.etapes || [])) {
    const m = e.mat || (e.chap && CHAP[e.chap] ? CHAP[e.chap].mat : null);
    if (m === mat && (!best || s.date > best)) best = s.date;
  }
  return best;
}
function classementChapitres() {
  const auj = todayKey(); const derMat = derniereMatiere();
  return CHAPITRES.filter(chapitreActif).map((c) => {
    const m = maitriseDe(c.id);
    const besoin = [3, 3.2, 2, 0.8][m];
    const der = derniereSeanceChap(c.id);
    const depuis = der ? daysBetween(der, auj) : 28;
    const recence = Math.min(depuis, 21) / 7 + 0.3;
    const alterne = derMat === c.mat ? 0.7 : 1;
    const pertinence = c.devoir ? 1 : 0.3;
    return { c, score: besoin * poidsMatiere(c.mat) * pertinence * recence * alterne };
  }).sort((a, b) => b.score - a.score).map((x) => x.c);
}
function chapitreDuSoir() {
  const auj = todayKey();
  let memo = null;
  try { memo = JSON.parse(localStorage.getItem("c1d.chapSoir") || "null"); } catch (e) { memo = null; }
  const classes = classementChapitres();
  if (!classes.length) return null;
  if (memo && memo.date === auj && CHAP[memo.id] && chapitreActif(CHAP[memo.id])) return CHAP[memo.id];
  const choisi = classes[0];
  try { localStorage.setItem("c1d.chapSoir", JSON.stringify({ date: auj, id: choisi.id })); } catch (e) { /* ignoré */ }
  return choisi;
}
const EXO_REDACTION = { philo: "ph-dissert", francais: "fr-commentaire", hg: "hg-dissert", anglais: "en-writing" };
const aRedaction = (chapId) => { const c = CHAP[chapId]; return !!c && Object.values(EXERCICES).some((x) => x.mat === c.mat) && (c.sujets || []).length > 0; };
function typeExercicePour(mat) { return EXO_REDACTION[mat]; }
const POURQUOI = {
  cartes: "Se tester fait retenir bien plus que relire : c’est l’effet test.",
  quiz: "Le quiz montre ce que tu crois savoir… et ce que tu sais vraiment.",
  probleme: "Au devoir, on te note sur des exercices : il faut s’entraîner à en faire, pas seulement à apprendre.",
  exercice: "Le devoir note des copies : il faut s’entraîner à rédiger.",
  explique: "Si tu sais l’expliquer simplement, tu l’as compris. Sinon, tu sais quoi revoir.",
  erreurs: "Relire ses erreurs, c’est ce qui évite de les refaire le jour du devoir.",
  bilan: "Deux questions pour garder la trace de ta soirée."
};
/* ---------- Séance en blocs : 25 min de travail, 5 min de pause ----------
   3 blocs par défaut (1 h 25 avec les pauses). Bloc 1 : maths chaque soir.
   Les autres blocs tournent entre les matières selon la date du devoir et la dernière révision. */
const DUREE_BLOC = 25, DUREE_PAUSE = 5;
const debutBlocs = () => (S.config.rythme || {}).debut || todayKey();
function nbBlocsDuJour() { const mode = (S.config.rythme || {}).mode; return [1, 2, 3, 4].includes(mode) ? mode : 3; }
function semaineMontee() { return null; }
const dureeSeance = (nb) => nb * DUREE_BLOC + Math.max(0, nb - 1) * DUREE_PAUSE;
const objectifDuJour = (d) => { d = d || todayKey(); return d < debutBlocs() ? S.config.objectif : nbBlocsDuJour(d) * DUREE_BLOC; };
const libelleBlocs = (nb) => `${pluriel(nb, "bloc")} de ${DUREE_BLOC} min`;
function blocsFaitsDuJour(d) {
  let n = 0;
  for (const s of S.sessions.values()) if (s.date === d && s.blocs && !s.blocs.bonus) n += s.blocs.faits || 0;
  return n;
}

const classementMat = (mat) => classementChapitres().filter((c) => c.mat === mat);
function lireMemoChap() {
  let memo = null;
  try { memo = JSON.parse(localStorage.getItem("c1d.chapSoirMat") || "null"); } catch (e) { memo = null; }
  return memo && memo.date === todayKey() ? memo : { date: todayKey() };
}
function chapitreDuSoirMat(mat) {
  const memo = lireMemoChap();
  if (memo[mat] && CHAP[memo[mat]] && CHAP[memo[mat]].mat === mat && chapitreActif(CHAP[memo[mat]])) return CHAP[memo[mat]];
  const c = classementMat(mat)[0];
  if (!c) return null;
  memo[mat] = c.id;
  try { localStorage.setItem("c1d.chapSoirMat", JSON.stringify(memo)); } catch (e) { /* ignoré */ }
  return c;
}
function changerChapitreMat(mat) {
  const actuel = chapitreDuSoirMat(mat), liste = classementMat(mat);
  if (!liste.length) return;
  const i = liste.findIndex((c) => actuel && c.id === actuel.id);
  const memo = lireMemoChap(); memo[mat] = liste[(i + 1) % liste.length].id;
  try { localStorage.setItem("c1d.chapSoirMat", JSON.stringify(memo)); } catch (e) { /* ignoré */ }
  planifierRendu();
}

const ROLES_BLOC = {
  sciences: { nom: "Comprendre et s’entraîner", detail: "fiche, cartes, exercice corrigé, quiz" },
  lettres: { nom: "Apprendre et rédiger", detail: "cartes, quiz, explique-le, rédaction" },
  langue: { nom: "Vocabulaire et grammaire", detail: "cartes, quiz, exercice corrigé" }
};
const matieresActives = () => Object.keys(MATIERES).filter((m) => epreuveActive(m) && CHAPITRES.some((c) => c.mat === m && chapitreActif(c)));
function matieresDuSoir(nb) {
  const auj = todayKey();
  const actives = matieresActives();
  const score = (m) => { const der = derniereSeanceMat(m); const depuis = der ? daysBetween(der, auj) : 10; return poidsMatiere(m) * (Math.min(depuis, 7) + 0.5); };
  const tri = actives.slice().sort((a, b) => score(b) - score(a));
  const urgentes = actives.filter((m) => urgence(m) >= 3);
  const fixe = actives.includes("maths") && urgence("maths") >= 1 ? ["maths"] : [];
  return [...new Set([...urgentes, ...fixe, ...tri])].slice(0, nb);
}
// La liste des matières du soir est fixée pour la journée : elle ne bouge pas quand un bloc est fini
function matieresMemo(nb) {
  const auj = todayKey();
  let memo = null;
  try { memo = JSON.parse(localStorage.getItem("c1d.matSoir") || "null"); } catch (e) { memo = null; }
  const actives = matieresActives();
  if (memo && memo.date === auj && memo.nb === nb && Array.isArray(memo.mats) && memo.mats.length && memo.mats.every((m) => actives.includes(m))) return memo.mats;
  const mats = matieresDuSoir(nb);
  try { localStorage.setItem("c1d.matSoir", JSON.stringify({ date: auj, nb, mats })); } catch (e) { /* ignoré */ }
  return mats;
}
function changerMatiere(k) {
  const nb = nbBlocsDuJour(); const mats = matieresMemo(nb).slice();
  const actives = matieresActives();
  const libres = actives.filter((m) => !mats.includes(m));
  if (!libres.length || k >= mats.length) { toast("Pas d’autre matière disponible."); return; }
  const ordre = Object.keys(MATIERES);
  const apres = libres.filter((m) => ordre.indexOf(m) > ordre.indexOf(mats[k]));
  mats[k] = (apres[0] || libres[0]);
  try { localStorage.setItem("c1d.matSoir", JSON.stringify({ date: todayKey(), nb, mats })); } catch (e) { /* ignoré */ }
  planifierRendu();
}
// Un bloc = une file d’activités, puis des révisions en boucle jusqu’à la fin des 25 min
function planSeance(nb) {
  nb = nb || nbBlocsDuJour();
  const blocs = [];
  matieresMemo(nb).forEach((mat, k) => {
    const X = chapitreDuSoirMat(mat); if (!X) return;
    const role = TYPE_MAT[mat] || "lettres";
    const autres = classementMat(mat).filter((c) => c.id !== X.id).slice(0, 2).map((c) => c.id);
    const aExo = (EXOS[X.id] || []).length > 0;
    const fiche = X.fiche && X.fiche.length && maitriseDe(X.id) < 2 ? [["fiche", X.id]] : [];
    let file;
    if (role === "sciences") file = [...fiche, ["cartes", X.id], aExo ? ["exo", X.id] : ["explique", X.id], ["quiz", X.id]];
    else if (role === "langue") file = [["cartes", X.id], ["quiz", X.id], aExo ? ["exo", X.id] : ["explique", X.id]];
    else file = [...fiche, ["cartes", X.id], ["quiz", X.id], ["explique", X.id], ...(aRedaction(X.id) && maitriseDe(X.id) >= 2 ? [["exercice", X.id]] : aExo ? [["exo", X.id]] : [])];
    if (k === 0) file.unshift(["dues"]);
    if (k === 1) file.unshift(["erreurs"]);
    blocs.push({ role, mat, chap: X.id, file, revisions: [X.id, ...autres], court: MATIERES[mat].nom, titre: `${MATIERES[mat].nom} · ${ROLES_BLOC[role].nom}` });
  });
  return { nb: blocs.length, blocs, duree: dureeSeance(blocs.length) };
}

/* ---------- Échéances ---------- */
function prochainDevoir() {
  const auj = todayKey();
  const liste = Object.keys(MATIERES).filter(epreuveActive).map((m) => ({ m, d: dateDevoir(m) })).filter((x) => x.d && x.d >= auj).sort((a, b) => a.d.localeCompare(b.d));
  if (!liste.length) return null;
  const d = liste[0].d;
  return { date: d, mats: liste.filter((x) => x.d === d).map((x) => x.m), liste };
}
function prochaineEcheance() {
  const auj = todayKey();
  const toutes = DATES_CLES.map((d) => ({ ...d })).concat((S.config.echeances || []).map((e) => ({ date: e.date, titre: e.titre, type: "perso" })));
  return toutes.filter((d) => (d.fin || d.date) >= auj).sort((a, b) => a.date.localeCompare(b.date))[0] || null;
}

