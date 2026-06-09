// // affichage de la date du jour en francais
export const getCurrentDate = () => {
  const today = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const todayToLocaleStr = today.toLocaleDateString("fr-FR", options);

  return todayToLocaleStr;
};

export const today = () => {
  return new Date().toISOString().split("T")[0];
};
