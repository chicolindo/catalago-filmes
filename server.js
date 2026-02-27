const express = require("express");
const app = express();

app.use(express.static(__dirname));

const catalog = [
  {
    title: "Batman: O Cavaleiro das Trevas",
    type: "movie",
    image: "assets/images/batman-dark-night.jpeg",
    trailerId: "bdlQ8oxacY8",
    synopsis: "Batman tem conseguido manter a ordem em Gotham com a ajuda de Jim Gordon e Harvey Dent. No entanto, o Coringa surge para testar o Cavaleiro das Trevas e mergulhar a cidade no caos."
  },
  {
    title: "Better Call Saul",
    type: "series",
    image: "assets/images/better-call-saul.jpeg",
    trailerId: "Qz3u06eXf0E",
    synopsis: "Jimmy McGill, também conhecido como Saul Goodman, tenta seguir o caminho certo como advogado, mas sua natureza o empurra para golpes e escolhas duvidosas."
  },
  {
    title: "Clube da Luta",
    type: "movie",
    image: "assets/images/fight-club.jpeg",
    trailerId: "lJ5281THeKQ",
    synopsis: "Um homem deprimido conhece o carismático Tyler Durden e juntos criam um clube secreto onde homens extravasam suas frustrações através da violência."
  },
  {
    title: "Fogo Contra Fogo",
    type: "movie",
    image: "assets/images/heat.jpeg",
    trailerId: "h7N1gsQY4Io",
    synopsis: "Em Los Angeles, um detetive obstinado e um ladrão extremamente profissional se enfrentam em um jogo psicológico onde ambos se respeitam."
  },
  {
    title: "Interestelar",
    type: "movie",
    image: "assets/images/interstellar.jpeg",
    trailerId: "mbbPSq63yuM",
    synopsis: "Com a Terra se tornando inabitável, um grupo de astronautas parte em busca de novos planetas para garantir a sobrevivência da humanidade."
  },
  {
    title: "Matrix",
    type: "movie",
    image: "assets/images/matrix.jpeg",
    trailerId: "2KnZac176Hs",
    synopsis: "Thomas Anderson descobre que a realidade é uma simulação controlada por máquinas e se junta à resistência para libertar a humanidade."
  },
  {
    title: "Os Estagiários",
    type: "movie",
    image: "assets/images/os-estagiarios.jpeg",
    trailerId: "iJNvxWemhI4",
    synopsis: "Dois vendedores quarentões tentam se reinventar ao conseguir um estágio no Google, mesmo sem qualquer conhecimento em tecnologia."
  },
  {
    title: "O Resgate do Soldado Ryan",
    type: "movie",
    image: "assets/images/soldado-ryan.jpeg",
    trailerId: "dHJ_nLRjIA",
    synopsis: "Durante a Segunda Guerra Mundial, um capitão lidera uma missão perigosa para encontrar um soldado cujos irmãos morreram em combate."
  },
  {
    title: "Taxi Driver",
    type: "movie",
    image: "assets/images/taxi-driver.png",
    trailerId: "zdqCqDSTVNI",
    synopsis: "Travis Bickle, um veterano do Vietnã, trabalha como taxista e afunda cada vez mais em sua solidão e perturbação mental."
  },
  {
    title: "O Show de Truman",
    type: "movie",
    image: "assets/images/truman-show.png",
    trailerId: "XbMLg5ksRxI",
    synopsis: "Truman vive uma vida aparentemente perfeita, sem saber que tudo ao seu redor é um reality show transmitido para o mundo inteiro."
  },
  {
    title: "Peaky Blinders",
    type: "series",
    image: "assets/images/peaky-blinders.png",
    trailerId: "akfXN4aDoc8",
    synopsis: "Após a Primeira Guerra Mundial, a família Shelby constrói um império criminoso em Birmingham sob o comando de Tommy Shelby."
  },
  {
    title: "Breaking Bad",
    type: "series",
    image: "assets/images/breaking-bad.png",
    trailerId: "4We8QVy0LQ",
    synopsis: "Um professor de química descobre um câncer terminal e decide produzir metanfetamina para garantir o futuro financeiro da família."
  },
  {
    title: "Lost",
    type: "series",
    image: "assets/images/lost.png",
    trailerId: "X9q4N0G3Rrl",
    synopsis: "Os sobreviventes de um acidente aéreo ficam presos em uma ilha misteriosa cheia de segredos, perigos e fenômenos inexplicáveis."
  }
];

app.get("/api/catalog", (req, res) => {
  res.json(catalog);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});