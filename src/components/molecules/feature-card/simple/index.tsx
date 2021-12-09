import { Box, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface FeatureCardSimpleProps {
  text: string;
}

export const FeatureCardSimple: React.FC<FeatureCardSimpleProps> = ({
  text,
}) => {
  return (
    <Box p={6} w="80%" boxShadow="lg">
      <Heading as="h5" variant="h5" my={6}>
        {text}
      </Heading>
      <StarIcon w="32px" h="32px" />
    </Box>
  );
};
