import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import Search from '../Search';


function Domchiq() {
  return (
    <div className='flex flex-col items-center justify-center p-5 bg-white'>
      {/* Logo */}
      <div style={{ fontFamily: 'AmerikaSignatureDemo-Regular', fontSize: '80px', textAlign: 'center' }}>
        <h1>Bem vindos a DomChiq</h1>
      </div>

      {/* Redes Sociais */}
      <div className='flex mt-2 space-x-4 items-center'>
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

        {/* Search */}
        <Search placeholder="Pesquisar..." className="ml-4" />
      </div>
    </div>
  );
}

export default Domchiq;
