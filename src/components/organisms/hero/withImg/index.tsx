import { Flex, Center, Image } from "@chakra-ui/react";
import { HeroContentDefault } from "../../../molecules/hero-content/default";

interface HeroWithImgProps {
  heroTitleBeforeHighlightWord: string;
  heroHighlightTitleWord: string;
  heroTitleAfterHighlightWord: string;
  heroDesc: string;
  heroBtnText: string;
  heroHandleBtn: () => void;
  heroImgOnLgScreenSrc: string;
  heroImgAltOnLgScreenSrc: string;
  heroFirstImgOnSmScreenSrc: string;
  heroFirstImgAltOnSmScreenSrc: string;
  heroSecondImgOnSmScreenSrc: string;
  heroSecondImgAltOnSmScreenSrc: string;
}

export const HeroWithImg: React.FC<HeroWithImgProps> = ({
  heroTitleBeforeHighlightWord,
  heroHighlightTitleWord,
  heroTitleAfterHighlightWord,
  heroBtnText,
  heroDesc,
  heroHandleBtn,
  heroImgOnLgScreenSrc,
  heroImgAltOnLgScreenSrc,
  heroFirstImgOnSmScreenSrc,
  heroFirstImgAltOnSmScreenSrc,
  heroSecondImgOnSmScreenSrc,
  heroSecondImgAltOnSmScreenSrc,
}) => {
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      minH="100vh"
      m={2}
      p={2}
    >
      <Center my={[8, 12]}>
        <HeroContentDefault
          heroTitleBeforeHighlightWord={heroTitleBeforeHighlightWord}
          heroHighlightTitleWord={heroHighlightTitleWord}
          heroTitleAfterHighlightWord={heroTitleAfterHighlightWord}
          heroDesc={heroDesc}
          heroBtnText={heroBtnText}
          heroHandleBtn={heroHandleBtn}
        />
      </Center>

      <Image
        width="100vw"
        height="100vh"
        objectFit="fill"
        objectPosition="center"
        display={["none", "none", "block"]}
        src={heroImgOnLgScreenSrc}
        alt={heroImgAltOnLgScreenSrc}
      />
      <Image
        width="100vw"
        height="100vh"
        objectFit="fill"
        objectPosition="center"
        display={["block", "none"]}
        src={heroFirstImgOnSmScreenSrc}
        alt={heroFirstImgAltOnSmScreenSrc}
      />
      <Image
        width="100vw"
        height="100vh"
        objectFit="fill"
        objectPosition="center"
        display={["block", "none"]}
        src={heroSecondImgOnSmScreenSrc}
        alt={heroSecondImgAltOnSmScreenSrc}
      />
    </Flex>
  );
};
