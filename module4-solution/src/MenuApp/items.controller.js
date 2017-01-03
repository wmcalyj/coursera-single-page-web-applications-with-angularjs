(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams', 'items'];
function ItemsController($stateParams, items) {
  var controller = this;
  controller.categoryShortName = $stateParams.categoryShortName;
  controller.items = items.data;
}
})();
