import { Box, Heading, Text } from "@chakra-ui/react";

interface FeatureCardWithIconProps {
  title: string;
  desc: string;
}

export const FeatureCardWithIcon: React.FC<FeatureCardWithIconProps> = ({
  title,
  desc,
}) => {
  return (
    <Box my={6}>
      <Heading as="h5" variant="h3" textAlign={["center", "start"]}>
        {title}
      </Heading>
      <Text
        variant="subtitle2"
        textAlign={["center", "start"]}
        py={4}
        w={["100%", "40ch"]}
      >
        {desc}
      </Text>
    </Box>
  );
};
