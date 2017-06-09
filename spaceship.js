class Spaceship {
  constructor(name, crewMembers, phasers, shields) {
    this.name = name;
    this.crewMembers = crewMembers;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.phasersCharge = 'uncharged';
    this.warpDrive = 'disengaged';

    this.docked = (function () {
      return !crewMembers.length;
    }());

    this.crewMembers.forEach((member) => {
      member.setCurrentShip(this);
    });
  }

  toggleInvisibility(crewMember) {
    if (crewMember.position === 'Defender') {
      this.cloaked = !this.cloaked;
    }
  }

  chargePhasers(crewMember) {
    if (crewMember.position === 'Gunner') {
      this.phasersCharge = 'charged!';
    }
  }

  toggleWarpDrive(crewMember) {
    if (crewMember.position === 'Pilot') {
      this.warpDrive = 'engaged!';
    }
  }
}
