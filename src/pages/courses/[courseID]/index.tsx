import { Container, Box, Heading, Divider, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { CoursesPracticeSectionDefault } from "../../../components/organisms/sections/courses/practice/default";
import { SelectExerciseDefault } from "../../../components/organisms/select-exercise/default";

const CourseByIDPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>tryCBC - Courses</title>
      </Head>
      <Container my={16} maxW="container.xl">
        <Box>
          <Heading as="h3" variant="h3" textAlign="center">
            It's time to study, you can practice, add content, get summaries
            here.
          </Heading>
        </Box>
        <Divider border="1px" borderColor="gray.200" my={8} />
        <CoursesPracticeSectionDefault />
      </Container>
    </>
  );
};

export default CourseByIDPage;
