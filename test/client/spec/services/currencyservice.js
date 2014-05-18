'use strict';

describe('Service: Currencyservice', function () {

  // load the service's module
  beforeEach(module('payPalNodeApp'));

  // instantiate service
  var Currencyservice;
  beforeEach(inject(function (_Currencyservice_) {
    Currencyservice = _Currencyservice_;
  }));

  it('should do something', function () {
    expect(!!Currencyservice).toBe(true);
  });

});
