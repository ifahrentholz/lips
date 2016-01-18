var App = require("../lib/index");
var config = require("../lib/config/app").App;
var request = require("supertest");
var expect = require("chai").expect;

describe("Test", function() {
  var url;

  before(function(done) {
    // start the app
    App({
      port: 3333,
      noLog: true
    });
    url = "http://localhost:" + config.settings.port + "/" + config.settings.namespace + "/";
    done();
  });

  describe('image types', function() {
    it('it should return an png image', function(done) {
      request(url)
        .get('200x133.png')
        .expect('Content-Type', /image\/png/)
        .expect(200, done)
    });
    it('should return an jpg image', function(done) {
      request(url)
        .get('200x133.jpg')
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
    })
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
    })
    ;
  });
});