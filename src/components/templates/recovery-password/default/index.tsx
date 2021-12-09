import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { SectionHeaderDefault } from "../../../molecules/section-header/default";
import { RecoveryPasswordFormDefault } from "../../../organisms/forms/recovery-password-form";

interface RecoveryPasswordTemplateProps {
  userToken: string;
}

export const RecoveryPasswordTemplate: React.FC<RecoveryPasswordTemplateProps> =
  ({ userToken }) => {
    return (
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={8}
        p={6}
        justifyItems="center"
        alignItems="center"
        my={16}
      >
        <GridItem my={12} rowSpan={1} colSpan={2}>
          <SectionHeaderDefault
            title="Ya casi recuperas tu cuenta"
            desc="Completa el formulario y si esta todo en orden vas a recuperar tu cuenta."
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={[2, 2, 1]}>
          <Image
            width="450px"
            height="450px"
            alt="Recovery password"
            src="/images/undraw_my_password.svg"
          />
        </GridItem>

        <GridItem dir="column" rowSpan={1} colSpan={[2, 2, 1]}>
          <RecoveryPasswordFormDefault userToken={userToken} />
        </GridItem>
      </Grid>
    );
  };
