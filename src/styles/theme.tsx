import { extendTheme } from "@chakra-ui/react";
import { Heading } from "./components/heading";
import { Text } from "./components/text";
import { Button } from "./components/button";

export const theme = extendTheme({
  colors: {
    primary: "#FF0080",
    secondary: "#FFADAD",
    terceary: "#F09893",
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  components: {
    Heading,
    Text,
    Button,
  },
});
