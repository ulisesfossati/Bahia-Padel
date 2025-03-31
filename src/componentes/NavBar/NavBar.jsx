import { Box, Flex, Img, Link, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React from 'react';
import logo from '/logo-completo.png';
import menu from '/Menu-BahiaPadel.pdf'
import { Hamburguesa } from '../Hamburguesa/Hamburguesa';

const NavBar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const offset = id === 'Palas' ? 150 : 100;
      const targetPosition = sectionPosition - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box as="section" bg="#1b2021" padding={["0.9em 0", "1.3em 0", "1em 0","1em 0"]} w="100%" display="flex" alignItems="center"  position="fixed" zIndex="10000">
      <Text as="span" display="flex" w={["40%", "20%", "20%","20%"]}alignItems="end" justifyContent="center"> 
        <Link href='https://www.instagram.com/bahiapadel3/?hl=es-la' isExternal>
          <Img h={["3.3em", "5em", "5em","5em"]} w={["4.2em", "6em", "6em","7em"]} src={logo} alt="Bahia Padel Instagram" />
        </Link>
      </Text>

      <Text as="span" display={['block', 'block', 'block', 'none']}>
        <Hamburguesa />
      </Text>

      <Flex as="nav" gap={["0", "0", "2em", "3em", "4em"]} fontSize="1.55rem" width={['100%', '75%', '80%', '55%']} justifyContent="center" display={['none', 'none', 'none', 'flex']}>
        {["Inicio", "Torneos", "Horarios", "Clases"].map((section) => (
          <Link 
            key={section}
            onClick={() => handleScroll(section)}
            textDecor="none" 
            color="white" 
            position="relative"
            _hover={{ color: "#ea638c", _after: { width: "100%" } }}
            transition="color 0.3s ease"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-2px",
              left: 0,
              height: "2px",
              width: "0%",
              backgroundColor: "#ea638c",
              transition: "width 0.3s ease"
            }}
          >
            {section}
          </Link>
        ))}

        {/* Link al PDF */}
        <Link 
          href={menu}
          isExternal 
          color="white" 
          position="relative"
          _hover={{ color: "#ea638c", _after: { width: "100%" } }}
          transition="color 0.3s ease"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-2px",
            left: 0,
            height: "2px",
            width: "0%",
            backgroundColor: "#ea638c",
            transition: "width 0.3s ease"
          }}
        >
          Menu
        </Link>

        {/* Store dropdown */}
        <Menu>
          <MenuButton
            as={Link}
            color="white" 
            position="relative"
            _hover={{ color: "#ea638c", _after: { width: "100%" } }}
            transition="color 0.3s ease"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-2px",
              left: 0,
              height: "2px",
              width: "0%",
              backgroundColor: "#ea638c",
              transition: "width 0.3s ease"
            }}
          >
            Store
          </MenuButton>
          <MenuList bg="#1b2021" border="none" mt="0.5em">
            {["Palas", "Zapatillas", "Accesorios"].map((item) => (
              <MenuItem 
                key={item}
                bg="#1b2021" 
                transition="color 0.3s ease" 
                color="white"
                onClick={() => handleScroll(item)}
              >
                <Text
                  position="relative"
                  _hover={{ color: "#ea638c", _after: { width: "100%" } }}
                  transition="color 0.3s ease"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    height: "2px",
                    width: "0%",
                    backgroundColor: "#ea638c",
                    transition: "width 0.3s ease"
                  }}
                >
                  {item}
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

export { NavBar };
