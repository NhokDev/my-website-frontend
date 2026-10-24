# Portfolio Design Brief — Glassmorphism + Immersive 3D + Aurora UI

> **Documento listo para entregar a un agente de desarrollo.**
> 
> **Archivos de referencia:** `PORTFOLIO_DESIGN_BRIEF.md` (esta especificación) y `portfolio_demo.html` (prototipo interactivo y autónomo).
> 
> **Idioma del documento:** español. **Idioma de la demo:** inglés. El idioma del producto final debe adaptarse al proyecto real.

## 0. Instrucción principal para el agente

Diseña o implementa un **portfolio personal profesional de perfil tecnológico/creativo** utilizando una combinación deliberada de los siguientes estilos:

1. **03 — Glassmorphism:** interfaz y superficies de navegación.
2. **08 — Immersive / 3D:** experiencia visual focalizada en el hero.
3. **13 — Aurora UI:** fondo, iluminación y atmósfera visual.

**Regla principal:** `Aurora = atmósfera` + `Glassmorphism = interfaz` + `3D = foco visual`. Los efectos deben realzar los proyectos y la información profesional, no competir con ellos.

Usa `portfolio_demo.html` como **referencia visual y de interacción**, no como obligación de copiar cada línea de código. Si se trabaja en un repositorio existente, adapta los componentes y estilos a su arquitectura, sin eliminar funcionalidades previas.

No inventes logros, empleadores, enlaces, proyectos, testimonios ni datos personales. Utiliza contenido real proporcionado por el propietario o placeholders claramente identificados.

---

## 1. Objetivo y dirección artística

Crear una web que comunique:

- **Competencia técnica**: ingeniería de software, interfaces, datos y/o cloud.
- **Buen gusto visual**: estética futurista y premium sin excesos.
- **Claridad profesional**: proyectos, aportaciones, tecnologías y resultados fáciles de leer.
- **Interacción memorable**: animaciones sutiles y un elemento 3D reconocible.

**Keywords:** futuristic, premium, cinematic, dark, clean, creative developer, glass, subtle motion, ambient light.

**Evitar:** excesos de blur, pantallas saturadas de degradados, 3D que intercepte el scroll, fondos luminosos detrás de textos pequeños, efectos que dificulten el rendimiento y animaciones constantes en todas las tarjetas.

### Jerarquía visual deseada

1. Nombre / propuesta de valor profesional.
2. Llamada a la acción para ver proyectos.
3. Objeto 3D decorativo protagonista.
4. Proyectos seleccionados y sus detalles.
5. Presentación, experiencia y habilidades.
6. Contacto.

---

## 2. Los tres estilos en detalle

### 2.1. 03 — Glassmorphism

**Qué es:** superficies translúcidas con desenfoque del contenido posterior, bordes iluminados y sombras suaves.

**Aplicación propuesta:**

- Barra de navegación superior.
- Tarjetas de proyectos y habilidades.
- Chips/paneles flotantes próximos al objeto 3D.
- Bloque final de contacto.
- Ventanas modales de detalles, con contraste suficiente.

**Receta CSS orientativa:**

```css
.glass {
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(1, 3, 14, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```

**Criterios:**

- El texto siempre debe mantener un contraste apropiado contra el fondo efectivo.
- Si el efecto `backdrop-filter` no está disponible, usar un fondo sólido semioscuro.
- Evitar transparencias fuertes detrás de párrafos largos o de formularios complejos.
- Usar el mismo lenguaje de bordes/radios en todos los componentes.

### 2.2. 08 — Immersive / 3D

**Qué es:** sensación de profundidad mediante perspectiva, objetos tridimensionales, iluminación, parallax y respuesta al movimiento.

**Aplicación propuesta:**

- Un objeto principal en el hero, a la derecha en escritorio.
- Ejemplos: esfera orbital, escultura iridiscente, objeto geométrico flotante o símbolo abstracto de tecnología.
- Hasta dos pequeños paneles glass flotantes alrededor del objeto.
- Movimiento lento de flotación/rotación; interacción de puntero opcional.

**Niveles posibles de implementación:**

| Nivel | Tecnología | Cuándo elegirlo |
|---|---|---|
| 1 — Prototipo | CSS 3D, gradientes y transformaciones | Concepto rápido y ligero, como `portfolio_demo.html` |
| 2 — Escena diseñada | Spline | Objeto elaborado desde editor visual |
| 3 — Escena a medida | Three.js / WebGL | Control de geometría, iluminación, cámara y shaders |

