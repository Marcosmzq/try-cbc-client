import { Flex, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderNavLinksProps {
  navLinkItems: {
    href: string;
    text: string;
    onClick: () => void;
  }[];
}

export const HeaderNavLinks: React.FC<HeaderNavLinksProps> = ({
  navLinkItems,
}) => {
  return (
    <Stack spacing={6}>
      {navLinkItems.map(({ href, text, onClick }) => {
        return (
          <Link passHref href={href}>
            <Button
              fontSize="2xl"
              fontWeight="semibold"
              colorScheme="black"
              variant="link"
              onClick={onClick}
            >
              {text}
            </Button>
          </Link>
        );
      })}
    </Stack>
  );
};
