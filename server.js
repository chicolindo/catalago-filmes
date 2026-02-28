const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

// permite receber JSON (POST, PUT)
app.use(express.json());
app.use(
  session({
    secret: "admin-secret-key",
    resave: false,
    saveUninitialized: false
  })
);

// FRONT-END
app.use(express.static(path.join(__dirname, "public")));

// API
app.use("/api/catalog", require("./backend/routes/catalog.routes"));
app.use("/api/auth", require("./backend/routes/auth.routes"));

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});