import Head from "next/head";
import { useRouter } from "next/router";
import { BuyResponseDefaultTemplate } from "../../../components/templates/buy-response/default";

const BuyResponsePage = () => {
  const router = useRouter();
  const { status, external_reference } = router.query;
  return (
    <>
      <Head>
        <title>tryCBC - Buy Approved</title>
      </Head>
      <BuyResponseDefaultTemplate
        userID={parseInt(external_reference as string)}
      />
    </>
  );
};

export default BuyResponsePage;
