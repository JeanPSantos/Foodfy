const fs = require('fs');
const data = require('../data.json');

// index
exports.index = function (req, res) {
	return res.render('recipes/admin/index');
};

exports.create = function (req, res) {
	return res.send('ok');
};