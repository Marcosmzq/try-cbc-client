import { CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface PrincingSectionDefaultProps {}

export const PrincingSectionDefault: React.FC<
  PrincingSectionDefaultProps
> = ({}) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      minH="100vh"
      px={[4, 8]}
      py={[8, 16]}
      m={[2, 4]}
    >
      <Flex flexDir={["column", "row"]} justify="space-between" align="center">
        <Flex flexDir="column">
          <Heading as="h3" variant="h3" textAlign="center" color="secondary">
            Everything you need to approbe for only $2999
          </Heading>
          <Text variant="subtitle2" my={[8, 4]}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            itaque explicabo hic
          </Text>
        </Flex>
        <Button
          px={8}
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variant="secondarySolid"
          size="lg"
          w={["100%", "auto"]}
        >
          Buy now!
        </Button>
      </Flex>
      <Divider border="1px" color="gray.200" my={8} />
      <SimpleGrid columns={[1, 1, 3]} gap={16} px={[2, 4, 8]} py={[4, 8]}>
        <Flex flexDir="column">
          <Text variant="badge" color="secondary">
            Everything you need
          </Text>
          <Heading as="h5" variant="h4" my={2}>
            All-in-one platform
          </Heading>
          <Text variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            harum quis tempora aspernatur, et iure beatae nihil esse adipisci
            error?
          </Text>
        </Flex>
        <UnorderedList spacing={3} py={12}>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
        </UnorderedList>
        <UnorderedList spacing={3} py={12}>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
        </UnorderedList>
      </SimpleGrid>
    </Box>
  );
};
