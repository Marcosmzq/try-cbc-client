import { Flex, Heading, Text } from "@chakra-ui/react";

interface SectionHeaderDefaultProps {
  title: string;
  desc: string;
}

export const SectionHeaderDefault: React.FC<SectionHeaderDefaultProps> = ({
  title,
  desc,
}) => {
  return (
    <Flex px={[4, 16]} py={4} flexDir="column" justify="center" align="center">
      <Heading textAlign="center" as="h2" variant="h2" my={2}>
        {title}
      </Heading>
      <Text textAlign="center" variant="lead1">
        {desc}
      </Text>
    </Flex>
  );
};
