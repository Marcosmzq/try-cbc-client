import { Container, Divider, Box } from "@chakra-ui/react";
import { SectionHeaderDefault } from "../../molecules/section-header/default";
import { SelectExerciseDefault } from "../../organisms/select-exercise/default";
import { StepsWithLine } from "../../organisms/steps/withLine";
import { useContext } from "react";
import { AuthContext } from "../../../context/userAuth";
import { CTADefault } from "../../organisms/cta/default";
import { useRouter } from "next/router";
import { Heading } from "../../../styles/components/heading";

interface HomePageTemplateProps {}

export const HomePageTemplate: React.FC<HomePageTemplateProps> = ({}) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  return (
    <Container my={16} maxW="container.xl">
      <SelectExerciseDefault />
      <SelectExerciseDefault />
      <SelectExerciseDefault />
    </Container>
  );
};
