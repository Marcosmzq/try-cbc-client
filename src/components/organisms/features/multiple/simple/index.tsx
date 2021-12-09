import { SimpleGrid, Heading, Box } from "@chakra-ui/react";
import { FeatureCardSimple } from "../../../../molecules/feature-card/simple";

interface FeatureMultipleSimpleProps {
  title: string;
  features: {
    text: string;
  }[];
}

export const FeatureMultipleSimple: React.FC<FeatureMultipleSimpleProps> = ({
  title,
  features,
}) => {
  return (
    <Box px={[4, 16]}>
      <Heading as="h2" variant="h2" my={8}>
        {title}
      </Heading>

      <SimpleGrid justifyItems="center" gap={10} columns={[1, 1, 2, 3]}>
        {features.map(({ text }) => (
          <FeatureCardSimple text={text} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
