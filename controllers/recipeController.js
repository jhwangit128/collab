const express = require('express');
const recipes = express.Router();
const Recipe = require('../model/recipe.js');

// INDEX
recipes.get('/', (req, res) => {
  Recipe.find({}, (err, foundRecipes) => {
    res.json(foundRecipes);
  });
});

recipes.delete('/:id', (req, res) => {
  Recipe.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
    res.json(deletedRecipe);
  });
});

recipes.put('/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,
  updatedRecipe) => {
    res.json(updatedRecipe);
  });
});

recipes.post('/', (req, res) => {
  Recipe.create(req.body, (err, createdRecipe) => {
    res.json(createdRecipe);
  });
});

module.exports = recipes;
