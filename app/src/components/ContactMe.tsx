"use client";
import { GitHub, Email, WhatsApp, Instagram } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactSection = () => {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
              Vamos Criar Algo Incrível Juntos?
            </span>
          </h2>

          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Desenvolvo soluções completas, do back-end ao front-end, com
            JavaScript e Python.
            <span className="font-semibold text-blue-300">
              {" "}
              Entrego código limpo, escalável e pensado para gerar resultado de
              verdade.{" "}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card de Oportunidades */}
          <div className="lg:col-span-2 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-blue-500 hover:shadow-blue-500/20 transition-all">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-blue-400">
              Pronto para fazer a diferença no seu time:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              {[
                "Full-time (CLT ou PJ)",
                "Projetos estratégicos",
                "Times ágeis e tech squads",
                "Consultoria técnica"
              ].map((item) => (
                <li key={item} className="flex items-center justify-center">
                  <div className="relative flex justify-center items-center mr-4">
                    <span className="w-3 h-3 absolute -bottom-2 bg-green-400 rounded-full animate-ping"></span>
                    <span className="w-3 h-3 absolute -bottom-2 bg-green-500 rounded-full"></span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-blue-300 text-center italic">
              Disponível para trabalhar na sua cidade ou home office
            </p>
          </div>

          {/* Card de Contato Direto */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-slate-700 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-blue-300 mb-6">
                Contato Direto
              </h3>
              <p className="text-gray-300 mb-6">
                Vamos conversar sobre como posso agregar valor ao seu projeto ou equipe.
              </p>
            </div>
            
            <div className="space-y-4">
              <a
                href="mailto:andremice1@hotmai.com"
                className="flex items-center justify-center gap-3 p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-[1.02]"
              >
                <Email className="text-xl" />
                <span className="font-medium">Enviar Email</span>
              </a>
              <a
                href="https://wa.me/5575988133687"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-green-600 hover:bg-green-700 rounded-lg transition-all transform hover:scale-[1.02]"
              >
                <WhatsApp className="text-xl" />
                <span className="font-medium">Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-blue-300 mb-6">
            Me Siga nas Redes
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Acompanhe meus projetos e contribuições ou conecte-se para oportunidades profissionais.
          </p>
          
          <div className="flex justify-center gap-8">
            {[
              {
                icon: <LinkedInIcon className="text-4xl" />,
                label: "LinkedIn",
                url: "https://linkedin.com/in/andreluiss-dev/",
                color: "hover:text-blue-400"
              },
              {
                icon: <GitHub className="text-4xl" />,
                label: "GitHub",
                url: "https://github.com/andreluisx",
                color: "hover:text-gray-400"
              },
              {
                icon: <Instagram className="text-4xl" />,
                label: "Instagram",
                url: "https://instagram.com/andre_luissx",
                color: "hover:text-orange-600"
              }
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center group ${social.color} transition-colors`}
                aria-label={social.label}
              >
                <div className="p-4 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                  {social.icon}
                </div>
                <span className="mt-2 text-sm text-gray-300 group-hover:text-white">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-20 text-center border-t border-gray-700 pt-10">
          <p className="text-gray-400 italic">
            &ldquo;O sucesso é a soma de pequenos esforços repetidos dia após dia.&rdquo;
          </p>
          <p className="mt-2 text-gray-300">- Robert Collier</p>
          <p className="mt-6 text-gray-300">
            Obrigado por visitar meu portfólio. Espero que possamos trabalhar juntos em breve! :)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;