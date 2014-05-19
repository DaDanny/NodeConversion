'use strict';

angular.module('payPalNodeApp')
  .controller('TxnhistoryCtrl', function ($scope, $http, Txnservice,convertFilter, Currencyservice) {
    
    $scope.getUpdated = function(){
      $scope.loading = true;
      Currencyservice.getConversion()
        .then(function(data){
          $scope.loading = false;
          $scope.currencys = data;
          $scope.updatedAt = new Date(data[0].updatedTime*1000);
        },function(error){
          $scope.currencys = 'failed';
      });
    };
    /*
    ** Function which will get Activity History
    ** From Server. Once it recieves data
    ** Updates the Scope
    */
    Txnservice.getHistory()
      .then(function(data){
        $scope.txnHistory = data;
      },function(error){
        $scope.txnHistory = 'failed';
      });

    /*
    ** If we wish to change Display Currency
    */
    $scope.change = function(currency){
      $scope.displaySymbol = currency.symbol;
    }
    
    //Scope Defaults to USD 
    $scope.displayCode = {code:'USD'};
    $scope.displaySymbol = '$';

    /*
    ** Gets Currencys From Local for Typeahead
    */
    Currencyservice.fromDB()
        .then(function(data){
          $scope.currencys = data;
          $scope.updatedAt = new Date(data[0].updatedTime*1000);
        },function(error){
          $scope.currencys = 'failed';
    });
  });
