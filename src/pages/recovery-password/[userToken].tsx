import Head from "next/head";
import { useRouter } from "next/router";
import { RecoveryPasswordTemplate } from "../../components/templates/recovery-password/default";
import { useCheckUserIsOnline } from "../../hooks/useCheckUserIsOnline";

const RecoveryPasswordPage = () => {
  const { user } = useCheckUserIsOnline({
    redirectTo: "/home",
    checkUserStatusType: "OFFLINE",
  });
  const router = useRouter();
  const { userToken } = router.query;

  return (
    <>
      <Head>
        <title>tryCBC - Recovery password</title>
      </Head>
      <RecoveryPasswordTemplate userToken={userToken as string} />
    </>
  );
};

export default RecoveryPasswordPage;
