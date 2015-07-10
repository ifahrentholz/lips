var fs = require('fs');

module.exports = function(app){
  fs.readdirSync(App.appPath('app/controllers')).forEach(function(file) {
    if (file == "setup.js") return;
    var name = file.substr(0, file.indexOf('.'));
    require(App.appPath('app/controllers') + '/' + name)(app);
  });
}