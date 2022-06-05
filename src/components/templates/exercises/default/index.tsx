import { Container } from "@chakra-ui/react";
import { GetRandomTriviaByParamsQuery } from "../../../../graphql/generated/graphql";
import { TriviaDefault } from "../../../organisms/trivia/default";
import { TriviaFlashcardDefault } from "../../../organisms/trivia/flashcard/default";

interface ExerciseDefaultTemplateProps {
  triviaExercise: GetRandomTriviaByParamsQuery;
  refetchExercise: () => void;
  format: string;
}

export const ExerciseDefaultTemplate: React.FC<
  ExerciseDefaultTemplateProps
> = ({ triviaExercise, refetchExercise, format }) => {
  return (
    <Container my={14} maxW="container.lg">
      {format === "TRIVIA" ? (
        <TriviaDefault
          triviaExercise={triviaExercise}
          refetchExercise={refetchExercise}
        />
      ) : (
        <TriviaFlashcardDefault
          triviaExercise={triviaExercise}
          refetchExercise={refetchExercise}
        />
      )}
    </Container>
  );
};
