import { Flex, Center } from "@chakra-ui/react";
import { FeatureCardWithIcon } from "../../../../molecules/feature-card/withIcon";
import Image from "next/image";

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
    <Flex
      my={12}
      py={[6, 8]}
      justify="center"
      align="center"
      flexDir={["column", "row"]}
    >
      <Center mx={8} p={4} w={["100%", "540px"]} borderRadius="8px">
        <Image width="360px" height="540px" alt={imgAlt} src={imgSrc} />
      </Center>
      <FeatureCardWithIcon title={featureTitle} desc={featureDesc} />
    </Flex>
  );
};
