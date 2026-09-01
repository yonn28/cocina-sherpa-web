const app = document.getElementById("app");

const MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

function formatearFecha(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[m - 1]} de ${y}`;
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function buscarClase(id) {
  return CLASES.find((c) => c.id === id);
}

// ---------------------------------------------------------------- vistas

function vistaInicio() {
  const ordenadas = [...CLASES].sort((a, b) => b.numero - a.numero);

  const tarjetas = ordenadas.map((c) => `
    <a class="class-card" href="#/clase/${c.id}">
      <div class="class-card-cover">
        <img src="${c.portada}" alt="${escapeHtml(c.titulo)}" loading="lazy">
      </div>
      <div class="class-card-body">
        <span class="class-num">Clase ${c.numero}</span>
        <h3>${escapeHtml(c.titulo)}</h3>
        <span class="class-date">${formatearFecha(c.fecha)}</span>
        <p class="class-summary">${escapeHtml(c.resumen)}</p>
        <span class="class-card-cta">Ver clase →</span>
      </div>
    </a>
  `).join("");

  const grid = ordenadas.length
    ? `<div class="class-grid">${tarjetas}</div>`
    : `<div class="empty">Todavía no hay clases cargadas. Agrega la primera en <code>js/data.js</code>.</div>`;

  app.innerHTML = `
    <section class="hero">
      <p class="hero-eyebrow">Recetario personal</p>
      <h1>Bitácora de clases de cocina</h1>
      <p>Apuntes, materiales y pasos de cada clase, con fotos del mise en place y de los cortes. Se va llenando después de cada sesión.</p>
    </section>
    ${grid}
  `;
}

const TABS = [
  { key: "conceptos", label: "Conceptos clave" },
  { key: "materiales", label: "Materiales" },
  { key: "pasos", label: "Paso a paso" },
  { key: "recetas", label: "Recetas" },
  { key: "galeria", label: "Galería" },
  { key: "videos", label: "Videos" },
  { key: "transcripcion", label: "Transcripción" },
];

function vistaClase(id) {
  const c = buscarClase(id);
  if (!c) {
    app.innerHTML = `<div class="empty">No encontré esa clase. <a href="#/">Volver al inicio</a>.</div>`;
    return;
  }

  const panelMateriales = `
    <ul class="materiales-list">
      ${c.materiales.map((m) => `<li>${escapeHtml(m)}</li>`).join("")}
    </ul>`;

  const panelConceptos = c.conceptos.map((cn) => `
    <div class="concepto-card">
      <h3>${escapeHtml(cn.titulo)}</h3>
      <p>${escapeHtml(cn.texto)}</p>
    </div>
  `).join("");

  const panelPasos = `
    <ol class="pasos-list">
      ${c.pasos.map((p) => `
        <li>
          <h3>${escapeHtml(p.titulo)}</h3>
          <p>${escapeHtml(p.detalle)}</p>
        </li>
      `).join("")}
    </ol>`;

  const panelRecetas = `
    <div class="recetas-grid">
      ${c.recetas.map((r) => `
        <div class="receta-card">
          <h3>${escapeHtml(r.nombre)}</h3>
          <p>${escapeHtml(r.notas)}</p>
        </div>
      `).join("")}
    </div>`;

  const panelGaleria = `
    <div class="galeria-grid">
      ${c.galeria.map((g, i) => `
        <button type="button" data-lightbox="${c.id}" data-index="${i}">
          <img src="${g.src}" alt="${escapeHtml(g.alt)}" loading="lazy">
        </button>
      `).join("")}
    </div>`;

  const panelVideos = `
    <div class="videos-grid">
      ${(c.videos || []).map((v) => `
        <figure class="video-card">
          <video controls preload="none" poster="${v.poster}" playsinline>
            <source src="${v.src}" type="video/mp4">
          </video>
          <figcaption>
            <h3>${escapeHtml(v.titulo)}</h3>
            <p>${escapeHtml(v.descripcion)}</p>
          </figcaption>
        </figure>
      `).join("")}
    </div>`;

  const parrafosTranscripcion = (c.transcripcion || "")
    .split(/\n\s*\n/)
    .map((p) => `<p>${escapeHtml(p.trim())}</p>`)
    .join("");

  const panelTranscripcion = `<div class="transcripcion-box">${parrafosTranscripcion || "<p>Sin transcripción cargada.</p>"}</div>`;

  const panelesPorTab = {
    conceptos: panelConceptos,
    materiales: panelMateriales,
    pasos: panelPasos,
    recetas: panelRecetas,
    galeria: panelGaleria,
    videos: panelVideos,
    transcripcion: panelTranscripcion,
  };

  app.innerHTML = `
    <a class="back-link" href="#/">← Todas las clases</a>
    <header class="detail-header">
      <img class="detail-cover" src="${c.portada}" alt="${escapeHtml(c.titulo)}">
      <span class="class-num">Clase ${c.numero} · ${formatearFecha(c.fecha)}</span>
      <h1>${escapeHtml(c.titulo)}</h1>
      <p class="detail-summary">${escapeHtml(c.resumen)}</p>
    </header>

    <nav class="tabs">
      ${TABS.map((t, i) => `<button class="tab-btn${i === 0 ? " active" : ""}" data-tab="${t.key}">${t.label}</button>`).join("")}
    </nav>

    ${TABS.map((t, i) => `<section class="tab-panel${i === 0 ? " active" : ""}" data-panel="${t.key}">${panelesPorTab[t.key]}</section>`).join("")}
  `;

  app.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      app.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      app.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      app.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add("active");
    });
  });

  app.querySelectorAll("[data-lightbox]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const clase = buscarClase(btn.dataset.lightbox);
      const item = clase.galeria[Number(btn.dataset.index)];
      abrirLightbox(item);
    });
  });
}

// ---------------------------------------------------------------- lightbox

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

function abrirLightbox(item) {
  lightboxImg.src = item.src;
  lightboxImg.alt = item.alt;
  lightboxCaption.textContent = item.alt;
  lightbox.hidden = false;
}

function cerrarLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
}

lightboxClose.addEventListener("click", cerrarLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) cerrarLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarLightbox(); });

// ---------------------------------------------------------------- router

function render() {
  const hash = location.hash || "#/";
  const claseMatch = hash.match(/^#\/clase\/(.+)$/);
  window.scrollTo(0, 0);
  if (claseMatch) {
    vistaClase(decodeURIComponent(claseMatch[1]));
  } else {
    vistaInicio();
  }
}

window.addEventListener("hashchange", render);
render();
