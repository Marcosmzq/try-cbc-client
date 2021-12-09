import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface SelectExerciseCardProps {
  subject: string;
  desc: string;
  exFormat: string;
  isFreeContent: boolean;
}

export const SelectExerciseCard: React.FC<SelectExerciseCardProps> = ({
  subject,
  desc,
  exFormat,
  isFreeContent,
}) => {
  const router = useRouter();
  return (
    <Box p={8} w="100%">
      <Text variant="badge">{isFreeContent ? "GRATIS" : "PREMIUN"}</Text>
      <Box py={4}>
        <Heading as="h5" variant="h5">
          {subject}
        </Heading>
        <Text>{desc}</Text>
      </Box>
      <Button
        onClick={() =>
          router.push(`/exercise?subject=${subject}&format=${exFormat}`)
        }
        rightIcon={<ArrowRightIcon />}
        color="primary"
        variant="link"
      >
        empezar a aprender
      </Button>
    </Box>
  );
};
