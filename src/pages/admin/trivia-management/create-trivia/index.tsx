import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { CreateTriviaFormDefault } from "../../../../components/organisms/forms/trivia-forms/create-trivia/default";
import { useCheckUserIsOnline } from "../../../../hooks/useCheckUserIsOnline";
import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { UserRole } from "../../../../graphql/generated/graphql";

const CreateTriviaPage: NextPage = ({}) => {
  const router = useRouter();
  const { user } = useCheckUserIsOnline({
    redirectTo: "/login",
    checkUserStatusType: "ONLINE",
  });

  useEffect(() => {
    if (user && user.role !== UserRole.Admin) {
      router.push("/");
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>tryCBC - Create trivia</title>
      </Head>
      <Container maxW="container.lg">
        <CreateTriviaFormDefault />
      </Container>
    </>
  );
};

export default CreateTriviaPage;
