import './Footer.css'

import GitHub from '../../assets/icons/github.png'
import LinkedIn from '../../assets/icons/linkedin.png'
import Email from '../../assets/icons/email.png'
import Insta from '../../assets/icons/instagram.png'

function Footer(){

return(

    <footer className="footer">

        <p className='animated-text'>
            Cada pixel, cada clique!
        </p>

        <div className="container-footer">

            <a className="contacts-footer"
            href='https://github.com/dsousr'>
                <img src={GitHub} alt="GitHub" />
                <p>
                    GitHub
                </p>
            </a>
            <a className="contacts-footer"
            href='https://www.instagram.com/dsousr.dev/'>
                <img src={Insta} alt="Instagram" />
                <p>
                    Instagram
                </p>
            </a>
            <a className="contacts-footer"
            href='https://www.linkedin.com/in/dsousr/'>
                <img src={LinkedIn} alt="LinkedIn" />
                <p>
                    LinkedIn
                </p>
            </a>
            <a className="contacts-footer"
            href='mailto:hnsousr@gmail.com'>
                <img src={Email} alt="Email: hnsousr@gmail.com" />
                <p>
                    hnsousr@gmail.com
                </p>
            </a>

        </div>

    </footer>

)

}

export default Footer;