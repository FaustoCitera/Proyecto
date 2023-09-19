import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Buscador de negocios/restaurantes</title>
      </Head>
      <main>
        <h1>Buscador de negocios/restaurantes</h1>
        <SearchBar />
      </main>
    </div>
  );
};

export default HomePage;