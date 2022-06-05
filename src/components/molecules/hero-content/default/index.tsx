import { Flex, Text, Heading, Button, Box } from "@chakra-ui/react";

interface HeroContentDefaultProps {
  heroTitle: string;
  heroDesc: string;
  heroBtnText: string;
  heroHandleBtn: () => void;
}

export const HeroContentDefault: React.FC<HeroContentDefaultProps> = ({
  heroTitle,
  heroDesc,
  heroBtnText,
  heroHandleBtn,
}) => {
  return (
    <Flex w={["100%", "70%"]} minH="356px">
      <Box>
        <Heading p={1} textAlign={["start", "center"]} as="h1" variant="h1">
          {heroTitle}
        </Heading>
        <Text p={2} variant="lead1" my={4}>
          {heroDesc}
        </Text>
        <Button
          isFullWidth
          onClick={heroHandleBtn}
          size="lg"
          variant="primarySolid"
          my={4}
          p={1}
        >
          {heroBtnText}
        </Button>
      </Box>
    </Flex>
  );
};
