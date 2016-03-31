'use strict';

describe('Controller: MainloginCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MainloginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainloginCtrl = $controller('MainloginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainloginCtrl.awesomeThings.length).toBe(3);
  });
});
