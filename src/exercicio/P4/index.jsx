export function FaturamentoPorUF() {
  const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(faturamentoPorEstado).reduce(
    (acc, val) => acc + val,
    0
  );

  return (
    <>
      {" "}
      <div>
        <h1>Percentual de Representação por Estado</h1>
        {Object.entries(faturamentoPorEstado).map(([estado, valor]) => (
          <p key={estado}>
            {estado}: {((valor / total) * 100).toFixed(2)}%
          </p>
        ))}
      </div>
    </>
  );
}
