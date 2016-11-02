var pkg = require('../../package.json');

module.exports = {
  version: pkg.version,
  namespace: 'lips',
  port: 3000,
  delay: 0,
  contentType: 'png',
  maxAge: 3153600,
  noLog: false,
  expiryDate: new Date(),
  env: "development",
  fontFamily: 'Arial.ttf',
  fontSize: '24px',
  fontColor: '000'
};