"use client";

import Link from "next/link";

interface BaseProps {
  children: React.ReactNode;
  className?: string;
}

interface AnchorProps extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  as?: "a";
}

interface LinkProps extends BaseProps {
  href: string;
  as: "link";
}

type Props = AnchorProps | LinkProps;

const INNER =
  "group relative inline-flex items-center justify-center overflow-hidden " +
  "px-10 py-4 font-sans text-xs tracking-widest uppercase text-black " +
  "transition-all duration-400 " +
  // lift on hover
  "hover:-translate-y-0.5 " +
  // shadow layers
  "shadow-[0_4px_16px_rgba(0,0,0,0.4),0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] " +
  "hover:shadow-[0_8px_24px_rgba(0,0,0,0.5),0_12px_48px_rgba(0,0,0,0.4),0_0_40px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.4)]";

function Inner({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Background: default white gradient */}
      <span
        aria-hidden
        className="absolute inset-0 transition-opacity duration-400 opacity-100 group-hover:opacity-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(230,230,230,0.95) 100%)",
        }}
      />
      {/* Background: hover gray gradient */}
      <span
        aria-hidden
        className="absolute inset-0 transition-opacity duration-400 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(166,166,166,0.95) 0%, rgba(140,140,140,0.95) 100%)",
        }}
      />
      {/* Shine sweep */}
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[600ms] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
        }}
      />
      {/* Label */}
      <span className="relative z-10">{children}</span>
    </>
  );
}

export default function PrimaryButton({ children, className = "", ...props }: Props) {
  const cls = `${INNER} ${className}`;

  if (props.as === "link") {
    return (
      <Link href={props.href} className={cls}>
        <Inner>{children}</Inner>
      </Link>
    );
  }

  const { href, target, rel } = props as AnchorProps;
  return (
    <a href={href} target={target} rel={rel} className={cls}>
      <Inner>{children}</Inner>
    </a>
  );
}
