//UsersApp.jsx
import { useState } from "react"
import { UserList } from "./UserList"

export const  UsersApp = () => {

  const [endpointValor, setEndpointValor] = useState("users");//en principio se carga el endpoint de users
  
  const handleFetch = () => { //si apreta el boton, el endpoint cambia a comments y activa el useEffect de UserList
    setEndpointValor("comments")
  }

  return(
    <>
      <h1>Lista de usuarios:</h1>
      <UserList endpoint={endpointValor}></UserList>
      <button onClick={handleFetch}>Ver Comentarios</button>
    </>
  )
}