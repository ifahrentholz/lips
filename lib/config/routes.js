var fs = require("fs");

module.exports = function (app) {
  fs.readdirSync(App.appPath("routes")).forEach(function (file) {
    if (file == "setup.js") return;
    var name = file.substr(0, file.indexOf("."));
    require(App.appPath("routes") + "/" + name)(app);
  });
};
