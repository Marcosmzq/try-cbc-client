import { Flex, Heading, Button } from "@chakra-ui/react";
import { HighlightDefault } from "../../../molecules/highlight/default";

interface CTAWithHighlightsProps {
  ctaHandleButton: () => void;
  btnIsLoading: boolean;
  title: string;
  btnText: string;
  highlights: {
    text: string;
  }[];
}

export const CTAWithHighlights: React.FC<CTAWithHighlightsProps> = ({
  ctaHandleButton,
  title,
  btnText,
  highlights,
  btnIsLoading,
}) => {
  return (
    <Flex
      minH="466px"
      bg="primary"
      justify="center"
      align="center"
      flexDir="column"
      p={[4, 12]}
    >
      <Heading
        as="h2"
        variant="h2"
        w={["100%", "100%", "730px"]}
        textAlign="center"
      >
        {title}
      </Heading>
      <Button
        isLoading={btnIsLoading}
        onClick={ctaHandleButton}
        variant="primaryOutline"
        my={8}
        w={["100%", "auto"]}
      >
        {btnText}
      </Button>

      <Flex
        my={6}
        w="100%"
        flexDir={["column", "column", "row"]}
        justify="space-around"
        align={["flex-start", "center"]}
      >
        {highlights.map(({ text }) => (
          <HighlightDefault text={text} />
        ))}
      </Flex>
    </Flex>
  );
};
