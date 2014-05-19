'use strict';

describe('Service: Txnservice', function () {

  // load the service's module
  beforeEach(module('payPalNodeApp'));

  // instantiate service
  var Txnservice;
  beforeEach(inject(function (_Txnservice_) {
    Txnservice = _Txnservice_;
  }));

  it('should do something', function () {
    expect(!!Txnservice).toBe(true);
  });

});
