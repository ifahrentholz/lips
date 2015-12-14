module.exports = function (app) {
  app.get("/" + App.serviceName + "/test", function (req, res, next) {
    res.render("test/index");
  });
};
