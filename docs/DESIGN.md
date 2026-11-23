# NoMadLab: sistema de diseño v1.1

Estado: v1.1, 23-11-2026, Europe/Madrid (UTC+1). Todavía no hay pantallas.

Decisiones de Juan, APROBADO por Juan 2026-11-23:

1. Sin color de acento. El foco y los enlaces en línea son neutros, en #171717 (apartados 2 y 5).
2. Tipografía: Inter Tight + JetBrains Mono, APROBADO por Juan 2026-11-23 (la del site 3D actual). Sustituye a Geist (apartado 3).
3. Hero: un fotograma real de un caso destacado, sin objeto geométrico (apartado 5, «Hero»).
4. Botón: 40px con ratón y 44px en táctil o a ≤1023px (apartado 5).

El sistema es independiente del contenido. No usa ni necesita copy del site: todos los ejemplos son texto de muestra y están marcados como tales. Los textos los pone Studio, encima del sistema.

Fuentes, cada una con su papel:

- Visual: Vercel (https://vercel.com/), elegido por Juan el 23-11-2026. Sus valores medidos son la fuente del aspecto.
- Reglas: la skill de código abierto UI/UX Pro Max (MIT, v2.15.0, commit `e8b065f`, clonada en `/workspace/tools/ui-ux-pro-max-skill/`). Aporta las reglas de UX y accesibilidad y su Pre-Delivery Checklist (apartado 9).
- Estructura: Material 3 (dos niveles de tokens, roles de tipo, capas de estado, breakpoints).

Marcas de origen, en este documento y en `tokens.json`:

- M: medido en vercel.com con Playwright y Chromium headless, a partir de estilos computados, el 23-11-2026. Viewports 1440×900, 834×1112 y 390×844. Datos en bruto: `_measure/vercel-1440.json`, `vercel-834.json`, `vercel-390.json` y `states.json`. Capturas: `_measure/vercel-*.png`.
- D: derivado. Es una decisión de NoMadLab o viene de la estructura de Material 3. No se midió en Vercel.
- T: medido sobre Inter Tight en este equipo (colisión de tinta píxel a píxel, interlineado y densidad). Datos: `_measure/type/`.
- APROBADO: decidido por Juan el 23-11-2026.
- S: regla de UI/UX Pro Max, citada con su id (por ejemplo `touch-target-size`).

Archivos:

- `tokens.json`: tokens en formato W3C Design Tokens (DTCG), con primitivos y semánticos.
- `tokens.css`: generado desde los tokens con `python3 tools/build_tokens.py`. No se edita a mano.
- `sistema-v1.png`: muestra v1 (Geist y acento azul). Superada; no se borra.
- `base.css`: la capa de reglas verificadas (foco, área táctil, cursor, scroll-padding, reduced-motion, medida de línea y botones). No lleva contenido.
- `specimen/responsive-check.html` y `tools/check.py`: la página de prueba con texto de muestra y el script que pasa el checklist en 375, 390, 768, 834, 1024 y 1440. El resultado está en `_skill/checklist-results.json`.
- `_skill/`: la salida literal de la skill (`design-system.txt`, `typography.txt`, `ux.txt`, `landing.txt` y las búsquedas concretas `ux-targeted.txt` y `landing-targeted.txt`).
- `fonts/`: Inter Tight y JetBrains Mono variables (woff2, latin y latin-ext, Fontsource 5.3.0), con sus licencias OFL. Geist queda en `fonts/_retirado-v1-geist/`, solo para reproducir la v1.
- `sistema-v1.1.png` y `sistema-v1.1-2.png`: la muestra v1.1, en dos imágenes para el móvil (`specimen/sistema-v1.1-a.html` y `-b.html`, con `python3 tools/render_v11.py`). `sistema-v1.png` se conserva como estaba.

---

## 1. Principio

NoMadLab tiene que leerse como una empresa de tecnología y desarrollo. No es una agencia creativa, ni una página de producto al estilo Apple, ni una interfaz de película de hackers.

### Lo que se toma de Vercel

- Contención: una sola familia tipográfica, escala de grises y ningún color de acento.
- Composición asimétrica. El claim va seco, a la izquierda, sin entradilla larga. El texto de apoyo se coloca en otra columna, no debajo y centrado.
- El hero pone una sola pieza visual junto a un titular seco, sin foto de producto ni banco de imágenes. En NoMadLab esa pieza es un fotograma real de un caso destacado (APROBADO por Juan 2026-11-23, apartado 5).
- Líneas de 1px muy suaves como estructura: separadores, filas y rejilla. La estructura sustituye a las tarjetas.
- Titulares con el tracking cerrado y sin negrita. Con Inter Tight, el tracking se ajusta midiendo (apartado 3) y el peso es 500, como en el site 3D.
- Estados discretos: un cambio de gris en 150 ms. Ni siquiera el foco usa color.

### Lo que no se toma

- Ni el layout de Vercel, ni su logo, ni el triángulo, ni su degradado de fondo, ni la franja de logos de clientes copiada tal cual.
- Ni el azul de Vercel (#0072f5): sobre #fafafa da 4,26:1 y no pasa AA como texto. NoMadLab no lleva ningún acento.
- Ni Geist, que es la fuente de Vercel. Se usa la del site 3D de NoMadLab.
- Ni los botones en pastilla del hero (radio 9999). Son su firma. NoMadLab usa el radio de 6px, que es el más frecuente en su propio sitio.
- Ni las capturas de interfaz de producto como hero. NoMadLab no vende un dashboard. Lo que va en el bloque Sistema de la home es una decisión de contenido y queda fuera de este documento.

---

## 2. Color

El tema es claro. Medido: el body de Vercel es `#fafafa` sobre `#171717`. No hay tema oscuro en la v1.

### Primitivos

| Token | Hex | Origen |
| --- | --- | --- |
| neutral-0 | #ffffff | M. `--ds-background-100`, fondo del botón secundario |
| neutral-50 | #fafafa | M. Fondo del body, `--ds-background-200` |
| neutral-100 | #f2f2f2 | M. `--ds-gray-100`, hover del botón secundario |
| neutral-200 | #ebebeb | M. `--ds-gray-200`, anillo de 1px del botón secundario |
| neutral-300 | #e6e6e6 | M. `--ds-gray-300` |
| neutral-500 | #c9c9c9 | M. `--ds-gray-500` |
| neutral-600 | #a8a8a8 | M. `--ds-gray-600` |
| neutral-700 | #8f8f8f | M. `--ds-gray-700` |
| neutral-800 | #7d7d7d | M. `--ds-gray-800` |
| neutral-900 | #4d4d4d | M. Texto secundario y navegación |
| neutral-950 | #383838 | M. Hover del botón primario |
| neutral-1000 | #171717 | M. Texto y fondo del botón primario |
| alpha-black-8 | #00000014 | M. Todos los bordes de 1px medidos (14 apariciones) |
| alpha-black-10 | #0000001a | M. `--header-border-bottom` |

En Vercel, `--ds-gray-400` mide lo mismo que `--ds-gray-200` (92 %). No se incluye para no duplicar valores.

### Semánticos y contraste (WCAG 2.2)

| Rol | Valor | Contraste |
| --- | --- | --- |
| bg.page | neutral-50 | (fondo) |
| bg.surface | neutral-0 | (fondo) |
| bg.inverse | neutral-1000 | D. Solo bandas de media de un caso a sangre |
| text.primary | neutral-1000 | 17,18:1 sobre page. AAA |
| text.secondary | neutral-900 | 8,10:1 sobre page. AAA |
| text.disabled | neutral-700 | 3,10:1. Solo para controles deshabilitados, que WCAG exime |
| text.inverse | neutral-50 | 17,18:1 sobre inverse |
| text.link | neutral-1000 | APROBADO. 17,18:1. Se distingue por el subrayado |
| text.link-visited | neutral-900 | APROBADO. 8,10:1 |
| underline.link | neutral-800 | APROBADO. Subrayado de 1px, 3,94:1 sobre page (no-texto ≥3:1) |
| underline.link-hover | neutral-1000 | APROBADO. Subrayado de 2px en hover |
| border.default | alpha-black-8 | Decorativo. No transmite información |
| border.control | neutral-200 | Anillo del botón secundario |
| focus.ring | neutral-1000 | APROBADO. Anillo doble: 2px del fondo y 2px de #171717 (17,18:1 sobre page) |
| focus.ring-inverse | neutral-50 | APROBADO. Sobre bg.inverse: 2px #171717 y 2px #fafafa (17,18:1) |

Regla: ningún texto de lectura usa neutral-800 o un valor más claro. Neutral-800 da 3,94:1 y no pasa AA.

### Sin acento (APROBADO por Juan 2026-11-23)

El sistema no tiene color de acento. El token `#1f4fd8` de la v1 se ha borrado de `tokens.json`, `tokens.css`, `base.css` y las muestras.

- Foco: anillo doble, con 2px del color del fondo y 2px de #171717 (`0 0 0 2px fondo, 0 0 0 4px #171717`). Es la estructura medida en Vercel, pero en neutro. Contraste no-texto: 17,18:1 sobre #fafafa y 17,93:1 sobre #ffffff. Sobre el botón primario negro, el hueco de 2px de #fafafa separa el anillo (17,18:1), así que se ve. Sobre fondo inverso se invierte: hueco #171717 y anillo #fafafa. En `forced-colors` se añade un `outline` del sistema.
- Enlace en línea: texto #171717 con subrayado de 1px en #7d7d7d (3,94:1, por encima del 3:1 que se pide a lo que no es texto) y `text-underline-offset` de 3px. El subrayado es la señal, no el color (WCAG 1.4.1).
- Hover: el subrayado pasa a #171717 y a 2px. No mueve el layout (comprobado).
- Visitado: el texto pasa a #4d4d4d (8,10:1) y el subrayado no cambia. El navegador solo permite cambiar colores en `:visited`.
- Foco del enlace: el mismo anillo doble.

---

## 3. Tipografía

### Familias: Inter Tight + JetBrains Mono, APROBADO por Juan 2026-11-23 (la del site 3D actual)

- Fuente: el site 3D actual (`/workspace/nomadlab-site`, commit 30cfee0, `index.html`, solo lectura). Carga Inter Tight 300/400/500/600 y JetBrains Mono 400/500 desde Google Fonts. Su mono lleva `font-feature-settings: "zero" 0, "tnum" 1`, y su h1 de caso, 500 / −0,055em / 0,95.
- Inter Tight, en todo el texto: titulares, cuerpo, navegación y botones. Es variable (100 a 900). Los roles usan 400 y 500. 300 y 600 quedan disponibles, como en el site, pero sin rol.
- JetBrains Mono, solo en el rol mono, con `tnum` (cifras de ancho fijo) y sin cero tachado.
- Licencias: las dos son SIL Open Font License 1.1 (Inter Tight © 2022 The Inter Project Authors; JetBrains Mono © 2020 The JetBrains Mono Project Authors). Se autoalojan en `fonts/` (woff2 variable, latin y latin-ext, de Fontsource 5.3.0), con `LICENSE-InterTight-OFL.txt` y `LICENSE-JetBrainsMono-OFL.txt`. Se permite el uso comercial y el autoalojamiento; no se puede vender la fuente sola.
- Carga: `font-display: swap` y `unicode-range` separado por latin y latin-ext, para que solo se descargue lo necesario.

### Cómo se ha ajustado la escala a Inter Tight (T)

Los tamaños y los roles se mantienen (M: Vercel). El tracking, el peso y el interlineado se han medido otra vez sobre Inter Tight, con canvas en Chromium (`_measure/type/measure_type.py`, `collide.py` y `collide2.py`; datos en `raw.json`, `collide.json` y `collide-common.json`):

- Peso: se mide la tinta por superficie frente a la referencia de Vercel. A 16px, Inter Tight 400 tiene 1,03 veces la tinta del cuerpo de Vercel, así que el cuerpo es 400. En titulares y etiquetas se usa 500, como en el site 3D (h1, nav y strong del lede a 500). A 64px, 500 tiene 1,25 veces la tinta del display de Vercel: el display queda algo más firme, que es el carácter del site 3D.
- Tracking: se renderiza cada glyph por separado en su posición, con kerning, y se cuentan los píxeles de tinta que se solapan entre letras vecinas. Se prueban 29 palabras comunes en castellano (con tildes y ñ) y valores de −0,07 a 0em en pasos de 0,005. Se elige el valor más cerrado a partir del cual todo lo más abierto queda sin colisiones.
- El −0,055em del site 3D colisiona a 64px: 14 píxeles solapados ya a −0,05em, en palabras como «proyecto», «ritmo» o «efecto». No se toma tal cual.
- Interlineado: a 0,95 (el del site), las tildes minúsculas tocan los descendentes de la línea de arriba (4px a 64px, 7px a 48px). A 1,0 no hay contacto (1px de aire). Con mayúsculas acentuadas bajo descendentes hay solapes hasta 1,17, igual que en Geist a 1,0 en Vercel. De ahí la regla: el display va en sentence case, nunca en mayúsculas.

### Escala (roles de Material, tamaños de Vercel, ajuste T)

| Rol | 1440 | 834 | 390 | Peso | Tracking | Origen |
| --- | --- | --- | --- | --- | --- | --- |
| display | 64/64 | 48/56 | 48/56 | 500 | −0,04em (64) / −0,02em (48) | Tamaño M. Peso del site 3D. Tracking T: el más cerrado sin colisión |
| headline | 56/56 | 48/56 | 32/40 | 500 | −0,025em / −0,02em / −0,015em | Tamaño M. Tracking T |
| title | 24/32 | 24/32 | 24/32 | 500 | −0,01em | Tamaño M. Peso del h3 de caso del site 3D. Tracking T |
| body | 16/24 | = | = | 400 | 0 | M. Sin colisiones a 0. Medida de línea re-verificada |
| body-strong | 16/24 | = | = | 500 | 0 | T: a 500, 0 es el único valor sin colisión |
| label-md | 16/24 | = | = | 500 | 0 | M. Botón de 40 o 44px |
| label-sm | 14/20 | = | = | 500 | 0 | M. Nav del site 3D: 14px/500 |
| label-sm-regular | 14/20 | = | = | 400 | 0 | M. Navegación y enlaces del footer |
| mono-sm | 12/20 | = | = | 500 | 0, `tnum` | JetBrains Mono |

Corrección a REFS.md: la navegación de Vercel mide 14px/400 en #4d4d4d (hover #171717), no 16px.

Los cortes de 834 y 390 son D (Material). En `tokens.css` el cambio va a ≤1023px y a ≤599px.

### Regla de la mono (estricta)

- Solo en `mono-sm` (12/20), en text.secondary.
- Solo para tres cosas: el año de un caso, el índice de una sección o un fragmento de código real (un comando, un nombre de archivo).
- Como máximo, un tipo de etiqueta mono por bloque, y nunca más de una línea seguida.
- Nunca en titulares, botones, navegación, cifras de resultados ni párrafos.
- Nunca en mayúsculas con guiones bajos, barras dobles, corchetes o prefijos de sistema (`SYS_`, `SEC_02 //`, `STAT_`, `RUN:`, `FEED:`, `LIVE`, `TARGET_DETECTED`). Eso es el disfraz de terminal que Juan rechazó el 23-11-2026.

### Texto de muestra

- El sistema no depende del copy. En las muestras, las pruebas y la PNG, todo el texto es neutro y lleva la etiqueta «de muestra»: «Display de muestra», «Nombre del caso», «Cliente · Agencia», «0000».
- No se usa como muestra ningún texto pendiente ni ningún dato de un caso real.
- Para quien escriba encima del sistema: títulos de sección en castellano, en sentence case, y la mono solo según la regla de arriba.

---

## 4. Rejilla y espaciado

### Rejilla

| | 1440 | 834 | 390 | Origen |
| --- | --- | --- | --- | --- |
| Columnas | 12 | 8 | 4 | D (Material) |
| Margen lateral | 24 | 24 | 24 | M. Padding de página en los tres viewports |
| Gutter | 24 | 24 | 24 | M. `--geist-space-gap` |
| Ancho máximo | 1448 | — | — | M. max-width del contenedor (1400 de contenido más 2×24) |
| Columna | 94 | fluida | fluida | D. (1392 − 11×24) / 12 |
| Header | 64, sticky | 64 | 64 | M. `--header-height` |

Comprobación: con 12 columnas de 94px y gutter de 24, la columna 5 empieza en x=496 y las columnas 5 a 12 miden 920px. En Vercel, un H2 medido empieza en x=495 y mide 921px. Otro bloque medido de 685px equivale a 6 columnas (684). La rejilla derivada encaja con lo medido.

La asimetría es la regla. El titular display ocupa las columnas 1 a 4. El objeto o media va en las columnas 5 a 8, y el apoyo en las columnas 9 a 12 (D). Medido en Vercel: el H1 en x=24 con max-width 444px, unas 4 columnas, y el apoyo en x≈1052. Ningún bloque principal va centrado con dos botones debajo. El layout del hero queda definido en el apartado 5 (variantes A y B).

### Espaciado

Escala: 4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Todo es M (`--geist-space-*`) salvo el 48, que es D: viene de la escala de Material y Vercel no lo usa (usa 36 y 40).

Uso:

- 4 y 8: dentro de un componente.
- 16 y 24: entre elementos de un bloque.
- 32 y 48: entre bloques.
- 64, 96 y 128: entre secciones. 128 solo en 1440.

### Forma

- Radio: 6px en los controles (M: `--geist-radius`, el más frecuente). 0 en media y filas de caso (D).
- Bordes: siempre de 1px (M: todos los bordes medidos son de 1px), en border.default.
- Sombras: ninguna en superficies. Vercel usa el anillo de 1px como borde (`--ds-shadow-border-base: 0 0 0 1px #00000014`), y se toma eso, no sus sombras de elevación.

---

## 5. Componentes y estados

Capas de estado (estructura de Material): reposo, hover, foco, pulsado y deshabilitado. Valores:

### Botón

| | Primario | Secundario |
| --- | --- | --- |
| Reposo | Fondo #171717, texto #ffffff | Fondo #ffffff, texto #171717, anillo de 1px #ebebeb |
| Hover | Fondo #383838 (M) | Fondo #f2f2f2 (M) |
| Foco (teclado) | Anillo doble neutro: 2px del fondo y 2px de #171717 (APROBADO) | Igual, más su anillo de 1px |
| Pulsado | Fondo #4d4d4d (D) | Fondo #ebebeb (D) |
| Deshabilitado | Opacidad 0,38 (D: Material) y cursor no permitido | Igual |

- Tamaños (APROBADO por Juan 2026-11-23): md de 40px de alto con ratón, y 44px en ≤1023px y en `pointer: coarse` (S: `touch-target-size`). label-md de 16/500 y padding horizontal de 12px (M: CTA del hero). sm de 32px, label-sm de 14/500 y padding horizontal de 6px (M: header). Radio de 6px.
- Transición: 150ms `cubic-bezier(0.4, 0, 0.2, 1)` (M), sobre background-color, color y box-shadow.
- Como máximo, un primario por vista. En el hero no va la pareja primario y secundario centrada.
- Área táctil: 44×44 como mínimo en táctil (S: `touch-target-size`). El botón sm sigue midiendo 32px a la vista, pero un pseudo-elemento le da un área de 44px sin mover el layout. Separación mínima de 8px entre dianas (S: `touch-spacing`). En puntero fino, 40px supera los 24×24 de WCAG 2.5.8 (S: `web-target-size`).
- `cursor: pointer` en todo lo clicable (S: `cursor-pointer`). El deshabilitado lleva el atributo semántico, `cursor: not-allowed` y no responde (S: `disabled-states`).

### Enlace

- En línea (APROBADO, sin acento): texto #171717, subrayado de 1px en #7d7d7d y `text-underline-offset` de 3px. Hover: subrayado #171717 de 2px. Visitado: texto #4d4d4d. Foco: el anillo doble neutro. Detalle en el apartado 2.
- De navegación o footer: label-sm-regular en text.secondary (#4d4d4d). En hover, text.primary (#171717) (M). Sin subrayado. La página actual va en text.primary con una línea de 1px debajo.

### Navegación

- Header sticky de 64px, fondo transparente sobre bg.page (M). Al hacer scroll, la línea inferior de 1px pasa a alpha-black-10 (M: `--header-border-bottom`). Sin blur ni vidrio.
- A la izquierda, el wordmark de NoMadLab (PENDIENTE: el archivo de marca). Después, de 3 a 5 enlaces. A la derecha, un solo botón sm.
- En 390, el menú es de pantalla completa sobre bg.page, con los enlaces en title (24/32).

### Fila de caso

Sustituye a la rejilla de tarjetas.

- Es una fila a todo el ancho entre líneas de 1px. Columnas en 1440: el año (mono-sm con `tabular-nums`, S: `number-tabular`) en la 1; el nombre del caso (title) y debajo el cliente y la agencia (body, secundario) en las columnas 2 a 7; el premio o la prensa verificada (body, secundario) en las 8 a 9; la media del caso en las 10 a 12, con radio 0.
- Hover: solo cambia el fondo a #f2f2f2, sin escalar ni mover nada (S: `Stable Interaction States`). Comprobado: no hay salto de layout. La media es una imagen fija. Si hay vídeo, se reproduce al hacer clic, con pausa, nunca en autoplay y nunca con reduced-motion (S: `Auto-Play Video`). Lo importante nunca depende del hover (S: `hover-vs-tap`). Foco: focus-ring en toda la fila. Toda la fila es un único enlace.
- La media reserva su hueco con `aspect-ratio` para que no haya CLS (S: `image-dimension`) y lleva un texto alternativo descriptivo (S: `alt-text`).
- En 390 se apila así: la media a todo el ancho, el año y el nombre, y después los créditos.
- Contenido: el componente define campos, no textos. Cada campo se rellena solo con datos verificados de la ficha, y el que no se puede rellenar se oculta. Nunca se rellena con cifras, stack, latencias ni IDs.

### Hero: media real de un caso destacado (APROBADO por Juan 2026-11-23; layout, Hero C APROBADO por Juan 23-11-2026)

Una sola pieza visual: media real de un caso destacado (fotograma o vídeo). No es un objeto geométrico, ni un render, ni una composición.

El 23-11-2026 Juan sustituyó, solo en el hero, la rejilla v1.1 (texto en columnas 1 a 4 y media en 6 a 12) y la regla de no pintar texto sobre la pieza. Esa rejilla y esa regla siguen vigentes en el resto de la página (filas de caso, huecos de media, etc.). Ese mismo día se mostraron las variantes A y B, y después la C (híbrido: wordmark grande sobre vídeo a sangre). Juan eligió C. Más tarde, el mismo 23-11-2026, pidió subir el wordmark («me gusta más arriba»): queda bajo el header, no anclado abajo.

Fuente de la media, en A, B y C:

- Un fotograma o un vídeo del caso, de 1920px de ancho como mínimo. Sin cartelas, sin logos ni textos quemados, sin barras negras y sin escalarlo por encima de su resolución.
- Recorte: `object-fit: cover`, con un punto focal (`object-position`) definido para cada pieza. El recorte tiene que conservar la instalación o el soporte y a la persona interactuando. Nunca se deforma ni se encaja con bandas.
- Tratamiento de la pieza: radio 0, color natural, sin filtros. El claim y el H1 no se queman en el archivo.
- Mientras no haya ruta ni derechos, no se usa media real (ni archivos provisionales). Se muestra un hueco gris. El hueco no se publica.
- Alt o `aria-label`: obligatorio, porque la media tiene significado. Describe lo que se ve: el formato o soporte, la acción de la persona y el lugar, si se reconoce. Entre 80 y 140 caracteres, en ES y en EN. Sin «imagen de», sin claims, sin cifras, sin valoraciones y sin datos que no estén en la ficha del caso.
- Pie de caso: solo datos verificados de la ficha.

#### Hero C APROBADO por Juan 23-11-2026

Juan eligió esta variante el 23-11-2026, frente a A y B. El mismo día pidió subir el wordmark («me gusta más arriba»).

Vídeo a sangre, 100vw, alto 100svh (el primer viewport). El header de 64px va invertido encima (texto y controles en #fafafa, fondo transparente). No hay un hueco claro entre el header y la pieza.

Sobre el vídeo, un velo oscuro uniforme que cubre toda la pieza, no un velo inferior concentrado en la zona del texto. Es un relleno sólido, `rgba(0, 0, 0, 0.4)` en las muestras, sin color y sin degradado. Solo se usa en este hero. El contraste del texto, el pie y el header sobre el velo o sobre el hueco tiene que ser ≥4,5:1. Sobre el hueco #2a2a2a, el velo deja un fondo efectivo de ~#191919: #fafafa queda muy por encima de 4,5:1; #c9c9c9 también. Distinto del negro de la variante B.

El wordmark tipográfico «NoMadLab» es el logo, no el H1. El 23-11-2026, a petición de Juan («me gusta más arriba»), pasó de anclarse abajo a colocarse arriba, justo bajo el header, dentro de los márgenes de 24px (no a sangre con el borde del viewport). Ocupa las 12 columnas. Inter Tight 500. Cuerpo y tracking medidos para que las letras no se toquen: en 1440, 304px y −0,04em (1377px sobre 1392 de contenido, sin colisión de tinta). En anchos menores el cuerpo se escala al ancho de la rejilla: `calc((100vw - 48px) * 304 / 1392)`; a −0,04em, «NoMadLab» sigue sin colisión. Interlineado ceñido a la tinta (~0,77), para recortar el hueco de descendentes de la caja (las letras de «NoMadLab» no tienen). Color #fafafa. Entre el header y el wordmark, 16px de la escala de espaciado.

Debajo del wordmark, a la izquierda de la rejilla, con 24px de la escala entre el logo y el claim: el claim «Make new things possible.» (no es el H1; tamaño de título, no de display), el H1, que es texto HTML real y visible: «Tecnología creativa para marcas. De la idea al lanzamiento.», y un solo CTA, «Ver el trabajo». El hero mide 100svh. El vídeo a sangre, con el velo uniforme, sigue cubriendo todo el viewport; la zona visible del vídeo es la parte baja, debajo del bloque de tipo. El claim, el H1 y el logo nunca van quemados en el vídeo, el poster, un canvas ni una imagen del titular (prohibición 16).

Cuando exista un archivo, el markup de la media es este (el claim, el H1 y el logo siguen fuera del `<video>`):

```html
<video muted playsinline poster="{fotograma estático del caso}">
  <source src="{ruta}" type="video/mp4">
</video>
```

- `muted` y `playsinline` son obligatorios. El `poster` es el fotograma estático de reserva, con las reglas de fuente y recorte de este apartado. Es lo que se ve si el vídeo no carga, no se reproduce, o el usuario pide reduced-motion.
- El autoplay sigue sujeto a una decisión expresa de Juan. Si se aprueba el loop, va sin sonido, con botón de pausa, parado fuera de pantalla y como poster con reduced-motion (S: `Auto-Play Video`).
- Hasta que haya ruta y derechos: hueco gris oscuro (#2a2a2a) con la etiqueta «Vídeo real del caso · pendiente de derechos», en label-sm. Sin media real.

#### Variante A: texto superpuesto, mostrada el 23-11-2026, no elegida

Vídeo a sangre, 100vw, alto del primer viewport. El header de 64px va invertido encima (texto y controles en #fafafa, fondo transparente). No hay un hueco claro entre el header y la pieza.

El claim y el H1 son texto HTML real, superpuestos visualmente al vídeo, alineados a la izquierda y abajo, dentro de los márgenes de 24px. Nunca van quemados en el vídeo, el poster, un canvas ni una imagen del titular. Es la misma regla que la prohibición 16 (H1 en imagen). Un solo CTA. No es un hero centrado con dos botones.

Cuando exista un archivo, el markup de la media es este (el claim y el H1 siguen fuera del `<video>`):

```html
<video muted playsinline poster="{fotograma estático del caso}">
  <source src="{ruta}" type="video/mp4">
</video>
```

- `muted` y `playsinline` son obligatorios. El `poster` es el fotograma estático de reserva, con las reglas de fuente y recorte de este apartado. Es lo que se ve si el vídeo no carga, no se reproduce, o el usuario pide reduced-motion.
- El autoplay sigue sujeto a una decisión expresa de Juan. Si se aprueba el loop, va sin sonido, con botón de pausa, parado fuera de pantalla y como poster con reduced-motion (S: `Auto-Play Video`).
- Hasta que haya ruta y derechos: hueco gris oscuro (#2a2a2a) con la etiqueta «Vídeo real del caso · pendiente de derechos», en label-sm. Sin media real.
- Para el contraste del texto #fafafa sobre la pieza, solo en esta variante, se admite un velo inferior de negro, sin color, concentrado en la zona del texto. Es una excepción a la prohibición de degradados del apartado 10, y no se usa en el resto del site. El contraste del texto, el pie y el header sobre el velo o sobre el hueco tiene que ser ≥4,5:1.

#### Variante B: hero negro con wordmark, mostrada el 23-11-2026, no elegida

Primer viewport negro (#000000). El header va invertido, sin hueco debajo.

El wordmark «NoMadLab» ocupa las 12 columnas, en Inter Tight 500. Cuerpo y tracking medidos para que las letras no se toquen: en 1440, 304px y −0,04em (1377px sobre 1392 de contenido, sin colisión de tinta). En anchos menores el cuerpo se escala al ancho de la rejilla; a −0,04em, «NoMadLab» sigue sin colisión. Interlineado 1,0.

Debajo, en la rejilla, el claim, el descriptor y un solo CTA, en tamaño de cuerpo o de título, no de display. A continuación continúa la página clara del sistema.

### Cabecera de sección

- El índice opcional en mono-sm (`01`), en la columna 1. El título en headline, en las columnas 2 a 8. La entradilla opcional en body, en las columnas 9 a 12, alineada a la base del título.
- Encima, una línea de 1px y 64 o 96 de aire. Sin «eyebrow» en mayúsculas ni etiquetas de sistema.

### Footer

- Padding de 40 y 24 (M). Columnas de enlaces con título en label-sm (14/500, #171717) y enlaces en label-sm-regular (14/400, #4d4d4d) (M).
- El contenido del footer no forma parte del sistema.

---

## 6. Movimiento

- Controles: 150ms, `cubic-bezier(0.4, 0, 0.2, 1)` (M).
- Entradas de bloque: 250ms (D), solo opacidad y un desplazamiento de 8px como máximo, una vez por bloque. Sin parallax ni tipografía animada letra a letra.
- WebGL: el hero ya no lo usa (lleva un fotograma real). Si una sección lo necesitara más adelante, haría falta una decisión de Juan.
- Como máximo, 1 o 2 elementos animados por vista (S: `Excessive Motion`). Solo se animan `transform` y `opacity` (S: `transform-performance`). No hay animaciones continuas decorativas (S: `Continuous Animation`).
- Con `prefers-reduced-motion: reduce`, todas las duraciones pasan a 0 y se quita el scroll suave (S: `reduced-motion`). Comprobado: la transición del botón da 0s. El scroll suave solo se activa con `no-preference`.

---

## 7. Accesibilidad

- WCAG 2.2 AA como mínimo. Los contrastes están en el apartado 2.
- Foco visible siempre, con focus-ring. Nunca `outline: none` sin sustituto.
- Hay un enlace «Saltar al contenido» (M: Vercel lo tiene).
- Jerarquía: un único h1 por página, con texto real, no en una imagen ni en canvas.
- El header sticky no tapa el foco: `scroll-padding-top` de 80px (S: `Focus Not Obscured`).
- El orden de tabulación sigue el orden visual (S: `keyboard-nav`).
- El color nunca es el único indicador. El enlace en línea lleva además subrayado (S: checklist).
- Viewport meta `width=device-width, initial-scale=1`, `dvh` en lugar de `100vh`, y `overflow-wrap: anywhere` en los textos largos (S: `viewport-meta`, `Viewport Units` y `Long Token Wrapping`).
- Las fuentes se cargan con `font-display: swap` y un fallback con métricas ajustadas, para que no haya CLS (S: `font-loading`). Vercel hace lo mismo con su fallback ajustado (M). Las métricas del fallback de Inter Tight se calculan cuando se monte la primera pantalla.

---

## 8. Imagen y media

- Solo media real de los casos: fotogramas, fotos o loops de las instalaciones y MUPIs funcionando, sacados del material del caso. Los derechos de cada pieza se comprueban en la ficha; si están PENDIENTES, la pieza no se publica.
- Ninguna cara generada ni persona sintética presentada como parte de un caso.
- No hay fotos de stock, renders 3D genéricos ni mockups de dispositivos inventados.
- Tratamiento: color natural, sin duotono, sin filtros de «escaneo» ni retículas encima. Radio 0. Sin texto quemado inventado.
- El hero no lleva objeto geométrico ni WebGL decorativo: lleva un fotograma real de un caso destacado (APROBADO por Juan 2026-11-23). La especificación, incluido el markup de `<video>` de la variante A, está en el apartado 5, «Hero».

---

## 9. Reglas verificadas

Esta es la capa de reglas. Sale de la skill UI/UX Pro Max (S), no de reglas propias. Se ejecutó así, el 23-11-2026 hacia las 21:50 (Europe/Madrid):

```
python3 /workspace/tools/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/scripts/search.py \
  "developer tools creative technology studio minimal monochrome" --design-system -p NoMadLab
# y la misma consulta con --domain typography, --domain ux y --domain landing
```

Las búsquedas `ux` y `landing` con esa consulta devolvieron 0 resultados. La propia herramienta pide reintentar con términos más concretos, así que se hicieron búsquedas por resultado: «accessibility contrast focus keyboard», «touch target mobile tap», «animation reduced motion duration», «hover layout shift transform», «responsive breakpoints viewport horizontal scroll» y «typography line height line length readable» (en ux), y «minimal direct», «portfolio case study showcase» y «minimal conversion» (en landing). La salida literal está en `_skill/`.

### Pre-Delivery Checklist aplicado

Comprobado con `tools/check.py` sobre `specimen/responsive-check.html` (solo texto de muestra), a 375, 390, 768, 834, 1024 y 1440, con táctil emulado hasta 834. La última vez que se pasó fue la v1.1, el 23-11-2026 hacia las 22:03 (Europe/Madrid), con Inter Tight y JetBrains Mono cargadas y sin acento. Resultado: `_skill/checklist-results.json`.

| Regla de la skill | Cómo se aplica | Resultado |
| --- | --- | --- |
| `color-contrast`: 4,5:1 en texto normal | Tokens del apartado 2 | Pasa (v1.1). El mínimo medido es 7,55:1 (la etiqueta del hueco del hero), en las seis anchuras y sin ningún fallo |
| Contraste no-texto (3:1) | Anillo de foco y subrayado del enlace | Pasa (v1.1). Anillo 17,18:1 sobre #fafafa y 17,93:1 sobre #ffffff; anillo inverso 17,18:1; subrayado 3,94:1 |
| `touch-target-size`: 44×44 | `control.height-touch` 44px, `control.hit-min` 44px | Pasa. El botón md mide 44 en 375 a 834 y 40 en 1024 y 1440 (puntero fino). El área del botón sm es de 44 en todas |
| `focus-states` y `focus-appearance` (≥2px, 3:1) | `--nml-focus-ring`: 2px del fondo y 2px de #171717 | Pasa (v1.1). Visible con el teclado en las seis anchuras, en el enlace y sobre fondo inverso (anillo #fafafa) |
| `reduced-motion` | Duraciones a 0 y sin scroll suave | Pasa. La transición da 0s y el `scroll-behavior` es auto |
| Hover sin salto de layout | Solo cambia el color o el grosor del subrayado | Pasa. Sin cambios de posición ni de tamaño en botones, fila de caso y enlace (1024 y 1440) |
| Responsive en 375, 768, 1024 y 1440 (más 390 y 834) | Rejilla de 12, 8 y 4 columnas, margen de 24 | Pasa. Sin scroll horizontal en ninguna |
| `readable-font-size`: 16px de cuerpo en móvil | `type.body.md` de 16px | Pasa |
| `line-height`: entre 1,5 y 1,75 | 16/24 = 1,5 (M) | Pasa |
| `line-length`: 65 a 75 caracteres en escritorio, 35 a 60 en móvil | `layout.measure` de 520px | Pasa (v1.1). Entre 68 y 74 caracteres desde 768, y entre 40 y 49 en 375 y 390. Inter Tight es más estrecha: con 544px daba entre 72 y 77, así que se corrigió a 520px |
| Hero, proporción y columnas | `hero.*` | Pasa (v1.1). 16:9 exacto (1,778) en 768, 834, 1024 y 1440, y 1:1 en 375 y 390, con las columnas de la tabla del apartado 5. Sin CLS, gracias a `aspect-ratio` |
| `cursor-pointer` | `base.css` | Pasa |
| `Focus Not Obscured` | `scroll-padding-top` de 80px | Aplicado: mide 80px |
| `z-index-management` | Escala `z`: 0, 10, 20, 40, 100 | Aplicado |
| `disabled-states`: opacidad de 0,38 a 0,5, cursor y atributo | 0,38, `not-allowed`, `disabled` o `aria-disabled` | Aplicado |
| `duration-timing`: tokens compartidos | 150ms medido y 250ms derivado | Aplicado |

Lo que no se ha podido comprobar todavía, porque no hay pantallas: el texto alternativo de la media real, el orden de tabulación de una página completa y las etiquetas de formulario. Quedan para el checklist de cada pantalla.

### Lo que la skill propuso y se descarta

| Propuesta de la skill | Por qué se descarta |
| --- | --- |
| Patrón «Scroll-Triggered Storytelling» y estilo «Motion-Driven», con parallax de 3 a 5 capas, hover de 300 a 400ms y transiciones de página | Va en contra de la contención medida en Vercel (150ms, sin parallax). Es el look de estudio creativo que Juan descartó. La propia skill lo marca como de riesgo de accesibilidad condicional |
| Paleta oscura: fondo #000000, primario #18181B, secundario #27272A, texto apagado #94A3B8 y acento #F8FAFC | Es la paleta genérica zinc/slate de Tailwind y shadcn. Es oscura, cuando Vercel es claro (#fafafa / #171717 medidos). Además, el #94A3B8 es azulado, cuando el sistema es neutro puro. Una base oscura acerca al disfraz de terminal rechazado |
| Tipografía Archivo con Space Grotesk («Minimalist Portfolio») | Su mood es de portfolio y diseñador creativo. Space Grotesk es una de las fuentes más vistas en plantillas. La fuente aprobada es Inter Tight, la del site 3D |
| JetBrains Mono con IBM Plex Sans («Developer Mono», mood «hacker») | Se descarta el emparejamiento y la mono en titulares. JetBrains Mono sí se usa (APROBADO, la del site 3D), pero solo en el rol mono de 12px |
| Space Mono para todo («Brutalist Raw») | Todo en mono es exactamente lo que Juan rechazó |
| Landing «Minimal Single Column» con un CTA grande centrado | El hero centrado está prohibido. Sí se toma su idea de un solo CTA y mucho aire |
| «Portfolio Grid» en masonry con hover de tarjeta | Son tarjetas. Los casos van en filas. Sí se toma: fondo neutro para que se luzca el trabajo y carga rápida |
| «Trust & Authority», con sellos, stats y carrusel de logos | Sin stats ni sellos que no estén verificados. Se toma su regla: una cifra solo si está verificada y fechada |
| «Funnel», con pasos en rojo, naranja y verde | Son tres acentos, y el sistema no tiene ninguno |
| «Hero + Testimonials» con carrusel | No hay testimonios verificados. El carrusel automático tampoco encaja |
| Pre-Delivery: «usa los colores del tema directamente (bg-primary), no envueltos en var()» | Es una regla de Tailwind. Este site es HTML y CSS, y los tokens son custom properties |
| «Smooth Scroll» siempre | Solo con `prefers-reduced-motion: no-preference` |

No se incorporó ningún degradado, ningún efecto de vidrio ni ninguna paleta nueva. La skill no propuso degradados. Su checklist menciona «Glass/transparent elements visible in light mode», pero no aplica, porque el vidrio está prohibido.

---

## 10. Prohibido

1. La estética de HUD, terminal o interfaz de ciencia ficción: retículas, esquinas de mira, escaneos, cursores parpadeantes, pantallas de telemetría.
2. Las etiquetas de sistema falsas: `SYS_ID`, `TARGET_DETECTED`, `SEC_02 //`, `STAT_EXEC_01`, `FEED: LIVE`, `RUN: EVAL_STABLE`, o cualquier ID o referencia inventada (por ejemplo `#TBS-SPN-2026`).
3. Las cifras, specs o métricas inventadas o de relleno: FPS, latencias, «neural style transfer», stacks no confirmados, contadores. Una cifra solo aparece si tiene fuente en la ficha y se indica si es propia o de un tercero.
4. La mono como decoración. Su uso está limitado en el apartado 3.
5. Los degradados de cualquier tipo, incluidos los de fondo y los de texto.
6. El glassmorphism, el blur de fondo y las superficies translúcidas.
7. Las rejillas de tres tarjetas redondeadas, y las tarjetas con sombra en general.
8. Inter (no Tight) o fuentes de sistema por defecto.
9. Los emojis, los iconos decorativos y los iconos de stock. Iconos funcionales (flecha, menú, cerrar) solo de un único set SVG con el mismo grosor de trazo (S: `no-emoji-icons`, `Stroke Consistency`).
10. El hero centrado con titular y dos botones.
11. Los blobs y el 3D genérico.
12. Las sombras suaves en todo.
13. Las caras generadas y las capturas de caso inventadas.
14. Cualquier color de acento, incluidos el azul y el naranja (APROBADO por Juan 2026-11-23: sin acento).
15. Copiar el layout, el logo, el triángulo, la fuente Geist o los botones en pastilla de Vercel.
16. Las tácticas SEO penalizables: texto oculto, keyword stuffing, H1 en imagen.
17. Un objeto geométrico o un render en el hero, en lugar del fotograma real.

---

## 11. Autocrítica contra la lista de prohibidos (23-11-2026)

- HUD y terminal: los tokens no tienen ningún color neón. El fondo oscuro del hero (C, y las variantes A y B que se mostraron) es una decisión de Juan para ese bloque, no un tema oscuro del sistema ni un look de terminal. La mono es de 12px y tiene una regla escrita. Las tres fuentes mono que propuso la skill quedan descartadas.
- Cifras inventadas y dependencia del contenido: la muestra no lleva ningún dato real ni copy pendiente. Solo usa nombres de campo de muestra («Nombre del caso», «Cliente · Agencia», «0000»). El hueco de media está marcado como muestra.
- Degradados, vidrio y sombras: no hay ningún token de sombra ni de blur. El único «borde» es la línea de 1px. En el Hero C APROBADO, el contraste se resuelve con un velo oscuro uniforme y sólido (`rgba(0, 0, 0, 0.4)`), no con un degradado. Solo se usa en ese hero (apartado 5). El velo inferior de la variante A quedó como opción no elegida.
- Tres tarjetas: no hay un componente de tarjeta. Los casos van en filas.
- Inter por defecto: la fuente es Inter Tight, la del site 3D (APROBADO). Se distingue de Inter por su espaciado de diseño más cerrado y por el tracking medido. El riesgo de que se vea como Inter genérica se controla con el peso 500 y el tracking negativo en display.
- Clon de Vercel: el gris y la rejilla se han medido allí. Lo que lo separa: otra fuente (Inter Tight, la de NoMadLab), sin acento (Vercel usa azul en foco y enlaces), otro radio en los CTA (6 frente a 9999), sin triángulo y con un fotograma real de un caso en el hero.
- Referencia Unanim.studio: del sitio se tomó solo el principio (wordmark grande, tipo claro sobre media a sangre). No se copia el wordmark en minúsculas, la foto de siluetas, la ausencia de header ni el sangrado a los bordes del viewport: el logo va en Inter Tight, con la capitalización de NoMadLab, dentro de los márgenes de 24px, con header, H1 visible, claim y un solo CTA. El 23-11-2026 Juan pidió el wordmark arriba, bajo el header, no anclado abajo, lo que aleja todavía más el hero de esa referencia.
- Acento: no queda ni un uso de color en `tokens.css`, `base.css` ni en las muestras v1.1. Lo comprueba `tools/check.py` (`accent_removed: true`).
- Emojis: no hay ninguno.

---

## 12. Decisiones

Cerradas, APROBADO por Juan 2026-11-23:

1. Acento: ninguno. Foco y enlaces neutros.
2. Fuente: Inter Tight + JetBrains Mono, la del site 3D actual (sustituye a Geist, que también se había confirmado antes ese mismo día).
3. Hero: media real de un caso destacado, sin objeto geométrico. Layout del hero, Hero C APROBADO por Juan 23-11-2026; wordmark arriba, a petición de Juan 23-11-2026: vídeo a sangre, 100svh, velo oscuro uniforme sobre toda la pieza, wordmark «NoMadLab» (logo, no H1) justo bajo el header, H1 visible «Tecnología creativa para marcas. De la idea al lanzamiento.»
4. Botón: 40px con ratón y 44px en táctil o a ≤1023px.

Abiertas en el sistema: ninguna. Lo que queda por confirmar no es del sistema: qué caso y qué media van en el hero C, la ruta del vídeo y sus derechos de uso. El autoplay, si llega, sigue pidiendo una decisión expresa de Juan. Hasta entonces, solo huecos grises; no se usa media real.

Fuera del sistema, porque son de contenido (los decide Studio con Juan): el copy de cada bloque. El H1 de portada quedó cerrado el 23-11-2026 (Studio + Juan): «Tecnología creativa para marcas. De la idea al lanzamiento.» El wordmark grande del hero es el logo, no el H1.
