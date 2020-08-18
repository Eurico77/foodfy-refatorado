const express = require("express");
const routes = express.Router();

routes.get("/inicio", (req, res) => {
  console.log("estou rodando");
});

routes.get("/receitas", (req, res) => {
  console.log("estou rodando");
});

routes.get("/sobre", (req, res) => {
  console.log("estou rodando");
});

routes.use(function (req, res) {
  res.status(404).render("not-found");
});

module.exports = routes;
