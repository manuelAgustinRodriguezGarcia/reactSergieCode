//useForm.js
import { useState } from "react"

export const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm)
  
  const onInputChange = ({target}) => { //onInputChange recibe un evento por defecto, se desestructura el target para sacar el name y el value
    const {name, value} = target //traeme el name y el value del target(el name es el que le pusimos a cada input [userName, email, password])
    setFormState({
      ...formState,   
      [name]: value  //toma el valor del name donde cambie el input (user | email | password) y lo pone como key, y el value es el valor del input
      //los [ ] son para que esta key sea dinamica y cambie dependiendo del e.target.name que se cambie
    })
  }
  return {
    formState, ...formState, onInputChange
  }//mando el formState completo, mando el desestructurado y mando la funcion onInputChange
}
