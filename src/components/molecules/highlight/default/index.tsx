import { Text, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface HighlightDefaultProps {
  text: string;
}

export const HighlightDefault: React.FC<HighlightDefaultProps> = ({ text }) => {
  return (
    <Flex align="center" justify="center">
      <StarIcon w="18px" h="26px" color="black" />
      <Text px={4} variant="subtitle2" color="white">
        {text}
      </Text>
    </Flex>
  );
};
