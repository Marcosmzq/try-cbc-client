import { Flex, Avatar, Text } from "@chakra-ui/react";
import { SectionHeaderDefault } from "../../../section-header/default";

interface UserHeaderDefaultProps {
  title: string;
  desc: string;
  username: string;
  userRole: string;
  userID: number;
}

export const UserHeaderDefault: React.FC<UserHeaderDefaultProps> = ({
  title,
  desc,
  username,
  userRole,
  userID,
}) => {
  return (
    <Flex py={[6, 12]} justify="center" align="center" flexDir="column">
      <Text variant="badge">ID: {userID} </Text>
      <Text variant="badge">ROL: {userRole} </Text>
      <Avatar my={4} w="100px" h="100px" name={username} />
      <SectionHeaderDefault title={title} desc={desc} />
    </Flex>
  );
};
