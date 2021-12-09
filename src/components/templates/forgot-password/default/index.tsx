import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { SectionHeaderDefault } from "../../../molecules/section-header/default";
import { ForgotPasswordFormDefault } from "../../../organisms/forms/forgot-password-form/default";

interface ForgotPasswordTemplateProps {}

export const ForgotPasswordTemplate: React.FC<ForgotPasswordTemplateProps> =
  ({}) => {
    return (
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={8}
        p={6}
        justifyItems="center"
        alignItems="center"
        my={16}
      >
        <GridItem my={12} rowSpan={1} colSpan={2}>
          <SectionHeaderDefault
            title="¿Olvidaste tu contraseña?"
            desc="Tranquilo, podés recuperarla fácilmente y volver a estudiar."
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={[2, 2, 1]}>
          <Image
            width="450px"
            height="450px"
            alt="Forgot password"
            src="/images/undraw_forgot_password.svg"
          />
        </GridItem>

        <GridItem dir="column" rowSpan={1} colSpan={[2, 2, 1]}>
          <ForgotPasswordFormDefault />
        </GridItem>
      </Grid>
    );
  };
