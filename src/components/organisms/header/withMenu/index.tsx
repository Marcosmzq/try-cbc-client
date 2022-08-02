import {
  Flex,
  IconButton,
  useBoolean,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HeaderLogo } from "../../../molecules/header-item/HeaderLogo";
import { ActiveHeaderMenuDefault } from "../../../molecules/active-header-menu/default";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../../../context/userAuth";
import Link from "next/link";

interface HeaderWithMenuProps {}

export const HeaderWithMenu: React.FC<HeaderWithMenuProps> = () => {
  const [activeMenu, setActiveMenu] = useBoolean(false);
  const { user } = useContext(AuthContext);
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        px={[12, 24]}
        py={[6, 12]}
      >
        <HeaderLogo />
        {!user ? (
          <HStack spacing={4} display={["none", "none", "block"]}>
            <Link passHref href="/login">
              <Button
                as={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variant="primaryOutline"
              >
                Iniciar sesion
              </Button>
            </Link>
            <Link passHref href="/register">
              <Button
                as={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variant="primarySolid"
              >
                Crear cuenta
              </Button>
            </Link>
          </HStack>
        ) : (
          <Box display={["none", "none", "block"]}>
            {activeMenu && (
              <ActiveHeaderMenuDefault closeMenu={setActiveMenu.on} />
            )}
          </Box>
        )}

        <IconButton
          display={["block", "block", "none"]}
          colorScheme="black"
          variant="outline"
          size="lg"
          aria-label="Open menu options"
          icon={activeMenu ? <CloseIcon /> : <HamburgerIcon />}
          onClick={setActiveMenu.toggle}
        />
      </Flex>
      {activeMenu && <ActiveHeaderMenuDefault closeMenu={setActiveMenu.off} />}
    </>
  );
};
