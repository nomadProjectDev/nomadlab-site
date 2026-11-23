# Brief para Cursor: nuevo orden del recorrido y tramo de cámara

Archivo: ~/nomadlab-site/index.html

## 1. Nuevo orden de secciones
| # | Sección | Contenido |
|---|---|---|
| 0 | Hero | Móvil. "Tecnología creativa." |
| 1 | Muro LED | "Convertimos formatos no estándar en estándar." |
| 2 | Stand | "Medibles. Repetibles. Escalables." |
| 3 | Suelo / espacio | "Sin tocar nada. El espacio responde." (tramo de cámara, ver punto 2) |
| 4 | Casos | Los paneles del suelo se levantan y se convierten en las cards. |
| 5 | Sistema | "Hacemos sistemas, no una pieza suelta." El portátil solo, sobre blanco, con la gestión de la campaña legible. |
| 6 | Medición | Versión corta de kiosk-dashboard-mvp: pantallas en línea, impresiones, sesiones, conversiones y una franja de funnel. Reemplaza al portátil; no aparecen los dos a la vez. |
| 7 | Versión siguiente | Vuelve el portátil y la campaña pasa de V03 a V04: lo que funcionó se queda. |
| 8 | Final | Ver punto 3. |

- Mover el pane "Sin tocar nada" (hoy `data-p="6"`) para que pase a ser `data-p="3"`, y renumerar los demás.
- Reordenar `TAGS` y `HOLDS`, y el timeline de GSAP, para que sigan este orden.
- Las cards de cristal en vivo solo aparecen en las secciones 0 a 3. Desde los casos en adelante no vuelven.

## 2. Tramo de cámara: "Sin tocar nada. El espacio responde."
Concepto: el visitante se convierte en la persona que pasa delante de una instalación. Su cuerpo controla la pantalla.

Flujo:
1. La pantalla se tumba y queda como suelo. Aparece el titular y, debajo, un único botón en cristal: "Activa tu cámara". No se pide permiso al cargar la página.
2. Si el visitante pulsa el botón, el navegador pide permiso para la cámara (`getUserMedia`, solo vídeo). Ver la sección de privacidad más abajo.
3. Con permiso:
   - Su imagen aparece dentro de la pantalla, en blanco y negro y muy procesada: una silueta, no un retrato.
   - Detrás va un shader psicodélico: líneas de desplazamiento, feedback, ondas tipo interferencia y aberración cromática. Negro y blanco con un tinte iridiscente sutil, nunca neón.
   - El tracking del cuerpo o de la mano se hace en el navegador con MediaPipe Tasks Vision (Hand Landmarker o Pose Landmarker), con el modelo cargado de forma diferida.
4. El visitante controla algo del site, en este orden de prioridad:
   - Con la mano en el aire, mueve el punto de origen de las ondas sobre la pantalla.
   - Con la apertura de la mano (o la distancia entre las manos), cambia la intensidad del efecto psicodélico.
   - Opcional: un gesto (abrir y cerrar la mano, o levantar la mano un segundo) pasa a la siguiente sección. Es el "sin tocar nada" literal.
5. Una sola card de cristal mide el tracking en vivo: "Te seguimos sin tocarte: 21 puntos, 30 fps", con los valores reales.
6. Sin permiso, o si la cámara falla: el cursor o el giroscopio hacen de "cuerpo" y mueven las ondas. El texto dice "También funciona con tu cursor."

Privacidad (la valida Growth):
- La imagen no se graba ni sale del navegador. Junto al botón va el texto validado por Growth: "Tu cámara solo se activa si la enciendes. Tu imagen se procesa en tu navegador: no se graba ni se envía.", con un enlace a la política de privacidad. Ningún fotograma, landmark ni dato derivado sale a un servidor. Solo se miden los eventos anónimos camera_on y completed.
- Un botón "Apagar cámara" siempre visible. Al salir de la sección se paran las pistas de vídeo (`track.stop()`).
- Sin permiso, el site funciona igual. El modelo de MediaPipe solo se descarga después de pulsar el botón, para no afectar al LCP.

Rendimiento: el vídeo entra como VideoTexture a 640x480 como máximo. El tracking se ejecuta en un worker o a 15-30 Hz, separado del render.

## 3. Final
- No vuelven las cards. La cámara se aleja del dashboard y se ve que estaba dentro de la misma pantalla de cristal.
- Esa pantalla crece hasta ocupar toda la ventana, con el texto "Esta pantalla también era un formato." y "La has usado mm:ss.".
- Si el visitante activó la cámara: "Y te ha visto moverte sin tocarla." (solo en ese caso).
- Después, en grande sobre blanco: "Hablas con quien lo construye." y el botón "Hablemos".
- El Lab es el tramo de cámara del suelo, no un acto aparte.

## 4. SEO
- El `<title>` es "NoMadLab | Tecnología creativa para marcas: juegos, DOOH, AR y medición". El H1 sigue siendo "Tecnología creativa.".
- En el portátil no se muestran precios ni se dice que haya acceso para clientes.
