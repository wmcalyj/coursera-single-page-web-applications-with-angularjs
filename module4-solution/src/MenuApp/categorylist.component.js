(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/MenuApp/templates/categorieslist.template.html',
  bindings: {
    categories: '<'
  }
});

})();
