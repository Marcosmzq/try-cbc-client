import { Box, Heading } from "@chakra-ui/react";
import { SelectExerciseDefault } from "../../../../select-exercise/default";

interface CoursesPracticeSectionDefaultProps {}

export const CoursesPracticeSectionDefault: React.FC<
  CoursesPracticeSectionDefaultProps
> = ({}) => {
  return (
    <Box>
      <Heading
        as="h4"
        variant="h4"
        bg="yellow.200"
        p={4}
        my={4}
        rounded="full"
        textAlign="center"
      >
        PRACTICAR CON EJERCICIOS
      </Heading>
      <SelectExerciseDefault />
    </Box>
  );
};
