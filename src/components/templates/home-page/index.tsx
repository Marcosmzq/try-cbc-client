import { Container, VStack } from "@chakra-ui/react";
import { SectionHeaderDefault } from "../../molecules/section-header/default";
import { SelectExerciseDefault } from "../../organisms/select-exercise/default";
import { StepsWithLine } from "../../organisms/steps/withLine";
import { useContext } from "react";
import { AuthContext } from "../../../context/userAuth";
import { AlertDefault } from "../../molecules/alert/default";

interface HomePageTemplateProps {}

export const HomePageTemplate: React.FC<HomePageTemplateProps> = ({}) => {
  const { user } = useContext(AuthContext);
  return (
    <Container my={16} maxW="container.lg">
      <SectionHeaderDefault
        title={`Bienvenido ${user && "@" && user.username}`}
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
      <VStack spacing={4}>
        <AlertDefault
          alertStatus="info"
          text="Estamos trabajando para agregar más materias y más contenido. Recien está empezando este projecto. :D"
        />
        <AlertDefault
          alertStatus="info"
          text="Podés probar la idea detrás de esta plataforma con las materias gratis, estas tienen poco contenido ya que por ahora son para que puedas ver la idea detrás de esta plataforma, luego le agregaremos contenido. Para acceder a las demás materias tenes que hacerte premiun, de esta forma desbloqueas ese contenido exclusivo y nos apoyas para que siga creciendo la plataforma."
        />
      </VStack>

      <SelectExerciseDefault />
    </Container>
  );
};
