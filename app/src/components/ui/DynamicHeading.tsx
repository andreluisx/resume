"use client";
import { motion } from "framer-motion";

export default function DynamicHeading({ texts, speed, className, highlightClass }) {
  return (
    <div className={className}>
      {texts.map((text, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          className={i % 2 === 0 ? highlightClass : ""}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}