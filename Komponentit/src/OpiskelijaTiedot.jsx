import * as React from "react";

function OpiskelijaTiedot(props) {
  return (
    <div>
      <p>
        <strong>Nimi:</strong> {props.opiskelija.nimi}
      </p>
      <p>
        <strong>Ikä:</strong> {props.opiskelija.ika}
      </p>
      <p>
        <strong>Kurssi:</strong> {props.opiskelija.kurssi}
      </p>
    </div>
  );
}

export default OpiskelijaTiedot;
