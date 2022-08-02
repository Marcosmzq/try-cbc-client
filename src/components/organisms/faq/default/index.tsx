import {
  Flex,
  Heading,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

interface FAQSectionDefaultProps {}

export const FAQSectionDefault: React.FC<FAQSectionDefaultProps> = ({}) => {
  return (
    <Flex
      flexDir="column"
      minH="100vh"
      align="center"
      px={[4, 12]}
      py={[16, 24]}
    >
      <Heading as="h3" variant="h3" textAlign="center" my={6}>
        Frequently asked questions
      </Heading>
      <Text variant="subtitle1" textAlign="center">
        We hope dissipate all your dudes!
      </Text>

      <Accordion w={["100%", "70%"]} my={8}>
        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1">
                  Lorem ipsum dolor sit amet, consectetur
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={6}>
          <Heading as="h5" variant="h5">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text variant="subtitle1"> Section 1 title</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
