'use strict';

require('node-jsx').install({ extension: '.jsx' });
var http = require('http');
var router = require('routes')();
var ejs = require('ejs');
var fs = require('fs');
var ecstatic = require('ecstatic')(__dirname + '/static');
var serialize = require('serialize-javascript');
var renderAppToString = require('./lib/renderAppToString');
var products = require('./data/products');
var categories = require('./data/categories');
var ejsTemplate = fs.readFileSync(__dirname + '/views/index.ejs', 'utf8');

// Routes
router.addRoute('/', function (req, res, params) {
  var stateOutput = {};

  // Set the categories.
  stateOutput.categories = categories;

  // Render the React application in the ejs template.
  renderAppToString(req.url, { categories: categories }, function (html) {
    res.write(ejs.render(ejsTemplate, {
      appOutput: html,
      stateOutput: 'window.App=' + serialize(stateOutput) + ';'
    }));  

    res.end();
  });

});

router.addRoute('/products/:product', function (req, res, params) {
  var stateOutput = {};

  // Set the categories and products.
  stateOutput.categories = categories;
  stateOutput.products = products[params.product];

  // Render the React application in the ejs template.
  renderAppToString(req.url, { categories: categories, products: stateOutput.products }, function (html) {
    res.write(ejs.render(ejsTemplate, {
      appOutput: html,
      stateOutput: 'window.App=' + serialize(stateOutput) + ';'
    }));  

    res.end();
  });  
});

// Route for API.
router.addRoute('/api/products/:category', function (req, res, params) {
    res.setHeader('content-type', 'application/json');
    res.write(serialize(products[params.category]));
    res.end();
});

var server = http.createServer(function (req, res) {
  var m = router.match(req.url);
  if (m) m.fn(req, res, m.params);
  else ecstatic(req, res);
});

server.listen(5000, function () {
  console.log('listening on :' + server.address().port);
});

