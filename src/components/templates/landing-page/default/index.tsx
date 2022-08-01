import { CTADefault } from "../../../organisms/cta/default";
import { FeatureMultipleWithIcon } from "../../../organisms/features/multiple/withIcon";
import { HeroWithImg } from "../../../organisms/hero/withImg";
import { StepsWithNumber } from "../../../organisms/steps/withNumber";
import { useRouter } from "next/router";

interface LandingPageDefaultTemplateProps {}

export const LandingPageDefaultTemplate: React.FC<
  LandingPageDefaultTemplateProps
> = ({}) => {
  const router = useRouter();
  return (
    <>
      <HeroWithImg
        heroTitleBeforeHighlightWord="Nothing great is"
        heroHighlightTitleWord="made alone"
        heroTitleAfterHighlightWord="let us accompany you."
        heroDesc="tryCBC es una heramienta para el CBC de la UBA que ofrece una innovadora forma en la que podés estudiar, logrando que en menos tiempo aprendas más."
        heroBtnText="empezar ya"
        heroHandleBtn={() => router.push("/home")}
        heroImgSrc="/images/undraw_education.svg"
        heroImgAlt="Web preview image"
        showHeroInRow={false}
      />
      <StepsWithNumber
        title="¿Cómo funciona?"
        desc="Tenemos ejercicios innovadores basados en exámenes reales que van a potenciar tu tiempo de estudio."
        steps={[
          {
            number: 1,
            title: "Crea una cuenta o accede como invitado",
            desc: "Crear una cuenta es fácil y rápido,solo abrí el menú y buscá la opción de crear cuenta.",
          },
          {
            number: 2,
            title: "Elegí que estudiar",
            desc: "Después elegí que materia y que formato de ejercicios quieres usar.",
          },
          {
            number: 3,
            title: "¡Listo eso es todo!",
            desc: "Así de fácil es estudiar acá, ahora explorá nuestra app y aprobá más fácil.",
          },
        ]}
      />
      <FeatureMultipleWithIcon
        title="Nuestros beneficios"
        btnText="Crear cuenta gratis"
        handleBtn={() => router.push("/register")}
        features={[
          {
            title: "Nueva forma de aprender",
            desc: "Descubrí una forma más dinámica y entretenida de estudiar",
          },
          {
            title: "Enfocado en el CBC",
            desc: "Todos los ejercicios están enfocados para parciales del CBC",
          },
          {
            title: "Dinamismo",
            desc: "Estudia de una forma más dinámica con nuestra herramienta.",
          },
          {
            title: "Distintos formatos",
            desc: "Podés elegir el formato de trivia o de flashcards asi tenés varios enfoques para abordar el estudio.",
          },
          {
            title: "Comodidad",
            desc: "Solo entrando a la web podés empezar a aprender, no importa donde te encuentres, podés estudiar.",
          },
          {
            title: "Empezar GRATIS",
            desc: "Podés probar y empezar a usar la app sin tener que pagar nada.",
          },
        ]}
      />
      <CTADefault
        title="¡Empezá ahora mismo y optimizá tu tiempo de estudio al máximo!"
        btnText="crear cuenta"
        ctaHandleButton={() => router.push("/register")}
        isLoading={false}
      />
    </>
  );
};
