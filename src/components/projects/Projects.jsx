import { useState } from 'react'
import './Projects.css'

import {PJS} from './ProjectsData'

/* Botões */
import BottArrow from '../../assets/icons/arrow-bottom.png'

function Projects() {

  const [filter, setFilter] = useState("all")
  const filteredPJ = PJS.filter(project => project.Filters.includes(filter));  

  const [openInfs, setOpenInfs] = useState(null)

  const counts = PJS.reduce((acc, project) => {
  project.Filters.forEach(filter => {
      acc[filter] = (acc[filter] || 0) + 1
  });
  return acc;
  }, {});

  const OpenCard = (i) => {
    setOpenInfs(openInfs === i ? null : i)
  }

  return (

    <section className="projects" id="projects">

        <h2>
            <span className='highlight'>Projetos</span>
        </h2>

        <div className="proj-filter">
            <ul>
                <li
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                >
                    Todos [{counts.all}]
                </li>
                <li
                    className={filter === 'front-end' ? 'active' : ''}
                    onClick={() => setFilter('front-end')}
                >
                    Front-End [{counts["front-end"]}]
                </li>
                <li
                    className={filter === 'design' ? 'active' : ''}
                    onClick={() => setFilter('design')}
                >
                    Design [{counts.design}]
                </li>
                <li
                    className={filter === 'automation' ? 'active' : ''}
                    onClick={() => setFilter('automation')}
                >
                    Automação [{counts.automation}]
                </li>
                <li
                    className={filter === 'game' ? 'active' : ''}
                    onClick={() => setFilter('game')}
                >
                    Games [{counts.game}]
                </li>
            </ul>
        </div>

        <div className="projects-container">

            {filteredPJ.map((project, index) => (
            <div className="proj-card" key={index}>

                <div className="proj-header">
                    <img className="Pj-img" src={project.Proj_img} alt={project.Proj_title} />
                    <h3>
                        <span className='highlight'>
                            {project.Proj_title}
                        </span>
                    </h3>
                    <button onClick={() => OpenCard(index)} className={openInfs === index ? 'rotated' : ''}>
                        <img className="Access-inf-img" src={BottArrow} alt="Ver informações do projeto!" />
                    </button>
                </div>
                
                <div className={`proj-details ${openInfs === index ? 'open' : ''}`}>

                    <div className="details-content">

                        <h4>
                            Detalhes do projeto
                        </h4>
                        <div className="proj-more-infs">
                             <a href={project.Proj_link} target="_blank" rel="noreferrer">
                                Ver repositório
                            </a>
                            <p>
                                {project.Proj_status}
                            </p>
                        </div>

                        <p className="p-description">{project.Proj_description}</p>
                        <h5>
                        Tecnologias
                        </h5>
                        <div className="proj-skills">
                        {project.Proj_skills.map((skill, i) => (
                            <img key={i} className="icon-skill-used-in-project" src={skill} alt="skill" />
                        ))}
                        </div>

                        {project.Proj_screens && project.Proj_screens.length > 0 && (
                        <h5>
                            Telas
                        </h5>
                        )}
                        {project.Proj_screens && project.Proj_screens.length > 0 && (
                        <div className="proj-screens">
                            {project.Proj_screens.map((screen, i) => (
                            <img className='screen-img'
                                key={i} src={screen.img} alt={screen.alt} />     
                            ))}
                        </div>
                        )}

                    </div>

                </div>

            </div>
            ))}

        </div>

    </section>

    )
}

export default Projects;