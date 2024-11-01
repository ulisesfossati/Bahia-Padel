import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { Accesorio } from '../CompraAccesorio/Accesorio';
import paletero from '/paletero.jpg'
import muñequera from '/muñequera.webp'
import medias from '/medias.webp'

const MotionBox = motion(Box);

const Hoja7 = () => {
    return(
        <>
        <Box as="section" bg="#30343f" p="3em 0">
            <Text       
          fontSize="7xl"  
          color="#ea638c" 
          fontWeight="medium" 
          textAlign="center" 
          id='Accesorios'
          >NUESTROS ACCESORIOS</Text>
        <Text as="span" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" gap={["3em","3em","2em","4em"]} >

        <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Accesorio src={paletero} text={"BOLSO PALETERO SISTY\nROJO-AZUL-BLANCO"} subText="$80.000" />
          </MotionBox>
        <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Accesorio src={muñequera} text={"MUÑEQUERAS SISTY X2\nVARIOS COLORES"} subText="$10.000" />
          </MotionBox>
        <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Accesorio src={medias} text={"PACK X3 MEDIAS SISTY\nBLANCAS-NEGRAS"} subText="$15.000" />
          </MotionBox>










        </Text>
        </Box>
        
        </>
    )
}

export { Hoja7 }