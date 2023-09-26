import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a la página principal</h1>
      <Link href="/authForm">
        Iniciar Sesion o Crear cuenta
      </Link>
    </div>
  );
};

export default HomePage;