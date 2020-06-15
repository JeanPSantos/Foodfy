const fs = require('fs');
const data = require('../../../data.json');
const Recipe_adm = require('../models/Recipe_adm');
const { date } = require('../../lib/utils');

module.exports = {
	// index
	index(req, res) {
		Recipe_adm.all(function(recipes) {
			return res.render('recipes/admin/index', { recipes });
		});
	},

	// create
	create(req, res) {
		Recipe_adm.chefSelectOptions(function(options) {
			return res.render('recipes/admin/create', { chefOptions: options });
		});
	},

	// cadastro
	post(req, res) {
		const keys = Object.keys(req.body);
	
		for (key of keys) {
			if (req.body[key] == "") {
				return res.send('Preencha todos os campos!');
			}
		}

		Recipe_adm.create(req.body, function(recipe) {
			return res.redirect(`/admin/recipe/${recipe.id}`);
		});	
	},
	
	// mostrar a receita selecionada
	show(req, res) {
		Recipe_adm.find(req.params.id, function(recipe) {
			if(!recipe) return res.send('Receita não encontrada!');
			
			recipe.created_at = date(recipe.created_at).format;
			recipe.ingredients = recipe.ingredients.split(',');
			recipe.preparation = recipe.preparation.split(',');

			return res.render('recipes/admin/show', { recipe });
		});
	},
	
	//edit
	edit(req, res) {
		const { id } = req.params; //este ID é o INDEX da receita
		const recipe = data.recipes[id];
	
		if (!recipe) {
			return res.send('Receita não encontrada!');
		}
		
		return res.render('recipes/admin/edit', { recipe: recipe, id });
	},
	
	put(req, res) {
		const { id } = req.body;
		const dataRecipe = data.recipes[id];
		let ingredients = req.body.ingredients.filter(ingredient => ingredient != "");
		let preparation = req.body.preparation.filter(prep => prep != "");
		const recipe = {
			...dataRecipe,
			...req.body,
			ingredients,
			preparation
		};
	
		data.recipes[id] = recipe;
	
		fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
			if (err) {
				return res.send('Erro ao salvar os dados no arquivo!');
			}
			return res.redirect(`/admin/recipe/${id}`);
		});
	},
	
	delete(req, res) {
		const { id } = req.body;
		let index = -1;
		const filteredRecipes = data.recipes.filter(function(recipe) {
			index++;
			return index != id;
		});
	
		data.recipes = filteredRecipes;
	
		fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
			if (err) {
				return res.send('Erro ao salvar os dados no arquivo!');
			}
			return res.redirect('/admin/recipes');
		});
	}
};