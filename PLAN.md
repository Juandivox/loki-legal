# Plan: Sitio Web DUE & DO — Firma de Abogados

## Contexto

Construir desde cero el sitio web corporativo de **DUE & DO**, una firma de abogados especializada en compliance, due diligence, derecho penal corporativo, derecho societario, derecho tributario y derecho cambiario. El repositorio actual está vacío (working tree limpio tras revert). El sitio debe reflejar una identidad de marca **misteriosa, oscura y elegante** según el manual de marca proporcionado, y posicionarse visualmente al nivel de referentes globales como Harvey y Legora.

**Outcome esperado:** una landing moderna, performante y SEO-friendly en español, con widget de contacto multicanal (Cal.com, WhatsApp, email).


## Identidad de marca (del manual)

- **Fondo:** negro siempre (`#000000`). El blanco no forma parte del fondo.
- **Paleta:**
  - `#3A3A3A` — gris oscuro
  - `#5B5B5B` — gris medio
  - `#A6A6A6` — gris claro
  - `#FFFFFF` — blanco (solo texto/acentos)
- **Tipografía:** Bodoni Moda (Google Fonts) — única e inmodificable.
- **Logo:** imagotipo "D" con pieza de puzzle + wordmark "DUE & DO". Distribución inmodificable.
- **Tono:** misterioso, oscuro, sofisticado.

---

## Dirección de diseño UI

### ADN visual
Oscuro, misterioso, elegante, alto contraste. La web debe posicionarse entre una **firma premium** y una **marca de innovación legal** — no un bufete clásico ni una landing SaaS genérica.

### Principios de UI
- Pantallas predominantemente negras o gris grafito; bloques blancos solo como contraste interno, nunca como fondo dominante.
- Hero de alto impacto: mucho aire, tipografía grande, una sola promesa de valor fuerte.
- Tarjetas con borde fino 1 px, sombras suaves, reflejos metálicos discretos — sin colores fuertes.
- Animaciones sutiles: fade, desplazamientos lentos, hover elegante. Nada estridente ni con rebotes.
- Imágenes en blanco y negro o composiciones abstractas (textura de cristal, acero, papel oscuro).
- Espaciado generoso entre bloques — la sensación premium viene del espacio, no del ornamento.

### Sistema visual

| Elemento | Directriz |
|---|---|
| Titulares | Bodoni Moda, grande, peso bold |
| Cuerpo | Sans-serif limpia y compacta (Inter o similar) |
| Botones | Rectangulares, negro/gris carbón, borde fino, hover con luz sutil o inversión a blanco |
| Cards | Fondo negro profundo o gris humo, borde 1 px `#3A3A3A`, sombra suave |
| Íconos | Lineales, monocromáticos, sobrios |
| Inputs | Amplios, borde visible, fondo oscuro, texto claro |
| Imágenes | Render abstracto, texturas metálicas, fotografía monocroma |

**Evitar:** fondos blancos dominantes, colores saturados, layouts recargados, modificaciones al imagotipo.

### Referentes y qué tomar de cada uno

| Referencia | Sensación | Qué tomar | Cómo adaptarlo |
|---|---|---|---|
| Stanford Legal Design Lab | Claridad humana | Bloques visuales simples, íconos limpios, jerarquía pedagógica | Secciones "cómo trabajamos", proceso, FAQ |
| Fuse · A&O Shearman | Innovación premium | Portada con narrativa, módulos editoriales, exclusividad corporativa | Hero oscuro con claim fuerte, bloques de servicios tipo editorial |
| BRYTER | Producto + IA | Estructura modular, titulares directos, tarjetas, CTAs claros | Presentar servicios y propuesta de valor sin exceso de texto |
| LegalOn | Conversión | Promesa de valor clara arriba, interfaz limpia, CTA inmediato | Homepage que venda confianza y rapidez desde el primer pantallazo |
| ECIJA Tech | Corporativo tecnológico | Credibilidad empresarial + lenguaje de transformación digital | Posicionar DUE & DO como sofisticado y listo para clientes de negocio |
| Clifford Chance / Create+65 | Editorial de lujo | Tono editorial, espacio interno, composición sobria | Blog, casos, artículos y piezas de autoridad de marca |

### Estructura de la homepage

| # | Sección | Descripción |
|---|---|---|
| 01 | **Hero principal** | Título serif grande, subtítulo breve, CTA primario ("Agenda una conversación") + secundario ("Ver capacidades"), composición visual oscura |
| 02 | **Barra de confianza** | Frases de autoridad o logos de aliados |
| 03 | **Servicios** | 5 bloques: Compliance & Due Diligence, Derecho Penal Corporativo, Derecho Societario, Derecho Tributario, Derecho Cambiario |
| 04 | **Cómo trabajamos** | Proceso en 3-4 pasos, lenguaje claro y visual |
| 05 | **Casos / insights** | Tarjetas editoriales con artículos o puntos de vista |
| 06 | **CTA final** | Bloque oscuro de cierre, frase potente + botón WhatsApp |

### Copy de referencia
- **Hero:** *"Diseño legal con visión estratégica. Una firma que combina criterio, claridad y presencia contemporánea."*
- **CTA primario:** Agenda una conversación
- **CTA secundario:** Ver capacidades
- **Bloque de autoridad:** *"Convertimos complejidad jurídica en experiencias más claras, sólidas y confiables."*

---

