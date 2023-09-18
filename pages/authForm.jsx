import React, { useState } from 'react';
import LoginPage from './login';
import SignUpPage from './signup';
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
    </div>
  );
};

export default AuthForm;