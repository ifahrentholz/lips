module.exports = function(app){
  app.get('/lips/', function(req, res, next) {
    res.send("hello");
  });
};