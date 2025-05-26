"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InteractiveCard({ 
  imageSrc, 
  altText, 
  width, 
  height, 
  glowColor, 
  tiltIntensity,
  hoverScale
}) {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.98 }}
      className="relative"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          filter: 'blur(20px)',
          zIndex: -1,
        }}
      />
      <motion.div
        whileHover={{
          rotateX: tiltIntensity,
          rotateY: tiltIntensity,
          transition: { duration: 0.3 }
        }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Image
          src={imageSrc}
          alt={altText}
          width={width}
          height={height}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
}