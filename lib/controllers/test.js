module.exports = function (app) {
  app.get("/" + App.settings.namespace + "/test", function (req, res, next) {
    res.render("test/index");
  });
};
