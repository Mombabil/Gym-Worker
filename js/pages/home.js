// ici, import des fonctions de ./components, et de ./utils
import { createHeader } from "../components/header.js";
import { calcRunning } from "../components/running.js";
import { updateChart } from "../components/chart.js";

const STORAGE = "runningSessions";

export function init() {
  console.log("Home chargée");

  const header = createHeader();
  document.querySelector(".headerTitle").appendChild(header);

  // récuperation et sauvegarde de la saisie utilisateur
  calcRunning();

  // creation et affichage du graphique
  updateChart();
  period.onchange = updateChart;

  // affichage des sessions effectuées
}
