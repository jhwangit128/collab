// <<<<<<< HEAD
const app = angular.module('RecipesApp', [])

app.controller('MainController', ['$http', function ($http) {
  this.h2 = "Recipes!"
  this.createForm = {}

  this.createRecipe = () => {
    $http({
      method:'POST',
      url: '/recipes',
      data: this.createForm
    }).then((response) => {
      console.log(response.data);
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

  this.deleteRecipe = (id) => {
    $http({
      method: 'DELETE',
      url: '/recipes/' + id
    }).then(response => {
      const removeByIndex = this.recipes.findIndex(recipe => recipe._id === id)
      this.recipes.splice(removeByIndex, 1)
    }, error => console.log(error))
  }

  this.getRecipes()
}])
