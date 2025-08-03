import './main.css';

import Button_Code from '../../../assets/imgs/buttons/button-code.png'
import Button_Skill from '../../../assets/imgs/buttons/button-skill.png';
import Button_courses from '../../../assets/imgs/buttons/button-courses.png';
import Button_job from '../../../assets/imgs/buttons/button-job.png';

function Main() {

  return (

    <main>
    
        <nav className="section-selection-buttons">
          <button className='buttons-to-select-sections'
          aria-label="Projetos">
            <img className='img-Button-section' 
                src={Button_Code} 
                alt="Ícone de código" />
          </button>
          <button className='buttons-to-select-sections'
          aria-label="Habilidades">
            <img className='img-Button-section' 
                src={Button_Skill} 
                alt="Ícone de habilidades" />
          </button>
          <button className='buttons-to-select-sections'
          aria-label="Cursos">
            <img className='img-Button-section' 
                src={Button_courses} 
                alt="Ícone de cursos" />
          </button>
          <button className='buttons-to-select-sections'
          aria-label="Experiência">
            <img className='img-Button-section' 
                src={Button_job} 
                alt="Ícone de experiência profissional" />
          </button>
        </nav>
        <section className="Sections">
          
        </section>

    </main>

  );

}

export default Main;