/* ---------- Rédaction type devoir (philo, français, histoire-géo, anglais) ---------- */
function actExercice(zone, p, ctx) {
  const ch = CHAP[p.chap];
  const typesPossibles = Object.entries(EXERCICES).filter(([, x]) => x.mat === ch.mat);
  let typeId = p.exo && EXERCICES[p.exo] && EXERCICES[p.exo].mat === ch.mat ? p.exo : null;
  const etat = { sujet: null, document: "", reponse: "" };
  const sujetsDe = (x, c) => (c.sujets || []).filter((s) => s.type === x.sujetType);

  const choisirType = () => {
    const avecSujets = typesPossibles.filter(([, x]) => CHAPITRES.some((c) => c.mat === ch.mat && sujetsDe(x, c).length));
    if (avecSujets.length === 1) { typeId = avecSujets[0][0]; return choisirSujet(); }
    vider(zone).append(h("p", null, "Quel entraînement ?"),
      h("div", { class: "pile" }, (avecSujets.length ? avecSujets : typesPossibles).map(([id, x]) => h("button", { class: "btn grand", type: "button", style: "justify-content:flex-start;text-align:left", onclick: () => { typeId = id; choisirSujet(); } },
        h("span", { class: "pile", style: "gap:2px" }, h("b", null, x.nom), h("span", { class: "petit" }, `${x.desc} Environ ${x.duree} min.`))))));
  };

  const choisirSujet = () => {
    const x = EXERCICES[typeId];
    const banque = sujetsDe(x, ch);
    const autres = CHAPITRES.filter((c) => c.mat === ch.mat && c.id !== ch.id).flatMap((c) => sujetsDe(x, c).map((s) => ({ ...s, chap: c.id })));
    if (p.direct && (banque.length || autres.length)) {
      const tous = [...banque, ...autres];
      const faits = new Set([...S.exercices.values()].map((e) => e.sujet));
      return travailler(tous.find((s) => !faits.has(s.texte)) || tous[0]);
    }
    vider(zone).append(
      h("p", null, h("b", null, x.nom), " · choisis un sujet"),
      h("div", { class: "pile" },
        banque.map((s) => h("button", { class: "btn", type: "button", style: "justify-content:flex-start;text-align:left", onclick: () => travailler(s) }, s.texte)),
        !banque.length && !autres.length ? h("p", { class: "sous" }, "Pas encore de sujet pour ce chapitre.") : null,
        autres.length ? h("details", { class: "repli", open: !banque.length }, h("summary", null, "Sujets d’autres chapitres"),
          h("div", { class: "pile" }, autres.map((s) => h("button", { class: "btn petit-btn", type: "button", style: "justify-content:flex-start;text-align:left", onclick: () => travailler(s) }, `${CHAP[s.chap].court} — ${s.texte}`)))) : null));
  };

  const travailler = (sujet) => {
    etat.sujet = sujet;
    const x = EXERCICES[typeId];
    const compte = h("span", { class: "petit tnum" }, "0 mots");
    const ta = h("textarea", { class: "copie", id: "reponse-exo", placeholder: "Écris ta réponse ici, comme sur ta copie.", value: etat.reponse, oninput: (e) => { etat.reponse = e.target.value; compte.textContent = `${(etat.reponse.trim().match(/\S+/g) || []).length} mots`; } });
    const apercu = h("div", { class: "dicte", "aria-live": "polite" });
    const methode = METHODES.find((m) => m.exo === typeId) || METHODES.find((m) => m.mat === ch.mat);
    vider(zone).append(
      h("div", { class: "sujet" }, h("div", { class: "petit" }, `${MATIERES[ch.mat].nom} · ${x.nom} · environ ${x.duree} min`), h("div", { class: "t" }, rich(sujet.texte))),
      supportEl(sujet),
      sujet.consignes ? h("ol", { style: "margin:0;padding-left:22px;display:flex;flex-direction:column;gap:6px" }, sujet.consignes.map((c) => h("li", null, rich(c)))) : null,
      h("p", null, x.consigne),
      methode ? h("details", { class: "repli" }, h("summary", null, "Rappel de méthode"), h("ol", null, methode.etapes.map(([t, d]) => h("li", null, h("b", null, t), " — ", rich(d))))) : null,
      h("p", { class: "petit" }, "Tu peux aussi écrire sur ta feuille : dans ce cas, écris ici seulement ton plan ou tes idées principales."),
      h("label", { class: "champ", for: "reponse-exo" }, "Ta réponse"), ta,
      h("div", { class: "rangee", style: "justify-content:space-between" }, boutonMicro(ta, apercu), compte), apercu,
      h("div", { class: "pile" },
        S.ia ? h("button", { class: "btn grand primaire", type: "button", onclick: () => corrigerIA() }, icone("ia"), "Faire corriger par Claude") : null,
        h("button", { class: "btn grand" + (S.ia ? "" : " primaire"), type: "button", onclick: () => autoCorriger() }, icone("coche"), "Je m’auto-corrige")));
  };

  const corrigerIA = async () => {
    const x = EXERCICES[typeId];
    if (etat.reponse.trim().length < 40) { toast("Écris d’abord une vraie réponse (quelques phrases au moins)."); return; }
    vider(zone).append(chargement("Claude corrige ta copie…"));
    const prompt = `Tu es professeur de ${MATIERES[ch.mat].long} ${NIVEAU_IA}. Exercice : « ${x.nom} ». ${x.consigne}
Chapitre : « ${ch.titre} ».
Sujet : « ${texteBrut(etat.sujet.texte)} ».
${etat.sujet.support ? "Texte support : «« " + etat.sujet.support.slice(0, 6000) + " »»" : ""}
Copie de l’élève : «« ${etat.reponse.slice(0, 12000)} »»
Corrige comme un vrai professeur : franc, précis et exigeant, sans méchanceté. Tutoie l’élève. Ne réécris pas sa copie.
Donne une note sur 20, 2 à 4 points forts, 2 à 4 points à améliorer, les erreurs précises (type parmi : ${ERREUR_TYPES.map((t) => t.id).join(", ")}), une phrase de conseil et un exemple de phrase réussie.
Réponds uniquement avec un objet JSON valide : {"note":12,"points_forts":["..."],"a_ameliorer":["..."],"erreurs":[{"type":"cours","description":"...","a_retenir":"..."}],"conseil":"...","exemple":"..."}`;
    try {
      const r = await demanderJSON(prompt, "complex");
      if (typeof r.note !== "number" && typeof r.note !== "string") throw { code: "format" };
      afficherRetour({ note: clamp(Number(String(r.note).replace(",", ".")) || 0, 0, 20), forts: (r.points_forts || []).map(String), ameliorer: (r.a_ameliorer || []).map(String),
        erreurs: (r.erreurs || []).filter((e) => e && e.description).map((e) => ({ type: ERREUR_TYPES.some((t) => t.id === e.type) ? e.type : "cours", description: String(e.description), aRetenir: String(e.a_retenir || "") })),
        conseil: r.conseil ? String(r.conseil) : "", exemple: r.exemple ? String(r.exemple) : "", source: "ia" });
    } catch (e) {
      vider(zone).append(bandeau("alerte", messageErreurIA(e)),
        h("div", { class: "pile" },
          h("button", { class: "btn", type: "button", onclick: () => autoCorriger() }, "M’auto-corriger"),
          h("button", { class: "btn fantome", type: "button", onclick: () => travailler(etat.sujet) }, "Revenir à ma copie")));
    }
  };

  const autoCorriger = () => {
    const x = EXERCICES[typeId];
    const coches = x.grille.map(([type, txt]) => ({ type, txt, ok: false }));
    let noteAuto = 10;
    const noteEl = h("output", { class: "tnum", style: "font-weight:700" }, "10");
    vider(zone).append(
      h("div", { class: "sujet" }, h("div", { class: "t" }, rich(etat.sujet.texte))),
      etat.sujet.modele ? h("details", { class: "repli", open: true }, h("summary", null, "Proposition de corrigé : compare avec ta réponse"), h("div", { class: "rich", style: "line-height:1.6" }, rich(etat.sujet.modele))) : null,
      h("p", null, "Relis ta réponse et coche honnêtement ce qui est vrai :"),
      h("div", { class: "carte" }, coches.map((c) => h("label", { class: "case" }, h("input", { type: "checkbox", onchange: (e) => { c.ok = e.target.checked; } }), h("span", null, c.txt)))),
      h("label", { class: "champ" }, "Ta note estimée sur 20", h("input", { type: "range", min: "0", max: "20", step: "1", value: "10", oninput: (e) => { noteAuto = Number(e.target.value); noteEl.textContent = e.target.value; } }), noteEl),
      h("button", { class: "btn grand primaire", type: "button", onclick: () => {
        const erreurs = coches.filter((c) => !c.ok).map((c) => ({ type: c.type, description: `Pas fait : ${c.txt.charAt(0).toLowerCase() + c.txt.slice(1)}`, aRetenir: typeErreur(c.type).conseil }));
        afficherRetour({ note: noteAuto, forts: coches.filter((c) => c.ok).map((c) => c.txt), ameliorer: coches.filter((c) => !c.ok).map((c) => c.txt), erreurs, conseil: "", exemple: "", source: "auto" });
      } }, "Valider mon auto-correction"));
  };

  const afficherRetour = (ret) => {
    const choix = ret.erreurs.map((e) => ({ e, ok: true }));
    vider(zone).append(
      h("div", { class: "retour" },
        h("div", { class: "rangee", style: "justify-content:space-between" }, h("span", { class: "note" }, `${fmtNote(ret.note)}/20`), h("span", { class: "puce" }, ret.source === "ia" ? "Corrigé par Claude" : "Auto-correction")),
        ret.forts.length ? h("div", null, h("h3", null, "Points forts"), h("ul", null, ret.forts.map((t) => h("li", null, t)))) : null,
        ret.ameliorer.length ? h("div", null, h("h3", null, "À améliorer"), h("ul", null, ret.ameliorer.map((t) => h("li", null, t)))) : null,
        ret.conseil ? bandeau("info", h("b", null, "Pour la prochaine fois : "), ret.conseil) : null,
        ret.exemple ? h("div", { class: "sujet" }, h("div", { class: "petit" }, "Exemple de phrase réussie"), h("p", null, ret.exemple)) : null),
      choix.length ? h("div", { class: "carte" }, h("h3", { class: "h2" }, "Ajouter au carnet d’erreurs"),
        choix.map((c) => h("label", { class: "case" }, h("input", { type: "checkbox", checked: true, onchange: (ev) => { c.ok = ev.target.checked; } }),
          h("span", null, h("b", null, typeErreur(c.e.type).nom + " · "), c.e.description, c.e.aRetenir ? h("span", { class: "petit", style: "display:block" }, "À retenir : " + c.e.aRetenir) : null)))) : null,
      h("button", { class: "btn grand primaire", type: "button", onclick: () => {
        choix.filter((c) => c.ok).forEach((c) => ajouterErreur({ ...c.e, mat: ch.mat, chap: etat.sujet.chap || ch.id, source: "exercice" }));
        Store.ecrire("exercices", uid(), { date: todayKey(), chap: etat.sujet.chap || ch.id, mat: ch.mat, type: typeId, sujet: etat.sujet.texte, reponse: etat.reponse.slice(0, 20000), note: ret.note, source: ret.source, forts: ret.forts, ameliorer: ret.ameliorer, conseil: ret.conseil });
        ctx.fini({ type: "exercice", chap: etat.sujet.chap || ch.id, note: ret.note, resume: `${EXERCICES[typeId].nom} · ${fmtNote(ret.note)}/20` });
      } }, ctx.libelleSuite || "Enregistrer et terminer"));
  };

  if (!typesPossibles.length) {
    vider(zone).append(h("p", null, "Pas de rédaction pour cette matière : fais plutôt un exercice corrigé."),
      h("button", { class: "btn grand primaire", type: "button", onclick: () => ctx.fini({ type: "exercice", chap: ch.id, resume: "Pas de rédaction" }) }, ctx.libelleSuite || "Terminer"));
    return;
  }
  if (!typeId) choisirType(); else choisirSujet();
}

