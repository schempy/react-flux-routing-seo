'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var AppHandler = require('./handlers/AppHandler.jsx');
var ProductHandler = require('./handlers/ProductHandler.jsx');

/**
 * Define routes. Each route will have a handler to deal with the
 * route.
 */
var Routes = (
  <Route name="app" path="/" handler={AppHandler}>
    <Route name="products" path="/products/:category" handler={ProductHandler}/>
  </Route>
);

module.exports = Routes;
