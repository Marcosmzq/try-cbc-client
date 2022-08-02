import {
  Container,
  Heading,
  Box,
  Text,
  Flex,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { SelectExerciseCard } from "../../components/molecules/select-exercise-card/default";
import { SelectExerciseDefault } from "../../components/organisms/select-exercise/default";
import { SelectExerciseFormat } from "../../components/organisms/select-exercise/select-exercise-format/default";
import { SelectExerciseSubject } from "../../components/organisms/select-exercise/select-exercise-subject/default";

const CoursesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>tryCBC - Courses</title>
      </Head>

      <Container maxW="container.xl" minH="100vh" py={12} px={[4, 8, 12]}>
        <Box w="100%">
          <Heading as="h3" variant="h3" textAlign="center" w="100%">
            These are the avaiable courses that
            <Heading
              as="h3"
              variant="h3"
              textAlign="center"
              d="inline-block"
              bg="yellow.200"
              rounded="full"
              px={3}
            >
              we have for you.
            </Heading>
          </Heading>
        </Box>
        <Divider border="1px" borderColor="gray.200" my={8} />
        <Stack>
          <SelectExerciseDefault />
        </Stack>
      </Container>
    </>
  );
};

export default CoursesPage;
