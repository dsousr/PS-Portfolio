/* Skills */
import JSicon from '../../assets/skills/js.png'
import Reacticon from '../../assets/skills/react.png'
import Pythonicon from '../../assets/skills/py.png'
import HTMLicon from '../../assets/skills/html.png'
import Cssicon from '../../assets/skills/css.png'
import TailWindicon from '../../assets/skills/tailwind.png'
import Figmaicon from '../../assets/skills/figma.png'

/* Telas */
import CollabHome from '../../assets/screens/stories/collab-home.png'
import CollabLogin from '../../assets/screens/stories/collab-login.png'
import CollabRegister from '../../assets/screens/stories/collab-register.png'
import CollabStory from '../../assets/screens/stories/collab-story.png'

import MeteorHome from '../../assets/screens/meteor/meteor-home.png'
import MeteorGame from '../../assets/screens/meteor/meteor-game.png'

/* imgs */
import Portfolio from '../../assets/projects-img/portfolio.png'
import Stories from '../../assets/projects-img/stories.png'
import Automation from '../../assets/projects-img/automation.png'
import Game from '../../assets/projects-img/game.png'

export const PJS = [
  {
    Proj_img: Portfolio,
    Filters: ['all', 'front-end', 'design'],
    Proj_title: 'Portfólio',
    Proj_description: 'Para todo profissional de tecnologia e design, ter um portfólio para mostrar suas habilidades é fundamental. Apresentar seus trabalhos de forma clara é indispensável para qualquer desenvolvedor ou designer.',
    Proj_skills: [HTMLicon, Cssicon, Reacticon],
    Proj_link: 'https://github.com/dsousr/PS-Portfolio',
    Proj_status: 'Em evolução',
  },
  {
    Proj_img: Stories,
    Proj_title: 'Collab Stories',
    Filters: ['all' , 'front-end','game'],
    Proj_description: 'Projeto colaborativo desenvolvido com um amigo, no qual fui responsável pelo design da interface e pelo Front-End. Para jogar, é necessário criar uma conta com nome exibido (não exclusivo), ID único, e-mail e senha. Na Home, o usuário pode criar histórias, acessar suas histórias já criadas, ver seu perfil e pesquisar o perfil de outros jogadores. É possível convidar amigos para participar de uma história apenas após ela ser criada, sendo que cada jogador tem um tempo limite para contribuir.',
    Proj_skills: [HTMLicon, Cssicon, Reacticon],
    Proj_link: 'https://github.com/rafasilva9537/CollabStories/tree/design',
    Proj_status: 'Em andamento',
    Proj_screens: [
      { img: CollabLogin, alt: 'Tela de login do Collab Stories' },
      { img: CollabRegister, alt: 'Tela de registro do Collab Stories' },
      { img: CollabHome, alt: 'Tela inicial do Collab Stories' },
      { img: CollabStory, alt: 'Tela de história do Collab Stories' }
    ]
  },
  {
    Proj_img: Automation,
    Filters: ['all', 'automation'],
    Proj_title: 'Auto File Sorter',
    Proj_description: 'Organiza automaticamente arquivos de uma pasta. Ele cria subpastas específicas e move os arquivos de acordo com sua extensão: imagens (.png, .jpg, .gif) vão para a pasta Img, documentos (.pdf, .xml) para a pasta Documents, e instaladores (.exe, .msi) para a pasta Installers.',
    Proj_skills: [Pythonicon],
    Proj_link: 'https://github.com/dsousr/AutoFileSorter',
    Proj_status: 'Finalizado',
  },
  {
    Proj_img: Game,
    Filters: ['all', 'game'],
    Proj_title: 'Jogo de Meteoro',
    Proj_description: 'Jogo em Python usando Pygame onde o jogador controla uma nave/pixel para desviar de meteoros e coletar power-ups de escudo. Inclui tela inicial, pontuação, colisões e tela de game over.',
    Proj_skills: [Pythonicon],
    Proj_link: 'https://github.com/dsousr/Meteor-Run',
    Proj_status: 'Finalizado',
    Proj_screens: [
      { img: MeteorHome, alt: 'Tela inicial' },
      { img: MeteorGame, alt: 'Tela do jogo rodando ' },
    ]
  },
];