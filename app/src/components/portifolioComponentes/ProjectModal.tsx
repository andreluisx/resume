import type { Project } from "@/app/data/data_portifolio";
import { GitHub, Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Carrossel de Imagens */}
        <div className="relative h-80 w-full overflow-hidden group">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                zIndex: index === currentImageIndex ? 10 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image}
                alt={`${project.title} - Imagem ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </motion.div>
          ))}

          {/* Navegação do Carrossel */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-gray-900/50 hover:bg-gray-900/80 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Imagem anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-gray-900/50 hover:bg-gray-900/80 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Próxima imagem"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Indicadores de Imagem */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-blue-400 w-4"
                      : "bg-gray-500/50 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Badge de Status */}
          <div className="absolute top-4 left-4 z-20">
            {project.siteUrl ? (
              <div className="flex items-center bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold text-green-400">Live</span>
              </div>
            ) : (
              <div className="flex items-center bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <GitHub className="text-gray-300 mr-1" fontSize="small" />
                <span className="text-xs font-semibold text-gray-300">Code</span>
              </div>
            )}
          </div>

          {/* Botão Fechar */}
          <button
            onClick={onClose}
            className="absolute flex cursor-pointer justify-center items-center top-4 h-10 w-10 right-4 z-20 p-2 rounded-full bg-gray-900/50 hover:bg-gray-900/80 transition-all text-gray-300 hover:text-white"
            aria-label="Fechar modal"
          >
            <Close fontSize="medium" />
          </button>
        </div>

        {/* Conteúdo do Modal */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Seção de Funcionalidades */}
          <div className="mt-8">
            <h4 className="font-medium text-lg mb-3 text-blue-300">
              Principais Funcionalidades
            </h4>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seção de Tecnologias */}
          <div className="mt-8">
            <h4 className="font-medium text-lg mb-3 text-blue-300">
              Tecnologias Utilizadas
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-700/50 backdrop-blur-sm rounded-full text-sm font-medium text-blue-300 border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links do Projeto */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-lg font-medium transition-colors border border-gray-700 hover:border-blue-400 text-white"
            >
              <GitHub />
              Ver no GitHub
            </a>
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 rounded-lg font-medium transition-all text-white shadow-lg hover:shadow-blue-500/20"
              >
                Acessar Projeto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};