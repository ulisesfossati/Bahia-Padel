import { Box, Flex, Icon, Img, Link, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import logo from '/logo-completo.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SegFooter = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const offset = 100;
      const targetPosition = sectionPosition - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box as="footer" bg="#1b2021" p="2em 0" display="flex" flexWrap="wrap" flexDirection={['column', 'column', 'column', 'row']}>
      <Box 
        display="flex" 
        alignItems="center" 
        flexDir={["column", "column", "column", "row"]}
        borderRight={["none", "none", "none", "3px solid white"]}
        w={["100%", "100%", "100%", "20%"]} 
        justifyContent="end" 
        gap="2em" 
        p="2em 2em"
      >
        <Img h="6em" w="9em" src={logo} />

        <SimpleGrid columns={[3, 3, 1, 1]} spacing={3} textAlign="center">
          <Link
            textDecor="none"
            color="#D6D6D6"
            _hover={{ color: "#ea638c" }}
            transition="color 0.3s ease"
            fontFamily="barlow"
            onClick={() => handleScroll('Inicio')}
            cursor="pointer"
            whiteSpace="nowrap"

          >
            INICIO
          </Link>
          <Link
            href="/Bahia-Padel/#/Reservar"
            isExternal
            textDecor="none"
            color="#D6D6D6"
            _hover={{ color: "#ea638c" }}
            transition="color 0.3s ease"
            fontFamily="barlow"
            whiteSpace="nowrap"

          >
            RESERVAR
          </Link>
          <Link
            textDecor="none"
            color="#D6D6D6"
            _hover={{ color: "#ea638c" }}
            transition="color 0.3s ease"
            fontFamily="barlow"
            onClick={() => handleScroll('Torneos')}
            cursor="pointer"
            whiteSpace="nowrap"

          >
            TORNEOS
          </Link>
          <Link
            href="/Bahia-Padel/#/admin"
            isExternal
            textDecor="none"
            color="#D6D6D6"
            _hover={{ color: "#ea638c" }}
            transition="color 0.3s ease"
            fontFamily="barlow"
            whiteSpace="nowrap"

          >
            ADMIN
          </Link>
          <Link
            textDecor="none"
            color="#D6D6D6"
            _hover={{ color: "#ea638c" }}
            transition="color 0.3s ease"
            fontFamily="barlow"
            onClick={() => handleScroll('Clases')}
            cursor="pointer"
            whiteSpace="nowrap"
          >
            CLASES
          </Link>
          <Link
            textDecor="none"
            color="#D6D6D6"
            _hover={{ color: "#ea638c" }}
            transition="color 0.3s ease"
            fontFamily="barlow"
            onClick={() => handleScroll('Palas')}
            cursor="pointer"
          >
            STORE
          </Link>
        </SimpleGrid>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-start" ml="2em">
        <Text fontWeight="bold" fontFamily="barlow" color="#D6D6D6" fontSize={["1rem", "1.2rem", "1.2rem", "1rem"]} mb="0.5em">HORARIOS</Text>
        <Text fontFamily="barlow" color="gray" fontSize={["1rem", "1.2rem", "1.2rem", "1rem"]}>LUNES A DOMINGOS: 08:00 - 23:00</Text>
        <Box display="flex" gap="0.5em" mt="1em">
          <Link href="https://www.instagram.com/bahiapadel3/?hl=es-la" isExternal>
            <Icon as={FaInstagram} boxSize="1.9em" color="white" transition="300ms" _hover={{ color: '#ea638c' }} />
          </Link>
          <Link href="https://wa.me/5492914709293" isExternal>
            <Icon as={FaWhatsapp} boxSize="1.9em" color="white" transition="300ms" _hover={{ color: '#ea638c' }} />
          </Link>
        </Box>
      </Box>

      <Box 
        flex="1" 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        mt={['2em', '0']}
        ml="2em"
        mr="2em"
      >
        <Box 
          as="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12456.657480695065!2d-62.33212496309706!3d-38.69106845619177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbbd59327a8a9%3A0x41377fc20616f9df!2sBahia%20Padel!5e0!3m2!1ses!2sar!4v1729748546366!5m2!1ses!2sar"
          width={["43vh", "55vh", "60vh", "100%"]}
          height={["220", "250"]}
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy"
        />
      </Box>

      <Box display="flex" flexDirection="column" w={["47%", "100%", "100%", "28%"]} mt={['2em', '0']} alignItems={["center", "center", "center", "start"]} justifyContent="center">
        <Box display={["contents", "flex", "flex", "contents"]} justifyContent="center" gap="3em" marginTop="2em">
          <Box display="flex" flexDir="column" textAlign={["center", "right", "right", "left"]} w="60%">
            <Text fontWeight="bold" fontFamily="barlow" color="#D6D6D6" marginLeft={["0", "0", "0.1em", "0"]} mb="0.5em" textAlign="left" fontSize={["1rem", "1rem", "1.2rem", "1rem"]} whiteSpace="nowrap">CONTACTO</Text>
            <Box fontFamily="barlow" color="gray" textAlign="center">
              <Text whiteSpace="nowrap" fontFamily="barlow" textAlign="left">BAHIA BLANCA</Text>
              <Text whiteSpace="nowrap" fontFamily="barlow" textAlign="left">BUENOS AIRES</Text>
              <Text whiteSpace="nowrap" fontFamily="barlow" textAlign="left">ARGENTINA</Text>
            </Box>
          </Box>

          <Box display="flex" flexDir="column" w="60%">
            <Box display="flex" alignItems="center" gap="0.2em" mt="1em">
              <Text fontFamily="barlow" color="gray" fontSize={["1.1rem", "1.1rem", "1.2rem", "1.1rem"]} whiteSpace="nowrap">E-mail:</Text>
              <Link 
                href="mailto:bahiapadel3@gmail.com" 
                fontFamily="barlow" 
                color="#D6D6D6" 
                _hover={{ color: "#ea638c" }}
                cursor="pointer"
                fontWeight="bold"
                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.1rem"]}
                whiteSpace="nowrap"
              >
                bahiapadel3@gmail.com
              </Link>
            </Box>

            <Box display="flex" alignItems="center" gap="0.2em" mt="1em">
              <Text fontFamily="barlow" color="gray" whiteSpace="nowrap" fontSize={["1.1rem", "1.1rem", "1.2rem", "1.1rem"]}>Desarrollado por</Text>
              <Link 
                fontFamily="barlow" 
                color="#D6D6D6" 
                href="https://www.instagram.com/ulisesfossati/?hl=es-la"
                _hover={{ color: "#ea638c" }}
                fontWeight="bold"
                whiteSpace="nowrap"
                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.1rem"]}
              >
                Fossati Ulises
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { SegFooter };