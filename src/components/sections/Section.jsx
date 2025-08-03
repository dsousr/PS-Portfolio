import './Section.css'
import '../../assets/styles/responsividade.css'

import Aside from './aside/Aside.jsx'
import Main from './main/Main.jsx'

function Section(){

return(

    <section id='Section-container'>

        <article>
            <Aside/>
        </article>
        <section className='Section-main'>
            <Main/>
        </section>

    </section>

)

}

export default Section;