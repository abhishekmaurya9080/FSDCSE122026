import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

/* import Icard from "./component/Icard";
import Gallery from "./component/Gallery";
import ReactHook from "./component/ReactHook";
import Imagemanipulation from "./component/Imagemanipulation"; */

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
function App() {
const [data,setdata]=useState();
  return ( 
      <div>
        <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Home/>}/>
          <Route path= '/login' element={<Login/>}/>
          <Route path= '/registration' element={<Registration regdata={setdata}/>}/>
          <Route path= '/dashboard' element={<Dashboard/>}/>

        </Routes>
        </BrowserRouter>
    
      {JASON.stringify(data)}
    </div>
      )
}

export default App