**Importante:** `portfolio_demo.html` **no integra una escena WebGL real**. Representa el estilo mediante una ilustración orbital animada en CSS y sirve como referencia visual. Si el proyecto final necesita 3D real, sustitúyela por una escena Three.js o Spline respetando el aspecto, los límites de rendimiento y el fallback.

**Criterios:**

- Un solo escenario 3D protagonista; no duplicar escenas pesadas en cada sección.
- No impedir clics, navegación por teclado, selección de texto ni scroll.
- Suspender o reducir animación cuando exista preferencia de movimiento reducido.
- Ofrecer fallback estático si WebGL no está soportado o el dispositivo tiene recursos limitados.
- En móvil, simplificar escala y complejidad; no ocupar toda la pantalla a costa del contenido.

### 2.3. 13 — Aurora UI

**Qué es:** iluminación ambiental con manchas de color difuminadas, gradientes superpuestos y variaciones tonales suaves.

**Aplicación propuesta:**

- Fondo general azul casi negro.
- Iluminación violeta detrás de la esfera 3D.
- Halo cian a un lado del hero.
- Destello verde-menta o púrpura tenue cerca de proyectos/contacto.
- Variación de intensidad conforme se avanza en la página, sin perder cohesión.

**Receta CSS orientativa:**

```css
.aurora-background {
  background:
    radial-gradient(ellipse at 20% 30%, #7357e880, transparent 55%),
    radial-gradient(ellipse at 80% 70%, #38bdf866, transparent 55%),
    #0b1026;
}
```

**Criterios:**

- Los puntos de luz funcionan como decoración, no como superficie para el texto.
- Preferir pocas capas grandes a docenas de efectos superpuestos.
- Animar lentamente con `transform` cuando sea útil; evitar animar filtros complejos continuamente en dispositivos modestos.
- Asegurar un aspecto correcto cuando los gradientes estén desactivados.

---

## 3. Sistema de diseño

### 3.1. Paleta principal

| Token | Valor | Aplicación |
|---|---|---|
| `--bg` | `#090D20` | Fondo principal |
| `--bg-2` | `#101630` | Fondos de apoyo |
| `--surface` | `rgba(255,255,255,0.075)` | Vidrio |
| `--stroke` | `rgba(255,255,255,0.18)` | Borde glass |
| `--text` | `#F5F7FF` | Texto principal |
| `--muted` | `#AEB7D4` | Texto secundario |
| `--purple` | `#865EF2` | Aurora / acentos |
| `--violet` | `#B568ED` | Aurora / objeto 3D |
| `--cyan` | `#50C9FA` | Luz secundaria |
| `--mint` | `#9DEBD6` | Estado positivo / acento discreto |

Los colores son una **base visual**, no valores obligatorios. Comprobar el contraste de todas las combinaciones en su contexto final.

### 3.2. Tipografía

- Fuente sugerida: **Inter**, `system-ui` o equivalente sans serif moderna.
- Título del hero: `clamp(48px, 6.4vw, 79px)` en desktop amplio (adaptar al diseño).
- Encabezados: peso 650–800, tracking negativo moderado.
- Texto de párrafo: 14–16 px, `line-height` 1.6–1.9.
- Etiquetas: 10–12 px, peso semibold y tracking algo mayor.
- Reservar gradientes tipográficos a un fragmento corto del título principal.

### 3.3. Espaciado, formas y composición

- Contenedor central: hasta **1140 px** con padding lateral fluido.
- Tarjetas: radios de 20–24 px.
- Navegación: 16–18 px de radio, layout horizontal.
- Botones: radios de 10–12 px; chips: radios menores.
- Secciones: separación vertical generosa; evita efectos superpuestos que reduzcan la legibilidad.
- Hero desktop: dos columnas, texto a la izquierda y pieza visual a la derecha.
- Proyectos desktop: grid de tres columnas (o Bento Grid cuando el contenido lo justifique).

---

## 4. Arquitectura de la página

### 4.1. Header / navegación

**Elementos:** marca o nombre, Home, Work, About y CTA de contacto.

**Estilo:** barra glass discreta, flotando ligeramente sobre el fondo Aurora. Sin animaciones innecesarias.

**Interacción:** enlaces con anclas reales, `:focus-visible` y hover accesible.

### 4.2. Hero / primera pantalla

**Texto sugerido (solo ejemplo):**

```text
Building digital experiences.
Creative developer building thoughtful interfaces,
powerful software, and immersive digital experiences.

[Explore my work]  [More about me]
```

**Distribución:**

