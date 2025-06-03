//ContadorComponent.jsx - aca llamo a useCounter
import { useCounter } from "./hooks/useCounter"

export const ContadorComponent = () => {
  
  const {contador, aumentar, decrementar, resetear} = useCounter(0)
  return (
    <>
    <h1>(ContadorComponent.jsx): {contador}</h1>
    <button className="btn btn-primary" onClick={() => decrementar(1, false)}>-1</button>
    <button className="btn btn-danger" onClick={() => resetear()}>RESET</button>
    <button className="btn btn-primary" onClick={() => aumentar(1)}>+1</button>
    </>
  )
}  