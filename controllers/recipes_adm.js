const fs = require('fs');
const data = require('../data.json');

// index
exports.index = function(req, res) {
    return res.render('admin/recipes/index');
};

exports.create = function(req, res) {
    return res.send('ok');
};