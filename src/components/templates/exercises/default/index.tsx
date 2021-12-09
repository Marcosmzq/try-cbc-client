import { Container } from "@chakra-ui/react";
import { GetRandomTriviaBySubjectQuery } from "../../../../graphql/generated/graphql";
import { TriviaDefault } from "../../../organisms/trivia/default";
import { TriviaFlashcardDefault } from "../../../organisms/trivia/flashcard/default";

interface ExerciseDefaultTemplateProps {
  triviaExercise: GetRandomTriviaBySubjectQuery;
  refetchExercise: () => void;
  format: string;
}

export const ExerciseDefaultTemplate: React.FC<ExerciseDefaultTemplateProps> =
  ({ triviaExercise, refetchExercise, format }) => {
    return (
      <Container my={14} maxW="container.lg">
        {format === "trivia" ? (
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
