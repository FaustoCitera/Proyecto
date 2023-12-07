import "../public/globals.css";
import React, { useState } from 'react';
import LoginPage from '../components/login';
import SignUpPage from '../components/signup';
import LoginWithGoogle from '../components/LoginWithGoogle';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="toggle">
      {isLogin ? <LoginPage /> : <SignUpPage />}
      <div className="toggle2">
<label className="labelcuenta">
no tienes una cuenta?
</label>
      <button className="toggle3"onClick={toggleForm}>
        {isLogin ? ' Registrate' : 'Iniciar sesión'}
      </button>
      </div>
    </div>
  );
};

export default AuthForm;