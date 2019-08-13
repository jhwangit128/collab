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
}])
