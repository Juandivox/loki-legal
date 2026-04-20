"use client";

import { motion } from "framer-motion";
import { whatsappUrl } from "@/lib/site-config";
import PrimaryButton from "@/components/ui/PrimaryButton";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const steps = [
  {
    number: "01",
    title: "Análisis",
    description:
      "Escuchamos con atención y estudiamos cada situación en profundidad antes de emitir cualquier criterio. Identificamos exposiciones, oportunidades y el mapa real del problema.",
  },
  {
    number: "02",
    title: "Estrategia",
    description:
      "Diseñamos la ruta jurídica más eficiente para los objetivos del cliente. Cada decisión está respaldada por técnica sólida y visión de largo plazo.",
  },
  {
    number: "03",
    title: "Ejecución",
    description:
      "Actuamos con precisión y velocidad. Acompañamos cada etapa del proceso con comunicación clara, documentación rigurosa y atención directa de los profesionales a cargo.",
  },
  {
    number: "04",
    title: "Resultado",
    description:
      "El éxito de cada mandato se mide por el impacto real en el negocio del cliente. Construimos relaciones de largo plazo basadas en confianza y resultados concretos.",
  },
];

export default function Approach() {
  return (
    <section className="bg-[#0a0a0a] py-28 px-6 lg:px-12 border-t border-[#3A3A3A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div className="flex flex-col gap-4 max-w-xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-[#5B5B5B]"
            >
              Nuestro enfoque
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-white"
            >
              Cómo trabajamos
              <br />
              <span className="italic text-[#A6A6A6]">con cada cliente.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-sm text-[#5B5B5B] max-w-xs leading-relaxed md:text-right"
          >
            Un proceso claro, comunicación constante y criterio profesional en
            cada etapa.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3A3A3A]">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
              className="bg-[#0a0a0a] p-8 flex flex-col gap-6"
            >
              {/* Number */}
              <span className="font-serif text-[3.5rem] leading-none text-[#3A3A3A] select-none">
                {step.number}
              </span>

              {/* Divider */}
              <div className="h-px w-8 bg-[#3A3A3A]" />

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-serif text-xl text-white">{step.title}</h3>
                <p className="font-sans text-sm text-[#5B5B5B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#3A3A3A] px-8 py-8"
        >
          <p className="font-serif text-lg md:text-xl text-white max-w-lg leading-snug">
            ¿Listo para dar el primer paso?{" "}
            <span className="italic text-[#A6A6A6]">
              Cuéntenos su situación.
            </span>
          </p>
          <PrimaryButton
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            Agenda una conversación
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
