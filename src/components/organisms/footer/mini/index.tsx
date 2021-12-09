import { Center, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface FooterMiniProps {}

export const FooterMini: React.FC<FooterMiniProps> = ({}) => {
  const router = useRouter();
  return (
    <Center minH="256px" py={[6, 12]} flexDir="column" bg="black">
      <Button onClick={() => router.push("/")} size="lg" variant="blackSolid">
        tryCBC
      </Button>
    </Center>
  );
};
