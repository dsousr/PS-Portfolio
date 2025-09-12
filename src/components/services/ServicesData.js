/*Imgs */
import Design from '../../assets/services-skill/design.png'
import Front from '../../assets/services-skill/front.png'
import Back from '../../assets/services-skill/back.png'

/*Icons */
import JSicon from '../../assets/skills/js.png'
import Reacticon from '../../assets/skills/react.png'
import Pythonicon from '../../assets/skills/py.png'
import Giticon from '../../assets/skills/git.png'
import Node from '../../assets/skills/nodeJS.png'
import HTMLicon from '../../assets/skills/html.png'
import Cssicon from '../../assets/skills/css.png'
import TailWindicon from '../../assets/skills/tailwind.png'
import Figmaicon from '../../assets/skills/figma.png'

export const Skills = [
  { icon: Pythonicon, title: 'Python' },
  { icon: JSicon, title: 'JavaScript' },
  { icon: Reacticon, title: 'React' },
  { icon: Node, title: 'Node.js' },
  { icon: Giticon, title: 'Git' },
  { icon: Figmaicon, title: 'Figma' },
  { icon: HTMLicon, title: 'HTML' },
  { icon: Cssicon, title: 'CSS' },
  { icon: TailWindicon, title: 'Tailwind CSS' },
]

export const services = [
  {
    service_icon: Design,
    service_title: 'UI Design',
    Service_description:
      'Criação de interfaces intuitivas, priorizando a usabilidade e a coerência da identidade visual.',
  },
  {
    service_icon: Front,
    service_title: 'Front-End',
    Service_description:
      'Criação de interfaces intuitivas e responsivas, focadas em proporcionar a melhor experiência para o usuário.'
  },
  {
    service_icon: Back,
    service_title: 'Back-End',
    Service_description:
      'Desenvolvimento back-end com foco em eficiência, boas práticas e código limpo.',
  },
]