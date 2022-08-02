import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, Image } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AppProps } from "next/app";
import "@fontsource/inter";
import { FooterMini } from "../components/organisms/footer/mini";
import { client } from "../graphql/client";
import { AuthProvider } from "../context/userAuth";
import { HeaderWithMenu } from "../components/organisms/header/withMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ChakraProvider resetCSS theme={theme}>
          <HeaderWithMenu />
          <Component {...pageProps} />
          <FooterMini />
        </ChakraProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
