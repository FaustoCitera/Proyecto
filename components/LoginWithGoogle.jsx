import { GoogleLogin } from 'react-google-login';

const LoginWithGoogle = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Aquí puedes manejar la respuesta del inicio de sesión de Google
  };

  return (
    <GoogleLogin
      clientId="TU_CLIENT_ID_DE_GOOGLE"
      buttonText="Iniciar sesión con Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default LoginWithGoogle;
