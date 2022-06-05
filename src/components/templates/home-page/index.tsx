import { Container, Divider, Box } from "@chakra-ui/react";
import { SectionHeaderDefault } from "../../molecules/section-header/default";
import { SelectExerciseDefault } from "../../organisms/select-exercise/default";
import { StepsWithLine } from "../../organisms/steps/withLine";
import { useContext } from "react";
import { AuthContext } from "../../../context/userAuth";
import { CTADefault } from "../../organisms/cta/default";
import { useRouter } from "next/router";

interface HomePageTemplateProps {}

export const HomePageTemplate: React.FC<HomePageTemplateProps> = ({}) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  return (
    <Container my={16} maxW="container.lg">
      <SectionHeaderDefault
        title={`Bienvenido ${user ? "@" && user.username : ""}`}
        desc="Seleccioná lo que queres estudiar y empezá ya mismo a aprender."
      />
      <StepsWithLine
        steps={[
          {
            title: "Selecciona el tipo de ejercicio",
            desc: "Debajo elegí que formato de ejercicio queres practicar.",
            imgLineSrc: "/assets/lineIndicatorStart.svg",
          },
          {
            title: "Buscá una materia",
            desc: "Busca la materia que quieras, hay materias gratis y otras que requieren una cuenta premium, mirá como obtener una yendo a tu perfil.",
            imgLineSrc: "/assets/lineIndicatorStart.svg",
          },
          {
            title: "¡Listo!",
            desc: "Ahora que ya elegiste materia y formato de ejercicio seleccioná que parcial queres estudiar, eso es todo.",
            imgLineSrc: "/assets/lineIndicatorStart.svg",
          },
        ]}
      />
      <SelectExerciseDefault />
      {!user && (
        <Box>
          <Divider />
          <CTADefault
            title="Conoce nuevas funcionalidades creando una cuenta"
            btnText="crear cuenta gratis"
            ctaHandleButton={() => router.push("/register")}
            isLoading={false}
          />
        </Box>
      )}
      {user && user.role === "FREE_USER" && (
        <Box>
          <Divider />
          <CTADefault
            title="Potencia tu cuenta y accede a contenido exclusivo"
            btnText="más información"
            ctaHandleButton={() => router.push("/premium")}
            isLoading={false}
          />
        </Box>
      )}
    </Container>
  );
};
