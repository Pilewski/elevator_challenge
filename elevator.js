export default class Elevator {
  constructor() {
    this.currentFloor = 0
    this.floors = 0
    this.stops = 0
    this.requests = []
    this.riders = []
    this.status = 'stopped'
  }

  addRequest(person, floor) {
    this.requests.push({
      name: person.name,
      currentFloor: person.currentFloor,
      floor
    })
  }

  moveToCurrentFloor() {
    const request = this.requests[0]
    this.countFloors(request.currentFloor)
    this.status = 'moving'
    this.currentFloor = request.currentFloor
    this.pickUp(request)
  }

  pickUp(request) {
    this.stops++
    this.riders.push(request)
    this.status = 'stopped'
    this.moveToDestination(request)
  }

  moveToDestination(request) {
    this.status = 'moving'
    this.countFloors(request.destination)
    this.currentFloor = request.destination
    this.depositRider(request)
  }

  depositRider(request) {
    this.riders.shift()
    this.stops++
    this.status = 'stopped'
  }

  countFloors(floorType) {
    const traversed = Math.abs(this.currentFloor - floorType)
    this.floors += traversed
  }

  reset() {
    this.constructor()
  }
}
