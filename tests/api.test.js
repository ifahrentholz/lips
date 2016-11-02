var server = require("../lib/server");
var config = require("../lib/config/config");
var request = require("supertest");
var expect = require("chai").expect;

describe("Test", function() {
  var url;

  before(function(done) {
    server(config);
    url = "http://localhost:" + config.port + "/" + config.namespace + "/";
    done();
  });

  describe('image types', function() {
    it('should return an PNG image', function(done) {
      request(url)
        .get('200x133.png')
        .expect('Content-Type', /image\/png/)
        .expect(200, done);
    });

    it('should return an jpg image', function(done) {
      request(url)
        .get('200x133.jpg?delay=100&txt=test')
        .expect('Content-Type', /image\/jpg/)
        .expect(200, done)
    });
  });

  describe('Cache-Control', function() {
    it('should have no cache', function(done) {
      request(url)
        .get('200x133.png?maxAge=1337')
        .expect('Content-Type', /image\/png/)
        .expect('Cache-Control', /public, max-age=1337/)
        .expect(200, done);
    });
  });

  describe('Expires', function() {
    it('should have optional expiry date', function(done) {
      var date = new Date(Date.parse(2088, 8, 3, 10, 0, 0, 0)).toUTCString();
      var uriDate = date;
      request(url)
        .get('200x133.png?expiryDate=' + uriDate)
        .expect('Content-Type', /image\/png/)
        .expect('Expires', date)
        .expect(200, done)
    });
  });
});