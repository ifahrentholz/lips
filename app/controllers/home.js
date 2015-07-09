module.exports = function(app){
  app.get('/', function(req, res, next) {
    res.render('home/index', { title: 'Express' });
  });
};