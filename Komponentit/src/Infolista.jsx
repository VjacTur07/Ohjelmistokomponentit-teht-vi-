import * as React from "react";

function Infolista(props) {
  return (
    <div>
      <h3>Infolista: </h3>
      <ul>
        {props.taulukko.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Infolista;
