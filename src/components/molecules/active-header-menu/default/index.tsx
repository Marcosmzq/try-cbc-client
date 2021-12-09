import { CloseButton, Flex, VStack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../../../context/userAuth";
import { HeaderCTA } from "../../header-item/HeaderCTA";
import { HeaderNavLinks } from "../../header-item/HeaderNavLinks";

interface ActiveHeaderMenuDefaultProps {
  closeMenu: () => void;
}

export const ActiveHeaderMenuDefault: React.FC<ActiveHeaderMenuDefaultProps> =
  ({ closeMenu }) => {
    const { user, logout } = useContext(AuthContext);
    return (
      <Flex
        pos="fixed"
        top="0"
        bg="white"
        minH="100vh"
        w="100%"
        zIndex="overlay"
        p={24}
        flexDir="column"
      >
        <Flex justify="space-between" w="100%">
          <CloseButton size="lg" onClick={closeMenu} />
        </Flex>
        <VStack my={12} spacing={12}>
          <HeaderNavLinks
            navLinkItems={
              user
                ? [
                    { text: "Inicio", href: "/home", onClick: closeMenu },
                    {
                      text: "Perfil",
                      href: `/profile`,
                      onClick: closeMenu,
                    },
                    {
                      text: "Premiun",
                      href: `/premium`,
                      onClick: closeMenu,
                    },
                  ]
                : [
                    { text: "Inicio", href: "/", onClick: closeMenu },
                    {
                      text: "Premiun",
                      href: `/premium`,
                      onClick: closeMenu,
                    },
                  ]
            }
          />
          <HeaderCTA
            headerCtaItems={
              user
                ? [
                    {
                      href: "/",
                      text: "Cerrar sesion",
                      btnVariant: "primarySolid",
                      onClick: () => {
                        logout();
                        closeMenu();
                      },
                    },
                  ]
                : [
                    {
                      href: "/login",
                      text: "Iniciar sesion",
                      btnVariant: "primaryOutline",
                      onClick: closeMenu,
                    },
                    {
                      href: "/register",
                      text: "Crear cuenta",
                      btnVariant: "primarySolid",
                      onClick: closeMenu,
                    },
                  ]
            }
          />
        </VStack>
      </Flex>
    );
  };
