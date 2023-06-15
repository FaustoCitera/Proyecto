import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a la página principal</h1>
      <Link href="/authForm">
        Crear Cuenta y Iniciar Sesion
      </Link>
    </div>
  );
};

export default HomePage;