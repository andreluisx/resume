import type { Certificate } from "@/app/data/data_portifolio";
import { motion } from "framer-motion";
import Image from "next/image";
// Componente de Modal de Certificado
export const CertificateModal = ({
  certificate,
  onClose,
}: {
  certificate: Certificate;
  onClose: () => void;
}) => (
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
      className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-64 w-full">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{certificate.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4 flex items-center space-x-4 text-gray-400">
          <span>Plataforma: {certificate.issuer}</span>
          <span>•</span>
          <span>Concluído em: {certificate.date}</span>
          <span>•</span>
          <span>Professor: {certificate?.teacher || "Não específicado"}</span>
        </div>

        <p className="mt-4 text-gray-300">{certificate.description}</p>

        <div className="flex justify-start items-center gap-5 mt-8">
          <button
            onClick={onClose}
            className="cursor-pointer inline-flex items-center px-6 py-3 bg-gradient-to-r bg-black rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Fechar
          </button>
          <a
            target="_blank"
            href={certificate?.url}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Ver Curso
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);
