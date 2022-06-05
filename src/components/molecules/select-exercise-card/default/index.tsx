import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface SelectExerciseCardProps {
  title: string;
  desc: string;
  isFreeContent: boolean;
  btnText: string;
  btnOnClick: () => void;
}

export const SelectExerciseCard: React.FC<SelectExerciseCardProps> = ({
  title,
  desc,
  isFreeContent,
  btnText,
  btnOnClick,
}) => {
  return (
    <Box p={8} w="100%">
      <Text variant="badge">{isFreeContent ? "GRATIS" : "PREMIUN"}</Text>
      <Box py={4}>
        <Heading as="h5" variant="h5">
          {title}
        </Heading>
        <Text>{desc}</Text>
      </Box>
      <Button
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => btnOnClick()}
        rightIcon={<ArrowRightIcon />}
        color="primary"
        variant="link"
      >
        {btnText}
      </Button>
    </Box>
  );
};
