'use strict';

describe('Controller: SignupCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SignupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignupCtrl = $controller('SignupCtrl', {
      $scope: scope
    });
  }));

  xit('should have empty user object on scope', function() {
    // expect(scope.user.toBe({}))
  })

  it('should attach three form fields to scope', function () {
    expect(scope.userFields.length).toBe(3);
  });
});
