import { Box, Flex, Img, Link, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '/logo-sinFondo.png';
import flecha from '/flechablancaa.png';
import rosa from '/rosita.png';

const NavBar = () => {


  return (
    <Box as="section" bg="#1b2021" padding="1em 0" w="100%" display="flex" alignItems="center" position="fixed" zIndex="10000">
      <Text as="span" display="flex" w="20%" alignItems="end" justifyContent="end">
      <Link href='https://www.instagram.com/bahiapadel3/?hl=es-la' isExternal>
  <Img src={logo} alt="Bahia Padel Instagram" />
</Link>

      </Text>
      <Flex as="nav" gap="4em" fontSize="1.55rem" w="53%" justifyContent="end">
        <Link 
          textDecor="none" 
          color="white" 
          _hover={{ color: "#ea638c" }} 
          transition="color 0.3s ease"
        >
          Inicio
        </Link>
        <Link 
          _hover={{ color: "#ea638c" }} 
          color="white" 
          transition="color 0.3s ease"
        >
          Torneos
        </Link>
        <Link 
          _hover={{ color: "#ea638c" }} 
          color="white" 
          transition="color 0.3s ease"
        >
          Clases
        </Link>
        <Link 
          _hover={{ color: "#ea638c" }} 
          color="white" 
          transition="color 0.3s ease"
        >
          Buffet
        </Link>
        <Menu >
          <MenuButton
            as={Link}
            color="white"
            transition="color 0.3s ease"
          display="flex"
            
            gap="0.3em"
            _hover={{ color: "#ea638c" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
           Store 

          </MenuButton>
          <MenuList bg="#1b2021" border="none" mt="0.5em">
            <MenuItem 
              bg="#1b2021" 
              _hover={{ color: "#ea638c" }} 
              transition="color 0.3s ease" 
              color="white"
            >
              Palas
            </MenuItem>
            <MenuItem 
              bg="#1b2021" 
              _hover={{ color: "#ea638c" }} 
              transition="color 0.3s ease" 
              color="white"
            >
              Zapatillas
            </MenuItem>
            <MenuItem 
              bg="#1b2021" 
              _hover={{ color: "#ea638c" }} 
              transition="color 0.3s ease" 
              color="white"
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
