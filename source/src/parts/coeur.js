
/* ---------- Texte enrichi (maths, chimie) ----------
   Construit le DOM nœud par nœud (jamais d’innerHTML) : sans danger, même pour un texte saisi.
   **gras**  ^{exposant}  _{indice}  @vec{AB}  @bar{AB}  @frac{a}{b}  @sqrt{x}  @C{n}{p}  @A{n}{p} */
function richNoeuds(t) {
  const out = []; let buf = ""; let i = 0;
  const flush = () => { if (buf) { out.push(document.createTextNode(buf)); buf = ""; } };
  const groupe = () => {
    if (t[i] !== "{") return "";
    let prof = 0; const d = i + 1;
    for (let j = i; j < t.length; j++) {
      if (t[j] === "{") prof++;
      else if (t[j] === "}" && --prof === 0) { i = j + 1; return t.slice(d, j); }
    }
    i = t.length; return t.slice(d);
  };
  while (i < t.length) {
    const c = t[i];
    if (c === "*" && t[i + 1] === "*") {
      const f = t.indexOf("**", i + 2);
      if (f > i + 1) { flush(); out.push(h("b", null, richNoeuds(t.slice(i + 2, f)))); i = f + 2; continue; }
    }
    if ((c === "^" || c === "_") && t[i + 1] === "{") {
      flush(); i++; const g = groupe(); out.push(h(c === "^" ? "sup" : "sub", null, richNoeuds(g))); continue;
    }
    if (c === "@") {
      const m = /^@(vec|bar|frac|sqrt|fig|C|A)\{/.exec(t.slice(i, i + 7));
      if (m) {
        flush(); i += m[0].length - 1;
        const a = groupe();
        if (m[1] === "fig") out.push(figure(a));
        else if (m[1] === "vec") out.push(h("span", { class: "vec" }, richNoeuds(a)));
        else if (m[1] === "bar") out.push(h("span", { class: "barre-sup" }, richNoeuds(a)));
        else if (m[1] === "sqrt") out.push(h("span", { class: "rac" }, "√", h("span", null, richNoeuds(a))));
        else {
          const b = groupe();
          if (m[1] === "frac") out.push(h("span", { class: "frac" }, h("span", null, richNoeuds(a)), h("span", null, richNoeuds(b))));
          else out.push(h("span", { class: "cnp" }, m[1], h("span", { class: "ix" }, h("span", null, richNoeuds(b)), h("span", null, richNoeuds(a)))));
        }
        continue;
      }
    }
    buf += c; i++;
  }
  flush();
  return out;
}
// Figures de géométrie (cube, tétraèdre…) : points, arêtes vues, arêtes cachées en pointillés
function figure(nom) {
  const f = (typeof FIGURES !== "undefined" && FIGURES[nom]) || null;
  if (!f) return document.createTextNode("");
  const P = Object.fromEntries((f.pts || []).map(([n, x, y]) => [n, [x, y]]));
  const svg = sv("svg", { viewBox: `0 0 ${f.w} ${f.h}`, role: "img", "aria-label": f.titre || "Figure" });
  for (const [pts, op] of f.polys || []) svg.append(sv("polygon", { points: pts, fill: "currentColor", "fill-opacity": op, stroke: "currentColor", "stroke-width": 1 }));
  for (const [x1, y1, x2, y2, ep] of f.traits || []) svg.append(sv("line", { x1, y1, x2, y2, stroke: "currentColor", "stroke-width": ep || 2, "stroke-linecap": "round" }));
  for (const [x, y, t] of f.textes || []) svg.append(sv("text", { x, y, "text-anchor": "middle", "dominant-baseline": "middle" }, t));
  const trait = ([a, b], cache) => sv("line", { x1: P[a][0], y1: P[a][1], x2: P[b][0], y2: P[b][1], stroke: "currentColor", "stroke-width": cache ? 1.4 : 2, "stroke-dasharray": cache ? "5 4" : null, opacity: cache ? 0.65 : 1, "stroke-linecap": "round" });
  for (const s of f.cachees || []) svg.append(trait(s, true));
  for (const s of f.aretes || []) svg.append(trait(s, false));
  for (const [a, b] of f.couleur || []) svg.append(sv("line", { x1: P[a][0], y1: P[a][1], x2: P[b][0], y2: P[b][1], stroke: "var(--bic)", "stroke-width": 2.4, "stroke-linecap": "round" }));
  for (const [x, y, d] of f.angles || []) svg.append(sv("path", { d: `M${x},${y} ${d}`, fill: "none", stroke: "currentColor", "stroke-width": 1.2 }));
  for (const [n, x, y, dx, dy] of f.pts || []) {
    svg.append(sv("circle", { cx: x, cy: y, r: 2.2, fill: "currentColor" }));
    svg.append(sv("text", { x: x + (dx || 0), y: y + (dy || 0), "text-anchor": "middle", "dominant-baseline": "middle" }, n));
  }
  return h("span", { class: "fig" }, svg, f.legende ? h("span", { class: "fig-leg" }, f.legende) : null);
}
function rich(src) { const f = document.createDocumentFragment(); f.append(...richNoeuds(String(src == null ? "" : src))); return f; }
const texteBrut = (s) => String(s == null ? "" : s).replace(/\*\*/g, "")
  .replace(/@(?:vec|bar)\{([^{}]*)\}/g, "$1").replace(/@sqrt\{([^{}]*)\}/g, "√($1)")
  .replace(/@frac\{([^{}]*)\}\{([^{}]*)\}/g, "($1)/($2)").replace(/@([CA])\{([^{}]*)\}\{([^{}]*)\}/g, "$1($2 ; $3)")
  .replace(/\^\{([^{}]*)\}/g, "^$1").replace(/_\{([^{}]*)\}/g, "$1");
// Nombres à la française : virgule décimale, espace fine pour les milliers, vrai signe moins
function fmtNombre(v) {
  if (typeof v !== "number" || !Number.isFinite(v)) return String(v);
  const r = Math.round(v * 1e6) / 1e6;
  const [e, d] = String(Math.abs(r)).split(".");
  return (r < 0 ? "−" : "") + e.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (d ? "," + d : "");
}
function lireNombre(s) {
  let t = String(s == null ? "" : s).trim().replace(/[\s  ]/g, "").replace(/[−–]/g, "-").replace(",", ".");
  t = t.replace(/^[a-zA-Z]{1,3}=/, "");              // « x=3 » ou « n=4 »
  t = t.replace(/[a-zA-Zéèàùç°%€²³/]*$/, "");         // unité collée à la fin (« 20m/s », « 56 J ») : ignorée
  const f = /^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/.exec(t);
  if (f) return Number(f[2]) === 0 ? NaN : Number(f[1]) / Number(f[2]);
  return t === "" ? NaN : Number(t);
}
function ficheEl(ch) { return h("ol", { class: "fiche" }, (ch.fiche || []).map((t) => h("li", null, rich(t)))); }
function supportEl(sujet) {
  if (!sujet || !sujet.support) return null;
  const lignes = String(sujet.support).split("\n");
  return h("div", null,
    h("ol", { class: "support" }, lignes.map((l) => h("li", { class: l.trim() ? null : "vide" }, l.trim() ? rich(l) : " "))),
    sujet.source ? h("p", { class: "source-texte" }, sujet.source) : null);
}
