'use strict';

var React = require('react/addons');
var Routes = require('../lib/Routes.jsx');
var Router = require('react-router');

/**
 * Render a ReactJS view. The view is determined from the 
 * URL path. 
 *
 * @param {string} path The URL.
 * @param {object} properties Contains the properties that a React component needs.
 * @param {function} callback
 */
function renderAppToString(path, properties, callback) {
  Router.run(Routes, path, function (Handler, state) {
    var html = React.renderToString(React.createFactory(Handler)(properties));

    callback(html);
  });
}

module.exports = renderAppToString;
