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
            Hi, I'm Akshit Chadgal, a passionate MERN stack developer with a strong foundation in front-end and back-end development. I specialize in building scalable and efficient web applications using MongoDB, Express.js, React, and Node.js. Driven by curiosity and a passion for technology, I continuously strive to enhance my skills and stay updated with the latest industry trends.
            </p>
            <p className='mb-4 text-lg'>
            Over the years, I've worked on diverse projects that have sharpened my problem-solving abilities and broadened my technical expertise. I thrive on taking up new challenges and collaborating with like-minded individuals to create impactful solutions.
            </p>
            <p className='mb-4 text-lg'>
            Beyond coding, I enjoy reading, hiking, and spending time with family and friends, which helps me stay balanced and motivated. I'm always excited to connect with professionals, exchange ideas, and explore opportunities to contribute and grow.
            </p>
            <p className='text-lg'>
            Feel free to reach out if you'd like to connect or collaborate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
