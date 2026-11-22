# Carnet de révisions · 1ère D

Web app de révision pour une élève de Première D (programme du Bénin), à installer sur un ordinateur (Chrome ou Edge) ou un téléphone.

- **Ce soir** : la séance du soir en blocs de 25 minutes (le premier pour les maths), le compte à rebours jusqu'au prochain devoir et l'état de préparation par matière. La séance finit au plus tard 30 minutes avant l'heure du coucher (23 h par défaut, réglable) : si l'élève commence tard, le carnet raccourcit la séance au lieu de la faire veiller.
- **Réviser** : exercices corrigés pas à pas au format des devoirs béninois (contexte, tâche, problèmes), fiches de cours, cartes mémoire avec répétition espacée, quiz, rédactions avec corrigé, « explique-le », minuteur et carnet d'erreurs.
- **Progrès** : temps de travail, heure de fin du travail soir après soir (et forme notée au bilan), exercices, notes, erreurs par type et journal des séances.

## Comment ça marche

- La page est un fichier HTML autonome, hébergé par GitHub Pages, qui fonctionne aussi hors ligne.
- Les données sont stockées dans Supabase. Elles ne sont lisibles qu'avec la clé secrète contenue dans le lien personnel du carnet (`?k=…`), qui n'est pas dans ce dépôt.
- La clé Supabase présente dans le code est la clé publique du projet : elle ne donne accès à rien sans cette clé secrète.

Programme : chapitres relevés dans les cahiers de l'élève (2e devoir du 1er trimestre, lundi 30 novembre 2026), plus un chapitre de maths « Les bases du calcul » proposé en premier. Pour la PCT, les deux situations d'apprentissage du 1er trimestre relevées dans son cahier (l'énergie mécanique, les composés organiques) ; les leçons sont à confirmer par l'élève (case « Pas encore vu en classe »).
