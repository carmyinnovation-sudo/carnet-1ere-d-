# Sources du carnet de révisions 1ère D

Le site publié (à la racine du dépôt) est construit à partir de ces fichiers.

- `src/base.html` : le carnet de bac d'origine (carmyinnovation-sudo/carnet-de-bac), point de départ.
- `src/build.py` : applique les modifications (chaque remplacement est vérifié) et assemble le site dans `dist/`.
- `src/parts/` : le code propre à ce carnet (plan du soir, exercices corrigés, vues, styles, service worker).
- `src/data/` : le contenu, une matière par fichier (fiches, cartes, quiz, exercices corrigés, sujets de rédaction).
- `icones/` : les icônes (violettes, pour ne pas confondre avec le carnet de bac).
- `tests/` : tests Playwright (à lancer avec un serveur local sur le port 8765) ; `sommeil.js` simule l'horloge (fuseau du Bénin) pour vérifier que la séance se raccourcit le soir.

## Mettre à jour le contenu

1. Modifier ou ajouter un fichier dans `src/data/` (par exemple les chapitres du prochain devoir). Un fichier listé dans `EN_ATTENTE` (dans `build.py`) n'est pas inclus : c'est le cas de `30-pct.js` tant que le cahier de PCT n'est pas relevé.
2. Augmenter `version` dans `src/version.json` (pour que le cache hors ligne se renouvelle).
3. `python3 source/src/build.py`, puis copier le contenu de `source/dist/` à la racine du dépôt.
4. Commit et push : GitHub Pages republie, et le carnet installé se met à jour tout seul.

La clé personnelle du carnet (`?k=…`) n'est jamais dans ce dépôt.
