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
    { nombre: "CLEMENTE PADIN", puntos: 465 },
    { nombre: "JUAN PEREZ", puntos: 455 },
    { nombre: "MARTIN LOPEZ", puntos: 440 },
    { nombre: "LUCAS GARCIA", puntos: 420 },
    { nombre: "DIEGO MENDEZ", puntos: 410 },
    { nombre: "AGUSTIN ROJAS", puntos: 400 },
    { nombre: "JULIAN MORALES", puntos: 390 },
    { nombre: "EMILIANO RAMIREZ", puntos: 380 },
    { nombre: "MATEO CASTRO", puntos: 370 },
    { nombre: "FACUNDO SANDOVAL", puntos: 360 },
    { nombre: "BRUNO PEREZ", puntos: 350 },
    { nombre: "ALAN SERRANO", puntos: 340 }
  ],
  "5TA CATEGORIA": [
    { nombre: "MATEO ARGAÑARAZ", puntos: 390 },
    { nombre: "FABRICIO DAVICCINO", puntos: 355 },
    { nombre: "SANTIAGO REALE", puntos: 320 },
    { nombre: "PATRICIO MARTIN", puntos: 295 },
    { nombre: "AXEL FUENTES", puntos: 275 },
    { nombre: "JUAN RIVERA", puntos: 265 },
    { nombre: "MARIO GOMEZ", puntos: 255 },
    { nombre: "FRANCISCO LOPEZ", puntos: 245 },
    { nombre: "ADRIAN DÍAZ", puntos: 235 },
    { nombre: "RICARDO FERNANDEZ", puntos: 225 },
    { nombre: "SANTIAGO VERA", puntos: 215 },
    { nombre: "MATIAS GALLARDO", puntos: 205 },
    { nombre: "ALEXIS MORENO", puntos: 195 },
    { nombre: "HERNAN PONCE", puntos: 185 },
    { nombre: "VICENTE RIVERA", puntos: 175 },
    { nombre: "MAURICIO PEREZ", puntos: 165 }
  ],
  "6TA CATEGORIA": [
    { nombre: "SERGIO ANDRES", puntos: 270 },
    { nombre: "IVAN VERNA", puntos: 240 },
    { nombre: "ATILIO PICON", puntos: 240 },
    { nombre: "ALAN FRATERNALI", puntos: 235 },
    { nombre: "FREDY PARRA", puntos: 230 },
    { nombre: "GUSTAVO AGUIRRE", puntos: 220 },
    { nombre: "JAVIER GOMEZ", puntos: 210 },
    { nombre: "RICARDO MARTIN", puntos: 200 },
    { nombre: "PABLO CASTRO", puntos: 190 },
    { nombre: "MARCOS TORO", puntos: 180 },
    { nombre: "ALFONSO RIVERA", puntos: 170 },
    { nombre: "MARIO MARTINEZ", puntos: 160 },
    { nombre: "VICENTE FERNANDEZ", puntos: 150 },
    { nombre: "CARLOS PONCE", puntos: 140 },
    { nombre: "OSCAR SERRANO", puntos: 130 },
    { nombre: "ROBERTO LOPEZ", puntos: 120 }
  ],
  "7MA CATEGORIA": [
    { nombre: "SEBASTIAN SUAREZ", puntos: 225 },
    { nombre: "LUCAS GARCIA", puntos: 215 },
    { nombre: "DIEGO MENDEZ", puntos: 210 },
    { nombre: "FRANCO LOPEZ", puntos: 205 },
    { nombre: "MARCOS VERA", puntos: 200 },
    { nombre: "JUAN PONCE", puntos: 190 },
    { nombre: "MARIO REYES", puntos: 180 },
    { nombre: "JULIAN RIVERA", puntos: 170 },
    { nombre: "LUIS HERNANDEZ", puntos: 160 },
    { nombre: "PABLO MARTINEZ", puntos: 150 },
    { nombre: "FEDERICO GUTIERREZ", puntos: 140 },
    { nombre: "ANTONIO LOPEZ", puntos: 130 },
    { nombre: "CARLOS SERRANO", puntos: 120 },
    { nombre: "ALBERTO ROMERO", puntos: 110 },
    { nombre: "ROBERTO FERNANDEZ", puntos: 100 },
    { nombre: "MARCELO TORO", puntos: 90 }
  ],
  "8VA CATEGORIA": [
    { nombre: "NAHUEL TORRES", puntos: 195 },
    { nombre: "AGUSTIN ROJAS", puntos: 190 },
    { nombre: "RAMIRO DIAZ", puntos: 185 },
    { nombre: "TOMAS FERNANDEZ", puntos: 180 },
    { nombre: "NICOLAS SOSA", puntos: 175 },
    { nombre: "FERNANDO GOMEZ", puntos: 165 },
    { nombre: "MARTIN PEREZ", puntos: 155 },
    { nombre: "JUAN GUTIERREZ", puntos: 145 },
    { nombre: "MARIO MORALES", puntos: 135 },
    { nombre: "AGUSTIN ROMERO", puntos: 125 },
    { nombre: "JUAN CARLOS", puntos: 115 },
    { nombre: "PABLO HERRERA", puntos: 105 },
    { nombre: "ROBERTO FERRER", puntos: 95 },
    { nombre: "JULIAN AGUILAR", puntos: 85 },
    { nombre: "RUBEN TORO", puntos: 75 },
    { nombre: "MARIO SERRANO", puntos: 65 }
  ]
};

