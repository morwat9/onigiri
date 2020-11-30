const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/", adminController.getRecipeList);

router.post("/category", adminController.getCategory)

router.post("/add-recipe", adminController.postRecipe);

router.get("/:recipeId", adminController.getRecipe)

router.post("/update-recipe", adminController.updateRecipe)

router.post("/deactivate", adminController.deactivateRecipe)

module.exports = router;
