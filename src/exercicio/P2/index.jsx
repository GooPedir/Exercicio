import { useState } from "react";

export function Fibonacci() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const isFibonacci = (num) => {
    let a = 0,
      b = 1;
    while (b < num) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b === num || num === 0;
  };

  const handleCheck = () => {
    if (isFibonacci(Number(number))) {
      setResult(`${number} pertence à sequência de Fibonacci.`);
    } else {
      setResult(`${number} não pertence à sequência de Fibonacci.`);
    }
  };

  return (
    <div>
      <h1>Verificação de Fibonacci</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleCheck}>Verificar</button>
      <p>{result}</p>
    </div>
  );
}
