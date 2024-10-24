import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Hoja1 } from './componentes/Hoja1/hoja1';
import { NavBar } from './componentes/NavBar/NavBar';
import { Hoja2 } from './componentes/Hoja2/Hojados';
import { Hoja3 } from './componentes/Hoja3/Hoja3';
import { Hoja4 } from './componentes/Hoja4/Hoja4';

import { AnimatePresence } from 'framer-motion';
import Preloader from './componentes/preloader/Preloader';
import { Footer } from './componentes/Footer/Footer';
import { MiniFooter } from './componentes/MiniFooter/MiniFooter';
import { SegFooter } from './componentes/prueba2/Segfooter';

const MainApp = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200); // Slight delay to match preloader transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && <Preloader/>}
      </AnimatePresence>

      {isLoaded && (
        <>
          <NavBar />
          <Hoja1/>
          <Hoja2 />
          <Hoja3 />
          <Hoja4 />
          <SegFooter/>
        </>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <MainApp />
    </ChakraProvider>
  </React.StrictMode>
);
