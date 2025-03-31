import {
  Box,
  Text,
  HStack,
  VStack,
  Circle,
  SimpleGrid,
  IconButton,
  Button,
  ButtonGroup
} from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRef, useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import "swiper/css"

const rosaFuerte = "#ea638c"
const rosaClaro = "#ffd9da"

const dataHombres = {
  "4TA CATEGORIA": [
    { nombre: "LIHUEL FIGUEROA", puntos: 875 },
    { nombre: "ITALO TANONI", puntos: 775 },
    { nombre: "MATIAS BEILMAN", puntos: 735 },
    { nombre: "JULIAN VILLORIA", puntos: 635 },
    { nombre: "CLEMENTE PADIN", puntos: 465 }
  ],
  "5TA CATEGORIA": [
    { nombre: "MATEO ARGAÑARAZ", puntos: 390 },
    { nombre: "FABRICIO DAVICCINO", puntos: 355 },
    { nombre: "SANTIAGO REALE", puntos: 320 },
    { nombre: "PATRICIO MARTIN", puntos: 295 },
    { nombre: "AXEL FUENTES", puntos: 275 }
  ],
  "6TA CATEGORIA": [
    { nombre: "SERGIO ANDRES", puntos: 270 },
    { nombre: "IVAN VERNA", puntos: 240 },
    { nombre: "ATILIO PICON", puntos: 240 },
    { nombre: "ALAN FRATERNALI", puntos: 235 },
    { nombre: "FREDY PARRA", puntos: 230 }
  ],
  "7MA CATEGORIA": [
    { nombre: "SEBASTIAN SUAREZ", puntos: 225 },
    { nombre: "LUCAS GARCIA", puntos: 215 },
    { nombre: "DIEGO MENDEZ", puntos: 210 },
    { nombre: "FRANCO LOPEZ", puntos: 205 },
    { nombre: "MARCOS VERA", puntos: 200 }
  ],
  "8VA CATEGORIA": [
    { nombre: "NAHUEL TORRES", puntos: 195 },
    { nombre: "AGUSTIN ROJAS", puntos: 190 },
    { nombre: "RAMIRO DIAZ", puntos: 185 },
    { nombre: "TOMAS FERNANDEZ", puntos: 180 },
    { nombre: "NICOLAS SOSA", puntos: 175 }
  ]
}

const dataMujeres = {
  "4TA CATEGORIA": [
    { nombre: "PAULA GOMEZ", puntos: 850 },
    { nombre: "CARLA MENDEZ", puntos: 780 },
    { nombre: "LARA SOSA", puntos: 710 },
    { nombre: "VALENTINA RAMOS", puntos: 660 },
    { nombre: "CAMILA RIVERO", puntos: 620 }
  ],
  "5TA CATEGORIA": [
    { nombre: "SOFIA BIANCHI", puntos: 600 },
    { nombre: "MAIA PEREZ", puntos: 570 },
    { nombre: "MELINA DIAZ", puntos: 540 },
    { nombre: "ROCIO ALVAREZ", puntos: 510 },
    { nombre: "DAIANA MARTINEZ", puntos: 480 }
  ],
  "6TA CATEGORIA": [
    { nombre: "EVELYN LOPEZ", puntos: 450 },
    { nombre: "YESICA MOLINA", puntos: 430 },
    { nombre: "IVANA LUNA", puntos: 410 },
    { nombre: "BRISA TORRES", puntos: 390 },
    { nombre: "NOELIA CRUZ", puntos: 370 }
  ],
  "7MA CATEGORIA": [
    { nombre: "JULIETA FERNANDEZ", puntos: 350 },
    { nombre: "VANESA GALEANO", puntos: 330 },
    { nombre: "NATALIA SALAS", puntos: 310 },
    { nombre: "DEBORA SUAREZ", puntos: 290 },
    { nombre: "LUCIA PEREYRA", puntos: 270 }
  ],
  "8VA CATEGORIA": [
    { nombre: "GISELA BRAVO", puntos: 250 },
    { nombre: "MARINA LOPEZ", puntos: 230 },
    { nombre: "ANDREA PAREDES", puntos: 210 },
    { nombre: "CELINA GARCIA", puntos: 190 },
    { nombre: "DAIRA BUSTOS", puntos: 170 }
  ]
}

