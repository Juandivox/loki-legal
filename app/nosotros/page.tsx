import type { Metadata } from "next";
import Image from "next/image";
import { whatsappUrl } from "@/lib/site-config";
import PageTransition from "@/components/ui/PageTransition";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Nosotros — DUE & DO",
  description:
    "Conoce la firma DUE & DO: nuestra historia, valores y el equipo detrás de cada mandato.",
};

const values = [
  {
    title: "Criterio",
    description:
      "No emitimos opiniones apresuradas. Cada posición jurídica está fundamentada en análisis riguroso y experiencia práctica.",
  },
  {
    title: "Claridad",
    description:
      "Traducimos la complejidad legal en lenguaje preciso y accionable. Nuestros clientes siempre saben exactamente en qué punto están.",
  },
  {
    title: "Compromiso",
    description:
      "Cada asunto se trata con la misma intensidad, sin importar su tamaño. Nuestra reputación se construye caso a caso.",
  },
  {
    title: "Confidencialidad",
    description:
      "La discreción es un principio, no una opción. Protegemos la información de nuestros clientes con los más altos estándares.",
  },
];

export default function NosotrosPage() {
  return (
    <PageTransition className="bg-black min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-24">
        <FadeIn className="flex flex-col gap-6 max-w-3xl">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#5B5B5B]">
            La firma
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-white">
            Una firma de abogados
            <br />
            <span className="italic text-[#A6A6A6]">
              construida con propósito.
            </span>
          </h1>
          <p className="font-sans text-[#A6A6A6] text-base leading-relaxed max-w-xl mt-2">
            DUE &amp; DO nació de la convicción de que el derecho corporativo
            moderno exige algo más que conocimiento técnico: exige visión,
            cercanía y una comprensión genuina del mundo empresarial.
          </p>
        </FadeIn>
      </section>

      {/* Divider */}
      <div className="border-t border-[#3A3A3A]" />

      {/* Manifiesto */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="flex items-center justify-center">
            <div className="relative border border-[#3A3A3A] p-12 w-full max-w-sm aspect-square flex items-center justify-center">
              <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#5B5B5B]" />
              <span className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#5B5B5B]" />
              <span className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#5B5B5B]" />
              <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#5B5B5B]" />
              <Image
                src="/brand/logo.png"
                alt="DUE & DO"
                width={200}
                height={200}
                className="object-contain opacity-90"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="flex flex-col gap-6">
            <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed">
              &ldquo;Convertimos complejidad jurídica en experiencias más
              claras, sólidas y confiables.&rdquo;
            </blockquote>
            <div className="h-px w-12 bg-[#3A3A3A]" />
            <p className="font-sans text-sm text-[#5B5B5B] leading-relaxed">
              Cada cliente que llega a DUE &amp; DO trae consigo un reto único.
              Nuestro trabajo comienza por escuchar, comprender el contexto de
              negocio y solo entonces construir la estrategia jurídica que
              realmente sirva a sus objetivos.
            </p>
            <p className="font-sans text-sm text-[#5B5B5B] leading-relaxed">
              Creemos en la abogacía como herramienta de construcción, no solo
              de defensa. Por eso combinamos rigor técnico con visión
              estratégica, y nunca sacrificamos la claridad por el formalismo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#3A3A3A]" />

      {/* Valores */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-24">
        <FadeIn className="flex flex-col gap-4 mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#5B5B5B]">
            Nuestros valores
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-white">
            Los principios que nos guían
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#3A3A3A]">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <div className="bg-black p-10 flex flex-col gap-4">
                <h3 className="font-serif text-xl text-white">{v.title}</h3>
                <p className="font-sans text-sm text-[#5B5B5B] leading-relaxed">
                  {v.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#3A3A3A]" />

      {/* CTA */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-24">
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 border border-[#3A3A3A] px-8 py-10">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl text-white">
                ¿Trabajamos juntos?
              </h3>
              <p className="font-sans text-sm text-[#5B5B5B]">
                Cuéntenos su situación. Sin compromiso.
              </p>
            </div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 py-3.5 bg-white text-black font-sans text-xs tracking-widest uppercase hover:bg-[#A6A6A6] transition-colors duration-300"
            >
              Agenda una conversación
            </a>
          </div>
        </FadeIn>
      </section>
    </PageTransition>
  );
}
