import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import RankingCarousel from '../RankingComponente/RankingComponente';

const HojaRanking = () => {
  return (
    <Box as="section" bg="#1b2021" minH="100vh" pt="2em" pb="5em" id='Ranking'>
      <Text 
        fontSize={["2xl", "4xl", "5xl", "6xl"]}
        color="#ea638c"
        fontWeight="medium"
        textAlign="center"
        mb={4}
      >
        RANKING OFICIAL
      </Text>

      <Box 
        border="4px solid #30343f" 
        borderRadius="2%" 
        p="1em"
        mx="auto"
        maxW={["90%", "60%", "60%", "60%"]} // opcional, para que no ocupe todo el ancho
        bg="#30343f"
      >
        <RankingCarousel />
      </Box>
    </Box>
  )
}

export { HojaRanking }
