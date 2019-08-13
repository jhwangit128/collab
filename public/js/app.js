const app = angular.module('RecipesApp', [])

app.controller('MainController', ['$http', function ($http) {

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
