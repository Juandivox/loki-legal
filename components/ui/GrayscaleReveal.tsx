"use client";

import { motion } from "framer-motion";

export default function GrayscaleReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="h-full w-full"
      initial={{ filter: "grayscale(1) brightness(0.8)" }}
      whileInView={{ filter: "grayscale(0) brightness(1.05)" }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
