import { Flex, Center } from "@chakra-ui/react";
import { HeroContentDefault } from "../../../molecules/hero-content/default";
import Image from "next/image";

interface HeroWithImgProps {
  heroTitle: string;
  heroDesc: string;
  heroBtnText: string;
  heroHandleBtn: () => void;
  heroImgSrc: string;
  heroImgAlt: string;
  showHeroInRow: boolean;
}

export const HeroWithImg: React.FC<HeroWithImgProps> = ({
  heroTitle,
  heroBtnText,
  heroDesc,
  heroHandleBtn,
  heroImgSrc,
  heroImgAlt,
  showHeroInRow,
}) => {
  return (
    <Flex
      flexDir={showHeroInRow ? ["column", "row"] : "column"}
      align="center"
      justify="center"
      minH="100vh"
      m={2}
      p={2}
    >
      <Center my={[8, 12]}>
        <HeroContentDefault
          heroTitle={heroTitle}
          heroDesc={heroDesc}
          heroBtnText={heroBtnText}
          heroHandleBtn={heroHandleBtn}
        />
      </Center>
      <Image width="540px" height="480px" src={heroImgSrc} alt={heroImgAlt} />
    </Flex>
  );
};
