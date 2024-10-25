import { Box, Img, Link, Text } from '@chakra-ui/react';
import React from 'react';
import red from '/fotored.jpg'
import ubicacion from '/ubicacion-rosa.png'
import bahia from '/BahiaPadelPared.jpeg'

const Hoja2 = () => {
    return(
        <Box as='section' bg="#1b2021" display="flex" alignItems="center" w="100%" justifyContent="center" gap="9em" id='Horarios'>
            <Box as='div' display="flex" flexDir="column" alignItems="center" justifyContent="center"  w="50em">

            <Text  fontSize="7xl"  color="#ea638c" fontWeight="medium" > NUESTROS HORARIOS</Text>
            <Text as="span"   >
            <Box as="div" bg="#30343f" display="flex" justifyContent="center" h="25em" padding="3em 2em" w="20em" fontSize="2xl">
                <Box paddingRight="2em" >
                <Text paddingTop="1em" color="white">LUNES</Text>
                <Text paddingTop="1em" color="white">MARTES</Text>
                <Text paddingTop="1em" color="white">MIERCOLES</Text>
                <Text paddingTop="1em" color="white">JUEVES</Text>
                <Text paddingTop="1em" color="white">VIERNES</Text>
                <Text paddingTop="1em" color="white">SABADO</Text>
                <Text paddingTop="1em" color="white">DOMINGO</Text>
                </Box>
                <Text as="span" display="flex" flexDir="column">
                <Box>
                    <Text paddingTop="1em" color="#ea638c">08:00 AM - 23:00PM</Text>
                    <Text paddingTop="1em" color="#ea638c">08:00 AM - 23:00PM</Text>
                    <Text paddingTop="1em" color="#ea638c">08:00 AM - 23:00PM</Text>
                    <Text paddingTop="1em" color="#ea638c">08:00 AM - 23:00PM</Text>
                    <Text paddingTop="1em" color="#ea638c">08:00 AM - 23:00PM</Text>
                    <Text paddingTop="1em" color="#ea638c">08:00 AM - 23:00PM</Text>
                    <Text paddingTop="1em" color="#ea638c">08:00 AM - 23:00PM</Text>
                </Box>
                <Box marginTop="2em" as="span" display="flex"><Img w="1.2em" h="1.2em" src={ubicacion}/> <Link color="white" href='https://maps.app.goo.gl/EQ3o8Jmp6MyadzjX9' >BAHIA PADEL</Link>
                </Box>
                </Text>
            </Box>
            
            </Text>
            </Box>
            
            <Img w="50%" h="50em" src={bahia}/>
          
        </Box>
    )
}

export { Hoja2 }