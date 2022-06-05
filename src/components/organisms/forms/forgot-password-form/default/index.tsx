import { Button, VStack, Divider, Alert, AlertIcon } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { emailRegExp } from "../../../../../utils/regExp";
import { DisplayGraphQLErrorDefault } from "../../../../molecules/display-error/graphql-error/default";
import { FormFieldInput } from "../../../../molecules/form-field/input";
import { useForgotPasswordMutation } from "../../../../../graphql/generated/graphql";
import { AlertDefault } from "../../../../molecules/alert/default";
import { motion } from "framer-motion";

type FormData = {
  email: string;
  password: string;
};

interface ForgotPasswordFormDefaultProps {}

export const ForgotPasswordFormDefault: React.FC<
  ForgotPasswordFormDefaultProps
> = ({}) => {
  const [mutationErrors, setMutationErrors] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormData>();

  const [loginMutation, { data, error }] = useForgotPasswordMutation({
    variables: {
      email: getValues().email,
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
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          w={["100%", "sm"]}
          variant="primarySolid"
          isLoading={isSubmitting}
          type="submit"
        >
          recuperar contraseña
        </Button>
        {data && (
          <AlertDefault
            alertStatus="success"
            text=" ¡Listo! Ya te mandamos un email con instrucciones a seguir"
          />
        )}
        <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
      </VStack>
    </form>
  );
};
