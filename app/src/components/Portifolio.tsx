"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DynamicHeading from './ui/DynamicHeading';
import { certificates, projects, stacks, type Certificate, type Project } from '@/app/data/data_portifolio';
import { TechGlowCard } from './portifolioComponentes/TechGlowCard';
import { ProjectCard } from './portifolioComponentes/ProjectCard';
import { CertificateCard } from './portifolioComponentes/CertificateCard';
import { ProjectModal } from './portifolioComponentes/ProjectModal';
import { CertificateModal } from './portifolioComponentes/CertificateModal';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'stacks' | 'projects' | 'certificates'>('stacks');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <div className="min-h-screen text-white py-16 bg-gray-900 relative overflow-hidden">
      {/* Efeitos de Fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-10"></div>
      </div>

      {/* Cabeçalho Dinâmico */}
      <div className="relative z-10 pt-7">
      <DynamicHeading
          texts={["Portifólio"]}
          className="text-5xl md:text-7xl font-bold text-center mb-16"
          highlightClass="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300"
        />
        <p className="text-center text-gray-400 max-w-2xl mx-auto px-4">
          Explore meu conjunto de habilidades, trabalhos realizados e conquistas acadêmicas
        </p>
      </div>

      {/* Abas */}
      <div className="flex justify-center my-16 relative z-10 ">
        <div className="flex space-x-1 rounded-full bg-gray-800 p-1 border border-gray-700 shadow-lg">
          {(['stacks', 'projects', 'certificates'] as const).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md '
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab === 'stacks' && 'Tecnologias'}
              {tab === 'projects' && 'Projetos'}
              {tab === 'certificates' && 'Certificados'}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Seção de Tecnologias */}
            {activeTab === 'stacks' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {stacks.map((stack, index) => (
                  <TechGlowCard
                    key={stack.name}
                    name={stack.name}
                    image={stack.image}
                    proficiency={stack.proficiency}
                    index={index}
                  />
                ))}
              </div>
            )}

            {/* Seção de Projetos */}
            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            )}

            {/* Seção de Certificados */}
            {activeTab === 'certificates' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((certificate, index) => (
                  <CertificateCard
                    key={certificate.title}
                    certificate={certificate}
                    index={index}
                    onClick={() => setSelectedCertificate(certificate)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal de Projeto */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Modal de Certificado */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal 
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;