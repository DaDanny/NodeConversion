'use strict';

angular.module('payPalNodeApp')
  .filter('convertFilter', function () {
    return function (input,amount) {
      if(amount.conversion){
        return input * amount.conversion;
      }
      else{
        return input;
      }
    };
  });
