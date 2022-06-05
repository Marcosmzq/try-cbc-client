import { Center, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface CTADefaultProps {
  ctaHandleButton: () => void;
  isLoading: boolean;
  btnText: string;
  title: string;
}

export const CTADefault: React.FC<CTADefaultProps> = ({
  ctaHandleButton,
  isLoading,
  btnText,
  title,
}) => {
  return (
    <Center flexDir="column" px={[6, 16]} py={6} my={[16, 24]}>
      <Heading textAlign={["start", "center"]} as="h2" variant="h2" my={8}>
        {title}
      </Heading>
      <Button
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        w={["100%", "auto"]}
        isLoading={isLoading}
        onClick={ctaHandleButton}
        variant="primarySolid"
      >
        {btnText}
      </Button>
    </Center>
  );
};
