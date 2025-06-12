import type { Project } from "@/app/data/data_portifolio";
import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.1,
      delay: index * 0.1,
    }}
    className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl cursor-pointer border border-gray-700 hover:border-blue-400 transition-all duration-300 group flex flex-col h-full"
    onClick={onClick}
  >
    {/* Container da Imagem (Topo do Card) */}
    <div className="relative h-60 w-full overflow-hidden">
      <Image
        src={project.images[0]}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        priority={index < 3}
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Badge de status (Online/GitHub) */}
      <div className="absolute top-3 left-3">
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

      {/* Tags de tecnologias */}
      <div className="absolute top-3 right-3 flex flex-wrap gap-2 max-w-[70%] justify-end">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-medium text-blue-100"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-300">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </div>

    {/* Container de Informações (Base do Card) */}
    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
        {project.title}
      </h3>
      <p className="text-gray-300 mt-2 text-sm line-clamp-2">
        {project.shortDescription}
      </p>

      {/* Botão implícito */}
      <div className="mt-4 pt-3 border-t border-gray-700/50 group-hover:border-blue-400/30 transition-colors">
        <span className="inline-flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
          Ver detalhes
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </div>
    </div>
  </motion.div>
);
