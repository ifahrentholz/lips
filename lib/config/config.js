var pkg = require('../../package.json');

module.exports = {
  version: pkg.version,
  namespace: 'lips',
  port: 3000,
  delay: 0,
  bg: 'bada55',
  contentType: 'png',
  maxAge: 3153600,
  noLog: false,
  expiryDate: new Date(),
  env: "development",
  fontFamily: 'Arial.ttf',
  txtsize: '24px',
  txtclr: '000'
};