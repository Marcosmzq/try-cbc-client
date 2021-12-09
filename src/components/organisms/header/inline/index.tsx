import { Flex } from "@chakra-ui/react";
import { HeaderCTA } from "../../../molecules/header-item/HeaderCTA";
import { HeaderLogo } from "../../../molecules/header-item/HeaderLogo";
import { HeaderNavLinks } from "../../../molecules/header-item/HeaderNavLinks";

interface HeaderInlineProps {}

export const HeaderInline: React.FC<HeaderInlineProps> = () => {
  return (
    <Flex
      borderBottom="1px"
      borderColor="gray.200"
      align="center"
      justify="space-between"
      py={6}
      px={[2, 16]}
    >
      <HeaderNavLinks />
      <HeaderLogo />
      <HeaderCTA />
    </Flex>
  );
};
