const data = require('../data.json');

// index
exports.index = function (req, res) {
	return res.render('recipes/user/index', { recipes: data.recipes });
};

// about
exports.about =  function (req, res) {
	return res.render('recipes/user/about', { about: data.about });
};

// recipes
exports.recipes = function (req, res) {
	return res.render('recipes/user/recipes', { recipes: data.recipes });
};

// recipe
exports.recipe = function (req, res) {
	const recipeIndex = req.params.index;
	const recipe = data.recipes[recipeIndex];
	return res.render ('recipes/user/recipe', { recipe: recipe });
};