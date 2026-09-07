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
  video/clase-XX/          clips de video comprimidos + su poster (miniatura) .jpg
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

## Videos (agregado el 2026-08-31, después del primer despliegue)

Los WhatsApp Video originales de la clase son verticales (~478x850,
9:16), pesan entre 1.5 MB y 48 MB, y traen mucho ruido (varios eran solo
"suscríbete y dale like" de fondo de YouTube grabado sin querer — esos
se descartan). Los que sí muestran proceso real (cortes, sofrito,
emplatado, anécdotas) se recomprimen antes de subirlos al repo, si no el
repo pesa demasiado y el sitio carga lento:

```bash
ffmpeg -y -i "original.mp4" -vf "scale=360:-2" -c:v libx264 -crf 30 \
  -preset veryfast -c:a aac -b:a 96k -movflags +faststart "salida.mp4"

ffmpeg -y -ss 00:00:01 -i "original.mp4" -frames:v 1 -vf "scale=360:-2" \
  "salida-poster.jpg"
```

Eso bajó los 7 videos elegidos de la clase 1 de ~127 MB a ~30 MB en
total, manteniéndolos perfectamente viables para verse en el navegador.
Cada video en `js/data.js` (arreglo `videos` dentro de cada clase) lleva
`src`, `poster` (el jpg del segundo 1, para no cargar el video hasta que
el usuario le da play — por eso `<video preload="none">` en `app.js`),
`titulo` y `descripcion`.

## Cómo agregar una clase nueva

1. En `../clase1/` (o donde queden los nuevos audios/videos de la
   siguiente clase), correr `transcribir.py` para generar las
   transcripciones.
2. Crear `img/clase-02/` y copiar ahí las fotos que valga la pena
   mostrar (mise en place, cortes, pizarra/apuntes si hay).
2b. Crear `video/clase-02/`, recomprimir con ffmpeg los clips que
   muestren proceso real (ver sección "Videos" más arriba) y generar su
   poster. Descartar los videos que sean solo ruido de fondo.
3. Copiar el objeto de `clase-01` dentro de `CLASES` en `js/data.js`,
   cambiar `id` a `"clase-02"`, `numero` a `2`, y llenar todos los
   campos a partir de la transcripción nueva (materiales, conceptos,
   pasos, recetas, galería, videos, y el texto completo en
   `transcripcion`).
4. Opcional: copiar la transcripción cruda a
   `transcripciones/clase-02/completa.txt` como respaldo.
5. Guardar y recargar `index.html`. No hace falta tocar HTML ni CSS.

## Despliegue (Azure Static Web Apps + GitHub Actions, 2026-08-31)

- Repo: https://github.com/yonn28/cocina-sherpa-web (público, rama `main`).
- Azure: suscripción "Subscription 2" (`845d5d6a-4b6e-47ed-a3fc-8cba460c86fa`),
  resource group `rg-cocina-sherpa` (East US 2), Static Web App
  `cocina-sherpa-web` → `https://victorious-sky-01570270f.5.azurestaticapps.net`.
- Autenticación del pipeline: **service principal con OIDC** (sin client
  secret), app registration `cocina-sherpa-web-gh-actions`
  (appId `60512089-0f14-4ffe-8225-71e3514f7a9b`), con una federated
  credential (nombre `github-cocina-sherpa-web-main`) limitada al subject
  `repo:yonn28@9125679/cocina-sherpa-web@1353061704:ref:refs/heads/main`
  (ver el gotcha de IDs inmutables más abajo — el subject clásico
  `repo:yonn28/cocina-sherpa-web:...` NO funciona) y rol `Contributor`
  solo sobre el resource group `rg-cocina-sherpa` (no a nivel de
  suscripción).
- Secretos en GitHub (Settings → Secrets → Actions):
  `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_SUBSCRIPTION_ID`. No hay
  ningún secreto de larga duración ni el token de despliegue de la SWA
  guardado como secret — el workflow lo pide en caliente en cada corrida
  con `az staticwebapp secrets list` usando la sesión OIDC, y lo enmascara
  con `::add-mask::`.
- Workflow: `.github/workflows/azure-static-web-apps.yml`. Se dispara con
  cada push a `main` (o manualmente con "Run workflow"). Como el sitio no
  tiene build, usa `skip_app_build: true` y sube el contenido de la raíz
  del repo tal cual (`app_location: "/"`).
- Para agregar una clase nueva y que quede publicada: hacer los cambios en
  `js/data.js` + `img/clase-XX/` como se explicó arriba, luego
  `git add -A && git commit -m "..." && git push` — el pipeline se encarga
  del resto.
