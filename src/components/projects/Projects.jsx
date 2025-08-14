import './Projects.css'

/*Icons */
import JSicon from '../../assets/skills/js.png'
import Reacticon from '../../assets/skills/react.png'
import Pythonicon from '../../assets/skills/py.png'
import HTMLicon from '../../assets/skills/html.png'
import Cssicon from '../../assets/skills/css.png'
import TailWindicon from '../../assets/skills/tailwind.png'
import Figmaicon from '../../assets/skills/figma.png'

/*imgs*/
import Portfolio from '../../assets/projects-img/Portfolio.png'
import Stories from '../../assets/projects-img/stories.png'

function Projects(){

const PJS = [
    {
        Proj_img: Portfolio,
        Proj_title: 'Portfólio',
        Proj_description: 'Para todo profissional de tecnologia e design, ter um portfólio para mostrar suas habilidades é fundamental. Apresentar seus trabalhos de forma de forma clara e indíspenável para qualquer desenvolvedor ou designer.',
        Proj_skills: [HTMLicon, Cssicon, Reacticon],
        Proj_link: 'https://github.com/dsousr/PS-Portfolio',
        Proj_status: 'Finalizado'
    },
    {
        Proj_img: Stories,
        Proj_title: 'Collab Stories',
        Proj_description: 'Para jogar, ẻ necessário criar uma conta. Cada jogador lera um nome exibido e um nome de usuário único. Além disso, cada participante dispõe de um tempo máximo para colaborar com a história.',
        Proj_skills: [HTMLicon, TailWindicon, Reacticon],
        Proj_link: 'https://github.com/rafasilva9537/CollabStories',
        Proj_status: 'Em andamento'
    }
]

return(

    <section className="projects" id="projects">

        <h2>
            <span>Projetos</span>
        </h2>
        <div className="projects-container">

            {PJS.map((project, index) => (
                <div className="proj-card"
                key={index}>
                    <div className="Pj-img-container">
                        <img src={project.Proj_img} alt="" />
                    </div>
                    <h3>
                        {project.Proj_title}
                    </h3>
                    <p className='p-description'>
                        {project.Proj_description}
                    </p>
                    <ul className='proj-skills'>
                        {project.Proj_skills.map((skill, skillIndex) => 
                        <li key={skillIndex}>
                            <img className='icon-skill-used-in-project'
                            src={skill}/>
                        </li>
                        )}
                    </ul>
                    <div className="proj-more-infs">
                        <a href={project.Proj_link} target='_blank'>
                            Ver projeto
                        </a>
                        <p>
                            {project.Proj_status}
                        </p>
                    </div>
                </div>
            ))}

        </div>


    </section>

)

}

export default Projects;