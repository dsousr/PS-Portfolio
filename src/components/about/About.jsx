import './About.css'

/*Icons */
import JSicon from '../../assets/skills/js.png'
import Reacticon from '../../assets/skills/react.png'
import Pythonicon from '../../assets/skills/py.png'
import Giticon from '../../assets/skills/git.png'

import HTMLicon from '../../assets/skills/html.png'
import Cssicon from '../../assets/skills/css.png'
import TailWindicon from '../../assets/skills/tailwind.png'
import Figmaicon from '../../assets/skills/figma.png'

function About(){

const SkillsBack = [
    {icon: Pythonicon, title: 'Python'},
    {icon: JSicon, title: 'Java Script'},
    {icon: Reacticon, title: 'React'},
    {icon: Giticon, title: 'Git'}
]  

const SkillsFront = [
    {icon: Figmaicon, title: 'Figma'},
    {icon: HTMLicon, title: 'HTML'},
    {icon: Cssicon, title: 'Css'},
    {icon: TailWindicon, title: 'TailWind Css'},
]

return(

    <section className="about" id="about">

        <div className="about-me">

            <h2>
                Sobre <span>mim</span>
            </h2>
            <p>
                Sou movido pela curiosidade de desvendar como as coisas funcionam e por transformar complexidade em clareza. 
                No design, encontro a intersecção perfeita entre lógica e criatividade onde cores, 
                formas e interações não só comunicam ideias, mas criam experiências intuitivas e significativas. 
                Meu trabalho é bridge entre problemas reais e soluções visuais que equilibram funcionalidade e impacto.
            </p>

        </div>
        <div className="about-skills">

            <h2>
                <span>Tecnologias</span>
            </h2>
            <div className="skillscontainer">

                    <div className="skills-group">

                        {SkillsFront.map((skill, index) => (
                            <div className="skill-card">
                                <img src={skill.icon} alt={skill.title}/>
                                <p>
                                    {skill.title}
                                </p>
                            </div>
                        ))}

                    </div>
                    <div className="skills-group">

                        {SkillsBack.map((skill, index) => (
                            <div className="skill-card">
                                <img src={skill.icon} alt={skill.title} />
                                <p>
                                    {skill.title}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

        </div>

    </section>

)

}

export default About;