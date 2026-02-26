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
    image: "assets/images/batman-dark-night.jpeg",
    trailerId: "bdlQ8oxacY8",
    synopsis: "Batman tem conseguido manter a ordem em Gotham com a ajuda de Jim Gordon e Harvey Dent. No entanto, um jovem e anárquico criminoso, conhecido apenas como Coringa, pretende testar o Cavaleiro das Trevas e mergulhar a cidade em caos."
  },
  {
    title: "Better Call Saul",
    type: "series",
    image: "assets/images/better-call-saul.jpeg",
    trailerId: "Qz3u06eXf0E",
    synopsis: "Jimmy McGill, também conhecido como Saul Goodman, tenta ser um homem honesto e construir uma carreira de respeito. Mas há um lado seu que só quer aplicar golpes e se tornar um advogado picareta."
  },
  {
    title: "Clube da Luta",
    type: "movie",
    image: "assets/images/fight-club.jpeg",
    trailerId: "lJ5281THeKQ",
    synopsis: "Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler."
  },
  {
    title: "Fogo Contra Fogo",
    image: "assets/images/heat.jpeg",
    type: "movie",
    trailerId: "h7N1gsQY4Io&t=14s",
    synopsis: "Em Los Angeles, um detetive ilustre e um ladrão sofisticado se enfrentam e compreendem que precisam um do outro. A linha que separa criminosos e policiais nem sempre é bem definida."
  },
  {
    title: "Interestelar",
    image: "assets/images/interstellar.jpeg",
    trailerId: "mbbPSq63yuM",
    synopsis: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
    type: "movie"

  },
  {
    title: "Matrix",
    image: "assets/images/matrix.jpeg",
    trailerId: "2KnZac176Hs",
    synopsis: "O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.",
    type: "movie"
  },
  {
    title: "Os Estagiários",
    image: "assets/images/os-estagiarios.jpeg",
    trailerId: "iJNvxWemhI4",
    synopsis: "Quando são demitidos, dois homens na casa dos 40 começam a procurar por um novo trabalho. Apesar de não saberem nada de tecnologia, eles são contratados como estagiários no Google, local em que convivem com chefes vinte anos mais novos do que eles.",
    type: "movie"
  },
  {
    title: "O Resgate do Soldado Ryan",
    image: "assets/images/soldado-ryan.jpeg",
    trailerId: "dHJ_nLRjIA",
    synopsis: "Durante a Segunda Guerra Mundial, o capitão John Miller leva seus homens para trás das linhas inimigas para encontrar o soldado James Ryan, cujos três irmãos foram mortos em combate. Cercados pela brutal realidade da guerra, cada homem embarca em uma jornada pessoal e descobre sua própria força para triunfar sobre um futuro incerto com honra, decência e coragem.",
    type: "movie"
  },
  {
    title: "Taxi Driver",
    image: "assets/images/taxi-driver.png",
    trailerId: "zdqCqDSTVNI1",
    synopsis: "O motorista de táxi de Nova York Travis Bickle, veterano da Guerra do Vietnã, reflete constantemente sobre a corrupção da vida ao seu redor e sente-se cada vez mais perturbado com a própria solidão e alienação. Apesar de não conseguir fazer contato emocional com ninguém e viver uma vida questionável em busca de diversão, ele se torna obcecado em ajudar uma prostituta de 12 anos que entra em seu táxi para fugir de um cafetão.",
    type: "movie"
  },
  {
    title: "O Show de Truman",
    image: "assets/images/truman-show.png",
    trailerId: "XbMLg5ksRxI9",
    synopsis: "O produtor executivo Christof organiza um reality show baseado na vida de um homem comum, Truman Burbank. Mas Truman não sabe que todos os seus movimentos estão sendo captados por câmeras. Após conhecer Lauren, Truman decide mudar de vida.",
    type: "movie"
  },
  {
    title: "Peaky Blinders",
    image: "assets/images/peaky-blinders.png",
    trailerId: "akfXN4aDoc8AM6lX",
    synopsis: "Uma notória gangue da Inglaterra de 1919 ascende no submundo liderada pelo cruel Tommy Shelby, um criminoso disposto a subir na vida a qualquer preço.",
    type: "series"
  },
  {
    title: "Breaking Bad",
    image: "assets/images/breaking-bad.png",
    trailerId: "4We8QVy0LQXz1o1V",
    synopsis: "Walter White é um modesto professor de química do ensino médio. Quando descobre que tem câncer terminal, ele precisa encontrar uma maneira de garantir o bem-estar da família e toma uma decisão drástica: produzir e comercializar metanfetamina.",
    type: "series"
  },
  {
    title: "Lost",
    image: "assets/images/lost.png",
    trailerId: "X9q4N0G3Rrl_ubQI",
    synopsis: "Os sobreviventes de um voo que estava a milhas fora do curso caem em uma ilha que abriga um sistema de segurança monstruoso, uma série de abrigos subterrâneos e um grupo de adeptos da sobrevivência violentos escondidos nas sombras.",
    type: "series"
  }
];

/* =========================
   MODAL
========================= */
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
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
   ABRIR MODAL (IMAGEM OU VÍDEO)
========================= */
function openModal(item) {
  modalContent.innerHTML = `
    <button class="modal-close">&times;</button>

    <div class="modal-media">
      ${
        item.trailerId
          ? `<iframe
                width="100%"
                height="405"
                src="https://www.youtube.com/embed/${item.trailerId}?autoplay=1&rel=0&modestbranding=1"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen>
             </iframe>`
          : `<img src="${item.image}" class="movie-image" alt="${item.title}">`
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