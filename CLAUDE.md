# Cocina Sherpa — Recetario de clases

Sitio estático (sin build, sin servidor) que funciona como bitácora
personal de las clases de cocina del usuario: apuntes, materiales,
pasos, fotos y transcripción de cada clase. Se abre con doble clic en
`index.html`; no necesita internet salvo para las tipografías de
Google Fonts (si no hay internet, cae a las fuentes del sistema).

## Cómo se llegó a esto (contexto de la sesión del 2026-08-31)

1. El usuario tenía en `../clase1/` un montón de videos y audios de
   WhatsApp de su primera clase de cocina, más un script
   `transcribir.py` que ya existía (extrae audio con ffmpeg y lo manda
   a la API de Whisper de OpenAI). Le faltaba la clave de la API en el
   nombre que el script espera (`api_key.txt`) — estaba guardada como
   `tokenopenAI.txt`, así que se copió (no se movió) a `api_key.txt`.
2. Se corrió `transcribir.py` sobre los 14 archivos con audio real
   (se descartaron implícitamente las imágenes; hay dos videos que
   solo traían el audio de "suscríbete y dale like" de YouTube de
   fondo). Costo real: ~US$0.22. Las transcripciones quedaron en
   `../clase1/transcripciones/`.
3. Se revisaron las transcripciones y varias de las fotos de WhatsApp
   (mise en place, cortes, y una foto de la pizarra con el resumen de
   la clase escrito a mano) para entender el contenido real de la
   clase antes de estructurarla.
4. Se construyó este sitio a partir de eso. El contenido de
   `js/data.js` para la clase 1 (conceptos, materiales, pasos,
   recetas) es un resumen curado de la transcripción, no una copia
   literal — la transcripción completa/cruda sí queda disponible tal
   cual en la pestaña "Transcripción" de cada clase.
5. Se verificó visualmente con Playwright (headless Chromium) que la
   home, las pestañas, la galería y el lightbox funcionaran antes de
   darlo por terminado. Los archivos de esa prueba (`node_modules`,
   `package.json`, script de screenshots) se borraron después; no son
   parte del proyecto.

## Estructura

```
web/
  index.html              punto de entrada, SPA de una sola página
  css/style.css           todo el estilo (paleta cálida: crema, terracota, salvia)
  js/data.js              ÚNICA fuente de contenido — arreglo CLASES
  js/app.js               router (hash) + renderizado + lightbox
  img/clase-XX/            fotos de cada clase
  transcripciones/clase-XX/completa.txt   copia de respaldo de la transcripción cruda
```

- No hay build ni framework: HTML/CSS/JS planos.
- No se usa `fetch()` para leer nada (ni el `.txt` de transcripción, ni
  JSON externo): al abrir el archivo con doble clic el navegador usa
  el protocolo `file://`, que bloquea `fetch` por CORS. Por eso el
  texto completo de la transcripción vive **embebido como string** en
  `js/data.js` (campo `transcripcion`), y el `.txt` en
  `transcripciones/` es solo respaldo/referencia, no se lee en runtime.
- El ruteo es por hash (`#/` = inicio, `#/clase/clase-01` = detalle) y
  las pestañas dentro del detalle (Conceptos/Materiales/Pasos/
  Recetas/Galería/Transcripción) son estado de JS, no van en la URL.

## Cómo agregar una clase nueva

1. En `../clase1/` (o donde queden los nuevos audios/videos de la
   siguiente clase), correr `transcribir.py` para generar las
   transcripciones.
2. Crear `img/clase-02/` y copiar ahí las fotos que valga la pena
   mostrar (mise en place, cortes, pizarra/apuntes si hay).
3. Copiar el objeto de `clase-01` dentro de `CLASES` en `js/data.js`,
   cambiar `id` a `"clase-02"`, `numero` a `2`, y llenar todos los
   campos a partir de la transcripción nueva (materiales, conceptos,
   pasos, recetas, galería, y el texto completo en `transcripcion`).
4. Opcional: copiar la transcripción cruda a
   `transcripciones/clase-02/completa.txt` como respaldo.
5. Guardar y recargar `index.html`. No hace falta tocar HTML ni CSS.

## Decisiones de diseño a respetar

- Paleta cálida definida como variables CSS en `:root` de
  `style.css` (`--cream`, `--terracotta`, `--sage`, etc.) — no
  hardcodear colores nuevos, reusar esas variables.
- Tipografías: "Fraunces" (serif, títulos) + "Inter" (sans, cuerpo),
  cargadas desde Google Fonts en `index.html`.
- El sitio es de un solo usuario (bitácora personal), no hay
  autenticación, backend, ni necesidad de modo oscuro — se optó por un
  único tema claro cálido a propósito, para mantenerlo simple.
