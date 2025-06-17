//FormComponent.jsx
import { useEffect, useRef } from "react"
import { useForm } from "./hooks/useForm"

export const FormComponent = () => {

  const focusRef = useRef()

  useEffect(()=> {
    focusRef.current.focus()
  }, [])
  
  const initialForm = {
    userName: '',
    email: '',
    password: ''
  }
  
  const {formState, userName, email, password, onInputChange} = useForm(initialForm)
      // userName, email y password los desestructuro gracias al ...formState que no importa la cantidad de propiedades que tenga el initialForm-
      //+las voy a poder desestructurar igual
  
  const submitear = (e) => {
    e.preventDefault() 
    console.log(formState)
  }

  return (
    <form onSubmit={submitear}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">User Name</label>
        <input 
        ref={focusRef}
        type="text" 
        className="form-control" 
        name="userName"
        value={userName}
        onChange={onInputChange}
        placeholder="Ingrese su nombre de usuario"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input 
        type="email" 
        className="form-control" 
        name="email"
        value={email}
        onChange={onInputChange} 
        placeholder="Ingrese su email"   
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input 
        type="password" 
        className="form-control" 
        name="password"
        value={password}
        onChange={onInputChange} 
        placeholder="Ingrese su contraseña"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}