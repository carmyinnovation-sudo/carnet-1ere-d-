const { chromium } = require("playwright");
const OUT = "/tmp/claude-0/-home-claude/16652545-275c-5a8b-8d95-9d2f9964e6f5/scratchpad/shots";
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 860 } });
  const page = await ctx.newPage();
  const erreurs = [];
  page.on("pageerror", (e) => erreurs.push("PAGEERROR " + e.message));
  page.on("console", (m) => { if (m.type() === "error" && !/ERR_TUNNEL|Failed to load resource/.test(m.text())) erreurs.push(m.text()); });
  await page.goto("http://localhost:8765/?k=00000000-0000-4000-8000-000000000000", { waitUntil: "load" });
  await page.waitForTimeout(1200);
  const stats = await page.evaluate(() => {
    const C = window.__carnet; const out = { chap: 0, cartes: 0, quiz: 0, exos: 0, questionsExo: 0, parMat: {} };
    for (const c of C.CHAPITRES) { out.chap++; out.cartes += c.cartes.length; const q = (C.QUIZ[c.id] || []).length; out.quiz += q; const ex = (C.EXOS[c.id] || []); out.exos += ex.length; ex.forEach((e) => out.questionsExo += e.questions.length);
      const p = out.parMat[c.mat] || (out.parMat[c.mat] = { chap: 0, cartes: 0, quiz: 0, exos: 0, sujets: 0 }); p.chap++; p.cartes += c.cartes.length; p.quiz += q; p.exos += ex.length; p.sujets += (c.sujets || []).length; }
    return out;
  });
  console.log(JSON.stringify(stats));
  // Vérifier les quiz : r dans les choix, distracteurs distincts, types connus
  const pb = await page.evaluate(() => {
    const C = window.__carnet; const pbs = [];
    for (const [id, qs] of Object.entries(C.QUIZ)) {
      if (!C.CHAPITRES.find((c) => c.id === id)) pbs.push("QUIZ sans chapitre : " + id);
      for (const x of qs) {
        if (!["c", "d", "n", "v"].includes(x.t)) pbs.push(id + " type " + x.t);
        if (!x.p || x.p.length < 3) pbs.push(id + " moins de 3 pièges : " + x.q);
        if (x.p && x.p.some((a) => a === x.r)) pbs.push(id + " la réponse est dans les pièges : " + x.q);
        if (x.t === "v" && typeof x.r !== "number") pbs.push(id + " v non numérique : " + x.q);
        if (x.t === "d" && !(x.r >= 100 && x.r <= 9999)) pbs.push(id + " d hors années : " + x.q);
      }
    }
    for (const [id, l] of Object.entries(C.EXOS)) { if (!C.CHAPITRES.find((c) => c.id === id)) pbs.push("EXOS sans chapitre : " + id); for (const e of l) { if (!e.id || !e.contexte || !e.questions.length) pbs.push("exo incomplet " + id); for (const q of e.questions) if (!q.q || !q.corrige) pbs.push("question incomplète " + e.id); } }
    const ids = new Set(); for (const l of Object.values(C.EXOS)) for (const e of l) { if (ids.has(e.id)) pbs.push("id exo en double " + e.id); ids.add(e.id); }
    return pbs;
  });
  console.log("problèmes données :", pb.length ? pb.join("\n") : "aucun");
  // Ouvrir chaque chapitre et chaque exercice (toutes les questions + corrigés)
  const chaps = await page.evaluate(() => window.__carnet.CHAPITRES.map((c) => c.id));
  for (const id of chaps) {
    await page.evaluate((id) => window.__carnet.ouvrirChapitre(id), id); await page.waitForTimeout(80);
    await page.evaluate(() => document.querySelectorAll(".voile").forEach((v) => v.remove()));
  }
  const exos = await page.evaluate(() => Object.entries(window.__carnet.EXOS).flatMap(([c, l]) => l.map((e) => [c, e.id, e.questions.length])));
  for (const [c, id, n] of exos) {
    await page.evaluate(([c, id]) => window.__carnet.ouvrirActivite("probleme", { chap: c, exo: id }), [c, id]); await page.waitForTimeout(60);
    for (let k = 0; k < n; k++) {
      const ind = page.locator(".voile").last().locator("text=Un indice"); if (await ind.count()) await ind.first().click();
      await page.locator(".voile").last().locator("text=Voir le corrigé").first().click();
      await page.locator(".voile").last().locator(".segment button").first().click();
    }
    await page.evaluate(() => document.querySelectorAll(".voile, .dialogue-voile").forEach((v) => v.remove()));
  }
  // Quiz de chaque chapitre
  for (const id of chaps) {
    await page.evaluate((id) => window.__carnet.ouvrirActivite("quiz", { chap: id }), id); await page.waitForTimeout(50);
    const b = page.locator(".voile").last().locator("text=Lancer le quiz"); if (await b.count()) await b.click();
    for (let k = 0; k < 12; k++) { const q = page.locator(".voile").last().locator(".qcm button:not([disabled])"); if (!(await q.count())) break; await q.first().click(); const s = page.locator(".voile").last().locator("text=/Question suivante|Voir le résultat/"); if (await s.count()) await s.first().click(); }
    await page.evaluate(() => document.querySelectorAll(".voile, .dialogue-voile").forEach((v) => v.remove()));
  }
  console.log("plan 3 blocs:", JSON.stringify(await page.evaluate(() => window.__carnet.planSeance(3).blocs.map((b) => b.mat + ":" + b.chap))));
  console.log("erreurs JS:", erreurs.length ? erreurs.join("\n") : "aucune");
  await browser.close();
})();
