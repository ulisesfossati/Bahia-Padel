import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Select,
  Input,
  Button,
  Text,
  VStack,
  Img
} from '@chakra-ui/react';

export default function ReservaPadel() {
  const [diaSeleccionado, setDiaSeleccionado] = useState("");
  const [turnoSeleccionado, setTurnoSeleccionado] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [diasDisponibles, setDiasDisponibles] = useState([]);
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);
  const [reservaConfirmada, setReservaConfirmada] = useState(null);

  useEffect(() => {
    const hoy = new Date(2025, 4, 4); // domingo 4 de mayo
    const dias = [];
    for (let i = 0; i < 7; i++) {
      const fecha = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate() + i);
      const yyyy = fecha.getFullYear();
      const mm = String(fecha.getMonth() + 1).padStart(2, '0');
      const dd = String(fecha.getDate()).padStart(2, '0');
      dias.push(`${yyyy}-${mm}-${dd}`);
    }
    setDiasDisponibles(dias);
    setDiaSeleccionado(dias[0]);
  }, []);

  useEffect(() => {
    actualizarHorarios();
  }, [diaSeleccionado]);

  const actualizarHorarios = () => {
    const data = JSON.parse(localStorage.getItem('horariosPorDia')) || {};
    let disponibles = data[diaSeleccionado] || [];

    const hoyActual = new Date();
    const hoyStr = `${hoyActual.getFullYear()}-${String(hoyActual.getMonth() + 1).padStart(2, '0')}-${String(hoyActual.getDate()).padStart(2, '0')}`;

    if (diaSeleccionado === hoyStr) {
      const horaActual = hoyActual.getHours() + hoyActual.getMinutes() / 60;
      disponibles = disponibles.filter(hora => {
        const [hh, mm] = hora.split(':').map(Number);
        const valor = hh + mm / 60;
        return valor > horaActual;
      });
    }

    disponibles.sort((a, b) => {
      const [ha, ma] = a.split(':').map(Number);
      const [hb, mb] = b.split(':').map(Number);
      return ha * 60 + ma - (hb * 60 + mb);
    });

    setHorariosDisponibles(disponibles);
  };

  const obtenerDiaSemana = (fecha) => {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const partes = fecha.split("-");
    const date = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
    return dias[date.getDay()];
  };

  const reservarTurno = () => {
    if (diaSeleccionado && turnoSeleccionado && nombre && telefono) {
      const horariosPorDiaActualizados = JSON.parse(localStorage.getItem('horariosPorDia')) || {};
      const disponibles = horariosPorDiaActualizados[diaSeleccionado] || [];

      if (!disponibles.includes(turnoSeleccionado)) {
        setMensajeError("Ese horario ya fue reservado por otra persona.");
        return;
      }

      const nuevaReserva = {
        dia: diaSeleccionado,
        turno: turnoSeleccionado,
        nombre,
        telefono,
        creadaEn: Date.now()
      };

      const reservasPrevias = JSON.parse(localStorage.getItem('reservas')) || [];
      reservasPrevias.push(nuevaReserva);
      localStorage.setItem('reservas', JSON.stringify(reservasPrevias));

      const actualizados = disponibles.filter(h => h !== turnoSeleccionado);
      horariosPorDiaActualizados[diaSeleccionado] = actualizados;
      localStorage.setItem('horariosPorDia', JSON.stringify(horariosPorDiaActualizados));
      setHorariosDisponibles(actualizados);

      setReservaConfirmada(nuevaReserva);
      setTurnoSeleccionado('');
      setNombre('');
      setTelefono('');
      setMensajeError('');
    } else {
      setMensajeError("Por favor completa todos los campos obligatorios.");
    }
  };

  const cancelarReserva = () => {
    if (!reservaConfirmada) return;

    const reservasPrevias = JSON.parse(localStorage.getItem('reservas')) || [];
    const actualizadas = reservasPrevias.filter(
      r =>
        r.dia !== reservaConfirmada.dia ||
        r.turno !== reservaConfirmada.turno ||
        r.nombre !== reservaConfirmada.nombre
    );
    localStorage.setItem('reservas', JSON.stringify(actualizadas));

    const horariosPorDia = JSON.parse(localStorage.getItem('horariosPorDia')) || {};
    const existentes = horariosPorDia[reservaConfirmada.dia] || [];
    horariosPorDia[reservaConfirmada.dia] = [...existentes, reservaConfirmada.turno].sort();
    localStorage.setItem('horariosPorDia', JSON.stringify(horariosPorDia));

    setReservaConfirmada(null);
    actualizarHorarios();
  };

  const puedeCancelar = () => {
    if (!reservaConfirmada?.creadaEn) return true;
    const ahora = Date.now();
    const diferenciaMin = (ahora - reservaConfirmada.creadaEn) / 1000 / 60;
    return diferenciaMin < 15;
  };

  return (
    <Box p={["1.5rem", "2rem"]} fontFamily="sans-serif" bg="#1b2021" minH="100vh" color="white">
      <Img src="/logo-completo.png" alt="Bahia Padel" w={["120px", "160px"]} mx="auto" mb={6} />
      <Heading as="h2" mb={4} textAlign="center" fontSize={["xl", "4xl"]} color="#ea638c">
        Reservar cancha de pádel
      </Heading>

      <VStack spacing={4} align="start">
        <Box w="100%">
          <Text>Día:</Text>
          <Select value={diaSeleccionado} onChange={(e) => setDiaSeleccionado(e.target.value)}>
            {diasDisponibles.map((dia, index) => (
              <option key={index} value={dia}>
                {obtenerDiaSemana(dia)} {dia}
              </option>
            ))}
          </Select>
        </Box>

        <Box w="100%">
          <Text>Horario:</Text>
          <Select
            value={turnoSeleccionado}
            onChange={(e) => setTurnoSeleccionado(e.target.value)}
            isDisabled={horariosDisponibles.length === 0}
          >
            <option value="">Selecciona un horario</option>
            {horariosDisponibles.length === 0 ? (
              <option disabled>No hay horarios disponibles</option>
            ) : (
              horariosDisponibles.map((hora, index) => (
                <option key={index} value={hora}>
                  {hora} hs
                </option>
              ))
            )}
          </Select>
          {horariosDisponibles.length === 0 && (
            <Text color="red.300" mt={2}>
              🕓 Ya no hay horarios disponibles para este día.
            </Text>
          )}
        </Box>

        <Box w="100%">
          <Input
            placeholder="Tu nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            mb={2}
          />
          <Input
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            mb={2}
          />
          <Button
            bg="#ea638c"
            color="white"
            fontSize={["xl", "xl"]}
            px={["4", "7"]}
            py={["3", "6"]}
            marginTop={2}
            _hover={{ bg: "#d9547b" }}
            onClick={reservarTurno}
          >
            Reservar
          </Button>
          {mensajeError && <Text color="red.300">{mensajeError}</Text>}
        </Box>

        {reservaConfirmada && (
          <Box
            borderRadius="lg"
            p={4}
            mt={4}
            bg="#ea638c"
            w="100%"
            color="white"
            boxShadow="md"
          >
            <Heading as="h3" size="md" mb={2}>✅ Reserva confirmada</Heading>
            <Text><strong>Día:</strong> {obtenerDiaSemana(reservaConfirmada.dia)} {reservaConfirmada.dia}</Text>
            <Text><strong>Horario:</strong> {reservaConfirmada.turno} hs</Text>
            <Text><strong>Nombre:</strong> {reservaConfirmada.nombre}</Text>
            <Text><strong>Teléfono:</strong> {reservaConfirmada.telefono}</Text>

            {puedeCancelar() ? (
              <Button
                mt={4}
                bg="white"
                color="#ea638c"
                fontSize={["sm", "md"]}
                px={["4", "5"]}
                py={["2", "3"]}
                _hover={{ bg: "#fce0ea" }}
                onClick={cancelarReserva}
              >
                Cancelar reserva
              </Button>
            ) : (
              <Text mt={4} color="white" fontStyle="italic">
                ⏳ Ya pasaron 15 minutos. No se puede cancelar esta reserva.
              </Text>
            )}
          </Box>
        )}
      </VStack>
    </Box>
  );
}
