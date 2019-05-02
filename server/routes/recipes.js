const express = require('express');
const router = express.Router();

const RecipeController = require('../controllers/recipeController');

router.get("/api/", RecipeController.recipes_get_all);

module.exports = router;