const dataMujeres = {
  "4TA CATEGORIA": [
    { nombre: "PAULA GOMEZ", puntos: 850 },
    { nombre: "CARLA MENDEZ", puntos: 780 },
    { nombre: "LARA SOSA", puntos: 710 },
    { nombre: "VALENTINA RAMOS", puntos: 660 },
    { nombre: "CAMILA RIVERO", puntos: 620 },
    { nombre: "ANA TORO", puntos: 610 },
    { nombre: "MELISA GUTIERREZ", puntos: 600 },
    { nombre: "SUSANA LOPEZ", puntos: 590 },
    { nombre: "JULIETA DIAZ", puntos: 580 },
    { nombre: "VANESA CASTRO", puntos: 570 },
    { nombre: "SOFIA MORALES", puntos: 560 },
    { nombre: "MARCELA PEREZ", puntos: 550 },
    { nombre: "LILIANA REYES", puntos: 540 },
    { nombre: "CECILIA GARCIA", puntos: 530 },
    { nombre: "TERESA FERNANDEZ", puntos: 520 },
    { nombre: "PAOLA MARTINEZ", puntos: 510 }
  ],
  "5TA CATEGORIA": [
    { nombre: "SOFIA BIANCHI", puntos: 600 },
    { nombre: "MAIA PEREZ", puntos: 570 },
    { nombre: "MELINA DIAZ", puntos: 540 },
    { nombre: "ROCIO ALVAREZ", puntos: 510 },
    { nombre: "DAIANA MARTINEZ", puntos: 480 },
    { nombre: "LILIANA GOMEZ", puntos: 470 },
    { nombre: "CARLA SUAREZ", puntos: 460 },
    { nombre: "MELINA REYES", puntos: 450 },
    { nombre: "VANESSA HERRERA", puntos: 440 },
    { nombre: "CINTIA PEREZ", puntos: 430 },
    { nombre: "EVELYN TORO", puntos: 420 },
    { nombre: "PATRICIA MARTIN", puntos: 410 },
    { nombre: "GRACIELA RAMOS", puntos: 400 },
    { nombre: "ANABEL GARCIA", puntos: 390 },
    { nombre: "LUCIANA REYES", puntos: 380 },
    { nombre: "MONICA DIAZ", puntos: 370 }
  ],
  "6TA CATEGORIA": [
    { nombre: "EVELYN LOPEZ", puntos: 450 },
    { nombre: "YESICA MOLINA", puntos: 430 },
    { nombre: "IVANA LUNA", puntos: 410 },
    { nombre: "BRISA TORRES", puntos: 390 },
    { nombre: "NOELIA CRUZ", puntos: 370 },
    { nombre: "MARIANA CASTRO", puntos: 360 },
    { nombre: "PATRICIA MARTINEZ", puntos: 350 },
    { nombre: "RAQUEL GOMEZ", puntos: 340 },
    { nombre: "ALICIA FERNANDEZ", puntos: 330 },
    { nombre: "SANDRA GARCIA", puntos: 320 },
    { nombre: "PILAR REYES", puntos: 310 },
    { nombre: "MONICA LOPEZ", puntos: 300 },
    { nombre: "MARINA TORO", puntos: 290 },
    { nombre: "CAMILA CASTRO", puntos: 280 },
    { nombre: "EVA DIAZ", puntos: 270 },
    { nombre: "TERESA MORALES", puntos: 260 }
  ]
};


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
