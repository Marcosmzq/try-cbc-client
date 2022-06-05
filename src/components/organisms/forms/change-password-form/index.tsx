import { Button, VStack, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useChangePasswordMutation } from "../../../../graphql/generated/graphql";
import { AlertDefault } from "../../../molecules/alert/default";
import { DisplayGraphQLErrorDefault } from "../../../molecules/display-error/graphql-error/default";
import { FormFieldInput } from "../../../molecules/form-field/input";
import { motion } from "framer-motion";

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

interface ChangePasswordFormProps {}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({}) => {
  const [mutationErrors, setMutationErrors] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormData>();

  const [changePasswordMutation, { data }] = useChangePasswordMutation({
    variables: {
      currentPassword: getValues().currentPassword,
      newPassword: getValues().newPassword,
      confirmNewPassword: getValues().confirmNewPassword,
    },
    onError(err) {
      setMutationErrors([err.message]);
    },
  });

  const onSubmit = async () => {
    setMutationErrors([]);
    await changePasswordMutation();
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} divider={<Divider orientation="horizontal" />}>
        <FormFieldInput
          formFieldLabel="Contraseña actual"
          inputType="password"
          inputPlaceholder="Escribi tu contraseña actual"
          inputName="password"
          isInvalid={errors.currentPassword ? true : false}
          errorMessage={
            errors.currentPassword ? errors.currentPassword.message : ""
          }
          register={register("currentPassword", {
            required: "Este campo es requerido",
            minLength: {
              value: 8,
              message: "Ingresa por lo menos 8 caracteres",
            },
          })}
        />
        <FormFieldInput
          formFieldLabel="Nueva contraseña"
          inputType="password"
          inputPlaceholder="Escribi una nueva contraseña"
          inputName="newPassword"
          isInvalid={errors.newPassword ? true : false}
          errorMessage={errors.newPassword ? errors.newPassword.message : ""}
          register={register("newPassword", {
            required: "Este campo es requerido",
            minLength: {
              value: 8,
              message: "Ingresa por lo menos 8 caracteres",
            },
          })}
        />
        <FormFieldInput
          formFieldLabel="Confirmar nueva contraseña"
          inputType="password"
          inputPlaceholder="Confirmar nueva contraseña"
          inputName="confirmNewPassword"
          isInvalid={errors.confirmNewPassword ? true : false}
          errorMessage={
            errors.confirmNewPassword ? errors.confirmNewPassword.message : ""
          }
          register={register("confirmNewPassword", {
            required: "Este campo es requerido",
            minLength: {
              value: 8,
              message: "Ingresa por lo menos 8 caracteres",
            },
            validate: {
              confirmNewPasswordIsValid: () => {
                const values = getValues();
                if (values.confirmNewPassword !== values.newPassword) {
                  return "Las contraseñas no coinciden";
                }
              },
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
          cambiar contraseña
        </Button>
        {data && (
          <AlertDefault
            alertStatus="success"
            text=" ¡Listo! Ya has cambiado tu contraseña"
          />
        )}
        <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
      </VStack>
    </form>
  );
};
