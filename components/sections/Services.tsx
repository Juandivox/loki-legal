"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import { practiceAreas } from "@/lib/services";

export default function Services() {
  return (
    <section id="servicios" className="bg-black py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4 max-w-xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-[#5B5B5B]"
            >
              Áreas de práctica
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight text-white"
            >
              Capacidades al nivel
              <br />
              <span className="italic text-[#A6A6A6]">de su desafío.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-sm text-[#A6A6A6] max-w-sm leading-relaxed md:text-right"
          >
            Cinco áreas de especialización que cubren el espectro completo de
            los riesgos jurídicos del entorno empresarial contemporáneo.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-px bg-[#3A3A3A]">
          {practiceAreas.map((area, i) => (
            <div
              key={area.id}
              className={`bg-black ${
                i < 3 ? "lg:col-span-2" : "lg:col-span-3"
              } sm:col-span-1`}
            >
              <ServiceCard area={area} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="h-px bg-[#3A3A3A] mt-px origin-left"
        />
      </div>
    </section>
  );
}
