import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

interface AlertBigDefaultProps {
  alertStatus: "success" | "error" | "warning" | "info";
  alertTitle: string;
  alertDesc: string;
}

export const AlertBigDefault: React.FC<AlertBigDefaultProps> = ({
  alertStatus,
  alertTitle,
  alertDesc,
}) => {
  return (
    <Alert
      status={alertStatus}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      minH="200px"
      p={4}
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {alertTitle}
      </AlertTitle>
      <AlertDescription maxWidth="sm">{alertDesc}</AlertDescription>
    </Alert>
  );
};
