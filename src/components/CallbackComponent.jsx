import { useCallback, useState } from "react"
import { IncrementButton } from './IncrementButton'

export const CallbackComponent = () => {
    const [counter, setCounter] = useState(0);

    const incrementarPadre = useCallback( //*funcion que voy a enviar a incrementButton, sin useCallback se crearia de nuevo la funcion y al mandarse como parametro sumar={inc..}
        (valorQueRecibeDesdeElHijo) => {  // se re dibujaria el componente entero de nuevo por culpa del re dibujo de la funcion*//
        setCounter(cont => cont + valorQueRecibeDesdeElHijo)
        }, [])     //aca no llamo al counter del setCounter porque queda el valor incial(0)
                   //es decir, haria la suma una vez y no la vuelve a hacer
        return (
    <>
        <h1>Contador con useCallback: {counter}</h1>
        <IncrementButton sumar={incrementarPadre}/>
    </>
  )
}