import { useRouter } from "next/router";
import { Button, VStack, Divider, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ExamList,
  SubjectList,
  useCreateTriviaMutation,
} from "../../../../../../graphql/generated/graphql";
import { DisplayGraphQLErrorDefault } from "../../../../../molecules/display-error/graphql-error/default";
import { FormFieldTextarea } from "../../../../../molecules/form-field/textarea";

interface CreateTriviaFormDefaultProps {}

type FormData = {
  subject: SubjectList;
  exam: ExamList;
  statement: string;
  feedback?: string;
};

export const CreateTriviaFormDefault: React.FC<CreateTriviaFormDefaultProps> =
  ({}) => {
    const router = useRouter();
    const [mutationErrors, setMutationErrors] = useState([]);
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
      reset,
      getValues,
    } = useForm<FormData>();

    const [createTriviaMutation, { data }] = useCreateTriviaMutation({
      variables: {
        subject: getValues().subject,
        exam: getValues().exam,
        statement: getValues().statement,
        feedback: getValues().feedback ? getValues().feedback : null,
      },
      onCompleted(data) {
        console.log(data);
      },
      onError(err) {
        setMutationErrors([err.message]);
      },
    });
    const onSubmit = async () => {
      setMutationErrors([]);
      await createTriviaMutation();
      console.log(data);
      if (data)
        router.push(
          `/admin/trivia-management/create-answer/?triviaID=${data.createTrivia.id}`
        );
      reset();
    };
    useEffect(() => {
      if (data)
        router.push(
          `/admin/trivia-management/create-answer/?triviaID=${data.createTrivia.id}`
        );
    }, [data]);
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} divider={<Divider orientation="horizontal" />}>
          <Select
            my={6}
            variant="filled"
            size="lg"
            placeholder="Seleccionar materia"
            isFullWidth
            id="subject"
            name="subject"
            {...register("subject", {
              required: "This is required",
            })}
          >
            {Object.keys(SubjectList).map((key) => {
              const subject = key.toUpperCase();
              return (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              );
            })}
          </Select>
          <Select
            my={6}
            variant="filled"
            size="lg"
            placeholder="Seleccionar parcial"
            isFullWidth
            id="exam"
            name="exam"
            {...register("exam", {
              required: "This is required",
            })}
          >
            {Object.keys(ExamList).map((key) => {
              const exam = key.toUpperCase();
              return (
                <option key={exam} value={exam}>
                  {exam}
                </option>
              );
            })}
          </Select>
          <FormFieldTextarea
            formFieldLabel="Enunciado"
            inputType="text"
            inputPlaceholder="Escribi el enunciado"
            inputName="statement"
            isInvalid={errors.statement ? true : false}
            errorMessage={errors.statement ? errors.statement.message : ""}
            register={register("statement", {
              required: "Este campo es requerido",
            })}
          />
          <FormFieldTextarea
            formFieldLabel="Feedback"
            inputType="text"
            inputPlaceholder="Escribi el feedback"
            inputName="feedback"
            isInvalid={errors.feedback ? true : false}
            errorMessage={errors.feedback ? errors.feedback.message : ""}
            register={register("feedback", {
              required: false,
            })}
          />
          <Button
            w={["100%", "sm"]}
            variant="primarySolid"
            isLoading={isSubmitting}
            type="submit"
          >
            crear trivia
          </Button>
          <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
        </VStack>
      </form>
    );
  };
