import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  Img
} from '@chakra-ui/react';

const Admin = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = () => {
    const usuarioValido = 'admin';
    const contraseniaValida = 'admin123';

    if (usuario === usuarioValido && contrasenia === contraseniaValida) {
      localStorage.setItem('adminLogueado', 'true'); // ✅ se guarda en localStorage
      navigate('/admin-dashboard');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Box bg="#1b2021" minH="100vh" p="2rem">
      <Box
        bg="#30343f"
        borderRadius="lg"
        boxShadow="lg"
        p="2rem"
        maxW="400px"
        mx="auto"
        mt="6"
        color="white"
      >
        <VStack spacing={4}>
          <Img src="/logo-completo.png" w="140px" mb={2} />
          <Heading as="h2" color="#ea638c" fontSize="2xl" textAlign="center">
            Inicio de sesión - Admin
          </Heading>

          <Input
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            bg="white"
            color="black"
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={contrasenia}
            onChange={(e) => setContrasenia(e.target.value)}
            bg="white"
            color="black"
          />
          <Button
            bg="#ea638c"
            color="white"
            _hover={{ bg: "#d9547b" }}
            width="100%"
            onClick={login}
          >
            Iniciar sesión
          </Button>
          {error && <Text color="red.300">{error}</Text>}
        </VStack>
      </Box>
    </Box>
  );
};

export default Admin;
