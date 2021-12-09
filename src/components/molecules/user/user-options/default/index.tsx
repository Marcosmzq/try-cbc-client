import { Button, Heading, VStack } from "@chakra-ui/react";
import router from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../../../../context/userAuth";
import { DialogModal } from "../../../modal/dialog";

interface UserOptionsDefaultProps {}

export const UserOptionsDefault: React.FC<UserOptionsDefaultProps> = ({}) => {
  const { logout } = useContext(AuthContext);

  return (
    <VStack spacing={6} w="100%">
      <Heading as="h4" variant="h4">
        Opciones
      </Heading>
      <DialogModal
        buttonText="¿necesitas ayuda?"
        modalHeader="Soporte"
        modalBody="Si tenes algún problema o duda sobre la plataforma podes enviarnos un mail y contarnos tu experiencia, intentaremos responderte a la brevedad. trycbc@gmail.com"
        isFullWidth={true}
      />
      <Button
        onClick={() => {
          logout();
          router.push("/");
        }}
        isFullWidth
        variant="primarySolid"
      >
        Cerrar sesion
      </Button>
    </VStack>
  );
};
