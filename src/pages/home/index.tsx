import Head from "next/head";
import { HomePageTemplate } from "../../components/templates/home-page";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>tryCBC - Home</title>
      </Head>
      <HomePageTemplate />
    </>
  );
};

export default HomePage;
