const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: {type: String, required: true },
  Yummy: Boolean,
  ingredients: String
})

const Cook = mongoose.model('food', recipeSchema)

module.exports = Cook
