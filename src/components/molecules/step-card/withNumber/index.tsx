import { Flex, Heading, Text } from "@chakra-ui/react";

interface StepCardWithNumberProps {
  number: number;
  title: string;
  desc: string;
}

export const StepCardWithNumber: React.FC<StepCardWithNumberProps> = ({
  number,
  title,
  desc,
}) => {
  return (
    <Flex
      my={2}
      h="100%"
      w="100%"
      flexDir="column"
      justify="center"
      align="center"
    >
      <Heading textAlign="center" color="gray.200" as="h1" variant="h1">
        {number}
      </Heading>
      <Text my={2} textAlign="center" variant="subtitle2">
        {title}
      </Text>
      <Text textAlign="center" variant="body1">
        {desc}
      </Text>
    </Flex>
  );
};
