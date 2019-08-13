const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
  name: {type: String, required: true},
  ingredients: {type: String}
})

module.exports = mongoose.model('Recipe', recipeSchema)
