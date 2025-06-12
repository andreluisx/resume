export type Stack = {
  name: string;
  image: string;
  proficiency: number; // 1-5
};

export type Project = {
  title: string;
  images: string[];
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
  url?: string;
  teacher?: string;
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
  {
    name: "Django Rest Framework",
    image: "/images/stacks/rest.png",
    proficiency: 3,
  },
  { name: "MongoDB", image: "/images/stacks/mongodb.png", proficiency: 3 },
  { name: "PostgreSql", image: "/images/stacks/postgre.png", proficiency: 4 },
  { name: "MySql", image: "/images/stacks/mysql.png", proficiency: 4 },
  { name: "Docker", image: "/images/stacks/docker.png", proficiency: 3 },
];

export const projects: Project[] = [
  {
    title: "Partidas Personalizadas Rankeadas",
    images: ["/images/projects/teamdraft.png"],
    shortDescription: "Crie partidas rankeadas e balanceadas com amigos.",
    fullDescription:
      'Site onde podem podem ser criador "jogadores" com seu nível de habilidade. Pode-se criar partidas com varios parâmetros diferentes como pontos ou estrelas e nosso algoritmo vai balancear os times, ou o usuário pode criar manualmente com o sistema de drag and drop. Os dados de quem venceu e quem perdeu são salvos no banco, para calculos estatísticos futuros',
    githubUrl: "https://github.com/andreluisx/Sorteio-de-Times",
    technologies: [
      "Next.js",
      "TypeScript",
      "Nest.js",
      "TypeOrm",
      "Tailwind CSS",
    ],
    features: [
      "Autenticação JWT",
      "Algoritmo de Sorteio",
      "Cálculo de Dados",
      "Sistema de Drag and Drop",
      "Historico de Partidas Gerais e de Jogadores",
      "Sistema de Pontos com Base em Dificuldade",
    ],
  },
  {
    title: "Front-End E-commerce",
    images: ["/images/projects/ecommerce.png"],
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
    title: "Guess the Game",
    images: ["/images/projects/inicio.png"],
    shortDescription: "Descubra o jogo por imagens e dicas.",
    fullDescription: `Guess The Game, um jogo onde você precisa adivinhar o nome de um jogo apenas por imagens e dicas, com mecânicas de pontuação, vidas e muito mais! Estava querendo colocar algo simples e legal em produção, ao procurar por ideias me deparei com a API do igdb que tem um repertorio gigante de jogos. Foi ai que tive a ideia de fazer esse jogo, ele está bem simplificado você só precisa acertar o nome do jogo, nada de 2, :(alguma coisa), ll e etc, até eu que não conheço tantos jogos assim consegui brincar um pouco... Convido vocês a testarem.`,
    githubUrl: "https://github.com/andreluisx/guess-the-game-2",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    features: [
      "Consumo de API externa",
      "Leitura de dados da resposta",
      "Loading implementado",
      "Tratamento de Erros",
      "Salvamento de dados no localStorage",
      "Recursos pra evitar Spam na API",
    ],
    siteUrl: "https://guess-the-game-2-cuqh.vercel.app/",
  },
  {
    title: "Perfect Job",
    images: ["/images/projects/perfectjob.png"],
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
    title: "GitHub Finder",
    images: ["/images/projects/githubfinder.png"],
    shortDescription: "Consumindo a API do github para encontrar usuários.",
    fullDescription:
      "Pesquisa rápida de username de usuário do github para retornar os dados como imagem, nome, descrição",
    githubUrl: "https://github.com/andreluisx/github-finder",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Consumo de API externa",
      "Leitura de dados da resposta",
      "Loading implementado",
      "Tratamento de Erros",
    ],
  },
  {
    title: "Site de Gerenciamento de Tarefas",
    images: ["/images/projects/todo.png"],
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
];

export const certificates: Certificate[] = [
  {
    title: "Curso de Nest.js",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-c87c52e0-fa40-40ae-b0b2-7f89c7c120b6.jpg",
    description:
      "Curso de NestJS - crie seu backend API RESTful com TypeOrm, PostgreSQL, autenticação JWT, testes automatizados e padrões",
    issuer: "Udemy",
    date: "Maio 2025",
    url: "https://www.udemy.com/course/nestjs-curso-completo-rest-api-typeorm-jwt-e-mais",
    teacher: "Luíz Ótavio",
  },
  {
    title: "Curso de Node",
    image: "/images/certificates/certificado.png",
    description:
      "Imersão Alura com foco em back-end com node, explicação de conceitos básicos com express.",
    issuer: "Alura",
    date: "Dezembro 2024",
    url: "https://cursos.alura.com.br/user/andremice1/fullCertificate/51cce036db9988d2a48d37db88e76748",
    teacher: "Guilherme Silveira",
  },
];
