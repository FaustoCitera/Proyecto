import "../public/globals.css";
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import ProfileMenu from '../components/ProfileMenu';

const HomePage = () => {
  return (
    <div className="card">
      <Head>
        <title>Buscador de negocios/restaurantes</title>
      </Head>
      <div className="cardheader"> 
      <main className="searchbar">
        <h1>Buscador de negocios/restaurantes</h1>
        <SearchBar />
      </main>
      </div>
      
      <header>
        <ProfileMenu />
      </header>
    </div>
  );
};

export default HomePage;