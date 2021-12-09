import Head from "next/head";
import { PremiumBenefitsInfoTemplate } from "../../components/templates/premium-benefits/default";
import { useCheckUserIsOnline } from "../../hooks/useCheckUserIsOnline";
import { Center, Spinner } from "@chakra-ui/react";

const PremiumBenefitsInfoPage = () => {
  const { user } = useCheckUserIsOnline({
    redirectTo: "/login",
    checkUserStatusType: "ONLINE",
  });

  return (
    <>
      <Head>
        <title>tryCBC - Premium</title>
      </Head>
      {user && <PremiumBenefitsInfoTemplate userID={parseInt(user.id)} />}
    </>
  );
};

export default PremiumBenefitsInfoPage;
