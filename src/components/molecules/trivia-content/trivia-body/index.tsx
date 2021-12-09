import { Box, Heading, Text, Divider } from "@chakra-ui/react";

interface TriviaBodyProps {
  statement: string;
  title: string;
}

export const TriviaBody: React.FC<TriviaBodyProps> = ({ statement, title }) => {
  return (
    <Box>
      <Heading as="h2" variant="h2" textAlign="center" py={4}>
        {title.toUpperCase()}
      </Heading>
      <Text variant="lead1">{statement}</Text>
      <Divider orientation="horizontal" color="gray.400" my={4} />
    </Box>
  );
};
