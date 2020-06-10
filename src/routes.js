const express = require('express');
const routes = express.Router();
const recipes_adm = require('./app/controllers/recipes_adm');
const recipes_user = require('./app/controllers/recipes_user');

routes.get('/', recipes_user.index);
routes.get('/about', recipes_user.about);
routes.get('/recipes', recipes_user.recipes);
routes.get('/recipe/:id', recipes_user.show);


  /* Rotas das páginas ADMIN */

routes.get('/admin/recipes', recipes_adm.index);
routes.get("/admin/recipes/create", recipes_adm.create); // Mostrar formulário de cadastro de uma nova receita
routes.get('/admin/recipe/:id', recipes_adm.show); // Exibir detalhes de uma receita
routes.get("/admin/recipe/:id/edit", recipes_adm.edit); // Mostrar formulário de edição da receita
routes.post("/admin/recipes", recipes_adm.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes_adm.put); // Editar uma receita
routes.delete("/admin/recipes", recipes_adm.delete); // Deletar uma receita

module.exports = routes;