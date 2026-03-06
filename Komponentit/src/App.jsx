import * as React from "react";
import Hello from "./Tervehdys";
import OpiskelijaTiedot from "./OpiskelijaTiedot";

function App() {
  const opiskelijaProps = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  return (
    <div>
      <Hello />
      <OpiskelijaTiedot opiskelija={opiskelijaProps} />
    </div>
  );
}

export default App;
