const Chef_adm = require('../models/Chef_adm');

module.exports = {

	index(req, res) {
		Chef_adm.all(function(chefs) {
			return res.render('chefs/admin/index', { chefs });
		});
	},

	create(req, res) {
		return res.render('chefs/admin/create');
	},

	post(req, res) {
		const keys = Object.keys(req.body);
	
		for (key of keys) {
			if (req.body[key] == "") {
				return res.send('Preencha todos os campos!');
			}
		}

		Chef_adm.create(req.body, function(chef) {
			return res.redirect(`/admin/chef/${chef.id}`);
		});
	},

	show(req, res) {
		Chef_adm.find(req.params.id, function(chef) {
			if (!chef) return res.send('Chef não encontrado!');
			Chef_adm.findRecipe(req.params.id, function(recipes) {
				return res.render ('chefs/admin/show', { chef, recipes });
			});
		});
	},

	edit(req, res) {
		Chef_adm.find(req.params.id, function(chef) {
			if (!chef) return res.send('Chef não encontrado!');
			return res.render('chefs/admin/edit', { chef });
		});
	},

	put(req, res) {
		const keys = Object.keys(req.body);

		for (key of keys) {
			if (req.body[key] == '') {
				return res.send('Falta preenchimento de algum campo.');
			}
		}

		Chef_adm.update(req.body, function() {
			return res.redirect(`/admin/chef/${req.body.id}`);
		});
	},

	delete(req, res) {
		Chef_adm.findDelete(req.body.id, function(counter) {
			if (counter.recipes_chef > 0) {
				return res.send(`Este chef possui ${counter.recipes_chef} receitas. Não podendo ser apagado!`);
			}
			Chef_adm.delete(req.body.id, function() {
				return res.redirect('/admin/chefs');
			});
		});
	}
};