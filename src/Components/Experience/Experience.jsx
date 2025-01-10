import React from 'react';
import NavBar from '../Navbar/NavBar';

const Experience = () => {
  return (
    <div className='bg-black text-white min-h-screen text-center'>
      <NavBar />
      <div className='container mx-auto px-4 md:px-8 py-8 md:py-16 text-left'>
        
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4 ml-14'>WEB DEVELOPMENT</h2>
          <p className='text-lg mb-2'>My Job Grow | August 2024 - September 2024</p>
          <ul className='list-disc list-inside text-left pl-0'>
            <li>Analytical Skills: Data interpretation and problem-solving.</li>
            <li>Technical Expertise: Html, Css, Javascript, React js , Node js , Express js , MongoDb and Tailwind css.</li>
            <li>Project Management: Organized task planning and execution.</li>
            <li>Collaboration: Teamwork and effective communication.</li>
            <li>Completion :
            <a href="/assets/Certificate.pdf" target='_blank' className="text-blue-500 hover:underline mr-2 ml-3">Certificate</a>&
            <a href="/assets/LETTER.pdf" target='_blank' className="text-blue-500 hover:underline ml-3">Letter</a></li>
          </ul>
        </div>
        
        {/* <div>
          <h2 className='text-2xl font-bold mb-4'>Frontend Developer</h2>
          <p className='text-lg mb-2'>Startup Name | January 2022 - May 2023</p>
          <ul className='list-disc list-inside text-center'>
            <li>Designed and implemented user interfaces for multiple client projects.</li>
            <li>Worked closely with UX/UI designers to ensure seamless user experiences.</li>
            <li>Utilized TypeScript and Tailwind CSS to build responsive and scalable applications.</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
