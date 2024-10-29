import { Box, Flex, Img, Link, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React from 'react';
import logo from '/logo-completo.png';
import { Hamburguesa } from '../Hamburguesa/Hamburguesa';

const NavBar = () => {
  // Función para manejar el desplazamiento preciso con ajuste adicional
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Obtener la posición de la sección
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;

      // Ajuste específico para "Palas"
      const offset = id === 'Palas' ? 150 : 100; // Ajuste diferente para "Palas"
      const targetPosition = sectionPosition - offset;

      // Desplazamiento suave usando window.scrollTo
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box as="section" bg="#1b2021" padding={["0.7em 0", "1.3em 0", "1em 0","1em 0"]} w="100%" display="flex" alignItems="center"  position="fixed" zIndex="10000">
      <Text as="span" display="flex" w={["40%", "20%", "20%","20%"]}alignItems="end" justifyContent="center" > 
        <Link href='https://www.instagram.com/bahiapadel3/?hl=es-la' isExternal  >
          <Img h={["3.3em", "5em", "5em","5em"]} w={["4.2em", "6em", "6em","7em"]} src={logo} alt="Bahia Padel Instagram"   />
        </Link>
      </Text>
      <Text as="span" display={['block', 'block', 'block', 'none']}>
        <Hamburguesa/>

      </Text>


      <Flex as="nav" gap={["0", "0", "2em", "3em", "4em"]} fontSize="1.55rem" width={['100%', '75%', '80%', '55%']}  justifyContent="center" display={['none', 'none', 'none', 'flex']} >
        <Link 
          onClick={() => handleScroll('Inicio')}
          textDecor="none" 
          color="white" 
          _hover={{ color: "#ea638c" }} 
          transition="color 0.3s ease"
        >
          Inicio
        </Link>
        <Link 
          onClick={() => handleScroll('Torneos')}
          _hover={{ color: "#ea638c" }} 
          color="white" 
          transition="color 0.3s ease"
        >
          Torneos
        </Link>
        <Link 
          onClick={() => handleScroll('Horarios')}
          _hover={{ color: "#ea638c" }} 
          color="white" 
          transition="color 0.3s ease"
        >
          Horarios
        </Link>
        <Link 
          onClick={() => handleScroll('Clases')}
          _hover={{ color: "#ea638c" }} 
          color="white" 
          transition="color 0.3s ease"
        >
          Clases
        </Link>
        <Menu>
          <MenuButton
            as={Link}
            color="white"
            transition="color 0.3s ease"
            display="flex"
            gap="0.3em"
            _hover={{ color: "#ea638c" }}
          >
            Store
          </MenuButton>
          <MenuList bg="#1b2021" border="none" mt="0.5em">
            <MenuItem 
              bg="#1b2021" 
              _hover={{ color: "#ea638c" }} 
              transition="color 0.3s ease" 
              color="white"
              onClick={() => handleScroll('Palas')}
            >
              Palas
            </MenuItem>
            <MenuItem 
              bg="#1b2021" 
              _hover={{ color: "#ea638c" }} 
              transition="color 0.3s ease" 
              color="white"
              onClick={() => handleScroll('Zapatillas')}
            >
              Zapatillas
            </MenuItem>
            <MenuItem 
              bg="#1b2021" 
              _hover={{ color: "#ea638c" }} 
              transition="color 0.3s ease" 
              color="white"
              onClick={() => handleScroll('Indumentarias')}
            >
              Indumentarias
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

export { NavBar };
