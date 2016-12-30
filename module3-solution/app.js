(function () {
  'use restrict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('BaseURL', "https://davids-restaurant.herokuapp.com/")
  .constant('PathURI', "menu_items.json")
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        foundResults: '<',
        onRemove: '&'
      }
    };

    function FoundItemsDirectiveController() {
      var controller = this;
      controller.mySearchTerm = MenuSearchService.searchTerm;
    }

    return ddo;
  }

  MenuSearchService.$inject = ['$http','BaseURL', 'PathURI'];
  function MenuSearchService($http, BaseURL, PathURI) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      var response =  $http({
        method: "GET",
        url: (BaseURL + PathURI)
      });
      service.mySearchTerm = searchTerm;
      return response.then(function (result){
        var results = result.data;
        var items = results.menu_items;
        if(!searchTerm){
          return items;
        }
        var found = [];
        for (var i = 0; i < items.length; i++) {
          if(items[i].description.indexOf(searchTerm) >= 0){
            found.push(items[i]);
          }
        }
        return found;
      });
    }
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;
    controller.narrowDown = function () {
      var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
      promise.then(function (found) {
        controller.found = found;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    };

    controller.onRemove = function (index) {
      controller.found.splice(index, 1);
    };
  }
})();
