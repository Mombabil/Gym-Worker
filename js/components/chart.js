import { load } from "../utils/storage.js";

let chart;

export function updateChart() {
  let data = load().sort((a, b) => a.date.localeCompare(b.date));

  const periodValue = period.value;

  if (periodValue !== "all") {
    const limit = new Date();

    limit.setDate(limit.getDate() - Number(periodValue));

    data = data.filter((session) => new Date(session.date) >= limit);
  }

  const labels = data.map((x) => x.date);

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(document.getElementById("chart"), {
    type: "line",

    data: {
      labels,

      datasets: [
        {
          label: "Temps (min)",
          data: data.map((x) => x.time),
        },
        {
          label: "Distance (km)",
          data: data.map((x) => x.distance),
        },
        {
          label: "Vitesse (km/h)",
          data: data.map((x) => x.speed),
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      resizeDelay: 200,

      plugins: {
        legend: {
          labels: {
            font: {
              size: 12,
            },
            boxWidth: 10,
            boxHeight: 10,
          },
        },
      },
    },
  });
}
