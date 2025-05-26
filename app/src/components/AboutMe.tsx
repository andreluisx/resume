"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import DynamicHeading from "./ui/DynamicHeading";
import InteractiveCard from "./ui/InteractiveCard";
import TechParticles from "./ui/TechParticles";
import TiltedCard from "./ui/TiltedCard";
import { LinkedIn } from "@mui/icons-material";
import { stacks } from "@/app/data/data_portifolio";

export default function AboutMe() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gray-900 ">
      {/* Cabeçalho com Efeito */}
      <div className="relative z-10 px-6 ">
        <DynamicHeading
          texts={["Sobre Mim"]}
          speed={0.05}
          className="text-5xl md:text-7xl font-bold text-center mb-16"
          highlightClass="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="text-white relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        {/* Card Interativo com Foto */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-shrink-0"
        >
          <TiltedCard
            imageSrc="/images/foto_minha.jpeg"
            altText="André Luís Foto"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="flex gap-2 mb-3 ml-3 font-bold flex-row px-5 py-2 rounded-xl bg-black/20 backdrop-blur-md shadow-white">
                <LinkedIn />
                <p className="tilted-card-demo-text">
                  Foto do Linkedin
                </p>
              </div>
            }
          />
        </motion.div>

        {/* Texto com Efeito de Digitação */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400">
            Desenvolvedor Full-Stack & Entusiasta de Tecnologia
          </h3>

          <div className="text-lg md:text-xl space-y-4">
            <p>
              Com mais de X anos de experiência no desenvolvimento web, combino
              habilidades técnicas sólidas com uma paixão por criar soluções
              digitais impactantes.
            </p>
            <p>
              Especializado em React, Next.js e Node.js, meu foco está em
              construir aplicações performáticas, escaláveis e com excelente
              experiência do usuário.
            </p>
            <p>
              Acredito que o código limpo e a arquitetura bem planejada são a
              base para projetos de sucesso a longo prazo.
            </p>
          </div>

          {/* Habilidades em Destaque */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {stacks.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-400 transition-colors"
              >
                {tech.name}
              </motion.span>
            )).slice(0, 3)}
          </motion.div>
        </motion.div>
      </div>

      {/* Elemento de Scroll */}
      <motion.div
        style={{ y }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      ></motion.div>
    </section>
  );
}
