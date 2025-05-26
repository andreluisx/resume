"use client";
import { motion } from "framer-motion";

export default function TechParticles({ count = 20 }) {
  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 10,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            x: `${particle.x}%`,
            y: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            x: `${particle.x + (Math.random() * 20 - 10)}%`,
            y: `${particle.y + (Math.random() * 20 - 10)}%`,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: particle.delay,
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </>
  );
}