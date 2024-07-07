import React from 'react';
import img from '../assets/img.jpg';
import NavBar from '../Navbar/NavBar';

const About = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <NavBar />
      <div className='container mx-auto px-4 py-8 md:py-16'>
        <div className='flex flex-col md:flex-row items-center md:items-start md:space-x-8'>
          <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={img} alt='Akshit Chadgal' className='rounded-full shadow-lg mx-auto md:mx-0' style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className='w-full md:w-2/3'>
            <p className='mb-4 text-lg'>
              Hi, I'm Akshit Chadgal, a passionate developer with a keen interest in building efficient and scalable web applications. I love exploring new technologies and continuously improving my skills. I have a strong foundation in front-end development using React, and I'm also proficient in back-end technologies like Node.js and MongoDB.
            </p>
            <p className='mb-4 text-lg'>
              My journey in the tech world started with a curiosity about how websites and applications work. This curiosity quickly turned into a passion, leading me to pursue a career in web development. Over the years, I've worked on various projects, honing my skills and expanding my knowledge base.
            </p>
            <p className='mb-4 text-lg'>
              When I'm not coding, I enjoy reading, hiking, and spending time with family and friends. I'm always excited to take on new challenges and collaborate with like-minded individuals to create something amazing.
            </p>
            <p className='text-lg'>
              Feel free to reach out to me if you'd like to connect or collaborate on a project!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
