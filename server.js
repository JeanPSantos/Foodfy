const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require('./data');
const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
	express: server,
	autoescape: false,
	noCache: true
});

server.get('/', function (req, res) {
	return res.render('index', { recipes: recipes });
});

server.get('/about', function (req, res) {
	const data = {
		about: [
			'Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat,	aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.',
			'Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, eﬃcitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.'
		]
	};
	return res.render('about', { data: data });
});

server.get('/recipes', function (req, res) {
	return res.render('recipes', { recipes: recipes });
});

server.get('/recipe/:index', function (req, res) {
	const recipeIndex = req.params.index;
	console.log(recipeIndex);
	const recipe = recipes[recipeIndex];
	return res.render ('recipe', { recipe: recipe });	
  });

server.listen(5000, function () {
	console.log('Servidor ligado!!');
});
