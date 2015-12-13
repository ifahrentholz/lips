var extend = require("node.extend");
var Canvas = require("canvas");
var Image = Canvas.Image;
var canvas, ctx;

module.exports = {

  /**
   * Create the options object
   * @param {Object} req
   * @returns {*}
   */
  prepare: function(req) {
    var defaults = {
      width: 200,
      height: 100,
      delay: 0,
      imageType: "png"
    };
    var params = req.params;
    var dimension = params.dimension.split("x");
    var imageType = params.imageType;
    var delay = req.query.delay;
    var options = extend({}, defaults, {
      width: dimension[0] * 1,
      height: dimension[1] * 1,
      imageType: imageType,
      delay: delay
    });

    return options;
  },


  /**
   * Create the canvas image buffer
   * @param {Object} options
   */
  createImage: function(options) {
    var canvas = new Canvas(options.width, options.height);
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Impact";
  },


  /**
   * Initialize the image-service
   * @param {Object} req
   */
  init: function(req) {
    var options = this.prepare(req);
    var image = this.createImage(options);

    return image;
  }
};