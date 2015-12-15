require("./config/config");
var extend = require("node.extend");

module.exports = function (options) {
  App.userSettings = extend({}, App.userSettings, options);
  App.start();
};


