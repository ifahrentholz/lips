var gm = require("gm");

module.exports = {

  /**
   * Create an image buffer or string
   * @param {Object} options
   * @param {Function} callback
   */
  createImage: function(options, callback) {
    var txt;
    if(!options.txt) {
      txt = options.width + "x" + options.height;
    } else {
      txt = options.txt;
    }

    gm(options.width, options.height, "#" + options.bg)
      .fill("#" + options.txtclr)
      .font(options.fontFamily, options.txtsize)
      .drawText(0, 0, txt, "center")
      .toBuffer(options.contentType, function(err, buffer) {
        if (err) {
          callback(err, null);
        }
        callback(null, buffer);
      });
  }
};
