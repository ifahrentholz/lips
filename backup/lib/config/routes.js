var App = require("./app").App;
var fs = require("fs");

module.exports = function (app) {
  fs.readdirSync(App.appPath("controllers")).forEach(function (file) {
    if (file === ".DS_Store") return;
    var name = file.substring(0, file.indexOf("."));
    require(App.appPath("controllers") + "/" + name)(app);
  });
};

