"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

function NavLink({ href, children, active = false, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-cuerpo text-negro-profundo hover:text-verde-institucional transition duration-300 font-medium relative group ${
        active ? "text-verde-institucional" : ""
      }`}
      style={{ fontFamily: "var(--font-family-cuerpo)" }}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-verde-institucional transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
        style={{ backgroundColor: "var(--color-verde-institucional)" }}
      />
    </Link>
  );
}

interface HeaderProps {
  activePage?: "home" | "equipo";
}

export default function Header({ activePage = "home" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-md"
      style={{ backgroundColor: "var(--color-blanco-puro)", zIndex: 100 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/Image/Abogados/Logo/Logo_negro.png"
              alt="Calderón Galindo Abogados"
              width={160}
              height={48}
              className="h-10 lg:h-12 w-auto transition duration-300 group-hover:opacity-80"
              style={{ height: "auto" }}
              unoptimized
            />
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href={activePage === "equipo" ? "/#home" : "#home"}>
              Inicio
            </NavLink>
            <NavLink href={activePage === "equipo" ? "/#about" : "#about"}>
              Nosotros
            </NavLink>
            <NavLink
              href={
                activePage === "equipo"
                  ? "/#areas-practica"
                  : "#areas-practica"
              }
            >
              Nuestras Áreas
            </NavLink>
            <NavLink href="/equipo" active={activePage === "equipo"}>
              Equipo
            </NavLink>
            <NavLink
              href={activePage === "equipo" ? "/#testimonio" : "#testimonio"}
            >
              Testimonio
            </NavLink>
            <a
              href="https://wa.me/573239326636"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg font-medium hover:opacity-90 hover:shadow-lg transition duration-300"
              style={{
                backgroundColor: "var(--color-verde-institucional)",
                color: "var(--color-blanco-puro)",
                fontFamily: "var(--font-family-cuerpo)",
              }}
            >
              Contacto
            </a>
          </nav>

          {/* Botón Mobile */}
          <button
            className="lg:hidden p-2"
            style={{ color: "var(--color-negro-profundo)" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menú Mobile */}
        {mobileOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link
                href={activePage === "equipo" ? "/#home" : "#home"}
                onClick={closeMobile}
                className="py-2.5 px-4 rounded-lg transition duration-300"
                style={{
                  fontFamily: "var(--font-family-cuerpo)",
                  color: "var(--color-negro-profundo)",
                }}
              >
                Inicio
              </Link>
              <Link
                href={activePage === "equipo" ? "/#about" : "#about"}
                onClick={closeMobile}
                className="py-2.5 px-4 rounded-lg transition duration-300"
                style={{
                  fontFamily: "var(--font-family-cuerpo)",
                  color: "var(--color-negro-profundo)",
                }}
              >
                Nosotros
              </Link>
              <Link
                href={
                  activePage === "equipo"
                    ? "/#areas-practica"
                    : "#areas-practica"
                }
                onClick={closeMobile}
                className="py-2.5 px-4 rounded-lg transition duration-300"
                style={{
                  fontFamily: "var(--font-family-cuerpo)",
                  color: "var(--color-negro-profundo)",
                }}
              >
                Nuestras Áreas
              </Link>
              <Link
                href="/equipo"
                onClick={closeMobile}
                className="py-2.5 px-4 rounded-lg transition duration-300"
                style={{
                  fontFamily: "var(--font-family-cuerpo)",
                  backgroundColor:
                    activePage === "equipo"
                      ? "var(--color-verde-institucional)"
                      : undefined,
                  color:
                    activePage === "equipo"
                      ? "var(--color-blanco-puro)"
                      : "var(--color-negro-profundo)",
                }}
              >
                Equipo
              </Link>
              <Link
                href={
                  activePage === "equipo" ? "/#testimonio" : "#testimonio"
                }
                onClick={closeMobile}
                className="py-2.5 px-4 rounded-lg transition duration-300"
                style={{
                  fontFamily: "var(--font-family-cuerpo)",
                  color: "var(--color-negro-profundo)",
                }}
              >
                Testimonio
              </Link>
              <a
                href="https://wa.me/573239326636"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="py-2.5 px-4 text-center rounded-lg hover:opacity-90 transition duration-300"
                style={{
                  fontFamily: "var(--font-family-cuerpo)",
                  backgroundColor: "var(--color-verde-institucional)",
                  color: "var(--color-blanco-puro)",
                }}
              >
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
