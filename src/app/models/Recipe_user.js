const db = require('../../config/db');

module.exports = {
	all(callback) {
		const query = `
			SELECT recipes.*, chefs.name AS chef_name
			FROM recipes
			LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
			ORDER BY id ASC
		`;

		db.query(query, function(err, results) {
			if(err) throw `Database Error! ${err}`
			callback(results.rows);
		});
	},

	find(id, callback) {
		const query = `
			SELECT recipes.*, chefs.name AS chef_name
			FROM recipes
			LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
			WHERE recipes.id = $1
		`;
		
		db.query(query, [id], function(err, results) {
			if(err) throw `Database Error! ${err}`
			callback(results.rows[0]);
		});
	}
};