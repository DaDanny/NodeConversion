'use strict';

angular.module('payPalNodeApp')
  .controller('CurrencyCtrl', function ($scope, $http, Currencyservice) {
    
    /*
    **Variable to hide conversion calculator until
    ** we have data from DB
    */
    $scope.startConvert = false;

    $scope.showConversion = false;

    //Currencies we are converting from
    $scope.currency1 = '';
    $scope.currency2 = '';
    $scope.convertAmount = 1;
    $scope.symbol = undefined;
    $scope.showCurrency = true;

    /*
    ** Calls Service to make GET Request from Server
    ** Which makes external API call to get exchange rates
    ** Once it recieves data from function
    ** Updates the scope with the data
    ** And displays the conversion calculator
    */
    $scope.getUpdated = function(){
      $scope.loading = true;
      $scope.showConversion = false;
      Currencyservice.getConversion()
        .then(function(data){
          $scope.loading = false;
          $scope.currencys = data;
          $scope.startConvert = true;
          $scope.updatedAt = new Date(data[0].updatedTime*1000);
        },function(error){
          $scope.currencys = 'failed';
      });
    };

    /*
    ** Calls Service to make a GET request
    ** Which returns old exchange rates from DB
    ** Once it recieves data, updates scope
    */
    Currencyservice.fromDB()
        .then(function(data){
          $scope.currencys = data;
          $scope.updatedAt = new Date(data[0].updatedTime*1000);
        },function(error){
          $scope.currencys = 'failed';
    });

    /*
    ** Use Local Values of EX Rates
    */
    $scope.fromDB = function(){
      $scope.showConversion = false;
      $scope.startConvert = true;
    };
    

    /*
    ** Function that will hide any 
    ** conversions if we change Currency Code
    */
    $scope.hide = function(){
      $scope.showConversion = false;
    };

    /*
    ** Takes in 2 currencies to convert with
    ** Also takes in amount to convert
    ** Returns the converted amount
    */
    $scope.conversion = function(currency1, currency2, amount){
      $scope.showConversion = true;
      /*
      ** USD To anything
      */
      if(currency1.code === 'USD' && currency2.code != 'USD'){
        $scope.converted = (amount* currency1.conversion) * currency2.conversion;
        $scope.symbol = currency2.symbol;
      }
      /*
      ** Anything to USD
      */
      else if(currency1.code != 'USD' && currency2.code === 'USD'){
        $scope.converted = (amount * currency2.conversion)/(currency1.conversion);
        $scope.symbol = currency2.symbol;
      }
      /*
      ** If we aren't converting actually
      */
      else if(currency1.code == currency2.code){
        $scope.converted = amount;
      }
      /*
      ** Anything to anything
      */
      else{
        $scope.converted = (amount * currency2.conversion) * (1/currency1.conversion);
      }

    };
  });
