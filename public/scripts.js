/* for (let recipe of recipes) {
	recipe.addEventListener('click', function () {
		const index = recipe.index;	
		window.location.href = `/recipe/${index}`;
	});
} */

const currentPage = location.pathname;
const recipes = document.querySelectorAll('.recipe');

for (let i = 0; i < recipes.length; i++) {
	recipes[i].addEventListener('click', function() {
 		if (currentPage == '/admin/recipes') {
			 window.location.href = `/admin/recipe/${i}`;
			} else {
				window.location.href = `/recipe/${i}`;			
		}
	});
}

const abouts = document.querySelectorAll('.about-recipe__content');

for (const about of abouts) {
	 about.querySelector('.span').addEventListener('click', function() {
		if (about.querySelector('.span').textContent == 'ESCONDER') {
			about.querySelector('.span').textContent = 'MOSTRAR';
			about.querySelector('.data').classList.remove('show');
			about.querySelector('.data').classList.add('hide');
		} else {
			about.querySelector('.span').textContent = 'ESCONDER';
			about.querySelector('.data').classList.add('show')
			about.querySelector('.data').classList.remove('hide');
		}
	});
}