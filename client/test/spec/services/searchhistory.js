'use strict';

describe('Service: searchHistory', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var searchHistory;
  beforeEach(inject(function (_searchHistory_) {
    searchHistory = _searchHistory_;
  }));

  it('should do something', function () {
    expect(!!searchHistory).toBe(true);
  });

});
