'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var AppHandler = require('./handlers/AppHandler.jsx');
var IndexHandler = require('./handlers/IndexHandler.jsx');
var ProductHandler = require('./handlers/ProductHandler.jsx');

/**
 * Define routes. Each route will have a handler to deal with the 
 * route.
 */
var Routes = (
  /* jshint ignore:start */
  <Route handler={AppHandler}>
    <Route name="index" path="/" handler={IndexHandler}>
      <Route name="products" path="/products/:category" handler={ProductHandler}/>
    </Route>
  </Route>
  /* jshint ignore:end */

);

module.exports = Routes;