- Si algún día se borra o recrea el Static Web App, el nombre/resource
  group deben coincidir con los que usa el workflow, o hay que actualizar
  el YAML.
- **Gotcha real que se dio en este setup:** el subject del token OIDC que
  emite GitHub para este repo no es el clásico `repo:owner/repo:ref:...`,
  trae IDs inmutables pegados al owner y al repo
  (`repo:yonn28@9125679/cocina-sherpa-web@1353061704:ref:refs/heads/main`).
  Si se recrea la federated credential o se clona este setup en otro repo,
  hay que mirar el error `AADSTS700213` del primer run fallido para copiar
  el subject exacto que GitHub está mandando, no asumir el formato clásico.
- **Identidad de git para este repo:** los commits van firmados como
  `Yonny Nova <ycnovac@unal.edu.co>` (config local del repo, no la global
  de la máquina) — se cambió a propósito porque el repo es público y la
  identidad por defecto de esta máquina resuelve a un correo de trabajo
  (`...@nokia.com`), que no debía quedar en el historial público.
- **Herramientas locales:** en esta máquina se instalaron Azure CLI y
  GitHub CLI con `winget` (no estaban antes) y quedaron autenticados:
  `gh` como el usuario `yonn28`, `az` como `yonn28@hotmail.com` con la
  suscripción `Subscription 2` como default. Si una terminal nueva no
  encuentra `az`/`gh` en el PATH, usar las rutas completas
  (`C:\Program Files\Microsoft SDKs\Azure\CLI2\wbin\az.cmd` y
  `C:\Program Files\GitHub CLI\gh.exe`) — en este entorno el PATH de una
  sesión no siempre se refresca después de instalar algo nuevo.

## Clase 2 (2026-09-07): salsas madres

Los materiales llegaron en `../clase2/` con la misma forma que la clase 1
(audios y videos de WhatsApp), más el `transcribir.py` y el `api_key.txt`
ya copiados ahí. Contenido: dos salsas madres (pomodoro y bechamel),
cocción de pasta y los cortes (brunoise de cebolla, pimentón y zanahoria).
Los instructores son distintos a los de la clase 1: Sebastián y su
compañera.

**Gotcha importante para las próximas clases:** la transcripción NO se
puede correr desde la sesión de Claude. Ni el contenedor de Claude ni la
VM Linux del puente a este equipo pueden salir a `api.openai.com` — el
proxy de egreso responde 403 al CONNECT. `pypi.org` sí pasa, así que no
es que no haya red: es una lista de permitidos. El paso de transcribir
hay que lanzarlo desde PowerShell en Windows:

```powershell
cd "$env:USERPROFILE\Desktop\cocina-sherpa\claseN"; python transcribir.py
```

Tampoco sirve pedirle a Claude que maneje la terminal por control del
escritorio: los terminales solo se pueden granular en modo "click" (ver
pero no escribir), justamente para que un agente no ejecute comandos.

Otras dos cosas que se aprendieron armando esta clase:

- Los procesos en segundo plano (`nohup ... &`) NO sobreviven entre
  llamadas de `device_bash`: cada llamada es un sandbox nuevo. Hay que
  comprimir los videos por tandas dentro de una misma llamada (3-4 videos
  entran de sobra en el límite de ~45 s).
- Los pósters de los videos salen mucho mejor tomados a la mitad del clip
  que en el segundo 1, que es lo que decía la receta original: al segundo
  1 varios clips todavía muestran una tabla vacía o el piso. Se usó entre
  35% y 75% de la duración según el clip.
- Elegir qué video es cuál **por la imagen se presta a error**: tres de
  los siete clips de esta clase mostraban algo distinto de lo que el chef
  estaba explicando en el audio (el que parecía un fondo hirviendo era en
  realidad la explicación del punto al dente de la pasta). Hay que mirar
  la transcripción de cada video antes de titularlos.

## Decisiones de diseño a respetar

- Paleta cálida definida como variables CSS en `:root` de
  `style.css` (`--cream`, `--terracotta`, `--sage`, etc.) — no
  hardcodear colores nuevos, reusar esas variables.
- Tipografías: "Fraunces" (serif, títulos) + "Inter" (sans, cuerpo),
  cargadas desde Google Fonts en `index.html`.
- El sitio es de un solo usuario (bitácora personal), no hay
  autenticación, backend, ni necesidad de modo oscuro — se optó por un
  único tema claro cálido a propósito, para mantenerlo simple.
