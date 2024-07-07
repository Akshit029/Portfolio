// projectsData.js

import first from '../assets/1.jpeg';

export const projects = [
  {
    id: 1,
    title: 'Spotify-clone',
    description: 'This is the clone of spotify',
    imageUrl: first, // Corrected key name to 'imageUrl'
    technologies: ['React', 'Tailwind CSS', 'Node.js'],
    githubLink: 'https://github.com/Akshit029/Spotify-clone',
    demoLink: 'https://project1demo.com'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2...',
    imageUrl: '/images/project2.jpg', // Placeholder path, replace with actual image path
    technologies: ['Vue.js', 'Sass', 'Firebase'],
    githubLink: 'https://github.com/yourusername/project2',
    demoLink: 'https://project2demo.com'
  },
  // Add more projects as needed
];
