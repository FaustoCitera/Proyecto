import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a la página principal</h1>
      <Link href="/Review">
        Reseñas
      </Link>
    </div>
  );
};

export default HomePage;