function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
