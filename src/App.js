import { Soma } from "./exercicio/P1";
import { Fibonacci } from "./exercicio/P2";
import { Faturamento } from "./exercicio/P3";
import { FaturamentoPorUF } from "./exercicio/P4";
import { Reverse } from "./exercicio/P5";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          gap: "10px",
        }}
      >
        <h1>Resultado Soma {Soma(13)}</h1>
        <Fibonacci />
        <Faturamento />
        <FaturamentoPorUF />
        <h1>
          Reverso de Allan (<b>{Reverse("Allan")}</b>)
        </h1>
      </div>
    </>
  );
}

export default App;
