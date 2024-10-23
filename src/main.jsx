import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Hoja1 } from './componentes/Hoja1/hoja1'
import { NavBar } from './componentes/NavBar/NavBar'
import { Hoja2 } from './componentes/Hoja2/Hojados'









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>

      <NavBar/>

      <Hoja1/>
      <Hoja2/>

   
     
     
    
      
    </ChakraProvider>
    
  </React.StrictMode>,
)
