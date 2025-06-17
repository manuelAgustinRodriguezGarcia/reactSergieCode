import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const Contacto = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      <h1>Pagina de contacto</h1>
      <h2>Contactame!</h2>
      <h4>-Nombre: {user.nombre}</h4>
      <h4>-Especializado en {user.tecnologia}</h4>
      <h4>-Mail: {user.mail}</h4>
      <p>Esta seccion consume el contexto de UserContext</p>
    </div>
  )
}