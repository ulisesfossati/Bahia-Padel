import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Hoja1 } from './componentes/Hoja1/hoja1'









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>

      <Hoja1/>  

   
     
     
    
      
    </ChakraProvider>
    
  </React.StrictMode>,
)
