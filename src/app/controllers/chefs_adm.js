const { date } = require('../../lib/utils');
const db = require('../../config/db');
const data = require('../../../data.json');
const fs = require('fs');
/*    Vai sair */

const Chef_adm = require('../models/Chef_adm');

module.exports = {
	// index
	index(req, res) {
		Chef_adm.all(function(chefs) {
			return res.render('chefs/admin/index', { chefs });
		});
	},

	// create
	create(req, res) {
		return res.render('chefs/admin/create');
	},

	// cadastro
	post(req, res) {
		const keys = Object.keys(req.body);
	
		for (key of keys) {
			if (req.body[key] == "") {
				return res.send('Preencha todos os campos!');
			}
		}

		Chef_adm.create(req.body, function(chef) {
			return res.redirect(`/admin/chefs`);
			//return res.redirect(`chefs/admin/${chef.id}`);
		});
	},





	
	// mostrar o chef selecionado
	show(req, res) {
		Chef_adm.find(req.params.id, function(chef) {
			if (!chef) return res.send('Chef não encontrado!');

			return res.render ('chefs/admin/show', { chef });
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