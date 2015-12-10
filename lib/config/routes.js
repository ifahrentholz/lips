var fs = require("fs");

module.exports = function (app) {
  fs.readdirSync(App.appPath("routes")).forEach(function (file) {
    if (file === ".DS_Store") return;
    var name = file.substring(0, file.indexOf("."));
    require(App.appPath("routes") + "/" + name)(app);
  });
};

