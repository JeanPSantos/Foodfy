const recipes = document.querySelectorAll('.recipe');

for (let recipe of recipes) {
	recipe.addEventListener('click', function () {
		const index = recipe.recipeIndex;	
		window.location.href = `/recipe/${index}`;
	});
}
