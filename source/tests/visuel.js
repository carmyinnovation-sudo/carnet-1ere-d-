const { chromium } = require("playwright");
const OUT = "/tmp/claude-0/-home-claude/16652545-275c-5a8b-8d95-9d2f9964e6f5/scratchpad/shots";
const URL = "http://localhost:8765/?k=00000000-0000-4000-8000-000000000000";
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(URL); await page.waitForTimeout(1000);
  const ouvrir = async (c, id) => { await page.evaluate(([c, id]) => window.__carnet.ouvrirActivite("probleme", { chap: c, exo: id }), [c, id]); await page.waitForTimeout(200); };
  await ouvrir("ma-eq", "ma-e3");
  for (let k = 0; k < 5; k++) { await page.locator(".voile").last().locator("text=Voir le corrigé").click(); await page.locator(".voile").last().locator(".segment button").first().click(); }
  await page.locator(".voile").last().locator("text=Voir le corrigé").click(); await page.waitForTimeout(150);
  await page.screenshot({ path: OUT + "/v1-maths-param.png" });
  await page.evaluate(() => document.querySelectorAll(".voile").forEach((v) => v.remove()));
  await ouvrir("ma-denomb", "ma-d2"); await page.locator(".voile").last().locator("text=Voir le corrigé").click(); await page.waitForTimeout(150);
  await page.screenshot({ path: OUT + "/v2-denomb.png" });
  await page.evaluate(() => document.querySelectorAll(".voile").forEach((v) => v.remove()));
  await ouvrir("svt-drel", "svt-x3"); await page.waitForTimeout(150);
  await page.screenshot({ path: OUT + "/v3-coupe.png" });
  await page.evaluate(() => document.querySelectorAll(".voile").forEach((v) => v.remove()));
  await page.evaluate(() => window.__carnet.ouvrirActivite("exercice", { chap: "fr-methode" })); await page.waitForTimeout(200);
  await page.locator(".voile").last().locator("button.btn").first().click(); await page.waitForTimeout(200);
  await page.screenshot({ path: OUT + "/v4-commentaire.png" });
  await page.evaluate(() => document.querySelectorAll(".voile").forEach((v) => v.remove()));
  await page.evaluate(() => window.__carnet.ouvrirChapitre("ma-bases")); await page.waitForTimeout(200);
  await page.screenshot({ path: OUT + "/v5b-fiche-bases.png" });
  await page.evaluate(() => document.querySelectorAll(".voile").forEach((v) => v.remove()));
  await page.evaluate(() => window.__carnet.ouvrirChapitre("ma-vect")); await page.waitForTimeout(200);
  await page.screenshot({ path: OUT + "/v5-fiche-vect.png" });
  await page.evaluate(() => document.querySelectorAll(".voile").forEach((v) => v.remove()));
  // téléphone + mode sombre
  const tel = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, colorScheme: "dark", isMobile: true, hasTouch: true });
  const p2 = await tel.newPage(); await p2.goto(URL); await p2.waitForTimeout(1000);
  await p2.screenshot({ path: OUT + "/v6-tel-sombre.png", fullPage: false });
  await p2.evaluate(() => window.__carnet.ouvrirActivite("probleme", { chap: "ma-bases", exo: "ma-b1" })); await p2.waitForTimeout(200);
  await p2.locator(".voile").last().locator("text=Voir le corrigé").click(); await p2.waitForTimeout(150);
  await p2.screenshot({ path: OUT + "/v7-tel-exo.png" });
  await browser.close();
})();
