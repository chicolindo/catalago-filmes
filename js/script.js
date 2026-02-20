const moviesGrid = document.getElementById("moviesGrid");
const searchInput = document.getElementById("searchInput");

/* =========================
   CATÁLOGO OFFLINE
========================= */
const catalog = [
  { title: "Batman: O Cavaleiro das Trevas", image: "assets/images/batman-dark-night.jpeg", type: "movie" },
  { title: "Better Call Saul", image: "assets/images/better-call-soul.jpeg", type: "series" },
  { title: "Clube da Luta", image: "assets/images/fight-club.jpeg", type: "movie" },
  { title: "Fogo Contra Fogo (Heat)", image: "assets/images/heat.jpeg", type: "movie" },
  { title: "Interestelar", image: "assets/images/interestellar.jpeg", type: "movie" },
  { title: "Matrix", image: "assets/images/matrix.jpeg", type: "movie" },
  { title: "Os Estagiários", image: "assets/images/os-estagiarios.jpeg", type: "movie" },
  { title: "O Resgate do Soldado Ryan", image: "assets/images/soldado-ryan.jpeg", type: "movie" }
];

/* =========================
   MODAL
========================= */
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.querySelector(".modal-close");

/* =========================
   RENDERIZA OS CARDS
========================= */
function renderCatalog(items) {
  moviesGrid.innerHTML = "";

  items.forEach(movie => {
    const card = document.createElement("article");
    card.className = "movie-card";

    card.innerHTML = `
      <div class="movie-media">
        <img src="${movie.image}" class="movie-image" alt="${movie.title}">
      </div>
      <h3 class="movie-title">${movie.title}</h3>
    `;

    // ABRIR MODAL
    card.addEventListener("click", () => {
      modalImage.src = movie.image;
      modalTitle.textContent = movie.title;
      modal.classList.add("show");
    });

    moviesGrid.appendChild(card);
  });
}

/* =========================
   FECHAR MODAL
========================= */
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

/* =========================
   BUSCA
========================= */
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = catalog.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );

  renderCatalog(filtered);
});

/* =========================
   LOADER
========================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1100);
  }
});

/* =========================
   INIT
========================= */
renderCatalog(catalog);