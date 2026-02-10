const moviesGrid = document.getElementById("moviesGrid");

/* =========================
   CATÁLOGO OFFLINE
========================= */
const catalog = [
  {
    title: "Batman: O Cavaleiro das Trevas",
    type: "Filme",
    image: "assets/images/batman-dark-night.jpeg"
  },
  {
    title: "Better Call Saul",
    type: "Série",
    image: "assets/images/better-call-soul.jpeg"
  },
  {
    title: "Clube da Luta",
    type: "Filme",
    image: "assets/images/fight-club.jpeg"
  },
  {
    title: "Fogo Contra Fogo (Heat)",
    type: "Filme",
    image: "assets/images/heat.jpeg"
  },
  {
    title: "Interestelar",
    type: "Filme",
    image: "assets/images/interestellar.jpeg"
  },
  {
    title: "Matrix",
    type: "Filme",
    image: "assets/images/matrix.jpeg"
  },
  {
    title: "Os Estagiários",
    type: "Filme",
    image: "assets/images/os-estagiarios.jpeg"
  },
  {
    title: "O Resgate do Soldado Ryan",
    type: "Filme",
    image: "assets/images/soldado-ryan.jpeg"
  }
];

/* =========================
   RENDERIZA OS CARDS
========================= */
function renderCatalog(items) {
  moviesGrid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("movie-card");

    card.innerHTML = `
      <div class="movie-thumb">
        <img 
          class="movie-image" 
          src="${item.image}" 
          alt="${item.title}"
        >
      </div>
      <div class="movie-info">
        <h3 class="movie-title">${item.title}</h3>
      </div>
    `;

    moviesGrid.appendChild(card);
  });
}

/* INIT */
renderCatalog(catalog);
