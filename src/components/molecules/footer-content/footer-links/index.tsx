import { Flex, Button } from "@chakra-ui/react";

interface FooterLinksProps {}

export const FooterLinks: React.FC<FooterLinksProps> = ({}) => {
  return (
    <Flex my={6} align="center" justify="space-around" w={["100%", "75%"]}>
      <Button variant="link" color="white">
        About us
      </Button>
      <Button variant="link" color="white">
        Pricing
      </Button>
      <Button variant="link" color="white">
        Contact
      </Button>
    </Flex>
  );
};
