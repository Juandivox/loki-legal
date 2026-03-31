export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        backgroundColor: "var(--color-negro-profundo)",
        color: "var(--color-blanco-puro)",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div
          className="text-xl font-bold flex items-center mb-4 md:mb-0 opacity-90"
          style={{ fontFamily: "var(--font-family-titulo)" }}
        >
          <span
            className="inline-block w-3 h-5 mr-2"
            style={{ backgroundColor: "var(--color-verde-institucional)" }}
          />
          Calderón Galindo Abogados
        </div>
        <p
          className="text-sm text-gray-400"
          style={{ fontFamily: "var(--font-family-cuerpo)" }}
        >
          &copy; {new Date().getFullYear()} Calderón Galindo Abogados. Todos
          los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
