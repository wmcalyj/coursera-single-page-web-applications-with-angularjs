(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/MenuApp/templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
