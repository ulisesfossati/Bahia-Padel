import { Box, Img, Link, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '/logo-sinFondo.png';

const Footer = () => {
  return (
    <Box 
      as="footer" 
      bg="#30343f" 
      display="flex" 
      flexWrap="wrap" 
      gap="4em" 
      padding="2em" 
      alignItems="center"
      justifyContent="center" 
      w="100%"
    >
      {/* Sección del logo y nombre del club */}
      <Box 
        w={{ base: "100%", md: "30%" }} 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        gap="1em"
      >
        <Img w="8vh" h="7vh" src={logo} />
        <Text color="white" fontSize="1.2rem" fontFamily="barlow">BAHIA PADEL</Text>
      </Box>

      {/* Segunda parte: Información del club y contacto */}
      <Box 
        w={{ base: "100%", md: "auto" }} 
        display="flex" 
        flexDirection="column" 
        alignItems={{ base: "center", md: "start" }} 
        justifyContent="center"
        textAlign={{ base: "center", md: "left" }}
        gap="1em"
      >
        <Text color="white" fontSize="3xl">BAHIA PADEL</Text>
        <Text 
          color="white" 
          whiteSpace="pre-line" 
          fontSize="1rem" 
          fontFamily="barlow"
        >
          Complejo Deportivo de Pádel Indoor, con tres Canchas de Blindex, {'\n'}
          Buffet, Store, Duchas y vestuarios.
        </Text>
        <Link 
          padding="0.8em 1.5em" 
          bg="#ea638c" 
          color="white" 
          borderRadius="md" 
          _hover={{ bg: "#d5577e" }}
          href='https://www.instagram.com/bahiapadel3/?hl=es-la'
        >
          CONTACTANOS
        </Link>
      </Box>
    </Box>
  );
}

export { Footer };
