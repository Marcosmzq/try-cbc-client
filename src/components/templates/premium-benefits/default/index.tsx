import { useGetCheckoutInitPointMutation } from "../../../../graphql/generated/graphql";
import { CTADefault } from "../../../organisms/cta/default";
import { CTAWithHighlights } from "../../../organisms/cta/withHighlights";
import { FeatureMultipleSimple } from "../../../organisms/features/multiple/simple";
import { FeatureSingleWithImg } from "../../../organisms/features/single/withImg";
import { StepsWithNumber } from "../../../organisms/steps/withNumber";
import { useRouter } from "next/router";

interface PremiumBenefitsInfoTemplateProps {
  userID: number;
}

export const PremiumBenefitsInfoTemplate: React.FC<PremiumBenefitsInfoTemplateProps> =
  ({ userID }) => {
    const router = useRouter();
    const [getCheckoutInitPointMutation, { data, loading }] =
      useGetCheckoutInitPointMutation({
        variables: {
          userID,
        },
        onCompleted(data) {
          if (data) router.push(data.getInitPoint);
        },
      });

    const handleInitPoint = async () => {
      await getCheckoutInitPointMutation();
      if (data) router.push(data.getInitPoint);
    };
    return (
      <>
        <CTAWithHighlights
          btnIsLoading={loading}
          title="Potencia tu cuenta y obten beneficios exclusivos, por solo $350 ARS."
          btnText="Comprar con mercadopago"
          ctaHandleButton={handleInitPoint}
          highlights={[
            {
              text: "Pagar es seguro con MercadoPago",
            },
            {
              text: "Único pago, premiun por siempre",
            },
            {
              text: "Precio accesible",
            },
          ]}
        />
        <FeatureMultipleSimple
          title="Beneficios."
          features={[
            {
              text: "Acceso a materias exclusivas",
            },
            {
              text: "Acesso anticipado a futuras actualizaciones",
            },
            {
              text: "Soporte disponible para atender tus dudas",
            },
          ]}
        />
        <FeatureSingleWithImg
          imgAlt="Time management"
          imgSrc="/images/undraw_time_management.svg"
          featureTitle="Ganá tiempo"
          featureDesc="Con la versión premiun vas a desbloquear más contenido para que estudies, así vas a poder usar nuestra plataforma para preparar más parciales y obtener todos los beneficios de esta herramienta en otras materias."
        />
        <FeatureSingleWithImg
          imgAlt="Learning while your are gaming"
          imgSrc="/images/undraw_gaming.svg"
          featureTitle="Hacé más dinámico tu aprendizaje"
          featureDesc="Con esta forma de estudiar más dinámica que la forma convencional, no te vas a cansar tan fácil de estudiar."
        />
        <StepsWithNumber
          title="¿Cómo hacerse premiun?"
          desc="Es muy fácil y rápido, también es seguro, los pagos se hacen a través de MercadoPago"
          steps={[
            {
              desc: "Apreta el boton de pagar y continuá el procedimiento en MercadoPago",
              title: "Generá un link de pago",
              number: 1,
            },
            {
              number: 2,
              title: "Espera la respuesta",
              desc: "Una vez que hayas hecho el pago, aguarda unos instantes a que verifiquemos el mismo.",
            },
            {
              number: 3,
              title: "¡Listo!, eso es todo",
              desc: "Si todo ha salido correctamente ya sos premiun",
            },
          ]}
        />

        <CTADefault
          title="Potencia tu cuenta ahora y aprovecha al máximo nuestra plataforma."
          btnText="comprar"
          isLoading={loading}
          ctaHandleButton={handleInitPoint}
        />
      </>
    );
  };
