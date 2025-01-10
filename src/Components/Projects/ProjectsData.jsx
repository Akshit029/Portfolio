// projectsData.js

import spotify from '../assets/spotify.png';
import campus from '../assets/1.jpeg';
import gym from '../assets/logowhite.png';

export const projects = [
  {
    id: 1,
    title: 'Spotify-clone',
    description: 'This is the Frontend of spotify',
    imageUrl: spotify, // Corrected key name to 'imageUrl'
    technologies: ['React.js', 'Tailwind CSS', 'Node.js'],
    githubLink: 'https://github.com/Akshit029/Spotify-clone',
    demoLink: 'https://spotify-clone-m2q6xl2dy-akshits-projects-fc7c4519.vercel.app/'
  },
  {
    id: 2,
    title: 'Campus-Scanshield',
    description: 'Campus ScanShield is a college project designed to enhance campus security and vehicle tracking. The system assigns a unique QR code to each vehicle entering the campus. By scanning this QR code, the system accurately records the vehicle’s entry and exit times, providing a comprehensive log of each vehicle’s movements within the campus. This solution enables real-time tracking of how many times a vehicle enters and exits the campus, ensuring better security management and streamlined access control',
    imageUrl: campus, // Placeholder path, replace with actual image path
    technologies: ['React.js', 'Tailwind css', 'MongoDB' ,'Express.js' , 'Node.js'],
    githubLink: 'https://github.com/Akshit029/Campus',
    demoLink: 'https://campus-bcmdrcli3-akshits-projects-fc7c4519.vercel.app/'
  },
  {
    id: 2,
    title: 'GYM',
    description: 'GymFit is a comprehensive gym management platform that offers a range of features to enhance the fitness experience. The website provides users with the option to purchase online memberships, making it convenient to join the gym from anywhere. Additionally, the platform includes a BMI calculator and a calories counter to help users track their health and fitness progress. To further support users in their fitness journey, GymFit offers various workout splits, tailored to different fitness levels and goals. The platform also features an API integration that displays a fresh motivational quote daily on the homepage, keeping users inspired and motivated to reach their fitness targets ',
    imageUrl: gym, // Placeholder path, replace with actual image path
    technologies: ['React.js', 'Tailwind css', 'MongoDB' ,'Express.js' , 'Node.js','Api'],
    githubLink: 'https://github.com/Akshit029/Gym',
    demoLink: 'https://campus-bcmdrcli3-akshits-projects-fc7c4519.vercel.app/'
  },
  // Add more projects as needed
];
