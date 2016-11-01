var env = process.env.NODE_ENV || "development";
var packageJSON = require("../../package.json");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var favicon = require("serve-favicon");


exports.App = {

  settings: {
    namespace: "lips",
    font: "Arial.ttf",
    fontSize: "24px",
    fontColor: "000",
    text: false,
    fill: "09F",
    port: process.env.PORT || 3000,
    delay: 0,
    contentType: "png",
    maxAge: 3153600,
    noLog: false,
    expiryDate: new Date()
  },

  /*********************************************************************************************************************
   * Global app settings
   ********************************************************************************************************************/

  express: express(),
  version: packageJSON.version,
  root: path.join(__dirname, ".."),

  appPath: function(path) {
    return this.root + "/" + path;
  },

  require: function(path) {
    return require(this.appPath(path));
  },

  env: env,

  start: function() {
    if(!this.started) {
      this.started = true;
      this.express.listen(this.settings.port);
      if (!this.settings.noLog) {
        console.log("********************************************************************************");
        console.log("Running " + this.settings.namespace + " v" + this.version + " on port " + this.settings.port + " in " + this.env + " mode.");
        console.log("--------------------------------------------------------------------------------");
        console.log("visit: http://localhost:" + this.settings.port + "/" + this.settings.namespace + "/200x133.png");
        console.log("********************************************************************************");
      }
    }
  },

  stop: function() {
    if(this.started) {
      this.express.close();
      console.log("********************************************************************************");
      console.log("Stopped " + this.settings.namespace + " v" + this.version + " on port " + this.settings.port + " in " + this.env + " mode");
      console.log("********************************************************************************");
    }
  }
};


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


// Setup middleware
exports.App.express.use(logger('dev'));


// Setup routes
exports.App.require("config/routes")(exports.App.express);


// Views
exports.App.express.set('views', exports.App.appPath('views'));
exports.App.express.set('view engine', 'jade');
