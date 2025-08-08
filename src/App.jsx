import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <Navbar></Navbar>
     <Outlet></Outlet>
    </>
  )
}

export default App
// diff npm vs yarn

