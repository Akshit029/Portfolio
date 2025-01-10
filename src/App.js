import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import ProjectsPage from './Components/Projects/ProjectsPage';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
