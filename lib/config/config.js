var env = process.env.NODE_ENV || "development";
var packageJSON = require("../../package.json");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var favicon = require("serve-favicon");


global.App = {

  /*********************************************************************************************************************
   * Settings
   ********************************************************************************************************************/

  settings: {
    namespace: "lips",
    font: "Arial",
    fontSize: "24px",
    fontColor: "000000",
    text: true,
    fill: "09F",
    port: process.env.PORT || 3000,
    delay: 0,
    contentType: "png",
    maxAge: 3153600,
    expiryDate: new Date()
  },


  /*********************************************************************************************************************
   * Global app settings
   ********************************************************************************************************************/

  express : express(),
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
    if (!this.started) {
      this.started = true;
      this.express.listen(App.settings.port);
      console.log("********************************************************************************");
      console.log("Running "+ App.settings.namespace +" v" + App.version + " on port " + App.settings.port + " in " + App.env + " mode");
      console.log("--------------------------------------------------------------------------------");
      console.log("visit: http://localhost:"+ App.settings.port +"/"+ App.settings.namespace +"/200x133.png");
      console.log("********************************************************************************");
    }
  }
};


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


// Setup middleware
App.express.use(logger('dev'));


// Setup routes
App.require("config/routes")(App.express);


// Views
App.express.set('views', App.appPath('views'));
App.express.set('view engine', 'jade');

