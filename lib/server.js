var extend = require("extend");
var defaults = require("./config/config");
var app;
var server;

function start(options) {
  var config = extend({}, defaults, options);
  app = require("./app")(config);

  server = app.listen(config.port, function() {
    // prettier-ignore
    console.log("********************************************************************************");
    // prettier-ignore
    console.log("Running " + config.namespace + " v" + config.version + " on port " + config.port + " in " + config.env + " mode.");
    // prettier-ignore
    console.log("--------------------------------------------------------------------------------");
    // prettier-ignore
    console.log( "visit: http://localhost:" + config.port + "/" + config.namespace + "/200x133.png" );
    // prettier-ignore
    console.log( "********************************************************************************" );
  });

  return server;
}

function stop() {
  server.close();
}

module.exports = {
  start: start,
  stop: stop
};
