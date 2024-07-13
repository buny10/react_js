import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
 import Footer from './components/Footer.jsx'
 import Header from './components/Header.jsx'

import {BrowserRouter} from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


const element = <p>Students Data{5+5}</p>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
     
      <App /> 
     
     </BrowserRouter>
    
   
    {/* {element} */}
    {/* <Header title="henrich 1" subtitle="footer 1"  color="red"/> */}
    {/* <Header title="henrich 2" subtitle="footer 2"  color="green"/> */}
    {/* <Home/> */}
  
    {/* <Footer/> */}
  {/* {<Weather/>} */}

  </React.StrictMode>,
)
