const express = require('express');
const routes = express.Router();
const recipes_adm = require('./controllers/recipes_adm');
const recipes_user = require('./controllers/recipes_user');

routes.get('/', recipes_user.index);
routes.get('/about', recipes_user.about);
routes.get('/recipes', recipes_user.recipes);
routes.get('/recipe/:index', recipes_user.recipe);


  /* Rotas das páginas ADMIN */

routes.get('/admin/recipes', recipes_adm.index);
routes.get('/admin/recipe/:index', recipes_adm.recipe);
routes.get("/admin/recipes/edit", recipes_adm.edit); // Mostrar formulário de edição de receita
//routes.get("/admin/recipes/:id/edit", recipes_adm.edit); // Mostrar formulário de edição de receita



//routes.get("/admin/recipes/create", recipes_adm.create); // Mostrar formulário de nova receita
//routes.get("/admin/recipes/:id", recipes_adm.show); // Exibir detalhes de uma receita
//routes.post("/admin/recipes", recipes_adm.post); // Cadastrar nova receita
//routes.put("/admin/recipes", recipes_adm.put); // Editar uma receita
//routes.delete("/admin/recipes", recipes_adm.delete); // Deletar uma receita

module.exports = routes;