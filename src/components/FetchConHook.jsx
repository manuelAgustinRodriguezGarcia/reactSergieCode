import React from 'react'
import { useFetching } from './hooks/useFetching'

export const FetchConHook = () => {
  const {data, errors, isLoading} = useFetching('https://jsonplaceholder.typicode.com/users')
  return (
    <>
    <h1>Lista de usuarios(FetchConHook.jsx)</h1>
    {isLoading ? <h4>"Cargando...⌛"</h4>
    : errors ? <p>Ha ocurrido un error</p> 
    : 
    <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map(dato => {
            return (
              <tr key={dato.id}>
                <th scope="row">{dato.id}</th>
                <td>{dato.name}</td>
                <td>{dato.email}</td>
                <td>{dato.website}</td>
              </tr>)
          })}
        </tbody>
      </table>
    }  
    </>
  )
}