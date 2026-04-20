export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string; // lucide-react icon name
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "compliance-due-diligence",
    title: "Compliance & Due Diligence",
    shortDescription:
      "Estructuramos programas de cumplimiento y realizamos análisis rigurosos para identificar riesgos antes de que se materialicen.",
    description:
      "Diseñamos e implementamos programas de compliance adaptados a la realidad operativa de cada cliente. Nuestro enfoque combina análisis jurídico profundo con visión empresarial, permitiendo identificar exposiciones regulatorias y mitigar riesgos de manera proactiva.",
    icon: "ShieldCheck",
  },
  {
    id: "penal-corporativo",
    title: "Derecho Penal Corporativo",
    shortDescription:
      "Defendemos a empresas y directivos ante investigaciones penales con estrategia, discreción y fortaleza técnica.",
    description:
      "Acompañamos a personas jurídicas y naturales en procesos penales de naturaleza empresarial. Nuestra capacidad de respuesta, conocimiento procesal y red de expertos nos permite construir defensas sólidas en los escenarios más complejos.",
    icon: "Scale",
  },
  {
    id: "derecho-societario",
    title: "Derecho Societario",
    shortDescription:
      "Asesoramos en la estructuración, reorganización y gobierno corporativo de sociedades con precisión y visión estratégica.",
    description:
      "Desde la constitución hasta procesos de fusión, escisión o liquidación, acompañamos a nuestros clientes en cada etapa del ciclo de vida corporativo. Diseñamos estructuras societarias eficientes, claras y adaptadas a sus objetivos de negocio.",
    icon: "Building2",
  },
  {
    id: "derecho-tributario",
    title: "Derecho Tributario",
    shortDescription:
      "Optimizamos la carga fiscal de nuestros clientes dentro del marco legal, con análisis técnico y planificación estratégica.",
    description:
      "Brindamos asesoría integral en materia tributaria: planeación fiscal, atención de requerimientos de la DIAN, litigios tributarios y estructuración de operaciones con eficiencia impositiva. Convertimos la complejidad del sistema tributario en ventajas para nuestros clientes.",
    icon: "FileText",
  },
  {
    id: "derecho-cambiario",
    title: "Derecho Cambiario",
    shortDescription:
      "Orientamos operaciones de comercio exterior e inversión extranjera asegurando cumplimiento del régimen cambiario colombiano.",
    description:
      "Asesoramos en el cumplimiento del régimen cambiario colombiano, incluyendo declaración de cambios, canalización de divisas, inversión extranjera directa y operaciones de comercio exterior. Minimizamos el riesgo de sanciones ante la DIAN y el Banco de la República.",
    icon: "Globe",
  },
];
