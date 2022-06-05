import { Box, Button, Center, useBoolean, Heading } from "@chakra-ui/react";
import { GetRandomTriviaByParamsQuery } from "../../../../../graphql/generated/graphql";
import { TriviaAnswer } from "../../../../molecules/trivia-content/trivia-answer";
import { TriviaBody } from "../../../../molecules/trivia-content/trivia-body";
import { TriviaHeader } from "../../../../molecules/trivia-content/trivia-header";

interface TriviaFlashcardDefaultProps {
  triviaExercise: GetRandomTriviaByParamsQuery;
  refetchExercise: () => void;
}

export const TriviaFlashcardDefault: React.FC<TriviaFlashcardDefaultProps> = ({
  triviaExercise,
  refetchExercise,
}) => {
  const { statement, feedback, answers } =
    triviaExercise.getRandomTriviaByParams;
  const [showAnswer, setShowAnswer] = useBoolean(false);
  return (
    <Box>
      <TriviaHeader
        modalOpenBtnText="Instrucciones"
        modalHeader="Instrucciones sobre el ejercicio"
        modalText="Este es un ejercico de flashcard, para realizarlo debes leer el enunciado y pensar en una respuesta para este, luego podés ver las repuesta y mirar si lo que pensaste era correcto o no."
        triviaExercise={triviaExercise}
      />
      <TriviaBody title={"enunciado"} statement={statement} />
      {showAnswer && feedback && (
        <TriviaBody title={"feedback"} statement={feedback} />
      )}
      {showAnswer && (
        <Box>
          <Heading as="h3" variant="h3" textAlign="center" my={4}>
            Respuesta correcta
          </Heading>
          <TriviaAnswer
            isTriviaActive={showAnswer}
            setActiveTrivia={() => setShowAnswer.on()}
            triviaAnswers={answers}
          />
        </Box>
      )}
      <Center>
        {showAnswer && (
          <Button
            onClick={() => {
              setShowAnswer.off();
              refetchExercise();
            }}
            variant="secondarySolid"
            w="md"
          >
            Siguiente ejercicio
          </Button>
        )}
        {showAnswer === false && (
          <Button
            onClick={() => setShowAnswer.on()}
            variant="secondarySolid"
            w="md"
          >
            Ver respuesta
          </Button>
        )}
      </Center>
    </Box>
  );
};
