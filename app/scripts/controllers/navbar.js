'use strict';

angular.module('payPalNodeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Currency',
      'link' : '/Currency'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
