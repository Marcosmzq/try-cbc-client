import {
  Container,
  Box,
  VStack,
  Divider,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../../../context/userAuth";
import { UserHeaderDefault } from "../../../molecules/user/user-header/default";
import { CTADefault } from "../../../organisms/cta/default";
import { ChangePasswordForm } from "../../../organisms/forms/change-password-form";
import { UserOptionsDefault } from "../../../molecules/user/user-options/default";

interface UserProfileDefaultTemplateProps {}

export const UserProfileDefaultTemplate: React.FC<
  UserProfileDefaultTemplateProps
> = ({}) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  return (
    <Container maxW="container.lg">
      <VStack spacing={8} divider={<Divider orientation="horizontal" />}>
        <CTADefault
          title="Potencia tu cuenta ahora y aprovecha al máximo nuestra plataforma."
          btnText="Ver beneficios"
          isLoading={false}
          ctaHandleButton={() => router.push("/premium")}
        />
        <UserHeaderDefault
          title={`Bienvenido @${user.username}`}
          desc="Bienvenido, acá podes ver información sobre tu cuenta, cambiar la contraseña y cambiar el tema entre otras cosas."
          username={user.username}
          userRole={user.role}
          userID={user.id}
        />
        <Box my={8} w="100%">
          <Heading my={4} textAlign="center" as="h3" variant="h3">
            Cambiar contraseña
          </Heading>
          <ChangePasswordForm />
        </Box>
        <UserOptionsDefault />
      </VStack>
    </Container>
  );
};
