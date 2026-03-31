import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { teamMemberDetails } from "@/lib/teamData";

export const metadata: Metadata = {
  title: "Nuestro Equipo - Calderón Galindo Abogados",
  description:
    "Conozca al equipo de profesionales de Calderón Galindo Abogados, comprometidos con la excelencia jurídica.",
};

export default function EquipoPage() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-blanco-puro)",
        fontFamily: "var(--font-family-cuerpo)",
      }}
    >
      <Header activePage="equipo" />

      <main>
        {/* Hero Section */}
        <section
          className="py-12 lg:py-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(29, 29, 27, 0.95), rgba(158, 188, 138, 0.85))",
          }}
        >
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{
                fontFamily: "var(--font-family-titulo)",
                color: "var(--color-blanco-puro)",
              }}
            >
              Nuestro Equipo
            </h1>
            <p
              className="text-lg opacity-90"
              style={{ color: "var(--color-blanco-puro)" }}
            >
              Profesionales comprometidos con la excelencia jurídica
            </p>
          </div>
        </section>

        {/* Team Details */}
        <section
          className="py-12 lg:py-16"
          style={{ backgroundColor: "var(--color-blanco-puro)" }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            {teamMemberDetails.map((member) => (
              <div
                key={member.name}
                className="mb-16 rounded-xl shadow-xl p-8 lg:p-12"
                style={{ backgroundColor: "#f9fafb" }}
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={400}
                        height={500}
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                        unoptimized
                      />
                    ) : (
                      <div
                        className="w-full aspect-[3/4] rounded-xl shadow-lg flex items-center justify-center"
                        style={{
                          backgroundColor: "var(--color-verde-institucional)",
                        }}
                      >
                        <span
                          className="text-6xl font-bold"
                          style={{
                            color: "var(--color-blanco-puro)",
                            fontFamily: "var(--font-family-titulo)",
                          }}
                        >
                          {member.name
                            .split(" ")
                            .slice(0, 2)
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-2">
                    <h2
                      className="text-3xl lg:text-4xl font-bold mb-2"
                      style={{
                        fontFamily: "var(--font-family-titulo)",
                        color: "var(--color-negro-profundo)",
                      }}
                    >
                      {member.name}
                    </h2>
                    <p
                      className="text-xl font-semibold mb-6"
                      style={{
                        fontFamily: "var(--font-family-cuerpo)",
                        color: "var(--color-verde-institucional)",
                      }}
                    >
                      {member.position}
                    </p>
                    <div
                      className="text-gray-700 leading-relaxed text-lg mb-6 space-y-4"
                      style={{ fontFamily: "var(--font-family-cuerpo)" }}
                    >
                      {member.bio.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p
                        className="text-gray-700"
                        style={{ fontFamily: "var(--font-family-cuerpo)" }}
                      >
                        <span className="font-semibold">Email:</span>{" "}
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:underline"
                          style={{ color: "var(--color-verde-institucional)" }}
                        >
                          {member.email}
                        </a>
                      </p>
                      {member.linkedin && member.linkedin !== "#" && (
                        <p
                          className="text-gray-700"
                          style={{ fontFamily: "var(--font-family-cuerpo)" }}
                        >
                          <span className="font-semibold">LinkedIn:</span>{" "}
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                            style={{ color: "var(--color-verde-institucional)" }}
                          >
                            Ver perfil
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
