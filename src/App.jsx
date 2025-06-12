import './styles/App.css'
import {Titulo, Contador, Listado, ReducerComponent,ContadorComponent, FormComponent, FetchConHook, CalculosConUseMemo, UsersApp, CallbackComponent} from './components'

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
      <hr />
      <CallbackComponent />
      <hr />
      <ReducerComponent/>
    </>
  )
}
