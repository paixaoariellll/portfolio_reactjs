import {
  IoCheckmarkCircleSharp,
  IoCheckmarkCircleOutline,
  IoLogoCss3,
  IoLogoJavascript
} from 'react-icons/io5';
import { AiFillHome, AiFillIdcard, AiFillProject, AiFillHtml5 } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';
import { VscChecklist } from 'react-icons/vsc';
import Me from '../public/Me.jpg'
import {
  SiCsharp,
  SiDotnet,
  SiJava,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';
import project01 from '../public/project01.jpeg';
import project02 from '../public/project02.jpeg';
import project03 from '../public/project03.jpeg';
import project04 from '../public/project04.jpeg';
import project05 from '../public/project05.jpeg';
import project06 from '../public/project06.jpeg';

export const projects = [
  {
    id: 'project01',
    imgUrl: project01,
    link: 'https://gameon-e-commerce.vercel.app',
    title: 'E-commerce fullstack',
    description: 'Um e-commerce é uma plataforma online para compras e vendas de produtos e serviços. As principais funcionalidades de um e-commerce incluem: um catálogo de produtos, um carrinho de compras, um processo de checkout seguro e fácil de usar, uma funcionalidade de gestão de pedidos e relatórios e análises para ajudar os administradores a entender o desempenho do site e tomar decisões estratégicas.',
    fadeIn: 'right',
  },
  {
    id: 'project02',
    imgUrl: project02,
    link: 'https://quizz-aplicativo-javascript.vercel.app',
    title: 'Quizz JavaScript',
    description: 'Um quizz é um tipo de jogo ou teste que consiste em perguntas e respostas, geralmente com o objetivo de avaliar o conhecimento ou habilidade do jogador. Algumas das principais funcionalidades de um quizz podem incluir, perguntas, respostas e pontuação final.',
    fadeIn: 'down',
  },
  {
    id: 'project03',
    imgUrl: project03,
    link: 'https://controle-one.vercel.app',
    title: 'Controle Financeiro Pessoal',
    description: 'Desenvolvi um site de notícias usando o React e o Next.js. O site apresenta as últimas notícias de diversas fontes e permite que os usuários pesquisem por assuntos específicos.',
    fadeIn: 'left',
  },
  {
    id: 'project04',
    imgUrl: project04,
    link: 'https://academia-reactjs.vercel.app',
    title: 'Site da Academia Evolution',
    description: 'Uma página web é um documento que é exibido em um navegador da web e pode conter texto, imagens, vídeos, links e outros elementos. Algumas das principais funcionalidades de uma página web incluem: vizualiação e navegação pelos dados reais da empresa.',
    fadeIn: 'right',
  },
  {
    id: 'project05',
    imgUrl: project05,
    link: 'https://ariel-paixao.vercel.app',
    title: 'Site Pessoal',
    description: 'Uma página web é um documento que é exibido em um navegador da web e pode conter texto, imagens, vídeos, links e outros elementos. Algumas das principais funcionalidades de uma página web incluem: vizualiação e navegação pelos dados reais da empresa..',
    fadeIn: 'up',
  },
  {
    id: 'project06',
    imgUrl: project06,
    link: 'https://tarefas-ariel.vercel.app',
    title: 'Site Lista de Tarefas',
    description: 'Uma página web to-do list é uma ferramenta online que permite que os usuários criem e gerenciem listas de tarefas. Algumas das principais funcionalidades de uma página web to-do list podem incluir: lista de tarefas, edição, criação de novas tarefas e delete de tarefas já realizadas .',
    fadeIn: 'left',
  },
];

export const skills = [
  {
    name: 'HTML_5',
    percentage: 95,
    icon: AiFillHtml5,
    color: '#FF0000',
    time: 0.25,
  },
  {
    name: 'CSS_3',
    percentage: 95,
    icon: IoLogoCss3,
    color: '#007ACC',
    time: 0.5,
  },
  {
    name: 'JAVASCRIPT',
    percentage: 70,
    icon: IoLogoJavascript,
    color: '#FFFF00',
    time: 0.75,
  },
  { name: '.NET', percentage: 50, icon: SiDotnet, color: '#800080', time: 1.0 },
  { name: 'C#', percentage: 50, icon: SiCsharp, color: '#00FF00', time: 1.25 },
  { name: 'JAVA', percentage: 65, icon: SiJava, color: '#A52A2A', time: 1.5 },
  {
    name: 'REACT_JS',
    percentage: 60,
    icon: SiReact,
    color: '#6E24FF',
    time: 1.75,
  },
  {
    name: 'NODE_JS',
    percentage: 65,
    icon: SiNodedotjs,
    color: '#339933',
    time: 2.0,
  },
  {
    name: 'TYPESCRIPT',
    percentage: 50,
    icon: SiTypescript,
    color: '#0000ff',
    time: 2.25,
  },
  {
    name: 'NEXT_JS',
    percentage: 85,
    icon: SiNextdotjs,
    color: '#212121',
    time: 2.5,
  },
];

export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: project01,
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: project02,
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: project03,
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: project04,
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: project05,
    title: 'Hawkins Labs',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];

