import React, { useState, useEffect } from 'react';
import { Box, Img, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import logo from '/logo-sinFondo.png';
import { NavBar } from '../NavBar/NavBar';
import { Hoja1 } from '../Hoja1/hoja1';
import { Hoja2 } from '../Hoja2/Hojados';
import { Hoja3 } from '../Hoja3/Hoja3';
import { Hoja4 } from '../Hoja4/Hoja4';

const MotionBox = motion(Box);

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoaded(true); // Indica que la página está lista
      setTimeout(() => {
        setShowContent(true); // Muestra el contenido después de la animación del preloader
        document.body.style.overflow = 'auto'; // Permitir scroll
      }, 800); // Ajustar con la duración de la animación
    };

    // Desactivar el scroll mientras el preloader está activo
    document.body.style.overflow = 'hidden';

    window.addEventListener('load', handlePageLoad);

    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  return (
    <>
      {!showContent && (
        <MotionBox
          position="fixed"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="black"
          zIndex="9999"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          initial={{ y: 0 }}
          animate={{ y: isLoaded ? '-100%' : 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          overflow="hidden"
        >
          <Img src={logo} alt="Logo" w="100px" mb="1em" />
          <Spinner size="xl" color="white" thickness="4px" speed="0.8s" />
        </MotionBox>
      )}
      {showContent && (
        <Box>
            <NavBar/>
            <Hoja1/>
            <Hoja2/>
            <Hoja3/>
            <Hoja4/>
        </Box>
      )}
    </>
  );
};

export default Preloader;
