import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { CreateTriviaAnswerFormDefault } from "../../../../components/organisms/forms/trivia-forms/create-trivia-answer/default";
import { useCheckUserIsOnline } from "../../../../hooks/useCheckUserIsOnline";
import { Container } from "@chakra-ui/react";
import { UserRole } from "../../../../graphql/generated/graphql";
import { useEffect } from "react";

const CreateTriviaAnswerPage: NextPage = ({}) => {
  const router = useRouter();
  const { triviaID } = router.query;
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
        <title>tryCBC - Create trivia answer</title>
      </Head>
      <Container maxW="container.lg">
        <CreateTriviaAnswerFormDefault
          triviaID={parseInt(triviaID as string)}
        />
      </Container>
    </>
  );
};

export default CreateTriviaAnswerPage;
