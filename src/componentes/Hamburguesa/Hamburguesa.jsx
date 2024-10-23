import { Box, Flex, Img, Link, Stack, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '/logo-sinFondo.png';
import hambur from '/icons8-hamburguesa.svg';
import cruz from '/icons8-cruz.svg';

const Hamburguesa = () => {
  const { isOpen, onToggle } = useDisclosure(); // Controla la apertura/cierre del menú
  const [isHamburger, setIsHamburger] = useState(true); // Controla la apariencia del botón

  // Maneja la animación y el cambio de íconos
  const handleMenuToggle = () => {
    onToggle();
    setIsHamburger(!isHamburger);
  };

  return (
    <>
      {/* Botón de menú hamburguesa/cruz */}
      <Box 
        position="fixed" 
        top="4" 
        right="5" 
        onClick={handleMenuToggle}
        cursor="pointer"
        zIndex={1500}
        transition="transform 0.3s"
        transform={isHamburger ? 'rotate(0deg)' : 'rotate(90deg)'} // Rotación del ícono
      >
        <Img 
          src={isHamburger ? hambur : cruz} 
          w="40px" 
          h="40px" 
          transition="all 0.3s ease" 
          opacity={isHamburger ? 1 : 0.7} // Opacidad para cambio visual
        />
      </Box>

      {/* Menú lateral */}
      <Box
        bg="#1b2021"
        w="50vw"
        h="100vh"
        position="fixed"
        top={0}
        left={isOpen ? 0 : '-50vw'}
        transition="left 0.3s ease"
        zIndex={1400}
        display="flex"
        flexDirection="column"
        p="1em"
      >
        {/* Sección del logo y cierre */}
        <Flex align="center" justify="space-between" mb="1em">
          <Img src={logo} w="7em" h="7em" />
          <Box onClick={handleMenuToggle} cursor="pointer">

          </Box>
        </Flex>

        {/* Enlaces del menú */}
        <Stack spacing={4} mt="2em">
          <Link color="white" fontSize="1.2em" _hover={{ color: "#ea638c" }}>Inicio</Link>
          <Link color="white" fontSize="1.2em" _hover={{ color: "#ea638c" }}>Catálogo Palas</Link>
          <Link color="white" fontSize="1.2em" _hover={{ color: "#ea638c" }}>Catálogo Grips</Link>
          <Link color="white" fontSize="1.2em" _hover={{ color: "#ea638c" }}>Catálogo Pelotas</Link>
          <Link color="white" fontSize="1.2em" _hover={{ color: "#ea638c" }}>Menú Buffet</Link>
        </Stack>
      </Box>
    </>
  );
}

export { Hamburguesa };
