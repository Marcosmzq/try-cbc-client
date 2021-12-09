import { CTADefault } from "../../../organisms/cta/default";
import { FeatureMultipleWithIcon } from "../../../organisms/features/multiple/withIcon";
import { HeroWithImg } from "../../../organisms/hero/withImg";
import { StepsWithNumber } from "../../../organisms/steps/withNumber";
import { useRouter } from "next/router";

interface LandingPageDefaultTemplateProps {}

export const LandingPageDefaultTemplate: React.FC<LandingPageDefaultTemplateProps> =
  ({}) => {
    const router = useRouter();
    return (
      <>
        <HeroWithImg
          heroTitle="¡Estudiá menos, aprende más!"
          heroDesc="tryCBC ofrece una innovadora forma en la que podés estudiar para los parciales de la UBA, logrando que en menos tiempo aprendas más."
          heroBtnText="Crear cuenta gratis"
          heroHandleBtn={() => router.push("/register")}
          heroImgSrc="/images/undraw_education.svg"
          heroImgAlt="Web preview image"
        />
        <StepsWithNumber
          title="¿Cómo funciona?"
          desc="Nuestro aporte está en recopilar parciales reales que fueron tomados en el CBC y a partir de ellos crear ejercicos con los que podés prácticar, optimizando tu tiempo de aprendizaje y estudio."
          steps={[
            {
              number: 1,
              title: "Para empezar crea una cuenta",
              desc: "Crear una cuenta es fácil y rápido,solo abrí el menu y busca la opción de crear cuenta.",
            },
            {
              number: 2,
              title: "Elegí que estudiar",
              desc: "Despues elegí que materia y que parcial queres estudiar",
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
          btnText="Empezar ahora gratis"
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
              title: "Variadad de materias",
              desc: "Tenemos la mayoria de materias del CBC disponibles para que estudies",
            },
            {
              title: "Distintos ejercicios",
              desc: "Podés elegir el formato de trivia o de flashcards asi tenés varios enfoques para abordar el estudio.",
            },
            {
              title: "Comodidad",
              desc: "Solo entrando a la web podés empezar a aprender, no importa donde te encuentres, podés estudiar.",
            },
            {
              title: "Empezar GRATIS",
              desc: "Podés probar y empezar a usar la app sin tener que pagar nada",
            },
          ]}
        />
        <CTADefault
          title="Empezá ahora mismo y optimizá tu tiempo de estudio al máximo"
          btnText="crear cuenta"
          ctaHandleButton={() => router.push("/register")}
          isLoading={false}
        />
      </>
    );
  };
