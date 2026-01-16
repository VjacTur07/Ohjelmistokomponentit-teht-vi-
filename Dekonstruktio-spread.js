// Tehtävä 1
const numerot = [10, 20, 30, 40];
const [eka, ...loput] = numerot;
console.log("Ensimmäinen:", eka);
console.log("Loput:", loput);
// Tehtävä 2
const opiskelija = {
  nimi: "Ville",
  ika: 34,
  koulutus: "Datanomi",
  kaupunki: "Helsinki",
};
const { nimi, ika, ...muutTiedot } = opiskelija;
console.log(nimi);
console.log(ika);
console.log(muutTiedot);
// Tehtävä 3
const backend = ["Node.js", "SQL"];
const frontend = ["HTML", "CSS", "JavaScript"];
const fullstack = [...backend, ...frontend, "Git"];
console.log(fullstack);
// Tehtävä 4
const perusTiedot = {
  nimi: "Anna",
  ika: 19,
};

const lisatiedot = {
  kaupunki: "Espoo",
  harrastus: "Ohjelmointi",
};
const kayttaja = { ...perusTiedot, ...lisatiedot, aktiivinen: true };
console.log(kayttaja);
