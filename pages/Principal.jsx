import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a la página principal</h1>
      <Link href="/login">
        Iniciar Sesion
      </Link>
      <br />
      <Link href="/signup">
        Crear cuenta
      </Link>
    </div>
  );
};

export default HomePage;