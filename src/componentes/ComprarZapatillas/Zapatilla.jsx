import { Box, Img, Text, Button } from '@chakra-ui/react';
import React from 'react';

const Zapatilla = ({ src, text, subText }) => {
  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center">
      <Box bg="#30343f" p="1.5em 3em">
        <Img w="17em" h="17em" src={src} />
        <Box textAlign="center">
          <Text mt="0.5em" fontSize="1.8rem" color="#D6D6D6" whiteSpace="pre-line">{text}</Text>
          <Text mt="em" fontSize="1.7rem"  color="#D6D6D6" whiteSpace="pre-line">{subText}</Text>
          <Button
            mt="1em"
            bg="#ea6b8d"
            color="white"
            _hover={{ bg: "#d65b7b" }}
            _active={{ bg: "#c44c6d" }}
            px="2em"
            py="0.5em"
            p="1.5em 1.7em"
            fontSize="1.2rem"
            borderRadius="4px"
          >
            COMPRAR AHORA
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { Zapatilla };
