import { useEffect, useState } from "react";

export function Faturamento() {
  const [faturamentoDiario, setFaturamentoDiario] = useState([]);
  const [menorValor, setMenorValor] = useState(0);
  const [maiorValor, setMaiorValor] = useState(0);
  const [diasAcimaDaMedia, setDiasAcimaDaMedia] = useState(0);

  useEffect(() => {
    // Carrega o arquivo JSON
    fetch("/dados.json")
      .then((response) => response.json())
      .then((data) => {
        setFaturamentoDiario(data);

        // Filtra os dias com faturamento maior que 0
        const valores = data
          .filter((item) => item.valor > 0)
          .map((item) => item.valor);

        // Calcula o menor valor
        setMenorValor(Math.min(...valores));

        // Calcula o maior valor
        setMaiorValor(Math.max(...valores));

        // Calcula a média
        const media =
          valores.reduce((acc, val) => acc + val, 0) / valores.length;

        // Conta os dias acima da média
        setDiasAcimaDaMedia(valores.filter((valor) => valor > media).length);
      })
      .catch((error) => console.error("Erro ao carregar o JSON:", error));
  }, []);

  return (
    <>
      {" "}
      <div>
        <h1>Análise de Faturamento</h1>
        <p>
          Menor valor de faturamento:{" "}
          <span style={{ color: "red" }}>{menorValor}</span>
        </p>
        <p>
          Maior valor de faturamento:{" "}
          <span style={{ color: "green" }}>{maiorValor}</span>
        </p>
        <p>
          Número de dias com faturamento acima da média:{" "}
          <b>{diasAcimaDaMedia}</b>
        </p>
      </div>
    </>
  );
}
