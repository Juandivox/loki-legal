"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-[#3A3A3A]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="group flex items-center gap-3 shrink-0 relative"
          >
            <Image
              src="/brand/logo.png"
              alt="DUE & DO"
              width={28}
              height={28}
              className="w-6 h-6 md:w-7 md:h-7 object-contain relative"
              priority
            />
            <span className="font-serif text-white text-lg md:text-xl tracking-wider hidden sm:block relative transition-all duration-500 group-hover:[text-shadow:0_0_12px_rgba(255,255,255,0.9),0_0_28px_rgba(255,255,255,0.5)]">
              DUE &amp; DO
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-sm tracking-widest uppercase transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-white"
                    : "text-[#A6A6A6] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className={`group relative ml-4 px-5 py-2 border text-xs tracking-widest uppercase transition-all duration-300 overflow-hidden ${
                pathname === "/contacto"
                  ? "border-white bg-white text-black"
                  : "border-[#5B5B5B] text-white hover:border-white hover:bg-white hover:text-black"
              }`}
            >
              {/* Shine sweep */}
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[600ms] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
                }}
              />
              <span className="relative z-10">Contacto</span>
            </Link>
          </nav>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0a0a0a] border-l border-[#3A3A3A] flex flex-col pt-20 px-8 md:hidden"
            >
              <nav className="flex flex-col gap-6">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-sans text-base tracking-widest uppercase transition-colors ${
                      pathname === item.href
                        ? "text-white"
                        : "text-[#A6A6A6] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-10">
                <Link
                  href="/contacto"
                  className="block w-full text-center px-5 py-3 border border-[#5B5B5B] text-white text-xs tracking-widest uppercase hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Contacto
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
