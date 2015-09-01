var env          = process.env.NODE_ENV || 'development';
var packageJson  = require('../package.json');
var express      = require('express');
var path         = require('path');
var logger       = require('morgan');


global.App = {
  app    : express(),
  port   : process.env.PORT || 3000,
  version: packageJson.version,
  root   : path.join(__dirname, '..'),
  appPath: function(path) {
    return this.root + '/' + path;
  },
  require: function(path) {
    return require(this.appPath(path));
  },
  env    : env,
  start  : function() {
    if(!this.started) {
      this.started = true;
      this.app.listen(this.port);
      console.log('Running App Version ' + App.version + ' on port ' + App.port + ' in ' + App.env + ' mode');
    }
  }
};

// Middlewares
App.app.use(logger('dev'));
App.app.use(express.static(App.appPath('public')));

// Routes
App.require('config/routes')(App.app);

// Views
App.app.set('views', App.appPath('app/views'));
App.app.set('view engine', 'jade');
