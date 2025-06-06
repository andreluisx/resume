"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, GitHub, LinkedIn, Terminal } from "@mui/icons-material";

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const roles = [
    "Desenvolvedor Full-Stack",
    "Especialista em React/Next.js",
    "Arquiteto de Soluções",
    "Engenheiro de Software"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExploding(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsExploding(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden ">
      {/* Efeito de Partículas */}

      {/* Efeito de Nebulosa */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[100px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[100px] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [50, -50, 50],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 10
          }}
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center">
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          

          {/* Cargo com Efeito de Explosão */}
          <div className="h-24 flex items-center justify-center md:justify-start md:mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 50,}}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: isExploding ? 1 : 1,
                  color: isExploding ? "#3B82F6" : "#FFFFFF"
                }}
                exit={{ opacity: 0, y: -50,}}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold text-white"
              >
                {roles[currentRoleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Descrição */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto md:mx-0 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Transformo ideias em realidade digital com código limpo, arquitetura escalável e 
            experiências de usuário excepcionais. Especializado em construir soluções modernas 
            que impulsionam negócios.
          </motion.p>

          {/* Botões de Ação */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#portifolio"
              className="flex items-center px-8 py-4 bg-black rounded-lg font-medium text-white"
            >
              <Terminal className="mr-2" />
              Ver Projetos
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#contato"
              className="flex items-center px-8 py-4 bg-black rounded-lg font-medium text-white"
            >
              <Mail className="mr-2" />
              Contato
            </motion.a>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div 
            className="flex gap-4 mt-12 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://github.com/andreluisx" 
              target="_blank"
              className="text-gray-400 hover:text-white"
              aria-label="GitHub"
            >
              <GitHub />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://linkedin.com/in/andreluiss-dev/" 
              target="_blank"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Efeito de Código Flutuante */}
        <FloatingCodeSnippets />
      </div>

      {/* Indicador de Scroll */}
      <motion.div 
        style={{ y }}
        className="md:block hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Explore mais</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Componente de Código Flutuante
function FloatingCodeSnippets() {
  const snippets = [
    { language: "javascript", code: "const innovate = () => {\n  return 'solutions';\n}" },
    { language: "typescript", code: "interface Developer {\n  skills: string[];\n  passion: boolean;\n}" },
    { language: "python", code: "def create_impact():\n  return True" }
  ];

  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
      {snippets.map((snippet, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 100 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            x: [100, 0, -100],
            y: [0, i % 2 === 0 ? -50 : 50, 0]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 3
          }}
          className="absolute right-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-lg border border-gray-700"
          style={{
            width: "250px",
            top: `${i * 30}px`
          }}
        >
          <div className="text-xs text-gray-400 mb-1">{snippet.language}</div>
          <pre className="text-blue-400 text-sm font-mono">
            {snippet.code}
          </pre>
        </motion.div>
      ))}
    </div>
  );
}