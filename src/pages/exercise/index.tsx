import Head from "next/head";
import { ExerciseDefaultTemplate } from "../../components/templates/exercises/default";
import { NextPage } from "next";
import { useGetRandomTriviaByParamsLazyQuery } from "../../graphql/generated/graphql";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { DisplayGraphQLErrorDefault } from "../../components/molecules/display-error/graphql-error/default";
import { NetworkStatus } from "@apollo/client";

const ExercisePage: NextPage = () => {
  const [mutationErrors, setMutationErrors] = useState([]);
  const router = useRouter();
  const { subjectID, format } = router.query;

  const [getTrivia, { data, loading, error, refetch, networkStatus }] =
    useGetRandomTriviaByParamsLazyQuery({
      variables: {
        subjectID: subjectID ? parseInt(subjectID as string) : null,
        //@ts-ignore
        triviaType: format,
      },
      onError(err) {
        setMutationErrors([err.message]);
      },
      notifyOnNetworkStatusChange: true,
    });

  useEffect(() => {
    if (subjectID && format) getTrivia();
  }, [subjectID, format]);
  return (
    <>
      <Head>
        <title>tryCBC - Exercises</title>
      </Head>

      {loading && (
        <Center h="100vh">
          <Spinner />
        </Center>
      )}
      {networkStatus === NetworkStatus.refetch && (
        <Center h="100vh">
          <Spinner />
        </Center>
      )}
      {data && networkStatus !== NetworkStatus.refetch && (
        <ExerciseDefaultTemplate
          format={format as string}
          refetchExercise={() => refetch()}
          triviaExercise={data}
        />
      )}
      {error && (
        <Center h="100vh">
          <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
        </Center>
      )}
    </>
  );
};

export default ExercisePage;
