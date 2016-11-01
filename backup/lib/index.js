var App = require("./config/app").App;
var extend = require("node.extend");

module.exports = function (options) {
  App.settings = extend({}, App.settings, options);
  App.start();
};


