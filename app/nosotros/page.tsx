import type { Metadata } from "next";
import Image from "next/image";
import { whatsappUrl } from "@/lib/site-config";
import PageTransition from "@/components/ui/PageTransition";
import FadeIn from "@/components/ui/FadeIn";
import GrayscaleReveal from "@/components/ui/GrayscaleReveal";
import TeamHeroSection from "@/components/ui/TeamHeroSection";

export const metadata: Metadata = {
  title: "Equipo — DUE & DO",
  description:
    "Conoce el equipo de DUE & DO: abogados especializados en derecho corporativo, tributario, penal y financiero.",
};

const team = [
  {
    slug: "nicolas-calderon",
    name: "Nicolás Calderón Grisales",
    position: "Socio Fundador",
    photo: "/team/nicolas.jpg",
    bio: "Abogado de la Universidad Libre con especialización en Derecho Tributario de la Universidad Externado de Colombia. Más de 5 años de experiencia asesorando en derecho laboral, civil, tributario y societario.",
    detail: [
      "Abogado de la Universidad Libre con especialización en Derecho Tributario de la Universidad Externado de Colombia. Cuenta con más de 5 años de experiencia asesorando en derecho laboral y seguridad social, derecho civil, derecho tributario y derecho societario.",
      "Su formación especializada le permite abordar con solvencia procesos de planeación, cumplimiento y resolución de conflictos tributarios, así como asesorías integrales en el ámbito corporativo y laboral.",
    ],
  },
  {
    slug: "johan-galindo",
    name: "Johan Manuel Galindo Toloza",
    position: "Socio Fundador",
    photo: "/team/johan.jpg",
    bio: "Abogado de la Universidad Libre con especialización en Derecho Administrativo Laboral. Más de 5 años de experiencia en litigio laboral, civil, comercial y societario.",
    detail: [
      "Abogado de la Universidad Libre con especialización en Derecho Administrativo Laboral. Más de 5 años de experiencia en derecho laboral y seguridad social, conciliación y negociación de obligaciones, y litigio en materia laboral, civil, comercial y societaria.",
      "Se destaca por su habilidad para generar acuerdos que favorecen la solución pacífica de conflictos, su capacidad de análisis jurídico integral y su compromiso con la protección de los intereses de sus clientes.",
    ],
  },
  {
    slug: "ivan-pardo",
    name: "Ivan Darío Pardo Clavijo",
    position: "Abogado",
    photo: "/team/ivan.jpg",
    bio: "Abogado de la Universidad Santo Tomás, especialista en Derecho Financiero y Criptoactivos de la Universidad del Rosario.",
    detail: [
      "Abogado de la Universidad Santo Tomás, especialista en Derecho Financiero y Criptoactivos de la Universidad del Rosario.",
    ],
  },
  {
    slug: "jorge-cely",
    name: "Jorge Enrique Cely León",
    position: "Socio — Derecho Económico",
    photo: "/team/jorge.png",
    bio: "Abogado y Magíster en Derecho Económico de la Universidad Externado de Colombia. Especialista en regulación económica, contratos estatales y derecho sancionador.",
    detail: [
      "Abogado y Magíster en Derecho Económico de la Universidad Externado de Colombia, con énfasis en Regulación Económica y Análisis Económico del Derecho. Su práctica se ha centrado en la estructuración legal de proyectos, gestión de contratos estatales y aplicación de marcos normativos de intervención económica y derecho sancionador.",
      "En el sector público ejerció como Coordinador del Grupo de Supervisión de Cámaras de Comercio en la Superintendencia de Sociedades, y prestó asesoría directa en los despachos del Superintendente de Sociedades y del Viceministro de Transporte. Actualmente es Socio del área de Derecho Económico y docente.",
    ],
  },
];

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
      <TeamHeroSection team={team} />

      {/* Divider */}
      <div className="border-t border-[#3A3A3A]" />

      {/* Detail — alternating layout */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-24 flex flex-col gap-0">
        <FadeIn className="flex flex-col gap-4 mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#5B5B5B]">
            Quiénes somos
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-white">
            Cada abogado,
            <br />
            <span className="italic text-[#A6A6A6]">una historia de rigor.</span>
          </h2>
        </FadeIn>

        {team.map((member, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <FadeIn key={member.slug}>
              <div
                id={member.slug}
                className={`group grid grid-cols-1 md:grid-cols-2 border border-[#3A3A3A] scroll-mt-24 ${i > 0 ? "-mt-px" : ""}`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/5] overflow-hidden bg-[#0a0a0a] ${imageLeft ? "md:order-1" : "md:order-2"}`}>
                  {member.photo && (
                    <GrayscaleReveal>
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top"
                      />
                    </GrayscaleReveal>
                  )}
                </div>

                {/* Text */}
                <div className={`flex flex-col justify-center gap-6 p-10 lg:p-16 ${imageLeft ? "md:order-2" : "md:order-1"}`}>
                  <div className="flex flex-col gap-1">
                    <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#5B5B5B]">
                      {member.position}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl text-white leading-snug">
                      {member.name}
                    </h3>
                  </div>
                  <div className="h-px w-12 bg-[#3A3A3A]" />
                  <div className="flex flex-col gap-4">
                    {member.detail.map((p, j) => (
                      <p key={j} className="font-sans text-sm text-[#A6A6A6] leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
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
                <p className="font-sans text-sm text-[#A6A6A6] leading-relaxed">
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
              <p className="font-sans text-sm text-[#A6A6A6]">
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
