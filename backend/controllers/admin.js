const Recipe = require("../models/Recipe");
const mongoose = require("mongoose");

exports.getRecipeList = async (req, res) => {
  // getRecipeList() retrieves all ACTIVE recipes from the database
  try {
    const recipe = await Recipe.find({ active: true });
    res.status(200).json(recipe);
  } catch (err) {
    console.log(err);
  }
};

exports.getCategory = async (req, res) => {
  // getCategory gets all recipes of a certain category
  // TODO: ERROR HANDLING ON THIS PAGE NEEDS WORK
  try {
    const category = req.body.category;
    recipes = await Recipe.find({ category: category, active: true });
    if (recipes == null) {
      res.status(400).json({ error: "No recipes found." });
    } else {
      res.status(200).send(recipes);
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Invalid Request" });
  }
};

exports.getRecipe = async (req, res) => {
  // getRecipe() finds a specific recipe by the ID in the req.params or the URL Parameters
  // example: http://localhost:8080/5fadbc2ff8f1043c9ea0921e
  try {
    const recipeId = req.params.recipeId;
    recipe = await Recipe.findOne({ _id: recipeId, active: true });
    if (recipe == null) {
      // Trips if deactivated recipe is found
      res.status(400).json({ error: "Recipe Not Found" });
    } else {
      // Returns the recipe if valid ID and it is active
      res.status(200).send(recipe);
    }
  } catch (err) {
    // Trips if bad ID or invalid information was provided
    console.log(err);
    res.status(404).json({ error: "Invalid Request" });
  }
};

exports.postRecipe = async (req, res) => {
  // postRecipe() takes in a JSON, validates, and saves to the db
  const { name, ingredients, method, image, category } = req.body;

  try {
    const recipe = new Recipe({
      name: name,
      ingredients: ingredients,
      method: method,
      image: image,
      category: category,
    });
    const savedRecipe = await recipe.save();
    res.status(201).send(savedRecipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Validation failed" });
  }
};

exports.updateRecipe = async (req, res) => {
  // updateRecipe() takes in the id and updated JSON of the data
  // and updates the document
  const recipeId = req.body.recipeId;
  const { name, ingredients, method, image, category } = req.body;

  const updatedRecipe = {
    name: name,
    ingredients: ingredients,
    method: method,
    image: image,
    category: category,
  };

  try {
    const savedRecipe = await Recipe.findByIdAndUpdate(recipeId, updatedRecipe, {
      timestamps: true,
      new: true
    });
    res.status(201).send(savedRecipe);
  } catch (err) {
    // Fires if data isn't complete or parsing errors in the data
    console.log(err);
    res.status(500).json({ error: "Invalid Reqest" });
  }
};

exports.deactivateRecipe = async (req, res) => {
  // deactivateRecipe() takes in an Id in the req.body and deactivates. Data is still stored on the db
  try {
    const recipeId = req.body.recipeId;
    const recipe = await Recipe.findByIdAndUpdate(
      recipeId,
      { active: false },
      (recipe) => recipe
    );
    res.status(200).send("Recipe Deleted: " + recipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Invalid Request" });
  }
};
