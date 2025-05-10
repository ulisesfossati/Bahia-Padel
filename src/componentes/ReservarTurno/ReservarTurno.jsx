import React, { useState, useEffect } from 'react';
import {
  Box, Heading, Select, Input, Button, Text, VStack, Img
} from '@chakra-ui/react';
import {
  collection, doc, getDoc, getDocs, setDoc, addDoc, deleteDoc
} from 'firebase/firestore';
import { db } from '../../firebase';

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
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const dias = [];
    for (let i = 0; i < 7; i++) {
      const fecha = new Date(hoy);
      fecha.setDate(hoy.getDate() + i);
      const yyyy = fecha.getFullYear();
      const mm = String(fecha.getMonth() + 1).padStart(2, '0');
      const dd = String(fecha.getDate()).padStart(2, '0');
      dias.push(`${yyyy}-${mm}-${dd}`);
    }
    setDiasDisponibles(dias);
    setDiaSeleccionado(dias[0]);
  }, []);

  useEffect(() => {
    if (diaSeleccionado) cargarHorariosDisponibles();
  }, [diaSeleccionado]);

  const cargarHorariosDisponibles = async () => {
    try {
      const docRef = doc(db, 'horariosPorDia', diaSeleccionado);
      const docSnap = await getDoc(docRef);
      let disponibles = docSnap.exists() ? docSnap.data().horarios || [] : [];

      const hoy = new Date();
      const hoyStr = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
      if (diaSeleccionado === hoyStr) {
        const horaActual = hoy.getHours() + hoy.getMinutes() / 60;
        disponibles = disponibles.filter(hora => {
          const [hh, mm] = hora.split(':').map(Number);
          return hh + mm / 60 > horaActual;
        });
      }

      setHorariosDisponibles(disponibles.sort());
    } catch (err) {
      console.error("Error al cargar horarios:", err);
    }
  };

  const obtenerDiaSemana = (fecha) => {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const [a, m, d] = fecha.split("-");
    return dias[new Date(a, m - 1, d).getDay()];
  };

  const reservarTurno = async () => {
    if (!diaSeleccionado || !turnoSeleccionado || !nombre || !telefono) {
      setMensajeError("Por favor completá todos los campos.");
      return;
    }

    try {
      const docRef = doc(db, 'horariosPorDia', diaSeleccionado);
      const docSnap = await getDoc(docRef);
      const horarios = docSnap.exists() ? docSnap.data().horarios : [];

      if (!horarios.includes(turnoSeleccionado)) {
        setMensajeError("Ese horario ya fue reservado.");
        return;
      }

      const nuevaReserva = {
        dia: diaSeleccionado,
        turno: turnoSeleccionado,
        nombre,
        telefono,
        creadaEn: Date.now()
      };

      await addDoc(collection(db, 'reservas'), nuevaReserva);

      const nuevosHorarios = horarios.filter(h => h !== turnoSeleccionado);
      await setDoc(docRef, { horarios: nuevosHorarios });

      setReservaConfirmada(nuevaReserva);
      setHorariosDisponibles(nuevosHorarios);
      setTurnoSeleccionado('');
      setNombre('');
      setTelefono('');
      setMensajeError('');
    } catch (err) {
      console.error("Error al reservar turno:", err);
    }
  };

  const cancelarReserva = async () => {
    if (!reservaConfirmada) return;

    try {
      const q = await getDocs(collection(db, 'reservas'));
      const docToDelete = q.docs.find(docu => {
        const d = docu.data();
        return d.dia === reservaConfirmada.dia &&
               d.turno === reservaConfirmada.turno &&
               d.nombre === reservaConfirmada.nombre &&
               d.telefono === reservaConfirmada.telefono;
      });

      if (docToDelete) {
        await deleteDoc(doc(db, 'reservas', docToDelete.id));

        const ref = doc(db, 'horariosPorDia', reservaConfirmada.dia);
        const snap = await getDoc(ref);
        const horariosActuales = snap.exists() ? snap.data().horarios : [];

        const actualizados = [...horariosActuales, reservaConfirmada.turno].sort();
        await setDoc(ref, { horarios: actualizados });

        setReservaConfirmada(null);
        cargarHorariosDisponibles();
      }
    } catch (err) {
      console.error("Error al cancelar reserva:", err);
    }
  };

  const puedeCancelar = () => {
    if (!reservaConfirmada?.creadaEn) return true;
    return (Date.now() - reservaConfirmada.creadaEn) / 60000 < 15;
  };

  return (
    <Box p="2rem" bg="#1b2021" color="white" minH="100vh">
      <Img src="/logo-completo.png" alt="Bahia Padel" w="150px" mx="auto" mb={6} />
      <Heading as="h2" mb={4} textAlign="center" fontSize="3xl" color="#ea638c">
        Reservar cancha de pádel
      </Heading>

      <VStack spacing={4}>
        <Box w="100%">
          <Text>Día:</Text>
          <Select value={diaSeleccionado} onChange={(e) => setDiaSeleccionado(e.target.value)}>
            {diasDisponibles.map((dia) => (
              <option key={dia} value={dia}>{obtenerDiaSemana(dia)} {dia}</option>
            ))}
          </Select>
        </Box>

        <Box w="100%">
          <Text>Horario:</Text>
          <Select
            value={turnoSeleccionado}
            onChange={(e) => setTurnoSeleccionado(e.target.value)}
            isDisabled={!horariosDisponibles.length}
          >
            <option value="">Selecciona un horario</option>
            {horariosDisponibles.map((h, i) => (
              <option key={i} value={h}>{h} hs</option>
            ))}
          </Select>
          {!horariosDisponibles.length && (
            <Text color="red.300" mt={2}>🕓 No hay horarios disponibles.</Text>
          )}
        </Box>

        <Input placeholder="Tu nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <Input placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <Button bg="#ea638c" color="white" onClick={reservarTurno} _hover={{ bg: "#d9547b" }}>
          Reservar
        </Button>
        {mensajeError && <Text color="red.300">{mensajeError}</Text>}

        {reservaConfirmada && (
          <Box w="100%" bg="#30343f" p={4} borderRadius="lg" boxShadow="lg" mt={4}>
            <Heading size="md" mb={2}>✅ Reserva confirmada</Heading>
            <Text><strong>Día:</strong> {obtenerDiaSemana(reservaConfirmada.dia)} {reservaConfirmada.dia}</Text>
            <Text><strong>Horario:</strong> {reservaConfirmada.turno} hs</Text>
            <Text><strong>Nombre:</strong> {reservaConfirmada.nombre}</Text>
            <Text><strong>Teléfono:</strong> {reservaConfirmada.telefono}</Text>
            {puedeCancelar() ? (
              <Button mt={4} bg="#ea638c" color="white" _hover={{ bg: "#d9547b" }} onClick={cancelarReserva}>
                Cancelar reserva
              </Button>
            ) : (
              <Text mt={4} fontStyle="italic" color="gray.500">
                ⏳ No se puede cancelar (pasaron más de 15 minutos)
              </Text>
            )}
          </Box>
        )}
      </VStack>
    </Box>
  );
}
