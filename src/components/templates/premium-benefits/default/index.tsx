import { useGetCheckoutInitPointMutation } from "../../../../graphql/generated/graphql";
import { CTADefault } from "../../../organisms/cta/default";
import { CTAWithHighlights } from "../../../organisms/cta/withHighlights";
import { FeatureMultipleSimple } from "../../../organisms/features/multiple/simple";
import { FeatureSingleWithImg } from "../../../organisms/features/single/withImg";
import { StepsWithNumber } from "../../../organisms/steps/withNumber";
import { useRouter } from "next/router";
import { CTAWithDesc } from "../../../organisms/cta/withDesc";
import { PrincingSectionDefault } from "../../../organisms/pricing/default";
import { Heading, VStack } from "@chakra-ui/react";
import { FeaturesMultiplesWithImg } from "../../../organisms/features/multiple/withImg";
import { FAQSectionDefault } from "../../../organisms/faq/default";

interface PremiumBenefitsInfoTemplateProps {
  userID: number;
}

export const PremiumBenefitsInfoTemplate: React.FC<
  PremiumBenefitsInfoTemplateProps
> = ({ userID }) => {
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
      <CTAWithDesc />

      <PrincingSectionDefault />
      <FeaturesMultiplesWithImg />
      <VStack spacing={8} px={[4, 12, 24]} py={[8, 16]}>
        <FeatureSingleWithImg
          imgAlt="Time management"
          imgSrc="/images/undraw_time_management.svg"
          featureTitle="Deja de perder tiempo estudiando de forma convencional"
          featureDesc="Deja de perder tiempo estudiando de forma convencion Deja de perder tiempo estudiando de forma convencion Deja de perder tiempo estudiando de forma convencional, con nuestra herramienta vas a aprender más en menos tiempo."
        />
        <FeatureSingleWithImg
          imgAlt="Learning while your are gaming"
          imgSrc="/images/undraw_gaming.svg"
          featureTitle="Hacé más dinámico tu aprendizaje"
          featureDesc="Con este nuevo enfoque hace más dinámico tu aprendizaje. ¡Jugá mientras aprendes!"
        />
      </VStack>
      <FAQSectionDefault />
      <CTAWithHighlights
        btnIsLoading={loading}
        title="Potencia tu cuenta y accede a ejercicios exclusivos por solo $500 ARS"
        btnText="Pagar con mercadopago"
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
    </>
  );
};
