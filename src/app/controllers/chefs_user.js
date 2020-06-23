const Chef_user = require('../models/Chef_user');

module.exports = {

	chefs(req, res) {
		Chef_user.all(function(chefs) {
			return res.render('chefs/user/index', { chefs });
		});
	}
};