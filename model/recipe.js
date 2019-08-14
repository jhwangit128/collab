const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
  name: {type: String, required: true},
  recipe: {type: String},
  ingredients: {type: String}
})

module.exports = mongoose.model('Recipe', recipeSchema)
