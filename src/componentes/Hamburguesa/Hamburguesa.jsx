import { Box, Flex, Img, Link, Stack, useDisclosure, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '/logo-completo.png';
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
        top={["5","5","9","5"]} 
        right={["5","5","8","5"]}  
        onClick={handleMenuToggle}
        cursor="pointer"
        zIndex={1500}
        transition="transform 0.3s"
        transform={isHamburger ? 'rotate(0deg)' : 'rotate(90deg)'} // Rotación del ícono
      >
        <Img 
          src={isHamburger ? hambur : cruz} 
          w="35px" 
          h="35px" 
          transition="all 0.3s ease" 
          opacity={isHamburger ? 1 : 0.7} // Opacidad para cambio visual
        />
      </Box>

      {/* Menú lateral */}
      <Box
        bg="#1b2021"
        w="50%"
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
        <Flex align="center" justify="space-between" mb="-2em" h="13em">
          <Img src={logo} w={["6em","6em","8em","6em"]} h={["5em","5em","7em","5em"]} />
          <Box onClick={handleMenuToggle} cursor="pointer"></Box>
        </Flex>

        {/* Enlaces del menú */}
        <Stack spacing={4} mt="2em">
          <Link color="white" fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]} _hover={{ color: "#ea638c" }}>Inicio</Link>
          <Link color="white" fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]} _hover={{ color: "#ea638c" }}>Torneos</Link>
          <Link color="white" fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]} _hover={{ color: "#ea638c" }}>Horarios</Link>
          <Link color="white" fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]} _hover={{ color: "#ea638c" }}>Clases</Link>
          
          {/* Menú de Store con opciones */}
          <Menu>
            <MenuButton as={Link} color="white" fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]} _hover={{ color: "#ea638c" }}>
              Store
            </MenuButton>
            <MenuList 
              bg="#1b2021" 
              borderColor="#1b2021" 
              minW="5em" // Ancho mínimo reducido
              p="0.2em"  
              mt="0.5em"
            >
              <MenuItem 
                bg="#1b2021"  
                fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]}
                p="0.4em" 
                _hover={{ color: "#ea638c" }} 
                transition="color 0.3s ease" 
                color="white"
              >
                Palas
              </MenuItem>
              <MenuItem 
                bg="#1b2021"  
                fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]}
                p="0.4em" 
                _hover={{ color: "#ea638c" }} 
                transition="color 0.3s ease" 
                color="white"
              >
                Zapatillas
              </MenuItem>
              <MenuItem 
                bg="#1b2021" 
                fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]}
                p="0.4em" 
                _hover={{ color: "#ea638c" }} 
                transition="color 0.3s ease" 
                color="white"
              >
                Indumentaria
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Box>
    </>
  );
}

export { Hamburguesa };
