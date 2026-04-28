"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { useLenis } from "@/components/layout/SmoothScroll";

interface TeamMember {
  slug: string;
  name: string;
  position: string;
  photo: string;
}

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const lenis = useLenis();

  const handleLoad = (slug: string) => {
    setLoaded((prev) => ({ ...prev, [slug]: true }));
  };

  const scrollToMember = (slug: string) => {
    const target = document.getElementById(slug);
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { offset: -96, duration: 1.6 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3A3A3A]">
      {team.map((member, i) => (
        <FadeIn key={member.slug} delay={i * 0.1}>
          <button
            onClick={() => scrollToMember(member.slug)}
            className="group bg-black flex flex-col cursor-pointer w-full text-left"
          >
            {/* Photo */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0a0a0a]">
              {/* Skeleton */}
              {!loaded[member.slug] && (
                <div className="absolute inset-0 z-10">
                  <div className="w-full h-full bg-gradient-to-b from-[#1a1a1a] to-[#111] animate-pulse" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="h-2 w-16 bg-[#2a2a2a] rounded animate-pulse" />
                      <div className="h-4 w-3/4 bg-[#2a2a2a] rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
              {member.photo && (
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ${
                    loaded[member.slug] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleLoad(member.slug)}
                />
              )}
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col gap-2 border-t border-[#3A3A3A] group-hover:border-[#5B5B5B] transition-colors duration-300">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#5B5B5B]">
                {member.position}
              </p>
              <h3 className="font-serif text-lg text-white leading-snug group-hover:text-[#A6A6A6] transition-colors duration-300">
                {member.name}
              </h3>
            </div>
          </button>
        </FadeIn>
      ))}
    </div>
  );
}
