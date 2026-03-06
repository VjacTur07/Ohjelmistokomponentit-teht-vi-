import * as React from "react";

function OpiskelijaTiedot(props) {
  return (
    <div>
      <p>Nimi: {props.opiskelija.nimi}</p>
      <p>Ikä: {props.opiskelija.ika}</p>
      <p>Kurssi: {props.opiskelija.kurssi}</p>
    </div>
  );
}

export default OpiskelijaTiedot;
