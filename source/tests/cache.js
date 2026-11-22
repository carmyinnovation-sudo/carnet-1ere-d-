// Un ancien cache local (version 1, prénom vide) ne doit pas effacer le prénom de Mawouena.
const { chromium } = require("playwright");
const CLE = "00000000-0000-4000-8000-000000000000";
const URL = `http://localhost:8765/?k=${CLE}`;
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1280, height: 860 }, timezoneId: "Africa/Porto-Novo", locale: "fr-FR" });
  await ctx.addInitScript(([cle]) => {
    if (sessionStorage.getItem("seme")) return;
    sessionStorage.setItem("seme", "1");
    const vieux = { prenom: "", coach: "Will", objectif: 75, rythme: { mode: 3, debut: null }, moyennePrecedente: null, mot: { texte: "", date: null }, echeances: [] };
    localStorage.setItem("c1d.cache." + cle, JSON.stringify({ config: vieux, docs: {}, depuis: null }));
    localStorage.setItem("c1d.cle", cle);
  }, [CLE]);
  const p = await ctx.newPage();
  await p.clock.install({ time: new Date("2026-11-22T19:15:00+01:00") });
  await p.goto(URL, { waitUntil: "load" }); await p.clock.runFor(1500);
  const salut = await p.locator(".salut").innerText();
  const ok = /Bonsoir Mawouena/.test(salut);
  console.log((ok ? "OK    " : "ÉCHEC ") + "Ancien cache au prénom vide → « " + salut.replace(/\s+/g, " ").trim() + " »");
  await b.close();
  process.exit(ok ? 0 : 1);
})();
