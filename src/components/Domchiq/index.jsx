import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import Search from '../Search';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Domchiq() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento de dados com um timeout de 2 segundos
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center p-5 bg-white'>
      {/* Logo */}
      <div style={{ fontFamily: 'AmerikaSignatureDemo-Regular', fontSize: '80px', textAlign: 'center' }}>
        {loading ? <Skeleton width={300} height={80} /> : <h1>Bem vindos a DomChiq</h1>}
      </div>

      {/* Redes Sociais */}
      <div className='flex mt-2 space-x-4 items-center'>
        {loading ? (
          <>
            <Skeleton circle={true} height={24} width={24} />
            <Skeleton circle={true} height={24} width={24} />
            <Skeleton circle={true} height={24} width={24} />
            <Skeleton circle={true} height={24} width={24} />
          </>
        ) : (
          <>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-black">
              <FaTiktok size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
              <FaTwitter size={24} />
            </a>
          </>
        )}

        {/* Search */}
        {loading ? <Skeleton width={200} height={36} className="ml-4" /> : <Search placeholder="Pesquisar..." className="ml-4" />}
      </div>
    </div>
  );
}

export default Domchiq;
