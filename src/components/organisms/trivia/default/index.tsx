import { Center, Button, useBoolean } from "@chakra-ui/react";
import { GetRandomTriviaByParamsQuery } from "../../../../graphql/generated/graphql";
import { TriviaAnswer } from "../../../molecules/trivia-content/trivia-answer";
import { TriviaBody } from "../../../molecules/trivia-content/trivia-body";
import { TriviaHeader } from "../../../molecules/trivia-content/trivia-header";

interface TriviaDefaultProps {
  triviaExercise: GetRandomTriviaByParamsQuery;
  refetchExercise: () => void;
}

export const TriviaDefault: React.FC<TriviaDefaultProps> = ({
  triviaExercise,
  refetchExercise,
}) => {
  const [active, setActive] = useBoolean(false);
  const { statement, feedback, answers } =
    triviaExercise.getRandomTriviaByParams;

  return (
    <>
      <TriviaHeader
        modalOpenBtnText="Instrucciones"
        modalHeader="Instrucciones sobre el ejercicio"
        modalText="Este es un ejercicio de trivia, lee el enunciado y luego elegi una respuesta de la lista de abajo, una vez que selecciones una, cambiarán de color, a rojo las incorrectas y a verde las correctas, luego podés continuar y hacer otro ejercicio."
        triviaExercise={triviaExercise}
      />
      <TriviaBody title={"enunciado"} statement={statement} />
      {active && feedback && (
        <TriviaBody title={"feedback"} statement={feedback} />
      )}
      <TriviaAnswer
        isTriviaActive={active}
        setActiveTrivia={() => setActive.on()}
        triviaAnswers={answers}
      />

      {active && (
        <Center my={6}>
          <Button
            onClick={() => {
              refetchExercise();
              setActive.off();
            }}
            w={["100%", "400px"]}
            variant="primarySolid"
          >
            Siguiente ejercicio
          </Button>
        </Center>
      )}
    </>
  );
};
