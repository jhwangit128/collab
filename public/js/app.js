<<<<<<< HEAD
const app = angular.module('RecipesApp', [])

app.controller('MainController', ['$http', function ($http) {
  this.h2 = "Recipes!"
  this.createForm = {}

  this.createRecipe = () => {
    $http({
      method:'POST',
      url: '/recipes',
      data: this.createFrom
    }).then((response) => {
      this.recipes.unshift(response.data)
      this.createForm = {}
    }, (error) => {console.log(error)})
  }


  this.getRecipes = () => {
    $http({
      method: 'GET',
      url: '/recipes'
    }).then(response => {
      this.recipes = response.data
    }, error => {
      console.log(error)
    })
  }

  this.getRecipes()
=======
const app = angular.module('RecipeApp', [])

app.controller('MainController', ['$http', function ($http) {
  const ctrl = this
  ctrl.h4 = 'Jiha&Costa Recipe Project'



>>>>>>> c3aedc5ede92c94242ba026e595c7a70896f2fb5
}])
