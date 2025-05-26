import type { Project } from "@/app/data/data_portifolio";
import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";

// Componente de Card de Projeto
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
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ y: -5 }}
    className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer border ${
      project.siteUrl ? "border-red-950" : "border-gray-700"
    } hover:border-blue-400 transition-colors relative group`}
    onClick={onClick}
  >
    <div className="h-52 relative">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-300 mt-1">{project.shortDescription}</p>
      </div>
      <div className="absolute top-4 left-4 justify-between flex flex-wrap gap-2">
        {project.siteUrl ? (
          <span className="flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        ) : (
          <GitHub className="text-black/70"/>
        )}
      </div>
      <div className="absolute top-4 right-4 justify-between flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-900/80 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-gray-900/80 rounded-full text-xs">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);
