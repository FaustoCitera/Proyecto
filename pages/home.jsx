import "../public/globals.css";
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import ProfileMenu from '../components/ProfileMenu';

const HomePage = () => {
  return (
    <div className="ppage">
      <div className=''>
      <div className=''>

      <header>
        <ProfileMenu />
      </header>

      </div>
      </div>
      <Head>
        <title>Buscador</title>
      </Head>
      <main className="s">
        <SearchBar />
      </main>
      
      

    </div>
  );
};

export default HomePage;