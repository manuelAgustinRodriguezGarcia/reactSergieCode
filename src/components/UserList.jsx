//UserList.jsx - elemento que muestra lista de usuarios o comentarios llamado por UsersApp.jsx
import { useFetchData } from "./hooks/useFetchData"

export const UserList = ({ endpoint }) => {
  const {datos, isLoading} = useFetchData(endpoint)//endpoint es el parametro que se le pasa a useFetchData, puede ser users o comments, no hace falta pasarlo como objeto porque no se usa mas de un parametro enpoint: "users"
  return (
    <>
      <ul>
        {isLoading ? <p>Cargando aguarde un instante...⌛</p> :
        endpoint == 'users' ? datos.map((user) => <li key={user.id}>Nombre de usuario: {user.name}</li>)
                            : datos.map((dato) => <li key={dato.id}>Comentario: {dato.name}</li>)
        }
      </ul>
    </>
  )
}