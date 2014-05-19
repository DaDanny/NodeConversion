'use strict';

angular.module('payPalNodeApp')
  .controller('ExchangerateCtrl', function ($scope, $http, Currencyservice) {
    
    $scope.currency1 = '';
    $scope.currency2 = '';
    $scope.startExchange = false;
    $scope.showExchange = false;

    /*
    ** Get Latest Updated Rates
    */
    $scope.getUpdated = function(){
      $scope.loading = true;
      $scope.showExchange = false;
      Currencyservice.getConversion()
        .then(function(data){
          $scope.loading = false;
          $scope.currencys = data;
          $scope.startExchange = true;
          $scope.updatedAt = new Date(data[0].updatedTime*1000);
        },function(error){
          $scope.currencys = 'failed';
      });
    };

    /*
    ** Load Rates from Local DB
    */
    Currencyservice.fromDB()
        .then(function(data){
          $scope.currencys = data;
          $scope.updatedAt = new Date(data[0].updatedTime*1000);
        },function(error){
          $scope.currencys = 'failed';
    });

    $scope.fromDB = function(){
      $scope.showExchange = false;
      $scope.startExchange = true;
    };

    $scope.hide = function(){
      $scope.showExchange = false;
    };

    $scope.convert = function(currency1,currency2){
      $scope.showExchange = true;
      /*
      ** USD To anything
      */
      if(currency1.code === 'USD' && currency2.code != 'USD'){
        $scope.exchangeAmount = currency1.conversion * currency2.conversion;
        $scope.symbol = currency2.symbol;
      }
      /*
      ** Anything to USD
      */
      else if(currency1.code != 'USD' && currency2.code === 'USD'){
        $scope.exchangeAmount = currency2.conversion/(currency1.conversion);
        $scope.symbol = currency2.symbol;
      }
      /*
      ** If we aren't converting actually
      */
      else if(currency1.code == currency2.code){
        $scope.exchangeAmount = 1;
      }
      /*
      ** Anything to anything
      */
      else{
        $scope.exchangeAmount = currency2.conversion * (1/currency1.conversion);
      }
    };
  });