export default function RankingCarousel() {
  const swiperRef = useRef(null)
  const [isTouchDevice, setIsTouchDevice] = useState(true)
  const [genero, setGenero] = useState("libre")

  useEffect(() => {
    const checkWidth = () => {
      setIsTouchDevice(window.innerWidth < 1024)
    }
    checkWidth()
    window.addEventListener("resize", checkWidth)
    return () => window.removeEventListener("resize", checkWidth)
  }, [])

  const data = genero === "libre" ? dataHombres : dataMujeres

  return (
    <Box py={12} px={4} position="relative" border="4px solid #30343f" borderRadius="md">
      <ButtonGroup justifyContent="center" mb={6} display="flex">
        <Button
          colorScheme={genero === "libre" ? undefined : "gray"}
          variant={genero === "libre" ? "solid" : "outline"}
          bg={genero === "libre" ? "#ea638c" : "transparent"}
          color={genero === "libre" ? "white" : "gray"}
          borderColor={genero === "libre" ? "#ea638c" : undefined}
          _hover={
            genero === "libre"
              ? { bg: "#ea638c", opacity: 0.85 }
              : { bg: "gray.100" }
          }
          onClick={() => setGenero("libre")}
        >
          LIBRE
        </Button>

        <Button
          colorScheme={genero === "damas" ? undefined : "gray"}
          variant={genero === "damas" ? "solid" : "outline"}
          bg={genero === "damas" ? "#ea638c" : "transparent"}
          color={genero === "damas" ? "white" : "gray"}
          borderColor={genero === "damas" ? "#ea638c" : undefined}
          _hover={
            genero === "damas"
              ? { bg: "#ea638c", opacity: 0.85 }
              : { bg: "gray.100" }
          }
          onClick={() => setGenero("damas")}
        >
          DAMAS
        </Button>
      </ButtonGroup>

      {!isTouchDevice && (
        <>
          <IconButton
            aria-label="Anterior"
            icon={<FaChevronLeft />}
            size="lg"
            position="absolute"
            top="50%"
            left="calc(50% - 470px)"
            transform="translateY(-50%)"
            bg="transparent"
            color={rosaFuerte}
            border="2px solid"
            borderColor={rosaFuerte}
            _hover={{ bg: rosaFuerte, color: "white" }}
            zIndex={2}
            onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
          />
          <IconButton
            aria-label="Siguiente"
            icon={<FaChevronRight />}
            size="lg"
            position="absolute"
            top="50%"
            right="calc(50% - 470px)"
            transform="translateY(-50%)"
            bg="transparent"
            color={rosaFuerte}
            border="2px solid"
            borderColor={rosaFuerte}
            _hover={{ bg: rosaFuerte, color: "white" }}
            zIndex={2}
            onClick={() => swiperRef.current && swiperRef.current.slideNext()}
          />
        </>
      )}

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
        allowTouchMove={isTouchDevice}
      >
        {Object.entries(data).map(([categoria, jugadores]) => (
          <SwiperSlide key={categoria}>
            <VStack spacing={6} maxW="700px" mx="auto">
              <Box textAlign="center">
                <Text fontSize="4xl" fontWeight="bold" color={rosaFuerte}>
                  {categoria}
                </Text>
                <Text fontSize="4xl" fontWeight="semibold" color={rosaFuerte} mt="-10px">
                  {genero.toUpperCase()}
                </Text>
              </Box>
              <SimpleGrid columns={[1, 2]} spacing={3} w="100%">
                {jugadores.map((jugador, index) => (
                  <HStack
                    key={jugador.nombre}
                    justify="space-between"
                    bg="#1b2021"
                    px={4}
                    py={3}
                    borderRadius="md"
                    boxShadow="md"
                  >
                    <HStack spacing={3}>
                      <Circle bg={rosaFuerte} color="white" size="35px" fontSize="sm">
                        {index + 1}
                      </Circle>
                      <Text fontSize="lg" fontWeight="bold" color={rosaClaro}>
                        {jugador.nombre}
                      </Text>
                    </HStack>
                    <Text fontSize="sm" fontWeight="bold" color="white">
                      {jugador.puntos}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
