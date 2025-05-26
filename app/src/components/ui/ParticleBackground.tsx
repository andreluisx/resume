"use client";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ChatIcon from "@mui/icons-material/Chat";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";
import RotatingText from "./ui/RotatingText";
import Aurora from "./ui/Aurora";
import DecryptedText from "./ui/DecryptedText";
import Image from "next/image";
import MiniStack from "./ui/MiniStack";
import StarBorder from "./ui/StarBorder";
import ParticleBackground from "./ui/ParticleBackground";

export default function Introducing() {
  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const technologies = ["JavaScript", "TypeScript", "Python", "React", "Next.js", "Node.js"];

  return (
    <div className="relative bg-black w-full min-h-screen flex flex-col-reverse md:flex-row justify-between items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={0.8}
          speed={0.4}
        />
        <ParticleBackground 
          particleCount={30}
          colors={["#3A29FF", "#FF94B4", "#FF3232", "#FFFFFF"]}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 py-16 md:py-0 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Column - Text Content */}
        <motion.div 
          className="flex-1 flex flex-col gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Title Section */}
          <motion.div variants={variants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            >
              <span className="block">Desenvolvedor</span>
              <div className="h-20 md:h-24 lg:h-28 flex items-center">
                <RotatingText
                  texts={["Full-Stack", "Back-end", "Front-end"]}
                  mainClassName="text-blue-400 text-5xl md:text-6xl lg:text-7xl"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3200}
                />
              </div>
            </motion.h1>

            <motion.div 
              className="md:text-xl text-lg text-gray-300 max-w-xl text-center md:text-left"
              variants={fadeIn}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <DecryptedText
                text="Criação de sites inovadores, funcionais e fáceis de usar para soluções digitais."
                animateOn="view"
                revealDirection="center"
                speed={60}
                maxIterations={18}
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted text-gray-500"
              />
            </motion.div>
          </motion.div>

          {/* Technologies */}
          <motion.div 
            variants={variants}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            {technologies.map((tech, index) => (
              <StarBorder
                key={tech}
                as="button"
                className="px-4 py-2"
                color="white"
                speed="2s"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {tech}
              </StarBorder>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={variants}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <MiniStack 
              title="Projetos" 
              icon={OpenInNewIcon} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            />
            <MiniStack 
              title="Contato" 
              icon={ChatIcon}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            />
            <MiniStack 
              title="Códigos" 
              icon={CodeIcon}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
            />
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.16, 0.77, 0.47, 0.97],
            delay: 0.3
          }}
        >
          <div className="relative w-full max-w-md lg:max-w-lg">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl -z-10 scale-90 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-red-500/20 blur-3xl -z-10 scale-95 animate-pulse delay-300" />
            <Image 
              src="/images/js.png" 
              alt="JavaScript Developer" 
              width={600} 
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}