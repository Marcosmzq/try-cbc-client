import { Alert, Text, AlertIcon } from "@chakra-ui/react";

interface AlertDefaultProps {
  alertStatus: "error" | "success" | "warning" | "info";
  text: string;
}

export const AlertDefault: React.FC<AlertDefaultProps> = ({
  alertStatus,
  text,
}) => {
  return (
    <Alert variant="left-accent" status={alertStatus}>
      <AlertIcon />
      <Text variant="lead1">{text}</Text>
    </Alert>
  );
};
