import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";

interface DisplayGraphQLErrorDefaultProps {
  mutationErrors: any[];
}

export const DisplayGraphQLErrorDefault: React.FC<DisplayGraphQLErrorDefaultProps> =
  ({ mutationErrors }) => {
    return (
      <>
        {mutationErrors.length >= 1 && (
          <Box my={3} p={4}>
            <Text variant="lead1" color="primary">
              ¡Ups! algo ha fallado, han ocurrido algunos errores
            </Text>
            <UnorderedList>
              {mutationErrors &&
                mutationErrors.map((err) => (
                  <ListItem key={err}>{err}</ListItem>
                ))}
            </UnorderedList>
          </Box>
        )}
      </>
    );
  };
