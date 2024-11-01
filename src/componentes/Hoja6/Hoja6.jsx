import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import { Zapatilla } from '../ComprarZapatillas/Zapatilla';

import zapa1 from '/zapa1.webp'
import zapa2 from '/zapa2.webp'
import zapa3 from '/zapa3.jpg'
import zapa4 from '/zapa4.jpg'
import zapa5 from '/zapa5.webp'






const MotionBox = motion(Box);

const Hoja6 = () => {
    return(
        <>
        <Box as="section" bg="#1b2021" p="3em 0">
        <Text 
          fontSize="7xl"  
          color="#ea638c" 
          fontWeight="medium" 
          textAlign="center" 
          id='Zapatillas'
        >
          NUESTRAS ZAPATILLAS
        </Text>
        <Text as="span" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" gap={["3em","3em","2em","4em"]}>
        <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Zapatilla src={zapa1} text={"JOMA OPEN"} subText="$170.000" />
          </MotionBox>
        <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Zapatilla src={zapa2} text={"JOMA SLAM"} subText="$160.000" />
          </MotionBox>
        <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Zapatilla src={zapa3} text={"JOMA SLAM"} subText="$160.000" />
          </MotionBox>
        <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Zapatilla src={zapa4} text={"JOMA POINT"} subText="$160.000" />
          </MotionBox>
        <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Zapatilla src={zapa5} text={"JOMA SMASH MASTER FINAL"} subText="$170.000" />
          </MotionBox>









        </Text>











        </Box>
        </>
    )
}

export { Hoja6 }