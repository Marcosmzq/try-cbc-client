import { Grid, GridItem, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeaderDefault } from "../../../molecules/section-header/default";
import { LoginForm } from "../../../organisms/forms/login-form";
import { RegisterForm } from "../../../organisms/forms/register-form";

interface RegisterOrLoginTemplateWithImgProps {
  loginOrRegister: "login" | "register";
  sectionHeaderTitle: string;
  sectionHeaderDesc: string;
  imgAlt: string;
  imgSrc: string;
}

export const RegisterOrLoginTemplateWithImg: React.FC<RegisterOrLoginTemplateWithImgProps> =
  ({
    loginOrRegister,
    sectionHeaderTitle,
    sectionHeaderDesc,
    imgAlt,
    imgSrc,
  }) => {
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
            title={sectionHeaderTitle}
            desc={sectionHeaderDesc}
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={[2, 2, 1]}>
          <Image width="450px" height="450px" alt={imgAlt} src={imgSrc} />
        </GridItem>

        <GridItem dir="column" rowSpan={1} colSpan={[2, 2, 1]}>
          {loginOrRegister === "login" ? <LoginForm /> : <RegisterForm />}
          <Link passHref href="/forgot-password">
            <Button my={4} variant="link" color="primary">
              ¿Olvidaste tu contraseña?
            </Button>
          </Link>
        </GridItem>
      </Grid>
    );
  };
