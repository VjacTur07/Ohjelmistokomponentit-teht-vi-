// Tehtävä 1
const opiskelija = {
  nimi: "Vitaly",
  ikä: 43,
  kurssi: "Ohjelmointi",
};
console.log(
  `Opiskelija: ${opiskelija.nimi}, Ikä: ${opiskelija.ikä}, Kurssi: ${opiskelija.kurssi}.`
);
// Tehtävä 2
class auto {
  constructor(merkki, malli, vuosimalli) {
    this.merkki = merkki;
    this.malli = malli;
    this.vuosimalli = vuosimalli;
  }
  TulostaTiedot() {
    console.log(
      `Auto: ${this.merkki}, Malli: ${this.malli}, Vuosi: ${this.vuosimalli}.`
    );
  }
}
const auto1 = new auto("Audi", "A6", 2011);
const auto2 = new auto("Nissan", "Silvia", 2000);

auto1.TulostaTiedot();
auto2.TulostaTiedot();
// Tehtävä 3
const kirjat = [
  { nimi: "The Lord Of The Rings", kirjailija: "J.R.R Tolkien", vuosi: 1954 },
  { nimi: "The Alchemist", kirjailija: "Paulo Coelho", vuosi: 1988 },
  { nimi: "The Da Vinci Code", kirjailija: "Dan Brown", vuosi: 2003 },
];
kirjat.forEach((kirja) => {
  console.log(`Kirja: ${kirja.nimi}, ${kirja.kirjailija}, ${kirja.vuosi}`);
});
