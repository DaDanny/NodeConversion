'use strict';

describe('Filter: convertFilter', function () {

  // load the filter's module
  beforeEach(module('payPalNodeApp'));

  // initialize a new instance of the filter before each test
  var convertFilter;
  beforeEach(inject(function ($filter) {
    convertFilter = $filter('convertFilter');
  }));

  it('should return the input prefixed with "convertFilter filter:"', function () {
    var text = 'angularjs';
    expect(convertFilter(text)).toBe('convertFilter filter: ' + text);
  });

});
