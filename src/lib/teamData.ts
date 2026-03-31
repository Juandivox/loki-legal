export interface TeamMember {
  name: string;
  position: string;
  description: string;
  email: string;
  linkedin: string;
  photo: string;
  hasDetailPage: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Nicolás Calderón Grisales",
    position: "Socio Fundador",
    description:
      "Abogado de la Universidad Libre con especialización en Derecho Tributario de la Universidad Externado de Colombia. Experto en protección patrimonial, quiebra y fiscalidad internacional. Cuenta con más de 5 años de experiencia.",
    email: "ncalderon@calderongalindo.com.co",
    linkedin: "#",
    photo: "/Image/Abogados/Fotos/NICO 7 JUN CORP8038.jpg",
    hasDetailPage: true,
  },
  {
    name: "Johan Manuel Galindo Toloza",
    position: "Socio Fundador",
    description:
      "Abogado de la Universidad Libre con especialización en Derecho Administrativo Laboral. Cuenta con más de 5 años de experiencia.",
    email: "jgalindo@calderongalindo.com.co",
    linkedin: "#",
    photo: "/Image/Abogados/Fotos/NICO 7 JUN CORP8267.jpg",
    hasDetailPage: true,
  },
  {
    name: "Cristofer Blandón",
    position: "Abogado",
    description:
      "Abogado de la Universidad Libre. Áreas de Práctica: Litigios Civiles y Comerciales, Arbitraje, Responsabilidad Civil.",
    email: "cblandon@calderongalindo.com.co",
    linkedin: "#",
    photo: "/Image/Abogados/Fotos/NICO 7 JUN CORP80122.jpg",
    hasDetailPage: true,
  },
  {
    name: "Ivan Dario Pardo Clavijo",
    position: "Abogado",
    description:
      "Abogado de la Universidad Santo Tomás, es especialista en Derecho Financiero y Criptoactivos de la Universidad del Rosario.",
    email: "ipardo@calderongalindo.com.co",
    linkedin: "#",
    photo: "/Image/Abogados/Fotos/IVAN.jpeg",
    hasDetailPage: true,
  },
  {
    name: "Julián David Romero Espinoza",
    position: "Abogado",
    description:
      "Abogado de la Universidad Militar Nueva Granada. Especialista en derecho comercial y societario.",
    email: "jromero@calderongalindo.com.co",
    linkedin: "#",
    photo: "/Image/Abogados/Fotos/NICO 7 JUN CORP80066.jpg",
    hasDetailPage: true,
  },
  {
    name: "Leidy Yasmín Celi Celi",
    position: "Abogada",
    description:
      "Abogada de la Universidad Católica de Colombia. Especialista en derecho laboral y seguridad social.",
    email: "lceli@calderongalindo.com.co",
    linkedin: "#",
    photo: "/Image/Abogados/Fotos/LEIDY.png",
    hasDetailPage: true,
  },
  {
    name: "John Fredy Sossa Buitrago",
    position: "Abogado",
    description:
      "Abogado de la Universidad Libre con especialización en Derecho Penal de la misma institución. Experto en litigio penal, defensa estratégica y asesoría en procesos penales complejos.",
    email: "jsossa@calderongalindo.com.co",
    linkedin: "#",
    photo: "/Image/Abogados/Fotos/JOHN.jpeg",
    hasDetailPage: true,
  },
];

export interface TeamMemberDetail {
  name: string;
  position: string;
  photo: string;
  email: string;
  linkedin: string;
  bio: string[];
}

export const teamMemberDetails: TeamMemberDetail[] = [
  {
    name: "Nicolás Calderón Grisales",
    position: "Socio Fundador",
    photo: "/Image/Abogados/Fotos/NICO 7 JUN CORP8041.jpg",
    email: "ncalderon@calderongalindo.com.co",
    linkedin: "#",
    bio: [
      "Abogado de la Universidad Libre con especialización en Derecho Tributario de la Universidad Externado de Colombia. Cuenta con más de 5 años de experiencia asesorando en derecho laboral y seguridad social, derecho civil, derecho tributario y derecho societario.",
      "Su formación especializada y práctica profesional le permiten abordar con solvencia procesos de planeación, cumplimiento y resolución de conflictos tributarios, así como asesorías integrales en el ámbito corporativo y laboral.",
    ],
  },
  {
    name: "Johan Manuel Galindo Toloza",
    position: "Socio Fundador",
    photo: "/Image/Abogados/Fotos/NICO 7 JUN CORP8080.jpg",
    email: "jgalindo@calderongalindo.com.co",
    linkedin: "#",
    bio: [
      "Abogado de la Universidad Libre con especialización en Derecho Administrativo Laboral. Cuenta con más de 5 años de experiencia en derecho laboral y seguridad social, en conciliación y negociación de obligaciones, así como en el litigio en materia laboral, civil, comercial y societaria.",
      "Su práctica se ha enfocado en la defensa de los derechos de trabajadores y empleadores, la estructuración de estrategias jurídicas en procesos de negociación y la representación efectiva en escenarios judiciales y extrajudiciales.",
      "Se destaca por su habilidad para generar acuerdos que favorecen la solución pacífica de los conflictos, su capacidad de análisis jurídico integral y su compromiso con la protección de los intereses de sus clientes.",
    ],
  },
  {
    name: "Cristofer Blandón",
    position: "Abogado",
    photo: "/Image/Abogados/Fotos/NICO 7 JUN CORP8283.jpg",
    email: "cblandon@calderongalindo.com.co",
    linkedin: "#",
    bio: [
      "Abogado de la Universidad Libre.",
      "Áreas de Práctica: Litigios Civiles y Comerciales, Arbitraje, Responsabilidad Civil.",
    ],
  },
  {
    name: "Ivan Dario Pardo Clavijo",
    position: "Abogado",
    photo: "/Image/Abogados/Fotos/IVAN.jpeg",
    email: "ipardo@calderongalindo.com.co",
    linkedin: "#",
    bio: [
      "Abogado de la Universidad Santo Tomás, es especialista en Derecho Financiero y Criptoactivos de la Universidad del Rosario.",
    ],
  },
  {
    name: "Julián David Romero Espinoza",
    position: "Abogado",
    photo: "/Image/Abogados/Fotos/NICO 7 JUN CORP8006.jpg",
    email: "jromero@calderongalindo.com.co",
    linkedin: "#",
    bio: [
      "Abogado de la Universidad Militar Nueva Granada.",
    ],
  },
  {
    name: "Leidy Yasmín Celi Celi",
    position: "Abogada",
    photo: "",
    email: "lceli@calderongalindo.com.co",
    linkedin: "#",
    bio: [
      "Abogada de la Universidad Católica de Colombia.",
    ],
  },
];
