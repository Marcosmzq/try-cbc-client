import { Center, Heading, Button } from "@chakra-ui/react";

interface CTADefaultProps {
  ctaHandleButton: () => void;
  isLoading: boolean;
  btnText: string;
  title: string;
}

export const CTADefault: React.FC<CTADefaultProps> = ({
  ctaHandleButton,
  isLoading,
  btnText,
  title,
}) => {
  return (
    <Center flexDir="column" px={[6, 16]} py={6} my={[16, 24]}>
      <Heading textAlign="center" as="h2" variant="h2" my={8}>
        {title}
      </Heading>
      <Button
        w={["100%", "auto"]}
        isLoading={isLoading}
        onClick={ctaHandleButton}
        variant="primarySolid"
      >
        {btnText}
      </Button>
    </Center>
  );
};
