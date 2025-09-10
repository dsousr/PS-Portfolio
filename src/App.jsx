import './styles/Global.css'

/*Componentes*/
import Header from './components/header/Header'
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>

      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Footer/>

    </>
  )
}

export default App;