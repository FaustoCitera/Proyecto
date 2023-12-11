import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='ppage'>
      <div>
      <div className='fondoazul'>
        <div className='titulop'>
      <h1>Bienvenido a la página principal</h1>
      </div>
      </div>
      <img src="/assets/img/criTIC.png" width="250" height="250" />
      <div className='textop'>
      <Link className='textorelleno' href="/authForm">
        Iniciar Sesion o Crear cuenta
      </Link>
      </div>
      </div>
    </div>
  );
};

export default HomePage;