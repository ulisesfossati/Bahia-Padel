import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import { Paleta } from '../CompraPaleta/Paleta';
import pala1 from '/paleta.jpg';
import pala2 from '/pala2.jpg';
import pala3 from '/pala3.webp';
import pala4 from '/pala4.webp';
import pala5 from '/pala5.jpg';
import pala6 from '/pala6.jpg';
import pala7 from '/pala7.png';
import pala8 from '/pala8.jpg';
import pala9 from '/pala9.webp';
import pala10 from '/pala10.png';
import pala11 from '/pala11.png';
import pala12 from '/pala12.webp';

// Componente de caja animada
const MotionBox = motion(Box);

const Hoja5 = () => {
  return (
    <>
      <Box as="section" bg="#30343f" p="3em 0">
        <Text 
          fontSize="7xl"  
          color="#ea638c" 
          fontWeight="medium" 
          textAlign="center" 
          id='Palas'
        >
          NUESTRAS PALAS
        </Text>

        <Text as="span" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" gap={["3em","3em","2em","4em"]}>
          {/* de aca */}
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Paleta src={pala6} text={"SISTY COSMO 3K\nLISA"} subText="$330.000" />
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: -100 }} // Desplazamiento inicial desde la izquierda
            whileInView={{ opacity: 1, x: 0 }} // Desplaza a la posición original
            viewport={{ once: true, amount: 0.5 }} // Ejecuta la animación cuando está al 50% visible
            transition={{ duration: 0.8, ease: "easeOut" }} // Transición más larga
          >
            <Paleta src={pala1} text={"SISTY COSMO 12K\nRUGOSO 3D"} subText="$360.000" />
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Paleta src={pala7} text={"SISTY COSMO 24K\nLISA"} subText="$380.000" />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Paleta src={pala2} text={"SISTY DASH 3K\nRUGOSA"} subText="$330.000" />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Paleta src={pala12} text={"SISTY DASH 12K\nLISA"} subText="$360.000" />
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Paleta src={pala5} text={"SISTY FLUX 3K\nLISA"} subText="$330.000" />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Paleta src={pala4} text={"SISTY FLUX 12K\nRUGOSA"} subText="$360.000" />
          </MotionBox>
          
          {/* TERMINA LAS PRIMERAS 4 ARRIBA */}
          
          
          
          
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Paleta src={pala8} text={"SISTY RAVIA 12K\nLISA"} subText="$360.000" />
          </MotionBox>
          {/* a aca */}
          {/* TERMINAN LAS OTRAS 4  */}

          <MotionBox
            initial={{ opacity: 0, x: -100 }} // Desplazamiento inicial desde la izquierda
            whileInView={{ opacity: 1, x: 0 }} // Desplaza a la posición original
            viewport={{ once: true, amount: 0.5 }} // Ejecuta la animación cuando está al 50% visible
            transition={{ duration: 0.8, ease: "easeOut" }} // Transición más larga
          >
            <Paleta src={pala9} text={"SISTY RAVIA 24K\nLISA"} subText="$380.000" />
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Paleta src={pala10} text={"SISTY STELLAR 3K\nEVA LISA"} subText="$330.000" />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Paleta src={pala3} text={"SISTY STELLAR 12K\nRUGOSA"} subText="$360.000" />
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Paleta src={pala11} text={"SISTY STELLAR 12K\nFOAM LISA"} subText="$330.000" />
          </MotionBox>
          


        </Text>
      </Box>
    </>
  );
};

export { Hoja5 };
