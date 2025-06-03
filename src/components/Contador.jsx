import { useState } from "react";

export const Contador = () => {
  const [valor, setValor] = useState(0); //se usan []
  function sumar() {
    setValor(valor + 1);
  }
  function restar() {
    setValor(valor - 1);
  }

  function manejarClick() {
    alert("¡Hola, has apretado el botón!");
  }
  return (
    <>
    <h1>Contador: {valor}</h1>
    <button className="boton" onClick={sumar}>+1</button>
    <button className="boton" onClick={restar}>-1</button>
    <button className="boton" onClick={manejarClick}>Apretar para ver algo</button>
    </>
  )
}