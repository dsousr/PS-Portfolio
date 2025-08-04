import { useState } from 'react';

import './main.css';

import Button_Code from '../../../assets/imgs/buttons/button-code.png'
import Button_Skill from '../../../assets/imgs/buttons/button-skill.png';
import Button_courses from '../../../assets/imgs/buttons/button-courses.png';
import Button_job from '../../../assets/imgs/buttons/button-job.png';

//Seções
import Project from './rendering-sections/Projects/ProjectSection.jsx'
import Skills from './rendering-sections/Skills/SkillsSection.jsx'
import Courses from './rendering-sections/Courses/CoursesSection.jsx';
import Experience from './rendering-sections/Experience/Experience.jsx';

function Main() {

  const [ActiveSection, setActiveSection] = useState('projects');

  const renderSection = () => {

    switch(ActiveSection){
      case 'projects':
        return <Project/>
      case 'skills':
        return <Skills/>
      case 'courses':
        return <Courses/>
      case 'experience':
        return <Experience/>
      default:
        return null;
    }

  }

  return (

    <main>
    
        <nav className="section-selection-buttons">
          <button className='buttons-to-select-sections'
          aria-label="Projetos"
          onClick={() => setActiveSection('projects')}>
            <img className='img-Button-section' 
                src={Button_Code} 
                alt="Ícone de código" />
          </button>
          <button className='buttons-to-select-sections'
          aria-label="Habilidades"
          onClick={() => setActiveSection('skills')}>
            <img className='img-Button-section' 
                src={Button_Skill} 
                alt="Ícone de habilidades" />
          </button>
          <button className='buttons-to-select-sections'
          aria-label="Cursos"
          onClick={() => setActiveSection('courses')}>
            <img className='img-Button-section' 
                src={Button_courses} 
                alt="Ícone de cursos" />
          </button>
          <button className='buttons-to-select-sections'
          aria-label="Experiência"
          onClick={() => setActiveSection('experience')}>
            <img className='img-Button-section' 
                src={Button_job} 
                alt="Ícone de experiência profissional" />
          </button>
        </nav>
        <section className="Sections">
          {renderSection()}
        </section>

    </main>

  );

}

export default Main;