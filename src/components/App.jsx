import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import WorkExperience from './WorkExperience/WorkExperience';
import Skills from './Skills/Skills';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  skillData,
  worksData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [skills, setSkills] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setSkills([...skillData]);
    setWorks([...worksData]);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, skills, works }}>
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
