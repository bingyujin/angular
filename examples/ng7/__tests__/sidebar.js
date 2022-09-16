var helpers = require('../../../test-helper');
var ngModule = helpers.module;
var inject = helpers.inject;

require('../heroDetail');

var expect = require('chai').expect;

describe('HeroDetailController', function() {
  var $componentController;

  beforeEach(ngModule('heroApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should call the `onDelete` binding, when deleting the hero', function() {
    var onDeleteSpy = {hero: {}};
    var bindings = {hero: {}, onDelete: onDeleteSpy};
    var ctrl = $componentController('heroDetail', null, bindings);

    ctrl.delete();
    expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});
  });

  it('should call the `onUpdate` binding, when updating a property', function() {
    var onUpdateSpy = {};
    var bindings = {hero: {}, onUpdate: onUpdateSpy};
    var ctrl = $componentController('heroDetail', null, bindings);

    ctrl.update('foo', 'bar');
    expect(onUpdateSpy).toHaveBeenCalledWith({
      hero: ctrl.hero,
      prop: 'foo',
      value: 'bar'
    });
  });

});

