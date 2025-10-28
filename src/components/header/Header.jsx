import './Header.css'

function Header(){

return(

    <header className="header">

        <a href="#home" className="logo">
            <span className='highlight'>Pedro </span>Sousa
        </a>
        <nav className="navbar">

            <a href="#home" className="navbar-icons">
                Home
            </a>
            <a href="#about" className="navbar-icons">
                Sobre
            </a>
            <a href="#services" className="navbar-icons">
                Habilidades
            </a>
            <a href="#projects" className="navbar-icons">
                Projetos
            </a>

        </nav>

        <a className='btn'
        href='#contact'>
            Contate-me
        </a>

    </header>

)

}

export default Header;