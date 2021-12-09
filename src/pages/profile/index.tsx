import Head from "next/head";
import { UserProfileDefaultTemplate } from "../../components/templates/user-profile/default";
import { useGetUserByIdLazyQuery } from "../../graphql/generated/graphql";
import { Center, Spinner } from "@chakra-ui/react";
import { useCheckUserIsOnline } from "../../hooks/useCheckUserIsOnline";
import { useEffect } from "react";

const UserProfilePage = () => {
  const { user } = useCheckUserIsOnline({
    redirectTo: "/login",
    checkUserStatusType: "ONLINE",
  });

  const [getUserByID, { data, loading, error }] = useGetUserByIdLazyQuery({
    variables: {
      id: user ? parseInt(user.id as string) : 0,
    },
    onError() {
      console.log({ error });
    },
  });
  useEffect(() => {
    if (user) getUserByID();
  }, [user]);

  return (
    <>
      <Head>
        <title>tryCBC - Profile</title>
      </Head>

      {loading && (
        <Center h="100vh">
          <Spinner />
        </Center>
      )}

      {data && <UserProfileDefaultTemplate />}
    </>
  );
};

export default UserProfilePage;
