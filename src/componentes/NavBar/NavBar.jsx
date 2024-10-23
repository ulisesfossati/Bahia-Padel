import { Box, Flex, Img, Link, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '/logo-sinFondo.png';

const NavBar = () => {
  return (
    <>
      <Box as="section" bg="#1b2021" padding="1em 0" w="100%" display="flex" alignItems="center">
        <Text as="span"  display="flex" w="20%" alignItems="end" justifyContent="end">
          <Img src={logo}  />
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
          <Link 
            _hover={{ color: "#ea638c" }} 
            color="white" 
            transition="color 0.3s ease"
          >
            Store
          </Link>
        </Flex>
      </Box>
    </>
  );
}

export { NavBar };