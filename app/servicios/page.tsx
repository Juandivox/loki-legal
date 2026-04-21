import type { Metadata } from "next";
import { practiceAreas } from "@/lib/services";
import {
  ShieldCheck,
  Scale,
  Building2,
  FileText,
  Globe,
  type LucideProps,
} from "lucide-react";
import { whatsappUrl } from "@/lib/site-config";
import PageTransition from "@/components/ui/PageTransition";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Servicios — DUE & DO",
  description:
    "Cinco áreas de especialización: Compliance & Due Diligence, Derecho Penal Corporativo, Societario, Tributario y Cambiario.",
};

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  ShieldCheck,
  Scale,
  Building2,
  FileText,
  Globe,
};

export default function ServiciosPage() {
  return (
    <PageTransition className="bg-black min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col gap-4 max-w-2xl mb-20">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#5B5B5B]">
            Áreas de práctica
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-tight text-white">
            Nuestras capacidades
          </h1>
          <p className="font-sans text-[#A6A6A6] text-base leading-relaxed mt-2">
            Cada área de práctica está respaldada por experiencia técnica
            profunda y una comprensión genuina del entorno empresarial
            colombiano e internacional.
          </p>
        </FadeIn>

        {/* Areas */}
        <div className="flex flex-col divide-y divide-[#3A3A3A]">
          {practiceAreas.map((area, i) => {
            const Icon = ICONS[area.icon] ?? ShieldCheck;
            return (
              <FadeIn
                key={area.id}
                delay={0.05 * i}
              >
                <div
                  id={area.id}
                  className="group grid grid-cols-1 md:grid-cols-[4rem_1fr_1fr] gap-8 py-14"
                >
                  {/* Number */}
                  <div className="font-sans text-xs text-[#3A3A3A] tracking-widest pt-1">
                    0{i + 1}
                  </div>

                  {/* Title + icon */}
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#3A3A3A]">
                      <Icon size={18} strokeWidth={1.5} className="text-[#A6A6A6]" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white leading-snug">
                      {area.title}
                    </h2>
                  </div>

                  {/* Description + CTA */}
                  <div className="flex flex-col gap-6 justify-between">
                    <p className="font-sans text-[#A6A6A6] text-sm leading-relaxed">
                      {area.description}
                    </p>
                    <a
                      href={whatsappUrl(
                        `Hola, me gustaría consultar sobre ${area.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start px-6 py-3 border border-[#3A3A3A] text-white font-sans text-xs tracking-widest uppercase hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Consultar esta área
                    </a>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
