import "../public/globals.css";
import React from 'react';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import ProfileMenu from '../components/ProfileMenu';

const HomePage = () => {
  return (
    <div className="ppage"> 
      <header>
        <ProfileMenu />
      </header>
      <Head>
        <title>Buscador</title>
      </Head>
      <main>
        <SearchBar />
      </main>
      
      

    </div>
  );
};

export default HomePage;