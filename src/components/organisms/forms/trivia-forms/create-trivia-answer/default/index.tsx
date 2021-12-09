import { Button, VStack, Divider, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AnswerType,
  useCreateTriviaAnswerMutation,
} from "../../../../../../graphql/generated/graphql";
import { DisplayGraphQLErrorDefault } from "../../../../../molecules/display-error/graphql-error/default";
import { FormFieldTextarea } from "../../../../../molecules/form-field/textarea";

interface CreateTriviaAnswerFormDefaultProps {
  triviaID: number;
}

type FormData = {
  statement: string;
  isTrue: string;
};

export const CreateTriviaAnswerFormDefault: React.FC<CreateTriviaAnswerFormDefaultProps> =
  ({ triviaID }) => {
    const [mutationErrors, setMutationErrors] = useState([]);
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
      reset,
      getValues,
    } = useForm<FormData>();

    const [createTriviaAnswerMutation, { data, loading, error }] =
      useCreateTriviaAnswerMutation({
        variables: {
          triviaID,
          statement: getValues().statement,
          isTrue: getValues().isTrue === "true" ? true : false,
          type: AnswerType.Answer,
        },
        onCompleted(data) {
          console.log({
            created: data ? true : false,
            id: data.createAnswer.id,
            data,
          });
        },
        onError(err) {
          setMutationErrors([err.message]);
        },
      });

    const onSubmit = async () => {
      setMutationErrors([]);
      await createTriviaAnswerMutation();
      reset();
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} divider={<Divider orientation="horizontal" />}>
          <Select
            my={6}
            variant="filled"
            size="lg"
            placeholder="Seleccionar si la respuesta es verdadera o falsa"
            isFullWidth
            id="exam"
            name="exam"
            {...register("isTrue", {
              required: "This is required",
            })}
          >
            <option value={"true"}>Verdadera</option>
            <option value={"false"}>Falsa</option>
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
          <Button
            w={["100%", "sm"]}
            variant="primarySolid"
            isLoading={isSubmitting}
            type="submit"
          >
            crear respuesta
          </Button>
          <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
        </VStack>
      </form>
    );
  };
