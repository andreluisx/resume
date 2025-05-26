export type Stack = {
  name: string;
  image: string;
  proficiency: number; // 1-5
};

export type Project = {
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  githubUrl: string;
  siteUrl?: string;
  technologies: string[];
  features: string[];
};

export type Certificate = {
  title: string;
  image: string;
  description: string;
  issuer: string;
  date: string;
};

export const stacks: Stack[] = [
  { name: "Python", image: "/images/stacks/python.png", proficiency: 5 },
  {
    name: "JavaScript",
    image: "/images/stacks/javascript.png",
    proficiency: 5,
  },
  {
    name: "TypeScript",
    image: "/images/stacks/typescript.png",
    proficiency: 4,
  },
  { name: "React", image: "/images/stacks/react.png", proficiency: 5 },
  { name: "React Native", image: "/images/stacks/react.png", proficiency: 5 },
  { name: "Next.js", image: "/images/stacks/nextjs.png", proficiency: 4 },
  { name: "Nest.js", image: "/images/stacks/nestjs.png", proficiency: 4 },
  { name: "Django", image: "/images/stacks/django.png", proficiency: 5 },
  { name: "Node.js", image: "/images/stacks/nodejs.png", proficiency: 4 },
  { name: "Tailwind", image: "/images/stacks/tailwind.png", proficiency: 5 },
  { name: "Django Rest Framework", image: "/images/stacks/rest.png", proficiency: 3 },
  { name: "MongoDB", image: "/images/stacks/mongodb.png", proficiency: 3 },
  { name: "PostgreSql", image: "/images/stacks/postgre.png", proficiency: 4 },
  { name: "MySql", image: "/images/stacks/mysql.png", proficiency: 4 },
  { name: "Docker", image: "/images/stacks/docker.png", proficiency: 3 },
];

export const projects: Project[] = [
  {
    title: "Front-End E-commerce",
    image: "/images/projects/ecommerce.png",
    shortDescription: "Front-end para e-commerce criado com React",
    fullDescription:
      "Telas completas para utilização em um e-commerce básico, criado com design responsivo, codigo escalável, e bem organizado.",
    githubUrl: "https://github.com/andreluisx/e-commerce",
    siteUrl: "https://e-commerce-two-tau-85.vercel.app/",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    features: [
      "HomePage",
      "Carrinho de compras",
      "Telas de compra completa",
      "Seção de avaliações do produto",
    ],
  },
  {
    title: "Perfect Job",
    image: "/images/projects/perfectjob.png",
    shortDescription: "Resposta gerada com prompt de IA do google [Gemini]",
    fullDescription:
      "Aplicação feita com o intuito de aprendizado em Node.js e integração com Inteligência Artificial, onde recebemos um texto do usuario se auto descrevendo para retornar com qual trabalho ele se encaixaria melhor e explicação de como ele conseguiria trabalhar com isso e como funciona.",
    githubUrl:
      "https://github.com/andreluisx/FoundYourPerfectJob?tab=readme-ov-file",
    technologies: ["Node.js", "JavaScript", "React Native", "Expo", "Gemini"],
    features: [
      "Input para leitura do prompt",
      "Resultado do Trabalho gerado pela IA",
      "Histórico de Resultados",
    ],
  },
  {
    title: "Site de Gerenciamento de Tarefas",
    image: "/images/projects/todo.png",
    shortDescription: "Todo List criada com React",
    fullDescription:
      "Aplicativo de gerenciamento de tarefas simples com um CRUD feito em memoria. Meu primeiro contato com React",
    githubUrl: "https://github.com/andreluisx/React-ToDo",
    siteUrl: "https://react-to-do-mu-one.vercel.app/",
    technologies: ["React", "JavaScript", "TailWind CSS"],
    features: [
      "Criar tarefa",
      "Deletar tarefa",
      "Editar tarefa",
      "Ver detalhes da tarefa",
    ],
  },
  {
    title: "Partidas Personalizadas Rankeadas",
    image: "/images/projects/teamdraft.png",
    shortDescription: "Crie partidas rankeadas e balanceadas com amigos.",
    fullDescription:
      'Site onde podem podem ser criador "jogadores" com seu nível de habilidade. Pode-se criar partidas com varios parâmetros diferentes como pontos ou estrelas e nosso algoritmo vai balancear os times, ou o usuário pode criar manualmente com o sistema de drag and drop. Os dados de quem venceu e quem perdeu são salvos no banco, para calculos estatísticos futuros',
    githubUrl: "https://github.com/andreluisx/Sorteio-de-Times",
    technologies: ["Next.js", "TypeScript", "Nest.js", "TypeOrm", "Tailwind CSS"],
    features: [
      "Autenticação JWT",
      "Algoritmo de Sorteio",
      "Cálculo de Dados",
      "Sistema de Drag and Drop",
      "Historico de Partidas Gerais e de Jogadores",
      "Sistema de Pontos com Base em Dificuldade",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Curso de Nest.js",
    image: "/images/projects/perfectjob.png",
    description:
      "Certificação em conceitos avançados de React incluindo hooks customizados, context API, renderização otimizada e padrões de composição.",
    issuer: "Plataforma de Cursos Tech",
    date: "Junho 2023",
  },
  
];
