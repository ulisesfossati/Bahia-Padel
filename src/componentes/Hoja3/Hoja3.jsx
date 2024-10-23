import { Box, Img, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import torneo1 from '/TorneoMujeres.png';
import torneo2 from '/TorneoHombres.png';

// Crear un componente Motion para la animación
const MotionImg = motion(Img);

const Hoja3 = () => {
  return (
    <Box as="section" bg="#30343f" paddingBottom="5.5em" h="100%">
      <Text 
        fontSize="7xl"  
        color="#ea638c" 
        fontWeight="medium" 
        textAlign="center" 
        paddingTop="1em"
      >
        ULTIMOS TORNEOS
      </Text>

      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        gap="5em" 
        paddingTop="1em" 
        flexWrap="wrap"
      >
        {/* Imagen 1 con efecto de izquierda a derecha */}
        <MotionImg 
          h="60vh" 
          src={torneo1}
          initial={{ opacity: 0, x: -100 }} // Desplazamiento inicial desde la izquierda
          whileInView={{ opacity: 1, x: 0 }} // Desplaza a la posición original
          viewport={{ once: true, amount: 0.5 }} // Ejecuta la animación cuando está al 50% visible
          transition={{ duration: 1.0, ease: "easeOut" }} // Transición más larga
        /> 

        {/* Imagen 2 con efecto de izquierda a derecha */}
        <MotionImg 
          h="60vh" 
          src={torneo2}
          initial={{ opacity: 0, x: -100 }} // Desplazamiento inicial desde la izquierda
          whileInView={{ opacity: 1, x: 0 }} // Desplaza a la posición original
          viewport={{ once: true, amount: 0.5 }} // Ejecuta la animación cuando está al 50% visible
          transition={{ duration: 1.0, ease: "easeOut" }} // Transición más larga
        />
      </Box>
    </Box>
  );
}

export { Hoja3 };
