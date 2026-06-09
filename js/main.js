// Charge dynamiquement le module correspondant à la page actuelle (lazy loading)
// recupere l'attribut data-page de la balise body
const page = document.body.dataset.page;

// - import("./pages/...") charge le fichier JS seulement quand il est nécessaire
const modules = {
  home: () => import("./pages/home.js"),
};

// - modules[page] sélectionne la fonction associée à la page (ex: "home", "about")
// - ?.() exécute la fonction uniquement si elle existe (évite une erreur si page inconnue)
// - .then(...) récupère le module chargé (Promise) et exécute sa fonction d'initialisation (init)
// Résultat : chaque page charge uniquement son propre code au moment où elle est affichée
modules[page]?.().then((m) => m.init?.());
