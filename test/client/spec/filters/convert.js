'use strict';

describe('Filter: convert', function () {

  // load the filter's module
  beforeEach(module('payPalNodeApp'));

  // initialize a new instance of the filter before each test
  var convert;
  beforeEach(inject(function ($filter) {
    convert = $filter('convert');
  }));

  it('should return the input prefixed with "convert filter:"', function () {
    var text = 'angularjs';
    expect(convert(text)).toBe('convert filter: ' + text);
  });

});
