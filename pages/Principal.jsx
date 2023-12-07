import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='page'>
      <div>
      <div>
      <h1>Bienvenido a la página principal</h1>
      </div>
      <Link href="/authForm">
        Iniciar Sesion o Crear cuenta
      </Link>
    </div>
    </div> 
  );
};

export default HomePage;