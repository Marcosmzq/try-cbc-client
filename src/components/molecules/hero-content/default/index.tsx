import { Flex, Text, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@chakra-ui/icons";

interface HeroContentDefaultProps {
  heroBadgeText: string;
  heroTitleBeforeHighlightWord: string;
  heroHighlightTitleWord: string;
  heroTitleAfterHighlightWord: string;
  heroDesc: string;
  heroBtnText: string;
  heroHandleBtn: () => void;
}

export const HeroContentDefault: React.FC<HeroContentDefaultProps> = ({
  heroBadgeText,
  heroTitleBeforeHighlightWord,
  heroHighlightTitleWord,
  heroTitleAfterHighlightWord,
  heroDesc,
  heroBtnText,
  heroHandleBtn,
}) => {
  return (
    <Flex
      w={["100%", "70%"]}
      minH="356px"
      flexDir="column"
      justify="center"
      align="center"
      mb={12}
    >
      <Text variant="badgeWithBg">{heroBadgeText}</Text>
      <Heading p={1} textAlign="center" as="h1" variant="h1">
        {heroTitleBeforeHighlightWord}
        <Heading
          as="h1"
          variant="h1"
          display="inline-block"
          bg="yellow.200"
          rounded="full"
          px={2}
          py={1}
        >
          {heroHighlightTitleWord}
        </Heading>
        {heroTitleAfterHighlightWord}
      </Heading>
      <Text
        textAlign="center"
        variant="subtitle2"
        p={2}
        my={4}
        w={["100%", "60ch"]}
        wordBreak="break-word"
      >
        {heroDesc}
      </Text>
      <Button
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={heroHandleBtn}
        size="lg"
        variant="primarySolid"
        rightIcon={<ArrowRightIcon />}
      >
        {heroBtnText}
      </Button>
    </Flex>
  );
};
