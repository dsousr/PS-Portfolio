import './Services.css'

import {Skills, services} from './ServicesData'

function Services(){

return(

    <section className="services" id="services">

        <h2>
            <span className='highlight'>Habilidades</span>
        </h2>
        <div className="container-services">

            {services.map((service, i) => (
                <div className="service-card" key={i}>
                    <img className='Service-icon'
                    src={service.service_icon} alt={service.service_title} />
                    <h3>
                        {service.service_title}
                    </h3>
                    <p>
                        {service.Service_description}
                    </p>
                </div>
            ))}

        </div>
        <div className="carousel">

            <div className="running">
                {Skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <img src={skill.icon} alt={skill.title}/>
                        <p>{skill.title}</p>
                    </div>
                ))}
                {Skills.map((skill, index) => (
                    <div className="skill-card" key={index + Skills.length}>
                        <img src={skill.icon} alt={skill.title}/>
                        <p>{skill.title}</p>
                    </div>
                ))}
                
            </div>

        </div>

    </section>

)

}

export default Services;