## Stack técnico

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Estilos:** Tailwind CSS 4 con tokens de marca en `globals.css`
- **Animaciones:** Framer Motion (entrada, scroll-reveal, parallax sutil)
- **Tipografía:** `next/font/google` → Bodoni Moda
- **Iconos:** lucide-react
- **Contacto:** enlace WhatsApp (deep link `wa.me`)
- **SEO:** metadata API de Next, sitemap.ts, robots.ts, Open Graph
- **Deploy target:** Vercel
- **Idioma:** solo español (sin i18n)

---

## Arquitectura de páginas

```
app/
├── layout.tsx          # Fuente Bodoni, fondo negro global, nav, footer
├── page.tsx            # Home (one-page con secciones)
├── nosotros/page.tsx   # Quiénes somos / equipo
├── servicios/page.tsx  # Detalle de áreas de práctica
├── contacto/page.tsx   # Formulario + widget Cal + WhatsApp
├── api/contact/route.ts # Envío email con Resend
├── sitemap.ts
└── robots.ts

components/
├── layout/Navbar.tsx
├── layout/Footer.tsx
├── sections/Hero.tsx
├── sections/Services.tsx
├── sections/About.tsx
├── sections/Approach.tsx
├── sections/Contact.tsx
├── ui/ServiceCard.tsx
├── ui/ContactWidget.tsx   # tabs: Cal | WhatsApp | Email
└── ui/AnimatedText.tsx

lib/
├── services.ts            # data de áreas de práctica
└── site-config.ts         # nombre, redes, contacto, cal link
```

---

## Etapas de implementación

### Etapa 1 — Bootstrap del proyecto
- `npx create-next-app@latest` con TS, Tailwind, App Router, alias `@/*`.
- Configurar `tailwind.config` y `globals.css` con tokens de marca (colores, fuente).
- Cargar Bodoni Moda con `next/font/google`.
- Setup ESLint/Prettier.
- Estructura de carpetas según arquitectura.

### Etapa 2 — Layout base e identidad
- `layout.tsx`: fondo `#000`, texto blanco, fuente global Bodoni.
- `Navbar`: logo + links (Inicio, Servicios, Nosotros, Contacto), sticky con blur al scroll, mobile drawer.
- `Footer`: logo, links, redes, copyright, dirección.
- Añadir assets del logo en `public/brand/` (logo blanco PNG/SVG).

### Etapa 3 — Home / Hero
- Hero a pantalla completa: imagotipo grande + tagline animado (fade-in con Framer Motion).
- Microinteracción: cursor sutil, scroll indicator.
- Estilo inspirado en Harvey: mucho espacio negativo, tipografía dominante.

### Etapa 4 — Sección de servicios
- Grid de 5 áreas de práctica con `ServiceCard`:
  1. Compliance & Due Diligence
  2. Derecho Penal Corporativo
  3. Derecho Societario
  4. Derecho Tributario
  5. Derecho Cambiario
- Cada card: ícono, título, descripción corta, hover con borde gris (`#5B5B5B`).
- Página `/servicios` con detalle expandido por área.

### Etapa 5 — Nosotros / enfoque
- Sección "Quiénes somos" con texto editorial.
- Sección "Nuestro enfoque" tipo pasos (1. Análisis, 2. Estrategia, 3. Ejecución).
- Animaciones scroll-reveal.

### Etapa 6 — Sección de contacto
- Botón/sección de contacto via **WhatsApp** con deep link `https://wa.me/<numero>?text=...`.
- Variable de entorno: `NEXT_PUBLIC_WHATSAPP_NUMBER`.

### Etapa 7 — SEO, performance y pulido
- Metadata por página, OG image con el logo.
- `sitemap.ts` y `robots.ts`.
- Optimización de imágenes con `next/image`.
- Lighthouse pass (objetivo 95+ en todas las métricas).
- Revisión responsive (mobile-first).

### Etapa 8 — Deploy
- Repo a GitHub (rama `loki-legal-dev`).
- Conectar a **AWS Amplify**, configurar env vars (`NEXT_PUBLIC_WHATSAPP_NUMBER`).
- Configurar `amplify.yml` con build settings para Next.js 15 (SSR via Amplify Hosting).
- Dominio custom (pendiente del usuario).

---

## Archivos críticos a crear

- `app/layout.tsx` — fondo negro, Bodoni, providers
- `app/page.tsx` — home compuesta de secciones
- `components/ui/ContactWidget.tsx` — botón WhatsApp con mensaje prellenado
- `lib/services.ts` — fuente única de las 5 áreas de práctica
- `tailwind.config.ts` — tokens de marca
- `app/globals.css` — variables CSS de paleta

---

## Información pendiente del usuario

Antes de codear necesito que confirmes:

1. **Logo:** SVG/PNG del imagotipo "D" + wordmark en alta resolución.
2. **Cal.com:** link/usuario a embeber.
3. **WhatsApp:** número con código de país.
4. **Email destino** para el formulario.
5. **Datos legales:** nombre fiscal, dirección, ciudad, redes sociales.
6. **Copys:** textos definitivos o uso placeholders profesionales para refinar luego.

Estos los puedes ir entregando por etapa, no bloquean el bootstrap.

---

## Verificación

- `npm run dev` → revisar visualmente cada sección en `http://localhost:3000`.
- Probar formulario de contacto end-to-end (recibir email real vía Resend).
- Probar widget Cal.com y deep link WhatsApp en mobile.
- `npm run build` sin errores.
- Lighthouse en modo producción ≥ 95 en Performance, Accessibility, Best Practices, SEO.
- QA responsive en 360px, 768px, 1280px, 1920px.
