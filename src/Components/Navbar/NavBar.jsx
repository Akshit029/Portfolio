import React, { useState } from 'react';
import logo from '../assets/Akshit.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black p-3'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <img src={logo} alt="Akshit Logo" className='h-14 w-auto ml-0 cursor-pointer md:ml-14' />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
        <div className='hidden md:flex md:flex-1 justify-center items-center ml-14 space-x-6'>
          <a href='/' className='relative text-white font-semibold group' aria-label='Home'>
            HOME
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            <span className='absolute right-0 top-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a href='/about' className='relative text-white font-semibold group' aria-label='About'>
            ABOUT
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            <span className='absolute right-0 top-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
          </a>
        </div>
        <div className='hidden md:flex md:flex-row md:items-center space-x-6'>
          <a href='/experience' className='relative text-white font-semibold group' aria-label='Experience'>
            EXPERIENCE
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            <span className='absolute right-0 top-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a href='/projects' className='relative text-white font-semibold group' aria-label='Projects'>
            PROJECTS
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            <span className='absolute right-0 top-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a href='/contact' className='relative text-white font-semibold group' aria-label='Contact'>
            CONTACT
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            <span className='absolute right-0 top-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
          </a>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col space-y-4 mt-4'>
          <a href='/' className='text-white text-center font-semibold' onClick={() => setIsOpen(false)}>HOME</a>
          <a href='/about' className='text-white text-center font-semibold' onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href='/experience' className='text-white text-center font-semibold' onClick={() => setIsOpen(false)}>EXPERIENCE</a>
          <a href='/projects' className='text-white text-center font-semibold' onClick={() => setIsOpen(false)}>PROJECTS</a>
          <a href='/contact' className='text-white text-center font-semibold' onClick={() => setIsOpen(false)}>CONTACT</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
