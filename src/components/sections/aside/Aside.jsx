import './aside.css'

import Photo from '../../../assets/imgs/photo.png'
import Graduation from '../../../assets/imgs/icons/graduation.png'
import LinkedIn from '../../../assets/imgs/icons/linkedIn.png'
import GitHub from '../../../assets/imgs/icons/github.png'
import Email from '../../../assets/imgs/icons/email.png'

function Aside(){

return(

    <aside className='profile-card'>
    
        <img src={Photo} alt="Pedro Sousa" className="photo" />
        <h2 className='Name'>Pedro Sousa</h2>
                    
        <div className="container-graduation">
            <img src={Graduation} alt="Ciência da Computação" className='img-icon-card' />
            <div className="education-info">
                <p className="education-course">Ciência da Computação</p>
                <span>(6° Semestre)</span>
            </div>
        </div>         
        <p className="bio">
            Olá! Me chamo Pedro, sou estudante de Ciência da Computação com foco em desenvolvimento   
            <span className='highlight'> Front-end </span> e  
            <span className='highlight'> Ui/Ux Design </span> 
            Sou apaixonado por criar interfaces intuitivas e funcionais, utilizando ferramentas como 
            <span className='highlight'> React</span> e <span className='highlight'>Figma</span>.
        </p>          
        <ul className="container-Social-Media">
            <li>
                <a href="https://github.com/dsousr" target='_blank' rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub" className="img-icon-card"/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/dsousr/" target='_blank' rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn" className="img-icon-card"/>
                </a>
            </li>
        </ul>                   
        <div className="email-container">
            <a href="mailto:hnsousr@gmail.com">
            <img src={Email} alt="Enviar email" className='img-icon-card'/>
            </a>
            <a href="mailto:hnsousr@gmail.com">
                hnsousr@gmail.com
            </a>
        </div>
             
    </aside>

)

}

export default Aside;