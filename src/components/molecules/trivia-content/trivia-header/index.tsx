import { Flex, HStack, Text, Divider } from "@chakra-ui/react";
import {
  ExamList,
  GetRandomTriviaBySubjectQuery,
} from "../../../../graphql/generated/graphql";
import { DialogModal } from "../../modal/dialog";

interface TriviaHeaderProps {
  triviaExercise: GetRandomTriviaBySubjectQuery;
  modalText: string;
  modalOpenBtnText: string;
  modalHeader: string;
}

export const TriviaHeader: React.FC<TriviaHeaderProps> = ({
  triviaExercise,
  modalText,
  modalOpenBtnText,
  modalHeader,
}) => {
  return (
    <>
      <Divider orientation="horizontal" color="gray.400" my={4} />
      <Flex flexDir={["column", "row"]} align="center" justify="space-between">
        <HStack spacing={4}>
          <Text variant="badge">
            {triviaExercise.getRandomTriviaBySubject.subject}
          </Text>
          {/*  <Text variant="badge">
            {triviaExercise.getRandomTriviaByParams.exam === ExamList.First &&
              "primer parcial"}
            {triviaExercise.getRandomTriviaByParams.exam === ExamList.Second &&
              "segundo parcial"}
            {triviaExercise.getRandomTriviaByParams.exam === ExamList.Final &&
              "parcial final"}
          </Text> */}
        </HStack>
        <DialogModal
          buttonText={modalOpenBtnText}
          modalBody={modalText}
          modalHeader={modalHeader}
        />
      </Flex>
      <Divider orientation="horizontal" color="gray.400" my={4} />
    </>
  );
};
