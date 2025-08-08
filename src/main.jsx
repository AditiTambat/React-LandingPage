
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'

import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route, BrowserRouter } from 'react-router-dom'
import Quotes from './pages/Quotes.jsx'
import Location from './pages/Location.jsx'
import Contactus from './pages/Contactus.jsx'


const data=createBrowserRouter(createRoutesFromElements(
      <Route element={<App/>} path='/'>
      <Route element={<Home/>} path='home'> </Route>
      <Route element={<Quotes/>} path='quotes'> </Route>
      <Route element={<Location/>} path='location'> </Route>
      <Route element={<Contactus/>} path='contactus'> </Route>
      </Route>
))

createRoot(document.getElementById('root')).render(
  <RouterProvider router={data}/>
)
