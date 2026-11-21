const { chromium } = require("playwright");
const OUT = "/tmp/claude-0/-home-claude/16652545-275c-5a8b-8d95-9d2f9964e6f5/scratchpad/shots";
require("fs").mkdirSync(OUT, { recursive: true });
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 800 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const erreurs = [];
  page.on("console", (m) => { if (m.type() === "error") erreurs.push(m.text()); });
  page.on("pageerror", (e) => erreurs.push("PAGEERROR " + e.message));
  await page.goto("http://localhost:8765/?k=00000000-0000-4000-8000-000000000000", { waitUntil: "load" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: OUT + "/1-cesoir.png", fullPage: true });
  await page.goto("http://localhost:8765/?k=00000000-0000-4000-8000-000000000000#reviser"); await page.waitForTimeout(800);
  await page.screenshot({ path: OUT + "/2-reviser.png", fullPage: true });
  // ouvrir un chapitre de maths
  await page.evaluate(() => window.__carnet.ouvrirChapitre("ma-ortho")); await page.waitForTimeout(500);
  await page.screenshot({ path: OUT + "/3-chapitre.png", fullPage: false });
  await page.keyboard.press("Escape"); await page.waitForTimeout(300);
  // exercice corrigé
  await page.evaluate(() => window.__carnet.ouvrirActivite("probleme", { chap: "ma-ortho" })); await page.waitForTimeout(400);
  await page.screenshot({ path: OUT + "/4-choix-exo.png" });
  await page.click("text=Les cages de l’atelier de Jacob"); await page.waitForTimeout(300);
  await page.click("text=Un indice"); await page.click("text=Voir le corrigé"); await page.waitForTimeout(300);
  await page.screenshot({ path: OUT + "/5-exo-corrige.png", fullPage: false });
  for (let i = 0; i < 5; i++) { await page.click(i % 2 ? "text=À moitié" : "text=Juste").catch(()=>{}); await page.waitForTimeout(150); if (i < 4) { await page.click("text=Voir le corrigé").catch(()=>{}); await page.waitForTimeout(150);} }
  await page.screenshot({ path: OUT + "/6-exo-fin.png" });
  await page.click("text=Enregistrer et terminer").catch(()=>{}); await page.waitForTimeout(300);
  await page.screenshot({ path: OUT + "/7-fin-activite.png" });
  await page.keyboard.press("Escape"); await page.waitForTimeout(300);
  // quiz dénombrement
  await page.evaluate(() => window.__carnet.ouvrirActivite("quiz", { chap: "ma-denomb" })); await page.waitForTimeout(300);
  await page.click("text=Lancer le quiz"); await page.waitForTimeout(300);
  await page.screenshot({ path: OUT + "/8-quiz.png" });
  await page.locator(".qcm button").first().click(); await page.waitForTimeout(200);
  await page.screenshot({ path: OUT + "/9-quiz-rep.png" });
  await page.keyboard.press("Escape"); await page.waitForTimeout(200);
  await page.click("text=Arrêter et enregistrer").catch(()=>{});
  await page.goto("http://localhost:8765/?k=00000000-0000-4000-8000-000000000000#progres"); await page.waitForTimeout(800);
  await page.screenshot({ path: OUT + "/10-progres.png", fullPage: true });
  await page.goto("http://localhost:8765/?k=00000000-0000-4000-8000-000000000000#plus"); await page.waitForTimeout(800);
  await page.screenshot({ path: OUT + "/11-plus.png", fullPage: true });
  console.log("plan:", JSON.stringify(await page.evaluate(() => window.__carnet.planSeance(3).blocs.map((b) => [b.mat, b.chap, b.file.map((f) => f[0]).join("+")]))));
  console.log("erreurs:", erreurs.length ? erreurs.join("\n") : "aucune");
  await browser.close();
})();
