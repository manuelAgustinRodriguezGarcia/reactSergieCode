//UsersApp.jsx - aca llamo a userList 
import { useState } from "react"
import { UserList } from "./UserList"

export const  UsersApp = () => {

  const [endpointValor, setEndpointValor] = useState("users");//en principio se carga el endpoint de users
  
  const handleFetch = () => { //si apreta el boton, el endpoint cambia a comments y activa el useEffect de UserList
    setEndpointValor("comments")
  }

  return(
    <>
      <h1>Lista de usuarios:(UsersApp.jsx)</h1>
      <UserList endpoint={endpointValor}></UserList>
      <button className="btn btn-primary" onClick={handleFetch}>Ver Comentarios</button>
    </>
  )
}