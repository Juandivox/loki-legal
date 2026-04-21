"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { whatsappUrl, siteConfig } from "@/lib/site-config";
import PrimaryButton from "@/components/ui/PrimaryButton";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Contact() {
  return (
    <section className="bg-black py-28 px-6 lg:px-12 border-t border-[#3A3A3A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-20 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-[#5B5B5B]"
          >
            Contacto
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight text-white"
          >
            Hablemos de lo que
            <br />
            <span className="italic text-[#A6A6A6]">necesita resolver.</span>
          </motion.h2>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#3A3A3A] mb-px">
          {/* WhatsApp */}
          <motion.a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="group bg-black p-10 flex flex-col gap-6 hover:bg-[#0a0a0a] transition-colors duration-300"
          >
            <div className="w-10 h-10 border border-[#3A3A3A] group-hover:border-[#5B5B5B] flex items-center justify-center transition-colors duration-300">
              <MessageCircle size={18} strokeWidth={1.5} className="text-[#A6A6A6]" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-xl text-white">WhatsApp</h3>
              <p className="font-sans text-sm text-[#A6A6A6] leading-relaxed">
                La forma más rápida de contactarnos. Escribanos directamente y
                le responderemos a la brevedad.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#3A3A3A] group-hover:text-white transition-colors duration-300 mt-auto">
              <span className="font-sans text-xs tracking-widest uppercase">
                Iniciar conversación
              </span>
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${siteConfig.email}?subject=Consulta DUE %26 DO`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="group bg-black p-10 flex flex-col gap-6 hover:bg-[#0a0a0a] transition-colors duration-300"
          >
            <div className="w-10 h-10 border border-[#3A3A3A] group-hover:border-[#5B5B5B] flex items-center justify-center transition-colors duration-300">
              <Mail size={18} strokeWidth={1.5} className="text-[#A6A6A6]" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-xl text-white">Correo electrónico</h3>
              <p className="font-sans text-sm text-[#A6A6A6] leading-relaxed">
                Para consultas formales o documentación.{" "}
                <span className="text-[#A6A6A6]">{siteConfig.email}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#3A3A3A] group-hover:text-white transition-colors duration-300 mt-auto">
              <span className="font-sans text-xs tracking-widest uppercase">
                Enviar correo
              </span>
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </motion.a>
        </div>

        {/* Bottom CTA — dark closing block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="bg-[#0a0a0a] border border-[#3A3A3A] px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col gap-3 max-w-lg">
            <p className="font-serif text-2xl md:text-3xl text-white leading-snug">
              Sin compromiso.{" "}
              <span className="italic text-[#A6A6A6]">
                Con toda la discreción que su caso merece.
              </span>
            </p>
            <p className="font-sans text-sm text-[#A6A6A6]">
              {siteConfig.address}
            </p>
          </div>
          <PrimaryButton href="/contacto" as="link" className="shrink-0">
            Agenda una conversación
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
