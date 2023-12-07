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
      <button onClick={toggleForm}>
        {isLogin ? 'no tienes una cuenta? Registrate' : 'Iniciar sesión'}
      </button>
      </div>
    </div>
  );
};

export default AuthForm;