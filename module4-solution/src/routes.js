(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/MenuApp/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/MenuApp/templates/categories.template.html',
    controller: 'CategoriesController as categoriesController',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        var categories = MenuDataService.getAllCategories();
        console.log("categories:", categories);
        return categories;
      }]
    }
  })
  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/MenuApp/templates/items.template.html',
    controller: 'ItemsController as itemsController',
    resolve: {
      items: ['$stateParams','MenuDataService', function($stateParams, MenuDataService){
        console.log("Items:", MenuDataService.getItemsForCategory($stateParams.categoryShortName));
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
}

})();
