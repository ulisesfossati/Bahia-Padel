import { Box, Flex, Img, Link, Stack, useDisclosure, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import logo from '/logo-completo.png';
import hambur from '/icons8-hamburguesa.svg';
import cruz from '/icons8-cruz.svg';

const Hamburguesa = () => {
  const { isOpen, onToggle } = useDisclosure(); 
  const [isHamburger, setIsHamburger] = useState(true); 

  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Maneja la animación y el cambio de íconos
  const handleMenuToggle = () => {
    onToggle();
    setIsHamburger(!isHamburger);
  };

  // Cierra el menú y cambia el ícono al hacer clic en un enlace
  const handleLinkClick = () => {
    onToggle(); // Cierra el menú
    setIsHamburger(true); // Cambia el ícono a hamburguesa
  };

  return (
    <>
      {/* Botón de menú hamburguesa/cruz */}
      <Box 
        position="fixed" 
        top={["5","12","9","5"]} 
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
          <Link 
            href="#Inicio" 
            color="white" 
            fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]} 
            _hover={{ color: "#ea638c" }} 
            onClick={handleLinkClick} // Cierra el menú al hacer clic
          >
            Inicio
          </Link>
          <Link 
            href="#Torneos" 
            color="white" 
            fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]} 
            _hover={{ color: "#ea638c" }} 
            onClick={handleLinkClick} // Cierra el menú al hacer clic
          >
            Torneos
          </Link>
          <Link 
            href="#Horarios" 
            color="white" 
            fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]} 
            _hover={{ color: "#ea638c" }} 
            onClick={handleLinkClick} // Cierra el menú al hacer clic
          >
            Horarios
          </Link>
          <Link 
            href="#Clases" 
            color="white" 
            fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]} 
            _hover={{ color: "#ea638c" }} 
            onClick={handleLinkClick} // Cierra el menú al hacer clic
          >
            Clases
          </Link>

          {/* Menú de Store con opciones */}
          <Menu>
            <MenuButton as={Link} color="white" fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]} _hover={{ color: "#ea638c" }}>
              Store
            </MenuButton>
            <MenuList 
              bg="#1b2021" 
              borderColor="#1b2021" 
              minW="5em" 
              p="0.2em"  
              mt="0.5em"
            >
<MenuItem 
  as="a" 
  bg="#1b2021"
  fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]}
  p="0.4em" 
  _hover={{ color: "#ea638c" }} 
  transition="color 0.3s ease" 
  color="white"
  onClick={() => {
    const section = document.querySelector("#Palas");
    const offset = -110; 
    const position = section.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: position, behavior: "smooth" });
    handleLinkClick();
  }}
>
  Palas
</MenuItem>
<MenuItem 
  as="a" 
  bg="#1b2021"  
  href="#Zapatillas" 
  fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]}
  p="0.4em" 
  _hover={{ color: "#ea638c" }} 
  transition="color 0.3s ease" 
  color="white"
  onClick={handleLinkClick} 
>
  Zapatillas
</MenuItem>
<MenuItem 
  as="a" 
  bg="#1b2021"
  href="#Accesorios" 
  fontSize={["1.3rem","1.3rem","1.9rem","1.3rem"]}
  p="0.4em" 
  _hover={{ color: "#ea638c" }} 
  transition="color 0.3s ease" 
  color="white"
  onClick={handleLinkClick} 
>
  Accesorios
</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Box>
    </>
  );
}

export { Hamburguesa };
