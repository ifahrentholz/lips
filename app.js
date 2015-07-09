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
app.get('/gen/:dimension.:imageType?/:fg_color?/:bg_color?/:text?', function(req, res, next) {
  var dim = req.params.dimension.split('x');
  var width, height, foreground, background, imageType, text;

  if(dim.length === 1) {
    width = height = dim[0] * 1;
  } else {
    width = dim[0] * 1;
    height = dim[1] * 1;
  }
  if(isNaN(width) || isNaN(height)) return next();


  if(typeof req.params.fg_color !== 'undefined') {
    foreground = req.params.fg_color;
  } else {
    foreground = defaults.fg_color;
  }
  if(foreground[0] !== '#') foreground = '#' + foreground;


  if(typeof req.params.bg_color !== 'undefined') {
    background = req.params.bg_color;
  } else {
    background = defaults.bg_color;
  }
  if(background[0] !== '#') background = '#' + background;


  if(typeof req.params.imageType !== 'undefined') {
    imageType = req.params.imageType;
  } else {
    imageType = defaults.imageType;
  }
  imageType = imageType.toLowerCase();

  if(typeof req.params.text !== 'undefined') {
    // TODO handle case when the text is too big for the image
    //text = req.params.text;
    text = width + " x " + height;
  } else {
    text = width + " x " + height;
  }

  res.setHeader("Content-Type", "image/" + imageType);
  res.setHeader("Cache-Control", "public, max-age=" + max_age)
  res.setHeader("Expires", expiryDate);
  res.setHeader("Last-Modified", expiryDate);

  gm(width, height, background)
    .font("Arial", 20)
    .drawText(0, 0, text, "center")
    .toBuffer(imageType, function(err, buffer) {
      if(err) {
        console.log(err);
        next();
      }
      res.send(buffer);
    });

});

app.listen('3000', console.log('running on port 3000'));