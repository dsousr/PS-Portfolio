import './Section.css'

import Aside from './aside/Aside.jsx'
import Main from './main/Main.jsx'

function Section(){

return(

    <section id='M-Section'>

        <article>
            <Aside/>
        </article>
        <main>
            <Main/>
        </main>

    </section>

)

}

export default Section;