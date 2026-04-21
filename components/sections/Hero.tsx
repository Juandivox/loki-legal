"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { whatsappUrl } from "@/lib/site-config";
import PrimaryButton from "@/components/ui/PrimaryButton";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function anim(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  };
}

function fade(delay: number) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.2, ease: "easeOut" as const, delay },
  };
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNext = () => {
    const next = sectionRef.current?.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Watermark logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <Image
          src="/brand/logo.png"
          alt=""
          width={700}
          height={700}
          className="w-[60vw] max-w-2xl object-contain"
          priority
          aria-hidden
        />
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-8 pt-24">
        {/* Eyebrow */}
        <motion.p
          {...fade(0.2)}
          className="font-sans text-xs tracking-[0.3em] uppercase text-[#5B5B5B]"
        >
          Firma de Abogados — Colombia
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...anim(0.5)}
          className="font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[1.05] font-bold text-white max-w-4xl"
        >
          Diseño legal con{" "}
          <span className="italic text-[#A6A6A6]">visión estratégica.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...anim(0.85)}
          className="font-sans text-[#A6A6A6] text-base md:text-lg leading-relaxed max-w-xl"
        >
          Una firma que combina criterio, claridad y presencia contemporánea
          para resolver los desafíos jurídicos más complejos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...anim(1.1)}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <PrimaryButton
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[220px] text-sm"
          >
            Agenda una conversación
          </PrimaryButton>

          <Link
            href="/servicios"
            className="px-8 py-3.5 border border-[#3A3A3A] text-white font-sans text-sm tracking-widest uppercase hover:border-white transition-colors duration-300 min-w-[220px] text-center"
          >
            Ver capacidades
          </Link>
        </motion.div>

        {/* Authority quote */}
        <motion.p
          {...fade(1.4)}
          className="font-serif italic text-[#A6A6A6] text-sm md:text-base mt-6"
        >
          &ldquo;Convertimos complejidad jurídica en experiencias más claras,
          sólidas y confiables.&rdquo;
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3A3A3A] hover:text-[#A6A6A6] transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-label="Scroll hacia abajo"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.div>
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase">
          Explorar
        </span>
      </motion.button>

      {/* Bottom separator */}
      <motion.div
        className="absolute bottom-0 inset-x-0 h-px bg-[#3A3A3A]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      />
    </section>
  );
}
