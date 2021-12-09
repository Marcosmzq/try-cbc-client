import Head from "next/head";
import { RegisterOrLoginTemplateWithImg } from "../../components/templates/register-login/withImg";
import { useCheckUserIsOnline } from "../../hooks/useCheckUserIsOnline";

const RegisterPage = () => {
  const { user } = useCheckUserIsOnline({
    redirectTo: "/home",
    checkUserStatusType: "OFFLINE",
  });

  return (
    <>
      <Head>
        <title>tryCBC - Register</title>
      </Head>
      <RegisterOrLoginTemplateWithImg
        sectionHeaderTitle="Crear cuenta fácil, rápido y totalmente gratis"
        sectionHeaderDesc="Crear una cuenta es un proceso muy sencillo, solo completa el formulario y listo."
        loginOrRegister="register"
        imgAlt="Mobile login"
        imgSrc="/images/undraw_mobile_login.svg"
      />
    </>
  );
};

export default RegisterPage;
