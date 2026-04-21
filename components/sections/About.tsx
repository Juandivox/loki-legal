"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stats = [
  { value: "5", label: "Áreas de especialización" },
  { value: "100%", label: "Enfoque estratégico" },
  { value: "360°", label: "Visión jurídica" },
];

export default function About() {
  return (
    <section className="bg-black py-28 px-6 lg:px-12 border-t border-[#3A3A3A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — logo visual */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
          className="relative flex items-center justify-center"
        >
          {/* Decorative border frame */}
          <div className="group relative w-full max-w-md aspect-square border border-[#3A3A3A] overflow-hidden">
            {/* Corner accents */}
            <span className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#5B5B5B] z-10" />
            <span className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#5B5B5B] z-10" />
            <span className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#5B5B5B] z-10" />
            <span className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#5B5B5B] z-10" />

            <Image
              src="/bogota-hd.png"
              alt="Bogotá"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Right — text */}
        <div className="flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-[#5B5B5B]"
          >
            Quiénes somos
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-white"
          >
            Una firma construida
            <br />
            <span className="italic text-[#A6A6A6]">sobre criterio y precisión.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="flex flex-col gap-4 font-sans text-sm text-[#A6A6A6] leading-relaxed"
          >
            <p>
              DUE &amp; DO es una firma de abogados especializada en derecho
              corporativo y empresarial. Nacimos con la convicción de que el
              asesoramiento jurídico de calidad debe ir de la mano de una visión
              estratégica clara y un entendimiento profundo del negocio de cada
              cliente.
            </p>
            <p>
              Nuestro equipo combina rigor técnico con agilidad y capacidad de
              respuesta. Cada mandato, sin importar su escala, recibe atención
              directa de profesionales senior con experiencia en los mercados más
              exigentes de Colombia.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            className="grid grid-cols-3 gap-4 border-t border-[#3A3A3A] pt-8 mt-2"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-serif text-2xl md:text-3xl text-white">
                  {s.value}
                </span>
                <span className="font-sans text-[10px] text-[#5B5B5B] leading-tight tracking-wide">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-[#A6A6A6] hover:text-white border-b border-[#3A3A3A] hover:border-white pb-1 transition-all duration-300"
            >
              Conocer el equipo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
