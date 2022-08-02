import { CTADefault } from "../../../organisms/cta/default";
import { HeroWithImg } from "../../../organisms/hero/withImg";
import { useRouter } from "next/router";
import { FeatureMultipleSimpleWithImg } from "../../../organisms/features/multiple/simple/withImg";
import { CTAWithDesc } from "../../../organisms/cta/withDesc";
import { FAQSectionDefault } from "../../../organisms/faq/default";
import { FeaturesMultiplesWithImg } from "../../../organisms/features/multiple/withImg";

interface LandingPageDefaultTemplateProps {}

export const LandingPageDefaultTemplate: React.FC<
  LandingPageDefaultTemplateProps
> = ({}) => {
  const router = useRouter();
  return (
    <>
      <HeroWithImg
        heroBadgeText="Para estudiantes del CBC"
        heroTitleBeforeHighlightWord="Es dificil aprobar"
        heroHighlightTitleWord="estudiando solo"
        heroTitleAfterHighlightWord=", dejanos acompañarte."
        heroDesc="tryCBC es una heramienta para el CBC de la UBA que ofrece una innovadora forma en la que podés estudiar, logrando que en menos tiempo aprendas más."
        heroBtnText="empezar ya"
        heroHandleBtn={() => router.push("/home")}
        heroImgOnLgScreenSrc="/images/undraw_education.svg"
        heroImgAltOnLgScreenSrc="Web preview image"
        heroFirstImgAltOnSmScreenSrc="Web preview image"
        heroFirstImgOnSmScreenSrc="/images/undraw_education.svg"
        heroSecondImgOnSmScreenSrc="/images/undraw_education.svg"
        heroSecondImgAltOnSmScreenSrc="Web preview image"
      />
      <FeatureMultipleSimpleWithImg />
      <CTAWithDesc />
      <FeaturesMultiplesWithImg />
      <FAQSectionDefault />
      <CTADefault
        title="¡Empezá ahora mismo y optimizá tu tiempo de estudio al máximo!"
        btnText="crear cuenta"
        ctaHandleButton={() => router.push("/register")}
        isLoading={false}
      />
    </>
  );
};
