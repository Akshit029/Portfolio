import React from 'react';
import ProjectCard from './ProjectsCard'; // Corrected import name
import { projects } from './ProjectsData' // Corrected import name
import NavBar from '../Navbar/NavBar';

const ProjectsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
