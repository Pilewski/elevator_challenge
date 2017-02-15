const Elevator = require('./elevator').default

export default class Person {
  constructor(name, currentFloor) {
    this.name = name
    this.currentFloor = currentFloor
  }
}
