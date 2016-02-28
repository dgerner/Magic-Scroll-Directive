'use strict';

describe('Directive: pagedParallax', function () {

  // load the directive's module and view
  beforeEach(module('scrollsApp'));
  beforeEach(module('app/pagedParallax/pagedParallax.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<paged-parallax></paged-parallax>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the pagedParallax directive');
  }));
});