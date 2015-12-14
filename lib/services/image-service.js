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

    var settings = {
      font: "Impact",
      text: "testing",
      textSize: "12px",
      fill: "09F"
    };

    var options = extend({}, settings, {
      font: q.font,
      fill: q.fill,
      width: parseInt(p.dimension.split("x")[0], 10),
      height: parseInt(p.dimension.split("x")[1], 10),
      imageType: p.imageType,
      text: q.text,
      textSize: q.textSize
    });

    var canvas = new Canvas(options.width, options.height);
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "#" + options.fill;
    ctx.fillRect(0, 0, options.width, options.height);

    callback = (typeof callback === 'function') ? callback : function() {};
    callback(null, canvas.toBuffer());
  }

};
