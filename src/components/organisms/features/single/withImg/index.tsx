import { Flex, Center, Image, Grid, GridItem } from "@chakra-ui/react";
import { FeatureCardWithIcon } from "../../../../molecules/feature-card/withIcon";

interface FeatureSingleWithImgProps {
  featureTitle: string;
  featureDesc: string;
  imgSrc: string;
  imgAlt: string;
}

export const FeatureSingleWithImg: React.FC<FeatureSingleWithImgProps> = ({
  featureTitle,
  featureDesc,
  imgAlt,
  imgSrc,
}) => {
  return (
    <Grid
      w="100%"
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(5, 1fr)"]}
      px={[6, 12, 16]}
      my={12}
    >
      <GridItem colSpan={[1, 1, 2]}>
        <FeatureCardWithIcon title={featureTitle} desc={featureDesc} />
      </GridItem>
      <GridItem colSpan={[1, 1, 3]}>
        <Image
          boxSize="full"
          objectFit="fill"
          objectPosition="center"
          alt={imgAlt}
          src={imgSrc}
        />
      </GridItem>
    </Grid>
  );
};
