import { Box, SimpleGrid, Select } from "@chakra-ui/react";
import { SelectExerciseCard } from "../../../molecules/select-exercise-card/default";
import { useState } from "react";
import { SubjectList } from "../../../../graphql/generated/graphql";
import { PremiumSubjectList } from "../../../../utils/premiumSubjectList.enum";

interface SelectExerciseDefaultProps {}

export const SelectExerciseDefault: React.FC<SelectExerciseDefaultProps> =
  ({}) => {
    const [exFormat, setExFormat] = useState("");
    return (
      <Box my={16}>
        <Select
          my={6}
          variant="flushed"
          size="lg"
          placeholder="Seleccionar formato de ejercicio"
          isFullWidth
          value={exFormat}
          onChange={(e: any) => setExFormat(e.target.value)}
        >
          <option value="trivia">Trivia</option>
          <option value="flashcard">
            Flashcard (modo aún en desarrollo, puede tener errores)
          </option>
        </Select>

        <SimpleGrid columns={[1, 2, 2, 3]} gap={6}>
          {exFormat &&
            Object.keys(SubjectList).map((key) => {
              return (
                <SelectExerciseCard
                  isFreeContent={Object.keys(PremiumSubjectList).some(
                    (premiunSubject) => premiunSubject !== key.toUpperCase()
                  )}
                  subject={key.toUpperCase()}
                  desc={`Ejercicios con el formato de ${exFormat} de la materia ${key.toUpperCase()}. ${
                    key.toUpperCase() === "IPC"
                      ? "Hacete usuario premiun y desbloquea más de 250 ejercicios de esta materia."
                      : ""
                  }`}
                  exFormat={exFormat}
                />
              );
            })}
        </SimpleGrid>
      </Box>
    );
  };
