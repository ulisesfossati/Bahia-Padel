import { Box, Text, SimpleGrid } from "@chakra-ui/react"

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
  { mes: "DICIEMBRE", fechas: ["MASTER"] } // se maneja especial
]

const categorias = [
  "4TA CAB 6TA CAB",
  "5TA CAB 7MA CAB",
  "8VA CAB 7MA DAM",
  "8VA DAM 6TA DAM"
]

const rosaFuerte = "#ea638c"

export default function CalendarioTorneos() {
  return (
    <Box  w="100%" py={6} px={[4, 6]}>
      {/* Título */}
      <SimpleGrid columns={5} spacing={4} mb={4}>
        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="3xl" color={rosaFuerte}>
            MES
          </Text>
        </Box>
        {categorias.map((cat, idx) => (
          <Box key={idx} textAlign="center" >
            <Text fontWeight="bold" fontSize="3xl" color={rosaFuerte}>
              {cat}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Filas por mes */}
      {calendario.map(({ mes, fechas }, rowIdx) => (
        <SimpleGrid key={rowIdx} columns={5} spacing={4} mb={2}>
          {/* Celda de Mes */}
          <Box
            px={1}
            py={1}
            border={`2px solid ${rosaFuerte}`}
            borderRadius="full"
            textAlign="center"
          >
            <Text color="white" fontSize="xl">{mes}</Text>
          </Box>

          {/* Si es diciembre, renderizamos una celda que ocupa 4 columnas */}
          {mes === "DICIEMBRE" ? (
            <Box
              as="div"
              gridColumn="span 4"
              px={3}
              py={1}
              border={`2px solid ${rosaFuerte}`}
              borderRadius="full"
              textAlign="center"
            >
              <Text color="white" fontSize="xl">MASTER</Text>
            </Box>
          ) : (
            fechas.map((fecha, idx) => (
              <Box
                key={idx}
                px={3}
                py={1}
                border={`2px solid ${rosaFuerte}`}
                borderRadius="full"
                textAlign="center"
              >
                <Text color="white" fontSize="xl">{fecha}</Text>
              </Box>
            ))
          )}
        </SimpleGrid>
      ))}
    </Box>
  )
}
