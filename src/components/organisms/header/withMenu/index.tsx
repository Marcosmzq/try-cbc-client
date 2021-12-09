import { Flex, IconButton, useBoolean } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HeaderLogo } from "../../../molecules/header-item/HeaderLogo";
import { ActiveHeaderMenuDefault } from "../../../molecules/active-header-menu/default";

interface HeaderWithMenuProps {}

export const HeaderWithMenu: React.FC<HeaderWithMenuProps> = () => {
  const [activeMenu, setActiveMenu] = useBoolean(false);
  return (
    <>
      <Flex
        borderBottom="1px"
        borderColor="gray.200"
        align="center"
        justify="space-between"
        py={6}
        px={[8, 16]}
      >
        <HeaderLogo />
        <IconButton
          colorScheme="black"
          variant="outline"
          size="lg"
          aria-label="Open menu options"
          icon={activeMenu ? <CloseIcon /> : <HamburgerIcon />}
          onClick={setActiveMenu.toggle}
        />
      </Flex>
      {activeMenu && <ActiveHeaderMenuDefault closeMenu={setActiveMenu.off} />}
    </>
  );
};
