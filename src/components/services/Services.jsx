import './Services.css'

/*Imagens */
import Design from '../../assets/services-skill/design.png'
import Code from '../../assets/services-skill/code.png'
import Back from '../../assets/services-skill/back.png'

function Services(){

const services = [
    {
        service_icon: Design,
        service_title: 'Ui Design',
        Service_description: 'Desenvolvo interfaces focadas em experiência do usuário e identidade visual, criando protótipos e layouts responsivos enquanto aprimoro minhas habilidades em UX e design.',
    },
    {
        service_icon: Code,
        service_title: 'Front-End',
        Service_description: 'Aprendendo e desenvolvendo interfaces responsivas e acessíveis com HTML, CSS, JavaScript e React, aplicando boas práticas de código e buscando minha primeira experiência profissional na área.',
    },
    {
        service_icon: Back,
        service_title: 'Back-End',
        Service_description: 'Estou aprendendo e praticando desenvolvimento back-end com Python e Node.js, explorando boas práticas de código limpo, segurança e performance em pequenos projetos pessoais.',
    }
]

return(

    <section className="services" id="services">

        <h2>
            <span className='highlight'>Habilidades</span>
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
                </div>
            ))}

        </div>

    </section>

)

}

export default Services;