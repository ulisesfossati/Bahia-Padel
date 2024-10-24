import { Box, Text, Img, Link } from '@chakra-ui/react';
import React from 'react';
import pin from '/pin.png';

const MiniFooter = () => {
  return (
    <Box as="footer" bg="#1b2021" padding="0.5em 0" display="flex" justifyContent="space-evenly" gap="0.5em">
      
      {/* E-mail */}
      <Box display="flex" gap="0.5em" alignItems="center">
        <Text color="gray" fontFamily="barlow">E-mail:</Text>
        <Link 
          href="mailto:bahiapadel3@gmail.com" 
          color="white" 
          fontFamily="barlow" 
          _hover={{ color: "#ea638c" }}
        >
          bahiapadel3@gmail.com
        </Link>
      </Box>

      {/* WhatsApp */}
      <Box display="flex" gap="0.5em" alignItems="center">
        <Text color="gray" fontFamily="barlow">WhatsApp:</Text>
        <Link 
          href="https://wa.me/5492914709293" 
          isExternal 
          color="white" 
          fontFamily="barlow" 
          _hover={{ color: "#ea638c" }}
        >
          +54 9 2914 70-9293
        </Link>
      </Box>

      {/* Ubicación */}
      <Box display="flex"  alignItems="center">
        <Img src={pin} boxSize="16px" alt="Pin de ubicación" />
        <Text marginRight="0.5em" color="gray" fontFamily="barlow">Ubicación:</Text >
        <Link 
          href="https://maps.app.goo.gl/EQ3o8Jmp6MyadzjX9" // Cambia la URL a la ubicación deseada
          isExternal 
          color="white" 
          fontFamily="barlow" 
          _hover={{ color: "#ea638c" }}
        >
          Bahia Padel
        </Link>
      </Box>

    </Box>
  );
}

export { MiniFooter };
