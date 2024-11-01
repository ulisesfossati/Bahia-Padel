import { Box, Img, Text, Link } from '@chakra-ui/react';
import React from 'react';

const Accesorio = ({ src, text, subText }) => {
  // Elimina el \n del texto para el enlace de WhatsApp
  const whatsappText = text.replace(/\n/g, " ");
  const whatsappLink = `https://wa.me/5492914709293?text=Hola%20estoy%20interesado%20en%20el%20accesorio%20${encodeURIComponent(whatsappText)}`;

  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center">
      <Box bg="#1b2021" p="1.5em 3em" borderRadius="3px">
        <Img w="17em" h="19em" src={src} />
        <Box textAlign="center" paddingBottom="1em">
          <Text mt="0.5em" fontSize="1.8rem" color="#D6D6D6" whiteSpace="pre-line">{text}</Text>
          <Text fontSize="1.7rem" color="#D6D6D6" whiteSpace="pre-line" mb="1em">{subText}</Text>
          <Link
            as="a"
            href={whatsappLink}
            isExternal
            mt="1em"
            bg="#ea6b8d"
            color="white"
            _hover={{ bg: "#d65b7b" }}
            _active={{ bg: "#c44c6d" }}
            px="2em"
            py="0.5em"
            p="1em 1.7em"
            fontSize="1.2rem"
            borderRadius="4px"
          >
            COMPRAR AHORA
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export { Accesorio };
