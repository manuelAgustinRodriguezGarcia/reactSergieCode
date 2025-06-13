// FormularioAgregar.jsx
export const FormularioAgregar = ({ funcionQuePasoDesdeElPadreAlHijo, nombreNuevo, setNombreNuevo, activadoNuevo, setActivadoNuevo, onlyTrueNuevo, setOnlyTrueNuevo }) => {

  const cambioEnInput = (e) => {
    setNombreNuevo(e.target.value);
  };
  
  const cambioActivado = (e) => {
    const valor = e.target.value === "true";
    setActivadoNuevo(valor);
  };

  const cambioCheckBox = (e) => {
    setOnlyTrueNuevo(e.target.checked);
  };

  return (
    <>
      <input
        className="inputsAdd"
        type="text"
        placeholder="Nombre del elemento"
        value={nombreNuevo}
        onChange={cambioEnInput}
      />
      <select className="inputsAdd" onChange={cambioActivado}>
        <option value="true">Activado</option>
        <option value="false">Desactivado</option>
      </select>
      <label htmlFor="onlyTrueNuevo">
        <input
          type="checkbox" id="onlyTrueNuevo" checked={onlyTrueNuevo} onChange={cambioCheckBox}
        />
        ONLY TRUE
      </label>
      <button className="btn btn-primary" onClick={funcionQuePasoDesdeElPadreAlHijo}>Agregar a la lista</button>
    </>
  );
};

/*
1. Este hijo recibe funcionQuePasoDesdeElPadreAlHijo por props, que es la funcion agregarItemLista en Listado.jsx y la tiene lista para cuando el usuario haga click el enviar una señal al padre para que la ejecute, no la ejecuta el hijo, la ejecuta el padre
2. Cuando el usuario hace click ejecuta la funcion
3. El hijo envia los datos cada vez que el usuario cambio algo de los inputs, debido al onchange

el hijo manda una a una los datos y cuando el usuario hace click en el boton; el padre (que ya tiene los datos actualizados) ejecuta agregarItemLista, que guarda las cosas dentro de la lista original y renderiza el itemTernario cuando hace el map en el nuevo array de items


*/
