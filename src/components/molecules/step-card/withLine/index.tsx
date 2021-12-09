import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import Image from "next/image";

interface StepCardWithLineProps {
  title: string;
  desc: string;
  imgLineSrc: string;
}

export const StepCardWithLine: React.FC<StepCardWithLineProps> = ({
  title,
  desc,
  imgLineSrc,
}) => {
  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      p={6}
      h="100%"
      width="100%"
      bg="white"
    >
      <Flex py={6} justify="space-between" align="center">
        <InfoOutlineIcon w="32px" h="32px" />
        <Image
          alt="line indicator"
          src={imgLineSrc}
          width="164px"
          height="16px"
        />
      </Flex>
      <Box>
        <Heading as="h5" variant="h5">
          {title}
        </Heading>
        <Text variant="body1">{desc}</Text>
      </Box>
    </Flex>
  );
};
