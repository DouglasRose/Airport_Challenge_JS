describe ("Weather", function () {
  var plane;
  var airport;
  var weather;


  describe ("is", function () {
    beforeEach(function() {
      plane = new Plane ();
      airport = new Airport();
      weather = new Weather();
    });

    it("weather generator", function () {
      expect (weather.report).toMatch (/(stormy|sunny)/);
    });
  });
});

// function Weather() {
//   this.isStormy = false;
// }
//
// Weather.prototype.detectStorms = function () {
//   //r randomly return true (weather is stormy) or false (weather is not stormy)
//   this.isStormy = true; //
// };



// describe ("Plane", function () {
//   var plane;
//   var airport;
//
//   describe ("can", function () {
//     beforeEach(function() {
//       plane = new Plane();
//       airport = new Airport();
//     });
//
//     it ("land at an airport", function () {
//
//       plane.land(airport)
//       expect(plane.isLanded).toBe(true);
//     });
//
//     it("take off from airport", function () {
//
//       plane.takeOff(airport)
//       expect(plane.isLanded).toBe(false);
//     });
//   });
// });
