class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = 'Looking for a Rig';
  }

  setCurrentShip(spaceship) {
    this.currentShip = spaceship;
  }

  engageWarpDrive() {
    if (this.currentShip.constructor.name === 'Spaceship') {
      this.currentShip.toggleWarpDrive(this);
    }
    return 'had no effect';
  }

  setsInvisibility() {
    if (this.currentShip.constructor.name === 'Spaceship') {
      this.currentShip.toggleInvisibility(this);
    }
    return 'had no effect';
  }

  chargePhasers() {
    if (this.currentShip.constructor.name === 'Spaceship') {
      this.currentShip.chargePhasers(this);
    }
    return 'had no effect';
  }
}