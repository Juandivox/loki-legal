export const siteConfig = {
  name: "DUE & DO",
  tagline: "Diseño legal con visión estratégica.",
  description:
    "Una firma que combina criterio, claridad y presencia contemporánea.",
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573000000000",
    message:
      "Hola, me gustaría agendar una consulta con DUE & DO.",
  },
  email: "contacto@lokilegal.com",
  address: "Bogotá, Colombia",
  social: {
    linkedin: "https://linkedin.com/company/due-y-do",
    instagram: "https://instagram.com/dueydo",
  },
  cal: {
    link: "https://cal.com/dueydo", // reemplazar con el link real
  },
  nav: [
    { label: "Inicio",    href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Equipo",    href: "/nosotros" },
  ],
} as const;

export function whatsappUrl(message?: string): string {
  const num = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? siteConfig.whatsapp.number;
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.message);
  return `https://wa.me/${num}?text=${text}`;
}
