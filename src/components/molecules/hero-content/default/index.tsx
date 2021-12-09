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
    <Flex p={4} w={["100%", "540px"]} minH="356px">
      <Box>
        <Heading as="h1" variant="h1">
          {heroTitle}
        </Heading>
        <Text variant="lead1" my={4}>
          {heroDesc}
        </Text>
        <Button onClick={heroHandleBtn} size="lg" variant="primarySolid" my={4}>
          {heroBtnText}
        </Button>
      </Box>
    </Flex>
  );
};
