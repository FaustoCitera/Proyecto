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
    <div className="card">
      {isLogin ? <LoginPage /> : <SignUpPage />}
      <button onClick={toggleForm}>
        {isLogin ? 'Crear cuenta' : 'Iniciar sesión'}
      </button>
    </div>
  );
};

export default AuthForm;