import './styles/App.css'
import {Titulo, Contador, Listado, ContadorComponent, FormComponent, FetchConHook, CalculosConUseMemo} from './components'
import { UsersApp } from './components/UsersApp'

export const App = ()=> {
  return (
    <>
      <Titulo title={"React JS"} subtitle={"Sergie Code"}/>
      <Contador />
      <Listado />
      <UsersApp />
      <hr />
      <h1>Hooks</h1>
      <ContadorComponent />
      <hr />
      <FormComponent />
      <hr />
      <FetchConHook />
      <hr />
      <CalculosConUseMemo />
    </>
  )
}
