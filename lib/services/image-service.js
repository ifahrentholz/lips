"use strict";

var extend = require("node.extend");

module.exports = {
  createImage: function(req, callback) {
    var settings = {
      font: "Impact",
      text: "",
      textSize: "12px"
    };
    var p = req.params;
    var q = req.query;
    var options = extend({}, settings, {
      width: p.dimension.split("x")[0],
      height: p.dimension.split("x")[1],
      imageType: p.imageType,
      text: q.text,
      textSize: q.textSize
    });

    var testString = "test string";

    callback = (typeof callback === 'function') ? callback : function() {};
    callback(null, testString);

  }
};
