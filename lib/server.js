module.exports = function(options) {
  var extend = require('extend');
  var pkg = require('../package.json');
  var defaults = require('./config/config');
  var config = extend({}, defaults, options);
  var app = require('./app')(config);

  app.listen(config.port, function(){
    console.log("********************************************************************************");
    console.log("Running " + config.namespace + " v" + config.version + " on port " + config.port + " in " + config.env + " mode.");
    console.log("--------------------------------------------------------------------------------");
    console.log("visit: http://localhost:" + config.port + "/" + config.namespace + "/200x133.png");
    console.log("********************************************************************************");
  });
};

