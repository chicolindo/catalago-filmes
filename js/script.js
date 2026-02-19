const moviesGrid = document.getElementById("moviesGrid");
const searchInput = document.getElementById("searchInput");

const catalog = [
  { title: "Batman: O Cavaleiro das Trevas", image: "assets/images/batman-dark-night.jpeg" },
  { title: "Better Call Saul", image: "assets/images/better-call-soul.jpeg" },
  { title: "Clube da Luta", image: "assets/images/fight-club.jpeg" },
  { title: "Fogo Contra Fogo (Heat)", image: "assets/images/heat.jpeg" },
  { title: "Interestelar", image: "assets/images/interestellar.jpeg" },
  { title: "Matrix", image: "assets/images/matrix.jpeg" },
  { title: "Os Estagiários", image: "assets/images/os-estagiarios.jpeg" },
  { title: "O Resgate do Soldado Ryan", image: "assets/images/soldado-ryan.jpeg" }
];

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

    moviesGrid.appendChild(card);
  });
}

renderCatalog(catalog);

/* Busca */
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = catalog.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );
  renderCatalog(filtered);
});
