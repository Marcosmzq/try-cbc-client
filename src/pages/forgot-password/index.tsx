import Head from "next/head";
import { ForgotPasswordTemplate } from "../../components/templates/forgot-password/default";
import { useCheckUserIsOnline } from "../../hooks/useCheckUserIsOnline";

const ForgotPasswordPage = () => {
  const { user } = useCheckUserIsOnline({
    redirectTo: "/home",
    checkUserStatusType: "OFFLINE",
  });
  return (
    <>
      <Head>
        <title>tryCBC - Forgot Password</title>
      </Head>
      <ForgotPasswordTemplate />
    </>
  );
};

export default ForgotPasswordPage;
