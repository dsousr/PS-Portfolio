import './Home.css'

import GitHub from '../../assets/icons/github.png'
import LinkedIn from '../../assets/icons/linkedin.png'

import Photo from '../../assets/img/photo.jpg'

const social = [
    {
        social_icon: GitHub,
        social_title:'GitHub',
        social_link: 'https://github.com/dsousr'
    },
    {
        social_icon: LinkedIn,
        social_title:'LinkedIn',
        social_link: 'https://www.linkedin.com/in/dsousr/'
    }
]

function Home(){

return(

    <section className="home" id="home">

        <div className="home-content">

            <h1>
                Olá, eu sou o <span className='highlight'>Pedro</span>
            </h1>
            <h3>
                Estudante de <span className='highlight'>Desenvolvimento Web </span>e <span className='highlight'>UI/UX Design</span>
            </h3>
            <p>
                Atualmente cursando Ciência da Computação, venho explorando e praticando
                o desenvolvimento de interfaces modernas, focadas em usabilidade e design intuitivo!
            </p>
            <div className="social-icons">
                
                {social.map((item, i) => (
                    <a key={i} href={item.social_link} target='_blank'>
                        <img src={item.social_icon} alt={item.social_title} />
                    </a>
                ))}

            </div>
            <div className='btn-header-in-home'>               
                <a className='btn-home'
                href='mailto:hnsousr@gmail.com'>
                    Contate-me
                </a>
            </div>  
        </div>
        <a className="home-img"
        href='#about'>
            <img src={Photo} alt="Pedro Sousa" />
        </a>

    </section>

)

}

export default Home;