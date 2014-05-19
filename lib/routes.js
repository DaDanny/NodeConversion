'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    currency = require('./controllers/Currency'),
    txnHistory = require('./controllers/txnHistory');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);

  // Route for Currency Conversion
  app.get('/paypal/updateconversion', currency.getJSON);
  app.get('/paypal/allCurrency', currency.allCurrency);

  app.get('/paypal/txnactivity', txnHistory.allHistory);
  

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};