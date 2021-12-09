import { Box, SimpleGrid } from "@chakra-ui/react";
import { SectionHeaderDefault } from "../../../molecules/section-header/default";
import { StepCardWithNumber } from "../../../molecules/step-card/withNumber";

interface StepsWithNumberProps {
  title: string;
  desc: string;
  steps: {
    number: number;
    title: string;
    desc: string;
  }[];
}

export const StepsWithNumber: React.FC<StepsWithNumberProps> = ({
  title,
  desc,
  steps,
}) => {
  return (
    <Box p={6} my={14}>
      <SectionHeaderDefault title={title} desc={desc} />
      <SimpleGrid
        alignItems="center"
        justifyItems="center"
        my={8}
        columns={[1, 3]}
        gap={10}
        p={6}
      >
        {steps.map(({ number, title, desc }) => {
          return (
            <StepCardWithNumber number={number} title={title} desc={desc} />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
