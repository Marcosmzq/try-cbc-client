import { VStack, Button } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderCTAProps {
  headerCtaItems: {
    href: string;
    text: string;
    btnVariant: string;
    onClick: () => void;
  }[];
}

export const HeaderCTA: React.FC<HeaderCTAProps> = ({ headerCtaItems }) => {
  return (
    <VStack spacing={6}>
      {headerCtaItems.map(({ href, text, btnVariant, onClick }) => {
        return (
          <Link passHref href={href}>
            <Button onClick={onClick} size="lg" variant={btnVariant}>
              {text}
            </Button>
          </Link>
        );
      })}
    </VStack>
  );
};
