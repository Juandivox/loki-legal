"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import TeamGrid from "@/components/ui/TeamGrid";
import ShinyText from "@/components/ui/ShinyText";

interface TeamMember {
  slug: string;
  name: string;
  position: string;
  photo: string;
}

export default function TeamHeroSection({ team }: { team: TeamMember[] }) {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToGrid = () => {
    const next = sectionRef.current?.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section
        ref={sectionRef}
        className="relative px-6 lg:px-12 max-w-7xl mx-auto flex items-center overflow-hidden"
        style={{
          minHeight: "calc(100vh - 8rem)",
          paddingTop: "0rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="flex flex-col gap-6 mx-auto text-center items-center w-full">
          <p className="font-sans text-sm tracking-[0.4em] uppercase text-[#8A8A8A]">
            El equipo
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-white">
            Las personas detrás
            <br />
            <ShinyText
                text="de cada mandato."
                color="#A6A6A6"
                shineColor="#ffffff"
                speed={3}
                delay={1}
                spread={120}
                className="italic"
              />
          </h1>
          <p className="font-sans text-[#A6A6A6] text-base leading-relaxed max-w-xl mt-2">
            Un equipo de abogados especializados que combina rigor técnico,
            visión estratégica y compromiso genuino con cada cliente.
          </p>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToGrid}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3A3A3A] hover:text-[#A6A6A6] transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          aria-label="Ver el equipo"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} strokeWidth={1.5} />
          </motion.div>
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase">
            Conócenos
          </span>
        </motion.button>
      </section>

      {/* Divider + Team grid: siempre en DOM para que las imágenes carguen de inmediato */}
      <div>
        <div className="border-t border-[#3A3A3A]" />
        <section className="px-6 lg:px-12 max-w-7xl mx-auto py-24">
          <div className="mb-16">
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#5B5B5B] mb-4">
              Nuestros abogados
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.1] text-white mb-4">
              Criterio, experiencia
              <br />
              <span className="italic text-[#A6A6A6]">y compromiso real.</span>
            </h2>
            <p className="font-sans text-[#5B5B5B] text-sm leading-relaxed max-w-md">
              Cada miembro de Due &amp; Do aporta una perspectiva distinta y una
              dedicación genuina a los intereses de nuestros clientes.
            </p>
          </div>
          <TeamGrid team={team} />
        </section>
      </div>
    </>
  );
}
