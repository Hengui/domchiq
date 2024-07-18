import React from 'react';
import { Person28Regular } from '@fluentui/react-icons';
import NavBar from '../NavBar';
import Button from '../Button';
import logo from '../../images/Logo.jpg';

function Header() {
  return (
    <div className='flex justify-between items-center px-12 py-5 rounded-b-lg bg-white'>
      {/* Navbar */}
      <NavBar />

      {/* Logo */}
      <img src={logo} alt="Logo" className="h-10 rounded-full" />  

      <div>
        {/* Login */}
        <Button 
          className="bg-black rounded px-3 py-2 text-white font-semibold text-sm cursor-pointer hover:bg-gray-800"
        >
          <span className='mr-2'>Login</span>
          <Person28Regular />
        </Button>
      </div>
    </div>
  );
}

export default Header;
