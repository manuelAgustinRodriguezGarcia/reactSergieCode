import { useState, useMemo } from "react";

export const CalculosConUseMemo = () => {
  const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5]);
  const [mostrar, setMostrar] = useState(true)
  
  const getCalculo = (listaNumeros) => useMemo(() => {
    console.log("Calculando...");
    return listaNumeros.reduce((a,b) => a + b)
  }, [listaNumeros]) //recorda el cambio de listaNumeros, si no cambia no lo recalcula
  //es similar a un useEffect ya que se ejecuta cuando cambia el valor de listaNumeros
  
  const agregarNumero = ()=> {
    setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
    console.log(listaNumeros)
  }

  return (//el problema aca es que cada vez que aprete setMostrar, se vuelve a hacer el mismo calculo
    <>
      <h2>Calculo: {getCalculo(listaNumeros)}</h2>
      <button className="btn btn-primary" onClick={() => setMostrar(!mostrar)}>{mostrar? "Ocultar" : " Mostrar"}</button>
      <button className="btn btn-primary" onClick={() => agregarNumero()}>Agregar numero</button>
    </>
  )
}