- Izquierda: estado/disponibilidad opcional, titular, descripción y CTAs.
- Derecha: objeto 3D orbital o alternativa, con 1–2 pequeñas tarjetas translúcidas.
- Fondo: gradiente Aurora; halo detrás del objeto, nunca encima del titular.
- Puntos de animación: movimiento orbital lento + deriva ambiental muy suave.

**Mobile:** contenido principal primero, objeto debajo y tamaño reducido.

### 4.3. Proyectos seleccionados

Cada tarjeta debe ofrecer:

1. Visual del proyecto, imagen o mockup.
2. Categoría/área (por ejemplo, Analytics, Engineering, Creative).
3. Título del proyecto.
4. Breve descripción del problema o solución.
5. Tecnologías representativas.
6. Acceso real a caso de estudio, demo o repositorio, si existen.

En la demo hay tres **proyectos completamente ficticios**: `Insight Platform`, `Orbital Studio` y `Cloud Atlas`. Sustituirlos por proyectos verificados antes de publicar.

**Comportamiento:** elevación ligera en hover y navegación a detalle (la demo utiliza un `<dialog>` accesible a teclado).

### 4.4. About / experiencia y habilidades

- Priorizar claridad frente a efectos visuales.
- Panel de presentación con texto legible.
- Panel de habilidades ordenadas por categorías reales.
- Mostrar logros concretos solo cuando existan datos fiables.

### 4.5. Contacto y footer

- Panel glass amplio sobre un halo Aurora suave.
- CTA visible para contactar; mail o formulario funcional.
- Footer simple con navegación y créditos.
- En la demo se usa `hello@example.com`: **es un placeholder**, no un dato real.

---

## 5. Comportamiento e interacción

| Elemento | Comportamiento deseado | Restricciones |
|---|---|---|
| Aurora | Deriva muy lenta | Evitar animaciones costosas continuas |
| Vidrio | Estática; leve respuesta en hover | Mantener contraste |
| Objeto 3D | Flotación y rotación ligera | Desactivable / fallback |
| Tarjetas | Elevación discreta (`translateY`) | No desplazar elementos cercanos |
| Navegación | Scroll hacia sección | No ocultar foco ni encabezados |
| Proyectos | Abrir caso de estudio real o modal | Accesible por teclado y Escape |
| Demo | Toggles Aurora / Glass / 3D + reset | El estado visual debe cambiar realmente |

En producción, la barra de toggles es **opcional**: existe para ayudar a comparar estilos, no necesariamente como parte del portfolio definitivo.

---

## 6. Accesibilidad y UX — requisitos obligatorios

- Estructura semántica: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Jerarquía correcta de títulos (`h1` único, luego `h2`, `h3`).
- Contraste de texto normal objetivo **WCAG AA 4.5:1** y texto grande 3:1 donde aplique.
- Navegación por teclado con foco visible.
- Botones y enlaces con nombres accesibles; no usar controles interactivos decorativos sin función.
- Respetar `prefers-reduced-motion: reduce`.
- El 3D no debe ser obligatorio para interpretar el contenido.
- Layout responsive sin scroll horizontal a 320–390 px.
- Evitar información transmitida solo por color o movimiento.
- Los estados hover también deben funcionar con teclado/tacto cuando corresponda.

---

## 7. Rendimiento y arquitectura técnica

### Demo entregada

- **Stack:** un archivo HTML con CSS y JavaScript embebidos.
- **Sin instalaciones, CDNs, frameworks ni imágenes externas.**
- **Objeto orbital:** ilustración CSS con perspectiva y anillos.
- **Interacciones funcionales:** toggles de tres estilos, reset, enlaces internos, tarjetas y modales de detalle.
- **Responsive:** escritorio, tablet y móvil.

### Si se migra a una aplicación real

- Reutilizar tokens CSS y distribuir cada sección en componentes.
- Si la base es **Angular**, ejemplos de componentes: `PortfolioLayout`, `Header`, `Hero`, `OrbitalScene`, `Projects`, `ProjectCard`, `About`, `Contact`.
- Organizar el contenido como datos estructurados (JSON o TypeScript), no hardcodearlo en muchos componentes.
- Cargar un motor 3D real de forma diferida y solo en la pantalla donde haga falta.
- Liberar recursos WebGL al destruir componentes; evitar fugas de listeners y animación.
- Reducir pixel ratio, sombras, geometría, texturas y efectos en dispositivos limitados.
- Proporcionar fallback CSS o imagen estática si falla la carga de la escena.
- Priorizar una experiencia útil incluso sin JavaScript avanzado.
- Evitar dependencias nuevas para funciones que CSS puede resolver correctamente.

**Nota:** si el proyecto tiene SSR/hidratación, cualquier acceso a `window`, `document` o WebGL debe respetar el entorno de ejecución.

