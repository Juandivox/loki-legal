import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { whatsappUrl, siteConfig } from "@/lib/site-config";
import PageTransition from "@/components/ui/PageTransition";
import FadeIn from "@/components/ui/FadeIn";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.893895928809!2d-74.07299742415567!3d4.613005595361695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f992718c80c91%3A0x3c8457db43981aa5!2sHotel%20Tequendama!5e0!3m2!1sen!2sco!4v1775840570575!5m2!1sen!2sco";
const MAP_PLACE_URL =
  "https://www.google.com/maps/place/Hotel+Tequendama/@4.6130056,-74.0729974,17z";

export const metadata: Metadata = {
  title: "Contacto — DUE & DO",
  description:
    "Contáctenos por WhatsApp o correo electrónico. Sin compromiso y con total discreción.",
};

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "+57 318 259 7072",
    description: "Respuesta en el menor tiempo posible durante días hábiles.",
    href: whatsappUrl(),
    cta: "Iniciar conversación",
    external: true,
  },
  {
    icon: Mail,
    title: "Correo electrónico",
    detail: siteConfig.email,
    description: "Para consultas formales, documentación o propuestas.",
    href: `mailto:${siteConfig.email}?subject=Consulta DUE %26 DO`,
    cta: "Enviar correo",
    external: false,
  },
  {
    icon: MapPin,
    title: "Ubicación",
    detail: "Bogotá, Colombia",
    description: "Atención presencial con cita previa.",
    href: MAP_PLACE_URL,
    cta: null,
    external: true,
    mapEmbedSrc: MAP_EMBED_SRC,
  },
  {
    icon: Clock,
    title: "Horario",
    detail: "Lun — Vie, 8:00 am – 6:00 pm",
    description: "Disponibles para casos urgentes fuera de horario.",
    href: null,
    cta: null,
    external: false,
  },
] as const;

export default function ContactoPage() {
  return (
    <PageTransition className="bg-black min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col gap-5 max-w-2xl mb-20">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#5B5B5B]">
            Contacto
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] text-white">
            Cuéntenos su situación.
            <br />
            <span className="italic text-[#A6A6A6]">Estamos aquí.</span>
          </h1>
          <p className="font-sans text-[#A6A6A6] text-base leading-relaxed mt-2">
            El primer paso es una conversación sin compromiso. Escríbanos por
            el canal que prefiera y le responderemos con la discreción y
            velocidad que su caso merece.
          </p>
        </FadeIn>

        {/* Channels grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#3A3A3A] mb-px">
          {channels.map((ch, i) => {
            const Icon = ch.icon;
            const isMapCard = "mapEmbedSrc" in ch && Boolean(ch.mapEmbedSrc);
            const inner = (
              <div className="bg-black p-10 flex flex-col gap-6 h-full group-hover:bg-[#0a0a0a] transition-colors duration-300">
                <div className="w-10 h-10 border border-[#3A3A3A] group-hover:border-[#5B5B5B] flex items-center justify-center transition-colors duration-300">
                  <Icon size={18} strokeWidth={1.5} className="text-[#A6A6A6]" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-sans text-xs text-[#5B5B5B] tracking-widest uppercase">
                    {ch.title}
                  </p>
                  <p className="font-serif text-lg text-white">{ch.detail}</p>
                  <p className="font-sans text-sm text-[#5B5B5B] leading-relaxed mt-1">
                    {ch.description}
                  </p>
                </div>
                {"mapEmbedSrc" in ch && ch.mapEmbedSrc && (
                  <div className="mt-2 flex flex-col gap-4">
                    <div className="relative overflow-hidden border border-[#3A3A3A] bg-[#050505]">
                      <iframe
                        src={ch.mapEmbedSrc}
                        title="Ubicación de DUE & DO en Google Maps"
                        className="h-[260px] w-full scale-[1.01] md:h-[300px]"
                        style={{
                          border: 0,
                          filter:
                            "grayscale(1) invert(0.92) contrast(1.08) brightness(0.82) hue-rotate(180deg) saturate(0.7)",
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-black/18 mix-blend-multiply" />
                    </div>
                    <a
                      href={ch.href ?? MAP_PLACE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start font-sans text-[11px] tracking-[0.2em] uppercase text-[#5B5B5B] group-hover:text-white hover:text-white transition-colors duration-300"
                    >
                      Abrir en Google Maps →
                    </a>
                  </div>
                )}
                {ch.cta && !isMapCard && (
                  <span className="font-sans text-xs tracking-widest uppercase text-[#3A3A3A] group-hover:text-white transition-colors duration-300 mt-auto">
                    {ch.cta} →
                  </span>
                )}
              </div>
            );

            return (
              <FadeIn key={ch.title} delay={i * 0.1}>
                {ch.href && !isMapCard ? (
                  <a
                    href={ch.href}
                    target={ch.external ? "_blank" : undefined}
                    rel={ch.external ? "noopener noreferrer" : undefined}
                    className="group block h-full"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group h-full">{inner}</div>
                )}
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeIn>
          <div className="border border-[#3A3A3A] px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8 mt-px">
            <div className="flex flex-col gap-3">
              <p className="font-serif text-xl md:text-2xl text-white max-w-md leading-snug">
                La confidencialidad es un principio,{" "}
                <span className="italic text-[#A6A6A6]">no una opción.</span>
              </p>
              <p className="font-sans text-sm text-[#5B5B5B]">
                Toda la información compartida con DUE &amp; DO está protegida por
                el secreto profesional.
              </p>
            </div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-10 py-4 bg-white text-black font-sans text-xs tracking-widest uppercase hover:bg-[#A6A6A6] transition-colors duration-300"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
