import React from 'react';
import NavBar from '../Navbar/NavBar';

const Experience = () => {
  return (
    <div className='bg-black text-white min-h-screen text-center'>
      <NavBar />
      <div className='container mx-auto px-4 md:px-8 py-8 md:py-16 text-center'>
        
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Software Engineer Intern</h2>
          <p className='text-lg mb-2'>Company Name | June 2023 - August 2023</p>
          <ul className='list-disc list-inside text-center'>
            <li>Developed frontend components for a web application using React.js.</li>
            <li>Integrated RESTful APIs to fetch and display data from the backend.</li>
            <li>Collaborated with team members to debug issues and optimize performance.</li>
          </ul>
        </div>
        
        <div>
          <h2 className='text-2xl font-bold mb-4'>Frontend Developer</h2>
          <p className='text-lg mb-2'>Startup Name | January 2022 - May 2023</p>
          <ul className='list-disc list-inside text-center'>
            <li>Designed and implemented user interfaces for multiple client projects.</li>
            <li>Worked closely with UX/UI designers to ensure seamless user experiences.</li>
            <li>Utilized TypeScript and Tailwind CSS to build responsive and scalable applications.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
