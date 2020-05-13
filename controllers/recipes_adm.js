const fs = require('fs');
const data = require('../data.json');

// index
exports.index = function (req, res) {
	return res.render('recipes/admin/index', { recipes: data.recipes });
};

// recipe
exports.recipe = function (req, res) {
	const recipeIndex = req.params.index;
	const recipe = data.recipes[recipeIndex];
	return res.render ('recipes/admin/recipe', { recipe: recipe });
};

//edit
exports.edit = function (req, res) {
	return res.render('recipes/admin/edit');
};

// create
exports.create = function (req, res) {
	return res.send('ok');
};