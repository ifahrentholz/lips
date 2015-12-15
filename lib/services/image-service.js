"use strict";

var extend = require("node.extend");
var Canvas = require("canvas");
var Image = Canvas.Image;

module.exports = {

  /**
   * Create an image buffer or string
   * @param {Object} req
   * @param {Function} callback
   */
  createImage: function(req, callback) {
    var p = req.params;
    var q = req.query;

    var options = extend({}, App.imageSettings, {
      font: q.font,
      fontSize: q.fontSize,
      fontColor: q.fontColor,
      fill: q.fill,
      width: parseInt(p.dimension.split("x")[0], 10),
      height: parseInt(p.dimension.split("x")[1], 10),
      text: q.text,
      textSize: q.textSize
    });

    var canvas = new Canvas(options.width, options.height);
    var ctx = canvas.getContext('2d');

    // Create the image box
    ctx.fillStyle = "#" + options.fill;
    ctx.fillRect(0, 0, options.width, options.height);
    ctx.save();

    // Create the image text
    if (App.imageSettings.text) {
      ctx.textAlign = "center";
      ctx.lineWidth = 1;
      ctx.fillStyle = "#" + options.fontColor;
      ctx.font = options.fontSize + " " + options.font;
      ctx.fillText(options.width + "x" + options.height, options.width / 2, options.height / 2);
      ctx.save();
    }

    callback = (typeof callback === 'function') ? callback : function() {};
    callback(null, canvas.toBuffer());
  }

};
