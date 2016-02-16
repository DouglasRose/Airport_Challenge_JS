describe ("Plane", function () {
  var plane;
  var airport;

  describe ("can", function () {
    beforeEach(function() {
      plane = new Plane();
      airport = new Airport();
    });

    it ("land at an airport", function () {

      plane.land(airport)
      expect(plane.isLanded).toBe(true);
    });

    it("take off from airport", function () {

      plane.takeOff(airport)
      expect(plane.isLanded).toBe(false);
    });
  });
});
