// Le sommeil d'abord : la séance se raccourcit le soir, et s'arrête avant l'heure limite (coucher 23 h → 22 h 30).
// Horloge simulée, fuseau du Bénin. Carnet de test (jamais celui de Mawouena).
const { chromium } = require("playwright");
const OUT = "/tmp/claude-0/-home-claude/16652545-275c-5a8b-8d95-9d2f9964e6f5/scratchpad/shots";
require("fs").mkdirSync(OUT, { recursive: true });
const URL = "http://localhost:8765/?k=00000000-0000-4000-8000-000000000000";
let echecs = 0;
const ok = (nom, cond, detail) => { console.log((cond ? "OK   " : "ÉCHEC ") + nom + (cond || !detail ? "" : "  → " + detail)); if (!cond) echecs++; };

async function page(browser, heure) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 }, timezoneId: "Africa/Porto-Novo", locale: "fr-FR" });
  const p = await ctx.newPage();
  const erreurs = [];
  p.on("pageerror", (e) => erreurs.push(e.message));
  p.on("console", (m) => { if (m.type() === "error" && !/ERR_|Failed to load resource|fetch/.test(m.text())) erreurs.push(m.text()); });
  await p.clock.install({ time: new Date(`2026-11-23T${heure}:00+01:00`) });
  await p.goto(URL, { waitUntil: "load" });
  await p.clock.runFor(1500);
  return { p, ctx, erreurs };
}
const texteCarte = (p) => p.locator("section[aria-labelledby=titre-plan]").innerText();

