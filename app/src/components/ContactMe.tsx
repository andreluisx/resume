"use client";
import { GitHub, Email, WhatsApp } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const ContactSection = () => {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Vamos Criar Algo Incrível Juntos?
            </span>
          </h2>

          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Se você está procurando um profissional dedicado, criativo e
            apaixonado por transformar ideias em realidade,
            <span className="font-semibold text-blue-300">
              {" "}
              você acabou de encontrá-lo.
            </span>{" "}
            Estou pronto para colaborar em projetos desafiadores e entregar
            soluções que superem expectativas.
          </p>

          <div className="bg-gray-800 rounded-lg p-8 shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">
              Disponível para oportunidades:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Projetos Freelance
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Colaborações Inovadoras
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Posições CLT/PJ
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Mentoria e Consultoria
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-300">
              Entre em Contato
            </h3>
            <p className="text-gray-300">
              Quer discutir um projeto, tirar dúvidas ou apenas bater um papo
              sobre tecnologia? Estou sempre aberto a novas conexões e
              oportunidades.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:andremice1@hotmai.com"
                className="flex items-center text-lg hover:text-blue-300 transition-colors"
              >
                <Email className="mr-3 text-xl" />
                andremice1@hotmail.com
              </a>
              <a
                href="https://wa.me/5575988133687"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg hover:text-green-400 transition-colors"
              >
                <WhatsApp className="mr-3 text-xl" />
                (75) 98813-3687
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-300">Redes Sociais</h3>
            <p className="text-gray-300">
              Conecte-se comigo nas redes sociais para acompanhar meu trabalho,
              projetos pessoais e insights sobre desenvolvimento.
            </p>

            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/andreluiss-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/andreluisx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center border-t border-gray-700 pt-10">
          <p className="text-gray-400">
            "O sucesso é a soma de pequenos esforços repetidos dia após dia." -
            Robert Collier
          </p>
          <p className="mt-4 text-gray-300">
            Obrigado por visitar meu portfólio. Espero que possamos trabalhar
            juntos em breve!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
