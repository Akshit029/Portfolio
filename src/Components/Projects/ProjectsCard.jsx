// ProjectCard.jsx

import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img className="w-full" src={project.image} alt={project.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-white text-base">{project.description}</p>
        <div className="mt-4">
          <p className="text-sm font-semibold">Technologies used:</p>
          <ul className="mt-1">
            {project.technologies.map((tech, index) => (
              <li key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-6 py-4">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">GitHub</a>
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;
