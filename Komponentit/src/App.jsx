import * as React from "react";
import Hello from "./Tervehdys";
import OpiskelijaTiedot from "./OpiskelijaTiedot";
import Infolista from "./Infolista";

function App() {
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
    </div>
  );
}

export default App;
