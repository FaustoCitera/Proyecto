import { GoogleLogin } from 'react-google-login';

const LoginWithGoogle = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Aquí puedes manejar la respuesta del inicio de sesión de Google
  };

  return (
    <GoogleLogin
      clientId="33243575474-hq1g51ta15hodu9sm1iolo7irrfp9el8.apps.googleusercontent.com"

      buttonText="Iniciar sesión con Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default LoginWithGoogle;
