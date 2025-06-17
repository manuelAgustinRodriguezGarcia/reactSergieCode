import './styles/App.css'
import { Contacto, Login, Pago, NavBar } from './components'
import { Navigate, Route, Routes } from 'react-router'
import { LandingPage } from './LandingPage'
import { UserProvider } from './context/UserProvider'

export const App = () => {
  return (
    <UserProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/contact' element={<Contacto></Contacto>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/payment' element={<Pago></Pago>}></Route>
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
    </UserProvider>
  )
}
