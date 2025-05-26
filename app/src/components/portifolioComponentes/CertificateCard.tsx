import type { Certificate } from '@/app/data/data_portifolio';
import { motion } from 'framer-motion';
import Image from "next/image";

// Componente de Card de Certificado
export const CertificateCard = ({ certificate, index, onClick }: { certificate: Certificate, index: number, onClick: () => void }) => (
  <motion.div
    key={certificate.title}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-purple-400 transition-colors cursor-pointer"
    onClick={onClick}
  >
    <div className="h-48 relative">
      <Image
        src={certificate.image}
        alt={certificate.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-medium">{certificate.title}</h3>
      <p className="text-gray-400 text-sm mt-1 line-clamp-2">{certificate.description}</p>
    </div>
  </motion.div>
);