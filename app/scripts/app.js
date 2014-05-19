'use strict';

angular.module('payPalNodeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngGrid'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/paypal/currencyConversion', {
        templateUrl: 'partials/currency',
        controller: 'CurrencyCtrl'
      })
      .when('/paypal/conversionRate', {
        templateUrl: 'partials/exchangerate',
        controller: 'ExchangerateCtrl'
      })
      .when('/paypal/activity', {
        templateUrl: 'partials/txnhistory',
        controller: 'TxnhistoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });