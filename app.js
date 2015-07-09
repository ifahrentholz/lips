var express = require('express');
var fs = require('fs');
var app = express();
var gm = require('gm').subClass({ imageMagick: true });

/**
 * Set defaults
 * @type {{imageType: String("png"), bg_color: String("999"), fg_color: String("666")}}
 */
var defaults = {
  imageType: "png",
  bg_color: "e1e1e1",
  fg_color: "181818"
};

var max_age = 3153600;
var expiryDate = new Date(0);


/*
 * Setup the route and parse arguments
 * Example URL:
 * http://localhost:3000/gen/800x800.png/fff/bada55
 */
app.get('/gen/:dimension.:imageType?/:fg_color?/:bg_color?', function(req, res, next) {
  var dim = req.params.dimension.split('x');
  var width, height, foreground, background, imageType;

  /*
   * Set image dimensions (for example 300x150)
   */
  if(dim.length === 1) {
    width = height = dim[0] * 1;
  } else {
    width = dim[0] * 1;
    height = dim[1] * 1;
  }
  if(isNaN(width) || isNaN(height)) return next();


  /*
   * Set foreground color
   */
  if(typeof req.params.fg_color !== 'undefined') {
    foreground = req.params.fg_color;
  } else {
    foreground = defaults.fg_color;
  }
  if(foreground[0] !== '#') foreground = '#' + foreground;


  /*
   * Set background color
   */
  if(typeof req.params.bg_color !== 'undefined') {
    background = req.params.bg_color;
  } else {
    background = defaults.bg_color;
  }
  if(background[0] !== '#') background = '#' + background;


  /*
   * Set image type
   */
  if(typeof req.params.imageType !== 'undefined') {
    imageType = req.params.imageType;
  } else {
    imageType = defaults.imageType;
  }
  imageType = imageType.toLowerCase();

  /*
   * Set http header
   */
  res.setHeader("Content-Type", "image/" + imageType);
  res.setHeader("Cache-Control", "public, max-age=" + max_age)
  res.setHeader("Expires", expiryDate);
  res.setHeader("Last-Modified", expiryDate);

  /*
   * create the image
   */
  gm(width, height, background)
    .drawText(10, 50, "from ingo with love")
    .toBuffer(imageType, function(err, buffer) {
      if(err) {
        console.log(err);
        next();
      }
      res.send(buffer);
    });

});

app.listen('3000', console.log('running on port 3000'));