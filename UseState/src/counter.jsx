import React, { useState } from "react";
import Naytto from "./naytto";
import {
  KasvatusNappi,
  VahennysNappi,
  NollausNappi,
  TuplaKasvatusNappi,
} from "./painikkeet";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        margin: "20px auto",
        maxWidth: "500px",
      }}
    >
      <Naytto count={count} />

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <KasvatusNappi onClick={() => setCount(count + 1)} />
        <VahennysNappi onClick={() => setCount(count - 1)} />
        <TuplaKasvatusNappi onClick={() => setCount(count + 2)} />
        <NollausNappi onClick={() => setCount(0)} />
      </div>
    </div>
  );
}

export default Counter;
