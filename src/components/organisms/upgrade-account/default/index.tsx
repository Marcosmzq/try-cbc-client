import { Button, Box, Center, Spinner, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useUpgradeUserAccountMutation } from "../../../../graphql/generated/graphql";
import { AlertBigDefault } from "../../../molecules/alert/big/default";
import { DisplayGraphQLErrorDefault } from "../../../molecules/display-error/graphql-error/default";

interface UpgradeAccountDefaultProps {
  userID: number;
}

export const UpgradeAccountDefault: React.FC<UpgradeAccountDefaultProps> = ({
  userID,
}) => {
  const [mutationErrors, setMutationErrors] = useState([]);

  const [upgradeUserAccountMutation, { data, loading }] =
    useUpgradeUserAccountMutation({
      variables: {
        userID,
      },
      onError(err) {
        setMutationErrors([err.message]);
      },
    });

  useEffect(() => {
    if (userID) {
      setMutationErrors([]);
      upgradeUserAccountMutation();
    }
  }, [userID]);
  return (
    <>
      <Box>
        <Heading my={6} textAlign="center" as="h5" variant="h5">
          Comprobando pago..
        </Heading>
        <Center my={4}>
          {loading && <Spinner />}
          {data && data.upgradeUserAccount && (
            <AlertBigDefault
              alertStatus="success"
              alertTitle="Todo ha salido bien"
              alertDesc="Ya hemos actualizado tu cuenta, para que veas los cambios debes cerrar sesion y volver a entrar, de lo contrario no veras el cambio. Por cualquier duda comunicate con el soporte. trycbc@gmail.com"
            />
          )}
          {data && data.upgradeUserAccount === false && (
            <AlertBigDefault
              alertStatus="error"
              alertTitle="Algo ha salido mal"
              alertDesc="No hemos podido comprobar que el pago este aprobado,volve a entrar a esta página en un rato para intentar nuevamente, si queres podés enviarnos un mail y contarnos lo sucedido. trycbc@gmail.com "
            />
          )}
        </Center>
        <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
      </Box>
    </>
  );
};
