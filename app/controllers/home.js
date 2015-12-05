var gm = require('gm').subClass({ imageMagick: true });
var fs = require('fs');

/**
 * Set defaults
 * @type {{imageType: String("png"), bg_color: String("999"), fg_color: String("666")}}
 */
var defaults = {
  imageType: "png",
  bgColor: "e1e1e1",
  color: "181818"
};

var max_age = 3153600;
var expiryDate = new Date(0);


module.exports = function(app){
  app.get('/gen/:dimension.:imageType', function(req, res, next) {
    var dim = req.params.dimension.split('x');
    var width, height, foreground, background, imageType, text, delay;

      if (typeof req.query.delay !== "undefined") {
        delay = req.query.delay;
      } else {
        delay = false;
      }

    if(dim.length === 1) {
      width = height = dim[0] * 1;
    } else {
      width = dim[0] * 1;
      height = dim[1] * 1;
    }
    if(isNaN(width) || isNaN(height)) return next();


    if(typeof req.query.color !== 'undefined') {
      foreground = req.query.color;
    } else {
      foreground = defaults.color;
    }
    if(foreground[0] !== '#') foreground = '#' + foreground;


    if(typeof req.query.bg !== 'undefined') {
      background = req.query.bg;
    } else {
      background = defaults.bgColor;
    }
    if(background[0] !== '#') background = '#' + background;


    if(typeof req.params.imageType !== 'undefined') {
      imageType = req.params.imageType;
    } else {
      imageType = defaults.imageType;
    }
    imageType = imageType.toLowerCase();

    if(typeof req.query.text !== 'undefined') {
      // TODO handle case when the text is too long for the image
      text = req.query.text;
      //text = width + " x " + height;
    } else {
      text = width + " x " + height;
    }

    res.setHeader("Content-Type", "image/" + imageType);
    res.setHeader("Cache-Control", "public, max-age=" + max_age)
    res.setHeader("Expires", expiryDate);
    res.setHeader("Last-Modified", expiryDate);

    gm(width, height, background)
      .fill(foreground)
      .font("Arial", 20)
      .drawText(0, 0, text, "center")
      .toBuffer(imageType, function(err, buffer) {
        if(err) {
          console.log(err);
          next();
        }
        if (delay) {
            setTimeout(function() {
              res.send(buffer);
            }, delay);
          } else {
            res.send(buffer);
          }
      });

  });
};
