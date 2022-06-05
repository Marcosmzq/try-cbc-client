import { Button, VStack, Divider } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../context/userAuth";
import { useRegisterMutation } from "../../../../graphql/generated/graphql";
import { emailRegExp } from "../../../../utils/regExp";
import { DisplayGraphQLErrorDefault } from "../../../molecules/display-error/graphql-error/default";
import { FormFieldInput } from "../../../molecules/form-field/input";
import { motion } from "framer-motion";

type FormData = {
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
};

interface RegisterFormProps {}

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const { login } = useContext(AuthContext);
  const [mutationErrors, setMutationErrors] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormData>();

  const [registerMutation, { data }] = useRegisterMutation({
    variables: {
      username: getValues().username,
      email: getValues().email,
      password: getValues().password,
      confirmPassword: getValues().confirmPassword,
    },
    onError(err) {
      setMutationErrors([err.message]);
    },
  });

  const onSubmit = async () => {
    setMutationErrors([]);
    await registerMutation();
    reset();
  };
  useEffect(() => {
    if (data) login(data.createUser);
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
          formFieldLabel="Nombre de usuario"
          inputType="text"
          inputPlaceholder="Escribi tu nombre de usuario"
          inputName="username"
          isInvalid={errors.username ? true : false}
          errorMessage={errors.username ? errors.username.message : ""}
          register={register("username", {
            required: "Este campo es requerido",
            minLength: {
              value: 4,
              message: "Ingresa por lo menos 4 caracteres",
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
        <FormFieldInput
          formFieldLabel="Confirmar contraseña"
          inputType="password"
          inputPlaceholder="Confirmar contraseña"
          inputName="confirmPassword"
          isInvalid={errors.confirmPassword ? true : false}
          errorMessage={
            errors.confirmPassword ? errors.confirmPassword.message : ""
          }
          register={register("confirmPassword", {
            required: "Este campo es requerido",
            minLength: {
              value: 8,
              message: "Ingresa por lo menos 8 caracteres",
            },
            validate: {
              confirmPasswordIsValid: () => {
                const values = getValues();
                if (values.confirmPassword !== values.password) {
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
          crear cuenta gratis
        </Button>
        <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
      </VStack>
    </form>
  );
};
