const data = require('../../../data.json');
const Recipe_user = require('../models/Recipe_user');


module.exports = {

	index(req, res) {
		Recipe_user.all(function(recipes) {
			return res.render('recipes/user/index', { recipes });
		});
	},
	
	recipes(req, res) {
		Recipe_user.all(function(recipes) {
			return res.render('recipes/user/recipes', { recipes });
		});
	},
	
	show(req, res) {
		Recipe_user.find(req.params.id, function(recipe) {
			if(!recipe) return res.send('Receita não encontrada!');
			return res.render ('recipes/user/show', { recipe });
		});
	},
	
	// mostrar página sobre
	about(req, res) {
		return res.render('recipes/user/about', { about: data.about });
	}
};