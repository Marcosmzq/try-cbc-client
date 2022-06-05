import { Center, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../../../../context/userAuth";
import { useGetSubjectsQuery } from "../../../../../graphql/generated/graphql";
import { SelectExerciseCard } from "../../../../molecules/select-exercise-card/default";

interface SelectExerciseSubjectProps {
  selectExerciseSubjectFN: (subjectID: number) => void;
}

export const SelectExerciseSubject: React.FC<SelectExerciseSubjectProps> = ({
  selectExerciseSubjectFN,
}) => {
  const { user } = useContext(AuthContext);
  const { data } = useGetSubjectsQuery({
    onError(err) {
      console.log(err);
    },
  });
  return (
    <>
      <Center p={4}>
        <Heading as="h3" variant="h3">
          Selecciona una materia para estudiar.
        </Heading>
      </Center>
      {data ? (
        <SimpleGrid p={4} columns={[1, 2, 2, 3]} gap={6}>
          {data.findAllSubjects.map(({ name, id, isPremium }) => {
            const subjectSelectCard = (
              <SelectExerciseCard
                isFreeContent={true}
                title={name.toUpperCase()}
                desc={`Potencia tu estudio de ${name.toUpperCase()} y aprende más en menos tiempo.`}
                btnText="Empezar"
                btnOnClick={() => selectExerciseSubjectFN(id)}
              />
            );
            return (
              <>
                {user ? subjectSelectCard : isPremium ? "" : subjectSelectCard}
              </>
            );
          })}
        </SimpleGrid>
      ) : (
        <Center>
          <Spinner />
        </Center>
      )}
    </>
  );
};
