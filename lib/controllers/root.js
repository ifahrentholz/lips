var App = require("../config/app").App;
var extend = require("node.extend");
var imageService = require("../services/image-service");

module.exports = function (app) {
  app.get("/" + App.settings.namespace + "/:dimension.:contentType", function (req, res, next) {
    var p = req.params;
    var q = req.query;
    var options = extend({}, App.settings, {
      fontSize: q.fontSize,
      fontColor: q.fontColor,
      fill: q.fill,
      width: parseInt(p.dimension.split("x")[0], 10),
      height: parseInt(p.dimension.split("x")[1], 10),
      text: q.text,
      delay: q.delay,
      contentType: p.contentType,
      maxAge: q.maxAge,
      expiryDate: q.expiryDate
    });

    imageService.createImage(options, function (err, image) {
      if (err) { console.log(err); return; }

      res.setHeader("Content-Type", "image/" + options.contentType);
      res.setHeader("Cache-Control", "public, max-age=" + options.maxAge);
      res.setHeader("Expires", options.expiryDate);
      res.setHeader("Last-Modified", options.expiryDate);

      if (options.delay) {
        setTimeout(function(){
          res.send(image);
        }, options.delay);
      }
      else {
        res.send(image);
      }
    });

  });
};