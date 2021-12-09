import Head from "next/head";
import { HomePageTemplate } from "../../components/templates/home-page";
import { useCheckUserIsOnline } from "../../hooks/useCheckUserIsOnline";

const HomePage = () => {
  const { user } = useCheckUserIsOnline({
    redirectTo: "/login",
    checkUserStatusType: "ONLINE",
  });
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
