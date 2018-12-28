function init() {
  //put any page initialization/handlebars initialization here
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let formTemplateFn = Handlebars.compile(formTemplate);
  
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
