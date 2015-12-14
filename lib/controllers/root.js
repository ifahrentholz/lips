var imageService = require("../services/image-service");

module.exports = function (app) {
  app.get("/" + App.serviceName + "/:dimension.:imageType", function (req, res, next) {
    imageService.createImage(req, function (err, testString) {
      console.log(testString)
      res.send("end");
    });
  });
};