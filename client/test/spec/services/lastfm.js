'use strict';

describe('Service: lastFm', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var lastFm;
  beforeEach(inject(function (_lastFm_) {
    lastFm = _lastFm_;
  }));

  it('should do something', function () {
    expect(!!lastFm).toBe(true);
  });

});
