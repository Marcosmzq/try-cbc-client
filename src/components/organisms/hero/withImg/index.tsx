import { Flex } from "@chakra-ui/react";
import { HeroContentDefault } from "../../../molecules/hero-content/default";
import Image from "next/image";

interface HeroWithImgProps {
  heroTitle: string;
  heroDesc: string;
  heroBtnText: string;
  heroHandleBtn: () => void;
  heroImgSrc: string;
  heroImgAlt: string;
}

export const HeroWithImg: React.FC<HeroWithImgProps> = ({
  heroTitle,
  heroBtnText,
  heroDesc,
  heroHandleBtn,
  heroImgSrc,
  heroImgAlt,
}) => {
  return (
    <Flex
      flexDir={["column", "row"]}
      align="center"
      justify="center"
      minH="100vh"
    >
      <HeroContentDefault
        heroTitle={heroTitle}
        heroDesc={heroDesc}
        heroBtnText={heroBtnText}
        heroHandleBtn={heroHandleBtn}
      />
      <Image width="540px" height="480px" src={heroImgSrc} alt={heroImgAlt} />
    </Flex>
  );
};
