import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import CalendarioTorneos from '../Calendario/Calendario';

const Falsahoja3 = () => {
    return(
        <>
        <Box as="section" bg="#30343f" paddingBottom="5.5em" h="100%" id='Torneos'>
                  <Text 
                   fontSize={["4rem","7xl","7xl","7xl"]}  
                    color="#ea638c" 
                    fontWeight="medium" 
                    textAlign="center" 
                    paddingTop="1em"
                  >
                    CALENDARIO 2025
                  </Text>
            <CalendarioTorneos/>
        </Box>
        
        </>
    )
}

export { Falsahoja3 }