import { useRouter } from "next/router";
import { Button, VStack, Divider, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ExamList,
  Subject,
  TriviaType,
  useCreateTriviaMutation,
  useGetSubjectsQuery,
} from "../../../../../../graphql/generated/graphql";
import { DisplayGraphQLErrorDefault } from "../../../../../molecules/display-error/graphql-error/default";
import { FormFieldTextarea } from "../../../../../molecules/form-field/textarea";
import { SelectSubjectFormField } from "../../../../../molecules/form-field/select-subject/default";
import { FormFieldInput } from "../../../../../molecules/form-field/input";

interface CreateTriviaFormDefaultProps {}

type FormData = {
  subjectID: string;
  exam: ExamList;
  statement: string;
  feedback?: string;
  triviaType: TriviaType;
  source: string;
};

export const CreateTriviaFormDefault: React.FC<
  CreateTriviaFormDefaultProps
> = ({}) => {
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
      subjectID: parseInt(getValues().subjectID),
      exam: getValues().exam,
      statement: getValues().statement,
      feedback: getValues().feedback ? getValues().feedback : null,
      source: getValues().source,
      triviaType: getValues().triviaType,
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
        <SelectSubjectFormField
          register={register("subjectID", {
            required: "This is required",
          })}
        />
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
        <Select
          my={6}
          variant="filled"
          size="lg"
          placeholder="Seleccionar tipo de ejercicio"
          isFullWidth
          id="triviaType"
          name="triviaType"
          {...register("triviaType", {
            required: "This is required",
          })}
        >
          {Object.keys(TriviaType).map((key) => {
            const type = key.toUpperCase();
            return (
              <option key={type} value={type}>
                {type}
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
        <FormFieldInput
          formFieldLabel="Fuente"
          inputType="text"
          inputPlaceholder="Fuente del ejercicio"
          inputName="source"
          isInvalid={errors.source ? true : false}
          errorMessage={errors.source ? errors.source.message : ""}
          register={register("source", {
            required: true,
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
