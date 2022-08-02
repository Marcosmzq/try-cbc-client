import { Center, Divider, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import { TriviaType } from "../../../../../graphql/generated/graphql";
import { SelectExerciseCard } from "../../../../molecules/select-exercise-card/default";

interface SelectExerciseFormatProps {
  setExerciseFormat: (value: string) => void;
}

export const SelectExerciseFormat: React.FC<SelectExerciseFormatProps> = ({
  setExerciseFormat,
}) => {
  return (
    <Box p={[8, 12]} border="1px" borderColor="gray.200">
      <Center flexDir="column">
        <Heading as="h2" variant="h2" my={6}>
          Para comenzar a practicar con ejercicios
        </Heading>
        <Heading as="h3" variant="h3">
          Selecciona un formato para los ejercicios
        </Heading>
      </Center>
      <Divider border="1px" borderColor="gray.200" my={4} />
      <SimpleGrid p={4} columns={[1, 2]} gap={4}>
        <SelectExerciseCard
          isFreeContent={true}
          title="TRIVIA"
          desc="El formato de trivia es muy simple y eficiente. Es un ejercicio con una pregunta y varias opciones de respuesta. ¡Elegi la correcta!"
          btnText="Seleccionar"
          btnOnClick={() => {
            setExerciseFormat(TriviaType.Trivia);
          }}
        />
        <SelectExerciseCard
          btnOnClick={() => setExerciseFormat(TriviaType.Flashcard)}
          btnText="Seleccionar"
          isFreeContent={true}
          title="FLASHCARD"
          desc="Entrena tu memoria en este formato. Vas a ver una tarjeta con una pregunta y tenes que pensar la respuesta, cuando este listo voltea la tarjeta y observa la respuesta correcta. ¡Intenta pensar la respuesta correcta!"
        />
      </SimpleGrid>
    </Box>
  );
};
