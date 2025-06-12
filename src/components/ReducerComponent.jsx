import { useReducer } from "react"
import { useForm } from "./hooks/useForm"

export const ReducerComponent = () => {

const initialState = [{//estado inicial - state
  id: 1,
  tarea: "Aprender React",
  finalizada: true
}]

const otroEstadoInicial = [{//estado inicial - state
  id: 1,
  tarea: "Aprender OTRA COSA",
  finalizada: true
}]

const nuevaTarea = [{//nuevo estado - state
  id: 2,
  tarea: "Segunda tarea",
  finalizada: false
}]

const agregarTarea = {//action
  type: '[TAREAS] Agregar tarea',
  payload: nuevaTarea
}

                     //si no le paso un stat incial vas a tomar a initialState
const tareaReducer = (state = initialState, action = {})=> {
                                //si no le paso un action, toma un action vacio {}
  
  if(action.type === '[TAREAS] Agregar tarea') {
      return [...state, action.payload]
  }
  return state
}
console.log("esto es una muestra de la teoria de useReducer")
console.log(tareaReducer( otroEstadoInicial))


useReducer//4.37

const {tarea, formState, onInputChange} = useForm({tarea: ''})
const agregarTareaDesdeForm = (event) => {
  event.preventDefault()
  console.log(formState)
  // type: '[TAREAS] Agregar tarea',
  // payload: nuevaTarea
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
          onChange={onInputChange}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <ul>
      <li></li>
    </ul>
  </>
  )
}