/* =========================
   ELEMENTOS DO DOM
========================= */
const moviesGrid = document.getElementById("moviesGrid");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");

/* =========================
   ESTADO
========================= */
let catalog = [];

async function loadCatalog(type = "all", search = "") {
  try {
    const response = await fetch(
      `/api/catalog?type=${type}&search=${search}`
    );
    catalog = await response.json();
    renderCatalog(catalog);
  } catch (error) {
    console.error("Erro ao carregar catálogo:", error);
  }
}

/* =========================
   RENDERIZA OS CARDS
========================= */
function renderCatalog(items) {
  moviesGrid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("article");
    card.className = "movie-card";

    card.innerHTML = `
      <div class="movie-media">
        <img src="${item.image}" class="movie-image" alt="${item.title}">
        <div class="movie-overlay">
          <div class="play-btn">▶</div>
        </div>
      </div>
      <h3 class="movie-title">${item.title}</h3>
    `;

    card.addEventListener("click", () => openModal(item));
    moviesGrid.appendChild(card);
  });
}

/* =========================
   MODAL
========================= */
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function openModal(item) {
  modalContent.innerHTML = `
    <button class="modal-close">&times;</button>

    <div class="modal-media">
      ${
        item.trailerId
          ? `<iframe
                src="https://www.youtube.com/embed/${item.trailerId}?autoplay=1&rel=0&modestbranding=1"
                allow="autoplay; encrypted-media"
                allowfullscreen>
             </iframe>`
          : `<img src="${item.image}" class="movie-image" alt="${item.title}">`
      }
    </div>

    <h3>${item.title}</h3>
    <p class="modal-synopsis">${item.synopsis || ""}</p>
  `;

  modal.classList.add("show");
  document.querySelector(".modal-close").addEventListener("click", closeModal);
}

function closeModal() {
  modal.classList.remove("show");
  setTimeout(() => {
    modalContent.innerHTML = "";
  }, 200);
}

/* =========================
   BUSCA
========================= */
searchInput.addEventListener("input", (e) => {
  loadCatalog("all", e.target.value);
});

/* =========================
   FILTROS
========================= */
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const type = btn.dataset.type;
    loadCatalog(type, searchInput.value);
  });
});

/* =========================
   LOADER
========================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hide"), 1100);
});

/* =========================
   INIT
========================= */
loadCatalog();