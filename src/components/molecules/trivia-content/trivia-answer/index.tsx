import { VStack, Box, Text, Divider } from "@chakra-ui/react";
import { TriviaAnswerSnippetFragment } from "../../../../graphql/generated/graphql";

interface TriviaAnswerProps {
  triviaAnswers: TriviaAnswerSnippetFragment[];
  isTriviaActive: boolean;
  setActiveTrivia: () => void;
}

export const TriviaAnswer: React.FC<TriviaAnswerProps> = ({
  triviaAnswers,
  isTriviaActive,
  setActiveTrivia,
}) => {
  return (
    <Box w="100%">
      <VStack spacing={4} w="100%">
        {triviaAnswers.map(({ statement, isTrue, id }) => {
          return (
            <Text
              key={id}
              textAlign="center"
              cursor="pointer"
              variant="lead1"
              onClick={setActiveTrivia}
              color={isTriviaActive ? "white" : "black"}
              bg={
                isTriviaActive ? (isTrue ? "green.500" : "red.500") : "gray.100"
              }
              p={3}
              w="100%"
            >
              {statement}
            </Text>
          );
        })}
      </VStack>

      <Divider orientation="horizontal" color="gray.400" my={4} />
    </Box>
  );
};
