import { Box, Text, SimpleGrid, VStack, Heading, useBreakpointValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const calendario = [
  { mes: "MARZO", fechas: ["07-08-09", "14-15-16", "21-22-23", "28-29-30"] },
  { mes: "ABRIL", fechas: ["04-05-06", "11-12-13", "18-19-20", "25-26-27"] },
  { mes: "MAYO", fechas: ["02-03-04", "09-10-11", "16-17-18", "23-24-25"] },
  { mes: "JUNIO", fechas: ["30-31-01", "06-07-08", "13-14-15", "20-21-22"] },
  { mes: "JULIO", fechas: ["04-05-06", "11-12-13", "18-19-20", "25-26-27"] },
  { mes: "AGOSTO", fechas: ["01-02-03", "08-09-10", "15-16-17", "22-23-24"] },
  { mes: "SEPTIEMBRE", fechas: ["05-06-07", "12-13-14", "19-20-21", "26-27-28"] },
  { mes: "OCTUBRE", fechas: ["03-04-05", "10-11-12", "17-18-19", "24-25-26"] },
  { mes: "NOVIEMBRE", fechas: ["07-08-09", "14-15-16", "21-22-23", "28-29-30"] },
  { mes: "DICIEMBRE", fechas: ["MASTER"] }
]

const categorias = [
  "4TA CAB / 6TA CAB",
  "5TA CAB / 7MA CAB",
  "8VA CAB / 7MA DAM",
  "8VA DAM / 6TA DAM"
]

const rosaFuerte = "#ea638c"

export default function CalendarioTorneos() {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box w="100%" py={6} px={[3, 4]} bg="#30343f" color="white">
      <Box maxW="1000px" mx="auto">


        {!isMobile && (
          <SimpleGrid columns={4} spacing={2} mb={3} justifyItems="center">
            {categorias.map((cat, idx) => (
              <Box key={idx} textAlign="center">
                <Text
                  fontWeight="semibold"
                  fontSize={["md", null, "sm"]}
                  bg={rosaFuerte}
                  color="white"
                  px={2}
                  py={1}
                  borderRadius="md"
                >
                  {cat}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        )}

        <VStack spacing={3}>
          {calendario.map(({ mes, fechas }, rowIdx) => (
            <MotionBox
              key={rowIdx}
              bg="#1b2021"
              p={3}
              borderRadius="lg"
              boxShadow="sm"
              w="100%"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: rowIdx * 0.05 }}
            >
              <Text
                fontSize={["md", null, "lg"]}
                fontWeight="bold"
                color={rosaFuerte}
                mb={2}
                textAlign="center"
              >
                {mes}
              </Text>

              {mes === "DICIEMBRE" ? (
                <Box
                  textAlign="center"
                  bg={rosaFuerte}
                  color="white"
                  py={1}
                  px={2}
                  borderRadius="full"
                  fontSize={["md", null, "sm"]}
                  fontWeight="bold"
                >
                  MASTER
                </Box>
              ) : isMobile ? (
                fechas.map((fecha, idx) => (
                  <Box
                    key={idx}
                    textAlign="center"
                    border={`1.5px solid ${rosaFuerte}`}
                    py={2}
                    px={3}
                    borderRadius="md"
                    mb={2}
                  >
                    <Text fontSize={["sm", null, "xs"]} fontWeight="bold" color={rosaFuerte} mb={1}>
                      {categorias[idx]}
                    </Text>
                    <Text fontSize={["md", null, "sm"]}>{fecha}</Text>
                  </Box>
                ))
              ) : (
                <SimpleGrid columns={4} spacing={2}>
                  {fechas.map((fecha, idx) => (
                    <Box
                      key={idx}
                      textAlign="center"
                      bg="#30343f"
                      border={`1.5px solid ${rosaFuerte}`}
                      py={1}
                      px={2}
                      borderRadius="full"
                      fontSize={["md", null, "sm"]}
                      fontWeight="medium"
                    >
                      {fecha}
                    </Box>
                  ))}
                </SimpleGrid>
              )}
            </MotionBox>
          ))}
        </VStack>
      </Box>
    </Box>
  )
}
