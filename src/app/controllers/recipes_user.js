const data = require('../../../data.json');

module.exports = {
	// index
	index(req, res) {
		return res.render('recipes/user/index', { recipes: data.recipes });
	},
	
	// mostrar página sobre
	about(req, res) {
		return res.render('recipes/user/about', { about: data.about });
	},
	
	// mostrar todas as receitas
	recipes(req, res) {
		return res.render('recipes/user/recipes', { recipes: data.recipes });
	},
	
	// mostrar a receita selecionada
	show(req, res) {
		const id = req.params.id; //este ID é o INDEX da receita
		const recipe = data.recipes[id];
		return res.render ('recipes/user/show', { recipe: recipe });
	}

};