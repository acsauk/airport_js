'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('has no planes bt default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear plane for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

});
