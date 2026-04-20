import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#3A3A3A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/brand/logo.png"
                alt="DUE & DO"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="font-serif text-white text-lg tracking-wider">
                DUE &amp; DO
              </span>
            </Link>
            <p className="font-sans text-[#5B5B5B] text-sm leading-relaxed">
              Diseño legal con visión estratégica. Una firma que combina
              criterio, claridad y presencia contemporánea.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-3">
            <p className="font-sans text-[#3A3A3A] text-xs tracking-widest uppercase mb-2">
              Páginas
            </p>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm text-[#A6A6A6] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Servicios rápidos */}
          <nav className="flex flex-col gap-3">
            <p className="font-sans text-[#3A3A3A] text-xs tracking-widest uppercase mb-2">
              Áreas de práctica
            </p>
            {[
              "Compliance & Due Diligence",
              "Derecho Penal Corporativo",
              "Derecho Societario",
              "Derecho Tributario",
              "Derecho Cambiario",
            ].map((s) => (
              <Link
                key={s}
                href="/servicios"
                className="font-sans text-sm text-[#A6A6A6] hover:text-white transition-colors"
              >
                {s}
              </Link>
            ))}
          </nav>

          {/* Contacto */}
          <div className="flex flex-col gap-3">
            <p className="font-sans text-[#3A3A3A] text-xs tracking-widest uppercase mb-2">
              Contacto
            </p>
            <a
              href={`https://wa.me/573182597072?text=${encodeURIComponent("Hola, me gustaría agendar una consulta con DUE & DO.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#A6A6A6] hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-sans text-sm text-[#A6A6A6] hover:text-white transition-colors"
            >
              {siteConfig.email}
            </a>
            <p className="font-sans text-sm text-[#A6A6A6]">
              {siteConfig.address}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#3A3A3A] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-[#5B5B5B]">
            © {year} DUE &amp; DO. Todos los derechos reservados.
          </p>

          {/* Social */}
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-[#5B5B5B] hover:text-white transition-colors flex items-center gap-1 tracking-wider uppercase"
            >
              LinkedIn <ExternalLink size={12} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-[#5B5B5B] hover:text-white transition-colors flex items-center gap-1 tracking-wider uppercase"
            >
              Instagram <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
