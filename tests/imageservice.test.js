var imageService = require("../lib/services/image-service");
var expect = require("chai").expect;


describe("Imageservice", function() {
  var ror = false;
  var buf = false;
  var options = {
    txt: "test",
    width: 200,
    height: 200,
    bg: "bada55",
    fontFamily: "Arial",
    txtsize: 12,
    contentType: "png"
  };


  beforeEach(function(done) {
    imageService.createImage(options, function(err, buffer) {
      if(err) {
        ror = true;
      }
      if(buffer) {
        buf = true;
      }
      done();
    });
  });


  it("should have a `createImage` method", function() {
    expect(imageService.createImage).to.exist;
  });


  it("should produce an output buffer", function() {
    expect(ror).to.be.false;
    expect(buf).to.be.true;
  });


});