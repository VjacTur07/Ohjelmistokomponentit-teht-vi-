import React from "react";
import Tervehdys from "./Tervehdys";
import Infolista from "./Infolista";

const Kayttajakortti = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Tervehdys nimi={props.nimi} />
      <Infolista taulukko={props.lista} />
    </div>
  );
};

export default Kayttajakortti;
