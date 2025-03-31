import {
  Box,
  Flex,
  Img,
  Link,
  Stack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import logo from '/logo-completo.png';
import hambur from '/icons8-hamburguesa.svg';
import cruz from '/icons8-cruz.svg';
import menu from '/Menu-BahiaPadel.pdf'; // PDF desde carpeta public

const Hamburguesa = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isHamburger, setIsHamburger] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleMenuToggle = () => {
    onToggle();
    setIsHamburger(!isHamburger);
  };

  const handleLinkClick = () => {
    onToggle();
    setIsHamburger(true);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = id === 'Palas' ? -110 : -100;
      const position = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: position, behavior: "smooth" });
      handleLinkClick();
    }
  };

  const textStyle = {
    fontSize: ["1.3rem", "1.3rem", "1.9rem", "1.3rem"],
    color: "white",
    position: "relative",
    display: "inline-block",
    transition: "color 0.3s ease",
    _hover: {
      color: "#ea638c",
      _after: { width: "100%" }
    },
    _after: {
      content: '""',
      position: "absolute",
      bottom: "-2px",
      left: 0,
      height: "2px",
      width: "0%",
      backgroundColor: "#ea638c",
      transition: "width 0.3s ease"
    }
  };

  return (
    <>
      {/* Botón hamburguesa/cruz */}
      <Box
        position="fixed"
        top={["5", "12", "9", "5"]}
        right={["5", "5", "8", "5"]}
        onClick={handleMenuToggle}
        cursor="pointer"
        zIndex={1500}
        transition="transform 0.3s"
        transform={isHamburger ? 'rotate(0deg)' : 'rotate(90deg)'}
      >
        <Img
          src={isHamburger ? hambur : cruz}
          w="35px"
          h="35px"
          transition="all 0.3s ease"
          opacity={isHamburger ? 1 : 0.7}
        />
      </Box>

      {/* Menú lateral */}
      <Box
        bg="#1b2021"
        w="50%"
        h="100vh"
        position="fixed"
        top={0}
        left={isOpen ? 0 : '-50vw'}
        transition="left 0.3s ease"
        zIndex={1400}
        display="flex"
        flexDirection="column"
        p="1em"
      >
        <Flex align="center" justify="space-between" mb="-2em" h="13em">
          <Img src={logo} w={["6em", "6em", "8em", "6em"]} h={["5em", "5em", "7em", "5em"]} />
        </Flex>

        {/* Enlaces */}
        <Stack spacing={4} mt="2em">
          {["Inicio", "Torneos", "Horarios", "Clases"].map((item) => (
            <Link key={item} onClick={() => scrollToSection(item)} cursor="pointer">
              <Text {...textStyle}>{item}</Text>
            </Link>
          ))}

          {/* Enlace al PDF (Menu) */}
          <Link href={menu} isExternal onClick={handleLinkClick}>
            <Text {...textStyle}>Menu</Text>
          </Link>

          {/* Dropdown Store */}
          <Menu>
            <MenuButton as={Box} p={0} _hover={{ bg: "transparent" }}>
              <Text {...textStyle}>Store</Text>
            </MenuButton>

            <MenuList
              bg="#1b2021"
              borderColor="#1b2021"
              minW="5em"
              p="0.2em"
              mt="0.5em"
            >
              {["Palas", "Zapatillas", "Accesorios"].map((item) => (
                <MenuItem
                  key={item}
                  bg="#1b2021"
                  p="0.4em"
                  onClick={() => scrollToSection(item)}
                >
                  <Text {...textStyle}>{item}</Text>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Stack>
      </Box>
    </>
  );
};

export { Hamburguesa };
