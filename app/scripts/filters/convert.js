'use strict';

angular.module('payPalNodeApp')
  .filter('convert', function () {
    return function (input) {
      return 'convert filter: ' + input;
    };
  });
