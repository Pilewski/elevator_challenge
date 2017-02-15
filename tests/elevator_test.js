require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const Elevator = require('../elevator').default
const Person = require('../person').default

describe('Elevator', function() {
  const elevator = new Elevator()
  const jorge = new Person('Jorge', 4)

  afterEach(function() {
    elevator.reset();
  });

  it('should bring rider to their requested floor', () => {
    elevator.addRequest(jorge, 9)
    assert.equal(elevator.currentFloor, 9)
    assert.equal(elevator.floors, 9)
    assert.equal(elevator.stops, 2)
    assert.equal(elevator.status, 'stopped')
    assert.equal(elevator.riders.length, 0)
    assert.equal(elevator.requests.length, 1)
  });


  it('should bring a rider to a floor above their current floor', () => {
    elevator.addRequest(jorge, 5)
    assert.equal(elevator.currentFloor, 5)
    assert.equal(elevator.status, 'stopped')
    assert.equal(elevator.stops, 2)
    assert.equal(elevator.floors, 5)
  });

  xit('should bring a rider to a floor below their current floor', () => {
  });

});
