import './styles/App.css'
import { Contacto, Ajustes, Pago, NavBar } from './components'
import { Navigate, Route, Routes } from 'react-router'
import { LandingPage } from './LandingPage'

export const App = () => {
  return (
    <>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/contact' element={<Contacto></Contacto>}></Route>
        <Route path='/settings' element={<Ajustes></Ajustes>}></Route>
        <Route path='/payment' element={<Pago></Pago>}></Route>
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
    </>
  )
}
