import React, { useState } from "react";
import "./App.css";

function App() {
  const [votosMilei, setVotosMilei] = useState(0);
  const [votosMassa, setVotosMassa] = useState(0);

  return (
    <div className="App">
      <h1>Conteo de Votos</h1>
      <div>
        <p>{`Javier Milei: ${votosMilei} votos`}</p>
        <button onClick={() => setVotosMilei(votosMilei + 1)}>
          Votar a Milei
        </button>
      </div>
      <div>
        <p>{`Sergio Massa: ${votosMassa} votos`}</p>
        <button onClick={() => setVotosMassa(votosMassa + 1)}>
          Votar a Massa
        </button>
      </div>
    </div>
  );
}

export default App;
