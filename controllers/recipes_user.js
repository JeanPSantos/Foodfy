const data = require('../data.json');

// index
exports.index = function (req, res) {
	return res.render('recipes/user/index', { recipes: data.recipes });
};

// mostrar página sobre
exports.about =  function (req, res) {
	return res.render('recipes/user/about', { about: data.about });
};

// mostrar todas as receitas
exports.recipes = function (req, res) {
	return res.render('recipes/user/recipes', { recipes: data.recipes });
};

// mostrar a receita selecionada
exports.show = function (req, res) {
	const id = req.params.id; //este ID é o INDEX da receita
	const recipe = data.recipes[id];
	return res.render ('recipes/user/show', { recipe: recipe });
};