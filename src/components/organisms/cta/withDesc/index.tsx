import { Center, Heading, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface CTAWithDescProps {}

export const CTAWithDesc: React.FC<CTAWithDescProps> = ({}) => {
  return (
    <>
      <Center bg="secondary" flexDir="column" px={[8, 12]} py={[16, 24, 32]}>
        <Heading
          textAlign="center"
          as="h3"
          variant="h2"
          my={8}
          color="white"
          w={["100%", "20ch"]}
        >
          Boost your productivity, start use workflow today.
        </Heading>
        <Text
          variant="body1"
          color="white"
          w={["100%", "60ch"]}
          textAlign="center"
        >
          It’s time to take control of your books. Buy our software so you can
          feel like you’re doing something productive.
        </Text>
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          w={["100%", "auto"]}
          variant="secondaryOutline"
          size="lg"
          my={8}
        >
          Singup free now!
        </Button>
      </Center>
    </>
  );
};
