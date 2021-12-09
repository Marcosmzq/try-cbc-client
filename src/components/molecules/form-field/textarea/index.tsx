import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormFieldTextareaProps {
  isInvalid: boolean;
  errorMessage: string;
  register: UseFormRegisterReturn;
  inputType: "text" | "email" | "password";
  inputPlaceholder: string;
  inputName: string;
  formFieldLabel: string;
}

export const FormFieldTextarea: React.FC<FormFieldTextareaProps> = ({
  isInvalid,
  errorMessage,
  register,
  inputName,
  inputPlaceholder,
  inputType,
  formFieldLabel,
}) => {
  return (
    <FormControl p={2} w="100%" isInvalid={isInvalid}>
      <FormLabel htmlFor={inputName}>
        <Heading py={1} as="h5" variant="h5">
          {formFieldLabel}
        </Heading>
      </FormLabel>
      <Textarea
        id={inputName}
        placeholder={inputPlaceholder}
        type={inputType}
        {...register}
        minH="300px"
      />
      <FormErrorMessage>
        <Heading as="h6" variant="h6">
          {errorMessage}
        </Heading>
      </FormErrorMessage>
    </FormControl>
  );
};