export const links = [
  {
    label: 'Aperfeiçoamento',
    id: 'item-1',
    icon: IoCheckmarkCircleSharp,
    description:
      'Focar em aprender novas tecnologias e aperfeiçoar minhas habilidades atuais.',
  },
  {
    label: 'Impacto',
    id: 'item-2',
    icon: IoCheckmarkCircleSharp,
    description:
      'Encontrar projetos que tenham um significado pessoal para você e que possam ter um impacto positivo na comunidade.',
  },
  {
    label: 'Carreira',
    id: 'item-3',
    icon: IoCheckmarkCircleOutline,
    description:
      'Desenvolver uma base sólida de conhecimentos e habilidades e estabelecer uma carreira bem-sucedida como programador.',
  },
  {
    label: 'Colaboração',
    id: 'item-4',
    icon: IoCheckmarkCircleSharp,
    description:
      'Trabalhar em equipe com outros programadores pode ser uma ótima maneira de aprender e crescer em sua carreira.',
  },
  {
    label: 'Ensino',
    id: 'item-5',
    icon: IoCheckmarkCircleSharp,
    description:
      'Compartilhar meus conhecimentos e experiências com outras pessoas que estão interessadas em aprender a programar.',
  },
];

export const navbarItems = [
  {
    icon: AiFillHome,
    href: '#Hero',
    title: 'Inicio',
  },
  {
    icon: AiFillIdcard,
    href: '#About',
    title: 'Quem sou eu?',
  },
  {
    icon: FaUserGraduate,
    href: '#Formação',
    title: 'Formação',
  },
  {
    icon: HiInformationCircle,
    href: '#Me',
    title: 'Projetos',
  },
  {
    icon: AiFillProject,
    href: '#Objectives',
    title: 'Missão Visão e Valores',
  },
  {
    icon: VscChecklist,
    href: '#Ideas',
    title: 'Ideias',
  },
];

export const feedbacks = {
  messages: [
    {
      name: 'Caio Abreu',
      image: Me,
      description: 'Excelente trabalho no novo recurso! A implementação ficou muito clara e fácil de entender.',
      fadeIn: 'up'
    },
    {
      name: 'Gabriel Augusto',
      image: Me,
      description: 'Obrigado por sua dedicação em corrigir o bug na função de login. Agora o sistema está rodando sem problemas.',
      fadeIn: 'down'
    },
    {
      name: 'Pedro Paulo',
      image: Me,
      description: 'Gostaria de expressar minha gratidão pelo seu trabalho na melhoria da performance do aplicativo.',
      fadeIn: 'up'
    },
    {
      name: 'José Antonio',
      image: Me,
      description: 'Gostaria de expressar minha gratidão pelo seu trabalho na melhoria da performance.',
      fadeIn: 'down'
    },
  ],
};
