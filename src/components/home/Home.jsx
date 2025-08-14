import './Home.css'

import GitHub from '../../assets/icons/github.png'
import LinkedIn from '../../assets/icons/linkedin.png'

import Photo from '../../assets/img/photo.jpg'

function Home(){

return(

    <section className="home" id="home">

        <div className="home-content">

            <h1>
                Olá, eu sou o <span>Pedro</span>
            </h1>
            <h3>
                Estudante de <span>Desenvolvimento Web </span>e <span>Ui/Ux Design</span>
            </h3>
            <p>
                Atualmente cursando Ciência da Computação, venho explorando e praticando
                o desenvolvimento de interfaces modernas, focadas em usabilidade e design intuitivo!
            </p>
            <div className="social-icons">
                <a href="https://github.com/dsousr">
                    <img src={GitHub} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/dsousr/">
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
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