import { SimpleGrid, Box } from "@chakra-ui/react";
import { StepCardWithLine } from "../../../molecules/step-card/withLine";

interface StepsWithLineProps {
  steps: {
    title: string;
    desc: string;
    imgLineSrc: string;
  }[];
}

export const StepsWithLine: React.FC<StepsWithLineProps> = ({ steps }) => {
  return (
    <Box my={16} border="1px" borderColor="primary" borderStyle="dashed">
      <SimpleGrid
        justifyItems="center"
        alignItems="center"
        p={4}
        columns={[1, 1, 3]}
        gap={5}
      >
        {steps.map(({ title, desc, imgLineSrc }) => {
          return (
            <StepCardWithLine
              title={title}
              desc={desc}
              imgLineSrc={imgLineSrc}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