(async () => {
  const browser = await chromium.launch();

  // 1. 15 h : journée, 3 blocs, pas de message sur le coucher
  { const { p, ctx, erreurs } = await page(browser, "15:00");
    const t = await texteCarte(p);
    ok("15 h : 3 blocs proposés", /1 h 25/.test(t) && (await p.locator("ol.plan li:not(.pause)").count()) === 3, t.slice(0, 200));
    ok("15 h : pas de ligne sur le coucher", !/au lit/.test(t));
    ok("15 h : bonjour Mawouena", /Bonjour Mawouena/.test(await p.locator(".salut").innerText()));
    ok("15 h : aucune erreur JS", !erreurs.length, erreurs.join(" | "));
    await ctx.close(); }

  // 2. 20 h : 3 blocs, fin prévue 21 h 25
  { const { p, ctx } = await page(browser, "20:00");
    const t = await texteCarte(p);
    ok("20 h : 3 blocs, fin vers 21 h 25, au lit à 23 h", /fin vers 21 h 25, au lit à 23 h/.test(t), t.slice(0, 300));
    await p.screenshot({ path: OUT + "/s1-20h.png", fullPage: true });
    await ctx.close(); }

  // 3. 21 h 10 : 2 blocs (55 min) au lieu de 3
  { const { p, ctx } = await page(browser, "21:10");
    const t = await texteCarte(p);
    ok("21 h 10 : 2 blocs au lieu de 3", /ce soir c’est 2 blocs au lieu de 3/.test(t) && (await p.locator("ol.plan li:not(.pause)").count()) === 2, t.slice(0, 300));
    ok("21 h 10 : conseil « commence avant 21 h 05 »", /commence avant 21 h 05/.test(t));
    await ctx.close(); }

  // 4. 21 h 40 : 1 bloc
  { const { p, ctx } = await page(browser, "21:40");
    const t = await texteCarte(p);
    ok("21 h 40 : 1 bloc au lieu de 3", /1 bloc au lieu de 3/.test(t) && (await p.locator("ol.plan li:not(.pause)").count()) === 1, t.slice(0, 300));
    await p.screenshot({ path: OUT + "/s2-21h40.png", fullPage: true });
    await ctx.close(); }

  // 5. 22 h 20 et 0 h 30 : plus de séance, on va dormir
  for (const hr of ["22:20", "00:30"]) {
    const { p, ctx } = await page(browser, hr);
    const t = await texteCarte(p);
    ok(`${hr} : « C’est l’heure de dormir », pas de bouton Commencer`, /C’est l’heure de dormir/.test(t) && !(await p.locator("text=Commencer la séance").count()), t.slice(0, 200));
    if (hr === "22:20") await p.screenshot({ path: OUT + "/s3-22h20.png", fullPage: true });
    await ctx.close();
  }

  // 6. Séance commencée à 21 h 35 (2 blocs pile) ; pause qui déborde → le carnet propose d’aller dormir
  { const { p, ctx, erreurs } = await page(browser, "21:35");
    let t = await texteCarte(p);
    ok("21 h 35 : 2 blocs", /2 blocs au lieu de 3/.test(t), t.slice(0, 200));
    await p.click("text=Commencer la séance"); await p.clock.runFor(500);
    const avant = await p.locator(".voile").last().innerText();
    ok("Écran d’avant : fin prévue 22 h 30, au lit à 23 h", /fin prévue vers 22 h 30, au lit à 23 h/.test(avant), avant.slice(0, 300));
    ok("Écran d’avant : plus de mention des pauses « notées »", !/notées/.test(avant));
    await p.click("text=C’est parti"); await p.clock.runFor(1000);
    await p.clock.runFor(25 * 60000 + 2000);
    await p.locator(".voile").last().locator("button", { hasText: "Pause maintenant" }).click();
    await p.clock.runFor(1000);
    let z = p.locator(".voile").last();
    ok("Pause à 22 h 00 : pas encore d’alerte sommeil", !(await z.locator("text=Finir ma soirée et aller dormir").isVisible()));
    await p.clock.runFor(7 * 60000);
    ok("Pause dépassée (22 h 07) : le carnet propose d’aller dormir", await z.locator("text=Finir ma soirée et aller dormir").isVisible());
    const pz = await z.innerText();
    ok("… et explique : bloc 2 finirait après 22 h 30", /finirait vers 22 h 3\d, après 22 h 30/.test(pz), pz.slice(0, 400));
    ok("… le bouton de reprise devient secondaire", /Faire le bloc quand même/.test(pz));
    await p.screenshot({ path: OUT + "/s4-pause-tard.png" });
    await z.locator("text=Finir ma soirée et aller dormir").click(); await p.clock.runFor(500);
    z = p.locator(".voile").last();
    const bil = await z.innerText();
    ok("Bilan : séance arrêtée pour dormir", /Séance arrêtée à 22 h 07 pour que tu sois au lit à 23 h/.test(bil), bil.slice(0, 300));
    ok("Bilan : question « Ta forme ce soir », pas de concentration ni TikTok", /Ta forme ce soir/.test(bil) && !/oncentration|TikTok/.test(bil));
    await p.screenshot({ path: OUT + "/s5-bilan.png" });
    await z.locator(".choix button", { hasText: "Fatiguée" }).click();
    await z.locator("text=Enregistrer ma soirée").click(); await p.clock.runFor(500);
    const fin = await p.locator(".voile").last().innerText();
    ok("Fin : « Fini à 22 h 07. Ferme l’écran… au lit à 23 h »", /Fini à 22 h 07\. Ferme l’écran, prépare ton sac et au lit à 23 h/.test(fin), fin.slice(0, 300));
    ok("Fin : pas de « décrochage »", !/écrochage/.test(fin));
    await p.screenshot({ path: OUT + "/s6-fin.png" });
    await p.locator(".voile").last().locator("button", { hasText: "Fermer" }).click(); await p.clock.runFor(500);
    // Ce soir : séance faite ? (1 bloc sur 2 prévus ce soir, 3 au total) → il est 22 h 07 : plus de bloc possible
    t = await texteCarte(p);
    ok("Ce soir après : plus de séance proposée (22 h 07)", /C’est l’heure de dormir/.test(t), t.slice(0, 200));
    await p.goto(URL + "#progres"); await p.clock.runFor(1500);
    const som = await p.locator("section[aria-labelledby=t-sommeil]").innerText();
    ok("Progrès : carte Sommeil, fini à 22 h 07, à l’heure, fatiguée", /Ce soir\s+22 h 07\s+à l’heure\s+fatiguée/.test(som), som);
    const jr = await p.locator("section[aria-labelledby=t-journal]").innerText();
    ok("Journal : fini à 22 h 07 · arrêtée pour dormir · forme : fatiguée", /fini à 22 h 07 · arrêtée pour dormir · forme : fatiguée/.test(jr), jr.slice(0, 300));
    ok("Progrès : plus de sorties ni décrochages", !/sortie|écrochage|oncentration/.test(await p.locator("main").innerText()));
    await p.screenshot({ path: OUT + "/s7-progres.png", fullPage: true });
    ok("Séance : aucune erreur JS", !erreurs.length, erreurs.join(" | "));
    await ctx.close(); }

  // 7. Réglage du coucher à 22 h : l’heure limite passe à 21 h 30
  { const { p, ctx } = await page(browser, "21:00");
    await p.goto(URL + "#plus"); await p.clock.runFor(1200);
    await p.locator("section[aria-labelledby=t-profil] .rangee", { hasText: "Heure du coucher" }).locator("button").click(); await p.clock.runFor(300);
    const z = p.locator(".voile").last();
    await z.locator(".choix button", { hasText: /^22 h$/ }).click();
    const aide = await z.innerText();
    ok("Réglage : avec 3 blocs et coucher 22 h → commencer au plus tard 20 h 05", /commence au plus tard à 20 h 05 : fin du travail à 21 h 30/.test(aide), aide.slice(0, 500));
    await z.locator("text=Enregistrer").click(); await p.clock.runFor(300);
    await p.goto(URL + "#ce-soir"); await p.clock.runFor(1200);
    const t = await texteCarte(p);
    ok("Coucher 22 h, il est 21 h : 1 bloc (fin 21 h 25)", /1 bloc au lieu de 3/.test(t), t.slice(0, 300));
    await ctx.close(); }

  // 8. PCT mise de côté
  { const { p, ctx } = await page(browser, "18:00");
    await p.goto(URL + "#reviser"); await p.clock.runFor(1200);
    const rv = await p.locator("main").innerText();
    ok("Réviser : aucune PCT", !/PCT|Physique/.test(rv));
    await p.goto(URL + "#plus"); await p.clock.runFor(1200);
    const pl = await p.locator("main").innerText();
    ok("Plus : la PCT reste dans Mes matières, « en préparation »", /Physique, chimie et technologie\s+Chapitres en préparation/.test(pl));
    ok("Plus : « Les bases en maths » et « Le sommeil d’abord » expliqués", /Le sommeil d’abord/.test(pl) && /Les bases en maths/.test(pl));
    await p.goto(URL + "#reviser"); await p.clock.runFor(1200);
    const lb = await p.locator(".liste-chap button.chap").first().innerText();
    ok("Réviser : « Les bases du calcul » en tête des maths", /Les bases du calcul/.test(lb) && /Sert dans tous les exercices/.test(lb), lb);
    await ctx.close(); }

  await browser.close();
  console.log(echecs ? `\n${echecs} échec(s)` : "\nTout est bon.");
  process.exit(echecs ? 1 : 0);
})();
