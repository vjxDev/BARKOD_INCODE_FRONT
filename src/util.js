export const getYesterday = (dateOnly = false) => {
  let d = new Date();
  d.setDate(d.getDate() - 1);
  return dateOnly ? new Date(d.toDateString()) : d;
};

export const Kodovi = ["RSD", "EUR", "USD", "JPY"];

export const KodUString = {
  RSD: ["Srpski dinar", "Srpskih dinara"],
  EUR: ["Evro", "Evra"],
  USD: ["Dolar", "Dolara"],
  JPY: ["Japanski jen", "Japanskih jena"],
};

export const ikone = {
  RSD: "rs.svg",
  EUR: "eu.svg",
  USD: "us.svg",
  JPY: "jp.svg",
};
