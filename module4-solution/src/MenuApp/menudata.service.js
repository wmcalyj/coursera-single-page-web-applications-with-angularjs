(function functionName() {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('BaseURL', "https://davids-restaurant.herokuapp.com/")
.constant('CategoriesURI', "categories.json")
.constant('ItemsURI', "menu_items.json");

MenuDataService.$inject = ['$http','BaseURL', 'CategoriesURI', 'ItemsURI'];
function MenuDataService($http, BaseURL, CategoriesURI, ItemsURI) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (BaseURL + CategoriesURI)
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: (BaseURL + ItemsURI),
      params: {category: categoryShortName}
    });
  };
}
})();
