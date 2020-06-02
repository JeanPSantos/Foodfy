const fs = require('fs');
const data = require('../data.json');

// index
exports.index = function (req, res) {
	return res.render('recipes/admin/index', { recipes: data.recipes });
};

// create
exports.create = function (req, res) {
	return res.render('recipes/admin/create');
};

// cadastro
exports.post = function (req, res) {
	const keys = Object.keys(req.body);

	for (key of keys) {
		if (req.body[key] == "") {
			return res.send('Preencha todos os campos!');
		}
	}

	let ingredients = req.body.ingredients.filter(ingredient => ingredient != "");
	let preparation = req.body.preparation.filter(prep => prep != "");
	let { image_url, title, author, info_add } = req.body;

	data.recipes.push({
		image: image_url,
		title, 
		author,
		ingredients,
		preparation,
		information: info_add
	});
	
	fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
		if (err) {
			return res.send('Erro ao salvar os dados no arquivo!');
		}
		return res.redirect('/admin/recipes');
	});
};

// mostrar a receita selecionada
exports.show = function (req, res) {
	const { id } = req.params; //este ID é o INDEX da receita
	const recipe = data.recipes[id];

	if (!recipe) {
		return res.send('Receita não encontrada!');
	}

	return res.render ('recipes/admin/show', { recipe: recipe, id });
};

//edit
exports.edit = function (req, res) {
	const { id } = req.params; //este ID é o INDEX da receita
	const recipe = data.recipes[id];

	if (!recipe) {
		return res.send('Receita não encontrada!');
	}
	
	return res.render('recipes/admin/edit', { recipe: recipe, id });
};

exports.put = function (req, res) {
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
}

exports.delete = function (req, res) {
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
};