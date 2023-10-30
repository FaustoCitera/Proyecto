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
    <div>
      {isLogin ? <LoginPage /> : <SignUpPage />}
      <button onClick={toggleForm}>
        {isLogin ? 'Crear cuenta' : 'Iniciar sesión'}
      </button>
      <LoginWithGoogle />
    </div>
  );
};

export default AuthForm;