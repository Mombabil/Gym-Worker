import { load, save } from "../utils/storage.js";
import { today } from "../utils/getCurrentDate.js";
import { refresh } from "../utils/refresh.js";

const STORAGE = "runningSessions";

export function calcRunning() {
  // récuperation et sauvegarde de la saisie utilisateur
  runningForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = load();

    if (data.find((x) => x.date === today())) {
      message.textContent = "Séance déja enregistrée aujourd'hui";

      runningForm.reset();
      document.querySelector(".averageSpeed").textContent = "00.00 km/h";

      return;
    }

    const time = Number(document.getElementById("runningStatTime").value);
    const distance = Number(
      document.getElementById("runningStatDistance").value,
    );

    const speed = (distance / (time / 60)).toFixed(2);

    data.push({
      date: today(),
      time,
      distance,
      speed: Number(speed),
    });

    save(data);

    runningForm.reset();

    refresh();
  });

  // affichage dynamique de la speed
  runningForm.addEventListener("change", (e) => {
    let time = Number(document.getElementById("runningStatTime").value);
    let distance = Number(document.getElementById("runningStatDistance").value);

    if (time && distance) {
      document.querySelector(".averageSpeed").textContent =
        (distance / (time / 60)).toFixed(2) + " km/h";
    }
  });
}
