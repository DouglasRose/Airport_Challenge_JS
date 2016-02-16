function Plane () {
  this.isLanded = false;
}

Plane.prototype.land = function(airport) {
  // airport.plane_count += 1;
  this.isLanded = true;
}

Plane.prototype.takeOff = function(airport) {
  this.isLanded = false;
}

// Plane.prototype.isLanded = function() {
//   // return true or false, a simple status check of the airplance
//   // if()
//   //   return true;
//   // else
//   //   return false;
//
// }

// Plane.prototype.isLandedAt = function(airport) {
//   // return true or false, more specific check as to whether an airplane is at a particular airport
// }
