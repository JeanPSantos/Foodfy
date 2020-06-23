const Recipe_adm = require('../models/Recipe_adm');

module.exports = {

	index(req, res) {
		Recipe_adm.all(function(recipes) {
			return res.render('recipes/admin/index', { recipes });
		});
	},

	create(req, res) {
		Recipe_adm.chefSelectOptions(function(options) {
			return res.render('recipes/admin/create', { chefOptions: options });
		});
	},

	post(req, res) {
		const keys = Object.keys(req.body);
	
		for (key of keys) {
			if (req.body[key] == '') {
				return res.send('Preencha todos os campos!');
			}
		}

		Recipe_adm.create(req.body, function(recipe) {
			return res.redirect(`/admin/recipe/${recipe.id}`);
		});	
	},
	
	show(req, res) {
		Recipe_adm.find(req.params.id, function(recipe) {
			if(!recipe) return res.send('Receita não encontrada!');
			//recipe.created_at = date(recipe.created_at).format;
			return res.render('recipes/admin/show', { recipe });
		});
	},
	
	edit(req, res) {
		Recipe_adm.find(req.params.id, function(recipe) {
			if (!recipe) return res.send('Receita não encontrada!');

			Recipe_adm.chefSelectOptions(function(options) {
				return res.render('recipes/admin/edit', { recipe, chefOptions: options });
			});
		});
	},
	
	put(req, res) {
		const keys = Object.keys(req.body);

		for (key of keys) {
			if (req.body[key] == '') {
				return res.send('Falta preenchimento de algum campo.');
			}
		}

		Recipe_adm.update(req.body, function() {
			return res.redirect(`/admin/recipe/${req.body.id}`);
		});
	},
	
	delete(req, res) {
		Recipe_adm.delete(req.body.id, function() {
			return res.redirect('/admin/recipes');
		});
	}
};