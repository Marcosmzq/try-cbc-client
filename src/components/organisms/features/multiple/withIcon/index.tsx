import { SimpleGrid, Box, Heading, Button, Center } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { FeatureCardWithIcon } from "../../../../molecules/feature-card/withIcon";

interface FeatureMultipleWithIconProps {
  title: string;
  btnText: string;
  handleBtn: () => void;
  features: {
    title: string;
    desc: string;
  }[];
}

export const FeatureMultipleWithIcon: React.FC<FeatureMultipleWithIconProps> =
  ({ title, btnText, handleBtn, features }) => {
    return (
      <Box minH="100vh" px={[4, 16]} bg="black">
        <Heading
          as="h2"
          variant="h2"
          textAlign="center"
          color="white"
          py={[8, 14]}
        >
          {title}
        </Heading>

        <SimpleGrid
          justifyItems="center"
          columns={{ base: 1, lg: 2, xl: 3 }}
          gap={8}
        >
          {features.map(({ title, desc }) => {
            return <FeatureCardWithIcon title={title} desc={desc} />;
          })}
        </SimpleGrid>

        <Center py={12}>
          <Button
            colorScheme="black"
            variant="solid"
            rightIcon={<ArrowRightIcon />}
            onClick={handleBtn}
          >
            {btnText}
          </Button>
        </Center>
      </Box>
    );
  };
