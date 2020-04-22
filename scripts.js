const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe');
const closeModal = document.querySelector('.close-modal');

for (let recipe of recipes) {
	recipe.addEventListener('click', function () {
		const src = recipe.getElementsByTagName('img').item(0).src;
		const nameRecipe = recipe.getElementsByTagName('p').item(0).textContent;
		const author = recipe.getElementsByTagName('p').item(1).textContent;
		modalOverlay.classList.add('active');
		modalOverlay.querySelector('img').src = src;
		modalOverlay.getElementsByTagName('h5').item(0).textContent = nameRecipe;
		modalOverlay.getElementsByTagName('h6').item(0).textContent = author;
	});
}

	closeModal.addEventListener('click', function () {
	modalOverlay.classList.remove('active');
	modalOverlay.querySelector('img').src = '';
});
