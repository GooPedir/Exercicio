export function Soma(Indice) {
  let SOMA = 0;
  let K = 0;

  while (K < Indice) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  return SOMA;
}
