import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { FeatureCardSimpleWithImg } from "../../../../molecules/feature-card/withImg";

interface FeaturesMultiplesWithImgProps {}

export const FeaturesMultiplesWithImg: React.FC<
  FeaturesMultiplesWithImgProps
> = ({}) => {
  return (
    <>
      <Box px={[1, 4, 8]} py={12} my={12}>
        <Flex my={12} py={12} flexDir="column" justify="center" align="center">
          <Heading as="h3" variant="h1" my={2} textAlign="center">
            Why choose
            <Heading
              as="h3"
              variant="h1"
              d="inline-block"
              px={3}
              bg="yellow.200"
              rounded="full"
            >
              tryCBC?
            </Heading>
          </Heading>
          <Text textAlign="center" variant="subtitle1" my={[3, 4, 6]}>
            Well everything you need if you aren’t that picky about minor
            details like tax compliance.
          </Text>
        </Flex>

        <SimpleGrid columns={[1, 2, 2, 4]} gap={6}>
          <FeatureCardSimpleWithImg />
          <FeatureCardSimpleWithImg />
          <FeatureCardSimpleWithImg />
          <FeatureCardSimpleWithImg />
        </SimpleGrid>
      </Box>
    </>
  );
};
