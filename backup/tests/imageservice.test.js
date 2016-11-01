var imageService = require("../lib/services/image-service");
var expect = require("chai").expect;


describe("Imageservice", function() {
  var ror = false;
  var buf = false;
  var options = {
    text: "test",
    width: 200,
    height: 200,
    fill: "bada55",
    font: "Arial",
    "fontSize": 12,
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