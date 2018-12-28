function init() {
  //put any page initialization/handlebars initialization here
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let formTemplateFn = Handlebars.compile(formTemplate);
  document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['','','','','']});

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  })
}

function handleSubmit() {
  let recipe = {}
  let rName = document.getElementById('name');
  let rDesc = document.getElementById('description');
  let rIngr = document.getElementById('ingredients');

  recipe.name = rName.value;
  recipe.description = rDesc.value;
  recipe.ingredients = [];
  for(let i=0; i< rIngr.length; i++) {
    recipe.ingredients.push(rIngr[i].value);
  }
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
