import { useReducer } from "react"
import { useForm } from "./hooks/useForm"

export const ReducerComponent = () => {

  const initialState = [{//estado inicial - state
    id: new Date().getTime(),
    tarea: "Aprender React",
    finalizada: true
  }]


  //si no le paso un stat incial vas a tomar a initialState
  const tareaReducer = (state = initialState, action = {}) => {
    //si no le paso un action, toma un action vacio {}
    switch (action.type) {
      case '[TAREAS] Agregar tarea':
        return [...state, action.payload]//agarra el state anterior y le agrega el payload que le pasemos

      case '[TAREAS] Finalizar tarea':
        console.log('Finalizar')
        return state.map(tar => {
          if (tar.id === action.payload) {
            return {
              ...tar, finalizada: !tar.finalizada //devolve todo(id, tarea, finalizada) PERO finalizada devolvelo opuesto a lo que estaba
            }                                       //entonces al hacer click en el chechkbox, mando el id 
          } return tar
        })

      case '[TAREAS] Eliminar tarea':
        return state.filter(tar => tar.id !== action.payload)//exactamente lo mismo que cuando eliminas algo de un carrito

      case '[TAREAS] Resetear tareas':
        return []
      default: return state
    }
  }
                                              //reducer  -  estado inicial
  const [tareasState, dispatch] = useReducer(tareaReducer, initialState) //reducer
    //estado que devuelve - dispatch es lo que usas dsps para enviar el action(type y el payload) al reducer y con esa informacion el reducer puede hacer lo que necesite como:
    //-agregar una tarea (tomando el payload y agregandolo al state original)
    //-eliminarla (usando el id y haciendo un filter)
    //-marcar como finalizada(toma el id, busca el mismo id en el state, lo trae con todas sus propiedades(...) y le cambia la propiedad finalizada)
    //- en resetear manda un payload vacio porque es indiferente los datos para borrar TODO, pero el accion es el activador para que devuelva un array vacio

  const { tarea, formState, onInputChange } = useForm({ tarea: '' })


//metodo para agregar tarea
  const agregarTareaDesdeForm = (event) => {
    if (formState.tarea == '') return
    event.preventDefault()
    const tarea = {//crea la nueva tarea
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizada: false
    }
    const accion = {
      type: '[TAREAS] Agregar tarea',
      payload: tarea//manda la nueva tarea como payload
    }
    dispatch(accion)
  }
//metodo para finalizar tarea (marcar como finalizada)
  const finalizarTarea = ({ id, finalizada, tarea }) => {//desestructuro el item que me pasa para utilizar sus propiedades 
    console.log("Informacion que recibo del checkbox: " + id + " | " + tarea + " | " + finalizada)

    const accion = {
      type: '[TAREAS] Finalizar tarea',
      payload: id//mando el id en el payload para usarlo en el switch
    }
    dispatch(accion)
  }
//metodo para eliminar tarea
  const eliminarTarea = ({id}) => {
    console.log("Informacion recibida desde el boton: id -" + id)
    const accion = {
      type: '[TAREAS] Eliminar tarea',
      payload: id
    }
    dispatch(accion)
  }

  const reset = () => {
    console.log("Se resetearon todas las tareas.")
    const accion = {
      type: '[TAREAS] Resetear tareas',
      payload: ''
    }
    dispatch(accion)
  }

  return (
    <>
      <h1>useReducer:</h1>
      <form onSubmit={agregarTareaDesdeForm}>
        <div className="mb-3">
          <label htmlFor="tarea" className="form-label">Ingresa una nueva tarea</label>
          <input
            type="text"
            className="form-control"
            name="tarea"
            id="tarea"
            placeholder="Ingresar tarea"
            value={tarea}
            onChange={onInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Tarea</button>
        <button type="button" className="btn btn-danger" onClick={reset}>Eliminar todo</button>
      </form>
      <ul className="list-group">
        {tareasState.map(item => { //recorre a tareas, del useReducer => const [tareasState, dispatch] = useReducer(tareaReducer, initialState)
          return (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.tarea}</span>
              <div>
                <input
                  type="checkbox"
                  checked={item.finalizada}
                  onChange={() => finalizarTarea(item)}//aca mando el item para comprobar cual es la tarea que voy a finalizar en la funcion, podria servir para un carrito o para sumar cantidades 
                />
                <button type="button" className="btn btn-danger" onClick={() => eliminarTarea(item)}>Borrar</button> {/*el button envia item para saber cual borrar*/}
              </div>                                                    {/*si no lo pasas como call back se ejecuta de una */}
            </li>
          )
        })}
      </ul>
    </>
  )
}