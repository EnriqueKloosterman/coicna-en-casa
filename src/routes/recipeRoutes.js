const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerRecipe');
const recipeController = require('../controllers/recipeController');


// router.get('/', recipeController.index);
router.get('/categories', recipeController.categories);
router.get('/categories/:id', recipeController.categoriesId);
router.get('/recipe/:id', recipeController.receta);
router.post('/search', recipeController.searchRecipes);
router.get('/exploreLatest', recipeController.exploreLatest);
router.get('/randomRecipe', recipeController.randomRecipe);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', upload.single("image"), recipeController.uploadRecipe);


module.exports = router;