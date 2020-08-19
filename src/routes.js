const express = require("express");
const routes = express.Router();
const recipes = require("./data");

routes.get("/", (req, res) => {
  return res.render("home", { items: recipes });
});

routes.get("/sobre", (req, res) => {
  return res.render("sobre");
});

routes.get("/recipes", (req, res) => {
  return res.render("recipes", { items: recipes });
});

routes.get("/recipes/:index", (req, res) => {
  const recipeData = [...recipes];
  const recipeIndex = req.params.index;
  const recipe = recipeData[recipeIndex];

  return res.render("recipe", { items: recipe });
});

module.exports = routes;