/* ---------- Exercice corrigé pas à pas (maths, PCT, SVT, anglais…) ----------
   L’énoncé, puis chaque question : chercher sur sa feuille, un indice si besoin, le corrigé,
   et une auto-évaluation honnête. Les questions ratées peuvent aller au carnet d’erreurs. */
function exoSuivant(chapId) {
  const liste = EXOS[chapId] || [];
  if (!liste.length) return null;
  const etat = (e) => S.progres.get("x." + e.id) || null;
  const jamais = liste.filter((e) => !etat(e));
  if (jamais.length) return jamais.slice().sort((a, b) => (a.niveau || 1) - (b.niveau || 1))[0];
  return liste.slice().sort((a, b) => (etat(a).note - etat(b).note) || String(etat(a).last).localeCompare(String(etat(b).last)))[0];
}
function actProbleme(zone, p, ctx) {
  const ch = CHAP[p.chap];
  const liste = EXOS[ch.id] || [];
  const etatX = (e) => S.progres.get("x." + e.id) || null;
  const etoiles = (n) => "★".repeat(n || 1) + "☆".repeat(3 - (n || 1));
  const choisir = () => {
    if (!liste.length) {
      vider(zone).append(h("div", { class: "vide" }, icone("stylo"), h("b", null, "Pas encore d’exercice corrigé pour ce chapitre.")),
        h("button", { class: "btn grand primaire", type: "button", onclick: () => ctx.fini({ type: "probleme", chap: ch.id, resume: "Pas d’exercice" }) }, ctx.libelleSuite || "Terminer"));
      return;
    }
    vider(zone).append(h("p", null, "Quel exercice ? Les étoiles indiquent la difficulté."),
      h("div", { class: "pile" }, liste.map((e) => {
        const st = etatX(e);
        return h("button", { class: "btn grand", type: "button", style: "justify-content:flex-start;text-align:left", onclick: () => lancer(e) },
          h("span", { class: "pile", style: "gap:2px" }, h("b", null, e.titre),
            h("span", { class: "petit" }, `${etoiles(e.niveau)} · environ ${e.duree} min · ${pluriel(e.questions.length, "question")}${st ? ` · déjà fait : ${fmtNote(st.note)}/20` : ""}`)));
      })));
  };
  const lancer = (e) => {
    const rep = e.questions.map(() => null); // 2 = juste, 1 = à moitié, 0 = fausse
    let i = 0;
    const montrer = () => {
      const q = e.questions[i];
      const aide = h("div", { class: "pile", "aria-live": "polite" });
      const actions = h("div", { class: "pile" });
      const voirCorrige = () => {
        aide.append(
          h("div", { class: "corrige" }, h("div", { class: "petit", style: "font-weight:700;margin-bottom:4px" }, "Corrigé"), rich(q.corrige)),
          q.retenir ? bandeau("info", h("b", null, "À retenir : "), rich(q.retenir)) : null);
        vider(actions).append(h("p", null, h("b", null, "Ta réponse sur ta feuille était…")),
          h("div", { class: "segment", style: "grid-template-columns:repeat(3,1fr)" }, [[2, "Juste", 3], [1, "À moitié", 2], [0, "Fausse ou vide", 1]].map(([v, lab, m]) =>
            h("button", { type: "button", "data-m": String(m), onclick: () => { rep[i] = v; i++; if (i < e.questions.length) montrer(); else finir(); } }, h("span", { class: "pt" }), lab))));
        try { aide.scrollIntoView({ block: "nearest" }); } catch (er) { /* ignoré */ }
      };
      vider(zone).append(
        i === 0 || e.questions.length <= 6 ? h("div", { class: "enonce" }, h("div", { class: "petit", style: "margin-bottom:6px;white-space:normal" }, `${MATIERES[ch.mat].nom} · ${e.titre} · ${etoiles(e.niveau)} · environ ${e.duree} min`), rich(e.contexte))
          : h("details", { class: "repli" }, h("summary", null, "Revoir l’énoncé"), h("div", { class: "enonce" }, rich(e.contexte))),
        h("div", { class: "compteur" }, h("span", null, `Question ${i + 1} sur ${e.questions.length}`), h("span", { class: "tnum" }, rep.filter((v) => v === 2).length ? `${rep.filter((v) => v === 2).length} juste${rep.filter((v) => v === 2).length > 1 ? "s" : ""}` : "")),
        h("div", { class: "question-exo" }, rich(q.q)),
        h("p", { class: "petit" }, "Cherche sur ta feuille de brouillon et rédige ta réponse comme au devoir. Ensuite seulement, regarde le corrigé."),
        aide, actions);
      actions.append(h("div", { class: "rangee etire" },
        q.indice ? h("button", { class: "btn", type: "button", onclick: (ev) => { ev.currentTarget.disabled = true; aide.prepend(h("div", { class: "indice" }, h("b", null, "Indice : "), rich(q.indice))); } }, "Un indice") : null,
        h("button", { class: "btn primaire", type: "button", onclick: voirCorrige }, "Voir le corrigé")));
    };
    const finir = () => {
      const total = rep.reduce((a, b) => a + (b || 0), 0);
      const note = Math.round((total / (2 * e.questions.length)) * 20 * 2) / 2;
      const coches = e.questions.map((q, k) => ({ q, k, v: rep[k], ok: true })).filter((x) => x.v < 2);
      vider(zone).append(
        h("div", { class: "tampon-zone" }, h("div", { class: "tampon" + (note >= 14 ? " bleu" : "") }, `${fmtNote(note)}/20`),
          h("p", null, note >= 16 ? "Très bien : cet exercice est maîtrisé." : note >= 10 ? "Correct. Refais les questions ratées dans deux jours, sans regarder le corrigé." : "Pas encore. Relis le corrigé ce soir, puis refais l’exercice demain sans regarder.")),
        coches.length ? h("div", { class: "carte" }, h("h3", { class: "h2" }, "Ajouter au carnet d’erreurs ?"),
          coches.map((c) => h("label", { class: "case" }, h("input", { type: "checkbox", checked: true, onchange: (ev) => { c.ok = ev.target.checked; } }), h("span", null, `Question ${c.k + 1} : `, rich(c.q.q))))) : null,
        h("button", { class: "btn grand primaire", type: "button", onclick: () => {
          coches.filter((c) => c.ok).forEach((c) => ajouterErreur({ mat: ch.mat, chap: ch.id, type: c.q.type || "methode", description: `${e.titre}, question ${c.k + 1} : ${c.q.q}`, aRetenir: String(c.q.retenir || c.q.corrige).slice(0, 700), source: "exercice" }));
          const avant = etatX(e) || {};
          Store.ecrire("progres", "x." + e.id, { exo: true, chap: ch.id, note, last: todayKey(), fois: (avant.fois || 0) + 1 });
          Store.ecrire("exercices", uid(), { date: todayKey(), chap: ch.id, mat: ch.mat, type: "probleme", exo: e.id, sujet: e.titre, note, source: "auto", details: rep });
          ctx.fini({ type: "probleme", chap: ch.id, note, resume: `${e.titre} · ${fmtNote(note)}/20` });
        } }, ctx.libelleSuite || "Enregistrer et terminer"));
    };
    montrer();
  };
  if (p.exo) { const e = liste.find((x) => x.id === p.exo); if (e) return lancer(e); }
  if (p.direct) { const e = exoSuivant(ch.id); if (e) return lancer(e); }
  choisir();
}

/* ---------- La fiche du chapitre (l’essentiel du cours) ---------- */
function actFiche(zone, p, ctx) {
  const ch = CHAP[p.chap];
  vider(zone).append(
    h("div", { class: "sujet" }, h("div", { class: "petit" }, MATIERES[ch.mat].long), h("div", { class: "t" }, ch.titre)),
    ficheEl(ch),
    h("p", { class: "petit" }, "Lis la fiche une fois en entier. Puis cache l’écran et redis les points importants à voix haute, ou recopie les formules sur ta feuille."),
    h("button", { class: "btn grand primaire", type: "button", onclick: () => ctx.fini({ type: "fiche", chap: ch.id, resume: `Fiche lue · ${ch.court}` }) }, ctx.libelleSuite || "J’ai lu la fiche"));
}

