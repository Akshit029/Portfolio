import React from 'react';
import NavBar from '../Navbar/NavBar';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col'>
      <NavBar />
      {/* Hero section */}
      <div className='flex-grow flex items-center justify-center'>
        <div className='text-center p-4'>
          <h1 className='text-white font-bold sm:text-4xl text-4xl font-Brandy mb-6'>
            Hello, I am <span className='text-sky-600 font-extrabold'>
              <TypeAnimation
                sequence={[
                  'A', 200, 
                  'Ak', 200, 
                  'Aks', 200, 
                  'Aksh', 200, 
                  'Akshi', 200, 
                  'Akshit', 200
                ]}
                wrapper="span"
                cursor={false}
                repeat={0}
              />
            </span>
          </h1>
          <p className='text-white text-lg sm:text-xl mt-4'>
            Stressed ?<br></br> Stop... <br></br> Rest... <br></br> Restart... <br></br> Don't Quit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
