import { Flex, Image, Text, Box, Heading } from "@chakra-ui/react";

interface FeatureCardSimpleWithImgProps {}

export const FeatureCardSimpleWithImg: React.FC<
  FeatureCardSimpleWithImgProps
> = ({}) => {
  return (
    <Flex flexDir="column" border="1px" borderColor="gray.200" rounded="3xl">
      <Image
        boxSize="250px"
        src="/images/undraw_education.svg"
        alt="test"
        objectFit="contain"
        objectPosition="center"
      />
      <Flex
        flexDir="column"
        p={8}
        justify="center"
        bg="gray.100"
        roundedBottom="3xl"
      >
        <Heading as="h5" variant="h5" my={2}>
          Begginer friendly
        </Heading>
        <Text variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam
          alias magni totam. Reiciendis tempore laudantium amet mollitia fugit
          vitae?
        </Text>
      </Flex>
    </Flex>
  );
};
