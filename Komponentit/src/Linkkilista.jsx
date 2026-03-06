import * as React from "react";

function Linkkilista(props) {
  return (
    <div>
      <h3>Linkkilista:</h3>
      <ul>
        {props.lista.map((link) => (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.nimi}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Linkkilista;
