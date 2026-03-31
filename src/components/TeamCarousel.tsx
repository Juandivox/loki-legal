"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers } from "@/lib/teamData";

const CARDS_PER_SLIDE_DESKTOP = 3;
const AUTO_SLIDE_INTERVAL = 8000;
const TOTAL_SLIDES = Math.ceil(teamMembers.length / CARDS_PER_SLIDE_DESKTOP);

export default function TeamCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, TOTAL_SLIDES - 1)));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES - 1 ? prev + 1 : 0));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : TOTAL_SLIDES - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative">
      {/* Carrusel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div
                className="rounded-xl p-6 shadow-xl border-2 hover:shadow-2xl transition duration-300 card-hover flex flex-col h-full"
                style={{
                  backgroundColor: "var(--color-blanco-puro)",
                  borderColor: "rgba(158, 188, 138, 0.3)",
                }}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={224}
                    height={224}
                    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4"
                    style={{
                      objectPosition: "center 20%",
                      borderColor: "rgba(158, 188, 138, 0.5)",
                    }}
                    unoptimized
                  />
                </div>
                <h3
                  className="text-2xl font-semibold text-center mb-1"
                  style={{
                    fontFamily: "var(--font-family-titulo)",
                    color: "var(--color-negro-profundo)",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-center mb-3 text-lg font-medium"
                  style={{
                    fontFamily: "var(--font-family-cuerpo)",
                    color: "var(--color-verde-institucional)",
                  }}
                >
                  {member.position}
                </p>
                <p
                  className="text-sm mb-4 leading-relaxed flex-grow text-gray-700"
                  style={{ fontFamily: "var(--font-family-cuerpo)" }}
                >
                  {member.description}
                </p>
                {member.hasDetailPage && (
                  <Link
                    href="/equipo"
                    className="block w-full text-center px-4 py-2 mb-4 rounded-lg font-medium hover:opacity-90 transition duration-300"
                    style={{
                      backgroundColor: "var(--color-verde-institucional)",
                      color: "var(--color-blanco-puro)",
                    }}
                  >
                    Conocer más
                  </Link>
                )}
                <div
                  className="flex justify-center space-x-4"
                  style={{ color: "var(--color-negro-profundo)" }}
                >
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:opacity-70 transition duration-300"
                    title="Enviar correo"
                    style={{ color: "inherit" }}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition duration-300"
                    title="Ver perfil de LinkedIn"
                    style={{ color: "inherit" }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flechas de Navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-0 p-2 lg:p-3 rounded-full transition duration-300 shadow-lg z-10"
        style={{
          backgroundColor: "rgba(158, 188, 138, 0.2)",
          color: "var(--color-verde-institucional)",
        }}
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 -translate-x-2 lg:translate-x-0 p-2 lg:p-3 rounded-full transition duration-300 shadow-lg z-10"
        style={{
          backgroundColor: "rgba(158, 188, 138, 0.2)",
          color: "var(--color-verde-institucional)",
        }}
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === currentSlide ? "2rem" : "0.5rem",
              backgroundColor:
                i === currentSlide
                  ? "var(--color-verde-institucional)"
                  : "rgba(158, 188, 138, 0.3)",
            }}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
