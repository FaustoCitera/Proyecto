import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import ProfileMenu from '../components/ProfileMenu';

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
      <header>
        <ProfileMenu />
      </header>
    </div>
  );
};

export default HomePage;