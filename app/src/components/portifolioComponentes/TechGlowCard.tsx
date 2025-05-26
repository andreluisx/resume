// Componente de Card de Tecnologia
import { motion } from 'framer-motion';
import Image from 'next/image';

export const TechGlowCard = ({ name, image, proficiency, index }: { name: string, image: string, proficiency: number, index: number }) => {
  const proficiencyColors = [
    'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-400', 'bg-green-500'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="flex flex-col items-center"
    >
      <div className="relative flex-col w-full aspect-square bg-gray-800 rounded-xl flex items-center justify-center p-0 shadow-lg border border-gray-700 hover:border-blue-400 transition-colors group">
        {/* Efeito de brilho */}
        <div className="absolute inset-0 rounded-xl bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        
        {/* Barra de proficiência */}
        <div className="absolut bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-b-xl overflow-hidden">
          <div 
            className={`h-full ${proficiencyColors[proficiency - 1]} transition-all duration-500`}
            style={{ width: `${(proficiency / 5) * 100}%` }}
          />
        </div>
        
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="object-contain w-20 h-20 md:w-24 md:h-24"
        />
        <span className="text-sm md:text-base font-medium text-gray-300">{name}</span>
      </div>
      
      <div className="mt-4 text-center">
        
        <div className="flex justify-center mt-1 space-x-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full ${i < proficiency ? proficiencyColors[proficiency - 1] : 'bg-gray-700'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};