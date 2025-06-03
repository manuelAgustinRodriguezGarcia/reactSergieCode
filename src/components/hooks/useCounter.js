//useCounter.js
import { useState } from "react";

export const useCounter = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial);

  const aumentar = (valor = 1) => {
    setContador(contador + valor);
  }
  const decrementar = (valor = 1, negativoActivado) => {
    // !negativoActivado
    if(negativoActivado ==false && contador - valor < 0) return 
    //si negativoActivado es false y el contador menos el valor es menor que 0, no hagas el setContador
    setContador(contador - valor);
  }
  const resetear = () => {
    setContador(0)
  }
  return {
    contador, 
    aumentar, 
    decrementar, 
    resetear
  }
}