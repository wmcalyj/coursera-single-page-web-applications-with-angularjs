(function (){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var toBuyController = this;
    toBuyController.toBuyList = ShoppingListCheckOffService.toBuyList;
    toBuyController.buy = function (index){
      ShoppingListCheckOffService.buy(index);
    }
  }

  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtController = this;
    boughtController.boughtList = ShoppingListCheckOffService.boughtList;
  }

  function ShoppingListCheckOffService(){
    var service = this;
    service.toBuyList = [
      {name: "coke", quantity: 1},
      {name: "eggs", quantity: 2},
      {name: "icecreams", quantity: 3},
      {name: "potatoes", quantity: 4},
      {name: "bananas", quantity: 5},
      {name: "apples", quantity: 6},
      {name: "cookies", quantity: 7}
    ]
    service.boughtList = [];
    this.buy = function (index){
      var boughtItem = service.toBuyList[index];
      service.toBuyList.splice(index, 1);
      service.boughtList.push(boughtItem);
    }
  }

})()
