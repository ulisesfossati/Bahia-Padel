import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Paleta } from '../CompraPaleta/Paleta';
import pala1 from '/paleta.jpg'
import pala2 from '/pala2.jpg'
import pala3 from '/pala3.webp'
import pala4 from '/pala4.webp'

const Hoja5 = () => {
    return(
        <>
        <Box as="section" bg="#30343f" p="3em 0">
        <Text 
        fontSize="7xl"  
        color="#ea638c" 
        fontWeight="medium" 
        textAlign="center" 
        id='Palas'
     
      >
        NUESTRAS PALAS
      </Text>
        <Text as="span" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" gap="4em">
        <Paleta src={pala1} text={"SISTY COSMO 12K\nFULL CARBONO"} subText="$250.000" />
        <Paleta src={pala2} text={"SISTY DASH 3K\nRUGOSA"} subText="$230.000" />
      <Paleta src={pala3} text={"SISTY STELLAR 12K\nRUGOSA"} subText="$190.000" />
      <Paleta src={pala4} text={"SISTY FLUX 12K\nLISA"} subText="$190.000" />
      {/* TERMINA LAS PRIMERAS 4 ARRIBA */}
      <Paleta src={pala4} text="SISTY FLUX 12K" subText="$190.000" />
      <Paleta src={pala4} text="SISTY FLUX 12K" subText="$190.000" />
      <Paleta src={pala4} text="SISTY FLUX 12K" subText="$190.000" />
      <Paleta src={pala4} text="SISTY FLUX 12K" subText="$190.000" />
      </Text>
        </Box>
        
        
        
        </>
    )
}

export { Hoja5 }