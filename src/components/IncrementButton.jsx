import React from "react"

export const IncrementButton = React.memo(({sumar}) => {//react.memo memoriza al componente en si, con sus props incluidas y asi solo se actualizaria cuando cambia una prop
    console.log("Se esta redibujando una y otra vez")   //quiere decir que si la prop cambia(en vez de 1 es 5) no se va a reactualizar
    return (
    <>
      <button className="btn btn-primary" onClick={() => sumar(1)}>+1</button>
      <button className="btn btn-primary" onClick={() => sumar(5)}>+5</button>
      <button className="btn btn-primary" onClick={() => sumar(10)}>+10</button>
      <button className="btn btn-primary" onClick={() => sumar(100)}>+100</button>
      <button className="btn btn-primary" onClick={() => sumar(1000)}>+1000</button>
    </>
  )
})