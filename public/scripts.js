/* for (let recipe of recipes) {
	recipe.addEventListener('click', function () {
		const index = recipe.index;	
		window.location.href = `/recipe/${index}`;
	});
} */

const recipes = document.querySelectorAll('.recipe');
const abouts = document.querySelectorAll('.about-recipe__content');

for (let i = 0; i < recipes.length; i++) {
	recipes[i].addEventListener('click', function() {
		window.location.href = `/recipe/${i}`;
	});
}

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