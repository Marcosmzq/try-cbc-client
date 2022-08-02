import Head from "next/head";
import { RegisterOrLoginTemplateWithImg } from "../../components/templates/register-login/withImg";
import { useCheckUserIsOnline } from "../../hooks/useCheckUserIsOnline";

const RegisterPage = () => {
  const { user } = useCheckUserIsOnline({
    redirectTo: "/courses",
    checkUserStatusType: "OFFLINE",
  });

  return (
    <>
      <Head>
        <title>tryCBC - Register</title>
      </Head>
      {!user && (
        <RegisterOrLoginTemplateWithImg
          titleBeforeHighlightWord="Estas a un paso de"
          highlightTitleWord="descubrir"
          titleAfterHighlightWord="una manera más fácil de aprobar."
          sectionHeaderDesc="El tiempo no es valioso, es muy valioso. Con tryCBC vas a ganar muchisimo tiempo y vas a aprobar más fácil."
          loginOrRegister="register"
          imgAlt="Mobile login"
          imgSrc="/images/undraw_mobile_login.svg"
        />
      )}
    </>
  );
};

export default RegisterPage;
