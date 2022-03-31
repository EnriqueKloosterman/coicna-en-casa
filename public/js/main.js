// parrafos
let addDescriptionBtn = document.getElementById('addDescriptionBtn');
let descriptionList = document.querySelector('.descriptionList');
let descriptionInput = document.querySelectorAll('.descriptionInput')[0];

addDescriptionBtn.addEventListener('click', function(){
    let newDescription = descriptionInput.cloneNode(true);
    let input = newDescription.getElementsByTagName('textarea')[0];
    input.value = '';
    descriptionList.appendChild(newDescription);
});


// ingredientes
let addIngredientsBtn = document.getElementById('addIgredientsBtn');
let ingredientsList = document.querySelector('.ingredientsList');
let ingredientsInput = document.querySelectorAll('.ingredientsInput')[0];

addIngredientsBtn.addEventListener('click', function(){
    let newIngredients = ingredientsInput.cloneNode(true);
    let input = newIngredients.getElementsByTagName('input')[0];
    input.value = '';
    ingredientsList.appendChild(newIngredients);
});

