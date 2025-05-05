import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Select,
  Input,
  Button,
  VStack,
  List,
  ListItem,
  HStack,
  Divider,
  Img,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [reservas, setReservas] = useState([]);
  const [nuevoHorario, setNuevoHorario] = useState('');
  const [horariosPorDia, setHorariosPorDia] = useState({});
  const [diaSeleccionado, setDiaSeleccionado] = useState('');
  const [autorizado, setAutorizado] = useState(true);

  const navigate = useNavigate();

  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  const obtenerNombreDia = (fecha) => diasSemana[fecha.getDay()];
  const formatearFecha = (fecha) => `${fecha.getDate()} de ${meses[fecha.getMonth()]}`;
  const parseFechaLocal = (fechaStr) => {
    const [a, m, d] = fechaStr.split('-');
    return new Date(a, m - 1, d);
  };

  const generarDiasFuturos = () => {
    const diasFuturos = [];
    const base = new Date(2025, 4, 4);
    for (let i = 0; i < 7; i++) {
      const diaFuturo = new Date(base);
      diaFuturo.setDate(base.getDate() + i);
      diasFuturos.push(diaFuturo);
    }
    return diasFuturos;
  };

  useEffect(() => {
    const logueado = localStorage.getItem('adminLogueado');
    if (logueado !== 'true') {
      setAutorizado(false);
      return;
    }

    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(reservasGuardadas);

    const horariosGuardados = JSON.parse(localStorage.getItem('horariosPorDia')) || {};
    setHorariosPorDia(horariosGuardados);
  }, []);

  const guardarHorariosPorDia = (nuevosHorarios) => {
    setHorariosPorDia(nuevosHorarios);
    localStorage.setItem('horariosPorDia', JSON.stringify(nuevosHorarios));
  };

  const reservasDelDia = reservas.filter(reserva => reserva.dia === diaSeleccionado);
  const horariosDisponibles = horariosPorDia[diaSeleccionado] || [];

  const eliminarReserva = (index) => {
    const nuevasReservas = [...reservas];
    nuevasReservas.splice(index, 1);
    setReservas(nuevasReservas);
    localStorage.setItem('reservas', JSON.stringify(nuevasReservas));
  };

  const agregarHorario = () => {
    if (!nuevoHorario) return;

    const horariosActuales = horariosPorDia[diaSeleccionado] || [];
    if (!horariosActuales.includes(nuevoHorario)) {
      const nuevosHorarios = {
        ...horariosPorDia,
        [diaSeleccionado]: [...horariosActuales, nuevoHorario].sort()
      };
      guardarHorariosPorDia(nuevosHorarios);
      setNuevoHorario('');
    }
  };

  const eliminarHorario = (hora) => {
    const horariosActuales = horariosPorDia[diaSeleccionado] || [];
    const nuevos = horariosActuales.filter(h => h !== hora);
    const nuevosHorariosPorDia = {
      ...horariosPorDia,
      [diaSeleccionado]: nuevos
    };
    guardarHorariosPorDia(nuevosHorariosPorDia);
  };

  const diasDisponibles = generarDiasFuturos();

  if (!autorizado) {
    return (
      <Box bg="#1b2021" color="white" minH="100vh" display="flex" alignItems="center" justifyContent="center" p={4}>
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          borderRadius="md"
          bg="#30343f"
          maxW="400px"
          p={6}
        >
          <AlertIcon boxSize="40px" mr={0} color="#ea638c" />
          <AlertTitle mt={4} mb={1} fontSize="lg">Acceso denegado</AlertTitle>
          <AlertDescription mb={4}>
            Necesitás iniciar sesión como administrador para acceder a esta página.
          </AlertDescription>
          <Button bg="#ea638c" color="white" onClick={() => navigate('/admin')}>
            Ir al inicio de sesión
          </Button>
        </Alert>
      </Box>
    );
  }

  return (
    <Box p={["1.5rem", "2rem"]} bg="#1b2021" color="white" minH="100vh">
      <Img src="/logo-completo.png" alt="Bahia Padel" w={["120px", "160px"]} mx="auto" mb={4} />
      
      {/* Botón de cerrar sesión */}
      <Flex justify="center" mb={6}>
        <Button
          size="sm"
          fontSize="1.2rem"
          bg="#ea638c"
          color="white"
          _hover={{ bg: "#d9547b" }}
          onClick={() => {
            localStorage.removeItem('adminLogueado');
            navigate('/admin');
          }}
        >
          Cerrar sesión
        </Button>
      </Flex>

      <Heading as="h2" mb={6} textAlign="center" fontSize={["xl", "2xl"]}>
        Panel de Administración
      </Heading>

      <VStack spacing={6} align="stretch" maxW="800px" mx="auto">
        <Box>
          <Text fontWeight="bold" mb={2}>Selecciona un día:</Text>
          <Select
            value={diaSeleccionado}
            onChange={(e) => setDiaSeleccionado(e.target.value)}
          >
            <option value="">Selecciona un día</option>
            {diasDisponibles.map((dia, index) => (
              <option key={index} value={dia.toISOString().split('T')[0]}>
                {obtenerNombreDia(dia)} {formatearFecha(dia)}
              </option>
            ))}
          </Select>
        </Box>

        {diaSeleccionado && (
          <Box>
            <Heading as="h3" size="md" mb={3}>
              Reservas para el {obtenerNombreDia(parseFechaLocal(diaSeleccionado))} {formatearFecha(parseFechaLocal(diaSeleccionado))}
            </Heading>

            {reservasDelDia.length === 0 ? (
              <Text mb={4}>No hay reservas para este día.</Text>
            ) : (
              <List spacing={3} mb={4}>
                {reservasDelDia.map((reserva, index) => (
                  <ListItem key={index}>
                    <Stack direction={["column", "row"]} justify="space-between">
                      <Text>{reserva.dia} a las {reserva.turno} - {reserva.nombre} ({reserva.telefono})</Text>
                      <Button size="sm" bg="#ea638c" color="white" _hover={{ bg: "#d9547b" }} onClick={() => eliminarReserva(index)}>Eliminar</Button>
                    </Stack>
                  </ListItem>
                ))}
              </List>
            )}

            <Divider my={6} />

            <Heading as="h3" size="md" mb={3}>Agregar nuevo horario</Heading>
            <Stack direction={["column", "row"]} spacing={3} mb={4}>
              <Input
                placeholder="Ej: 22:00"
                value={nuevoHorario}
                onChange={(e) => setNuevoHorario(e.target.value)}
                maxW="200px"
                bg="white"
                color="black"
              />
              <Button bg="#ea638c" color="white" _hover={{ bg: "#d9547b" }} onClick={agregarHorario}>
                Agregar
              </Button>
            </Stack>

            <Heading as="h4" size="sm" mb={2}>Horarios disponibles:</Heading>
            {horariosDisponibles.length === 0 ? (
              <Text>No hay horarios cargados para este día.</Text>
            ) : (
              <List spacing={3}>
                {horariosDisponibles.map((hora, idx) => (
                  <ListItem key={idx}>
                    <Stack direction={["column", "row"]} justify="space-between">
                      <Text>{hora}</Text>
                      <Button size="sm" bg="#ea638c" color="white" _hover={{ bg: "#d9547b" }} onClick={() => eliminarHorario(hora)}>
                        Eliminar
                      </Button>
                    </Stack>
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        )}
      </VStack>
    </Box>
  );
}
