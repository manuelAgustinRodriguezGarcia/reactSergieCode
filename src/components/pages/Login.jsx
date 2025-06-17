import React, { useContext } from 'react'
import { useForm } from '../hooks/useForm'
import { UserContext } from '../../context/UserContext'

export const Login = () => {
  const initialForm = {
    nombre: '',
    tecnologia: '',
    mail: ''
  }
  const {formState, nombre, tecnologia, mail, onInputChange} = useForm(initialForm)
  const {setUser} = useContext(UserContext) 
  const onSubmit = (e) => {
    e.preventDefault()
    setUser(formState)
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control" name="nombre" id="nombre" value={nombre} onChange={onInputChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="tecnologia" className="form-label">Tecnología</label>
        <input type="text" className="form-control" name="tecnologia" id="tecnologia" value={tecnologia} onChange={onInputChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="mail" className="form-label">Email</label>
        <input type="email" className="form-control" name="mail" id="mail" value={mail} onChange={onInputChange}/>
      </div>
      <button type="submit" className="btn btn-primary">Registrar Usuario</button>
    </form>
  )
}