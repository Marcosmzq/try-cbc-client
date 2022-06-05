import { Select } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useGetSubjectsQuery } from "../../../../../graphql/generated/graphql";

interface SelectSubjectFormFieldProps {
  register: UseFormRegisterReturn;
}

export const SelectSubjectFormField: React.FC<SelectSubjectFormFieldProps> = ({
  register,
}) => {
  const { data } = useGetSubjectsQuery({
    onError(err) {
      console.log(err);
    },
  });
  return (
    <>
      <Select
        my={6}
        variant="filled"
        size="lg"
        placeholder="Seleccionar materia"
        isFullWidth
        id="subjectID"
        name="subjectID"
        {...register}
      >
        {data
          ? data.findAllSubjects.map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name.toUpperCase()}
                </option>
              );
            })
          : "Loading..."}
      </Select>
    </>
  );
};
