'use strict';

angular.module('payPalNodeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Conversion Calculator',
      'link' : '/paypal/currencyConversion'
    },
    {
      'title': 'Conversion Rates',
      'link' : '/paypal/conversionRate'
    },
    {
      'title': 'Transaction History',
      'link' : '/paypal/activity'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
