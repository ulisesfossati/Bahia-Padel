import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
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
import { SegFooter } from './componentes/Footer/Segfooter';
import { Hoja5 } from './componentes/Hoja5/Hoja5';
import { Hoja6 } from './componentes/Hoja6/Hoja6';
import { Hoja7 } from './componentes/Hoja7/Hoja7';
import { Falsahoja3 } from './componentes/Falsa Hoja 3/FalsaHoja3';
import { HojaRanking } from './componentes/HojaRanking/HojaRanking';
import ReservaPadel from './componentes/ReservarTurno/ReservarTurno';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Admin from './componentes/Admin/Admin';
import AdminDashboard from './componentes/AdminDashboard/AdminDashboard';

const MainApp = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && <Preloader />}
      </AnimatePresence>

      {isLoaded && (
        <>
          <NavBar />
          <Hoja1 />
          <Hoja2 />
          <Falsahoja3 />
          <HojaRanking />
          <Hoja3 />
          <Hoja4 />
          <Hoja5 />
          <Hoja6 />
          <Hoja7 />
          {/* <ReservaPadel /> */}
          <SegFooter />
        </>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router basename="/Bahia-Padel"> {/* Ruta base agregada */}
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Reservar" element={<ReservaPadel />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
