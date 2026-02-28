const express = require("express");
const path = require("path");

const app = express();

// FRONT-END
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// BACK-END (API)
app.use("/api/catalog", require("./backend/routes/catalog.routes"));

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});