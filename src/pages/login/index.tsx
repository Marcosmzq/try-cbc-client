import Head from "next/head";
import { RegisterOrLoginTemplateWithImg } from "../../components/templates/register-login/withImg";
import { useCheckUserIsOnline } from "../../hooks/useCheckUserIsOnline";

const LoginPage = () => {
  const { user } = useCheckUserIsOnline({
    redirectTo: "/home",
    checkUserStatusType: "OFFLINE",
  });
  return (
    <>
      <Head>
        <title>tryCBC - Login</title>
      </Head>
      <RegisterOrLoginTemplateWithImg
        loginOrRegister="login"
        sectionHeaderTitle="Bienvenido, te deseamos buena suerte."
        sectionHeaderDesc="Inicia sesión y comenzá a aprender."
        imgAlt="Welcome cats"
        imgSrc="/images/undraw_welcome_cats.svg"
      />
    </>
  );
};

export default LoginPage;
