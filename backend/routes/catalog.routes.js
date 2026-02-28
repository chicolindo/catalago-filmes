const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../data/catalog.json");

function readDB() {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
}

router.get("/", (req, res) => {
  const { type, search } = req.query;
  let catalog = readDB();

  if (type && type !== "all") {
    catalog = catalog.filter(item => item.type === type);
  }

  if (search) {
    catalog = catalog.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(catalog);
});

router.post("/", (req, res) => {
  const catalog = readDB();

  const newItem = {
    id: Date.now(),
    title: req.body.title,
    type: req.body.type,
    image: req.body.image,
    trailerId: req.body.trailerId,
    synopsis: req.body.synopsis
  };

  catalog.push(newItem);

  fs.writeFileSync(dbPath, JSON.stringify(catalog, null, 2));

  res.status(201).json(newItem);
});

module.exports = router;