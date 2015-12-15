var extend = require("node.extend");
var imageService = require("../services/image-service");

module.exports = function (app) {
  app.get("/" + App.serviceName + "/:dimension.:contentType", function (req, res, next) {
    var p = req.params;
    var q = req.query;
    var options = extend({}, App.networkSettings, {
      delay: q.delay,
      contentType: p.contentType,
      maxAge: q.maxAge,
      expiryDate: q.expiryDate
    });

    imageService.createImage(req, function (err, image) {
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