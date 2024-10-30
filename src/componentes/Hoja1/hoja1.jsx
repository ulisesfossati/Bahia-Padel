import React, { useState } from 'react';
import { Box, Button, Img, Text, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Imágenes importadas
import foto1 from '/Foto1.jpeg';
import foto2 from '/fotocarro.jpeg';
import foto3 from '/fotocarro2.jpeg';

// Lista de imágenes para el carrusel con texto personalizado y responsive
const images = [
  { 
    src: foto1, 
    alt: 'Imagen 1', 
    text: {
      base: 'Complejo Deportivo\nDe Padel', 
      sm: 'Complejo Deportivo\nDe Padel', 
      md: 'Complejo Deportivo\nDe Padel', 
      lg: 'Complejo Deportivo\nDe Padel'
    }, 
    subText: {
      base: 'Tres canchas de blindex con vestuario y duchas', 
      sm: 'Tres canchas de blindex con vestuario y duchas',
      md: 'Tres canchas de blindex con vestuario y duchas',
      lg: 'Tres canchas de blindex con vestuario y duchas'
    }
  },
  { 
    src: foto2, 
    alt: 'Imagen 2', 
    text: {
      base: 'Torneos\nTodos los Meses', 
      sm: 'Torneos\nTodos los Meses', 
      md: 'Torneos\nTodos los Meses', 
      lg: 'Torneos\nTodos los Meses'
    }, 
    subText: {
      base: 'Torneos para todas las categorías con premios en efectivo', 
      sm: 'Torneos para todas las categorías con premios en efectivo',
      md: 'Torneos para todas las categorías con premios en efectivo',
      lg: 'Torneos para todas las categorías con premios en efectivo'
    }
  },
  { 
    src: foto3, 
    alt: 'Imagen 3', 
    text: {
      base: 'Store y Buffet\n Completos', 
      sm: 'Store y Buffet\n Completos', 
      md: 'Store y Buffet\n Completos', 
      lg: 'Store y Buffet\n Completos'
    }, 
    subText: {
      base: 'Equípate con todo lo necesario en la tienda y disfruta del buffet', 
      sm: 'Equípate con todo lo necesario en la tienda y disfruta del buffet',
      md: 'Equípate con todo lo necesario en la tienda y disfruta del buffet',
      lg: 'Equípate con todo lo necesario en la tienda y disfruta del buffet'
    }
  }
];

// Flechas personalizadas
function NextArrow(props) {
  const { onClick } = props;
  return (
    <Button 
      position="absolute" 
      display={['none', 'none', 'none', 'none']}
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
      display={['none', 'none', 'none', 'none']}
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
    pauseOnHover: false,
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
        id='Inicio'
      >
        <Slider {...settings}>
          {images.map((image, index) => {
            // Texto y subtítulo responsivos
            const responsiveText = useBreakpointValue(image.text);
            const responsiveSubText = useBreakpointValue(image.subText);

            return (
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
                  top={["50%","45%","45%","45%"]} 
                  left={["55%","45%","38%","25%"]} 
                  transform="translate(-50%, -50%)" 
                  color="white"
                  p="0em" 
                  borderRadius="md"
                  textAlign="start"
                  zIndex="2"
                >
                  <Text 
                    fontSize={["3rem","3.5rem","4rem","3.5rem"]} 
                    fontWeight="bold" 
                    mb="0" 
                    whiteSpace="pre-line" 
                    textAlign="start"
                    lineHeight="1.2"
                    w="8em"
                  >
                    {responsiveText}
                  </Text>
                  <Text 
                    fontSize="2xl" 
                    fontWeight="normal" 
                    whiteSpace="pre-line"
                    mt="0.2em" 
                    lineHeight="1.1" 
                    fontFamily="barlow"
                    w={["15em","15em","20em","15em"]}
                  >
                    {responsiveSubText}
                  </Text>

                  {/* Botón centrado debajo del segundo texto */}
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
                    borderRadius="4PX"
                  >
                    CONSULTANOS
                  </Button>
                </Box>
              </Box>
            );
          })}
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
