'use strict';

angular.module('payPalNodeApp')
  .controller('CurrencyCtrl', function ($scope, $http, Currencyservice) {
    Currencyservice.getConversion()
      .then(function(data){
        console.log(data);
        $scope.currencys = data;
      },function(error){
        $scope.currencys = 'failed';
    });
  });
