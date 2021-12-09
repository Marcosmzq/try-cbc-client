import { Box, Heading, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface FeatureCardWithIconProps {
  title: string;
  desc: string;
}

export const FeatureCardWithIcon: React.FC<FeatureCardWithIconProps> = ({
  title,
  desc,
}) => {
  return (
    <Box
      p={6}
      borderRadius="8px"
      width={["100%", "350px"]}
      minH="300px"
      bg="white"
    >
      <StarIcon w="32px" h="32px" />

      <Box my={6}>
        <Heading as="h5" variant="h5">
          {title}
        </Heading>
        <Text variant="body1" py={4}>
          {desc}
        </Text>
      </Box>
    </Box>
  );
};
