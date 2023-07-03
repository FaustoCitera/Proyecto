import { GoogleLogin } from 'react-google-login';

const LoginWithGoogle = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Aquí puedes manejar la respuesta del inicio de sesión de Google
  };

  return (
    <GoogleLogin
      clientId="33243575474-movj623knb88k6fc9foneqvv7n9ph1uf.apps.googleusercontent.com"
      buttonText="Iniciar sesión con Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default LoginWithGoogle;
