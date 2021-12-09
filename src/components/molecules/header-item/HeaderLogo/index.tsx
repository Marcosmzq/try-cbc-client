import { Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface HeaderLogoProps {}

export const HeaderLogo: React.FC<HeaderLogoProps> = () => {
  const router = useRouter();
  return (
    <Box>
      <Button onClick={() => router.push("/")} size="lg" variant="blackSolid">
        tryCBC
      </Button>
    </Box>
  );
};
