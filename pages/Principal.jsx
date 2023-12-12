import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='ppage'>
      <div className="prueba">
      <div className='fondoazul'>
        <div className='titulop'>
      <h1>Bienvenid@</h1>
      </div>
      </div>
      <img className="imginicio" src="/assets/img/criTIC.png" />
      <div className='textop'>
      <Link className='textorelleno' href="/authForm">
        Crear Cuenta o Iniciar Sesión
      </Link>
      </div>
      </div>
    </div>
  );
};

export default HomePage;