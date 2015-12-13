var imageService = App.require("services/image-service");

module.exports = function (app) {
  app.get("/:dimension.:imageType", function (req, res, next) {
    var image = imageService.init();
    res.send(image);
  });
};