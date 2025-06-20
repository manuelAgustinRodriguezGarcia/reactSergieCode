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
    <h1>(Contador.jsx): {valor}</h1>
    <button className="btn btn-primary" onClick={sumar}>+1</button>
    <button className="btn btn-primary" onClick={restar}>-1</button>
    <button className="btn btn-primary" onClick={manejarClick}>Apretar para ver algo</button>
    </>
  )
}