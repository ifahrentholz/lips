module.exports = function(options) {
  var express = require("express");
  var pkg = require("../package.json");
  var app = express();

  app.get("/", function(req, res) {
    res.send("Hello again");
  });

  return app;
};
