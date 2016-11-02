var gm = require("gm");

module.exports = {

  /**
   * Create an image buffer or string
   * @param {Object} options
   * @param {Function} callback
   */
  createImage: function(options, callback) {
    var text;
    if(!options.text) {
      text = options.width + "x" + options.height;
    } else {
      text = options.text;
    }

    gm(options.width, options.height, "#" + options.fill)
      .fill("#" + options.fontColor)
      .font(options.fontFamily, options.fontSize)
      .drawText(0, 0, text, "center")
      .toBuffer(options.contentType, function(err, buffer) {
        if (err) {
          callback(err, null);
        }
        callback(null, buffer);
      });
  }
};
