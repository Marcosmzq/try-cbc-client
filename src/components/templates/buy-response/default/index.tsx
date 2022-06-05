import { Container } from "@chakra-ui/react";
import { SectionHeaderDefault } from "../../../molecules/section-header/default";
import { StepsWithLine } from "../../../organisms/steps/withLine";
import { UpgradeAccountDefault } from "../../../organisms/upgrade-account/default";

interface BuyResponseDefaultTemplateProps {
  userID: number;
}

export const BuyResponseDefaultTemplate: React.FC<
  BuyResponseDefaultTemplateProps
> = ({ userID }) => {
  return (
    <Container minH="50vh" my={14} maxW="container.lg">
      <SectionHeaderDefault
        title="Gracias por apoyar este proyecto."
        desc="Muchas gracias por apoyar el proyecto comprando una cuenta premiun, danos unos momentos para verificar que el pago este aprobado y que todo haya salido bien, abajo te damos instrucciones sobre como seguir."
      />
      <StepsWithLine
        steps={[
          {
            title: "Verificación",
            desc: "Vamos a verificar que el pago este aprobado, danos unos instantes.",
            imgLineSrc: "/assets/lineIndicatorStart.svg",
          },
          {
            title: "Acreditacion",
            desc: "Si todo está en orden vamos a actualizar tu cuenta y hacerla premiun.",
            imgLineSrc: "/assets/lineIndicatorStart.svg",
          },
          {
            title: "Actualización",
            desc: "Cerra sesión y ingresa de nuevo para ver reflejado los cambios. Si algo salió mal envianos un mail. trycbc@gmail.com",
            imgLineSrc: "/assets/lineIndicatorStart.svg",
          },
        ]}
      />
      <UpgradeAccountDefault userID={userID} />
    </Container>
  );
};
