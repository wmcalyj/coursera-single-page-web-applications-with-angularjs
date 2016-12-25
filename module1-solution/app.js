(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.checkItems = function () {
      var items = $scope.items;
      if(!items){
        $scope.state = 'Please enter data first'
      }else {
        var itemArrays = items.split(",");
        var count = 0;
        for (var i = 0; i < itemArrays.length; i++) {
          if(itemArrays[i].trim()){
            count++;
          }
        }
        if(count <= 3){
          $scope.state = 'Enjoy!';
        }else {
          $scope.state = 'Too much!';
        }
      }
    }
  }

})();
