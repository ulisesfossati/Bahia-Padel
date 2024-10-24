import { Box, Icon, Img, Link, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '/logo-sinFondo.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SegFooter = () => {
  return (
    <Box as="footer" bg="#1b2021" p="2em 0" display="flex" flexWrap="wrap">
      
      {/* BOX DE LOGO Y NAV */}
      <Box 
        display="flex" 
        alignItems="center" 
        borderRight="3px solid white" 
        w="20%" 
        justifyContent="end" 
        gap="2em" 
        p="2em 2em"
      >
        <Img src={logo} />
        <Text as="span" display="flex" flexDir="column" gap="0.7em" fontSize="1rem" fontFamily="barlow"> 
          {['INICIO', 'TORNEOS', 'CLASES', 'BUFFET', 'STORE'].map((item) => (
            <Link 
              key={item}
              textDecor="none" 
              color="white" 
              _hover={{ color: "#ea638c" }} 
              transition="color 0.3s ease" 
              fontFamily="barlow"
            >
              {item}
            </Link>
          ))}
        </Text>
      </Box>
      {/* TERMINA BOX DE LOGO Y NAV */}

      {/* Horarios e íconos */}
      <Text as="span">

<Box><Text  fontWeight="bold" fontFamily="barlow" color="white" marginLeft="2em">HORARIOS</Text></Box>
<Box><Text fontFamily="barlow" color="gray" marginLeft="2em">LUNES A DOMINGOS: 08:00 - 23:00</Text></Box>
<Box display="flex" gap="0.5em" marginLeft="1.7em" marginTop="2em">

 {/* Ícono de Instagram */}
 <Link href="https://www.instagram.com/bahiapadel3/?hl=es-la" isExternal cursor="pointer">
   <Icon as={FaInstagram} boxSize="1.9em" color="white" transition="300ms" cursor="pointer" _hover={{ color: '#ea638c' , transition:'300ms' }} />
 </Link>

 {/* Ícono de WhatsApp */}
 <Link href="https://wa.me/5492914709293" isExternal>
   <Icon as={FaWhatsapp} boxSize="1.9em" color="white" transition="300ms" _hover={{ color: '#ea638c' , transition:'300ms' }} />
 </Link>
</Box>

</Text>

      {/* Mapa */}
      <Box 
        flex="1"  
        display="flex" 
        justifyContent="start" 
        alignItems="center"
        ml="2em"
        mt={['2em', '0']}
      >
        <Box 
          as="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12456.657480695065!2d-62.33212496309706!3d-38.69106845619177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbbd59327a8a9%3A0x41377fc20616f9df!2sBahia%20Padel!5e0!3m2!1ses!2sar!4v1729748546366!5m2!1ses!2sar"
          width="60vh"
          height="250"
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy"
        />
      </Box>
      
      {/* Contacto */}
      <Box display="flex" flexDirection="column" w="28%" ml="2em" mt={['2em', '0']}>
        <Text fontWeight="bold" fontFamily="barlow" color="white" mb="0.5em">
          CONTACTO
        </Text>

        <Box display="flex" flexDir="column" alignItems="start" >
          <Text fontFamily="barlow" color="gray">
            BAHIA BLANCA
          </Text>
          <Text 
            fontFamily="barlow" 
            color="gray" 
          >
           BUENOS AIRES
          </Text>
          <Text 
            fontFamily="barlow" 
            color="gray" 
          >
           ARGENTINA
          </Text>
        </Box>



        <Box display="flex" alignItems="center" gap="0.2em" marginTop="1em">
          <Text fontFamily="barlow" color="gray"
                      fontSize="1.1rem"
>
            E-mail:
          </Text>
          <Link 
            href="mailto:bahiapadel3@gmail.com" 
          
            fontFamily="barlow" 
            color="white" 
            _hover={{ color: "#ea638c" }}
            cursor="pointer"
            fontWeight="bold"
            fontSize="1.1rem"


          >
            bahiapadel3@gmail.com
          </Link>
        </Box>

        <Box display="flex" alignItems="center" gap="0.2em" marginTop="1em" >
          <Text fontFamily="barlow" color="gray" fontSize="1.1rem">
            Desarrollado por 
          </Text>
          <Link 
            fontFamily="barlow" 
            color="white" 
            cursor="pointer"
            href="https://www.instagram.com/ulisesfossati/?hl=es-la"
            _hover={{ color: "#ea638c" }}
            fontWeight="bold"
            fontSize="1.1rem"

          >
           Fossati Ulises
          </Link>

        </Box>
      </Box>


    </Box>
  );
}

export { SegFooter };
