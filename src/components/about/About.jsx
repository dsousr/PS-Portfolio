import './About.css'

import Graduation from '../../assets/img/graduation.png'

function About(){

return(

    <section className="about" id="about">

        <div className="about-me">

            <h2>
                Sobre <span className='highlight'>mim</span>
            </h2>
            <p>
                Sou movido pela curiosidade de desvendar como as coisas funcionam e por transformar complexidade em clareza. 
                No design, encontro a intersecção perfeita entre lógica e criatividade onde cores, 
                formas e interações não só comunicam ideias, mas criam experiências intuitivas e significativas. 
                Crio soluções visuais que ligam problemas reais a resultados funcionais e impactantes.
            </p>

        </div>
        <div className="about-infs">

            <div className="card-about-infs">
                
                <img src={Graduation} alt="Imagem de Graduação" />
                <h3>               
                    Ciência da Computação
                </h3>
                <span>
                    6º Semestre - cursando
                </span>

            </div>

        </div>

    </section>

)

}

export default About;