/* =========================
   ELEMENTOS DO DOM
========================= */
const moviesGrid = document.getElementById("moviesGrid");
const searchInput = document.getElementById("searchInput");

/* =========================
   CATÁLOGO OFFLINE
========================= */
const catalog = [
  {
    title: "Batman: O Cavaleiro das Trevas",
    type: "movie",
    image: "assets/img/batman.jpg",
    video: "assets/videos/The_Dark_Knight_Official_1080P.mp4",
    synopsis: "Com Gotham ameaçada pelo Coringa, Batman enfrenta o maior desafio moral de sua jornada."
  },
  {
    title: "Better Call Saul",
    type: "series",
    image: "assets/img/better-call-saul.jpg",
    video: "assets/videos/better_call_saul_1080p.mp4",
    synopsis: "Antes de se tornar Saul Goodman, Jimmy McGill tenta sobreviver no mundo jurídico."
  },
  {
    title: "Clube da Luta",
    type: "movie",
    image: "assets/img/fight-club.jpg",
    video: "assets/videos/fight_club_4k.mp4",
    synopsis: "Um homem entediado cria um clube secreto que rapidamente foge do controle."
  },
  {
    title: "Fogo Contra Fogo",
    image: "assets/images/heat.jpeg",
    type: "movie"
  },
  {
    title: "Interestelar",
    image: "assets/images/interestellar.jpeg",
    type: "movie"
  },
  {
    title: "Matrix",
    image: "assets/images/matrix.jpeg",
    type: "movie"
  },
  {
    title: "Os Estagiários",
    image: "assets/images/os-estagiarios.jpeg",
    type: "movie"
  },
  {
    title: "O Resgate do Soldado Ryan",
    image: "assets/images/soldado-ryan.jpeg",
    type: "movie"
  },
  {
    title: "Taxi Driver",
    image: "assets/images/taxi-driver.png",
    type: "movie"
  },
  {
    title: "O Show de Truman",
    image: "assets/images/truman-show.png",
    type: "movie"
  },
  {
    title: "Peaky Blinders",
    image: "assets/images/peaky-blinders.png",
    type: "series"
  },
  {
    title: "Breaking Bad",
    image: "assets/images/breaking-bad.png",
    type: "series"
  },
  {
    title: "Lost",
    image: "assets/images/lost.png",
    type: "series"
  }
];

/* =========================
   MODAL
========================= */
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");

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
      </div>
      <h3 class="movie-title">${item.title}</h3>
    `;

    card.addEventListener("click", () => openModal(item));

    moviesGrid.appendChild(card);
  });
}

/* =========================
   ABRIR MODAL (IMAGEM OU VÍDEO)
========================= */
function openModal(item) {
  modalContent.innerHTML = `
    <button class="modal-close">&times;</button>

    <div class="modal-media">
      ${
        item.video
          ? `<video id="modalVideo" controls autoplay>
               <source src="${item.video}" type="video/mp4">
             </video>`
          : `<img src="${item.image}" alt="${item.title}">`
      }
    </div>

    <h3>${item.title}</h3>
    ${item.synopsis ? `<p class="modal-synopsis">${item.synopsis}</p>` : ""}
  `;

  modal.classList.add("show");

  document
    .querySelector(".modal-close")
    .addEventListener("click", closeModal);
}
/* =========================
   FECHAR MODAL
========================= */
function closeModal() {
  const video = document.getElementById("modalVideo");

  if (video) {
    video.pause();
    video.currentTime = 0;
    video.remove();
  }

  modal.classList.remove("show");

  setTimeout(() => {
    modalContent.innerHTML = "";
  }, 200);
}

/* =========================
   BUSCA
========================= */
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = catalog.filter(item =>
    item.title.toLowerCase().includes(value)
  );
  renderCatalog(filtered);
});

/* =========================
   LOADER (1100ms)
========================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hide"), 1100);
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
    renderCatalog(
      type === "all" ? catalog : catalog.filter(item => item.type === type)
    );
  });
});

/* =========================
   INIT
========================= */
renderCatalog(catalog);