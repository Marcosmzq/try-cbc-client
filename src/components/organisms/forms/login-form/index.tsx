import { Button, VStack, Divider } from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../context/userAuth";
import { useLoginMutation } from "../../../../graphql/generated/graphql";
import { emailRegExp } from "../../../../utils/regExp";
import { DisplayGraphQLErrorDefault } from "../../../molecules/display-error/graphql-error/default";
import { FormFieldInput } from "../../../molecules/form-field/input";

type FormData = {
  email: string;
  password: string;
};

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const { login } = useContext(AuthContext);
  const [mutationErrors, setMutationErrors] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormData>();

  const [loginMutation, { data }] = useLoginMutation({
    variables: {
      email: getValues().email,
      password: getValues().password,
    },
    onError(err) {
      setMutationErrors([err.message]);
    },
  });

  const onSubmit = async () => {
    setMutationErrors([]);
    await loginMutation();
    reset();
  };

  useEffect(() => {
    if (data) login(data.loginUser);
  }, [data]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} divider={<Divider orientation="horizontal" />}>
        <FormFieldInput
          formFieldLabel="Correo electronico"
          inputType="email"
          inputPlaceholder="Escribi tu correo electronico"
          inputName="email"
          isInvalid={errors.email ? true : false}
          errorMessage={errors.email ? errors.email.message : ""}
          register={register("email", {
            required: "Este campo es requerido",
            minLength: {
              value: 4,
              message: "Ingresa por lo menos 4 caracteres",
            },
            pattern: {
              value: emailRegExp,
              message: "El email ingresado no es valido",
            },
          })}
        />
        <FormFieldInput
          formFieldLabel="Contraseña"
          inputType="password"
          inputPlaceholder="Escribi tu contraseña"
          inputName="password"
          isInvalid={errors.password ? true : false}
          errorMessage={errors.password ? errors.password.message : ""}
          register={register("password", {
            required: "Este campo es requerido",
            minLength: {
              value: 8,
              message: "Ingresa por lo menos 8 caracteres",
            },
          })}
        />
        <Button
          w={["100%", "sm"]}
          variant="primarySolid"
          isLoading={isSubmitting}
          type="submit"
        >
          iniciar sesion
        </Button>
        <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
      </VStack>
    </form>
  );
};
