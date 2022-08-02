import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { SectionHeaderDefault } from "../../../../../molecules/section-header/default";
import { FeatureSingleWithImg } from "../../../single/withImg";

interface FeatureMultipleSimpleWithImgProps {}

export const FeatureMultipleSimpleWithImg: React.FC<
  FeatureMultipleSimpleWithImgProps
> = ({}) => {
  return (
    <Box px={[1, 4, 8]} py={12} my={12}>
      <Flex my={12} py={12} flexDir="column" justify="center" align="center">
        <Heading as="h3" variant="h1" my={4} textAlign="center">
          Everything you need to run
          <Heading
            as="h3"
            variant="h1"
            d="inline-block"
            px={2}
            bg="yellow.200"
            rounded="full"
          >
            your books.
          </Heading>
        </Heading>
        <Text textAlign="center" variant="subtitle1" my={[4, 6, 8]}>
          Well everything you need if you aren’t that picky about minor details
          like tax compliance.
        </Text>
      </Flex>

      <VStack w="100%" spacing={48}>
        <FeatureSingleWithImg
          featureTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imgSrc="/images/undraw_education.svg"
          imgAlt="lorem"
          featureDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea soluta perferendis voluptate, harum ipsam neque. Sunt aut, officia aliquid quod illo asperiores qui placeat error unde quasi, nobis atque."
        />
        <FeatureSingleWithImg
          featureTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imgSrc="/images/undraw_education.svg"
          imgAlt="lorem"
          featureDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea soluta perferendis voluptate, harum ipsam neque. Sunt aut, officia aliquid quod illo asperiores qui placeat error unde quasi, nobis atque."
        />
        <FeatureSingleWithImg
          featureTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imgSrc="/images/undraw_education.svg"
          imgAlt="lorem"
          featureDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea soluta perferendis voluptate, harum ipsam neque. Sunt aut, officia aliquid quod illo asperiores qui placeat error unde quasi, nobis atque."
        />
      </VStack>
    </Box>
  );
};
