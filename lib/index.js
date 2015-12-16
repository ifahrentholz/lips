require("./config/config");
var extend = require("node.extend");

module.exports = function (options) {
  App.settings = extend({}, App.settings, options);
  App.start();
};


