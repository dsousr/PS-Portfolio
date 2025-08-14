import './Services.css'

/*Imagens */
import Design from '../../assets/services-skill/design.png'
import Code from '../../assets/services-skill/code.png'

/*skills*/
import JSicon from '../../assets/skills/js.png'
import Reacticon from '../../assets/skills/react.png'
import Pythonicon from '../../assets/skills/py.png'
import HTMLicon from '../../assets/skills/html.png'
import Cssicon from '../../assets/skills/css.png'
import TailWindicon from '../../assets/skills/tailwind.png'
import Figmaicon from '../../assets/skills/figma.png'
import Canva from '../../assets/skills/canva.png'

function Services(){

const services = [
    {
        service_icon: Design,
        service_title: 'Ui Design',
        Service_description: 'Crio interfaces intuitivas e visualmente atraentes, focando em UX e identidade visual, com prototipagem e design responsivo.',

        service_skills: [Figmaicon, Canva]
    },
    {
        service_icon: Code,
        service_title: 'Front-End',
        Service_description: 'Desenvolvo interfaces responsivas e acessíveis com HTML, CSS, JavaScript e React, seguindo boas práticas de código limpo e performance.',
        service_skills: [HTMLicon, Cssicon ,JSicon, Reacticon, TailWindicon]
    }
]

return(

    <section className="services" id="services">

        <h2>
            <span>Habilidades</span>
        </h2>
        <div className="container-services">

            {services.map((service, index) => (
                <div className="service-card">
                    <img className='Service-icon'
                    src={service.service_icon} alt={service.service_title} />
                    <h3>
                        {service.service_title}
                    </h3>
                    <p>
                        {service.Service_description}
                    </p>
                    <div className="skills-service">
                        {service.service_skills.map((skill, i) =>
                        <img key={i} src={skill} className="service-skill" alt=''/>
                        )}
                    </div>
                </div>
            ))}

        </div>

    </section>

)

}

export default Services;