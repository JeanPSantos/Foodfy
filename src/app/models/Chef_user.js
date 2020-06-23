const db = require('../../config/db');
const { query } = require('../../config/db');

module.exports = {
	all(callback) {
		const query = `
			SELECT chefs.*, COUNT(recipes) AS total_recipes
			FROM chefs LEFT JOIN recipes
			ON (chefs.id = recipes.chef_id)
			GROUP BY chefs.id
			ORDER BY chefs.id
		`;

		db.query(query, function(err, results) {
			if(err) throw `Database Error! ${err}`
			callback(results.rows);
		});
	}
};