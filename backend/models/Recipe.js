const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  active: {
      type: Boolean,
      default: true
  }
});

RecipeSchema.set('timestamps', true)

module.exports = mongoose.model('recipes', RecipeSchema)