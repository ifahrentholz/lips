module.exports = function(config) {
  var extend = require('extend');
  var express = require('express');
  var pkg = require('../package.json');
  var app = express();
  var imageService = require('./services/image-service');


  app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.get('/' + config.namespace + '/:dimension.:contentType', function(req, res, next) {
    var p = req.params;
    var q = req.query;
    var _config = extend({}, config, {
      txtsize: q.txtsize,
      txtclr: q.txtclr,
      bg: q.bg,
      width: parseInt(p.dimension.split('x')[0], 10),
      height: parseInt(p.dimension.split('x')[1], 10),
      txt: q.txt,
      delay: q.delay,
      contentType: p.contentType,
      maxAge: q.maxAge,
      expiryDate: q.expiryDate
    });
    imageService.createImage(_config, function(err, image) {
      if(err) {
        return console.log(err);
      }
      res.setHeader('Content-Type', 'image/' + _config.contentType);
      res.setHeader('Cache-Control', 'public, max-age=' + _config.maxAge);
      res.setHeader('Expires', _config.expiryDate);
      res.setHeader('Last-Modified', _config.expiryDate);
      if(_config.delay) {
        setTimeout(function() {
          res.send(image);
        }, _config.delay);
      }
      else {
        res.send(image);
      }
    })
  });


  return app;
};
