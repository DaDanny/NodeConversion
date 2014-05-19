'use strict';

angular.module('payPalNodeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Currency',
      'link' : '/paypal/currencyConversion'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
