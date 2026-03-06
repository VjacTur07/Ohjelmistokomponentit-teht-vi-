import * as React from "react";
import Hello from "./Tervehdys";
import OpiskelijaTiedot from "./OpiskelijaTiedot";
import Infolista from "./Infolista";
import Linkkilista from "./Linkkilista";

function App() {
  const linkit = [
    { id: 1, nimi: "Google", url: "https://google.com" },
    { id: 2, nimi: "React", url: "https://react.dev" },
  ];

  const tiedot = ["React", "JavaScript", "CSS"];

  const opiskelijaProps = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  return (
    <div>
      <Hello />
      <OpiskelijaTiedot opiskelija={opiskelijaProps} />
      <Infolista taulukko={tiedot} />
      <Linkkilista lista={linkit} />
    </div>
  );
}

export default App;
