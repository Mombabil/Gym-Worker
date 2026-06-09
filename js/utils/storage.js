// appelé la constante dans le bon fichier
const STORAGE = "runningSessions";

export function load() {
  return JSON.parse(localStorage.getItem(STORAGE) || "[]");
}

export function save(d) {
  return localStorage.setItem(STORAGE, JSON.stringify(d));
}
