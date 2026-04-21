"use client";

import { useEffect, useState } from "react";
import TeamGrid from "@/components/ui/TeamGrid";

interface TeamMember {
  slug: string;
  name: string;
  position: string;
  photo: string;
}

export default function TeamHeroSection({ team }: { team: TeamMember[] }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setCollapsed(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="px-6 lg:px-12 max-w-7xl mx-auto flex items-center overflow-hidden"
        style={{
          minHeight: collapsed ? "0px" : "calc(100vh - 8rem)",
          paddingTop: collapsed ? "5rem" : "0rem",
          paddingBottom: collapsed ? "5rem" : "4rem",
          transition:
            "min-height 1200ms cubic-bezier(0.76, 0, 0.24, 1), padding 1200ms cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        <div
          className="flex flex-col gap-6 mx-auto text-center items-center w-full"
          style={{
            transform: collapsed ? "scale(0.72)" : "scale(1)",
            opacity: collapsed ? 0.7 : 1,
            transition:
              "transform 1200ms cubic-bezier(0.76, 0, 0.24, 1), opacity 1200ms cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          <p className="font-sans text-sm tracking-[0.4em] uppercase text-[#8A8A8A]">
            El equipo
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-white">
            Las personas detrás
            <br />
            <span className="italic text-[#A6A6A6]">de cada mandato.</span>
          </h1>
          <p className="font-sans text-[#A6A6A6] text-base leading-relaxed max-w-xl mt-2">
            Un equipo de abogados especializados que combina rigor técnico,
            visión estratégica y compromiso genuino con cada cliente.
          </p>
        </div>
      </section>

      {/* Divider + Team grid: siempre en DOM para que las imágenes carguen de inmediato */}
      <div>
        <div className="border-t border-[#3A3A3A]" />
        <section className="px-6 lg:px-12 max-w-7xl mx-auto py-24">
          <TeamGrid team={team} />
        </section>
      </div>
    </>
  );
}
