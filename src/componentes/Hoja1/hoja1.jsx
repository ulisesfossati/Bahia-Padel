import React, { useState } from 'react';
import { Box, Button, Img, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Imágenes importadas
import foto1 from '/Foto1.jpeg';
import foto2 from '/Foto2.jpeg';
import foto3 from '/Foto3.jpeg';

// Lista de imágenes para el carrusel con texto personalizado
const images = [
  { 
    src: foto1, 
    alt: 'Imagen 1', 
    text: 'Complejo Deportivo\n De Padel', 
    subText: 'Tres canchas de blindex con vestuario y duchas' 
  },
  { 
    src: foto2, 
    alt: 'Imagen 2', 
    text: 'Torneos \n Todos los Meses', 
    subText: 'Torneo de todas las categorias con premios en efectivo'
  },
  { 
    src: foto3, 
    alt: 'Imagen 3', 
    text: 'Store y Buffet\n Completos', 
    subText: 'Equípate con todo lo que necesitas para jugar'
  }
];

// Flechas personalizadas
function NextArrow(props) {
  const { onClick } = props;
  return (
    <Button 
      position="absolute" 
      right="70px" 
      top="50%" 
      transform="translateY(-50%)"
      border="1px solid white"
      bg="rgba(0, 0, 0, 0)" 
      color="white"
      zIndex="1"
      padding="0.8em 0.8em"
      _hover={{ bg: '#ea638c', border: '0', transition: '500ms' }}
      transition="500ms"
      size="md"
      onClick={onClick}
    >
      <ChevronRightIcon boxSize={10} />
    </Button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Button 
      position="absolute" 
      left="70px" 
      top="50%" 
      transform="translateY(-50%)"
      border="1px solid white"
      bg="rgba(0, 0, 0, 0)" 
      color="white"
      zIndex="1"
      padding="0.8em 0.8em"
      _hover={{ bg: '#ea638c', border: '0', transition: '500ms' }}
      transition="500ms"
      size="md"
      onClick={onClick}
    >
      <ChevronLeftIcon boxSize={10} />
    </Button>
  );
}

const Hoja1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <>
      {/* Carrusel de imágenes */}
      <Box 
        className="hide-overflow-x" 
        width="100%" 
        h="100vh" 
        mx="auto" 
        overflow="hidden" 
        m="0" 
        p="0" 
        border="0" 
        position="relative"
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index} position="relative">
              <Img 
                src={image.src} 
                alt={image.alt} 
                width="100%" 
                h="100vh" 
                objectFit="cover" 
                m="0"
                p="0"
                border="0"
              />
              <Box 
                position="absolute" 
                top="0" 
                left="0" 
                width="100%" 
                height="100vh" 
                bg="rgba(0, 0, 0, 0.4)" 
                zIndex="1"
              />
              
              {/* Texto personalizado centrado */}
              <Box 
                position="absolute" 
                top="45%" 
                left="30%" 
                transform="translate(-50%, -50%)" 
                color="white"
                p="1em" 
                borderRadius="md"
                textAlign="start"
                zIndex="2"
              >
                <Text 
                  fontSize="4.5rem" 
                  fontWeight="bold" 
                  mb="0" 
                  whiteSpace="pre-line" 
                  textAlign="start"
                  lineHeight="1.2"
                >
                  {image.text}
                </Text>
                <Text 
                  fontSize="2xl" 
                  fontWeight="normal" 
                  whiteSpace="pre-line"
                  mt="0.2em" 
                  lineHeight="1.1" 
                  fontFamily="barlow"
                >
                  {image.subText}
                </Text>

                {/* Botón centrado debajo del segundo texto */}
                <Button 
                  mt="1em" 
                  bg="#1b2021"
                  padding="1.7em 2em"
                  fontSize="1.2rem"
                  color="white"
                  _hover={{ bg: "#ea638c" }}
                  alignSelf="start" // Alinea el botón al inicio
                >
                  CONSULTARNOS
                </Button>
              </Box>
            </Box>
          ))}
        </Slider>

        {/* Barra de progreso segmentada */}
        <Box 
          position="absolute" 
          bottom="0" 
          left="0" 
          width="100%" 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          gap="0.5em" 
          py="0.5em" 
          zIndex="2"
          m="0"
        >
          {images.map((_, index) => (
            <Box
              key={index}
              w="60px"
              h="5px"
              bg={index === currentSlide ? '#ea638c' : 'gray.500'}
              borderRadius="md"
              transition="background-color 0.3s"
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export { Hoja1 };