---

## 8. Checklist de aceptación

El agente debe considerar la implementación finalizada solo cuando:

- [ ] El hero combina correctamente iluminación Aurora, elementos glass y una pieza 3D o su alternativa.
- [ ] Se puede distinguir visualmente qué aporta cada una de las tres capas.
- [ ] Las tarjetas y navegación son legibles sobre el fondo.
- [ ] Home, Work, About y Contact existen, con navegación real.
- [ ] Los proyectos muestran información significativa sin inventar datos.
- [ ] No hay desbordamiento horizontal en móvil.
- [ ] El foco de teclado es visible y los botones funcionan.
- [ ] La preferencia de movimiento reducido está respetada.
- [ ] Hay fallback para filtros de vidrio y para 3D.
- [ ] La página funciona sin errores de consola ni dependencias ausentes.
- [ ] El diseño ha sido revisado visualmente al menos en escritorio y móvil.
- [ ] Se han eliminado los placeholders antes del despliegue público.

---

## 9. Referencia de componentes y estados de la demo

En `portfolio_demo.html`:

| Elemento | Selector / función | Descripción |
|---|---|---|
| Contenedor | `#portfolio` | Portfolio con todas las capas |
| Aurora | `.ambient`, `.glow` | Cuatro halos de iluminación difusa |
| Glass | `.glass` | Tratamiento visual compartido |
| 3D ilustrado | `.scene`, `.orbital`, `.planet`, `.ring-front` | Objeto orbital creado con CSS |
| Toggle Aurora | `[data-toggle="aurora"]` | Añade/quita `.no-aurora` |
| Toggle Glass | `[data-toggle="glass"]` | Añade/quita `.no-glass` |
| Toggle 3D | `[data-toggle="3d"]` | Añade/quita `.no-3d` |
| Reinicio | `#resetStyles` | Reactiva los tres estilos |
| Modal | `#projectDialog` | Información de ejemplo del proyecto |

**Cómo probar la demo:** abre `portfolio_demo.html` con un navegador moderno. Activa y desactiva los tres botones de la barra superior. Entra en **View concept** para ver el modal y comprueba el diseño en una ventana estrecha.

---

## 10. Prompt condensado reutilizable

Puedes copiar este bloque directamente en un agente de código:

```text
Actúa como diseñador UI/UX senior y frontend engineer. Implementa un portfolio
profesional tecnológico combinando tres estilos con roles definidos:

- 13 Aurora UI: ambiente, fondo dark navy y halos suaves morados/cian/menta.
- 03 Glassmorphism: navbar, tarjetas, chips y panel de contacto con blur,
  transparencia, bordes suaves y buen contraste.
- 08 Immersive / 3D: un único elemento visual protagonista en el hero,
  con movimiento sutil y fallback accesible.

Usa el archivo PORTFOLIO_DESIGN_BRIEF.md como especificación y
portfolio_demo.html como referencia visual y de comportamiento.

Crea las secciones Home/Hero, Selected Work, About/Skills y Contact.
Prioriza jerarquía tipográfica, legibilidad, accesibilidad y rendimiento.
El 3D no debe interrumpir navegación ni scroll. Respeta reduced motion.
Haz el diseño responsive y evita scroll horizontal en móvil.

No inventes datos personales ni proyectos reales. Si faltan datos usa
placeholders identificados y fáciles de sustituir.

Si existe un proyecto, inspecciona su estructura antes de modificarlo;
integra la propuesta respetando sus convenciones y tecnologías.
No añadas dependencias innecesarias. Verifica comportamiento real,
consola, foco de teclado y visualización desktop/mobile.

Entrega código funcional y un resumen de los archivos cambiados,
las decisiones principales, los puntos personalizables y las pruebas realizadas.
```

---

## 11. Ficheros y personalización rápida

```text
portfolio_aurora_glass_3d/
├── PORTFOLIO_DESIGN_BRIEF.md   # Especificación para el agente
└── portfolio_demo.html         # Prototipo interactivo autónomo
```

En el HTML, empieza modificando:

1. Los tokens `:root` en la hoja de estilo (colores, radios y ancho).
2. El nombre de marca `alex.dev` y el titular del hero.
3. La descripción de perfil y las habilidades.
4. Los tres `<article class="project glass">` y el objeto `projects` de JavaScript.
5. El contacto `mailto:hello@example.com`.
6. La pieza 3D CSS por una escena real, solo si aporta valor al resultado.

> **Filosofía final:** una experiencia visual sofisticada que sirva para mostrar proyectos reales. Primero claridad; después profundidad; finalmente efectos.
