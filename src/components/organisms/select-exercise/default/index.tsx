import { useEffect, useState } from "react";
import { SelectExerciseSubject } from "../select-exercise-subject/default";
import { SelectExerciseFormat } from "../select-exercise-format/default";
import { useRouter } from "next/router";

interface SelectExerciseDefaultProps {}

export const SelectExerciseDefault: React.FC<
  SelectExerciseDefaultProps
> = ({}) => {
  const router = useRouter();
  const [exerciseFormat, setExerciseFormat] = useState("");
  const [exerciseSubject, setExerciseSubject] = useState(Number);

  const handleRedirectToExercise = () => {
    router.push(
      `/exercise?subjectID=${exerciseSubject}&format=${exerciseFormat}`
    );
  };

  useEffect(() => {
    if (exerciseFormat !== "" && exerciseSubject !== 0) {
      handleRedirectToExercise();
    }
  }, [exerciseFormat, exerciseSubject]);
  return (
    <>
      {exerciseFormat === "" ? (
        <SelectExerciseFormat
          setExerciseFormat={(value: string) => setExerciseFormat(value)}
        />
      ) : (
        <SelectExerciseSubject
          selectExerciseSubjectFN={(value: number) => setExerciseSubject(value)}
        />
      )}
    </>
  );
};
