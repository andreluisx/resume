import type { Project } from '@/app/data/data_portifolio';
import { GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from "next/image";
// Componente de Modal de Projeto
export const ProjectModal = ({ project, onClose }: { project: Project, onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 50 }}
      className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-64 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <p className="mt-4 text-gray-300">{project.fullDescription}</p>
        
        <div className="mt-6">
          <h4 className="font-medium mb-2">Principais Funcionalidades:</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6">
          <h4 className="font-medium mb-2">Tecnologias utilizadas:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex gap-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border gap-2 border-white/20 items-center px-6 py-3 bg-black rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <GitHub/>
            Ver no GitHub
          </a>
          {project.siteUrl && <a
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Entrar no Site
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>}
        </div>
      </div>
    </motion.div>
  </motion.div>
);