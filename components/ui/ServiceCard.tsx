"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  ShieldCheck,
  Scale,
  Building2,
  FileText,
  Globe,
  ArrowRight,
  type LucideProps,
} from "lucide-react";
import type { PracticeArea } from "@/lib/services";

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  ShieldCheck,
  Scale,
  Building2,
  FileText,
  Globe,
};

interface Props {
  area: PracticeArea;
  index: number;
}

export default function ServiceCard({ area, index }: Props) {
  const Icon = ICONS[area.icon] ?? ShieldCheck;
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50, visible: false });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      visible: true,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      <Link
        ref={cardRef}
        href={`/servicios#${area.id}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMouse((m) => ({ ...m, visible: false }))}
        className="group relative flex flex-col gap-5 p-8 bg-black border border-[#3A3A3A] hover:border-[#5B5B5B] transition-all duration-500 h-full overflow-hidden"
      >
        {/* Mouse-follow light */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-400"
          style={{
            opacity: mouse.visible ? 1 : 0,
            background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(166,166,166,0.08) 0%, transparent 80%)`,
          }}
        />
        {/* Top accent line */}
        <span className="absolute top-0 left-0 h-px w-0 bg-[#A6A6A6] group-hover:w-full transition-all duration-500" />

        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center border border-[#3A3A3A] group-hover:border-[#5B5B5B] transition-colors duration-300">
          <Icon
            size={18}
            strokeWidth={1.5}
            className="text-[#A6A6A6] group-hover:text-white transition-colors duration-300"
          />
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg md:text-xl text-white leading-snug">
          {area.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-[#5B5B5B] leading-relaxed group-hover:text-[#A6A6A6] transition-colors duration-300 flex-1">
          {area.shortDescription}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-[#3A3A3A] group-hover:text-white transition-colors duration-300 mt-auto">
          <span className="font-sans text-xs tracking-widest uppercase">
            Ver más
          </span>
          <ArrowRight
            size={14}
            strokeWidth={1.5}
            className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
          />
        </div>
      </Link>
    </motion.div>
  );
}
