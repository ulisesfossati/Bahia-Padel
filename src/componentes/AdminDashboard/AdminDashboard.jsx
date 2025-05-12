import React, { useEffect, useState } from 'react';
import logo from '/logo-completo.png';
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
  Stack,
  Divider,
  Img,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc
} from 'firebase/firestore';
import { db } from '../../firebase';

export default function AdminDashboard() {
  const [reservas, setReservas] = useState([]);
  const [nuevoHorario, setNuevoHorario] = useState('');
  const [horariosPorDia, setHorariosPorDia] = useState({});
  const [diaSeleccionado, setDiaSeleccionado] = useState('');
  const [autorizado, setAutorizado] = useState(true);

  const navigate = useNavigate();

  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  const obtenerNombreDia = (fecha) => diasSemana[fecha.getDay()];
  const formatearFecha = (fecha) => `${fecha.getDate()} de ${meses[fecha.getMonth()]}`;
  const parseFechaLocal = (fechaStr) => {
    const [a, m, d] = fechaStr.split('-');
    return new Date(a, m - 1, d);
  };

  const generarDiasFuturos = () => {
    const diasFuturos = [];
    const base = new Date();
    base.setHours(0, 0, 0, 0);
    for (let i = 0; i < 7; i++) {
      const diaFuturo = new Date(base);
      diaFuturo.setDate(base.getDate() + i);
      diasFuturos.push(diaFuturo);
    }
    return diasFuturos;
  };

  const limpiarDiasPasados = async () => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const snapshot = await getDocs(collection(db, 'horariosPorDia'));
    snapshot.forEach(async (docSnap) => {
      const [a, m, d] = docSnap.id.split('-');
      const fecha = new Date(a, m - 1, d);
      fecha.setHours(0, 0, 0, 0);
      if (fecha < hoy) {
        await deleteDoc(doc(db, 'horariosPorDia', docSnap.id));
      }
    });
  };

  const limpiarReservasPasadas = async () => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const snapshot = await getDocs(collection(db, 'reservas'));
    for (const docSnap of snapshot.docs) {
      const data = docSnap.data();
      const [a, m, d] = data.dia.split('-');
      const fecha = new Date(a, m - 1, d);
      fecha.setHours(0, 0, 0, 0);
      if (fecha < hoy) {
        await deleteDoc(doc(db, 'reservas', docSnap.id));
      }
    }
  };

  useEffect(() => {
    const logueado = localStorage.getItem('adminLogueado');
    if (logueado !== 'true') {
      setAutorizado(false);
      return;
    }

    limpiarDiasPasados();
    limpiarReservasPasadas();
    obtenerReservas();
    obtenerHorarios();
  }, []);

  const obtenerReservas = async () => {
    const snapshot = await getDocs(collection(db, 'reservas'));
    const datos = snapshot.docs.map(doc => doc.data());
    setReservas(datos);
  };

  const obtenerHorarios = async () => {
    const snapshot = await getDocs(collection(db, 'horariosPorDia'));
    const mapa = {};
    snapshot.forEach(doc => {
      mapa[doc.id] = doc.data().horarios || [];
    });
    setHorariosPorDia(mapa);
  };

  const guardarHorariosPorDia = async (nuevosHorarios) => {
    for (const dia in nuevosHorarios) {
      await setDoc(doc(db, 'horariosPorDia', dia), {
        horarios: nuevosHorarios[dia]
      });
    }
    setHorariosPorDia(nuevosHorarios);
  };

  const reservasDelDia = reservas
    .filter(reserva => reserva.dia === diaSeleccionado)
    .sort((a, b) => {
      const [ah, am] = a.turno.split(':').map(Number);
      const [bh, bm] = b.turno.split(':').map(Number);
      return ah !== bh ? ah - bh : am - bm;
    });

  const horariosDisponibles = horariosPorDia[diaSeleccionado] || [];

  const eliminarReserva = async (reserva) => {
    const snapshot = await getDocs(collection(db, 'reservas'));
    snapshot.forEach(docSnap => {
      const r = docSnap.data();
      if (
        r.dia === reserva.dia &&
        r.turno === reserva.turno &&
        r.nombre === reserva.nombre &&
        r.telefono === reserva.telefono &&
        r.dni === reserva.dni
      ) {
        deleteDoc(doc(db, 'reservas', docSnap.id));
      }
    });
    obtenerReservas();
  };

  const agregarHorario = async () => {
    if (!nuevoHorario || !diaSeleccionado) return;

    const actuales = horariosPorDia[diaSeleccionado] || [];
    if (!actuales.includes(nuevoHorario)) {
      const nuevos = [...actuales, nuevoHorario].sort();
      const nuevosHorarios = {
        ...horariosPorDia,
        [diaSeleccionado]: nuevos
      };
      await guardarHorariosPorDia(nuevosHorarios);
      setNuevoHorario('');
    }
  };

  const eliminarHorario = async (hora) => {
    const actuales = horariosPorDia[diaSeleccionado] || [];
    const nuevos = actuales.filter(h => h !== hora);
    const nuevosHorarios = {
      ...horariosPorDia,
      [diaSeleccionado]: nuevos
    };
    await guardarHorariosPorDia(nuevosHorarios);
  };

  const diasDisponibles = generarDiasFuturos();

  if (!autorizado) {
    return (
      <Box bg="#1b2021" color="white" minH="100vh" display="flex" alignItems="center" justifyContent="center" p={4}>
        <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" textAlign="center" borderRadius="md" bg="#30343f" maxW="400px" p={6}>
          <AlertIcon boxSize="40px" mr={0} color="#ea638c" />
          <AlertTitle mt={4} mb={1} fontSize="lg">Acceso denegado</AlertTitle>
          <AlertDescription mb={4}>Necesitás iniciar sesión como administrador para acceder a esta página.</AlertDescription>
          <Button bg="#ea638c" color="white" onClick={() => navigate('/admin')}>Ir al inicio de sesión</Button>
        </Alert>
      </Box>
    );
  }

  return (
    <Box p={["1.5rem", "2rem"]} bg="#1b2021" color="white" minH="100vh">
      <Img src={logo} alt="Bahia Padel" w={["120px", "160px"]} mx="auto" mb={4} />
      <Flex justify="center" mb={6}>
        <Button size="sm" fontSize="1.2rem" bg="#ea638c" color="white" _hover={{ bg: "#d9547b" }} onClick={() => {
          localStorage.removeItem('adminLogueado');
          navigate('/admin');
        }}>
          Cerrar sesión
        </Button>
      </Flex>

      <Heading as="h2" mb={6} textAlign="center" fontSize={["xl", "2xl"]}>Panel de Administración</Heading>
      <VStack spacing={6} align="stretch" maxW="800px" mx="auto">
        <Box>
          <Text fontWeight="bold" mb={2}>Selecciona un día:</Text>
          <Select value={diaSeleccionado} onChange={(e) => setDiaSeleccionado(e.target.value)}>
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
                      <Text>
                        {reserva.dia} a las {reserva.turno} - {reserva.nombre} ({reserva.telefono} | DNI: {reserva.dni})
                      </Text>
                      <Button
                        size="sm"
                        bg="#ea638c"
                        color="white"
                        _hover={{ bg: "#d9547b" }}
                        onClick={() => eliminarReserva(reserva)}
                      >
                        Eliminar
                      </Button>
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
              <Button
                bg="#ea638c"
                color="white"
                _hover={{ bg: "#d9547b" }}
                onClick={agregarHorario}
              >
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
                      <Button
                        size="sm"
                        bg="#ea638c"
                        color="white"
                        _hover={{ bg: "#d9547b" }}
                        onClick={() => eliminarHorario(hora)}
                      >
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
