import {
  IoCheckmarkCircleSharp,
  IoCheckmarkCircleOutline,
  IoLogoCss3,
  IoLogoJavascript
} from 'react-icons/io5';
import { AiFillHome, AiFillIdcard, AiFillProject, AiFillHtml5 } from 'react-icons/ai';
import { FaUserGraduate, FaShippingFast } from 'react-icons/fa';
import { HiInformationCircle, HiOutlineDocumentSearch } from 'react-icons/hi';
import { MdPayment } from 'react-icons/md';
import { VscChecklist } from 'react-icons/vsc';
import { RiLoginBoxLine } from 'react-icons/ri';
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
import api1 from '../public/portal.png';
import api2 from '../public/vs0.png';
import api3 from '../public/vs1.png';


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

export const iconSteps = [
  {
    path: 'login',
    display: 'Autenticação',
    icon: RiLoginBoxLine,
  },
  {
    path: 'shipping',
    display: 'Endereço de entrega',
    icon: FaShippingFast,
  },
  {
    path: 'payment',
    display: 'Método de pagamento',
    icon: MdPayment,
  },
  {
    path: 'placeOrder',
    display: 'Revisão da compra',
    icon: HiOutlineDocumentSearch,
  },
];

export const Cep = {
  cep01: [
    {
      id: 'camp-01',
      name: 'Rua',
      type: 'address',
      fadeIn: 'up',
    },
    {
      id: 'camp-02',
      name: 'Bairro',
      type: 'neighborhood',
      fadeIn: 'up',
    },
    {
      id: 'camp-03',
      name: 'Cidade',
      type: 'city',
      fadeIn: 'up',
    },
    {
      id: 'camp-04',
      name: 'Estado',
      type: 'state',
      fadeIn: 'up',
    },
  ],
};

export const exploreWorlds = [
  {
    id: 'CEP',
    imgUrl: api1,
    title: 'CEP',
    content: 'Digite o número do CEP que deseja pesquisar',
  },
  {
    id: 'CNPJ',
    imgUrl: api2,
    title: 'CNPJ',
    content: 'Digite o número do CEP que deseja pesquisar',

  },
  {
    id: 'Clima',
    imgUrl: api3,
    title: 'Clima',
    content: 'Digite o nome da cidade que deseja pesquisar',
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
/* 
https://www.shadertoy.com/embed/4sXBRn? agua viva
https://www.shadertoy.com/embed/7dyyRy? sound 
https://www.shadertoy.com/embed/ldd3DB? peixes
https://www.shadertoy.com/embed/XtGGRt? aurora
https://www.shadertoy.com/embed/4ttSWf? floresta de montanhas
https://www.shadertoy.com/embed/MsVXWW? Nebulosa de fogo
https://www.shadertoy.com/embed/4dSfDK? Circulo negra
https://www.shadertoy.com/embed/XsjGRd? Planeta terra
https://www.shadertoy.com/embed/4t3BWl? Matrix
*/
export const Cnpj = {
  cnpj01: [
    {
      id: 'camp-01',
      name: 'Razão Social',
      type: 'razao_social',
      fadeIn: 'up',
    },
    {
      id: 'camp-02',
      name: 'Nome Fantasia',
      type: 'nome_fantasia',
      fadeIn: 'up',
    },
    {
      id: 'camp-03',
      name: 'CNPJ',
      type: 'cnpj',
      fadeIn: 'up',
    },
    {
      id: 'camp-04',
      name: 'Cnae Fiscal',
      type: 'cnae_fiscal',
      fadeIn: 'up',
    },
    {
      id: 'camp-05',
      name: 'CNAE Fiscal Descrição',
      type: 'cnae_fiscal_descricao',
      fadeIn: 'up',
    },
    {
      id: 'camp-06',
      name: 'Natureza Juridíca',
      type: 'natureza_juridica',
      fadeIn: 'up',
    },
    {
      id: 'camp-07',
      name: 'Situação Cadastral',
      type: 'situacao_cadastral',
      fadeIn: 'up',
    },
    {
      id: 'camp-08',
      name: 'Situação Cadastral Descrição',
      type: 'descricao_situacao_cadastral',
      fadeIn: 'up',
    },
  ],
};

export const temas = [
  {
    link: '4sXBRn',
    display: 'Agua Viva'
  },
  {
    link: '7dyyRy',
    display: 'Onda Musical'
  },
  {
    link: 'ldd3DB',
    display: 'Pegue os Peixes'
  },
  {
    link: 'XtGGRt',
    display: 'Aurora'
  },
  {
    link: '4ttSWf',
    display: 'Floresta Montanhosa'
  },
  {
    link: 'MsVXWW',
    display: 'Nebulosa de fogo'
  },
  {
    link: '4dSfDK',
    display: 'Círculo Sombrio'
  },
  {
    link: 'XsjGRd',
    display: 'Planeta terra'
  }, {
    link: '4t3BWl',
    display: 'Matrix'
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

