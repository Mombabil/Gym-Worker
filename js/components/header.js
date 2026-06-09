import { getCurrentDate } from "../utils/getCurrentDate.js";

export function createHeader() {
  const h2 = document.createElement("h2");
  h2.classList.add("currentDate");
  h2.textContent = getCurrentDate();

  return h2;
}
