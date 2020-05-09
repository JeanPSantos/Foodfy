const express = require('express');
const routes = express.Router();
const recipes_adm = require('./controllers/recipes_adm');


const recipes = require('./data');


routes.get('/', function (req, res) {
	return res.render('index', { recipes: recipes });
});

routes.get('/about', function (req, res) {
	const data = {
		about: [
			'Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat,	aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.',
			'Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, eﬃcitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.'
		]
	};
	return res.render('about', { data: data });
});

routes.get('/recipes', function (req, res) {
	return res.render('recipes', { recipes: recipes });
});

routes.get('/recipe/:index', function (req, res) {
	const recipeIndex = req.params.index;
	const recipe = recipes[recipeIndex];
	return res.render ('recipe', { recipe: recipe });
});


  /* Rotas das páginas de administração */

routes.get('/admin/recipes', recipes_adm.index);
routes.get("/admin/recipes/create", recipes_adm.create); // Mostrar formulário de nova receita

//routes.get("/admin/recipes/:id", recipes_adm.show); // Exibir detalhes de uma receita
//routes.get("/admin/recipes/:id/edit", recipes_adm.edit); // Mostrar formulário de edição de receita
//routes.post("/admin/recipes", recipes_adm.post); // Cadastrar nova receita
//routes.put("/admin/recipes", recipes_adm.put); // Editar uma receita
//routes.delete("/admin/recipes", recipes_adm.delete); // Deletar uma receita

module.exports = routes;