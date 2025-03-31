import { Box, Button, Img, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import facu from '/Facu-Huebra.jpeg';
import lihue from '/Lihuel-Figueroa.jpeg';
import ati from '/Atilio-picon.jpg';
import manu from '/manuadaro.jpg';

// Crear un componente Motion para la animación
const MotionBox = motion(Box);

const HoverImage = ({ src, nombre, horario, seghorario, href }) => {
  return (
    <MotionBox 
      position="relative" 
      w="400px" 
      h="70vh" 
      overflow="hidden" 
      role="group"
      initial={{ opacity: 0, x: -100 }} // Estado inicial de la animación (desde la izquierda)
      whileInView={{ opacity: 1, x: 0 }} // Estado final al estar en vista (a la posición original)
      viewport={{ once: true, amount: 0.5 }} // Ejecuta la animación al estar 50% visible
      transition={{ duration: 1.0, ease: "easeOut" }} // Transición más larga
    >
      {/* Imagen principal */}
      <Img 
        h="100%" 
        w="100%" 
        objectFit="cover" 
        src={src} 
        transition="0.3s ease"
        _groupHover={{ filter: "brightness(40%)" }}
      />

      {/* Overlay de contenido (texto y botón) */}
      <Box 
        position="absolute" 
        bottom="0" 
        left="0" 
        w="100%" 
        p="0.5em" 
        color="white" 
        display="flex" 
        flexDirection="column" 
        alignItems="left" 
        justifyContent="left" 
        opacity="0" 
        transition="0.3s ease"
        _groupHover={{ opacity: "1" }}
        textAlign="left"
      >
        {/* Nombre del profesor */}
        <Text fontSize="2.3rem" fontWeight="bold">
          {nombre}
        </Text>

        {/* Horario del profesor */}
        <Box as="span" display="flex" flexDir="column">
          <Text fontSize={["1.6rem","1.9rem","1.9rem","1.9rem"]} fontWeight="bold">
            {horario}
          </Text>
          <Text fontSize={["1.6rem","1.8rem","1.8rem","1.8rem"]} fontWeight="bold" whiteSpace="pre-line">
            {seghorario}
          </Text>
        </Box>

        {/* Botón de contacto */}
        <Button 
          as="a"
          href={href} // Enlace para cada botón
          target="_blank"
          rel="noopener noreferrer"
          bg="black" 
          color="white" 
          _hover={{ bg: "#ea638c" }}
          w="50%"
          h="3em"
          fontSize="1.3rem"
          mt="0.5em"
          marginBottom={["0.3em","0","0","0"]}
        >
          Contactar
        </Button>
      </Box>
    </MotionBox>
  );
}

const Hoja4 = () => {
  return (
    <Box as="section" bg="#1b2021" padding="2em" paddingBottom="5.5em" id='Clases'>
      <Text 
       fontSize={["4rem","7xl","7xl","7xl"]}  
       color="#ea638c" 
        fontWeight="medium" 
        textAlign="center" 
        paddingTop="1em"
      >
        NUESTROS PROFESORES
      </Text>

      <Box 
        display="flex" 
        gap="2em" 
        justifyContent="center" 
        alignItems="center" 
        paddingTop="1em" 
        cursor="pointer" 
        flexWrap="wrap"
      >
        {/* Imágenes con efecto de carga y scroll */}

        {/* <HoverImage 
          src={facu} 
          nombre="FACUNDO HUEBRA" 
          horario="LUNES: 8AM A 14HS"
          seghorario="MARTES A VIERNES 11AM A 17HS"
          href="https://wa.me/5492984375775" 
        /> */}

                <HoverImage 
          src={manu} 
          nombre="MANUEL ADARO" 
          horario="LUNES MARTES Y JUEVES"
          seghorario="DE 16AM A 18:30HS"
          href="https://wa.me/5492954670340" 
        />
        <HoverImage 
          src={ati} 
          nombre="ATILIO PICON" 
          horario="LUNES A JUEVES: 10AM A 17HS"
          seghorario="VIERNES: 8AM A 14HS"
          href="https://wa.me/5492923463593" 
        />
        <HoverImage 
          src={lihue} 
          nombre="LIHUEL FIGUEROA" 
          horario="LUNES Y VIERNES: 8AM A 14HS"
          seghorario="MARTES A JUEVES 8AM A 17HS"
          href="https://wa.me/5492392606714" 
        />
      </Box>
    </Box>
  );
}

export { Hoja4 };
