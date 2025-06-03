// Listado.jsx
import { useState } from "react";
import { FormularioAgregar } from "./FormularioAgregar";

const ItemTernario = ({ id, nombre, activado, onlyTrue }) => {
  return (
    <>
    <li>
      Id:{id} - {nombre}: {activado ? "TRUE✅" : "FALSE⭕"} {onlyTrue && "- ONLY TRUE⭐"}
    </li>
    </>
  );
};

export const Listado = () => {
  const listaDeItemsBase = [
    { id: 1, nombre: "REACT", activado: true },
    { id: 2, nombre: "HTML", activado: true },
    { id: 3, nombre: "CSS", activado: true },
    { id: 4, nombre: "JAVASCRIPT", activado: true },
    { id: 5, nombre: "TYPESCRIPT", activado: true, onlyTrue: true },
  ];

  const [lista, setLista] = useState(listaDeItemsBase); //le doy un valor inicial a la lista(usando el array ya existente, puede ser uno vacio tmbn)

  const [onlyTrueNuevo, setOnlyTrueNuevo] = useState(true);//estas son las props que voy a pasar al hijo
  const [activadoNuevo, setActivadoNuevo] = useState(true);//estas son las props que voy a pasar al hijo
  const [nombreNuevo, setNombreNuevo] = useState("");//estas son las props que voy a pasar al hijo
  const [largoLista, setLargoLista] = useState(listaDeItemsBase.length + 1);//estas son las props que voy a pasar al hijo

  const agregarItemLista = () => { //cuando aprete el btn se: |*agrega a la lista |*se suma 1 al valor del length para el id |*se limpia el input
    if(nombreNuevo.trim() === "") return
    setLista([
      ...lista,
      {
        id: largoLista,
        nombre: nombreNuevo,
        activado: activadoNuevo,
        onlyTrue: onlyTrueNuevo,
      },
    ]);
    setLargoLista(largoLista + 1);
    setNombreNuevo(""); // aca se limpia el input para que vuelva a estar en blanco
  };

  return (//el map recorre el array LISTA y returnea el ItemTernario que armamos arriba, que puede servir para un carrito de compras
    <>
    <h1>(Listado.jsx)</h1>
      <ul>
        {lista.map((item) => (<ItemTernario key={item.id} id={item.id} nombre={item.nombre} activado={item.activado} onlyTrue={item.onlyTrue}/>))}
      </ul>
      <FormularioAgregar
        funcionQuePasoDesdeElPadreAlHijo={agregarItemLista} //funcionQuePasoDesdeElPadreAlHijo deberia llamarse onAgregarItem, o onAddItem
        nombreNuevo={nombreNuevo}
        setNombreNuevo={setNombreNuevo}
        activadoNuevo={activadoNuevo}
        setActivadoNuevo={setActivadoNuevo}
        onlyTrueNuevo={onlyTrueNuevo}
        setOnlyTrueNuevo={setOnlyTrueNuevo}
      />
    </>//FormularioAgregar es el hijo, que recibe los datos por props, los cambia con las funciones de set que tiene 
  );   //y llama a agregarItemLista cuando el ususairo apreta click
};

//esta es la version sin un componente hijo, todo en un mismo jsx
// import { useState } from "react"

// const ItemTernario = ({nombre, activado, onlyTrue}) => {
//   return (
//     <li>{nombre}: {activado? 'TRUE✅' : 'FALSE⭕'}  {onlyTrue && '- ONLY TRUE⭐'}</li>
//   )
// }

// export const Listado = () => {
//   let listaDeItemsBase = [
//     {id: 1, nombre: "REACT", activado: true},
//     {id: 2, nombre: "HTML", activado: true},
//     {id: 3, nombre: "CSS", activado: true},
//     {id: 4, nombre: "JAVASCRIPT", activado: true},
//     {id: 5, nombre: "TYPESCRIPT", activado: true, onlyTrue: true}
//   ]
//   const [lista, setLista] = useState(listaDeItemsBase);

//   const [onlyTrueNuevo, setOnlyTrueNuevo] = useState(true);
//   const [activadoNuevo, setActivadoNuevo] = useState(true);
//   const [nombreNuevo, setNombreNuevo] = useState("");
//   const [largoLista, setLargoLista] = useState(listaDeItemsBase.length + 1);

//   function cambioEnInput(e) {
//     setNombreNuevo(e.target.value);//FUNCIONA
//   }

//   function cambioCheckBox(e) { //FUNCIONA
//     setOnlyTrueNuevo(e.target.checked)
//   }

//   function cambioActivado(e) { //FUNCIONA
//     const valor = e.target.value === "true"//compara si el valor es "true" si lo es da TRUE y sino FALSE
//     setActivadoNuevo(valor)
//   }


//   function agregarItemLista() {
//     setLista([...lista, {id: largoLista ,nombre: nombreNuevo, activado: activadoNuevo, onlyTrue: onlyTrueNuevo}])
//     setLargoLista(largoLista + 1)
//   }

//   return(
//     <>
//       <ul>
//         {lista.map((item) => <ItemTernario key={item.id} nombre={item.nombre} activado={item.activado} onlyTrue={item.onlyTrue}></ItemTernario>)}
//       </ul>
//       <input className="inputsAdd" type="text" id="nombreNuevo" placeholder="Nombre del elemento" value={nombreNuevo} onChange={cambioEnInput}/>
//       <select className="inputsAdd"  id="activadoNuevo" onChange={cambioActivado}>
//         <option value="true">Activado</option>
//         <option value="false">Desactivado</option>
//       </select>
//       <label htmlFor="onlyTrueNuevo">
//         <input type="checkbox" id="onlyTrueNuevo" checked={onlyTrueNuevo} onChange={cambioCheckBox}/>ONLY TRUE
//       </label>
//       <button className="boton" onClick={() => agregarItemLista()}>Agregar a la lista</button>
//     </>
//   )
// }