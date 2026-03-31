import Image from "next/image";
import {
  ShieldCheck,
  Gavel,
  Users,
  Scale,
  Heart,
  Quote,
  Target,
  Eye,
  Award,
  Shield,
  Handshake,
  Lightbulb,
  Lock,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TeamCarousel from "@/components/TeamCarousel";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <div
      className="font-cuerpo"
      style={{
        color: "var(--color-negro-profundo)",
        backgroundColor: "var(--color-blanco-puro)",
        fontFamily: "var(--font-family-cuerpo)",
      }}
    >
      <Header activePage="home" />

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="py-16 lg:py-20 hero-bg flex items-center"
        >
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <Image
              src="/Image/Abogados/Logo/Logo_blanco1.png"
              alt="Calderón Galindo Abogados Logo"
              width={400}
              height={120}
              className="banner-logo mx-auto fade-in"
              priority
              unoptimized
            />
            <p
              className="text-base lg:text-lg font-light mb-4 opacity-90 fade-in"
              style={{
                color: "var(--color-blanco-puro)",
                textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                maxWidth: 700,
                margin: "0 auto 1rem auto",
                fontFamily: "var(--font-family-cuerpo)",
              }}
            >
              Asesoría jurídica de vanguardia para proteger y potenciar el
              crecimiento de su negocio en Colombia.
            </p>
            <a
              href="https://wa.me/573239326636?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 font-medium rounded-xl text-lg shadow-xl hover:scale-[1.03] hover:shadow-2xl hover:opacity-95 transform fade-in"
              style={{
                backgroundColor: "var(--color-verde-institucional)",
                color: "var(--color-blanco-puro)",
                fontFamily: "var(--font-family-cuerpo)",
              }}
            >
              Agendar una Consulta
            </a>
          </div>
        </section>

        {/* ¿Quiénes somos? */}
        <section
          id="quienes-somos"
          className="py-16 lg:py-24"
          style={{ backgroundColor: "var(--color-blanco-puro)" }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
              <div className="mb-8 lg:mb-0 transform hover:scale-[1.01] transition duration-500 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/Image/Abogados/Fotos/1NICO 7 JUN CORP7988.jpg"
                  alt="Imagen institucional"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl grayscale-effect"
                  unoptimized
                />
              </div>
              <div className="space-y-6">
                <h2
                  className="text-3xl lg:text-4xl font-semibold mb-6 text-left"
                  style={{
                    fontFamily: "var(--font-family-titulo)",
                    color: "var(--color-verde-institucional)",
                  }}
                >
                  ¿Quiénes somos?
                </h2>
                <p
                  className="leading-relaxed text-lg text-gray-700"
                  style={{ fontFamily: "var(--font-family-cuerpo)" }}
                >
                  Somos una firma legal que combina la solidez de equipo
                  jurídico competitivo, con una visión innovadora y de
                  crecimiento permanente.
                </p>
                <p
                  className="leading-relaxed text-lg text-gray-700"
                  style={{ fontFamily: "var(--font-family-cuerpo)" }}
                >
                  El propósito de nuestra firma es brindarle una atención
                  integral y personalizada a cada uno de nuestros clientes;
                  aspiramos a ser sus aliados estratégicos, ofreciendo
                  soluciones claras, eficientes, adaptadas a las necesidades y
                  propósitos de nuestros usuarios.
                </p>
                <p
                  className="leading-relaxed text-lg text-gray-700"
                  style={{ fontFamily: "var(--font-family-cuerpo)" }}
                >
                  Con un equipo de especialistas altamente cualificados,
                  brindamos la tranquilidad y el respaldo que usted y su empresa
                  necesitan para enfrentar cualquier desafío legal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de Práctica */}
        <section id="areas-practica" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2
              className="text-3xl lg:text-4xl font-semibold mb-16 text-center"
              style={{
                fontFamily: "var(--font-family-titulo)",
                color: "var(--color-verde-institucional)",
              }}
            >
              Nuestras Áreas de Práctica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {/* Insolvencia */}
              <div
                className="p-8 rounded-xl shadow-lg border-t-4 hover:shadow-xl transition duration-500 transform hover:-translate-y-1 card-hover flex flex-col"
                style={{
                  backgroundColor: "var(--color-blanco-puro)",
                  borderColor: "var(--color-verde-institucional)",
                }}
              >
                <ShieldCheck
                  className="w-10 h-10 mb-4"
                  style={{ color: "var(--color-verde-institucional)" }}
                />
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: "var(--font-family-titulo)",
                    color: "var(--color-negro-profundo)",
                  }}
                >
                  Insolvencia de persona natural no comerciante y pequeño
                  comerciante
                </h3>
                <p
                  className="text-gray-700 leading-relaxed flex-grow"
                  style={{ fontFamily: "var(--font-family-cuerpo)" }}
                >
                  Prestamos asesoría legal relacionada con su situación
                  financiera ofreciendo propuestas que le permitan resolver y
                  solucionar sus dificultades financieras, ya sea a través de la
                  negociación directa con los acreedores o a través de un
                  proceso de liquidación.
                </p>
              </div>

              {/* Derecho Civil */}
              <div
                className="p-8 rounded-xl shadow-lg border-t-4 hover:shadow-xl transition duration-500 transform hover:-translate-y-1 card-hover flex flex-col"
                style={{
                  backgroundColor: "var(--color-blanco-puro)",
                  borderColor: "var(--color-verde-institucional)",
                }}
              >
                <Gavel
                  className="w-10 h-10 mb-4"
                  style={{ color: "var(--color-verde-institucional)" }}
                />
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: "var(--font-family-titulo)",
                    color: "var(--color-negro-profundo)",
                  }}
                >
                  Derecho Civil
                </h3>
                <p
                  className="text-gray-700 leading-relaxed flex-grow"
                  style={{ fontFamily: "var(--font-family-cuerpo)" }}
                >
                  Ofrecemos una amplia gama de servicios civiles diseñados para
                  satisfacer las necesidades de nuestra comunidad. Nuestro
                  compromiso es brindar soluciones efectivas y de calidad en
                  áreas como la construcción, asesoría legal y gestión de
                  proyectos.
                </p>
              </div>

              {/* Derecho Laboral */}
              <div
                className="p-8 rounded-xl shadow-lg border-t-4 hover:shadow-xl transition duration-500 transform hover:-translate-y-1 card-hover flex flex-col"
                style={{
                  backgroundColor: "var(--color-blanco-puro)",
                  borderColor: "var(--color-verde-institucional)",
                }}
              >
                <Users
                  className="w-10 h-10 mb-4"
                  style={{ color: "var(--color-verde-institucional)" }}
                />
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: "var(--font-family-titulo)",
                    color: "var(--color-negro-profundo)",
                  }}
                >
                  Derecho Laboral y Seguridad Social
                </h3>
                <div
                  className="text-gray-700 leading-relaxed flex-grow space-y-3"
                  style={{ fontFamily: "var(--font-family-cuerpo)" }}
                >
                  <p>
                    Asesoramos a empresas en la gestión de relaciones laborales
                    y el cumplimiento normativo para minimizar riesgos y
                    fomentar un ambiente de trabajo productivo.
                  </p>
                  <p>
                    Ofrecemos servicio de asesoría y defensa jurídica a los
                    trabajadores, con el objetivo de exigir todos aquellos
                    derechos y prestaciones que se hayan negado o dejado de
                    pagar por parte del empleador.
                  </p>
                </div>
              </div>

              {/* Derecho Tributario */}
              <div
                className="p-8 rounded-xl shadow-lg border-t-4 hover:shadow-xl transition duration-500 transform hover:-translate-y-1 card-hover flex flex-col"
                style={{
                  backgroundColor: "var(--color-blanco-puro)",
                  borderColor: "var(--color-verde-institucional)",
                }}
              >
                <Scale
                  className="w-10 h-10 mb-4"
                  style={{ color: "var(--color-verde-institucional)" }}
                />
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: "var(--font-family-titulo)",
                    color: "var(--color-negro-profundo)",
                  }}
                >
                  Derecho Tributario, Protección Patrimonial y Lavado de
                  Activos
                </h3>
                <div
                  className="text-gray-700 leading-relaxed flex-grow space-y-3"
                  style={{ fontFamily: "var(--font-family-cuerpo)" }}
                >
                  <p>
                    <strong>Derecho Tributario:</strong> Asesoría integral en
                    planeación fiscal, cumplimiento de obligaciones tributarias y
                    defensa en procesos de determinación oficial.
                  </p>
                  <p>
                    <strong>Protección Patrimonial:</strong> Diseño de
                    estrategias legales para blindar su patrimonio, estructuras
                    societarias eficientes y asesoría en procesos de
                    insolvencia.
                  </p>
                  <p>
                    <strong>Lavado de Activos:</strong> Implementación de
                    programas de cumplimiento, asesoría en riesgos SARLAFT, y
                    representación legal.
                  </p>
                </div>
              </div>

              {/* Derecho de Familia */}
              <div
                className="p-8 rounded-xl shadow-lg border-t-4 hover:shadow-xl transition duration-500 transform hover:-translate-y-1 card-hover flex flex-col"
                style={{
                  backgroundColor: "var(--color-blanco-puro)",
                  borderColor: "var(--color-verde-institucional)",
                }}
              >
                <Heart
                  className="w-10 h-10 mb-4"
                  style={{ color: "var(--color-verde-institucional)" }}
                />
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: "var(--font-family-titulo)",
                    color: "var(--color-negro-profundo)",
                  }}
                >
                  Derecho de Familia
                </h3>
                <div
                  className="text-gray-700 leading-relaxed flex-grow space-y-3"
                  style={{ fontFamily: "var(--font-family-cuerpo)" }}
                >
                  <p>
                    <strong>Divorcio y Separación:</strong> Asesoría integral en
                    procesos de divorcio de mutuo acuerdo y contencioso,
                    liquidación de sociedad conyugal.
                  </p>
                  <p>
                    <strong>Sucesiones y Testamentos:</strong> Planeación
                    sucesoral, elaboración de testamentos, y tramitación de
                    procesos de sucesión.
                  </p>
                  <p>
                    <strong>Custodia y Régimen de Visitas:</strong>{" "}
                    Representación legal en procesos de custodia y regulación de
                    visitas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonio */}
        <section
          id="testimonio"
          className="py-12 lg:py-16"
          style={{ backgroundColor: "var(--color-verde-institucional)" }}
        >
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl text-center">
            <Quote
              className="w-12 h-12 mx-auto mb-6 opacity-75"
              style={{ color: "var(--color-negro-profundo)" }}
            />
            <blockquote
              className="text-lg lg:text-xl font-medium italic leading-relaxed"
              style={{
                fontFamily: "var(--font-family-titulo)",
                color: "var(--color-negro-profundo)",
              }}
            >
              &ldquo;Quiero expresar mi más sincero agradecimiento a la firma de
              abogados que me representó en un momento tan crucial de mi vida.
              Desde el primer contacto, su profesionalismo y empatía me hicieron
              sentir respaldado y seguro. Cada miembro del equipo se mostró
              comprometido con mi caso, brindándome una atención personalizada y
              explicando cada paso del proceso legal de manera clara. Gracias a
              su dedicación y experiencia, obtuve un resultado favorable que
              superó mis expectativas. Sin duda, recomendaré sus servicios a
              amigos y familiares, ya que sé que estarán en las mejores manos.
              ¡Mil gracias por su apoyo incondicional!&rdquo;
            </blockquote>
            <p
              className="text-base font-semibold mt-4 opacity-90"
              style={{
                fontFamily: "var(--font-family-cuerpo)",
                color: "var(--color-negro-profundo)",
              }}
            >
              — Cliente Satisfecho
            </p>
          </div>
        </section>

        {/* Sobre Nosotros */}
        <section
          id="about"
          className="py-16 lg:py-24"
          style={{ backgroundColor: "var(--color-blanco-puro)" }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-16 text-center"
              style={{
                fontFamily: "var(--font-family-titulo)",
                color: "var(--color-verde-institucional)",
              }}
            >
              Sobre Nosotros
            </h2>

            {/* Imagen Panorámica */}
            <div
              className="mb-12 transform hover:scale-[1.005] transition duration-500 rounded-xl overflow-hidden shadow-xl"
              style={{ height: 300 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                alt="Edificio institucional"
                className="w-full h-full object-cover rounded-xl grayscale-effect"
                style={{ objectPosition: "center 30%" }}
              />
            </div>

            {/* Historia */}
            <div className="mb-16">
              <h3
                className="text-3xl font-semibold mb-6"
                style={{
                  fontFamily: "var(--font-family-titulo)",
                  color: "var(--color-negro-profundo)",
                }}
              >
                <span style={{ color: "var(--color-verde-institucional)" }}>
                  Nuestra Historia
                </span>
              </h3>
              <div
                className="space-y-4 text-gray-700 leading-relaxed text-lg"
                style={{ fontFamily: "var(--font-family-cuerpo)" }}
              >
                <p>
                  En el corazón de Bogotá, dos jóvenes apasionados por el
                  derecho, Calderón y Galindo unieron sus sueños y aspiraciones
                  para fundar una firma jurídica consultora. Desde el inicio, su
                  visión fue clara: crear un espacio donde la justicia y el
                  derecho se entrelazarán para ofrecer soluciones efectivas a
                  quienes más las necesitaban. Con una oficina ubicada en el
                  emblemático Hotel Tequendama, comenzaron su travesía,
                  trabajando arduamente todos los días para posicionarse como
                  una de las grandes firmas del país.
                </p>
                <p>
                  Gracias a la confianza que sus clientes les han depositado,
                  Calderón y Galindo han logrado expandir su firma, abriendo
                  sedes en las principales ciudades de Colombia. Este crecimiento
                  no solo refleja su dedicación, sino también el compromiso de
                  un equipo de trabajo conformado por profesionales con las
                  mejores competencias en diversas áreas del derecho.
                </p>
                <p>
                  Hoy, su firma no solo es reconocida por su excelencia, sino
                  también por su enfoque humano y personalizado. Calderón y
                  Galindo saben que cada caso es único y por ello se comprometen
                  a brindar un servicio excepcional que supere las expectativas
                  de sus clientes.
                </p>
              </div>
            </div>

            {/* Misión y Visión */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div
                className="p-8 rounded-xl shadow-lg border-l-4"
                style={{
                  backgroundColor: "#f9fafb",
                  borderColor: "var(--color-verde-institucional)",
                }}
              >
                <div className="flex items-center mb-4">
                  <Target
                    className="w-8 h-8 mr-3"
                    style={{ color: "var(--color-verde-institucional)" }}
                  />
                  <h4
                    className="text-2xl font-semibold"
                    style={{
                      fontFamily: "var(--font-family-titulo)",
                      color: "var(--color-negro-profundo)",
                    }}
                  >
                    Misión
                  </h4>
                </div>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-family-cuerpo)" }}
                >
                  Ofrecer asesoría y representación legal de la más alta
                  calidad, generando soluciones jurídicas prácticas e
                  innovadoras que permitan solucionar aquellos conflictos o
                  dificultades jurídicas de nuestros clientes. Actuamos con
                  rigor, ética y un profundo entendimiento de sus objetivos.
                </p>
              </div>
              <div
                className="p-8 rounded-xl shadow-lg border-l-4"
                style={{
                  backgroundColor: "#f9fafb",
                  borderColor: "var(--color-verde-institucional)",
                }}
              >
                <div className="flex items-center mb-4">
                  <Eye
                    className="w-8 h-8 mr-3"
                    style={{ color: "var(--color-verde-institucional)" }}
                  />
                  <h4
                    className="text-2xl font-semibold"
                    style={{
                      fontFamily: "var(--font-family-titulo)",
                      color: "var(--color-negro-profundo)",
                    }}
                  >
                    Visión
                  </h4>
                </div>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-family-cuerpo)" }}
                >
                  Consolidarnos como una de las firmas líderes en Colombia,
                  siendo el referente indiscutible en derecho privado, laboral y
                  seguridad social, comercial y societario; así como una empresa
                  vanguardista en el uso de la tecnología.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="p-8 bg-gray-50 rounded-xl shadow-lg">
              <h4
                className="text-2xl font-semibold mb-6 text-center"
                style={{
                  fontFamily: "var(--font-family-titulo)",
                  color: "var(--color-negro-profundo)",
                }}
              >
                <span style={{ color: "var(--color-verde-institucional)" }}>
                  Nuestros Valores
                </span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Excelencia",
                    desc: "Nos esforzamos por superar las expectativas en cada asunto que se nos confía.",
                  },
                  {
                    icon: Shield,
                    title: "Integridad",
                    desc: "La honestidad, la transparencia y la ética son el fundamento de todas nuestras actuaciones.",
                  },
                  {
                    icon: Handshake,
                    title: "Compromiso",
                    desc: "Asumimos los objetivos de nuestros clientes como propios, dedicando todo nuestro esfuerzo a su defensa.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovación",
                    desc: "Estamos en constante actualización para aplicar las herramientas y enfoques más modernos.",
                  },
                  {
                    icon: Lock,
                    title: "Confidencialidad",
                    desc: "La protección de la información de nuestros clientes es sagrada.",
                  },
                  {
                    icon: Scale,
                    title: "Justicia",
                    desc: "Buscamos siempre la equidad y el respeto por los derechos.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center text-center p-4"
                  >
                    <Icon
                      className="w-10 h-10 mb-3"
                      style={{ color: "var(--color-verde-institucional)" }}
                    />
                    <h5
                      className="text-lg font-semibold mb-2"
                      style={{
                        fontFamily: "var(--font-family-titulo)",
                        color: "var(--color-negro-profundo)",
                      }}
                    >
                      {title}
                    </h5>
                    <p
                      className="text-sm text-gray-700"
                      style={{ fontFamily: "var(--font-family-cuerpo)" }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section id="team" className="py-16 lg:py-24 bg-gray-100">
          <div className="container mx-auto px-6 lg:px-12">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-16 text-center"
              style={{
                fontFamily: "var(--font-family-titulo)",
                color: "var(--color-verde-institucional)",
              }}
            >
              Nuestro Equipo
            </h2>
            <TeamCarousel />
          </div>
        </section>

        {/* Contacto */}
        <section
          id="contact"
          className="py-16 lg:py-24"
          style={{ backgroundColor: "var(--color-blanco-puro)" }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4 text-center"
              style={{
                fontFamily: "var(--font-family-titulo)",
                color: "var(--color-negro-profundo)",
              }}
            >
              Póngase en contacto con nosotros
            </h2>
            <p
              className="text-xl text-gray-700 mb-16 text-center max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-family-cuerpo)" }}
            >
              Estamos listos para escucharle. Agende una consulta para analizar
              su caso y descubrir cómo podemos ayudarle.
            </p>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-12">
                {/* Datos Oficina */}
                <div
                  className="p-8 border-l-4 rounded-xl shadow-lg bg-gray-50"
                  style={{ borderColor: "var(--color-verde-institucional)" }}
                >
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{
                      fontFamily: "var(--font-family-titulo)",
                      color: "var(--color-negro-profundo)",
                    }}
                  >
                    Datos de la Oficina
                  </h3>
                  <ul
                    className="space-y-3 text-gray-700"
                    style={{ fontFamily: "var(--font-family-cuerpo)" }}
                  >
                    <li className="flex items-start">
                      <MapPin
                        className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                        style={{ color: "var(--color-verde-institucional)" }}
                      />
                      <span>
                        Bogotá Hotel Tequendama Edificio Salón Monserrate
                        Carrera 10 #26-21 piso 8
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Phone
                        className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                        style={{ color: "var(--color-verde-institucional)" }}
                      />
                      <span>
                        WhatsApp:{" "}
                        <a
                          href="https://wa.me/573239326636"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          (+57) 323 9326636
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Mail
                        className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                        style={{ color: "var(--color-verde-institucional)" }}
                      />
                      <span>
                        <a
                          href="mailto:contacto@calderongalindoabogados.com"
                          className="hover:underline"
                        >
                          contacto@calderongalindoabogados.com
                        </a>{" "}
                        ;{" "}
                        <a
                          href="mailto:vyclawadvisory@gmail.com"
                          className="hover:underline"
                        >
                          vyclawadvisory@gmail.com
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Clock
                        className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                        style={{ color: "var(--color-verde-institucional)" }}
                      />
                      <span>Lunes a Viernes de 7:00 a.m. a 6:00 p.m.</span>
                    </li>
                  </ul>
                </div>

                {/* Formulario */}
                <div
                  className="p-8 rounded-xl shadow-2xl border border-gray-100"
                  style={{ backgroundColor: "var(--color-blanco-puro)" }}
                >
                  <h3
                    className="text-2xl font-semibold mb-6"
                    style={{
                      fontFamily: "var(--font-family-titulo)",
                      color: "var(--color-negro-profundo)",
                    }}
                  >
                    Formulario de Consulta
                  </h3>
                  <ContactForm />
                </div>
              </div>

              {/* Mapa */}
              <div className="h-96 lg:h-full rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8341234567!2d-74.07234!3d4.6086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7ecaaaaaa%3A0x1234567890abcdef!2sCarrera%2010%20%2326-21%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación oficina - Hotel Tequendama"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
